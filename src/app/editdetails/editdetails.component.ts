import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  message :string;
  constructor(private r : Router) { }

  ngOnInit() {
  }
  Edit()
  {
    this.message = "Data has been updated";
    //this.r.navigate(['login']);
  }
}
