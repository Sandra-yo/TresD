import { ProductsScheme } from './../../schemes/products/products.scheme';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { ProviderScheme } from '../../schemes/providers/provider.scheme';
import { CategoryScheme } from '../../schemes/categories/category.scheme';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  providers: [DatabaseGenericService]
})
export class ListProductComponent implements OnInit {

  @Output() _productSelected: EventEmitter<ProductsScheme> = new EventEmitter<ProductsScheme>();

  productList: ProductsScheme[] = [];

  constructor(
    private db: DatabaseGenericService<ProductsScheme>,
    private dbProvider: DatabaseGenericService<ProviderScheme>,
    private dbCategory: DatabaseGenericService<CategoryScheme>,
  ) { }

  ngOnInit() {
    this.db.getData(VariablesEnum.PRODUCTOS).subscribe((res: any) => {
      this.productList = res.serverResponse;
    }, (error) => {
      console.log(error);
    });
  }

  formatDate(creado: Date): string {
    const fecha = new Date(creado);
    return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
  }

  onSelectCard(product: ProductsScheme) {
    this._productSelected.emit(product);
  }

}
