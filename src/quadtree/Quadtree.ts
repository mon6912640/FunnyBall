/**
 * @author: monkey.lu 
 * @date: 2018-05-01 11:59:17 
 */
class Quadtree {

    //============== 静态管理 ===================
    private static _pool:Quadtree[] = [];
    public static create(pLevel:number, pBounds:egret.Rectangle):Quadtree
    {
        let t_obj = this._pool.pop();
        if(!t_obj)
            t_obj = new Quadtree();
        t_obj.init(pLevel, pBounds);
        return t_obj;
    }

    public static release(pObj:Quadtree)
    {
        pObj.recycle();
        this._pool.push(pObj);
    }
    //============== 静态管理 ===================




    /** 节点深度 */
    public level:number;
    /** 象限index */
    public nodeIndex = -1;
    /** 物体对象数组 */
    private _objectList:QObject[];
    /** 区域边界 */
    private _bounds:egret.Rectangle;
    /** 四个子节点数组 */
    private _nodeList:Quadtree[];
    /** 父节点 */
    public parent:Quadtree;

    constructor() {
    }

    //=============================== gettter and setter ================================
    //======================================= API =======================================
    public init(pLevel:number, pBounds:egret.Rectangle)
    {
        this.level = pLevel;
        this._bounds = pBounds;
        if(!this._objectList)
            this._objectList = [];
        if(!this._nodeList)
            this._nodeList = [];
    }

    public recycle()
    {
        this.level = 0;
        this.nodeIndex = -1;
        if(this._bounds)
        {
            egret.Rectangle.release(this._bounds);
            this._bounds = null;
        }
        this.parent = null;
    }

    /**
     * 清空四叉树
     * @memberof Quadtree
     */
    public clear()
    {
        //清空对象数据
        for(let v of this._objectList)
        {
            v.node = null;
        }
        this._objectList.length = 0; 

        for(let i = this._nodeList.length-1; i>=0; i--)
        {
            let t_node = this._nodeList[i];
            if(t_node)
            {
                t_node.clear();
                Quadtree.release(t_node);
            }
        }
        this._nodeList.length = 0;
    }

    /**
     * 将物体插入四叉树
     * 如果当前节点物体个数超出容量了就将该节点分裂成四个
     * @param {egret.Rectangle} pObj 
     * @returns 
     * @memberof Quadtree
     */
    public insert(pObj:QObject)
    {
        //如果已经分裂，则插入对应子象限节点
        if(this._nodeList.length > 0)
        {
            let t_index = this.getIndex(pObj);
            if(t_index != -1)
            {
                this._nodeList[t_index].insert(pObj);
                return;
            }
        }

        //如果还没分裂或者插入到子节点失败，则留给父节点
        this._objectList.push(pObj);
        pObj.level = this.level;
        pObj.index = this.nodeIndex;
        pObj.node = this;

        //
        if(this._objectList.length > QuadtreeEnum.MAX_OBJECTS_COUNT 
            && this.level < QuadtreeEnum.MAX_LEVEL)
        {
            if(this._nodeList.length == 0)
                this.split();

            for(let i = this._objectList.length-1; i>=0; i--)
            {
                let t_index = this.getIndex(this._objectList[i]);
                if(t_index != -1)
                {
                    //加到子节点中去，并从父节点移除
                    this._nodeList[t_index].insert(this._objectList[i]);
                    this._objectList.splice(i, 1);
                }
            }
        }
    }

    /**
     * 检索，返回符合象限的对象列表
     * @param pObj 
     * @param pResultList 
     */
    public retrieve(pObj:QObject, pResultList:QObject[]):QObject[]
    {
        let t_index = this.getIndex(pObj);
        if(t_index != -1 && this._nodeList.length > 0)
        {
            let t_node = this._nodeList[t_index];
            t_node.retrieve(pObj, pResultList);
        }
        for(let v of this._objectList)
        {
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
    private split()
    {
        let t_subW = this._bounds.width >> 1;
        let t_subH = this._bounds.height >> 1;

        let t_x = this._bounds.x;
        let t_y = this._bounds.y;

        let t_tempRect:egret.Rectangle;

        this._nodeList[0] = Quadtree.create(this.level+1, egret.Rectangle.create().setTo(t_x+t_subW, t_y, t_subW, t_subH));
        this._nodeList[0].nodeIndex = 0;
        this._nodeList[0].parent = this;
        this._nodeList[1] = Quadtree.create(this.level+1, egret.Rectangle.create().setTo(t_x, t_y, t_subW, t_subH));
        this._nodeList[1].nodeIndex = 1;
        this._nodeList[1].parent = this;
        this._nodeList[2] = Quadtree.create(this.level+1, egret.Rectangle.create().setTo(t_x, t_y+t_subH, t_subW, t_subH));
        this._nodeList[2].nodeIndex = 2;
        this._nodeList[2].parent = this;
        this._nodeList[3] = Quadtree.create(this.level+1, egret.Rectangle.create().setTo(t_x+t_subW, t_y+t_subH, t_subW, t_subH));
        this._nodeList[3].nodeIndex = 3;
        this._nodeList[3].parent = this;
    }

    /**
     * 判断物体属于哪个象限节点
     * -1指当前节点在象限之间的边界上（压线），不属于四个象限节点，而属于父节点
     * @private
     * @param {egret.Rectangle} pObj 
     * @memberof Quadtree
     */
    private getIndex(pObj:QObject):number
    {
        return pObj.getIndex(this._bounds);
    }

    //===================================== Handler =====================================


}