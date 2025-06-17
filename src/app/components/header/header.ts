import { Component } from '@angular/core';
import {MobileMenu} from '../mobile-menu/mobile-menu';
import {NavMenu} from '../nav-menu/nav-menu';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MobileMenu,
    NavMenu,
    MatIcon,
    NgIf,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
