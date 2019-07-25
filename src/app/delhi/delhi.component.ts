import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

export interface Location {
  value: string;
  viewValue: string;
}
export interface Day {
  value: number;
  viewValue: number;
}
export interface Hotel {
  value: string;
  viewValue: string;
}
export class DatepickerCustomIconExample {}
@Component({
  selector: 'app-delhi',
  templateUrl: './delhi.component.html',
  styleUrls: ['./delhi.component.css']
})
export class DelhiComponent implements OnInit {
  Details : FormGroup;
  imagesUrl : any;
  images = ['../assets/images/bengaluru.jpg','../assets/images/hawamahal.jpg','../assets/images/mumbai.jpg', '../assets/images/delhi4.jpg', '../assets/images/delhi5.jpg'];

  constructor(private r:Router) { }
  minDate = new Date();

  ngOnInit() {
    this.imagesUrl = ['../assets/images/bengaluru.jpg','../assets/images/hawamahal.jpg','../assets/images/mumbai.jpg', '../assets/images/delhi4.jpg', '../assets/images/delhi5.jpg'];
    
    this.Details = new FormGroup({
      selectedValue : new FormControl(''),
      selectedValue1 : new FormControl(''),
      selectedValue2 : new FormControl(''),
      data : new FormControl(''),
      date : new FormControl(new Date())
      })
  }

  Submit()
  {
    if(!sessionStorage.getItem("login"))
    {
      this.r.navigateByUrl("login");
    }
    else{
      this.r.navigate(['Savedplans']);
    }
  }

  FinalPlan()
  {
    if(!sessionStorage.getItem("login"))
    {
      this.r.navigateByUrl("login");
    }
    else{
      this.r.navigate(['Finalplan']);
    }
  }

  temples : string[] = ["Akshardham", "Lotus Temple", "Iscon Temple", "Bangla Sahib" ,
   "Kalkaji Temple" , "Chhatarpur Temple"];

  monuments : string[] = ["Red Fort", "Qutub Minar", "India Gate"
   , "Humayun's Tomb" , "Jama Masjid" ,  "Lodhi Garden"];

  shopping : string[] = ["Chandni Chowk", "Connaught Palace", "Janpath" ,
"Palika bazar" , "Karol Bagh" , "Delhi Haat"];

Hotel : string[] = ["Radisson Blue","The Umrao","Ginger Hotel","J P Hotel & Resort"];
  
  locations: Location[] = [
    {value: 'Monuments', viewValue: 'Monuments'},
    {value: 'Temples', viewValue: 'Temples'},
    {value: 'Shopping', viewValue: 'Shopping'},
  ];

  days: Day[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},

  ];

  hotels: Hotel[] = [
    {value: 'Radisson Blue', viewValue: 'Radisson Blue'},
    {value: 'The Umrao', viewValue: 'The Umrao'},
    {value: 'Ginger Hotel', viewValue: 'Ginger Hotel'},
    {value: 'J P Hotel & Resort', viewValue: 'J P Hotel & Resort'},
  ];

  


}
