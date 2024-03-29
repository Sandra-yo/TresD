import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { DatabaseGenericService } from '../../services/database-generic/database-generic.service';
import { UserScheme } from '../../schemes/users/user.scheme';
import { VariablesEnum } from '../../services/base-datos-variables/variables.enum';
import { StorageService } from '../../services/local-storage/storage.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, DatabaseGenericService, StorageService]
})
export class LoginComponent implements OnInit {
  inputs = {
    email: '',
    password: '',
  };

  showMessage: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private db: DatabaseGenericService<UserScheme>,
    private localStorage: StorageService,
  ) { }

  ngOnInit() {
    this.showMessage = false;
    this.changeBackground();
  }

  onLogin() {
    this.loginService.login(
      this.inputs.email,
      this.inputs.password,
    ).subscribe((res: any) => {
      const uid = res.uid;
      this.db.getDataWhere(
        VariablesEnum.USER_INFO,
        { fieldPath: 'uid', operador: '==', fieldPathFirebase: uid}
      ).subscribe((resUser: any) => {
        const serverResponse: UserScheme = resUser.serverResponse[0];
        this.localStorage.setUser({
          uid: serverResponse.uid,
          nombre: serverResponse.nombre,
          email: serverResponse.email,
          userId: serverResponse.id,
          imagen: serverResponse.imagen,
          tipo: serverResponse.tipo,
        });
        this.router.navigate(['dashboard']);
      });
    }, (err: any) => {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 5000);
    });
  }

  onRegister() {
    this.router.navigate(['register']);
  }
  password() {
    this.router.navigate(['password']);
  }

  onClose() {
    this.showMessage = false;
  }

  changeBackground() {
    var fondos = ['../../../assets/images/login01.jpg',
                  '../../../assets/images/login02.jpg',
                  '../../../assets/images/login03.jpg',
                  '../../../assets/images/login06.jpg'];

    var index = Math.floor(Math.random() * fondos.length);
    $('.body').css('background-image', 'url('+fondos[index]+')');
    $('.body').css('background-position-y', 'center');
  }
}
