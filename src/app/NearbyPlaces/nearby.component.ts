import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../httpservices";
import * as $ from "jquery";
import { Element } from "@angular/compiler";

@Component({
  selector: "nearby",
  templateUrl: "./nearby.component.html"
})
export class NearbyComponent implements OnInit, AfterViewInit {
  latitude: any;

  longitude: any;
  nearby: any;
  constructor(
    private _httpService: HttpService,
    private _elementRef: ElementRef,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.nearby = data.nearby;
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
    }
  }
  showPosition = function(position) {
    console.log(
      "Lan",
      position.coords.latitude,
      "Long",
      position.coords.longitude
    );

    // var latitude = latitude;
    // var longitude =longitude;

    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log("Lat:::", this.latitude);
  };

  getNearbyPlaces = function() {
    var _nearby = {
      latitude: this.latitude,
      longitude: this.longitude,
      nearby: this.nearby
    };
    this._httpService.getNearbyPlaces(_nearby).subscribe(resNearby => {
      console.log(resNearby, "Yeah! reviews working");
    });
  };

  loggedIn() {
    if (localStorage.getItem("profile")) {
      return true;
    } else {
      return false;
    }
    // return tokenNotExpired();
  }

  ngAfterViewChecked() {}
}
