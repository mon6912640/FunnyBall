/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module main {

	export class UI_MainUIGUI extends fairygui.GComponent {
		public m_bg:fairygui.GGraph;
		public m_btnStop:fairygui.GButton;
		public static URL:string = "ui://wk5bg6ykq0y91";

		public static createInstance():UI_MainUIGUI {
			return <UI_MainUIGUI>(fairygui.UIPackage.createObject("main", "MainUIGUI"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph>(this.getChild("bg"));
			this.m_btnStop = <fairygui.GButton>(this.getChild("btnStop"));
		}
	}
}