import { Component, OnInit } from '@angular/core';
import { UserScheme } from '../../../schemes/users/user.scheme';
import { LoginService } from '../../../services/login/login.service';
import { StorageService } from '../../../services/local-storage/storage.service';
import { VariablesEnum } from '../../../services/base-datos-variables/variables.enum';
import { DatabaseGenericService } from '../../../services/database-generic/database-generic.service';
import { UploadService } from '../../../services/upload/upload.service';
import { Router } from '@angular/router';
import { GuidService } from '../../../services/guid/guid.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginService, StorageService, DatabaseGenericService, UploadService, GuidService]
})
export class RegisterComponent implements OnInit {

  selectedFile: File = null;
  input: UserScheme = {
    nombre: '',
    tipo: 'usuario',
    apellidos: '',
    edad: 0,
    email: '',
    imagen: './../../../assets/images/image.png',
    password: '',
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

  constructor(
    private login: LoginService,
    private localStorage: StorageService,
    private db: DatabaseGenericService<UserScheme>,
    private uploadService: UploadService,
    private router: Router,
    private guidService: GuidService,
  ) { }

  ngOnInit() {
    this.input.tarjeta.cantidad = this.guidService.generateRandom(1500, 7800);
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

  onGuardar() {
    this.login.registerUser(
      this.input.email,
      this.input.password
    ).subscribe((res: any) => {
      this.input.uid = res.uid;
      // Borramos el password
      delete this.input.password;
      if (this.selectedFile !== null) {
        this.uploadService.onUpload('/imagenes/usuarios/', this.selectedFile).subscribe((uploadRes: any) => {
          this.db.insert(
            VariablesEnum.USER_INFO,
            this.input
          ).subscribe((resUserInfo: any) => {
            this.localStorage.setUser({
              uid: res.uid,
              nombre: this.input.nombre,
              email: res.email,
              userId: resUserInfo.id,
              imagen: uploadRes.downloadURL,
              tipo: this.input.tipo,
            });
            this.router.navigate(['dashboard']);
          }, (error) => {
            console.log(error);
          });
        }, (errorUpload) => {
          console.log(errorUpload);
        });
      } else {
        this.db.insert(
          VariablesEnum.USER_INFO,
          this.input
        ).subscribe((resUserInfo: any) => {
          this.localStorage.setUser({
            uid: res.uid,
            nombre: this.input.nombre,
            email: res.email,
            userId: resUserInfo.id,
            imagen: this.input.imagen,
            tipo: this.input.tipo,
          });
          this.router.navigate(['dashboard']);
        }, (error) => {
          console.log(error);
        });
      }
    }, (er) => {
      alert('No se pudo registrar el usuario');
    });
  }

}
