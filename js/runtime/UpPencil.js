import {Pencil} from "./Pencil.js";
import {Sprite} from "../base/Sprite.js";

export class UpPencil extends Pencil{
    constructor(top){
        const image=Sprite.getImage('pencilUp');
        super(top,image);
    }
    draw(){
        this.y=this.top-this.height;
        super.draw();
    }
}