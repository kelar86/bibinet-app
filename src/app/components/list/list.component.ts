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
    this.api.getEngineVariants({ q: '4G', mark_gmodel: '7,272' }).subscribe(v => console.log(v));
    // this.api.getPartVariants('Б').subscribe(v => console.log(v));
    // this.api.getMarkModelVariants('Lanc').subscribe(v => console.log(v));
    this.api.getParts({ part_type: '3', mark_gmodel: '7, 272', engine: 303 }).subscribe(v => console.log(v));
  }

}
