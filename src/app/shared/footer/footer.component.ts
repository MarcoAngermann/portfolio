import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
    standalone: true,
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

  scrollToTop():void{
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
