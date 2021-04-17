import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CarComponent,
  },
  { path: 'rentals', component: RentalComponent },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'cars/brand/:brandId',
    component: CarComponent,
  },
  {
    path: 'cars/color/:colorId',
    component: CarComponent,
  },
  {
    path: 'customers',
    component: CustomerComponent,
  },
  {
    path: 'rentals',
    component: RentalComponent,
  },
  {
    path: 'cars/details/:carId',
    component: CarDetailComponent,
  },
  {
    path: 'cars/filter/:brandId/:colorId',
    component: CarComponent,
  },
  {
    path: 'payment/:rental',
    component: PaymentComponent,
  },
  {
    path: 'cars/add',
    component: CarAddComponent,
  },
  {
    path: 'brand/add',
    component: BrandAddComponent,
  },
  {
    path: 'color/add',
    component: ColorAddComponent,
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'cars/update/:carId',
    component: CarUpdateComponent,
  },
  {
    path: 'brand/update/:brandId',
    component: BrandUpdateComponent,
  },
  {
    path: 'color/update/:colorId',
    component: ColorUpdateComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
