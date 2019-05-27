import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { GuidService } from './../guid/guid.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  constructor(
    private guidService: GuidService,
  ) { }

  onUpload(url: string, file: File): Observable<Response> {
    const metaData = {'contentType' : file.type};
    const guid = this.guidService.generateGuid();
    const storageRef: firebase.storage.Reference = firebase.storage().ref().child(url + guid);

    return Observable.create((observer: Observer<Response>) => {
      storageRef.put(file, metaData).then((fileUpload: any) => {
        observer.next(fileUpload);
        observer.complete();
      }, (error: any) => {
        observer.error(error);
        observer.complete();
      });
    });
  }

}
