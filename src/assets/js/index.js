import { formatDistance } from 'date-fns';

export default () => {
  // side nav init
  const elem = document.querySelector('.sidenav');
  const options = {
    edge: "left"
  }
  const instance = new M.Sidenav(elem, options);


  // date transformation in <time class=date> tag.
  let dates = document.querySelectorAll("time.date"); // dates: NodeListOf<Element>
  for (let date of dates) {
    // date.innerHTML: 2017-12-09 11:00:00 +0800 CST. Only Chrome works well when converting this to a date object,
    // but this booms in other browsers. So we have to extract core date part out via a regex.
    let re = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/;
    let dateCore = re.exec(date.innerHTML)[0];
    date.innerHTML = formatDistance(new Date(dateCore), new Date())
    // console.log(date.innerHTML);
    // console.log(new Date(date.innerHTML));
    // console.log(new Date());
    // console.log(formatDistance(new Date(date.innerHTML), new Date()));
  }
  
};