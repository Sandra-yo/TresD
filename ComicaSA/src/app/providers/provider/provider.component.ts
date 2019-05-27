import { Component, OnInit } from '@angular/core';
import { ProviderScheme } from '../../schemes/providers/provider.scheme';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  providerEdit: ProviderScheme;
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
    this.providerEdit = void 0;
  }

  selectDefault() {
    this.select = {
      agregar: false,
      listar: false,
    };
  }

  _outProvider(event: ProviderScheme) {
    this.selectDefault();
    this.select.agregar = true;
    this.providerEdit = event;
  }

}
