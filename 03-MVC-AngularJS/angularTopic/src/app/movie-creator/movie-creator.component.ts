

import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-movie-creator',
  templateUrl: './movie-creator.component.html',
  styleUrls: ['./movie-creator.component.css']
})
export class MovieCreatorComponent implements OnInit {

  form: FormGroup;
  movie: Movie = {
    id: null,
    title: '',
    releaseDate: null,
    originalLanguage: '',
    overview: ''
  };


  constructor(private movieService: MovieService, private formBuilder: FormBuilder) {

  }
  ngOnInit() {
  }

  onAddMovie() {
    this.movie.title = this.form.get('title').value;
    this.movie.releaseDate = this.form.get('releaseDate').value;
    this.movie.originalLanguage = this.form.get('originalLanguage').value;
    this.movie.overview = this.form.get('overview').value;

    this.movieService.addMovie(this.movie);
  }

}

