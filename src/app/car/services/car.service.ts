import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";
import {newCar} from "../model/newCar";

class Restaurant {
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'http://92.253.239.109/api/v1/cars'
  private urlA = 'http://92.253.239.109/api/v1/auth'

  constructor(private httpClint: HttpClient) { }

  getCars():Observable<Car[]>{
    return this.httpClint.get<Car[]>(this.url)
  }
  postCar(car: newCar):Observable<any>{
  return this.httpClint.post<any>(this.url, car)
  }
  deleteCar(id: number):Observable<Car>{
    return this.httpClint.delete<Car>(this.url + '/' + id)
  }
  Auth(Login: any){
    return this.httpClint.post(this.urlA, Login)
  }
}
