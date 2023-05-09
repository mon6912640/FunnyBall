/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module main {

	export class UI_BaseItemGUI extends fairygui.GComponent {
		public m_bgLoader:fairygui.GLoader;
		public m_tfId:fairygui.GTextField;
		public static URL:string = "ui://wk5bg6ykq0y92";

		public static createInstance():UI_BaseItemGUI {
			return <UI_BaseItemGUI>(fairygui.UIPackage.createObject("main", "BaseItemGUI"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.m_bgLoader = <fairygui.GLoader>(this.getChild("bgLoader"));
			this.m_tfId = <fairygui.GTextField>(this.getChild("tfId"));
		}
	}
}