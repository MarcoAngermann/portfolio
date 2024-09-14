import { Component } from '@angular/core';
import { WelcomeAreaComponent } from "../welcome-area/welcome-area.component";
import { AboutMeComponent } from '../about-me/about-me.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,AboutMeComponent,WelcomeAreaComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {}
