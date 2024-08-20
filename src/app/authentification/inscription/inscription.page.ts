import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {AnimationOptions} from "@angular/animations";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  userForm = new FormGroup({
    username: new FormControl('Princia', [Validators.required]),
    email: new FormControl('princia@gmail.com', [Validators.required]),
    password: new FormControl('pppppp', [Validators.required]),
    address: new FormControl('Ambohimiandra', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  errorMessage = '';

  // constructor(private userService: UserService, private router: Router) {}

  signup() {
    this.userForm.patchValue({ role: 'USER' });
    console.log(this.userForm.value);
   /* if (this.userForm.valid) {
      this.userService.signup(this.userForm.value).subscribe({
        next: res => {
          this.router.navigateByUrl('');
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        },
      });
    }*/
  }
}
