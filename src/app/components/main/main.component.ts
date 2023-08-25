import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  name: string = '';
  isDisabled: boolean = false;
  checkName(){
    if(this.name === 'submitted')
      this.isDisabled = true;
}
}
