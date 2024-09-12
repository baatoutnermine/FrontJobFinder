import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
  registerData = {
    firstName: '',
    lastName: '',
    age: null,
    city: '',
    domaine: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    public dialogRef: MatDialogRef<RegisterModalComponent>, // Reference to the current modal
    public dialog: MatDialog // Service to open new modals
  ) {}


  onSubmit() {
    // Logique de soumission du formulaire
    console.log(this.registerData);
    this.dialogRef.close();
  }

  openLoginModal(): void {
    this.dialog.open(LoginModalComponent, {
      width: '400px'
    });
  }
}