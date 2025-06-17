import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [MatSidenavModule, RouterLink],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.css'
})
export class MobileMenu {

}
