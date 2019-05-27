import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  private template = `
    <div class="ui segment" id="loader">
      <div class="ui active dimmer">
        <div class="ui huge text loader">Loading</div>
      </div>
      <p></p>
    </div>`;
  private loader: HTMLElement;

  constructor() { }

  show() {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML += this.template;
    this.loader = document.getElementById('loader');
    this.loader.style.opacity = '0.3';
    this.loader.style.position = 'absolute';
    this.loader.style.width = '100%';
    this.loader.style.height = '100%';
    this.loader.style.margin = '0px';
    this.loader.style.zIndex = '10';
  }

  hide() {
    this.loader.remove();
  }

}
