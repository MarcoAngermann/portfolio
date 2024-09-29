import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicyComponent } from './policy/policy.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'imprint', component: ImprintComponent},
    {path: 'policy', component: PolicyComponent}
];
