import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  loginData = {
    email: '',
    password: ''
  };
  

  
  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>, // Reference to the current modal
    public dialog: MatDialog // Service to open new modals
  ) {}

  onSubmit(): void {
    // Handle login logic here
    console.log(this.loginData);
    this.dialogRef.close();
  }
  openRegisterModal(): void {
    this.dialog.open(RegisterModalComponent, {
      width: '400px'
    });
  }

}
