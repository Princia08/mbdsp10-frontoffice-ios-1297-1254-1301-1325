import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {}

  errorMessage: string = '';

  userForm = new FormGroup({
    email: new FormControl('perdo-alvarez@it-univerisity.mg', [Validators.required]),
    password: new FormControl('motdepasse', [Validators.required])
  })

  login() {
    if (this.userForm.valid) {
      // Logique de connexion
      this.router.navigateByUrl('/tabs/tab1');
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs';
    }
  }
}
