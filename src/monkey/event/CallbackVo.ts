/**
 * @author: lujiahao 
 * @date: 2018-10-19 18:31:47 
 */
class CallbackVo {

    //============== 静态管理 ===================
    static _pool: CallbackVo[] = [];
    static getObjFromPool(): CallbackVo {
        let t_vo = this._pool.pop();
        if (!t_vo)
            t_vo = new CallbackVo();
        return t_vo;
    }

    static recycleToPool(pVo: CallbackVo) {
        pVo.recycle();
        this._pool.push(pVo);
    }
    //============== 静态管理 ===================

    public key: string = "";

    public type: string = "";
    public priority: number = 0;
    public data: any = null;

    public callback: Function = null;
    public thisObj: any = null;

    constructor() {
    }

    //=========================================== API ==========================================
    public recycle() {
        let t = this;
        t.key = "";
        t.type = "";
        t.data = null;
        t.callback = null;
        t.thisObj = null;
        t.priority = 0;
    }

    //===================================== private method =====================================
    //======================================== handler =========================================
}