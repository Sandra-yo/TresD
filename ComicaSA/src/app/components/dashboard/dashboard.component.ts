import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/local-storage/storage.service';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { ProductsScheme } from '../../schemes/products/products.scheme';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { PurchaseDetailScheme } from '../../schemes/purchase/purchase-detail.scheme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatabaseGenericService, StorageService],
})
export class DashboardComponent implements OnInit {

  message = {
    title: '',
    subtitle: '',
    active: false,
    type: false,
  };
  productList: ProductsScheme[] = [];
  product: ProductsScheme = {
    imagen: './../../../assets/images/image.png',
    nombre: '',
    categoriaId: '',
    costo: 0,
    cantidad: 0,
    estado: '',
    proveedorId: '',
    creado: '',
  };
  userInfo: any;
  purchasedProducts: PurchaseDetailScheme[] = [];

  constructor(
    private localStorage: StorageService,
    private db: DatabaseGenericService<ProductsScheme>,
    private dbPurchased: DatabaseGenericService<PurchaseDetailScheme>,
  ) { }

  ngOnInit() {
    this.userInfo = this.localStorage.getUser();

    this.db.getData(VariablesEnum.PRODUCTOS).subscribe((res) => {
      this.productList = res.serverResponse;
      this.product = { ...this.productList[0] };
      this.productList.forEach((producto) => {
        producto.comprar = 1;
      });

      const min = 0;
      const max = this.productList.length - 1;
      setInterval(() => {
        const index = Math.floor(Math.random() * (max - min) + min);
        this.product = this.productList[index];
      }, 5000);
    });
  }

  formatDate(creado: Date): string {
    const fecha = new Date(creado);
    return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
  }

  onQuantityProducts(index: number, moreOrless: string) {
    if (moreOrless === 'more' && this.productList[index].comprar !== this.productList[index].cantidad) {
      this.productList[index].comprar++;
    } else if (moreOrless === 'less' && this.productList[index].comprar !== 1) {
      this.productList[index].comprar--;
    }
  }

  onAddCart(index: string) {
    const product: ProductsScheme = this.productList[index];
    this.message = {
      active: true,
      title: 'Producto agregado correctamente',
      subtitle: product.nombre,
      type: true,
    };
    setTimeout(() => {
      this.message.active = false;
    }, 3000);



    this.db.getDataWhere(
      VariablesEnum.PURCHASED,
      { fieldPath: 'userId', operador: '==', fieldPathFirebase: this.userInfo.userId }
    ).subscribe((res) => {
      this.purchasedProducts = res.serverResponse;
      const find: PurchaseDetailScheme = this.purchasedProducts.find((p) => p.productId === product.id);
      if (find !== undefined) { // encontro solo incrementar
        find.cantidad += product.comprar;
        find.total += product.comprar * product.costo;
        this.dbPurchased.update(VariablesEnum.PURCHASED, find.id, find).subscribe((update) => {
          product.cantidad -= product.comprar;
          this.db.update(VariablesEnum.PRODUCTOS, product.id, product).subscribe((r) => {
            console.log(r.serverResponse);
          }, e => {
            console.log(e);
          });
        }, (err) => {console.log(err); });
      } else { // agrego nuevo producto
        const purchased: PurchaseDetailScheme = {
          productImage: product.imagen,
          productName: product.nombre,
          cantidad: product.comprar,
          productId: product.id,
          total: product.comprar * product.costo,
          estado: 'carrito',
          creado: String(new Date()),
          userId: this.userInfo.userId,
        };

        this.dbPurchased.insert(VariablesEnum.PURCHASED, purchased).subscribe((resPurchased) => {
          product.cantidad -= product.comprar;
          this.db.update(VariablesEnum.PRODUCTOS, product.id, product).subscribe((r) => {
            console.log(r.serverResponse);
          }, e => {
            console.log(e);
          });
        }, (err) => {
          console.log(err);
        });
      }// END ELSE
    }, (err) => {
      console.log(err);
    });


    /*   */
  }
}
