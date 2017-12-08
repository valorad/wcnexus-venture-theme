export default function () {
  var elem = document.querySelector('.sidenav');
  var options = {
    edge: "left"
  }
  var instance = new M.Sidenav(elem, options);
};