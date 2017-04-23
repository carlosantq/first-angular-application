import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appService: AppService;

  tasks:string[];

  task:string = '';

  title:string = 'Tasks';

  imgURL:string = "http://www.pamelaweaver.com/wp-content/uploads/2015/04/tasks.png";

  isBlue:boolean = false;

  buttonText:string = 'Make it blue!';

  constructor(appService: AppService){
    this.appService = appService;
    this.tasks = appService.getAll();
  }

  makeItBlue():void{
    if (!this.isBlue){
      this.isBlue = true;
      this.buttonText = 'Undo text color';
    }else{
      this.isBlue = false;
      this.buttonText = 'Make it blue';
    }
  }

  showWhileTyping(input:string):void{
    this.task = input;
  }

}
