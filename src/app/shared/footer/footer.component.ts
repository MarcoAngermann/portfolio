import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprintComponent } from '../../imprint/imprint.component';
import { PolicyComponent } from '../../policy/policy.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,ImprintComponent,PolicyComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
