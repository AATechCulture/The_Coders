import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BagClaimStatusComponent } from './bag-claim-status.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BagClaimStatusComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [BagClaimStatusComponent],
})
export class BagClaimStatusModule { }