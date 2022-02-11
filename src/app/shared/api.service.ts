import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  // POST GET PUT DELETE Method
  postMovie(data:any){
    return this._http.post<any>("http://localhost:3000/movies", data).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
  getMovie(){
    return this._http.get<any>("http://localhost:3000/movies").pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
  putMovie(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/movies/"+id, data).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
  deleteMovie(id:number){
    return this._http.delete<any>("http://localhost:3000/movies/"+id).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
}
