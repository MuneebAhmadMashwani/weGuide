import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "map",

  template: `
  <navbar></navbar>
  <map></map>
  `,
  templateUrl: "./map.component.html"
})
export class MapComponent implements OnInit {
  lat: number = 32;
  lng: number = 74;
  constructor(private router: Router) {}

  ngOnInit() {}
}
