import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
/*
  Generated class for the MemesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MemesProvider Provider');
  }
getMemes(){
	this.http.get("http://localhost:3000/memes").map(res => res);
}
}
