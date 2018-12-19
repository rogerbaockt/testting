//初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./Director.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";


export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director=Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));

        //这个map只是一个参数，传递进了Resourceloader中的this.map

    }

    /*1.下面这个onResourceFirstLoaded只是个声明，实际运行在上面这个onLoaded回到函数中，且已经
    传入实参ResourceLoader.map
    2.onResourceFirstLoaded 声明里，放入运行的东西，声明的放在别处甚至别的js文件里。*/
    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        /*此时map就是Resources传给ResourceLoader后，ResourceLoader
                通过回调函数传来的ResourceLoader.map，包含已经加载的图片。*/
        this.init();
    }

    init() {
        this.director.isGameOver = false;
        this.dataStore.put('backGround', BackGround)
                      .put('land',Land)
                      .put('pencils',[])
                      .put('birds',Birds);
        /*这里面放着需要运行的数据*/
        /*在this.dataStore里放入了第一个数据，key是background,value是一个BackGround实例，
        * 实例里面有画笔，有从this.dataStore.res拿的已加载的background图片，对这个数据，可以
        * 直接draw了。但是draw放到director里。现在在director的constructor里拿到datastore,每个
        * JS文件里，对datastore 进行护理都需要先vara dataStore=DataStore.getInstance()。
        * 然后在init这个语句下面，放入对第一个数据的加工，
        * 分为两步，在director里创建方法：创建背景精灵（背景精灵=dataStore中key为‘background’
        * 的value），画常量背景，在main里运行。*/
        this.director.createPencils();
        this.director.run();
        /*这里面放着运行的方式*/
    }

}