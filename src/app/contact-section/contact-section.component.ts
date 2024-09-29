import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { PolicyComponent } from '../policy/policy.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule,TranslateModule, RouterLink, PolicyComponent],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  messageSent: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder,public translateService: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, this.wordCountValidator(10)]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  wordCountValidator(minWords: number) {
    return (control: AbstractControl) => {
      const value = control.value || '';
      const wordCount = value.trim().split(/\s+/).length;
      return wordCount >= minWords ? null : { wordCount: true };
    };
  }

  submitForm() {
    if (this.contactForm.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('marcoangermann@hotmail.de/contact.php', this.contactForm.value, { headers })
        .subscribe({
          next: () => {
            this.messageSent = true;
            this.contactForm.reset();
          },
          error: () => {
            this.errorMessage = 'Error sending the message. Please try again later.';
          }
        });
    } else {
      this.errorMessage = 'Please fill out all fields correctly and ensure the message has at least 10 words.';
    }
  }

  scrollToTop():void{
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}


