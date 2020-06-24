import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms"

import {Router} from "@angular/router"
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private route:Router,
    private toast:ToastrService


  ) { }

  ngOnInit(): void {
  }
  
  //this is going to return object of type ngForm
  onSubmit(f: NgForm){

    const {email,password} =f.form.value;
    //todo checking here
    this.auth.singnUp(email,password)
    .then((res)=>{
      this.route.navigateByUrl('/')
      this.toast.success("Signup Success")
    })
    .catch((err)=>{
      console.log(err.message)
      this.toast.error("Signup Failed")
    })
  }




}
