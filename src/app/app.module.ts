import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/Forms";
import { AgmCoreModule } from "@agm/core";
import { AppComponent } from "./app.component";
import { ButtonModule, RatingModule } from "primeng/primeng";

import { AgmDirectionModule } from "agm-direction";
import { AutoCompleteModule } from "primeng/primeng";

import { NavbarComponent } from "./component.navbar";
import { BodyComponent } from "./component.body";
import { BusinessComponent } from "./component.business";
import { homeComponent } from "./component.home";
import { BestComponent } from "./Bestrestaurant/component.best";
import { MapComponent } from "./map/map.component";
import { CompanyComponent } from "./component.company";
import { NearbyComponent } from "./NearbyPlaces/nearby.component";

import { BesthotelComponent } from "./Besthotel/component.besthotel";
import { BestplaceComponent } from "./Bestplace/component.bestplace";
import { BestbarComponent } from "./Bestbar/component.bestbar";
import { FooterComponent } from "./footer/component.footer";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ProfileComponent } from "./component.profile";
import { HttpService } from "./httpservices";

import * as $ from "jquery";
import { BarRatingModule } from "ngx-bar-rating";
import { AddPlaceComponent } from "./add-place/add-place.component";

import { AllBusinessComponent } from "./all-business/all-business.component";
import { HospitalsComponent } from './hospitals/hospitals.component';
import { ParksComponent } from './parks/parks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    BusinessComponent,
    CompanyComponent,
    BestComponent,
    homeComponent,
    BesthotelComponent,
    BestplaceComponent,
    BestbarComponent,
    MapComponent,
    FooterComponent,
    PagenotfoundComponent,
    ProfileComponent,
    NearbyComponent,
    AllBusinessComponent,
    HospitalsComponent,
    ParksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,

    FormsModule,
    ButtonModule,
    RatingModule,
    AutoCompleteModule,
    RouterModule,
    BarRatingModule,

    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCXDqAJTro0We2QFN6jH3zwbFMndDMomTI"
    }),
    AgmDirectionModule
  ],
  providers: [HttpService],

  bootstrap: [AppComponent]
})
export class AppModule {}
export class Model {
  onclick() {
    //execute action
  }
}
