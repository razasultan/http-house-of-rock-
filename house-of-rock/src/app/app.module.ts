import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { U30Component } from './u30/u30.component';
import { SamstagComponent } from './samstag/samstag.component';
import { KutschnComponent } from './kutschn/kutschn.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    GalleryComponent,
    ContectUsComponent,
    PrivacyPolicyComponent,
    U30Component,
    SamstagComponent,
    KutschnComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
