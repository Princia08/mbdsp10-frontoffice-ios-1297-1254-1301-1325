import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from "./authentification/login/login.page";

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'signup',
    loadChildren: () => import('./authentification/inscription/inscription.module').then(m => m.InscriptionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./pages/produit/produit.module').then( m => m.ProduitPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
