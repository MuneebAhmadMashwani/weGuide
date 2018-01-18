import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../httpservices";

@Component({
  selector: "app-hospitals",
  templateUrl: "./hospitals.component.html",
  styleUrls: ["./hospitals.component.css"]
})
export class HospitalsComponent implements OnInit {
  hospitals = [];
  dir: any;
  modalData: any;
  constructor(private router: Router, private _httpService: HttpService) {}

  ngOnInit() {
    this._httpService.getHospitals().subscribe(
      data => {
        this.hospitals = data;
        console.log(data);
        console.log("Login successful on HospitalComponent");
        console.log(this.hospitals);
      },
      err => {
        console.log("Something went wrong! Login not successful");
      }
    );

    this.dir = {
      origin: { lat: 33.6593, lng: 73.0238 },
      destination: { lat: 33.6468, lng: 73.0376 }
    };
  }

  openModal(data) {
    this.modalData = data;
    console.log(data);
  }
  loggedIn() {
    if (localStorage.getItem("profile")) {
      return true;
    } else {
      return false;
    }
    // return tokenNotExpired();
  }
}
