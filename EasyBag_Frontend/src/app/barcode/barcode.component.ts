import { Component } from '@angular/core';
import { FlightInfoService } from '../../shared/service/flight-info/flight-info.service';


@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
})
export class BarcodeComponent {

  userInput: string = '';
  showAlert: Boolean = false;
  alertMessage: string = '';


  constructor(private flightInfoService : FlightInfoService,
  
  ) { }

  ngOnInit() {
  }
  
  submitBarcode() {
  if (this.userInput != null) {
     this.showAlert = true;
     setTimeout(() => {
      this.showAlert = false;
    }, 5000);

    this.flightInfoService.barcodeScan(this.userInput).subscribe(
      response => {
        console.log('Barcode scanned successfully:', response);
      },
      error => {
        console.error('Error scanning barcode:', error);
      }
    );
    
    this.alertMessage='The Baggage has been scanned Successfully with barcode: ' + this.userInput;
    this.userInput = '';
    }

  }


}