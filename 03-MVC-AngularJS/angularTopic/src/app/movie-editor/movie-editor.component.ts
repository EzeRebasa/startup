import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {

  form: FormGroup;
  movie: Movie = {
    id: null,
    title: '',
    releaseDate: null,
    originalLanguage: '',
    overview: ''
  };
  constructor(private movieService: MovieService, private formBuilder: FormBuilder, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movie = this.movieService.getMovie(Number(params.get('movieId')));
    });

    console.log(this.movie);
    this.transferData(this.movie);
  }
  /* ----------- TODO : make it work properly :(  ----------------- */

  transferData(movie: Movie) {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      releaseDate: new FormControl('', Validators.required),
      originalLanguage: new FormControl('', Validators.required),
      overview: new FormControl('', Validators.required)
    });

    this.form.setValue({
      title: movie.title,
      releaseDate: movie.releaseDate,
      originalLanguage: movie.originalLanguage,
      overview: movie.overview
    });
  }

  onEditMovie(movieId: number) {

    this.movie.title = this.form.get('title').value;
    this.movie.releaseDate = this.form.get('releaseDate').value;
    this.movie.originalLanguage = this.form.get('originalLanguage').value;
    this.movie.overview = this.form.get('overview').value;

    this.movieService.movies = this.movieService.editMovie(movieId, this.movie);
  }
}
