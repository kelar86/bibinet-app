import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  searchForm: FormGroup = new FormGroup({
    query: new FormControl(''),
    car: new FormControl(''),
    engine: new FormControl('')
  });

  ngOnInit() {
  }

}
