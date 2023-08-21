import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingComponent } from './components/landing/landing.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { JoinCardComponent } from './components/join-card/join-card.component';
import { BasicCardComponent } from './components/basic-card/basic-card.component';
import { LandingJoinComponent } from './components/landing-join/landing-join.component';
import { JoinInfoComponent } from './components/join-info/join-info.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { LandingActivitiesComponent } from './components/landing-activities/landing-activities.component';
import { LandingChronologyComponent } from './components/landing-chronology/landing-chronology.component';
import { ChronologyCardComponent } from './components/chronology-card/chronology-card.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    WikiComponent,
    FooterComponent,
    JoinCardComponent,
    BasicCardComponent,
    LandingJoinComponent,
    JoinInfoComponent,
    AuthCallbackComponent,
    LandingActivitiesComponent,
    LandingChronologyComponent,
    ChronologyCardComponent,
    SvgIconComponent,
    ChronologyCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
