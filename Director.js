import {DataStore} from "./js/base/DataStore.js ";
import {UpPencil} from "./js/runtime/UpPencil.js";
import {DownPencil} from "./js/runtime/DownPencil.js";

export class Director {

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    constructor() {
        this.dataStore = DataStore.getInstance();
        this.moveSpeed = 2;
    }
    run() {
        if(!this.isGameOver){
            this.dataStore.get('backGround').draw();
            this.dataStore.get('pencils').forEach(function (value) {
                value.draw()
            });
            let pencils = this.dataStore.get('pencils');
            if (pencils[0].x <= window.innerWidth / 2 - pencils[0].width &&
                pencils.length===2) {
                this.createPencils();
            }
            if (pencils[0].x <= -pencils[0].width && pencils.length===4){
                pencils.shift();
                pencils.shift();
            }
            this.dataStore.get('land').draw();
            this.dataStore.get('birds').draw();
            let timer = requestAnimationFrame(() => this.run());
            this.dataStore.put('timer', timer);
        }else{
             cancelAnimationFrame(this.dataStore.get('timer'));
             this.dataStore.destroy();
        }


    }

    createPencils() {
        const minTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        let top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));

    }

}