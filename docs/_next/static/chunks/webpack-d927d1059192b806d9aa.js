!function(){"use strict";var e={},t={};function n(r){var f=t[r];if(void 0!==f)return f.exports;var o=t[r]={exports:{}},a=!0;try{e[r].call(o.exports,o,o.exports,n),a=!1}finally{a&&delete t[r]}return o.exports}n.m=e,function(){var e=[];n.O=function(t,r,f,o){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],f=e[d][1],o=e[d][2];for(var c=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(c=!1,o<a&&(a=o));if(c){e.splice(d--,1);var u=f();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,f,o]}}(),n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/chunks/"+(351===e?"commons":e)+"."+{12:"5f16d187793943ba689d",67:"f67a384715130632841e",81:"981ed72ad7fdda990f73",100:"3be30056e5a3e792c5fc",125:"3404293336bde8b3c3a1",137:"df633ebfea4bd5db4e5b",170:"206c7fe38c9744e6270c",212:"bcae8bd471c053771a7b",291:"bf14cfc15811b9af4e67",351:"cf0e31de8c991dce07bc",364:"fcf5cd73a9e8f3eda80c",379:"da217b961efc5b192c85",395:"6daaf985a92f3b358072",403:"0a3e34734b3281b338ed",407:"082acba88ea36a8db81d",419:"9c9163812411648c00ec",440:"0e440313bd4ffa865113",469:"6c05ad2d4bce9904aa2f",617:"e19a5268144b8dea2d5f",628:"ee6afd196b2adaf770a2",653:"9b00b2f71504c7537c7f",778:"3caf1198127ccc9c3b1f",805:"a09d5ae225aa40976fd9",817:"f15f3ba03d8b02ad0c88",819:"b954829fad354c9a1791",835:"20fc00934c665498e390",864:"093125330d6d024dc635",973:"d997445d0e264ce29f6e"}[e]+".js"},n.miniCssF=function(e){return"static/css/49a77d3375e6d2481eb5.css"},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="_N_E:";n.l=function(r,f,o,a){if(e[r])e[r].push(f);else{var c,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var b=u[d];if(b.getAttribute("src")==r||b.getAttribute("data-webpack")==t+o){c=b;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=r),e[r]=[f];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(s);var f=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),f&&f.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),i&&document.head.appendChild(c)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="https://archivosunam.github.io/VIColoquio//_next/",function(){var e={272:0};n.f.j=function(t,r){var f=n.o(e,t)?e[t]:void 0;if(0!==f)if(f)r.push(f[2]);else if(272!=t){var o=new Promise((function(n,r){f=e[t]=[n,r]}));r.push(f[2]=o);var a=n.p+n.u(t),c=new Error;n.l(a,(function(r){if(n.o(e,t)&&(0!==(f=e[t])&&(e[t]=void 0),f)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,f[1](c)}}),"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var f,o,a=r[0],c=r[1],i=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(f in c)n.o(c,f)&&(n.m[f]=c[f]);if(i)var d=i(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return n.O(d)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();