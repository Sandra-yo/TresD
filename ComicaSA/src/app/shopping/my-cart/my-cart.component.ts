import { Component, OnInit } from '@angular/core';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { PurchaseDetailScheme } from '../../schemes/purchase/purchase-detail.scheme';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { StorageService } from '../../services/local-storage/storage.service';
import { UserScheme } from '../../schemes/users/user.scheme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
  providers: [DatabaseGenericService, StorageService],
})
export class MyCartComponent implements OnInit {

  purchased: PurchaseDetailScheme[] = [];
  user: any;
  infoUser: UserScheme;
  message = {
    title: '',
    subtitle: '',
    active: false,
    type: false,
  };

  constructor(
    private router: Router,
    private db: DatabaseGenericService<PurchaseDetailScheme>,
    private localStorage: StorageService,
    private dbUser: DatabaseGenericService<UserScheme>,
  ) { }

  ngOnInit() {
    this.user = this.localStorage.getUser();
    this.dbUser.getDataWhere(
      VariablesEnum.USER_INFO,
      { fieldPath: 'id', operador: '==', fieldPathFirebase: this.user.userId }
    ).subscribe((res) => {
      this.infoUser = res.serverResponse[0];
    }, (err) => console.log(err));

    this.db.getDataWhere(
      VariablesEnum.PURCHASED,
      { fieldPath: 'userId', operador: '==', fieldPathFirebase: this.user.userId },
    ).subscribe((res) => {
      this.purchased = res.serverResponse;
    }, (err) => console.log(err));
  }

  formatDate(fecha: string) {
    const newFecha = new Date(fecha);
    return newFecha.getDate() + '/' + ((newFecha.getMonth()) + 1) + '/' + newFecha.getFullYear();
  }

  onBuy(compras: string[]) {
    this.purchased.forEach(element => {
      if (element.estado === 'carrito' ) {
        element.estado = 'comprado';
        this.db.update(VariablesEnum.PURCHASED, element.id, element).subscribe((r) => {
          console.log(r.serverResponse);
          this.message = {
            active: true,
            title: 'Su orden ha sido enviada',
            subtitle: ' ',
            type: true,
          };
          setTimeout(() => {
            this.message.active = false;
          }, 3000);
        }, e => {
          console.log(e);
        });
      }
    });


      this.router.navigate(['dashboard']);

  }

  onDelete(id: string) {
    this.db.delete(VariablesEnum.PURCHASED, id).subscribe((res) => {
      console.log('delete', res.serverResponse);
      const index = this.purchased.findIndex((p) => p.id === id);

      this.message = {
        title: 'Producto eliminado',
        subtitle: this.purchased[index].productName,
        active: true,
        type: true,
      };
      setTimeout(() => {
        this.message.active = false;
      }, 3000);
      this.purchased.splice(index, 1);
    }, (err) => console.log(err));
  }

}
