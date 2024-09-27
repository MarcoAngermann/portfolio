import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule ,HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  title = 'portfolio';
}

