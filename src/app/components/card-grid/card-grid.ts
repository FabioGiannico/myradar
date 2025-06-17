import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Card} from '../card/card';
import {Movie, movies} from '../../mock/dummyMovies';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-grid',
  imports: [
    NgForOf,
    Card,
    RouterLink
  ],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css'
})
export class CardGrid implements OnInit{

  favouriteMovies: Movie[] = [];
  ngOnInit() {
    const stored = localStorage.getItem('favourites');
    this.favouriteMovies = stored ? JSON.parse(stored) : [];
  }


  allMovies: Movie[] = movies;
  currentIndex = 0;

  get visibleMovies() {
    return this.allMovies.slice(this.currentIndex, this.currentIndex + 3);
  }

  nextMovie() {
    if (this.currentIndex + 3 < this.allMovies.length) {
      this.currentIndex += 3;
    }
  }

  prevMovie() {
    if (this.currentIndex >= 3) {
      this.currentIndex -= 3;
    }
  }
}
