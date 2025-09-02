import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(public translateService: TranslateService) {
    this.preloadImages();
  }

  projects = [
    {
      number: '01',
      title: 'Join',
      subtitle: 'project-info.subtitle',
      githubUrl: 'https://github.com/MarcoAngermann/join-project',
      livetestUrl: 'https://marco-angermann.developerakademie.net/join/',
      description: 'project-info.description',
      technologies: [
        { iconUrl: './assets/img/javascriptgreen.svg' },
        { iconUrl: './assets/img/htmlgreen.svg' },
        { iconUrl: './assets/img/cssgreen.svg' },
        { iconUrl: './assets/img/firebasegreen.svg' }
      ],
      imageUrl: './assets/img/joinbig.png',
      infoUrl: './assets/img/joinbig.png'
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      githubUrl: 'https://github.com/MarcoAngermann/el-pollo-loco',
      livetestUrl: 'https://marco-angermann.developerakademie.net/el-pollo-loco/',
      subtitle: 'project-info.subtitle1',
      description: 'project-info.description1',
      technologies: [
        { iconUrl: './assets/img/htmlgreen.svg' },
        { iconUrl: './assets/img/cssgreen.svg' },
        { iconUrl: './assets/img/javascriptgreen.svg' }
      ],
      imageUrl: './assets/img/elpollobig.png',
      infoUrl: './assets/img/elpollobig.png'
    },
    {
      number: '03',
      title: 'Pokedex',
      githubUrl: 'https://github.com/MarcoAngermann/pokedex',
      livetestUrl: 'https://marco-angermann.developerakademie.net/pokedex/',
      subtitle: 'project-info.subtitle2',
      description: 'project-info.description2',
      technologies: [
        { iconUrl: './assets/img/angulargreen.svg' },
        { iconUrl: './assets/img/typescriptgreen.svg' },
        { iconUrl: './assets/img/htmlgreen.svg' },
        { iconUrl: './assets/img/cssgreen.svg' },
        { iconUrl: './assets/img/firebasegreen.svg' }
      ],
      imageUrl: './assets/img/dabubblebig.png',
      infoUrl: './assets/img/dabubblebig.png'
    },
    {
      number: '04',
      title: 'Videoflix',
      githubUrl: 'https://github.com/MarcoAngermann/DA-Bubb',
      livetestUrl: 'https://da-bubble.netlify.app/',
      subtitle: 'project-info.subtitle2',
      description: 'project-info.description2',
      technologies: [
        { iconUrl: './assets/img/angulargreen.svg' },
        { iconUrl: './assets/img/typescriptgreen.svg' },
        { iconUrl: './assets/img/htmlgreen.svg' },
        { iconUrl: './assets/img/cssgreen.svg' },
        { iconUrl: './assets/img/firebasegreen.svg' }
      ],
      imageUrl: './assets/img/dabubblebig.png',
      infoUrl: './assets/img/dabubblebig.png'
    }
  ];

  hoveredImageUrl: string | null = null;
  selectedProject: any = null;

  async preloadImages(): Promise<void> {
    const preloadPromises = this.projects.flatMap(project => [
      this.preloadSingleImage(project.imageUrl),
      this.preloadSingleImage(project.infoUrl),
    ]);
  
    await Promise.all(preloadPromises);
    console.log('All images preloaded');
  }
  
  private preloadSingleImage(url: string): Promise<void> {
    return new Promise<void>(resolve => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => {
        console.error(`Failed to preload image: ${url}`);
        resolve(); 
      };
    });
  }
  

  getHoveredImageStyle(): { [key: string]: string } | null {
    return this.hoveredImageUrl ? { '--hovered-image': `url(${this.hoveredImageUrl})` } : null;
  }

  setHoveredProject(index: number): void {
    const project = this.projects[index];
    if (project) {
      this.hoveredImageUrl = project.imageUrl;
      document.documentElement.style.setProperty('--hovered-image', `url(${project.imageUrl})`);
    }
  }

  clearHoveredProject(): void {
    this.hoveredImageUrl = null;
    document.documentElement.style.setProperty('--hovered-image', 'none');
  }

  selectProject(project: any): void {
    this.selectedProject = project;
  }

  next(): void {
    const currentIndex = this.projects.findIndex(p => p === this.selectedProject);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }
}







