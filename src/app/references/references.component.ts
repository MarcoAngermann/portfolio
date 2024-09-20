import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    { title: 'Marco has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.', name: 'Maximilian. L' },
    { title: 'Marco was a key player in ensuring our project was completed on time. His knowledge and dedication are unparalleled.', name: 'Nafi. M' },
    { title: 'Working with Marco is always a pleasure. He brings fresh ideas and creative solutions to the table.', name: 'Schmidt' }
  ];

  currentIndex = 0;
  totalItems = 9;

  get repeatedReferences() {
    return Array.from({ length: this.totalItems }, (_, i) => this.references[i % this.references.length]);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
  }

}


