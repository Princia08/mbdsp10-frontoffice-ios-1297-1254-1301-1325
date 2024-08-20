import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {}

  errorMessage: string = '';

  userForm = new FormGroup({
    email: new FormControl('perdo-alvarez@it-univerisity.mg', [Validators.required]),
    password: new FormControl('motdepasse', [Validators.required])
  })

  login() {
    if (this.userForm.valid) {
      // Logique de connexion
      this.router.navigateByUrl('/tabs/tab1');
      this.userService.login(this.userForm.value).subscribe({
        next: res => {
          this.authService.logIn(res.data.access_token)
        },
        error: err => {
          this.errorMessage = err.error.message
        }
      })
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs';
    }
  }
}
