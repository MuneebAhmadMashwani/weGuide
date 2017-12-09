import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: "404",
  templateUrl: "pagenotfound.component.html",
  styleUrls: ["pagenotfound.component.css"]
})
export class PagenotfoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
