import { Component, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
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
export class MapComponent implements OnInit {
  places = [];
  
  constructor(
    private _httpService: HttpService,
    private _elementRef: ElementRef
  ) {} 

  ngOnInit() {
    this._httpService
      .getPlaces()
      .subscribe(resPlacesData => (this.places = resPlacesData));
    this.places.sort();

    // $$(this._elementRef.nativeElement).find
    // $$("#rateYo").rateYo({
    //   numStars: 5,
    //   starWidth: "45px",
    //   ratedFill: "brown",
    //   precision: 1.0,
    //   rating: "3.5",
    //   spacing: "10px",
    //   onSet: function(rating, rateYoInstance) {
    //     alert("Rating is set to:" + rating);
    //   }
    // });
  }
  loggedIn() {
    //console.log("yayyy", localStorage.getItem("profile"));
    if (localStorage.getItem("profile")) {
      return true;
    } else {
      return false;
    }
    // return tokenNotExpired();
  }

  ngAfterViewChecked() {
    // $(document).ready(function() {
    //   /* 1. Visualizing things on Hover - See next part for action on click */
    //   $("#stars li")
    //     .on("mouseover", function() {
    //       var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on
    //       // Now highlight all the stars that's not after the current hovered star
    //       $(this)
    //         .parent()
    //         .children("li.star")
    //         .each(function(e) {
    //           if (e < onStar) {
    //             $(this).addClass("hover");
    //           } else {
    //             $(this).removeClass("hover");
    //           }
    //         });
    //     })
    //     .on("mouseout", function() {
    //       $(this)
    //         .parent()
    //         .children("li.star")
    //         .each(function(e) {
    //           $(this).removeClass("hover");
    //         });
    //     });
    //   /* 2. Action to perform on click */
    //   $("#stars li").on("click", function() {
    //     var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    //     var stars = $(this)
    //       .parent()
    //       .children("li.star");
    //     for (var i = 0; i < stars.length; i++) {
    //       $(stars[i]).removeClass("selected");
    //     }
    //     for (i = 0; i < onStar; i++) {
    //       $(stars[i]).addClass("selected");
    //     }
    //     // JUST RESPONSE (Not needed)
    //     var ratingValue = parseInt(
    //       $("#stars li.selected")
    //         .last()
    //         .data("value"),
    //       10
    //     );
    //     var msg = "";
    //     if (ratingValue > 1) {
    //       msg = "Thanks! You rated this " + ratingValue + " stars.";
    //     } else {
    //       msg =
    //         "We will improve ourselves. You rated this " +
    //         ratingValue +
    //         " stars.";
    //     }
    //     responseMessage(msg);
    //   });
    // });
    function responseMessage(msg) {
      $(".success-box").fadeIn(200);
      $(".success-box div.text-message").html("<span>" + msg + "</span>");
    }
    // //Called after every check of the component's view. Applies to components only.
    // //Add 'implements AfterViewChecked' to the class.
  }
}
