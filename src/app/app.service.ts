import { Injectable } from '@angular/core';

/* Service */
/* Export means that it can be used somewhere */
/* Dependency Injection */
@Injectable()
export class AppService{
    private all:string[];

    constructor(){
        this.all = [];
    }

    getOne(id:number):string{
        return this.all[id];
    }

    getAll():string[]{
       return this.all; 
    }

    addTask(newTask:HTMLInputElement):void{
        if (newTask.value == ""){
            alert("You need to type something");
        }else{
            this.all.push(newTask.value);
            this.cleanField(newTask);
        }
    }

    removeTask(id:number):void{
        this.all.splice(id, 1);
    }

    removeAllTasks():void{
        this.all.splice(0, this.all.length);
    }

    cleanField(field: HTMLInputElement):void{
        field.value = null;
    }
}