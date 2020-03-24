import { Movie } from './../movie';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class MovieService {

  movies: Movie[] = [
    {
      title: 'El Camino: A Breaking Bad Movie',
      releaseDate: '2019-10-11',
      originalLanguage: 'en',
      // tslint:disable-next-line: max-line-length
      overview: 'In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.'
    }, {
      title: 'It Chapter Two',
      releaseDate: '2019-09-06',
      originalLanguage: 'en',

      // tslint:disable-next-line: max-line-length
      overview: '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.'
    }, {
      title: 'John Wick: Chapter 3 - Parabellum',
      releaseDate: '2019-05-17',
      originalLanguage: 'en',

      // tslint:disable-next-line: max-line-length
      overview: 'Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin\u2019s guild, the High Table, John Wick is excommunicado, but the world\u2019s most ruthless hit men and women await his every turn.',

    }, {
      title: 'Joker',
      releaseDate: '2019-10-04',
      originalLanguage: 'en',

      // tslint:disable-next-line: max-line-length
      overview: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.'

    }
  ];

  constructor() { }

  getMovie(movieId: number): Movie {

    return this.movies[movieId];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  addMovie(newMovie: Movie) {
    if (this.movies.find(movie => movie.title === newMovie.title)) {
      this.movies.push(newMovie);
    } else {
      console.log('The movie already exists!');
    }
  }

  removeMovie(movieTitle: string): Movie[] {
    this.movies = this.movies.filter(movie => movie.title !== movieTitle);
    return this.movies;
  }


}
