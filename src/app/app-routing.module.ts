import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightListComponent },
  { path: 'user', component: UserInformationComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
