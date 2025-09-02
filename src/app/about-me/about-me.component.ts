import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';



@Component({
    selector: 'app-about-me',
    imports: [CommonModule, TranslateModule, RouterLink],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(public translateService: TranslateService) {}
  
  ngAfterViewInit(): void {

    AOS.init({
      duration: 2000,
      offset: 0,
      
    });
  }

  }


