import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/local-storage/storage.service';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { UserScheme } from '../../schemes/users/user.scheme';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { UploadService } from '../../services/upload/upload.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
  providers: [StorageService, DatabaseGenericService, UploadService, LoginService],
})
export class MyAccountComponent implements OnInit {

  activeClass = {
    info: true,
    tarjeta: false,
    direccion: false,
  };

  userInfo: UserScheme = {
    email: '',
    tipo: '',
    imagen: './../../assets/images/image.png',
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
      cantidad: 0,
      expiracion: {
        mes: '',
        ano: 0,
      },
    }
  };
  newImagen: string;
  userInfoBackup: UserScheme;
  localUser: any;

  save = {
    user: (user: UserScheme, callback: Function) => {
      this.db.update(VariablesEnum.USER_INFO, user.id, user).subscribe(
        (res) => { callback('ok'); },
        (err) => { callback('error'); console.log(err); });
    }
  };

  constructor(
    private localStorage: StorageService,
    private db: DatabaseGenericService<UserScheme>,
    private uploadService: UploadService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.localUser = this.localStorage.getUser();
    setTimeout(() => {
      this.db.getDataWhere(
        VariablesEnum.USER_INFO,
        { fieldPath: 'id', operador: '==', fieldPathFirebase: this.localUser.userId }
      ).subscribe((res) => {
        this.userInfo = res.serverResponse[0];
        this.userInfoBackup = { ...this.userInfo };
      });
    }, 1000);
  }

  onActive(type: string): void {
    switch (type) {
      case 'info_user':
        this.activeClass.info = !this.activeClass.info;
        break;
      case 'tarjeta':
        this.activeClass.tarjeta = !this.activeClass.tarjeta;
        break;
      case 'direccion':
        this.activeClass.direccion = !this.activeClass.direccion;
    }
  }

  onSave() {
    this.save.user(this.userInfo, (res: string) => {
      if (res === 'ok') {
        alert('Informacion personal actualizada');
      } else {
        alert('Error al actualizar informacion');
      }
    });
  }

  onChangePassword() {
    this.loginService.changePassword(this.userInfo.email).subscribe((res) => {
      alert('El correo para cambiar contraseña fue enviado a ' + this.userInfo.email);
    }, (err) => {
      alert('No se pudo enviar el correo');
    });
  }

  onDescartar() {
    this.userInfo.nombre = this.userInfoBackup.nombre;
    this.userInfo.apellidos = this.userInfoBackup.apellidos;
    this.userInfo.email = this.userInfoBackup.email;
    this.userInfo.password = void 0;
    this.userInfo.confirmarPassword = void 0;
  }

  onFileSelected() {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    input.click();
    const that = this;
    input.onchange = function (e: any) {
      const selectedFile = e.path[0].files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        that.newImagen = event.target.result;
        that.userInfo.imagen = event.target.result;
        that.localStorage.setUser({
          imagen: event.target.result,
          email: that.localUser.email,
          uid: that.localUser.uid,
          userId: that.localUser.userId,
          nombre: that.localUser.nombre,
          tipo: that.localUser.tipo,
        });
      };
      reader.readAsDataURL(e.target.files[0]);

      /** Se queda en segundo plano */
      that.uploadService.onUpload(
        '/imagenes/usuarios/',
        selectedFile
      ).subscribe((res: any) => {
        that.userInfo.imagen = res.downloadURL;
        that.db.update(VariablesEnum.USER_INFO, that.localUser.userId, that.userInfo).subscribe();
      });
      /** Fin segundo plano */
    };
  }

}
