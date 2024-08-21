import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage {

  constructor(protected router: Router) {}

  items = Array(10).fill(null).map((_, i) => ({
    id: i.toString(),
    imageSrc: 'assets/img/produits/haltere.png',
    title: 'Haltère',
    owner: 'John Doe',
    date: '12-10-24'
  }));

  seeDetails(id: string) {
    this.router.navigate(['/home/details-produit', id]);
  }
}
