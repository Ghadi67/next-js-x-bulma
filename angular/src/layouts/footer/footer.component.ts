import { Component } from '@angular/core';
import { Footer, I_text } from 'src/vars/constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    links : Footer[] = I_text;
}
