!function(t){function e(e){for(var i,a,c=e[0],p=e[1],s=e[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(t[i]=p[i]);for(l&&l(e);f.length;)f.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],i=!0,c=1;c<o.length;c++){var p=o[c];0!==n[p]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},n={3:0},r=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=p;r.push([44,0,1]),o()}({11:function(t,e,o){"use strict";var i,n=o(0),r=o(8),a=o(6),c=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),p=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.socialOrder=r.d,e.nameElementClass=["textParent name",{player:e.isPlayer},{commentator:!e.isPlayer}],e}return c(e,t),p([Object(n.b)({type:Object,required:!0})],e.prototype,"position",void 0),p([Object(n.b)({type:Number,default:930})],e.prototype,"width",void 0),p([Object(n.b)({type:String,required:!0})],e.prototype,"name",void 0),p([Object(n.b)({type:Object,required:!0})],e.prototype,"social",void 0),p([Object(n.b)({type:Boolean,default:!0})],e.prototype,"isPlayer",void 0),p([Object(n.b)({type:Number,required:!0})],e.prototype,"displaySocial",void 0),e=p([Object(n.a)({components:{OneLineTextBlock:a.a}})],e)}(n.c),l=o(1),u=Object(l.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nameplate",style:t.position},[i("div",{class:t.nameElementClass},[t.isPlayer?i("img",{attrs:{src:o(25),height:"44px"}}):i("img",{attrs:{src:o(21),height:"44px"}}),t._v(" "),i("one-line-text-block",{staticStyle:{paddingLeft:"10px"},attrs:{fontSize:38,text:t.name,width:t.width/2-40-44-10}})],1),t._v(" "),i("div",[i("transition",{attrs:{name:"social",mode:"out-in"}},[t.displaySocial===t.socialOrder.twitter&&t.social.twitter?i("div",{key:"twitter",staticClass:"textParent social"},[i("img",{attrs:{src:o(17),height:"44px"}}),t._v(" "),i("one-line-text-block",{staticStyle:{paddingLeft:"10px"},attrs:{fontSize:24,text:t.social.twitter,width:t.width/2-40-44-10}})],1):t.displaySocial===t.socialOrder.twitch&&t.social.twitch?i("div",{key:"twitch",staticClass:"textParent social"},[i("img",{attrs:{src:o(18),height:"44px"}}),t._v(" "),i("one-line-text-block",{staticStyle:{paddingLeft:"10px"},attrs:{fontSize:24,text:t.social.twitch,width:t.width/2-40-44-10}})],1):t.displaySocial===t.socialOrder.youtube&&t.social.youtube?i("div",{key:"youtube",staticClass:"textParent social"},[i("img",{attrs:{src:o(19),height:"44px"}}),t._v(" "),i("one-line-text-block",{staticStyle:{paddingLeft:"10px"},attrs:{fontSize:24,text:t.social.youtube,width:t.width/2-40-44-10}})],1):t.displaySocial===t.socialOrder.nico&&t.social.nico?i("div",{key:"nico",staticClass:"textParent social"},[i("img",{attrs:{src:o(20),height:"44px"}}),t._v(" "),i("one-line-text-block",{staticStyle:{paddingLeft:"10px"},attrs:{fontSize:24,text:t.social.nico,width:t.width/2-40-44-10}})],1):i("div",{key:"blank",staticClass:"textParent social"},[i("one-line-text-block",{attrs:{width:t.width/2-40}})],1)])],1)])}),[],!1,null,"5ca15930",null);e.a=u.exports},17:function(t,e,o){t.exports=o.p+"img/twitter_white-4e4a66408cfe737b7f0460263a8491c8.png"},18:function(t,e,o){t.exports=o.p+"img/twitch-2364c31d4d72e00f663941aacc6487b4.png"},19:function(t,e,o){t.exports=o.p+"img/youtube-90c05d15f3d2477650c9289c3a80246d.png"},20:function(t,e,o){t.exports=o.p+"img/nico-1964f6c9328c7d03547e89b74b0aebbf.png"},23:function(t,e,o){"use strict";var i,n=o(0),r=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fontSizeModifier=1,e}return r(e,t),e.prototype.onChangeText=function(){this.fontSizeModifier=1},e.prototype.mounted=function(){this.adjustmentFontSize()},e.prototype.updated=function(){this.adjustmentFontSize()},e.prototype.adjustmentFontSize=function(){var t=this.$refs.parent,e=this.$refs.text;t&&e&&(t.clientHeight<e.clientHeight&&this.fontSizeModifier>=.1&&(this.fontSizeModifier*=.95))},a([Object(n.b)({type:Object,required:!0})],e.prototype,"position",void 0),a([Object(n.b)({type:String,required:!0})],e.prototype,"text",void 0),a([Object(n.b)({type:Number,default:38})],e.prototype,"fontSize",void 0),a([Object(n.d)("text")],e.prototype,"onChangeText",null),e=a([n.a],e)}(n.c),p=o(1),s=Object(p.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"parent",staticClass:"gameTitle",style:this.position},[e("span",{ref:"text",staticClass:"text",style:{fontSize:this.fontSize*this.fontSizeModifier+"px"}},[this._v("\n    "+this._s(this.text)+"\n  ")])])}),[],!1,null,"4fa15a16",null);e.a=s.exports},44:function(t,e,o){"use strict";o.r(e);var i,n=o(7),r=o(3),a=o(0),c=o(2),p=o(12),s=o(15),l=o(23),u=o(13),f=o(14),d=o(11),y=o(10),h=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),b=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clipPaths=[{x:625,y:105,width:1290,height:730},{x:355,y:755,width:250,height:80}],e.gameTitle={top:"340px",left:"10px",width:"590px",height:"180px"},e.category={top:"550px",left:"10px",width:"590px",height:"70px"},e.estimate={top:"650px",left:"10px",width:"590px",height:"70px"},e.player={top:"910px",left:"970px",width:"930px",height:"80px"},e.commentator={top:"910px",left:"10px",width:"930px",height:"80px"},e.twitter={top:"60px",left:"240px",width:"370px",height:"290px"},e}return h(e,t),b([c.a],e.prototype,"currentRunData",void 0),b([c.a],e.prototype,"timerReplicant",void 0),b([c.a],e.prototype,"currentRunner",void 0),b([c.a],e.prototype,"commentatorsNameOneLine",void 0),b([c.a],e.prototype,"commentatorsSocialOneLine",void 0),b([c.a],e.prototype,"currentSocial",void 0),e=b([Object(a.a)({components:{GameLayout:p.a,EventLogo:s.a,GameTitle:l.a,RunInformationOneLine:u.a,Estimate:f.a,Nameplate:d.a,TwitterNotification:y.a}})],e)}(a.c),m=o(1),v=Object(m.a)(x,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("game-layout",{attrs:{clipPaths:t.clipPaths}},[i("div",{staticClass:"header"},[i("event-logo",{staticStyle:{width:"240px"}}),t._v(" "),i("div",{staticClass:"hashImg"},[i("img",{staticStyle:{"margin-top":"10px"},attrs:{src:o(24),height:"45px"}})])],1),t._v(" "),i("twitter-notification",{attrs:{position:t.twitter,line:8}}),t._v(" "),i("game-title",{attrs:{position:t.gameTitle,text:t.currentRunData.game}}),t._v(" "),i("run-information-one-line",{attrs:{position:t.category,text:t.currentRunData.category}}),t._v(" "),i("estimate",{attrs:{position:t.estimate,estimateS:t.currentRunData.estimateS}}),t._v(" "),i("nameplate",{attrs:{isPlayer:!1,position:t.commentator,name:t.commentatorsNameOneLine,social:t.commentatorsSocialOneLine,displaySocial:t.currentSocial}}),t._v(" "),i("nameplate",{attrs:{position:t.player,name:t.currentRunner.name,social:t.currentRunner.social,displaySocial:t.currentSocial}})],1)}),[],!1,null,"29c149dc",null).exports,g=o(5);Object(n.b)(g.a).then((function(){new r.a({store:g.a,el:"#App",render:function(t){return t(v)}})}))}});