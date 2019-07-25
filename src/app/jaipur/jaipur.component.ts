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
  selector: 'app-jaipur',
  templateUrl: './jaipur.component.html',
  styleUrls: ['./jaipur.component.css']
})
export class JaipurComponent implements OnInit {
Details : FormGroup;
  imagesUrl : any;
  images = ['../assets/images/bengaluru.jpg','../assets/images/hawamahal.jpg','../assets/images/mumbai.jpg', '../assets/images/delhi4.jpg', '../assets/images/delhi5.jpg'];
  constructor(private r:Router) { }

  ngOnInit() {this.imagesUrl = ['../assets/images/bengaluru.jpg','../assets/images/hawamahal.jpg','../assets/images/mumbai.jpg', '../assets/images/delhi4.jpg', '../assets/images/delhi5.jpg'];
    
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

temples : string[] = ["Birla Mandir", "Akshardham Temple", "Motidungri Ganeshji Temple",
 "Thikana Mandir Shri Govind Dev Ji Maharaj" ,
 "Sun Temple" , "Kalki Temple"];

monuments : string[] = ["Amer Fort", "Hawa Mahal", "Jantar Mantar"
 , "Jal Mahal" , "Jaigarh Fort" ,  "Nahargarh Fort"];

shopping : string[] = ["Satkar Shopping Centre", "Bapu Bazar", "Jawahar Nagar Shopping Centre" ,
"Rajwada Market" , "Sindhi Colony Market" , "Jaipur Bazar"];

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
