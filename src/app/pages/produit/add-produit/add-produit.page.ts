import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProduitService} from "../../../services/produit.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.page.html',
  styleUrls: ['./add-produit.page.scss'],
})
export class AddProduitPage {
  categories: any;
  selectedCategories: string[] = [];
  file!: File;
  fileName!: string;

  ngOnInit() {
    this.getAllCategories();
  }

  constructor(private router: Router, private produitService: ProduitService, private http: HttpClient) {
  }

  // champs du formulaire
  produitForm = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    // file: new FormControl('', [Validators.required])
    categories: new FormControl([''], [Validators.required])
  })

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  getAllCategories() {
    this.produitService.getAllCategories().subscribe({
      next: res => {
        this.categories = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  addProduct() {
    this.produitForm.patchValue({categories: this.selectedCategories})
    console.log(this.produitForm.value);

    this.produitService.addProduct(this.produitForm.value).subscribe({
      next: res => {
        console.log("form " + this.produitForm.value);
        console.log("res " + res);
        if (this.file) {
          const formData = new FormData();
          formData.append("file", this.file, this.file.name);
          this.produitService.uploadImage(res.data.id, formData).subscribe({
            next: res => {
              this.router.navigate(['/home/details-produit', res.data.id]);
            },
            error: err => {
              console.log(err);
            }
          });
          // const upload$ = this.http.post(this.url + "/upload", formData);
          // upload$.subscribe();
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onCheckboxChange(event: any, id: string): void {
    if (event.target.checked) {
      this.selectedCategories.push(id);
    } else {
      this.selectedCategories = this.selectedCategories.filter(selectedCategories => selectedCategories !== id);
    }
  }
}
