import { Component } from '@angular/core';
import { WelcomeAreaComponent } from "../welcome-area/welcome-area.component";
import { AboutMeComponent } from '../about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { SkillSectionComponent } from '../skill-section/skill-section.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';



@Component({
    standalone: true,
    selector: 'app-landing-page',
    imports: [CommonModule, AboutMeComponent, WelcomeAreaComponent, SkillSectionComponent, ProjectsComponent, ReferencesComponent, ContactSectionComponent],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {}
