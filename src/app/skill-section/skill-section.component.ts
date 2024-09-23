import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {
  Frontendskills = [
    {'src': '../../assets/img/html.svg', 'text': 'HTML'},
    {'src': '../../assets/img/css.svg', 'text': 'CSS'},
    {'src': '../../assets/img/javascript.svg', 'text': 'Java Script'},
    {'src': '../../assets/img/Frame.svg', 'text': 'Material Design'},
    {'src': '../../assets/img/typescript.svg', 'text': 'Type Script'},
    {'src': '../../assets/img/angular.svg', 'text': 'Angular'},
    {'src': '../../assets/img/Firebase.svg', 'text': 'Firebase'},
    {'src': '../../assets/img/git.svg', 'text': 'GIT'},
    {'src': '../../assets/img/Api.svg', 'text': 'Rest-Api'},
    {'src': '../../assets/img/scrum.svg', 'text': 'Scrum'},
  ];

  Backendskills = [
    {'src': '../../assets/img/php.png', 'text': 'PHP'},
    {'src': '../../assets/img/react.png', 'text': 'React'},
    {'src': '../../assets/img/java.png', 'text': 'Java'},
    {'src': '../../assets/img/nodejs.png', 'text': 'NodeJS'},
    {'src': '../../assets/img/mysql.png', 'text': 'MySQL'},
    {'src': '../../assets/img/postgresql.png', 'text': 'PostgreSQL'},
    {'src': '../../assets/img/mongodb.png', 'text': 'MongoDB'},
    {'src': '../../assets/img/mysql.png', 'text': 'MySQL'},
    {'src': '../../assets/img/postgresql.png', 'text': 'PostgreSQL'},
    {'src': '../../assets/img/mongodb.png', 'text': 'MongoDB'},
  ];

  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
