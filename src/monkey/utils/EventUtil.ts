module monkey {
    /**
     * 方便注册和反注册事件
     * @author: lujiahao 
     * @date: 2018-03-29 16:03:06 
     */
    export class EventUtil {
        public constructor() {
        }

        public static register(pFlag: boolean, pTarget: egret.EventDispatcher, pType: string, pHandler: Function, pThisObj: any, useCapture?: boolean, priority?: number) {
            if (!pTarget)
                return;
            if (pFlag) {
                pTarget.addEventListener(pType, pHandler, pThisObj, useCapture, priority);
            }
            else {
                pTarget.removeEventListener(pType, pHandler, pThisObj, useCapture);
            }
        }
    }
}