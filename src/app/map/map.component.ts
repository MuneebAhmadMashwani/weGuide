import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../httpservices";
import * as $ from "jquery";
//import * as $$ from "rateyo/src/jquery.rateyo";
import { Element } from "@angular/compiler";

@Component({
  selector: "map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit, AfterViewInit {
  places = [];
  rating = [];
  review: string;
  mySearch: any;

  modalData: any;

  faoRating = 1;
  constructor(
    private _httpService: HttpService,
    private _elementRef: ElementRef,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    // this._httpService
    //   .getPlaces()
    //   .map(resPlacesData => (this.places = resPlacesData));
    // console.log("msla", this.places);
    // this.places.sort();
  }
  ngOnInit() {
    console.log("this.mysearch", this.mySearch);

    this.route.params.subscribe(data => {
      if (data.mySearch != "empty") {
        this.places = JSON.parse(data.mySearch);
      } else {
        this._httpService.getPlaces().subscribe(
          data => {
            this.places = data;
            console.log("Login successful");
            console.log(this.places);
          },
          err => {
            console.log("Something went wrong! Login not successful");
          }
        );
      }
    });
    console.log("dekho", this.places);
  }
  setRating(place, event) {
    // event.preventDefault();
    //event.stopImmediatePropagation();
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
