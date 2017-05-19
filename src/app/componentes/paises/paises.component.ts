import { Component, OnInit } from '@angular/core';
// Importamos la clase del servicio
import {PaisesService} from '../../services/paises/paises.service';
 
@Component({
  selector: 'paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  providers:[PaisesService]
})

export class PaisesComponent implements OnInit {

  public posts;
  errorMessage;
  // cargamos el servicio
  constructor(private _paisesService: PaisesService){
    // Llamamos al método del servicio
    this._paisesService.getPosts()
            .subscribe(
                result => {
                        this.posts = result;
                        console.log(this.posts);
                },
                error => {
                    this.errorMessage = <any>error;
                      
                    if(this.errorMessage !== null){
                        console.log(this.errorMessage);
                        alert("Error en la petición");
                    }
                }
            );
    }

  ngOnInit() {
  }

}
