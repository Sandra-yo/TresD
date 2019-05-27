import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { UploadService } from '../../services/upload/upload.service';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { ProviderScheme } from '../../schemes/providers/provider.scheme';


@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css'],
  providers: [DatabaseGenericService, UploadService],
})
export class AddProviderComponent implements OnInit {

  @Output() changeOptionProvider: EventEmitter<string> = new EventEmitter<string>();
  @Input() inputProvider: ProviderScheme;

  input: ProviderScheme = {
    nombre: '',
    creado: new Date().toString(),
    email: '',
    telefono: '',
    id: '',
    imagen: './../../../assets/images/image.png',
    direccion: {
      colonia: '',
      calle: '',
      numero: '',
      estado: '',
      pais: '',
    },
  };

  selectedFile: File = null;
  statusEdit: boolean;

  constructor(
    private databaseGenericService: DatabaseGenericService<ProviderScheme>,
    private uploadService: UploadService,
  ) { }

  ngOnInit() {
    if (this.inputProvider !== void 0) {
      this.statusEdit = true;
      this.input = this.inputProvider;
    } else {
      this.statusEdit = false;
    }
  }


  onGuardar() {
    if (this.selectedFile !== null) {
      this.uploadService.onUpload('/imagenes/proveedores/', this.selectedFile).subscribe((resImagen: any) => {
        this.input.imagen = resImagen.downloadURL;
        this.databaseGenericService.insert(VariablesEnum.PROVEEDORES, this.input).subscribe((res) => {
          this.changeOptionProvider.emit('listar');
        }, (error) => {
          console.log(error);
        });
      });
    } else {
      this.databaseGenericService.insert(VariablesEnum.PROVEEDORES, this.input).subscribe((res) => {
        this.changeOptionProvider.emit('listar');
      }, (error) => {
        console.log(error);
      });
    }
  }

  onEditar() {
    if (this.selectedFile !== null) { // voy a subir imagen
      this.uploadService.onUpload('/imagenes/proveedores/', this.selectedFile).subscribe((resImagen: any) => {
        this.input.imagen = resImagen.downloadURL;
        this.databaseGenericService.update(
          VariablesEnum.PROVEEDORES,
          this.input.id,
          this.input
        ).subscribe((resUpdate: any) => {
          this.changeOptionProvider.emit('listar');
        }, (error) => {
          console.log(error);
        });
      });
    } else { // sin imagen
      this.databaseGenericService.update(
        VariablesEnum.PROVEEDORES,
        this.input.id,
        this.input
      ).subscribe((resUpdate: any) => {
        this.changeOptionProvider.emit('listar');
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
    this.changeOptionProvider.emit('listar');
  }

  onEliminar() {
    this.databaseGenericService.delete(
      VariablesEnum.PROVEEDORES,
      this.input.id
    ).subscribe((resDelete) => {
      this.changeOptionProvider.emit('listar');
    }, (error) => {
      console.log(error);
    });
  }
}
