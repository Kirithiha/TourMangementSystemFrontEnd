import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyBookingComponent } from './components/admin/bookings/verify-booking/verify-booking.component';
import { ViewBookingByCustomerComponent } from './components/admin/bookings/view-booking-by-customer/view-booking-by-customer.component';
import { ViewBookingByPackageComponent } from './components/admin/bookings/view-booking-by-package/view-booking-by-package.component';
import { ViewBookingByPendingsComponent } from './components/admin/bookings/view-booking-by-pendings/view-booking-by-pendings.component';
import { ViewBookingComponent } from './components/admin/bookings/view-booking/view-booking.component';
import { AddCityComponent } from './components/admin/city/add-city/add-city.component';
import { ManageCityComponent } from './components/admin/city/manage-city/manage-city.component';
import { UpdatecityComponent } from './components/admin/city/updatecity/updatecity.component';
import { ViewCityByStateComponent } from './components/admin/city/view-city-by-state/view-city-by-state.component';
import { ViewCityComponent } from './components/admin/city/view-city/view-city.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddPlaceComponent } from './components/admin/place/add-place/add-place.component';
import { ManagePlaceComponent } from './components/admin/place/manage-place/manage-place.component';
import { UpdatePlaceComponent } from './components/admin/place/update-place/update-place.component';
import { ViewPlaceByCityComponent } from './components/admin/place/view-place-by-city/view-place-by-city.component';
import { ViewPlaceComponent } from './components/admin/place/view-place/view-place.component';
import { AddStateComponent } from './components/admin/state/add-state/add-state.component';
import { ManagestatesComponent } from './components/admin/state/managestates/managestates.component';
import { UpdatestateComponent } from './components/admin/state/updatestate/updatestate.component';
import { ViewStateComponent } from './components/admin/state/view-state/view-state.component';
import { AddPackageComponent } from './components/admin/tourPackage/add-package/add-package.component';
import { ManageDetailsComponent } from './components/admin/tourPackage/manage-details/manage-details.component';
import { ManagePackageComponent } from './components/admin/tourPackage/manage-package/manage-package.component';
import { UpdateItineraryComponent } from './components/admin/tourPackage/update-itinerary/update-itinerary.component';
import { ViewDetailsComponent } from './components/admin/tourPackage/view-details/view-details.component';
import { ViewPackageByCityComponent } from './components/admin/tourPackage/view-package-by-city/view-package-by-city.component';
import { ViewPackageByTypeComponent } from './components/admin/tourPackage/view-package-by-type/view-package-by-type.component';
import { ViewPackageComponent } from './components/admin/tourPackage/view-package/view-package.component';
import { AddTypeComponent } from './components/admin/type/add-type/add-type.component';
import { ManageTypeComponent } from './components/admin/type/manage-type/manage-type.component';
import { ViewTypeComponent } from './components/admin/type/view-type/view-type.component';
import { ForgetPasswordComponent } from './components/credentials/forget-password/forget-password.component';
import { LoginComponent } from './components/credentials/login/login.component';
import { SignupComponent } from './components/credentials/signup/signup.component';
import { AddBookingsComponent } from './components/customer/add-bookings/add-bookings.component';
import { HomeComponent } from './components/customer/home/home.component';
import { PasswordChangeComponent } from './components/customer/password-change/password-change.component';
import { StudentDashboardComponent } from './components/customer/student-dashboard/student-dashboard.component';
import { ViewBookingsCustomerComponent } from './components/customer/view-bookings-customer/view-bookings-customer.component';
import { ViewPackagesDetailsComponent } from './components/customer/view-packages-details/view-packages-details.component';
import { ViewPackagesListComponent } from './components/customer/view-packages-list/view-packages-list.component';
import { ViewPlacesListComponent } from './components/customer/view-places-list/view-places-list.component';

const routes: Routes = [
  {path : "admin", component : DashboardComponent},
  {path : "addstate", component : AddStateComponent},
  {path : "viewstate", component : ViewStateComponent},
  {path : "managestate", component : ManagestatesComponent},
  {path : "updatestate", component : UpdatestateComponent},
  {path : "addcity", component : AddCityComponent},
  {path : "viewcity", component : ViewCityComponent},
  {path : "viewcitybystate", component : ViewCityByStateComponent},
  {path : "managecity", component : ManageCityComponent},
  {path : "updatecity", component : UpdatecityComponent},
  {path : "addplace", component : AddPlaceComponent},
  {path : "viewplace", component : ViewPlaceComponent},
  {path : "viewplacebycity", component : ViewPlaceByCityComponent},
  {path : "manageplace", component : ManagePlaceComponent},
  {path : "updateplace", component : UpdatePlaceComponent},
  {path : "addtype", component : AddTypeComponent},
  {path : "viewtype", component : ViewTypeComponent},
  {path : "managetype", component : ManageTypeComponent},
  {path : "addpackage", component : AddPackageComponent},
  {path : "viewpackage", component : ViewPackageComponent},
  {path : "viewpackagebycity", component : ViewPackageByCityComponent},
  {path : "viewpackagebytype", component : ViewPackageByTypeComponent},
  {path : "view", component : ViewDetailsComponent},
  {path : "managepackage", component : ManagePackageComponent},
  {path : "updatepackage", component : ManageDetailsComponent},
  {path : "viewbooking", component : ViewBookingComponent},
  {path : "viewbookingbycustomer", component : ViewBookingByCustomerComponent},
  {path : "viewbookingbypackage", component : ViewBookingByPackageComponent},
  {path : "viewbookingbypendings", component : ViewBookingByPendingsComponent},
  {path : "verify", component : VerifyBookingComponent},
  {path : "login", component : LoginComponent},
  {path : "signup", component : SignupComponent},
  {path : "forgotpassword", component : ForgetPasswordComponent},
  {path : "dashboard", component : StudentDashboardComponent},
  {path : "home", component : HomeComponent},
  {path : "viewplaceslist", component : ViewPlacesListComponent},
  {path : "viewpackageslist", component : ViewPackagesListComponent},
  {path : "viewpackagedetails", component : ViewPackagesDetailsComponent},
  {path : "addbooking", component : AddBookingsComponent},
  {path : "viewbookingcustomer", component : ViewBookingsCustomerComponent},
  {path : "changepassword", component : PasswordChangeComponent},
  {path : "updateitinerary", component : UpdateItineraryComponent},
  {path : "customers", component : CustomersComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
