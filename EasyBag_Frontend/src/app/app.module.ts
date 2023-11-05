import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { GetFlightInfoModule } from './get-flight-info/get-flight-info.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BarcodeModule } from './barcode/barcode.module';
import { BagClaimStatusModule } from './bag-claim-status/bag-claim-status/bag-claim-status.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    GetFlightInfoModule,
    HttpClientModule,
    BarcodeModule,
    BagClaimStatusModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
