type QObject={
    x:number;
    y:number;
    width:number;
    height:number;
    level:number;
    index:number;
    node:Quadtree;
    getIndex(pBounds:egret.Rectangle):number;
}