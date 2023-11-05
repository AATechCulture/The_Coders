import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { FlightInfoService } from 'src/shared/service/flight-info/flight-info.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [],
  providers: [
    FlightInfoService
  ],
  exports: [HomeComponent],
})
export class HomeModule { }