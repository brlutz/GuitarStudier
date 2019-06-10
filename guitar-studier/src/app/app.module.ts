import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JazzComponent } from './jazz/jazz.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TriadsComponent } from './triads/triads.component';

const appRoutes: Routes = [
  { path: 'jazz', component: JazzComponent, data: { title: 'Jazz' }  },
  { path: 'triads', component: TriadsComponent, data: { title: 'Triads' }  },
  { path: '', component: HomeComponent, data: { title: 'Home' }, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } }
];


@NgModule({
  declarations: [
    AppComponent,
    JazzComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    TriadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
