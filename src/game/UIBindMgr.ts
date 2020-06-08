/**
 * UI绑定管理器
 * @author: monkey.lu 
 * @date: 2019-03-31 20:13:06 
 */
class UIBindMgr {
    constructor() {
    }
    
    //=============================== gettter and setter ================================
    static setup()
    {
        //处理FairyGui生成的绑定文件
        main.mainBinder.bindAll();

        //---------- 扩展GLoader ------------
        fairygui.UIObjectFactory.setLoaderExtension(SLoader);

        //----------------------------处理需要自定义重写的组件-----------------------------------
        let t = this;
        t.setCustomUI(main.UI_BaseItemGUI.URL, BaseItem);
    }

    //======================================= API =======================================
    public static setCustomUI(pUrl:string, pCls:any)
    {
        fairygui.UIObjectFactory.setPackageItemExtension(pUrl, pCls);
    }
    //================================ override method ==================================
    //================================= private method ==================================
    //===================================== Handler =====================================
}