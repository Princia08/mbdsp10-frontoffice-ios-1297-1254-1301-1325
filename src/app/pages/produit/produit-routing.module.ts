import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitPage } from './produit.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitPage
  },  {
    path: 'add-produit',
    loadChildren: () => import('./add-produit/add-produit.module').then( m => m.AddProduitPageModule)
  },
  {
    path: 'details-produit',
    loadChildren: () => import('./details-produit/details-produit.module').then( m => m.DetailsProduitPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitPageRoutingModule {}
