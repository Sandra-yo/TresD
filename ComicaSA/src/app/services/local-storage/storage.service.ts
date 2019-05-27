import { Injectable } from '@angular/core';
import {LocalStorageService, LocalStorage} from 'ngx-webstorage';
import { UserScheme } from '../../schemes/users/user.scheme';

export interface IUser {
  email?: string;
  uid?: string;
  userId?: string;
  imagen?: string;
  nombre?: string;
  tipo?: string;
}

@Injectable()
export class StorageService {

  constructor(
    private storage: LocalStorageService,
  ) { }

  setUser(user: IUser) {
    this.storage.store('user', user);
  }

  getUser(): IUser {
    return this.storage.retrieve('user');
  }

  clean(): void {
    this.storage.clear();
  }
}
