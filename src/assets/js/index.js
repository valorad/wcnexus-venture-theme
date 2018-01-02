import { formatDistance } from 'date-fns';

/**
 * @param {string} eleSelector
 * @param {any} opts
 * @param {any} instanceClass 
 * init materializecss components
 */
const initializeElem = (eleSelector, options={}, instanceClass) => {
  const elem = document.querySelector(eleSelector);
  if (eleSelector && instanceClass) {
    return new instanceClass(elem, options)
  }
};

// initSideNav = () => {
//   // side nav init
//   const elem = document.querySelector('.sidenav');
//   const options = {
//     edge: "left"
//   }
//   return new M.Sidenav(elem, options);
// };

export default () => {

  initializeElem('.sidenav', {edge: "left"}, M.Sidenav);
  initializeElem('.dropdown-trigger', {}, M.Dropdown);

  // const w9 = new M.FloatingActionButton()

  // date transformation in <time class=date> tag.
  let dates = document.querySelectorAll("time.date"); // dates: NodeListOf<Element>
  for (let date of dates) {
    // date.innerHTML: 2017-12-09 11:00:00 +0800 CST. Only Chrome works well when converting this to a date object,
    // but this booms in other browsers. So we have to extract core date part out via a regex.
    let re = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/;
    let dateCore = re.exec(date.innerHTML)[0];
    date.innerHTML = formatDistance(new Date(dateCore), new Date())
  }
  
};