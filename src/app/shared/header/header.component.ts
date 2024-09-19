import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('open menu');
  }

  get menuIcon() {
    return this.isMenuOpen ? '../../../assets/img/menuactivate.svg' : '../../../assets/img/menu.png';
  }
}



