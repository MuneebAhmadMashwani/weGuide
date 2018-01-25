import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../httpservices";
@Component({
  moduleId: module.id,
  selector: "best-place",
  templateUrl: "best.place.html",
  styleUrls: ["best.place.css"]
})
export class BestplaceComponent {
  places = [];
  constructor(private router: Router, private _httpService: HttpService) {}

  ngOnInit() {
    this._httpService.getHospitals().subscribe(
      data => {
        this.places = data;
        console.log("Login successful on BestComponent");
        console.log(this.places);
      },
      err => {
        console.log("Something went wrong! Login not successful");
      }
    );
  }
}
