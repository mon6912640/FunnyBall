/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module main {

	export class UI_MainUIGUI extends fairygui.GComponent {

		public m_bg:fairygui.GGraph;

		public static URL:string = "ui://wk5bg6ykq0y91";

		public static createInstance():UI_MainUIGUI {
			return <UI_MainUIGUI><any>(fairygui.UIPackage.createObject("main","MainUIGUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GGraph><any>(this.getChildAt(0));
		}
	}
}