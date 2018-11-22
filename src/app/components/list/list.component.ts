import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <div *ngFor="let row of list">
      <app-list-row></app-list-row>
    </div>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  private list = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
