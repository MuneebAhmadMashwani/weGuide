import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { RatingModule } from "primeng/primeng";

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpService } from "./httpservices";

@Component({
  moduleId: module.id,
  selector: "business",
  templateUrl: "business.component.html"
})
export class BusinessComponent implements OnInit {
  //////Getting Places from MongoDb
  //results: any;

  places = [];
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this._httpService
      .getPlaces()
      .subscribe(resPlacesData => (this.places = resPlacesData));

    //   console.log("Getting Places from Database");
    //   this.results = null;
    //   $.ajax({
    //     type: "GET",
    //     url: "/api/places"
    //   })
    //     .done(function(data) {
    //       this.results = data;
    //       console.log(this.results);
    //       //EventStore.event = data;
    //       // users.splice(_.indexOf(users, _.findWhere(users, { uId : 117175967810648931400})), 1);
    //     })
    //     .fail(function(data) {
    //       console.log("failed");
    //     });
  }
}
