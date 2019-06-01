import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { DatabaseGenericService } from '../services/database-generic/database-generic.service';
import { StorageService } from '../services/local-storage/storage.service';
import { PurchaseDetailScheme } from '../schemes/purchase/purchase-detail.scheme';
import { ProductsScheme } from '../schemes/products/products.scheme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correo-admin',
  templateUrl: './correo-admin.component.html',
  styleUrls: ['./correo-admin.component.css'],
  providers: [LoginService, DatabaseGenericService, StorageService]

})
export class CorreoAdminComponent implements OnInit {

  message = {
    title: '',
    subtitle: '',
    active: false,
    type: false,
  };
  userInfo: any;
  purchasedProducts: PurchaseDetailScheme[] = [];

  constructor(
    private router: Router,
    private localStorage: StorageService,
    private db: DatabaseGenericService<ProductsScheme>,
    private dbPurchased: DatabaseGenericService<PurchaseDetailScheme>,
  ) { }

  ngOnInit() {
    const user = this.localStorage.getUser();
    this.userInfo = this.localStorage.getUser();
  }




redirigir() {

  this.message = {
    active: true,
    title: 'Gracias por tu mensaje',
    subtitle: 'En breve nuestros administradores se comunicaran contigo',
    type: true,
  };
  setTimeout(() => {
    this.message.active = false;
    this.router.navigate(['dashboard']);
  }, 3000);
}


}
