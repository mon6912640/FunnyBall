/**
 * 基础对象类
 * @author: monkey.lu 
 * @date: 2018-05-06 14:28:44 
 */
class BaseObject extends egret.HashObject implements IQuadTreeObj {
    // node: Quadtree;
    // level: number;
    // index: number;

    protected _width: number = 0;
    protected _height: number = 0;
    protected _edgeW: number = 0;
    protected _edgeH: number = 0;

    public view: fairygui.GComponent;

    /** 对象类型(ObjectType有对应枚举) */
    public type: number = 0;

    dataType = 0;

    /** 方向速度 */
    protected _speed: number = 0;
    /** 角度 */
    protected _angle: number = 0;

    /** x轴速度改变标识 */
    protected _speedXChange: boolean = false;
    /** y轴速度改变标识 */
    protected _speedYChange: boolean = false;

    protected _xChange = false;
    protected _yChange = false;

    /** 是否检测过碰撞（下次检测前会被重置） */
    public hitTestFlag = false;
    /** 曾经碰撞检测过的对象映射表（下次检测前会被重置） */
    protected _checkedMap: { [id: number]: any } = {};

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

    // public get qid(): string {
    //     let t_qid: string;
    //     if (this.node) {
    //         let t_nodeLinkList: Quadtree[] = [];
    //         let t_node: Quadtree = this.node;
    //         do {
    //             t_nodeLinkList.push(t_node);
    //             t_node = t_node.parent;
    //         } while (t_node);

    //         let t_index = 0;
    //         for (let i = t_nodeLinkList.length - 1; i >= 0; i--, t_index++) {
    //             if (t_index == 0)
    //                 t_qid = t_nodeLinkList[i].nodeIndex.toString();
    //             else
    //                 t_qid += "_" + t_nodeLinkList[i].nodeIndex;
    //         }
    //     }
    //     return t_qid;
    // }

    protected _radian: number = 0;
    /** 弧度 */
    public get radian(): number {
        return this._radian;
    }

    public get speed(): number {
        return this._speed;
    }
    public set speed(v: number) {
        if (this._speed == v)
            return;
        this._speed = v;
        this._speedXChange = true;
        this._speedYChange = true;
    }

    public get angle(): number {
        return this._angle;
    }
    public set angle(v: number) {
        if (this._angle == v)
            return;
        this._angle = v;
        this._radian = this._angle * Math.PI / 180;
        this._speedXChange = true;
        this._speedYChange = true;
    }

    protected _speedX: number = 0;
    /**
     * x轴速度
     */
    public get speedX(): number {
        if (this._speedXChange) {
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

    protected _speedY: number = 0;
    /**
     * y轴速度
     */
    public get speedY(): number {
        if (this._speedYChange) {
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
        if (this.view)
            this.view.width = value;
    }
    public get width(): number {
        return this._width;
    }

    public set height(value: number) {
        this._height = value;
        if (this.view)
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
        if (this._x == value)
            return;
        this._x = value;
        this._xChange = true;
        if (this.view)
            this.view.x = value;
    }

    protected _y: number;
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        if (this._y == value)
            return;
        this._y = value;
        this._yChange = true;
        if (this.view)
            this.view.y = value;
    }

    protected _bounds: egret.Rectangle;
    public get bounds(): egret.Rectangle {
        if (!this._bounds) {
            let t_container = this.view.displayListContainer;
            if (t_container) {
                this._bounds = egret.Rectangle.create();
                this._bounds.setTo(t_container.x, t_container.y, t_container.width, t_container.height);
            }
        }

        if (this._bounds) {
            if (this._xChange) {
                this._bounds.x = this.view.displayListContainer.x;
                this._xChange = false;
            }

            if (this._yChange) {
                this._bounds.y = this.view.displayListContainer.y;
                this._yChange = false;
            }
        }
        return this._bounds;
    }

    //======================================= API =======================================
    public initView(pW: number, pH: number, pEdgeW: number, pEdgeH: number) {
        this.initType();

        this.view.touchable = false;

        this.width = pW;
        this.height = pH;

        this._edgeW = pEdgeW;
        this._edgeH = pEdgeH;
    }

    /**
     * 初始化类型，由之类重写
     */
    protected initType() {
        //由之类重写
    }

    /**
     * 处理碰撞检测方法
     * @param pObj 
     */
    public handleHitTest(pFlag: boolean) {
        //由子类重写
    }

    public markCheckHittest(pObj: BaseObject) {
        // this._checkedMap[pObj.id] = { "qid": pObj.qid, "index": pObj.index, "level": pObj.level };
        this._checkedMap[pObj.id] = true;
    }

    showMark() {
        //由子类重写
    }

    public checkHadHitTest(pObj: BaseObject): boolean {
        return this._checkedMap[pObj.id];
    }

    /** 重置碰撞检测的状态 */
    public resetBeforeHitTest() {
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
    //================================ override method ==================================

    //================================= private method ==================================

    //===================================== Handler =====================================
}