import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/Forms";
import { HttpModule } from "@angular/http";
import { AgmCoreModule } from "@agm/core";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/primeng";
import { AutoCompleteModule } from "primeng/primeng";
import { NavbarComponent } from "./component.navbar";
import { BodyComponent } from "./component.body";
import { BusinessComponent } from "./component.business";
import { homeComponent } from "./component.home";
import { BestComponent } from "./component.best";
import { MapComponent } from "./map/map.component";
import { CompanyComponent } from "./component.company";
import { RatingModule } from "primeng/primeng";
//import { FooterComponent } from "./component.footer";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    BusinessComponent,
    CompanyComponent,
    BestComponent,
    homeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    RatingModule,
    AutoCompleteModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCXDqAJTro0We2QFN6jH3zwbFMndDMomTI"
    })
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
export class Model {
  onclick() {
    //execute action
  }
}
