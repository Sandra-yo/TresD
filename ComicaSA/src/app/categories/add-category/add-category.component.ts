import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CategoryScheme } from '../../schemes/categories/category.scheme';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { UploadService } from '../../services/upload/upload.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers: [DatabaseGenericService, UploadService]
})
export class AddCategoryComponent implements OnInit {
  @Output() changeOptionCategory: EventEmitter<string> = new EventEmitter<string>();
  @Input() inputCategory: CategoryScheme;

  input: CategoryScheme = {
    nombre: '',
    creado: new Date().toString(),
    id: '',
    imagen: './../../../assets/images/image.png',
    descripcion: '',
    estado: '',
  };

  selectedFile: File = null;
  statusEdit: boolean;

  constructor(
    private databaseGenericService: DatabaseGenericService<CategoryScheme>,
    private uploadService: UploadService,
  ) { }

  ngOnInit() {
    if (this.inputCategory !== void 0) {
      this.statusEdit = true;
      this.input = this.inputCategory;
    } else {
      this.statusEdit = false;
    }
  }


  onGuardar() {
    if (this.selectedFile !== null) {
      this.uploadService.onUpload('/imagenes/categorias/', this.selectedFile).subscribe((resImagen: any) => {
        this.input.imagen = resImagen.downloadURL;
        this.databaseGenericService.insert(VariablesEnum.CATEGORIA, this.input).subscribe((res) => {
          this.changeOptionCategory.emit('listar');
        }, (error) => {
          console.log(error);
        });
      });
    } else {
      this.databaseGenericService.insert(VariablesEnum.CATEGORIA, this.input).subscribe((res) => {
        this.changeOptionCategory.emit('listar');
      }, (error) => {
        console.log(error);
      });
    }
  }

  onEditar() {
    if (this.selectedFile !== null) { // voy a subir imagen
      this.uploadService.onUpload('/imagenes/categorias/', this.selectedFile).subscribe((resImagen: any) => {
        this.input.imagen = resImagen.downloadURL;
        this.databaseGenericService.update(
          VariablesEnum.CATEGORIA,
          this.input.id,
          this.input
        ).subscribe((resUpdate: any) => {
          this.changeOptionCategory.emit('listar');
        }, (error) => {
          console.log(error);
        });
      });
    } else { // sin imagen
      this.databaseGenericService.update(
        VariablesEnum.CATEGORIA,
        this.input.id,
        this.input
      ).subscribe((resUpdate: any) => {
        this.changeOptionCategory.emit('listar');
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

  onDescartar(): void {
    this.changeOptionCategory.emit('listar');
  }

  onEliminar() {
    this.databaseGenericService.delete(
      VariablesEnum.CATEGORIA,
      this.input.id
    ).subscribe((resDelete) => {
      this.changeOptionCategory.emit('listar');
    }, (error) => {
      console.log(error);
    });
  }

}
