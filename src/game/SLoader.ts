/**
 * 重载fgui的GLoader
 * @author: lujiahao 
 * @date: 2019-04-16 15:29:06 
 */
class SLoader extends fairygui.GLoader {
    constructor() {
        super();
    }
    //=========================================== API ==========================================
    
    protected loadContent()
    {
        super.loadContent();
    }

    protected loadFromPackage(itemURL: string)
    {
        super.loadFromPackage(itemURL);
    }

    protected loadExternal()
    {
        super.loadExternal();
    }

    protected freeExternal(texture: egret.Texture)
    {
        super.freeExternal(texture);
    }

    protected onExternalLoadSuccess(texture: egret.Texture)
    {
        super.onExternalLoadSuccess(texture);
    }

    protected onExternalLoadFailed()
    {
        super.onExternalLoadFailed();
    }
    //===================================== private method =====================================
    //======================================== handler =========================================
}