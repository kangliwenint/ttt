(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-573c6ee0"],{"0036":function(t,e,r){"use strict";var i=r("0372"),n=r.n(i);n.a},"0372":function(t,e,r){},"064b":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"0a51":function(t,e,r){"use strict";var i=r("1c8b"),n=r("1e2c"),o=r("d890"),a=r("faa8"),s=r("a719"),c=r("d910").f,u=r("c69d"),f=o.Symbol;if(n&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var g={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new f(t):void 0===t?f():f(t);return""===t&&(g[e]=!0),e};u(l,f);var A=l.prototype=f.prototype;A.constructor=l;var d=A.toString,b="Symbol(test)"==String(f("test")),p=/^Symbol\((.*)\)[^)]+$/;c(A,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=d.call(t);if(a(g,t))return"";var r=b?e.slice(7,-1):e.replace(p,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:l})}},"1fa1":function(t,e,r){t.exports=r.p+"img/kefu.5ed3725e.png"},2736:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"waiter"},[i("van-nav-bar",{attrs:{title:"我是客服","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),i("div",{staticClass:"talk"},[i("div",t._l(t.chatData,(function(e,n){return i("div",{key:n,staticClass:"clearfix item"},[i("div",{staticClass:"headimg",class:["robot"==e.type?"fl":"fr","pad"]},[i("img",{staticClass:"auto-img",attrs:{src:["robot"==e.type?r("1fa1"):r("e97a")],alt:""}})]),i("div",{staticClass:"content fl",class:["robot"==e.type?"fl":"fr",e.type]},[t._v(t._s(e.text))])])})),0)]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"inputsend"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),i("button",{staticClass:"send",on:{click:t.sendMsg}},[t._v("发送")])])])],1)},n=[];r("f3dd"),r("0a51"),r("9b11"),r("e18c"),r("96db"),r("af86");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var a={data:function(){return{chatData:[],message:"",msg:"",robotData:[{msg:"你好",text:"你好，请问有什么能帮的上您?"},{msg:1,text:"请联系商家解决"},{msg:2,text:"可以选择有效优惠券"},{msg:3,text:"选择商品后提交订单,填写地址信息，就下单完成了"},{msg:4,text:"是的，都是由我们咖啡师现时手工调制"},{msg:5,text:"满意的话可以加入收藏,不满意的话可以选择其他商品"}]}},methods:{back:function(){this.$router.go(-1)},sendMsg:function(){this.msg=this.message,this.chatData.push({type:"person",text:this.msg}),this.message=""}},watch:{msg:function(t){for(var e=this,r=function(r){if(t==e.robotData[r].msg)return setTimeout((function(){e.chatData.push({text:e.robotData[r].text,type:"robot"})}),800),{v:void 0}},i=0;i<this.robotData.length;i++){var n=r(i);if("object"===o(n))return n.v}setTimeout((function(){e.chatData.push({text:"你可以回复数字1~10询问,例如:1.下单失败。2.能不能便宜一点。3.怎么下单。4.是纯手工的吗。5.评价......",type:"robot"})}),800)}}},s=a,c=(r("0036"),r("9ca4")),u=Object(c["a"])(s,i,n,!1,null,"735b6374",null);e["default"]=u.exports},4350:function(t,e,r){var i=r("90fb");e.f=i},"6d51":function(t,e,r){var i=r("1b99"),n=r("faa8"),o=r("4350"),a=r("d910").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||a(e,t,{value:o.f(t)})}},"96db":function(t,e,r){"use strict";var i=r("f62c").charAt,n=r("b702"),o=r("99ee"),a="String Iterator",s=n.set,c=n.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=i(r,n),e.index+=t.length,{value:t,done:!1})}))},"9b11":function(t,e,r){var i=r("6d51");i("iterator")},af86:function(t,e,r){var i=r("d890"),n=r("064b"),o=r("a133"),a=r("0fc1"),s=r("90fb"),c=s("iterator"),u=s("toStringTag"),f=o.values;for(var g in n){var l=i[g],A=l&&l.prototype;if(A){if(A[c]!==f)try{a(A,c,f)}catch(b){A[c]=f}if(A[u]||a(A,u,g),n[g])for(var d in o)if(A[d]!==o[d])try{a(A,d,o[d])}catch(b){A[d]=o[d]}}}},c051:function(t,e,r){var i=r("da10"),n=r("b338").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return n(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):n(i(t))}},e97a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAN30lEQVR4Xu2d23UUORCGJXUAy0awJgJMBEAE2BGAIwDe3aKtnndMBNgRYEeAiYDZCDARMBvAtPYUlo/t8cy01NMXqfTPC3uO1br8Vd+W7pICv2AFqqraWy6X//h+WBTFr6qqrn3TI108Csh4qhJHTaqqetI0zWtr7UshxJ6Uco/+7at21torl9e1lJKgWVhr54CoL4X7zQeA3NNTa/1RCFH1K3FwbnNr7UJKSSDNlVIUfebBueCDXhQAIE7GsizfSyk/9aLqAJm4yDOXUhI039FlG0DkNVkCECeK1vq3EOLJOLL3Uso1dc0o0jhgEGV6kfVhJgBECHF8fPxSKfVtAH3HzJKAuSBgjDGXYxbMuSwAwgeQB37qYLlQSl1WVbXg7MRDtg2A0Kj8ZuaKulgcfzRLRpHlApEl3LwA5G6QTv35Z+ESJvUFTSufKaXOMcj3sxsAuQPkrZTyi59s6aey1p4VRXECULbbEoA4fZh3szZ6AU0fW2tPZrPZ7QJm+vT32AIAcgfIXtM0P3vUNqmsCJSiKD5gURLTvGsdV2v9Qwixn5RXD1BZ1/UiUDDzJYRABBFClGX5RUr5dgB/SzVLgqMyxnxOtQF91Tt7QADHZldy3a6jnAfyWQMCOLz+P0vrKB/quj7zSs0sUZaA0IzVcrn8hG6Vvzdba0/ruv7g/wWPlFkCUpblVynlAQ8TjtcKWpEvioK6XNkM4LMDBN2q3YAiSOq6Ptwtl3S+zgoQwNGPY7oxyWk/ucWdSzaAlGWZ1VaSod1OKfU8h0XFLACpqmq/aRo675HSgaihfXzX/K+NMU93zST277MABKvkw7hhDl0t9oBorekSBrqMAb/+FVgopZ5yntViDQjdX5XzBsT+eVib44kxZuqbYAZrKmtAtNa0+vtmMPWQMSmwMMb8zVUKtoAgeoznstbaI65bUdgCgugxHiB0wZ0x5vmoJY5UGEtAcj0dOJLPrC3GDdbZ3T/MEhAsCo6PCtcpX5aAaK0vhBCvx3eTrEtk2c3iCojN2lUnarwxhp0/sWsQk2tEJ3Lx3YptmuYVt9tROAJyoJT6upup8XUXBTiOQ9gBgq0lXVy7t2/YrapzBASr5735e1hG1trvdV3Ty1xsfuwAKcvySkr5go2F0moIu5ksdoAk+BBOWgi01JbbTBZHQDDFOyFyAGRC8duKxhaTNoWG/zu3qV5WEQRrIMMD0FYCAGlTaMK/A5AJxXdFN01zOJvNaKsPix8iCAszRtUIVmshrADBImEUoACQKMywphIAJArLAJAozABAYjUDAInVMoggUVgGgERhBkSQWM0AQGK1DCJIFJYBIFGYAREkVjMAkFgtgwgShWUASBRmQASJ1QwAJFbLIIJEYRkAEoUZEEFiNQMAidUyiCBRWAaARGEGRJBYzQBAYrUMtrtPbxluV/+w2s0LQKYHBAemprfBxhoAkOmNA0Cmt8HGGuDRnOmNw+0ZBFZdLHIPrTVuNZmQE9xqMqH4PkUDEB+Vhkljrf2vrmtWb9GziyC4WXEY5/fJFVeP+qg0cRo8njOpAS6NMQeT1qDnwtlFEKym9+whYdmxWiSkprMDBO8Thnl0n6m5LRKyBARrIX26fFhe3NZAAEiY/ZG6RQEAkoCLlGX5Xkr5KYGqsquitfairutDTg1jNQapqmq/aZpvQghWc/GJOVxljDlJrM4bq8sGEMARj0tyGqyzAMS9C/JDCLEXj5vkXRMue7JYAIJxR5QwfjbGvI+yZgGVYgGI1pqix35Au5F0YAW4bDvhAgh28A7s8F2y57CzF4B0sTy+8VIAgHjJNHwibHEfXuPQErhsfWcRQcqyXEgp/wo1ItIPpwDGIMNpG5wzzoAESzbGB+fGmLdjFDRkGSwiiNb6VAjxbkihkHewAiy2vrMABFvcg5138A+4bFxkAYjbZkJrIfhFogCHGSySkgUg1BAM1CMhQwjBZYDOChCt9ZkQ4k08bpJvTbBZMULbHx8fHyilvkZYteyqpJR6XlXVnEPD2XSxaEfvcrm8xnrItG5prf1V1zWbXdVsACG3QDdrWjiodE7dK1ZjEGoMLmyYHhAu50BulWQVQdxsFnWz/pneVbKsAYvV8/uW4wjIWynllyzdc+JGcxqcs40giCLTUMJp7YN1BHGAIIqMzAnH6MFukH7fJ7DDd1RCWJw/X6cYuzHIbSOxP2scQOhgVFEUe1VVLcYpcdxS2ALi1kUqIcTHcSXNq7SmaQ5ns9kF11azBsSNR+ZSymdcDThxu9h2rVjPYt13GnrYc7lcEiQ4ktsjTVxnrVYlYh9BqMEYj/RIxs12kl9FUexzHXewn+Zd5w44ddgPJG5Q/pLLbt02VbKIILci4IrSNndo/zuXo7TtLb1JkRUgbmYLB6t8vWMlnbX2qK5r0i+bX3aAuJmtKynli2ys3E9D2c9YrZMpS0Dc4SqCBNO/fvCw26Xr1+wMu1i3wmD6189FrLX/FkVBg3KWK+VtKmQZQe5BQk+24bqgDV7CfRtJGxxZDtJXRcH073o3yW06dxMsWUeQW1Fwdelj98hxxgqD9C0xtSxL7Nm60yfbQfmqiyCCOEUwaL8RIvdBOQDZEkVyv3wO447HzoEIsqJJzuMRbnda+cxStaUBICsKuUVEGo9kdXVQLtvX24BAF8tDoRy7WtwufPMws1cSRJANMmmt6Rjpay8V00/E4jWoIcwAQDaoSrNaTdP8HEL0mPLM6fBTF90ByBbVcrgMGwuC27EBIFv04f6kArenCrpEiLZvAEiLQlprtlcHIXq04ZHxdvd2aW5SUBRpmua3b/pU0iF6+FkKEcRDJ6ZjEcxcedgegHiIxPFhHqx7eBg+x0sb/GR5nKosS04P81waYw66apHTd4ggntbmdGUQ9/t0PU3qlQyAeMnE63ZGYwzs7ml3COUpFCXj0M3CpsQAg2MMEiYWh9ksbGkPszkiSIBeHC544PpUWoAZg5ICkAC5Ul80pBODdV0/CWhy9kkBSKALlGW5SPWtEYw/Ao2NMUi4YIk/DorbSgJNjggSKFjiZ9axvSTQ3gAkULCUd/fm9rZHoGnXJgcggSqmvC8LM1iBxsYYJFywlN87xAp6uL0RQcI1E1pr2+GzyT8BIOEmACDhmiUJCF0pWtf1fofmZv0JAOlg/hQjCNZAOhgaY5BuoqW4WAhAutkaEaSDbikuFgKQDoZGBOkmGgDppluKXyGCdLCa1preNUxqwIsI0sHQiCDdRMMgvZtuKX6FCNLBaikCQs3EOki4sQFIoGYpH5rCTYqBxkYXK0wwd2CKxh97YV9Gk3pujHkeTW0SqAgiiKeR3EXWX6SUSd8nZa09K4riQ1VVC8+mZ50MgHiY3+3g/ZTazNWWps2VUkdVVc09mp91EgCyxfzuaeiPUsq3HL3ERZOTqqquObavjzYBkDUqUsSQUr7hCsZqkwkUa+35bDa76sOpOOUBQJw13ZNr9Cbh+4QH4bv6JnW5zpRSl4gqN1JmDcg9KKgLldTK+K4keHwPWHIERGv92lpLXaiXgMIDk5skc2vtlZTyyhhz6f0Vg4SsI4ibmn1GMNyDgoHZpm3CLSz0b1EU/3KeMmYFSFmWL6SUew4G6jKh2zQOSxRh5lLKP//Wdf19nGKHLyVJQOjihOVy+ZeLDPsEBWAY3lkCS7i21tKjQzQz9ue/U4w20QPiBtIvrLV/IoIbOwTaCskjUoBguY02V7FHm+gAcdfqEBAHUkqCApctR+TdQ1TFjWkulFLfY1vdjwIQ12WihTna55TqRsAhfCfHPCnCXMQyYzYZIA6Kdw4KRIkcUWhv88JthzmfKrKMDojW+o1brcYMU7uDIMWdArRweWqMOR9TlFEAceco3jkwEC3GtDC/smib/qlS6vMY6y+DAgIw+HlnRC0aBZTBAHFdqVPMQkXkUjyrQqBUxpjPQzSvd0DcNO0XLNwNYS7kuUWB66Zpjvrest8rIFrrj0QzzAgFplLAWntaFAUdAuvlSHEvgLjV7q+IGlO5BcpdUeBaKXXYx9TwzoC489oEB2an4KdRKdDHNUc7AZLyHVFRWRKVGUwBWmis6/qoawGdAcF4o6vk+G5sBWjrSlEUdItL8LikEyCJP4U8tn1QXhwK0FVHr0IhCQYE3ao4rI1adFIgGJIgQABHJ6Pgo4gUCB2TeAOS8vPHEdkHVYlDgRNjjNd6nRcgbk/VN6xzxGFd1GJ3BZqmOZzNZhdtOXkBUpYlXdrM8vrNNoHwd7YKLJRST9sG7a2AuIVAih74QQFWCtD0b13Xh9sa1QqI1vonjsGy8gs05p4CTdO82rbBcSsgWmsayNAGRPygAFcFtj4qtBEQNzCn6IE9VlxdA+36o8C2PVsbAUH0gPdkpMDGKLINkN+IHhm5SOZN3TQWWQvI8fHxgVKKtrDjBwVyUeDcGPNoKWMtIFprWkChx2TwgwK5KLB2XeQRIG5wTt0r/KBAVgqsG6w/AgTdq6x8Ao19qMCjbtYjQLTWZ0IIuv0QPyiQmwLXxpin9xu9DpAf2JSYm1+gvbcKKKX+vr8/ax0gFnJBgVwVWJ3ufQAINibm6hZo960C1toPdV3TjaB/fquAYP0DvpK7Ag8OUz0ABNtLcvcNtF8IAUDgBlBgiwIABO4BBQAIfAAKdFMAEaSbbvgqEwUASCaGRjO7KQBAuumGrzJRAIBkYmg0s5sCmwHB1aLdFMVXfBRYvVBu3V4sWmanJ5vxgwLZKGCt/U9KebF6qvB/08MyIzpsYHwAAAAASUVORK5CYII="},f3dd:function(t,e,r){"use strict";var i=r("1c8b"),n=r("d890"),o=r("6d7a"),a=r("9b9d"),s=r("1e2c"),c=r("c54b"),u=r("74cb"),f=r("efe2"),g=r("faa8"),l=r("74e7"),A=r("a719"),d=r("857c"),b=r("3553"),p=r("da10"),v=r("9f67"),m=r("38b9"),y=r("6d60"),h=r("cbab"),S=r("b338"),C=r("c051"),B=r("0a60"),w=r("aa6b"),k=r("d910"),L=r("ef71"),x=r("0fc1"),Q=r("1944"),V=r("6d28"),I=r("7db2"),M=r("d5a8"),U=r("7e8b"),D=r("90fb"),E=r("4350"),G=r("6d51"),K=r("27b5"),F=r("b702"),W=r("5dfd").forEach,q=I("hidden"),O="Symbol",R="prototype",T=D("toPrimitive"),Y=F.set,J=F.getterFor(O),j=Object[R],N=n.Symbol,X=o("JSON","stringify"),H=w.f,Z=k.f,P=C.f,z=L.f,_=V("symbols"),$=V("op-symbols"),tt=V("string-to-symbol-registry"),et=V("symbol-to-string-registry"),rt=V("wks"),it=n.QObject,nt=!it||!it[R]||!it[R].findChild,ot=s&&f((function(){return 7!=y(Z({},"a",{get:function(){return Z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=H(j,e);i&&delete j[e],Z(t,e,r),i&&t!==j&&Z(j,e,i)}:Z,at=function(t,e){var r=_[t]=y(N[R]);return Y(r,{type:O,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof N},ct=function(t,e,r){t===j&&ct($,e,r),d(t);var i=v(e,!0);return d(r),g(_,i)?(r.enumerable?(g(t,q)&&t[q][i]&&(t[q][i]=!1),r=y(r,{enumerable:m(0,!1)})):(g(t,q)||Z(t,q,m(1,{})),t[q][i]=!0),ot(t,i,r)):Z(t,i,r)},ut=function(t,e){d(t);var r=p(e),i=h(r).concat(dt(r));return W(i,(function(e){s&&!gt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},gt=function(t){var e=v(t,!0),r=z.call(this,e);return!(this===j&&g(_,e)&&!g($,e))&&(!(r||!g(this,e)||!g(_,e)||g(this,q)&&this[q][e])||r)},lt=function(t,e){var r=p(t),i=v(e,!0);if(r!==j||!g(_,i)||g($,i)){var n=H(r,i);return!n||!g(_,i)||g(r,q)&&r[q][i]||(n.enumerable=!0),n}},At=function(t){var e=P(p(t)),r=[];return W(e,(function(t){g(_,t)||g(M,t)||r.push(t)})),r},dt=function(t){var e=t===j,r=P(e?$:p(t)),i=[];return W(r,(function(t){!g(_,t)||e&&!g(j,t)||i.push(_[t])})),i};if(c||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=U(t),r=function(t){this===j&&r.call($,t),g(this,q)&&g(this[q],e)&&(this[q][e]=!1),ot(this,e,m(1,t))};return s&&nt&&ot(j,e,{configurable:!0,set:r}),at(e,t)},Q(N[R],"toString",(function(){return J(this).tag})),Q(N,"withoutSetter",(function(t){return at(U(t),t)})),L.f=gt,k.f=ct,w.f=lt,S.f=C.f=At,B.f=dt,E.f=function(t){return at(D(t),t)},s&&(Z(N[R],"description",{configurable:!0,get:function(){return J(this).description}}),a||Q(j,"propertyIsEnumerable",gt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:N}),W(h(rt),(function(t){G(t)})),i({target:O,stat:!0,forced:!c},{for:function(t){var e=String(t);if(g(tt,e))return tt[e];var r=N(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(g(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:lt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:At,getOwnPropertySymbols:dt}),i({target:"Object",stat:!0,forced:f((function(){B.f(1)}))},{getOwnPropertySymbols:function(t){return B.f(b(t))}}),X){var bt=!c||f((function(){var t=N();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}));i({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var i,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(i=e,(A(e)||void 0!==t)&&!st(t))return l(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!st(e))return e}),n[1]=e,X.apply(null,n)}})}N[R][T]||x(N[R],T,N[R].valueOf),K(N,O),M[q]=!0}}]);
//# sourceMappingURL=chunk-573c6ee0.e21d7d20.js.map