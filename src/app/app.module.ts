import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OrdersComponent } from './orders/orders.component';
import { RentedComponent } from './rented/rented.component';
import { NewItemDialogComponent } from './dialogs/new-item-dialog';
import { RentItemDialogComponent } from './dialogs/rent-item-dialog';
import { RenthereumService } from './contracts/renthereum.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'rented', component: RentedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrdersComponent,
    RentedComponent,
    NewItemDialogComponent,
    RentItemDialogComponent,
  ],
  entryComponents: [NewItemDialogComponent, RentItemDialogComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [RenthereumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
