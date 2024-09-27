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
  selectedLanguage: string = 'EN'; // Standard auf Englisch

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get menuIcon() {
    return this.isMenuOpen ? '../../../assets/img/menuactivate.svg' : '../../../assets/img/menu.png';
  }

  toggleLanguage() {
    this.selectedLanguage = this.selectedLanguage === 'DE' ? 'EN' : 'DE';
  }
}







  




