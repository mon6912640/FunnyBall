class MainUIView extends BaseView {
    public view:main.UI_MainUIGUI;

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

    //================================ override method ==================================
    //================================= private method ==================================
    //===================================== Handler =====================================
}