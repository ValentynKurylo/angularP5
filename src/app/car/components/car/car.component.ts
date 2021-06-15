import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: Car

  constructor(private catService: CarService) { }

  ngOnInit(): void {

  }
  del(){
    this.catService.deleteCar(this.car.id).subscribe()
  }
}
