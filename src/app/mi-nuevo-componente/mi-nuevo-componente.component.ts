import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-nuevo-componente',
  templateUrl: './mi-nuevo-componente.component.html',
  styleUrls: ['./mi-nuevo-componente.component.css']
})
export class MiNuevoComponenteComponent implements OnInit {
  valor="Que vuelva el carlos";
  constructor() { }

  ngOnInit() {
    console.log('componente inicializado...');  
  }

}
