//此处代码是配合ObjectUtils.getObjectUniqueId()接口使用的，计算对象的唯一id
(function() {
    if ( typeof Object['uniqueId'] == "undefined" ) {
        var uuuid = 0;

        Object['uniqueId'] = function(o) {
            if ( typeof o.__uniqueid == "undefined" ) {
                Object.defineProperty(o, "__uniqueid", {
                    value: ++uuuid,
                    enumerable: false,
                    // This could go either way, depending on your 
                    // interpretation of what an "id" is
                    writable: false
                });
            }

            return o.__uniqueid;
        };
    }
})();

module monkey
{
    /**
     * @author: lujiahao 
     * @date: 2019-03-30 17:11:44 
     */
    export class ObjectUtils {
        constructor() {
        }

        /**
         * 修改Object属性
         * @param  {Object} pTargetObj 目标对象
         * @param  {Object} pSourceObj 来源对象
         * @returns boolean
         */
        public static modifyObject(pTargetObj:Object, pSourceObj:Object):boolean
        {
            if(!pTargetObj || !pSourceObj)
                return false;

            let t_change:boolean = false;
            for(let k in pSourceObj)
            {
                try {
                    if(pTargetObj[k] != pSourceObj[k])
                    {
                        pTargetObj[k] = pSourceObj[k];
                        t_change = true;
                    }
                } catch (error) {
                }
            }
            return t_change;
        }

        /**
         * 获取目标对象内置唯一id
         * @param pObj 目标对象（对象可以是任意对象，包括Function）
         */
        public static getObjectUniqueId(pObj:any):number
        {
            return Object['uniqueId'](pObj);
        }
    }
}