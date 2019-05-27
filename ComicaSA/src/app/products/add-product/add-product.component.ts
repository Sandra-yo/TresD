import { UploadService } from './../../services/upload/upload.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductsScheme } from '../../schemes/products/products.scheme';
import * as firebase from 'firebase';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { ProviderScheme } from '../../schemes/providers/provider.scheme';
import { CategoryScheme } from '../../schemes/categories/category.scheme';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [UploadService, DatabaseGenericService]
})
export class AddProductComponent implements OnInit {
  @Output() changeOptionProduct: EventEmitter<string> = new EventEmitter<string>();
  @Input() inputProduct: ProductsScheme;

  input: ProductsScheme = {
    nombre: '',
    categoriaId: '',
    costo: 0,
    cantidad: 0,
    estado: '',
    proveedorId: '',
    imagen: './../../../assets/images/image.png',
    creado: new Date().toString(),
    descripcion: '',
  };

  selectedFile: File = null;
  statusEdit: boolean;

  providersList: ProviderScheme[] = [];
  categoriesList: CategoryScheme[] = [];

  constructor(
    private uploadService: UploadService,
    private databaseGenericService: DatabaseGenericService<ProductsScheme>,
    private databaseGenericProvider: DatabaseGenericService<ProviderScheme>,
    private databaseGenericCategory: DatabaseGenericService<CategoryScheme>
  ) { }

  ngOnInit() {
    if (this.inputProduct !== void 0) {
      this.statusEdit = true;
      this.input = this.inputProduct;
    } else {
      this.statusEdit = false;
    }

    this.databaseGenericCategory.getData(
      VariablesEnum.CATEGORIA
    ).subscribe((res: any) => {
      this.categoriesList = res.serverResponse;
    }, (error: any) => {
      console.log(error);
    });

    this.databaseGenericProvider.getData(
      VariablesEnum.PROVEEDORES
    ).subscribe((res: any) => {
      this.providersList = res.serverResponse;
    }, (error: any) => {
      console.log(error);
    });
  }

  onGuardar() {
    if (this.selectedFile === null) {
      this.databaseGenericService.insert(
        VariablesEnum.PRODUCTOS,
        this.input
      ).subscribe((res) => {
        this.changeOptionProduct.emit('listar');
      }, (err) => {
        console.log(err);
      });
    } else {
      this.uploadService.onUpload('/imagenes/productos/', this.selectedFile).subscribe((imagen: any) => {
        this.input.imagen = imagen.downloadURL;
        this.databaseGenericService.insert(
          VariablesEnum.PRODUCTOS,
          this.input
        ).subscribe((res) => {
          this.changeOptionProduct.emit('listar');
        }, (err) => {
          console.log(err);
        });
      }, (error) => {
        console.log(error);
      });
    }
  }

  onFileSelected() {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    input.click();
    const that = this;
    input.onchange = function (e: any) {
      that.selectedFile = e.path[0].files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        that.input.imagen = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    };
  }

  onEditar() {
    if (this.selectedFile !== null) { // voy a subir imagen
      this.uploadService.onUpload('/imagenes/productos/', this.selectedFile).subscribe((resImagen: any) => {
        this.input.imagen = resImagen.downloadURL;
        this.databaseGenericService.update(
          VariablesEnum.PRODUCTOS,
          this.input.id,
          this.input
        ).subscribe((resUpdate: any) => {
          this.changeOptionProduct.emit('listar');
        }, (error) => {
          console.log(error);
        });
      });
    } else { // sin imagen
      this.databaseGenericService.update(
        VariablesEnum.PRODUCTOS,
        this.input.id,
        this.input
      ).subscribe((resUpdate: any) => {
        this.changeOptionProduct.emit('listar');
      }, (error) => {
        console.log(error);
      });
    }
  }

  onEliminar() {
    this.databaseGenericService.delete(
      VariablesEnum.PRODUCTOS,
      this.input.id
    ).subscribe((resDelete) => {
      this.changeOptionProduct.emit('listar');
    }, (error) => {
      console.log(error);
    });
  }

  onDescartar(): void {
    this.changeOptionProduct.emit('listar');
  }

}
