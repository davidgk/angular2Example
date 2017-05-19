import { Component, OnInit } from '@angular/core';
// Importamos la clase del servicio
import {PeliculaService} from '../../services/pelicula.service';


@Component({
  selector: 'pelicula',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})

export class PeliculasComponent implements OnInit {
  peliculaFin="   ------------Fin componente Pelicula-----------";
  peliculaIni="   ------------Ini componente Pelicula----------";
  public pelicula;
  proxima_pelicula="Sin titulo";
  peliculaJson;
      // Definimos una propiedad para el servicio y se la pasamos al constructor
  constructor(private _peliculasService: PeliculaService){
        this.peliculaJson = {id: 1, titulo: "La verdad duele", anio: 2016};
        this.pelicula = "Ahora vamos a ver la pelicula " + this.peliculaJson.titulo
        + " del año " + this.peliculaJson.anio;
        
        // Llamamos al método del servicio
        this.proxima_pelicula = this._peliculasService.getPelicula(8);
  }

  ngOnInit() {
  }

}
