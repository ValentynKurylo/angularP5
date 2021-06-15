import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../services/car.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[]
  model = new FormControl()
  price = new FormControl()
  year = new FormControl()


  constructor(private carService: CarService ) {

  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => {this.cars = value})
  }

  myForm = new FormGroup({
    model: this.model,
    price : this.price,
    year: this.year
  })

  add(){
    let car = {id: this.cars.length + 16,model: this.model.value, price: this.price.value, year: this.price.value}
    console.log(car);
    this.carService.postCar(car)
  }
}
