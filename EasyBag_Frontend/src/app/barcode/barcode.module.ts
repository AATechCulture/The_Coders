import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeComponent } from './barcode.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BarcodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [BarcodeComponent],
})
export class BarcodeModule { }