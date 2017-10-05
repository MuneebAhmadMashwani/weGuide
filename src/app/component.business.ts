import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { RatingModule } from "primeng/primeng";

@Component({
  moduleId: module.id,
  selector: "business",
  template: `
  `,

  templateUrl: "business.component.html"
})
export class BusinessComponent {
  constructor(private router: Router) {}
}
export class ModelComponent {
  val: number;

  msg: string;

  handleRate(event) {
    this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
    this.msg = "Rating Cancelled";
  }
}
