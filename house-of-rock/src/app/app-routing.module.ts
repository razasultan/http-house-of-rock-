import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { U30Component } from './u30/u30.component';
import { SamstagComponent } from './samstag/samstag.component';
import { KutschnComponent } from './kutschn/kutschn.component';
import { HomeComponent } from './home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component'


const routes: Routes = [
  {path: '' , component: HomeComponent},
  { path: 'home' , component: HomeComponent },
  { path: 'events' , component: EventsComponent },
  { path: 'gallary' , component: GalleryComponent },
  { path: 'contect_us' , component: ContectUsComponent },
  { path: 'privacyPolicy' , component: PrivacyPolicyComponent },
  { path: 'U30' , component: U30Component },
  { path: 'samstag' , component: SamstagComponent },
  { path: 'kutschn' , component: KutschnComponent },
  { path: '**' , component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
