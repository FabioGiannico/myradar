import {Component, OnInit} from '@angular/core';
import {Movie, movies} from '../../mock/dummyMovies';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [
    NgIf
  ],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail implements OnInit{
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.movie = movies.find(m => m.id === Number(id));
    }
  }
}
