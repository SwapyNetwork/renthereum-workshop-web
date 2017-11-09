import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { Web3Service } from './services/web3.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
  ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
