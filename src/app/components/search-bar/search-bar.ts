import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [
    MatIconModule,
    NgIf,
    FormsModule
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  showFilter: boolean = false;

  filter = {
    min: 0,
    max: 10
  };

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilter() {
    console.log('Filtri applicati:', this.filter);
    // Qui puoi emettere un evento o aggiornare una lista filtrata
    this.showFilter = false;
  }
}
