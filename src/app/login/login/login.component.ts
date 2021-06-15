import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../car/services/car.service";
import {Token} from "../../car/model/token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any
  login = new FormControl('',[]

    )
  password = new FormControl()

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }
  myForm = new FormGroup({
    login: this.login,
    password: this.password
  })
  enter(){
    let Login = {email: this.login.value, password: this.password.value}
     this.carService.Auth(Login).subscribe(value => {
      this.token = value})

  }
}
