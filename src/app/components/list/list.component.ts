import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <button class="btn btn-primary">Сохранить автомобиль</button>
    <button class="btn btn-primary">Отправить результаты поиска</button>
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
