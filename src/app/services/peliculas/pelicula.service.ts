import { Injectable } from '@angular/core';

@Injectable()
export class PeliculaService {

  constructor() { }

  // Definimos un método que recibe un parámetro y devuelve un string
  getPelicula(puntuacion: number) {
    let pelicula = "Batman v Superman - Puntuación: "+puntuacion;
    return pelicula;
  }

}
