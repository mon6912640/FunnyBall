module monkey{
    /**
     * 基础视图
     * @author: monkey.lu 
     * @date: 2019-03-31 20:04:18 
     */
    export class BaseView {
        public view:fairygui.GComponent;
    
        constructor() {
            this.initView();
        }
    
        //=============================== gettter and setter ================================
        //======================================= API =======================================
        public initView()
        {
        }
        //================================ override method ==================================
        //================================= private method ==================================
        //===================================== Handler =====================================
    }
}