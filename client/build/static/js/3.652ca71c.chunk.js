(this["webpackJsonpstyles-clothing"]=this["webpackJsonpstyles-clothing"]||[]).push([[3,9],{129:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var r=n(21),c=n(131),i=n.n(c),o=function(t){return t.shop},a=Object(r.a)([o],(function(t){return t.collections})),s=(Object(r.a)([a],(function(t){return t?Object.keys(t).map((function(e){return t[e]})):[]})),i()((function(t){return Object(r.a)([a],(function(e){return e?e[t]:null}))}))),l=(Object(r.a)([o],(function(t){return t.isFetching})),Object(r.a)([o],(function(t){return!!t.collections})))},130:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(19),i=n(34),o=n(129),a=n(55),s=(n(132),n(2));e.default=Object(c.b)(null,(function(t){return{addItem:function(e){return t(Object(i.a)(e))}}}))((function(t){t.size,t.item;var e=t.addItem,n=t.extra1;return Object(c.d)(o.c).map((function(t){return console.log(t.images),Object(s.jsxs)("div",{className:"collection-item collection-item--".concat(null),children:[Object(s.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t.images[0].url_570xN,")")}}),Object(s.jsx)("div",{className:"collection-footer",children:n?Object(s.jsxs)(r.Fragment,{children:[Object(s.jsxs)("div",{className:"collection-footer__line-1",children:[Object(s.jsx)("span",{className:"collection-footer__extra-1",children:null}),Object(s.jsxs)("span",{className:"collection-footer__price",children:["$",t.price," USD"]})]}),Object(s.jsx)("div",{className:"collection-footer__line-2",children:Object(s.jsxs)("span",{className:"collection-footer__name",children:[t.title.slice(0,15),"..."]})})]}):Object(s.jsx)(r.Fragment,{children:Object(s.jsxs)("div",{className:"collection-footer__line-1",children:[Object(s.jsx)("span",{className:"collection-footer__name",children:t.title.slice(0,15)}),Object(s.jsxs)("span",{className:"collection-footer__price",children:["$",t.price," USD"]})]})})}),Object(s.jsx)(a.a,{onClick:function(){return e(t)},inverted:!0,children:"Add to cart"})]},t._id)}))}))},131:function(t,e,n){(function(e){var n="__lodash_hash_undefined__",r="[object Function]",c="[object GeneratorFunction]",i=/^\[object .+?Constructor\]$/,o="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,s=o||a||Function("return this")();var l=Array.prototype,u=Function.prototype,f=Object.prototype,d=s["__core-js_shared__"],p=function(){var t=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),h=u.toString,b=f.hasOwnProperty,m=f.toString,j=RegExp("^"+h.call(b).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),g=l.splice,_=I(s,"Map"),v=I(Object,"create");function x(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function y(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function O(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function w(t,e){for(var n,r,c=t.length;c--;)if((n=t[c][0])===(r=e)||n!==n&&r!==r)return c;return-1}function N(t){if(!C(t)||(e=t,p&&p in e))return!1;var e,n=function(t){var e=C(t)?m.call(t):"";return e==r||e==c}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?j:i;return n.test(function(t){if(null!=t){try{return h.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t))}function k(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function I(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return N(n)?n:void 0}function S(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,c=e?e.apply(this,r):r[0],i=n.cache;if(i.has(c))return i.get(c);var o=t.apply(this,r);return n.cache=i.set(c,o),o};return n.cache=new(S.Cache||O),n}function C(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}x.prototype.clear=function(){this.__data__=v?v(null):{}},x.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},x.prototype.get=function(t){var e=this.__data__;if(v){var r=e[t];return r===n?void 0:r}return b.call(e,t)?e[t]:void 0},x.prototype.has=function(t){var e=this.__data__;return v?void 0!==e[t]:b.call(e,t)},x.prototype.set=function(t,e){return this.__data__[t]=v&&void 0===e?n:e,this},y.prototype.clear=function(){this.__data__=[]},y.prototype.delete=function(t){var e=this.__data__,n=w(e,t);return!(n<0)&&(n==e.length-1?e.pop():g.call(e,n,1),!0)},y.prototype.get=function(t){var e=this.__data__,n=w(e,t);return n<0?void 0:e[n][1]},y.prototype.has=function(t){return w(this.__data__,t)>-1},y.prototype.set=function(t,e){var n=this.__data__,r=w(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},O.prototype.clear=function(){this.__data__={hash:new x,map:new(_||y),string:new x}},O.prototype.delete=function(t){return k(this,t).delete(t)},O.prototype.get=function(t){return k(this,t).get(t)},O.prototype.has=function(t){return k(this,t).has(t)},O.prototype.set=function(t,e){return k(this,t).set(t,e),this},S.Cache=O,t.exports=S}).call(this,n(38))},132:function(t,e,n){},133:function(t,e,n){"use strict";n(1),n(134);var r=n(55),c=n(2);e.a=function(){return Object(c.jsx)("div",{className:"footer-banner",children:Object(c.jsxs)("div",{className:"footer-banner__content",children:[Object(c.jsx)("div",{className:"footer-banner__text",children:"Sign up to our newsletter for the latest news and exclusive deals"}),Object(c.jsx)(r.a,{className:"footer-banner__button",children:"SIGN UP"})]})})}},134:function(t,e,n){},135:function(t,e,n){"use strict";n(1),n(130),n(136);var r=n(2);e.a=function(t){return console.log(t),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})})}},136:function(t,e,n){},137:function(t,e,n){},138:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n.p+"static/media/homepage-image.f932ea66.png",c=n.p+"static/media/homepage-image2.4bef5d42.png",i=n.p+"static/media/must-haves.bf25c20c.png",o=n.p+"static/media/menspage-image.92d3d618.png",a=n.p+"static/media/menspage-image2.644c8872.png",s=n.p+"static/media/womenspage-image.0c0ad7ca.png",l=n.p+"static/media/womenspage-image2.e1e6b5b6.png",u=n.p+"static/media/apex-logo.16d0c0b0.png"},139:function(t,e,n){"use strict";n(1),n(137);var r,c,i,o=n(8),a=n(9),s=a.c.div(r||(r=Object(o.a)(["\n  width: -webkit-fill-available;\n  overflow: hidden;\n"]))),l=a.c.div(c||(c=Object(o.a)(["\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  height: 85vh;\n  -webkit-font-smoothing: antialiased;\n  box-shadow: inset 0px -130px 200px -45px black;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n    opacity: 0.93;\n  }\n  &:not(:hover) {\n    transform: scale(1);\n    transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n  }\n  .container {\n    display: flex;\n    flex-direction: column;\n    color: #fff;\n    &--1 {\n      align-items: center;\n      padding-bottom: 90px;\n    }\n    &--2 {\n      align-items: flex-start;\n      padding-bottom: 500px;\n      padding-left: 100px;\n      font-family: Roboto, Helvetica, Arial, sans-serif;\n      font-size: 23px;\n      .title {\n        font-family: Montserrat, Helvetica, Arial, sans-serif;\n        font-size: 45px;\n        font-weight: 700;\n      }\n    }\n    &--3 {\n      align-items: flex-start;\n      padding-bottom: 300px;\n      padding-left: 100px;\n      font-size: 18px;\n      font-family: Roboto, Helvetica, Arial, sans-serif;\n      .item {\n        margin-top: -30px;\n        width: 400px;\n      }\n    }\n  }\n"])),(function(t){var e=t.primaryImage;return"url(".concat(e,")")})),u=a.c.div(i||(i=Object(o.a)(["\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  width: 100%;\n  padding: 140px;\n"])),(function(t){var e=t.secondaryImage;return"url(".concat(e,")")})),f=n(27),d=n(2);e.a=function(t){var e=t.title,n=t.text,r=t.styleType,c=t.primaryImage,i=t.secondaryImage,o=i||"";return Object(d.jsx)(s,{className:"banner-wrapper",children:Object(d.jsx)(l,{className:"wrapper",primaryImage:c,children:Object(d.jsxs)("div",{className:"container container--".concat(r),children:[e?Object(d.jsx)("div",{className:"title",children:e}):null,i?Object(d.jsx)(u,{className:"must-haves",secondaryImage:o}):null,Object(d.jsx)("p",{className:"item",children:n}),Object(d.jsx)(f.b,{className:"button ",to:"/shop",children:"SHOP"})]})})})}},154:function(t,e,n){"use strict";n.r(e);n(1),n(135);var r,c,i,o=n(19),a=n(21),s=n(129),l=n(133),u=n(8),f=n(9),d=n(139),p=f.c.div(r||(r=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),h=f.c.div(c||(c=Object(u.a)(["\n  width: 100%;\n"]))),b=Object(f.c)(d.a)(i||(i=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-bottom: 90px;\n  color: #fff;\n"]))),m=n(138),j=n(2),g=Object(a.b)({hotItemsCollection:Object(s.b)("hot-items"),newReleasesCollection:Object(s.b)("new-releases")});e.default=Object(o.b)(g)((function(t){t.hotItemsCollection,t.newReleasesCollection;return Object(j.jsxs)(p,{children:[Object(j.jsx)(b,{primaryImage:m.b,secondaryImage:m.f,text:"For those who move.",styleType:1}),Object(j.jsx)(h,{}),Object(j.jsx)(b,{primaryImage:m.c,text:"The Gymshark x Whitney Simmons Collection",title:"SHAPED BY PROGRESS",styleType:2}),Object(j.jsx)(h,{}),Object(j.jsx)(l.a,{className:"footer-banner"})]})}))}}]);
//# sourceMappingURL=3.652ca71c.chunk.js.map