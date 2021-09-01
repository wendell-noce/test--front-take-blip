import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './api/api.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
    FilterPipe
  ],
    imports: [CommonModule, HttpClientModule, RouterModule],
    providers: [
        ApiService,
    ],
    exports: [
      FilterPipe
    ]
})
export class CoreModule {}
