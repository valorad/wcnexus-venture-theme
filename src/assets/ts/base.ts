import { formatDistance } from 'date-fns';
import { initializeElem } from './util';
import 'materialize-css';
import 'jquery';
import '@pixelcog/parallax.js';


declare var M: any;

export class Base {
  constructor() {

    initializeElem('.sidenav', M.Sidenav, {edge: "left"});
    initializeElem('.dropdown-trigger', M.Dropdown, {});

    // date transformation in <time class=date> tag.
    let dates = Array.from(document.querySelectorAll("time.date")) as HTMLTimeElement[];  // dates: NodeListOf<Element>

    for (let date of dates) {
      // date.innerHTML: 2017-12-09 11:00:00 +0800 CST. Only Chrome works well when converting this to a date object,
      // but this booms in other browsers. So we have to extract core date part out via a regex.
      let re = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/;
      let dateCore = '';
      let match = re.exec(date.innerHTML);
      if (match) {
        dateCore = match[0];
      }
      date.innerHTML = formatDistance(new Date(dateCore), new Date())
    }

  }
}

new Base();
