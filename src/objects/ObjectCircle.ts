/**
 * @author: monkey.lu 
 * @date: 2019-03-31 20:44:53 
 */
class ObjectCircle extends BaseObject {
    
    public view:BaseItem;

    constructor() {
        super();
        this.type = ObjectType.CIRCLE;
    }

    //=============================== gettter and setter ================================
    //======================================= API =======================================
    protected initType()
    {
        this.view = BaseItem.createInstance() as BaseItem;
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
    //================================ override method ==================================
    //================================= private method ==================================
    //===================================== Handler =====================================
}