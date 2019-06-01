import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css'],
  providers: [LoginService],
})
export class RecuperarContraseniaComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router, ) { }

  ngOnInit() {
  }
  onChangePassword(email: string) {
    this.loginService.changePassword(email).subscribe((res) => {
      alert('El correo para cambiar contraseña fue enviado a ' + email);
    }, (err) => {
      alert('No se pudo enviar el correo a ' + email);
    });
    this.router.navigate(['login']);
  }

  goToLogin(){
    this.router.navigate(['login']);
  }
}
