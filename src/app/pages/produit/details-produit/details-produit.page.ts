import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../../../services/produit.service";
import {ExchangeService} from "../../../services/exchange.service";

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.page.html',
  styleUrls: ['./details-produit.page.scss'],
})
export class DetailsProduitPage implements OnInit{

  id: string = '';
  product: any;
  idUser: string = localStorage.getItem('id') ?? '';
  idUserForExchange: string = '';
  isMyProduct = false;
  listProducts: any;
  listMyProducts: any;
  selectedIds: string[] = [];
  selectedMyIds: string[] = [];
  delivery_address: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private produitService: ProduitService, private exchangeService: ExchangeService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getProductById();
    this.checkProduct();
  }

  updateProduct(id: string) {
    this.router.navigate(['/home/update-produit', id]);
  }

  getProductById() {
    this.produitService.getProductById(this.id).subscribe({
      next: res => {
        this.product = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  checkProduct() {
    this.produitService.getProductById(this.id).subscribe({
      next: res => {
        this.isMyProduct = res.data.actual_owner.id == this.idUser;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  exchange(userId: string) {
    // get list of products of the owner
    this.produitService.getProductByUserId(userId).subscribe({
      next: res => {
        this.listProducts = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  chooseMyProduct() {
    // get list of my product
    this.produitService.getProductByUserId(this.idUser).subscribe({
      next: res => {
        this.listMyProducts = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onCheckboxChange(event: any, id: string, idUserForExchange: string): void {
    if (event.target.checked) {
      this.selectedIds.push(id);  // Add to selected array
    } else {
      this.selectedIds = this.selectedIds.filter(selectedId => selectedId !== id);  // Remove from selected array
    }
    this.idUserForExchange = idUserForExchange;
  }

  onCheckboxChangeMyProduct(event: any, id: string): void {
    if (event.target.checked) {
      this.selectedMyIds.push(id);  // Add to selected array
    } else {
      this.selectedMyIds = this.selectedMyIds.filter(selectedId => selectedId !== id);  // Remove from selected array
    }
  }

  cancel() {
    this.router.navigate(['/home/produit']);
  }

  confirm() {
    let exchange = {
      "owner_id": this.idUserForExchange,
      "taker_id": this.idUser,
      "owner_products": this.selectedIds,
      "taker_products": this.selectedMyIds,
      "delivery_address": this.delivery_address
    };

    this.exchangeService.createExchange(exchange).subscribe({
      next: res => {
        this.router.navigate(['/home/produit']);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  delete() {
    this.produitService.deleteProduct(this.id).subscribe({
      next: res => {
        this.router.navigate(['/home/produit']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
