//变量缓存器，方便我们在不同的类中访问和修改变量
import {Resources} from "./Resources.js";

export class DataStore {
    static getInstance(){
        if(!DataStore.instance){
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }/*单例的作用是，通过等于对象实例的属性来调用对象实例。通过if判断，确保对象实例不重复
    创建。单例创建方法如上，单例调用方法为对象.getinstance）*/
    constructor(){
        this.map = new Map()/*这个是存在DataStore.map的属性，目前里面啥都没有
        等会儿放东西*/
    }
    put(key,value){
        this.map.set(key,this.neatFun(value));
        return this; //为链式调用做准备，后面直接加.put，省得Datastore.getInstance.put。
    }
    get(key){
        return this.map.get(key);//这个是为了获取值，就没法链式调用了。
    }
    destroy(){
        for(let value of this.map.values()){
            value = null;
        }
    }
    neatFun(val){
        if(typeof val === "function"){
            return new val;
        }else{
            return val
        }
    }

}