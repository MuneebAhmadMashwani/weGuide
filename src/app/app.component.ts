import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  template: ` 
  <navbar></navbar> 
  <router-outlet></router-outlet> 
  `
})
export class AppComponent {}
