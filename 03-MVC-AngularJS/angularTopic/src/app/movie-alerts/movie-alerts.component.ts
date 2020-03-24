import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-alerts',
  templateUrl: './movie-alerts.component.html',
  styleUrls: ['./movie-alerts.component.css']
})
export class MovieAlertsComponent implements OnInit {

  @Input() movie: Movie;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
