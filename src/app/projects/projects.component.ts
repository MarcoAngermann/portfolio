import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(public translateService: TranslateService) {}

  projects = [
    {
      number: '01',
      title: 'Join',
      subtitle: 'project-info.subtitle',
      githubUrl: 'https://github.com/MarcoAngermann/join-project',
      livetestUrl: 'https://marco-angermann.developerakademie.net/join/',
      description: 'project-info.description',
      technologies: [
        { iconUrl: '../../assets/img/javascriptgreen.svg' },
        { iconUrl: '../../assets/img/htmlgreen.svg' },
        { iconUrl: '../../assets/img/cssgreen.svg' },
        { iconUrl: '../../assets/img/firebasegreen.svg' }
      ],
      imageUrl: '../../assets/img/join-hover.svg',
      infoUrl: '../../assets/img/joinbig.png'
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      githubUrl: 'https://github.com/MarcoAngermann/el-pollo-loco',
      livetestUrl: 'https://marco-angermann.developerakademie.net/el-pollo-loco/',
      subtitle: 'project-info.subtitle1',
      description: 'project-info.description1',
      technologies: [
        { iconUrl: '../../assets/img/htmlgreen.svg' },
        { iconUrl: '../../assets/img/cssgreen.svg' },
        { iconUrl: '../../assets/img/javascriptgreen.svg' }
      ],
      imageUrl: '../../assets/img/pollo-hover.svg',
      infoUrl: '../../assets/img/elpollobig.png'
    },
    {
      number: '03',
      title: 'DA Bubble',
      githubUrl: 'https://github.com/MarcoAngermann/DA-Bubble',
      livetestUrl: 'https://da-bubble.netlify.app/',
      subtitle: 'project-info.subtitle2',
      description: 'project-info.description2',
      technologies: [
        { iconUrl: '../../assets/img/angulargreen.svg' },
        { iconUrl: '../../assets/img/typescriptgreen.svg' },
        { iconUrl: '../../assets/img/htmlgreen.svg' },
        { iconUrl: '../../assets/img/cssgreen.svg' },
        { iconUrl: '../../assets/img/firebasegreen.svg' }
      ],
      imageUrl: '../../assets/img/bubble-hover.svg',
      infoUrl: '../../assets/img/dabubblebig.png'
    }
  ];

  infoImageUrl: string | null = null;
  hoveredImageUrl: string | null = null;
  showProjectInfo: boolean = false;
  selectedProject: any = null;

  setHoveredProject(imageUrl: string | null): void {
    this.hoveredImageUrl = imageUrl;
   
  }

  infoImage(infoUrl: string | null): void {
    this.infoImageUrl = infoUrl;
  }

  selectProject(project: any): void {
    this.selectedProject = project;
    this.showProjectInfo = true;
  }

  nextProject: any = this.projects[0];
  currentIndex: number = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[this.currentIndex];
  }
}


