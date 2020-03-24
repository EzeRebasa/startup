

import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FormControl, FormGroup, RequiredValidator, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-movie-creator',
  templateUrl: './movie-creator.component.html',
  styleUrls: ['./movie-creator.component.css']
})
export class MovieCreatorComponent implements OnInit {

  form: FormGroup;
  movie: Movie = {
    title: '',
    releaseDate: '',
    originalLanguage: '',
    overview: ''
  };


  constructor(private movieService: MovieService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      releaseDate: new FormControl('', Validators.required),
      originalLanguage: new FormControl('', Validators.required),
      overview: new FormControl('', Validators.required)
    });
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

  onModiftMovie() {

  }
}

