import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [ListagemComponent, ProfileComponent],
    imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      PagesRoutingModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatIconModule,
      FormsModule,
      CoreModule,
      MatProgressSpinnerModule,
    ],
})
export class PagesModule {}
