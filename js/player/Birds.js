import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class Birds extends Sprite{
    constructor(){
        const image = Sprite.getImage('birds');
        super();
        this.clippingX=[
            9,
            9+34+18,
            9+34+18+34+18
        ];
        this.clippingY=[10,10,10];
        this.clippingW=[34,34,34];
        this.clippingH=[24,24,24];
        this.birdX=window.innerWidth/4;
        this.birdsX=[this.birdX,this.birdX,this.birdX];
        this.birdY=window.innerHeight/2;
        this.birdsY=[this.birdY,this.birdY,this.birdY];/*存一个变量，因为会变化，让三张图片就同一个变量进行draw，才能重叠。*/
        this.birdsW=[34,34,34];
        this.birdsH=[24,24,24];
        this.dataStore=DataStore.getInstance();

    }

    draw(){
        let cX=Sprite.circle(this.clippingX),
            cY=Sprite.circle(this.clippingY),
            cW=Sprite.circle(this.clippingW),
            cH=Sprite.circle(this.clippingH),
            bX=Sprite.circle(this.birdsX),
            bY=Sprite.circle(this.birdsY),
            bW=Sprite.circle(this.birdsW),
            bH=Sprite.circle(this.birdsH);
        super.draw(this.dataStore.getImage('birds'),cX,cY,cW,cH,bX,bY,bW,bH)
    };
}