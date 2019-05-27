import { Injectable } from '@angular/core';

@Injectable()
export class GuidService {

  constructor() { }

  generateGuid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  generateRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
