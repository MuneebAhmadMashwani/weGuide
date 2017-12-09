import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: "best-place",
  templateUrl: "best.place.html",
  styleUrls: ["best.place.css"]
})
export class BestplaceComponent {
  constructor(private router: Router) {}
}
