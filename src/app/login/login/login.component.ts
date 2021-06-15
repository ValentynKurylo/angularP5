import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bool: boolean = false
  login = new FormControl('',[

    this.loginValodator]
    )
  password = new FormControl()

  constructor() { }

  ngOnInit(): void {
  }
  myForm = new FormGroup({
    login: this.login,
    password: this.password
  })
  enter(){
    if(!this.login.errors) {
      this.bool = true
    }
    console.log(this.bool);
  }
  loginValodator(input: AbstractControl){
    if(input.value.includes('admin@gmail.com')){
      return null
    }
    else {
      return {err: 'login is no valid'}
    }
  }
}
