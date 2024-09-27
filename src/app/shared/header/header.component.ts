import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  selectedLanguage: string = 'EN';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get menuIcon() {
    return this.isMenuOpen ? '../../../assets/img/menuactivate.svg' : '../../../assets/img/menu.png';
  }

  toggleLanguage() {
    if (this.selectedLanguage === 'EN') {
      this.selectedLanguage = 'DE';
      this.translate.use('de');
    } else {
      this.selectedLanguage = 'EN';
      this.translate.use('en');

    }
}

}







  




