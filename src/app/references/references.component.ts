import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  constructor(public translateService: TranslateService) {}
  references = [
    { title: 'references.textbox1', name: 'Maximilian. L' },
    { title: 'references.textbox2', name: 'Nafi. M' },
    { title: 'references.textbox3', name: 'Lukas. N' }
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


