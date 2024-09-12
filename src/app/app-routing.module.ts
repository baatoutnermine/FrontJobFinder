import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent},  
  {path:"detail", component: OfferDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
