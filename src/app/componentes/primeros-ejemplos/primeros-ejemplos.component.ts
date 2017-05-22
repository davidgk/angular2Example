import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeros-ejemplos',
  templateUrl: './primeros-ejemplos.component.html',
  styleUrls: ['./primeros-ejemplos.component.css']
})
export class PrimerosEjemplosComponent implements OnInit {

  visible=false;
  decirAdios(){
    this.visible=(this.visible)?false:true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
