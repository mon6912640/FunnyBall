/**
 * 基础对象类
 * @author: monkey.lu 
 * @date: 2018-05-06 14:28:44 
 */
class BaseObject extends egret.HashObject implements QObject{

    protected _width: number = 0;
    protected _height: number = 0;
    protected _edgeW: number = 0;
    protected _edgeH: number = 0;

    public view:fairygui.GComponent;

    /** 对象类型(ObjectType有对应枚举) */
    public type:number = 0;

    /** 方向速度 */
    protected _speed: number = 0;
    /** 角度 */
    protected _angle: number = 0;

    /** x轴速度改变标识 */
    protected _speedXChange:boolean = false;
    /** y轴速度改变标识 */
    protected _speedYChange:boolean = false;

    /** 是否检测过碰撞（下次检测前会被重置） */
    public hitTestFlag = false;
    /** 曾经碰撞检测过的对象映射表（下次检测前会被重置） */
    protected _checkedMap:{[hashCode:number]:boolean} = {};

    constructor() {
        super();
    }

    //=============================== gettter and setter ================================
    protected _id: number = 0;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    protected _radian:number = 0;
    /** 弧度 */
    public get radian(): number {
        return this._radian;
    }

    public get speed(): number {
        return this._speed;
    }
    public set speed(v: number) {
        if(this._speed == v)
            return;
        this._speed = v;
        this._speedXChange = true;
        this._speedYChange = true;
    }

    public get angle(): number {
        return this._angle;
    }
    public set angle(v: number) {
        if(this._angle == v)
            return;
        this._angle = v;
        this._radian = this._angle * Math.PI / 180;
        this._speedXChange = true;
        this._speedYChange = true;
    }

    protected _speedX:number = 0;
    /**
     * x轴速度
     */
    public get speedX(): number {
        if(this._speedXChange)
        {
            if (this.angle == 0)
                this._speedX = this.speed;
            else if (this.angle == 180)
                this._speedX = -this.speed;
            else if (this.angle == 90 || this.angle == 270)
                this._speedX = 0;
            else
                this._speedX = Math.cos(this.radian) * this.speed;

            this._speedXChange = false;
        }
        return this._speedX;
    }

    protected _speedY:number = 0;
    /**
     * y轴速度
     */
    public get speedY(): number {
        if(this._speedYChange)
        {
            if (this.angle == 270)
                this._speedY = this.speed;
            else if (this.angle == 90)
                this._speedY = -this.speed;
            else if (this.angle == 0 || this.angle == 180)
                this._speedY = 0;
            else
                this._speedY = -Math.sin(this.radian) * this.speed;

            this._speedYChange = false;
        }
        return this._speedY;
    }

    public set width(value: number) {
        this._width = value;
        if(this.view)
            this.view.width = value;
    }
    public get width(): number {
        return this._width;
    }

    public set height(value: number) {
        this._height = value;
        if(this.view)
            this.view.height = value;
    }
    public get height(): number {
        return this._height;
    }

    protected _x: number;
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
        if(this.view)
            this.view.x = value;
    }

    protected _y: number;
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
        if(this.view)
            this.view.y = value;
    }

    //======================================= API =======================================
    public initView(pW: number, pH: number, pEdgeW: number, pEdgeH: number) {
        this.initType();

        this.view.touchable = false;

        this.width = pW;
        this.height = pH;

        this._edgeW = pEdgeW;
        this._edgeH = pEdgeH;

        // this.graphics.beginFill(0);
        // this.graphics.drawRect(-this.width/2, -this.height/2, this.width, this.height);
        // this.graphics.endFill();
    }

    /**
     * 初始化类型，由之类重写
     */
    protected initType()
    {
        //由之类重写
    }

    /**
     * 处理碰撞检测方法
     * @param pObj 
     */
    public handleHitTest(pFlag:boolean)
    {
        //由子类重写
    }

    public markCheckHittest(pObj:BaseObject)
    {
        this._checkedMap[pObj.hashCode] = true;
    }

    public checkHadHitTest(pObj:BaseObject):boolean
    {
        return this._checkedMap[pObj.hashCode];
    }

    /** 重置碰撞检测的状态 */
    public resetBeforeHitTest()
    {
        this.hitTestFlag = false;
        this._checkedMap = {};
    }

    /** 
     * 检查边界，修正角度
     * （默认对象的注册点在左上角，如果对象注册点不在左上角，需要子类重写该方法） 
     */
    public checkEdge() {
        if (this.y < 0) {
            this.y = 0;
            this.angle = 360 - this.angle;
        }
        else if (this.y > this._edgeH) {
            this.y = this._edgeH;
            this.angle = 360 - this.angle;
        }
        else if (this.x < 0) {
            this.x = 0;
            this.angle = 540 - this.angle;
        }
        else if (this.x > this._edgeW) {
            this.x = this._edgeW;
            this.angle = 540 - this.angle;
        }
    }

    /**
     * 判断物体属于哪个象限节点
     * -1指当前节点在象限之间的边界上（压线），不属于四个象限节点，而属于父节点
     * （默认对象的注册点在左上角，如果对象注册点不在左上角，需要子类重写该方法）
     * @param pBounds 
     */
    public getIndex(pBounds:egret.Rectangle):number
    {
        let t_index = -1;

        //水平和竖直中线
        let t_xMidLine = pBounds.x + (pBounds.width >> 1);
        let t_yMidLine = pBounds.y + (pBounds.height >> 1);

        //物体完全位于上面两个象限区域
        let t_isInTop = (this.y+this.height < t_yMidLine);
        //物体完全位于下面两个象限区域
        let t_isInBottom = (this.y > t_yMidLine);

        if(this.x+this.width < t_xMidLine)
        {
            if(t_isInTop)
                t_index = 1; //第二象限
            else if(t_isInBottom)
                t_index = 2; //第三象限
        }
        else if(this.x > t_xMidLine)
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