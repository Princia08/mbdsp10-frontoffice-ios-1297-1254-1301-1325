import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from "./authentification/login/login.page";
import {InscriptionPage} from "./authentification/inscription/inscription.page";

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },

  { path: '', component: LoginPage },
  { path: 'signup',
    loadChildren: () => import('./authentification/inscription/inscription.module').then(m => m.InscriptionPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
