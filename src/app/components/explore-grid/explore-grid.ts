import {Component, Input} from '@angular/core';
import {Movie, movies} from '../../mock/dummyMovies';
import {Card} from '../card/card';
import {NgForOf, NgIf} from '@angular/common';
import {SearchBar} from '../search-bar/search-bar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-explore-grid',
  imports: [
    Card,
    NgForOf,
    SearchBar,
    NgIf,
    RouterLink
  ],
  templateUrl: './explore-grid.html',
  styleUrl: './explore-grid.css'
})
export class ExploreGrid {
  @Input() movies: Movie[] = [];
  @Input() showSearchBar: boolean = true;
}
