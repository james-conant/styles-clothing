(this["webpackJsonpstyles-clothing"]=this["webpackJsonpstyles-clothing"]||[]).push([[9],{129:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n(21),c=n(131),o=n.n(c),i=function(t){return t.shop},a=Object(r.a)([i],(function(t){return t.collections})),s=(Object(r.a)([a],(function(t){return t?Object.keys(t).map((function(e){return t[e]})):[]})),o()((function(t){return Object(r.a)([a],(function(e){return e?e[t]:null}))}))),u=(Object(r.a)([i],(function(t){return t.isFetching})),Object(r.a)([i],(function(t){return!!t.collections})))},130:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(19),o=n(34),i=n(129),a=n(55),s=(n(132),n(2));e.default=Object(c.b)(null,(function(t){return{addItem:function(e){return t(Object(o.a)(e))}}}))((function(t){t.size,t.item;var e=t.addItem,n=t.extra1;return Object(c.d)(i.c).map((function(t){return console.log(t.images),Object(s.jsxs)("div",{className:"collection-item collection-item--".concat(null),children:[Object(s.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t.images[0].url_570xN,")")}}),Object(s.jsx)("div",{className:"collection-footer",children:n?Object(s.jsxs)(r.Fragment,{children:[Object(s.jsxs)("div",{className:"collection-footer__line-1",children:[Object(s.jsx)("span",{className:"collection-footer__extra-1",children:null}),Object(s.jsxs)("span",{className:"collection-footer__price",children:["$",t.price," USD"]})]}),Object(s.jsx)("div",{className:"collection-footer__line-2",children:Object(s.jsxs)("span",{className:"collection-footer__name",children:[t.title.slice(0,15),"..."]})})]}):Object(s.jsx)(r.Fragment,{children:Object(s.jsxs)("div",{className:"collection-footer__line-1",children:[Object(s.jsx)("span",{className:"collection-footer__name",children:t.title.slice(0,15)}),Object(s.jsxs)("span",{className:"collection-footer__price",children:["$",t.price," USD"]})]})})}),Object(s.jsx)(a.a,{onClick:function(){return e(t)},inverted:!0,children:"Add to cart"})]},t._id)}))}))},131:function(t,e,n){(function(e){var n="__lodash_hash_undefined__",r="[object Function]",c="[object GeneratorFunction]",o=/^\[object .+?Constructor\]$/,i="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,s=i||a||Function("return this")();var u=Array.prototype,l=Function.prototype,f=Object.prototype,_=s["__core-js_shared__"],p=function(){var t=/[^.]+$/.exec(_&&_.keys&&_.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),h=l.toString,d=f.hasOwnProperty,j=f.toString,b=RegExp("^"+h.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),v=u.splice,y=k(s,"Map"),O=k(Object,"create");function g(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function m(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function x(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function N(t,e){for(var n,r,c=t.length;c--;)if((n=t[c][0])===(r=e)||n!==n&&r!==r)return c;return-1}function w(t){if(!S(t)||(e=t,p&&p in e))return!1;var e,n=function(t){var e=S(t)?j.call(t):"";return e==r||e==c}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?b:o;return n.test(function(t){if(null!=t){try{return h.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t))}function $(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function k(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return w(n)?n:void 0}function F(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,c=e?e.apply(this,r):r[0],o=n.cache;if(o.has(c))return o.get(c);var i=t.apply(this,r);return n.cache=o.set(c,i),i};return n.cache=new(F.Cache||x),n}function S(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}g.prototype.clear=function(){this.__data__=O?O(null):{}},g.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},g.prototype.get=function(t){var e=this.__data__;if(O){var r=e[t];return r===n?void 0:r}return d.call(e,t)?e[t]:void 0},g.prototype.has=function(t){var e=this.__data__;return O?void 0!==e[t]:d.call(e,t)},g.prototype.set=function(t,e){return this.__data__[t]=O&&void 0===e?n:e,this},m.prototype.clear=function(){this.__data__=[]},m.prototype.delete=function(t){var e=this.__data__,n=N(e,t);return!(n<0)&&(n==e.length-1?e.pop():v.call(e,n,1),!0)},m.prototype.get=function(t){var e=this.__data__,n=N(e,t);return n<0?void 0:e[n][1]},m.prototype.has=function(t){return N(this.__data__,t)>-1},m.prototype.set=function(t,e){var n=this.__data__,r=N(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},x.prototype.clear=function(){this.__data__={hash:new g,map:new(y||m),string:new g}},x.prototype.delete=function(t){return $(this,t).delete(t)},x.prototype.get=function(t){return $(this,t).get(t)},x.prototype.has=function(t){return $(this,t).has(t)},x.prototype.set=function(t,e){return $(this,t).set(t,e),this},F.Cache=x,t.exports=F}).call(this,n(38))},132:function(t,e,n){}}]);
//# sourceMappingURL=9.1420cd60.chunk.js.map