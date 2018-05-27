/**
 * @author: monkey.lu 
 * @date: 2018-05-06 14:28:44 
 */
class BaseObject extends egret.Sprite {

    private _width: number = 0;
    private _height: number = 0;
    private _edgeW: number = 0;
    private _edgeH: number = 0;

    /** 方向速度 */
    private _speed: number = 0;
    /** 角度 */
    private _angle: number = 0;

    private _speedXChange:boolean = false;
    private _speedYChange:boolean = false;

    private _testBtn: eui.Button;

    constructor() {
        super()
    }

    //=============================== gettter and setter ================================
    private _radian:number = 0;
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

    private _speedX:number = 0;
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

    private _speedY:number = 0;
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
    }

    public get width(): number {
        return this._width;
    }

    public set height(value: number) {
        this._height = value;
    }

    public get height(): number {
        return this._height;
    }

    //======================================= API =======================================
    public initView(pW: number, pH: number, pEdgeW: number, pEdgeH: number) {
        this.width = pW;
        this.height = pH;

        this._edgeW = pEdgeW;
        this._edgeH = pEdgeH;

        // this.graphics.beginFill(0);
        // this.graphics.drawRect(-this.width/2, -this.height/2, this.width, this.height);
        // this.graphics.endFill();

        this._testBtn = new eui.Button();
        this._testBtn.width = this.width;
        this._testBtn.height = this.height;
        this._testBtn.x = -this.width / 2;
        this._testBtn.y = -this.height / 2;
        this.addChild(this._testBtn);
        // this._testBtn.skinName = 

        this._testBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHandler, this);
    }

    /** 检查边界，修正角度 */
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

    //================================ override method ==================================

    //================================= private method ==================================

    //===================================== Handler =====================================
    private onClickHandler(e: egret.TouchEvent) {
        console.log(this.x, this.y);
    }
}