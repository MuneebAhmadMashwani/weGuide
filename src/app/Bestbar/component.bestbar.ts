import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: "best-bar",
  templateUrl: "best.bar.html",
  styleUrls: ["bestbar.css"]
})
export class BestbarComponent {
  constructor(private router: Router) {}
}
