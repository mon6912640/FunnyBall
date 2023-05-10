/**
 * 网格索引节点
 * @author: lujiahao 
 * @date: 2019-04-17 17:15:06 
 */
class GridNode {

    //============== 静态管理 ===================
    private static _pool:GridNode[] = [];
    public static create(pLevel:number, pBounds:egret.Rectangle):GridNode
    {
        let t_obj = this._pool.pop();
        if(!t_obj)
            t_obj = new GridNode();
        t_obj.init(pLevel, pBounds);
        return t_obj;
    }

    public static release(pObj:GridNode)
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
    private _objectList:IQuadTreeObj[];
    /** 区域边界 */
    private _bounds:egret.Rectangle;
    /** 子节点列表 */
    private _nodeList:GridNode[];
    /** 父节点 */
    public parent:GridNode;

    constructor() {
    }

    //========================================= 协议相关 ========================================
    //=========================================== API ==========================================
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

    public clear()
    {
        this._objectList.length = 0; 

        for(let i = this._nodeList.length-1; i>=0; i--)
        {
            let t_node = this._nodeList[i];
            if(t_node)
            {
                t_node.clear();
                GridNode.release(t_node);
            }
        }
        this._nodeList.length = 0;
    }

    /**
     * 插入对象
     * @param pObj 
     */
    public insert(pObj:IQuadTreeObj)
    {
    }
    //===================================== private method =====================================
    private split()
    {
    }
    //======================================== handler =========================================
}