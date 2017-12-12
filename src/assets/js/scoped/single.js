const initializeElem = (eleSelector, options={}, instanceClass) => {
  const elem = document.querySelector(eleSelector);
  if (eleSelector && instanceClass) {
    return new instanceClass(elem, options)
  }
};

(()=>{
  initializeElem('div.share', {direction: "left"}, M.FloatingActionButton);
})()