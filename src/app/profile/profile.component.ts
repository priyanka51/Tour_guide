import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registration: FormGroup;

  constructor(private r: Router) { }

  ngOnInit() {
    this.registration = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl(''),
      gender: new FormControl('male'),
      username: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl(''),
      city: new FormControl(''),
      age: new FormControl('')
    });
  }


  Register() {
    console.log(this.registration.value);
    this.r.navigate(['login']);
  }
}
