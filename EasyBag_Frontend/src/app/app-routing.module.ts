import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { GetFlightInfoComponent } from './get-flight-info/get-flight-info.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { BagClaimStatusComponent } from './bag-claim-status/bag-claim-status/bag-claim-status.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'getFlightInfo', component: GetFlightInfoComponent},
  { path: 'barcode', component: BarcodeComponent},
  { path: 'bag-claim-status', component: BagClaimStatusComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}