import { LoginService } from './../../services/login/login.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { UserScheme } from '../../schemes/users/user.scheme';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { StorageService } from '../../services/local-storage/storage.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [LoginService, DatabaseGenericService, StorageService]
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() newimage: string;

  input = {
    imagen: '',
    nombre: '',
  };
  onlyAdministrador = false;

  constructor(
    private router: Router,
    private loginservice: LoginService,
    private db: DatabaseGenericService<UserScheme>,
    private localStorage: StorageService,
  ) { }

  ngOnInit() {
    const user = this.localStorage.getUser();
    this.input = {
      nombre: user.nombre,
      imagen: user.imagen,
    };
    this.onlyAdministrador = user.tipo === 'administrador' ? true : false;
  }

  ngOnChanges(simple: SimpleChanges) {
    if (simple['newimage']) {
      if (this.newimage !== void 0) {
        this.input.imagen = this.newimage;
      }
    }
  }

  onSelected(type: string) {
    switch (type) {
      case 'new':
        this.router.navigate(['product', 'new']);
        break;
      case 'list':
        this.router.navigate(['product', 'list']);
        break;
      case 'dashboard':
        this.router.navigate(['dashboard']);
        break;
      case 'newCategory':
        this.router.navigate(['category']);
        break;
      case 'provider':
        this.router.navigate(['provider']);
        break;
      case 'product':
        this.router.navigate(['product']);
        break;
      case 'users':
        this.router.navigate(['user']);
        break;
      case 'account':
        this.router.navigate(['account']);
        break;
      case 'cart':
        this.router.navigate(['mycart']);
        break;
      case 'record':
        this.router.navigate(['record']);
        break;
        case 'email':
        this.router.navigate(['email']);
        break;
    }
  }

  onLogout() {
    this.loginservice.logout().subscribe((res: any) => {
      this.router.navigate(['login']);
      this.localStorage.clean();
    }, (err: any) => {
      console.log(err);
    });
  }

}
