!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="http://localhost:3000/build/",__webpack_require__(__webpack_require__.s=1042)}({1042:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var locale_1=__webpack_require__(1043),utils_1=__webpack_require__(27);__webpack_require__(1044),new(function(){function Home(){var _this=this;this.handleSwitchPageLanguage=function(){utils_1.changePageLanguage(),_this.unbindEvent(),_this.renderLanguage(),_this.bindEvent()},utils_1.initPageLanguage(),this.renderLanguage(),this.renderImage(),this.bindEvent()}return Home.prototype.renderImage=function(){document.getElementById("viser-mount-1-1").innerHTML='<img src="/assets/image/s1-1.png"/>',document.getElementById("viser-mount-2-1").innerHTML='<img src="/assets/image/s2-1.png"/>',document.getElementById("viser-mount-2-2").innerHTML='<img src="/assets/image/s2-2.png"/>',document.getElementById("viser-mount-2-3").innerHTML='<img src="/assets/image/s2-3.png"/>',document.getElementById("viser-mount-2-4").innerHTML='<img src="/assets/image/s2-4.png"/>'},Home.prototype.renderText=function(selector,text){var selectorDom=document.querySelector(selector);selectorDom&&(selectorDom.innerHTML=text)},Home.prototype.renderLanguage=function(){var _this=this,pageLanguageInStore=utils_1.getPageLanguage();pageLanguageInStore&&-1!==utils_1.ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore)||(pageLanguageInStore=utils_1.DEFAULT_PAGE_LANGUAGE,utils_1.setPageLanguage(pageLanguageInStore));var pageLanguageSwitchDom=document.querySelector(".home-header .page-language-switch");utils_1.ALL_PAGE_LANGUAGES.forEach(function(lang){utils_1.removeClass(pageLanguageSwitchDom,lang)}),utils_1.addClass(pageLanguageSwitchDom,pageLanguageInStore),locale_1.default&&locale_1.default[pageLanguageInStore]&&locale_1.default[pageLanguageInStore].length&&locale_1.default[pageLanguageInStore].forEach(function(o){_this.renderText(o.selector,o.text)})},Home.prototype.unbindEvent=function(){var pageLanguageSwitchDom=document.querySelector(".home-header .page-language-switch");pageLanguageSwitchDom&&utils_1.off(pageLanguageSwitchDom,"click",this.handleSwitchPageLanguage)},Home.prototype.bindEvent=function(){var pageLanguageSwitchDom=document.querySelector(".home-header .page-language-switch");pageLanguageSwitchDom&&utils_1.on(pageLanguageSwitchDom,"click",this.handleSwitchPageLanguage)},Home}())},1043:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var locale={cn:[{selector:".home-header .common-header-nav-item.demo-link",text:"案例"},{selector:".home-header .common-header-nav-item.docs-link",text:"文档"},{selector:".main-intro .main-intro-title",text:"再一次发现<br/>你的数据。"},{selector:".main-intro .main-intro-subtitle",text:"使用Viser进行可视化，让你的数据变得更加直观。"},{selector:".home-section.presentation-1 .intro-container .intro-text .intro-title",text:"即刻创建图表"},{selector:".home-section.presentation-1 .intro-container .intro-text .intro-content",text:"只要你拥有一份结构化的数据，就可以在Viser里开始您的可视化探索之旅了。让Viser知道你想要的图表类型并告诉他数据的意义，Viser一定会为你绘制出你想要的图形。"},{selector:".home-section.presentation-2 .intro-container .intro-text .intro-title",text:"纠结？不存在的"},{selector:".home-section.presentation-2 .intro-container .intro-text .intro-content",text:"做可视化哪有一步到位的，还不是在不断地调整中，摸索出最合适的表达方式。使用Viser不用害怕随时变动需求带来的麻烦，最小化变动量设计的Viser的参数，让调整图表不再是一件难事。"},{selector:".home-section.presentation-3 .intro-container .intro-text .intro-title",text:"告别框架烦恼"},{selector:".home-section.presentation-3 .intro-container .intro-text .intro-content",text:"做可视化就是一件纯粹的事情，选择什么前端框架并不是需要真正关心的事情。不管是React，还是Angular，抑或是Vue，你都能在Viser里找到解决方案。你的框架比较小众？也可以快速定制啊，就是这么贴心。"},{selector:".try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-1 .highlight-feature-content",text:"数据可视化，一个就够了"},{selector:".try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-2 .highlight-feature-content",text:"语义化组件，无限的可能"},{selector:".try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-3 .highlight-feature-content",text:"相似的语法，如你所期待"},{selector:".try-now .try-content",text:"从现在开始，使用 Viser 为你的数据进行可视化处理"},{selector:".try-now .try-link",text:"立即使用"},{selector:".home-footer",text:'与来自 AntV 的 <a href="//antv.alipay.com/zh-cn/g2/3.x/index.html" target="_blank">G2</a> 深度合作<br/>本项目基于 MIT 协议发布<br />Copyright (c) 2018 Viser Group. 版权所有<br />'}],en:[{selector:".home-header .common-header-nav-item.demo-link",text:"Demo"},{selector:".home-header .common-header-nav-item.docs-link",text:"Docs"},{selector:".main-intro .main-intro-title",text:"The Rediscovery<br/>of Your Data."},{selector:".main-intro .main-intro-subtitle",text:"Use Viser to simplify and beautify your data."},{selector:".home-section.presentation-1 .intro-container .intro-text .intro-title",text:"Create Instantly"},{selector:".home-section.presentation-1 .intro-container .intro-text .intro-content",text:"It's quite easy to create a chart with Viser.All your need is preparing a set of data and describing the meaning of column and row."},{selector:".home-section.presentation-2 .intro-container .intro-text .intro-title",text:"Modify Easily"},{selector:".home-section.presentation-2 .intro-container .intro-text .intro-content",text:"We all know that the most complex thing in data visualization is the detail adjustment. The well designed properties of Viser component make you leave params-phobia away."},{selector:".home-section.presentation-3 .intro-container .intro-text .intro-title",text:"Full Compatibility"},{selector:".home-section.presentation-3 .intro-container .intro-text .intro-content",text:"No mater what front-end framework you chose, you can always find a data visualization solution with Viser. Explicitly, React, Angular and Vue are all supported."},{selector:".try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-1 .highlight-feature-content",text:"One Framework for All Visualization"},{selector:".try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-2 .highlight-feature-content",text:"Infinite Charts by Semantic Component"},{selector:".try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-3 .highlight-feature-content",text:"Lightweight Depending Only on G2"},{selector:".try-now .try-content",text:"From now on，using Viser for data visualization."},{selector:".try-now .try-link",text:"Install Now"},{selector:".home-footer",text:'Deep cooperation with <a href="//antv.alipay.com/zh-cn/g2/3.x/index.html" target="_blank">G2</a> from AntV.<br/>Released under the MIT License.<br />Copyright (c) 2018 Viser Group. All Rights Reserved.<br />'}]};exports.default=locale},1044:function(module,exports){},27:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var oui_dom_utils_1=__webpack_require__(28),oui_dom_events_1=__webpack_require__(29);exports.ALL_PAGE_LANGUAGES=["en","cn"],exports.DEFAULT_PAGE_LANGUAGE="en",exports.getPageLanguage=function(){var pageLanguageInStore=window.localStorage.getItem("page_language");return pageLanguageInStore&&-1!==exports.ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore)?pageLanguageInStore:null},exports.setPageLanguage=function(language){window.localStorage.setItem("page_language",language)},exports.initPageLanguage=function(){if(!exports.getPageLanguage()){var navigatorLanguage=window.navigator.language.toLowerCase();navigatorLanguage&&-1!==navigatorLanguage.indexOf("cn")?exports.setPageLanguage("cn"):exports.setPageLanguage(exports.DEFAULT_PAGE_LANGUAGE)}},exports.changePageLanguage=function(){var pageLanguageInStore=exports.getPageLanguage();pageLanguageInStore&&"en"===pageLanguageInStore?exports.setPageLanguage("cn"):pageLanguageInStore&&"cn"===pageLanguageInStore?exports.setPageLanguage("en"):exports.setPageLanguage(exports.DEFAULT_PAGE_LANGUAGE)},exports.getNameByLanguage=function(o){switch(exports.getPageLanguage()){case"en":return o&&o.enName?o.enName:"";case"cn":return o&&o.cnName?o.cnName:"";default:return""}},exports.generateHashtag=function(folder,item){return folder&&item?"#/"+folder+"/"+item:folder?"#/"+folder+"/"+item:"#"},exports.getFolderAndItem=function(){var hash=window.location.hash,hashReg=/^#?\/?([^\/]*)\/?([^\/]*)\/?$/,result=hashReg.exec(hash);return result?{folder:result[1]||"",item:result[2]||""}:{folder:"",item:""}},exports.addClass=oui_dom_utils_1.default.addClass,exports.removeClass=oui_dom_utils_1.default.removeClass,exports.hasClass=oui_dom_utils_1.default.hasClass,exports.on=oui_dom_events_1.default.on,exports.off=oui_dom_events_1.default.off,exports.delegate=oui_dom_events_1.default.delegate,exports.undelegate=oui_dom_events_1.default.undelegate},28:function(module,exports,__webpack_require__){"use strict";function getAmId(obj){return obj._amId||(obj._amId=_amId++)}function setAmDisplay(elem,display){var id=getAmId(elem);_amDisplay["_am_"+id]=display}function getAmDisplay(elem){var id=getAmId(elem);return _amDisplay["_am_"+id]}Object.defineProperty(exports,"__esModule",{value:!0});var reUnit=/width|height|top|left|right|bottom|margin|padding/i,_amId=1,_amDisplay={},requestAnimationFrame=void 0;requestAnimationFrame="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)}:function(){throw new Error("requestAnimationFrame is not supported, maybe you are running in the server side")},exports.default={addClass:function(el,className){var _this=this;"string"==typeof el&&(el=document.querySelectorAll(el)),(el instanceof NodeList?[].slice.call(el):[el]).forEach(function(e){_this.hasClass(e,className)||(e.classList?e.classList.add(className):e.className+=" "+className)})},removeClass:function(el,className){var _this2=this;"string"==typeof el&&(el=document.querySelectorAll(el)),(el instanceof NodeList?[].slice.call(el):[el]).forEach(function(e){_this2.hasClass(e,className)&&(e.classList?e.classList.remove(className):e.className=e.className.replace(new RegExp("(^|\\b)"+className.split(" ").join("|")+"(\\b|$)","gi")," "))})},hasClass:function(el,className){return"string"==typeof el&&(el=document.querySelector(el)),el.classList?el.classList.contains(className):new RegExp("(^| )"+className+"( |$)","gi").test(el.className)},toggleClass:function(el,className){"string"==typeof el&&(el=document.querySelector(el));var flag=this.hasClass(el,className);return flag?this.removeClass(el,className):this.addClass(el,className),flag},insertAfter:function(newEl,targetEl){var parent=targetEl.parentNode;parent.lastChild===targetEl?parent.appendChild(newEl):parent.insertBefore(newEl,targetEl.nextSibling)},remove:function(el){if("string"==typeof el)[].forEach.call(document.querySelectorAll(el),function(node){node.parentNode.removeChild(node)});else if(el.parentNode)el.parentNode.removeChild(el);else{if(!(el instanceof NodeList))throw new Error("you can only pass Element, array of Elements or query string as argument");[].forEach.call(el,function(node){node.parentNode.removeChild(node)})}},forceReflow:function(el){el.offsetHeight},getDocumentScrollTop:function(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop},setDocumentScrollTop:function(value){return window.scrollTo(0,value),value},outerHeight:function(el){return el.offsetHeight},outerHeightWithMargin:function(el){var height=el.offsetHeight,style=getComputedStyle(el);return height+=(parseFloat(style.marginTop)||0)+(parseFloat(style.marginBottom)||0)},outerWidth:function(el){return el.offsetWidth},outerWidthWithMargin:function(el){var width=el.offsetWidth,style=getComputedStyle(el);return width+=(parseFloat(style.marginLeft)||0)+(parseFloat(style.marginRight)||0)},getComputedStyles:function(el){return el.ownerDocument.defaultView.getComputedStyle(el,null)},getOffset:function(el){var html=el.ownerDocument.documentElement,box={top:0,left:0};return void 0!==el.getBoundingClientRect&&(box=el.getBoundingClientRect()),{top:box.top+window.pageYOffset-html.clientTop,left:box.left+window.pageXOffset-html.clientLeft}},getPosition:function(el){return el?{left:el.offsetLeft,top:el.offsetTop}:{left:0,top:0}},setStyle:function(node,att,val,style){(style=style||node.style)&&(null===val||""===val?val="":!isNaN(Number(val))&&reUnit.test(att)&&(val+="px"),""===att&&(att="cssText",val=""),style[att]=val)},setStyles:function(el,hash){function trim(str){return str.replace(/^\s+|\s+$/g,"")}var _this3=this,HAS_CSSTEXT_FEATURE=void 0!==el.style.cssText,originStyleText=void 0,originStyleObj={};originStyleText=HAS_CSSTEXT_FEATURE?el.style.cssText:el.getAttribute("style"),originStyleText.split(";").forEach(function(item){if(-1!==item.indexOf(":")){var obj=item.split(":");originStyleObj[trim(obj[0])]=trim(obj[1])}});var styleObj={};Object.keys(hash).forEach(function(item){_this3.setStyle(el,item,hash[item],styleObj)});var mergedStyleObj=Object.assign({},originStyleObj,styleObj),styleText=Object.keys(mergedStyleObj).map(function(item){return item+": "+mergedStyleObj[item]+";"}).join(" ");HAS_CSSTEXT_FEATURE?el.style.cssText=styleText:el.setAttribute("style",styleText)},getStyle:function(el,att,style){style=style||el.style;var val="";return style&&""===(val=style[att])&&(val=this.getComputedStyle(el,att)),val},getComputedStyle:function(el,att){var win=el.ownerDocument.defaultView,computed=win.getComputedStyle(el,null);return att?computed[att]:computed},getPageSize:function(){var xScroll=void 0,yScroll=void 0;window.innerHeight&&window.scrollMaxY?(xScroll=window.innerWidth+window.scrollMaxX,yScroll=window.innerHeight+window.scrollMaxY):document.body.scrollHeight>document.body.offsetHeight?(xScroll=document.body.scrollWidth,yScroll=document.body.scrollHeight):(xScroll=document.body.offsetWidth,yScroll=document.body.offsetHeight);var windowWidth=void 0,windowHeight=void 0;self.innerHeight?(windowWidth=document.documentElement.clientWidth?document.documentElement.clientWidth:self.innerWidth,windowHeight=self.innerHeight):document.documentElement&&document.documentElement.clientHeight?(windowWidth=document.documentElement.clientWidth,windowHeight=document.documentElement.clientHeight):document.body&&(windowWidth=document.body.clientWidth,windowHeight=document.body.clientHeight);var pageHeight=void 0,pageWidth=void 0;return pageHeight=yScroll<windowHeight?windowHeight:yScroll,pageWidth=xScroll<windowWidth?xScroll:windowWidth,{pageWidth:pageWidth,pageHeight:pageHeight,windowWidth:windowWidth,windowHeight:windowHeight}},get:function(selector){return document.querySelector(selector)||{}},getAll:function(selector){return document.querySelectorAll(selector)},parentsUntil:function(el,selector,filter){var result=[],matchesSelector=el.matches||el.webkitMatchesSelector||el.mozMatchesSelector||el.msMatchesSelector;for(el=el.parentElement;el&&!matchesSelector.call(el,selector);)filter?matchesSelector.call(el,filter)&&result.push(el):result.push(el),el=el.parentElement;return result},closest:function(el,selector){for(var matchesSelector=el.matches||el.webkitMatchesSelector||el.mozMatchesSelector||el.msMatchesSelector;el;){if(matchesSelector.call(el,selector))return el;el=el.parentElement}return null},_showHide:function(el,show){"string"==typeof el&&(el=document.querySelectorAll(el));var els=el instanceof NodeList?[].slice.call(el):[el],display=void 0,values=[];0!==els.length&&(els.forEach(function(e,index){e.style&&(display=e.style.display,show?"none"===display&&(values[index]=getAmDisplay(e)||""):"none"!==display&&(values[index]="none",setAmDisplay(e,display)))}),els.forEach(function(e,index){null!==values[index]&&(els[index].style.display=values[index])}))},show:function(elements){this._showHide(elements,!0)},hide:function(elements){this._showHide(elements,!1)},toggle:function(element){"none"===element.style.display?this.show(element):this.hide(element)},scrollTo:function(){var _this4=this,to=arguments.length<=0||void 0===arguments[0]?0:arguments[0],duration=arguments.length<=1||void 0===arguments[1]?16:arguments[1];if(!(duration<0)){var diff=to-this.getDocumentScrollTop();if(0!==diff){var perTick=diff/duration*10;requestAnimationFrame(function(){if(Math.abs(perTick)>Math.abs(diff))return void _this4.setDocumentScrollTop(_this4.getDocumentScrollTop()+diff);_this4.setDocumentScrollTop(_this4.getDocumentScrollTop()+perTick),diff>0&&_this4.getDocumentScrollTop()>=to||diff<0&&_this4.getDocumentScrollTop()<=to||_this4.scrollTo(to,duration-16)})}}},is:function(el,selector){return(el.matches||el.matchesSelector||el.msMatchesSelector||el.mozMatchesSelector||el.webkitMatchesSelector||el.oMatchesSelector).call(el,selector)},width:function(el){var styles=this.getComputedStyles(el),width=parseFloat(-1!==styles.width.indexOf("px")?styles.width:0);if("border-box"===(styles.boxSizing||"content-box"))return width;var borderLeftWidth=parseFloat(styles.borderLeftWidth);return width-parseFloat(styles.borderRightWidth)-borderLeftWidth-parseFloat(styles.paddingLeft)-parseFloat(styles.paddingRight)},height:function(el){var styles=this.getComputedStyles(el),height=parseFloat(-1!==styles.height.indexOf("px")?styles.height:0);if("border-box"===(styles.boxSizing||"content-box"))return height;var borderTopWidth=parseFloat(styles.borderTopWidth);return height-parseFloat(styles.borderBottomWidth)-borderTopWidth-parseFloat(styles.paddingTop)-parseFloat(styles.paddingBottom)}}},29:function(module,exports,__webpack_require__){"use strict";function getDtId(obj){return obj._dtId||(obj._dtId=_dtId++)}function parse(event){var dotIndex=event.indexOf(".");return dotIndex>0?{e:event.substring(0,event.indexOf(".")),ns:event.substring(dotIndex+1,event.length)}:{e:event}}function findHandlers(el,selector,event,callback){return event=parse(event),(handlers[getDtId(el)]||[]).filter(function(handler){return handler&&(!event.e||handler.e===event.e)&&(!event.ns||handler.ns===event.ns)&&(!callback||handler.callback===callback)&&(!selector||handler.selector===selector)})}function removeEvent(el,selector,event,callback){var eventName=parse(event).e;if(!el._dtId)return!1;var elHandlers=handlers[getDtId(el)];findHandlers(el,selector,event,callback).forEach(function(handler){el.removeEventListener?el.removeEventListener(eventName,handler.delegator||handler.callback):el.detachEvent&&el.detachEvent("on"+eventName,handler.delegator||handler.callback),elHandlers.splice(elHandlers.indexOf(handler),1)})}function bindEvent(el,selector,event,callback,delegator){var eventName=parse(event).e,ns=parse(event).ns;el.addEventListener?el.addEventListener(eventName,delegator||callback,!1):el.attachEvent&&el.attachEvent("on"+eventName,delegator||callback);var id=getDtId(el);(handlers[id]||(handlers[id]=[])).push({delegator:delegator,callback:callback,e:eventName,ns:ns,selector:selector})}Object.defineProperty(exports,"__esModule",{value:!0});var handlers={},specialEvents={};specialEvents.click=specialEvents.mousedown=specialEvents.mouseup=specialEvents.mousemove="MouseEvents";var _dtId=1,Events={on:function(el,eventType,callback){bindEvent(el,null,eventType,callback)},off:function(el,eventType,callback){removeEvent(el,null,eventType,callback)},once:function(el,eventType,callback){var recursiveFunction=function recursiveFunction(e){return Events.off(e.currentTarget,e.type,recursiveFunction),callback(e)};this.on(el,eventType,recursiveFunction)},delegate:function(el,selector,eventType,callback){bindEvent(el,selector,eventType,callback,function(e){for(var els=el.querySelectorAll(selector),matched=!1,i=0;i<els.length;i++){var _el=els[i];if(_el===e.target||_el.contains(e.target)){matched=_el;break}}matched&&callback.apply(matched,[].slice.call(arguments))})},undelegate:function(el,selector,eventType,callback){removeEvent(el,selector,eventType,callback)},trigger:function(el,eventType,props){var event=document.createEvent(specialEvents[eventType]||"Events"),bubbles=!0;if(props)for(var name in props)({}).hasOwnProperty.call(props,name)&&("bubbles"===name?bubbles=!!props[name]:event[name]=props[name]);event.initEvent(eventType,bubbles,!0),el.dispatchEvent(event)}};exports.default=Events}});