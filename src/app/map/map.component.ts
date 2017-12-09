import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../httpservices";

@Component({
  selector: "map",
  templateUrl: "./map.component.html"
})
export class MapComponent implements OnInit {
  places = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this._httpService
      .getPlaces()
      .subscribe(resPlacesData => (this.places = resPlacesData));
    this.places.sort();
  }
}
