import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableTopComponent } from './components/data-table/data-table-top/data-table-top.component';
import { DataTableBottomComponent } from './components/data-table/data-table-bottom/data-table-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataTableTopComponent,
    DataTableBottomComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
