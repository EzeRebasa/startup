import { movies } from './../movies';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = movies;

  constructor() { }

  ngOnInit(): void {
  }

  onNotify() {
    window.alert('You will be notified when the movie is on the show board');
  }

}
