import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  input = '';

  constructor() {}

  ngOnInit(): void {}

  // inputChanged(value: string) {
  //   this.input = value;
  // }

  onSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.input);
  }
}
