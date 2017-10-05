import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "navbar",
  templateUrl: "navbar.component.html",

  host: {
    "(window:scroll)": "updateHeader($event)"
  }
})
export class NavbarComponent {
  private projectName: string;
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  constructor() {
    this.projectName = "WeGuide";
  }
  updateHeader(evt) {
    this.currPos =
      (window.pageYOffset || evt.target.scrollTop) -
      (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
