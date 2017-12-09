import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: "best-hotel",
  templateUrl: "best.hotel.html",
  styleUrls: ["besthotel.css"]
})
export class BesthotelComponent {
  constructor(private router: Router) {}
}
