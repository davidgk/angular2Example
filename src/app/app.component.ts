import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'EJEMPLO ANGULAR 2 BY DGK';
  visible=false;
  decirAdios(){
    this.visible=(this.visible)?false:true;
  }
}
