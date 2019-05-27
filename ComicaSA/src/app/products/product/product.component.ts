import { Component, OnInit } from '@angular/core';
import { ProductsScheme } from '../../schemes/products/products.scheme';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productEdit: ProductsScheme;
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
    this.productEdit = void 0;
  }

  selectDefault() {
    this.select = {
      agregar: false,
      listar: false,
    };
  }

  _outProduct(event: ProductsScheme) {
    this.selectDefault();
    this.select.agregar = true;
    this.productEdit = event;
  }
}
