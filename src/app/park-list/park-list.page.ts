import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ParkData } from './../providers/park-data';
import { Park } from './../interfaces/park';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage implements OnInit {
  parks: Array<Park> = [];
  searchQuery: string = '';

  constructor(public parkData: ParkData, public router: Router) {
    parkData.getParks().then( data => {
      this.parks = data;
    })
   }

  goParkDetails(theParkData) {
    let url = '/tabs/details/' + theParkData.id
    this.router.navigate([url]);
  }

  getParks(event) {
    // Reset items back to all of the items
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
    // set queryString to the value of the searchbar
    let queryString = event.target.value;
    if (queryString !== undefined) {
      // if the value is an empty string don't filter the items
      if (queryString.trim() == '') {
        return;
      }
      this.parkData.getFilteredParks(queryString).then(theResult => {
        this.parks = theResult;
      })
    }
  }

  resetList(event) {
    // Reset items back to all of the items
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
  }

  ngOnInit() {
  }

}
