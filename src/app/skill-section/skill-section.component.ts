import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {
  showFrontend = true; // Default to showing frontend skills
  constructor(public translateService: TranslateService) {}

  Frontendskills = [
    { 'src': '../../assets/img/html.svg', 'text': 'HTML' },
    { 'src': '../../assets/img/css.svg', 'text': 'CSS' },
    { 'src': '../../assets/img/javascript.svg', 'text': 'JavaScript' },
    { 'src': '../../assets/img/Frame.svg', 'text': 'Material Design' },
    { 'src': '../../assets/img/typescript.svg', 'text': 'TypeScript' },
    { 'src': '../../assets/img/angular.svg', 'text': 'Angular' },
    { 'src': '../../assets/img/Firebase.svg', 'text': 'Firebase' },
    { 'src': '../../assets/img/git.svg', 'text': 'GIT' },
    { 'src': '../../assets/img/Api.svg', 'text': 'Rest-Api' },
    { 'src': '../../assets/img/scrum.svg', 'text': 'Scrum' },
  ];

  Backendskills = [
    { 'src': '../../assets/img/Linux.svg', 'text': 'Linux' },
    { 'src': '../../assets/img/Python.svg', 'text': 'Python' },
    { 'src': '../../assets/img/Docker.svg', 'text': 'Docker' },
    { 'src': '../../assets/img/SQL.svg', 'text': 'SQL' },
    { 'src': '../../assets/img/Django.svg', 'text': 'Django' },
    { 'src': '../../assets/img/Redis.svg', 'text': 'Redis' },
    { 'src': '../../assets/img/PostgreSQL.svg', 'text': 'PostgreSQL' },
    { 'src': '../../assets/img/Heroku.svg', 'text': 'Heroku' },
    { 'src': '../../assets/img/Flask.svg', 'text': 'Flask' },
    { 'src': '../../assets/img/Cloud.svg', 'text': 'Cloud' },
  ];

  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  toggleSkills() {
    this.showFrontend = !this.showFrontend; // Switch between frontend and backend skills
  }

  scrollToTop():void{
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  ngAfterViewInit(): void {

    AOS.init({
      duration: 2000,
      offset: 0,
    });
  }
}

