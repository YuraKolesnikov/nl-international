(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59e4e0b4"],{"46b6":function(t,e,a){},"810b":function(t,e,a){"use strict";var r=a("46b6"),s=a.n(r);s.a},"886d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5 text-left"},[t._m(0),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("AuthForm")],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"})])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("\n    "+t._s(t.formData)+"\n    "+t._s(t.mode)+"\n    "),a("div",{staticClass:"mb-2"},[a("button",{staticClass:"btn btn-custom",class:{active:"logIn"===t.mode},on:{click:function(e){return t.setMode("logIn")}}},[t._v(t._s(t.$t("logIn")))]),a("button",{staticClass:"btn btn-custom",class:{active:"register"===t.mode},on:{click:function(e){return t.setMode("register")}}},[t._v(t._s(t.$t("register")))])]),a("h3",[t._v(t._s(t.$t(t.mode)))])]),a("div",{staticClass:"card-body"},[a("form",[a("fieldset",{staticClass:"form-group"},[a("label",{attrs:{for:"managerID"}},[t._v("ID")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.managerID,expression:"formData.managerID"}],staticClass:"form-control",attrs:{id:"managerID",type:"text",name:"managerID",required:"",placeholder:"371-12345678"},domProps:{value:t.formData.managerID},on:{input:function(e){e.target.composing||t.$set(t.formData,"managerID",e.target.value)}}})]),t._l("register"===t.mode?t.formFields.register:t.formFields.logIn,function(e){return a("fieldset",{key:e.id,staticClass:"form-group"},[a("label",{attrs:{for:e.id}},[t._v(t._s(t.$t(e.id)))]),"checkbox"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData[e.id],expression:"formData[field.id]"}],staticClass:"form-control",attrs:{required:"",name:e.id,placeholder:e.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.formData[e.id])?t._i(t.formData[e.id],null)>-1:t.formData[e.id]},on:{change:function(a){var r=t.formData[e.id],s=a.target,o=!!s.checked;if(Array.isArray(r)){var i=null,n=t._i(r,i);s.checked?n<0&&t.$set(t.formData,e.id,r.concat([i])):n>-1&&t.$set(t.formData,e.id,r.slice(0,n).concat(r.slice(n+1)))}else t.$set(t.formData,e.id,o)}}}):"radio"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData[e.id],expression:"formData[field.id]"}],staticClass:"form-control",attrs:{required:"",name:e.id,placeholder:e.placeholder,type:"radio"},domProps:{checked:t._q(t.formData[e.id],null)},on:{change:function(a){return t.$set(t.formData,e.id,null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData[e.id],expression:"formData[field.id]"}],staticClass:"form-control",attrs:{required:"",name:e.id,placeholder:e.placeholder,type:e.type},domProps:{value:t.formData[e.id]},on:{input:function(a){a.target.composing||t.$set(t.formData,e.id,a.target.value)}}}),"password"===e.id&&"register"==t.mode?a("small",{staticClass:"text-muted form-text"},[t._v("\n          "+t._s(t.$t("passwordInfo"))+"\n        ")]):t._e()])}),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(t._s(t.$t("submit")))])],2)])])},i=[],n={data:function(){return{mode:"logIn",formFields:{logIn:[{type:"password",id:"password"}],register:[{type:"text",id:"fullName",placeholder:"George Clooney"},{type:"password",id:"password"},{type:"password",id:"password2"}]},formData:{managerID:"",fullName:"",password:"",password2:""}}},methods:{setMode:function(t){this.mode=t}}},l=n,d=(a("810b"),a("a6c2")),c=Object(d["a"])(l,o,i,!1,null,"627ee240",null),m=c.exports,u={components:{AuthForm:m}},f=u,p=Object(d["a"])(f,r,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-59e4e0b4.js.map