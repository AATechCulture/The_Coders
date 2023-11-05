import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GetFlightInfoComponent } from './get-flight-info.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GetFlightInfoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [GetFlightInfoComponent],
})
export class GetFlightInfoModule { }