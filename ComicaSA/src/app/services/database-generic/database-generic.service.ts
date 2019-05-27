import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class ServerResponse<T> {
  interface: T;
  serverResponse?: any;
  error?: any;
}

@Injectable()
export class DatabaseGenericService<T> {

  constructor(
    private angularFirestore: AngularFirestore,
  ) { }

  insert(route: string, type: T): Observable<ServerResponse<T>> {
    return Observable.create((observer: Observer<ServerResponse<T>>) => {
      this.angularFirestore.collection(route).add(type).then((res) => {
        this.angularFirestore.collection(route).doc(res.id).update({ id: res.id }).then((update) => {
          observer.next({ interface: type, serverResponse: res });
          observer.complete();
        }, (errorUpdate) => {
          observer.error({ interface: type, error: errorUpdate });
          observer.complete();
        });
      }, (error) => {
        observer.error({ interface: type, error: error });
        observer.complete();
      });
    });
  }

  getData(route: string): Observable<ServerResponse<T>> {
    return Observable.create((observer: Observer<ServerResponse<T>>) => {
      this.angularFirestore.collection(route).valueChanges().subscribe((res) => {
        observer.next({ interface: null, serverResponse: res });
        observer.complete();
      }, (err) => {
        observer.error({ interface: null, error: err });
        observer.complete();
      });
    });
  }

  getDataWhere(route: string, where: {fieldPath: string, operador: any, fieldPathFirebase: string}): Observable<ServerResponse<T>> {
    return Observable.create((observer: Observer<ServerResponse<T>>) => {
      this.angularFirestore.collection(
        route,
        ref => ref.where(where.fieldPath, where.operador, where.fieldPathFirebase)
      ).valueChanges().subscribe((res) => {
        observer.next({ interface: null, serverResponse: res});
        observer.complete();
      }, (error) => {
        observer.error({ interface: null, error: error});
        observer.complete();
      });
    });
  }

  delete(route: string, id: string): Observable<ServerResponse<T>> {
    return Observable.create((observer: Observer<ServerResponse<T>>) => {
      this.angularFirestore.collection(route).doc(id).delete().then((res) => {
        observer.next({ interface: null, serverResponse: res });
        observer.complete();
      }, (error) => {
        observer.error({ interface: null, error: error });
        observer.complete();
      });
    });
  }

  update(route: string, id: string, type: T): Observable<ServerResponse<T>> {
    return Observable.create((observer: Observer<ServerResponse<T>>) => {
      this.angularFirestore.collection(route).doc(id).update(type).then((res) => {
        observer.next({ interface: type, serverResponse: res });
        observer.complete();
      }, (error) => {
        observer.error({ interface: type, error: error });
        observer.complete();
      });
    });
  }

}
