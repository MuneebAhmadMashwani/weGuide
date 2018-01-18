import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../httpservices";
import * as $ from "jquery";
//import * as $$ from "rateyo/src/jquery.rateyo";
import { Element } from "@angular/compiler";
import { empty } from "rxjs/Observer";
import { concat } from "rxjs/operators/concat";

@Component({
  selector: "map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  places = [];
  rating = [];
  review: string;
  mySearch: any;
  dir: any;
  modalData: any;

  faoRating = 1;
  constructor(
    private _httpService: HttpService,
    private _elementRef: ElementRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(data => {
      if (data.mySearch != "empty") {
        this.places = JSON.parse(data.mySearch);
        console.log(this.places, data.mySearch, this.mySearch);
        if (this.places.length == 0) {
          alert("Such Place Does Not Exist");
          this.router.navigate([""]);
        }
      } else {
        this._httpService.getPlaces().subscribe(
          data => {
            this.places = data;
            console.log("Login successful");
          },
          err => {
            console.log("Something went wrong! Login not successful");
          }
        );
      }
    });

    this.dir = {
      origin: { lat: 33.6593, lng: 73.0238 },
      destination: { lat: 33.6468, lng: 73.0376 }
    };
  }
  setRating(place, event) {
    console.log(event);
    console.log("place", place.types);
    var email = JSON.parse(localStorage.getItem("profile")).email;
    var _rating = {
      userid: email,
      rating: event,
      types: place.types,
      place_id: place.place_id
    };
    this._httpService.setRating(_rating).subscribe(resRating => {
      console.log(resRating, "Yeah! it's working");
    });
  }

  postReviews(place) {
    var email = JSON.parse(localStorage.getItem("profile")).email;
    console.log("Reviews", this.review);
    console.log("ID:", place._id);
    console.log("Rating:", place.result[0].rating);
    var _review = {
      id: place._id,
      author_name: email,
      language: "en",
      time: new Date(),
      text: this.review,
      rating: place.result[0].rating
    };
    this._httpService.postReviews(_review).subscribe(resReview => {
      console.log(resReview, "Yeah! reviews working");
    });
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

  ngAfterViewChecked() {}
}
