module monkey {
    /**
     * 时间工具类
     * @author: lujiahao 
     * @date: 2019-03-30 15:51:21 
     */
    export class TimeUtil {
        public constructor() {
        }

        private static _markTs:number = 0;
        /**
         * 标记时间戳
         */
        public static markTs()
        {
            this._markTs = egret.getTimer();
        }

        /**
         * 输出时间戳
         */
        public static showMarkTs()
        {
            console.log(egret.getTimer() - this._markTs);
        }
    }
}