import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusinessComponent } from "./component.business";
import { BestComponent } from "./Bestrestaurant/component.best";
import { CompanyComponent } from "./component.company";
import { BodyComponent } from "./component.body";
import { FooterComponent } from "./footer/component.footer";
import { NavbarComponent } from "./component.navbar";
import { MapComponent } from "./map/map.component";
import { BesthotelComponent } from "./Besthotel/component.besthotel";
import { BestplaceComponent } from "./Bestplace/component.bestplace";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { BestbarComponent } from "./Bestbar/component.bestbar";
import { ProfileComponent } from "./component.profile";
import { AllBusinessComponent } from "./all-business/all-business.component";
import { HospitalsComponent } from "./hospitals/hospitals.component";
import { ParksComponent } from "./parks/parks.component";
export const routes: Routes = [
  {
    path: "",
    component: BodyComponent
  },

  {
    path: "Home",
    children: [{ path: "business", component: BusinessComponent }]
  },
  {
    path: "my-footer",
    component: FooterComponent
  },
  {
    path: "best",
    component: BestComponent
  },
  {
    path: "app-parks",
    component: ParksComponent
  },
  {
    path: "best-hotel",
    component: BesthotelComponent
  },
  {
    path: "app-hospitals",
    component: HospitalsComponent
  },
  {
    path: "best-place",
    component: BestplaceComponent
  },
  {
    path: "best-bar",
    component: BestbarComponent
  },
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "all-business",
    component: AllBusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  NavbarComponent,
  BodyComponent,
  BusinessComponent,
  MapComponent,
  BestComponent,
  FooterComponent,
  PagenotfoundComponent,
  AllBusinessComponent
];
