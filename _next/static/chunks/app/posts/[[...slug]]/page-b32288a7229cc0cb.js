(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{8092:function(e,t,o){Promise.resolve().then(o.t.bind(o,8853,23)),Promise.resolve().then(o.t.bind(o,3950,23)),Promise.resolve().then(o.t.bind(o,4337,23)),Promise.resolve().then(o.t.bind(o,5676,23)),Promise.resolve().then(o.t.bind(o,5152,23)),Promise.resolve().then(o.bind(o,8e3)),Promise.resolve().then(o.bind(o,4720)),Promise.resolve().then(o.bind(o,6447)),Promise.resolve().then(o.t.bind(o,344,23))},8e3:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return l}});var n=o(3962),r=o(3328),i=o.n(r),d=o(3857),a=o(9517);function l(e){let{toc:t}=e,{currentSectionSlug:o}=c(t);return(0,n.jsx)("ul",{"data-animate-layer":!0,className:"mt-12 space-y-2.5 font-sans text-sm text-gray-11 ",children:t.map((e,t)=>(0,n.jsx)("li",{className:"flex",children:(0,n.jsx)("a",{className:(0,a.cn)("transition-colors hover:text-tx",o===e.slug&&"font-medium text-tx"),href:"#".concat(e.slug),children:e.text})},t))})}let c=e=>{let[t,o]=(0,d.useState)();return(0,d.useEffect)(()=>{let t;if(0===e.length)return;let n=0,r=()=>{var e,o;t=Array.from(document.querySelectorAll(".mdx h2")).map(e=>({id:e.id,top:e.offsetTop})),n=parseFloat(null!==(o=null===(e=window.getComputedStyle(document.documentElement).getPropertyValue("--page-top").match(/[\d.]+/))||void 0===e?void 0:e[0])&&void 0!==o?o:"0")},d=i()(()=>{let e;if(!t)return;let r=window.scrollY+n;for(let o=0;o<t.length;o++)r>=t[o].top&&(e=t[o].id);o(e)},300);return r(),d(),window.addEventListener("scroll",d,{capture:!0}),window.addEventListener("resize",r,{capture:!0}),()=>{window.removeEventListener("scroll",d,{capture:!0}),window.removeEventListener("resize",r,{capture:!0})}},[e]),{currentSectionSlug:t}}},6447:function(e,t,o){"use strict";o.r(t),o.d(t,{Giscus:function(){return d}});var n=o(3962),r=o(588),i=o(3857);function d(){let e=(0,i.useRef)(null),{resolvedTheme:t}=(0,r.F)(),o="dark"===t?"dark":"light";return(0,i.useEffect)(()=>{if(!e.current||e.current.hasChildNodes())return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","imchanyo/blog-comment-repo"),t.setAttribute("data-repo-id","R_kgDOK411Vg"),t.setAttribute("data-category","General"),t.setAttribute("data-category-id","DIC_kwDOK411Vs4CbrpA"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","top"),t.setAttribute("data-theme",o),t.setAttribute("data-lang","en"),e.current.appendChild(t)},[]),(0,i.useEffect)(()=>{var e;let t=document.querySelector("iframe.giscus-frame");null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:o}}},"https://giscus.app")},[o]),(0,n.jsx)("section",{ref:e})}},4720:function(e,t,o){"use strict";o.r(t),o.d(t,{Mdx:function(){return y}});var n=o(3962),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=function(e){return"IMG"===e.tagName},d=function(e){return e&&1===e.nodeType},a=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},l=function(e){try{if(Array.isArray(e))return e.filter(i);if(NodeList.prototype.isPrototypeOf(e))return[].slice.call(e).filter(i);if(d(e))return[e].filter(i);if("string"==typeof e)return[].slice.call(document.querySelectorAll(e)).filter(i);return[]}catch(e){throw TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},c=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},m=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,r=t.width,i=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+l+"px",d.style.width=r+"px",d.style.height=i+"px",d.style.transform="",d},u=function(e,t){var o=r({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),n};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var s=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=window.Promise||function(e){function t(){}e(t,t)},i=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce(function(e,t){return[].concat(e,l(t))},[]);return n.filter(function(e){return -1===g.indexOf(e)}).forEach(function(e){g.push(e),e.classList.add("medium-zoom-image")}),h.forEach(function(e){var t=e.type,o=e.listener,r=e.options;n.forEach(function(e){e.addEventListener(t,o,r)})}),w},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,o=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;if(b.container){if(b.container instanceof Object)t=(e=r({},e,b.container)).width-e.left-e.right-2*b.margin,o=e.height-e.top-e.bottom-2*b.margin;else{var n=(d(b.container)?b.container:document.querySelector(b.container)).getBoundingClientRect();e=r({},e,{width:n.width,height:n.height,left:n.left,top:n.top})}}t=t||e.width-2*b.margin,o=o||e.height-2*b.margin;var i=y.zoomedHd||y.original,l=a(i)?t:i.naturalWidth||t,c=a(i)?o:i.naturalHeight||o,m=i.getBoundingClientRect(),u=m.top,s=m.left,f=m.width,p=m.height,g=Math.min(Math.min(Math.max(f,l),t)/f,Math.min(Math.max(p,c),o)/p),h=(-s+(t-f)/2+b.margin+e.left)/g,v=(-u+(o-p)/2+b.margin+e.top)/g,z="scale("+g+") translate3d("+h+"px, "+v+"px, 0)";y.zoomed.style.transform=z,y.zoomedHd&&(y.zoomedHd.style.transform=z)};return new n(function(e){if(t&&-1===g.indexOf(t)||y.zoomed){e(w);return}if(t)y.original=t;else if(g.length>0){var n=g;y.original=n[0]}else{e(w);return}if(y.original.dispatchEvent(u("medium-zoom:open",{detail:{zoom:w}})),z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,v=!0,y.zoomed=m(y.original),document.body.appendChild(E),b.template){var r=d(b.template)?b.template:document.querySelector(b.template);y.template=document.createElement("div"),y.template.appendChild(r.content.cloneNode(!0)),document.body.appendChild(y.template)}if(y.original.parentElement&&"PICTURE"===y.original.parentElement.tagName&&y.original.currentSrc&&(y.zoomed.src=y.original.currentSrc),document.body.appendChild(y.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),y.original.classList.add("medium-zoom-image--hidden"),y.zoomed.classList.add("medium-zoom-image--opened"),y.zoomed.addEventListener("click",f),y.zoomed.addEventListener("transitionend",function t(){v=!1,y.zoomed.removeEventListener("transitionend",t),y.original.dispatchEvent(u("medium-zoom:opened",{detail:{zoom:w}})),e(w)}),y.original.getAttribute("data-zoom-src")){y.zoomedHd=y.zoomed.cloneNode(),y.zoomedHd.removeAttribute("srcset"),y.zoomedHd.removeAttribute("sizes"),y.zoomedHd.removeAttribute("loading"),y.zoomedHd.src=y.zoomed.getAttribute("data-zoom-src"),y.zoomedHd.onerror=function(){clearInterval(i),console.warn("Unable to reach the zoom image target "+y.zoomedHd.src),y.zoomedHd=null,o()};var i=setInterval(function(){y.zoomedHd.complete&&(clearInterval(i),y.zoomedHd.classList.add("medium-zoom-image--opened"),y.zoomedHd.addEventListener("click",f),document.body.appendChild(y.zoomedHd),o())},10)}else if(y.original.hasAttribute("srcset")){y.zoomedHd=y.zoomed.cloneNode(),y.zoomedHd.removeAttribute("sizes"),y.zoomedHd.removeAttribute("loading");var a=y.zoomedHd.addEventListener("load",function(){y.zoomedHd.removeEventListener("load",a),y.zoomedHd.classList.add("medium-zoom-image--opened"),y.zoomedHd.addEventListener("click",f),document.body.appendChild(y.zoomedHd),o()})}else o()})},f=function(){return new n(function(e){if(v||!y.original){e(w);return}v=!0,document.body.classList.remove("medium-zoom--opened"),y.zoomed.style.transform="",y.zoomedHd&&(y.zoomedHd.style.transform=""),y.template&&(y.template.style.transition="opacity 150ms",y.template.style.opacity=0),y.original.dispatchEvent(u("medium-zoom:close",{detail:{zoom:w}})),y.zoomed.addEventListener("transitionend",function t(){y.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(y.zoomed),y.zoomedHd&&document.body.removeChild(y.zoomedHd),document.body.removeChild(E),y.zoomed.classList.remove("medium-zoom-image--opened"),y.template&&document.body.removeChild(y.template),v=!1,y.zoomed.removeEventListener("transitionend",t),y.original.dispatchEvent(u("medium-zoom:closed",{detail:{zoom:w}})),y.original=null,y.zoomed=null,y.zoomedHd=null,y.template=null,e(w)})})},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return y.original?f():s({target:t})},g=[],h=[],v=!1,z=0,b=o,y={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?b=t:(t||"string"==typeof t)&&i(t);var E=c((b=r({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},b)).background);document.addEventListener("click",function(e){var t=e.target;if(t===E){f();return}-1!==g.indexOf(t)&&p({target:t})}),document.addEventListener("keyup",function(e){var t=e.key||e.keyCode;("Escape"===t||"Esc"===t||27===t)&&f()}),document.addEventListener("scroll",function(){!v&&y.original&&Math.abs(z-(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0))>b.scrollOffset&&setTimeout(f,150)}),window.addEventListener("resize",f);var w={open:s,close:f,toggle:p,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.background&&(E.style.background=e.background),e.container&&e.container instanceof Object&&(e.container=r({},b.container,e.container)),e.template){var t=d(e.template)?e.template:document.querySelector(e.template);e.template=t}return b=r({},b,e),g.forEach(function(e){e.dispatchEvent(u("medium-zoom:update",{detail:{zoom:w}}))}),w},clone:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(r({},b,t))},attach:i,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];y.zoomed&&f();var n=t.length>0?t.reduce(function(e,t){return[].concat(e,l(t))},[]):g;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(u("medium-zoom:detach",{detail:{zoom:w}}))}),g=g.filter(function(e){return -1===n.indexOf(e)}),w},on:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.forEach(function(n){n.addEventListener("medium-zoom:"+e,t,o)}),h.push({type:"medium-zoom:"+e,listener:t,options:o}),w},off:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.forEach(function(n){n.removeEventListener("medium-zoom:"+e,t,o)}),h=h.filter(function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())}),w},getOptions:function(){return b},getImages:function(){return g},getZoomedImage:function(){return y.original}};return w},f=o(3857),p=o(5708),g=o(2160);let h=(e,t={})=>{let o={React:f,ReactDOM:p,_jsx_runtime:g.i,...t},n=Function(...Object.keys(o),e);return n(...Object.values(o)).default},v=(e,t={})=>f.useMemo(()=>h(e,t),[e,t]);var z=o(9517);let b={hr:e=>{let{...t}=e;return(0,n.jsx)("hr",{"aria-orientation":"horizontal",...t})},table:e=>{let{className:t,...o}=e;return(0,n.jsx)("div",{className:"my-6 w-full overflow-y-auto",children:(0,n.jsx)("table",{className:(0,z.cn)("w-full",t),...o})})}};function y(e){let{code:t,...o}=e,r=v(t);return(0,f.useEffect)(()=>{let e=s(".mdx img",{background:"var(--bg)"});return()=>{e.detach()}},[]),(0,n.jsx)("article",{className:"mdx",...o,children:(0,n.jsx)(r,{components:b})})}},9517:function(e,t,o){"use strict";o.d(t,{Wd:function(){return d},cn:function(){return i}});var n=o(9754),r=o(1171);function i(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return(0,r.m)((0,n.Z)(t))}let d=()=>"https://imchanyo.github.io"},5152:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{suspense:function(){return r},NoSSR:function(){return i}}),o(7023),o(3857);let n=o(2599);function r(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},344:function(){},2160:function(e,t,o){let n=o(3962);e.exports.i=n}},function(e){e.O(0,[853,279,189,927,744],function(){return e(e.s=8092)}),_N_E=e.O()}]);