import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'http://92.253.239.109/api/v1/cars'

  constructor(private httpClint: HttpClient) { }

  getCars():Observable<Car[]>{
    return this.httpClint.get<Car[]>(this.url)
  }
  postCar(car: Car): void{
   this.httpClint.post(this.url, car)
  }
}
