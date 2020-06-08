/**
 * 红点管理器
 * @author: lujiahao 
 * @date: 2018-05-02 10:03:24 
 */
class ReddotMgr {
    private static _instance: ReddotMgr;
    public static ins(): ReddotMgr {
        if (!this._instance)
            this._instance = new ReddotMgr();
        return this._instance;
    }

    private _voMap: { [key: string]: ReddotVo } = {};
    /** 显示id与红点key的映射 */
    private _disUidKeyMap: { [disUid: number]: string } = {};

    /** 功能开启id与红点数据的映射表 */
    private _funIdVoMap: { [funId: number]: ReddotVo } = {};
    private _funOpenInit: boolean = false;

    constructor() {
        let t = this;
        //初始化红点归属关系一般放在这里，当然也可以运行时调用

    }

    //========================================= 协议相关 ========================================
    //=========================================== API ==========================================
    /**
     * 初始化键关系
     * @param pKey 父节点键
     * @param pChildKeys 所属子节点键数组
     */
    public initKey(pKey: any, pChildKeys: any[]) {
        let t_parentVo = this.getVoByKey(pKey, true);
        for (let v of pChildKeys) {
            let t_childVo = this.getVoByKey(v, true);
            if (t_parentVo.childrenVoList.indexOf(t_childVo) < 0) {
                t_parentVo.childrenVoList.push(t_childVo);
            }

            if (t_childVo.parentVoList.indexOf(t_parentVo) < 0) {
                t_childVo.parentVoList.push(t_parentVo);
            }
        }
    }

    /**
     * 建立红点与功能开启的关系映射
     * @param pReddotKey 红点key ReddotEnum有枚举
     * @param pFunId 功能开启id FunOpenType有枚举
     */
    public buildFunOpenMap(pReddotKey: any, pFunId: number) {
        let t_reddotVo = this.getVoByKey(pReddotKey, true);
        if (t_reddotVo) {
            this._funIdVoMap[pFunId] = t_reddotVo;
        }

        if (!this._funOpenInit) {
            //TODO 功能开启事件侦听
            // GEventMgr.ins().register(true, FunOpenEvent.FUN_OPEN, this.onFunOpenHandler, this);
            this._funOpenInit = true;
        }
        // egret.callLater(this.onFunOpenHandler, this);
    }

    public registerEvent(flag, pKey: any, pDis: fairygui.GObject) {
        let t = this;
        if (flag) {
            t.register(pKey, pDis)
        } else {
            t.unregister(pDis);
        }
    }
    /**
     * 注册红点与显示对象的关联（显示对象是ui编辑器里面的红点或者代表红点的显示对象）
     * @param pKey 
     * @param pDis 
     */
    public register(pKey: any, pDis: fairygui.GObject) {
        if (!pDis || !pDis.displayObject)
            return;

        let t_uid = monkey.ObjectUtils.getObjectUniqueId(pDis);
        let t_oldKey = this._disUidKeyMap[t_uid];
        if (t_oldKey) {
            if (t_oldKey == pKey) //相同key不做处理
                return;
            else
                this.unregister(pDis); //不同key则先移除与原先的绑定
        }

        let t_vo = this.getVoByKey(pKey, true);
        t_vo.addDis(pDis);

        this._disUidKeyMap[t_uid] = pKey;
    }

    /**
     * 卸载红点与显示对象的关联（可在界面销毁的时候调用，也可在关闭界面的时候）
     * @param pDis 
     */
    public unregister(pDis: fairygui.GObject) {
        let t_uid = monkey.ObjectUtils.getObjectUniqueId(pDis);
        let t_key = this._disUidKeyMap[t_uid];

        let t_vo = this.getVoByKey(t_key);
        if (!t_vo)
            return;
        t_vo.removeDis(pDis);
        delete this._disUidKeyMap[t_uid];
    }

    /**
     * 设置一个红点值
     * @param pKey ReddotEnum有对应枚举
     * @param pValue 0不显示红点 1显示红点
     */
    public setValue(pKey: any, pValue: number) {
        let t_vo = this.getVoByKey(pKey, true);
        t_vo.setValue(pValue);
    }

    /**
     * 获取一个红点值
     * @param pKey 
     */
    public getValue(pKey: any): number {
        let t_vo = this.getVoByKey(pKey);
        if (t_vo)
            return t_vo.value;
        return 0;
    }

    //===================================== private method =====================================
    /**
     * 通过key获取vo
     * @param pKey 
     * @param pCreateNew [pCreateNew=false] 是否创建新实例 默认不创建
     */
    private getVoByKey(pKey: any, pCreateNew: boolean = false): ReddotVo {
        if (!pCreateNew)
            return this._voMap[pKey];
        else {
            let t_vo = this._voMap[pKey];
            if (!t_vo) {
                t_vo = new ReddotVo();
                t_vo.key = pKey;
                this._voMap[t_vo.key] = t_vo;
            }
            return t_vo;
        }
    }

    //======================================== handler =========================================
    // /** 功能开放处理 */
    // private onFunOpenHandler(e: egret.Event) {
    //     if (e) {
    //         t_check = false;
    //         let t_data: { idList: number[], viewNameList: string[] } = e.data;
    //         if (t_data && t_data.idList) {
    //             for (let v of t_data.idList) {
    //                 if (this._funIdVoMap[v]) {
    //                     t_check = true;
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    //     else {
    //         var t_check: boolean = true;
    //     }

    //     if (!t_check)
    //         return;

    //     for (let k in this._funIdVoMap) {
    //         let t_reddotVo = this._funIdVoMap[k];
    //         if (FunOpenManager.ins().checkIsOpenByFunId(~~k))
    //             t_reddotVo.setLock(false);
    //         else
    //             t_reddotVo.setLock(true);
    //     }
    // }
}