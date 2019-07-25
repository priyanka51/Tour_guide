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
  selector: 'app-bangalore',
  templateUrl: './bangalore.component.html',
  styleUrls: ['./bangalore.component.css']
})
export class BangaloreComponent implements OnInit {
  Details : FormGroup;
  imagesUrl : any;
  images = ['../assets/images/bengaluru.jpg','../assets/images/hawamahal.jpg','../assets/images/mumbai.jpg', '../assets/images/delhi4.jpg', '../assets/images/delhi5.jpg'];
  constructor(private r:Router) { }

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
      this.r.navigate(['Finalplan']);
    }
  }

  temples : string[] = ["Shivoham Shiva Temple", "Shri Somishwara Swami Temple", "Shri Jalakanteshwara Temple", "Sree Chokkanatha Swami Temple" ,
   "Iscon Temple" , "Shree Dodda Ganapathi Temple"];

  monuments : string[] = ["Vidhan Soudha", "Tipu's Palace", "Seshadri Lyer Memorial Hall"
   , "Attara Kacheri" , "Devanahalli Fort" ,  "Mayo Hall"];

  shopping : string[] = ["Phoenix Markat City", "UB City", "Chikpit" ,
"Lal Bagh Market" , "Indo-Dubai Plaza" , "Jayanagar Shopping Complex"];

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

