import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ModalsComponent } from './modals/modals.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/form', component: CustomerFormComponent },
  { path: 'customers/form/:id', component: CustomerFormComponent },
  { path: 'customerDetail', component: CustomerDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersListComponent,
    FooterComponent,
    CustomerFormComponent,
    CustomerDetailComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
