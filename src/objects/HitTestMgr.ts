/**
 * 碰撞检测管理器
 * @author: monkey.lu 
 * @date: 2019-03-31 21:44:08 
 */
class HitTestMgr {
    constructor() {
    }

    //=============================== gettter and setter ================================
    //======================================= API =======================================
    /**
     * 碰撞检测
     * @param pObj1 
     * @param pObj2 
     */
    public static hitTest(pObj1:BaseObject, pObj2:BaseObject):boolean
    {
        let t_typeCount = pObj1.type | pObj2.type;
        switch(t_typeCount)
        {
            case ObjectType.CIRCLE | ObjectType.CIRCLE:
                return this.hitTestCircle2(pObj1 as ObjectCircle, pObj2 as ObjectCircle);

            case ObjectType.CIRCLE | ObjectType.RETANGLE:
                if(pObj1 instanceof ObjectCircle)
                    return this.hitTestCircleRectangle(pObj1, pObj2 as ObjectRectangle);
                else
                    return this.hitTestCircleRectangle(pObj2 as ObjectCircle, pObj1 as ObjectRectangle);

            case ObjectType.RETANGLE | ObjectType.RETANGLE:
                return this.hitTestRectangle2(pObj1 as ObjectRectangle, pObj2 as ObjectRectangle);
        }
        return false;
    }

    //================================ override method ==================================
    //================================= private method ==================================
    /**
     * 圆形的碰撞检测
     * @param pObj1 
     * @param pObj2 
     */
    private static hitTestCircle2(pObj1:ObjectCircle, pObj2:ObjectCircle):boolean
    {
        let t_dis = (pObj1.width>>1) + (pObj2.width>>1);
        if(Math.abs(pObj1.x - pObj2.x) > t_dis)
            return false;
        if(Math.abs(pObj1.y - pObj2.y) > t_dis)
            return false;
        if(Math.sqrt(Math.pow(pObj1.x - pObj2.x, 2) + Math.pow(pObj1.y - pObj2.y, 2)) < t_dis)
            return true;
        else
            return false;
    }

    /**
     * 矩形的碰撞检测
     * @param pObj1 
     * @param pObj2 
     */
    private static hitTestRectangle2(pObj1:ObjectRectangle, pObj2:ObjectRectangle):boolean
    {
        return false;
    }

    /**
     * 圆形与矩形的碰撞检测
     * @param pObj1 
     * @param pObj2 
     */
    private static hitTestCircleRectangle(pObj1:ObjectCircle, pObj2:ObjectRectangle):boolean
    {
        return false;
    }
    //===================================== Handler =====================================
}