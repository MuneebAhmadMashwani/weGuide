import { Component, OnInit, ElementRef } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpService } from "./httpservices";
import { FUNCTION_TYPE } from "@angular/compiler/src/output/output_ast";
// import "materialize-css";
// import { MaterializeDirective } from "angular2-materialize";
// import { ddslick } from "../../node_modules/ddslick/src/jquery.ddslick.js";
//import * as $ from "ddslick";
import * as $ from "jquery";
// import "jqueryui";
// declare var $: any;

@Component({
  moduleId: module.id,
  selector: "body",

  templateUrl: "body.component.html"
})
export class BodyComponent implements OnInit {
  places = [];

  // categories = [
  //   {
  //     text: "Facebook",
  //     value: 1,
  //     selected: true,
  //     description: "Description with Facebook",
  //     imageSrc: "http://i.imgur.com/XkuTj3B.png"
  //   },
  //   {
  //     text: "Twitter",
  //     value: 2,
  //     selected: true,
  //     description: "Description with Twitter",
  //     imageSrc: "http://i.imgur.com/8ScLNnk.png"
  //   },
  //   {
  //     text: "LinkedIn",
  //     value: 3,
  //     selected: true,
  //     description: "Description with LinkedIn",
  //     imageSrc: "http://i.imgur.com/aDNdibj.png"
  //   },
  //   {
  //     text: "Foursquare",
  //     value: 4,
  //     selected: false,
  //     description: "Description with Foursquare",
  //     imageSrc: "http://i.imgur.com/kFAk2DX.png"
  //   }
  // ];

  constructor(
    private el: ElementRef,
    private _httpService: HttpService,
    private router: Router
  ) {
    this.projectName = "WeGuide";
    // this.assignCopy(); //when you fetch collection from server.  function in last
  }

  ngOnInit() {
    this._httpService
      .getPlaces()
      .subscribe(resPlacesData => (this.places = resPlacesData));

    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
      alert("haan is ma b aa rha ha ye");
      $(this.el.nativeElement)
        .find("#but")
        .on("click", function() {
          alert("Wow ye to chalta ha");
        });
      //      $("#droppp").menu("blur");
    };

    TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  }

  private projectName: string;

  btnClick = function() {
    this.router.navigateByUrl("/map");
  };

  //Show Menu on clicking on Input searchbar
  khuljasimsim = function() {
    document.getElementById("droppp").style.display = "block";
  };
  ngAfterViewChecked() {
    // $("#make-it-slick").on("click", function() {
    //   $("#demo-htmlselect").ddslick();
    // });
    // $("#demo-htmlselect").ddslick({
    //   data: this.categories,
    //   imagePosition: "left",
    //   selectText: "Select your favorite social network",
    //   onSelected: function(data) {
    //     console.log(data);
    //   }
    // });
  }
  // filteredItems = [];
  // assignCopy = function() {
  //   this.filteredItems = Object.assign([], this.places);
  // };

  // filterItem(value) {
  //   console.log("filterItems", this.filteredItems);
  //   if (!value) this.assignCopy(); //when nothing has typed
  //   this.filteredItems = Object.assign([], this.places).filter(
  //     place => place.result.name.toLowerCase().indexOf(value.toLowerCase()) > -1
  //   );
  //   console.log("ye", this.filteredItems);
  // }
}
