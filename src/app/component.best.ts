import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: "best",
  templateUrl: "best.component.html"
})
export class BestComponent {
  constructor(private router: Router) {}
}
