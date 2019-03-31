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
        fairygui.UIObjectFactory.setPackageItemExtension(main.UI_BaseItemGUI.URL, BaseItem);
    }
    //======================================= API =======================================
    //================================ override method ==================================
    //================================= private method ==================================
    //===================================== Handler =====================================
}