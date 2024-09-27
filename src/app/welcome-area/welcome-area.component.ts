import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-area',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './welcome-area.component.html',
  styleUrl: './welcome-area.component.scss'
})
export class WelcomeAreaComponent {
  items = [
    'welcome.span4',
    'welcome.span2',
    'welcome.span1',
    'welcome.span3'
  ];
}
