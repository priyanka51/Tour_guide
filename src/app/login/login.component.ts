import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasicserviceService } from '../basicservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  password;


  loginForm: FormGroup;
  submitted: boolean;


  constructor(
    private r: Router,
    private _snackBar: MatSnackBar,
    private service: BasicserviceService,
    private formBuilder: FormBuilder,
    private modalService : NgbModal,
  ) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    })


  }



  loginToAdmin() {
    console.log("loginToAdmin()");
    this.submitted = true;

    const { emailId, password } = this.loginForm.value;



    if (emailId == "admin@gmail.com" && password == "12345") {
      this.openSnackBar('Loading...', '');
      this.service.changeLogged("admin");
      this.r.navigate(['Addplaces']);
    }
    else {
      this.openSnackBar('invalid credentials', '');

    }
    if (emailId == "ram@gmail.com" && password == "111") {
      this.openSnackBar('Loading...', '');
      this.service.changeLogged("user");
      sessionStorage.setItem("login", "user");
      //this.service.login(true);
      this.r.navigate(['Savedplans']);
    }
    else {
      this.openSnackBar('invalid credentials', '');

    }

  }
  userdetails() {
    this.r.navigate(['Profile']);
  }
  forget() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }
}
  @Component({
    selector: 'ngbd-modal-content',
    template: `
      <div class="modal-header">
        <h4 class="modal-title">Forget Password</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Verfication Link has been sent to your registered email id</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      </div>
    `
  })
  export class NgbdModalContent {
    
  
    constructor(public activeModal: NgbActiveModal) {}
  }

