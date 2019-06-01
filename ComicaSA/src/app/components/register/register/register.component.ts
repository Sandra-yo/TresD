import { Component, OnInit } from '@angular/core';
import { UserScheme } from '../../../schemes/users/user.scheme';
import { LoginService } from '../../../services/login/login.service';
import { StorageService } from '../../../services/local-storage/storage.service';
import { VariablesEnum } from '../../../services/base-datos-variables/variables.enum';
import { DatabaseGenericService } from '../../../services/database-generic/database-generic.service';
import { UploadService } from '../../../services/upload/upload.service';
import { Router } from '@angular/router';
import { GuidService } from '../../../services/guid/guid.service';
import { a } from '@angular/core/src/render3';

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
   isValidEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
  }
  isTelephoneNumber(number) {
    return /^[1-9]{9}$/.test(number);
  }
  isRightPassword(password) {
    // una mayusucula,una minuscula,sin espacion de 8 a 16 caracteres
    return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password);
  }
  isNotEmpty(palabra) {
    return palabra !== '';
  }
  isCardNumber(number) {
    return /^[1-9]{16}$/.test(number);
  }
  isCVC(number) {
    return /^[1-9]{3}$/.test(number);
  }
  isOld(number: number) {
    return number > 17;
  }
  validarInfoPersonal() {
     // Campos vacios
  if (this.isNotEmpty(this.input.nombre)
  && this.isNotEmpty(this.input.apellidos)
  && this.isNotEmpty(this.input.email)
  && this.isNotEmpty(this.input.password)
  && this.isNotEmpty(this.input.edad)) {

    if (this.isValidEmail(this.input.email)) {
      if (this.isRightPassword(this.input.password)) {
        if (this.isOld(this.input.edad)) {
        } else {
          alert('Debes ser mayor de 18');
        }
      } else {
        alert('La contraseña debe contener: Una letra mayuscula, una minuscula, minimo 8 caracteres, maximo 16 caracteres y sin espacio');
      }
    } else {
      alert('El correo que ingreso no es valido');
    }

} else {
  alert('Por favor, rellene los campos de informacion personal');
}

  }

  validarDomicilio() {

    if (this.isNotEmpty(this.input.direccion.colonia)
    && this.isNotEmpty(this.input.direccion.calle)
    && this.isNotEmpty(this.input.direccion.numero)
    && this.isNotEmpty(this.input.direccion.estado)
    && this.isNotEmpty(this.input.direccion.pais)) {
      alert('sddsa');

    } else {
      alert('Rellene los campos de Direccion');
    }

  }
  validarTarjeta() {

  }

  onGuardar() {
    this.validarDomicilio();

   /* this.login.registerUser(
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
            this.router.navigate(['login']);
            alert('usuario exitosamente creado');
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
          this.router.navigate(['login']);
          alert('usuario exitosamente creado');
        }, (error) => {
          console.log(error);
        });
      }
    }, (er) => {
      alert('No se pudo registrar el usuario');
    });*/
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
