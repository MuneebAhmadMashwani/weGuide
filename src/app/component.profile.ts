import { Component } from "@angular/core";
import { CanActivate } from "@angular/router";
import { tokenNotExpired } from "angular2-jwt";

@Component({
  selector: "profile",
  template: `<h1>Welcome to Profile</h1>`
})
export class ProfileComponent {}
