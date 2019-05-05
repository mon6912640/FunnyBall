class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
            context.onUpdate = () => {
            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();

        UIBindMgr.setup();
        
        // 游戏入口初始化
        FguiMgr.ins().addPackage("main");
        this.addChild(fairygui.GRoot.inst.displayObject);

        // let t_mainUI = new MainUIView();
        // fairygui.GRoot.inst.addChild(t_mainUI.view);
        // t_mainUI.start();

        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);

        // let t_num1 = 0b1;
        // let t_num2 = 0b10;
        // let t_num3 = 0b100;

        // let t_result = 0;
        // t_result |= t_num1;
        // t_result |= t_num1;
        // console.log(t_result.toString(2));
        // console.log((t_result&t_num1) == t_num1);
        // console.log((t_result&t_num2) == t_num2);
        // console.log((t_result&t_num3) == t_num3);

        // {
        //     let t_buffs = RES.getRes("config_zip");
        //     //  console.log(t_buffs);
        //     let t_zlib = new Zlib.RawInflate(t_buffs);
        //     let t_byte = new egret.ByteArray(t_zlib.decompress());
        //     let t_you = t_byte.readUTFBytes(t_byte.length);
        //     //  console.log(t_you);
        //     let t_jsonStr = JSON.parse(t_you);
        //     console.log("ok");
        // }

        // {
        //     let t_buffs = RES.getRes("0config_zlib64");
        //     //  console.log(t_buffs);
        //     let t_zlib = new Zlib.RawInflate(t_buffs);
        //     let t_byte = new egret.ByteArray(t_zlib.decompress());
        //     let t_you = t_byte.readUTFBytes(t_byte.length);
        //     //  console.log(t_you);
        //     let t_str = atob(t_you)
        //     let t_jsonStr = JSON.parse(t_str);
        //     console.log("ok");
        // }

        {
            let t_buffs = RES.getRes("0config_zlib");
            //  console.log(t_buffs);
            let t_zlib = new Zlib.RawInflate(t_buffs);
            let t_byte = new egret.ByteArray(t_zlib.decompress());
            let t_you = t_byte.readUTFBytes(t_byte.length);
            //  console.log(t_you);
            let t_jsonStr = JSON.parse(t_you);
            console.log("ok");
        }

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json" + "?v="+Math.random(), "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
}