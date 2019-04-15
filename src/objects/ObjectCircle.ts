/**
 * @author: monkey.lu 
 * @date: 2019-03-31 20:44:53 
 */
class ObjectCircle extends BaseObject {
    
    public view:BaseItem;

    private _urlNormal:string;
    private _urlHitTest:string;

    constructor() {
        super();
        this.type = ObjectType.CIRCLE;
        //圆的注册点在视点中心
    }

    //=============================== gettter and setter ================================
    public set id(value:number)
    {
        this._id = value;
        if(this.view)
            this.view.m_tfId.text = value+"";
    }
    //======================================= API =======================================
    protected initType()
    {
        super.initType();
        this.view = BaseItem.createInstance() as BaseItem;

        this.handleHitTest(false);
    }

    public handleHitTest(pFlag:boolean)
    {
        super.handleHitTest(pFlag);
        if(this._urlNormal === undefined)
            this._urlNormal = fairygui.UIPackage.getItemURL("main", "basecircle");
        if(this._urlHitTest === undefined)
            this._urlHitTest = fairygui.UIPackage.getItemURL("main", "basecircle_red");

        if(pFlag)
            this.view.m_bgLoader.url = this._urlHitTest;
        else
            this.view.m_bgLoader.url = this._urlNormal;
    }

    /** 检查边界，修正角度 */
    public checkEdge()
    {
        if(this.y - this.height/2 < 0)
        {
            this.y = this.height/2;
            this.angle = 360 - this.angle;
        }
        else if(this.y + this.height/2 > this._edgeH)
        {
            this.y = this._edgeH - this.height/2;
            this.angle = 360 - this.angle;
        }
        else if(this.x - this.width/2 < 0)
        {
            this.x = this.width/2;
            this.angle = 540 - this.angle;
        }
        else if(this.x + this.width/2 > this._edgeW)
        {
            this.x = this._edgeW - this.width/2;
            this.angle = 540 - this.angle;
        }
    }

    public getIndex(pBounds:egret.Rectangle):number
    {
        let t_index = -1;

        //水平和竖直中线
        let t_xMidLine = pBounds.x + (pBounds.width >> 1);
        let t_yMidLine = pBounds.y + (pBounds.height >> 1);

        //物体完全位于上面两个象限区域
        let t_isInTop = (this.y+this.height/2 < t_yMidLine);
        //物体完全位于下面两个象限区域
        let t_isInBottom = (this.y-this.height/2 > t_yMidLine);

        if(this.x+this.width/2 < t_xMidLine)
        {
            if(t_isInTop)
                t_index = 1; //第二象限
            else if(t_isInBottom)
                t_index = 2; //第三象限
        }
        else if(this.x-this.width/2 > t_xMidLine)
        {
            if(t_isInTop)
                t_index = 0; //第一象限
            else if(t_isInBottom)
                t_index = 3; //第四象限
        }

        return t_index;
    }
    //================================ override method ==================================
    //================================= private method ==================================
    //===================================== Handler =====================================
}