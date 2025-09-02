import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    standalone: true,
    selector: 'app-policy',
    imports: [CommonModule, TranslateModule],
    templateUrl: './policy.component.html',
    styleUrl: './policy.component.scss'
})
export class PolicyComponent {
  constructor(public translateService: TranslateService) {}
}
