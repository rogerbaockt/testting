import {Sprite} from "../base/Sprite.js";

export class BackGround extends Sprite {
    constructor() {
        const image = Sprite.getImage('backGround')
        super(image,0,0,image.width,image.height,0,0,window.innerWidth,window.innerHeight);
    }
//constructor中可以选择性传父类参数，所传参数以在super参数里的位置调用父类方法。
}