import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MAT_DATE_LOCALE } from '@angular/material/core';

import { BaseRouterComponent } from './base-router/base-router.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BotCardComponent } from './components/bot-card/bot-card.component';

@NgModule({
    declarations: [
        BaseRouterComponent,
        BaseLayoutComponent,
        HeaderComponent,
        FooterComponent,
        BotCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
    exports: [
      BotCardComponent
    ],
})
export class SharedModule {}
