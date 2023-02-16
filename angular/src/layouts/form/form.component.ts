import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
@Output() shortenLink = new EventEmitter();

onShortenLink() : void{
 this.shortenLink.emit(console.log("hi"));
}
}
