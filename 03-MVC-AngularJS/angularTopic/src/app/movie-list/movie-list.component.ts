import { Movie } from './../movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  search() {
    window.alert('Looking for results');
  }

  onNotify() {
    window.alert('You will be notified when the movie is on the show board');
  }

  onRemoveMovie(movieTitle: string) {

    this.movies = this.movieService.removeMovie(movieTitle);

  }


}

