!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t){!function(){function e(e){e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.querySelector(".services__scroll").scrollLeft-=10*t,e.preventDefault()}document.querySelector(".services__scroll").addEventListener?(document.querySelector(".services__info").addEventListener("mousewheel",e,!1),document.querySelector(".services__scroll").addEventListener("DOMMouseScroll",e,!1)):document.querySelector(".services__scroll").attachEvent("onmousewheel",e)}()},function(e,t,n){"use strict";n.r(t);n(1);var r=function(e,t,n){var r=document.querySelectorAll(e),o=document.querySelectorAll(t),c=document.querySelectorAll(n),i=document.querySelector(".services");function l(e){c.forEach((function(t,n){o.forEach((function(r){r.classList.contains("active")&n>=1?t.classList.add(e):t.classList.remove(e)}))}))}r.forEach((function(e){e.addEventListener("click",(function(t){t.target&&(t.preventDefault(),e.classList.toggle("active"),o.forEach((function(e){e.classList.toggle("active")})),e.classList.contains("btn")&&l("pl"),e.classList.contains("btn__modal")&&l("pr"),e.classList.contains("btn__call")&&l("pr"))}))})),i.addEventListener("click",(function(e){e.target!==i&&(r.forEach((function(e){e.classList.remove("active")})),c.forEach((function(e){e.classList.remove("pl"),e.classList.remove("pr")})),o.forEach((function(e){e.classList.remove("active")})))}))};r(".btn",".burger",".container"),r(".btn__modal",".modal",".container"),r(".btn__call",".modal__call",".container");new Swiper(".swiper-container",{spaceBetween:16,pagination:{el:".swiper-pagination"}})}]);
//# sourceMappingURL=bundle.js.map