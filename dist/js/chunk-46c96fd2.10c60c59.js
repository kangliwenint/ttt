(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46c96fd2"],{"0d7a":function(t,e,i){"use strict";var a=i("b2a2"),n=i("8a1c"),r=i("857c"),s=i("2732"),o=i("ef4c"),c=i("38eb"),u=i("d88d"),l=i("59da"),d=i("5139"),f=i("efe2"),p=[].push,h=Math.min,g=4294967295,v=!f((function(){return!RegExp(g,"y")}));a("split",2,(function(t,e,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var a=String(s(this)),r=void 0===i?g:i>>>0;if(0===r)return[];if(void 0===t)return[a];if(!n(t))return e.call(a,t,r);var o,c,u,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,f+"g");while(o=d.call(v,a)){if(c=v.lastIndex,c>h&&(l.push(a.slice(h,o.index)),o.length>1&&o.index<a.length&&p.apply(l,o.slice(1)),u=o[0].length,h=c,l.length>=r))break;v.lastIndex===o.index&&v.lastIndex++}return h===a.length?!u&&v.test("")||l.push(""):l.push(a.slice(h)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var n=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n,i):a.call(String(n),e,i)},function(t,n){var s=i(a,t,this,n,a!==e);if(s.done)return s.value;var d=r(t),f=String(this),p=o(d,RegExp),b=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),k=new p(v?d:"^(?:"+d.source+")",m),y=void 0===n?g:n>>>0;if(0===y)return[];if(0===f.length)return null===l(k,f)?[f]:[];var x=0,C=0,S=[];while(C<f.length){k.lastIndex=v?C:0;var $,w=l(k,v?f:f.slice(C));if(null===w||($=h(u(k.lastIndex+(v?0:C)),f.length))===x)C=c(f,C,b);else{if(S.push(f.slice(x,C)),S.length===y)return S;for(var _=1;_<=w.length-1;_++)if(S.push(w[_]),S.length===y)return S;C=x=$}}return S.push(f.slice(x)),S}]}),!v)},1462:function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",(function(){return a}))},"2eeb":function(t,e,i){"use strict";var a=i("1c8b"),n=i("5dfd").map,r=i("1ea7"),s=i("ff9c"),o=r("map"),c=s("map");a({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"2f14":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("b4fb"),i("77ad");var a=i("1462"),n=i("a340"),r=function(){function t(){Object(a["a"])(this,t)}return Object(n["a"])(t,[{key:"queryString",value:function(t){var e="";for(var i in t)e+="".concat(i,"=").concat(t[i],"&");return e.slice(0,-1)}}]),t}(),s=new r},9302:function(t,e,i){"use strict";var a=i("1c8b"),n=i("692f"),r=i("da10"),s=i("d7e1"),o=[].join,c=n!=Object,u=s("join",",");a({target:"Array",proto:!0,forced:c||!u},{join:function(t){return o.call(r(this),void 0===t?",":t)}})},a340:function(t,e,i){"use strict";function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}i.d(e,"a",(function(){return n}))},b4fb:function(t,e,i){"use strict";var a=i("1c8b"),n=i("efe2"),r=i("74e7"),s=i("a719"),o=i("3553"),c=i("d88d"),u=i("1bbd"),l=i("1ca1"),d=i("1ea7"),f=i("90fb"),p=i("f594"),h=f("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=d("concat"),k=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},y=!b||!m;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,i,a,n,r,s=o(this),d=l(s,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?s:arguments[e],k(r)){if(n=c(r.length),f+n>g)throw TypeError(v);for(i=0;i<n;i++,f++)i in r&&u(d,f,r[i])}else{if(f>=g)throw TypeError(v);u(d,f++,r)}return d.length=f,d}})},c84b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),i("div",{staticClass:"detail-box"},[i("img",{staticClass:"auto-img",attrs:{src:t.product.large_img,alt:""}}),i("div",{staticClass:"pro-name"},[i("div",[t._v(t._s(t.product.name))])])]),i("div",{staticClass:"detail-info"},[i("div",{staticClass:"rule-box"},t._l(t.product.rules,(function(e,a){return i("div",{key:a,staticClass:"rule-item clearfix"},[i("div",{staticClass:"fl rule-item-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"fl clearfix"},t._l(e.rules,(function(e,n){return i("div",{key:n,staticClass:"fl rule-item-tag",class:{active:e.isActive},on:{click:function(i){return t.toggleRule(e,a)}}},[t._v(t._s(e.title))])})),0)])})),0),i("div",{staticClass:"desc-box"},[i("div",{staticClass:"desc-title"},[t._v("商品描述")]),i("div",{staticClass:"desc-content"},t._l(t.product.desc,(function(e,a){return i("div",{key:a,staticClass:"desc-text"},[t._v(t._s(a+1)+"、"+t._s(e))])})),0)]),i("div",{staticClass:"clearfix desc-price-count"},[i("div",{staticClass:"fl price"},[t._v("￥"+t._s(t.product.price))]),i("div",{staticClass:"fr count"},[i("van-stepper",{attrs:{theme:"round","button-size":"24","disable-input":""},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1)])]),i("van-goods-action",[i("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.waiter}}),i("van-goods-action-icon",{attrs:{icon:"shopping-cart",text:"购物袋",badge:0==t.shopbagnumber?"":t.shopbagnumber,color:"#999"},on:{click:t.goShopbag}}),i("van-goods-action-icon",{attrs:{icon:"star",text:"收藏",color:t.isLike?"#5f56ff":"#999"},on:{click:t.addlike}}),i("van-goods-action-button",{attrs:{color:"#6A91EC",text:"加入购物袋"},on:{click:t.addshopbagnumber}}),i("van-goods-action-button",{attrs:{color:"#5f56ff",text:"立即购买"},on:{click:t.buy}})],1)],1)},n=[],r=(i("9302"),i("2eeb"),i("e35a"),i("0d7a"),i("eadb"),i("2f14")),s={data:function(){return{pid:"",product:{},count:0,isLike:!1,shopbagnumber:0}},created:function(){this.pid=this.$route.query.pid,this.getproductdata(),this.findlike(),this.findshopbagnumber()},methods:{back:function(){this.$router.go(-1)},goShopbag:function(){this.$router.push({name:"Shopbag"})},getproductdata:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/productDetail",params:{appkey:this.appkey,pid:this.pid}}).then((function(e){if(t.$toast.clear(),600==e.data.code){e.data.result[0].desc=e.data.result[0].desc.split(/\n/);var i=["tem","sugar","cream","milk"],a=[];i.map((function(t){if(""!=e.data.result[0][t]){var i={title:e.data.result[0][t+"_desc"],rules:[]},n=e.data.result[0][t].split("/");n.map((function(t,e){var a={title:t,isActive:0==e};i.rules.push(a)})),a.push(i)}})),e.data.result[0].rules=a,t.product=e.data.result[0]}})).catch((function(t){}))},toggleRule:function(t,e){if(!t.isActive){for(var i=this.product.rules[e].rules,a=0;a<i.length;a++)if(i[a].isActive){i[a].isActive=!1;break}t.isActive=!0}},findlike:function(){var t=this,e=localStorage.getItem("CSTK");e&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findlike",params:{appkey:this.appkey,tokenString:e,pid:this.pid}}).then((function(e){t.$toast.clear(),1e3==e.data.code&&1==e.data.result.length&&(t.isLike=!0)})).catch((function(e){t.$toast.clear()})))},addlike:function(){var t=this,e=localStorage.getItem("CSTK");if(!e)return this.$router.push({name:"Login"});var i=r["a"].queryString({appkey:this.appkey,tokenString:e,pid:this.pid}),a=this.isLike?"/notlike":"/like";this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:a,data:i}).then((function(e){if(t.$toast.clear(),700==e.data.code)return t.$router.push({name:"Login"});t.$toast(e.data.msg),800==e.data.code?t.isLike=!0:900==e.data.code&&(t.isLike=!1)})).catch((function(e){t.$toast.clear()}))},findshopbagnumber:function(){var t=this,e=localStorage.getItem("CSTK");e&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findAllShopcart",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),5e3==e.data.code?t.shopbagnumber=e.data.result.length:t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()})))},addshopbagnumber:function(t){var e=this,i=localStorage.getItem("CSTK");if(!i)return this.$router.push({name:"Login"});var a=this.product.rules,n=[];a.map((function(t){for(var e=0;e<t.rules.length;e++)if(t.rules[e].isActive){n.push(t.rules[e].title);break}}));var s=r["a"].queryString({appkey:this.appkey,tokenString:i,pid:this.pid,count:this.count,rule:n.join("/")});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/addShopcart",data:s}).then((function(i){e.$toast.clear(),3e3==i.data.code&&(1==i.data.status&&e.shopbagnumber++,!0===t&&setTimeout((function(){e.$router.push({name:"Pay",query:{sids:i.data.sid}})}),600))})).catch((function(t){e.$toast.clear()}))},buy:function(){this.addshopbagnumber(!0)},waiter:function(){this.$router.push({name:"Waiter"})}}},o=s,c=i("9ca4"),u=Object(c["a"])(o,a,n,!1,null,"4d228292",null);e["default"]=u.exports},d7e1:function(t,e,i){"use strict";var a=i("efe2");t.exports=function(t,e){var i=[][t];return!!i&&a((function(){i.call(null,e||function(){throw 1},1)}))}},eadb:function(t,e,i){}}]);
//# sourceMappingURL=chunk-46c96fd2.10c60c59.js.map