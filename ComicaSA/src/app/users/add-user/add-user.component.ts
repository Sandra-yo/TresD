import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserScheme } from '../../schemes/users/user.scheme';
import { UploadService } from '../../services/upload/upload.service';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { LoginService } from '../../services/login/login.service';
import { GuidService } from '../../services/guid/guid.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [DatabaseGenericService, UploadService, GuidService, LoginService]
})
export class AddUserComponent implements OnInit {
  @Output() changeOptionProduct: EventEmitter<string> = new EventEmitter<string>();
  @Input() inputProduct: UserScheme;

  input: UserScheme = {
    nombre: '',
    tipo: 'usuario',
    apellidos: '',
    edad: 0,
    email: '',
    imagen: './../../../assets/images/image.png',
    direccion: {
      colonia: '',
      calle: '',
      numero: '',
      estado: '',
      pais: '',
    },
    tarjeta: {
      tipo: '',
      numero: '',
      cvc: '',
      expiracion: {
        mes: '',
        ano: 0,
      },
      cantidad: 0,
    },
    creado: new Date().toString(),
  };

  selectedFile: File = null;
  statusEdit: boolean;

  constructor(
    private uploadService: UploadService,
    private databaseGenericService: DatabaseGenericService<UserScheme>,
    private guidService: GuidService,
    private login: LoginService,
  ) { }

  ngOnInit() {
    this.input.tarjeta.cantidad = this.guidService.generateRandom(1500, 7800);
    if (this.inputProduct !== void 0) {
      this.statusEdit = true;
      this.input = this.inputProduct;
    } else {
      this.statusEdit = false;
    }
  }

  onGuardar() {
    this.login.registerUser(
      this.input.email,
      this.input.password
    ).subscribe((res: any) => {
      this.input.uid = res.uid;
      // Borramos el password
      delete this.input.password;

      if (this.selectedFile === null) {

        this.databaseGenericService.insert(
          VariablesEnum.USER_INFO,
          this.input
        ).subscribe((userInfo) => {
          this.changeOptionProduct.emit('listar');
        }, (err) => {
          console.log(err);
        });
      } else {
        this.uploadService.onUpload('/imagenes/usuarios/', this.selectedFile).subscribe((imagen: any) => {
          this.input.imagen = imagen.downloadURL;
          this.databaseGenericService.insert(
            VariablesEnum.USER_INFO,
            this.input
          ).subscribe((resUser) => {
            this.changeOptionProduct.emit('listar');
          }, (err) => {
            console.log(err);
          });
        }, (error) => {
          console.log(error);
        });
      }
    });
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
          VariablesEnum.USER_INFO,
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
        VariablesEnum.USER_INFO,
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
      VariablesEnum.USER_INFO,
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
