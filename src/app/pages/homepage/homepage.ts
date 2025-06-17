import { Component } from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {Info} from '../../components/info/info';
import {CardGrid} from '../../components/card-grid/card-grid';

@Component({
  selector: 'app-homepage',
  imports: [
    Hero,
    Info,
    CardGrid
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
