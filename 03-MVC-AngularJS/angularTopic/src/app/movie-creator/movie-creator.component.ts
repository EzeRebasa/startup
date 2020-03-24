
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-movie-creator',
  templateUrl: './movie-creator.component.html',
  styleUrls: ['./movie-creator.component.css']
})
export class MovieCreatorComponent implements OnInit {

  movie: Movie;

  movieForm = new FormGroup({
    title: new FormControl(''),
    releaseDate: new FormControl(''),
    originalLanguage: new FormControl(''),
    oveview: new FormControl('')
  });

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.movieForm.value);
  }
  onAddMovie() {
    this.movieService.addMovie(this.movie);
  }

  onModiftMovie() {

  }

}
