import { Component, OnInit } from '@angular/core';
import { CataComponent } from "./cata/cata.component";
import { MiNuevoComponenteComponent } from "./mi-nuevo-componente/mi-nuevo-componente.component";



@Component({
  selector: 'app-anidar-componentes',
  templateUrl: './anidar-componentes.component.html',
  styleUrls: ['./anidar-componentes.component.css'],
  entryComponents:[CataComponent, MiNuevoComponenteComponent]  
})
export class AnidarComponentesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
