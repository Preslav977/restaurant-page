(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.header-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  font-size: 25px;\n  background-color: #f4f2f8;\n}\n\n.restaurant-tab-container {\n  display: flex;\n  gap: 6em;\n  justify-content: center;\n  outline: 1px solid black;\n  height: 80px;\n  align-items: center;\n  background-color: #4a7856;\n  color: #fff;\n}\n\nli {\n  list-style: none;\n}\n\n.home-page {\n  height: 600px;\n  display: flex;\n  justify-content: center;\n}\n\n.flag-container {\n  margin-top: 20px;\n  width: 400px;\n  height: 200px;\n  position: absolute;\n  opacity: 0.6;\n}\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 136px;\n  background-color: #ff4754;\n  color: #fff;\n}\n\n.flag-img {\n  width: 400px;\n  height: 200px;\n}\n\n.home-img-tab {\n  width: 100%;\n  height: 100%;\n}\n\n.home-tab-container {\n  outline: 2px solid black;\n  position: absolute;\n  height: 250px;\n  width: 600px;\n  bottom: 20%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.first-paragraph {\n  font-size: 30px;\n  line-height: 50px;\n  color: #fff;\n  font-weight: 800;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-left: 10px;\n}\n\n.join-btn {\n  margin-top: 10px;\n  padding: 10px 40px 10px 40px;\n  font-size: 20px;\n  background-color: #4a7856;\n  border: 0;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.join-btn:hover,\n.li:hover {\n  cursor: pointer;\n}\n\n.menu-page {\n  height: 600px;\n  display: flex;\n  /* justify-content: center; */\n}\n\n.menu-tab-container {\n  outline: 2px solid black;\n  position: absolute;\n  height: 55%;\n  width: 50%;\n  top: 24%;\n  left: 25%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  border-radius: 5px;\n  color: #fff;\n  text-align: center;\n}\n\n.meal-menu {\n  width: 200px;\n  height: 200px;\n  margin: 10px;\n  border-radius: 12px;\n  cursor: pointer;\n}\n\n.contact-tab-container {\n  outline: 2px solid black;\n  position: absolute;\n  height: 40%;\n  width: 40%;\n  top: 28%;\n  left: 30%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  grid-template-columns: repeat(4, 1fr);\n  border-radius: 5px;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column-reverse;\n  cursor: pointer;\n}\n\n.contact-img-tab {\n  width: 700px;\n  height: 300px;\n}\n\n.contact-us {\n  margin-bottom: 20px;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),r=e.n(o),a=e(569),i=e.n(a),c=e(565),s=e.n(c),d=e(216),l=e.n(d),p=e(589),u=e.n(p),f=e(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=e.p+"bcab17c177ad9642f7cd.jpg",g=(e.p,document.getElementById("content"));e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,document.getElementById("content");const x=e.p+"e13cb7eb9a3f21221d5e.png",b=document.getElementById("content");!function(n,t,e){const o=document.createElement("div");o.classList.add("header-content");const r=document.createElement("header");r.classList.add("restaurant-header"),r.textContent="Bulgarian Restaurant",o.appendChild(r),g.appendChild(o)}(),function(n){const t=document.createElement("div");t.classList.add("restaurant-tab-container");const e=document.createElement("li");e.classList.add(n),e.textContent="Home",t.appendChild(e);const o=document.createElement("li");o.classList.add(n),o.textContent="Menu",t.appendChild(o);const r=document.createElement("li");r.classList.add(n),r.textContent="Contact",t.appendChild(r),g.appendChild(t)}("restaurant-tab"),function(){const n=document.createElement("main"),t=document.createElement("div");t.classList.add("menu-page");const e=document.createElement("div");e.classList.add("contact-tab-container");const o=new Image;o.src=h,o.classList.add("home-img-tab");const r=new Image;r.src=x,r.classList.add("contact-img-tab"),e.appendChild(r),t.appendChild(o),t.appendChild(e),n.appendChild(t),b.appendChild(n);const a=document.createElement("p");a.classList.add("contact-us"),a.textContent="Contact US",e.appendChild(a)}(),function(){const n=document.createElement("footer");g.appendChild(n),n.classList.add("restaurant-footer"),n.textContent="Made by Preslaw"}()})()})();