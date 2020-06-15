import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options } from '../interfaces/iOptions';
import { Festival } from '../interfaces/iFestival';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getFestivalsOpts(){
    return this.http.get<Festival[]>('./assets/data/festivals.json');
  }

  getMenuOpts(){
    return this.http.get<Options[]>('./assets/data/menu.json');
  } 

}
