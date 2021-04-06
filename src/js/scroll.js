(function () {

  function scrollHorizontally(e) {
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.querySelector('.services__info').scrollLeft -= (delta * 10); // Multiplied by 10
    e.preventDefault();
  }
  if (document.querySelector('.services__info').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.querySelector('.services__info').addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.querySelector('.services__info').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.querySelector('.services__info').attachEvent("onmousewheel", scrollHorizontally);
  }

})();