import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-row',
  template: `
    <div class="row">
      <div class="card">
        <div class="card-block">
          <div class="row-container">
            <div class="row-item-img">Картинка</div>
            <div class="row-item">
              <app-part-detail></app-part-detail>
            </div>
            <div class="row-item">
              <app-supplier></app-supplier>
            </div>
          </div>      
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
