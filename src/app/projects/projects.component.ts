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

  // Switch-Status: true = Frontend, false = Backend
  isShowingFrontend: boolean = true;

  frontendProjects = [
    {
      number: '01',
      title: 'Join',
      subtitle: 'project-info.subtitle',
      githubUrl: 'https://github.com/MarcoAngermann/join-project',
      livetestUrl: 'https://marco-angermann.developerakademie.net/join/',
      description: 'project-info.description',
      technologies: [
        { iconUrl: './assets/img/htmlgreen.svg' },
        { iconUrl: './assets/img/cssgreen.svg' },
        { iconUrl: './assets/img/javascriptgreen.svg' },
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
        { iconUrl: './assets/img/htmlgreen.svg' },
        { iconUrl: './assets/img/cssgreen.svg' },
        { iconUrl: './assets/img/javascriptgreen.svg' },
      ],
      imageUrl: './assets/img/dabubblebig.png',
      infoUrl: './assets/img/dabubblebig.png'
    }
  ];

  backendProjects = [
    {
      number: '01',
      title: 'Join',
      subtitle: 'backend-project-info.subtitle',
      githubUrl: 'https://github.com/MarcoAngermann/django-crm',
      livetestUrl: 'https://marco-angermann-backend.herokuapp.com/',
      description: 'backend-project-info.description',
      technologies: [
        { iconUrl: './assets/img/Python.svg' },
        { iconUrl: './assets/img/Django.svg' },
        { iconUrl: './assets/img/SQL.svg' }
      ],
      imageUrl: './assets/img/django-crm-big.png',
      infoUrl: './assets/img/django-crm-big.png'
    },
    {
      number: '02',
      title: 'Coderr',
      subtitle: 'backend-project-info.subtitle1',
      githubUrl: 'https://github.com/MarcoAngermann/rest-api',
      livetestUrl: 'https://marco-api.herokuapp.com/',
      description: 'backend-project-info.description1',
      technologies: [
        { iconUrl: './assets/img/Python.svg' },
        { iconUrl: './assets/img/Django.svg' },
        { iconUrl: './assets/img/SQL.svg' }
      ],
      imageUrl: './assets/img/joinbig.png',
      infoUrl: './assets/img/rest-api-big.png'
    },
    {
      number: '03',
      title: 'Videoflix',
      subtitle: 'backend-project-info.subtitle2',
      githubUrl: 'https://github.com/MarcoAngermann/microservices',
      livetestUrl: 'https://marco-microservices.cloud/',
      description: 'backend-project-info.description2',
      technologies: [
        { iconUrl: './assets/img/Python.svg' },
        { iconUrl: './assets/img/Django.svg' },
        { iconUrl: './assets/img/PostgreSQL.svg' },
        { iconUrl: './assets/img/Docker.svg' }
      ],
      imageUrl: './assets/img/microservices-big.png',
      infoUrl: './assets/img/microservices-big.png'
    }
  ];

  hoveredImageUrl: string | null = null;
  selectedProject: any = null;

  // Getter für die aktuell anzuzeigenden Projekte
  get currentProjects() {
    return this.isShowingFrontend ? this.frontendProjects : this.backendProjects;
  }

  // Getter für den aktuellen Titel
  get currentProjectsTitle(): string {
    return this.isShowingFrontend ? 'projects.frontend-title' : 'projects.backend-title';
  }

  // Switch zwischen Frontend und Backend
  switchToFrontend(): void {
    this.isShowingFrontend = true;
    this.clearHoveredProject();
    this.selectedProject = null;
  }

  switchToBackend(): void {
    this.isShowingFrontend = false;
    this.clearHoveredProject();
    this.selectedProject = null; 
  }

  // Alle bestehenden Funktionen bleiben unverändert
  async preloadImages(): Promise<void> {
    // Preload sowohl Frontend als auch Backend Bilder
    const allProjects = [...this.frontendProjects, ...this.backendProjects];
    const preloadPromises = allProjects.flatMap(project => [
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
    const project = this.currentProjects[index];
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
    const currentIndex = this.currentProjects.findIndex(p => p === this.selectedProject);
    const nextIndex = (currentIndex + 1) % this.currentProjects.length;
    this.selectedProject = this.currentProjects[nextIndex];
  }

  getMainTechnologies(project: any): string[] {
    const techMap: { [key: string]: string } = {
      // Frontend Technologies
      './assets/img/javascriptgreen.svg': 'JavaScript',
      './assets/img/htmlgreen.svg': 'HTML',
      './assets/img/cssgreen.svg': 'CSS',
      './assets/img/firebasegreen.svg': 'Firebase',
      './assets/img/angulargreen.svg': 'Angular',
      './assets/img/typescriptgreen.svg': 'TypeScript',
      // Backend Technologies
      './assets/img/Python.svg': 'Python',
      './assets/img/Django.svg': 'Django',
      './assets/img/SQL.svg': 'PostgreSQL',
      './assets/img/Docker.svg': 'Docker',
      './assets/img/Mysql.svg': 'MySQL',
    };

    return project.technologies.map((tech: any) => techMap[tech.iconUrl] || 'Unknown');
  }
}







