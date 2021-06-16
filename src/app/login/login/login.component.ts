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
  access: string
  token: Object
  login = new FormControl('', []
  )
  password = new FormControl()

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    login: this.login,
    password: this.password
  })

  enter() {
    let Login = {email: this.login.value, password: this.password.value}
    this.carService.Auth(Login).subscribe(value => {
      console.log(value);
      this.token = value;
      this.access = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzOTM5NDkzLCJqdGkiOiI2NGMwOGI1NGY4NjU0MWFhYTlhNDg3NmUwNzEzMDAyMCIsInVzZXJfaWQiOjF9.X5f4xDQfAWDgXoxQiyuvnXsmJSTO8KuiVSw0WgPHXfE"
     localStorage.setItem('token', this.access)
    })
  }
}
