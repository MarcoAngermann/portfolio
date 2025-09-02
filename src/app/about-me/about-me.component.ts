import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';



@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule,TranslateModule],
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


