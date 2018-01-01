import { Component, OnInit, ElementRef } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";

import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpService } from "./httpservices";
import {
  FUNCTION_TYPE,
  NULL_EXPR
} from "@angular/compiler/src/output/output_ast";
// import "materialize-css";
// import { MaterializeDirective } from "angular2-materialize";
// import { ddslick } from "../../node_modules/ddslick/src/jquery.ddslick.js";
//import * as $ from "ddslick";
//import * as $ from "jquery-ui";
import * as $$ from "jquery";
// import "jqueryui";
// declare var $: any;

@Component({
  moduleId: module.id,
  selector: "body",

  templateUrl: "body.component.html",
  styles: ["li:hover{background-color:#5F9EA0}"]
})
export class BodyComponent implements OnInit {
  places = [];
  _find: string;
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
  camelize = function toTitleCase(str) {
    console.log("ssa", str);
    if (str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  };

  //////////////////////////////////////////////////////
  btnSearch = function() {
    var find = {
      _find: "empty"
    };
    var _find = {
      _find: this.camelize(this._find)
    };

    this._httpService.btnSearch(_find).subscribe(resSearch => {
      console.log("resSearch", resSearch._body);
      if (this._find) {
        this.router.navigate(["/map", { mySearch: resSearch._body }]);
        console.log("IF");
      } else {
        this.router.navigate(["/map", { mySearch: "empty" }]);
        console.log("ELSE");
      }
    });

    // this.router.navigateByUrl("/map");
  };

  //////////////////////////////////////////////////////////
  getLocation() {
    this.router.navigate(["/nearby", { nearby: "restaurant" }]);
  }

  //Show Menu on clicking on Input searchbar
  khuljasimsim = function() {
    // document.getElementById("displaylist").style.display = "block";
  };
  ngAfterViewChecked() {}
}
