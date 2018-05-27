class MathUtil
{
    /**
     * 随机一个整数
     * @param pInt 整数
     */
    public static RandomInt(pInt:number):number
    {
        return Math.floor(Math.random() * pInt);
    }
    
    /**
     * 随机取出一个数组里面的元素
     * @param pList 数组列表
     */
    public static randomElement(pList:any[]):any
    {
        return pList[Math.floor(Math.random()*pList.length)];
    }
    
    /**
     * 将一个数组乱序
     * @param pSource 源数组
     */
    public static randomArray(pSource:any[]):any[]
    {
        //选择法乱序（效率最优）
        var t_result:any[] = pSource.slice();
        var i:number = t_result.length;
        var t_temp:any;
        var t_indexA:number = 0;
        var t_indexB:number = 0;
        while(i)
        {
            t_indexA = i-1;
            t_indexA = Math.floor(Math.random()*i);
            i--;
            
            if(t_indexA == t_indexB)
                continue;
            t_temp = t_result[t_indexA];
            t_result[t_indexA] = t_result[t_indexB];
            t_result[t_indexB] = t_temp;
        }
        return t_result;
    }
}