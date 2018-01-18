import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RatingModule } from "primeng/primeng";
import { HttpService } from "../httpservices";

@Component({
  selector: 'all-business',
  templateUrl: './all-business.component.html',
  styleUrls: ['./all-business.component.css']
})
export class AllBusinessComponent implements OnInit {

  places = [];
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this._httpService
      .getPlaces()
      .subscribe(resPlacesData => (this.places = resPlacesData));


}
}
