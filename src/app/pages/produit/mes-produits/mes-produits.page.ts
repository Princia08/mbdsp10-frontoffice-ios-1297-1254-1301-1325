import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProduitService} from "../../../services/produit.service";

@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.page.html',
  styleUrls: ['./mes-produits.page.scss'],
})
export class MesProduitsPage implements OnInit {

  products : any;
  userId = localStorage.getItem('id') ?? '';

  constructor(private router: Router, private produitService: ProduitService) {
  }

  ngOnInit() {
    this.getallProducts();
  }

  getallProducts() {
    this.produitService.getProductByUserId(this.userId).subscribe({
      next: res => {
        this.products = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  seeDetails(id: string) {
    this.router.navigate(['/home/details-produit', id]);
  }
}
