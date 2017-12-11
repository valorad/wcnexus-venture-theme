import { formatDistance } from 'date-fns';

export default () => {
  // side nav init
  const elem = document.querySelector('.sidenav');
  const options = {
    edge: "left"
  }
  const instance = new M.Sidenav(elem, options);


  // date transformation
  let dates = document.querySelectorAll("span.date"); // dates: NodeListOf<Element>
  for (let date of dates) {
    date.innerHTML = formatDistance(new Date(date.innerHTML), new Date())
  }
  
};