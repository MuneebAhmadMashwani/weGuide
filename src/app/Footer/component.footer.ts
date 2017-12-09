import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "my-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.css"]
})
export class FooterComponent {
  constructor(private router: Router) {}
}
