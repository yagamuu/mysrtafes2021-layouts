!function(t){function e(e){for(var r,a,c=e[0],p=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var p=n[c];0!==o[p]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={7:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=p;i.push([41,0,1]),n()}({22:function(t,e,n){"use strict";var r,o=n(0),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),Object.defineProperty(e.prototype,"timerColor",{get:function(){return"running"===this.timerStatus?"#FFFFFF":"finished"===this.timerStatus?"#FFFF52":"#9A9FA1"},enumerable:!1,configurable:!0}),a([Object(o.b)({type:Object,required:!0})],e.prototype,"position",void 0),a([Object(o.b)({type:String,required:!0})],e.prototype,"time",void 0),a([Object(o.b)({type:String,required:!0})],e.prototype,"timerStatus",void 0),e=a([o.a],e)}(o.c),p=n(1),s=Object(p.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"runInformation",style:this.position},[e("span",{style:{color:this.timerColor}},[this._v(this._s(this.time))])])}),[],!1,null,"fc84cdf4",null);e.a=s.exports},23:function(t,e,n){"use strict";var r,o=n(0),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fontSizeModifier=1,e}return i(e,t),e.prototype.onChangeText=function(){this.fontSizeModifier=1},e.prototype.mounted=function(){this.adjustmentFontSize()},e.prototype.updated=function(){this.adjustmentFontSize()},e.prototype.adjustmentFontSize=function(){var t=this.$refs.parent,e=this.$refs.text;t&&e&&(t.clientHeight<e.clientHeight&&this.fontSizeModifier>=.1&&(this.fontSizeModifier*=.95))},a([Object(o.b)({type:Object,required:!0})],e.prototype,"position",void 0),a([Object(o.b)({type:String,required:!0})],e.prototype,"text",void 0),a([Object(o.b)({type:Number,default:38})],e.prototype,"fontSize",void 0),a([Object(o.d)("text")],e.prototype,"onChangeText",null),e=a([o.a],e)}(o.c),p=n(1),s=Object(p.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"parent",staticClass:"gameTitle",style:this.position},[e("span",{ref:"text",staticClass:"text",style:{fontSize:this.fontSize*this.fontSizeModifier+"px"}},[this._v("\n    "+this._s(this.text)+"\n  ")])])}),[],!1,null,"4fa15a16",null);e.a=s.exports},27:function(t,e,n){"use strict";var r,o=n(0),i=n(6),a=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nameElementClass=["textParent name",{player:e.isPlayer},{commentator:!e.isPlayer}],e}return a(e,t),c([Object(o.b)({type:Object,required:!0})],e.prototype,"position",void 0),c([Object(o.b)({type:Number,default:930})],e.prototype,"width",void 0),c([Object(o.b)({type:String,required:!0})],e.prototype,"name",void 0),c([Object(o.b)({type:Boolean,default:!0})],e.prototype,"isPlayer",void 0),e=c([Object(o.a)({components:{OneLineTextBlock:i.a}})],e)}(o.c),s=n(1),u=Object(s.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nameplate",style:this.position},[e("div",{class:this.nameElementClass},[this.isPlayer?e("img",{attrs:{src:n(25),height:"44px"}}):e("img",{attrs:{src:n(21),height:"44px"}}),this._v(" "),e("one-line-text-block",{staticStyle:{paddingLeft:"10px"},attrs:{fontSize:38,text:this.name,width:this.width-40-44-10}})],1)])}),[],!1,null,"45f39a45",null);e.a=u.exports},41:function(t,e,n){"use strict";n.r(e);var r,o=n(7),i=n(3),a=n(0),c=n(2),p=n(12),s=n(15),u=n(23),l=n(13),f=n(14),h=n(27),y=n(22),d=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{attrs:{src:n(21),height:"44px"}})])}],m=n(6),b=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),v=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return b(e,t),v([Object(a.b)({type:Object,required:!0})],e.prototype,"position",void 0),v([Object(a.b)({type:Array,required:!0})],e.prototype,"commentators",void 0),v([Object(a.b)({type:Number,default:38})],e.prototype,"fontSize",void 0),e=v([Object(a.a)({components:{OneLineTextBlock:m.a}})],e)}(a.c),x=n(1),_=Object(x.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"parent",staticClass:"commentator",style:this.position},[this._m(0),this._v(" "),e("div",{staticClass:"nameParent"},this._l(this.commentators,(function(t){return e("one-line-text-block",{key:t.name,staticStyle:{padding:"10px 0"},attrs:{fontSize:38,text:t.name,width:306}})})),1)])}),d,!1,null,"07886706",null).exports,g=n(9),j=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),w=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},P=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clipPaths=[{x:645,y:75,width:640,height:485},{x:55,y:570,width:640,height:485},{x:1225,y:570,width:640,height:485},{x:645,y:20,width:180,height:40},{x:55,y:515,width:180,height:40},{x:1325,y:515,width:180,height:40}],e.gameTitle={top:"70px",left:"1300px",width:"600px",height:"180px"},e.category={top:"280px",left:"1300px",width:"290px",height:"70px"},e.estimate={top:"280px",left:"1610px",width:"290px",height:"70px"},e.player=[{top:"15px",left:"840px",width:"340px",height:"40px"},{top:"510px",left:"250px",width:"340px",height:"40px"},{top:"510px",left:"1520px",width:"340px",height:"40px"}],e.commentator={top:"645px",left:"760px",width:"390px",height:"220px"},e.timer={top:"380px",left:"1470px",width:"260px",height:"75px"},e.twitter={top:"60px",left:"240px",width:"370px",height:"290px"},e}return j(e,t),w([c.a],e.prototype,"currentRunData",void 0),w([c.a],e.prototype,"timerReplicant",void 0),w([c.a],e.prototype,"currentRunnersRace",void 0),w([c.a],e.prototype,"currentCommentators",void 0),w([c.a],e.prototype,"currentSocial",void 0),e=w([Object(a.a)({components:{GameLayout:p.a,EventLogo:s.a,Estimate:f.a,GameTitle:u.a,RunInformationOneLine:l.a,NameplateWithoutSns:h.a,Timer:y.a,Commentator:_,TwitterNotification:g.a}})],e)}(a.c),R=Object(x.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("game-layout",{attrs:{clipPaths:t.clipPaths}},[r("div",{staticClass:"header"},[r("event-logo",{staticStyle:{width:"240px"}}),t._v(" "),r("div",{staticClass:"hashImg"},[r("img",{staticStyle:{"margin-top":"10px"},attrs:{src:n(24),height:"45px"}})])],1),t._v(" "),r("twitter-notification",{attrs:{position:t.twitter,line:8}}),t._v(" "),r("game-title",{attrs:{position:t.gameTitle,text:t.currentRunData.game}}),t._v(" "),r("run-information-one-line",{attrs:{position:t.category,text:t.currentRunData.category}}),t._v(" "),r("estimate",{attrs:{position:t.estimate,estimateS:t.currentRunData.estimateS}}),t._v(" "),r("nameplate-without-sns",{attrs:{position:t.player[0],name:t.currentRunnersRace[0].name||"",width:340}}),t._v(" "),r("nameplate-without-sns",{attrs:{position:t.player[1],name:t.currentRunnersRace[1]?t.currentRunnersRace[1].name:"",width:340}}),t._v(" "),r("nameplate-without-sns",{attrs:{position:t.player[2],name:t.currentRunnersRace[2]?t.currentRunnersRace[2].name:"",width:340}}),t._v(" "),r("commentator",{attrs:{position:t.commentator,commentators:t.currentCommentators}}),t._v(" "),r("timer",{attrs:{position:t.timer,time:t.timerReplicant.time,timerStatus:t.timerReplicant.state}})],1)}),[],!1,null,"5e7380c7",null).exports,S=n(5);Object(o.b)(S.a).then((function(){new i.a({store:S.a,el:"#App",render:function(t){return t(R)}})}))}});