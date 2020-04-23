import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result = [];
  constructor(private wikipedia: WikipediaService) {}

  onSubmit(input: string) {
    this.wikipedia.search(input).subscribe((response) => {
      this.result = response;
    });
  }
}
