/**
 * FairyGui管理器
 * @author: lujiahao 
 * @date: 2018-06-29 14:43:21 
 */
class FguiMgr {
    private static _instance:FguiMgr;
	public static ins():FguiMgr
	{
		if(!this._instance)
			this._instance = new FguiMgr();
		return this._instance;
    }

    private _uipackageMap:{[resKey:string]:UIPackageVo} = {};

    /** fui后缀名 */
    private FUI_EXT = "bin";
    
    constructor() {
    }

    //=========================================== API ==========================================
    public addPackage(resKey: string, descData: ArrayBuffer = null):fairygui.UIPackage
    {
        let t_vo = this.getVoByResKey(resKey);
        if(!t_vo)
        {
            t_vo = UIPackageVo.getObj();
            t_vo.resKey = resKey;
            // t_vo.package = fairygui.UIPackage.addPackage(resKey+"_"+this.FUI_EXT, descData);
            t_vo.package = fairygui.UIPackage.addPackage(resKey, descData);
            this._uipackageMap[resKey] = t_vo;
        }
        t_vo.refCount += 1; //增加引用计量数
        return t_vo.package;
    }

    public removePackage(resKey: string): void 
    {
        let t_vo = this.getVoByResKey(resKey);
        if(t_vo && t_vo.package)
        {
            t_vo.refCount -= 1; //减少引用计量数
            if(t_vo.refCount < 1)
            {
                fairygui.UIPackage.removePackage(t_vo.id);
                delete this._uipackageMap[resKey];
                UIPackageVo.returnObj(t_vo);
            }
        }
    }

    //===================================== private method =====================================
    private getVoByResKey(pResKey:string):UIPackageVo
    {
        return this._uipackageMap[pResKey];
    }
    //======================================== handler =========================================
}

class UIPackageVo
{
    public resKey:string;
    public package:fairygui.UIPackage;
    /** 引用计数 */
    public refCount:number = 0;

    private static pool:UIPackageVo[]=[];

	public static getObj()
	{
		let self = this;		
		if(self.pool.length>0)
		{
			return self.pool.pop();
		}else
		{
			return new UIPackageVo();
		}
	}

	/**回收对象 */
	public static returnObj(value:UIPackageVo)
	{
		if(value)
		{
			value.cleanData();
		}
		this.pool.push(value);
	}

    constructor()
    {}

    public get id():string
    {
        if(this.package)
            return this.package.id;
        else
            return null;
    }

    public cleanData()
    {
        let self = this;
        self.resKey="";
        self.package=null;
        self.refCount = 0;
    }

    public destroy()
    {
        this.resKey = null;
        this.package = null;
    }
}