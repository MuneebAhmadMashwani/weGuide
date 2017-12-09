import { Component, Input, OnInit, AfterViewChecked } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { tokenNotExpired, JwtHelper } from "angular2-jwt";

declare var Auth0Lock;

import * as $ from "jquery";

@Component({
  moduleId: module.id,
  selector: "navbar",
  templateUrl: "navbar.component.html"
})
export class NavbarComponent {
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  constructor() {
    this.projectName = "WeGuide";
  }
  options: {
    allowSignUp: false;
  };
  lock = new Auth0Lock(
    "ov6lG3OjBF8oWTtGWeO4XiWMozKnjZ3w",
    "weguide.auth0.com",
    this.options
  );

  jwtHelper: JwtHelper = new JwtHelper();

  login() {
    var self = this;

    this.lock.show((err: string, profile: string, id_token: string) => {
      if (err) {
        throw new Error(err);
      }

      localStorage.setItem("profile", JSON.stringify(profile));
      localStorage.setItem("id_token", id_token);

      console.log(
        this.jwtHelper.decodeToken(id_token),
        this.jwtHelper.getTokenExpirationDate(id_token),
        this.jwtHelper.isTokenExpired(id_token)
      );
      self.loggedIn();
    });
  }
  logout() {
    localStorage.removeItem("profile");
    localStorage.removeItem("id_token");

    this.loggedIn();
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
    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    });
  }

  private projectName: string;
}
