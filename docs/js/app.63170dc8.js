(function(t){function e(e){for(var n,a,i=e[0],c=e[1],l=e[2],d=0,v=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/diceish/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{light:""}},[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[t._v("Latest Release")]),r("v-icon",[t._v("mdi-open-in-new")])],1)],1),r("v-content",[r("diceroller"),r("Output")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",xs:"8",sm:"9",md:"8"}},[r("v-card",{staticClass:"ma-0"},[r("v-toolbar",[r("v-toolbar-title",[r("h2",[t._v("Dice Roller")])]),r("v-spacer"),r("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"ma-3"},Object.assign({},o,n)),[t._v(" Dice System ")])]}}],null,!0)},[r("span",[t._v("Sorry none yet, DnD FATE and WoD will be added ")])])]}}])},[r("v-list",t._l(t.items,(function(e,n){return r("v-list-item",{key:n},[r("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),r("v-card-actions",[r("v-col",[r("v-row",[r("v-form",[r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Amount of Dice",type:"number",required:""},model:{value:t.Dicevar,callback:function(e){t.Dicevar=e},expression:"Dicevar"}})],1),r("v-col",[r("v-text-field",{attrs:{label:"Dice Sides",type:"number",required:""},model:{value:t.Sidesvar,callback:function(e){t.Sidesvar=e},expression:"Sidesvar"}})],1)],1)],1)],1),r("v-row",[r("v-btn",{directives:[{name:"layout:",rawName:"v-layout:"}],staticClass:"ma-3",attrs:{align:"right"},on:{click:t.roll}},[t._v(" Roll ")])],1)],1)],1)],1)],1)],1)},i=[],c={props:{},data:function(){return{Dicevar:null,Sidesvar:null,Modifiervar:null,RollResults:null,ResultsShown:"",items:[]}},methods:{roll:function(){for(var t=this.Dicevar,e=this.Sidesvar,r=[],n=0;n<t;n++)r.push(Math.floor(Math.random()*e+1));this.RollResults=r,this.$store.commit("change",r)}}},l=c,u=r("2877"),d=r("6544"),v=r.n(d),f=r("8336"),p=r("b0af"),m=r("99d9"),h=r("62ad"),g=r("4bd4"),b=r("8860"),y=r("da13"),w=r("5d23"),S=r("e449"),_=r("0fd9"),O=r("2fa4"),V=r("8654"),j=r("71d9"),k=r("2a7f"),D=r("3a2f"),R=Object(u["a"])(l,a,i,!1,null,null,null),C=R.exports;v()(R,{VBtn:f["a"],VCard:p["a"],VCardActions:m["a"],VCol:h["a"],VForm:g["a"],VList:b["a"],VListItem:y["a"],VListItemTitle:w["b"],VMenu:S["a"],VRow:_["a"],VSpacer:O["a"],VTextField:V["a"],VToolbar:j["a"],VToolbarTitle:k["a"],VTooltip:D["a"]});var x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",xs:"8",sm:"9",md:"8"}},[r("v-card",{staticClass:"ma-0"},[r("v-toolbar",[r("h2",[t._v("Results")]),r("v-spacer"),r("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"ma-3"},Object.assign({},o,n)),[t._v(" Sorting ")])]}}],null,!0)},[r("span",[t._v(" How would you like your results sorted? ")])])]}}])},[r("v-list",t._l(t.items,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){return t.changeOutput(e.title)}}},[r("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])],1)})),1)],1)],1),r("v-card-text",{staticClass:"pa-8"},[r("v-row",["Least to Greatest"===t.resultType?[r("h3",[t._v(t._s(t.$store.getters.AscendingOrder)+" ")])]:t._e(),"Greatest to Least"===t.resultType?[r("h3",[t._v(t._s(t.$store.getters.DescendingOrder)+" ")])]:t._e(),"Unsorted"===t.resultType?[r("h3",[t._v(t._s(t.$store.state.ResultsShown[0]))])]:t._e(),"Grouped"===t.resultType?[r("v-col",[r("v-row",[r("h4",[t._v(" Dice grouped based on their results ")])]),r("v-row",[r("v-list",{staticStyle:{"min-width":"15rem"}},t._l(t.$store.getters.Grouped,(function(e,n){return r("v-list-item",{key:n,staticClass:"graph"},[r("v-list-item-content",{staticStyle:{"min-width":"8rem"}},[r("v-list-item-title",[t._v(" "+t._s(t.$store.getters.Grouped[n].result)+" dice rolled ")])],1),r("v-divider",{attrs:{vertical:""}}),r("v-list-item-content",{staticStyle:{"min-width":"5rem",align:"center"}},[r("v-list-item-title",{staticStyle:{"min-width":"5rem","text-align":"center"}},[t._v(" "+t._s(t.$store.getters.Grouped[n].face)+" ")])],1)],1)})),1)],1)],1)]:[r("p")]],2)],1)],1)],1)],1)},T=[],P=(r("a4d3"),r("4de4"),r("fb6a"),r("4e827"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),A=r("9ce4"),L=r("ad46");function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){Object(P["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var G={props:{},computed:$({resultArray:function(){var t=this,e=L["a"].state.ResultsShown.slice();return e.sort((function(e,r){var n=1;return"desc"===t.currentSortDir&&(n=-1),e[t.currentSort]<r[t.currentSort]?-1*n:e[t.currentSort]>r[t.currentSort]?1*n:0}))}},Object(A["b"])(["AscendingOrder","DescendingOrder"])),data:function(){return{resultType:"Unsorted",items:[{title:"Least to Greatest"},{title:"Greatest to Least"},{title:"Unsorted"},{title:"Grouped"}]}},methods:{changeOutput:function(t){this.resultType=t}}},M=G,B=r("ce7e"),E=Object(u["a"])(M,x,T,!1,null,null,null),I=E.exports;v()(E,{VBtn:f["a"],VCard:p["a"],VCardText:m["b"],VCol:h["a"],VDivider:B["a"],VList:b["a"],VListItem:y["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VMenu:S["a"],VRow:_["a"],VSpacer:O["a"],VToolbar:j["a"],VTooltip:D["a"]});var N={name:"App",components:{Output:I,Diceroller:C},data:function(){return{}}},q=N,U=r("7496"),J=r("40dc"),H=r("a75b"),W=r("132d"),z=r("adda"),K=Object(u["a"])(q,o,s,!1,null,null,null),Q=K.exports;v()(K,{VApp:U["a"],VAppBar:J["a"],VBtn:f["a"],VContent:H["a"],VIcon:W["a"],VImg:z["a"],VSpacer:O["a"]});var X=r("f309"),Y={primary:"#05380b",secondary:"#424242",accent:"#ff447c",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"};n["a"].use(X["a"]);var Z=new X["a"]({theme:{themes:{light:Y}}});r("d81d"),r("d3b7"),r("25f0");n["a"].use(A["a"]);var tt=new A["a"].Store({state:{ResultsShown:[]},getters:{AscendingOrder:function(t){if(t.ResultsShown[0]!==[]){var e=t.ResultsShown[0].slice(),r=e.sort((function(t,e){return t-e}));return r}},DescendingOrder:function(t){if(t.ResultsShown[0]!==[]){var e=t.ResultsShown[0].slice(),r=e.sort((function(t,e){return e-t}));return r}},Grouped:function(t){if(t.ResultsShown[0]!==[]){var e=[];t.ResultsShown[0].forEach((function(t){e[t]=(e[t]||0)+1}));var r=e.map((function(t,e){return{face:e,result:t}})),n=r.filter((function(t){return""!==t}));return n}}},mutations:{change:function(t,e){t.ResultsShown.pop(),t.ResultsShown.push(e)}},actions:{change:function(t){var e=t.commit;return e("change")},sortBy:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){state.ResultsShown.sort((function(t,e){var r=t[sortBy],n=e[sortBy];return descending?r<n?1:r>n?-1:0:r<n?-1:r>n?1:0}))}))},modules:{},computed:{}}),et=r("9483");Object(et["a"])("".concat("/diceish/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({store:tt,vuetify:Z,render:function(t){return t(Q)}}).$mount("#app")}});
//# sourceMappingURL=app.63170dc8.js.map