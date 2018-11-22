import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListRowComponent } from './components/list-row/list-row.component';
import { PartDetailComponent } from './components/part-detail/part-detail.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { ClarityModule } from '@clr/angular';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListRowComponent,
    PartDetailComponent,
    SupplierComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
