import { Component, OnInit } from '@angular/core';
import { CataComponent } from '../cata/cata.component';

@Component({
  selector: 'mi-nuevo-componente',
  templateUrl: './mi-nuevo-componente.component.html',
  styleUrls: ['./mi-nuevo-componente.component.css'],
  entryComponents:[CataComponent]
})
export class MiNuevoComponenteComponent implements OnInit {
  valorIni="---------Mi Nuevo Componente------------";
  valorFin="---------Fin Mi Nuevo Componente------------";
  constructor() { }

  ngOnInit() {
    console.log('componente inicializado...');  
  }

}
