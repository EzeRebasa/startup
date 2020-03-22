import { AppRoutingModule } from './app-routine.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieListComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
