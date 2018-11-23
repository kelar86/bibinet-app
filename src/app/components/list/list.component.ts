import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

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

  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.getPartVariants('Б').subscribe(v => console.log(v));
  }

}
