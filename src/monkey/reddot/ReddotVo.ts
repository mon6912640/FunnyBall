/**
 * @author: lujiahao 
 * @date: 2018-05-02 10:38:08 
 */
class ReddotVo {
    public key: string;
    public value: number = 0;

    public parentVoList: ReddotVo[] = [];
    public childrenVoList: ReddotVo[] = [];

    private _disMap: { [hashCode: number]: ReddotDisObject } = {};

    private _isLock: boolean = false;
    private _tempValue: number = 0;

    constructor() {
    }

    //=========================================== API ==========================================
    public setValue(pValue: number, pForce: boolean = false) {
        let t = this;
        if (t._isLock) {
            if (!pValue) //如果临时设置成负值则需要判断子红点状态
            {
                //检查子红点状态
                let t_hasReddot = false;
                for (let v of t.childrenVoList) {
                    if (v.value)
                        return;
                }
            }
            t._tempValue = pValue;
            return;
        }

        if (t.value == pValue)
            return;

        if (pValue) {
            t.value = pValue;
            //设置父红点状态
            for (let v of t.parentVoList) {
                v.setValue(1);
            }
        }
        else {
            if (!pForce) //强制设置的话无需检查子红点
            {
                //检查子红点状态
                for (let v of t.childrenVoList) {
                    if (v.value)
                        return;
                }
            }
            t.value = pValue;

            //设置父红点状态
            for (let v of t.parentVoList) {
                v.setValue(0);
            }
        }
        t.showOrHideReddot();
        GEventMgr.ins().sendEvent(ReddotEvent.REDDOT_VALUE_CHANGE, { key: t.key, value: t.value });
    }

    public setLock(pFlag: boolean) {
        let t = this;
        if (t._isLock == pFlag)
            return;

        if (pFlag) //锁上
        {
            //TODO 需要保存当前的状态值
            t._tempValue = t.value;

            //隐藏当前红点
            t.setValue(0, true);

            t._isLock = pFlag;
        }
        else //解锁
        {
            t._isLock = pFlag;
            //TODO 需要恢复之前保存的状态值
            t.setValue(t._tempValue);
            t._tempValue = 0;
        }
    }

    public addDis(pDis: fairygui.GObject) {
        let t = this;
        if (!pDis || !pDis.displayObject)
            return;
        let t_do = t._disMap[pDis.displayObject.hashCode];
        if (!t_do) {
            t_do = new ReddotDisObject();
            t_do.dis = pDis;
            t._disMap[pDis.displayObject.hashCode] = t_do;
        }

        //刚注册的显示对象需要检查红点是否已经显示了
        if (t.value)
            t_do.showOrHideRedot(true);
        else
            t_do.showOrHideRedot(false);
    }

    public removeDis(pDis: fairygui.GObject) {
        let t = this;
        if (!pDis || !pDis.displayObject)
            return;
        let t_do = t._disMap[pDis.displayObject.hashCode];
        if (!t_do)
            return;

        delete t._disMap[pDis.displayObject.hashCode];
        t_do.destroy();
    }

    //===================================== private method =====================================
    private showOrHideReddot() {
        let t = this;
        let t_flag = t.value > 0 ? true : false;
        for (let k in t._disMap) {
            let t_do = t._disMap[k];
            if (t_do) {
                if (t_do.dis && t_do.dis.displayObject)
                    t_do.showOrHideRedot(t_flag);
                else {
                    delete t._disMap[k];
                    t_do.destroy();
                }
            }
        }
    }

    //======================================== handler =========================================
}

class ReddotDisObject {
    public dis: fairygui.GObject = null;

    constructor() { }

    public showOrHideRedot(pFlag: boolean) {
        let t = this;
        if (pFlag)
            t.dis.visible = true;
        else
            t.dis.visible = false;
    }

    public destroy() {
        let t = this;
        t.showOrHideRedot(false);
        t.dis = null;
    }
}