import {Component, OnInit} from '@angular/core';
import {Movie} from '../../mock/dummyMovies';
import {NgForOf, NgIf} from '@angular/common';
import {Card} from '../../components/card/card';
import {ExploreGrid} from '../../components/explore-grid/explore-grid';

@Component({
  selector: 'app-myradar',
  imports: [
    NgIf,
    NgForOf,
    Card,
    ExploreGrid
  ],
  templateUrl: './myradar.html',
  styleUrl: './myradar.css'
})
export class Myradar implements OnInit {
  favouriteMovies: Movie[] = [];
  hasFavourite: boolean = false;

  ngOnInit() {
    this.getFavourites();
    console.log(this.favouriteMovies);
  }

  getFavourites() {
    const stored = localStorage.getItem('favourites');
    this.favouriteMovies = stored ? JSON.parse(stored) : [];
    this.hasFavourite = this.favouriteMovies.length > 0;
  }
}
