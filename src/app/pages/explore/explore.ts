import { Component } from '@angular/core';
import {ExploreGrid} from '../../components/explore-grid/explore-grid';
import {Movie, movies} from '../../mock/dummyMovies';

@Component({
  selector: 'app-explore',
  imports: [
    ExploreGrid
  ],
  templateUrl: './explore.html',
  styleUrl: './explore.css'
})
export class Explore {
  movies: Movie[] = movies;
  showSearchBar: boolean = true;
}
