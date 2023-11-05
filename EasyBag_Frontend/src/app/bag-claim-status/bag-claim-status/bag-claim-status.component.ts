import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightInfoService } from 'src/shared/service/flight-info/flight-info.service';

@Component({
  selector: 'app-bag-claim-status',
  templateUrl: './bag-claim-status.component.html',
  styleUrls: ['./bag-claim-status.component.css']
})
export class BagClaimStatusComponent {

  barcode: String = 'BC1234A'; 

      currentBagOnBelt: number = 10;
      customerBag: number = 30;
      count: number = 0;
      intervalId: any;

  constructor(private flightInfoService : FlightInfoService
  ) { }

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.count = this.customerBag - this.currentBagOnBelt;
      this.currentBagOnBelt++;
      if (this.count <= 0) {
        clearInterval(this.intervalId);
        this.flightInfoService.barcodeScan(this.barcode).subscribe(
          response => {
            console.log('Barcode scanned successfully:', response);
          },
          error => {
            console.error('Error scanning barcode:', error);
          }
        );
      }
    }, 3000);
  }
}