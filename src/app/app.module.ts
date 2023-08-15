import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingComponent } from './components/landing/landing.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { JoinCardComponent } from './components/join-card/join-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    WikiComponent,
    FooterComponent,
    JoinCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
