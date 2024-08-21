import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.page.html',
  styleUrls: ['./details-produit.page.scss'],
})
export class DetailsProduitPage {

  id = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  seeDetails(id: string) {
    this.router.navigate(['/home/update-produit', id]);
  }

}
