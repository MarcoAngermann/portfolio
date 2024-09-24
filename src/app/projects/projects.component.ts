import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Join',
      subtitle: 'Task Management Tool',
      description: 'A collaboration platform to manage tasks.',
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
      title: 'El Pollo Loco',
      subtitle: '2D Game',
      description: 'A funny 2D platformer game.',
      technologies: [
        { iconUrl: '../../assets/img/htmlgreen.svg' },
        { iconUrl: '../../assets/img/cssgreen.svg' },
        { iconUrl: '../../assets/img/javascriptgreen.svg' }
      ],
      imageUrl: '../../assets/img/pollo-hover.svg',
      infoUrl: '../../assets/img/elpollobig.png'
    },
    {
      title: 'DA Bubble',
      subtitle: 'Social Media App',
      description: 'A social media platform for sharing content.',
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
}


