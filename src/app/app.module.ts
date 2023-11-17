import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingComponent } from './components/landing/landing.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { BasicCardComponent } from './components/basic-card/basic-card.component';
import { LandingJoinComponent } from './components/landing-join/landing-join.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { LandingActivitiesComponent } from './components/landing-activities/landing-activities.component';
import { LandingChronologyComponent } from './components/landing-chronology/landing-chronology.component';
import { LandingCreatorsComponent } from "./components/landing-creators/landing-creators.component";
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { LandingContactUsComponent } from './components/landing-contact-us/landing-contact-us.component';
import { CreatorCardComponent } from './components/creator-card/creator-card.component';
import { ObserveVisibilityDirective } from './directives/observe-visibility.directive';
import { register } from 'swiper/element/bundle';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    WikiComponent,
    FooterComponent,
    BasicCardComponent,
    LandingJoinComponent,
    AuthCallbackComponent,
    LandingActivitiesComponent,
    LandingChronologyComponent,
    SvgIconComponent,
    LandingCreatorsComponent,
    LandingContactUsComponent,
    CreatorCardComponent,
    ObserveVisibilityDirective,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
