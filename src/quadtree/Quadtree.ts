interface IQuadTreeObj {
    /** 包围盒边界 */
    bounds: egret.Rectangle;
}

/**
 * 四叉树索引节点
 * @author: monkey.lu 
 * @date: 2018-05-01 11:59:17 
 */
class Quadtree {

    /** 每个节点的对象容量 */
    static MAX_OBJECTS_COUNT: number = 4;
    /** 最大深度（四叉树的深度一般取4-7之间为最佳） */
    static MAX_LEVEL: number = 7;

    //============== 静态管理 ===================
    private static _pool: Quadtree[] = [];
    public static create(pLevel: number, pBounds: egret.Rectangle): Quadtree {
        let t_obj = this._pool.pop();
        if (!t_obj)
            t_obj = new Quadtree();
        t_obj.init(pLevel, pBounds);
        return t_obj;
    }

    public static release(pObj: Quadtree) {
        pObj.recycle();
        this._pool.push(pObj);
    }
    //============== 静态管理 ===================




    /** 节点深度 */
    public level: number;
    /** 象限index */
    public nodeIndex = -1;
    /** 物体对象数组 */
    private _objects: IQuadTreeObj[];
    /** 区域边界 */
    private _bounds: egret.Rectangle;
    /** 四个子节点数组 */
    private _nodes: Quadtree[];
    /** 父节点 */
    public parent: Quadtree;

    constructor() {
    }

    //=============================== gettter and setter ================================
    //======================================= API =======================================
    public init(pLevel: number, pBounds: egret.Rectangle) {
        this.level = pLevel;
        this._bounds = pBounds;
        if (!this._objects)
            this._objects = [];
        if (!this._nodes)
            this._nodes = [];
    }

    public recycle() {
        this.level = 0;
        this.nodeIndex = -1;
        if (this._bounds) {
            egret.Rectangle.release(this._bounds);
            this._bounds = null;
        }
        this.parent = null;
    }

    /**
     * 清空四叉树
     * @memberof Quadtree
     */
    public clear() {
        //清空对象数据
        this._objects.length = 0;
        for (let i = this._nodes.length - 1; i >= 0; i--) {
            let t_node = this._nodes[i];
            if (t_node) {
                t_node.clear();
                Quadtree.release(t_node);
            }
        }
        this._nodes.length = 0;
    }

    /**
     * 将物体插入四叉树
     * 如果当前节点物体个数超出容量了就将该节点分裂成四个
     * @param {egret.Rectangle} pObj 
     * @returns 
     * @memberof Quadtree
     */
    public insert(pObj: IQuadTreeObj) {
        //如果已经分裂，则插入对应子象限节点
        if (this._nodes.length > 0) {
            let t_index = this.getIndex(pObj);
            if (t_index != -1) {
                this._nodes[t_index].insert(pObj);
                return;
            }
        }

        //如果还没分裂或者插入到子节点失败，则留给父节点
        this._objects.push(pObj);

        if (this._objects.length > Quadtree.MAX_OBJECTS_COUNT
            && this.level < Quadtree.MAX_LEVEL) {
            if (this._nodes.length == 0)
                this.split();

            for (let i = this._objects.length - 1; i >= 0; i--) {
                let t_index = this.getIndex(this._objects[i]);
                if (t_index != -1) {
                    //加到子节点中去，并从父节点移除
                    this._nodes[t_index].insert(this._objects[i]);
                    this._objects.splice(i, 1);
                }
            }
        }
    }

    /**
     * 检索，返回符合象限的对象列表
     * @param pObj 
     * @param pResultList 
     */
    public retrieve(pObj: IQuadTreeObj, pResultList: IQuadTreeObj[]): IQuadTreeObj[] {
        if (this._nodes.length > 0) {
            let t_indices = this.getIndices(pObj); //对象范围在哪些象限内，跨象限的返回长度超过1
            // console.log("t_indices", this.level, t_indices);
            for (let i = 0; i < t_indices.length; i++) {
                this._nodes[t_indices[i]].retrieve(pObj, pResultList);
            }
        }
        for (let v of this._objects) {
            pResultList.push(v);
        }
        return pResultList;
    }

    //================================= private method ==================================
    /**
     * 将该节点切分成四个象限
     *    二  |   一
     * ———————————————
     *    三  |   四
     * @memberof Quadtree
     */
    private split() {
        let t_subW = this._bounds.width >> 1;
        let t_subH = this._bounds.height >> 1;

        let t_x = this._bounds.x;
        let t_y = this._bounds.y;

        this._nodes.length = 4;

        this._nodes[0] = Quadtree.create(this.level + 1, egret.Rectangle.create().setTo(t_x + t_subW, t_y, t_subW, t_subH));
        this._nodes[0].nodeIndex = 0;
        this._nodes[0].parent = this;
        this._nodes[1] = Quadtree.create(this.level + 1, egret.Rectangle.create().setTo(t_x, t_y, t_subW, t_subH));
        this._nodes[1].nodeIndex = 1;
        this._nodes[1].parent = this;
        this._nodes[2] = Quadtree.create(this.level + 1, egret.Rectangle.create().setTo(t_x, t_y + t_subH, t_subW, t_subH));
        this._nodes[2].nodeIndex = 2;
        this._nodes[2].parent = this;
        this._nodes[3] = Quadtree.create(this.level + 1, egret.Rectangle.create().setTo(t_x + t_subW, t_y + t_subH, t_subW, t_subH));
        this._nodes[3].nodeIndex = 3;
        this._nodes[3].parent = this;
    }

    /**
     * 判断物体属于哪个象限节点
     * -1指当前节点在象限之间的边界上（压线），不属于四个象限节点，而属于父节点
     * @private
     * @param {egret.Rectangle} pObj 
     * @memberof Quadtree
     */
    private getIndex(pObj: IQuadTreeObj): number {
        let t_index = -1;
        let t_qBounds = this._bounds;
        let t_objBounds = pObj.bounds;
        if (t_objBounds) {
            //水平和竖直中线
            let t_xMidLine = t_qBounds.x + (t_qBounds.width >> 1);
            let t_yMidLine = t_qBounds.y + (t_qBounds.height >> 1);

            //物体完全位于上面两个象限区域
            let t_isInTop = (t_objBounds.bottom < t_yMidLine);
            //物体完全位于下面两个象限区域
            let t_isInBottom = (t_objBounds.top > t_yMidLine);

            if (t_objBounds.right < t_xMidLine) {
                if (t_isInTop)
                    t_index = 1; //第二象限
                else if (t_isInBottom)
                    t_index = 2; //第三象限
            }
            else if (t_objBounds.left > t_xMidLine) {
                if (t_isInTop)
                    t_index = 0; //第一象限
                else if (t_isInBottom)
                    t_index = 3; //第四象限
            }
        }
        return t_index;
    }

    /**
     * 判断物品属于哪个象限节点，跨越多个象限时，返回所有符合条件的象限节点
     * @param pObj 
     * @returns 
     */
    private getIndices(pObj: IQuadTreeObj): number[] {
        let indices: number[] = [];
        let pBounds = this._bounds;
        let t_objBounds = pObj.bounds;
        if (t_objBounds) {
            //水平和竖直中线
            let t_xMidLine = pBounds.x + (pBounds.width >> 1);
            let t_yMidLine = pBounds.y + (pBounds.height >> 1);

            //物体完全位于上面两个象限区域
            let t_isInTop = (t_objBounds.bottom < t_yMidLine);
            //物体完全位于下面两个象限区域
            let t_isInBottom = (t_objBounds.top > t_yMidLine);

            //物体完全位于左边两个象限区域
            let t_isInLeft = (t_objBounds.right < t_xMidLine);
            //物体完全位于右边两个象限区域
            let t_isInRight = (t_objBounds.left > t_xMidLine);

            if (t_isInLeft) {
                if (t_isInTop)
                    indices.push(1); //第二象限
                else if (t_isInBottom)
                    indices.push(2); //第三象限
                else
                    indices.push(1, 2); //第二、三象限
            }
            else if (t_isInRight) {
                if (t_isInTop)
                    indices.push(0); //第一象限
                else if (t_isInBottom)
                    indices.push(3); //第四象限
                else
                    indices.push(0, 3); //第一、四象限
            }
            else {
                if (t_isInTop)
                    indices.push(0, 1); //第一、二象限
                else if (t_isInBottom)
                    indices.push(2, 3); //第三、四象限
                else
                    indices.push(0, 1, 2, 3); //所有象限
            }
        }
        return indices;
    }
    //===================================== Handler =====================================


}