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
import { NoteFlashcardComponent } from './note-flashcard/note-flashcard.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'jazz', component: JazzComponent, data: { title: 'Jazz' }  },
  { path: 'triads', component: TriadsComponent, data: { title: 'Triads' }  },
  { path: 'sight-reading', component: NoteFlashcardComponent, data: { title: 'Sight Reading' }  },
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
    TriadsComponent,
    NoteFlashcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
