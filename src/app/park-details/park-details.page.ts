import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParkData } from './../providers/park-data';

@Component({
  selector: 'app-park-details',
  templateUrl: './park-details.page.html',
  styleUrls: ['./park-details.page.scss'],
})
export class ParkDetailsPage implements OnInit {

  id: string;
  parkInfo: Object;

  constructor(public route: ActivatedRoute, public parkData: ParkData) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.parkInfo = parkData.getPark(this.id);
  }

  ngOnInit() {
  }

}
