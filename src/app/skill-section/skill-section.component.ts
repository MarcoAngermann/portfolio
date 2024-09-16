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
  skills = [
    {'src': '../../assets/img/html.svg', 'text': 'HTML'},
    {'src': '../../assets/img/css.svg', 'text': 'CSS'},
    {'src': '../../assets/img/javascript.svg', 'text': 'JavaScript'},
    {'src': '../../assets/img/Frame.svg', 'text': 'Material Design'},
    {'src': '../../assets/img/typescript.svg', 'text': 'TypeScript'},
    {'src': '../../assets/img/angular.svg', 'text': 'Angular'},
    {'src': '../../assets/img/Firebase.svg', 'text': 'Firebase'},
    {'src': '../../assets/img/git.svg', 'text': 'GIT'},
    {'src': '../../assets/img/Api.svg', 'text': 'Rest-Api'},
    {'src': '../../assets/img/scrum.svg', 'text': 'Scrum'},
  ];
}
