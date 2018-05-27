/**
 * @author: monkey.lu 
 * @date: 2018-05-01 11:59:17 
 */
class Quadtree {

    /** 节点深度 */
    private _level:number;
    /** 物体对象数组 */
    private _objectList:any[];
    /** 区域边界 */
    private _bounds:egret.Rectangle;
    /** 四个子节点数组 */
    private _nodeList:Quadtree[];

    constructor(pLevel:number, pBounds:egret.Rectangle) {
        this._level = pLevel;
        this._objectList = [];
        this._bounds = pBounds;
        this._nodeList = [];
    }

    //=============================== gettter and setter ================================
    
    //======================================= API =======================================
    /**
     * 清空四叉树
     * @memberof Quadtree
     */
    public clear()
    {
        this._objectList.length = 0; //清空对象数据

        for(let i = this._nodeList.length-1; i>=0; i--)
        {
            if(this._nodeList[i])
            {
                this._nodeList[i].clear();
            }
        }
        this._nodeList.length = 0;
    }

    /**
     * 将物体插入四叉树
     * 如果当前节点物体个数超出容量了就将该节点分裂成四个
     * @param {egret.Rectangle} pRect 
     * @returns 
     * @memberof Quadtree
     */
    public insert(pRect:egret.Rectangle)
    {
        //如果已经分裂，则插入对应子象限节点
        if(this._nodeList[0])
        {
            let t_index = this.getIndex(pRect);
            if(t_index != -1)
            {
                this._nodeList[t_index].insert(pRect);
                return;
            }
        }

        //如果还没分裂或者插入到子节点失败，则留给父节点
        this._objectList.push(pRect);

        //
        if(this._objectList.length > QuadtreeEnum.MAX_OBJECTS_COUNT && this._level < QuadtreeEnum.MAX_LEVEL)
        {
            if(!this._nodeList)
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
     * @param {egret.Rectangle} pRect 
     * @returns {any[]} 
     * @memberof Quadtree
     */
    public retrieve(pRect:egret.Rectangle):any[]
    {
        let t_index = this.getIndex(pRect);
        if(t_index != -1 && this._nodeList[0])
        {
            return this._nodeList[t_index].retrieve(pRect);
        }
        return this._objectList;
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

        this._nodeList[0] = new Quadtree(this._level+1, new egret.Rectangle(t_x+t_subW, t_y, t_subW, t_subH));
        this._nodeList[1] = new Quadtree(this._level+1, new egret.Rectangle(t_x, t_y, t_subW, t_subH));
        this._nodeList[2] = new Quadtree(this._level+1, new egret.Rectangle(t_x, t_y+t_subH, t_subW, t_subH));
        this._nodeList[3] = new Quadtree(this._level+1, new egret.Rectangle(t_x+t_subW, t_y+t_subH, t_subW, t_subH));
    }

    /**
     * 判断物体属于哪个象限节点
     * -1指当前节点在象限之间的边界上（压线），不属于四个象限节点，而属于父节点
     * @private
     * @param {egret.Rectangle} pRect 
     * @memberof Quadtree
     */
    private getIndex(pRect:egret.Rectangle):number
    {
        let t_index = -1;

        //水平和竖直中线
        let t_verticalMidLine = this._bounds.x + (this._bounds.width >> 1);
        let t_horizontalMidLine = this._bounds.y + (this._bounds.height >> 1);

        //物体完全位于上面两个象限区域
        let t_isInTop = (pRect.y < t_horizontalMidLine && pRect.y+pRect.height <t_horizontalMidLine);
        //物体完全位于下面两个象限区域
        let t_isInBottom = (pRect.y > t_horizontalMidLine);

        if(pRect.x < t_verticalMidLine && pRect.x+pRect.width < t_verticalMidLine)
        {
            if(t_isInTop)
                t_index = 1; //第二象限
            else if(t_isInBottom)
                t_index = 2; //第三象限
        }
        else if(pRect.x > t_verticalMidLine)
        {
            if(t_isInTop)
                t_index = 0; //第一象限
            else if(t_isInBottom)
                t_index = 3; //第四象限
        }

        return t_index;
    }

    //===================================== Handler =====================================


}