import { Injectable } from '@angular/core';
const ic_service = require('../../declarations/land_registry_backend').land_registry_backend;

@Injectable({
  providedIn: 'root'
})
export class IcService {
  constructor() { }
  public async greet(name:string){
    return await ic_service.greet(name);
  }
}