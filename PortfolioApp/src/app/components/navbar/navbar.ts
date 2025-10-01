import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgIf, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isLightTheme = false;
  toggleTheme() {
    document.body.classList.toggle('light-theme');
    this.isLightTheme = document.body.classList.contains('light-theme');
  }
}
