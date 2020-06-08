/**
 * 公共事件管理器
 * @author: lujiahao 
 * @date: 2018-10-20 10:50:23 
 */
class GEventMgr {
    protected static _instance: GEventMgr;
    public static ins(): GEventMgr {
        if (!this._instance) {
            this._instance = new GEventMgr();
        }
        return this._instance;
    }

    // private _typeListMap: { [type: string]: CallbackVo[] } = {};
    private _typeVoMap: { [type: string]: TypeVo } = {};
    private _voMap: { [key: string]: CallbackVo } = {};
    // private _callingValueMap: { [type: string]: number } = {};

    private _waittingList: { key: string, data: any }[] = [];
    private _waitingCallbackVoMap: { [key: string]: boolean } = {};

    private _tickRunning: boolean = false;

    /** 每帧调用回调的最大次数 */
    private FRAME_CALL_COUNT: number = 7;

    public constructor() {
    }

    /**
     * 发送事件
     * @param pType 事件类型
     * @param pData 附带数据
     * @param pImmediately 是否马上执行回调
     */
    public sendEvent(pType: string, pData: any = null, pImmediately: boolean = false) {
        let t = this;
        let t_typeVo = t._typeVoMap[pType];
        if (!t_typeVo || !t_typeVo.voList)
            return;
        let t_list = t_typeVo.voList;
        if (t_list.length < 1)
            return;

        t_typeVo.callingValue++; //做个标记，防止外部修改原始数组导致遍历错误。这里不直接调用list.concat()因为dispatch()方法调用通常比on()等方法频繁。
        if (pImmediately) //马上执行回调
        {
            let t_event = egret.Event.create(egret.Event, pType);
            t_event.data = pData;
            for (let i = 0; i < t_list.length; i++) {
                let t_vo = t_list[i];
                t_vo.callback.call(t_vo.thisObj, t_event);
            }
            egret.Event.release(t_event);
        }
        else {
            for (let i = 0; i < t_list.length; i++) {
                let t_vo = t_list[i];
                t._waittingList.push({ key: t_vo.key, data: pData }); //添加进等待列表
            }
        }
        t_typeVo.callingValue--;


        if (!t._tickRunning) {
            egret.startTick(t.onTickCallback, t);
            t._tickRunning = true;
        }
    }

    private onTickCallback(pTs: number): boolean {
        let t = this;
        // LogMgr.log("fuck========================事件等待列表数量="+t._waittingList.length);
        // let t_bagEventCount = 0;
        // for(let v of t._waittingList)
        // {
        //     let t_vo = t._voMap[v.key];
        //     if(t_vo && t_vo.type == BagEvent.BAG_CHANGE)
        //         t_bagEventCount++;
        // }
        // if(t_bagEventCount > 0)
        //     LogMgr.log("fuckyou=================背包事件等待数量", t_bagEventCount);

        let t_len = Math.min(t._waittingList.length, t.FRAME_CALL_COUNT);
        for (let i = 0; i < t_len; i++) {
            let t_obj = t._waittingList.shift();
            // delete t._waitingCallbackVoMap[t_key];

            let t_vo = t._voMap[t_obj.key];
            if (!t_vo)
                continue;

            let t_event = egret.Event.create(egret.Event, t_vo.type);
            t_event.data = t_obj.data;
            t_vo.callback.call(t_vo.thisObj, t_event);
            egret.Event.release(t_event);
        }

        if (t._waittingList.length < 1) {
            egret.stopTick(t.onTickCallback, t);
            t._tickRunning = false;
        }
        return false;
    }

    /**
     * 添加公共事件侦听
     * @param  {string} pType
     * @param  {Function} pListener
     * @param  {any} pThisObj
     * @param  {number} pPriority?
     */
    public addEvent(pType: string, pListener: Function, pThisObj: any, pPriority?: number) {
        let t = this;
        // t.addEventListener(pType, pListener, pThisObj, false, pPriority);

        let t_key = pType + monkey.ObjectUtils.getObjectUniqueId(pListener) + "_" + monkey.ObjectUtils.getObjectUniqueId(pThisObj);
        let t_vo = t.getVoByKey(t_key);
        if (t_vo)
            return;
        t_vo = CallbackVo.getObjFromPool();
        t_vo.type = pType;
        t_vo.key = t_key;
        t_vo.callback = pListener;
        t_vo.thisObj = pThisObj;
        t_vo.priority = ~~pPriority;

        let t_typeVo = t._typeVoMap[pType];
        if (!t_typeVo) {
            t_typeVo = new TypeVo();
            t_typeVo.type = pType;
            t._typeVoMap[pType] = t_typeVo;
        }
        else if (t_typeVo.callingValue !== 0) {
            t_typeVo.voList = t_typeVo.voList.concat();
        }
        let t_list = t_typeVo.voList;

        let t_insertIndex = -1;
        for (let i = 0; i < t_list.length; i++) {
            if (t_list[i].priority < t_vo.priority) {
                t_insertIndex = i;
                break;
            }
        }
        if (t_insertIndex > -1)
            t_list.splice(t_insertIndex, 0, t_vo);
        else
            t_list.push(t_vo);
        t._voMap[t_key] = t_vo;
    }

    /**
     * 移除公共事件侦听
     * @param  {string} pType
     * @param  {Function} pListener
     * @param  {any} pThisObj
     */
    public removeEvent(pType: string, pListener: Function, pThisObj: any) {
        let t = this;
        // t.removeEventListener(pType, pListener, pThisObj, false);

        let t_typeVo = t._typeVoMap[pType];
        if (!t_typeVo)
            return;
        let t_key = pType + monkey.ObjectUtils.getObjectUniqueId(pListener) + "_" + monkey.ObjectUtils.getObjectUniqueId(pThisObj);
        let t_vo = t.getVoByKey(t_key);
        if (!t_vo)
            return;
        let t_list = t_typeVo.voList;
        if (t_list.length < 1)
            return;

        if (t_typeVo.callingValue !== 0)
            t_typeVo.voList = t_list = t_list.concat();

        for (let i = t_list.length - 1; i >= 0; i--) {
            let t_vo = t_list[i];
            if (t_vo.key == t_key) {
                t_list.splice(i, 1);
                delete t._voMap[t_key];
                CallbackVo.recycleToPool(t_vo); //回收数据对象
                break;
            }
        }
    }


    /**
     * 集成了addEvent和removeEvent的方法，通过true或false能统一注册和反注册事件的入口
     * @param  {boolean} pFlag
     * @param  {string} pType
     * @param  {Function} pListener
     * @param  {any} pThisObj
     * @param  {number} pPriority?
     */
    public register(pFlag: boolean, pType: string, pListener: Function, pThisObj: any, pPriority?: number) {
        let t = this;
        if (pFlag)
            t.addEvent(pType, pListener, pThisObj, pPriority);
        else
            t.removeEvent(pType, pListener, pThisObj);
    }

    //=========================================== API ==========================================
    //===================================== private method =====================================
    private getVoByKey(pKey: string): CallbackVo {
        return this._voMap[pKey];
    }

    //======================================== handler =========================================
}

class TypeVo {
    public type: string = "";
    public callingValue: number = 0;
    public voList: CallbackVo[] = [];
    public waittingList: CallbackVo[] = [];

    public constructor() {
    }
}