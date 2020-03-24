
import { MovieService } from '../app/services/movie.service';
import { AppRoutingModule } from './app-routine.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAlertsComponent } from './movie-alerts/movie-alerts.component';
import { MovieCreatorComponent } from './movie-creator/movie-creator.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
   declarations: [
      AppComponent,
      MovieDetailsComponent,
      MovieListComponent,
      TopBarComponent,
      MovieAlertsComponent,
      MovieCreatorComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
   ],
   exports: [
      RouterModule
   ],
   providers: [
      MovieService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
