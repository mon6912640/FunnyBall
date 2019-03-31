/**
 * 游戏入口
 * @author: monkey.lu 
 * @date: 2018-05-06 14:34:15 
 */
class GameEntry extends egret.Sprite {
    private _stageW: number = 0;
    private _stageH: number = 0;

    private _objectList:BaseObject[] = [];
    private _quad:Quadtree;

    constructor() {
        super();
    }
    
    //=============================== gettter and setter ================================
    //======================================= API =======================================
    public start() {
        this._stageW = this.stage.stageWidth;
        this._stageH = this.stage.stageHeight;

        this.graphics.clear();
        this.graphics.beginFill(0xffffff);
        this.graphics.drawRect(0, 0, this._stageW, this._stageH);
        this.graphics.endFill();

        for (let i = 0; i < 100; i++) {
            let t_obj = new BaseObject();
            t_obj.initView(20, 20, this._stageW, this._stageH);
            this.addChild(t_obj);
            t_obj.x = this.getInitRandomPos(t_obj.width, this._stageW);
            if(t_obj.x > (this._stageW-t_obj.width))
                console.log("fuckx", t_obj.x);
            t_obj.y = this.getInitRandomPos(t_obj.height, this._stageH);
            if(t_obj.y > (this._stageH-t_obj.height))
                console.log("fucky", t_obj.y);

            t_obj.speed = 10+monkey.MathUtil.RandomInt(10);
            t_obj.angle = this.getAngle();
            // console.log(t_obj.speedX);
            // console.log(t_obj.speedY);
            this._objectList.push(t_obj);
        }

        this._quad = new Quadtree(0, new egret.Rectangle(0, 0, this._stageW, this._stageH));

        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHandler, this);
    }

    //================================ override method ==================================
    //================================= private method ==================================
    private getInitRandomPos(pObjW:number, pStageW:number):number
    {
        return pObjW+monkey.MathUtil.RandomInt(pStageW-pObjW*2);
    }

    private getAngle():number
    {
        do {
            var t_angle = monkey.MathUtil.RandomInt(360);
        } while (t_angle % 90 == 0);
        return t_angle;
    }

    //===================================== Handler =====================================
    private onClickHandler(e:egret.TouchEvent)
    {
        console.log("fuck");
    }

    private onEnterFrameHandler(e:egret.Event)
    {
        // monkey.TimeUtil.markTs();
        this._quad.clear();
        for(let v of this._objectList)
        {
            v.x += v.speedX;
            v.y += v.speedY;
            v.checkEdge();

            this._quad.insert(v);
        }
        // monkey.TimeUtil.showMarkTs();

        let t_resultList:QObject[] = [];
        for(let v of this._objectList)
        {
            t_resultList.length = 0;
            this._quad.retrieve(v, t_resultList);

            for(let v1 of t_resultList)
            {
                //TODO 碰撞检测
                //参考网址 https://github.com/JChehe/blog/issues/8
            }
        }
    }
}