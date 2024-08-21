import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.page.html',
  styleUrls: ['./add-produit.page.scss'],
})
export class AddProduitPage {

  fileName!: string;

// Form initialization
  produitForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required])
  });

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("image", file, file.name);
      // const upload$ = this.http.post(this.url + "/upload", formData);
      // upload$.subscribe();
    }
  }

  onSubmit() {
    if (this.produitForm.valid) {
      console.log('Form Data:', this.produitForm.value);
      // Perform submission logic here
    }
  }
}
