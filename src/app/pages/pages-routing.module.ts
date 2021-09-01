import { ProfileComponent } from './profile/profile.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
      path: 'list',
      component: ListagemComponent,
    },
    {
      path: 'profile',
      children: [
        {
            path: ':shortName',
            component: ProfileComponent,
        },
    ],
    },

];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
