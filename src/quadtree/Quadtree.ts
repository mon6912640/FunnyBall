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
            t_obj = new Quadtree(pLevel, pBounds);
        t_obj._level = pLevel;
        t_obj._bounds = pBounds;
        return t_obj;
    }

    public static release(pObj:Quadtree)
    {
        pObj.recycle();
        this._pool.push(pObj);
    }
    //============== 静态管理 ===================




    /** 节点深度 */
    private _level:number;
    /** 象限index */
    private _nodeIndex = -1;
    /** 物体对象数组 */
    private _objectList:QObject[];
    /** 区域边界 */
    private _bounds:egret.Rectangle;
    /** 四个子节点数组 */
    private _nodeList:Quadtree[];

    constructor(pLevel:number, pBounds:egret.Rectangle) {
        this._level = pLevel;
        this._bounds = pBounds;
        if(!this._objectList)
            this._objectList = [];
        if(!this._nodeList)
            this._nodeList = [];
    }

    //=============================== gettter and setter ================================
    //======================================= API =======================================
    public recycle()
    {
        this._level = 0;
        this._nodeIndex = -1
        if(this._bounds)
        {
            egret.Rectangle.release(this._bounds);
            this._bounds = null;
        }
    }

    /**
     * 清空四叉树
     * @memberof Quadtree
     */
    public clear()
    {
        this._objectList.length = 0; //清空对象数据

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

        //
        if(this._objectList.length > QuadtreeEnum.MAX_OBJECTS_COUNT 
            && this._level < QuadtreeEnum.MAX_LEVEL)
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
        pResultList = pResultList.concat(this._objectList);
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

        this._nodeList[0] = Quadtree.create(this._level+1, egret.Rectangle.create().setTo(t_x+t_subW, t_y, t_subW, t_subH));
        this._nodeList[0]._nodeIndex = 0;
        this._nodeList[1] = Quadtree.create(this._level+1, egret.Rectangle.create().setTo(t_x, t_y, t_subW, t_subH));
        this._nodeList[1]._nodeIndex = 1;
        this._nodeList[2] = Quadtree.create(this._level+1, egret.Rectangle.create().setTo(t_x, t_y+t_subH, t_subW, t_subH));
        this._nodeList[2]._nodeIndex = 2;
        this._nodeList[3] = Quadtree.create(this._level+1, egret.Rectangle.create().setTo(t_x+t_subW, t_y+t_subH, t_subW, t_subH));
        this._nodeList[3]._nodeIndex = 3;
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
        let t_index = -1;

        //水平和竖直中线
        let t_xMidLine = this._bounds.x + (this._bounds.width >> 1);
        let t_yMidLine = this._bounds.y + (this._bounds.height >> 1);

        //物体完全位于上面两个象限区域
        let t_isInTop = (pObj.y < t_yMidLine && pObj.y+pObj.height <t_yMidLine);
        //物体完全位于下面两个象限区域
        let t_isInBottom = (pObj.y > t_yMidLine);

        if(pObj.x < t_xMidLine && pObj.x+pObj.width < t_xMidLine)
        {
            if(t_isInTop)
                t_index = 1; //第二象限
            else if(t_isInBottom)
                t_index = 2; //第三象限
        }
        else if(pObj.x > t_xMidLine)
        {
            if(t_isInTop)
                t_index = 0; //第一象限
            else if(t_isInBottom)
                t_index = 3; //第四象限
        }

        //位于两条中线上 则为-1
        return t_index;
    }

    //===================================== Handler =====================================


}