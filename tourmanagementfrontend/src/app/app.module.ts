import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddStateComponent } from './components/admin/state/add-state/add-state.component';
import { ViewStateComponent } from './components/admin/state/view-state/view-state.component';
import { StateService } from './services/state/state.service';
import { ManagestatesComponent } from './components/admin/state/managestates/managestates.component';
import { UpdatestateComponent } from './components/admin/state/updatestate/updatestate.component';
import { UpdatecityComponent } from './components/admin/city/updatecity/updatecity.component';
import { AddCityComponent } from './components/admin/city/add-city/add-city.component';
import { ManageCityComponent } from './components/admin/city/manage-city/manage-city.component';
import { ViewCityComponent } from './components/admin/city/view-city/view-city.component';
import { ViewCityByStateComponent } from './components/admin/city/view-city-by-state/view-city-by-state.component';
import { CityService } from './services/city/city.service';
import { PlaceService } from './services/place/place.service';
import { AddPlaceComponent } from './components/admin/place/add-place/add-place.component';
import { ViewPlaceComponent } from './components/admin/place/view-place/view-place.component';
import { ViewPlaceByCityComponent } from './components/admin/place/view-place-by-city/view-place-by-city.component';
import { ManagePlaceComponent } from './components/admin/place/manage-place/manage-place.component';
import { UpdatePlaceComponent } from './components/admin/place/update-place/update-place.component';
import { TypeService } from './services/type/type.service';
import { AddTypeComponent } from './components/admin/type/add-type/add-type.component';
import { ViewTypeComponent } from './components/admin/type/view-type/view-type.component';
import { ManageTypeComponent } from './components/admin/type/manage-type/manage-type.component';
import { TourPackageService } from './services/tourPackage/tour-package.service';
import { PackagePlaceService } from './services/packagePlace/package-place.service';
import { AddPackageComponent } from './components/admin/tourPackage/add-package/add-package.component';
import { ViewPackageComponent } from './components/admin/tourPackage/view-package/view-package.component';
import { ViewPackageByCityComponent } from './components/admin/tourPackage/view-package-by-city/view-package-by-city.component';
import { ViewPackageByTypeComponent } from './components/admin/tourPackage/view-package-by-type/view-package-by-type.component';
import { ManagePackageComponent } from './components/admin/tourPackage/manage-package/manage-package.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewDetailsComponent } from './components/admin/tourPackage/view-details/view-details.component';
import { ManageDetailsComponent } from './components/admin/tourPackage/manage-details/manage-details.component';
import { ViewBookingComponent } from './components/admin/bookings/view-booking/view-booking.component';
import { ViewBookingByCustomerComponent } from './components/admin/bookings/view-booking-by-customer/view-booking-by-customer.component';
import { ViewBookingByPackageComponent } from './components/admin/bookings/view-booking-by-package/view-booking-by-package.component';
import { VerifyBookingComponent } from './components/admin/bookings/verify-booking/verify-booking.component';
import { ViewBookingByPendingsComponent } from './components/admin/bookings/view-booking-by-pendings/view-booking-by-pendings.component';
import { LoginComponent } from './components/credentials/login/login.component';
import { SignupComponent } from './components/credentials/signup/signup.component';
import { StudentDashboardComponent } from './components/customer/student-dashboard/student-dashboard.component';
import { ForgetPasswordComponent } from './components/credentials/forget-password/forget-password.component';
import { HomeComponent } from './components/customer/home/home.component';
import { AddBookingsComponent } from './components/customer/add-bookings/add-bookings.component';
import { ViewBookingsCustomerComponent } from './components/customer/view-bookings-customer/view-bookings-customer.component';
import { ViewPlacesListComponent } from './components/customer/view-places-list/view-places-list.component';
import { ViewPackagesListComponent } from './components/customer/view-packages-list/view-packages-list.component';
import { ViewPackagesDetailsComponent } from './components/customer/view-packages-details/view-packages-details.component';
import { PasswordChangeComponent } from './components/customer/password-change/password-change.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddStateComponent,
    ViewStateComponent,
    ManagestatesComponent,
    UpdatestateComponent,
    UpdatecityComponent,
    AddCityComponent,
    ManageCityComponent,
    ViewCityComponent,
    ViewCityByStateComponent,
    AddPlaceComponent,
    ViewPlaceComponent,
    ViewPlaceByCityComponent,
    ManagePlaceComponent,
    UpdatePlaceComponent,
    AddTypeComponent,
    ViewTypeComponent,
    ManageTypeComponent,
    AddPackageComponent,
    ViewPackageComponent,
    ViewPackageByCityComponent,
    ViewPackageByTypeComponent,
    ManagePackageComponent,
    ViewDetailsComponent,
    ManageDetailsComponent,
    ViewBookingComponent,
    ViewBookingByCustomerComponent,
    ViewBookingByPackageComponent,
    VerifyBookingComponent,
    ViewBookingByPendingsComponent,
    LoginComponent,
    SignupComponent,
    StudentDashboardComponent,
    ForgetPasswordComponent,
    HomeComponent,
    AddBookingsComponent,
    ViewBookingsCustomerComponent,
    ViewPlacesListComponent,
    ViewPackagesListComponent,
    ViewPackagesDetailsComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType : 'danger'
    }),
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    NgSelectModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [
    StateService,
    CityService,
    PlaceService,
    TypeService,
    TourPackageService,
    PackagePlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
