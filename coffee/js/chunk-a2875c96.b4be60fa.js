(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2875c96"],{"04c7":function(t,e,a){"use strict";function o(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}a.d(e,"a",(function(){return i}))},1983:function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return o}))},"2f14":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("b4fb"),a("77ad");var o=a("1983"),i=a("04c7"),n=function(){function t(){Object(o["a"])(this,t)}return Object(i["a"])(t,[{key:"queryString",value:function(t){var e="";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");return e.slice(0,-1)}}]),t}(),r=new n},"4f3a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"forget"},[o("div",{staticClass:"login-box"},[o("div",{staticClass:"logo"},[o("img",{staticClass:"auto-img",attrs:{src:a("6e71"),alt:""}}),o("div",{staticClass:"close-box",on:{click:t.gohome}},[o("svg",{staticClass:"icon",attrs:{t:"1596705973022",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2063",width:"200",height:"200"}},[o("path",{attrs:{d:"M298.666667 586.666667a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z","p-id":"2064",fill:"#bfbfbf"}})])])]),o("div",{staticClass:"login-form"},[o("div",{staticClass:"login-form-box"},[o("van-form",{staticClass:"yan"},[o("van-field",{attrs:{placeholder:"请输入手机号"},model:{value:t.userforgetinfo.phone,callback:function(e){t.$set(t.userforgetinfo,"phone",e)},expression:"userforgetinfo.phone"}}),o("van-field",{attrs:{type:t.ispassword?"password":"text",placeholder:"请输入密码","right-icon":t.ispassword?"closed-eye":"eye-o"},on:{"click-right-icon":t.password},model:{value:t.userforgetinfo.password,callback:function(e){t.$set(t.userforgetinfo,"password",e)},expression:"userforgetinfo.password"}}),o("van-field",{attrs:{placeholder:"请输入邮箱账号"},model:{value:t.userforgetinfo.email,callback:function(e){t.$set(t.userforgetinfo,"email",e)},expression:"userforgetinfo.email"}}),o("van-field",{attrs:{placeholder:"请输入邮箱验证码"},model:{value:t.userforgetinfo.validCode,callback:function(e){t.$set(t.userforgetinfo,"validCode",e)},expression:"userforgetinfo.validCode"}}),o("div",{staticClass:"yanzheng",attrs:{click:"send"}},[t._v("发送验证码")]),o("div",{staticClass:"clearfix forgot"},[o("span",{staticClass:"fr",attrs:{click:"gologin"}},[t._v("已有账号,立即登录")])]),o("div",{staticClass:"login-btn"},[o("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#5f56ff"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)])])])},i=[],n=(a("e613"),a("e3a8")),r=a("2f14"),s={data:function(){return{userforgetinfo:{phone:"",password:"",email:"",validCode:""},ispassword:!0,text:"发送验证码",isSend:!1}},methods:{gohome:function(){this.$router.push({name:"Home"})},gologin:function(){this.$router.push({name:"Login"})},password:function(){this.ispassword=!this.ispassword},tangchu:function(){this.isRegister=!0},send:function(){var t=this,e=5;this.text=e+"s后重新发送",this.isSend=!0;var a=setInterval((function(){0==e?(clearInterval(a),t.isSend=!1,t.text="发送验证码"):(e--,t.text=e+"s后重新发送")}),1e3);this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var o=r["a"].queryString({email:this.userforgetinfo.email,appkey:this.appkey});this.axios({method:"POST",url:"/emailValidCode",data:o}).then((function(e){t.$toast.clear(),t.$notify({type:"warning",message:e.data.msg})})).catch((function(e){t.$toast.clear()}))},updatepassword:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var e=r["a"].queryString({phone:this.userforgetinfo.phone,password:this.userforgetinfo.password,appkey:this.appkey});this.axios({method:"POST",url:"/retrievePassword",data:e}).then((function(e){t.$toast.clear(),"L001"==e.data.code?t.$router.push({name:"Login"}):t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))},submit:function(){var t=this,e={phone:{value:this.userforgetinfo.phone,reg:/^1[3-9]\d{9}$/,errorMsg:"手机号格式不正确"},password:{value:this.userforgetinfo.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"密码支持字母数字_组合"},email:{value:this.userforgetinfo.email,reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,errorMsg:"邮箱格式不正确"},validCode:{value:this.userforgetinfo.validCode,reg:/^\d{6}$/,errorMsg:"验证为6位数字"}};if(n["a"].valid(e)){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var a=r["a"].queryString({validCode:this.userforgetinfo.validCode,appkey:this.appkey});this.axios({method:"POST",url:"/checkValidCode",data:a}).then((function(e){t.$toast.clear(),"K001"==e.data.code?t.updatepassword():t.$notify({type:"warning",message:e.data.msg})})).catch((function(e){t.$toast.clear()}))}}}},c=s,f=a("9ca4"),l=Object(f["a"])(c,o,i,!1,null,"605af8ac",null);e["default"]=l.exports},"6e71":function(t,e,a){t.exports=a.p+"img/snipaste1.d20d30d0.png"},b4fb:function(t,e,a){"use strict";var o=a("1c8b"),i=a("efe2"),n=a("74e7"),r=a("a719"),s=a("3553"),c=a("d88d"),f=a("1bbd"),l=a("1ca1"),u=a("1ea7"),d=a("90fb"),g=a("f594"),p=d("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",m=g>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),w=u("concat"),b=function(t){if(!r(t))return!1;var e=t[p];return void 0!==e?!!e:n(t)},y=!m||!w;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,o,i,n,r=s(this),u=l(r,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(n=-1===e?r:arguments[e],b(n)){if(i=c(n.length),d+i>h)throw TypeError(v);for(a=0;a<i;a++,d++)a in n&&f(u,d,n[a])}else{if(d>=h)throw TypeError(v);f(u,d++,n)}return u.length=d,u}})},e3a8:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var o=a("1983"),i=a("04c7"),n=(a("f2cb"),a("318f")),r=a("a593");r["a"].use(n["a"]);var s=function(){function t(){Object(o["a"])(this,t)}return Object(i["a"])(t,[{key:"valid",value:function(t){for(var e in t)if(!t[e].reg.test(t[e].value))return Object(n["a"])({type:"warning",message:t[e].errorMsg}),!1;return!0}}]),t}(),c=new s},e613:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a2875c96.b4be60fa.js.map