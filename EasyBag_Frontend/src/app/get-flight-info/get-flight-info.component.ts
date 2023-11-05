import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightInfoService } from 'src/shared/service/flight-info/flight-info.service';

@Component({
  selector: 'app-get-flight-info',
  templateUrl: './get-flight-info.component.html',
})
export class GetFlightInfoComponent {

  flightData: any = [];

  constructor(private flightInfoService : FlightInfoService
  ) { }

  ngOnInit() {
    this.flightInfoService.getFlights('2023-11-05').subscribe((data) => {
      this.flightData = data;
      console.log(this.flightData);
    },
    (error) => {
      console.error('Error occurred:', error);
    });
  }


}