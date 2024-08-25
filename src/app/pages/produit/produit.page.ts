import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProduitService} from "../../services/produit.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  constructor(private router: Router, private produitService: ProduitService) {
  }

  products : any;

  ngOnInit() {
    this.getallProducts();
  }

  seeDetails(id: string) {
    this.router.navigate(['/home/details-produit', id]);
  }

  addProduct() {
    this.router.navigateByUrl('/home/addProduit');
  }

  getallProducts() {
    this.produitService.getAllProducts().subscribe({
      next: res => {
        this.products = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
