const INSTALLED_AT_KEY = "installedAt";
const UPDATE_POPUP_RESTRICTION_KEY = "updatePopupRestriction";

const IS_ADDITIONAL_BLOCKING_ENABLED_KEY = "isAdditionalBlockingEnabled";
const ADS_KEY = "ads";
const ANNOTATIONS_KEY = "annotations";
const YOUTUBE_AD_REGEX_KEY = "youtubeAdRegex";
const AD_BLOCKING_SELECTORS_KEY = "adBlockingSelectors";
const DAILYMOTION_AD_BLOCKING_SELECTORS_KEY = "dailymotionAdBlockingSelectors";
const DAILYMOTION_AD_REGEX_KEY = "dailymotionAdRegex";
const POPUP_CONFIG_KEY = "popupConfig";

const API_URL = "https://api.adblock-for-youtube.com";
// const API_URL = "https://dev-api-adblock-for-youtube.herokuapp.com";

const youtubeAdRegexesFallback = [
  "(googleads.g.doubleclick.net)",
  "(=adunit&)",
  "(/pubads.)",
  "(/pubads_)",
  "(/api/ads/)",
  "(/googleads_)",
  "(innovid.com)",
  "(/pagead/lvz?)",
  "(/pagead/gen_)",
  "(doubleclick.com)",
  "(google.com/pagead/)",
  "(youtube.com/pagead/)",
  "(googlesyndication.com)",
  "(www.youtube.com/get_midroll_)",
];

const youtubeAnnotationsRegexes = ["(annotations_invideo)"]

const adBlockingSelectorsFallback = [
  "#player-ads",
  "#merch-shelf",
  "#masthead-ad",
  "#offer-module",
  ".ytp-ad-button",

  "ytd-ad-slot-renderer",
  ".ytd-ad-slot-renderer",
  ".ytp-ad-progress-list",

  // ".ytd-merch-shelf-renderer",
  "ytd-companion-slot-renderer",
  ".ytd-companion-slot-renderer",
  ".ytd-in-feed-ad-layout-renderer",
  ".ytd-action-companion-ad-renderer",
  ".ytp-ad-player-overlay-flyout-cta",
  "ytd-promoted-sparkles-web-renderer",

  ".ad-showing > .html5-video-container",
  ".ytd-player-legacy-desktop-watch-ads-renderer",
  ".ytd-rich-item-renderer > ytd-ad-slot-renderer",
  'a[href^="https://www.googleadservices.com/pagead/aclk?"]',
  "#contents > ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer)",

  "ytd-display-ad-renderer",
  ".ytd-carousel-ad-renderer",
  "ytd-compact-promoted-video-renderer",
  ".ytd-promoted-sparkles-text-search-renderer",
  ".masthead-ad-control",
  "#ad_creative_3",
  "#footer-ads",

  "ytd-promoted-video-renderer",
  ".ad-container",
  ".ad-div",
  ".video-ads",
  ".ytd-mealbar-promo-renderer",
  ".sparkles-light-cta",
  "#watch-channel-brand-div",
  "#watch7-sidebar-ads",

  '[target-id="engagement-panel-ads"]',
]

const dailymotionAdBlockingSelectorsFallback = [
  'div[class^="NewWatchingDiscovery__adSection"]',
  'div[class^="DisplayAd"]',
]

// const defaultPopupConfig = {
//   type: "mobile",
//   isEnabled: false,
//   doNotShowAgainMinutes: 120,
// };

const setConstantScriptString = 'function setConstant(e,t,n="",r="",i=!1){if(e&&matchStackTrace(n,Error().stack)){var o,s=!1,a=noopArray(),u=noopObject();if("undefined"===t)o=void 0;else if("false"===t)o=!1;else if("true"===t)o=!0;else if("null"===t)o=null;else if("emptyArr"===t)o=a;else if("emptyObj"===t)o=u;else if("noopFunc"===t)o=noopFunc;else if("noopCallbackFunc"===t)o=noopCallbackFunc;else if("trueFunc"===t)o=trueFunc;else if("falseFunc"===t)o=falseFunc;else if("throwFunc"===t)o=throwFunc;else if("noopPromiseResolve"===t)o=noopPromiseResolve;else if("noopPromiseReject"===t)o=noopPromiseReject;else if(/^\\d+$/.test(t)){if(nativeIsNaN(o=parseFloat(t))||Math.abs(o)>32767)return}else if("-1"===t)o=-1;else if(""===t)o="";else if("yes"===t)o="yes";else{if("no"!==t)return;o="no"}["asFunction","asCallback","asResolved","asRejected",].includes(r)&&(o=({asFunction:e=>function(){return e},asCallback:e=>function(){return function(){return e}},asResolved:e=>Promise.resolve(e),asRejected:e=>Promise.reject(e)})[r](o));var c=!1,l=function e(t){return c||(c=void 0!==t&&void 0!==o&&typeof t!=typeof o&&null!==t)},f=function t(n,r,a,u){if(!u.init(n[r]))return!1;var c,l=Object.getOwnPropertyDescriptor(n,r);if(l instanceof Object){if(!l.configurable){var f="Property \'".concat(r,"\' is not configurable");return console.log(f),!1}n[r]&&(n[r]=o),l.set instanceof Function&&(c=l.set)}return Object.defineProperty(n,r,{configurable:a,get:()=>u.get(),set(t){if(void 0!==c&&c(t),t instanceof Object){var n=e.split(".").slice(1);i&&!s&&(s=!0,t=new Proxy(t,{get:function e(t,r,i){return n.reduce(function(e,t,n,r){var i=null==e?void 0:e[t];return n===r.length-1&&i!==o&&(e[t]=o),i||e},t),Reflect.get(t,r,i)}}))}u.set(t)}}),!0};!function e(t,n){var r=getPropertyInChain(t,n),i=r.base,s=r.prop,a=r.chain,u={factValue:void 0,init(e){return this.factValue=e,!0},get(){return this.factValue},set(t){this.factValue!==t&&(this.factValue=t,t instanceof Object&&e(t,a))}};if(!a){f(i,s,!1,{init:e=>!l(e),get:()=>o,set(e){l(e)&&(o=e)}})&&hit();return}if(void 0!==i&&null===i[s]){f(i,s,!0,u);return}(i instanceof Object||"object"==typeof i)&&isEmptyObject(i)&&f(i,s,!0,u);var c=t[s];(c instanceof Object||"object"==typeof c&&null!==c)&&e(c,a),f(i,s,!0,u)}(window,e)}}function hit(){try{var e=console.log.bind(console),t=console.trace.bind(console);e("".concat(""," setconstant trace start")),t&&t(),e("".concat(""," trace end"))}catch(n){}}function noopArray(){return[]}function noopObject(){return{}}function noopFunc(){}function noopCallbackFunc(){return noopFunc}function trueFunc(){return!0}function falseFunc(){return!1}function throwFunc(){throw Error()}function noopPromiseReject(){return Promise.reject()}function noopPromiseResolve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"basic";if("undefined"!=typeof Response){var r=new Response(e,{status:200,statusText:"OK"});return"opaque"===n?Object.defineProperties(r,{body:{value:null},status:{value:0},statusText:{value:""},url:{value:""},type:{value:n}}):Object.defineProperties(r,{url:{value:t},type:{value:n}}),Promise.resolve(r)}}function getPropertyInChain(e,t){var n=t.indexOf(".");if(-1===n)return{base:e,prop:t};var r=t.slice(0,n);if(null===e)return{base:e,prop:r,chain:t};var i=e[r];return(t=t.slice(n+1),(e instanceof Object||"object"==typeof e)&&isEmptyObject(e)||null===i)?{base:e,prop:r,chain:t}:void 0!==i?getPropertyInChain(i,t):(Object.defineProperty(e,r,{configurable:!0}),{base:e,prop:r,chain:t})}function matchStackTrace(e,t){if(!e||""===e||shouldAbortInlineOrInjectedScript(e,t))return!0;var n=toRegExp(e),r=t.split("\\n").slice(2).map(function(e){return e.trim()}).join("\\n");return getNativeRegexpTest().call(n,r)}function nativeIsNaN(e){return(Number.isNaN||window.isNaN)(e)}function isEmptyObject(e){return 0===Object.keys(e).length&&!e.prototype}function shouldAbortInlineOrInjectedScript(e,t){var n="injectedScript",r=function e(t){return t.includes("inlineScript")},i=function e(t){return t.includes(n)};if(!(r(e)||i(e)))return!1;var o=window.location.href,s=o.indexOf("#");-1!==s&&(o=o.slice(0,s));var a=t.split("\\n").slice(2).map(function(e){return e.trim()}).map(function(e){var t=/(.*?@)?(\\S+)(:\\d+):\\d+\\)?$/.exec(e);if(t){var r=t[2];if(null!==(o=r)&&void 0!==o&&o.startsWith("(")&&(r=r.slice(1)),null!==(s=r)&&void 0!==s&&s.startsWith("<anonymous>")){r=n;var i,o,s,a,u=void 0!==t[1]?t[1].slice(0,-1):e.slice(0,t.index).trim();null!==(a=u)&&void 0!==a&&a.startsWith("at")&&(u=u.slice(2).trim()),i="".concat(u," ").concat(r).trim()}else i=r}else i=e;return i});if(a){for(var u=0;u<a.length;u+=1)if(r(e)&&o===a[u]||i(e)&&a[u].startsWith(n))return!0}return!1}function getNativeRegexpTest(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),t=null==e?void 0:e.value;if(e&&"function"==typeof e.value)return t;throw Error("RegExp.prototype.test is not a function")}function toRegExp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===e)return RegExp(".?");var t,n,r=e.lastIndexOf("/"),i=e.substring(r+1),o=e.substring(0,r+1),s=(t=o,n=i,t.startsWith("/")&&t.endsWith("/")&&!t.endsWith("\\\\/")&&function e(t){if(!t)return!1;try{return RegExp("",t),!0}catch(n){return!1}}(n)?n:"");return e.startsWith("/")&&e.endsWith("/")||s?RegExp((s?o:e).slice(1,-1),s):RegExp(e.replace(/\'/g, "\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&"))}setConstant("ytInitialPlayerResponse.playerAds","undefined"),setConstant("ytInitialPlayerResponse.adSlots","undefined"),setConstant("ytInitialPlayerResponse.playerConfig.ssapConfig","undefined"),setConstant("ytInitialPlayerResponse.streamingData.serverAbrStreamingUrl","undefined"),setConstant("ytInitialPlayerResponse.adPlacements","undefined"),setConstant("playerResponse.adPlacements","undefined");'
const trustedReplaceFetchResponseScriptString = 'function trustedReplaceFetchResponse(e="",t="",r=""){if("undefined"!=typeof fetch&&"undefined"!=typeof Proxy&&"undefined"!=typeof Response){if(""===e&&""!==t){console.log("Pattern argument should not be empty string");return}var n,a=""===e&&""===t,c=Request.prototype.clone,o=fetch,s=!1,i=function i(u,p,l){return(n=getFetchData(l,c),a)?(console.log("fetch( ".concat(objectToString(n)," )"),!0),Reflect.apply(u,p,l)):(s=matchRequestProps(r,n))?o.apply(null,l).then(function(r){return r.text().then(function(n){var a="*"===e?/(\\n|.)*/:toRegExp(e),c=n.replace(a,t),o=forgeResponse(r,c);return hit(),o}).catch(function(){var e=objectToString(n),t="Response body can\'t be converted to text: ".concat(e);return console.log(t),Reflect.apply(u,p,l)})}).catch(function(){return Reflect.apply(u,p,l)}):Reflect.apply(u,p,l)};fetch=new Proxy(fetch,{apply:i})}}function hit(){try{var e=console.log.bind(console),t=console.trace.bind(console);e("".concat(""," trusted replace fetch response trace start")),t&&t(),e("".concat(""," trace end"))}catch(r){}}function getFetchData(e,t){var r,n,a={},c=e[0];if(c instanceof Request){var o=t.call(c),s=getRequestData(o);r=s.url,n=s}else r=c,n=e[1];return a.url=r,n instanceof Object&&Object.keys(n).forEach(function(e){a[e]=n[e]}),a}function objectToString(e){return e&&"object"==typeof e?isEmptyObject(e)?"{}":Object.entries(e).map(function(e){var t=e[0],r=e[1],n=r;return r instanceof Object&&(n="{ ".concat(objectToString(r)," }")),"".concat(t,\':"\').concat(n,\'"\')}).join(" "):String(e)}function matchRequestProps(e,t){if(""===e||"*"===e)return!0;var r,n=parseMatchProps(e);if(isValidParsedData(n)){var a=getMatchPropsData(n);r=Object.keys(a).every(function(e){var r=a[e],n=t[e];return Object.prototype.hasOwnProperty.call(t,e)&&"string"==typeof n&&(null==r?void 0:r.test(n))})}else console.log("Invalid parameter: ".concat(e)),r=!1;return r}function forgeResponse(e,t){var r=e.bodyUsed,n=e.headers,a=e.ok,c=e.redirected,o=e.status,s=e.statusText,i=e.type,u=e.url,p=new Response(t,{status:o,statusText:s,headers:n});return Object.defineProperties(p,{url:{value:u},type:{value:i},ok:{value:a},bodyUsed:{value:r},redirected:{value:c}}),p}function toRegExp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===e)return RegExp(".?");var t,r,n=e.lastIndexOf("/"),a=e.substring(n+1),c=e.substring(0,n+1),o=(t=c,r=a,t.startsWith("/")&&t.endsWith("/")&&!t.endsWith("\\\\/")&&function e(t){if(!t)return!1;try{return RegExp("",t),!0}catch(r){return!1}}(r)?r:"");return e.startsWith("/")&&e.endsWith("/")||o?RegExp((o?c:e).slice(1,-1),o):RegExp(e.replace(/\'/g, "\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&"))}function isValidStrPattern(e){var t,r=escapeRegExp(e);"/"===e[0]&&"/"===e[e.length-1]&&(r=e.slice(1,-1));try{t=RegExp(r),t=!0}catch(n){t=!1}return t}function escapeRegExp(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}function isEmptyObject(e){return 0===Object.keys(e).length&&!e.prototype}function getRequestData(e){return Object.fromEntries(getRequestProps().map(function(t){var r=e[t];return[t,r]}))}function getRequestProps(){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode",]}function parseMatchProps(e){var t={};return e.split(" ").forEach(function(e){var r,n=e.indexOf(":"),a=e.slice(0,n);if(r=a,getRequestProps().includes(r)){var c=e.slice(n+1);t[a]=c}else t.url=e}),t}function isValidParsedData(e){return Object.values(e).every(function(e){return isValidStrPattern(e)})}function getMatchPropsData(e){var t={};return Object.keys(e).forEach(function(r){t[r]=toRegExp(e[r])}),t}trustedReplaceFetchResponse(\'/"adPlacements.*?([A-Z]"}|"}{2,4})}],/\',"","player?"),trustedReplaceFetchResponse(\'/"adSlots.*?}]}}],/\',"","player?"),trustedReplaceFetchResponse("/\\"adSlots.*?\\}\\}\\],\\"adBreakHeartbeatParams/", "\\"adBreakHeartbeatParams", "player?");'
const jsonPruneXhrResponseScriptString = '(function jsonPruneXhrResponse(source,args){function jsonPruneXhrResponse(source,propsToRemove,obligatoryProps){var propsToMatch=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";var stack=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";if(typeof Proxy==="undefined"){return;}var shouldLog=!propsToRemove&&!obligatoryProps;var prunePaths=getPrunePath(propsToRemove);var requiredPaths=getPrunePath(obligatoryProps);var nativeParse=window.JSON.parse;var nativeStringify=window.JSON.stringify;var nativeOpen=window.XMLHttpRequest.prototype.open;var nativeSend=window.XMLHttpRequest.prototype.send;var setRequestHeaderWrapper=function setRequestHeaderWrapper(setRequestHeader,thisArgument,argsList){thisArgument.collectedHeaders.push(argsList);return Reflect.apply(setRequestHeader,thisArgument,argsList);};var setRequestHeaderHandler={apply:setRequestHeaderWrapper};var xhrData;var openWrapper=function openWrapper(target,thisArg,args){xhrData=getXhrData.apply(null,args);if(matchRequestProps(source,propsToMatch,xhrData)||shouldLog){thisArg.xhrShouldBePruned=true;thisArg.headersReceived=!!thisArg.headersReceived;}if(thisArg.xhrShouldBePruned&&!thisArg.headersReceived){thisArg.headersReceived=true;thisArg.collectedHeaders=[];thisArg.setRequestHeader=new Proxy(thisArg.setRequestHeader,setRequestHeaderHandler);}return Reflect.apply(target,thisArg,args);};var sendWrapper=function sendWrapper(target,thisArg,args){var stackTrace=new Error().stack||"";if(!thisArg.xhrShouldBePruned||stack&&!matchStackTrace(stack,stackTrace)){return Reflect.apply(target,thisArg,args);}var forgedRequest=new XMLHttpRequest();forgedRequest.addEventListener("readystatechange",function(){if(forgedRequest.readyState!==4){return;}var readyState=forgedRequest.readyState,response=forgedRequest.response,responseText=forgedRequest.responseText,responseURL=forgedRequest.responseURL,responseXML=forgedRequest.responseXML,status=forgedRequest.status,statusText=forgedRequest.statusText;var content=responseText||response;if(typeof content!=="string"&&typeof content!=="object"){return;}var modifiedContent;if(typeof content==="string"){try{var jsonContent=nativeParse(content);if(shouldLog){logMessage(source,"".concat(window.location.hostname,"\\n").concat(nativeStringify(jsonContent,null,2),"\\nStack trace:\\n").concat(stackTrace),true);logMessage(source,jsonContent,true,false);modifiedContent=content;}else {modifiedContent=jsonPruner(source,jsonContent,prunePaths,requiredPaths,stack="",{nativeStringify:nativeStringify});try{var responseType=thisArg.responseType;switch(responseType){case"":case"text":modifiedContent=nativeStringify(modifiedContent);break;case"arraybuffer":modifiedContent=new TextEncoder().encode(nativeStringify(modifiedContent)).buffer;break;case"blob":modifiedContent=new Blob([nativeStringify(modifiedContent)]);break;default:break;}}catch(error){var message="Response body cannot be converted to reponse type: \'".concat(content,"\'");logMessage(source,message);modifiedContent=content;}}}catch(error){var _message="Response body cannot be converted to json: \'".concat(content,"\'");logMessage(source,_message);modifiedContent=content;}}Object.defineProperties(thisArg,{readyState:{value:readyState,writable:false},responseURL:{value:responseURL,writable:false},responseXML:{value:responseXML,writable:false},status:{value:status,writable:false},statusText:{value:statusText,writable:false},response:{value:modifiedContent,writable:false},responseText:{value:modifiedContent,writable:false}});setTimeout(function(){var stateEvent=new Event("readystatechange");thisArg.dispatchEvent(stateEvent);var loadEvent=new Event("load");thisArg.dispatchEvent(loadEvent);var loadEndEvent=new Event("loadend");thisArg.dispatchEvent(loadEndEvent);},1);hit(source);});nativeOpen.apply(forgedRequest,[xhrData.method,xhrData.url,Boolean(xhrData.async)]);thisArg.collectedHeaders.forEach(function(header){forgedRequest.setRequestHeader(header[0],header[1]);});thisArg.collectedHeaders=[];try{nativeSend.call(forgedRequest,args);}catch(_unused){return Reflect.apply(target,thisArg,args);}return undefined;};var openHandler={apply:openWrapper};var sendHandler={apply:sendWrapper};XMLHttpRequest.prototype.open=new Proxy(XMLHttpRequest.prototype.open,openHandler);XMLHttpRequest.prototype.send=new Proxy(XMLHttpRequest.prototype.send,sendHandler);}function hit(source){if(source.verbose!==true){return;}try{var log=console.log.bind(console);var trace=console.trace.bind(console);var prefix=source.ruleText||"";if(source.domainName){var AG_SCRIPTLET_MARKER="#%#//";var UBO_SCRIPTLET_MARKER="##+js";var ruleStartIndex;if(source.ruleText.includes(AG_SCRIPTLET_MARKER)){ruleStartIndex=source.ruleText.indexOf(AG_SCRIPTLET_MARKER);}else if(source.ruleText.includes(UBO_SCRIPTLET_MARKER)){ruleStartIndex=source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);}var rulePart=source.ruleText.slice(ruleStartIndex);prefix="".concat(source.domainName).concat(rulePart);}log("".concat(prefix," trace start"));if(trace){trace();}log("".concat(prefix," trace end"));}catch(e){}if(typeof window.__debug==="function"){window.__debug(source);}}function logMessage(source,message){var forced=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var convertMessageToString=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;var name=source.name,verbose=source.verbose;if(!forced&&!verbose){return;}var nativeConsole=console.log;if(!convertMessageToString){nativeConsole("".concat(name,":"),message);return;}nativeConsole("".concat(name,": ").concat(message));}function toRegExp(){var input=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var DEFAULT_VALUE=".?";var FORWARD_SLASH="/";if(input===""){return new RegExp(DEFAULT_VALUE);}var delimiterIndex=input.lastIndexOf(FORWARD_SLASH);var flagsPart=input.substring(delimiterIndex+1);var regExpPart=input.substring(0,delimiterIndex+1);var isValidRegExpFlag=function isValidRegExpFlag(flag){if(!flag){return false;}try{new RegExp("",flag);return true;}catch(ex){return false;}};var getRegExpFlags=function getRegExpFlags(regExpStr,flagsStr){if(regExpStr.startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)){return flagsStr;}return "";};var flags=getRegExpFlags(regExpPart,flagsPart);if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags){var regExpInput=flags?regExpPart:input;return new RegExp(regExpInput.slice(1,-1),flags);}var escaped=input.replace(/\'/g, "\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped);}function jsonPruner(source,root,prunePaths,requiredPaths,stack,nativeObjects){var nativeStringify=nativeObjects.nativeStringify;if(prunePaths.length===0&&requiredPaths.length===0){logMessage(source,"".concat(window.location.hostname,"\\n").concat(nativeStringify(root,null,2),"\\nStack trace:\\n").concat(new Error().stack),true);if(root&&typeof root==="object"){logMessage(source,root,true,false);}return root;}try{if(isPruningNeeded(source,root,prunePaths,requiredPaths,stack,nativeObjects)===false){return root;}prunePaths.forEach(function(path){var ownerObjArr=getWildcardPropertyInChain(root,path,true);ownerObjArr.forEach(function(ownerObj){if(ownerObj!==undefined&&ownerObj.base){delete ownerObj.base[ownerObj.prop];hit(source);}});});}catch(e){logMessage(source,e);}return root;}function getPrunePath(props){var validPropsString=typeof props==="string"&&props!==undefined&&props!=="";return validPropsString?props.split(/ +/):[];}function matchRequestProps(source,propsToMatch,requestData){if(propsToMatch===""||propsToMatch==="*"){return true;}var isMatched;var parsedData=parseMatchProps(propsToMatch);if(!isValidParsedData(parsedData)){logMessage(source,"Invalid parameter: ".concat(propsToMatch));isMatched=false;}else {var matchData=getMatchPropsData(parsedData);var matchKeys=Object.keys(matchData);isMatched=matchKeys.every(function(matchKey){var matchValue=matchData[matchKey];var dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&typeof dataValue==="string"&&(matchValue===null||matchValue===void 0?void 0:matchValue.test(dataValue));});}return isMatched;}function getXhrData(method,url,async,user,password){return {method:method,url:url,async:async,user:user,password:password};}function isPruningNeeded(source,root,prunePaths,requiredPaths,stack,nativeObjects){if(!root){return false;}var nativeStringify=nativeObjects.nativeStringify;var shouldProcess;if(prunePaths.length===0&&requiredPaths.length>0){var rootString=nativeStringify(root);var matchRegex=toRegExp(requiredPaths.join(""));var shouldLog=matchRegex.test(rootString);if(shouldLog){logMessage(source,"".concat(window.location.hostname,"\\n").concat(nativeStringify(root,null,2),"\\nStack trace:\\n").concat(new Error().stack),true);if(root&&typeof root==="object"){logMessage(source,root,true,false);}shouldProcess=false;return shouldProcess;}}if(stack&&!matchStackTrace(stack,new Error().stack||"")){shouldProcess=false;return shouldProcess;}var wildcardSymbols=[".*.","*.",".*",".[].","[].",".[]"];var _loop=function _loop(){var requiredPath=requiredPaths[i];var lastNestedPropName=requiredPath.split(".").pop();var hasWildcard=wildcardSymbols.some(function(symbol){return requiredPath.includes(symbol);});var details=getWildcardPropertyInChain(root,requiredPath,hasWildcard);if(!details.length){shouldProcess=false;return {v:shouldProcess};}shouldProcess=!hasWildcard;for(var j=0;j<details.length;j+=1){var hasRequiredProp=typeof lastNestedPropName==="string"&&details[j].base[lastNestedPropName]!==undefined;if(hasWildcard){shouldProcess=hasRequiredProp||shouldProcess;}else {shouldProcess=hasRequiredProp&&shouldProcess;}}};for(var i=0;i<requiredPaths.length;i+=1){var _ret=_loop();if(typeof _ret==="object")return _ret.v;}return shouldProcess;}function matchStackTrace(stackMatch,stackTrace){if(!stackMatch||stackMatch===""){return true;}if(shouldAbortInlineOrInjectedScript(stackMatch,stackTrace)){return true;}var stackRegexp=toRegExp(stackMatch);var refinedStackTrace=stackTrace.split("\\n").slice(2).map(function(line){return line.trim();}).join("\\n");return getNativeRegexpTest().call(stackRegexp,refinedStackTrace);}function getMatchPropsData(data){var matchData={};var dataKeys=Object.keys(data);dataKeys.forEach(function(key){matchData[key]=toRegExp(data[key]);});return matchData;}function getRequestProps(){return ["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"];}function isValidParsedData(data){return Object.values(data).every(function(value){return isValidStrPattern(value);});}function parseMatchProps(propsToMatchStr){var PROPS_DIVIDER=" ";var PAIRS_MARKER=":";var isRequestProp=function isRequestProp(prop){return getRequestProps().includes(prop);};var propsObj={};var props=propsToMatchStr.split(PROPS_DIVIDER);props.forEach(function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER);var key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value;}else {propsObj.url=prop;}});return propsObj;}function isValidStrPattern(input){var FORWARD_SLASH="/";var str=escapeRegExp(input);if(input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH){str=input.slice(1,-1);}var isValid;try{isValid=new RegExp(str);isValid=true;}catch(e){isValid=false;}return isValid;}function escapeRegExp(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");}function getWildcardPropertyInChain(base,chain){var lookThrough=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var output=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var pos=chain.indexOf(".");if(pos===-1){if(chain==="*"||chain==="[]"){for(var key in base){if(Object.prototype.hasOwnProperty.call(base,key)){output.push({base:base,prop:key});}}}else {output.push({base:base,prop:chain});}return output;}var prop=chain.slice(0,pos);var shouldLookThrough=prop==="[]"&&Array.isArray(base)||prop==="*"&&base instanceof Object;if(shouldLookThrough){var nextProp=chain.slice(pos+1);var baseKeys=Object.keys(base);baseKeys.forEach(function(key){var item=base[key];getWildcardPropertyInChain(item,nextProp,lookThrough,output);});}if(Array.isArray(base)){base.forEach(function(key){var nextBase=key;if(nextBase!==undefined){getWildcardPropertyInChain(nextBase,chain,lookThrough,output);}});}var nextBase=base[prop];chain=chain.slice(pos+1);if(nextBase!==undefined){getWildcardPropertyInChain(nextBase,chain,lookThrough,output);}return output;}function shouldAbortInlineOrInjectedScript(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript";var INJECTED_SCRIPT_STRING="injectedScript";var INJECTED_SCRIPT_MARKER="<anonymous>";var isInlineScript=function isInlineScript(match){return match.includes(INLINE_SCRIPT_STRING);};var isInjectedScript=function isInjectedScript(match){return match.includes(INJECTED_SCRIPT_STRING);};if(!(isInlineScript(stackMatch)||isInjectedScript(stackMatch))){return false;}var documentURL=window.location.href;var pos=documentURL.indexOf("#");if(pos!==-1){documentURL=documentURL.slice(0,pos);}var stackSteps=stackTrace.split("\\n").slice(2).map(function(line){return line.trim();});var stackLines=stackSteps.map(function(line){var stack;var getStackTraceURL=/(.*?@)?(\\S+)(:\\d+):\\d+\\)?$/.exec(line);if(getStackTraceURL){var _stackURL,_stackURL2;var stackURL=getStackTraceURL[2];if((_stackURL=stackURL)!==null&&_stackURL!==void 0&&_stackURL.startsWith("(")){stackURL=stackURL.slice(1);}if((_stackURL2=stackURL)!==null&&_stackURL2!==void 0&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=getStackTraceURL[1]!==undefined?getStackTraceURL[1].slice(0,-1):line.slice(0,getStackTraceURL.index).trim();if((_stackFunction=stackFunction)!==null&&_stackFunction!==void 0&&_stackFunction.startsWith("at")){stackFunction=stackFunction.slice(2).trim();}stack="".concat(stackFunction," ").concat(stackURL).trim();}else {stack=stackURL;}}else {stack=line;}return stack;});if(stackLines){for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&documentURL===stackLines[index]){return true;}if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)){return true;}}}return false;}function getNativeRegexpTest(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test");var nativeRegexTest=descriptor===null||descriptor===void 0?void 0:descriptor.value;if(descriptor&&typeof descriptor.value==="function"){return nativeRegexTest;}throw new Error("RegExp.prototype.test is not a function");}var updatedArgs=args?[].concat(source).concat(args):[source];try{jsonPruneXhrResponse.apply(this,updatedArgs);}catch(e){console.log(e);}})({"args":["playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots","","/playlist\\\\?list=|\\\\/player(?!.*(get_drm_license))|watch\\\\?[tv]=|get_watch\\\\?/"],"engine":"extension","name":"json-prune-xhr-response","ruleText":"youtube.com#%#//scriptlet(\\"json-prune-xhr-response\\", \\"playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots\\", \\"\\", \\"/playlist\\\\?list=|\\\\/player(?!.*(get_drm_license))|watch\\\\?[tv]=|get_watch\\\\?/\\")","verbose":false,"domainName":"about:blank","version":"4.3.55"}, ["playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots","","/playlist\\\\?list=|\\\\/player(?!.*(get_drm_license))|watch\\\\?[tv]=|get_watch\\\\?/"]);(function jsonPruneXhrResponse(source,args){function jsonPruneXhrResponse(source,propsToRemove,obligatoryProps){var propsToMatch=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";var stack=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";if(typeof Proxy==="undefined"){return;}var shouldLog=!propsToRemove&&!obligatoryProps;var prunePaths=getPrunePath(propsToRemove);var requiredPaths=getPrunePath(obligatoryProps);var nativeParse=window.JSON.parse;var nativeStringify=window.JSON.stringify;var nativeOpen=window.XMLHttpRequest.prototype.open;var nativeSend=window.XMLHttpRequest.prototype.send;var setRequestHeaderWrapper=function setRequestHeaderWrapper(setRequestHeader,thisArgument,argsList){thisArgument.collectedHeaders.push(argsList);return Reflect.apply(setRequestHeader,thisArgument,argsList);};var setRequestHeaderHandler={apply:setRequestHeaderWrapper};var xhrData;var openWrapper=function openWrapper(target,thisArg,args){xhrData=getXhrData.apply(null,args);if(matchRequestProps(source,propsToMatch,xhrData)||shouldLog){thisArg.xhrShouldBePruned=true;thisArg.headersReceived=!!thisArg.headersReceived;}if(thisArg.xhrShouldBePruned&&!thisArg.headersReceived){thisArg.headersReceived=true;thisArg.collectedHeaders=[];thisArg.setRequestHeader=new Proxy(thisArg.setRequestHeader,setRequestHeaderHandler);}return Reflect.apply(target,thisArg,args);};var sendWrapper=function sendWrapper(target,thisArg,args){var stackTrace=new Error().stack||"";if(!thisArg.xhrShouldBePruned||stack&&!matchStackTrace(stack,stackTrace)){return Reflect.apply(target,thisArg,args);}var forgedRequest=new XMLHttpRequest();forgedRequest.addEventListener("readystatechange",function(){if(forgedRequest.readyState!==4){return;}var readyState=forgedRequest.readyState,response=forgedRequest.response,responseText=forgedRequest.responseText,responseURL=forgedRequest.responseURL,responseXML=forgedRequest.responseXML,status=forgedRequest.status,statusText=forgedRequest.statusText;var content=responseText||response;if(typeof content!=="string"&&typeof content!=="object"){return;}var modifiedContent;if(typeof content==="string"){try{var jsonContent=nativeParse(content);if(shouldLog){logMessage(source,"".concat(window.location.hostname,"\\n").concat(nativeStringify(jsonContent,null,2),"\\nStack trace:\\n").concat(stackTrace),true);logMessage(source,jsonContent,true,false);modifiedContent=content;}else {modifiedContent=jsonPruner(source,jsonContent,prunePaths,requiredPaths,stack="",{nativeStringify:nativeStringify});try{var responseType=thisArg.responseType;switch(responseType){case"":case"text":modifiedContent=nativeStringify(modifiedContent);break;case"arraybuffer":modifiedContent=new TextEncoder().encode(nativeStringify(modifiedContent)).buffer;break;case"blob":modifiedContent=new Blob([nativeStringify(modifiedContent)]);break;default:break;}}catch(error){var message="Response body cannot be converted to reponse type: \'".concat(content,"\'");logMessage(source,message);modifiedContent=content;}}}catch(error){var _message="Response body cannot be converted to json: \'".concat(content,"\'");logMessage(source,_message);modifiedContent=content;}}Object.defineProperties(thisArg,{readyState:{value:readyState,writable:false},responseURL:{value:responseURL,writable:false},responseXML:{value:responseXML,writable:false},status:{value:status,writable:false},statusText:{value:statusText,writable:false},response:{value:modifiedContent,writable:false},responseText:{value:modifiedContent,writable:false}});setTimeout(function(){var stateEvent=new Event("readystatechange");thisArg.dispatchEvent(stateEvent);var loadEvent=new Event("load");thisArg.dispatchEvent(loadEvent);var loadEndEvent=new Event("loadend");thisArg.dispatchEvent(loadEndEvent);},1);hit(source);});nativeOpen.apply(forgedRequest,[xhrData.method,xhrData.url,Boolean(xhrData.async)]);thisArg.collectedHeaders.forEach(function(header){forgedRequest.setRequestHeader(header[0],header[1]);});thisArg.collectedHeaders=[];try{nativeSend.call(forgedRequest,args);}catch(_unused){return Reflect.apply(target,thisArg,args);}return undefined;};var openHandler={apply:openWrapper};var sendHandler={apply:sendWrapper};XMLHttpRequest.prototype.open=new Proxy(XMLHttpRequest.prototype.open,openHandler);XMLHttpRequest.prototype.send=new Proxy(XMLHttpRequest.prototype.send,sendHandler);}function hit(source){if(source.verbose!==true){return;}try{var log=console.log.bind(console);var trace=console.trace.bind(console);var prefix=source.ruleText||"";if(source.domainName){var AG_SCRIPTLET_MARKER="#%#//";var UBO_SCRIPTLET_MARKER="##+js";var ruleStartIndex;if(source.ruleText.includes(AG_SCRIPTLET_MARKER)){ruleStartIndex=source.ruleText.indexOf(AG_SCRIPTLET_MARKER);}else if(source.ruleText.includes(UBO_SCRIPTLET_MARKER)){ruleStartIndex=source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);}var rulePart=source.ruleText.slice(ruleStartIndex);prefix="".concat(source.domainName).concat(rulePart);}log("".concat(prefix," trace start"));if(trace){trace();}log("".concat(prefix," trace end"));}catch(e){}if(typeof window.__debug==="function"){window.__debug(source);}}function logMessage(source,message){var forced=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var convertMessageToString=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;var name=source.name,verbose=source.verbose;if(!forced&&!verbose){return;}var nativeConsole=console.log;if(!convertMessageToString){nativeConsole("".concat(name,":"),message);return;}nativeConsole("".concat(name,": ").concat(message));}function toRegExp(){var input=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var DEFAULT_VALUE=".?";var FORWARD_SLASH="/";if(input===""){return new RegExp(DEFAULT_VALUE);}var delimiterIndex=input.lastIndexOf(FORWARD_SLASH);var flagsPart=input.substring(delimiterIndex+1);var regExpPart=input.substring(0,delimiterIndex+1);var isValidRegExpFlag=function isValidRegExpFlag(flag){if(!flag){return false;}try{new RegExp("",flag);return true;}catch(ex){return false;}};var getRegExpFlags=function getRegExpFlags(regExpStr,flagsStr){if(regExpStr.startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)){return flagsStr;}return "";};var flags=getRegExpFlags(regExpPart,flagsPart);if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags){var regExpInput=flags?regExpPart:input;return new RegExp(regExpInput.slice(1,-1),flags);}var escaped=input.replace(/\'/g, "\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped);}function jsonPruner(source,root,prunePaths,requiredPaths,stack,nativeObjects){var nativeStringify=nativeObjects.nativeStringify;if(prunePaths.length===0&&requiredPaths.length===0){logMessage(source,"".concat(window.location.hostname,"\\n").concat(nativeStringify(root,null,2),"\\nStack trace:\\n").concat(new Error().stack),true);if(root&&typeof root==="object"){logMessage(source,root,true,false);}return root;}try{if(isPruningNeeded(source,root,prunePaths,requiredPaths,stack,nativeObjects)===false){return root;}prunePaths.forEach(function(path){var ownerObjArr=getWildcardPropertyInChain(root,path,true);ownerObjArr.forEach(function(ownerObj){if(ownerObj!==undefined&&ownerObj.base){delete ownerObj.base[ownerObj.prop];hit(source);}});});}catch(e){logMessage(source,e);}return root;}function getPrunePath(props){var validPropsString=typeof props==="string"&&props!==undefined&&props!=="";return validPropsString?props.split(/ +/):[];}function matchRequestProps(source,propsToMatch,requestData){if(propsToMatch===""||propsToMatch==="*"){return true;}var isMatched;var parsedData=parseMatchProps(propsToMatch);if(!isValidParsedData(parsedData)){logMessage(source,"Invalid parameter: ".concat(propsToMatch));isMatched=false;}else {var matchData=getMatchPropsData(parsedData);var matchKeys=Object.keys(matchData);isMatched=matchKeys.every(function(matchKey){var matchValue=matchData[matchKey];var dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&typeof dataValue==="string"&&(matchValue===null||matchValue===void 0?void 0:matchValue.test(dataValue));});}return isMatched;}function getXhrData(method,url,async,user,password){return {method:method,url:url,async:async,user:user,password:password};}function isPruningNeeded(source,root,prunePaths,requiredPaths,stack,nativeObjects){if(!root){return false;}var nativeStringify=nativeObjects.nativeStringify;var shouldProcess;if(prunePaths.length===0&&requiredPaths.length>0){var rootString=nativeStringify(root);var matchRegex=toRegExp(requiredPaths.join(""));var shouldLog=matchRegex.test(rootString);if(shouldLog){logMessage(source,"".concat(window.location.hostname,"\\n").concat(nativeStringify(root,null,2),"\\nStack trace:\\n").concat(new Error().stack),true);if(root&&typeof root==="object"){logMessage(source,root,true,false);}shouldProcess=false;return shouldProcess;}}if(stack&&!matchStackTrace(stack,new Error().stack||"")){shouldProcess=false;return shouldProcess;}var wildcardSymbols=[".*.","*.",".*",".[].","[].",".[]"];var _loop=function _loop(){var requiredPath=requiredPaths[i];var lastNestedPropName=requiredPath.split(".").pop();var hasWildcard=wildcardSymbols.some(function(symbol){return requiredPath.includes(symbol);});var details=getWildcardPropertyInChain(root,requiredPath,hasWildcard);if(!details.length){shouldProcess=false;return {v:shouldProcess};}shouldProcess=!hasWildcard;for(var j=0;j<details.length;j+=1){var hasRequiredProp=typeof lastNestedPropName==="string"&&details[j].base[lastNestedPropName]!==undefined;if(hasWildcard){shouldProcess=hasRequiredProp||shouldProcess;}else {shouldProcess=hasRequiredProp&&shouldProcess;}}};for(var i=0;i<requiredPaths.length;i+=1){var _ret=_loop();if(typeof _ret==="object")return _ret.v;}return shouldProcess;}function matchStackTrace(stackMatch,stackTrace){if(!stackMatch||stackMatch===""){return true;}if(shouldAbortInlineOrInjectedScript(stackMatch,stackTrace)){return true;}var stackRegexp=toRegExp(stackMatch);var refinedStackTrace=stackTrace.split("\\n").slice(2).map(function(line){return line.trim();}).join("\\n");return getNativeRegexpTest().call(stackRegexp,refinedStackTrace);}function getMatchPropsData(data){var matchData={};var dataKeys=Object.keys(data);dataKeys.forEach(function(key){matchData[key]=toRegExp(data[key]);});return matchData;}function getRequestProps(){return ["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"];}function isValidParsedData(data){return Object.values(data).every(function(value){return isValidStrPattern(value);});}function parseMatchProps(propsToMatchStr){var PROPS_DIVIDER=" ";var PAIRS_MARKER=":";var isRequestProp=function isRequestProp(prop){return getRequestProps().includes(prop);};var propsObj={};var props=propsToMatchStr.split(PROPS_DIVIDER);props.forEach(function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER);var key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value;}else {propsObj.url=prop;}});return propsObj;}function isValidStrPattern(input){var FORWARD_SLASH="/";var str=escapeRegExp(input);if(input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH){str=input.slice(1,-1);}var isValid;try{isValid=new RegExp(str);isValid=true;}catch(e){isValid=false;}return isValid;}function escapeRegExp(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");}function getWildcardPropertyInChain(base,chain){var lookThrough=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var output=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var pos=chain.indexOf(".");if(pos===-1){if(chain==="*"||chain==="[]"){for(var key in base){if(Object.prototype.hasOwnProperty.call(base,key)){output.push({base:base,prop:key});}}}else {output.push({base:base,prop:chain});}return output;}var prop=chain.slice(0,pos);var shouldLookThrough=prop==="[]"&&Array.isArray(base)||prop==="*"&&base instanceof Object;if(shouldLookThrough){var nextProp=chain.slice(pos+1);var baseKeys=Object.keys(base);baseKeys.forEach(function(key){var item=base[key];getWildcardPropertyInChain(item,nextProp,lookThrough,output);});}if(Array.isArray(base)){base.forEach(function(key){var nextBase=key;if(nextBase!==undefined){getWildcardPropertyInChain(nextBase,chain,lookThrough,output);}});}var nextBase=base[prop];chain=chain.slice(pos+1);if(nextBase!==undefined){getWildcardPropertyInChain(nextBase,chain,lookThrough,output);}return output;}function shouldAbortInlineOrInjectedScript(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript";var INJECTED_SCRIPT_STRING="injectedScript";var INJECTED_SCRIPT_MARKER="<anonymous>";var isInlineScript=function isInlineScript(match){return match.includes(INLINE_SCRIPT_STRING);};var isInjectedScript=function isInjectedScript(match){return match.includes(INJECTED_SCRIPT_STRING);};if(!(isInlineScript(stackMatch)||isInjectedScript(stackMatch))){return false;}var documentURL=window.location.href;var pos=documentURL.indexOf("#");if(pos!==-1){documentURL=documentURL.slice(0,pos);}var stackSteps=stackTrace.split("\\n").slice(2).map(function(line){return line.trim();});var stackLines=stackSteps.map(function(line){var stack;var getStackTraceURL=/(.*?@)?(\\S+)(:\\d+):\\d+\\)?$/.exec(line);if(getStackTraceURL){var _stackURL,_stackURL2;var stackURL=getStackTraceURL[2];if((_stackURL=stackURL)!==null&&_stackURL!==void 0&&_stackURL.startsWith("(")){stackURL=stackURL.slice(1);}if((_stackURL2=stackURL)!==null&&_stackURL2!==void 0&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=getStackTraceURL[1]!==undefined?getStackTraceURL[1].slice(0,-1):line.slice(0,getStackTraceURL.index).trim();if((_stackFunction=stackFunction)!==null&&_stackFunction!==void 0&&_stackFunction.startsWith("at")){stackFunction=stackFunction.slice(2).trim();}stack="".concat(stackFunction," ").concat(stackURL).trim();}else {stack=stackURL;}}else {stack=line;}return stack;});if(stackLines){for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&documentURL===stackLines[index]){return true;}if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)){return true;}}}return false;}function getNativeRegexpTest(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test");var nativeRegexTest=descriptor===null||descriptor===void 0?void 0:descriptor.value;if(descriptor&&typeof descriptor.value==="function"){return nativeRegexTest;}throw new Error("RegExp.prototype.test is not a function");}var updatedArgs=args?[].concat(source).concat(args):[source];try{jsonPruneXhrResponse.apply(this,updatedArgs);}catch(e){console.log(e);}})({"args":["playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots","","/playlist\\\\?list=|player\\\\?|watch\\\\?[tv]=|get_watch\\\\?/"],"engine":"extension","name":"json-prune-xhr-response","ruleText":"youtube.com#%#//scriptlet(\\"json-prune-xhr-response\\", \\"playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots\\", \\"\\", \\"/playlist\\\\?list=|player\\\\?|watch\\\\?[tv]=|get_watch\\\\?/\\")","verbose":false,"domainName":"about:blank","version":"4.3.55"}, ["playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots","","/playlist\\\\?list=|player\\\\?|watch\\\\?[tv]=|get_watch\\\\?/"])'

const defaultPopupsConfig = {
  isAntiAdblockPopupEnabled: false,
  isUpdatePopupEnabled: false,
  isRateUsPopupEnabled: false,
  isOtherStreamingPopupEnabled: false,
  configurablePopup: {
    type: "mobile",
    isEnabled: false,
    doNotShowAgainMinutes: 120,
  },
};

const settings = {
  [ADS_KEY]: true,
  [ANNOTATIONS_KEY]: false,
  [YOUTUBE_AD_REGEX_KEY]: youtubeAdRegexesFallback,
  [AD_BLOCKING_SELECTORS_KEY]: adBlockingSelectorsFallback,
  [DAILYMOTION_AD_REGEX_KEY]: [],
  [DAILYMOTION_AD_BLOCKING_SELECTORS_KEY]: dailymotionAdBlockingSelectorsFallback,
  [POPUP_CONFIG_KEY]: defaultPopupsConfig,
};

const setToChromeStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [key]: value }, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
}

const getFromChromeStorage = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      }
      resolve(result[key]);
    });
  });
}

const getActiveTab = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const error = chrome.runtime.lastError;
      if (error) {
        reject(error);
      }

      const [tab] = tabs;
      resolve(tab);
    });
  });
}

const initializeAdditionalBlocking = async () => {
  const isAdditionalBlockingEnabled = await getFromChromeStorage(IS_ADDITIONAL_BLOCKING_ENABLED_KEY);

  if (isAdditionalBlockingEnabled) {
    settings[IS_ADDITIONAL_BLOCKING_ENABLED_KEY] = true;
  }
};

const setToStorageAndSettings = (fieldName, value) => {
  setToChromeStorage(fieldName, value);
  settings[fieldName] = value;
};

const fetchServerData = async () => {
  try {
    const response = await fetch(
      `${API_URL}/api/v1/adregex?version=${chrome.runtime.getManifest().version}`
    );
    return await response.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};

const updateSettingsFromServer = async () => {
  const response = await fetchServerData();
  if (!response) return;

  const {
    regexRules,
    adBlockingSelectors,
    popupConfig,
    dailymotionAdRegex,
    dailymotionAdBlockingSelectors,
  } = response;

  settings[POPUP_CONFIG_KEY] = popupConfig;
  setToStorageAndSettings(AD_BLOCKING_SELECTORS_KEY, adBlockingSelectors);
  setToStorageAndSettings(YOUTUBE_AD_REGEX_KEY, regexRules);
  setToStorageAndSettings(DAILYMOTION_AD_BLOCKING_SELECTORS_KEY, dailymotionAdBlockingSelectors);
  setToStorageAndSettings(DAILYMOTION_AD_REGEX_KEY, dailymotionAdRegex);
}

const setInstalledAtKey = async () => {
  const installedAt = await getFromChromeStorage(INSTALLED_AT_KEY);

  if (!installedAt) {
    await setToChromeStorage(INSTALLED_AT_KEY, Date.now());
  }
};

let assignedRuleIds = 1;

const deleteAllDynamicRules = async () => {
  const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
  const removeRuleIds = existingRules.map((r) => r.id);

  assignedRuleIds = 1;
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds,
  });
};

const makeUrlFilterRulesFromRegexesArray = (regexes, domain) => {
  return regexes.map((regex) => {
    const urlFilterRule = regex.replace("(", "*").replace(")", "*");

    return {
      action: {
        type: "block",
      },
      condition: {
        urlFilter: urlFilterRule,
        initiatorDomains: [domain],
      },
      id: assignedRuleIds++,
    };
  });
};

const addDynamicRulesFromRegexesArray = async (regexesArray = settings[YOUTUBE_AD_REGEX_KEY], domain = "youtube.com") => {
  const addRules = makeUrlFilterRulesFromRegexesArray(regexesArray, domain);
  await chrome.declarativeNetRequest.updateDynamicRules({
    addRules,
  });
};

const safeTabReload = async (tabId) => {
  try {
    await chrome.tabs.reload(tabId);
  } catch (e) {
    console.log(e);
  }
}

const storesChangesCallBack = async (data) => {
  const YOUTUBE_REGEX = /^https?:\/\/(\w*.)?youtube.com/i;
  const DAILY_MOTION_REGEX = /^https?:\/\/(\w*.)?dailymotion.com/i;

  for (const [key, { newValue }] of Object.entries(data)) {
    if ([ADS_KEY, ANNOTATIONS_KEY].includes(key)) {
      settings[key] = newValue;
    }

    if (key === ADS_KEY) {
      newValue ? await addDynamicRulesFromRegexesArray() : await deleteAllDynamicRules();
      const activeTab = await getActiveTab();

      if (activeTab) {
        const isNeedReloadTab =
          YOUTUBE_REGEX.test(activeTab.url) || (settings[IS_ADDITIONAL_BLOCKING_ENABLED_KEY] && DAILY_MOTION_REGEX.test(activeTab.url));
        isNeedReloadTab && await safeTabReload(activeTab.id);
      }
    }

    if (key === IS_ADDITIONAL_BLOCKING_ENABLED_KEY) {
      if (newValue) {
        addDynamicRulesFromRegexesArray(settings[DAILYMOTION_AD_REGEX_KEY], "dailymotion.com");
      }
    }
  }
}

const onMessageCallback = ({ action, href, message }, { tab }, sendResponse) => {
  if (action === "PAGE_READY") {
    const { id } = tab;
    if (settings[ADS_KEY]) {
      const script = setConstantScriptString + trustedReplaceFetchResponseScriptString + jsonPruneXhrResponseScriptString;
      executeScriptOnPage(id, script);
    }

    const response = {
      enabled: settings[ADS_KEY],
      adBlockSelectors: settings[AD_BLOCKING_SELECTORS_KEY],
      isAdditionalBlockingEnabled: settings[IS_ADDITIONAL_BLOCKING_ENABLED_KEY],
      dailymotionAdBlockingSelectors: settings[DAILYMOTION_AD_BLOCKING_SELECTORS_KEY],
      popupConfig: settings[POPUP_CONFIG_KEY],
    };

    sendResponse(response);
  } else if (action === "ENABLE_ADDITIONAL_BLOCKING") {
    setToStorageAndSettings(IS_ADDITIONAL_BLOCKING_ENABLED_KEY, true);
    sendResponse(true);
  }
}

const initializeSettings = async () => {
  for (const key of Object.keys(settings)) {
    const dataFromStorage = await getFromChromeStorage(key);
    if (dataFromStorage !== undefined) {
      settings[key] = dataFromStorage;
    }
  }
}

const init = async () => {
  await deleteAllDynamicRules();
  await initializeSettings();

  await setInstalledAtKey();
  await initializeAdditionalBlocking();
  await updateSettingsFromServer();

  if (settings[ADS_KEY]) {
    await addDynamicRulesFromRegexesArray();

    if (settings[IS_ADDITIONAL_BLOCKING_ENABLED_KEY]) {
      await addDynamicRulesFromRegexesArray(settings[DAILYMOTION_AD_REGEX_KEY], "dailymotion.com");
    }
  }

  if (settings[ANNOTATIONS_KEY]) {
    await addDynamicRulesFromRegexesArray(youtubeAnnotationsRegexes);
  }

  // Sync setting changes from other conext parts of the extension
  chrome.storage.onChanged.addListener(storesChangesCallBack);

  chrome.runtime.onMessage.addListener(onMessageCallback);
};
init();

const details = chrome.runtime.getManifest();

const installUrl = `https://get.adblock-for-youtube.com/install?v=${details.version}&xtid=${chrome.runtime.id}`;
const uninstallUrl = `https://get.adblock-for-youtube.com/uninstall?v=${details.version}&xtid=${chrome.runtime.id}`;

chrome.runtime.setUninstallURL(uninstallUrl);

chrome.runtime.onInstalled.addListener(({ reason }, previousVersion) => {
  if (reason === "install") {
    // Initially set settings
    setToStorageAndSettings(ADS_KEY, true);
    setToStorageAndSettings(ANNOTATIONS_KEY, false);
    chrome.tabs.create({ url: installUrl });
  }

  if (reason === "update") {
    setToStorageAndSettings(ADS_KEY, true);
    setToStorageAndSettings(ANNOTATIONS_KEY, false);

    chrome.storage.local.remove([UPDATE_POPUP_RESTRICTION_KEY], () => {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError);
      }
    });
  }
});

function injectedFunction(script, scriptId) {
  if (window[scriptId]) return;

  const policy = trustedTypes.createPolicy('default', {
    createScript: (input) => input,
  });

  const safeScriptContent = policy.createScript(script);

  window[scriptId] = true;
  const scriptTag = document.createElement('script');
  scriptTag.setAttribute('type', 'text/javascript');
  scriptTag.textContent = safeScriptContent;
  const parent = document.head || document.documentElement;
  parent.appendChild(scriptTag);
  parent.removeChild(scriptTag);
}

async function executeScriptOnPage(tabId, script) {
  const injectionString = `(()=>{try {${script};} catch (e) {console.log(e)}})();`;

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: injectedFunction,
      injectImmediately: true,
      world: 'MAIN',
      args: [injectionString, 'aby-38oj8EJVO3Uu7t4G9PdfI'],
    });
  } catch (e) {
    console.log(`Error to execute script on tab ${tabId}: `, chrome.runtime.lastError, e);
  }
}

// reload every 24h to calculate DAU
setTimeout(async function () {
  await chrome.runtime.reload();
}, 86400 * 1000);
