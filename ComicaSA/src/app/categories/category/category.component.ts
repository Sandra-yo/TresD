import { Component, OnInit } from '@angular/core';
import { CategoryScheme } from '../../schemes/categories/category.scheme';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryEdit: CategoryScheme;
  select = {
    agregar: true,
    listar: false,
  };

  constructor() { }

  ngOnInit() {
  }

  onSelected(type: string): void {
    this.selectDefault();
    switch (type) {
      case 'agregar':
        this.select.agregar = true;
        break;
      case 'listar':
        this.select.listar = true;
        break;
    }
    this.categoryEdit = void 0;
  }

  selectDefault() {
    this.select = {
      agregar: false,
      listar: false,
    };
  }

  _outCategory(event: CategoryScheme) {
    this.selectDefault();
    this.select.agregar = true;
    this.categoryEdit = event;
  }
}
