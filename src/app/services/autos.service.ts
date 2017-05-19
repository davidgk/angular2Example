import { Injectable } from '@angular/core';

@Injectable()
export class AutosService {

  constructor() { }

  getAuto(matricula: string) {
    let mensajeAuto = "Su auto posee la matricula "+ matricula;
    return mensajeAuto;
  }

}
