/**
 * @author: lujiahao 
 * @date: 2020-06-08 16:05:34 
 */
class FairyUtil {
    /**
     * 解析ui属性
     * @param source ui
     * @param target 目标对象
     */
    public static parseChildren(source: any, target: any) {
        //组件属性
        var children = source._children;
        for (let i = 0; i < children.length; i++) {
            var child = children[i];
            if (child._name in target && !(target[child._name] === undefined))
                continue;
            target[child._name] = child;
        }
        //控制器
        var controllers = source._controllers;
        for (let i = 0; i < controllers.length; i++) {
            var ctrl = controllers[i];
            if (ctrl.name in target && !(target[ctrl._name] === undefined))
                continue;
            target[ctrl.name] = ctrl;
        }
        //动效
        var transitions = source._transitions;
        for (let i = 0; i < transitions.length; i++) {
            let trans = transitions[i];
            if (trans.name in target && !(target[trans._name]) === undefined)
                continue;
            target[trans.name] = trans;
        }
    }
}