import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../mock/dummyMovies';
import {NgStyle} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [
    NgStyle,
    MatIconModule
  ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() movie!: Movie;

  isFavourite: boolean = false;

  changeFavourite() {
    this.isFavourite = !this.isFavourite;

    this.changeLocalStorage()
  }

  changeLocalStorage() {
    const stored = localStorage.getItem('favourites');
    let favouriteMovies: Movie[] = stored ? JSON.parse(stored) : [];

    const index = favouriteMovies.findIndex(m => m.id === this.movie.id);

    if (index >= 0) {
      favouriteMovies.splice(index, 1);
    } else {
      favouriteMovies.push(this.movie);
    }

    localStorage.setItem('favourites', JSON.stringify(favouriteMovies));
  }
}
