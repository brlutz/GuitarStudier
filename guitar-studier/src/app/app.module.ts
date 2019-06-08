import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JazzComponent } from './jazz/jazz.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' }, pathMatch: 'full'  },
  { path: 'jazz', component: JazzComponent, data: { title: 'Jazz' }  },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } }
];


@NgModule({
  declarations: [
    AppComponent,
    JazzComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent
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
