import { Component, OnInit } from '@angular/core';
// Importamos la clase del servicio
import {RestExampleService} from '../../services/rest-example/rest-example.service';
 
@Component({
  selector: 'using-apis-and-list',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  providers:[RestExampleService]
})

export class PaisesComponent implements OnInit {

  public posts=[];
  errorMessage;
  // cargamos el servicio
  constructor(private _restExampleService: RestExampleService){
    // Llamamos al método del servicio
    this._restExampleService.getPosts()
            .subscribe(
                result => {
                        for(let i = 0; i<3; i++){
                          this.posts[i]=result[i];  
                        }
                        //this.posts = result;
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
