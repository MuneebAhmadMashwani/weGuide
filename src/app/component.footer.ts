import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "footer",
  templateUrl: "footer.component.html"
})
export class FooterComponent {
  constructor(private router: Router) {}
}
