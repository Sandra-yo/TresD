import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { FirebaseApp } from 'angularfire2';


@Injectable()
export class LoginService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  login(email: string, password: string): Observable<Response> {
    return Observable.create((observer: Observer<Response>) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(
        email,
        password
      ).then((isLogin: Response) => {
        observer.next(isLogin);
        observer.complete();
      }, (error: any) => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  logout(): Observable<Response> {
    return Observable.create((observer: Observer<Response>) => {
      this.angularFireAuth.auth.signOut().then((isLogout: Response) => {
        observer.next(isLogout);
        observer.complete();
      }, (err) => {
        observer.error(err);
        observer.complete();
      });
    });
  }

  registerUser(email: string, password: string): Observable<Response> {
    return Observable.create((observer: Observer<Response>) => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((res: Response) => {
        observer.next(res);
        observer.complete();
      }, (error: any) => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  changePassword(email: string): Observable<Response> {
    return Observable.create((observer: Observer<Response>) => {
      this.angularFireAuth.auth.sendPasswordResetEmail(email).then((res: Response) => {
        observer.next(res);
        observer.complete();
      }, (err: any) => {
        observer.error(err);
        observer.complete();
      });
    });
  }

}
