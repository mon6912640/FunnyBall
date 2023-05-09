/**
 * @author: lujiahao 
 * @date: 2023-05-09 20:07:15 
 */
class BulletCircle extends ObjectCircle {
	constructor() {
		super();
	}
	protected initType() {
        this.view = BaseItem.createInstance() as BaseItem;

        if (this.view) {
            // this.view.m_tfId.text = this.id + "";
            this.view.m_tfId.text = "1";
        }

        this.handleHitTest(false);
    }

	public handleHitTest(pFlag: boolean) {
		if (this._urlNormal === undefined)
			this._urlNormal = fairygui.UIPackage.getItemURL("main", "basecircle_blue");
		if (this._urlHitTest === undefined)
			this._urlHitTest = fairygui.UIPackage.getItemURL("main", "basecircle_blue2");

		if (pFlag)
			this.view.m_bgLoader.url = this._urlHitTest;
		else
			this.view.m_bgLoader.url = this._urlNormal;
	}
}