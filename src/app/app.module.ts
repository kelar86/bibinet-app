import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListRowComponent } from './components/list-row/list-row.component';
import { PartDetailComponent } from './components/part-detail/part-detail.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';

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
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
