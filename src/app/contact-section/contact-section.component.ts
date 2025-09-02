import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';


@Component({
    standalone: true,
    selector: 'app-contact-section',
    imports: [ReactiveFormsModule, HttpClientModule, CommonModule, TranslateModule, RouterLink],
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  messageSent: boolean = false;
  errorMessage: string = '';
  private timeoutIds: { [key: string]: any } = {};
  showErrorMessage: { [key: string]: boolean } = {};  

  constructor(private http: HttpClient, private fb: FormBuilder, public translateService: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, this.customEmailValidator()]],
      message: ['', [Validators.required, this.wordCountValidator(10)]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailRegex.test(value);
      return valid ? null : { email: true };
    };
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
      this.http.post('https://www.marco-angermann.de/sendMail.php', this.contactForm.value, { headers })
        .subscribe({
          next: (response: any) => {
            if (response && response.status === 'success') {
              this.messageSent = true;
              this.contactForm.reset();
              this.errorMessage = '';
            } else {
              this.errorMessage = 'Error processing the response. Please try again later.';
            }
          },
          error: (error) => {
            this.errorMessage = 'Error sending the message. Please try again later.';
          }
        });
    } else {
      this.errorMessage = 'Please fill out all fields correctly and ensure the message has at least 10 words.';
    }
  }

  hideErrorMessage(controlName: string) {
    if (this.timeoutIds[controlName]) {
      clearTimeout(this.timeoutIds[controlName]);
    }

    this.timeoutIds[controlName] = setTimeout(() => {
      this.showErrorMessage[controlName] = false;
    }, 3000);  
  }

  clearErrorMessage(controlName: string) {
    this.showErrorMessage[controlName] = true; 
  }

  scrollToTop(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      offset: 0,
    });
  }
}








