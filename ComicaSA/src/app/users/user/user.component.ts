import { Component, OnInit } from '@angular/core';
import { UserScheme } from '../../schemes/users/user.scheme';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  productEdit: UserScheme;
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

  _outProduct(event: UserScheme) {
    this.selectDefault();
    this.select.agregar = true;
    this.productEdit = event;
  }

}
