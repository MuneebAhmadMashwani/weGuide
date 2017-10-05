import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusinessComponent } from "./component.business";
import { BestComponent } from "./component.best";
import { CompanyComponent } from "./component.company";
import { BodyComponent } from "./component.body";
import { NavbarComponent } from "./component.navbar";
import { MapComponent } from "./map/map.component";

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
    path: "best",
    component: BestComponent
  },
  {
    path: "map",
    component: MapComponent
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
  BestComponent
];
