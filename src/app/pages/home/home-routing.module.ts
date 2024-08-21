import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'produit',
        loadChildren: () => import('../produit/produit.module').then(p => p.ProduitPageModule)
      },
      {
        path: 'addProduit',
        loadChildren: () => import('../produit/add-produit/add-produit.module').then(p => p.AddProduitPageModule)
      },
      {
        path : 'details-produit/:id',
        loadChildren: () => import('../produit/details-produit/details-produit.module').then(p => p.DetailsProduitPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
