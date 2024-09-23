import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  hoveredImageUrl: string | null = null;

  setHoveredProject(imageUrl: string | null): void {
    this.hoveredImageUrl = imageUrl;
  }

  projektInfo() {
    console.log('Projekt Info');
  }
}

