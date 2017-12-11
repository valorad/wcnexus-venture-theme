export default () => {
  // side nav init
  const elem = document.querySelector('.sidenav');
  const options = {
    edge: "left"
  }
  const instance = new M.Sidenav(elem, options);
};