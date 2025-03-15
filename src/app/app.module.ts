import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventModule } from './event/event.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageLayoutComponent } from './layouts/landing-page-layout/landing-page-layout.component';
import { DashboardPageLayoutComponent } from './layouts/dashboard-page-layout/dashboard-page-layout.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LandingPageLayoutComponent,
    DashboardPageLayoutComponent,
    DashboardHomeComponent,
    EventCardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileDropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, EventModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
