import { initializeElem } from './util';

declare var M: any;

export class Single {
  constructor() {
    initializeElem('div.share', M.FloatingActionButton, {direction: "left"});
  }
}

new Single();