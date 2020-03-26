import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCreatorComponent } from './movie-creator/movie-creator.component';


const routes: Routes = [
  { path: '', component: MovieListComponent, pathMatch: 'full' },
  { path: 'movies/:movieId', component: MovieDetailsComponent },
  { path: 'movie-creator', component: MovieCreatorComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-editor/:movieId', component: MovieEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
