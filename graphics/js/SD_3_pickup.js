!function(t){function e(e){for(var n,a,p=e[0],c=e[1],s=e[2],u=0,f=[];u<p.length;u++)a=p[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(l&&l(e);f.length;)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,p=1;p<r.length;p++){var c=r[p];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={8:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var p=window.webpackJsonp=window.webpackJsonp||[],c=p.push.bind(p);p.push=e,p=p.slice();for(var s=0;s<p.length;s++)e(p[s]);var l=c;i.push([47,0,1]),r()}({22:function(t,e,r){"use strict";var n,o=r(0),i=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var p=t.length-1;p>=0;p--)(o=t[p])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),Object.defineProperty(e.prototype,"timerColor",{get:function(){return"running"===this.timerStatus?"#FFFFFF":"finished"===this.timerStatus?"#FFFF52":"#9A9FA1"},enumerable:!1,configurable:!0}),a([Object(o.b)({type:Object,required:!0})],e.prototype,"position",void 0),a([Object(o.b)({type:String,required:!0})],e.prototype,"time",void 0),a([Object(o.b)({type:String,required:!0})],e.prototype,"timerStatus",void 0),e=a([o.a],e)}(o.c),c=r(1),s=Object(c.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"runInformation",style:this.position},[e("span",{style:{color:this.timerColor}},[this._v(this._s(this.time))])])}),[],!1,null,"fc84cdf4",null);e.a=s.exports},27:function(t,e,r){"use strict";var n,o=r(0),i=r(6),a=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var p=t.length-1;p>=0;p--)(o=t[p])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nameElementClass=["textParent name",{player:e.isPlayer},{commentator:!e.isPlayer}],e}return a(e,t),p([Object(o.b)({type:Object,required:!0})],e.prototype,"position",void 0),p([Object(o.b)({type:Number,default:930})],e.prototype,"width",void 0),p([Object(o.b)({type:String,required:!0})],e.prototype,"name",void 0),p([Object(o.b)({type:Boolean,default:!0})],e.prototype,"isPlayer",void 0),e=p([Object(o.a)({components:{OneLineTextBlock:i.a}})],e)}(o.c),s=r(1),l=Object(s.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nameplate",style:this.position},[e("div",{class:this.nameElementClass},[this.isPlayer?e("img",{attrs:{src:r(25),height:"44px"}}):e("img",{attrs:{src:r(21),height:"44px"}}),this._v(" "),e("one-line-text-block",{staticStyle:{paddingLeft:"10px"},attrs:{fontSize:38,text:this.name,width:this.width-40-44-10}})],1)])}),[],!1,null,"45f39a45",null);e.a=l.exports},47:function(t,e,r){"use strict";r.r(e);var n,o=r(7),i=r(3),a=r(0),p=r(2),c=r(12),s=r(15),l=r(13),u=r(14),f=r(27),h=r(22),y=r(10),m=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),d=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var p=t.length-1;p>=0;p--)(o=t[p])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clipPaths=[{x:775,y:15,width:1120,height:850},{x:15,y:495,width:350,height:260},{x:405,y:495,width:350,height:260}],e.gameTitle={top:"880px",left:"10px",width:"930px",height:"80px"},e.category={top:"980px",left:"10px",width:"930px",height:"80px"},e.estimate={top:"780px",left:"10px",width:"450px",height:"80px"},e.player=[{top:"880px",left:"960px",width:"930px",height:"80px"},{top:"440px",left:"10px",width:"350px",height:"40px"},{top:"440px",left:"400px",width:"350px",height:"40px"}],e.commentator={top:"980px",left:"960px",width:"930px",height:"80px"},e.timer={top:"780px",left:"480px",width:"270px",height:"80px"},e.twitter={top:"60px",left:"240px",width:"490px",height:"220px"},e}return m(e,t),d([p.a],e.prototype,"currentRunData",void 0),d([p.a],e.prototype,"timerReplicant",void 0),d([p.a],e.prototype,"currentRunnersRace",void 0),d([p.a],e.prototype,"commentatorsNameOneLine",void 0),d([p.a],e.prototype,"commentatorsSocialOneLine",void 0),d([p.a],e.prototype,"currentSocial",void 0),e=d([Object(a.a)({components:{GameLayout:c.a,EventLogo:s.a,Estimate:u.a,RunInformationOneLine:l.a,NameplateWithoutSns:f.a,Timer:h.a,TwitterNotification:y.a}})],e)}(a.c),v=r(1),x=Object(v.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("game-layout",{attrs:{clipPaths:t.clipPaths}},[n("div",{staticClass:"header"},[n("event-logo",{staticStyle:{width:"240px"}}),t._v(" "),n("div",{staticClass:"hashImg"},[n("img",{staticStyle:{"margin-top":"10px"},attrs:{src:r(24),height:"45px"}})])],1),t._v(" "),n("twitter-notification",{attrs:{position:t.twitter,line:6}}),t._v(" "),n("run-information-one-line",{attrs:{position:t.gameTitle,text:t.currentRunData.game,fontSize:38}}),t._v(" "),n("run-information-one-line",{attrs:{position:t.category,text:t.currentRunData.category}}),t._v(" "),n("estimate",{attrs:{position:t.estimate,estimateS:t.currentRunData.estimateS}}),t._v(" "),n("nameplate-without-sns",{attrs:{isPlayer:!1,position:t.commentator,name:t.commentatorsNameOneLine}}),t._v(" "),n("nameplate-without-sns",{attrs:{position:t.player[0],name:t.currentRunnersRace[0].name||""}}),t._v(" "),n("nameplate-without-sns",{attrs:{position:t.player[1],name:t.currentRunnersRace[1]?t.currentRunnersRace[1].name:"",width:350}}),t._v(" "),n("nameplate-without-sns",{attrs:{position:t.player[2],name:t.currentRunnersRace[2]?t.currentRunnersRace[2].name:"",width:350}}),t._v(" "),n("timer",{attrs:{position:t.timer,time:t.timerReplicant.time,timerStatus:t.timerReplicant.state}})],1)}),[],!1,null,"18f7b587",null).exports,g=r(5);Object(o.b)(g.a).then((function(){new i.a({store:g.a,el:"#App",render:function(t){return t(x)}})}))}});