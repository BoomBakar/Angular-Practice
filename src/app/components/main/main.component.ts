import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  //initialize a number array till 50
  // numbers:Array<number> = Array(51).fill(0,1).map((x,i)=>i);
  // chosenNum:number = 1;
  // calculate(num:number){
  //  if(num==1)
  //   this.chosenNum = 1;
  //  else if(num==2)
  //   this.chosenNum = 2;
  //  else if(num==3)
  //   this.chosenNum = 3;
  //  else if(num==5)
  //   this.chosenNum = 5;    
  // }
  length:number = 0;
  lengthA:number=0;
  lengthE:number=0;
  lengthI:number=0;
  lengthO:number=0;
  lengthU:number=0;
  containA:boolean = false;
  containE:boolean = false;
  containI:boolean = false;
  containO:boolean = false;
  containU:boolean = false;
  check(data:string) {
    this.length = data.length;
    if(data.includes('a'))
    {
      this.containA = true;
      this.lengthA = data.split('a').length-1;
    }
    else if(data.includes('e')){
      this.containE = true;
      this.lengthE = data.split('e').length-1;
    }
    else if(data.includes('i')){
      this.containI = true;
      this.lengthI = data.split('i').length-1;
    }    
    else if(data.includes('o')){
      this.lengthO = data.split('o').length-1;
      this.containO = true;
    }else if(data.includes('u'))
      this.containU = true;
      this.lengthU = data.split('u').length-1;
  }
  
}
