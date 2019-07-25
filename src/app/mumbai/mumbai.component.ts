import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  selector: 'app-mumbai',
  templateUrl: './mumbai.component.html',
  styleUrls: ['./mumbai.component.css']
})
export class MumbaiComponent implements OnInit {
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

  temples : string[] = ["Shri SidhiVinayak Ganpati Mandir ", "Shri Mahalakshmi Temple",
   " Chri Shri Radha Gopinath Mandir", "Valkeshwar Temple" ,
   "Babulnath Temple" , "Shri MumbaDevi Temple"];

  monuments : string[] = ["Gateway of India", "TajMahal Palace", "Marine Drive"
   , "Hajiali Dargah" , "Mount mary Church" ,  "Rajabai Clock Tower"];

  shopping : string[] = ["Mangaldas Market", "Zaveri Bazar", "Fashion Street" ,
"Mahatma Jyotiba Phula Mandai" , "Natraj Market" , "Delhi Haat"];

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
