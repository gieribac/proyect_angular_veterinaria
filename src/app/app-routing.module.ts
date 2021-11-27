import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'consult', loadChildren: () => import('./marcas/consultar/consultar.module').then(m => m.ConsultarModule) }, { path: 'new', loadChildren: () => import('./marcas/new/new.module').then(m => m.NewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
