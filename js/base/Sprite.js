//精灵的基类，负责初始化精灵加载的资源和大小以及位 置
//这是一个父类，其它的精灵均继承于这个
import {DataStore} from "./DataStore.js";

export class Sprite {
    constructor(
        /*ctx=null,上下文ctx，不再传参，画布的上下文只有一个，直接通过datastore赋值*/
        img=null,srcX=0,srcY=0,srcW=0,srcH=0,x=0,y=0,width=0,height=0/*这里就可以用super 传给子类用了*/
    ){
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.i=0;
    }

    draw(
    img = this.img,
    srcX = this.srcX,
    srcY = this.srcY,
    srcW = this.srcW,
    srcH = this.srcH,
    x = this.x,
    y = this.y,
    width = this.width,
    height = this.height
    ){
        this.ctx.drawImage(
            img,
            srcX,
            srcY,
            srcW,
            srcH,
            x,
            y,
            width,
            height
        );
    }
    static getImage(key){
        return DataStore.getInstance().res.get(key);
    }// 单例可做模块间通信。静态方法从类.方法直接调用，可以破解子类super之上无法访问类和this的情况。
    static circle(arr){
        this.i=this.i+1;
        if (this.i<2){
            return arr[this.i];
        }else {
            this.i=0;
            return arr[2];
        }
    }

}