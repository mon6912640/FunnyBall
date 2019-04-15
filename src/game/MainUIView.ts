/**
 * @author: monkey.lu 
 * @date: 2019-03-31 20:36:33 
 */
class MainUIView extends monkey.BaseView {
    public view:main.UI_MainUIGUI;

    private _stageW: number = 0;
    private _stageH: number = 0;

    private _objectList:BaseObject[] = [];
    private _quad:Quadtree;

    constructor() {
        super();
    }
    //=============================== gettter and setter ================================
    //======================================= API =======================================
    public initView()
    {
        super.initView();
        this.view = main.UI_MainUIGUI.createInstance();

        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
    }

    public start()
    {
        this._stageW = fairygui.GRoot.inst.width
        this._stageH = fairygui.GRoot.inst.height;

        for(let i = 0; i<200; i++)
        {
            let t_obj = new ObjectCircle();
            t_obj.initView(50, 50, this._stageW, this._stageH);
            t_obj.id = i+1;
            this.view.addChild(t_obj.view);
            t_obj.x = this.getInitRandomPos(t_obj.width, this._stageW);
            if(t_obj.x > (this._stageW-t_obj.width))
                console.log("fuckx", t_obj.x);
            t_obj.y = this.getInitRandomPos(t_obj.height, this._stageH);
            if(t_obj.y > (this._stageH-t_obj.height))
                console.log("fucky", t_obj.y);

            // t_obj.speed = 10+monkey.MathUtil.RandomInt(10);
            // t_obj.speed = 5+monkey.MathUtil.RandomInt(5);
            t_obj.speed = 3;
            t_obj.angle = this.getAngle();

            this._objectList.push(t_obj);
        }

        this._quad = new Quadtree(0, new egret.Rectangle(0, 0, this._stageW, this._stageH));

        this.view.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);

        monkey.SimpleTimer.ins().addTimer(this.onTimer, this, 3000, 1)
    }

    private onTimer()
    {
        monkey.EventUtil.register(true, this.view.m_btnStop, egret.TouchEvent.TOUCH_TAP, this.onClickHandler, this);
    }

    //================================ override method ==================================
    //================================= private method ==================================
    private _pause = false;
    private onClickHandler(e:egret.TouchEvent)
    {
        this._pause != this._pause;
    }

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
    private _maxHitCount:number;
    private _minHitCount:number;
    private _totalHitCount:number = 0;
    private _hitTime:number = 0;
    private _averageCount = 0;
    private onEnterFrameHandler(e:egret.Event)
    {
        if(this._pause)
            return;
        // monkey.TimeUtil.markTs();
        let t_hitCount = 0;
        this._quad.clear();
        for(let v of this._objectList)
        {
            v.x += v.speedX;
            v.y += v.speedY;
            v.checkEdge();

            this._quad.insert(v);

            v.handleHitTest(false);
            v.resetBeforeHitTest();//重置碰撞检测状态
        }
        
        let t_resultList:BaseObject[] = [];
        for(let v of this._objectList)
        {
            if(v.hitTestFlag)
                continue;
            t_resultList.length = 0;
            this._quad.retrieve(v, t_resultList); //检索对象所在区间的对象列表
            // console.log("检索对象数量="+t_resultList.length);
            
            for(let v1 of t_resultList)
            {
                if(v == v1)
                    continue;
                if(v.checkHadHitTest(v1))
                    continue;
                //碰撞检测
                //参考网址 https://github.com/JChehe/blog/issues/8
                let t_hitFlag = HitTestMgr.hitTest(v, v1);
                t_hitCount++;
                v.markCheckHittest(v1);
                v1.markCheckHittest(v);
                if(t_hitFlag)
                {
                    v.hitTestFlag = true; //记录碰撞检测状态
                    v1.hitTestFlag = true;
                    v.handleHitTest(t_hitFlag);
                    v1.handleHitTest(t_hitFlag);
                    continue;
                }
            }
        }

        //算法性能量化数据
        this._totalHitCount += t_hitCount;
        this._hitTime++;
        this._averageCount = ~~(this._totalHitCount/this._hitTime);

        if(this._maxHitCount === undefined || t_hitCount > this._maxHitCount)
            this._maxHitCount = t_hitCount;
        if(this._minHitCount === undefined || t_hitCount < this._minHitCount)
            this._minHitCount = t_hitCount;

        // monkey.TimeUtil.showMarkTs("用时");
        console.log("碰撞检测次数="+t_hitCount, "max="+this._maxHitCount, "min="+this._minHitCount, "avg="+this._averageCount);
        
    }
}