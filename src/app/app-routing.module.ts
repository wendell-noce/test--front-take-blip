import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: BaseLayoutComponent,
      loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
