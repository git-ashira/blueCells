var _T=Object.defineProperty;var wT=(e,n,r)=>n in e?_T(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Yy=(e,n,r)=>wT(e,typeof n!="symbol"?n+"":n,r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerPolicy&&(o.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?o.credentials="include":u.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(u){if(u.ep)return;u.ep=!0;const o=r(u);fetch(u.href,o)}})();function _2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cp={exports:{}},Ou={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy;function $T(){if(Fy)return Ou;Fy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(l,u,o){var f=null;if(o!==void 0&&(f=""+o),u.key!==void 0&&(f=""+u.key),"key"in u){o={};for(var d in u)d!=="key"&&(o[d]=u[d])}else o=u;return u=o.ref,{$$typeof:e,type:l,key:f,ref:u!==void 0?u:null,props:o}}return Ou.Fragment=n,Ou.jsx=r,Ou.jsxs=r,Ou}var Ky;function xT(){return Ky||(Ky=1,Cp.exports=$T()),Cp.exports}var Ae=xT(),Op={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy;function ST(){if(Xy)return Le;Xy=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=_&&R[_]||R["@@iterator"],typeof R=="function"?R:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function A(R,j,Z){this.props=R,this.context=j,this.refs=M,this.updater=Z||T}A.prototype.isReactComponent={},A.prototype.setState=function(R,j){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,j,"setState")},A.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function z(){}z.prototype=A.prototype;function D(R,j,Z){this.props=R,this.context=j,this.refs=M,this.updater=Z||T}var N=D.prototype=new z;N.constructor=D,E(N,A.prototype),N.isPureReactComponent=!0;var I=Array.isArray;function V(){}var q={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function J(R,j,Z){var G=Z.ref;return{$$typeof:e,type:R,key:j,ref:G!==void 0?G:null,props:Z}}function ue(R,j){return J(R.type,j,R.props)}function pe(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function he(R){var j={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Z){return j[Z]})}var ge=/\/+/g;function X(R,j){return typeof R=="object"&&R!==null&&R.key!=null?he(""+R.key):j.toString(36)}function ye(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(V,V):(R.status="pending",R.then(function(j){R.status==="pending"&&(R.status="fulfilled",R.value=j)},function(j){R.status==="pending"&&(R.status="rejected",R.reason=j)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function H(R,j,Z,G,oe){var ve=typeof R;(ve==="undefined"||ve==="boolean")&&(R=null);var _e=!1;if(R===null)_e=!0;else switch(ve){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(R.$$typeof){case e:case n:_e=!0;break;case b:return _e=R._init,H(_e(R._payload),j,Z,G,oe)}}if(_e)return oe=oe(R),_e=G===""?"."+X(R,0):G,I(oe)?(Z="",_e!=null&&(Z=_e.replace(ge,"$&/")+"/"),H(oe,j,Z,"",function(bt){return bt})):oe!=null&&(pe(oe)&&(oe=ue(oe,Z+(oe.key==null||R&&R.key===oe.key?"":(""+oe.key).replace(ge,"$&/")+"/")+_e)),j.push(oe)),1;_e=0;var Ge=G===""?".":G+":";if(I(R))for(var Be=0;Be<R.length;Be++)G=R[Be],ve=Ge+X(G,Be),_e+=H(G,j,Z,ve,oe);else if(Be=S(R),typeof Be=="function")for(R=Be.call(R),Be=0;!(G=R.next()).done;)G=G.value,ve=Ge+X(G,Be++),_e+=H(G,j,Z,ve,oe);else if(ve==="object"){if(typeof R.then=="function")return H(ye(R),j,Z,G,oe);throw j=String(R),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return _e}function te(R,j,Z){if(R==null)return R;var G=[],oe=0;return H(R,G,"","",function(ve){return j.call(Z,ve,oe++)}),G}function me(R){if(R._status===-1){var j=R._result;j=j(),j.then(function(Z){(R._status===0||R._status===-1)&&(R._status=1,R._result=Z)},function(Z){(R._status===0||R._status===-1)&&(R._status=2,R._result=Z)}),R._status===-1&&(R._status=0,R._result=j)}if(R._status===1)return R._result.default;throw R._result}var le=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},we={map:te,forEach:function(R,j,Z){te(R,function(){j.apply(this,arguments)},Z)},count:function(R){var j=0;return te(R,function(){j++}),j},toArray:function(R){return te(R,function(j){return j})||[]},only:function(R){if(!pe(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return Le.Activity=v,Le.Children=we,Le.Component=A,Le.Fragment=r,Le.Profiler=u,Le.PureComponent=D,Le.StrictMode=l,Le.Suspense=m,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,Le.__COMPILER_RUNTIME={__proto__:null,c:function(R){return q.H.useMemoCache(R)}},Le.cache=function(R){return function(){return R.apply(null,arguments)}},Le.cacheSignal=function(){return null},Le.cloneElement=function(R,j,Z){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var G=E({},R.props),oe=R.key;if(j!=null)for(ve in j.key!==void 0&&(oe=""+j.key),j)!C.call(j,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&j.ref===void 0||(G[ve]=j[ve]);var ve=arguments.length-2;if(ve===1)G.children=Z;else if(1<ve){for(var _e=Array(ve),Ge=0;Ge<ve;Ge++)_e[Ge]=arguments[Ge+2];G.children=_e}return J(R.type,oe,G)},Le.createContext=function(R){return R={$$typeof:f,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:o,_context:R},R},Le.createElement=function(R,j,Z){var G,oe={},ve=null;if(j!=null)for(G in j.key!==void 0&&(ve=""+j.key),j)C.call(j,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(oe[G]=j[G]);var _e=arguments.length-2;if(_e===1)oe.children=Z;else if(1<_e){for(var Ge=Array(_e),Be=0;Be<_e;Be++)Ge[Be]=arguments[Be+2];oe.children=Ge}if(R&&R.defaultProps)for(G in _e=R.defaultProps,_e)oe[G]===void 0&&(oe[G]=_e[G]);return J(R,ve,oe)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(R){return{$$typeof:d,render:R}},Le.isValidElement=pe,Le.lazy=function(R){return{$$typeof:b,_payload:{_status:-1,_result:R},_init:me}},Le.memo=function(R,j){return{$$typeof:g,type:R,compare:j===void 0?null:j}},Le.startTransition=function(R){var j=q.T,Z={};q.T=Z;try{var G=R(),oe=q.S;oe!==null&&oe(Z,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(V,le)}catch(ve){le(ve)}finally{j!==null&&Z.types!==null&&(j.types=Z.types),q.T=j}},Le.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},Le.use=function(R){return q.H.use(R)},Le.useActionState=function(R,j,Z){return q.H.useActionState(R,j,Z)},Le.useCallback=function(R,j){return q.H.useCallback(R,j)},Le.useContext=function(R){return q.H.useContext(R)},Le.useDebugValue=function(){},Le.useDeferredValue=function(R,j){return q.H.useDeferredValue(R,j)},Le.useEffect=function(R,j){return q.H.useEffect(R,j)},Le.useEffectEvent=function(R){return q.H.useEffectEvent(R)},Le.useId=function(){return q.H.useId()},Le.useImperativeHandle=function(R,j,Z){return q.H.useImperativeHandle(R,j,Z)},Le.useInsertionEffect=function(R,j){return q.H.useInsertionEffect(R,j)},Le.useLayoutEffect=function(R,j){return q.H.useLayoutEffect(R,j)},Le.useMemo=function(R,j){return q.H.useMemo(R,j)},Le.useOptimistic=function(R,j){return q.H.useOptimistic(R,j)},Le.useReducer=function(R,j,Z){return q.H.useReducer(R,j,Z)},Le.useRef=function(R){return q.H.useRef(R)},Le.useState=function(R){return q.H.useState(R)},Le.useSyncExternalStore=function(R,j,Z){return q.H.useSyncExternalStore(R,j,Z)},Le.useTransition=function(){return q.H.useTransition()},Le.version="19.2.6",Le}var Qy;function gm(){return Qy||(Qy=1,Op.exports=ST()),Op.exports}var ft=gm();const _c=_2(ft);var kp={exports:{}},ku={},Mp={exports:{}},Rp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function TT(){return Zy||(Zy=1,(function(e){function n(H,te){var me=H.length;H.push(te);e:for(;0<me;){var le=me-1>>>1,we=H[le];if(0<u(we,te))H[le]=te,H[me]=we,me=le;else break e}}function r(H){return H.length===0?null:H[0]}function l(H){if(H.length===0)return null;var te=H[0],me=H.pop();if(me!==te){H[0]=me;e:for(var le=0,we=H.length,R=we>>>1;le<R;){var j=2*(le+1)-1,Z=H[j],G=j+1,oe=H[G];if(0>u(Z,me))G<we&&0>u(oe,Z)?(H[le]=oe,H[G]=me,le=G):(H[le]=Z,H[j]=me,le=j);else if(G<we&&0>u(oe,me))H[le]=oe,H[G]=me,le=G;else break e}}return te}function u(H,te){var me=H.sortIndex-te.sortIndex;return me!==0?me:H.id-te.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var f=Date,d=f.now();e.unstable_now=function(){return f.now()-d}}var m=[],g=[],b=1,v=null,_=3,S=!1,T=!1,E=!1,M=!1,A=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(H){for(var te=r(g);te!==null;){if(te.callback===null)l(g);else if(te.startTime<=H)l(g),te.sortIndex=te.expirationTime,n(m,te);else break;te=r(g)}}function I(H){if(E=!1,N(H),!T)if(r(m)!==null)T=!0,V||(V=!0,he());else{var te=r(g);te!==null&&ye(I,te.startTime-H)}}var V=!1,q=-1,C=5,J=-1;function ue(){return M?!0:!(e.unstable_now()-J<C)}function pe(){if(M=!1,V){var H=e.unstable_now();J=H;var te=!0;try{e:{T=!1,E&&(E=!1,z(q),q=-1),S=!0;var me=_;try{t:{for(N(H),v=r(m);v!==null&&!(v.expirationTime>H&&ue());){var le=v.callback;if(typeof le=="function"){v.callback=null,_=v.priorityLevel;var we=le(v.expirationTime<=H);if(H=e.unstable_now(),typeof we=="function"){v.callback=we,N(H),te=!0;break t}v===r(m)&&l(m),N(H)}else l(m);v=r(m)}if(v!==null)te=!0;else{var R=r(g);R!==null&&ye(I,R.startTime-H),te=!1}}break e}finally{v=null,_=me,S=!1}te=void 0}}finally{te?he():V=!1}}}var he;if(typeof D=="function")he=function(){D(pe)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,X=ge.port2;ge.port1.onmessage=pe,he=function(){X.postMessage(null)}}else he=function(){A(pe,0)};function ye(H,te){q=A(function(){H(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(H){switch(_){case 1:case 2:case 3:var te=3;break;default:te=_}var me=_;_=te;try{return H()}finally{_=me}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(H,te){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var me=_;_=H;try{return te()}finally{_=me}},e.unstable_scheduleCallback=function(H,te,me){var le=e.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?le+me:le):me=le,H){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=me+we,H={id:b++,callback:te,priorityLevel:H,startTime:me,expirationTime:we,sortIndex:-1},me>le?(H.sortIndex=me,n(g,H),r(m)===null&&H===r(g)&&(E?(z(q),q=-1):E=!0,ye(I,me-le))):(H.sortIndex=we,n(m,H),T||S||(T=!0,V||(V=!0,he()))),H},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(H){var te=_;return function(){var me=_;_=te;try{return H.apply(this,arguments)}finally{_=me}}}})(Rp)),Rp}var Py;function ET(){return Py||(Py=1,Mp.exports=TT()),Mp.exports}var Np={exports:{}},la={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy;function zT(){if(Jy)return la;Jy=1;var e=gm();function n(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function o(m,g,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:v==null?null:""+v,children:m,containerInfo:g,implementation:b}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return la.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,la.createPortal=function(m,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return o(m,g,null,b)},la.flushSync=function(m){var g=f.T,b=l.p;try{if(f.T=null,l.p=2,m)return m()}finally{f.T=g,l.p=b,l.d.f()}},la.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(m,g))},la.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},la.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var b=g.as,v=d(b,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?l.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):b==="script"&&l.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},la.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=d(g.as,g.crossOrigin);l.d.M(m,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(m)},la.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,v=d(b,g.crossOrigin);l.d.L(m,b,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},la.preloadModule=function(m,g){if(typeof m=="string")if(g){var b=d(g.as,g.crossOrigin);l.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(m)},la.requestFormReset=function(m){l.d.r(m)},la.unstable_batchedUpdates=function(m,g){return m(g)},la.useFormState=function(m,g,b){return f.H.useFormState(m,g,b)},la.useFormStatus=function(){return f.H.useHostTransitionStatus()},la.version="19.2.6",la}var ev;function AT(){if(ev)return Np.exports;ev=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Np.exports=zT(),Np.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function CT(){if(tv)return ku;tv=1;var e=ET(),n=gm(),r=AT();function l(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function o(t){var a=t,i=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(i=a.return),t=a.return;while(t)}return a.tag===3?i:null}function f(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function d(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function m(t){if(o(t)!==t)throw Error(l(188))}function g(t){var a=t.alternate;if(!a){if(a=o(t),a===null)throw Error(l(188));return a!==t?null:t}for(var i=t,s=a;;){var c=i.return;if(c===null)break;var h=c.alternate;if(h===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===i)return m(c),t;if(h===s)return m(c),a;h=h.sibling}throw Error(l(188))}if(i.return!==s.return)i=c,s=h;else{for(var $=!1,O=c.child;O;){if(O===i){$=!0,i=c,s=h;break}if(O===s){$=!0,s=c,i=h;break}O=O.sibling}if(!$){for(O=h.child;O;){if(O===i){$=!0,i=h,s=c;break}if(O===s){$=!0,s=h,i=c;break}O=O.sibling}if(!$)throw Error(l(189))}}if(i.alternate!==s)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?t:a}function b(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=b(t),a!==null)return a;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case A:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case V:return"SuspenseList";case J:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case D:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case N:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return a=t.displayName||null,a!==null?a:X(t.type)||"Memo";case C:a=t._payload,t=t._init;try{return X(t(a))}catch{}}return null}var ye=Array.isArray,H=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},le=[],we=-1;function R(t){return{current:t}}function j(t){0>we||(t.current=le[we],le[we]=null,we--)}function Z(t,a){we++,le[we]=t.current,t.current=a}var G=R(null),oe=R(null),ve=R(null),_e=R(null);function Ge(t,a){switch(Z(ve,a),Z(oe,t),Z(G,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?my(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=my(a),t=gy(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(G),Z(G,t)}function Be(){j(G),j(oe),j(ve)}function bt(t){t.memoizedState!==null&&Z(_e,t);var a=G.current,i=gy(a,t.type);a!==i&&(Z(oe,t),Z(G,i))}function st(t){oe.current===t&&(j(G),j(oe)),_e.current===t&&(j(_e),Eu._currentValue=me)}var Pt,it;function ze(t){if(Pt===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);Pt=a&&a[1]||"",it=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pt+t+it}var At=!1;function mn(t,a){if(!t||At)return"";At=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(a){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(ee){var Q=ee}Reflect.construct(t,[],se)}else{try{se.call()}catch(ee){Q=ee}t.call(se.prototype)}}else{try{throw Error()}catch(ee){Q=ee}(se=t())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(ee){if(ee&&Q&&typeof ee.stack=="string")return[ee.stack,Q.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),$=h[0],O=h[1];if($&&O){var U=$.split(`
`),K=O.split(`
`);for(c=s=0;s<U.length&&!U[s].includes("DetermineComponentFrameRoot");)s++;for(;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;if(s===U.length||c===K.length)for(s=U.length-1,c=K.length-1;1<=s&&0<=c&&U[s]!==K[c];)c--;for(;1<=s&&0<=c;s--,c--)if(U[s]!==K[c]){if(s!==1||c!==1)do if(s--,c--,0>c||U[s]!==K[c]){var ie=`
`+U[s].replace(" at new "," at ");return t.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",t.displayName)),ie}while(1<=s&&0<=c);break}}}finally{At=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?ze(i):""}function rr(t,a){switch(t.tag){case 26:case 27:case 5:return ze(t.type);case 16:return ze("Lazy");case 13:return t.child!==a&&a!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return mn(t.type,!1);case 11:return mn(t.type.render,!1);case 1:return mn(t.type,!0);case 31:return ze("Activity");default:return""}}function Fa(t){try{var a="",i=null;do a+=rr(t,i),i=t,t=t.return;while(t);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Dn=Object.prototype.hasOwnProperty,Xr=e.unstable_scheduleCallback,Ka=e.unstable_cancelCallback,no=e.unstable_shouldYield,io=e.unstable_requestPaint,Jt=e.unstable_now,ro=e.unstable_getCurrentPriorityLevel,Xa=e.unstable_ImmediatePriority,lo=e.unstable_UserBlockingPriority,In=e.unstable_NormalPriority,Qr=e.unstable_LowPriority,so=e.unstable_IdlePriority,mi=e.log,zc=e.unstable_setDisableYieldValue,gi=null,ea=null;function Ia(t){if(typeof mi=="function"&&zc(t),ea&&typeof ea.setStrictMode=="function")try{ea.setStrictMode(gi,t)}catch{}}var Yt=Math.clz32?Math.clz32:Oc,Ac=Math.log,Cc=Math.LN2;function Oc(t){return t>>>=0,t===0?32:31-(Ac(t)/Cc|0)|0}var Zr=256,Pr=262144,Jr=4194304;function gn(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function lr(t,a,i){var s=t.pendingLanes;if(s===0)return 0;var c=0,h=t.suspendedLanes,$=t.pingedLanes;t=t.warmLanes;var O=s&134217727;return O!==0?(s=O&~h,s!==0?c=gn(s):($&=O,$!==0?c=gn($):i||(i=O&~t,i!==0&&(c=gn(i))))):(O=s&~h,O!==0?c=gn(O):$!==0?c=gn($):i||(i=s&~t,i!==0&&(c=gn(i)))),c===0?0:a!==0&&a!==c&&(a&h)===0&&(h=c&-c,i=a&-a,h>=i||h===32&&(i&4194048)!==0)?a:c}function sr(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function uo(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ps(){var t=Jr;return Jr<<=1,(Jr&62914560)===0&&(Jr=4194304),t}function el(t){for(var a=[],i=0;31>i;i++)a.push(t);return a}function gt(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function oo(t,a,i,s,c,h){var $=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var O=t.entanglements,U=t.expirationTimes,K=t.hiddenUpdates;for(i=$&~i;0<i;){var ie=31-Yt(i),se=1<<ie;O[ie]=0,U[ie]=-1;var Q=K[ie];if(Q!==null)for(K[ie]=null,ie=0;ie<Q.length;ie++){var ee=Q[ie];ee!==null&&(ee.lane&=-536870913)}i&=~se}s!==0&&hs(t,s,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~($&~a))}function hs(t,a,i){t.pendingLanes|=a,t.suspendedLanes&=~a;var s=31-Yt(a);t.entangledLanes|=a,t.entanglements[s]=t.entanglements[s]|1073741824|i&261930}function ms(t,a){var i=t.entangledLanes|=a;for(t=t.entanglements;i;){var s=31-Yt(i),c=1<<s;c&a|t[s]&a&&(t[s]|=a),i&=~c}}function gs(t,a){var i=a&-a;return i=(i&42)!==0?1:tl(i),(i&(t.suspendedLanes|a))!==0?0:i}function tl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function al(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ys(){var t=te.p;return t!==0?t:(t=window.event,t===void 0?32:qy(t.type))}function vs(t,a){var i=te.p;try{return te.p=t,a()}finally{te.p=i}}var Qa=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Qa,Ft="__reactProps$"+Qa,Bn="__reactContainer$"+Qa,nl="__reactEvents$"+Qa,kc="__reactListeners$"+Qa,Ba="__reactHandles$"+Qa,il="__reactResources$"+Qa,Un="__reactMarker$"+Qa;function yn(t){delete t[Rt],delete t[Ft],delete t[nl],delete t[kc],delete t[Ba]}function ta(t){var a=t[Rt];if(a)return a;for(var i=t.parentNode;i;){if(a=i[Bn]||i[Rt]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(t=xy(t);t!==null;){if(i=t[Rt])return i;t=xy(t)}return a}t=i,i=t.parentNode}return null}function qn(t){if(t=t[Rt]||t[Bn]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function ur(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(l(33))}function yi(t){var a=t[il];return a||(a=t[il]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ct(t){t[Un]=!0}var vn=new Set,rl={};function Nt(t,a){jt(t,a),jt(t+"Capture",a)}function jt(t,a){for(rl[t]=a,t=0;t<a.length;t++)vn.add(a[t])}var bs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fo={},co={};function Mc(t){return Dn.call(co,t)?!0:Dn.call(fo,t)?!1:bs.test(t)?co[t]=!0:(fo[t]=!0,!1)}function ll(t,a,i){if(Mc(a))if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var s=a.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+i)}}function sl(t,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+i)}}function Za(t,a,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(a,i,""+s)}}function Ot(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function or(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Rc(t,a,i){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return c.call(this)},set:function($){i=""+$,h.call(this,$)}}),Object.defineProperty(t,a,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function($){i=""+$},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function ul(t){if(!t._valueTracker){var a=or(t)?"checked":"value";t._valueTracker=Rc(t,a,""+t[a])}}function po(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var i=a.getValue(),s="";return t&&(s=or(t)?t.checked?"true":"false":t.value),t=s,t!==i?(a.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nc=/[\n"\\]/g;function pa(t){return t.replace(Nc,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function _s(t,a,i,s,c,h,$,O){t.name="",$!=null&&typeof $!="function"&&typeof $!="symbol"&&typeof $!="boolean"?t.type=$:t.removeAttribute("type"),a!=null?$==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Ot(a)):t.value!==""+Ot(a)&&(t.value=""+Ot(a)):$!=="submit"&&$!=="reset"||t.removeAttribute("value"),a!=null?ws(t,$,Ot(a)):i!=null?ws(t,$,Ot(i)):s!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?t.name=""+Ot(O):t.removeAttribute("name")}function ho(t,a,i,s,c,h,$,O){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),a!=null||i!=null){if(!(h!=="submit"&&h!=="reset"||a!=null)){ul(t);return}i=i!=null?""+Ot(i):"",a=a!=null?""+Ot(a):i,O||a===t.value||(t.value=a),t.defaultValue=a}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=O?t.checked:!!s,t.defaultChecked=!!s,$!=null&&typeof $!="function"&&typeof $!="symbol"&&typeof $!="boolean"&&(t.name=$),ul(t)}function ws(t,a,i){a==="number"&&ol(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function vi(t,a,i,s){if(t=t.options,a){a={};for(var c=0;c<i.length;c++)a["$"+i[c]]=!0;for(i=0;i<t.length;i++)c=a.hasOwnProperty("$"+t[i].value),t[i].selected!==c&&(t[i].selected=c),c&&s&&(t[i].defaultSelected=!0)}else{for(i=""+Ot(i),a=null,c=0;c<t.length;c++){if(t[c].value===i){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}a!==null||t[c].disabled||(a=t[c])}a!==null&&(a.selected=!0)}}function mo(t,a,i){if(a!=null&&(a=""+Ot(a),a!==t.value&&(t.value=a),i==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=i!=null?""+Ot(i):""}function fr(t,a,i,s){if(a==null){if(s!=null){if(i!=null)throw Error(l(92));if(ye(s)){if(1<s.length)throw Error(l(93));s=s[0]}i=s}i==null&&(i=""),a=i}i=Ot(a),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s),ul(t)}function bi(t,a){if(a){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=a;return}}t.textContent=a}var $s=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cr(t,a,i){var s=a.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":s?t.setProperty(a,i):typeof i!="number"||i===0||$s.has(a)?a==="float"?t.cssFloat=i:t[a]=(""+i).trim():t[a]=i+"px"}function go(t,a,i){if(a!=null&&typeof a!="object")throw Error(l(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||a!=null&&a.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in a)s=a[c],a.hasOwnProperty(c)&&i[c]!==s&&cr(t,c,s)}else for(var h in a)a.hasOwnProperty(h)&&cr(t,h,a[h])}function dr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ic=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return Ic.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pa(){}var _i=null;function xs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ua=null,Kt=null;function Ss(t){var a=qn(t);if(a&&(t=a.stateNode)){var i=t[Ft]||null;e:switch(t=a.stateNode,a.type){case"input":if(_s(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),a=i.name,i.type==="radio"&&a!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+pa(""+a)+'"][type="radio"]'),a=0;a<i.length;a++){var s=i[a];if(s!==t&&s.form===t.form){var c=s[Ft]||null;if(!c)throw Error(l(90));_s(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(a=0;a<i.length;a++)s=i[a],s.form===t.form&&po(s)}break e;case"textarea":mo(t,i.value,i.defaultValue);break e;case"select":a=i.value,a!=null&&vi(t,!!i.multiple,a,!1)}}}var wi=!1;function cl(t,a,i){if(wi)return t(a,i);wi=!0;try{var s=t(a);return s}finally{if(wi=!1,(ua!==null||Kt!==null)&&(yf(),ua&&(a=ua,t=Kt,Kt=ua=null,Ss(a),t)))for(a=0;a<t.length;a++)Ss(t[a])}}function $i(t,a){var i=t.stateNode;if(i===null)return null;var s=i[Ft]||null;if(s===null)return null;i=s[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(l(231,a,typeof i));return i}var Ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ts=!1;if(Ua)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Ts=!1}var bn=null,dl=null,pl=null;function hl(){if(pl)return pl;var t,a=dl,i=a.length,s,c="value"in bn?bn.value:bn.textContent,h=c.length;for(t=0;t<i&&a[t]===c[t];t++);var $=i-t;for(s=1;s<=$&&a[i-s]===c[h-s];s++);return pl=c.slice(t,1<s?1-s:void 0)}function ml(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function yo(){return!1}function aa(t){function a(i,s,c,h,$){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=h,this.target=$,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(i=t[O],this[O]=i?i(h):h[O]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?gl:yo,this.isPropagationStopped=yo,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),a}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=aa(qa),pr=v({},qa,{view:0,detail:0}),Bc=aa(pr),Es,zs,hr,mr=v({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hr&&(hr&&t.type==="mousemove"?(Es=t.screenX-hr.screenX,zs=t.screenY-hr.screenY):zs=Es=0,hr=t),Es)},movementY:function(t){return"movementY"in t?t.movementY:zs}}),vo=aa(mr),Uc=v({},mr,{dataTransfer:0}),qc=aa(Uc),Lc=v({},pr,{relatedTarget:0}),As=aa(Lc),Hc=v({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),jc=aa(Hc),Gc=v({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bo=aa(Gc),_o=v({},qa,{data:0}),Cs=aa(_o),Vc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $o(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=wo[t])?!!a[t]:!1}function Hn(){return $o}var Yc=v({},pr,{key:function(t){if(t.key){var a=Vc[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xo=aa(Yc),Fc=v({},mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),So=aa(Fc),Kc=v({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),Os=aa(Kc),To=v({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xc=aa(To),Qc=v({},mr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zc=aa(Qc),Pc=v({},qa,{newState:0,oldState:0}),Jc=aa(Pc),ed=[9,13,27,32],ks=Ua&&"CompositionEvent"in window,Sa=null;Ua&&"documentMode"in document&&(Sa=document.documentMode);var vl=Ua&&"TextEvent"in window&&!Sa,Ms=Ua&&(!ks||Sa&&8<Sa&&11>=Sa),Eo=" ",gr=!1;function zo(t,a){switch(t){case"keyup":return ed.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ao(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _n=!1;function Rs(t,a){switch(t){case"compositionend":return Ao(a);case"keypress":return a.which!==32?null:(gr=!0,Eo);case"textInput":return t=a.data,t===Eo&&gr?null:t;default:return null}}function Co(t,a){if(_n)return t==="compositionend"||!ks&&zo(t,a)?(t=hl(),pl=dl=bn=null,_n=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Ms&&a.locale!=="ko"?null:a.data;default:return null}}var Oo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ns(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!Oo[t.type]:a==="textarea"}function Ds(t,a,i,s){ua?Kt?Kt.push(s):Kt=[s]:ua=s,a=Sf(a,"onChange"),0<a.length&&(i=new yl("onChange","change",null,i,s),t.push({event:i,listeners:a}))}var xi=null,Si=null;function td(t){oy(t,0)}function yr(t){var a=ur(t);if(po(a))return t}function ko(t,a){if(t==="change")return a}var Is=!1;if(Ua){var bl;if(Ua){var Ti="oninput"in document;if(!Ti){var Ta=document.createElement("div");Ta.setAttribute("oninput","return;"),Ti=typeof Ta.oninput=="function"}bl=Ti}else bl=!1;Is=bl&&(!document.documentMode||9<document.documentMode)}function Ei(){xi&&(xi.detachEvent("onpropertychange",_l),Si=xi=null)}function _l(t){if(t.propertyName==="value"&&yr(Si)){var a=[];Ds(a,Si,t,xs(t)),cl(td,a)}}function Mo(t,a,i){t==="focusin"?(Ei(),xi=a,Si=i,xi.attachEvent("onpropertychange",_l)):t==="focusout"&&Ei()}function Ro(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yr(Si)}function No(t,a){if(t==="click")return yr(a)}function Bs(t,a){if(t==="input"||t==="change")return yr(a)}function Do(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var na=typeof Object.is=="function"?Object.is:Do;function Ie(t,a){if(na(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var i=Object.keys(t),s=Object.keys(a);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!Dn.call(a,c)||!na(t[c],a[c]))return!1}return!0}function zi(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Us(t,a){var i=zi(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=a&&s>=a)return{node:i,offset:a-t};t=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=zi(i)}}function Ue(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Ue(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function wl(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=ol(t.document);a instanceof t.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)t=a.contentWindow;else break;a=ol(t.document)}return a}function qe(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Io=Ua&&"documentMode"in document&&11>=document.documentMode,wn=null,$l=null,Ai=null,xl=!1;function Sl(t,a,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;xl||wn==null||wn!==ol(s)||(s=wn,"selectionStart"in s&&qe(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ai&&Ie(Ai,s)||(Ai=s,s=Sf($l,"onSelect"),0<s.length&&(a=new yl("onSelect","select",null,a,i),t.push({event:a,listeners:s}),a.target=wn)))}function $n(t,a){var i={};return i[t.toLowerCase()]=a.toLowerCase(),i["Webkit"+t]="webkit"+a,i["Moz"+t]="moz"+a,i}var jn={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionrun:$n("Transition","TransitionRun"),transitionstart:$n("Transition","TransitionStart"),transitioncancel:$n("Transition","TransitionCancel"),transitionend:$n("Transition","TransitionEnd")},Tl={},qs={};Ua&&(qs=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function xn(t){if(Tl[t])return Tl[t];if(!jn[t])return t;var a=jn[t],i;for(i in a)if(a.hasOwnProperty(i)&&i in qs)return Tl[t]=a[i];return t}var Ls=xn("animationend"),Hs=xn("animationiteration"),js=xn("animationstart"),Bo=xn("transitionrun"),Uo=xn("transitionstart"),qo=xn("transitioncancel"),Gs=xn("transitionend"),Vs=new Map,El="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");El.push("scrollEnd");function ha(t,a){Vs.set(t,a),Nt(a,[t])}var vr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oa=[],Gn=0,zl=0;function br(){for(var t=Gn,a=zl=Gn=0;a<t;){var i=oa[a];oa[a++]=null;var s=oa[a];oa[a++]=null;var c=oa[a];oa[a++]=null;var h=oa[a];if(oa[a++]=null,s!==null&&c!==null){var $=s.pending;$===null?c.next=c:(c.next=$.next,$.next=c),s.pending=c}h!==0&&Ws(i,c,h)}}function _r(t,a,i,s){oa[Gn++]=t,oa[Gn++]=a,oa[Gn++]=i,oa[Gn++]=s,zl|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Al(t,a,i,s){return _r(t,a,i,s),wr(t)}function Sn(t,a){return _r(t,null,null,a),wr(t)}function Ws(t,a,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var c=!1,h=t.return;h!==null;)h.childLanes|=i,s=h.alternate,s!==null&&(s.childLanes|=i),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&a!==null&&(c=31-Yt(i),t=h.hiddenUpdates,s=t[c],s===null?t[c]=[a]:s.push(a),a.lane=i|536870912),h):null}function wr(t){if(50<bu)throw bu=0,Jd=null,Error(l(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Vn={};function Lo(t,a,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ia(t,a,i,s){return new Lo(t,a,i,s)}function Cl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function La(t,a){var i=t.alternate;return i===null?(i=ia(t.tag,a,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=a,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,a=t.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Ys(t,a){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,a=i.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function $r(t,a,i,s,c,h){var $=0;if(s=t,typeof t=="function")Cl(t)&&($=1);else if(typeof t=="string")$=uT(t,i,G.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case J:return t=ia(31,i,a,c),t.elementType=J,t.lanes=h,t;case E:return Tn(i.children,c,h,a);case M:$=8,c|=24;break;case A:return t=ia(12,i,a,c|2),t.elementType=A,t.lanes=h,t;case I:return t=ia(13,i,a,c),t.elementType=I,t.lanes=h,t;case V:return t=ia(19,i,a,c),t.elementType=V,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:$=10;break e;case z:$=9;break e;case N:$=11;break e;case q:$=14;break e;case C:$=16,s=null;break e}$=29,i=Error(l(130,t===null?"null":typeof t,"")),s=null}return a=ia($,i,a,c),a.elementType=t,a.type=s,a.lanes=h,a}function Tn(t,a,i,s){return t=ia(7,t,s,a),t.lanes=i,t}function Ol(t,a,i){return t=ia(6,t,null,a),t.lanes=i,t}function Fs(t){var a=ia(18,null,null,0);return a.stateNode=t,a}function kl(t,a,i){return a=ia(4,t.children!==null?t.children:[],t.key,a),a.lanes=i,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Ks=new WeakMap;function fa(t,a){if(typeof t=="object"&&t!==null){var i=Ks.get(t);return i!==void 0?i:(a={value:t,source:a,stack:Fa(a)},Ks.set(t,a),a)}return{value:t,source:a,stack:Fa(a)}}var Wn=[],ra=0,Ml=null,Yn=0,ma=[],ga=0,En=null,Ha=1,ja="";function Ja(t,a){Wn[ra++]=Yn,Wn[ra++]=Ml,Ml=t,Yn=a}function Ho(t,a,i){ma[ga++]=Ha,ma[ga++]=ja,ma[ga++]=En,En=t;var s=Ha;t=ja;var c=32-Yt(s)-1;s&=~(1<<c),i+=1;var h=32-Yt(a)+c;if(30<h){var $=c-c%5;h=(s&(1<<$)-1).toString(32),s>>=$,c-=$,Ha=1<<32-Yt(a)+c|i<<c|s,ja=h+t}else Ha=1<<h|i<<c|s,ja=t}function Xs(t){t.return!==null&&(Ja(t,1),Ho(t,1,0))}function Qs(t){for(;t===Ml;)Ml=Wn[--ra],Wn[ra]=null,Yn=Wn[--ra],Wn[ra]=null;for(;t===En;)En=ma[--ga],ma[ga]=null,ja=ma[--ga],ma[ga]=null,Ha=ma[--ga],ma[ga]=null}function jo(t,a){ma[ga++]=Ha,ma[ga++]=ja,ma[ga++]=En,Ha=a.id,ja=a.overflow,En=t}var Ut=null,yt=null,Ye=!1,zn=null,ya=!1,Zs=Error(l(519));function An(t){var a=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xr(fa(a,t)),Zs}function Go(t){var a=t.stateNode,i=t.type,s=t.memoizedProps;switch(a[Rt]=t,a[Ft]=s,i){case"dialog":Ke("cancel",a),Ke("close",a);break;case"iframe":case"object":case"embed":Ke("load",a);break;case"video":case"audio":for(i=0;i<wu.length;i++)Ke(wu[i],a);break;case"source":Ke("error",a);break;case"img":case"image":case"link":Ke("error",a),Ke("load",a);break;case"details":Ke("toggle",a);break;case"input":Ke("invalid",a),ho(a,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ke("invalid",a);break;case"textarea":Ke("invalid",a),fr(a,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||a.textContent===""+i||s.suppressHydrationWarning===!0||py(a.textContent,i)?(s.popover!=null&&(Ke("beforetoggle",a),Ke("toggle",a)),s.onScroll!=null&&Ke("scroll",a),s.onScrollEnd!=null&&Ke("scrollend",a),s.onClick!=null&&(a.onclick=Pa),a=!0):a=!1,a||An(t,!0)}function Vo(t){for(Ut=t.return;Ut;)switch(Ut.tag){case 5:case 31:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:Ut=Ut.return}}function Ci(t){if(t!==Ut)return!1;if(!Ye)return Vo(t),Ye=!0,!1;var a=t.tag,i;if((i=a!==3&&a!==27)&&((i=a===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||hp(t.type,t.memoizedProps)),i=!i),i&&yt&&An(t),Vo(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));yt=$y(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));yt=$y(t)}else a===27?(a=yt,Wi(t.type)?(t=bp,bp=null,yt=t):yt=a):yt=Ut?Va(t.stateNode.nextSibling):null;return!0}function Fn(){yt=Ut=null,Ye=!1}function Ps(){var t=zn;return t!==null&&(wa===null?wa=t:wa.push.apply(wa,t),zn=null),t}function xr(t){zn===null?zn=[t]:zn.push(t)}var Js=R(null),Kn=null,en=null;function Cn(t,a,i){Z(Js,a._currentValue),a._currentValue=i}function tn(t){t._currentValue=Js.current,j(Js)}function eu(t,a,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,s!==null&&(s.childLanes|=a)):s!==null&&(s.childLanes&a)!==a&&(s.childLanes|=a),t===i)break;t=t.return}}function tu(t,a,i,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var $=c.child;h=h.firstContext;e:for(;h!==null;){var O=h;h=c;for(var U=0;U<a.length;U++)if(O.context===a[U]){h.lanes|=i,O=h.alternate,O!==null&&(O.lanes|=i),eu(h.return,i,t),s||($=null);break e}h=O.next}}else if(c.tag===18){if($=c.return,$===null)throw Error(l(341));$.lanes|=i,h=$.alternate,h!==null&&(h.lanes|=i),eu($,i,t),$=null}else $=c.child;if($!==null)$.return=c;else for($=c;$!==null;){if($===t){$=null;break}if(c=$.sibling,c!==null){c.return=$.return,$=c;break}$=$.return}c=$}}function Oi(t,a,i,s){t=null;for(var c=a,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var $=c.alternate;if($===null)throw Error(l(387));if($=$.memoizedProps,$!==null){var O=c.type;na(c.pendingProps.value,$.value)||(t!==null?t.push(O):t=[O])}}else if(c===_e.current){if($=c.alternate,$===null)throw Error(l(387));$.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eu):t=[Eu])}c=c.return}t!==null&&tu(a,t,i,s),a.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!na(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xn(t){Kn=t,en=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return Wo(Kn,t)}function Nl(t,a){return Kn===null&&Xn(t),Wo(t,a)}function Wo(t,a){var i=a._currentValue;if(a={context:a,memoizedValue:i,next:null},en===null){if(t===null)throw Error(l(308));en=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else en=en.next=a;return i}var ad=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){a.aborted=!0,t.forEach(function(i){return i()})}},nd=e.unstable_scheduleCallback,id=e.unstable_NormalPriority,_t={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dl(){return{controller:new ad,data:new Map,refCount:0}}function ki(t){t.refCount--,t.refCount===0&&nd(id,function(){t.controller.abort()})}var p=null,y=0,x=0,w=null;function k(t,a){if(p===null){var i=p=[];y=0,x=rp(),w={status:"pending",value:void 0,then:function(s){i.push(s)}}}return y++,a.then(B,B),a}function B(){if(--y===0&&p!==null){w!==null&&(w.status="fulfilled");var t=p;p=null,x=0,w=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function W(t,a){var i=[],s={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return t.then(function(){s.status="fulfilled",s.value=a;for(var c=0;c<i.length;c++)(0,i[c])(a)},function(c){for(s.status="rejected",s.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),s}var ae=H.S;H.S=function(t,a){B0=Jt(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&k(t,a),ae!==null&&ae(t,a)};var ce=R(null);function be(){var t=ce.current;return t!==null?t:vt.pooledCache}function Re(t,a){a===null?Z(ce,ce.current):Z(ce,a.pool)}function We(){var t=be();return t===null?null:{parent:_t._currentValue,pool:t}}var Qe=Error(l(460)),rt=Error(l(474)),Ea=Error(l(542)),Mi={then:function(){}};function Yo(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Il(t,a,i){switch(i=t[i],i===void 0?t.push(a):i!==a&&(a.then(Pa,Pa),a=i),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,rg(t),t;default:if(typeof a.status=="string")a.then(Pa,Pa);else{if(t=vt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=a,t.status="pending",t.then(function(s){if(a.status==="pending"){var c=a;c.status="fulfilled",c.value=s}},function(s){if(a.status==="pending"){var c=a;c.status="rejected",c.reason=s}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,rg(t),t}throw Tr=a,Qe}}function Sr(t){try{var a=t._init;return a(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Tr=i,Qe):i}}var Tr=null;function ig(){if(Tr===null)throw Error(l(459));var t=Tr;return Tr=null,t}function rg(t){if(t===Qe||t===Ea)throw Error(l(483))}var Bl=null,au=0;function Fo(t){var a=au;return au+=1,Bl===null&&(Bl=[]),Il(Bl,t,a)}function nu(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Ko(t,a){throw a.$$typeof===_?Error(l(525)):(t=Object.prototype.toString.call(a),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function lg(t){function a(Y,L){if(t){var F=Y.deletions;F===null?(Y.deletions=[L],Y.flags|=16):F.push(L)}}function i(Y,L){if(!t)return null;for(;L!==null;)a(Y,L),L=L.sibling;return null}function s(Y){for(var L=new Map;Y!==null;)Y.key!==null?L.set(Y.key,Y):L.set(Y.index,Y),Y=Y.sibling;return L}function c(Y,L){return Y=La(Y,L),Y.index=0,Y.sibling=null,Y}function h(Y,L,F){return Y.index=F,t?(F=Y.alternate,F!==null?(F=F.index,F<L?(Y.flags|=67108866,L):F):(Y.flags|=67108866,L)):(Y.flags|=1048576,L)}function $(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function O(Y,L,F,re){return L===null||L.tag!==6?(L=Ol(F,Y.mode,re),L.return=Y,L):(L=c(L,F),L.return=Y,L)}function U(Y,L,F,re){var Ce=F.type;return Ce===E?ie(Y,L,F.props.children,re,F.key):L!==null&&(L.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===C&&Sr(Ce)===L.type)?(L=c(L,F.props),nu(L,F),L.return=Y,L):(L=$r(F.type,F.key,F.props,null,Y.mode,re),nu(L,F),L.return=Y,L)}function K(Y,L,F,re){return L===null||L.tag!==4||L.stateNode.containerInfo!==F.containerInfo||L.stateNode.implementation!==F.implementation?(L=kl(F,Y.mode,re),L.return=Y,L):(L=c(L,F.children||[]),L.return=Y,L)}function ie(Y,L,F,re,Ce){return L===null||L.tag!==7?(L=Tn(F,Y.mode,re,Ce),L.return=Y,L):(L=c(L,F),L.return=Y,L)}function se(Y,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Ol(""+L,Y.mode,F),L.return=Y,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case S:return F=$r(L.type,L.key,L.props,null,Y.mode,F),nu(F,L),F.return=Y,F;case T:return L=kl(L,Y.mode,F),L.return=Y,L;case C:return L=Sr(L),se(Y,L,F)}if(ye(L)||he(L))return L=Tn(L,Y.mode,F,null),L.return=Y,L;if(typeof L.then=="function")return se(Y,Fo(L),F);if(L.$$typeof===D)return se(Y,Nl(Y,L),F);Ko(Y,L)}return null}function Q(Y,L,F,re){var Ce=L!==null?L.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return Ce!==null?null:O(Y,L,""+F,re);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===Ce?U(Y,L,F,re):null;case T:return F.key===Ce?K(Y,L,F,re):null;case C:return F=Sr(F),Q(Y,L,F,re)}if(ye(F)||he(F))return Ce!==null?null:ie(Y,L,F,re,null);if(typeof F.then=="function")return Q(Y,L,Fo(F),re);if(F.$$typeof===D)return Q(Y,L,Nl(Y,F),re);Ko(Y,F)}return null}function ee(Y,L,F,re,Ce){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return Y=Y.get(F)||null,O(L,Y,""+re,Ce);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case S:return Y=Y.get(re.key===null?F:re.key)||null,U(L,Y,re,Ce);case T:return Y=Y.get(re.key===null?F:re.key)||null,K(L,Y,re,Ce);case C:return re=Sr(re),ee(Y,L,F,re,Ce)}if(ye(re)||he(re))return Y=Y.get(F)||null,ie(L,Y,re,Ce,null);if(typeof re.then=="function")return ee(Y,L,F,Fo(re),Ce);if(re.$$typeof===D)return ee(Y,L,F,Nl(L,re),Ce);Ko(L,re)}return null}function xe(Y,L,F,re){for(var Ce=null,tt=null,Ee=L,Ve=L=0,Pe=null;Ee!==null&&Ve<F.length;Ve++){Ee.index>Ve?(Pe=Ee,Ee=null):Pe=Ee.sibling;var at=Q(Y,Ee,F[Ve],re);if(at===null){Ee===null&&(Ee=Pe);break}t&&Ee&&at.alternate===null&&a(Y,Ee),L=h(at,L,Ve),tt===null?Ce=at:tt.sibling=at,tt=at,Ee=Pe}if(Ve===F.length)return i(Y,Ee),Ye&&Ja(Y,Ve),Ce;if(Ee===null){for(;Ve<F.length;Ve++)Ee=se(Y,F[Ve],re),Ee!==null&&(L=h(Ee,L,Ve),tt===null?Ce=Ee:tt.sibling=Ee,tt=Ee);return Ye&&Ja(Y,Ve),Ce}for(Ee=s(Ee);Ve<F.length;Ve++)Pe=ee(Ee,Y,Ve,F[Ve],re),Pe!==null&&(t&&Pe.alternate!==null&&Ee.delete(Pe.key===null?Ve:Pe.key),L=h(Pe,L,Ve),tt===null?Ce=Pe:tt.sibling=Pe,tt=Pe);return t&&Ee.forEach(function(Qi){return a(Y,Qi)}),Ye&&Ja(Y,Ve),Ce}function Me(Y,L,F,re){if(F==null)throw Error(l(151));for(var Ce=null,tt=null,Ee=L,Ve=L=0,Pe=null,at=F.next();Ee!==null&&!at.done;Ve++,at=F.next()){Ee.index>Ve?(Pe=Ee,Ee=null):Pe=Ee.sibling;var Qi=Q(Y,Ee,at.value,re);if(Qi===null){Ee===null&&(Ee=Pe);break}t&&Ee&&Qi.alternate===null&&a(Y,Ee),L=h(Qi,L,Ve),tt===null?Ce=Qi:tt.sibling=Qi,tt=Qi,Ee=Pe}if(at.done)return i(Y,Ee),Ye&&Ja(Y,Ve),Ce;if(Ee===null){for(;!at.done;Ve++,at=F.next())at=se(Y,at.value,re),at!==null&&(L=h(at,L,Ve),tt===null?Ce=at:tt.sibling=at,tt=at);return Ye&&Ja(Y,Ve),Ce}for(Ee=s(Ee);!at.done;Ve++,at=F.next())at=ee(Ee,Y,Ve,at.value,re),at!==null&&(t&&at.alternate!==null&&Ee.delete(at.key===null?Ve:at.key),L=h(at,L,Ve),tt===null?Ce=at:tt.sibling=at,tt=at);return t&&Ee.forEach(function(bT){return a(Y,bT)}),Ye&&Ja(Y,Ve),Ce}function pt(Y,L,F,re){if(typeof F=="object"&&F!==null&&F.type===E&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:e:{for(var Ce=F.key;L!==null;){if(L.key===Ce){if(Ce=F.type,Ce===E){if(L.tag===7){i(Y,L.sibling),re=c(L,F.props.children),re.return=Y,Y=re;break e}}else if(L.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===C&&Sr(Ce)===L.type){i(Y,L.sibling),re=c(L,F.props),nu(re,F),re.return=Y,Y=re;break e}i(Y,L);break}else a(Y,L);L=L.sibling}F.type===E?(re=Tn(F.props.children,Y.mode,re,F.key),re.return=Y,Y=re):(re=$r(F.type,F.key,F.props,null,Y.mode,re),nu(re,F),re.return=Y,Y=re)}return $(Y);case T:e:{for(Ce=F.key;L!==null;){if(L.key===Ce)if(L.tag===4&&L.stateNode.containerInfo===F.containerInfo&&L.stateNode.implementation===F.implementation){i(Y,L.sibling),re=c(L,F.children||[]),re.return=Y,Y=re;break e}else{i(Y,L);break}else a(Y,L);L=L.sibling}re=kl(F,Y.mode,re),re.return=Y,Y=re}return $(Y);case C:return F=Sr(F),pt(Y,L,F,re)}if(ye(F))return xe(Y,L,F,re);if(he(F)){if(Ce=he(F),typeof Ce!="function")throw Error(l(150));return F=Ce.call(F),Me(Y,L,F,re)}if(typeof F.then=="function")return pt(Y,L,Fo(F),re);if(F.$$typeof===D)return pt(Y,L,Nl(Y,F),re);Ko(Y,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,L!==null&&L.tag===6?(i(Y,L.sibling),re=c(L,F),re.return=Y,Y=re):(i(Y,L),re=Ol(F,Y.mode,re),re.return=Y,Y=re),$(Y)):i(Y,L)}return function(Y,L,F,re){try{au=0;var Ce=pt(Y,L,F,re);return Bl=null,Ce}catch(Ee){if(Ee===Qe||Ee===Ea)throw Ee;var tt=ia(29,Ee,null,Y.mode);return tt.lanes=re,tt.return=Y,tt}finally{}}}var Er=lg(!0),sg=lg(!1),Ri=!1;function rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ld(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ni(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Di(t,a,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(lt&2)!==0){var c=s.pending;return c===null?a.next=a:(a.next=c.next,c.next=a),s.pending=a,a=wr(t),Ws(t,null,i),a}return _r(t,s,a,i),wr(t)}function iu(t,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194048)!==0)){var s=a.lanes;s&=t.pendingLanes,i|=s,a.lanes=i,ms(t,i)}}function sd(t,a){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var $={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};h===null?c=h=$:h=h.next=$,i=i.next}while(i!==null);h===null?c=h=a:h=h.next=a}else c=h=a;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=a:t.next=a,i.lastBaseUpdate=a}var ud=!1;function ru(){if(ud){var t=w;if(t!==null)throw t}}function lu(t,a,i,s){ud=!1;var c=t.updateQueue;Ri=!1;var h=c.firstBaseUpdate,$=c.lastBaseUpdate,O=c.shared.pending;if(O!==null){c.shared.pending=null;var U=O,K=U.next;U.next=null,$===null?h=K:$.next=K,$=U;var ie=t.alternate;ie!==null&&(ie=ie.updateQueue,O=ie.lastBaseUpdate,O!==$&&(O===null?ie.firstBaseUpdate=K:O.next=K,ie.lastBaseUpdate=U))}if(h!==null){var se=c.baseState;$=0,ie=K=U=null,O=h;do{var Q=O.lane&-536870913,ee=Q!==O.lane;if(ee?(Ze&Q)===Q:(s&Q)===Q){Q!==0&&Q===x&&(ud=!0),ie!==null&&(ie=ie.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});e:{var xe=t,Me=O;Q=a;var pt=i;switch(Me.tag){case 1:if(xe=Me.payload,typeof xe=="function"){se=xe.call(pt,se,Q);break e}se=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=Me.payload,Q=typeof xe=="function"?xe.call(pt,se,Q):xe,Q==null)break e;se=v({},se,Q);break e;case 2:Ri=!0}}Q=O.callback,Q!==null&&(t.flags|=64,ee&&(t.flags|=8192),ee=c.callbacks,ee===null?c.callbacks=[Q]:ee.push(Q))}else ee={lane:Q,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ie===null?(K=ie=ee,U=se):ie=ie.next=ee,$|=Q;if(O=O.next,O===null){if(O=c.shared.pending,O===null)break;ee=O,O=ee.next,ee.next=null,c.lastBaseUpdate=ee,c.shared.pending=null}}while(!0);ie===null&&(U=se),c.baseState=U,c.firstBaseUpdate=K,c.lastBaseUpdate=ie,h===null&&(c.shared.lanes=0),Li|=$,t.lanes=$,t.memoizedState=se}}function ug(t,a){if(typeof t!="function")throw Error(l(191,t));t.call(a)}function og(t,a){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)ug(i[t],a)}var Ul=R(null),Xo=R(0);function fg(t,a){t=ii,Z(Xo,t),Z(Ul,a),ii=t|a.baseLanes}function od(){Z(Xo,ii),Z(Ul,Ul.current)}function fd(){ii=Xo.current,j(Ul),j(Xo)}var za=R(null),Ga=null;function Ii(t){var a=t.alternate;Z(kt,kt.current&1),Z(za,t),Ga===null&&(a===null||Ul.current!==null||a.memoizedState!==null)&&(Ga=t)}function cd(t){Z(kt,kt.current),Z(za,t),Ga===null&&(Ga=t)}function cg(t){t.tag===22?(Z(kt,kt.current),Z(za,t),Ga===null&&(Ga=t)):Bi()}function Bi(){Z(kt,kt.current),Z(za,za.current)}function Aa(t){j(za),Ga===t&&(Ga=null),j(kt)}var kt=R(0);function Qo(t){for(var a=t;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||yp(i)||vp(i)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Qn=0,je=null,ct=null,Dt=null,Zo=!1,ql=!1,zr=!1,Po=0,su=0,Ll=null,oS=0;function Et(){throw Error(l(321))}function dd(t,a){if(a===null)return!1;for(var i=0;i<a.length&&i<t.length;i++)if(!na(t[i],a[i]))return!1;return!0}function pd(t,a,i,s,c,h){return Qn=h,je=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,H.H=t===null||t.memoizedState===null?Kg:Ad,zr=!1,h=i(s,c),zr=!1,ql&&(h=pg(a,i,s,c)),dg(t),h}function dg(t){H.H=fu;var a=ct!==null&&ct.next!==null;if(Qn=0,Dt=ct=je=null,Zo=!1,su=0,Ll=null,a)throw Error(l(300));t===null||It||(t=t.dependencies,t!==null&&Rl(t)&&(It=!0))}function pg(t,a,i,s){je=t;var c=0;do{if(ql&&(Ll=null),su=0,ql=!1,25<=c)throw Error(l(301));if(c+=1,Dt=ct=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}H.H=Xg,h=a(i,s)}while(ql);return h}function fS(){var t=H.H,a=t.useState()[0];return a=typeof a.then=="function"?uu(a):a,t=t.useState()[0],(ct!==null?ct.memoizedState:null)!==t&&(je.flags|=1024),a}function hd(){var t=Po!==0;return Po=0,t}function md(t,a,i){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~i}function gd(t){if(Zo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Zo=!1}Qn=0,Dt=ct=je=null,ql=!1,su=Po=0,Ll=null}function ca(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?je.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Mt(){if(ct===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var a=Dt===null?je.memoizedState:Dt.next;if(a!==null)Dt=a,ct=t;else{if(t===null)throw je.alternate===null?Error(l(467)):Error(l(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Dt===null?je.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uu(t){var a=su;return su+=1,Ll===null&&(Ll=[]),t=Il(Ll,t,a),a=je,(Dt===null?a.memoizedState:Dt.next)===null&&(a=a.alternate,H.H=a===null||a.memoizedState===null?Kg:Ad),t}function ef(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return uu(t);if(t.$$typeof===D)return qt(t)}throw Error(l(438,String(t)))}function yd(t){var a=null,i=je.updateQueue;if(i!==null&&(a=i.memoCache),a==null){var s=je.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(a={data:s.data.map(function(c){return c.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),i===null&&(i=Jo(),je.updateQueue=i),i.memoCache=a,i=a.data[a.index],i===void 0)for(i=a.data[a.index]=Array(t),s=0;s<t;s++)i[s]=ue;return a.index++,i}function Zn(t,a){return typeof a=="function"?a(t):a}function tf(t){var a=Mt();return vd(a,ct,t)}function vd(t,a,i){var s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=i;var c=t.baseQueue,h=s.pending;if(h!==null){if(c!==null){var $=c.next;c.next=h.next,h.next=$}a.baseQueue=c=h,s.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{a=c.next;var O=$=null,U=null,K=a,ie=!1;do{var se=K.lane&-536870913;if(se!==K.lane?(Ze&se)===se:(Qn&se)===se){var Q=K.revertLane;if(Q===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),se===x&&(ie=!0);else if((Qn&Q)===Q){K=K.next,Q===x&&(ie=!0);continue}else se={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},U===null?(O=U=se,$=h):U=U.next=se,je.lanes|=Q,Li|=Q;se=K.action,zr&&i(h,se),h=K.hasEagerState?K.eagerState:i(h,se)}else Q={lane:se,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},U===null?(O=U=Q,$=h):U=U.next=Q,je.lanes|=se,Li|=se;K=K.next}while(K!==null&&K!==a);if(U===null?$=h:U.next=O,!na(h,t.memoizedState)&&(It=!0,ie&&(i=w,i!==null)))throw i;t.memoizedState=h,t.baseState=$,t.baseQueue=U,s.lastRenderedState=h}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function bd(t){var a=Mt(),i=a.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=t;var s=i.dispatch,c=i.pending,h=a.memoizedState;if(c!==null){i.pending=null;var $=c=c.next;do h=t(h,$.action),$=$.next;while($!==c);na(h,a.memoizedState)||(It=!0),a.memoizedState=h,a.baseQueue===null&&(a.baseState=h),i.lastRenderedState=h}return[h,s]}function hg(t,a,i){var s=je,c=Mt(),h=Ye;if(h){if(i===void 0)throw Error(l(407));i=i()}else i=a();var $=!na((ct||c).memoizedState,i);if($&&(c.memoizedState=i,It=!0),c=c.queue,$d(yg.bind(null,s,c,t),[t]),c.getSnapshot!==a||$||Dt!==null&&Dt.memoizedState.tag&1){if(s.flags|=2048,Hl(9,{destroy:void 0},gg.bind(null,s,c,i,a),null),vt===null)throw Error(l(349));h||(Qn&127)!==0||mg(s,a,i)}return i}function mg(t,a,i){t.flags|=16384,t={getSnapshot:a,value:i},a=je.updateQueue,a===null?(a=Jo(),je.updateQueue=a,a.stores=[t]):(i=a.stores,i===null?a.stores=[t]:i.push(t))}function gg(t,a,i,s){a.value=i,a.getSnapshot=s,vg(a)&&bg(t)}function yg(t,a,i){return i(function(){vg(a)&&bg(t)})}function vg(t){var a=t.getSnapshot;t=t.value;try{var i=a();return!na(t,i)}catch{return!0}}function bg(t){var a=Sn(t,2);a!==null&&$a(a,t,2)}function _d(t){var a=ca();if(typeof t=="function"){var i=t;if(t=i(),zr){Ia(!0);try{i()}finally{Ia(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:t},a}function _g(t,a,i,s){return t.baseState=i,vd(t,ct,typeof s=="function"?s:Zn)}function cS(t,a,i,s,c){if(rf(t))throw Error(l(485));if(t=a.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function($){h.listeners.push($)}};H.T!==null?i(!0):h.isTransition=!1,s(h),i=a.pending,i===null?(h.next=a.pending=h,wg(a,h)):(h.next=i.next,a.pending=i.next=h)}}function wg(t,a){var i=a.action,s=a.payload,c=t.state;if(a.isTransition){var h=H.T,$={};H.T=$;try{var O=i(c,s),U=H.S;U!==null&&U($,O),$g(t,a,O)}catch(K){wd(t,a,K)}finally{h!==null&&$.types!==null&&(h.types=$.types),H.T=h}}else try{h=i(c,s),$g(t,a,h)}catch(K){wd(t,a,K)}}function $g(t,a,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){xg(t,a,s)},function(s){return wd(t,a,s)}):xg(t,a,i)}function xg(t,a,i){a.status="fulfilled",a.value=i,Sg(a),t.state=i,a=t.pending,a!==null&&(i=a.next,i===a?t.pending=null:(i=i.next,a.next=i,wg(t,i)))}function wd(t,a,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do a.status="rejected",a.reason=i,Sg(a),a=a.next;while(a!==s)}t.action=null}function Sg(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Tg(t,a){return a}function Eg(t,a){if(Ye){var i=vt.formState;if(i!==null){e:{var s=je;if(Ye){if(yt){t:{for(var c=yt,h=ya;c.nodeType!==8;){if(!h){c=null;break t}if(c=Va(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){yt=Va(c.nextSibling),s=c.data==="F!";break e}}An(s)}s=!1}s&&(a=i[0])}}return i=ca(),i.memoizedState=i.baseState=a,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tg,lastRenderedState:a},i.queue=s,i=Wg.bind(null,je,s),s.dispatch=i,s=_d(!1),h=zd.bind(null,je,!1,s.queue),s=ca(),c={state:a,dispatch:null,action:t,pending:null},s.queue=c,i=cS.bind(null,je,c,h,i),c.dispatch=i,s.memoizedState=t,[a,i,!1]}function zg(t){var a=Mt();return Ag(a,ct,t)}function Ag(t,a,i){if(a=vd(t,a,Tg)[0],t=tf(Zn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var s=uu(a)}catch($){throw $===Qe?Ea:$}else s=a;a=Mt();var c=a.queue,h=c.dispatch;return i!==a.memoizedState&&(je.flags|=2048,Hl(9,{destroy:void 0},dS.bind(null,c,i),null)),[s,h,t]}function dS(t,a){t.action=a}function Cg(t){var a=Mt(),i=ct;if(i!==null)return Ag(a,i,t);Mt(),a=a.memoizedState,i=Mt();var s=i.queue.dispatch;return i.memoizedState=t,[a,s,!1]}function Hl(t,a,i,s){return t={tag:t,create:i,deps:s,inst:a,next:null},a=je.updateQueue,a===null&&(a=Jo(),je.updateQueue=a),i=a.lastEffect,i===null?a.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,a.lastEffect=t),t}function Og(){return Mt().memoizedState}function af(t,a,i,s){var c=ca();je.flags|=t,c.memoizedState=Hl(1|a,{destroy:void 0},i,s===void 0?null:s)}function nf(t,a,i,s){var c=Mt();s=s===void 0?null:s;var h=c.memoizedState.inst;ct!==null&&s!==null&&dd(s,ct.memoizedState.deps)?c.memoizedState=Hl(a,h,i,s):(je.flags|=t,c.memoizedState=Hl(1|a,h,i,s))}function kg(t,a){af(8390656,8,t,a)}function $d(t,a){nf(2048,8,t,a)}function pS(t){je.flags|=4;var a=je.updateQueue;if(a===null)a=Jo(),je.updateQueue=a,a.events=[t];else{var i=a.events;i===null?a.events=[t]:i.push(t)}}function Mg(t){var a=Mt().memoizedState;return pS({ref:a,nextImpl:t}),function(){if((lt&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}function Rg(t,a){return nf(4,2,t,a)}function Ng(t,a){return nf(4,4,t,a)}function Dg(t,a){if(typeof a=="function"){t=t();var i=a(t);return function(){typeof i=="function"?i():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Ig(t,a,i){i=i!=null?i.concat([t]):null,nf(4,4,Dg.bind(null,a,t),i)}function xd(){}function Bg(t,a){var i=Mt();a=a===void 0?null:a;var s=i.memoizedState;return a!==null&&dd(a,s[1])?s[0]:(i.memoizedState=[t,a],t)}function Ug(t,a){var i=Mt();a=a===void 0?null:a;var s=i.memoizedState;if(a!==null&&dd(a,s[1]))return s[0];if(s=t(),zr){Ia(!0);try{t()}finally{Ia(!1)}}return i.memoizedState=[s,a],s}function Sd(t,a,i){return i===void 0||(Qn&1073741824)!==0&&(Ze&261930)===0?t.memoizedState=a:(t.memoizedState=i,t=q0(),je.lanes|=t,Li|=t,i)}function qg(t,a,i,s){return na(i,a)?i:Ul.current!==null?(t=Sd(t,i,s),na(t,a)||(It=!0),t):(Qn&42)===0||(Qn&1073741824)!==0&&(Ze&261930)===0?(It=!0,t.memoizedState=i):(t=q0(),je.lanes|=t,Li|=t,a)}function Lg(t,a,i,s,c){var h=te.p;te.p=h!==0&&8>h?h:8;var $=H.T,O={};H.T=O,zd(t,!1,a,i);try{var U=c(),K=H.S;if(K!==null&&K(O,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var ie=W(U,s);ou(t,a,ie,ka(t))}else ou(t,a,s,ka(t))}catch(se){ou(t,a,{then:function(){},status:"rejected",reason:se},ka())}finally{te.p=h,$!==null&&O.types!==null&&($.types=O.types),H.T=$}}function hS(){}function Td(t,a,i,s){if(t.tag!==5)throw Error(l(476));var c=Hg(t).queue;Lg(t,c,a,me,i===null?hS:function(){return jg(t),i(s)})}function Hg(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:me},next:null};var i={};return a.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:i},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function jg(t){var a=Hg(t);a.next===null&&(a=t.alternate.memoizedState),ou(t,a.next.queue,{},ka())}function Ed(){return qt(Eu)}function Gg(){return Mt().memoizedState}function Vg(){return Mt().memoizedState}function mS(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var i=ka();t=Ni(i);var s=Di(a,t,i);s!==null&&($a(s,a,i),iu(s,a,i)),a={cache:Dl()},t.payload=a;return}a=a.return}}function gS(t,a,i){var s=ka();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},rf(t)?Yg(a,i):(i=Al(t,a,i,s),i!==null&&($a(i,t,s),Fg(i,a,s)))}function Wg(t,a,i){var s=ka();ou(t,a,i,s)}function ou(t,a,i,s){var c={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(rf(t))Yg(a,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=a.lastRenderedReducer,h!==null))try{var $=a.lastRenderedState,O=h($,i);if(c.hasEagerState=!0,c.eagerState=O,na(O,$))return _r(t,a,c,0),vt===null&&br(),!1}catch{}finally{}if(i=Al(t,a,c,s),i!==null)return $a(i,t,s),Fg(i,a,s),!0}return!1}function zd(t,a,i,s){if(s={lane:2,revertLane:rp(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},rf(t)){if(a)throw Error(l(479))}else a=Al(t,i,s,2),a!==null&&$a(a,t,2)}function rf(t){var a=t.alternate;return t===je||a!==null&&a===je}function Yg(t,a){ql=Zo=!0;var i=t.pending;i===null?a.next=a:(a.next=i.next,i.next=a),t.pending=a}function Fg(t,a,i){if((i&4194048)!==0){var s=a.lanes;s&=t.pendingLanes,i|=s,a.lanes=i,ms(t,i)}}var fu={readContext:qt,use:ef,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useLayoutEffect:Et,useInsertionEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useSyncExternalStore:Et,useId:Et,useHostTransitionStatus:Et,useFormState:Et,useActionState:Et,useOptimistic:Et,useMemoCache:Et,useCacheRefresh:Et};fu.useEffectEvent=Et;var Kg={readContext:qt,use:ef,useCallback:function(t,a){return ca().memoizedState=[t,a===void 0?null:a],t},useContext:qt,useEffect:kg,useImperativeHandle:function(t,a,i){i=i!=null?i.concat([t]):null,af(4194308,4,Dg.bind(null,a,t),i)},useLayoutEffect:function(t,a){return af(4194308,4,t,a)},useInsertionEffect:function(t,a){af(4,2,t,a)},useMemo:function(t,a){var i=ca();a=a===void 0?null:a;var s=t();if(zr){Ia(!0);try{t()}finally{Ia(!1)}}return i.memoizedState=[s,a],s},useReducer:function(t,a,i){var s=ca();if(i!==void 0){var c=i(a);if(zr){Ia(!0);try{i(a)}finally{Ia(!1)}}}else c=a;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=gS.bind(null,je,t),[s.memoizedState,t]},useRef:function(t){var a=ca();return t={current:t},a.memoizedState=t},useState:function(t){t=_d(t);var a=t.queue,i=Wg.bind(null,je,a);return a.dispatch=i,[t.memoizedState,i]},useDebugValue:xd,useDeferredValue:function(t,a){var i=ca();return Sd(i,t,a)},useTransition:function(){var t=_d(!1);return t=Lg.bind(null,je,t.queue,!0,!1),ca().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,i){var s=je,c=ca();if(Ye){if(i===void 0)throw Error(l(407));i=i()}else{if(i=a(),vt===null)throw Error(l(349));(Ze&127)!==0||mg(s,a,i)}c.memoizedState=i;var h={value:i,getSnapshot:a};return c.queue=h,kg(yg.bind(null,s,h,t),[t]),s.flags|=2048,Hl(9,{destroy:void 0},gg.bind(null,s,h,i,a),null),i},useId:function(){var t=ca(),a=vt.identifierPrefix;if(Ye){var i=ja,s=Ha;i=(s&~(1<<32-Yt(s)-1)).toString(32)+i,a="_"+a+"R_"+i,i=Po++,0<i&&(a+="H"+i.toString(32)),a+="_"}else i=oS++,a="_"+a+"r_"+i.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Ed,useFormState:Eg,useActionState:Eg,useOptimistic:function(t){var a=ca();a.memoizedState=a.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=i,a=zd.bind(null,je,!0,i),i.dispatch=a,[t,a]},useMemoCache:yd,useCacheRefresh:function(){return ca().memoizedState=mS.bind(null,je)},useEffectEvent:function(t){var a=ca(),i={impl:t};return a.memoizedState=i,function(){if((lt&2)!==0)throw Error(l(440));return i.impl.apply(void 0,arguments)}}},Ad={readContext:qt,use:ef,useCallback:Bg,useContext:qt,useEffect:$d,useImperativeHandle:Ig,useInsertionEffect:Rg,useLayoutEffect:Ng,useMemo:Ug,useReducer:tf,useRef:Og,useState:function(){return tf(Zn)},useDebugValue:xd,useDeferredValue:function(t,a){var i=Mt();return qg(i,ct.memoizedState,t,a)},useTransition:function(){var t=tf(Zn)[0],a=Mt().memoizedState;return[typeof t=="boolean"?t:uu(t),a]},useSyncExternalStore:hg,useId:Gg,useHostTransitionStatus:Ed,useFormState:zg,useActionState:zg,useOptimistic:function(t,a){var i=Mt();return _g(i,ct,t,a)},useMemoCache:yd,useCacheRefresh:Vg};Ad.useEffectEvent=Mg;var Xg={readContext:qt,use:ef,useCallback:Bg,useContext:qt,useEffect:$d,useImperativeHandle:Ig,useInsertionEffect:Rg,useLayoutEffect:Ng,useMemo:Ug,useReducer:bd,useRef:Og,useState:function(){return bd(Zn)},useDebugValue:xd,useDeferredValue:function(t,a){var i=Mt();return ct===null?Sd(i,t,a):qg(i,ct.memoizedState,t,a)},useTransition:function(){var t=bd(Zn)[0],a=Mt().memoizedState;return[typeof t=="boolean"?t:uu(t),a]},useSyncExternalStore:hg,useId:Gg,useHostTransitionStatus:Ed,useFormState:Cg,useActionState:Cg,useOptimistic:function(t,a){var i=Mt();return ct!==null?_g(i,ct,t,a):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:yd,useCacheRefresh:Vg};Xg.useEffectEvent=Mg;function Cd(t,a,i,s){a=t.memoizedState,i=i(s,a),i=i==null?a:v({},a,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Od={enqueueSetState:function(t,a,i){t=t._reactInternals;var s=ka(),c=Ni(s);c.payload=a,i!=null&&(c.callback=i),a=Di(t,c,s),a!==null&&($a(a,t,s),iu(a,t,s))},enqueueReplaceState:function(t,a,i){t=t._reactInternals;var s=ka(),c=Ni(s);c.tag=1,c.payload=a,i!=null&&(c.callback=i),a=Di(t,c,s),a!==null&&($a(a,t,s),iu(a,t,s))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var i=ka(),s=Ni(i);s.tag=2,a!=null&&(s.callback=a),a=Di(t,s,i),a!==null&&($a(a,t,i),iu(a,t,i))}};function Qg(t,a,i,s,c,h,$){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,$):a.prototype&&a.prototype.isPureReactComponent?!Ie(i,s)||!Ie(c,h):!0}function Zg(t,a,i,s){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,s),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,s),a.state!==t&&Od.enqueueReplaceState(a,a.state,null)}function Ar(t,a){var i=a;if("ref"in a){i={};for(var s in a)s!=="ref"&&(i[s]=a[s])}if(t=t.defaultProps){i===a&&(i=v({},i));for(var c in t)i[c]===void 0&&(i[c]=t[c])}return i}function Pg(t){vr(t)}function Jg(t){console.error(t)}function e0(t){vr(t)}function lf(t,a){try{var i=t.onUncaughtError;i(a.value,{componentStack:a.stack})}catch(s){setTimeout(function(){throw s})}}function t0(t,a,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function kd(t,a,i){return i=Ni(i),i.tag=3,i.payload={element:null},i.callback=function(){lf(t,a)},i}function a0(t){return t=Ni(t),t.tag=3,t}function n0(t,a,i,s){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var h=s.value;t.payload=function(){return c(h)},t.callback=function(){t0(a,i,s)}}var $=i.stateNode;$!==null&&typeof $.componentDidCatch=="function"&&(t.callback=function(){t0(a,i,s),typeof c!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var O=s.stack;this.componentDidCatch(s.value,{componentStack:O!==null?O:""})})}function yS(t,a,i,s,c){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(a=i.alternate,a!==null&&Oi(a,i,c,!0),i=za.current,i!==null){switch(i.tag){case 31:case 13:return Ga===null?vf():i.alternate===null&&zt===0&&(zt=3),i.flags&=-257,i.flags|=65536,i.lanes=c,s===Mi?i.flags|=16384:(a=i.updateQueue,a===null?i.updateQueue=new Set([s]):a.add(s),ap(t,s,c)),!1;case 22:return i.flags|=65536,s===Mi?i.flags|=16384:(a=i.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=a):(i=a.retryQueue,i===null?a.retryQueue=new Set([s]):i.add(s)),ap(t,s,c)),!1}throw Error(l(435,i.tag))}return ap(t,s,c),vf(),!1}if(Ye)return a=za.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=c,s!==Zs&&(t=Error(l(422),{cause:s}),xr(fa(t,i)))):(s!==Zs&&(a=Error(l(423),{cause:s}),xr(fa(a,i))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=fa(s,i),c=kd(t.stateNode,s,c),sd(t,c),zt!==4&&(zt=2)),!1;var h=Error(l(520),{cause:s});if(h=fa(h,i),vu===null?vu=[h]:vu.push(h),zt!==4&&(zt=2),a===null)return!0;s=fa(s,i),i=a;do{switch(i.tag){case 3:return i.flags|=65536,t=c&-c,i.lanes|=t,t=kd(i.stateNode,s,t),sd(i,t),!1;case 1:if(a=i.type,h=i.stateNode,(i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Hi===null||!Hi.has(h))))return i.flags|=65536,c&=-c,i.lanes|=c,c=a0(c),n0(c,t,i,s),sd(i,c),!1}i=i.return}while(i!==null);return!1}var Md=Error(l(461)),It=!1;function Xt(t,a,i,s){a.child=t===null?sg(a,null,i,s):Er(a,t.child,i,s)}function i0(t,a,i,s,c){i=i.render;var h=a.ref;if("ref"in s){var $={};for(var O in s)O!=="ref"&&($[O]=s[O])}else $=s;return Xn(a),s=pd(t,a,i,$,h,c),O=hd(),t!==null&&!It?(md(t,a,c),Pn(t,a,c)):(Ye&&O&&Xs(a),a.flags|=1,Xt(t,a,s,c),a.child)}function r0(t,a,i,s,c){if(t===null){var h=i.type;return typeof h=="function"&&!Cl(h)&&h.defaultProps===void 0&&i.compare===null?(a.tag=15,a.type=h,l0(t,a,h,s,c)):(t=$r(i.type,null,s,a,a.mode,c),t.ref=a.ref,t.return=a,a.child=t)}if(h=t.child,!Ld(t,c)){var $=h.memoizedProps;if(i=i.compare,i=i!==null?i:Ie,i($,s)&&t.ref===a.ref)return Pn(t,a,c)}return a.flags|=1,t=La(h,s),t.ref=a.ref,t.return=a,a.child=t}function l0(t,a,i,s,c){if(t!==null){var h=t.memoizedProps;if(Ie(h,s)&&t.ref===a.ref)if(It=!1,a.pendingProps=s=h,Ld(t,c))(t.flags&131072)!==0&&(It=!0);else return a.lanes=t.lanes,Pn(t,a,c)}return Rd(t,a,i,s,c)}function s0(t,a,i,s){var c=s.children,h=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((a.flags&128)!==0){if(h=h!==null?h.baseLanes|i:i,t!==null){for(s=a.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~h}else s=0,a.child=null;return u0(t,a,h,i,s)}if((i&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Re(a,h!==null?h.cachePool:null),h!==null?fg(a,h):od(),cg(a);else return s=a.lanes=536870912,u0(t,a,h!==null?h.baseLanes|i:i,i,s)}else h!==null?(Re(a,h.cachePool),fg(a,h),Bi(),a.memoizedState=null):(t!==null&&Re(a,null),od(),Bi());return Xt(t,a,c,i),a.child}function cu(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function u0(t,a,i,s,c){var h=be();return h=h===null?null:{parent:_t._currentValue,pool:h},a.memoizedState={baseLanes:i,cachePool:h},t!==null&&Re(a,null),od(),cg(a),t!==null&&Oi(t,a,s,!0),a.childLanes=c,null}function sf(t,a){return a=of({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function o0(t,a,i){return Er(a,t.child,null,i),t=sf(a,a.pendingProps),t.flags|=2,Aa(a),a.memoizedState=null,t}function vS(t,a,i){var s=a.pendingProps,c=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Ye){if(s.mode==="hidden")return t=sf(a,s),a.lanes=536870912,cu(null,t);if(cd(a),(t=yt)?(t=wy(t,ya),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:En!==null?{id:Ha,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},i=Fs(t),i.return=a,a.child=i,Ut=a,yt=null)):t=null,t===null)throw An(a);return a.lanes=536870912,null}return sf(a,s)}var h=t.memoizedState;if(h!==null){var $=h.dehydrated;if(cd(a),c)if(a.flags&256)a.flags&=-257,a=o0(t,a,i);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(l(558));else if(It||Oi(t,a,i,!1),c=(i&t.childLanes)!==0,It||c){if(s=vt,s!==null&&($=gs(s,i),$!==0&&$!==h.retryLane))throw h.retryLane=$,Sn(t,$),$a(s,t,$),Md;vf(),a=o0(t,a,i)}else t=h.treeContext,yt=Va($.nextSibling),Ut=a,Ye=!0,zn=null,ya=!1,t!==null&&jo(a,t),a=sf(a,s),a.flags|=4096;return a}return t=La(t.child,{mode:s.mode,children:s.children}),t.ref=a.ref,a.child=t,t.return=a,t}function uf(t,a){var i=a.ref;if(i===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(t===null||t.ref!==i)&&(a.flags|=4194816)}}function Rd(t,a,i,s,c){return Xn(a),i=pd(t,a,i,s,void 0,c),s=hd(),t!==null&&!It?(md(t,a,c),Pn(t,a,c)):(Ye&&s&&Xs(a),a.flags|=1,Xt(t,a,i,c),a.child)}function f0(t,a,i,s,c,h){return Xn(a),a.updateQueue=null,i=pg(a,s,i,c),dg(t),s=hd(),t!==null&&!It?(md(t,a,h),Pn(t,a,h)):(Ye&&s&&Xs(a),a.flags|=1,Xt(t,a,i,h),a.child)}function c0(t,a,i,s,c){if(Xn(a),a.stateNode===null){var h=Vn,$=i.contextType;typeof $=="object"&&$!==null&&(h=qt($)),h=new i(s,h),a.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Od,a.stateNode=h,h._reactInternals=a,h=a.stateNode,h.props=s,h.state=a.memoizedState,h.refs={},rd(a),$=i.contextType,h.context=typeof $=="object"&&$!==null?qt($):Vn,h.state=a.memoizedState,$=i.getDerivedStateFromProps,typeof $=="function"&&(Cd(a,i,$,s),h.state=a.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||($=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),$!==h.state&&Od.enqueueReplaceState(h,h.state,null),lu(a,s,h,c),ru(),h.state=a.memoizedState),typeof h.componentDidMount=="function"&&(a.flags|=4194308),s=!0}else if(t===null){h=a.stateNode;var O=a.memoizedProps,U=Ar(i,O);h.props=U;var K=h.context,ie=i.contextType;$=Vn,typeof ie=="object"&&ie!==null&&($=qt(ie));var se=i.getDerivedStateFromProps;ie=typeof se=="function"||typeof h.getSnapshotBeforeUpdate=="function",O=a.pendingProps!==O,ie||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(O||K!==$)&&Zg(a,h,s,$),Ri=!1;var Q=a.memoizedState;h.state=Q,lu(a,s,h,c),ru(),K=a.memoizedState,O||Q!==K||Ri?(typeof se=="function"&&(Cd(a,i,se,s),K=a.memoizedState),(U=Ri||Qg(a,i,U,s,Q,K,$))?(ie||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(a.flags|=4194308)):(typeof h.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=s,a.memoizedState=K),h.props=s,h.state=K,h.context=$,s=U):(typeof h.componentDidMount=="function"&&(a.flags|=4194308),s=!1)}else{h=a.stateNode,ld(t,a),$=a.memoizedProps,ie=Ar(i,$),h.props=ie,se=a.pendingProps,Q=h.context,K=i.contextType,U=Vn,typeof K=="object"&&K!==null&&(U=qt(K)),O=i.getDerivedStateFromProps,(K=typeof O=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||($!==se||Q!==U)&&Zg(a,h,s,U),Ri=!1,Q=a.memoizedState,h.state=Q,lu(a,s,h,c),ru();var ee=a.memoizedState;$!==se||Q!==ee||Ri||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof O=="function"&&(Cd(a,i,O,s),ee=a.memoizedState),(ie=Ri||Qg(a,i,ie,s,Q,ee,U)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(K||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ee,U),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ee,U)),typeof h.componentDidUpdate=="function"&&(a.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof h.componentDidUpdate!="function"||$===t.memoizedProps&&Q===t.memoizedState||(a.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Q===t.memoizedState||(a.flags|=1024),a.memoizedProps=s,a.memoizedState=ee),h.props=s,h.state=ee,h.context=U,s=ie):(typeof h.componentDidUpdate!="function"||$===t.memoizedProps&&Q===t.memoizedState||(a.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||$===t.memoizedProps&&Q===t.memoizedState||(a.flags|=1024),s=!1)}return h=s,uf(t,a),s=(a.flags&128)!==0,h||s?(h=a.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:h.render(),a.flags|=1,t!==null&&s?(a.child=Er(a,t.child,null,c),a.child=Er(a,null,i,c)):Xt(t,a,i,c),a.memoizedState=h.state,t=a.child):t=Pn(t,a,c),t}function d0(t,a,i,s){return Fn(),a.flags|=256,Xt(t,a,i,s),a.child}var Nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dd(t){return{baseLanes:t,cachePool:We()}}function Id(t,a,i){return t=t!==null?t.childLanes&~i:0,a&&(t|=Oa),t}function p0(t,a,i){var s=a.pendingProps,c=!1,h=(a.flags&128)!==0,$;if(($=h)||($=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),$&&(c=!0,a.flags&=-129),$=(a.flags&32)!==0,a.flags&=-33,t===null){if(Ye){if(c?Ii(a):Bi(),(t=yt)?(t=wy(t,ya),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:En!==null?{id:Ha,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},i=Fs(t),i.return=a,a.child=i,Ut=a,yt=null)):t=null,t===null)throw An(a);return vp(t)?a.lanes=32:a.lanes=536870912,null}var O=s.children;return s=s.fallback,c?(Bi(),c=a.mode,O=of({mode:"hidden",children:O},c),s=Tn(s,c,i,null),O.return=a,s.return=a,O.sibling=s,a.child=O,s=a.child,s.memoizedState=Dd(i),s.childLanes=Id(t,$,i),a.memoizedState=Nd,cu(null,s)):(Ii(a),Bd(a,O))}var U=t.memoizedState;if(U!==null&&(O=U.dehydrated,O!==null)){if(h)a.flags&256?(Ii(a),a.flags&=-257,a=Ud(t,a,i)):a.memoizedState!==null?(Bi(),a.child=t.child,a.flags|=128,a=null):(Bi(),O=s.fallback,c=a.mode,s=of({mode:"visible",children:s.children},c),O=Tn(O,c,i,null),O.flags|=2,s.return=a,O.return=a,s.sibling=O,a.child=s,Er(a,t.child,null,i),s=a.child,s.memoizedState=Dd(i),s.childLanes=Id(t,$,i),a.memoizedState=Nd,a=cu(null,s));else if(Ii(a),vp(O)){if($=O.nextSibling&&O.nextSibling.dataset,$)var K=$.dgst;$=K,s=Error(l(419)),s.stack="",s.digest=$,xr({value:s,source:null,stack:null}),a=Ud(t,a,i)}else if(It||Oi(t,a,i,!1),$=(i&t.childLanes)!==0,It||$){if($=vt,$!==null&&(s=gs($,i),s!==0&&s!==U.retryLane))throw U.retryLane=s,Sn(t,s),$a($,t,s),Md;yp(O)||vf(),a=Ud(t,a,i)}else yp(O)?(a.flags|=192,a.child=t.child,a=null):(t=U.treeContext,yt=Va(O.nextSibling),Ut=a,Ye=!0,zn=null,ya=!1,t!==null&&jo(a,t),a=Bd(a,s.children),a.flags|=4096);return a}return c?(Bi(),O=s.fallback,c=a.mode,U=t.child,K=U.sibling,s=La(U,{mode:"hidden",children:s.children}),s.subtreeFlags=U.subtreeFlags&65011712,K!==null?O=La(K,O):(O=Tn(O,c,i,null),O.flags|=2),O.return=a,s.return=a,s.sibling=O,a.child=s,cu(null,s),s=a.child,O=t.child.memoizedState,O===null?O=Dd(i):(c=O.cachePool,c!==null?(U=_t._currentValue,c=c.parent!==U?{parent:U,pool:U}:c):c=We(),O={baseLanes:O.baseLanes|i,cachePool:c}),s.memoizedState=O,s.childLanes=Id(t,$,i),a.memoizedState=Nd,cu(t.child,s)):(Ii(a),i=t.child,t=i.sibling,i=La(i,{mode:"visible",children:s.children}),i.return=a,i.sibling=null,t!==null&&($=a.deletions,$===null?(a.deletions=[t],a.flags|=16):$.push(t)),a.child=i,a.memoizedState=null,i)}function Bd(t,a){return a=of({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function of(t,a){return t=ia(22,t,null,a),t.lanes=0,t}function Ud(t,a,i){return Er(a,t.child,null,i),t=Bd(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function h0(t,a,i){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a),eu(t.return,a,i)}function qd(t,a,i,s,c,h){var $=t.memoizedState;$===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c,treeForkCount:h}:($.isBackwards=a,$.rendering=null,$.renderingStartTime=0,$.last=s,$.tail=i,$.tailMode=c,$.treeForkCount=h)}function m0(t,a,i){var s=a.pendingProps,c=s.revealOrder,h=s.tail;s=s.children;var $=kt.current,O=($&2)!==0;if(O?($=$&1|2,a.flags|=128):$&=1,Z(kt,$),Xt(t,a,s,i),s=Ye?Yn:0,!O&&t!==null&&(t.flags&128)!==0)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,i,a);else if(t.tag===19)h0(t,i,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(i=a.child,c=null;i!==null;)t=i.alternate,t!==null&&Qo(t)===null&&(c=i),i=i.sibling;i=c,i===null?(c=a.child,a.child=null):(c=i.sibling,i.sibling=null),qd(a,!1,c,i,h,s);break;case"backwards":case"unstable_legacy-backwards":for(i=null,c=a.child,a.child=null;c!==null;){if(t=c.alternate,t!==null&&Qo(t)===null){a.child=c;break}t=c.sibling,c.sibling=i,i=c,c=t}qd(a,!0,i,null,h,s);break;case"together":qd(a,!1,null,null,void 0,s);break;default:a.memoizedState=null}return a.child}function Pn(t,a,i){if(t!==null&&(a.dependencies=t.dependencies),Li|=a.lanes,(i&a.childLanes)===0)if(t!==null){if(Oi(t,a,i,!1),(i&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(l(153));if(a.child!==null){for(t=a.child,i=La(t,t.pendingProps),a.child=i,i.return=a;t.sibling!==null;)t=t.sibling,i=i.sibling=La(t,t.pendingProps),i.return=a;i.sibling=null}return a.child}function Ld(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function bS(t,a,i){switch(a.tag){case 3:Ge(a,a.stateNode.containerInfo),Cn(a,_t,t.memoizedState.cache),Fn();break;case 27:case 5:bt(a);break;case 4:Ge(a,a.stateNode.containerInfo);break;case 10:Cn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,cd(a),null;break;case 13:var s=a.memoizedState;if(s!==null)return s.dehydrated!==null?(Ii(a),a.flags|=128,null):(i&a.child.childLanes)!==0?p0(t,a,i):(Ii(a),t=Pn(t,a,i),t!==null?t.sibling:null);Ii(a);break;case 19:var c=(t.flags&128)!==0;if(s=(i&a.childLanes)!==0,s||(Oi(t,a,i,!1),s=(i&a.childLanes)!==0),c){if(s)return m0(t,a,i);a.flags|=128}if(c=a.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Z(kt,kt.current),s)break;return null;case 22:return a.lanes=0,s0(t,a,i,a.pendingProps);case 24:Cn(a,_t,t.memoizedState.cache)}return Pn(t,a,i)}function g0(t,a,i){if(t!==null)if(t.memoizedProps!==a.pendingProps)It=!0;else{if(!Ld(t,i)&&(a.flags&128)===0)return It=!1,bS(t,a,i);It=(t.flags&131072)!==0}else It=!1,Ye&&(a.flags&1048576)!==0&&Ho(a,Yn,a.index);switch(a.lanes=0,a.tag){case 16:e:{var s=a.pendingProps;if(t=Sr(a.elementType),a.type=t,typeof t=="function")Cl(t)?(s=Ar(t,s),a.tag=1,a=c0(null,a,t,s,i)):(a.tag=0,a=Rd(null,a,t,s,i));else{if(t!=null){var c=t.$$typeof;if(c===N){a.tag=11,a=i0(null,a,t,s,i);break e}else if(c===q){a.tag=14,a=r0(null,a,t,s,i);break e}}throw a=X(t)||t,Error(l(306,a,""))}}return a;case 0:return Rd(t,a,a.type,a.pendingProps,i);case 1:return s=a.type,c=Ar(s,a.pendingProps),c0(t,a,s,c,i);case 3:e:{if(Ge(a,a.stateNode.containerInfo),t===null)throw Error(l(387));s=a.pendingProps;var h=a.memoizedState;c=h.element,ld(t,a),lu(a,s,null,i);var $=a.memoizedState;if(s=$.cache,Cn(a,_t,s),s!==h.cache&&tu(a,[_t],i,!0),ru(),s=$.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:$.cache},a.updateQueue.baseState=h,a.memoizedState=h,a.flags&256){a=d0(t,a,s,i);break e}else if(s!==c){c=fa(Error(l(424)),a),xr(c),a=d0(t,a,s,i);break e}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(yt=Va(t.firstChild),Ut=a,Ye=!0,zn=null,ya=!0,i=sg(a,null,s,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Fn(),s===c){a=Pn(t,a,i);break e}Xt(t,a,s,i)}a=a.child}return a;case 26:return uf(t,a),t===null?(i=zy(a.type,null,a.pendingProps,null))?a.memoizedState=i:Ye||(i=a.type,t=a.pendingProps,s=Tf(ve.current).createElement(i),s[Rt]=a,s[Ft]=t,Qt(s,i,t),Ct(s),a.stateNode=s):a.memoizedState=zy(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return bt(a),t===null&&Ye&&(s=a.stateNode=Sy(a.type,a.pendingProps,ve.current),Ut=a,ya=!0,c=yt,Wi(a.type)?(bp=c,yt=Va(s.firstChild)):yt=c),Xt(t,a,a.pendingProps.children,i),uf(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Ye&&((c=s=yt)&&(s=XS(s,a.type,a.pendingProps,ya),s!==null?(a.stateNode=s,Ut=a,yt=Va(s.firstChild),ya=!1,c=!0):c=!1),c||An(a)),bt(a),c=a.type,h=a.pendingProps,$=t!==null?t.memoizedProps:null,s=h.children,hp(c,h)?s=null:$!==null&&hp(c,$)&&(a.flags|=32),a.memoizedState!==null&&(c=pd(t,a,fS,null,null,i),Eu._currentValue=c),uf(t,a),Xt(t,a,s,i),a.child;case 6:return t===null&&Ye&&((t=i=yt)&&(i=QS(i,a.pendingProps,ya),i!==null?(a.stateNode=i,Ut=a,yt=null,t=!0):t=!1),t||An(a)),null;case 13:return p0(t,a,i);case 4:return Ge(a,a.stateNode.containerInfo),s=a.pendingProps,t===null?a.child=Er(a,null,s,i):Xt(t,a,s,i),a.child;case 11:return i0(t,a,a.type,a.pendingProps,i);case 7:return Xt(t,a,a.pendingProps,i),a.child;case 8:return Xt(t,a,a.pendingProps.children,i),a.child;case 12:return Xt(t,a,a.pendingProps.children,i),a.child;case 10:return s=a.pendingProps,Cn(a,a.type,s.value),Xt(t,a,s.children,i),a.child;case 9:return c=a.type._context,s=a.pendingProps.children,Xn(a),c=qt(c),s=s(c),a.flags|=1,Xt(t,a,s,i),a.child;case 14:return r0(t,a,a.type,a.pendingProps,i);case 15:return l0(t,a,a.type,a.pendingProps,i);case 19:return m0(t,a,i);case 31:return vS(t,a,i);case 22:return s0(t,a,i,a.pendingProps);case 24:return Xn(a),s=qt(_t),t===null?(c=be(),c===null&&(c=vt,h=Dl(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=i),c=h),a.memoizedState={parent:s,cache:c},rd(a),Cn(a,_t,c)):((t.lanes&i)!==0&&(ld(t,a),lu(a,null,null,i),ru()),c=t.memoizedState,h=a.memoizedState,c.parent!==s?(c={parent:s,cache:s},a.memoizedState=c,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=c),Cn(a,_t,s)):(s=h.cache,Cn(a,_t,s),s!==c.cache&&tu(a,[_t],i,!0))),Xt(t,a,a.pendingProps.children,i),a.child;case 29:throw a.pendingProps}throw Error(l(156,a.tag))}function Jn(t){t.flags|=4}function Hd(t,a,i,s,c){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(G0())t.flags|=8192;else throw Tr=Mi,rt}else t.flags&=-16777217}function y0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!My(a))if(G0())t.flags|=8192;else throw Tr=Mi,rt}function ff(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?ps():536870912,t.lanes|=a,Wl|=a)}function du(t,a){if(!Ye)switch(t.tailMode){case"hidden":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function wt(t){var a=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(a)for(var c=t.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=i,a}function _S(t,a,i){var s=a.pendingProps;switch(Qs(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(a),null;case 1:return wt(a),null;case 3:return i=a.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),tn(_t),Be(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ci(a)?Jn(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ps())),wt(a),null;case 26:var c=a.type,h=a.memoizedState;return t===null?(Jn(a),h!==null?(wt(a),y0(a,h)):(wt(a),Hd(a,c,null,s,i))):h?h!==t.memoizedState?(Jn(a),wt(a),y0(a,h)):(wt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==s&&Jn(a),wt(a),Hd(a,c,t,s,i)),null;case 27:if(st(a),i=ve.current,c=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==s&&Jn(a);else{if(!s){if(a.stateNode===null)throw Error(l(166));return wt(a),null}t=G.current,Ci(a)?Go(a):(t=Sy(c,s,i),a.stateNode=t,Jn(a))}return wt(a),null;case 5:if(st(a),c=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==s&&Jn(a);else{if(!s){if(a.stateNode===null)throw Error(l(166));return wt(a),null}if(h=G.current,Ci(a))Go(a);else{var $=Tf(ve.current);switch(h){case 1:h=$.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=$.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=$.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=$.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=$.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof s.is=="string"?$.createElement("select",{is:s.is}):$.createElement("select"),s.multiple?h.multiple=!0:s.size&&(h.size=s.size);break;default:h=typeof s.is=="string"?$.createElement(c,{is:s.is}):$.createElement(c)}}h[Rt]=a,h[Ft]=s;e:for($=a.child;$!==null;){if($.tag===5||$.tag===6)h.appendChild($.stateNode);else if($.tag!==4&&$.tag!==27&&$.child!==null){$.child.return=$,$=$.child;continue}if($===a)break e;for(;$.sibling===null;){if($.return===null||$.return===a)break e;$=$.return}$.sibling.return=$.return,$=$.sibling}a.stateNode=h;e:switch(Qt(h,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Jn(a)}}return wt(a),Hd(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,i),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==s&&Jn(a);else{if(typeof s!="string"&&a.stateNode===null)throw Error(l(166));if(t=ve.current,Ci(a)){if(t=a.stateNode,i=a.memoizedProps,s=null,c=Ut,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Rt]=a,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||py(t.nodeValue,i)),t||An(a,!0)}else t=Tf(t).createTextNode(s),t[Rt]=a,a.stateNode=t}return wt(a),null;case 31:if(i=a.memoizedState,t===null||t.memoizedState!==null){if(s=Ci(a),i!==null){if(t===null){if(!s)throw Error(l(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(557));t[Rt]=a}else Fn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;wt(a),t=!1}else i=Ps(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return a.flags&256?(Aa(a),a):(Aa(a),null);if((a.flags&128)!==0)throw Error(l(558))}return wt(a),null;case 13:if(s=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ci(a),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(l(318));if(c=a.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[Rt]=a}else Fn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;wt(a),c=!1}else c=Ps(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return a.flags&256?(Aa(a),a):(Aa(a),null)}return Aa(a),(a.flags&128)!==0?(a.lanes=i,a):(i=s!==null,t=t!==null&&t.memoizedState!==null,i&&(s=a.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),h=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==c&&(s.flags|=2048)),i!==t&&i&&(a.child.flags|=8192),ff(a,a.updateQueue),wt(a),null);case 4:return Be(),t===null&&op(a.stateNode.containerInfo),wt(a),null;case 10:return tn(a.type),wt(a),null;case 19:if(j(kt),s=a.memoizedState,s===null)return wt(a),null;if(c=(a.flags&128)!==0,h=s.rendering,h===null)if(c)du(s,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(h=Qo(t),h!==null){for(a.flags|=128,du(s,!1),t=h.updateQueue,a.updateQueue=t,ff(a,t),a.subtreeFlags=0,t=i,i=a.child;i!==null;)Ys(i,t),i=i.sibling;return Z(kt,kt.current&1|2),Ye&&Ja(a,s.treeForkCount),a.child}t=t.sibling}s.tail!==null&&Jt()>mf&&(a.flags|=128,c=!0,du(s,!1),a.lanes=4194304)}else{if(!c)if(t=Qo(h),t!==null){if(a.flags|=128,c=!0,t=t.updateQueue,a.updateQueue=t,ff(a,t),du(s,!0),s.tail===null&&s.tailMode==="hidden"&&!h.alternate&&!Ye)return wt(a),null}else 2*Jt()-s.renderingStartTime>mf&&i!==536870912&&(a.flags|=128,c=!0,du(s,!1),a.lanes=4194304);s.isBackwards?(h.sibling=a.child,a.child=h):(t=s.last,t!==null?t.sibling=h:a.child=h,s.last=h)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Jt(),t.sibling=null,i=kt.current,Z(kt,c?i&1|2:i&1),Ye&&Ja(a,s.treeForkCount),t):(wt(a),null);case 22:case 23:return Aa(a),fd(),s=a.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(a.flags|=8192):s&&(a.flags|=8192),s?(i&536870912)!==0&&(a.flags&128)===0&&(wt(a),a.subtreeFlags&6&&(a.flags|=8192)):wt(a),i=a.updateQueue,i!==null&&ff(a,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048),t!==null&&j(ce),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),tn(_t),wt(a),null;case 25:return null;case 30:return null}throw Error(l(156,a.tag))}function wS(t,a){switch(Qs(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return tn(_t),Be(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return st(a),null;case 31:if(a.memoizedState!==null){if(Aa(a),a.alternate===null)throw Error(l(340));Fn()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Aa(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(l(340));Fn()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return j(kt),null;case 4:return Be(),null;case 10:return tn(a.type),null;case 22:case 23:return Aa(a),fd(),t!==null&&j(ce),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return tn(_t),null;case 25:return null;default:return null}}function v0(t,a){switch(Qs(a),a.tag){case 3:tn(_t),Be();break;case 26:case 27:case 5:st(a);break;case 4:Be();break;case 31:a.memoizedState!==null&&Aa(a);break;case 13:Aa(a);break;case 19:j(kt);break;case 10:tn(a.type);break;case 22:case 23:Aa(a),fd(),t!==null&&j(ce);break;case 24:tn(_t)}}function pu(t,a){try{var i=a.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&t)===t){s=void 0;var h=i.create,$=i.inst;s=h(),$.destroy=s}i=i.next}while(i!==c)}}catch(O){ot(a,a.return,O)}}function Ui(t,a,i){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&t)===t){var $=s.inst,O=$.destroy;if(O!==void 0){$.destroy=void 0,c=a;var U=i,K=O;try{K()}catch(ie){ot(c,U,ie)}}}s=s.next}while(s!==h)}}catch(ie){ot(a,a.return,ie)}}function b0(t){var a=t.updateQueue;if(a!==null){var i=t.stateNode;try{og(a,i)}catch(s){ot(t,t.return,s)}}}function _0(t,a,i){i.props=Ar(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){ot(t,a,s)}}function hu(t,a){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(c){ot(t,a,c)}}function On(t,a){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(c){ot(t,a,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){ot(t,a,c)}else i.current=null}function w0(t){var a=t.type,i=t.memoizedProps,s=t.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(c){ot(t,t.return,c)}}function jd(t,a,i){try{var s=t.stateNode;GS(s,t.type,i,a),s[Ft]=a}catch(c){ot(t,t.return,c)}}function $0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wi(t.type)||t.tag===4}function Gd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,a,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,a?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,a):(a=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,a.appendChild(t),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=Pa));else if(s!==4&&(s===27&&Wi(t.type)&&(i=t.stateNode,a=null),t=t.child,t!==null))for(Vd(t,a,i),t=t.sibling;t!==null;)Vd(t,a,i),t=t.sibling}function cf(t,a,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,a?i.insertBefore(t,a):i.appendChild(t);else if(s!==4&&(s===27&&Wi(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(cf(t,a,i),t=t.sibling;t!==null;)cf(t,a,i),t=t.sibling}function x0(t){var a=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,c=a.attributes;c.length;)a.removeAttributeNode(c[0]);Qt(a,s,i),a[Rt]=t,a[Ft]=i}catch(h){ot(t,t.return,h)}}var ei=!1,Bt=!1,Wd=!1,S0=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function $S(t,a){if(t=t.containerInfo,dp=Mf,t=wl(t),qe(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var $=0,O=-1,U=-1,K=0,ie=0,se=t,Q=null;t:for(;;){for(var ee;se!==i||c!==0&&se.nodeType!==3||(O=$+c),se!==h||s!==0&&se.nodeType!==3||(U=$+s),se.nodeType===3&&($+=se.nodeValue.length),(ee=se.firstChild)!==null;)Q=se,se=ee;for(;;){if(se===t)break t;if(Q===i&&++K===c&&(O=$),Q===h&&++ie===s&&(U=$),(ee=se.nextSibling)!==null)break;se=Q,Q=se.parentNode}se=ee}i=O===-1||U===-1?null:{start:O,end:U}}else i=null}i=i||{start:0,end:0}}else i=null;for(pp={focusedElem:t,selectionRange:i},Mf=!1,Gt=a;Gt!==null;)if(a=Gt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Gt=t;else for(;Gt!==null;){switch(a=Gt,h=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)c=t[i],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,i=a,c=h.memoizedProps,h=h.memoizedState,s=i.stateNode;try{var xe=Ar(i.type,c);t=s.getSnapshotBeforeUpdate(xe,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(Me){ot(i,i.return,Me)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,i=t.nodeType,i===9)gp(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gp(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=a.sibling,t!==null){t.return=a.return,Gt=t;break}Gt=a.return}}function T0(t,a,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:ai(t,i),s&4&&pu(5,i);break;case 1:if(ai(t,i),s&4)if(t=i.stateNode,a===null)try{t.componentDidMount()}catch($){ot(i,i.return,$)}else{var c=Ar(i.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(c,a,t.__reactInternalSnapshotBeforeUpdate)}catch($){ot(i,i.return,$)}}s&64&&b0(i),s&512&&hu(i,i.return);break;case 3:if(ai(t,i),s&64&&(t=i.updateQueue,t!==null)){if(a=null,i.child!==null)switch(i.child.tag){case 27:case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}try{og(t,a)}catch($){ot(i,i.return,$)}}break;case 27:a===null&&s&4&&x0(i);case 26:case 5:ai(t,i),a===null&&s&4&&w0(i),s&512&&hu(i,i.return);break;case 12:ai(t,i);break;case 31:ai(t,i),s&4&&A0(t,i);break;case 13:ai(t,i),s&4&&C0(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=kS.bind(null,i),ZS(t,i))));break;case 22:if(s=i.memoizedState!==null||ei,!s){a=a!==null&&a.memoizedState!==null||Bt,c=ei;var h=Bt;ei=s,(Bt=a)&&!h?ni(t,i,(i.subtreeFlags&8772)!==0):ai(t,i),ei=c,Bt=h}break;case 30:break;default:ai(t,i)}}function E0(t){var a=t.alternate;a!==null&&(t.alternate=null,E0(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&yn(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var xt=null,va=!1;function ti(t,a,i){for(i=i.child;i!==null;)z0(t,a,i),i=i.sibling}function z0(t,a,i){if(ea&&typeof ea.onCommitFiberUnmount=="function")try{ea.onCommitFiberUnmount(gi,i)}catch{}switch(i.tag){case 26:Bt||On(i,a),ti(t,a,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Bt||On(i,a);var s=xt,c=va;Wi(i.type)&&(xt=i.stateNode,va=!1),ti(t,a,i),xu(i.stateNode),xt=s,va=c;break;case 5:Bt||On(i,a);case 6:if(s=xt,c=va,xt=null,ti(t,a,i),xt=s,va=c,xt!==null)if(va)try{(xt.nodeType===9?xt.body:xt.nodeName==="HTML"?xt.ownerDocument.body:xt).removeChild(i.stateNode)}catch(h){ot(i,a,h)}else try{xt.removeChild(i.stateNode)}catch(h){ot(i,a,h)}break;case 18:xt!==null&&(va?(t=xt,by(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Jl(t)):by(xt,i.stateNode));break;case 4:s=xt,c=va,xt=i.stateNode.containerInfo,va=!0,ti(t,a,i),xt=s,va=c;break;case 0:case 11:case 14:case 15:Ui(2,i,a),Bt||Ui(4,i,a),ti(t,a,i);break;case 1:Bt||(On(i,a),s=i.stateNode,typeof s.componentWillUnmount=="function"&&_0(i,a,s)),ti(t,a,i);break;case 21:ti(t,a,i);break;case 22:Bt=(s=Bt)||i.memoizedState!==null,ti(t,a,i),Bt=s;break;default:ti(t,a,i)}}function A0(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Jl(t)}catch(i){ot(a,a.return,i)}}}function C0(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Jl(t)}catch(i){ot(a,a.return,i)}}function xS(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new S0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new S0),a;default:throw Error(l(435,t.tag))}}function df(t,a){var i=xS(t);a.forEach(function(s){if(!i.has(s)){i.add(s);var c=MS.bind(null,t,s);s.then(c,c)}})}function ba(t,a){var i=a.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s],h=t,$=a,O=$;e:for(;O!==null;){switch(O.tag){case 27:if(Wi(O.type)){xt=O.stateNode,va=!1;break e}break;case 5:xt=O.stateNode,va=!1;break e;case 3:case 4:xt=O.stateNode.containerInfo,va=!0;break e}O=O.return}if(xt===null)throw Error(l(160));z0(h,$,c),xt=null,va=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)O0(a,t),a=a.sibling}var an=null;function O0(t,a){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ba(a,t),_a(t),s&4&&(Ui(3,t,t.return),pu(3,t),Ui(5,t,t.return));break;case 1:ba(a,t),_a(t),s&512&&(Bt||i===null||On(i,i.return)),s&64&&ei&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var c=an;if(ba(a,t),_a(t),s&512&&(Bt||i===null||On(i,i.return)),s&4){var h=i!==null?i.memoizedState:null;if(s=t.memoizedState,i===null)if(s===null)if(t.stateNode===null){e:{s=t.type,i=t.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Un]||h[Rt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(s),c.head.insertBefore(h,c.querySelector("head > title"))),Qt(h,s,i),h[Rt]=t,Ct(h),s=h;break e;case"link":var $=Oy("link","href",c).get(s+(i.href||""));if($){for(var O=0;O<$.length;O++)if(h=$[O],h.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&h.getAttribute("rel")===(i.rel==null?null:i.rel)&&h.getAttribute("title")===(i.title==null?null:i.title)&&h.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){$.splice(O,1);break t}}h=c.createElement(s),Qt(h,s,i),c.head.appendChild(h);break;case"meta":if($=Oy("meta","content",c).get(s+(i.content||""))){for(O=0;O<$.length;O++)if(h=$[O],h.getAttribute("content")===(i.content==null?null:""+i.content)&&h.getAttribute("name")===(i.name==null?null:i.name)&&h.getAttribute("property")===(i.property==null?null:i.property)&&h.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&h.getAttribute("charset")===(i.charSet==null?null:i.charSet)){$.splice(O,1);break t}}h=c.createElement(s),Qt(h,s,i),c.head.appendChild(h);break;default:throw Error(l(468,s))}h[Rt]=t,Ct(h),s=h}t.stateNode=s}else ky(c,t.type,t.stateNode);else t.stateNode=Cy(c,s,t.memoizedProps);else h!==s?(h===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):h.count--,s===null?ky(c,t.type,t.stateNode):Cy(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&jd(t,t.memoizedProps,i.memoizedProps)}break;case 27:ba(a,t),_a(t),s&512&&(Bt||i===null||On(i,i.return)),i!==null&&s&4&&jd(t,t.memoizedProps,i.memoizedProps);break;case 5:if(ba(a,t),_a(t),s&512&&(Bt||i===null||On(i,i.return)),t.flags&32){c=t.stateNode;try{bi(c,"")}catch(xe){ot(t,t.return,xe)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,jd(t,c,i!==null?i.memoizedProps:c)),s&1024&&(Wd=!0);break;case 6:if(ba(a,t),_a(t),s&4){if(t.stateNode===null)throw Error(l(162));s=t.memoizedProps,i=t.stateNode;try{i.nodeValue=s}catch(xe){ot(t,t.return,xe)}}break;case 3:if(Af=null,c=an,an=Ef(a.containerInfo),ba(a,t),an=c,_a(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Jl(a.containerInfo)}catch(xe){ot(t,t.return,xe)}Wd&&(Wd=!1,k0(t));break;case 4:s=an,an=Ef(t.stateNode.containerInfo),ba(a,t),_a(t),an=s;break;case 12:ba(a,t),_a(t);break;case 31:ba(a,t),_a(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,df(t,s)));break;case 13:ba(a,t),_a(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(hf=Jt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,df(t,s)));break;case 22:c=t.memoizedState!==null;var U=i!==null&&i.memoizedState!==null,K=ei,ie=Bt;if(ei=K||c,Bt=ie||U,ba(a,t),Bt=ie,ei=K,_a(t),s&8192)e:for(a=t.stateNode,a._visibility=c?a._visibility&-2:a._visibility|1,c&&(i===null||U||ei||Bt||Cr(t)),i=null,a=t;;){if(a.tag===5||a.tag===26){if(i===null){U=i=a;try{if(h=U.stateNode,c)$=h.style,typeof $.setProperty=="function"?$.setProperty("display","none","important"):$.display="none";else{O=U.stateNode;var se=U.memoizedProps.style,Q=se!=null&&se.hasOwnProperty("display")?se.display:null;O.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(xe){ot(U,U.return,xe)}}}else if(a.tag===6){if(i===null){U=a;try{U.stateNode.nodeValue=c?"":U.memoizedProps}catch(xe){ot(U,U.return,xe)}}}else if(a.tag===18){if(i===null){U=a;try{var ee=U.stateNode;c?_y(ee,!0):_y(U.stateNode,!1)}catch(xe){ot(U,U.return,xe)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;i===a&&(i=null),a=a.return}i===a&&(i=null),a.sibling.return=a.return,a=a.sibling}s&4&&(s=t.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,df(t,i))));break;case 19:ba(a,t),_a(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,df(t,s)));break;case 30:break;case 21:break;default:ba(a,t),_a(t)}}function _a(t){var a=t.flags;if(a&2){try{for(var i,s=t.return;s!==null;){if($0(s)){i=s;break}s=s.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var c=i.stateNode,h=Gd(t);cf(t,h,c);break;case 5:var $=i.stateNode;i.flags&32&&(bi($,""),i.flags&=-33);var O=Gd(t);cf(t,O,$);break;case 3:case 4:var U=i.stateNode.containerInfo,K=Gd(t);Vd(t,K,U);break;default:throw Error(l(161))}}catch(ie){ot(t,t.return,ie)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function k0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;k0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function ai(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)T0(t,a.alternate,a),a=a.sibling}function Cr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Ui(4,a,a.return),Cr(a);break;case 1:On(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&_0(a,a.return,i),Cr(a);break;case 27:xu(a.stateNode);case 26:case 5:On(a,a.return),Cr(a);break;case 22:a.memoizedState===null&&Cr(a);break;case 30:Cr(a);break;default:Cr(a)}t=t.sibling}}function ni(t,a,i){for(i=i&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var s=a.alternate,c=t,h=a,$=h.flags;switch(h.tag){case 0:case 11:case 15:ni(c,h,i),pu(4,h);break;case 1:if(ni(c,h,i),s=h,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(K){ot(s,s.return,K)}if(s=h,c=s.updateQueue,c!==null){var O=s.stateNode;try{var U=c.shared.hiddenCallbacks;if(U!==null)for(c.shared.hiddenCallbacks=null,c=0;c<U.length;c++)ug(U[c],O)}catch(K){ot(s,s.return,K)}}i&&$&64&&b0(h),hu(h,h.return);break;case 27:x0(h);case 26:case 5:ni(c,h,i),i&&s===null&&$&4&&w0(h),hu(h,h.return);break;case 12:ni(c,h,i);break;case 31:ni(c,h,i),i&&$&4&&A0(c,h);break;case 13:ni(c,h,i),i&&$&4&&C0(c,h);break;case 22:h.memoizedState===null&&ni(c,h,i),hu(h,h.return);break;case 30:break;default:ni(c,h,i)}a=a.sibling}}function Yd(t,a){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&ki(i))}function Fd(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&ki(t))}function nn(t,a,i,s){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)M0(t,a,i,s),a=a.sibling}function M0(t,a,i,s){var c=a.flags;switch(a.tag){case 0:case 11:case 15:nn(t,a,i,s),c&2048&&pu(9,a);break;case 1:nn(t,a,i,s);break;case 3:nn(t,a,i,s),c&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&ki(t)));break;case 12:if(c&2048){nn(t,a,i,s),t=a.stateNode;try{var h=a.memoizedProps,$=h.id,O=h.onPostCommit;typeof O=="function"&&O($,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(U){ot(a,a.return,U)}}else nn(t,a,i,s);break;case 31:nn(t,a,i,s);break;case 13:nn(t,a,i,s);break;case 23:break;case 22:h=a.stateNode,$=a.alternate,a.memoizedState!==null?h._visibility&2?nn(t,a,i,s):mu(t,a):h._visibility&2?nn(t,a,i,s):(h._visibility|=2,jl(t,a,i,s,(a.subtreeFlags&10256)!==0||!1)),c&2048&&Yd($,a);break;case 24:nn(t,a,i,s),c&2048&&Fd(a.alternate,a);break;default:nn(t,a,i,s)}}function jl(t,a,i,s,c){for(c=c&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var h=t,$=a,O=i,U=s,K=$.flags;switch($.tag){case 0:case 11:case 15:jl(h,$,O,U,c),pu(8,$);break;case 23:break;case 22:var ie=$.stateNode;$.memoizedState!==null?ie._visibility&2?jl(h,$,O,U,c):mu(h,$):(ie._visibility|=2,jl(h,$,O,U,c)),c&&K&2048&&Yd($.alternate,$);break;case 24:jl(h,$,O,U,c),c&&K&2048&&Fd($.alternate,$);break;default:jl(h,$,O,U,c)}a=a.sibling}}function mu(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var i=t,s=a,c=s.flags;switch(s.tag){case 22:mu(i,s),c&2048&&Yd(s.alternate,s);break;case 24:mu(i,s),c&2048&&Fd(s.alternate,s);break;default:mu(i,s)}a=a.sibling}}var gu=8192;function Gl(t,a,i){if(t.subtreeFlags&gu)for(t=t.child;t!==null;)R0(t,a,i),t=t.sibling}function R0(t,a,i){switch(t.tag){case 26:Gl(t,a,i),t.flags&gu&&t.memoizedState!==null&&oT(i,an,t.memoizedState,t.memoizedProps);break;case 5:Gl(t,a,i);break;case 3:case 4:var s=an;an=Ef(t.stateNode.containerInfo),Gl(t,a,i),an=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=gu,gu=16777216,Gl(t,a,i),gu=s):Gl(t,a,i));break;default:Gl(t,a,i)}}function N0(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function yu(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var s=a[i];Gt=s,I0(s,t)}N0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)D0(t),t=t.sibling}function D0(t){switch(t.tag){case 0:case 11:case 15:yu(t),t.flags&2048&&Ui(9,t,t.return);break;case 3:yu(t);break;case 12:yu(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,pf(t)):yu(t);break;default:yu(t)}}function pf(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var s=a[i];Gt=s,I0(s,t)}N0(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Ui(8,a,a.return),pf(a);break;case 22:i=a.stateNode,i._visibility&2&&(i._visibility&=-3,pf(a));break;default:pf(a)}t=t.sibling}}function I0(t,a){for(;Gt!==null;){var i=Gt;switch(i.tag){case 0:case 11:case 15:Ui(8,i,a);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ki(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Gt=s;else e:for(i=t;Gt!==null;){s=Gt;var c=s.sibling,h=s.return;if(E0(s),s===i){Gt=null;break e}if(c!==null){c.return=h,Gt=c;break e}Gt=h}}}var SS={getCacheForType:function(t){var a=qt(_t),i=a.data.get(t);return i===void 0&&(i=t(),a.data.set(t,i)),i},cacheSignal:function(){return qt(_t).controller.signal}},TS=typeof WeakMap=="function"?WeakMap:Map,lt=0,vt=null,Fe=null,Ze=0,ut=0,Ca=null,qi=!1,Vl=!1,Kd=!1,ii=0,zt=0,Li=0,Or=0,Xd=0,Oa=0,Wl=0,vu=null,wa=null,Qd=!1,hf=0,B0=0,mf=1/0,gf=null,Hi=null,Lt=0,ji=null,Yl=null,ri=0,Zd=0,Pd=null,U0=null,bu=0,Jd=null;function ka(){return(lt&2)!==0&&Ze!==0?Ze&-Ze:H.T!==null?rp():ys()}function q0(){if(Oa===0)if((Ze&536870912)===0||Ye){var t=Pr;Pr<<=1,(Pr&3932160)===0&&(Pr=262144),Oa=t}else Oa=536870912;return t=za.current,t!==null&&(t.flags|=32),Oa}function $a(t,a,i){(t===vt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(Fl(t,0),Gi(t,Ze,Oa,!1)),gt(t,i),((lt&2)===0||t!==vt)&&(t===vt&&((lt&2)===0&&(Or|=i),zt===4&&Gi(t,Ze,Oa,!1)),kn(t))}function L0(t,a,i){if((lt&6)!==0)throw Error(l(327));var s=!i&&(a&127)===0&&(a&t.expiredLanes)===0||sr(t,a),c=s?AS(t,a):tp(t,a,!0),h=s;do{if(c===0){Vl&&!s&&Gi(t,a,0,!1);break}else{if(i=t.current.alternate,h&&!ES(i)){c=tp(t,a,!1),h=!1;continue}if(c===2){if(h=a,t.errorRecoveryDisabledLanes&h)var $=0;else $=t.pendingLanes&-536870913,$=$!==0?$:$&536870912?536870912:0;if($!==0){a=$;e:{var O=t;c=vu;var U=O.current.memoizedState.isDehydrated;if(U&&(Fl(O,$).flags|=256),$=tp(O,$,!1),$!==2){if(Kd&&!U){O.errorRecoveryDisabledLanes|=h,Or|=h,c=4;break e}h=wa,wa=c,h!==null&&(wa===null?wa=h:wa.push.apply(wa,h))}c=$}if(h=!1,c!==2)continue}}if(c===1){Fl(t,0),Gi(t,a,0,!0);break}e:{switch(s=t,h=c,h){case 0:case 1:throw Error(l(345));case 4:if((a&4194048)!==a)break;case 6:Gi(s,a,Oa,!qi);break e;case 2:wa=null;break;case 3:case 5:break;default:throw Error(l(329))}if((a&62914560)===a&&(c=hf+300-Jt(),10<c)){if(Gi(s,a,Oa,!qi),lr(s,0,!0)!==0)break e;ri=a,s.timeoutHandle=yy(H0.bind(null,s,i,wa,gf,Qd,a,Oa,Or,Wl,qi,h,"Throttled",-0,0),c);break e}H0(s,i,wa,gf,Qd,a,Oa,Or,Wl,qi,h,null,-0,0)}}break}while(!0);kn(t)}function H0(t,a,i,s,c,h,$,O,U,K,ie,se,Q,ee){if(t.timeoutHandle=-1,se=a.subtreeFlags,se&8192||(se&16785408)===16785408){se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pa},R0(a,h,se);var xe=(h&62914560)===h?hf-Jt():(h&4194048)===h?B0-Jt():0;if(xe=fT(se,xe),xe!==null){ri=h,t.cancelPendingCommit=xe(X0.bind(null,t,a,h,i,s,c,$,O,U,ie,se,null,Q,ee)),Gi(t,h,$,!K);return}}X0(t,a,h,i,s,c,$,O,U)}function ES(t){for(var a=t;;){var i=a.tag;if((i===0||i===11||i===15)&&a.flags&16384&&(i=a.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var c=i[s],h=c.getSnapshot;c=c.value;try{if(!na(h(),c))return!1}catch{return!1}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Gi(t,a,i,s){a&=~Xd,a&=~Or,t.suspendedLanes|=a,t.pingedLanes&=~a,s&&(t.warmLanes|=a),s=t.expirationTimes;for(var c=a;0<c;){var h=31-Yt(c),$=1<<h;s[h]=-1,c&=~$}i!==0&&hs(t,i,a)}function yf(){return(lt&6)===0?(_u(0),!1):!0}function ep(){if(Fe!==null){if(ut===0)var t=Fe.return;else t=Fe,en=Kn=null,gd(t),Bl=null,au=0,t=Fe;for(;t!==null;)v0(t.alternate,t),t=t.return;Fe=null}}function Fl(t,a){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,YS(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ri=0,ep(),vt=t,Fe=i=La(t.current,null),Ze=a,ut=0,Ca=null,qi=!1,Vl=sr(t,a),Kd=!1,Wl=Oa=Xd=Or=Li=zt=0,wa=vu=null,Qd=!1,(a&8)!==0&&(a|=a&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=a;0<s;){var c=31-Yt(s),h=1<<c;a|=t[c],s&=~h}return ii=a,br(),i}function j0(t,a){je=null,H.H=fu,a===Qe||a===Ea?(a=ig(),ut=3):a===rt?(a=ig(),ut=4):ut=a===Md?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ca=a,Fe===null&&(zt=1,lf(t,fa(a,t.current)))}function G0(){var t=za.current;return t===null?!0:(Ze&4194048)===Ze?Ga===null:(Ze&62914560)===Ze||(Ze&536870912)!==0?t===Ga:!1}function V0(){var t=H.H;return H.H=fu,t===null?fu:t}function W0(){var t=H.A;return H.A=SS,t}function vf(){zt=4,qi||(Ze&4194048)!==Ze&&za.current!==null||(Vl=!0),(Li&134217727)===0&&(Or&134217727)===0||vt===null||Gi(vt,Ze,Oa,!1)}function tp(t,a,i){var s=lt;lt|=2;var c=V0(),h=W0();(vt!==t||Ze!==a)&&(gf=null,Fl(t,a)),a=!1;var $=zt;e:do try{if(ut!==0&&Fe!==null){var O=Fe,U=Ca;switch(ut){case 8:ep(),$=6;break e;case 3:case 2:case 9:case 6:za.current===null&&(a=!0);var K=ut;if(ut=0,Ca=null,Kl(t,O,U,K),i&&Vl){$=0;break e}break;default:K=ut,ut=0,Ca=null,Kl(t,O,U,K)}}zS(),$=zt;break}catch(ie){j0(t,ie)}while(!0);return a&&t.shellSuspendCounter++,en=Kn=null,lt=s,H.H=c,H.A=h,Fe===null&&(vt=null,Ze=0,br()),$}function zS(){for(;Fe!==null;)Y0(Fe)}function AS(t,a){var i=lt;lt|=2;var s=V0(),c=W0();vt!==t||Ze!==a?(gf=null,mf=Jt()+500,Fl(t,a)):Vl=sr(t,a);e:do try{if(ut!==0&&Fe!==null){a=Fe;var h=Ca;t:switch(ut){case 1:ut=0,Ca=null,Kl(t,a,h,1);break;case 2:case 9:if(Yo(h)){ut=0,Ca=null,F0(a);break}a=function(){ut!==2&&ut!==9||vt!==t||(ut=7),kn(t)},h.then(a,a);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:Yo(h)?(ut=0,Ca=null,F0(a)):(ut=0,Ca=null,Kl(t,a,h,7));break;case 5:var $=null;switch(Fe.tag){case 26:$=Fe.memoizedState;case 5:case 27:var O=Fe;if($?My($):O.stateNode.complete){ut=0,Ca=null;var U=O.sibling;if(U!==null)Fe=U;else{var K=O.return;K!==null?(Fe=K,bf(K)):Fe=null}break t}}ut=0,Ca=null,Kl(t,a,h,5);break;case 6:ut=0,Ca=null,Kl(t,a,h,6);break;case 8:ep(),zt=6;break e;default:throw Error(l(462))}}CS();break}catch(ie){j0(t,ie)}while(!0);return en=Kn=null,H.H=s,H.A=c,lt=i,Fe!==null?0:(vt=null,Ze=0,br(),zt)}function CS(){for(;Fe!==null&&!no();)Y0(Fe)}function Y0(t){var a=g0(t.alternate,t,ii);t.memoizedProps=t.pendingProps,a===null?bf(t):Fe=a}function F0(t){var a=t,i=a.alternate;switch(a.tag){case 15:case 0:a=f0(i,a,a.pendingProps,a.type,void 0,Ze);break;case 11:a=f0(i,a,a.pendingProps,a.type.render,a.ref,Ze);break;case 5:gd(a);default:v0(i,a),a=Fe=Ys(a,ii),a=g0(i,a,ii)}t.memoizedProps=t.pendingProps,a===null?bf(t):Fe=a}function Kl(t,a,i,s){en=Kn=null,gd(a),Bl=null,au=0;var c=a.return;try{if(yS(t,c,a,i,Ze)){zt=1,lf(t,fa(i,t.current)),Fe=null;return}}catch(h){if(c!==null)throw Fe=c,h;zt=1,lf(t,fa(i,t.current)),Fe=null;return}a.flags&32768?(Ye||s===1?t=!0:Vl||(Ze&536870912)!==0?t=!1:(qi=t=!0,(s===2||s===9||s===3||s===6)&&(s=za.current,s!==null&&s.tag===13&&(s.flags|=16384))),K0(a,t)):bf(a)}function bf(t){var a=t;do{if((a.flags&32768)!==0){K0(a,qi);return}t=a.return;var i=_S(a.alternate,a,ii);if(i!==null){Fe=i;return}if(a=a.sibling,a!==null){Fe=a;return}Fe=a=t}while(a!==null);zt===0&&(zt=5)}function K0(t,a){do{var i=wS(t.alternate,t);if(i!==null){i.flags&=32767,Fe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!a&&(t=t.sibling,t!==null)){Fe=t;return}Fe=t=i}while(t!==null);zt=6,Fe=null}function X0(t,a,i,s,c,h,$,O,U){t.cancelPendingCommit=null;do _f();while(Lt!==0);if((lt&6)!==0)throw Error(l(327));if(a!==null){if(a===t.current)throw Error(l(177));if(h=a.lanes|a.childLanes,h|=zl,oo(t,i,h,$,O,U),t===vt&&(Fe=vt=null,Ze=0),Yl=a,ji=t,ri=i,Zd=h,Pd=c,U0=s,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,RS(In,function(){return ey(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||s){s=H.T,H.T=null,c=te.p,te.p=2,$=lt,lt|=4;try{$S(t,a,i)}finally{lt=$,te.p=c,H.T=s}}Lt=1,Q0(),Z0(),P0()}}function Q0(){if(Lt===1){Lt=0;var t=ji,a=Yl,i=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||i){i=H.T,H.T=null;var s=te.p;te.p=2;var c=lt;lt|=4;try{O0(a,t);var h=pp,$=wl(t.containerInfo),O=h.focusedElem,U=h.selectionRange;if($!==O&&O&&O.ownerDocument&&Ue(O.ownerDocument.documentElement,O)){if(U!==null&&qe(O)){var K=U.start,ie=U.end;if(ie===void 0&&(ie=K),"selectionStart"in O)O.selectionStart=K,O.selectionEnd=Math.min(ie,O.value.length);else{var se=O.ownerDocument||document,Q=se&&se.defaultView||window;if(Q.getSelection){var ee=Q.getSelection(),xe=O.textContent.length,Me=Math.min(U.start,xe),pt=U.end===void 0?Me:Math.min(U.end,xe);!ee.extend&&Me>pt&&($=pt,pt=Me,Me=$);var Y=Us(O,Me),L=Us(O,pt);if(Y&&L&&(ee.rangeCount!==1||ee.anchorNode!==Y.node||ee.anchorOffset!==Y.offset||ee.focusNode!==L.node||ee.focusOffset!==L.offset)){var F=se.createRange();F.setStart(Y.node,Y.offset),ee.removeAllRanges(),Me>pt?(ee.addRange(F),ee.extend(L.node,L.offset)):(F.setEnd(L.node,L.offset),ee.addRange(F))}}}}for(se=[],ee=O;ee=ee.parentNode;)ee.nodeType===1&&se.push({element:ee,left:ee.scrollLeft,top:ee.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<se.length;O++){var re=se[O];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}Mf=!!dp,pp=dp=null}finally{lt=c,te.p=s,H.T=i}}t.current=a,Lt=2}}function Z0(){if(Lt===2){Lt=0;var t=ji,a=Yl,i=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||i){i=H.T,H.T=null;var s=te.p;te.p=2;var c=lt;lt|=4;try{T0(t,a.alternate,a)}finally{lt=c,te.p=s,H.T=i}}Lt=3}}function P0(){if(Lt===4||Lt===3){Lt=0,io();var t=ji,a=Yl,i=ri,s=U0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Lt=5:(Lt=0,Yl=ji=null,J0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Hi=null),al(i),a=a.stateNode,ea&&typeof ea.onCommitFiberRoot=="function")try{ea.onCommitFiberRoot(gi,a,void 0,(a.current.flags&128)===128)}catch{}if(s!==null){a=H.T,c=te.p,te.p=2,H.T=null;try{for(var h=t.onRecoverableError,$=0;$<s.length;$++){var O=s[$];h(O.value,{componentStack:O.stack})}}finally{H.T=a,te.p=c}}(ri&3)!==0&&_f(),kn(t),c=t.pendingLanes,(i&261930)!==0&&(c&42)!==0?t===Jd?bu++:(bu=0,Jd=t):bu=0,_u(0)}}function J0(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,ki(a)))}function _f(){return Q0(),Z0(),P0(),ey()}function ey(){if(Lt!==5)return!1;var t=ji,a=Zd;Zd=0;var i=al(ri),s=H.T,c=te.p;try{te.p=32>i?32:i,H.T=null,i=Pd,Pd=null;var h=ji,$=ri;if(Lt=0,Yl=ji=null,ri=0,(lt&6)!==0)throw Error(l(331));var O=lt;if(lt|=4,D0(h.current),M0(h,h.current,$,i),lt=O,_u(0,!1),ea&&typeof ea.onPostCommitFiberRoot=="function")try{ea.onPostCommitFiberRoot(gi,h)}catch{}return!0}finally{te.p=c,H.T=s,J0(t,a)}}function ty(t,a,i){a=fa(i,a),a=kd(t.stateNode,a,2),t=Di(t,a,2),t!==null&&(gt(t,2),kn(t))}function ot(t,a,i){if(t.tag===3)ty(t,t,i);else for(;a!==null;){if(a.tag===3){ty(a,t,i);break}else if(a.tag===1){var s=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Hi===null||!Hi.has(s))){t=fa(i,t),i=a0(2),s=Di(a,i,2),s!==null&&(n0(i,s,a,t),gt(s,2),kn(s));break}}a=a.return}}function ap(t,a,i){var s=t.pingCache;if(s===null){s=t.pingCache=new TS;var c=new Set;s.set(a,c)}else c=s.get(a),c===void 0&&(c=new Set,s.set(a,c));c.has(i)||(Kd=!0,c.add(i),t=OS.bind(null,t,a,i),a.then(t,t))}function OS(t,a,i){var s=t.pingCache;s!==null&&s.delete(a),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,vt===t&&(Ze&i)===i&&(zt===4||zt===3&&(Ze&62914560)===Ze&&300>Jt()-hf?(lt&2)===0&&Fl(t,0):Xd|=i,Wl===Ze&&(Wl=0)),kn(t)}function ay(t,a){a===0&&(a=ps()),t=Sn(t,a),t!==null&&(gt(t,a),kn(t))}function kS(t){var a=t.memoizedState,i=0;a!==null&&(i=a.retryLane),ay(t,i)}function MS(t,a){var i=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(a),ay(t,i)}function RS(t,a){return Xr(t,a)}var wf=null,Xl=null,np=!1,$f=!1,ip=!1,Vi=0;function kn(t){t!==Xl&&t.next===null&&(Xl===null?wf=Xl=t:Xl=Xl.next=t),$f=!0,np||(np=!0,DS())}function _u(t,a){if(!ip&&$f){ip=!0;do for(var i=!1,s=wf;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var h=0;else{var $=s.suspendedLanes,O=s.pingedLanes;h=(1<<31-Yt(42|t)+1)-1,h&=c&~($&~O),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(i=!0,ly(s,h))}else h=Ze,h=lr(s,s===vt?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||sr(s,h)||(i=!0,ly(s,h));s=s.next}while(i);ip=!1}}function NS(){ny()}function ny(){$f=np=!1;var t=0;Vi!==0&&WS()&&(t=Vi);for(var a=Jt(),i=null,s=wf;s!==null;){var c=s.next,h=iy(s,a);h===0?(s.next=null,i===null?wf=c:i.next=c,c===null&&(Xl=i)):(i=s,(t!==0||(h&3)!==0)&&($f=!0)),s=c}Lt!==0&&Lt!==5||_u(t),Vi!==0&&(Vi=0)}function iy(t,a){for(var i=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var $=31-Yt(h),O=1<<$,U=c[$];U===-1?((O&i)===0||(O&s)!==0)&&(c[$]=uo(O,a)):U<=a&&(t.expiredLanes|=O),h&=~O}if(a=vt,i=Ze,i=lr(t,t===a?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===a&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ka(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||sr(t,i)){if(a=i&-i,a===t.callbackPriority)return a;switch(s!==null&&Ka(s),al(i)){case 2:case 8:i=lo;break;case 32:i=In;break;case 268435456:i=so;break;default:i=In}return s=ry.bind(null,t),i=Xr(i,s),t.callbackPriority=a,t.callbackNode=i,a}return s!==null&&s!==null&&Ka(s),t.callbackPriority=2,t.callbackNode=null,2}function ry(t,a){if(Lt!==0&&Lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(_f()&&t.callbackNode!==i)return null;var s=Ze;return s=lr(t,t===vt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(L0(t,s,a),iy(t,Jt()),t.callbackNode!=null&&t.callbackNode===i?ry.bind(null,t):null)}function ly(t,a){if(_f())return null;L0(t,a,!0)}function DS(){FS(function(){(lt&6)!==0?Xr(Xa,NS):ny()})}function rp(){if(Vi===0){var t=x;t===0&&(t=Zr,Zr<<=1,(Zr&261888)===0&&(Zr=256)),Vi=t}return Vi}function sy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function uy(t,a){var i=a.ownerDocument.createElement("input");return i.name=a.name,i.value=a.value,t.id&&i.setAttribute("form",t.id),a.parentNode.insertBefore(i,a),t=new FormData(t),i.parentNode.removeChild(i),t}function IS(t,a,i,s,c){if(a==="submit"&&i&&i.stateNode===c){var h=sy((c[Ft]||null).action),$=s.submitter;$&&(a=(a=$[Ft]||null)?sy(a.formAction):$.getAttribute("formAction"),a!==null&&(h=a,$=null));var O=new yl("action","action",null,s,c);t.push({event:O,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Vi!==0){var U=$?uy(c,$):new FormData(c);Td(i,{pending:!0,data:U,method:c.method,action:h},null,U)}}else typeof h=="function"&&(O.preventDefault(),U=$?uy(c,$):new FormData(c),Td(i,{pending:!0,data:U,method:c.method,action:h},h,U))},currentTarget:c}]})}}for(var lp=0;lp<El.length;lp++){var sp=El[lp],BS=sp.toLowerCase(),US=sp[0].toUpperCase()+sp.slice(1);ha(BS,"on"+US)}ha(Ls,"onAnimationEnd"),ha(Hs,"onAnimationIteration"),ha(js,"onAnimationStart"),ha("dblclick","onDoubleClick"),ha("focusin","onFocus"),ha("focusout","onBlur"),ha(Bo,"onTransitionRun"),ha(Uo,"onTransitionStart"),ha(qo,"onTransitionCancel"),ha(Gs,"onTransitionEnd"),jt("onMouseEnter",["mouseout","mouseover"]),jt("onMouseLeave",["mouseout","mouseover"]),jt("onPointerEnter",["pointerout","pointerover"]),jt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wu));function oy(t,a){a=(a&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],c=s.event;s=s.listeners;e:{var h=void 0;if(a)for(var $=s.length-1;0<=$;$--){var O=s[$],U=O.instance,K=O.currentTarget;if(O=O.listener,U!==h&&c.isPropagationStopped())break e;h=O,c.currentTarget=K;try{h(c)}catch(ie){vr(ie)}c.currentTarget=null,h=U}else for($=0;$<s.length;$++){if(O=s[$],U=O.instance,K=O.currentTarget,O=O.listener,U!==h&&c.isPropagationStopped())break e;h=O,c.currentTarget=K;try{h(c)}catch(ie){vr(ie)}c.currentTarget=null,h=U}}}}function Ke(t,a){var i=a[nl];i===void 0&&(i=a[nl]=new Set);var s=t+"__bubble";i.has(s)||(fy(a,t,2,!1),i.add(s))}function up(t,a,i){var s=0;a&&(s|=4),fy(i,t,s,a)}var xf="_reactListening"+Math.random().toString(36).slice(2);function op(t){if(!t[xf]){t[xf]=!0,vn.forEach(function(i){i!=="selectionchange"&&(qS.has(i)||up(i,!1,t),up(i,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[xf]||(a[xf]=!0,up("selectionchange",!1,a))}}function fy(t,a,i,s){switch(qy(a)){case 2:var c=pT;break;case 8:c=hT;break;default:c=Sp}i=c.bind(null,a,i,t),c=void 0,!Ts||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(a,i,{capture:!0,passive:c}):t.addEventListener(a,i,!0):c!==void 0?t.addEventListener(a,i,{passive:c}):t.addEventListener(a,i,!1)}function fp(t,a,i,s,c){var h=s;if((a&1)===0&&(a&2)===0&&s!==null)e:for(;;){if(s===null)return;var $=s.tag;if($===3||$===4){var O=s.stateNode.containerInfo;if(O===c)break;if($===4)for($=s.return;$!==null;){var U=$.tag;if((U===3||U===4)&&$.stateNode.containerInfo===c)return;$=$.return}for(;O!==null;){if($=ta(O),$===null)return;if(U=$.tag,U===5||U===6||U===26||U===27){s=h=$;continue e}O=O.parentNode}}s=s.return}cl(function(){var K=h,ie=xs(i),se=[];e:{var Q=Vs.get(t);if(Q!==void 0){var ee=yl,xe=t;switch(t){case"keypress":if(ml(i)===0)break e;case"keydown":case"keyup":ee=xo;break;case"focusin":xe="focus",ee=As;break;case"focusout":xe="blur",ee=As;break;case"beforeblur":case"afterblur":ee=As;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=qc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Os;break;case Ls:case Hs:case js:ee=jc;break;case Gs:ee=Xc;break;case"scroll":case"scrollend":ee=Bc;break;case"wheel":ee=Zc;break;case"copy":case"cut":case"paste":ee=bo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=So;break;case"toggle":case"beforetoggle":ee=Jc}var Me=(a&4)!==0,pt=!Me&&(t==="scroll"||t==="scrollend"),Y=Me?Q!==null?Q+"Capture":null:Q;Me=[];for(var L=K,F;L!==null;){var re=L;if(F=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||F===null||Y===null||(re=$i(L,Y),re!=null&&Me.push($u(L,re,F))),pt)break;L=L.return}0<Me.length&&(Q=new ee(Q,xe,null,i,ie),se.push({event:Q,listeners:Me}))}}if((a&7)===0){e:{if(Q=t==="mouseover"||t==="pointerover",ee=t==="mouseout"||t==="pointerout",Q&&i!==_i&&(xe=i.relatedTarget||i.fromElement)&&(ta(xe)||xe[Bn]))break e;if((ee||Q)&&(Q=ie.window===ie?ie:(Q=ie.ownerDocument)?Q.defaultView||Q.parentWindow:window,ee?(xe=i.relatedTarget||i.toElement,ee=K,xe=xe?ta(xe):null,xe!==null&&(pt=o(xe),Me=xe.tag,xe!==pt||Me!==5&&Me!==27&&Me!==6)&&(xe=null)):(ee=null,xe=K),ee!==xe)){if(Me=vo,re="onMouseLeave",Y="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(Me=So,re="onPointerLeave",Y="onPointerEnter",L="pointer"),pt=ee==null?Q:ur(ee),F=xe==null?Q:ur(xe),Q=new Me(re,L+"leave",ee,i,ie),Q.target=pt,Q.relatedTarget=F,re=null,ta(ie)===K&&(Me=new Me(Y,L+"enter",xe,i,ie),Me.target=F,Me.relatedTarget=pt,re=Me),pt=re,ee&&xe)t:{for(Me=LS,Y=ee,L=xe,F=0,re=Y;re;re=Me(re))F++;re=0;for(var Ce=L;Ce;Ce=Me(Ce))re++;for(;0<F-re;)Y=Me(Y),F--;for(;0<re-F;)L=Me(L),re--;for(;F--;){if(Y===L||L!==null&&Y===L.alternate){Me=Y;break t}Y=Me(Y),L=Me(L)}Me=null}else Me=null;ee!==null&&cy(se,Q,ee,Me,!1),xe!==null&&pt!==null&&cy(se,pt,xe,Me,!0)}}e:{if(Q=K?ur(K):window,ee=Q.nodeName&&Q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&Q.type==="file")var tt=ko;else if(Ns(Q))if(Is)tt=Bs;else{tt=Ro;var Ee=Mo}else ee=Q.nodeName,!ee||ee.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?K&&dr(K.elementType)&&(tt=ko):tt=No;if(tt&&(tt=tt(t,K))){Ds(se,tt,i,ie);break e}Ee&&Ee(t,Q,K),t==="focusout"&&K&&Q.type==="number"&&K.memoizedProps.value!=null&&ws(Q,"number",Q.value)}switch(Ee=K?ur(K):window,t){case"focusin":(Ns(Ee)||Ee.contentEditable==="true")&&(wn=Ee,$l=K,Ai=null);break;case"focusout":Ai=$l=wn=null;break;case"mousedown":xl=!0;break;case"contextmenu":case"mouseup":case"dragend":xl=!1,Sl(se,i,ie);break;case"selectionchange":if(Io)break;case"keydown":case"keyup":Sl(se,i,ie)}var Ve;if(ks)e:{switch(t){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else _n?zo(t,i)&&(Pe="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Pe="onCompositionStart");Pe&&(Ms&&i.locale!=="ko"&&(_n||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&_n&&(Ve=hl()):(bn=ie,dl="value"in bn?bn.value:bn.textContent,_n=!0)),Ee=Sf(K,Pe),0<Ee.length&&(Pe=new Cs(Pe,t,null,i,ie),se.push({event:Pe,listeners:Ee}),Ve?Pe.data=Ve:(Ve=Ao(i),Ve!==null&&(Pe.data=Ve)))),(Ve=vl?Rs(t,i):Co(t,i))&&(Pe=Sf(K,"onBeforeInput"),0<Pe.length&&(Ee=new Cs("onBeforeInput","beforeinput",null,i,ie),se.push({event:Ee,listeners:Pe}),Ee.data=Ve)),IS(se,t,K,i,ie)}oy(se,a)})}function $u(t,a,i){return{instance:t,listener:a,currentTarget:i}}function Sf(t,a){for(var i=a+"Capture",s=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=$i(t,i),c!=null&&s.unshift($u(t,c,h)),c=$i(t,a),c!=null&&s.push($u(t,c,h))),t.tag===3)return s;t=t.return}return[]}function LS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cy(t,a,i,s,c){for(var h=a._reactName,$=[];i!==null&&i!==s;){var O=i,U=O.alternate,K=O.stateNode;if(O=O.tag,U!==null&&U===s)break;O!==5&&O!==26&&O!==27||K===null||(U=K,c?(K=$i(i,h),K!=null&&$.unshift($u(i,K,U))):c||(K=$i(i,h),K!=null&&$.push($u(i,K,U)))),i=i.return}$.length!==0&&t.push({event:a,listeners:$})}var HS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function dy(t){return(typeof t=="string"?t:""+t).replace(HS,`
`).replace(jS,"")}function py(t,a){return a=dy(a),dy(t)===a}function dt(t,a,i,s,c,h){switch(i){case"children":typeof s=="string"?a==="body"||a==="textarea"&&s===""||bi(t,s):(typeof s=="number"||typeof s=="bigint")&&a!=="body"&&bi(t,""+s);break;case"className":sl(t,"class",s);break;case"tabIndex":sl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":sl(t,i,s);break;case"style":go(t,s,h);break;case"data":if(a!=="object"){sl(t,"data",s);break}case"src":case"href":if(s===""&&(a!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=fl(""+s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(i==="formAction"?(a!=="input"&&dt(t,a,"name",c.name,c,null),dt(t,a,"formEncType",c.formEncType,c,null),dt(t,a,"formMethod",c.formMethod,c,null),dt(t,a,"formTarget",c.formTarget,c,null)):(dt(t,a,"encType",c.encType,c,null),dt(t,a,"method",c.method,c,null),dt(t,a,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=fl(""+s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=Pa);break;case"onScroll":s!=null&&Ke("scroll",t);break;case"onScrollEnd":s!=null&&Ke("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(i=s.__html,i!=null){if(c.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=fl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""+s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":Ke("beforetoggle",t),Ke("toggle",t),ll(t,"popover",s);break;case"xlinkActuate":Za(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Za(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Za(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Za(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Za(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Za(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Za(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Za(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Za(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ll(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Dc.get(i)||i,ll(t,i,s))}}function cp(t,a,i,s,c,h){switch(i){case"style":go(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(i=s.__html,i!=null){if(c.children!=null)throw Error(l(60));t.innerHTML=i}}break;case"children":typeof s=="string"?bi(t,s):(typeof s=="number"||typeof s=="bigint")&&bi(t,""+s);break;case"onScroll":s!=null&&Ke("scroll",t);break;case"onScrollEnd":s!=null&&Ke("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rl.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),a=i.slice(2,c?i.length-7:void 0),h=t[Ft]||null,h=h!=null?h[i]:null,typeof h=="function"&&t.removeEventListener(a,h,c),typeof s=="function")){typeof h!="function"&&h!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(a,s,c);break e}i in t?t[i]=s:s===!0?t.setAttribute(i,""):ll(t,i,s)}}}function Qt(t,a,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",t),Ke("load",t);var s=!1,c=!1,h;for(h in i)if(i.hasOwnProperty(h)){var $=i[h];if($!=null)switch(h){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,a));default:dt(t,a,h,$,i,null)}}c&&dt(t,a,"srcSet",i.srcSet,i,null),s&&dt(t,a,"src",i.src,i,null);return;case"input":Ke("invalid",t);var O=h=$=c=null,U=null,K=null;for(s in i)if(i.hasOwnProperty(s)){var ie=i[s];if(ie!=null)switch(s){case"name":c=ie;break;case"type":$=ie;break;case"checked":U=ie;break;case"defaultChecked":K=ie;break;case"value":h=ie;break;case"defaultValue":O=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(l(137,a));break;default:dt(t,a,s,ie,i,null)}}ho(t,h,O,U,K,$,c,!1);return;case"select":Ke("invalid",t),s=$=h=null;for(c in i)if(i.hasOwnProperty(c)&&(O=i[c],O!=null))switch(c){case"value":h=O;break;case"defaultValue":$=O;break;case"multiple":s=O;default:dt(t,a,c,O,i,null)}a=h,i=$,t.multiple=!!s,a!=null?vi(t,!!s,a,!1):i!=null&&vi(t,!!s,i,!0);return;case"textarea":Ke("invalid",t),h=c=s=null;for($ in i)if(i.hasOwnProperty($)&&(O=i[$],O!=null))switch($){case"value":s=O;break;case"defaultValue":c=O;break;case"children":h=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(91));break;default:dt(t,a,$,O,i,null)}fr(t,s,c,h);return;case"option":for(U in i)if(i.hasOwnProperty(U)&&(s=i[U],s!=null))switch(U){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:dt(t,a,U,s,i,null)}return;case"dialog":Ke("beforetoggle",t),Ke("toggle",t),Ke("cancel",t),Ke("close",t);break;case"iframe":case"object":Ke("load",t);break;case"video":case"audio":for(s=0;s<wu.length;s++)Ke(wu[s],t);break;case"image":Ke("error",t),Ke("load",t);break;case"details":Ke("toggle",t);break;case"embed":case"source":case"link":Ke("error",t),Ke("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in i)if(i.hasOwnProperty(K)&&(s=i[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,a));default:dt(t,a,K,s,i,null)}return;default:if(dr(a)){for(ie in i)i.hasOwnProperty(ie)&&(s=i[ie],s!==void 0&&cp(t,a,ie,s,i,void 0));return}}for(O in i)i.hasOwnProperty(O)&&(s=i[O],s!=null&&dt(t,a,O,s,i,null))}function GS(t,a,i,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,$=null,O=null,U=null,K=null,ie=null;for(ee in i){var se=i[ee];if(i.hasOwnProperty(ee)&&se!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":U=se;default:s.hasOwnProperty(ee)||dt(t,a,ee,null,s,se)}}for(var Q in s){var ee=s[Q];if(se=i[Q],s.hasOwnProperty(Q)&&(ee!=null||se!=null))switch(Q){case"type":h=ee;break;case"name":c=ee;break;case"checked":K=ee;break;case"defaultChecked":ie=ee;break;case"value":$=ee;break;case"defaultValue":O=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(l(137,a));break;default:ee!==se&&dt(t,a,Q,ee,s,se)}}_s(t,$,O,U,K,ie,h,c);return;case"select":ee=$=O=Q=null;for(h in i)if(U=i[h],i.hasOwnProperty(h)&&U!=null)switch(h){case"value":break;case"multiple":ee=U;default:s.hasOwnProperty(h)||dt(t,a,h,null,s,U)}for(c in s)if(h=s[c],U=i[c],s.hasOwnProperty(c)&&(h!=null||U!=null))switch(c){case"value":Q=h;break;case"defaultValue":O=h;break;case"multiple":$=h;default:h!==U&&dt(t,a,c,h,s,U)}a=O,i=$,s=ee,Q!=null?vi(t,!!i,Q,!1):!!s!=!!i&&(a!=null?vi(t,!!i,a,!0):vi(t,!!i,i?[]:"",!1));return;case"textarea":ee=Q=null;for(O in i)if(c=i[O],i.hasOwnProperty(O)&&c!=null&&!s.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:dt(t,a,O,null,s,c)}for($ in s)if(c=s[$],h=i[$],s.hasOwnProperty($)&&(c!=null||h!=null))switch($){case"value":Q=c;break;case"defaultValue":ee=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==h&&dt(t,a,$,c,s,h)}mo(t,Q,ee);return;case"option":for(var xe in i)if(Q=i[xe],i.hasOwnProperty(xe)&&Q!=null&&!s.hasOwnProperty(xe))switch(xe){case"selected":t.selected=!1;break;default:dt(t,a,xe,null,s,Q)}for(U in s)if(Q=s[U],ee=i[U],s.hasOwnProperty(U)&&Q!==ee&&(Q!=null||ee!=null))switch(U){case"selected":t.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:dt(t,a,U,Q,s,ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in i)Q=i[Me],i.hasOwnProperty(Me)&&Q!=null&&!s.hasOwnProperty(Me)&&dt(t,a,Me,null,s,Q);for(K in s)if(Q=s[K],ee=i[K],s.hasOwnProperty(K)&&Q!==ee&&(Q!=null||ee!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(l(137,a));break;default:dt(t,a,K,Q,s,ee)}return;default:if(dr(a)){for(var pt in i)Q=i[pt],i.hasOwnProperty(pt)&&Q!==void 0&&!s.hasOwnProperty(pt)&&cp(t,a,pt,void 0,s,Q);for(ie in s)Q=s[ie],ee=i[ie],!s.hasOwnProperty(ie)||Q===ee||Q===void 0&&ee===void 0||cp(t,a,ie,Q,s,ee);return}}for(var Y in i)Q=i[Y],i.hasOwnProperty(Y)&&Q!=null&&!s.hasOwnProperty(Y)&&dt(t,a,Y,null,s,Q);for(se in s)Q=s[se],ee=i[se],!s.hasOwnProperty(se)||Q===ee||Q==null&&ee==null||dt(t,a,se,Q,s,ee)}function hy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var c=i[s],h=c.transferSize,$=c.initiatorType,O=c.duration;if(h&&O&&hy($)){for($=0,O=c.responseEnd,s+=1;s<i.length;s++){var U=i[s],K=U.startTime;if(K>O)break;var ie=U.transferSize,se=U.initiatorType;ie&&hy(se)&&(U=U.responseEnd,$+=ie*(U<O?1:(O-K)/(U-K)))}if(--s,a+=8*(h+$)/(c.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var dp=null,pp=null;function Tf(t){return t.nodeType===9?t:t.ownerDocument}function my(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gy(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function hp(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var mp=null;function WS(){var t=window.event;return t&&t.type==="popstate"?t===mp?!1:(mp=t,!0):(mp=null,!1)}var yy=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,vy=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof vy<"u"?function(t){return vy.resolve(null).then(t).catch(KS)}:yy;function KS(t){setTimeout(function(){throw t})}function Wi(t){return t==="head"}function by(t,a){var i=a,s=0;do{var c=i.nextSibling;if(t.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"||i==="/&"){if(s===0){t.removeChild(c),Jl(a);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")xu(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,xu(i);for(var h=i.firstChild;h;){var $=h.nextSibling,O=h.nodeName;h[Un]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&h.rel.toLowerCase()==="stylesheet"||i.removeChild(h),h=$}}else i==="body"&&xu(t.ownerDocument.body);i=c}while(i);Jl(a)}function _y(t,a){var i=t;t=0;do{var s=i.nextSibling;if(i.nodeType===1?a?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(a?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=s}while(i)}function gp(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var i=a;switch(a=a.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":gp(i),yn(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function XS(t,a,i,s){for(;t.nodeType===1;){var c=i;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Un])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Va(t.nextSibling),t===null)break}return null}function QS(t,a,i){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Va(t.nextSibling),t===null))return null;return t}function wy(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Va(t.nextSibling),t===null))return null;return t}function yp(t){return t.data==="$?"||t.data==="$~"}function vp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ZS(t,a){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||i.readyState!=="loading")a();else{var s=function(){a(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Va(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var bp=null;function $y(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(a===0)return Va(t.nextSibling);a--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||a++}t=t.nextSibling}return null}function xy(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(a===0)return t;a--}else i!=="/$"&&i!=="/&"||a++}t=t.previousSibling}return null}function Sy(t,a,i){switch(a=Tf(i),t){case"html":if(t=a.documentElement,!t)throw Error(l(452));return t;case"head":if(t=a.head,!t)throw Error(l(453));return t;case"body":if(t=a.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function xu(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);yn(t)}var Wa=new Map,Ty=new Set;function Ef(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var li=te.d;te.d={f:PS,r:JS,D:eT,C:tT,L:aT,m:nT,X:rT,S:iT,M:lT};function PS(){var t=li.f(),a=yf();return t||a}function JS(t){var a=qn(t);a!==null&&a.tag===5&&a.type==="form"?jg(a):li.r(t)}var Ql=typeof document>"u"?null:document;function Ey(t,a,i){var s=Ql;if(s&&typeof a=="string"&&a){var c=pa(a);c='link[rel="'+t+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),Ty.has(c)||(Ty.add(c),t={rel:t,crossOrigin:i,href:a},s.querySelector(c)===null&&(a=s.createElement("link"),Qt(a,"link",t),Ct(a),s.head.appendChild(a)))}}function eT(t){li.D(t),Ey("dns-prefetch",t,null)}function tT(t,a){li.C(t,a),Ey("preconnect",t,a)}function aT(t,a,i){li.L(t,a,i);var s=Ql;if(s&&t&&a){var c='link[rel="preload"][as="'+pa(a)+'"]';a==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+pa(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+pa(i.imageSizes)+'"]')):c+='[href="'+pa(t)+'"]';var h=c;switch(a){case"style":h=Zl(t);break;case"script":h=Pl(t)}Wa.has(h)||(t=v({rel:"preload",href:a==="image"&&i&&i.imageSrcSet?void 0:t,as:a},i),Wa.set(h,t),s.querySelector(c)!==null||a==="style"&&s.querySelector(Su(h))||a==="script"&&s.querySelector(Tu(h))||(a=s.createElement("link"),Qt(a,"link",t),Ct(a),s.head.appendChild(a)))}}function nT(t,a){li.m(t,a);var i=Ql;if(i&&t){var s=a&&typeof a.as=="string"?a.as:"script",c='link[rel="modulepreload"][as="'+pa(s)+'"][href="'+pa(t)+'"]',h=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Pl(t)}if(!Wa.has(h)&&(t=v({rel:"modulepreload",href:t},a),Wa.set(h,t),i.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Tu(h)))return}s=i.createElement("link"),Qt(s,"link",t),Ct(s),i.head.appendChild(s)}}}function iT(t,a,i){li.S(t,a,i);var s=Ql;if(s&&t){var c=yi(s).hoistableStyles,h=Zl(t);a=a||"default";var $=c.get(h);if(!$){var O={loading:0,preload:null};if($=s.querySelector(Su(h)))O.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":a},i),(i=Wa.get(h))&&_p(t,i);var U=$=s.createElement("link");Ct(U),Qt(U,"link",t),U._p=new Promise(function(K,ie){U.onload=K,U.onerror=ie}),U.addEventListener("load",function(){O.loading|=1}),U.addEventListener("error",function(){O.loading|=2}),O.loading|=4,zf($,a,s)}$={type:"stylesheet",instance:$,count:1,state:O},c.set(h,$)}}}function rT(t,a){li.X(t,a);var i=Ql;if(i&&t){var s=yi(i).hoistableScripts,c=Pl(t),h=s.get(c);h||(h=i.querySelector(Tu(c)),h||(t=v({src:t,async:!0},a),(a=Wa.get(c))&&wp(t,a),h=i.createElement("script"),Ct(h),Qt(h,"link",t),i.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(c,h))}}function lT(t,a){li.M(t,a);var i=Ql;if(i&&t){var s=yi(i).hoistableScripts,c=Pl(t),h=s.get(c);h||(h=i.querySelector(Tu(c)),h||(t=v({src:t,async:!0,type:"module"},a),(a=Wa.get(c))&&wp(t,a),h=i.createElement("script"),Ct(h),Qt(h,"link",t),i.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(c,h))}}function zy(t,a,i,s){var c=(c=ve.current)?Ef(c):null;if(!c)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(a=Zl(i.href),i=yi(c).hoistableStyles,s=i.get(a),s||(s={type:"style",instance:null,count:0,state:null},i.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Zl(i.href);var h=yi(c).hoistableStyles,$=h.get(t);if($||(c=c.ownerDocument||c,$={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,$),(h=c.querySelector(Su(t)))&&!h._p&&($.instance=h,$.state.loading=5),Wa.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Wa.set(t,i),h||sT(c,t,i,$.state))),a&&s===null)throw Error(l(528,""));return $}if(a&&s!==null)throw Error(l(529,""));return null;case"script":return a=i.async,i=i.src,typeof i=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Pl(i),i=yi(c).hoistableScripts,s=i.get(a),s||(s={type:"script",instance:null,count:0,state:null},i.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function Zl(t){return'href="'+pa(t)+'"'}function Su(t){return'link[rel="stylesheet"]['+t+"]"}function Ay(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function sT(t,a,i,s){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?s.loading=1:(a=t.createElement("link"),s.preload=a,a.addEventListener("load",function(){return s.loading|=1}),a.addEventListener("error",function(){return s.loading|=2}),Qt(a,"link",i),Ct(a),t.head.appendChild(a))}function Pl(t){return'[src="'+pa(t)+'"]'}function Tu(t){return"script[async]"+t}function Cy(t,a,i){if(a.count++,a.instance===null)switch(a.type){case"style":var s=t.querySelector('style[data-href~="'+pa(i.href)+'"]');if(s)return a.instance=s,Ct(s),s;var c=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ct(s),Qt(s,"style",c),zf(s,i.precedence,t),a.instance=s;case"stylesheet":c=Zl(i.href);var h=t.querySelector(Su(c));if(h)return a.state.loading|=4,a.instance=h,Ct(h),h;s=Ay(i),(c=Wa.get(c))&&_p(s,c),h=(t.ownerDocument||t).createElement("link"),Ct(h);var $=h;return $._p=new Promise(function(O,U){$.onload=O,$.onerror=U}),Qt(h,"link",s),a.state.loading|=4,zf(h,i.precedence,t),a.instance=h;case"script":return h=Pl(i.src),(c=t.querySelector(Tu(h)))?(a.instance=c,Ct(c),c):(s=i,(c=Wa.get(h))&&(s=v({},i),wp(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ct(c),Qt(c,"link",s),t.head.appendChild(c),a.instance=c);case"void":return null;default:throw Error(l(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(s=a.instance,a.state.loading|=4,zf(s,i.precedence,t));return a.instance}function zf(t,a,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,h=c,$=0;$<s.length;$++){var O=s[$];if(O.dataset.precedence===a)h=O;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(a=i.nodeType===9?i.head:i,a.insertBefore(t,a.firstChild))}function _p(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function wp(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Af=null;function Oy(t,a,i){if(Af===null){var s=new Map,c=Af=new Map;c.set(i,s)}else c=Af,s=c.get(i),s||(s=new Map,c.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),c=0;c<i.length;c++){var h=i[c];if(!(h[Un]||h[Rt]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var $=h.getAttribute(a)||"";$=t+$;var O=s.get($);O?O.push(h):s.set($,[h])}}return s}function ky(t,a,i){t=t.ownerDocument||t,t.head.insertBefore(i,a==="title"?t.querySelector("head > title"):null)}function uT(t,a,i){if(i===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function My(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function oT(t,a,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Zl(s.href),h=a.querySelector(Su(c));if(h){a=h._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Cf.bind(t),a.then(t,t)),i.state.loading|=4,i.instance=h,Ct(h);return}h=a.ownerDocument||a,s=Ay(s),(c=Wa.get(c))&&_p(s,c),h=h.createElement("link"),Ct(h);var $=h;$._p=new Promise(function(O,U){$.onload=O,$.onerror=U}),Qt(h,"link",s),i.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,a),(a=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Cf.bind(t),a.addEventListener("load",i),a.addEventListener("error",i))}}var $p=0;function fT(t,a){return t.stylesheets&&t.count===0&&kf(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var s=setTimeout(function(){if(t.stylesheets&&kf(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+a);0<t.imgBytes&&$p===0&&($p=62500*VS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kf(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>$p?50:800)+a);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Cf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Of=null;function kf(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Of=new Map,a.forEach(cT,t),Of=null,Cf.call(t))}function cT(t,a){if(!(a.state.loading&4)){var i=Of.get(t);if(i)var s=i.get(null);else{i=new Map,Of.set(t,i);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var $=c[h];($.nodeName==="LINK"||$.getAttribute("media")!=="not all")&&(i.set($.dataset.precedence,$),s=$)}s&&i.set(null,s)}c=a.instance,$=c.getAttribute("data-precedence"),h=i.get($)||s,h===s&&i.set(null,c),i.set($,c),this.count++,s=Cf.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),a.state.loading|=4}}var Eu={$$typeof:D,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function dT(t,a,i,s,c,h,$,O,U){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=el(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.hiddenUpdates=el(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=$,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function Ry(t,a,i,s,c,h,$,O,U,K,ie,se){return t=new dT(t,a,i,$,U,K,ie,se,O),a=1,h===!0&&(a|=24),h=ia(3,null,null,a),t.current=h,h.stateNode=t,a=Dl(),a.refCount++,t.pooledCache=a,a.refCount++,h.memoizedState={element:s,isDehydrated:i,cache:a},rd(h),t}function Ny(t){return t?(t=Vn,t):Vn}function Dy(t,a,i,s,c,h){c=Ny(c),s.context===null?s.context=c:s.pendingContext=c,s=Ni(a),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Di(t,s,a),i!==null&&($a(i,t,a),iu(i,t,a))}function Iy(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<a?i:a}}function xp(t,a){Iy(t,a),(t=t.alternate)&&Iy(t,a)}function By(t){if(t.tag===13||t.tag===31){var a=Sn(t,67108864);a!==null&&$a(a,t,67108864),xp(t,67108864)}}function Uy(t){if(t.tag===13||t.tag===31){var a=ka();a=tl(a);var i=Sn(t,a);i!==null&&$a(i,t,a),xp(t,a)}}var Mf=!0;function pT(t,a,i,s){var c=H.T;H.T=null;var h=te.p;try{te.p=2,Sp(t,a,i,s)}finally{te.p=h,H.T=c}}function hT(t,a,i,s){var c=H.T;H.T=null;var h=te.p;try{te.p=8,Sp(t,a,i,s)}finally{te.p=h,H.T=c}}function Sp(t,a,i,s){if(Mf){var c=Tp(s);if(c===null)fp(t,a,s,Rf,i),Ly(t,s);else if(gT(c,t,a,i,s))s.stopPropagation();else if(Ly(t,s),a&4&&-1<mT.indexOf(t)){for(;c!==null;){var h=qn(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var $=gn(h.pendingLanes);if($!==0){var O=h;for(O.pendingLanes|=2,O.entangledLanes|=2;$;){var U=1<<31-Yt($);O.entanglements[1]|=U,$&=~U}kn(h),(lt&6)===0&&(mf=Jt()+500,_u(0))}}break;case 31:case 13:O=Sn(h,2),O!==null&&$a(O,h,2),yf(),xp(h,2)}if(h=Tp(s),h===null&&fp(t,a,s,Rf,i),h===c)break;c=h}c!==null&&s.stopPropagation()}else fp(t,a,s,null,i)}}function Tp(t){return t=xs(t),Ep(t)}var Rf=null;function Ep(t){if(Rf=null,t=ta(t),t!==null){var a=o(t);if(a===null)t=null;else{var i=a.tag;if(i===13){if(t=f(a),t!==null)return t;t=null}else if(i===31){if(t=d(a),t!==null)return t;t=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Rf=t,null}function qy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ro()){case Xa:return 2;case lo:return 8;case In:case Qr:return 32;case so:return 268435456;default:return 32}default:return 32}}var zp=!1,Yi=null,Fi=null,Ki=null,zu=new Map,Au=new Map,Xi=[],mT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ly(t,a){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":zu.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Au.delete(a.pointerId)}}function Cu(t,a,i,s,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:a,domEventName:i,eventSystemFlags:s,nativeEvent:h,targetContainers:[c]},a!==null&&(a=qn(a),a!==null&&By(a)),t):(t.eventSystemFlags|=s,a=t.targetContainers,c!==null&&a.indexOf(c)===-1&&a.push(c),t)}function gT(t,a,i,s,c){switch(a){case"focusin":return Yi=Cu(Yi,t,a,i,s,c),!0;case"dragenter":return Fi=Cu(Fi,t,a,i,s,c),!0;case"mouseover":return Ki=Cu(Ki,t,a,i,s,c),!0;case"pointerover":var h=c.pointerId;return zu.set(h,Cu(zu.get(h)||null,t,a,i,s,c)),!0;case"gotpointercapture":return h=c.pointerId,Au.set(h,Cu(Au.get(h)||null,t,a,i,s,c)),!0}return!1}function Hy(t){var a=ta(t.target);if(a!==null){var i=o(a);if(i!==null){if(a=i.tag,a===13){if(a=f(i),a!==null){t.blockedOn=a,vs(t.priority,function(){Uy(i)});return}}else if(a===31){if(a=d(i),a!==null){t.blockedOn=a,vs(t.priority,function(){Uy(i)});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nf(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var i=Tp(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);_i=s,i.target.dispatchEvent(s),_i=null}else return a=qn(i),a!==null&&By(a),t.blockedOn=i,!1;a.shift()}return!0}function jy(t,a,i){Nf(t)&&i.delete(a)}function yT(){zp=!1,Yi!==null&&Nf(Yi)&&(Yi=null),Fi!==null&&Nf(Fi)&&(Fi=null),Ki!==null&&Nf(Ki)&&(Ki=null),zu.forEach(jy),Au.forEach(jy)}function Df(t,a){t.blockedOn===a&&(t.blockedOn=null,zp||(zp=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yT)))}var If=null;function Gy(t){If!==t&&(If=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){If===t&&(If=null);for(var a=0;a<t.length;a+=3){var i=t[a],s=t[a+1],c=t[a+2];if(typeof s!="function"){if(Ep(s||i)===null)continue;break}var h=qn(i);h!==null&&(t.splice(a,3),a-=3,Td(h,{pending:!0,data:c,method:i.method,action:s},s,c))}}))}function Jl(t){function a(U){return Df(U,t)}Yi!==null&&Df(Yi,t),Fi!==null&&Df(Fi,t),Ki!==null&&Df(Ki,t),zu.forEach(a),Au.forEach(a);for(var i=0;i<Xi.length;i++){var s=Xi[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Xi.length&&(i=Xi[0],i.blockedOn===null);)Hy(i),i.blockedOn===null&&Xi.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var c=i[s],h=i[s+1],$=c[Ft]||null;if(typeof h=="function")$||Gy(i);else if($){var O=null;if(h&&h.hasAttribute("formAction")){if(c=h,$=h[Ft]||null)O=$.formAction;else if(Ep(c)!==null)continue}else O=$.action;typeof O=="function"?i[s+1]=O:(i.splice(s,3),s-=3),Gy(i)}}}function Vy(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function($){return c=$})},focusReset:"manual",scroll:"manual"})}function a(){c!==null&&(c(),c=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),c!==null&&(c(),c=null)}}}function Ap(t){this._internalRoot=t}Bf.prototype.render=Ap.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(l(409));var i=a.current,s=ka();Dy(i,s,t,a,null,null)},Bf.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Dy(t.current,2,null,t,null,null),yf(),a[Bn]=null}};function Bf(t){this._internalRoot=t}Bf.prototype.unstable_scheduleHydration=function(t){if(t){var a=ys();t={blockedOn:null,target:t,priority:a};for(var i=0;i<Xi.length&&a!==0&&a<Xi[i].priority;i++);Xi.splice(i,0,t),i===0&&Hy(t)}};var Wy=n.version;if(Wy!=="19.2.6")throw Error(l(527,Wy,"19.2.6"));te.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=g(a),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var vT={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uf.isDisabled&&Uf.supportsFiber)try{gi=Uf.inject(vT),ea=Uf}catch{}}return ku.createRoot=function(t,a){if(!u(t))throw Error(l(299));var i=!1,s="",c=Pg,h=Jg,$=e0;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(h=a.onCaughtError),a.onRecoverableError!==void 0&&($=a.onRecoverableError)),a=Ry(t,1,!1,null,null,i,s,null,c,h,$,Vy),t[Bn]=a.current,op(t),new Ap(a)},ku.hydrateRoot=function(t,a,i){if(!u(t))throw Error(l(299));var s=!1,c="",h=Pg,$=Jg,O=e0,U=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&($=i.onCaughtError),i.onRecoverableError!==void 0&&(O=i.onRecoverableError),i.formState!==void 0&&(U=i.formState)),a=Ry(t,1,!0,a,i??null,s,c,U,h,$,O,Vy),a.context=Ny(null),i=a.current,s=ka(),s=tl(s),c=Ni(s),c.callback=null,Di(i,c,s),i=s,a.current.lanes=i,gt(a,i),kn(a),t[Bn]=a.current,op(t),new Bf(a)},ku.version="19.2.6",ku}var av;function OT(){if(av)return kp.exports;av=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),kp.exports=CT(),kp.exports}var kT=OT();const MT=_2(kT);/*!
 * ONNX Runtime Web v1.26.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var ym=Object.defineProperty,RT=Object.getOwnPropertyDescriptor,NT=Object.getOwnPropertyNames,DT=Object.prototype.hasOwnProperty,IT=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,r)=>(typeof require<"u"?require:n)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),fe=(e,n)=>()=>(e&&(n=e(e=0)),n),cs=(e,n)=>{for(var r in n)ym(e,r,{get:n[r],enumerable:!0})},BT=(e,n,r,l)=>{if(n&&typeof n=="object"||typeof n=="function")for(let u of NT(n))!DT.call(e,u)&&u!==r&&ym(e,u,{get:()=>n[u],enumerable:!(l=RT(n,u))||l.enumerable});return e},Zu=e=>BT(ym({},"__esModule",{value:!0}),e),Mu,Zi,ns,nv,w2,$2=fe(()=>{Mu=new Map,Zi=[],ns=(e,n,r)=>{if(n&&typeof n.init=="function"&&typeof n.createInferenceSessionHandler=="function"){let l=Mu.get(e);if(l===void 0)Mu.set(e,{backend:n,priority:r});else{if(l.priority>r)return;if(l.priority===r&&l.backend!==n)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let u=Zi.indexOf(e);u!==-1&&Zi.splice(u,1);for(let o=0;o<Zi.length;o++)if(Mu.get(Zi[o]).priority<=r){Zi.splice(o,0,e);return}Zi.push(e)}return}throw new TypeError("not a valid backend")},nv=async e=>{let n=Mu.get(e);if(!n)return"backend not found.";if(n.initialized)return n.backend;if(n.aborted)return n.error;{let r=!!n.initPromise;try{return r||(n.initPromise=n.backend.init(e)),await n.initPromise,n.initialized=!0,n.backend}catch(l){return r||(n.error=`${l}`,n.aborted=!0),n.error}finally{delete n.initPromise}}},w2=async e=>{let n=e.executionProviders||[],r=n.map(m=>typeof m=="string"?m:m.name),l=r.length===0?Zi:r,u,o=[],f=new Set;for(let m of l){let g=await nv(m);typeof g=="string"?o.push({name:m,err:g}):(u||(u=g),u===g&&f.add(m))}if(!u)throw new Error(`no available backend found. ERR: ${o.map(m=>`[${m.name}] ${m.err}`).join(", ")}`);for(let{name:m,err:g}of o)r.includes(m)&&console.warn(`removing requested execution provider "${m}" from session options because it is not available: ${g}`);let d=n.filter(m=>f.has(typeof m=="string"?m:m.name));return[u,new Proxy(e,{get:(m,g)=>g==="executionProviders"?d:Reflect.get(m,g)})]}}),UT=fe(()=>{$2()}),x2,qT=fe(()=>{x2="1.26.0"}),Dp,Vt,S2=fe(()=>{qT(),Dp="warning",Vt={wasm:{},webgl:{},webgpu:{},versions:{common:x2},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Dp=e}},get logLevel(){return Dp}},Object.defineProperty(Vt,"logLevel",{enumerable:!0})}),ht,LT=fe(()=>{S2(),ht=Vt}),T2,E2,HT=fe(()=>{T2=(e,n)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let l=r.getContext("2d");if(l!=null){let u,o;(n==null?void 0:n.tensorLayout)!==void 0&&n.tensorLayout==="NHWC"?(u=e.dims[2],o=e.dims[3]):(u=e.dims[3],o=e.dims[2]);let f=(n==null?void 0:n.format)!==void 0?n.format:"RGB",d=n==null?void 0:n.norm,m,g;d===void 0||d.mean===void 0?m=[255,255,255,255]:typeof d.mean=="number"?m=[d.mean,d.mean,d.mean,d.mean]:(m=[d.mean[0],d.mean[1],d.mean[2],0],d.mean[3]!==void 0&&(m[3]=d.mean[3])),d===void 0||d.bias===void 0?g=[0,0,0,0]:typeof d.bias=="number"?g=[d.bias,d.bias,d.bias,d.bias]:(g=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(g[3]=d.bias[3]));let b=o*u,v=0,_=b,S=b*2,T=-1;f==="RGBA"?(v=0,_=b,S=b*2,T=b*3):f==="RGB"?(v=0,_=b,S=b*2):f==="RBG"&&(v=0,S=b,_=b*2);for(let E=0;E<o;E++)for(let M=0;M<u;M++){let A=(e.data[v++]-g[0])*m[0],z=(e.data[_++]-g[1])*m[1],D=(e.data[S++]-g[2])*m[2],N=T===-1?255:(e.data[T++]-g[3])*m[3];l.fillStyle="rgba("+A+","+z+","+D+","+N+")",l.fillRect(M,E,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},E2=(e,n)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),l;if(r!=null){let u,o,f;(n==null?void 0:n.tensorLayout)!==void 0&&n.tensorLayout==="NHWC"?(u=e.dims[2],o=e.dims[1],f=e.dims[3]):(u=e.dims[3],o=e.dims[2],f=e.dims[1]);let d=n!==void 0&&n.format!==void 0?n.format:"RGB",m=n==null?void 0:n.norm,g,b;m===void 0||m.mean===void 0?g=[255,255,255,255]:typeof m.mean=="number"?g=[m.mean,m.mean,m.mean,m.mean]:(g=[m.mean[0],m.mean[1],m.mean[2],255],m.mean[3]!==void 0&&(g[3]=m.mean[3])),m===void 0||m.bias===void 0?b=[0,0,0,0]:typeof m.bias=="number"?b=[m.bias,m.bias,m.bias,m.bias]:(b=[m.bias[0],m.bias[1],m.bias[2],0],m.bias[3]!==void 0&&(b[3]=m.bias[3]));let v=o*u;if(n!==void 0&&(n.format!==void 0&&f===4&&n.format!=="RGBA"||f===3&&n.format!=="RGB"&&n.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let _=4,S=0,T=1,E=2,M=3,A=0,z=v,D=v*2,N=-1;d==="RGBA"?(A=0,z=v,D=v*2,N=v*3):d==="RGB"?(A=0,z=v,D=v*2):d==="RBG"&&(A=0,D=v,z=v*2),l=r.createImageData(u,o);for(let I=0;I<o*u;S+=_,T+=_,E+=_,M+=_,I++)l.data[S]=(e.data[A++]-b[0])*g[0],l.data[T]=(e.data[z++]-b[1])*g[1],l.data[E]=(e.data[D++]-b[2])*g[2],l.data[M]=N===-1?255:(e.data[N++]-b[3])*g[3]}else throw new Error("Can not access image data");return l}}),qf,z2,A2,C2,O2,k2,jT=fe(()=>{vm(),qf=(e,n)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(n.height===void 0||n.width===void 0)throw new Error("Image height and width must be defined");if(n.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:l}=n,u=n.norm??{mean:255,bias:0},o,f;typeof u.mean=="number"?o=[u.mean,u.mean,u.mean,u.mean]:o=[u.mean[0],u.mean[1],u.mean[2],u.mean[3]??255],typeof u.bias=="number"?f=[u.bias,u.bias,u.bias,u.bias]:f=[u.bias[0],u.bias[1],u.bias[2],u.bias[3]??0];let d=n.format!==void 0?n.format:"RGBA",m=n.tensorFormat!==void 0&&n.tensorFormat!==void 0?n.tensorFormat:"RGB",g=r*l,b=m==="RGBA"?new Float32Array(g*4):new Float32Array(g*3),v=4,_=0,S=1,T=2,E=3,M=0,A=g,z=g*2,D=-1;d==="RGB"&&(v=3,_=0,S=1,T=2,E=-1),m==="RGBA"?D=g*3:m==="RBG"?(M=0,z=g,A=g*2):m==="BGR"&&(z=0,A=g,M=g*2);for(let N=0;N<g;N++,_+=v,T+=v,S+=v,E+=v)b[M++]=(e[_]+f[0])/o[0],b[A++]=(e[S]+f[1])/o[1],b[z++]=(e[T]+f[2])/o[2],D!==-1&&E!==-1&&(b[D++]=(e[E]+f[3])/o[3]);return m==="RGBA"?new Ra("float32",b,[1,4,r,l]):new Ra("float32",b,[1,3,r,l])},z2=async(e,n)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,l=typeof ImageData<"u"&&e instanceof ImageData,u=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",f,d=n??{},m=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},g=b=>typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||b instanceof OffscreenCanvas?b.getContext("2d"):null;if(r){let b=m();b.width=e.width,b.height=e.height;let v=g(b);if(v!=null){let _=e.height,S=e.width;if(n!==void 0&&n.resizedHeight!==void 0&&n.resizedWidth!==void 0&&(_=n.resizedHeight,S=n.resizedWidth),n!==void 0){if(d=n,n.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");d.tensorFormat="RGBA",d.height=_,d.width=S}else d.tensorFormat="RGBA",d.height=_,d.width=S;v.drawImage(e,0,0),f=v.getImageData(0,0,S,_).data}else throw new Error("Can not access image data")}else if(l){let b,v;if(n!==void 0&&n.resizedWidth!==void 0&&n.resizedHeight!==void 0?(b=n.resizedHeight,v=n.resizedWidth):(b=e.height,v=e.width),n!==void 0&&(d=n),d.format="RGBA",d.height=b,d.width=v,n!==void 0){let _=m();_.width=v,_.height=b;let S=g(_);if(S!=null)S.putImageData(e,0,0),f=S.getImageData(0,0,v,b).data;else throw new Error("Can not access image data")}else f=e.data}else if(u){if(n===void 0)throw new Error("Please provide image config with format for Imagebitmap");let b=m();b.width=e.width,b.height=e.height;let v=g(b);if(v!=null){let _=e.height,S=e.width;return v.drawImage(e,0,0,S,_),f=v.getImageData(0,0,S,_).data,d.height=_,d.width=S,qf(f,d)}else throw new Error("Can not access image data")}else{if(o)return new Promise((b,v)=>{let _=m(),S=g(_);if(!e||!S)return v();let T=new Image;T.crossOrigin="Anonymous",T.src=e,T.onload=()=>{_.width=T.width,_.height=T.height,S.drawImage(T,0,0,_.width,_.height);let E=S.getImageData(0,0,_.width,_.height);d.height=_.height,d.width=_.width,b(qf(E.data,d))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(f!==void 0)return qf(f,d);throw new Error("Input data provided is not supported - aborted tensor creation")},A2=(e,n)=>{let{width:r,height:l,download:u,dispose:o}=n,f=[1,l,r,4];return new Ra({location:"texture",type:"float32",texture:e,dims:f,download:u,dispose:o})},C2=(e,n)=>{let{dataType:r,dims:l,download:u,dispose:o}=n;return new Ra({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:l,download:u,dispose:o})},O2=(e,n)=>{let{dataType:r,dims:l,download:u,dispose:o}=n;return new Ra({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:l,download:u,dispose:o})},k2=(e,n,r)=>new Ra({location:"cpu-pinned",type:e,data:n,dims:r??[n.length]})}),Ir,ju,Ip,M2,GT=fe(()=>{Ir=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ju=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ip=!1,M2=()=>{if(!Ip){Ip=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,n=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,l=typeof r<"u"&&r.from;e&&(Ir.set("int64",BigInt64Array),ju.set(BigInt64Array,"int64")),n&&(Ir.set("uint64",BigUint64Array),ju.set(BigUint64Array,"uint64")),l?(Ir.set("float16",r),ju.set(r,"float16")):Ir.set("float16",Uint16Array)}}}),R2,N2,VT=fe(()=>{vm(),R2=e=>{let n=1;for(let r=0;r<e.length;r++){let l=e[r];if(typeof l!="number"||!Number.isSafeInteger(l))throw new TypeError(`dims[${r}] must be an integer, got: ${l}`);if(l<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${l}`);n*=l}return n},N2=(e,n)=>{switch(e.location){case"cpu":return new Ra(e.type,e.data,n);case"cpu-pinned":return new Ra({location:"cpu-pinned",data:e.data,type:e.type,dims:n});case"texture":return new Ra({location:"texture",texture:e.texture,type:e.type,dims:n});case"gpu-buffer":return new Ra({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:n});case"ml-tensor":return new Ra({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:n});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ra,vm=fe(()=>{HT(),jT(),GT(),VT(),Ra=class{constructor(e,n,r){M2();let l,u;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,l=e.type,u=e.dims,e.location){case"cpu-pinned":{let f=Ir.get(l);if(!f)throw new TypeError(`unsupported type "${l}" to create tensor from pinned buffer`);if(!(e.data instanceof f))throw new TypeError(`buffer should be of type ${f.name}`);this.cpuData=e.data;break}case"texture":{if(l!=="float32")throw new TypeError(`unsupported type "${l}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(l!=="float32"&&l!=="float16"&&l!=="int32"&&l!=="int64"&&l!=="uint32"&&l!=="uint8"&&l!=="bool"&&l!=="uint4"&&l!=="int4")throw new TypeError(`unsupported type "${l}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(l!=="float32"&&l!=="float16"&&l!=="int32"&&l!=="int64"&&l!=="uint32"&&l!=="uint64"&&l!=="int8"&&l!=="uint8"&&l!=="bool"&&l!=="uint4"&&l!=="int4")throw new TypeError(`unsupported type "${l}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let f,d;if(typeof e=="string")if(l=e,d=r,e==="string"){if(!Array.isArray(n))throw new TypeError("A string tensor's data must be a string array.");f=n}else{let m=Ir.get(e);if(m===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(n)){if(e==="float16"&&m===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${m.name} as data.`);e==="uint64"||e==="int64"?f=m.from(n,BigInt):f=m.from(n)}else if(n instanceof m)f=n;else if(n instanceof Uint8ClampedArray)if(e==="uint8")f=Uint8Array.from(n);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&n instanceof Uint16Array&&m!==Uint16Array)f=new globalThis.Float16Array(n.buffer,n.byteOffset,n.length);else throw new TypeError(`A ${l} tensor's data must be type of ${m}`)}else if(d=n,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let m=typeof e[0];if(m==="string")l="string",f=e;else if(m==="boolean")l="bool",f=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${m}.`)}else if(e instanceof Uint8ClampedArray)l="uint8",f=Uint8Array.from(e);else{let m=ju.get(e.constructor);if(m===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);l=m,f=e}if(d===void 0)d=[f.length];else if(!Array.isArray(d))throw new TypeError("A tensor's dims must be a number array");u=d,this.cpuData=f,this.dataLocation="cpu"}let o=R2(u);if(this.cpuData&&o!==this.cpuData.length&&!((l==="uint4"||l==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=l,this.dims=u,this.size=o}static async fromImage(e,n){return z2(e,n)}static fromTexture(e,n){return A2(e,n)}static fromGpuBuffer(e,n){return C2(e,n)}static fromMLTensor(e,n){return O2(e,n)}static fromPinnedBuffer(e,n,r){return k2(e,n,r)}toDataURL(e){return T2(this,e)}toImageData(e){return E2(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let n=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=n,e&&this.disposer&&(this.disposer(),this.disposer=void 0),n}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return N2(this,e)}}}),cn,D2=fe(()=>{vm(),cn=Ra}),uc,Bp,Nn,pn,Lr,Hr,I2=fe(()=>{S2(),uc=(e,n)=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||console.timeStamp(`${e}::ORT::${n}`)},Bp=(e,n)=>{var u;let r=((u=new Error().stack)==null?void 0:u.split(/\r\n|\r|\n/g))||[],l=!1;for(let o=0;o<r.length;o++){if(l&&!r[o].includes("TRACE_FUNC")){let f=`FUNC_${e}::${r[o].trim().split(" ")[1]}`;n&&(f+=`::${n}`),uc("CPU",f);return}r[o].includes("TRACE_FUNC")&&(l=!0)}},Nn=e=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||Bp("BEGIN",e)},pn=e=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||Bp("END",e)},Lr=e=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||console.time(`ORT::${e}`)},Hr=e=>{(typeof Vt.trace>"u"?!Vt.wasm.trace:!Vt.trace)||console.timeEnd(`ORT::${e}`)}}),B2,WT=fe(()=>{$2(),D2(),I2(),B2=class U2{constructor(n){this.handler=n}async run(n,r,l){Nn(),Lr("InferenceSession.run");let u={},o={};if(typeof n!="object"||n===null||n instanceof cn||Array.isArray(n))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let f=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof cn)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");f=!1;for(let g of r){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);u[g]=null}if(typeof l=="object"&&l!==null)o=l;else if(typeof l<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,b=Object.getOwnPropertyNames(r);for(let v of this.outputNames)if(b.indexOf(v)!==-1){let _=r[v];(_===null||_ instanceof cn)&&(g=!0,f=!1,u[v]=_)}if(g){if(typeof l=="object"&&l!==null)o=l;else if(typeof l<"u")throw new TypeError("'options' must be an object.")}else o=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of this.inputNames)if(typeof n[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(f)for(let g of this.outputNames)u[g]=null;let d=await this.handler.run(n,u,o),m={};for(let g in d)if(Object.hasOwnProperty.call(d,g)){let b=d[g];b instanceof cn?m[g]=b:m[g]=new cn(b.type,b.data,b.dims)}return Hr("InferenceSession.run"),pn(),m}async release(){return this.handler.dispose()}static async create(n,r,l,u){Nn(),Lr("InferenceSession.create");let o,f={};if(typeof n=="string"){if(o=n,typeof r=="object"&&r!==null)f=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(n instanceof Uint8Array){if(o=n,typeof r=="object"&&r!==null)f=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(n instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&n instanceof SharedArrayBuffer){let b=n,v=0,_=n.byteLength;if(typeof r=="object"&&r!==null)f=r;else if(typeof r=="number"){if(v=r,!Number.isSafeInteger(v))throw new RangeError("'byteOffset' must be an integer.");if(v<0||v>=b.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${b.byteLength}).`);if(_=n.byteLength-v,typeof l=="number"){if(_=l,!Number.isSafeInteger(_))throw new RangeError("'byteLength' must be an integer.");if(_<=0||v+_>b.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${b.byteLength-v}].`);if(typeof u=="object"&&u!==null)f=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else if(typeof l<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(b,v,_)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[d,m]=await w2(f),g=await d.createInferenceSessionHandler(o,m);return Hr("InferenceSession.create"),pn(),new U2(g)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),bm,YT=fe(()=>{WT(),bm=B2}),FT=fe(()=>{}),KT=fe(()=>{}),XT=fe(()=>{}),QT=fe(()=>{}),ZT={};cs(ZT,{InferenceSession:()=>bm,TRACE:()=>uc,TRACE_EVENT_BEGIN:()=>Lr,TRACE_EVENT_END:()=>Hr,TRACE_FUNC_BEGIN:()=>Nn,TRACE_FUNC_END:()=>pn,Tensor:()=>cn,env:()=>ht,registerBackend:()=>ns});var Ya=fe(()=>{UT(),LT(),YT(),D2(),FT(),KT(),I2(),XT(),QT()}),_m=fe(()=>{}),q2={};cs(q2,{default:()=>L2});var Up,qp,L2,PT=fe(()=>{var e;Wx(),Fr(),wm(),Up="ort-wasm-proxy-worker",qp=((e=globalThis.self)==null?void 0:e.name)===Up,qp&&(self.onmessage=n=>{let{type:r,in:l}=n.data;try{switch(r){case"init-wasm":$m(l.wasm).then(()=>{qm(l).then(()=>{postMessage({type:r})},u=>{postMessage({type:r,err:u})})},u=>{postMessage({type:r,err:u})});break;case"init-ep":{let{epName:u,env:o}=l;Lm(o,u).then(()=>{postMessage({type:r})},f=>{postMessage({type:r,err:f})});break}case"copy-from":{let{buffer:u}=l,o=mc(u);postMessage({type:r,out:o});break}case"create":{let{model:u,options:o}=l;Hm(u,o).then(f=>{postMessage({type:r,out:f})},f=>{postMessage({type:r,err:f})});break}case"release":jm(l),postMessage({type:r});break;case"run":{let{sessionId:u,inputIndices:o,inputs:f,outputIndices:d,options:m}=l;Gm(u,o,f,d,new Array(d.length).fill(null),m).then(g=>{g.some(b=>b[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:g},Wm([...f,...g]))},g=>{postMessage({type:r,err:g})});break}case"end-profiling":Vm(l),postMessage({type:r});break;default:}}catch(u){postMessage({type:r,err:u})}}),L2=qp?null:n=>new Worker(n??Ma,{type:"module",name:Up})}),H2={};cs(H2,{default:()=>j2});async function iv(e={}){var Dl,ki;var n=e,r=!!globalThis.window,l=!!globalThis.WorkerGlobalScope,u=l&&((Dl=self.name)==null?void 0:Dl.startsWith("em-pthread"));n.mountExternalData=(p,y)=>{p.startsWith("./")&&(p=p.substring(2)),(n.Xc||(n.Xc=new Map)).set(p,y)},n.unmountExternalData=()=>{delete n.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let o=p=>async(...y)=>{var x;try{if(n.Yc)throw Error("Session already started");let w=n.Yc={Kd:y[0],errors:[]},k=await p(...y);if(n.Yc!==w)throw Error("Session mismatch");(x=n.dd)==null||x.flush();let B=w.errors;if(0<B.length){let W=await Promise.all(B);if(W=W.filter(ae=>ae),0<W.length)throw Error(W.join(`
`))}return k}finally{n.Yc=null}};n.jsepInit=(p,y)=>{if(p==="webgpu"){[n.dd,n.Ad,n.Ed,n.ed,n.Dd,n.$b,n.Fd,n.Hd,n.Bd,n.Cd,n.Gd]=y;let x=n.dd;n.jsepRegisterBuffer=(w,k,B,W)=>x.registerBuffer(w,k,B,W),n.jsepGetBuffer=w=>x.getBuffer(w),n.jsepCreateDownloader=(w,k,B)=>x.createDownloader(w,k,B),n.jsepOnCreateSession=w=>{x.onCreateSession(w)},n.jsepOnReleaseSession=w=>{x.onReleaseSession(w)},n.jsepOnRunStart=w=>x.onRunStart(w),n.Id=(w,k)=>{x.upload(w,k)}}else if(p==="webnn"){let x=y[0];[n.Wd,n.sd,n.webnnEnsureTensor,n.td,n.webnnDownloadTensor,n.Rd,n.webnnEnableTraceEvent]=y.slice(1),n.webnnReleaseTensorId=n.sd,n.webnnUploadTensor=n.td,n.webnnRegisterMLContext=n.Rd,n.webnnOnRunStart=w=>x.onRunStart(w),n.webnnOnRunEnd=x.onRunEnd.bind(x),n.webnnOnReleaseSession=w=>{x.onReleaseSession(w)},n.webnnCreateMLTensorDownloader=(w,k)=>x.createMLTensorDownloader(w,k),n.webnnRegisterMLTensor=(w,k,B,W)=>x.registerMLTensor(w,k,B,W),n.webnnCreateMLContext=w=>x.createMLContext(w),n.webnnRegisterMLConstant=(w,k,B,W,ae,ce)=>x.registerMLConstant(w,k,B,W,ae,n.Xc,ce),n.webnnRegisterGraphInput=x.registerGraphInput.bind(x),n.webnnIsGraphInput=x.isGraphInput.bind(x),n.webnnRegisterGraphOutput=x.registerGraphOutput.bind(x),n.webnnIsGraphOutput=x.isGraphOutput.bind(x),n.webnnCreateTemporaryTensor=x.createTemporaryTensor.bind(x),n.webnnIsGraphInputOutputTypeSupported=x.isGraphInputOutputTypeSupported.bind(x)}};let f=()=>{let p=y=>(...x)=>{let w=Kt;return x=y(...x),Kt!=w?new Promise((k,B)=>{Ln={resolve:k,reject:B}}):x};(()=>{for(let y of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])n[y]=p(n[y])})(),o!==void 0&&(n._OrtRun=o(n._OrtRun),n._OrtRunWithBinding=o(n._OrtRunWithBinding)),f=void 0};n.asyncInit=()=>{f==null||f()};var d,m,g=(p,y)=>{throw y},b=import.meta.url,v="";if(r||l){try{v=new URL(".",b).href}catch{}l&&(m=p=>{var y=new XMLHttpRequest;return y.open("GET",p,!1),y.responseType="arraybuffer",y.send(null),new Uint8Array(y.response)}),d=async p=>{if(q(p))return new Promise((x,w)=>{var k=new XMLHttpRequest;k.open("GET",p,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?x(k.response):w(k.status)},k.onerror=w,k.send(null)});var y=await fetch(p,{credentials:"same-origin"});if(y.ok)return y.arrayBuffer();throw Error(y.status+" : "+y.url)}}var _,S,T,E,M,A,z=console.log.bind(console),D=console.error.bind(console),N=z,I=D,V=!1,q=p=>p.startsWith("file://");function C(){Xa.buffer!=ue.buffer&&j()}if(u){let p=function(y){try{var x=y.data,w=x.Sc;if(w==="load"){let k=[];self.onmessage=B=>k.push(B),A=()=>{postMessage({Sc:"loaded"});for(let B of k)p(B);self.onmessage=p};for(let B of x.xd)n[B]&&!n[B].proxy||(n[B]=(...W)=>{postMessage({Sc:"callHandler",wd:B,args:W})},B=="print"&&(N=n[B]),B=="printErr"&&(I=n[B]));Xa=x.Od,j(),S=x.Pd,ve(),_t()}else if(w==="run"){(function(k){var B=(C(),ye)[k+52>>>2>>>0];k=(C(),ye)[k+56>>>2>>>0],Us(B,B-k),Ue(B)})(x.Rc),_l(x.Rc,0,0,1,0,0),io(),$s(x.Rc),J||(bl(),J=!0);try{lo(x.Md,x.bd)}catch(k){if(k!="unwind")throw k}}else x.target!=="setimmediate"&&(w==="checkMailbox"?J&&cr():w&&(I(`worker: received unknown command ${w}`),I(x)))}catch(k){throw Mo(),k}};var J=!1;self.onunhandledrejection=y=>{throw y.reason||y},self.onmessage=p}var ue,pe,he,ge,X,ye,H,te,me,le,we,R=!1;function j(){var p=Xa.buffer;n.HEAP8=ue=new Int8Array(p),he=new Int16Array(p),n.HEAPU8=pe=new Uint8Array(p),ge=new Uint16Array(p),n.HEAP32=X=new Int32Array(p),n.HEAPU32=ye=new Uint32Array(p),H=new Float32Array(p),te=new Float64Array(p),me=new BigInt64Array(p),le=new BigUint64Array(p)}function Z(){R=!0,u?A():ra.sb()}function G(p){throw I(p="Aborted("+p+")"),V=!0,p=new WebAssembly.RuntimeError(p+". Build with -sASSERTIONS for more info."),M==null||M(p),p}function oe(){return{a:{ma:ga,gb:ma,g:so,J:zc,f:Ac,o:Cc,h:Oc,ha:Zr,b:Pr,T:Jr,Ha:lr,n:sr,$:oo,Xa:hs,Da:ms,Fa:gs,Ya:tl,Va:al,Oa:ys,Ua:vs,ka:Qa,Ea:Rt,Ba:Ft,Wa:Bn,Ca:nl,bb:kc,ea:ur,wa:yi,ua:co,da:ll,O:sl,H:Za,va:Rc,_:ws,xa:vi,Ra:mo,za:go,Ia:Dc,sa:Ic,fa:fl,Qa:$s,_a:Pa,R:pl,r:yl,c:rl,hb:pr,y:Bc,M:Es,D:zs,l:hr,s:mr,ib:vo,I:Uc,S:qc,j:Lc,u:As,q:Hc,k:jc,La:Gc,Ma:Vc,Na:Wc,Ja:wo,Ka:$o,ta:xo,db:Fc,ab:Kc,v:Xc,aa:Qc,ga:Zc,$a:So,W:Pc,Za:Jc,Aa:ed,F:Yc,U:ks,la:gr,ya:zo,fb:Eo,eb:Ao,Sa:Oo,Ta:Ns,Ga:rr,V:Ds,ja:xi,Pa:Si,ia:yr,kb:nd,na:Xn,lb:ad,oa:Rl,G:xr,d:Ja,t:Ha,w:En,A:Zs,mb:eu,K:Ci,x:Qs,pa:tu,Y:qt,ba:tn,nb:Cn,ob:en,P:An,qa:Kn,pb:Js,N:Fn,Z:Oi,e:ja,B:Xs,m:Ho,jb:id,p:Ut,z:yt,C:jo,E:Ye,L:Go,qb:Ps,Q:Nl,ca:Vo,X:Wo,rb:ya,ra:zn,i:ko,a:Xa,cb:At}}}async function ve(){function p(w,k){var B=ra=w.exports;w={};for(let[W,ae]of Object.entries(B))typeof ae=="function"?(B=xs(ae),w[W]=B):w[W]=ae;return ra=w,ra=(function(){var W=ra,ae=be=>Re=>be(Re)>>>0,ce=be=>()=>be()>>>0;return(W=Object.assign({},W)).tb=ae(W.tb),W.Xb=ce(W.Xb),W.Zb=ae(W.Zb),W.lc=ae(W.lc),W.mc=ce(W.mc),W.qc=ae(W.qc),W})(),Xr.push(ra._b),Is=(w=ra).tb,bl=w.ub,n._OrtInit=w.vb,n._OrtGetLastError=w.wb,n._OrtCreateSessionOptions=w.xb,n._OrtAppendExecutionProvider=w.yb,n._OrtAddFreeDimensionOverride=w.zb,n._OrtAddSessionConfigEntry=w.Ab,n._OrtReleaseSessionOptions=w.Bb,n._OrtCreateSession=w.Cb,n._OrtReleaseSession=w.Db,n._OrtGetInputOutputCount=w.Eb,n._OrtGetInputOutputMetadata=w.Fb,n._OrtFree=w.Gb,n._OrtCreateTensor=w.Hb,n._OrtGetTensorData=w.Ib,n._OrtReleaseTensor=w.Jb,n._OrtCreateRunOptions=w.Kb,n._OrtAddRunConfigEntry=w.Lb,n._OrtReleaseRunOptions=w.Mb,n._OrtCreateBinding=w.Nb,n._OrtBindInput=w.Ob,n._OrtBindOutput=w.Pb,n._OrtClearBoundOutputs=w.Qb,n._OrtReleaseBinding=w.Rb,n._OrtRunWithBinding=w.Sb,n._OrtRun=w.Tb,n._OrtEndProfiling=w.Ub,n._JsepOutput=w.Vb,n._JsepGetNodeName=w.Wb,Ti=w.Xb,Ta=n._free=w.Yb,Ei=n._malloc=w.Zb,_l=w.ac,Mo=w.bc,Ro=w.cc,No=w.dc,Bs=w.ec,Do=w.fc,na=w.gc,Ie=w.hc,zi=w.ic,Us=w.jc,Ue=w.kc,wl=w.lc,qe=w.mc,Io=w.nc,wn=w.oc,$l=w.pc,Ai=w.qc,xl=w.rc,Sl=w.sc,$n=w.tc,jn=w.uc,Tl=w.vc,qs=w.wc,xn=w.xc,Ls=w.yc,Hs=w.zc,js=w.Ac,Bo=w.Bc,Uo=w.Cc,qo=w.Dc,Gs=w.Ec,Vs=w.Fc,El=w.Gc,ha=w.Hc,vr=w.Ic,oa=w.Jc,Gn=w.Kc,zl=w.Lc,br=w.Mc,_r=w.Nc,Al=w.Pc,Sn=w.Qc,Ws=w.$c,wr=w.ad,Vn=w.fd,Lo=w.jd,ia=w.kd,Cl=w.ld,La=w.md,Ys=w.nd,$r=w.od,Tn=w.pd,Ol=w.qd,Fs=w.vd,kl=w.Sd,Ks=w.Td,fa=w.Ud,Wn=w.Vd,S=k,ra}var y,x=oe();return n.instantiateWasm?new Promise(w=>{n.instantiateWasm(x,(k,B)=>{w(p(k,B))})}):u?p(new WebAssembly.Instance(S,oe()),S):(we??(we=n.locateFile?n.locateFile?n.locateFile("ort-wasm-simd-threaded.jsep.wasm",v):v+"ort-wasm-simd-threaded.jsep.wasm":new URL("/bluecells/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href),y=await(async function(w){var k=we;if(!_&&!q(k))try{var B=fetch(k,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(B,w)}catch(W){I(`wasm streaming compile failed: ${W}`),I("falling back to ArrayBuffer instantiation")}return(async function(W,ae){try{var ce=await(async function(be){if(!_)try{var Re=await d(be);return new Uint8Array(Re)}catch{}if(be==we&&_)be=new Uint8Array(_);else{if(!m)throw"both async and sync fetching of the wasm failed";be=m(be)}return be})(W);return await WebAssembly.instantiate(ce,ae)}catch(be){I(`failed to asynchronously prepare wasm: ${be}`),G(be)}})(k,w)})(x),p(y.instance,y.module))}class _e{constructor(y){Yy(this,"name","ExitStatus");this.message=`Program terminated with exit(${y})`,this.status=y}}var Ge=p=>{p.terminate(),p.onmessage=()=>{}},Be=[],bt=0,st=null,Pt=p=>{Fa.length==0&&(ro(),Jt(Fa[0]));var y=Fa.pop();if(!y)return 6;Dn.push(y),Ka[p.Rc]=y,y.Rc=p.Rc;var x={Sc:"run",Md:p.Ld,bd:p.bd,Rc:p.Rc};return y.postMessage(x,p.rd),0},it=0,ze=(p,y,...x)=>{var w,k=16*x.length,B=qe(),W=wl(k),ae=W>>>3;for(w of x)typeof w=="bigint"?((C(),me)[ae++>>>0]=1n,(C(),me)[ae++>>>0]=w):((C(),me)[ae++>>>0]=0n,(C(),te)[ae++>>>0]=w);return p=Ro(p,0,k,W,y),Ue(B),p};function At(p){if(u)return ze(0,1,p);if(T=p,!(0<it)){for(var y of Dn)Ge(y);for(y of Fa)Ge(y);Fa=[],Dn=[],Ka={},V=!0}g(0,new _e(p))}function mn(p){if(u)return ze(1,0,p);rr(p)}var rr=p=>{if(T=p,u)throw mn(p),"unwind";At(p)},Fa=[],Dn=[],Xr=[],Ka={},no=p=>{var y=p.Rc;delete Ka[y],Fa.push(p),Dn.splice(Dn.indexOf(p),1),p.Rc=0,No(y)};function io(){Xr.forEach(p=>p())}var Jt=p=>new Promise(y=>{p.onmessage=k=>{var B=k.data;if(k=B.Sc,B.Zc&&B.Zc!=Ti()){var W=Ka[B.Zc];W?W.postMessage(B,B.rd):I(`Internal error! Worker sent a message "${k}" to target pthread ${B.Zc}, but that thread no longer exists!`)}else k==="checkMailbox"?cr():k==="spawnThread"?Pt(B):k==="cleanupThread"?fr(()=>{no(Ka[B.Nd])}):k==="loaded"?(p.loaded=!0,y(p)):B.target==="setimmediate"?p.postMessage(B):k==="uncaughtException"?p.onerror(B.error):k==="callHandler"?n[B.wd](...B.args):k&&I(`worker sent an unknown command ${k}`)},p.onerror=k=>{throw I(`worker sent an error! ${k.filename}:${k.lineno}: ${k.message}`),k};var x,w=[];for(x of[])n.propertyIsEnumerable(x)&&w.push(x);p.postMessage({Sc:"load",xd:w,Od:Xa,Pd:S})});function ro(){var p=new Worker((()=>{let y=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new y("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Fa.push(p)}var Xa,lo=(p,y)=>{it=0,p=Sl(p,y),0<it?T=p:Bs(p)},In=[],Qr=0;function so(p){var y=new Ia(p>>>=0);return(C(),ue)[y.Tc+12>>>0]==0&&(gi(y,!0),Qr--),ea(y,!1),In.push(y),Ai(p)}var mi=0,zc=()=>{Ie(0,0);var p=In.pop();Io(p.cd),mi=0};function gi(p,y){y=y?1:0,(C(),ue)[p.Tc+12>>>0]=y}function ea(p,y){y=y?1:0,(C(),ue)[p.Tc+13>>>0]=y}class Ia{constructor(y){this.cd=y,this.Tc=y-24}}var Yt=p=>{var y=mi;if(!y)return zi(0),0;var x=new Ia(y);(C(),ye)[x.Tc+16>>>2>>>0]=y;var w=(C(),ye)[x.Tc+4>>>2>>>0];if(!w)return zi(0),y;for(var k of p){if(k===0||k===w)break;if($l(k,w,x.Tc+16))return zi(k),y}return zi(w),y};function Ac(){return Yt([])}function Cc(p){return Yt([p>>>0])}function Oc(p,y,x,w){return Yt([p>>>0,y>>>0,x>>>0,w>>>0])}var Zr=()=>{var p=In.pop();p||G("no exception to throw");var y=p.cd;throw(C(),ue)[p.Tc+13>>>0]==0&&(In.push(p),ea(p,!0),gi(p,!1),Qr++),wn(y),mi=y};function Pr(p,y,x){var w=new Ia(p>>>=0);throw y>>>=0,x>>>=0,(C(),ye)[w.Tc+16>>>2>>>0]=0,(C(),ye)[w.Tc+4>>>2>>>0]=y,(C(),ye)[w.Tc+8>>>2>>>0]=x,wn(p),Qr++,mi=p}var Jr=()=>Qr;function gn(p,y,x,w){return u?ze(2,1,p,y,x,w):lr(p,y,x,w)}function lr(p,y,x,w){if(p>>>=0,y>>>=0,x>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var k=[];return u&&k.length===0?gn(p,y,x,w):(p={Ld:x,Rc:p,bd:w,rd:k},u?(p.Sc="spawnThread",postMessage(p,k),0):Pt(p))}function sr(p){throw mi||(mi=p>>>0),mi}var uo=globalThis.TextDecoder&&new TextDecoder,ps=(p,y,x,w)=>{if(x=y+x,w)return x;for(;p[y]&&!(y>=x);)++y;return y},el=(p,y=0,x,w)=>{if(16<(x=ps(p,y>>>=0,x,w))-y&&p.buffer&&uo)return uo.decode(p.buffer instanceof ArrayBuffer?p.subarray(y,x):p.slice(y,x));for(w="";y<x;){var k=p[y++];if(128&k){var B=63&p[y++];if((224&k)==192)w+=String.fromCharCode((31&k)<<6|B);else{var W=63&p[y++];65536>(k=(240&k)==224?(15&k)<<12|B<<6|W:(7&k)<<18|B<<12|W<<6|63&p[y++])?w+=String.fromCharCode(k):(k-=65536,w+=String.fromCharCode(55296|k>>10,56320|1023&k))}}else w+=String.fromCharCode(k)}return w},gt=(p,y,x)=>(p>>>=0)?el((C(),pe),p,y,x):"";function oo(p,y,x){return u?ze(3,1,p,y,x):0}function hs(p,y){if(u)return ze(4,1,p,y)}function ms(p,y){if(u)return ze(5,1,p,y)}function gs(p,y,x){if(u)return ze(6,1,p,y,x)}function tl(p,y,x){return u?ze(7,1,p,y,x):0}function al(p,y){if(u)return ze(8,1,p,y)}function ys(p,y,x){if(u)return ze(9,1,p,y,x)}function vs(p,y,x,w){if(u)return ze(10,1,p,y,x,w)}function Qa(p,y,x,w){if(u)return ze(11,1,p,y,x,w)}function Rt(p,y,x,w){if(u)return ze(12,1,p,y,x,w)}function Ft(p){if(u)return ze(13,1,p)}function Bn(p,y){if(u)return ze(14,1,p,y)}function nl(p,y,x){if(u)return ze(15,1,p,y,x)}var kc=()=>G(""),Ba=p=>{p>>>=0;for(var y="";;){var x=(C(),pe)[p++>>>0];if(!x)return y;y+=String.fromCharCode(x)}},il={},Un={},yn=class extends Error{constructor(p){super(p),this.name="BindingError"}};function ta(p,y,x={}){return(function(w,k,B={}){var W=k.name;if(!w)throw new yn(`type "${W}" must have a positive integer typeid pointer`);if(Un.hasOwnProperty(w)){if(B.yd)return;throw new yn(`Cannot register type '${W}' twice`)}Un[w]=k,il.hasOwnProperty(w)&&(k=il[w],delete il[w],k.forEach(ae=>ae()))})(p,y,x)}var qn=(p,y,x)=>{switch(y){case 1:return x?w=>(C(),ue)[w>>>0]:w=>(C(),pe)[w>>>0];case 2:return x?w=>(C(),he)[w>>>1>>>0]:w=>(C(),ge)[w>>>1>>>0];case 4:return x?w=>(C(),X)[w>>>2>>>0]:w=>(C(),ye)[w>>>2>>>0];case 8:return x?w=>(C(),me)[w>>>3>>>0]:w=>(C(),le)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${y}): ${p}`)}};function ur(p,y,x,w,k){p>>>=0,x>>>=0,y=Ba(y>>>0);let B=W=>W;if(w=w===0n){let W=8*x;B=ae=>BigInt.asUintN(W,ae),k=B(k)}ta(p,{name:y,Oc:B,Vc:(W,ae)=>(typeof ae=="number"&&(ae=BigInt(ae)),ae),Uc:qn(y,x,!w),Wc:null})}function yi(p,y,x,w){ta(p>>>=0,{name:y=Ba(y>>>0),Oc:function(k){return!!k},Vc:function(k,B){return B?x:w},Uc:function(k){return this.Oc((C(),pe)[k>>>0])},Wc:null})}var Ct=[],vn=[0,1,,1,null,1,!0,1,!1,1];function rl(p){9<(p>>>=0)&&--vn[p+1]==0&&(vn[p]=void 0,Ct.push(p))}var Nt=p=>{if(!p)throw new yn(`Cannot use deleted val. handle = ${p}`);return vn[p]},jt=p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let y=Ct.pop()||vn.length;return vn[y]=p,vn[y+1]=1,y}};function bs(p){return this.Oc((C(),ye)[p>>>2>>>0])}var fo={name:"emscripten::val",Oc:p=>{var y=Nt(p);return rl(p),y},Vc:(p,y)=>jt(y),Uc:bs,Wc:null};function co(p){return ta(p>>>0,fo)}var Mc=(p,y)=>{switch(y){case 4:return function(x){return this.Oc((C(),H)[x>>>2>>>0])};case 8:return function(x){return this.Oc((C(),te)[x>>>3>>>0])};default:throw new TypeError(`invalid float width (${y}): ${p}`)}};function ll(p,y,x){x>>>=0,ta(p>>>=0,{name:y=Ba(y>>>0),Oc:w=>w,Vc:(w,k)=>k,Uc:Mc(y,x),Wc:null})}function sl(p,y,x,w,k){p>>>=0,x>>>=0,y=Ba(y>>>0);let B=ae=>ae;if(w===0){var W=32-8*x;B=ae=>ae<<W>>>W,k=B(k)}ta(p,{name:y,Oc:B,Vc:(ae,ce)=>ce,Uc:qn(y,x,w!==0),Wc:null})}function Za(p,y,x){function w(B){var W=(C(),ye)[B>>>2>>>0];return B=(C(),ye)[B+4>>>2>>>0],new k((C(),ue).buffer,B,W)}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][y];ta(p>>>=0,{name:x=Ba(x>>>0),Oc:w,Uc:w},{yd:!0})}var Ot=(p,y,x)=>{var w=(C(),pe);if(y>>>=0,0<x){var k=y;x=y+x-1;for(var B=0;B<p.length;++B){var W=p.codePointAt(B);if(127>=W){if(y>=x)break;w[y++>>>0]=W}else if(2047>=W){if(y+1>=x)break;w[y++>>>0]=192|W>>6,w[y++>>>0]=128|63&W}else if(65535>=W){if(y+2>=x)break;w[y++>>>0]=224|W>>12,w[y++>>>0]=128|W>>6&63,w[y++>>>0]=128|63&W}else{if(y+3>=x)break;w[y++>>>0]=240|W>>18,w[y++>>>0]=128|W>>12&63,w[y++>>>0]=128|W>>6&63,w[y++>>>0]=128|63&W,B++}}w[y>>>0]=0,p=y-k}else p=0;return p},or=p=>{for(var y=0,x=0;x<p.length;++x){var w=p.charCodeAt(x);127>=w?y++:2047>=w?y+=2:55296<=w&&57343>=w?(y+=4,++x):y+=3}return y};function Rc(p,y){ta(p>>>=0,{name:y=Ba(y>>>0),Oc(x){var w=(C(),ye)[x>>>2>>>0];return w=gt(x+4,w,!0),Ta(x),w},Vc(x,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var k=typeof w=="string";if(!(k||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new yn("Cannot pass non-string to std::string");var B=k?or(w):w.length,W=Ei(4+B+1),ae=W+4;return(C(),ye)[W>>>2>>>0]=B,k?Ot(w,ae,B+1):(C(),pe).set(w,ae>>>0),x!==null&&x.push(Ta,W),W},Uc:bs,Wc(x){Ta(x)}})}var ul=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,po=(p,y,x)=>{if(p>>>=1,16<(y=ps((C(),ge),p,y/2,x))-p&&ul)return ul.decode((C(),ge).slice(p,y));for(x="";p<y;++p){var w=(C(),ge)[p>>>0];x+=String.fromCharCode(w)}return x},ol=(p,y,x)=>{if(x??(x=2147483647),2>x)return 0;var w=y;x=(x-=2)<2*p.length?x/2:p.length;for(var k=0;k<x;++k){var B=p.charCodeAt(k);(C(),he)[y>>>1>>>0]=B,y+=2}return(C(),he)[y>>>1>>>0]=0,y-w},Nc=p=>2*p.length,pa=(p,y,x)=>{var w="";p>>>=2;for(var k=0;!(k>=y/4);k++){var B=(C(),ye)[p+k>>>0];if(!B&&!x)break;w+=String.fromCodePoint(B)}return w},_s=(p,y,x)=>{if(y>>>=0,x??(x=2147483647),4>x)return 0;var w=y;x=w+x-4;for(var k=0;k<p.length;++k){var B=p.codePointAt(k);if(65535<B&&k++,(C(),X)[y>>>2>>>0]=B,(y+=4)+4>x)break}return(C(),X)[y>>>2>>>0]=0,y-w},ho=p=>{for(var y=0,x=0;x<p.length;++x)65535<p.codePointAt(x)&&x++,y+=4;return y};function ws(p,y,x){if(p>>>=0,y>>>=0,x=Ba(x>>>=0),y===2)var w=po,k=ol,B=Nc;else w=pa,k=_s,B=ho;ta(p,{name:x,Oc:W=>{var ae=(C(),ye)[W>>>2>>>0];return ae=w(W+4,ae*y,!0),Ta(W),ae},Vc:(W,ae)=>{if(typeof ae!="string")throw new yn(`Cannot pass non-string to C++ string type ${x}`);var ce=B(ae),be=Ei(4+ce+y);return(C(),ye)[be>>>2>>>0]=ce/y,k(ae,be+4,ce+y),W!==null&&W.push(Ta,be),be},Uc:bs,Wc(W){Ta(W)}})}function vi(p,y){ta(p>>>=0,{zd:!0,name:y=Ba(y>>>0),Oc:()=>{},Vc:()=>{}})}function mo(p){_l(p>>>0,!l,1,!r,131072,!1),io()}var fr=p=>{if(!V)try{if(p(),!(0<it))try{u?Ti()&&Bs(T):rr(T)}catch(y){y instanceof _e||y=="unwind"||g(0,y)}}catch(y){y instanceof _e||y=="unwind"||g(0,y)}},bi=!Atomics.waitAsync||((ki=globalThis.navigator)==null?void 0:ki.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function $s(p){p>>>=0,bi||(Atomics.waitAsync((C(),X),p>>>2,p).value.then(cr),p+=128,Atomics.store((C(),X),p>>>2,1))}var cr=()=>fr(()=>{var p=Ti();p&&($s(p),na())});function go(p,y){(p>>>=0)==y>>>0?setTimeout(cr):u?postMessage({Zc:p,Sc:"checkMailbox"}):(p=Ka[p])&&p.postMessage({Sc:"checkMailbox"})}var dr=[];function Dc(p,y,x,w,k){for(y>>>=0,k>>>=0,dr.length=0,x=k>>>3,w=k+w>>>3;x<w;){var B;B=(C(),me)[x++>>>0]?(C(),me)[x++>>>0]:(C(),te)[x++>>>0],dr.push(B)}return(y?Yn[y]:Ml[p])(...dr)}var Ic=()=>{it=0};function fl(p){p>>>=0,u?postMessage({Sc:"cleanupThread",Nd:p}):no(Ka[p])}function Pa(p){}var _i=p=>{try{p()}catch(y){G(y)}};function xs(p){var y=(...x)=>{wi.push(p);try{return p(...x)}finally{V||(wi.pop(),Kt&&ua===1&&wi.length===0&&(ua=0,it+=1,_i(Ks),typeof Fibers<"u"&&Fibers.Zd()))}};return Ua.set(p,y),y}var ua=0,Kt=null,Ss=0,wi=[],cl=new Map,$i=new Map,Ua=new Map,Ts=0,Ln=null,bn=[],dl=p=>(function(y){if(!V){if(ua===0){var x=!1,w=!1;y((k=0)=>{if(!V&&(Ss=k,x=!0,w)){ua=2,_i(()=>fa(Kt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),k=!1;try{var B=(function(){var ce=(C(),X)[Kt+8>>>2>>>0];return ce=$i.get(ce),ce=Ua.get(ce),--it,ce()})()}catch(ce){B=ce,k=!0}var W=!1;if(!Kt){var ae=Ln;ae&&(Ln=null,(k?ae.reject:ae.resolve)(B),W=!0)}if(k&&!W)throw B}}),w=!0,x||(ua=1,Kt=(function(){var k=Ei(65548),B=k+12;if((C(),ye)[k>>>2>>>0]=B,(C(),ye)[k+4>>>2>>>0]=B+65536,B=wi[0],!cl.has(B)){var W=Ts++;cl.set(B,W),$i.set(W,B)}return B=cl.get(B),(C(),X)[k+8>>>2>>>0]=B,k})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),_i(()=>kl(Kt)))}else ua===2?(ua=0,_i(Wn),Ta(Kt),Kt=null,bn.forEach(fr)):G(`invalid state: ${ua}`);return Ss}})(y=>{p().then(y)});function pl(p){return p>>>=0,dl(async()=>{var y=await Nt(p);return jt(y)})}var hl=[],ml=p=>{var y=hl.length;return hl.push(p),y},gl=(p,y)=>{for(var x=Array(p),w=0;w<p;++w){var k=w,B=(C(),ye)[y+4*w>>>2>>>0],W=Un[B];if(W===void 0)throw p=`parameter ${w}`,B=Is(B),y=Ba(B),Ta(B),new yn(`${p} has unknown type ${y}`);x[k]=W}return x},yo=(p,y,x)=>{var w=[];return p=p(w,x),w.length&&((C(),ye)[y>>>2>>>0]=jt(w)),p},aa={},qa=p=>{var y=aa[p];return y===void 0?Ba(p):y};function yl(p,y,x){var[w,...k]=gl(p,y>>>0);y=w.Vc.bind(w);var B=k.map(ce=>ce.Uc.bind(ce));p--;var W={toValue:Nt};switch(p=B.map((ce,be)=>{var Re=`argFromPtr${be}`;return W[Re]=ce,`${Re}(args${be?"+"+8*be:""})`}),x){case 0:var ae="toValue(handle)";break;case 2:ae="new (toValue(handle))";break;case 3:ae="";break;case 1:W.getStringOrSymbol=qa,ae="toValue(handle)[getStringOrSymbol(methodName)]"}return ae+=`(${p})`,w.zd||(W.toReturnWire=y,W.emval_returnValue=yo,ae=`return emval_returnValue(toReturnWire, destructorsRef, ${ae})`),ae=`return function (handle, methodName, destructorsRef, args) {
  ${ae}
  }`,x=new Function(Object.keys(W),ae)(...Object.values(W)),ae=`methodCaller<(${k.map(ce=>ce.name)}) => ${w.name}>`,ml(Object.defineProperty(x,"name",{value:ae}))}function pr(p,y){return y>>>=0,(p=Nt(p>>>0))==Nt(y)}function Bc(p){return(p>>>=0)?(p=qa(p),jt(globalThis[p])):jt(globalThis)}function Es(p){return p=qa(p>>>0),jt(n[p])}function zs(p,y){return y>>>=0,p=Nt(p>>>0),y=Nt(y),jt(p[y])}function hr(p){9<(p>>>=0)&&(vn[p+1]+=1)}function mr(p,y,x,w,k){return hl[p>>>0](y>>>0,x>>>0,w>>>0,k>>>0)}function vo(p,y,x,w,k){return mr(p>>>0,y>>>0,x>>>0,w>>>0,k>>>0)}function Uc(){return jt([])}function qc(p){p=Nt(p>>>0);for(var y=Array(p.length),x=0;x<p.length;x++)y[x]=p[x];return jt(y)}function Lc(p){return jt(qa(p>>>0))}function As(){return jt({})}function Hc(p){for(var y=Nt(p>>>=0);y.length;){var x=y.pop();y.pop()(x)}rl(p)}function jc(p,y,x){y>>>=0,x>>>=0,p=Nt(p>>>0),y=Nt(y),x=Nt(x),p[y]=x}function Gc(p,y){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),y>>>=0,p=new Date(1e3*p),(C(),X)[y>>>2>>>0]=p.getUTCSeconds(),(C(),X)[y+4>>>2>>>0]=p.getUTCMinutes(),(C(),X)[y+8>>>2>>>0]=p.getUTCHours(),(C(),X)[y+12>>>2>>>0]=p.getUTCDate(),(C(),X)[y+16>>>2>>>0]=p.getUTCMonth(),(C(),X)[y+20>>>2>>>0]=p.getUTCFullYear()-1900,(C(),X)[y+24>>>2>>>0]=p.getUTCDay(),p=(p.getTime()-Date.UTC(p.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(C(),X)[y+28>>>2>>>0]=p}var bo=p=>p%4==0&&(p%100!=0||p%400==0),_o=[0,31,60,91,121,152,182,213,244,274,305,335],Cs=[0,31,59,90,120,151,181,212,243,273,304,334];function Vc(p,y){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),y>>>=0,p=new Date(1e3*p),(C(),X)[y>>>2>>>0]=p.getSeconds(),(C(),X)[y+4>>>2>>>0]=p.getMinutes(),(C(),X)[y+8>>>2>>>0]=p.getHours(),(C(),X)[y+12>>>2>>>0]=p.getDate(),(C(),X)[y+16>>>2>>>0]=p.getMonth(),(C(),X)[y+20>>>2>>>0]=p.getFullYear()-1900,(C(),X)[y+24>>>2>>>0]=p.getDay();var x=(bo(p.getFullYear())?_o:Cs)[p.getMonth()]+p.getDate()-1|0;(C(),X)[y+28>>>2>>>0]=x,(C(),X)[y+36>>>2>>>0]=-60*p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset();var w=new Date(p.getFullYear(),0,1).getTimezoneOffset();p=0|(x!=w&&p.getTimezoneOffset()==Math.min(w,x)),(C(),X)[y+32>>>2>>>0]=p}function Wc(p){p>>>=0;var y=new Date((C(),X)[p+20>>>2>>>0]+1900,(C(),X)[p+16>>>2>>>0],(C(),X)[p+12>>>2>>>0],(C(),X)[p+8>>>2>>>0],(C(),X)[p+4>>>2>>>0],(C(),X)[p>>>2>>>0],0),x=(C(),X)[p+32>>>2>>>0],w=y.getTimezoneOffset(),k=new Date(y.getFullYear(),6,1).getTimezoneOffset(),B=new Date(y.getFullYear(),0,1).getTimezoneOffset(),W=Math.min(B,k);return 0>x?(C(),X)[p+32>>>2>>>0]=+(k!=B&&W==w):0<x!=(W==w)&&(k=Math.max(B,k),y.setTime(y.getTime()+6e4*((0<x?W:k)-w))),(C(),X)[p+24>>>2>>>0]=y.getDay(),x=(bo(y.getFullYear())?_o:Cs)[y.getMonth()]+y.getDate()-1|0,(C(),X)[p+28>>>2>>>0]=x,(C(),X)[p>>>2>>>0]=y.getSeconds(),(C(),X)[p+4>>>2>>>0]=y.getMinutes(),(C(),X)[p+8>>>2>>>0]=y.getHours(),(C(),X)[p+12>>>2>>>0]=y.getDate(),(C(),X)[p+16>>>2>>>0]=y.getMonth(),(C(),X)[p+20>>>2>>>0]=y.getYear(),p=y.getTime(),BigInt(isNaN(p)?-1:p/1e3)}function wo(p,y,x,w,k,B,W){return u?ze(16,1,p,y,x,w,k,B,W):-52}function $o(p,y,x,w,k,B){if(u)return ze(17,1,p,y,x,w,k,B)}var Hn={},Yc=()=>performance.timeOrigin+performance.now();function xo(p,y){if(u)return ze(18,1,p,y);if(Hn[p]&&(clearTimeout(Hn[p].id),delete Hn[p]),!y)return 0;var x=setTimeout(()=>{delete Hn[p],fr(()=>Do(p,performance.timeOrigin+performance.now()))},y);return Hn[p]={id:x,Yd:y},0}function Fc(p,y,x,w){p>>>=0,y>>>=0,x>>>=0,w>>>=0;var k=new Date().getFullYear(),B=new Date(k,0,1).getTimezoneOffset();k=new Date(k,6,1).getTimezoneOffset();var W=Math.max(B,k);(C(),ye)[p>>>2>>>0]=60*W,(C(),X)[y>>>2>>>0]=+(B!=k),p=(y=ae=>{var ce=Math.abs(ae);return`UTC${0<=ae?"-":"+"}${String(Math.floor(ce/60)).padStart(2,"0")}${String(ce%60).padStart(2,"0")}`})(B),y=y(k),k<B?(Ot(p,x,17),Ot(y,w,17)):(Ot(p,w,17),Ot(y,x,17))}var So=()=>Date.now();function Kc(p,y,x){return x>>>=0,0<=p&&3>=p?(p===0?p=Date.now():p=performance.timeOrigin+performance.now(),p=Math.round(1e6*p),(C(),me)[x>>>3>>>0]=BigInt(p),0):28}var Os=[],To=(p,y)=>{Os.length=0;for(var x;x=(C(),pe)[p++>>>0];){var w=x!=105;y+=(w&=x!=112)&&y%8?4:0,Os.push(x==112?(C(),ye)[y>>>2>>>0]:x==106?(C(),me)[y>>>3>>>0]:x==105?(C(),X)[y>>>2>>>0]:(C(),te)[y>>>3>>>0]),y+=w?8:4}return Os};function Xc(p,y,x){return p>>>=0,y=To(y>>>0,x>>>0),Yn[p](...y)}function Qc(p,y,x){return p>>>=0,y=To(y>>>0,x>>>0),Yn[p](...y)}var Zc=()=>{};function Pc(p,y){return I(gt(p>>>0,y>>>0))}var Jc=()=>{throw it+=1,"unwind"};function ed(){return 4294901760}var ks=()=>navigator.hardwareConcurrency,Sa={},vl=p=>{var y;return(y=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(p))?+y[1]:(y=/:(\d+):\d+(?:\)|$)/.exec(p))?2147483648|+y[1]:0},Ms=p=>{for(var y of p)(p=vl(y))&&(Sa[p]=y)};function Eo(){var p=Error().stack.toString().split(`
`);return p[0]=="Error"&&p.shift(),Ms(p),Sa.gd=vl(p[3]),Sa.Jd=p,Sa.gd}function gr(p){if(!(p=Sa[p>>>0]))return 0;var y;if(y=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(p))p=y[1];else if(y=/^\s+at (.*) \(.*\)$/.exec(p))p=y[1];else{if(!(y=/^(.+?)@/.exec(p)))return 0;p=y[1]}Ta(gr.hd??0),y=or(p)+1;var x=Ei(y);return x&&Ot(p,x,y),gr.hd=x,gr.hd}function zo(p){p>>>=0;var y=(C(),pe).length;if(p<=y||4294901760<p)return!1;for(var x=1;4>=x;x*=2){var w=y*(1+.2/x);w=Math.min(w,p+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(p,w)/65536))-Xa.buffer.byteLength+65535)/65536|0;try{Xa.grow(w),j();var k=1;break e}catch{}k=void 0}if(k)return!0}return!1}function Ao(p,y,x){if(p>>>=0,y>>>=0,Sa.gd==p)var w=Sa.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Ms(w);for(var k=3;w[k]&&vl(w[k])!=p;)++k;for(p=0;p<x&&w[p+k];++p)(C(),X)[y+4*p>>>2>>>0]=vl(w[p+k]);return p}var _n,Rs={},Co=()=>{var w;if(!_n){var p,y={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(p in Rs)Rs[p]===void 0?delete y[p]:y[p]=Rs[p];var x=[];for(p in y)x.push(`${p}=${y[p]}`);_n=x}return _n};function Oo(p,y){if(u)return ze(19,1,p,y);p>>>=0,y>>>=0;var x,w=0,k=0;for(x of Co()){var B=y+w;(C(),ye)[p+k>>>2>>>0]=B,w+=Ot(x,B,1/0)+1,k+=4}return 0}function Ns(p,y){if(u)return ze(20,1,p,y);p>>>=0,y>>>=0;var x=Co();for(var w of((C(),ye)[p>>>2>>>0]=x.length,p=0,x))p+=or(w)+1;return(C(),ye)[y>>>2>>>0]=p,0}function Ds(p){return u?ze(21,1,p):52}function xi(p,y,x,w){return u?ze(22,1,p,y,x,w):52}function Si(p,y,x,w){return u?ze(23,1,p,y,x,w):70}var td=[null,[],[]];function yr(p,y,x,w){if(u)return ze(24,1,p,y,x,w);y>>>=0,x>>>=0,w>>>=0;for(var k=0,B=0;B<x;B++){var W=(C(),ye)[y>>>2>>>0],ae=(C(),ye)[y+4>>>2>>>0];y+=8;for(var ce=0;ce<ae;ce++){var be=p,Re=(C(),pe)[W+ce>>>0],We=td[be];Re===0||Re===10?((be===1?N:I)(el(We)),We.length=0):We.push(Re)}k+=ae}return(C(),ye)[w>>>2>>>0]=k,0}function ko(p){return p>>>0}u||(function(){for(var p=n.numThreads-1;p--;)ro();Be.push(async()=>{var y=(async function(){if(!u)return Promise.all(Fa.map(Jt))})();bt++,await y,--bt==0&&st&&(y=st,st=null,y())})})(),u||(Xa=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),j()),n.wasmBinary&&(_=n.wasmBinary),n.stackSave=()=>qe(),n.stackRestore=p=>Ue(p),n.stackAlloc=p=>wl(p),n.setValue=function(p,y,x="i8"){switch(x.endsWith("*")&&(x="*"),x){case"i1":case"i8":(C(),ue)[p>>>0]=y;break;case"i16":(C(),he)[p>>>1>>>0]=y;break;case"i32":(C(),X)[p>>>2>>>0]=y;break;case"i64":(C(),me)[p>>>3>>>0]=BigInt(y);break;case"float":(C(),H)[p>>>2>>>0]=y;break;case"double":(C(),te)[p>>>3>>>0]=y;break;case"*":(C(),ye)[p>>>2>>>0]=y;break;default:G(`invalid type for setValue: ${x}`)}},n.getValue=function(p,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":case"i8":return(C(),ue)[p>>>0];case"i16":return(C(),he)[p>>>1>>>0];case"i32":return(C(),X)[p>>>2>>>0];case"i64":return(C(),me)[p>>>3>>>0];case"float":return(C(),H)[p>>>2>>>0];case"double":return(C(),te)[p>>>3>>>0];case"*":return(C(),ye)[p>>>2>>>0];default:G(`invalid type for getValue: ${y}`)}},n.UTF8ToString=gt,n.stringToUTF8=Ot,n.lengthBytesUTF8=or;var Is,bl,Ti,Ta,Ei,_l,Mo,Ro,No,Bs,Do,na,Ie,zi,Us,Ue,wl,qe,Io,wn,$l,Ai,xl,Sl,$n,jn,Tl,qs,xn,Ls,Hs,js,Bo,Uo,qo,Gs,Vs,El,ha,vr,oa,Gn,zl,br,_r,Al,Sn,Ws,wr,Vn,Lo,ia,Cl,La,Ys,$r,Tn,Ol,Fs,kl,Ks,fa,Wn,ra,Ml=[At,mn,gn,oo,hs,ms,gs,tl,al,ys,vs,Qa,Rt,Ft,Bn,nl,wo,$o,xo,Oo,Ns,Ds,xi,Si,yr],Yn={973212:(p,y,x,w,k)=>{if(n===void 0||!n.Xc)return 1;if((p=gt(Number(p>>>0))).startsWith("./")&&(p=p.substring(2)),!(p=n.Xc.get(p)))return 2;if(y=Number(y>>>0),x=Number(x>>>0),w=Number(w>>>0),y+x>p.byteLength)return 3;try{let B=p.subarray(y,y+x);switch(k){case 0:(C(),pe).set(B,w>>>0);break;case 1:n.Qd?n.Qd(w,B):n.Id(w,B);break;default:return 4}return 0}catch{return 4}},974036:(p,y,x)=>{n.td(p,(C(),pe).subarray(y>>>0,y+x>>>0))},974100:()=>n.Wd(),974142:p=>{n.sd(p)},974179:()=>{n.Bd()},974210:()=>{n.Cd()},974239:()=>{n.Gd()},974264:p=>n.Ad(p),974297:p=>n.Ed(p),974329:(p,y,x)=>{n.ed(Number(p),Number(y),Number(x),!0)},974392:(p,y,x)=>{n.ed(Number(p),Number(y),Number(x))},974449:()=>typeof wasmOffsetConverter<"u",974506:p=>{n.$b("Abs",p,void 0)},974557:p=>{n.$b("Neg",p,void 0)},974608:p=>{n.$b("Floor",p,void 0)},974661:p=>{n.$b("Ceil",p,void 0)},974713:p=>{n.$b("Reciprocal",p,void 0)},974771:p=>{n.$b("Sqrt",p,void 0)},974823:p=>{n.$b("Exp",p,void 0)},974874:p=>{n.$b("Erf",p,void 0)},974925:p=>{n.$b("Sigmoid",p,void 0)},974980:(p,y,x)=>{n.$b("HardSigmoid",p,{alpha:y,beta:x})},975059:p=>{n.$b("Log",p,void 0)},975110:p=>{n.$b("Sin",p,void 0)},975161:p=>{n.$b("Cos",p,void 0)},975212:p=>{n.$b("Tan",p,void 0)},975263:p=>{n.$b("Asin",p,void 0)},975315:p=>{n.$b("Acos",p,void 0)},975367:p=>{n.$b("Atan",p,void 0)},975419:p=>{n.$b("Sinh",p,void 0)},975471:p=>{n.$b("Cosh",p,void 0)},975523:p=>{n.$b("Asinh",p,void 0)},975576:p=>{n.$b("Acosh",p,void 0)},975629:p=>{n.$b("Atanh",p,void 0)},975682:p=>{n.$b("Tanh",p,void 0)},975734:p=>{n.$b("Not",p,void 0)},975785:(p,y,x)=>{n.$b("Clip",p,{min:y,max:x})},975854:p=>{n.$b("Clip",p,void 0)},975906:(p,y)=>{n.$b("Elu",p,{alpha:y})},975964:p=>{n.$b("Gelu",p,void 0)},976016:p=>{n.$b("Relu",p,void 0)},976068:(p,y)=>{n.$b("LeakyRelu",p,{alpha:y})},976132:(p,y)=>{n.$b("ThresholdedRelu",p,{alpha:y})},976202:(p,y)=>{n.$b("Cast",p,{to:y})},976260:p=>{n.$b("Add",p,void 0)},976311:p=>{n.$b("Sub",p,void 0)},976362:p=>{n.$b("Mul",p,void 0)},976413:p=>{n.$b("Div",p,void 0)},976464:p=>{n.$b("Pow",p,void 0)},976515:p=>{n.$b("Equal",p,void 0)},976568:p=>{n.$b("Greater",p,void 0)},976623:p=>{n.$b("GreaterOrEqual",p,void 0)},976685:p=>{n.$b("Less",p,void 0)},976737:p=>{n.$b("LessOrEqual",p,void 0)},976796:(p,y,x,w,k)=>{n.$b("ReduceMean",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},976971:(p,y,x,w,k)=>{n.$b("ReduceMax",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},977145:(p,y,x,w,k)=>{n.$b("ReduceMin",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},977319:(p,y,x,w,k)=>{n.$b("ReduceProd",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},977494:(p,y,x,w,k)=>{n.$b("ReduceSum",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},977668:(p,y,x,w,k)=>{n.$b("ReduceL1",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},977841:(p,y,x,w,k)=>{n.$b("ReduceL2",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},978014:(p,y,x,w,k)=>{n.$b("ReduceLogSum",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},978191:(p,y,x,w,k)=>{n.$b("ReduceSumSquare",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},978371:(p,y,x,w,k)=>{n.$b("ReduceLogSumExp",p,{keepDims:!!y,noopWithEmptyAxes:!!x,axes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},978551:p=>{n.$b("Where",p,void 0)},978604:(p,y,x)=>{n.$b("Transpose",p,{perm:y?Array.from((C(),X).subarray(Number(y)>>>0,Number(x)>>>0)):[]})},978728:(p,y,x,w)=>{n.$b("DepthToSpace",p,{blocksize:y,mode:gt(x),format:w?"NHWC":"NCHW"})},978861:(p,y,x,w)=>{n.$b("DepthToSpace",p,{blocksize:y,mode:gt(x),format:w?"NHWC":"NCHW"})},978994:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt,Ea)=>{n.$b("ConvTranspose",p,{format:ce?"NHWC":"NCHW",autoPad:y,dilations:[x],group:w,kernelShape:[k],pads:[B,W],strides:[ae],wIsConst:()=>!!(C(),ue)[be>>>0],outputPadding:Re?Array.from((C(),X).subarray(Number(Re)>>>0,Number(We)>>>0)):[],outputShape:Qe?Array.from((C(),X).subarray(Number(Qe)>>>0,Number(rt)>>>0)):[],activation:gt(Ea)})},979427:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt)=>{n.$b("ConvTranspose",p,{format:ae?"NHWC":"NCHW",autoPad:y,dilations:Array.from((C(),X).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),group:w,kernelShape:Array.from((C(),X).subarray(Number(k)>>>0,2+(Number(k)>>>0)>>>0)),pads:Array.from((C(),X).subarray(Number(B)>>>0,4+(Number(B)>>>0)>>>0)),strides:Array.from((C(),X).subarray(Number(W)>>>0,2+(Number(W)>>>0)>>>0)),wIsConst:()=>!!(C(),ue)[ce>>>0],outputPadding:be?Array.from((C(),X).subarray(Number(be)>>>0,Number(Re)>>>0)):[],outputShape:We?Array.from((C(),X).subarray(Number(We)>>>0,Number(Qe)>>>0)):[],activation:gt(rt)})},980088:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt,Ea)=>{n.$b("ConvTranspose",p,{format:ce?"NHWC":"NCHW",autoPad:y,dilations:[x],group:w,kernelShape:[k],pads:[B,W],strides:[ae],wIsConst:()=>!!(C(),ue)[be>>>0],outputPadding:Re?Array.from((C(),X).subarray(Number(Re)>>>0,Number(We)>>>0)):[],outputShape:Qe?Array.from((C(),X).subarray(Number(Qe)>>>0,Number(rt)>>>0)):[],activation:gt(Ea)})},980521:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt)=>{n.$b("ConvTranspose",p,{format:ae?"NHWC":"NCHW",autoPad:y,dilations:Array.from((C(),X).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),group:w,kernelShape:Array.from((C(),X).subarray(Number(k)>>>0,2+(Number(k)>>>0)>>>0)),pads:Array.from((C(),X).subarray(Number(B)>>>0,4+(Number(B)>>>0)>>>0)),strides:Array.from((C(),X).subarray(Number(W)>>>0,2+(Number(W)>>>0)>>>0)),wIsConst:()=>!!(C(),ue)[ce>>>0],outputPadding:be?Array.from((C(),X).subarray(Number(be)>>>0,Number(Re)>>>0)):[],outputShape:We?Array.from((C(),X).subarray(Number(We)>>>0,Number(Qe)>>>0)):[],activation:gt(rt)})},981182:(p,y)=>{n.$b("GlobalAveragePool",p,{format:y?"NHWC":"NCHW"})},981273:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt)=>{n.$b("AveragePool",p,{format:rt?"NHWC":"NCHW",auto_pad:y,ceil_mode:x,count_include_pad:w,storage_order:k,dilations:B?Array.from((C(),X).subarray(Number(B)>>>0,Number(W)>>>0)):[],kernel_shape:ae?Array.from((C(),X).subarray(Number(ae)>>>0,Number(ce)>>>0)):[],pads:be?Array.from((C(),X).subarray(Number(be)>>>0,Number(Re)>>>0)):[],strides:We?Array.from((C(),X).subarray(Number(We)>>>0,Number(Qe)>>>0)):[]})},981752:(p,y)=>{n.$b("GlobalAveragePool",p,{format:y?"NHWC":"NCHW"})},981843:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt)=>{n.$b("AveragePool",p,{format:rt?"NHWC":"NCHW",auto_pad:y,ceil_mode:x,count_include_pad:w,storage_order:k,dilations:B?Array.from((C(),X).subarray(Number(B)>>>0,Number(W)>>>0)):[],kernel_shape:ae?Array.from((C(),X).subarray(Number(ae)>>>0,Number(ce)>>>0)):[],pads:be?Array.from((C(),X).subarray(Number(be)>>>0,Number(Re)>>>0)):[],strides:We?Array.from((C(),X).subarray(Number(We)>>>0,Number(Qe)>>>0)):[]})},982322:(p,y)=>{n.$b("GlobalMaxPool",p,{format:y?"NHWC":"NCHW"})},982409:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt)=>{n.$b("MaxPool",p,{format:rt?"NHWC":"NCHW",auto_pad:y,ceil_mode:x,count_include_pad:w,storage_order:k,dilations:B?Array.from((C(),X).subarray(Number(B)>>>0,Number(W)>>>0)):[],kernel_shape:ae?Array.from((C(),X).subarray(Number(ae)>>>0,Number(ce)>>>0)):[],pads:be?Array.from((C(),X).subarray(Number(be)>>>0,Number(Re)>>>0)):[],strides:We?Array.from((C(),X).subarray(Number(We)>>>0,Number(Qe)>>>0)):[]})},982884:(p,y)=>{n.$b("GlobalMaxPool",p,{format:y?"NHWC":"NCHW"})},982971:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt)=>{n.$b("MaxPool",p,{format:rt?"NHWC":"NCHW",auto_pad:y,ceil_mode:x,count_include_pad:w,storage_order:k,dilations:B?Array.from((C(),X).subarray(Number(B)>>>0,Number(W)>>>0)):[],kernel_shape:ae?Array.from((C(),X).subarray(Number(ae)>>>0,Number(ce)>>>0)):[],pads:be?Array.from((C(),X).subarray(Number(be)>>>0,Number(Re)>>>0)):[],strides:We?Array.from((C(),X).subarray(Number(We)>>>0,Number(Qe)>>>0)):[]})},983446:(p,y,x,w,k)=>{n.$b("Gemm",p,{alpha:y,beta:x,transA:w,transB:k})},983550:p=>{n.$b("MatMul",p,void 0)},983604:(p,y,x,w)=>{n.$b("ArgMax",p,{keepDims:!!y,selectLastIndex:!!x,axis:w})},983712:(p,y,x,w)=>{n.$b("ArgMin",p,{keepDims:!!y,selectLastIndex:!!x,axis:w})},983820:(p,y)=>{n.$b("Softmax",p,{axis:y})},983883:(p,y)=>{n.$b("Concat",p,{axis:y})},983943:(p,y,x,w,k)=>{n.$b("Split",p,{axis:y,numOutputs:x,splitSizes:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},984099:p=>{n.$b("Expand",p,void 0)},984153:(p,y)=>{n.$b("Gather",p,{axis:Number(y)})},984224:(p,y)=>{n.$b("GatherElements",p,{axis:Number(y)})},984303:(p,y)=>{n.$b("GatherND",p,{batch_dims:Number(y)})},984382:(p,y,x,w,k,B,W,ae,ce,be,Re)=>{n.$b("Resize",p,{antialias:y,axes:x?Array.from((C(),X).subarray(Number(x)>>>0,Number(w)>>>0)):[],coordinateTransformMode:gt(k),cubicCoeffA:B,excludeOutside:W,extrapolationValue:ae,keepAspectRatioPolicy:gt(ce),mode:gt(be),nearestMode:gt(Re)})},984744:(p,y,x,w,k,B,W)=>{n.$b("Slice",p,{starts:y?Array.from((C(),X).subarray(Number(y)>>>0,Number(x)>>>0)):[],ends:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[],axes:B?Array.from((C(),X).subarray(Number(B)>>>0,Number(W)>>>0)):[]})},985008:p=>{n.$b("Tile",p,void 0)},985060:(p,y,x)=>{n.$b("InstanceNormalization",p,{epsilon:y,format:x?"NHWC":"NCHW"})},985174:(p,y,x)=>{n.$b("InstanceNormalization",p,{epsilon:y,format:x?"NHWC":"NCHW"})},985288:p=>{n.$b("Range",p,void 0)},985341:(p,y)=>{n.$b("Einsum",p,{equation:gt(y)})},985422:(p,y,x,w,k)=>{n.$b("Pad",p,{mode:y,value:x,pads:w?Array.from((C(),X).subarray(Number(w)>>>0,Number(k)>>>0)):[]})},985565:(p,y,x,w,k,B)=>{n.$b("BatchNormalization",p,{epsilon:y,momentum:x,spatial:!!k,trainingMode:!!w,format:B?"NHWC":"NCHW"})},985734:(p,y,x,w,k,B)=>{n.$b("BatchNormalization",p,{epsilon:y,momentum:x,spatial:!!k,trainingMode:!!w,format:B?"NHWC":"NCHW"})},985903:(p,y,x)=>{n.$b("CumSum",p,{exclusive:Number(y),reverse:Number(x)})},986e3:(p,y,x)=>{n.$b("DequantizeLinear",p,{axis:y,blockSize:x})},986090:(p,y,x,w,k)=>{n.$b("GridSample",p,{align_corners:y,mode:gt(x),padding_mode:gt(w),format:k?"NHWC":"NCHW"})},986260:(p,y,x,w,k)=>{n.$b("GridSample",p,{align_corners:y,mode:gt(x),padding_mode:gt(w),format:k?"NHWC":"NCHW"})},986430:(p,y)=>{n.$b("ScatterND",p,{reduction:gt(y)})},986515:(p,y,x,w,k,B,W,ae,ce)=>{n.$b("Attention",p,{numHeads:y,isUnidirectional:x,maskFilterValue:w,scale:k,doRotary:B,qkvHiddenSizes:W?Array.from((C(),X).subarray(Number(ae)>>>0,Number(ae)+W>>>0)):[],pastPresentShareBuffer:!!ce})},986787:p=>{n.$b("BiasAdd",p,void 0)},986842:p=>{n.$b("BiasSplitGelu",p,void 0)},986903:p=>{n.$b("FastGelu",p,void 0)},986959:(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt,Ea,Mi)=>{n.$b("Conv",p,{format:We?"NHWC":"NCHW",auto_pad:y,dilations:x?Array.from((C(),X).subarray(Number(x)>>>0,Number(w)>>>0)):[],group:k,kernel_shape:B?Array.from((C(),X).subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:ae?Array.from((C(),X).subarray(Number(ae)>>>0,Number(ce)>>>0)):[],strides:be?Array.from((C(),X).subarray(Number(be)>>>0,Number(Re)>>>0)):[],w_is_const:()=>!!(C(),ue)[Number(Qe)>>>0],activation:gt(rt),activation_params:Ea?Array.from((C(),H).subarray(Number(Ea)>>>0,Number(Mi)>>>0)):[]})},987543:p=>{n.$b("Gelu",p,void 0)},987595:(p,y,x,w,k,B,W,ae,ce)=>{n.$b("GroupQueryAttention",p,{numHeads:y,kvNumHeads:x,scale:w,softcap:k,doRotary:B,rotaryInterleaved:W,smoothSoftmax:ae,localWindowSize:ce})},987812:(p,y,x,w)=>{n.$b("LayerNormalization",p,{axis:y,epsilon:x,simplified:!!w})},987923:(p,y,x,w)=>{n.$b("LayerNormalization",p,{axis:y,epsilon:x,simplified:!!w})},988034:(p,y,x,w,k,B)=>{n.$b("MatMulNBits",p,{k:y,n:x,accuracyLevel:w,bits:k,blockSize:B})},988161:(p,y,x,w,k,B)=>{n.$b("MultiHeadAttention",p,{numHeads:y,isUnidirectional:x,maskFilterValue:w,scale:k,doRotary:B})},988320:(p,y)=>{n.$b("QuickGelu",p,{alpha:y})},988384:(p,y,x,w,k)=>{n.$b("RotaryEmbedding",p,{interleaved:!!y,numHeads:x,rotaryEmbeddingDim:w,scale:k})},988523:(p,y,x)=>{n.$b("SkipLayerNormalization",p,{epsilon:y,simplified:!!x})},988625:(p,y,x)=>{n.$b("SkipLayerNormalization",p,{epsilon:y,simplified:!!x})},988727:(p,y,x,w)=>{n.$b("GatherBlockQuantized",p,{gatherAxis:y,quantizeAxis:x,blockSize:w})},988848:p=>{n.Fd(p)},988882:(p,y)=>n.Hd(Number(p),Number(y),n.Yc.Kd,n.Yc.errors)};function ma(p,y,x){return dl(async()=>{await n.Dd(Number(p),Number(y),Number(x))})}function ga(){return typeof wasmOffsetConverter<"u"}function En(p,y,x,w){var k=qe();try{return js(p,y,x,w)}catch(B){if(Ue(k),B!==B+0)throw B;Ie(1,0)}}function Ha(p,y,x){var w=qe();try{return qs(p,y,x)}catch(k){if(Ue(w),k!==k+0)throw k;Ie(1,0)}}function ja(p){var y=qe();try{$n(p)}catch(x){if(Ue(y),x!==x+0)throw x;Ie(1,0)}}function Ja(p,y){var x=qe();try{return Sl(p,y)}catch(w){if(Ue(x),w!==w+0)throw w;Ie(1,0)}}function Ho(p,y,x){var w=qe();try{xl(p,y,x)}catch(k){if(Ue(w),k!==k+0)throw k;Ie(1,0)}}function Xs(p,y){var x=qe();try{Bo(p,y)}catch(w){if(Ue(x),w!==w+0)throw w;Ie(1,0)}}function Qs(p,y,x,w,k,B,W){var ae=qe();try{return Ls(p,y,x,w,k,B,W)}catch(ce){if(Ue(ae),ce!==ce+0)throw ce;Ie(1,0)}}function jo(p,y,x,w,k,B){var W=qe();try{jn(p,y,x,w,k,B)}catch(ae){if(Ue(W),ae!==ae+0)throw ae;Ie(1,0)}}function Ut(p,y,x,w){var k=qe();try{Hs(p,y,x,w)}catch(B){if(Ue(k),B!==B+0)throw B;Ie(1,0)}}function yt(p,y,x,w,k){var B=qe();try{Tl(p,y,x,w,k)}catch(W){if(Ue(B),W!==W+0)throw W;Ie(1,0)}}function Ye(p,y,x,w,k,B,W){var ae=qe();try{qo(p,y,x,w,k,B,W)}catch(ce){if(Ue(ae),ce!==ce+0)throw ce;Ie(1,0)}}function zn(p,y,x,w,k,B,W){var ae=qe();try{Gs(p,y,x,w,k,B,W)}catch(ce){if(Ue(ae),ce!==ce+0)throw ce;Ie(1,0)}}function ya(p,y,x,w,k,B,W,ae){var ce=qe();try{vr(p,y,x,w,k,B,W,ae)}catch(be){if(Ue(ce),be!==be+0)throw be;Ie(1,0)}}function Zs(p,y,x,w,k){var B=qe();try{return Uo(p,y,x,w,k)}catch(W){if(Ue(B),W!==W+0)throw W;Ie(1,0)}}function An(p,y,x){var w=qe();try{return oa(p,y,x)}catch(k){if(Ue(w),k!==k+0)throw k;Ie(1,0)}}function Go(p,y,x,w,k,B,W,ae){var ce=qe();try{Gn(p,y,x,w,k,B,W,ae)}catch(be){if(Ue(ce),be!==be+0)throw be;Ie(1,0)}}function Vo(p,y,x,w,k,B,W,ae,ce,be,Re,We){var Qe=qe();try{Vs(p,y,x,w,k,B,W,ae,ce,be,Re,We)}catch(rt){if(Ue(Qe),rt!==rt+0)throw rt;Ie(1,0)}}function Ci(p,y,x,w,k,B){var W=qe();try{return El(p,y,x,w,k,B)}catch(ae){if(Ue(W),ae!==ae+0)throw ae;Ie(1,0)}}function Fn(p,y,x){var w=qe();try{return zl(p,y,x)}catch(k){if(Ue(w),k!==k+0)throw k;return Ie(1,0),0n}}function Ps(p,y,x,w,k,B,W,ae,ce){var be=qe();try{xn(p,y,x,w,k,B,W,ae,ce)}catch(Re){if(Ue(be),Re!==Re+0)throw Re;Ie(1,0)}}function xr(p){var y=qe();try{return br(p)}catch(x){if(Ue(y),x!==x+0)throw x;Ie(1,0)}}function Js(p,y){var x=qe();try{return Fs(p,y)}catch(w){if(Ue(x),w!==w+0)throw w;return Ie(1,0),0n}}function Kn(p){var y=qe();try{return _r(p)}catch(x){if(Ue(y),x!==x+0)throw x;return Ie(1,0),0n}}function en(p,y,x,w){var k=qe();try{return Lo(p,y,x,w)}catch(B){if(Ue(k),B!==B+0)throw B;Ie(1,0)}}function Cn(p,y,x,w,k){var B=qe();try{return ia(p,y,x,w,k)}catch(W){if(Ue(B),W!==W+0)throw W;Ie(1,0)}}function tn(p,y,x,w,k,B){var W=qe();try{return Cl(p,y,x,w,k,B)}catch(ae){if(Ue(W),ae!==ae+0)throw ae;Ie(1,0)}}function eu(p,y,x,w,k,B){var W=qe();try{return La(p,y,x,w,k,B)}catch(ae){if(Ue(W),ae!==ae+0)throw ae;Ie(1,0)}}function tu(p,y,x,w,k,B,W,ae){var ce=qe();try{return ha(p,y,x,w,k,B,W,ae)}catch(be){if(Ue(ce),be!==be+0)throw be;Ie(1,0)}}function Oi(p,y,x,w,k){var B=qe();try{return Ys(p,y,x,w,k)}catch(W){if(Ue(B),W!==W+0)throw W;return Ie(1,0),0n}}function Rl(p,y,x,w){var k=qe();try{return $r(p,y,x,w)}catch(B){if(Ue(k),B!==B+0)throw B;Ie(1,0)}}function Xn(p,y,x,w){var k=qe();try{return Tn(p,y,x,w)}catch(B){if(Ue(k),B!==B+0)throw B;Ie(1,0)}}function qt(p,y,x,w,k,B,W,ae,ce,be,Re,We){var Qe=qe();try{return Ol(p,y,x,w,k,B,W,ae,ce,be,Re,We)}catch(rt){if(Ue(Qe),rt!==rt+0)throw rt;Ie(1,0)}}function Nl(p,y,x,w,k,B,W,ae,ce,be,Re){var We=qe();try{wr(p,y,x,w,k,B,W,ae,ce,be,Re)}catch(Qe){if(Ue(We),Qe!==Qe+0)throw Qe;Ie(1,0)}}function Wo(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt,Ea,Mi){var Yo=qe();try{Vn(p,y,x,w,k,B,W,ae,ce,be,Re,We,Qe,rt,Ea,Mi)}catch(Il){if(Ue(Yo),Il!==Il+0)throw Il;Ie(1,0)}}function ad(p,y,x){var w=qe();try{return Al(p,y,x)}catch(k){if(Ue(w),k!==k+0)throw k;Ie(1,0)}}function nd(p,y,x){var w=qe();try{return Sn(p,y,x)}catch(k){if(Ue(w),k!==k+0)throw k;Ie(1,0)}}function id(p,y,x,w){var k=qe();try{Ws(p,y,x,w)}catch(B){if(Ue(k),B!==B+0)throw B;Ie(1,0)}}function _t(){if(0<bt)st=_t;else if(u)E==null||E(n),Z();else{for(var p=Be;0<p.length;)p.shift()(n);0<bt?st=_t:(n.calledRun=!0,V||(Z(),E==null||E(n)))}}return u||(ra=await ve(),_t()),n.PTR_SIZE=4,R?n:new Promise((p,y)=>{E=p,M=y})}var j2,rv,JT=fe(()=>{var e,n;j2=iv,rv=(n=(e=globalThis.self)==null?void 0:e.name)==null?void 0:n.startsWith("em-pthread"),rv&&iv()}),Lp,Uh,lv,Ma,G2,Lf,sv,uv,Hp,ov,jp,V2,Gp,W2,wm=fe(()=>{_m(),Lp=typeof location>"u"?void 0:location.origin,Uh=import.meta.url>"file:"&&import.meta.url<"file;",lv=()=>{{if(Uh){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Lp).href}return import.meta.url}},Ma=lv(),G2=()=>{if(Ma&&!Ma.startsWith("blob:"))return Ma.substring(0,Ma.lastIndexOf("/")+1)},Lf=(e,n)=>{try{let r=n??Ma;return(r?new URL(e,r):new URL(e)).origin===Lp}catch{return!1}},sv=(e,n)=>{let r=n??Ma;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},uv=(e,n)=>`${n??"./"}${e}`,Hp=async e=>{let n=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(n)},ov=async e=>(await import(e)).default,jp=(PT(),Zu(q2)).default,V2=async()=>{if(!Ma)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Lf(Ma))return[void 0,jp()];let e=await Hp(Ma);return[e,jp(e)]},Gp=(JT(),Zu(H2)).default,W2=async(e,n,r,l)=>{let u=Gp&&!(e||n);if(u)if(Ma)u=Lf(Ma)||l&&!r;else if(l&&!r)u=!0;else throw new Error("cannot determine the script source URL.");if(u)return[void 0,Gp];{let o="ort-wasm-simd-threaded.jsep.mjs",f=e??sv(o,n),d=r&&f&&!Lf(f,n),m=d?await Hp(f):f??uv(o,n);return[d?m:void 0,await ov(m)]}}}),Vp,Hf,Ru,Wp,fv,cv,dv,$m,mt,Fr=fe(()=>{wm(),Hf=!1,Ru=!1,Wp=!1,fv=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},cv=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},dv=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},$m=async e=>{if(Hf)return Promise.resolve();if(Ru)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Wp)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ru=!0;let n=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!dv())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!cv())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let l=fv();r>1&&!l&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let u=e.wasmPaths,o=typeof u=="string"?u:void 0,f=u==null?void 0:u.mjs,d=(f==null?void 0:f.href)??f,m=u==null?void 0:u.wasm,g=(m==null?void 0:m.href)??m,b=e.wasmBinary,[v,_]=await W2(d,o,r>1,!!b||!!g),S=!1,T=[];if(n>0&&T.push(new Promise(E=>{setTimeout(()=>{S=!0,E()},n)})),T.push(new Promise((E,M)=>{let A={numThreads:r};if(b)A.wasmBinary=b,A.locateFile=z=>z;else if(g||o)A.locateFile=z=>g??o+z;else if(d&&d.indexOf("blob:")!==0)A.locateFile=z=>new URL(z,d).href;else if(v){let z=G2();z&&(A.locateFile=D=>z+D)}_(A).then(z=>{Ru=!1,Hf=!0,Vp=z,E(),v&&URL.revokeObjectURL(v)},z=>{Ru=!1,Wp=!0,M(z)})})),await Promise.race(T),S)throw new Error(`WebAssembly backend initializing failed due to timeout: ${n}ms`)},mt=()=>{if(Hf&&Vp)return Vp;throw new Error("WebAssembly is not initialized yet.")}}),fn,oc,nt,xm=fe(()=>{Fr(),fn=(e,n)=>{let r=mt(),l=r.lengthBytesUTF8(e)+1,u=r._malloc(l);return r.stringToUTF8(e,u,l),n.push(u),u},oc=(e,n,r,l)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([u,o])=>{let f=n?n+u:u;if(typeof o=="object")oc(o,f+".",r,l);else if(typeof o=="string"||typeof o=="number")l(f,o.toString());else if(typeof o=="boolean")l(f,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},nt=e=>{let n=mt(),r=n.stackSave();try{let l=n.PTR_SIZE,u=n.stackAlloc(2*l);n._OrtGetLastError(u,u+l);let o=Number(n.getValue(u,l===4?"i32":"i64")),f=n.getValue(u+l,"*"),d=f?n.UTF8ToString(f):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${d}`)}finally{n.stackRestore(r)}}}),Y2,eE=fe(()=>{Fr(),xm(),Y2=e=>{let n=mt(),r=0,l=[],u=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)u.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)u.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(u.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=fn(e.tag,l)),r=n._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,o),r===0&&nt("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&oc(e.extra,"",new WeakSet,(f,d)=>{let m=fn(f,l),g=fn(d,l);n._OrtAddRunConfigEntry(r,m,g)!==0&&nt(`Can't set a run config entry: ${f} - ${d}.`)}),[r,l]}catch(o){throw r!==0&&n._OrtReleaseRunOptions(r),l.forEach(f=>n._free(f)),o}}}),pv,hv,mv,kr,gv,F2,tE=fe(()=>{Fr(),xm(),pv=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},hv=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},mv=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let n=e.extra.session;n.use_ort_model_bytes_directly||(n.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},kr=(e,n,r,l)=>{let u=fn(n,l),o=fn(r,l);mt()._OrtAddSessionConfigEntry(e,u,o)!==0&&nt(`Can't set a session config entry: ${n} - ${r}.`)},gv=async(e,n,r)=>{let l=n.executionProviders;for(let u of l){let o=typeof u=="string"?u:u.name,f=[];switch(o){case"webnn":if(o="WEBNN",kr(e,"session.disable_quant_qdq","1",r),kr(e,"session.disable_qdq_constant_folding","1",r),typeof u!="string"){let v=u==null?void 0:u.deviceType;v&&kr(e,"deviceType",v,r)}break;case"webgpu":if(o="JS",typeof u!="string"){let v=u;if(v!=null&&v.preferredLayout){if(v.preferredLayout!=="NCHW"&&v.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${v.preferredLayout}`);kr(e,"preferredLayout",v.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let d=fn(o,r),m=f.length,g=0,b=0;if(m>0){g=mt()._malloc(m*mt().PTR_SIZE),r.push(g),b=mt()._malloc(m*mt().PTR_SIZE),r.push(b);for(let v=0;v<m;v++)mt().setValue(g+v*mt().PTR_SIZE,f[v][0],"*"),mt().setValue(b+v*mt().PTR_SIZE,f[v][1],"*")}await mt()._OrtAppendExecutionProvider(e,d,g,b,m)!==0&&nt(`Can't append execution provider: ${o}.`)}},F2=async e=>{let n=mt(),r=0,l=[],u=e||{};mv(u);try{let o=pv(u.graphOptimizationLevel??"all"),f=hv(u.executionMode??"sequential"),d=typeof u.logId=="string"?fn(u.logId,l):0,m=u.logSeverityLevel??2;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log severity level is not valid: ${m}`);let g=u.logVerbosityLevel??0;if(!Number.isInteger(g)||g<0||g>4)throw new Error(`log verbosity level is not valid: ${g}`);let b=typeof u.optimizedModelFilePath=="string"?fn(u.optimizedModelFilePath,l):0;if(r=n._OrtCreateSessionOptions(o,!!u.enableCpuMemArena,!!u.enableMemPattern,f,!!u.enableProfiling,0,d,m,g,b),r===0&&nt("Can't create session options."),u.executionProviders&&await gv(r,u,l),u.enableGraphCapture!==void 0){if(typeof u.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${u.enableGraphCapture}`);kr(r,"enableGraphCapture",u.enableGraphCapture.toString(),l)}if(u.freeDimensionOverrides)for(let[v,_]of Object.entries(u.freeDimensionOverrides)){if(typeof v!="string")throw new Error(`free dimension override name must be a string: ${v}`);if(typeof _!="number"||!Number.isInteger(_)||_<0)throw new Error(`free dimension override value must be a non-negative integer: ${_}`);let S=fn(v,l);n._OrtAddFreeDimensionOverride(r,S,_)!==0&&nt(`Can't set a free dimension override: ${v} - ${_}.`)}return u.extra!==void 0&&oc(u.extra,"",new WeakSet,(v,_)=>{kr(r,v,_,l)}),[r,l]}catch(o){throw r!==0&&n._OrtReleaseSessionOptions(r)!==0&&nt("Can't release session options."),l.forEach(f=>n._free(f)),o}}}),Br,fi,Ur,wc,fc,Sm,Tm,qh,ke=fe(()=>{Br=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},fi=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ur=(e,n)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],l=typeof n=="number"?n:n.reduce((u,o)=>u*o,1);return r>0?Math.ceil(l*r):void 0},wc=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},fc=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Sm=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Tm=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qh=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Em,K2=fe(()=>{_m(),Em=async e=>{if(typeof e=="string"){let n=await fetch(e);if(!n.ok)throw new Error(`failed to load external data file: ${e}`);let r=n.headers.get("Content-Length"),l=r?parseInt(r,10):0;if(l<1073741824)return new Uint8Array(await n.arrayBuffer());{if(!n.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let u=n.body.getReader(),o;try{o=new ArrayBuffer(l)}catch(d){if(d instanceof RangeError){let m=Math.ceil(l/65536);o=new WebAssembly.Memory({initial:m,maximum:m}).buffer}else throw d}let f=0;for(;;){let{done:d,value:m}=await u.read();if(d)break;let g=m.byteLength;new Uint8Array(o,f,g).set(m),f+=g}return new Uint8Array(o,0,l)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),yv,vv,bv,_v,zm,wv,Xe,pi=fe(()=>{ke(),yv=["V","I","W","E","F"],vv=(e,n)=>{console.log(`[${yv[e]},${new Date().toISOString()}]${n}`)},zm=(e,n)=>{bv=e,_v=n},wv=(e,n)=>{let r=fc(e),l=fc(bv);r>=l&&vv(r,typeof n=="function"?n():n)},Xe=(...e)=>{_v&&wv(...e)}}),$v,ss,P,cc,X2,Q2,Z2,Ne=fe(()=>{$v=class{static calcMatMulShape(e,n){return e[1]!==n[0]?void 0:[e[0],n[1]]}},ss=class{static calcShape(e,n,r=!1){let l=e.length,u=n.length;if(l===0)return n;if(u===0)return e;let o=Math.max(e.length,n.length),f=new Array(o);if(r){if(l<2||u<2)return;let d=$v.calcMatMulShape([e[l-2],e[l-1]],[n[u-2],n[u-1]]);if(d===void 0)return;[f[o-2],f[o-1]]=d}for(let d=r?3:1;d<=o;d++){let m=l-d<0?1:e[l-d],g=u-d<0?1:n[u-d];if(m!==g&&m>1&&g>1)return;let b=Math.max(m,g);if(m&&g)f[o-d]=Math.max(m,g);else{if(b>1)return;f[o-d]=0}}return f}static isValidBroadcast(e,n){let r=e.length,l=n.length;if(r>l)return!1;for(let u=1;u<=r;u++)if(e[r-u]!==1&&e[r-u]!==n[l-u])return!1;return!0}},P=class nc{static size(n){return nc.getSizeFromDimensionRange(n,0,n.length)}static convertShape(n,r=4){let l=n.length;if(l===0)return[];let u=new Array(l),o=l-1;for(;o>=0;){if(n[o]%r===0){u[o]=n[o]/r;break}if(r%n[o]!==0)throw new Error("cannot convert shape");u[o]=1,r/=n[o],o--}for(o--;o>=0;o--)u[o]=n[o];return u}static sizeFromDimension(n,r){if(r<0||r>n.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${n.length} dimensions.`);return nc.getSizeFromDimensionRange(n,r,n.length)}static sizeToDimension(n,r){if(r<0||r>n.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${n.length} dimensions.`);return nc.getSizeFromDimensionRange(n,0,r)}static getSizeFromDimensionRange(n,r,l){let u=1;for(let o=r;o<l;o++){if(n[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");u*=Number(n[o])}return u}static computeStrides(n){let r=n.length;if(r===0)return[];if(r===1)return[1];let l=new Array(r);l[r-1]=1,l[r-2]=n[r-1];for(let u=r-3;u>=0;--u)l[u]=l[u+1]*n[u+1];return l}static normalizeAxis(n,r){if(n<-r&&n>=r)throw new Error("unsupported axis for this operation.");return n<0?n+r:n}static normalizeAxes(n,r){return n.map(l=>this.normalizeAxis(l,r??n.length))}static sortBasedOnPerm(n,r){return r?r.map(l=>n[l]):n.slice().reverse()}static padShape(n,r){let l=n.length;return n.map((u,o)=>u+r[o]+r[o+l])}static areEqual(n,r){return n.length!==r.length?!1:n.every((l,u)=>l===r[u])}},cc=class Gu{static adjustPoolAttributes(n,r,l,u,o,f){if(!n&&l.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(n)for(let d=0;d<r.length-2;d++)d>=l.length?l.push(r[d+2]):l[d]=r[d+2];for(let d=0;d<l.length;d++)if(d<u.length){if(u[d]<0)throw new Error("strides should be greater than or equal to 1")}else u.push(1);for(let d=0;d<l.length;d++)if(d<o.length){if(o[d]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let d=0;d<l.length*2;d++)if(d<f.length){if(f[d]<0)throw new Error("pad should be greater than or equal to 1")}else f.push(0);for(let d=0;d<l.length;d++){if(l[d]<=0)throw new Error("kernel shapes need to be greater than 0");if(f[d]>=l[d]||f[d+l.length]>=l[d])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(n,r,l,u,o,f,d){if(d){if(o.length!==2*(n.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==n.length-2)throw new Error("length of strides should be the length of data dimensions");if(u.length!==n.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let m=0;m<n.length-2;m++)Gu.adjustPadAndReturnShape(n[m+(f?1:2)],r[m],l[m],u[m],o,m,m+n.length-2,d)}}static computePoolOutputShape(n,r,l,u,o,f,d){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let m=[r[0],r[1]];return Gu.computeShapeHelper(n,r,m,l,u,o,f,d),m}static computeConvOutputShape(n,r,l,u,o,f,d){if(n.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let m=[n[0],r[0]];return Gu.computeShapeHelper(!1,n,m,l,u,o,f,d),m}static computeShapeHelper(n,r,l,u,o,f,d,m){if(n)for(let g=0;g<r.length-2;g++)l.push(1);else for(let g=0;g<r.length-2;g++)l.push(Gu.adjustPadAndReturnShape(r[g+2],u[g],o[g],f[g],d,g,g+r.length-2,m))}static adjustPadAndReturnShape(n,r,l,u,o,f,d,m){let g=l*(u-1)+1;if(m&&m!=="NOTSET")switch(m){case"VALID":return o[f]=0,o[d]=0,Math.floor((n-g)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(l!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let b=((n+r-1)/r-1)*r+u-n;return o[f]=Math.floor(m==="SAME_LOWER"?(b+1)/2:b/2),o[d]=b-o[f],Math.floor((n+b-u)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((n+o[f]+o[d]-g)/r+1)}},X2=class{static getShapeOfGemmResult(e,n,r,l,u){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let o,f,d;n?(o=e[1],f=e[0]):(o=e[0],f=e[1]);let m=-1;if(l?(d=r[0],m=1):(d=r[1],m=0),r[m]!==f)throw new Error("dimension mismatch");if(o<=0||d<=0||f<=0)throw new Error("invalid shape specified");if(u&&!ss.isValidBroadcast(u,[o,d]))throw new Error("gemm: invalid bias shape for broadcast");return[o,d,f]}},Q2=-34028234663852886e22,Z2=34028234663852886e22}),Am,P2=fe(()=>{ke(),Am=(e,n)=>new(wc(n))(e)}),Yp,Lh,Fp,xv,Kp,Sv,Xp,Qp,Zp,Tv,J2,aE=fe(()=>{ke(),pi(),Yp=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Lh=(e,n)=>{if(n==="int32")return e;let r=Yp.get(n);if(!r)throw new Error(`WebNN backend does not support data type: ${n}`);let l=r/8;if(e.byteLength%l!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${l}.`);let u=e.byteLength/l,o=new(wc(n))(e.buffer,e.byteOffset,u);switch(n){case"int64":case"uint64":{let f=new Int32Array(u);for(let d=0;d<u;d++){let m=o[d];if(m>2147483647n||m<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");f[d]=Number(m)}return new Uint8Array(f.buffer)}case"int8":case"uint8":case"uint32":{if(n==="uint32"&&o.some(d=>d>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let f=Int32Array.from(o,Number);return new Uint8Array(f.buffer)}default:throw new Error(`Unsupported data conversion from ${n} to 'int32'`)}},Fp=(e,n)=>{if(n==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,l=new Int32Array(e.buffer,e.byteOffset,r);switch(n){case"int64":{let u=BigInt64Array.from(l,BigInt);return new Uint8Array(u.buffer)}case"uint64":{if(l.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let u=BigUint64Array.from(l,BigInt);return new Uint8Array(u.buffer)}case"int8":{if(l.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let u=Int8Array.from(l,Number);return new Uint8Array(u.buffer)}case"uint8":{if(l.some(u=>u<0||u>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(l,Number)}case"uint32":{if(l.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let u=Uint32Array.from(l,Number);return new Uint8Array(u.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${n}`)}},xv=1,Kp=()=>xv++,Sv=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Xp=(e,n)=>{let r=Yp.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return n.length>0?Math.ceil(n.reduce((l,u)=>l*u)*r/8):0},Qp=class{constructor(e){this.isDataConverted=!1;let{sessionId:n,context:r,tensor:l,dataType:u,shape:o,fallbackDataType:f}=e;this.sessionId=n,this.mlContext=r,this.mlTensor=l,this.dataType=u,this.tensorShape=o,this.fallbackDataType=f}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Xp(this.dataType,this.tensorShape)}destroy(){Xe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let n=await this.mlContext.readTensor(this.mlTensor),r=Fp(new Uint8Array(n),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,n,r){return this.mlContext===e&&this.dataType===n&&this.tensorShape.length===r.length&&this.tensorShape.every((l,u)=>l===r[u])}setIsDataConverted(e){this.isDataConverted=e}},Zp=class{constructor(e,n){this.tensorManager=e,this.wrapper=n}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,n,r,l){let u=this.tensorManager.getMLContext(e),o=this.tensorManager.getMLOpSupportLimits(e),f;if(!(o!=null&&o.input.dataTypes.includes(n))){if(f=Sv.get(n),!f||(o==null?void 0:o.input.dataTypes.includes(f)))throw new Error(`WebNN backend does not support data type: ${n}`);Xe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${n} to ${f}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(u,n,r))return this.wrapper.tensor;if(l){if(this.wrapper.byteLength!==Xp(n,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let d=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,n,r,d,!0,!0,f),l&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let n=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")n=Lh(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(n);return}else Xe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(n):this.activeUpload=new Uint8Array(n)}async download(e){var n,r;if(this.activeUpload){let l=(n=this.wrapper)!=null&&n.isDataConverted?Fp(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(l):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(l);return}else return l.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Tv=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let n=this.backend.getMLContext(e);if(!n)throw new Error("MLContext not found for session.");return n}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Kp();return this.tensorTrackersById.set(e,new Zp(this)),e}releaseTensorId(e){let n=this.tensorTrackersById.get(e);n&&(this.tensorTrackersById.delete(e),n.tensorWrapper&&this.releaseTensor(n.tensorWrapper))}async ensureTensor(e,n,r,l,u){Xe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${n}, dataType: ${r}, shape: ${l}, copyOld: ${u}}`);let o=this.tensorTrackersById.get(n);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,r,l,u)}upload(e,n){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(n)}async download(e,n){Xe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${n==null?void 0:n.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(n)}releaseTensorsForSession(e){for(let n of this.freeTensors)n.sessionId===e&&n.destroy();this.freeTensors=this.freeTensors.filter(n=>n.sessionId!==e)}registerTensor(e,n,r,l){let u=this.getMLContext(e),o=Kp(),f=new Qp({sessionId:e,context:u,tensor:n,dataType:r,shape:l});return this.tensorTrackersById.set(o,new Zp(this,f)),this.externalTensors.add(f),o}async getCachedTensor(e,n,r,l,u,o,f){let d=this.getMLContext(e);for(let[g,b]of this.freeTensors.entries())if(b.canReuseTensor(d,n,r)){Xe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${n}, ${f?`fallbackDataType: ${f},`:""} shape: ${r}`);let v=this.freeTensors.splice(g,1)[0];return v.sessionId=e,v}Xe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${n}, ${f?`fallbackDataType: ${f},`:""} shape: ${r}}`);let m=await d.createTensor({dataType:f??n,shape:r,dimensions:r,usage:l,writable:u,readable:o});return new Qp({sessionId:e,context:d,tensor:m,dataType:n,shape:r,fallbackDataType:f})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},J2=(...e)=>new Tv(...e)}),Nu,Ev,ew,nE=fe(()=>{ke(),Fr(),P2(),aE(),pi(),Nu=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ev=(e,n)=>{if(e===n)return!0;if(e===void 0||n===void 0)return!1;let r=Object.keys(e).sort(),l=Object.keys(n).sort();return r.length===l.length&&r.every((u,o)=>u===l[o]&&e[u]===n[u])},ew=class{constructor(e){this.tensorManager=J2(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,zm(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Xe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Xe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let n=this.temporarySessionTensorIds.get(e);if(n){for(let r of n)Xe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(l=>l.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let l=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:l}),l}}else if(e===void 0){let r=this.mlContextCache.findIndex(l=>l.options===void 0&&l.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let l=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:l}),l}}let n=this.mlContextCache.findIndex(r=>Ev(r.options,e));if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,n){this.mlContextBySessionId.set(e,n);let r=this.sessionIdsByMLContext.get(n);r||(r=new Set,this.sessionIdsByMLContext.set(n,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,n.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let n=this.mlContextBySessionId.get(e);if(!n)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(n);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(n);let l=this.mlContextCache.findIndex(u=>u.mlContext===n);l!==-1&&this.mlContextCache.splice(l,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Xe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,n,r,l,u){let o=Nu.get(r);if(!o)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,n,o,l,u)}async createTemporaryTensor(e,n,r){Xe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${n}, shape: ${r}}`);let l=Nu.get(n);if(!l)throw new Error(`Unsupported ONNX data type: ${n}`);let u=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,u,l,r,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(u):this.temporarySessionTensorIds.set(e,[u]),u}uploadTensor(e,n){if(!mt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Xe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${n.byteLength}}`),this.tensorManager.upload(e,n)}async downloadTensor(e,n){return this.tensorManager.download(e,n)}createMLTensorDownloader(e,n){return async()=>{let r=await this.tensorManager.download(e);return Am(r,n)}}registerMLTensor(e,n,r,l){let u=Nu.get(r);if(!u)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.registerTensor(e,n,u,l);return Xe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${n}, dataType: ${u}, dimensions: ${l}} -> {tensorId: ${o}}`),o}registerMLConstant(e,n,r,l,u,o,f=!1){if(!o)throw new Error("External mounted files are not available.");let d=e;e.startsWith("./")&&(d=e.substring(2));let m=o.get(d);if(!m)throw new Error(`File with name ${d} not found in preloaded files.`);if(n+r>m.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let g=m.slice(n,n+r).buffer,b;switch(u.dataType){case"float32":b=new Float32Array(g);break;case"float16":b=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(g):new Uint16Array(g);break;case"int32":b=new Int32Array(g);break;case"uint32":b=new Uint32Array(g);break;case"int64":if(f){let v=Lh(new Uint8Array(g),"int64");b=new Int32Array(v.buffer),u.dataType="int32"}else b=new BigInt64Array(g);break;case"uint64":b=new BigUint64Array(g);break;case"int8":b=new Int8Array(g);break;case"int4":case"uint4":case"uint8":b=new Uint8Array(g);break;default:throw new Error(`Unsupported data type: ${u.dataType} in creating WebNN Constant from external data.`)}return Xe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${u.dataType}, shape: ${u.shape}}} ${f?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),l.constant(u,b)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,n){let r=this.sessionGraphInputs.get(e);return r?r.includes(n):!1}isGraphOutput(e,n){let r=this.sessionGraphOutputs.get(e);return r?r.includes(n):!1}isGraphInputOutputTypeSupported(e,n,r=!0){let l=Nu.get(Br(n)),u=this.mlOpSupportLimitsBySessionId.get(e);return typeof l>"u"?!1:r?!!(u!=null&&u.input.dataTypes.includes(l)):!!(u!=null&&u.output.dataTypes.includes(l))}flush(){}}}),Cm=fe(()=>{}),Pp,jf,Gf,zv,Av,Jp,Hh,Cv,tw,iE=fe(()=>{pi(),Cm(),Pp=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),jf=[],Gf=e=>Math.ceil(Number(e)/16)*16,zv=e=>{for(let n=0;n<jf.length;n++){let r=jf[n];if(e<=r)return r}return Math.ceil(e/16)*16},Av=1,Jp=()=>Av++,Hh=async(e,n,r,l)=>{let u=Gf(r),o=e.device.createBuffer({size:u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let f=e.getCommandEncoder();e.endComputePass(),f.copyBufferToBuffer(n,0,o,0,u),e.flush(),await o.mapAsync(GPUMapMode.READ);let d=o.getMappedRange();if(l){let m=l();return m.set(new Uint8Array(d,0,r)),m}else return new Uint8Array(d.slice(0,r))}finally{o.destroy()}},Cv=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[n]of Pp)jf.push(n),this.freeBuffers.set(n,[]),this.freeUniformBuffers.set(n,[]);this.sessionCount=0}upload(e,n){let r=n.buffer,l=n.byteOffset,u=n.byteLength,o=Gf(u),f=this.storageCache.get(e);if(!f)throw new Error("gpu data for uploading does not exist");if(Number(f.originalSize)!==u)throw new Error(`inconsistent data size. gpu data size=${f.originalSize}, data size=${u}`);let d=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),m=d.getMappedRange();new Uint8Array(m).set(new Uint8Array(r,l,u)),d.unmap();let g=this.backend.device.createCommandEncoder();g.copyBufferToBuffer(d,0,f.gpuData.buffer,0,o),this.backend.device.queue.submit([g.finish()]),d.destroy(),Xe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,n){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let l=this.storageCache.get(n);if(!l)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==l.originalSize)throw new Error("inconsistent source and destination gpu data size");let u=Gf(r.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(r.gpuData.buffer,0,l.gpuData.buffer,0,u)}registerExternalBuffer(e,n,r){let l;if(r){if(l=r[0],e===r[1])return Xe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${n}) => id=${l}, buffer is the same, skip.`),l;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else l=Jp();return this.storageCache.set(l,{gpuData:{id:l,type:0,buffer:e},originalSize:n}),Xe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${n}) => id=${l}, registered.`),l}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Xe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,n=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=zv(e),l,u=(n&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(n&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(u||o){let d=(u?this.freeBuffers:this.freeUniformBuffers).get(r);d?d.length>0?l=d.pop():l=this.backend.device.createBuffer({size:r,usage:n}):l=this.backend.device.createBuffer({size:r,usage:n})}else l=this.backend.device.createBuffer({size:r,usage:n});let f={id:Jp(),type:0,buffer:l};return this.storageCache.set(f.id,{gpuData:f,originalSize:Number(e)}),Xe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${f.id}`),f}get(e){var n;return(n=this.storageCache.get(e))==null?void 0:n.gpuData}release(e){let n=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(n);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Xe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${n}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(n),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,n){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Hh(this.backend,r.gpuData.buffer,r.originalSize,n)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let n=Pp.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];n===void 0||r.length>=n?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];n===void 0||r.length>=n?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let n of this.buffersPending)e.push(n);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(n=>{n.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(n=>{n.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(n=>{n.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let n=this.capturedPendingBuffers.get(e);n&&(n.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Xe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},tw=(...e)=>new Cv(...e)}),Ov,et,Tt=fe(()=>{Ov=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},et=e=>new Ov(e)}),us,Vf,Ht,sa,Te,St,jh,is,er,Se,Du,ne,$e,aw,Om,kv,nw,De=fe(()=>{ke(),Ne(),us=64,Vf=(e,n)=>{if(n===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return n>1?`vec${n}<f16>`:"f16";case 1:return n>1?`vec${n}<f32>`:"f32";case 6:return n>1?`vec${n}<i32>`:"i32";case 12:return n>1?`vec${n}<u32>`:"u32";case 7:if(n>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(n>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(n!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ht=(e,n=1)=>{let r=Vf(e,n);return typeof r=="string"?r:r[0]},sa=(e,n=1)=>{let r=Vf(e,n);return typeof r=="string"?r:r[1]},Te=(...e)=>{let n=[];return e.forEach(r=>{r.length!==0&&n.push({type:12,data:r},{type:12,data:P.computeStrides(r)})}),n},St=e=>e%4===0?4:e%2===0?2:1,jh=(e="f32",n,r="0")=>!n||n===1?`${e}(${r})`:`vec${n}<${e}>(${r})`,is=(e,n,r)=>e==="f32"?r:n===1?`f32(${r})`:`vec${n}<f32>(${r})`,er=(e,n)=>n===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:n===2?`(${e}.x + ${e}.y)`:n===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Se=(e,n,r,l)=>e.startsWith("uniforms.")&&r>4?typeof n=="string"?l==="f16"?`${e}[(${n}) / 8][(${n}) % 8 / 4][(${n}) % 8 % 4]`:`${e}[(${n}) / 4][(${n}) % 4]`:l==="f16"?`${e}[${Math.floor(n/8)}][${Math.floor(n%8/4)}][${n%8%4}]`:`${e}[${Math.floor(n/4)}][${n%4}]`:r>1?`${e}[${n}]`:e,Du=(e,n,r,l,u)=>{let o=typeof r=="number",f=o?r:r.length,d=[...new Array(f).keys()],m=f<2?"u32":f<=4?`vec${f}<u32>`:`array<u32, ${f}>`,g=Vf(n,u),b=typeof g=="string"?g:g[1],v=typeof g=="string"?g:g[0],_={indices:m,value:b,storage:v,tensor:n},S=R=>typeof R=="string"?R:`${R}u`,T={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},E=o?"uniforms.":"",M=`${E}${e}_shape`,A=`${E}${e}_strides`,z="";for(let R=0;R<f-1;R++)z+=`
    let dim${R} = current / ${Se(A,R,f)};
    let rest${R} = current % ${Se(A,R,f)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;z+=`indices[${f-1}] = current;`;let D=f<2?"":`
  fn o2i_${e}(offset: u32) -> ${_.indices} {
    var indices: ${_.indices};
    var current = offset;
    ${z}
    return indices;
  }`,N=R=>(T.offsetToIndices=!0,f<2?R:`o2i_${e}(${R})`),I=[];if(f>=2)for(let R=f-1;R>=0;R--)I.push(`${Se(A,R,f)} * (indices[${R}])`);let V=f<2?"":`
  fn i2o_${e}(indices: ${_.indices}) -> u32 {
    return ${I.join("+")};
  }`,q=R=>(T.indicesToOffset=!0,f<2?R:`i2o_${e}(${R})`),C=(...R)=>f===0?"0u":`${_.indices}(${R.map(S).join(",")})`,J=(R,j)=>f<2?`${R}`:`${Se(R,j,f)}`,ue=(R,j,Z)=>f<2?`${R}=${Z};`:`${Se(R,j,f)}=${Z};`,pe={},he=(R,j)=>{T.broadcastedIndicesToOffset=!0;let Z=`${j.name}broadcastedIndicesTo${e}Offset`;if(Z in pe)return`${Z}(${R})`;let G=[];for(let oe=f-1;oe>=0;oe--){let ve=j.indicesGet("outputIndices",oe+j.rank-f);G.push(`${J(A,oe)} * (${ve} % ${J(M,oe)})`)}return pe[Z]=`fn ${Z}(outputIndices: ${j.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${Z}(${R})`},ge=(R,j)=>(()=>{if(_.storage===_.value)return`${e}[${R}]=${j};`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${j}), select(0u, 0xFFFFFFFFu, ${j} < 0));`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${j}), 0u);`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${j}));`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),X=R=>(()=>{if(_.storage===_.value)return`${e}[${R}]`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`i32(${e}[${R}].x)`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`u32(${e}[${R}].x)`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),ye=f<2?"":`
  fn get_${e}ByIndices(indices: ${_.indices}) -> ${b} {
    return ${X(`i2o_${e}(indices)`)};
  }`,H=f<2?"":(()=>{let R=d.map(Z=>`d${Z}: u32`).join(", "),j=d.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${R}) -> ${b} {
    return get_${e}ByIndices(${C(j)});
  }`})(),te=(...R)=>{if(R.length!==f)throw new Error(`indices length must be ${f}`);let j=R.map(S).join(",");return f===0?X("0u"):f===1?X(j[0]):(T.get=!0,T.getByIndices=!0,T.indicesToOffset=!0,`get_${e}(${j})`)},me=R=>f<2?X(R):(T.getByIndices=!0,T.indicesToOffset=!0,`get_${e}ByIndices(${R})`),le=f<2?"":`
  fn set_${e}ByIndices(indices: ${_.indices}, value: ${b}) {
    ${ge(`i2o_${e}(indices)`,"value")}
  }`,we=f<2?"":(()=>{let R=d.map(Z=>`d${Z}: u32`).join(", "),j=d.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${R}, value: ${b}) {
    set_${e}ByIndices(${C(j)}, value);
  }`})();return{impl:()=>{let R=[],j=!1;return T.offsetToIndices&&(R.push(D),j=!0),T.indicesToOffset&&(R.push(V),j=!0),T.broadcastedIndicesToOffset&&(Object.values(pe).forEach(Z=>R.push(Z)),j=!0),T.set&&(R.push(we),j=!0),T.setByIndices&&(R.push(le),j=!0),T.get&&(R.push(H),j=!0),T.getByIndices&&(R.push(ye),j=!0),!o&&j&&R.unshift(`const ${M} = ${_.indices}(${r.join(",")});`,`const ${A} = ${_.indices}(${P.computeStrides(r).join(",")});`),R.join(`
`)},type:_,offsetToIndices:N,indicesToOffset:q,broadcastedIndicesToOffset:he,indices:C,indicesGet:J,indicesSet:ue,set:(...R)=>{if(R.length!==f+1)throw new Error(`indices length must be ${f}`);let j=R[f];if(typeof j!="string")throw new Error("value must be string");let Z=R.slice(0,f).map(S).join(",");return f===0?ge("0u",j):f===1?ge(Z[0],j):(T.set=!0,T.setByIndices=!0,T.indicesToOffset=!0,`set_${e}(${Z}, ${j})`)},setByOffset:ge,setByIndices:(R,j)=>f<2?ge(R,j):(T.setByIndices=!0,T.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${j});`),get:te,getByOffset:X,getByIndices:me,usage:l,name:e,strides:A,shape:M,rank:f}},ne=(e,n,r,l=1)=>Du(e,n,r,"input",l),$e=(e,n,r,l=1)=>Du(e,n,r,"output",l),aw=(e,n,r)=>Du(e,n,r,"atomicOutput",1),Om=(e,n,r,l=1)=>Du(e,n,r,"internal",l),kv=class{constructor(e,n){this.normalizedDispatchGroup=e,this.limits=n,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=us){let n=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],l=typeof e=="number"?1:e[2];if(n>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||l>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${n}, ${r}, ${l}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(n*r*l>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${n}, ${r}, ${l}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let u=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=u?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,f=u?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${n*r*l}u + local_idx;`;return`@compute @workgroup_size(${n}, ${r}, ${l})
  fn main(${o}) {
    ${f}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,n){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",l=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${n}) var<storage, ${r}> ${e.name}: array<${l}>;`}declareVariables(...e){return e.map(n=>this.declareVariable(n,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(n=>this.registerInternalVariable(n)),this}registerUniform(e,n,r=1){return this.uniforms.push({name:e,type:n,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:n,type:r,length:l}of this.uniforms)if(l&&l>4)r==="f16"?e.push(`@align(16) ${n}:array<mat2x4<${r}>, ${Math.ceil(l/8)}>`):e.push(`${n}:array<vec4<${r}>, ${Math.ceil(l/4)}>`);else{let u=l==null||l===1?r:`vec${l}<${r}>`;e.push(`${n}:${u}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=n=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(n)];return this.uniforms.map(n=>[e(n.type),n.length??1])}},nw=(e,n)=>new kv(e,n)}),Mv,eh,Rv,Nv,Dv,Iv,Na,iw,rw,ir=fe(()=>{ke(),Ne(),Tt(),De(),Mv=(e,n)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(n.length!==0&&n.length!==e[0].dims.length)throw new Error(`perm size ${n.length} does not match input rank ${e[0].dims.length}`)},eh=(e,n)=>n.length!==0?n:[...new Array(e).keys()].reverse(),Rv=(e,n)=>P.sortBasedOnPerm(e,eh(e.length,n)),Nv=(e,n,r,l)=>{let u=`fn perm(i: ${l.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let o=0;o<n;++o)u+=`a[${e[o]}]=i[${o}];`;return u+="return a;}"},Dv=(e,n)=>{let r=[],l=[];for(let u=0;u<e.length;++u)e[u]!==1&&r.push(e[u]),e[n[u]]!==1&&l.push(n[u]);return{newShape:r,newPerm:l}},Iv=(e,n)=>{let r=0;for(let l=0;l<e.length;++l)if(n[e[l]]!==1){if(e[l]<r)return!1;r=e[l]}return!0},Na=(e,n)=>{let r=e.dataType,l=e.dims.length,u=eh(l,n),o=Rv(e.dims,u),f=e.dims,d=o,m=l<2||Iv(u,e.dims),g;if(m)return g=T=>{let E=ne("input",r,f,4),M=$e("output",r,d,4);return`
  ${T.registerUniform("output_size","u32").declareVariables(E,M)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let T=P.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(T/64/4)},programUniforms:[{type:12,data:Math.ceil(T/4)}]}},getShaderSource:g};let{newShape:b,newPerm:v}=Dv(e.dims,u),_=P.areEqual(v,[2,3,1]),S=P.areEqual(v,[3,1,2]);if(b.length===2||_||S){f=_?[b[0],b[1]*b[2]]:S?[b[0]*b[1],b[2]]:b,d=[f[1],f[0]];let T=16;return g=E=>{let M=ne("a",r,f.length),A=$e("output",r,d.length);return`
  ${E.registerUniform("output_size","u32").declareVariables(M,A)}
  var<workgroup> tile : array<array<${A.type.value}, ${T+1}>, ${T}>;
  ${E.mainStart([T,T,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${T} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${T}u + local_id.x;
    let input_row = workgroup_id_x * ${T}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${M.getByIndices(`${M.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${T}u + local_id.x;
    let output_row = workgroup_id_y * ${T}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${A.setByIndices(`${A.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let E=P.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(d[1]/T),y:Math.ceil(d[0]/T)},programUniforms:[{type:12,data:E},...Te(f,d)]}},getShaderSource:g}}return g=T=>{let E=ne("a",r,f.length),M=$e("output",r,d.length);return`
  ${T.registerUniform("output_size","u32").declareVariables(E,M)}

  ${Nv(u,l,E,M)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${M.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${M.setByOffset("global_idx",E.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>{let T=P.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...Te(f,d)]}},getShaderSource:g}},iw=(e,n)=>{Mv(e.inputs,n.perm),e.compute(Na(e.inputs[0],n.perm))},rw=e=>et({perm:e.perm})}),Bv,Uv,qv,Lv,Hv,jv,Gv,Vv,Wv,Yv,rn,lw,sw,uw,ow,fw,cw,dw,pw,hw,mw,rE=fe(()=>{ke(),Ne(),De(),km(),ir(),Bv={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Uv={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},qv={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Lv={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Hv=(e,n)=>{let r=[];for(let l=n-e;l<n;++l)r.push(l);return r},jv=(e,n)=>{let r=[],l=e.length;for(let o=0;o<l;o++)n.indexOf(o)===-1&&r.push(e[o]);let u=n.map(o=>e[o]);return[r,u]},Gv=(e,n)=>{let r=e.length+n.length,l=[],u=0;for(let o=0;o<r;o++)n.indexOf(o)===-1?l.push(e[u++]):l.push(1);return l},Vv=(e,n)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==n-1-r)return!1;return!0},Wv=(e,n)=>{let r=[];if(!Vv(e,n)){for(let l=0;l<n;++l)e.indexOf(l)===-1&&r.push(l);e.forEach(l=>r.push(l))}return r},Yv=(e,n,r,l,u,o,f)=>{let d=r[0].dims,m=P.size(o),g=P.size(f),b=ne("_A",r[0].dataType,d),v=$e("output",u,o),_=64;m===1&&(_=256);let S=`
          var<workgroup> aBestValues : array<f32, ${_}>;
       `,T=E=>`
        ${E.registerUniform("reduceSize","u32").declareVariables(b,v)}
        ${S}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${E.mainStart(_)}

          let outputIndex = global_idx / ${_};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${qv[l]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${_}) {
           let candidate = f32(${b.getByOffset("offset + k")});
           bestValue = ${Bv[l]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${_}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Uv[l]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${v.setByOffset("outputIndex",`${l==="mean"?`${v.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${v.type.storage}(${Lv[l]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${n};${_}`,inputDependencies:["type"]},getShaderSource:T,getRunData:()=>({outputs:[{dims:o,dataType:u}],dispatchGroup:{x:m},programUniforms:[{type:12,data:g}]})}},rn=(e,n,r,l)=>{let u=e.inputs.length===1?r:Gh(e.inputs,r),o=u.axes;o.length===0&&!u.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((S,T)=>T));let f=P.normalizeAxes(o,e.inputs[0].dims.length),d=f,m=e.inputs[0],g=Wv(d,e.inputs[0].dims.length);g.length>0&&(m=e.compute(Na(e.inputs[0],g),{inputs:[0],outputs:[-1]})[0],d=Hv(d.length,m.dims.length));let[b,v]=jv(m.dims,d),_=b;u.keepDims&&(_=Gv(b,f)),e.compute(Yv(n,u.cacheKey,[m],l,e.inputs[0].dataType,_,v),{inputs:[m]})},lw=(e,n)=>{rn(e,"ReduceMeanShared",n,"mean")},sw=(e,n)=>{rn(e,"ReduceL1Shared",n,"l1")},uw=(e,n)=>{rn(e,"ReduceL2Shared",n,"l2")},ow=(e,n)=>{rn(e,"ReduceLogSumExpShared",n,"logSumExp")},fw=(e,n)=>{rn(e,"ReduceMaxShared",n,"max")},cw=(e,n)=>{rn(e,"ReduceMinShared",n,"min")},dw=(e,n)=>{rn(e,"ReduceProdShared",n,"prod")},pw=(e,n)=>{rn(e,"ReduceSumShared",n,"sum")},hw=(e,n)=>{rn(e,"ReduceSumSquareShared",n,"sumSquare")},mw=(e,n)=>{rn(e,"ReduceLogSumShared",n,"logSum")}}),ln,Fv,dc,Gh,sn,Kv,Xv,Qv,Zv,Pv,Jv,eb,tb,ab,nb,un,gw,yw,vw,bw,_w,ww,$w,xw,Sw,Tw,km=fe(()=>{ke(),Ne(),Tt(),De(),rE(),ln=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Fv=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],dc=(e,n,r,l,u,o,f=!1,d=!1)=>{let m=[],g=r[0].dims,b=g.length,v=P.normalizeAxes(u,b),_=!d&&v.length===0;g.forEach((E,M)=>{_||v.indexOf(M)>=0?f&&m.push(1):m.push(E)});let S=m.length,T=P.size(m);return{name:e,shaderCache:n,getShaderSource:E=>{let M=[],A=ne("_A",r[0].dataType,b),z=$e("output",o,S),D=l(A,z,v),N=D[2];for(let I=0,V=0;I<b;I++)_||v.indexOf(I)>=0?(f&&V++,N=`for(var j${I}: u32 = 0; j${I} < ${g[I]}; j${I}++) {
                  ${D[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${A.indicesSet("input_indices",I,`j${I}`)}
                  ${N}
                }`):(M.push(`${A.indicesSet("input_indices",I,z.indicesGet("output_indices",V))};`),V++);return`

        ${E.registerUniform("output_size","u32").declareVariables(A,z)}

        ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${A.type.indices};
          let output_indices = ${z.offsetToIndices("global_idx")};

          ${M.join(`
`)}
          ${D[0]}       // init ops for reduce max/min
          ${D[1]}
          ${N}
          ${D[3]}
          ${D.length===4?z.setByOffset("global_idx","value"):D.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:m,dataType:o}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...Te(g,m)]})}},Gh=(e,n)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(l=>r.push(Number(l))),et({axes:r,keepDims:n.keepDims,noopWithEmptyAxes:n.noopWithEmptyAxes})},sn=(e,n,r,l)=>{let u=e.inputs,o=u.length===1?r:Gh(u,r);e.compute(dc(n,{hint:o.cacheKey,inputDependencies:["rank"]},[u[0]],o.noopWithEmptyAxes&&o.axes.length===0?Fv:l,o.axes,u[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},Kv=(e,n)=>{ln(e.inputs),sn(e,"ReduceLogSum",n,(r,l)=>[`var value = ${l.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Xv=(e,n)=>{ln(e.inputs),sn(e,"ReduceL1",n,(r,l)=>[`var value = ${l.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Qv=(e,n)=>{ln(e.inputs),sn(e,"ReduceL2",n,(r,l)=>[`var t = ${l.type.value}(0); var value = ${l.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Zv=(e,n)=>{ln(e.inputs),sn(e,"ReduceLogSumExp",n,(r,l)=>[`var value = ${l.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Pv=(e,n)=>{ln(e.inputs),sn(e,"ReduceMax",n,(r,l,u)=>{let o=[];for(let f=0;f<r.rank;f++)(u.indexOf(f)>=0||u.length===0)&&o.push(r.indicesSet("input_indices",f,0));return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Jv=(e,n)=>{ln(e.inputs),sn(e,"ReduceMean",n,(r,l,u)=>{let o=1;for(let f=0;f<r.rank;f++)(u.indexOf(f)>=0||u.length===0)&&(o*=e.inputs[0].dims[f]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${l.type.value}(sum / ${o});`]})},eb=(e,n)=>{ln(e.inputs),sn(e,"ReduceMin",n,(r,l,u)=>{let o=[];for(let f=0;f<r.rank;f++)(u.indexOf(f)>=0||u.length===0)&&o.push(`input_indices[${f}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},tb=(e,n)=>{ln(e.inputs),sn(e,"ReduceProd",n,(r,l)=>[`var value = ${l.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},ab=(e,n)=>{ln(e.inputs),sn(e,"ReduceSum",n,(r,l)=>[`var value = ${l.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},nb=(e,n)=>{ln(e.inputs),sn(e,"ReduceSumSquare",n,(r,l)=>[`var t = ${l.type.value}(0); var value = ${l.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},un=(e,n,r)=>{if(n.length===0)return r;let l=1,u=1;for(let o=0;o<n.length;o++)n.indexOf(o)===-1?l*=e[o]:u*=e[o];return u<32&&l>1024},gw=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Jv(e,n):lw(e,n)},yw=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Xv(e,n):sw(e,n)},vw=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Qv(e,n):uw(e,n)},bw=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Zv(e,n):ow(e,n)},_w=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Pv(e,n):fw(e,n)},ww=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?eb(e,n):cw(e,n)},$w=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?tb(e,n):dw(e,n)},xw=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?ab(e,n):pw(e,n)},Sw=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?nb(e,n):hw(e,n)},Tw=(e,n)=>{un(e.inputs[0].dims,n.axes,n.noopWithEmptyAxes)?Kv(e,n):mw(e,n)}}),th,Ew,zw,Vh,lE=fe(()=>{ke(),Tt(),km(),th=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ew=(e,n)=>{th(e.inputs);let r=(l,u,o)=>{let f=[];for(let d=0;d<l.rank;d++)(o.indexOf(d)>=0||o.length===0)&&f.push(`input_indices[${d}] = 0;`);return[`${f.join(`
`)}`,`var value = ${l.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${l.getByIndices("input_indices")} ${n.selectLastIndex>0?"<=":"<"} value) {
         value = ${l.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",u.setByOffset("global_idx","best_index")]};e.compute(dc("ArgMin",{hint:n.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[n.axis],7,n.keepDims),{inputs:[0]})},zw=(e,n)=>{th(e.inputs);let r=(l,u,o)=>{let f=[];for(let d=0;d<l.rank;d++)(o.indexOf(d)>=0||o.length===0)&&f.push(`input_indices[${d}] = 0;`);return[`${f.join(`
`)}`,`var value = ${l.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${l.getByIndices("input_indices")} ${n.selectLastIndex>0?">=":">"} value) {
         value = ${l.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",u.setByOffset("global_idx","best_index")]};e.compute(dc("argMax",{hint:n.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[n.axis],7,n.keepDims),{inputs:[0]})},Vh=e=>et(e)}),ib,Wf,rb,lb,sb,Pu,ub,Aw,Mm=fe(()=>{ke(),Ne(),Cm(),De(),ib=(e,n)=>{let r=e[0],l=e[1],u=e[2],o=e[3],f=e[4],d=e[5];if(f&&d)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let m=r.dims[0],g=r.dims[1],b=r.dims[2];if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(l.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(l.dims[0]!==b)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(u.dims[0]!==l.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let v=u.dims[0]/3,_=v,S=_;if(n.qkvHiddenSizes.length>0){if(n.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let D of n.qkvHiddenSizes)if(D%n.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");v=n.qkvHiddenSizes[0],_=n.qkvHiddenSizes[1],S=n.qkvHiddenSizes[2]}let T=g;if(v!==_)throw new Error("qkv_hidden_sizes first element should be same as the second");if(u.dims[0]!==v+_+S)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let E=0;if(f){if(_!==S)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(f.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(f.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(f.dims[1]!==m)throw new Error('Input "past" second dimension must be batch_size');if(f.dims[2]!==n.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(f.dims[4]!==_/n.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');n.pastPresentShareBuffer||(E=f.dims[3])}let M=T+E,A=-1,z=0;if(o)throw new Error("Mask not supported");if(f)throw new Error("past is not supported");if(d){if(d.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(d.dims[0]!==m||d.dims[1]!==n.numHeads||d.dims[2]!==g||d.dims[3]!==M)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:E,kvSequenceLength:T,totalSequenceLength:M,maxSequenceLength:A,inputHiddenSize:b,hiddenSize:v,vHiddenSize:S,headSize:Math.floor(v/n.numHeads),vHeadSize:Math.floor(S/n.numHeads),numHeads:n.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:n.maskFilterValue,maskType:z,scale:n.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Wf=(e,n,r)=>n&&e?`
      let total_sequence_length_input = u32(${n.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,rb=(e,n,r,l,u,o,f,d)=>{let m=St(f?1:o),g=64,b=o/m;b<g&&(g=32);let v=Math.ceil(o/m/g),_=[{type:12,data:n},{type:12,data:r},{type:12,data:l},{type:12,data:u},{type:12,data:b},{type:12,data:v}],S=Ht(e.dataType,m),T=sa(1,m),E=["type"];f&&E.push("type"),d&&E.push("type");let M=A=>{let z=$e("x",e.dataType,e.dims,m),D=[z],N=f?ne("seq_lens",f.dataType,f.dims):void 0;N&&D.push(N);let I=d?ne("total_sequence_length_input",d.dataType,d.dims):void 0;I&&D.push(I);let V=sa(e.dataType),q=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${g}>;
  var<workgroup> thread_sum: array<f32, ${g}>;
  ${A.registerUniforms(q).declareVariables(...D)}
  ${A.mainStart([g,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Wf(N,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${g}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${f?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${T}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${T}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(m){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${m}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${g}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${T}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${T}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(m){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${m}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${g}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${z.type.value}(${V}(1.0) / ${V}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${T}(x[offset + i]);
        x[offset + i] = ${z.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${f?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${z.type.value}(${V}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${g};${S};${m}`,inputDependencies:E},getShaderSource:M,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:u,z:n*r},programUniforms:_})}},lb=(e,n,r,l,u,o,f,d,m)=>{let g=f+o.kvSequenceLength,b=[o.batchSize,o.numHeads,o.sequenceLength,g],v=e>1&&l,_=o.kvNumHeads?o.kvNumHeads:o.numHeads,S=v?[o.batchSize,_,g,o.headSize]:void 0,T=o.nReps?o.nReps:1,E=o.scale===0?1/Math.sqrt(o.headSize):o.scale,M=St(o.headSize),A=o.headSize/M,z=12,D={x:Math.ceil(g/z),y:Math.ceil(o.sequenceLength/z),z:o.batchSize*o.numHeads},N=[{type:12,data:o.sequenceLength},{type:12,data:A},{type:12,data:g},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:E},{type:12,data:f},{type:12,data:o.kvSequenceLength},{type:12,data:T}],I=v&&l&&P.size(l.dims)>0,V=["type","type"];I&&V.push("type"),u&&V.push("type"),d&&V.push("type"),m&&V.push("type");let q=[{dims:b,dataType:n.dataType,gpuDataType:0}];v&&q.push({dims:S,dataType:n.dataType,gpuDataType:0});let C=J=>{let ue=ne("q",n.dataType,n.dims,M),pe=ne("key",r.dataType,r.dims,M),he=[ue,pe];if(I){let le=ne("past_key",l.dataType,l.dims,M);he.push(le)}u&&he.push(ne("attention_bias",u.dataType,u.dims));let ge=d?ne("seq_lens",d.dataType,d.dims):void 0;ge&&he.push(ge);let X=m?ne("total_sequence_length_input",m.dataType,m.dims):void 0;X&&he.push(X);let ye=$e("output",n.dataType,b),H=[ye];v&&H.push($e("present_key",n.dataType,S,M));let te=sa(1,M),me=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${z}u;

  var<workgroup> tileQ: array<${ue.type.storage}, ${z*z}>;
  var<workgroup> tileK: array<${ue.type.storage}, ${z*z}>;
  ${J.registerUniforms(me).declareVariables(...he,...H)}
  ${J.mainStart([z,z,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${T===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${T===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Wf(ge,X,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&v?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${v?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${te}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&v?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${v?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${te}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(M){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${M}`)}})()};
        output[outputIdx] = ${ye.type.value} (sum * uniforms.alpha) + ${u?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${M};${u!==void 0};${l!==void 0};${e}`,inputDependencies:V},getRunData:()=>({outputs:q,dispatchGroup:D,programUniforms:N}),getShaderSource:C}},sb=(e,n,r,l,u,o,f=void 0,d=void 0)=>{let m=o+u.kvSequenceLength,g=u.nReps?u.nReps:1,b=u.vHiddenSize*g,v=e>1&&l,_=u.kvNumHeads?u.kvNumHeads:u.numHeads,S=v?[u.batchSize,_,m,u.headSize]:void 0,T=[u.batchSize,u.sequenceLength,b],E=12,M={x:Math.ceil(u.vHeadSize/E),y:Math.ceil(u.sequenceLength/E),z:u.batchSize*u.numHeads},A=[{type:12,data:u.sequenceLength},{type:12,data:m},{type:12,data:u.vHeadSize},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:12,data:b},{type:12,data:o},{type:12,data:u.kvSequenceLength},{type:12,data:g}],z=v&&l&&P.size(l.dims)>0,D=["type","type"];z&&D.push("type"),f&&D.push("type"),d&&D.push("type");let N=[{dims:T,dataType:n.dataType,gpuDataType:0}];v&&N.push({dims:S,dataType:n.dataType,gpuDataType:0});let I=V=>{let q=ne("probs",n.dataType,n.dims),C=ne("v",r.dataType,r.dims),J=[q,C];z&&J.push(ne("past_value",l.dataType,l.dims));let ue=f?ne("seq_lens",f.dataType,f.dims):void 0;f&&J.push(ue);let pe=d?ne("total_sequence_length_input",d.dataType,d.dims):void 0;d&&J.push(pe);let he=[$e("output",n.dataType,T)];v&&he.push($e("present_value",n.dataType,S));let ge=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${E}u;
  var<workgroup> tileQ: array<${q.type.value}, ${E*E}>;
  var<workgroup> tileV: array<${q.type.value}, ${E*E}>;
  ${V.registerUniforms(ge).declareVariables(...J,...he)}
  ${V.mainStart([E,E,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Wf(ue,pe,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${z&&v?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${v?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${q.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${z&&v?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${v?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${l!==void 0};${e}`,inputDependencies:D},getRunData:()=>({outputs:N,dispatchGroup:M,programUniforms:A}),getShaderSource:I}},Pu=(e,n,r,l,u,o,f,d,m,g,b=void 0,v=void 0)=>{let _=Math.min(e.outputCount,1+(f?1:0)+(d?1:0)),S=_>1?f:void 0,T=_>1?d:void 0,E=_>1?g.pastSequenceLength:0,M=E+g.kvSequenceLength,A=m&&P.size(m.dims)>0?m:void 0,z=[n,r];S&&P.size(S.dims)>0&&z.push(S),A&&z.push(A),b&&z.push(b),v&&z.push(v);let D=e.compute(lb(_,n,r,S,A,g,E,b,v),{inputs:z,outputs:_>1?[-1,1]:[-1]})[0];e.compute(rb(D,g.batchSize,g.numHeads,E,g.sequenceLength,M,b,v),{inputs:b&&v?[D,b,v]:[D],outputs:[]});let N=[D,l];T&&P.size(T.dims)>0&&N.push(T),b&&N.push(b),v&&N.push(v),e.compute(sb(_,D,l,T,g,E,b,v),{inputs:N,outputs:_>1?[0,2]:[0]})},ub=(e,n)=>{let r=[n.batchSize,n.numHeads,n.sequenceLength,n.headSize],l=n.sequenceLength,u=n.inputHiddenSize,o=n.headSize,f=12,d={x:Math.ceil(n.headSize/f),y:Math.ceil(n.sequenceLength/f),z:n.batchSize*n.numHeads},m=[e.inputs[0],e.inputs[1],e.inputs[2]],g=[{type:12,data:l},{type:12,data:u},{type:12,data:o},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:n.hiddenSize},{type:12,data:n.hiddenSize+n.hiddenSize+n.vHiddenSize}],b=v=>{let _=$e("output_q",m[0].dataType,r),S=$e("output_k",m[0].dataType,r),T=$e("output_v",m[0].dataType,r),E=ne("input",m[0].dataType,m[0].dims),M=ne("weight",m[1].dataType,m[1].dims),A=ne("bias",m[2].dataType,m[2].dims),z=E.type.storage,D=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${f}u;
  var<workgroup> tileInput: array<${z}, ${f*f}>;
  var<workgroup> tileWeightQ: array<${z}, ${f*f}>;
  var<workgroup> tileWeightK: array<${z}, ${f*f}>;
  var<workgroup> tileWeightV: array<${z}, ${f*f}>;
  ${v.registerUniforms(D).declareVariables(E,M,A,_,S,T)}
  ${v.mainStart([f,f,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${z}(0);
    var valueK = ${z}(0);
    var valueV = ${z}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:d,programUniforms:g}),getShaderSource:b},{inputs:m,outputs:[-1,-1,-1]})},Aw=(e,n)=>{let r=ib(e.inputs,n),[l,u,o]=ub(e,r);return Pu(e,l,u,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),ob,fb,cb,Cw,sE=fe(()=>{Ya(),ke(),Ne(),Tt(),De(),ob=(e,n)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(l,u,o)=>{let f=u.length;if(f!==l.length)throw new Error(`${o}: num dimensions != ${f}`);u.forEach((d,m)=>{if(d!==l[m])throw new Error(`${o}: dim[${m}] do not match`)})};if(e[0].dims.length>1){let l=n.format==="NHWC"?n.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,n.spatial?2:void 0);r(e[1].dims,l,"Invalid input scale"),r(e[2].dims,l,"Invalid input B"),r(e[3].dims,l,"Invalid input mean"),r(e[4].dims,l,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},fb=(e,n)=>{let{epsilon:r,spatial:l,format:u}=n,o=e[0].dims,f=l?St(o[o.length-1]):1,d=u==="NHWC"&&o.length>1?f:1,m=P.size(o)/f,g=l,b=g?o.length:o,v=ne("x",e[0].dataType,e[0].dims,f),_=ne("scale",e[1].dataType,e[1].dims,d),S=ne("bias",e[2].dataType,e[2].dims,d),T=ne("inputMean",e[3].dataType,e[3].dims,d),E=ne("inputVar",e[4].dataType,e[4].dims,d),M=$e("y",e[0].dataType,b,f),A=()=>{let D="";if(l)D=`let cOffset = ${o.length===1?"0u":u==="NHWC"?`outputIndices[${o.length-1}] / ${f}`:"outputIndices[1]"};`;else if(u==="NCHW")D=`
            ${M.indicesSet("outputIndices","0","0")}
            let cOffset = ${M.indicesToOffset("outputIndices")};`;else{D=`var cIndices = ${_.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let N=1;N<_.rank;N++)D+=`cIndices[${N}] = outputIndices[${N}];`;D+=`let cOffset = ${_.indicesToOffset("cIndices")};`}return D},z=D=>`
  const epsilon = ${r};
  ${D.registerUniform("outputSize","u32").declareVariables(v,_,S,T,E,M)}
  ${D.mainStart()}
  ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${M.offsetToIndices(`global_idx * ${f}`)};
    ${A()}
    let scale = ${_.getByOffset("cOffset")};
    let bias = ${S.getByOffset("cOffset")};
    let inputMean = ${T.getByOffset("cOffset")};
    let inputVar = ${E.getByOffset("cOffset")};
    let x = ${v.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${M.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${n.epsilon}_${n.format}_${l}_${f}`,inputDependencies:g?["rank","type","type","type","type"]:void 0},getShaderSource:z,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g?[{type:12,data:m},...Te(o)]:[{type:12,data:m}]})}},cb=e=>et(e),Cw=(e,n)=>{let{inputs:r,outputCount:l}=e,u=cb({...n,outputCount:l});if(ht.webgpu.validateInputContent&&ob(r,u),n.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(fb(r,u))}}),db,pb,Ow,uE=fe(()=>{Ne(),De(),db=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},pb=e=>{let n=e[0].dims,r=e[0].dims[2],l=P.size(n)/4,u=e[0].dataType,o=ne("input",u,n,4),f=ne("bias",u,[r],4),d=ne("residual",u,n,4),m=$e("output",u,n,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)}}),getShaderSource:g=>`
  const channels = ${r}u / 4;
  ${g.declareVariables(o,f,d,m)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes(l)}
    let value = ${o.getByOffset("global_idx")}
      + ${f.getByOffset("global_idx % channels")} + ${d.getByOffset("global_idx")};
    ${m.setByOffset("global_idx","value")}
  }`}},Ow=e=>{db(e.inputs),e.compute(pb(e.inputs))}}),hb,Je,kw,Mw,Rw,Nw,Dw,Iw,Bw,Uw,qw,mb,Lw,Hw,jw,Gw,Vu,Vw,ic,Ww,Yw,Fw,Kw,Xw,Qw,Zw,Pw,Jw,e$,t$,a$,n$,i$,r$,l$,ah,s$,Wh,Yh,u$,o$,f$,gb,yb,c$,Rm=fe(()=>{ke(),Ne(),Tt(),De(),hb=(e,n,r,l,u,o,f)=>{let d=Math.ceil(n/4),m="";typeof u=="string"?m=`${u}(a)`:m=u("a");let g=ne("inputData",r,[d],4),b=$e("outputData",l,[d],4),v=[{name:"vec_size",type:"u32"}];return f&&v.push(...f),`
      ${e.registerUniforms(v).declareVariables(g,b)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${g.getByOffset("global_idx")};
    ${b.setByOffset("global_idx",m)}
  }`},Je=(e,n,r,l,u,o=e.dataType,f,d)=>{let m=[{type:12,data:Math.ceil(P.size(e.dims)/4)}];return f&&m.push(...f),{name:n,shaderCache:{hint:u,inputDependencies:["type"]},getShaderSource:g=>hb(g,P.size(e.dims),e.dataType,o,r,l,d),getRunData:g=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(P.size(g[0].dims)/64/4)},programUniforms:m})}},kw=e=>{e.compute(Je(e.inputs[0],"Abs","abs"))},Mw=e=>{e.compute(Je(e.inputs[0],"Acos","acos"))},Rw=e=>{e.compute(Je(e.inputs[0],"Acosh","acosh"))},Nw=e=>{e.compute(Je(e.inputs[0],"Asin","asin"))},Dw=e=>{e.compute(Je(e.inputs[0],"Asinh","asinh"))},Iw=e=>{e.compute(Je(e.inputs[0],"Atan","atan"))},Bw=e=>{e.compute(Je(e.inputs[0],"Atanh","atanh"))},Uw=e=>et(e),qw=(e,n)=>{let r;switch(n.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${n.to}`)}e.compute(Je(e.inputs[0],"Cast",r,void 0,n.cacheKey,n.to))},mb=e=>{let n,r,l=e.length>=2&&e[1].data!==0,u=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:n=l?e[1].getFloat32Array()[0]:-34028234663852886e22,r=u?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:n=l?e[1].getUint16Array()[0]:64511,r=u?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return et({min:n,max:r})},Lw=(e,n)=>{let r=n||mb(e.inputs),l=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"Clip",u=>`clamp(${u}, vec4<${l}>(uniforms.min), vec4<${l}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:l},{name:"max",type:l}]),{inputs:[0]})},Hw=e=>{e.compute(Je(e.inputs[0],"Ceil","ceil"))},jw=e=>{e.compute(Je(e.inputs[0],"Cos","cos"))},Gw=e=>{e.compute(Je(e.inputs[0],"Cosh","cosh"))},Vu=e=>et(e),Vw=(e,n)=>{let r=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"Elu",l=>`elu_vf32(${l})`,`
  const elu_alpha_ = ${r}(${n.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,n.cacheKey))},ic=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Ww=e=>{let n=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ic(n)))},Yw=e=>{e.compute(Je(e.inputs[0],"Exp","exp"))},Fw=e=>{e.compute(Je(e.inputs[0],"Floor","floor"))},Kw=e=>{let n=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ic(n)))},Xw=(e,n)=>{let r=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"LeakyRelu",l=>`select(leaky_relu_alpha_ * ${l}, ${l}, ${l} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${n.alpha});`,n.cacheKey))},Qw=e=>{e.compute(Je(e.inputs[0],"Not",n=>`!${n}`))},Zw=e=>{e.compute(Je(e.inputs[0],"Neg",n=>`-${n}`))},Pw=e=>{e.compute(Je(e.inputs[0],"Reciprocal",n=>`1.0/${n}`))},Jw=e=>{let n=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"Relu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > vec4<${n}>(0.0))`))},e$=e=>{e.compute(Je(e.inputs[0],"Sigmoid",n=>`(1.0 / (1.0 + exp(-${n})))`))},t$=e=>et(e),a$=(e,n)=>{let r=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"HardSigmoid",l=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${n.alpha} * ${l} + vec4<${r}>(${n.beta})))`,void 0,n.cacheKey))},n$=e=>{e.compute(Je(e.inputs[0],"Sin","sin"))},i$=e=>{e.compute(Je(e.inputs[0],"Sinh","sinh"))},r$=e=>{e.compute(Je(e.inputs[0],"Sqrt","sqrt"))},l$=e=>{e.compute(Je(e.inputs[0],"Tan","tan"))},ah=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,s$=e=>{e.compute(Je(e.inputs[0],"Tanh",ah))},Wh=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ah("v")};
}
`,Yh=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,u$=e=>{let n=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"FastGelu",Yh,Wh(n),void 0,e.inputs[0].dataType))},o$=(e,n)=>{let r=sa(e.inputs[0].dataType);return e.compute(Je(e.inputs[0],"ThresholdedRelu",l=>`select(vec4<${r}>(0.0), ${l}, ${l} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${n.alpha});`,n.cacheKey)),0},f$=e=>{e.compute(Je(e.inputs[0],"Log","log"))},gb=(e,n)=>`
const alpha = vec4<${e}>(${n});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,yb=e=>`quick_gelu_impl(${e})`,c$=(e,n)=>{let r=sa(e.inputs[0].dataType);e.compute(Je(e.inputs[0],"QuickGelu",yb,gb(r,n.alpha),n.cacheKey,e.inputs[0].dataType))}}),vb,bb,d$,oE=fe(()=>{Ne(),De(),Rm(),vb=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bb=e=>{let n=e[0].dims.slice();n[2]=n[2]/2;let r=ne("input",e[0].dataType,e[0].dims,4),l=ne("bias",e[0].dataType,[e[0].dims[2]],4),u=$e("output",e[0].dataType,n,4),o=P.size(n)/4,f=Ht(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:d=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${d.declareVariables(r,l,u)}

  ${ic(f)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${u.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},d$=e=>{vb(e.inputs),e.compute(bb(e.inputs))}}),_b,wb,on,p$,h$,m$,g$,y$,v$,b$,_$,w$,$$,fE=fe(()=>{ke(),Ne(),De(),_b=(e,n,r,l,u,o,f,d,m,g,b,v)=>{let _,S;typeof d=="string"?_=S=(z,D)=>`${d}((${z}),(${D}))`:typeof d=="function"?_=S=d:(_=d.scalar,S=d.vector);let T=$e("outputData",b,l.length,4),E=ne("aData",m,n.length,4),M=ne("bData",g,r.length,4),A;if(u)if(o){let z=P.size(n)===1,D=P.size(r)===1,N=n.length>0&&n[n.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;z||D?A=T.setByOffset("global_idx",S(z?`${E.type.value}(${E.getByOffset("0")}.x)`:E.getByOffset("global_idx"),D?`${M.type.value}(${M.getByOffset("0")}.x)`:M.getByOffset("global_idx"))):A=`
            let outputIndices = ${T.offsetToIndices("global_idx * 4u")};
            let offsetA = ${E.broadcastedIndicesToOffset("outputIndices",T)};
            let offsetB = ${M.broadcastedIndicesToOffset("outputIndices",T)};
            ${T.setByOffset("global_idx",S(f||N?E.getByOffset("offsetA / 4u"):`${E.type.value}(${E.getByOffset("offsetA / 4u")}[offsetA % 4u])`,f||I?M.getByOffset("offsetB / 4u"):`${M.type.value}(${M.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else A=T.setByOffset("global_idx",S(E.getByOffset("global_idx"),M.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let z=(D,N,I="")=>{let V=`aData[indexA${N}][componentA${N}]`,q=`bData[indexB${N}][componentB${N}]`;return`
            let outputIndices${N} = ${T.offsetToIndices(`global_idx * 4u + ${N}u`)};
            let offsetA${N} = ${E.broadcastedIndicesToOffset(`outputIndices${N}`,T)};
            let offsetB${N} = ${M.broadcastedIndicesToOffset(`outputIndices${N}`,T)};
            let indexA${N} = offsetA${N} / 4u;
            let indexB${N} = offsetB${N} / 4u;
            let componentA${N} = offsetA${N} % 4u;
            let componentB${N} = offsetB${N} % 4u;
            ${D}[${N}] = ${I}(${_(V,q)});
          `};b===9?A=`
            var data = vec4<u32>(0);
            ${z("data",0,"u32")}
            ${z("data",1,"u32")}
            ${z("data",2,"u32")}
            ${z("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:A=`
            ${z("outputData[global_idx]",0)}
            ${z("outputData[global_idx]",1)}
            ${z("outputData[global_idx]",2)}
            ${z("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(E,M,T)}

        ${v??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${A}
      }`},wb=(e,n,r,l,u,o,f=r.dataType)=>{let d=r.dims.map(Number),m=l.dims.map(Number),g=!P.areEqual(d,m),b=d,v=P.size(d),_=!1,S=!1,T=[g];if(g){let E=ss.calcShape(d,m,!1);if(!E)throw new Error("Can't perform binary op on the given tensors");b=E.slice(),v=P.size(b);let M=P.size(d)===1,A=P.size(m)===1,z=d.length>0&&d[d.length-1]%4===0,D=m.length>0&&m[m.length-1]%4===0;T.push(M),T.push(A),T.push(z),T.push(D);let N=1;for(let I=1;I<b.length;I++){let V=d[d.length-I],q=m[m.length-I];if(V===q)N*=V;else break}N%4===0?(S=!0,_=!0):(M||A||z||D)&&(_=!0)}else _=!0;return T.push(_),{name:e,shaderCache:{hint:n+T.map(E=>E.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:E=>_b(E,d,m,b,_,g,S,u,r.dataType,l.dataType,f,o),getRunData:()=>({outputs:[{dims:b,dataType:f}],dispatchGroup:{x:Math.ceil(v/64/4)},programUniforms:[{type:12,data:Math.ceil(P.size(b)/4)},...Te(d,m,b)]})}},on=(e,n,r,l,u,o)=>{e.compute(wb(n,u??"",e.inputs[0],e.inputs[1],r,l,o))},p$=e=>{on(e,"Add",(n,r)=>`${n}+${r}`)},h$=e=>{on(e,"Div",(n,r)=>`${n}/${r}`)},m$=e=>{on(e,"Equal",{scalar:(n,r)=>`u32(${n}==${r})`,vector:(n,r)=>`vec4<u32>(${n}==${r})`},void 0,void 0,9)},g$=e=>{on(e,"Mul",(n,r)=>`${n}*${r}`)},y$=e=>{let n=ne("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;on(e,"Pow",{scalar:(r,l)=>`pow_custom(${r},${l})`,vector:(r,l)=>`pow_vector_custom(${r},${l})`},`
    fn pow_custom(a : ${n}, b : ${n}) -> ${n} {
      if (b == ${n}(0.0)) {
        return ${n}(1.0);
      } else if (a < ${n}(0.0) && f32(b) != floor(f32(b))) {
        return ${n}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${n}(1.0), round(f32(abs(b) % ${n}(2.0))) != 1.0) * ${n}(${n==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${n}>, b : vec4<${n}>) -> vec4<${n}> {
      // TODO: implement vectorized pow
      return vec4<${n}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},v$=e=>{on(e,"Sub",(n,r)=>`${n}-${r}`)},b$=e=>{on(e,"Greater",{scalar:(n,r)=>`u32(${n}>${r})`,vector:(n,r)=>`vec4<u32>(${n}>${r})`},void 0,void 0,9)},_$=e=>{on(e,"Less",{scalar:(n,r)=>`u32(${n}<${r})`,vector:(n,r)=>`vec4<u32>(${n}<${r})`},void 0,void 0,9)},w$=e=>{on(e,"GreaterOrEqual",{scalar:(n,r)=>`u32(${n}>=${r})`,vector:(n,r)=>`vec4<u32>(${n}>=${r})`},void 0,void 0,9)},$$=e=>{on(e,"LessOrEqual",{scalar:(n,r)=>`u32(${n}<=${r})`,vector:(n,r)=>`vec4<u32>(${n}<=${r})`},void 0,void 0,9)}}),$b,xb,Sb,Tb,x$,S$,cE=fe(()=>{ke(),Ne(),Tt(),De(),$b=(e,n)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,l=e[r],u=l.dataType,o=l.dims.length;e.forEach((f,d)=>{if(d!==r){if(f.dataType!==u)throw new Error("input tensors should be one type");if(f.dims.length!==o)throw new Error("input tensors should have the same shape");f.dims.forEach((m,g)=>{if(g!==n&&m!==l.dims[g])throw new Error("non concat dimensions must match")})}})},xb=(e,n)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${n});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Sb=(e,n)=>{let r=e.length,l=[];for(let u=0;u<r;++u){let o=n.setByOffset("global_idx",e[u].getByIndices("indices"));r===1?l.push(o):u===0?l.push(`if (inputIndex == ${u}u) { ${o} }`):u===r-1?l.push(`else { ${o} }`):l.push(`else if (inputIndex == ${u}) { ${o} }`)}return l.join(`
`)},Tb=(e,n,r,l)=>{let u=P.size(r),o=new Array(e.length),f=new Array(e.length),d=0,m=[],g=[],b=[{type:12,data:u}];for(let E=0;E<e.length;++E)d+=e[E].dims[n],o[E]=d,g.push(e[E].dims.length),f[E]=ne(`input${E}`,l,g[E]),m.push("rank"),b.push({type:12,data:o[E]});for(let E=0;E<e.length;++E)b.push(...Te(e[E].dims));b.push(...Te(r));let v=$e("output",l,r.length),_=v.indicesGet("indices",n),S=Array.from(Array(o.length).keys()).map(E=>`uniforms.sizeInConcatAxis${E}`).join(","),T=E=>`

  ${(()=>{E.registerUniform("outputSize","u32");for(let M=0;M<e.length;M++)E.registerUniform(`sizeInConcatAxis${M}`,"u32");return E.declareVariables(...f,v)})()}

  ${xb(o.length,S)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${v.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${_});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${S});
      ${_} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Sb(f,v)}
  }`;return{name:"Concat",shaderCache:{hint:`${n}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:b}),getShaderSource:T}},x$=(e,n)=>{let r=e.inputs,l=r[0].dims,u=P.normalizeAxis(n.axis,l.length);$b(r,u);let o=l.slice();o[u]=r.reduce((d,m)=>d+(m.dims.length>u?m.dims[u]:0),0);let f=r.filter(d=>P.size(d.dims)>0);e.compute(Tb(f,u,o,r[0].dataType),{inputs:f})},S$=e=>et({axis:e.axis})}),jr,Gr,Vr,Nm,Kr=fe(()=>{ke(),Ne(),jr=(e,n,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${n}(0.0));`;case"Sigmoid":return`value = (${n}(1.0) / (${n}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${n}(${r}(uniforms.clip_min)), ${n}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${n}(0.0), min(${n}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${n}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Gr=(e,n)=>{e.activation==="Clip"?n.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?n.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&n.push({type:1,data:e.alpha})},Vr=(e,n)=>{e.activation==="Clip"?n.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?n.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&n.push({name:"alpha",type:"f32"})},Nm=e=>{let n=(e==null?void 0:e.activation)||"";if(n==="HardSigmoid"){let[r,l]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:n,alpha:r,beta:l}}else if(n==="Clip"){let[r,l]=(e==null?void 0:e.activation_params)||[Q2,Z2];return{activation:n,clipMax:l,clipMin:r}}else if(n==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:n,alpha:r}}return{activation:n}}}),Wt,T$,Dm=fe(()=>{Wt=(e,n)=>{switch(e){case 1:return n;case 2:return`vec2<${n}>`;case 3:return`vec3<${n}>`;case 4:return`vec4<${n}>`;default:throw new Error(`${e}-component is not supported.`)}},T$=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),E$,dE=fe(()=>{E$=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Fu,Im,Bm=fe(()=>{ke(),Ne(),De(),Kr(),Fu=(e,n,r,l,u)=>{let o=l-r;return`
      ${Array.from({length:r}).map((f,d)=>`
      if (${Se(n.shape,d,n.rank)} != 1) {
        ${n.indicesSet(e,d,Se(u,d+o,l))}
      } else {
        ${n.indicesSet(e,d,0)}
      }`).join("")}
`},Im=(e,n,r,l,u=!1,o)=>{let f=e[0].dims,d=e[1].dims,m=f[f.length-2],g=d[d.length-1],b=f[f.length-1],v=St(g),_=St(b),S=St(m),T=P.size(r)/v/S,E=e.length>2,M=l?l.slice(0,-2):r.slice(0,-2),A=[P.size(M),m,g],z=[{type:12,data:T},{type:12,data:m},{type:12,data:g},{type:12,data:b}];Gr(n,z),z.push(...Te(M,f,d)),E&&z.push(...Te(e[2].dims)),z.push(...Te(A));let D=N=>{let I=Om("batch_dims",e[0].dataType,M.length),V=ne("a",e[0].dataType,f.length,_),q=ne("b",e[1].dataType,d.length,v),C=$e("output",e[0].dataType,A.length,v),J=Ht(C.type.tensor),ue=jr(n,C.type.value,J),pe=[V,q],he="";if(E){let ye=u?v:1;pe.push(ne("bias",e[2].dataType,e[2].dims.length,ye)),he=`${u?`value += bias[col / ${ye}];`:`value += ${C.type.value}(bias[row + i]);`}`}let ge=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Vr(n,ge);let X=()=>{let ye=`var a_data: ${V.type.value};`;for(let H=0;H<_;H++)ye+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${v}];`;for(let H=0;H<S;H++){ye+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${_}];`;for(let te=0;te<_;te++)ye+=`
            values[${H}] = fma(${q.type.value}(a_data${_===1?"":`[${te}]`}), b_data${te}, values[${H}]);
`}return ye};return`
  ${N.registerUniforms(ge).registerInternalVariables(I).declareVariables(...pe,C)}
  ${N.mainStart()}
    ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${v})) * ${v};
    var index1 = global_idx / (uniforms.N / ${v});
    let stride1 = uniforms.M / ${S};
    let row = (index1 % stride1) * ${S};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${V.type.indices};
    ${Fu("a_indices",V,V.rank-2,I.rank,"batch_indices")}
    ${V.indicesSet("a_indices",V.rank-2,0)}
    ${V.indicesSet("a_indices",V.rank-1,0)}
    let a_offset = ${V.indicesToOffset("a_indices")};

    var b_indices: ${q.type.indices};
    ${Fu("b_indices",q,q.rank-2,I.rank,"batch_indices")}
    ${q.indicesSet("b_indices",q.rank-2,0)}
    ${q.indicesSet("b_indices",q.rank-1,0)}
    let b_offset = ${q.indicesToOffset("b_indices")};
    var values: array<${C.type.value}, ${S}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${_}) {
      ${X()}
    }
    for (var i = 0u; i < ${S}u; i++) {
      var value = values[i];
      ${he}
      ${ue}
      let cur_indices = ${C.type.indices}(batch, row + i, col);
      let offset = ${C.indicesToOffset("cur_indices")};
      ${C.setByOffset(`offset / ${v}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${n.activation};${v};${_};${S};${u}`,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:z}),getShaderSource:D}}}),Eb,zb,Fh,nh,Ab,Kh,Cb,pc,Um=fe(()=>{ke(),Ne(),De(),Kr(),Bm(),Dm(),Eb=(e,n)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${n?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${n?", batchIndices":""});
        `,zb=(e,n)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${n===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${n===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${n===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Fh=(e,n,r="f32",l,u=!1,o=32,f=!1,d=32)=>{let m=n[1]*e[1],g=n[0]*e[0],b=u?m:o,v=u?o:m,_=b/n[0],S=o/n[1];if(!((u&&_===4&&e[1]===4||!u&&(_===3||_===4))&&b%n[0]===0&&o%n[1]===0&&e[0]===4))throw new Error(`If transposeA ${u} is true, innerElementSize ${_} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${_} must be 3 or 4.
  tileAWidth ${b} must be divisible by workgroupSize[0]${n[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${n[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${_}<${r}>, ${b/_}>, ${v}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${g/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${_};
const tileInner = ${o};

@compute @workgroup_size(${n[0]}, ${n[1]}, ${n[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${f?"0":"i32(globalId.z)"};
  ${l?`let batchIndices = ${l.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${m};

  let num_tiles = ${f?`${Math.ceil(d/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${f?`i32(globalId.z) * ${d}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${S};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Eb(u,l)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${S}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${l?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${_===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${zb(u,_)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},nh=(e,n)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${n?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${n?", batchIndices":""});
            `,Ab=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Kh=(e,n,r="f32",l,u=!1,o=32,f=!1,d=32,m=!1)=>{let g=e[1]*n[1],b=e[0]*n[0],v=u?g:o,_=u?o:g;if(!(_%n[1]===0&&v%n[0]===0&&o%n[1]===0))throw new Error(`tileAHight ${_} must be divisible by workgroupSize[1]${n[1]}, tileAWidth ${v} must be divisible by workgroupSize[0]${n[0]}, tileInner ${o} must be divisible by workgroupSize[1]${n[1]}`);let S=_/n[1],T=v/n[0],E=o/n[1],M=m?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${g};
    let globalColStart = i32(workgroupId.x) * ${b};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${_}; inputRow = inputRow + ${n[1]}) {
        for (var inputCol = localCol; inputCol < ${v}; inputCol = inputCol + ${n[0]}) {
          ${nh(u,l)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${n[1]}) {
            for (var inputCol = localCol; inputCol < ${b}; inputCol = inputCol + ${n[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${l?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${n[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${u?`mm_Asub[k][localRow + innerRow * ${n[1]}];`:`mm_Asub[localRow + innerRow * ${n[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${n[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${n[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${g};

let tileRowA = i32(localId.y) * ${S};
let tileColA = i32(localId.x) * ${T};
let tileRowB = i32(localId.y) * ${E};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${S}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${T}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${nh(u,l)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${E}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${l?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ab(u)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${v}>, ${_}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${b}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${n[0]}, ${n[1]}, ${n[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${f?"0":"i32(globalId.z)"};
    ${l?`let batchIndices = ${l.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${f?`${Math.ceil(d/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${f?`i32(globalId.z) * ${d}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${M}
  }
`},Cb=(e,n,r,l,u=!1)=>{let[o,f,d,m]=l,g=Ht(l[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Wt(e,g)} {
      var value = ${Wt(e,g)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${f.type.indices};
        ${Fu("aIndices",f,f.rank-2,o.rank,"batchIndices")}
        ${f.indicesSet("aIndices",f.rank-2,"u32(row)")}
        ${f.indicesSet("aIndices",f.rank-1,"u32(colIn)")}
        value = ${f.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Wt(e,g)} {
      var value = ${Wt(e,g)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${d.type.indices};
        ${Fu("bIndices",d,d.rank-2,o.rank,"batchIndices")}
        ${d.indicesSet("bIndices",d.rank-2,"u32(row)")}
        ${d.indicesSet("bIndices",d.rank-1,"u32(colIn)")}
        value = ${d.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Wt(e,g)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${n?`value = value + ${u?"bias[colIn]":`${Wt(e,g)}(bias[row])`};`:""}
        ${r}
        ${m.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},pc=(e,n,r,l,u=!1,o)=>{let f=e[0].dims,d=e[1].dims,m=f.slice(0,-2),g=d.slice(0,-2),b=l?l.slice(0,-2):r.slice(0,-2),v=P.size(b),_=f[f.length-2],S=f[f.length-1],T=d[d.length-1],E=S%4===0&&T%4===0,M=_<=8?[4,1,1]:[4,4,1],A=[8,8,1],z=[Math.ceil(T/A[0]/M[0]),Math.ceil(_/A[1]/M[1]),Math.ceil(v/A[2]/M[2])],D=E?4:1,N=[...m,_,S/D],I=N.length,V=[...g,S,T/D],q=V.length,C=[v,_,T/D],J=[{type:6,data:_},{type:6,data:T},{type:6,data:S}];Gr(n,J),J.push(...Te(b,N,V));let ue=["rank","rank"],pe=e.length>2;pe&&(J.push(...Te(e[2].dims)),ue.push("rank")),J.push(...Te(C));let he=ge=>{let X=b.length,ye=Om("batchDims",e[0].dataType,X,1),H=Ht(e[0].dataType),te=ne("a",e[0].dataType,I,D),me=ne("b",e[1].dataType,q,D),le=$e("result",e[0].dataType,C.length,D),we=[te,me];if(pe){let oe=u?D:1;we.push(ne("bias",e[2].dataType,e[2].dims.length,oe))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Vr(n,R);let j=Ht(le.type.tensor),Z=jr(n,le.type.value,j),G=Cb(D,pe,Z,[ye,te,me,le],u);return`
  ${ge.registerUniforms(R).registerInternalVariables(ye).declareVariables(...we,le)}
  ${G}
  ${E?Fh(M,A,H,ye):Kh(M,A,H,ye)}
                   `};return{name:"MatMul",shaderCache:{hint:`${M};${n.activation};${E};${u}`,inputDependencies:ue},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:z[0],y:z[1],z:z[2]},programUniforms:J}),getShaderSource:he}}}),Ob,z$,pE=fe(()=>{ke(),pi(),De(),Kr(),Dm(),dE(),Um(),Ob=(e,n,r,l,u=!1,o,f=4,d=4,m=4,g="f32")=>{let b=J=>{switch(J){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${g}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${J} is not supported.`)}},v=J=>{switch(J){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${J} is not supported.`)}},_=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,S=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,T=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",E=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",M=e?"row":"col",A=e?"col":"row",z=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${M} / outWidth;
    let outCol = ${M} % outWidth;

    let WRow = ${A} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${A} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${A} % inChannels;
    var resData = ${Wt(f,g)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${T} && xCol >= 0 && xCol < ${E}) {
      ${_}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${b(f)}
    }
    return resData;`,D=e?n&&l?`
    let col = colIn * ${f};
    ${z}`:`
    let col = colIn * ${f};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${z}
    }
    return ${Wt(f,g)}(0.0);`:l&&r?`
    let col = colIn * ${f};
    ${z}`:`
    let col = colIn * ${f};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${z}
    }
    return ${Wt(f,g)}(0.0);`,N=e?l&&r?v(d):`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v(d)}
    }
    return ${Wt(d,g)}(0.0);`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${v(d)}
    }
    return ${Wt(d,g)}(0.0);`,I=Wt(m,g),V=Wt(e?f:d,g),q=Wt(e?d:f,g),C=jr(o,I,g);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${V} {
      ${e?D:N}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${q} {
      ${e?N:D}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${m};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${S}
      ${T$(u)}
      ${C}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},z$=(e,n,r,l,u,o,f,d,m)=>{let g=n.format==="NHWC",b=g?e[0].dims[3]:e[0].dims[1],v=r[0],_=g?r[2]:r[3],S=g?r[1]:r[2],T=g?r[3]:r[1],E=g&&(b%4===0||b%3===0)&&T%4===0,M=g?T:_*S,A=g?_*S:T,z=[8,8,1],D=l<=8?[4,1,1]:[4,4,1],N=[Math.ceil(M/z[0]/D[0]),Math.ceil(A/z[1]/D[1]),Math.ceil(v/z[2]/D[2])];Xe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${N}`);let I=E?g&&b%4!==0?3:4:1,V=z[1]*D[1],q=z[0]*D[0],C=Math.max(z[0]*I,z[1]),J=l%V===0,ue=u%q===0,pe=o%C===0,he=E?[I,4,4]:[1,1,1],ge=[{type:6,data:l},{type:6,data:u},{type:6,data:o},{type:6,data:[n.pads[0],n.pads[1]]},{type:6,data:n.strides},{type:6,data:n.dilations}];Gr(n,ge),ge.push(...Te(e[0].dims,e[1].dims));let X=["rank","rank"];f&&(ge.push(...Te(e[2].dims)),X.push("rank")),ge.push(...Te(r));let ye=H=>{let te=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Vr(n,te);let me=E?4:1,le=Ht(e[0].dataType),we=`
      fn setOutputAtIndex(flatIndex : i32, value : ${E?`vec4<${le}>`:le}) {
        result[flatIndex] = ${E?`vec4<${le}>`:le}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${E?`vec4<${le}>`:le}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${E?"/ 4":""}, value);
      }`,R=ne("x",e[0].dataType,e[0].dims.length,I===3?1:I),j=ne("w",e[1].dataType,e[1].dims.length,me),Z=[R,j],G=$e("result",e[0].dataType,r.length,me);if(f){let oe=ne("bias",e[2].dataType,e[2].dims.length,me);Z.push(oe),we+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${E?`vec4<${le}>`:le} {
          return bias[coords.${g?"w":"y"}${E?"/ 4":""}];
        }`}return`
        ${E$("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(te).declareVariables(...Z,G)}
        ${we}
        ${Ob(g,J,ue,pe,f,n,he[0],he[1],he[2],le)}
        ${E?Fh(D,z,le,void 0,!g,C):Kh(D,z,le,void 0,!g,C,!1,void 0,d)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${n.cacheKey};${I};${E};${J};${ue};${pe};${V};${q};${C}`,inputDependencies:X},getRunData:()=>({outputs:[{dims:m?m(r):r,dataType:e[0].dataType}],dispatchGroup:{x:N[0],y:N[1],z:N[2]},programUniforms:ge}),getShaderSource:ye}}}),kb,ih,Iu,Mb,rh,Rb,A$,C$,hE=fe(()=>{ke(),pi(),Ne(),De(),Kr(),Dm(),kb=e=>{let n=1;for(let r=0;r<e.length;r++)n*=e[r];return n},ih=e=>typeof e=="number"?[e,e,e]:e,Iu=(e,n)=>n<=1?e:e+(e-1)*(n-1),Mb=(e,n,r,l=1)=>{let u=Iu(n,l);return Math.floor((e[0]*(r-1)-r+u)/2)},rh=(e,n,r,l,u)=>{u==null&&(u=Mb(e,n[0],l[0]));let o=[0,0,0,r];for(let f=0;f<3;f++)e[f]+2*u>=n[f]&&(o[f]=Math.trunc((e[f]-n[f]+2*u)/l[f]+1));return o},Rb=(e,n,r,l,u,o,f,d,m,g)=>{let b,v,_,S;if(e==="VALID"&&(e=0),typeof e=="number"){b={top:e,bottom:e,left:e,right:e,front:e,back:e};let T=rh([n,r,l,1],[d,m,g],1,[u,o,f],e);v=T[0],_=T[1],S=T[2]}else if(Array.isArray(e)){if(!e.every((E,M,A)=>E===A[0]))throw Error(`Unsupported padding parameter: ${e}`);b={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let T=rh([n,r,l,1],[d,m,g],1,[u,o,f],e[0]);v=T[0],_=T[1],S=T[2]}else if(e==="SAME_UPPER"){v=Math.ceil(n/u),_=Math.ceil(r/o),S=Math.ceil(l/f);let T=(v-1)*u+d-n,E=(_-1)*o+m-r,M=(S-1)*f+g-l,A=Math.floor(T/2),z=T-A,D=Math.floor(E/2),N=E-D,I=Math.floor(M/2),V=M-I;b={top:D,bottom:N,left:I,right:V,front:A,back:z}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:b,outDepth:v,outHeight:_,outWidth:S}},A$=(e,n,r,l,u,o=!1,f="channelsLast")=>{let d,m,g,b,v;if(f==="channelsLast")[d,m,g,b,v]=e;else if(f==="channelsFirst")[d,v,m,g,b]=e;else throw new Error(`Unknown dataFormat ${f}`);let[_,,S,T,E]=n,[M,A,z]=ih(r),[D,N,I]=ih(l),V=Iu(S,D),q=Iu(T,N),C=Iu(E,I),{padInfo:J,outDepth:ue,outHeight:pe,outWidth:he}=Rb(u,m,g,b,M,A,z,V,q,C),ge=o?_*v:_,X=[0,0,0,0,0];return f==="channelsFirst"?X=[d,ge,ue,pe,he]:f==="channelsLast"&&(X=[d,ue,pe,he,ge]),{batchSize:d,dataFormat:f,inDepth:m,inHeight:g,inWidth:b,inChannels:v,outDepth:ue,outHeight:pe,outWidth:he,outChannels:ge,padInfo:J,strideDepth:M,strideHeight:A,strideWidth:z,filterDepth:S,filterHeight:T,filterWidth:E,effectiveFilterDepth:V,effectiveFilterHeight:q,effectiveFilterWidth:C,dilationDepth:D,dilationHeight:N,dilationWidth:I,inShape:e,outShape:X,filterShape:n}},C$=(e,n,r,l,u,o)=>{let f=o==="channelsLast";f?e[0].dims[3]:e[0].dims[1];let d=[64,1,1],m={x:r.map((M,A)=>A)},g=[Math.ceil(kb(m.x.map(M=>r[M]))/d[0]),1,1];Xe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${g}`);let b=1,v=P.size(r),_=[{type:12,data:v},{type:12,data:l},{type:12,data:u},{type:12,data:n.strides},{type:12,data:n.dilations}];Gr(n,_),_.push(...Te(e[0].dims,e[1].dims));let S=["rank","rank"],T=e.length===3;T&&(_.push(...Te(e[2].dims)),S.push("rank")),_.push(...Te(r));let E=M=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:l.length},{name:"pads",type:"u32",length:u.length},{name:"strides",type:"u32",length:n.strides.length},{name:"dilations",type:"u32",length:n.dilations.length}];Vr(n,A);let z=1,D=Ht(e[0].dataType),N=ne("x",e[0].dataType,e[0].dims.length,b),I=ne("W",e[1].dataType,e[1].dims.length,z),V=[N,I],q=$e("result",e[0].dataType,r.length,z),C="";if(T){let pe=ne("bias",e[2].dataType,e[2].dims.length,z);V.push(pe),C+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${D} {
          return bias[${f?Se("coords",4,5):Se("coords",1,5)}];
        }`}let J=Wt(b,D),ue=jr(n,J,D);return`
            ${C}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${N.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${M.registerUniforms(A).declareVariables(...V,q)}
          ${M.mainStart()}
          ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${q.offsetToIndices("global_idx")};
              let batch = ${Se("coords",0,N.rank)};
              let d2 = ${f?Se("coords",N.rank-1,N.rank):Se("coords",1,N.rank)};
              let xFRCCorner = vec3<u32>(${f?Se("coords",1,N.rank):Se("coords",2,N.rank)},
              ${f?Se("coords",2,N.rank):Se("coords",3,N.rank)},
              ${f?Se("coords",3,N.rank):Se("coords",4,N.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${f?Se("uniforms.x_shape",1,N.rank):Se("uniforms.x_shape",2,N.rank)};
              let xShapeZ = ${f?Se("uniforms.x_shape",2,N.rank):Se("uniforms.x_shape",3,N.rank)};
              let xShapeW = ${f?Se("uniforms.x_shape",3,N.rank):Se("uniforms.x_shape",4,N.rank)};
              let xShapeU = ${f?Se("uniforms.x_shape",4,N.rank):Se("uniforms.x_shape",1,N.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${f?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${f?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${f?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${f?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${T?"value = value + getBiasByOutputCoords(coords)":""};
              ${ue}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${n.cacheKey};${f};${b};${T}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:_}),getShaderSource:E}}}),O$,k$,mE=fe(()=>{ke(),Ne(),De(),Kr(),O$=(e,n,r,l)=>{let u=e.length>2,o=u?"value += b[output_channel];":"",f=e[0].dims,d=e[1].dims,m=n.format==="NHWC",g=m?r[3]:r[1],b=g/n.group,v=m&&b>=4?St(g):1,_=P.size(r)/v,S=[{type:12,data:_},{type:12,data:n.dilations},{type:12,data:[n.strides[0],n.strides[1]]},{type:12,data:[n.pads[0],n.pads[1]]},{type:12,data:b}];Gr(n,S),S.push(...Te(f,[d[0],d[1],d[2],d[3]/v]));let T=u?["rank","rank","rank"]:["rank","rank"];S.push(...Te([r[0],r[1],r[2],r[3]/v]));let E=M=>{let A=$e("output",e[0].dataType,r.length,v),z=Ht(A.type.tensor),D=jr(n,A.type.value,z),N=ne("x",e[0].dataType,f.length),I=ne("w",e[1].dataType,d.length,v),V=[N,I];u&&V.push(ne("b",e[2].dataType,e[2].dims,v));let q=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:n.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Vr(n,q);let C=m?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${N.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${N.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${M.registerUniforms(q).declareVariables(...V,A)}

  ${M.mainStart()}
    ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${A.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${m?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${m?1:2}], outputIndices[${m?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${v} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${m?2:1}];

    var value: ${A.type.value} = ${A.type.value}(0);
    ${C}
    ${o}
    ${D}
    ${A.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${n.cacheKey}_${v}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:S}),getShaderSource:E}},k$=(e,n,r,l)=>{let u=e.length>2,o=St(r[3]),f=St(r[2]),d=P.size(r)/o/f,m=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],g=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],b=[r[0],r[1],r[2],r[3]/o],v=[{type:12,data:d},{type:6,data:[n.strides[0],n.strides[1]]},{type:6,data:[n.pads[0],n.pads[1]]}];Gr(n,v),v.push(...Te(m,g,b));let _=(f-1)*n.strides[1]+g[1],S=T=>{let E=$e("output",e[0].dataType,b.length,o),M=Ht(E.type.tensor),A=jr(n,E.type.value,M),z=ne("x",e[0].dataType,m.length,o),D=ne("w",e[1].dataType,g.length,o),N=[z,D];u&&N.push(ne("b",e[2].dataType,e[2].dims,o));let I=u?"value += b[output_channel];":"",V=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Vr(n,V),`
  ${T.registerUniforms(V).declareVariables(...N,E)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${f}u;
    let col = (index1 % width1) * ${f}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${z.type.value}, ${_}>;
    var values: array<${E.type.value}, ${f}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${g[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${_}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${z.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${z.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${g[1]}; w_width++) {
          let w_val = ${D.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${f}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${I}
      ${A}
      ${E.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${n.cacheKey};${o};${f};${_};${g[0]};${g[1]}`,inputDependencies:u?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:v}),getShaderSource:S}}}),Nb,Yf,Db,Ff,Xh,lh,Ib,Bb,Qh,gE=fe(()=>{Ne(),pE(),hE(),Um(),mE(),Kr(),Bm(),ir(),Nb=(e,n,r,l,u,o)=>{let f=e[0],d=e.slice(o?1:2,o?3:4),m=d.length,g=n[0],b=n.slice(2).map((_,S)=>_+(_-1)*(r[S]-1)),v=d.map((_,S)=>_+l[S]+l[S+m]).map((_,S)=>Math.floor((_-b[S]+u[S])/u[S]));return v.splice(0,0,f),v.splice(o?3:1,0,g),v},Yf=[2,3,1,0],Db=(e,n)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[n.format==="NHWC"?e[0].dims.length-1:1],l=e[1].dims[1]*n.group;if(r!==l)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let u=e[0].dims.length-2;if(n.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(n.strides.length!==u)throw new Error(`strides should be ${u}D`);if(n.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(n.kernelShape.length!==0&&n.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ff=(e,n)=>{let r=e.kernelShape.slice();r.length<n[1].dims.length-2&&r.push(...Array(n[1].dims.length-2-r.length).fill(0));for(let o=2;o<n[1].dims.length;++o)r[o-2]===0&&(r[o-2]=n[1].dims[o]);let l=e.pads.slice();cc.adjustPadsBasedOnAutoPad(n[0].dims,e.strides,e.dilations,r,l,e.format==="NHWC",e.autoPad);let u=Object.assign({},e);return Object.assign(u,{kernelShape:r,pads:l}),u},Xh=e=>{let n=Nm(e),r=e.format,l=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],u=e.dilations,o=e.group,f=e.kernel_shape,d=e.pads,m=e.strides,g=e.w_is_const();return{autoPad:l,format:r,dilations:u,group:o,kernelShape:f,pads:d,strides:m,wIsConst:g,...n,cacheKey:`${e.format};${n.activation};`}},lh=(e,n,r,l)=>{let u=r.format==="NHWC",o=Nb(n[0].dims,n[1].dims,r.dilations,r.pads,r.strides,u);if(r.group!==1){let V=[n[0]];if(u){let q=e.kernelCustomData.wT??e.compute(Na(n[1],Yf),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=q),V.push(q)}else V.push(n[1]);n.length===3&&V.push(n[2]),!e.adapterInfo.isArchitecture("ampere")&&u&&n[1].dims[0]===r.group&&n[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(k$(V,r,o,l),{inputs:V}):e.compute(O$(V,r,o,l),{inputs:V});return}let f=n.length===3,d=n[0].dims[u?1:2],m=n[0].dims[u?2:3],g=n[0].dims[u?3:1],b=n[1].dims[2],v=n[1].dims[3],_=o[u?1:2],S=o[u?2:3],T=o[u?3:1],E=u&&b===d&&v===m&&r.pads[0]===0&&r.pads[1]===0;if(E||b===1&&v===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let V=o[0],q,C,J,ue=[];if(u){let ge=e.kernelCustomData.wT??e.compute(Na(n[1],Yf),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ge),E){let X=d*m*g;q=n[0].reshape([1,V,X]),C=ge.reshape([1,X,T]),J=[1,V,T]}else q=n[0].reshape([V,d*m,g]),C=ge.reshape([1,g,T]),J=[V,_*S,T];ue.push(q),ue.push(C)}else q=n[0].reshape([V,g,d*m]),C=n[1].reshape([1,T,g]),J=[V,T,_*S],ue.push(C),ue.push(q);f&&ue.push(n[2]);let pe=J[2],he=ue[0].dims[ue[0].dims.length-1];pe<8&&he<8?e.compute(Im(ue,r,o,J,u,l),{inputs:ue}):e.compute(pc(ue,r,o,J,u,l),{inputs:ue});return}let M=!0,A=e.kernelCustomData.wT??e.compute(Na(n[1],Yf),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A);let z=[n[0],A];f&&z.push(n[2]);let D=u?_*S:T,N=u?T:_*S,I=b*v*g;e.compute(z$(z,r,o,D,N,I,f,M,l),{inputs:z})},Ib=(e,n)=>{let r=n.format==="NHWC",l=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&l.push(e.inputs[2]);let u=[0,n.pads[0],0,n.pads[1]],o=[1].concat(n.strides),f=[1].concat(n.dilations),d=[1].concat(n.kernelShape),m=Ff({...n,pads:u,strides:o,dilations:f,kernelShape:d},l);lh(e,l,m,g=>r?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},Bb=(e,n,r)=>{let l=r.format==="NHWC"?"channelsLast":"channelsFirst",u=Ff(r,n),o=r.autoPad==="NOTSET"?r.pads:r.autoPad,f=A$(n[0].dims,n[1].dims,r.strides,r.dilations,o,!1,l);e.compute(C$(n,u,f.outShape,[f.filterDepth,f.filterHeight,f.filterWidth],[f.padInfo.front,f.padInfo.top,f.padInfo.left],l))},Qh=(e,n)=>{if(Db(e.inputs,n),e.inputs[0].dims.length===3)Ib(e,n);else if(e.inputs[0].dims.length===5)Bb(e,e.inputs,n);else{let r=Ff(n,e.inputs);lh(e,e.inputs,r)}}}),M$,yE=fe(()=>{ke(),pi(),Ne(),De(),M$=(e,n,r)=>{let l=e.length>2,u=n.outputShape,o=n.format==="NHWC",f=n.group,d=e[1].dims,m=d[2]/f,g=d[3],b=o?St(m):1,v=o&&g===1&&m>=4,_=v?Math.floor(m/4)*4:Math.floor(m/b)*b,S=m-_,T=o?St(g):1,E=o?g===1?b:T:1,M=P.size(u)/T,A=[Math.ceil(M/64),1,1];Xe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${A}`);let z=["rank","rank"],D=[n.strides[0],n.strides[1]],N=[n.kernelShape[o?1:2],n.kernelShape[o?2:3]],I=[n.dilations[0],n.dilations[1]],V=[N[0]+(n.dilations[0]<=1?0:(n.kernelShape[o?1:2]-1)*(n.dilations[0]-1)),N[1]+(n.dilations[1]<=1?0:(n.kernelShape[o?2:3]-1)*(n.dilations[1]-1))],q=[V[0]-1-Math.floor((n.pads[0]+n.pads[2])/2),V[1]-1-Math.floor((n.pads[1]+n.pads[3])/2)],C=[{type:12,data:M},{type:12,data:D},{type:12,data:N},{type:12,data:I},{type:12,data:V},{type:6,data:q},{type:12,data:_},{type:12,data:m},{type:12,data:g},...Te(e[0].dims,e[1].dims)];l&&(C.push(...Te(e[2].dims)),z.push("rank")),C.push(...Te(u));let J=ue=>{let pe=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:D.length},{name:"filter_dims",type:"u32",length:N.length},{name:"dilations",type:"u32",length:N.length},{name:"effective_filter_dims",type:"u32",length:V.length},{name:"pads",type:"i32",length:q.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],he=Ht(e[0].dataType),ge=o?1:2,X=o?2:3,ye=o?3:1,H=ne("W",e[1].dataType,e[1].dims.length,E),te=ne("Dy",e[0].dataType,e[0].dims.length,b),me=[te,H];l&&me.push(ne("bias",e[2].dataType,[u[ye]].length,T));let le=$e("result",e[0].dataType,u.length,T),we=()=>{let Z="";if(v)b===4?Z+=`
        let xValue = ${te.getByOffset("x_offset")};
        let wValue = ${H.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:b===2?Z+=`
          dotProd = dotProd + dot(vec4<${he}>(${te.getByOffset("x_offset")}, ${te.getByOffset("x_offset + 1u")}), vec4<${he}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:b===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${he}>(${te.getByOffset("x_offset")}, ${te.getByOffset("x_offset + 1u")}, ${te.getByOffset("x_offset + 2u")}, ${te.getByOffset("x_offset + 3u")}), vec4<${he}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}, ${H.getByOffset("w_offset + 2u")}, ${H.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${o?te.getByOffset(`${te.indicesToOffset(`${te.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${b}`):te.get("batch","inputChannel","idyR","idyC")};
        `,b===1)Z+=`
          let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${H.getByOffset(`w_offset / ${E}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<b;G++)Z+=`
            let wValue${G} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${E}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return Z},R=()=>{if(S===0)return"";if(!v)throw new Error(`packInputAs4 ${v} is not true.`);let Z="";if(b===1){Z+="dotProd = dotProd";for(let G=0;G<S;G++)Z+=`
            + ${te.getByOffset(`x_offset + ${G}`)} * ${H.getByOffset(`w_offset + ${G}`)}`;Z+=";"}else if(b===2){if(S!==2)throw new Error(`Invalid inputChannelsRemainder ${S}.`);Z+=`
          let xValue = ${te.getByOffset("x_offset")};
          let wValue = ${H.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},j=`
            let outputIndices = ${le.offsetToIndices(`global_idx * ${T}`)};
            let batch = ${le.indicesGet("outputIndices",0)};
            let d1 = ${le.indicesGet("outputIndices",ye)};
            let r = ${le.indicesGet("outputIndices",ge)};
            let c = ${le.indicesGet("outputIndices",X)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${le.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${he}(dyRCorner) + ${he}(wR)) / ${he}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${he}(uniforms.Dy_shape[${ge}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${he}(dyCCorner) + ${he}(wC)) / ${he}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${he}(uniforms.Dy_shape[${X}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${v?`
                var x_offset = ${te.indicesToOffset(`${te.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${b};
                var w_offset = ${H.indicesToOffset(`${H.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${E};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${v?4:b}) {
                  ${we()}
                  inputChannel = inputChannel + ${v?4:b};
                }
                ${R()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${l?` + bias[d1 / ${T}]`:""};
            ${le.setByOffset("global_idx","value")};
          `;return`
    ${ue.registerUniforms(pe).declareVariables(...me,le)}
      ${ue.mainStart()}
      ${ue.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${j}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${n.cacheKey};${b}${E}${T}${v}${S}`,inputDependencies:z},getRunData:()=>({dispatchGroup:{x:A[0],y:A[1],z:A[2]},outputs:[{dims:r?r(u):u,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:J}}}),Ub,qb,Lb,sh,R$,Hb,uh,jb,N$,vE=fe(()=>{yE(),Kr(),ir(),Ub=(e,n,r,l,u,o)=>(e-1)*n+r+(l-1)*u+1-o,qb=(e,n,r,l,u)=>{let o=Math.floor(e/2);n==="SAME_UPPER"?(r[l]=o,r[u]=e-o):n==="SAME_LOWER"&&(r[l]=e-o,r[u]=o)},Lb=(e,n,r,l,u,o,f,d,m,g)=>{let b=e.length-2,v=g.length===0;m.length<b&&m.push(...Array(b-m.length).fill(0));let _=e[0],S=n[d?3:1]*u;for(let T=0,E=e.length-b-(d?1:0);T<b;++T,++E){let M=e[E],A=v?M*f[T]:g[T],z=Ub(M,f[T],o[T],n[E],r[T],A);qb(z,l,o,T,T+b),v&&g.push(f[T]*(M-1)+m[T]+(n[E]-1)*r[T]+1-o[T]-o[T+b])}g.splice(0,0,_),g.splice(d?3:1,0,S)},sh=(e,n)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((v,_)=>v*_,1)===0){r.length=0;for(let v=2;v<n[1].dims.length;++v)r.push(n[1].dims[v])}let l=e.format==="NHWC";r.splice(0,0,n[1].dims[0]),r.splice(l?3:1,0,n[1].dims[1]);let u=e.pads.slice(),o=e.outputShape.slice(),f=e.outputPadding.slice(),d=n[0].dims,m=e.dilations.slice();if(m.reduce((v,_)=>v+_,0)===0){let v=n[0].dims.length-2;m=new Array(v).fill(1)}let g=e.strides.slice();if(g.reduce((v,_)=>v+_,0)===0){let v=n[0].dims.length-2;g=new Array(v).fill(1)}Lb(d,r,m,e.autoPad,e.group,u,g,l,f,o);let b=Object.assign({},e);return Object.assign(b,{kernelShape:r,pads:u,outputPadding:f,outputShape:o,dilations:m,strides:g}),b},R$=e=>{let n=Nm(e),r=e.format,l=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],u=e.dilations,o=e.group??1,f=e.kernelShape,d=e.pads,m=e.strides,g=e.wIsConst(),b=e.outputPadding,v=e.outputShape;return{autoPad:l,format:r,dilations:u,group:o,kernelShape:f,outputPadding:b,outputShape:v,pads:d,strides:m,wIsConst:g,...n,cacheKey:`${e.format};${n.activation};`}},Hb=(e,n)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[n.format==="NHWC"?e[0].dims.length-1:1],l=e[1].dims[0];if(r!==l)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let u=e[1].dims[1]*n.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==u))throw new Error("invalid bias");let o=e[0].dims.length-2;if(n.dilations.reduce((f,d)=>f+d,0)>0&&n.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(n.strides.reduce((f,d)=>f+d,0)>0&&n.strides.length!==o)throw new Error(`strides should be ${o}D`);if(n.pads.reduce((f,d)=>f+d,0)>0&&n.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(n.outputPadding.length!==o&&n.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(n.kernelShape.reduce((f,d)=>f+d,0)>0&&n.kernelShape.length!==0&&n.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(n.outputShape.length!==0&&n.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},uh=(e,n,r,l)=>{let u=e.kernelCustomData.wT??e.compute(Na(n[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=u);let o=[n[0],u];n.length===3&&o.push(n[2]),e.compute(M$(o,r,l),{inputs:o})},jb=(e,n)=>{let r=n.format==="NHWC",l=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&l.push(e.inputs[2]);let u=n.kernelShape;(u.length===0||u[0]===0)&&(u=[e.inputs[1].dims[2]]);let o=n.dilations;(o.length===0||o[0]===0)&&(o=[1]);let f=n.strides;(f.length===0||f[0]===0)&&(f=[1]);let d=n.pads;d.length===0&&(d=[0,0]),d=[0,d[0],0,d[1]],f=[1].concat(f),o=[1].concat(o),u=[1].concat(u);let m=n.outputPadding;m=[0].concat(m);let g=sh({...n,pads:d,strides:f,dilations:o,kernelShape:u,outputPadding:m},l);uh(e,l,g,b=>r?[b[0],b[2],b[3]]:[b[0],b[1],b[3]])},N$=(e,n)=>{if(Hb(e.inputs,n),e.inputs[0].dims.length===3)jb(e,n);else{let r=sh(n,e.inputs);uh(e,e.inputs,r)}}}),Gb,D$,I$,bE=fe(()=>{ke(),Ne(),Tt(),De(),Gb=(e,n,r,l)=>{let u=P.size(n),o=n.length,f=ne("input",e,o),d=$e("output",e,o),m=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),g=P.normalizeAxis(m,o),b=v=>{let _=` i32(${f.indicesGet("inputIndices","uniforms.axis")}) `,S=Se("uniforms.input_shape","uniforms.axis",o),T=l.reverse?_+(l.exclusive?" + 1":""):"0",E=l.reverse?S:_+(l.exclusive?"":" + 1");return`
                ${v.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(f,d)}
                ${v.mainStart()}
                  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${d.offsetToIndices("global_idx")};
                  var sum = ${d.type.value}(0);
                  let first : i32 = ${T};
                  let last : i32 = ${E};
                  for (var i : i32 = first; i < last; i++) {
                    ${f.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${f.getByIndices("inputIndices")};
                  }
                  ${d.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:l.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:12,data:g},...Te(n,n)]}),getShaderSource:b}},D$=(e,n)=>{let r=e.inputs[0].dims,l=e.inputs[0].dataType,u=e.inputs[1];e.compute(Gb(l,r,u,n),{inputs:[0]})},I$=e=>{let n=e.exclusive===1,r=e.reverse===1;return et({exclusive:n,reverse:r})}}),Vb,Wb,Yb,B$,U$,_E=fe(()=>{ke(),Ne(),Tt(),De(),Vb=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Wb=(e,n,r,l)=>{let u=[];u.push(`fn perm(i: ${l.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let o=0;o<n;++o)u.push(r.indicesSet("a",e[o],`i[${o}]`));return u.push("return a;}"),u.join(`
`)},Yb=(e,n)=>{let r,l,u,o,f,d,m=n.format==="NHWC",g=n.blocksize,b=n.mode==="DCR";m?([r,l,u,o]=e.dims,f=b?[r,l,u,g,g,o/g**2]:[r,l,u,o/g**2,g,g],d=b?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,l,u,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],f=b?[r,g,g,o/g**2,l,u]:[r,o/g**2,g,g,l,u],d=b?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let v=e.reshape(f),_=v.dims.length,S=e.dataType,T=ne("a",S,_),E=$e("output",S,_),M=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(T,E)}

  ${Wb(d,_,T,E)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${E.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${E.setByOffset("global_idx",T.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${n.blocksize};${n.mode}`,inputDependencies:["rank"]},getRunData:A=>{let z=m?[r,l*g,u*g,o/g**2]:[r,o/g**2,l*g,u*g],D=P.size(z),N=v.dims,I=P.sortBasedOnPerm(N,d);return{outputs:[{dims:z,dataType:A[0].dataType}],dispatchGroup:{x:Math.ceil(D/64)},programUniforms:[{type:12,data:D},...Te(N,I)]}},getShaderSource:M}},B$=(e,n)=>{Vb(e.inputs),e.compute(Yb(e.inputs[0],n))},U$=e=>et({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Kf,Bu,oh,Fb,Kb,Xb,Qb,fh,Zb,q$,L$,wE=fe(()=>{ke(),Ne(),Tt(),De(),Kf="[a-zA-Z]|\\.\\.\\.",Bu="("+Kf+")+",oh="^"+Bu+"$",Fb="("+Bu+",)*"+Bu,Kb="^"+Fb+"$",Xb=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,n){let r=this.symbolToIndices.get(e);r===void 0?r=[n]:r.push(n),this.symbolToIndices.set(e,r)}},Qb=class{constructor(e,n){var u;this.equation=n,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,l]=n.includes("->")?n.split("->",2):[n,""];if(!r.match(RegExp(Kb)))throw new Error("Invalid LHS term");if(r.split(",").forEach((o,f)=>{let d=e[f].dims.slice();if(!o.match(RegExp(oh)))throw new Error("Invalid LHS term");let m=this.processTerm(o,!0,d,f);this.lhs.push(m)}),l==="")l+=[...this.symbolToInfo.entries()].filter(([o,f])=>f.count===1||o==="...").map(([o])=>o).join("");else if(!l.match(RegExp(Bu)))throw new Error("Invalid RHS");(u=l.match(RegExp(Kf,"g")))==null||u.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let f=this.symbolToInfo.get(o);if(f===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(f.dimValue)}}),this.rhs=this.processTerm(l,!1,this.outputDims)}addSymbol(e,n,r){let l=this.symbolToInfo.get(e);if(l!==void 0){if(l.dimValue!==n&&l.count!==1)throw new Error("Dimension mismatch");l.count++,l.inputIndices.push(r)}else l={count:1,dimValue:n,inputIndices:[r]};this.symbolToInfo.set(e,l)}processTerm(e,n,r,l=-1){let u=r.length,o=!1,f=[],d=0;if(!e.match(RegExp(oh))&&!n&&e!=="")throw new Error("Invalid LHS term");let m=e.match(RegExp(Kf,"g")),g=new Xb(l);return m==null||m.forEach((b,v)=>{if(b==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let _=u-m.length+1;if(_<0)throw new Error("Ellipsis out of bounds");if(f=r.slice(d,d+_),this.hasEllipsis){if(this.ellipsisDims.length!==f.length||this.ellipsisDims.toString()!==f.toString())throw new Error("Ellipsis dimensions mismatch")}else if(n)this.hasEllipsis=!0,this.ellipsisDims=f;else throw new Error("Ellipsis must be specified in the LHS");for(let S=0;S<f.length;S++){let T=String.fromCharCode(48+S);g.addSymbol(T,v+S),this.addSymbol(T,r[d++],l)}}else g.addSymbol(b,v+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(b,r[d++],l)}),g}},fh=e=>e+"_max",Zb=(e,n,r,l)=>{let u=e.map(g=>g.length).map((g,b)=>ne(`input${b}`,n,g)),o=P.size(l),f=$e("output",n,l.length),d=[...r.symbolToInfo.keys()].filter(g=>!r.rhs.symbolToIndices.has(g)),m=g=>{let b=[],v="var prod = 1.0;",_="var sum = 0.0;",S="sum += prod;",T=[],E=[],M=[],A=[],z=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((N,I)=>{var V;if(r.rhs.symbolToIndices.has(I)){let q=(V=r.rhs.symbolToIndices.get(I))==null?void 0:V[0];q!==void 0&&r.lhs.forEach((C,J)=>{if(N.inputIndices.includes(J)){let ue=C.symbolToIndices.get(I);if(ue===void 0)throw new Error("Invalid symbol error");ue.forEach(pe=>{b.push(`${u[J].indicesSet(`input${J}Indices`,pe,f.indicesGet("outputIndices",q))}`)})}})}else r.lhs.forEach((q,C)=>{if(N.inputIndices.includes(C)){let J=q.symbolToIndices.get(I);if(J===void 0)throw new Error("Invalid symbol error");J.forEach(ue=>{T.push(`${u[C].indicesSet(`input${C}Indices`,ue,`${I}`)}`)}),A.push(`prod *= ${u[C].getByIndices(`input${C}Indices`)};`)}}),E.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${fh(I)}; ${I}++) {`),M.push("}")});let D=z?[...b,`let sum = ${u.map((N,I)=>N.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...b,_,...E,...T,v,...A,S,...M];return`
            ${g.registerUniforms(d.map(N=>({name:`${fh(N)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...u,f)}

            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${f.offsetToIndices("global_idx")};
            ${u.map((N,I)=>`var input${I}Indices: ${u[I].type.indices};`).join(`
`)}
            ${D.join(`
`)};
            ${f.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let g=d.filter(v=>r.symbolToInfo.has(v)).map(v=>{var _;return{type:12,data:((_=r.symbolToInfo.get(v))==null?void 0:_.dimValue)||0}});g.push({type:12,data:o});let b=e.map((v,_)=>[...Te(v)]).reduce((v,_)=>v.concat(_),g);return b.push(...Te(l)),{outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:b}},getShaderSource:m}},q$=(e,n)=>{let r=new Qb(e.inputs,n.equation),l=r.outputDims,u=e.inputs.map((o,f)=>o.dims);e.compute(Zb(u,e.inputs[0].dataType,r,l))},L$=e=>{let n=e.equation.replace(/\s+/g,"");return et({equation:n})}}),Pb,ch,Jb,e1,H$,$E=fe(()=>{ke(),Ne(),De(),Pb=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let n=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),l=r.length<n.length?0:r.length-n.length,u=n.length<r.length?0:n.length-r.length;for(;l<r.length&&u<n.length;++l,++u)if(r[l]!==n[u]&&r[l]!==1&&n[u]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ch=(e,n)=>{let r=e.length-n.length,l=[];for(let u=0;u<r;++u)l.push(e[u]);for(let u=0;u<n.length;++u)l.push(n[u]===1?e[u+r]:n[u]);return l},Jb=(e,n)=>e.length>n.length?ch(e,n):ch(n,e),e1=e=>{let n=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),l=Jb(n,r),u=e[0].dataType,o=u===9||P.size(n)===1,f=u===9||n.length>0&&n[n.length-1]%4===0?4:1,d=o||l.length>0&&l[l.length-1]%4===0?4:1,m=Math.ceil(P.size(l)/d),g=v=>{let _=ne("input",u,n.length,f),S=$e("output",u,l.length,d),T;if(u===9){let E=(M,A,z="")=>`
          let outputIndices${A} = ${S.offsetToIndices(`outputOffset + ${A}u`)};
          let offset${A} = ${_.broadcastedIndicesToOffset(`outputIndices${A}`,S)};
          let index${A} = offset${A} / 4u;
          let component${A} = offset${A} % 4u;
          ${M}[${A}] = ${z}(${_.getByOffset(`index${A}`)}[component${A}]);
        `;T=`
        let outputOffset = global_idx * ${d};
        var data = vec4<u32>(0);
        ${E("data",0,"u32")}
        ${E("data",1,"u32")}
        ${E("data",2,"u32")}
        ${E("data",3,"u32")}
        ${S.setByOffset("global_idx","data")}
      }`}else T=`
        let outputIndices = ${S.offsetToIndices(`global_idx * ${d}`)};
        let inputOffset = ${_.broadcastedIndicesToOffset("outputIndices",S)};
        let data = ${S.type.value}(${_.getByOffset(`inputOffset / ${f}`)});
        ${S.setByOffset("global_idx","data")}
      }`;return`
    ${v.registerUniform("vec_size","u32").declareVariables(_,S)}
    ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${T}`},b=[{type:12,data:m},...Te(n,l)];return{name:"Expand",shaderCache:{hint:`${l.length};${f}${d}`,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:b})}},H$=e=>{Pb(e.inputs),e.compute(e1(e.inputs),{inputs:[0]})}}),t1,j$,xE=fe(()=>{ke(),Ne(),De(),Rm(),t1=e=>{let n=e[0].dataType,r=P.size(e[0].dims),l=P.size(e[1].dims),u=l%4===0,o=f=>{let d=ne("x",n,[1],4),m=ne("bias",n,[1],4),g=$e("y",n,[1],4),b=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],v=S=>`
      let bias${S}_offset: u32 = (global_idx * 4 + ${S}) % uniforms.bias_size;
      let bias${S} = ${m.getByOffset(`bias${S}_offset / 4`)}[bias${S}_offset % 4];`,_=u?`
      let bias = ${m.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${v(0)}${v(1)}${v(2)}${v(3)}
      let bias = ${d.type.value}(bias0, bias1, bias2, bias3);`;return`${f.registerUniforms(b).declareVariables(d,m,g)}

    ${Wh(sa(n))}

    ${f.mainStart(us)}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${d.getByOffset("global_idx")};
      ${_}
      let x_in = x + bias;
      ${g.setByOffset("global_idx",Yh("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${u}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:f=>({outputs:[{dims:f[0].dims,dataType:f[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:l}],dispatchGroup:{x:Math.ceil(r/us/4)}})}},j$=e=>{e.inputs.length<2||P.size(e.inputs[1].dims)===0?u$(e):e.compute(t1(e.inputs))}}),a1,n1,G$,V$,SE=fe(()=>{ke(),Ne(),Tt(),De(),a1=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},n1=(e,n)=>{let r=e[0].dims,l=e[1].dims,u=r.length,o=P.normalizeAxis(n.axis,u),f=r.slice(0);f.splice(o,1,...l);let d=r[o],m=e[0].dataType===9?4:1,g=Math.ceil(P.size(f)/m),b=[{type:12,data:g},{type:6,data:d},{type:12,data:o},...Te(e[0].dims,e[1].dims,f)],v=_=>{let S=ne("data",e[0].dataType,e[0].dims.length,m),T=ne("inputIndices",e[1].dataType,e[1].dims.length),E=$e("output",e[0].dataType,f.length,m),M=z=>{let D=l.length,N=`var indicesIndices${z}  = ${T.type.indices}(0);`;for(let I=0;I<D;I++)N+=`${D>1?`indicesIndices${z}[${I}]`:`indicesIndices${z}`} = ${f.length>1?`outputIndices${z}[uniforms.axis + ${I}]`:`outputIndices${z}`};`;N+=`
          var idx${z} = ${T.getByIndices(`indicesIndices${z}`)};
          if (idx${z} < 0) {
            idx${z} = idx${z} + uniforms.axisDimLimit;
          }
          var dataIndices${z} : ${S.type.indices};
        `;for(let I=0,V=0;I<u;I++)I===o?(N+=`${u>1?`dataIndices${z}[${I}]`:`dataIndices${z}`} = u32(idx${z});`,V+=D):(N+=`${u>1?`dataIndices${z}[${I}]`:`dataIndices${z}`} = ${f.length>1?`outputIndices${z}[${V}]`:`outputIndices${z}`};`,V++);return N},A;if(e[0].dataType===9){let z=(D,N,I="")=>`
          let outputIndices${N} = ${E.offsetToIndices(`outputOffset + ${N}u`)};
          ${M(N)};
          let offset${N} = ${S.indicesToOffset(`dataIndices${N}`)};
          let index${N} = offset${N} / 4u;
          let component${N} = offset${N} % 4u;
          ${D}[${N}] = ${I}(${S.getByOffset(`index${N}`)}[component${N}]);
        `;A=`
        let outputOffset = global_idx * ${m};
        var value = vec4<u32>(0);
        ${z("value",0,"u32")}
        ${z("value",1,"u32")}
        ${z("value",2,"u32")}
        ${z("value",3,"u32")}
        ${E.setByOffset("global_idx","value")}
      `}else A=`
      let outputIndices = ${E.offsetToIndices("global_idx")};
      ${M("")};
      let value = ${S.getByIndices("dataIndices")};
      ${E.setByOffset("global_idx","value")};
      `;return`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(S,T,E)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${A}
      }`};return{name:"Gather",shaderCache:{hint:n.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:v}},G$=e=>et({axis:e.axis}),V$=(e,n)=>{let r=e.inputs;a1(r),e.compute(n1(e.inputs,n))}}),i1,W$,Y$,TE=fe(()=>{ke(),Ne(),De(),i1=(e,n,r,l,u,o,f,d,m)=>{let g=[{type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:r},{type:12,data:f},{type:12,data:d},{type:12,data:m}],b=[o];g.push(...Te(n.dims,b));let v=_=>{let S=ne("indices_data",n.dataType,n.dims.length),T=$e("input_slice_offsets_data",12,1,1),E=[S,T],M=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:u.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${_.registerUniforms(M).declareVariables(...E)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${u.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${u.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:b,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:g}),getShaderSource:v},{inputs:[n],outputs:[-1]})[0]},W$=(e,n)=>{let r=e.inputs,l=r[0].dims,u=r[0].dataType,o=r[1].dims,f=o[o.length-1],d=P.sizeToDimension(o,o.length-1),m=P.sizeFromDimension(l,n.batchDims+f),g=P.sizeToDimension(l,n.batchDims),b=P.sizeFromDimension(l,n.batchDims),v=d/g,_=new Array(f),S=m;for(let N=0;N<f;++N)_[f-1-N]=S,S*=l[n.batchDims+f-1-N];let T=i1(e,r[1],_,n.batchDims,l,d,v,b,f),E=n.batchDims+f;if(E>l.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let M=o.slice(0,-1).concat(l.slice(E)),A=P.size(M),z=[{type:12,data:A},{type:12,data:m},...Te(r[0].dims,T.dims,M)],D=N=>{let I=ne("data",r[0].dataType,r[0].dims.length),V=ne("slice_offsets",12,T.dims.length),q=$e("output",r[0].dataType,M.length);return`
          ${N.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,V,q)}
            ${N.mainStart()}
            ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:n.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:M,dataType:u}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:z}),getShaderSource:D},{inputs:[r[0],T]})},Y$=e=>({batchDims:e.batch_dims,cacheKey:""})}),r1,l1,F$,K$,EE=fe(()=>{ke(),Ne(),Tt(),De(),r1=(e,n)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=P.normalizeAxis(n.quantizeAxis,e[0].dims.length),l=n.blockSize,u=e[0],o=e[2],f=e.length===4?e[3]:void 0;if(o.dims.length!==u.dims.length||!u.dims.map((d,m)=>m===r?Math.ceil(d/l)===o.dims[m]:d===o.dims[m]).reduce((d,m)=>d&&m,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(f){if(f.dataType!==u.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(f.dims.length!==o.dims.length||!f.dims.map((d,m)=>d===o.dims[m]).reduce((d,m)=>d&&m,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},l1=(e,n)=>{let r=e[0].dims,l=e[1].dims,u=r.length,o=P.normalizeAxis(n.gatherAxis,u),f=P.normalizeAxis(n.quantizeAxis,u),d=r.slice(0);d.splice(o,1,...l);let m=P.size(d),g=e[2].dataType,b=e[0].dataType===22,v=[{type:12,data:m},{type:12,data:f},{type:12,data:o},{type:12,data:n.blockSize},...Te(...e.map((S,T)=>S.dims),d)],_=S=>{let T=ne("data",e[0].dataType,e[0].dims.length),E=ne("inputIndices",e[1].dataType,e[1].dims.length),M=ne("scales",e[2].dataType,e[2].dims.length),A=e.length>3?ne("zeroPoint",e[3].dataType,e[3].dims.length):void 0,z=$e("output",g,d.length),D=[T,E,M];A&&D.push(A);let N=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${S.registerUniforms(N).declareVariables(...D,z)}
        ${S.mainStart()}
        let output_indices = ${z.offsetToIndices("global_idx")};
        var indices_indices = ${E.type.indices}(0);
        ${l.length>1?`
          for (var i: u32 = 0; i < ${l.length}; i++) {
            let index = ${z.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${E.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${z.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${T.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${z.indicesGet("output_indices","i")};
          ${T.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${E.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[o]};
        }
        ${T.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${d.length}; i++) {
          let index = ${z.indicesGet("output_indices",`i + ${l.length} - 1`)};
          ${T.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${T.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${T.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${b?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${M.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${M.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${M.getByIndices("scale_indices")};
        ${A?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${A.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${A.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${b?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${sa(g)}(quantized_data - zero_point) * scale;
        ${z.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${n.cacheKey};${e.filter((S,T)=>T!==1).map(S=>S.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(S,T)=>"rank")},getRunData:()=>({outputs:[{dims:d,dataType:g}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:_}},F$=(e,n)=>{let r=e.inputs;r1(r,n),e.compute(l1(e.inputs,n))},K$=e=>et({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),s1,u1,X$,Q$,zE=fe(()=>{ke(),Ne(),Tt(),De(),s1=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},u1=(e,n)=>{let r=e[0].dims,l=e[0].dataType,u=r.length,o=e[1].dims,f=e[1].dataType,d=P.normalizeAxis(n.axis,u),m=r[d],g=o.slice(0),b=P.size(g),v=ne("input",l,u),_=ne("indicesInput",f,o.length),S=$e("output",l,g.length),T=[{type:12,data:b},{type:6,data:m},{type:12,data:d}];return T.push(...Te(r,o,g)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:T}),getShaderSource:E=>`
      ${E.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(v,_,S)}
      ${E.mainStart()}
      ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${S.offsetToIndices("global_idx")};

      var idx = ${_.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${v.type.indices}(outputIndices);
      ${v.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${v.getByIndices("inputIndices")};

      ${S.setByOffset("global_idx","value")};
  }`}},X$=e=>et({axis:e.axis}),Q$=(e,n)=>{let r=e.inputs;s1(r),e.compute(u1(e.inputs,n))}}),o1,f1,Z$,P$,AE=fe(()=>{ke(),Ne(),De(),o1=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},f1=(e,n)=>{let r=e[0].dims.slice(),l=e[1].dims.slice(),[u,o,f]=X2.getShapeOfGemmResult(r,n.transA,l,n.transB,e.length===3?e[2].dims:void 0),d=[u,o];if(!d)throw new Error("Can't use gemm on the given tensors");let m=16,g=Math.ceil(o/m),b=Math.ceil(u/m),v=!0,_=P.size(d),S=[{type:12,data:v?g:_},{type:12,data:u},{type:12,data:o},{type:12,data:f},{type:1,data:n.alpha},{type:1,data:n.beta}],T=["type","type"];e.length===3&&(S.push(...Te(e[2].dims)),T.push("rank")),S.push(...Te(d));let E=A=>{let z="";n.transA&&n.transB?z="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":n.transA&&!n.transB?z="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!n.transA&&n.transB?z="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!n.transA&&!n.transB&&(z="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let D=n.alpha===1?"":"value *= uniforms.alpha;",N=ne("a",e[0].dataType,e[0].dims),I=ne("b",e[1].dataType,e[1].dims),V=N.type.value,q=null,C=[N,I];e.length===3&&(q=ne("c",e[2].dataType,e[2].dims.length),C.push(q));let J=$e("output",e[0].dataType,d.length);C.push(J);let ue=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${A.registerUniforms(ue).declareVariables(...C)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${V}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${z}
    }

    ${D}
    ${q!=null?`let cOffset = ${q.broadcastedIndicesToOffset("vec2(m, n)",J)}; value += ${V}(uniforms.beta) * ${q.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},M=A=>{let z=ne("a",e[0].dataType,e[0].dims),D=ne("b",e[1].dataType,e[1].dims),N=null,I=[z,D];e.length===3&&(N=ne("c",e[2].dataType,e[2].dims.length),I.push(N));let V=$e("output",e[0].dataType,d.length);I.push(V);let q=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],C="",J="";n.transA&&n.transB?(J=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${z.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${D.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):n.transA&&!n.transB?(J=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${z.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${D.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!n.transA&&n.transB?(J=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${z.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${D.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!n.transA&&!n.transB&&(J=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${z.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${D.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let ue=n.alpha===1?"":"value *= uniforms.alpha;";return`
  ${A.registerUniforms(q).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${z.type.storage}, ${m}>, ${m}>;
  var<workgroup> tile_b: array<array<${D.type.storage}, ${m}>, ${m}>;
  ${A.mainStart([m,m,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${m};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${m};
    let num_tiles = (uniforms.K - 1) / ${m} + 1;
    var k_start = 0u;
    var value = ${V.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${J}
      k_start = k_start + ${m};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${m}; k++) {
        ${C}
      }
      workgroupBarrier();
    }

    ${ue}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${N!=null?`let cOffset = ${N.broadcastedIndicesToOffset("vec2(m, n)",V)}; value += ${V.type.value}(uniforms.beta) * ${N.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return v?{name:"GemmShared",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:g*b},programUniforms:S}),getShaderSource:M}:{name:"Gemm",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:S}),getShaderSource:E}},Z$=e=>{let n=e.transA,r=e.transB,l=e.alpha,u=e.beta;return{transA:n,transB:r,alpha:l,beta:u,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},P$=(e,n)=>{o1(e.inputs),e.compute(f1(e.inputs,n))}}),Mn,si,Mr,Rr,c1,d1,p1,h1,m1,g1,y1,v1,J$,ex,CE=fe(()=>{ke(),Ne(),Tt(),De(),[Mn,si,Mr,Rr]=[0,1,2,3],c1=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},d1=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,p1=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,h1=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,m1=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,g1=(e,n,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${n} {
     var pixel = ${n}(0);
     var indices = vec4<u32>(0);
     indices[${Mn}] = batch;
     indices[${si}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Mr}] = u32(r);
            indices[${Rr}] = u32(c);
          } else {
            return ${n}(0);
          }
        `;case"border":return`
          indices[${Mr}] = u32(clamp(r, 0, H - 1));
          indices[${Rr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Mr}] = gs_reflect(r, border[1], border[3]);
          indices[${Rr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,y1=(e,n,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Mn}], indices[${si}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Mn}], indices[${si}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Mn}], indices[${si}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Mn}], indices[${si}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Mn}], indices[${si}], border);

          let dx2 = ${n}(f32(x2) - x);
          let dx1 = ${n}(x - f32(x1));
          let dy2 = ${n}(f32(y2) - y);
          let dy1 = ${n}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${n}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Mn}], indices[${si}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,v1=(e,n)=>{let r=ne("x",e[0].dataType,e[0].dims.length),l=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],u=ne("grid",e[1].dataType,l.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];n.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Mn,si,Mr,Rr]=[0,3,1,2]);let f=$e("output",e[0].dataType,o.length),d=r.type.value,m=P.size(o),g=[{type:12,data:m},...Te(e[0].dims,l,o)],b=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(r,u,f)}
  ${d1}
  ${p1(d)}
  ${h1(n)}
  ${m1(n)}
  ${g1(r,d,n)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Mr}]);
      let W_in = i32(uniforms.x_shape[${Rr}]);

      ${n.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${f.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Mn}], indices[${Mr}], indices[${Rr}]);
      let nxy = ${u.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${y1(f,d,n)}
  }`;return{name:"GridSample",shaderCache:{hint:`${n.cacheKey}`,inputDependencies:["type","type"]},getRunData:v=>{let _=P.size(o);return{outputs:[{dims:o,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:g}},getShaderSource:b}},J$=(e,n)=>{c1(e.inputs),e.compute(v1(e.inputs,n))},ex=e=>et({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),da,b1,tx,dh,_1,Wu,ax,nx=fe(()=>{ke(),Ne(),Tt(),Cm(),Mm(),De(),ir(),da=(e,n)=>e.length>n&&e[n].dims.length>0?e[n]:void 0,b1=(e,n)=>{let r=e[0],l=da(e,1),u=da(e,2),o=da(e,3),f=da(e,4),d=da(e,5),m=da(e,6),g=da(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let b=r.dims[0],v=r.dims[1],_=r.dims.length===3?r.dims[2]:n.numHeads*r.dims[4],S=v,T=0,E=0,M=Math.floor(_/n.numHeads);if(m&&g&&P.size(m.dims)&&P.size(g.dims)){if(m.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(m.dims[0]!==b||m.dims[1]!==n.numHeads||m.dims[3]!==M)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(g.dims[0]!==b||g.dims[1]!==n.numHeads||g.dims[3]!==M)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[2]!==g.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(g.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');T=m.dims[2],E=m.dims[2]}else if(m&&P.size(m.dims)||g&&P.size(g.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A;if(l&&P.size(l.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(l.dims.length<3||l.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==l.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(l.dims.length===3){if(l.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');A=2,S=l.dims[1]}else if(l.dims.length===5){if(l.dims[2]!==n.numHeads||l.dims[3]!==2||l.dims[4]!==M)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(u)throw new Error('Expect "value" be none when "key" has packed kv format.');A=5,S=l.dims[1]}else{if(l.dims[1]!==n.numHeads||l.dims[3]!==M)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');A=0,S=l.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==n.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}if(o&&P.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(l&&l.dims.length===5&&l.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let z=T+S,D=0;if(f&&P.size(f.dims)>0){D=8;let q=f.dims;throw q.length===1?q[0]===b?D=1:q[0]===3*b+2&&(D=3):q.length===2&&q[0]===b&&q[1]===z&&(D=5),D===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let N=!1,I=_;if(u&&P.size(u.dims)>0){if(u.dims.length!==3&&u.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==u.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(u.dims.length===3){if(S!==u.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=u.dims[2]}else{if(S!==u.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=u.dims[1]*u.dims[3],N=!0}}let V=!1;if(f&&P.size(f.dims)>0)throw new Error("Key padding mask is not supported");if(d&&P.size(d.dims)>0){if(d.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(d.dims[0]!==b||d.dims[1]!==n.numHeads||d.dims[2]!==v||d.dims[3]!==z)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:b,sequenceLength:v,pastSequenceLength:T,kvSequenceLength:S,totalSequenceLength:z,maxSequenceLength:E,inputHiddenSize:0,hiddenSize:_,vHiddenSize:I,headSize:M,vHeadSize:Math.floor(I/n.numHeads),numHeads:n.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:n.maskFilterValue,maskType:D,scale:n.scale,broadcastResPosBias:V,passPastInKv:N,qkvFormat:A}},tx=e=>et({...e}),dh=et({perm:[0,2,1,3]}),_1=(e,n,r,l,u,o,f)=>{let d=[l,u,o],m=P.size(d),g=[{type:12,data:m},{type:12,data:f},{type:12,data:o}],b=v=>{let _=$e("qkv_with_bias",n.dataType,d),S=ne("qkv",n.dataType,d),T=ne("bias",r.dataType,d),E=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${v.registerUniforms(E).declareVariables(S,T,_)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:d,dataType:n.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:b},{inputs:[n,r],outputs:[-1]})[0]},Wu=(e,n,r,l,u,o,f,d)=>{let m=o;if(f&&P.size(f.dims)>0){if(l===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return m=_1(e,o,f,n,l,r*u,d),m=m.reshape([n,l,r,u]),r===1||l===1?m:e.compute(Na(m,dh.perm),{inputs:[m],outputs:[-1]})[0]}else return o.dims.length===3&&(m=o.reshape([n,l,r,u])),r===1||l===1?m:e.compute(Na(m,dh.perm),{inputs:[m],outputs:[-1]})[0]},ax=(e,n)=>{let r=b1(e.inputs,n),l=e.inputs[0],u=da(e.inputs,1),o=da(e.inputs,2),f=da(e.inputs,3),d=da(e.inputs,4),m=da(e.inputs,5),g=da(e.inputs,6),b=da(e.inputs,7);if(l.dims.length===5)throw new Error("Packed QKV is not implemented");if((u==null?void 0:u.dims.length)===5)throw new Error("Packed KV is not implemented");let v=u&&o&&u.dims.length===4&&o.dims.length===4,_=Wu(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,l,f,0);if(v)return Pu(e,_,u,o,d,void 0,g,b,m,r);if(!u||!o)throw new Error("key and value must be provided");let S=Wu(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,u,f,r.hiddenSize),T=Wu(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,o,f,2*r.hiddenSize);Pu(e,_,S,T,d,void 0,g,b,m,r)}}),w1,$1,x1,S1,Zh,ix,rx,lx=fe(()=>{ke(),Ne(),Tt(),De(),w1=e=>{if(!e||e.length<1)throw new Error("too few inputs")},$1=(e,n)=>{let r=[],l=n.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(u=>r.push(Number(u))),l=r.length),et({numOutputs:l,axis:n.axis,splitSizes:r})},x1=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Se("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,S1=e=>{let n=e.length,r=[];for(let l=0;l<n;++l){let u=e[l].setByIndices("indices","input[global_idx]");n===1?r.push(u):l===0?r.push(`if (output_number == ${l}u) { ${u} }`):l===n-1?r.push(`else { ${u} }`):r.push(`else if (output_number == ${l}) { ${u} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Zh=(e,n)=>{let r=e[0].dims,l=P.size(r),u=e[0].dataType,o=P.normalizeAxis(n.axis,r.length),f=new Array(n.numOutputs),d=ne("input",u,r.length),m=new Array(n.numOutputs),g=[],b=[],v=0,_=[{type:12,data:l}];for(let T=0;T<n.numOutputs;T++){v+=n.splitSizes[T],m[T]=v;let E=r.slice();E[o]=n.splitSizes[T],b.push(E),f[T]=$e(`output${T}`,u,E.length),g.push({dims:b[T],dataType:e[0].dataType})}_.push({type:12,data:m},...Te(r,...b));let S=T=>`
  ${T.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",m.length).declareVariables(d,...f)}
  ${x1(m.length)}
  ${S1(f)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${d.offsetToIndices("global_idx")};
    var index = ${d.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Se("uniforms.size_in_split_axis","output_number - 1u",m.length)};
      ${d.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:g,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:_})}},ix=(e,n)=>{w1(e.inputs);let r=e.inputs.length===1?n:$1(e.inputs,n);e.compute(Zh(e.inputs,r),{inputs:[0]})},rx=e=>{let n=e.axis,r=e.splitSizes,l=e.numOutputs<0?r.length:e.numOutputs;if(l!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return et({axis:n,numOutputs:l,splitSizes:r})}}),T1,hc,sx,ux=fe(()=>{ke(),Ne(),Tt(),De(),T1=(e,n)=>{let[r,l,u,o]=e,{numHeads:f,rotaryEmbeddingDim:d}=n;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!P.areEqual(l.dims,[])&&!P.areEqual(l.dims,[1])&&l.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${l.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!P.areEqual(u.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(d>0&&f===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let m=r.dims[0],g=r.dims[r.dims.length-2],b=u.dims[0],v=P.sizeFromDimension(r.dims,1)/g,_=d===0?u.dims[1]*2:v/f;if(d>_)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(l.dims.length===2){if(m!==l.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${l.dims[0]}`);if(g!==l.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${l.dims[1]}`)}if(g>b)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(_/2!==u.dims[1]&&d/2!==u.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${u.dims[1]}`)},hc=(e,n)=>{let{interleaved:r,numHeads:l,rotaryEmbeddingDim:u,scale:o}=n,f=e[0].dims[0],d=P.sizeFromDimension(e[0].dims,1),m=e[0].dims[e[0].dims.length-2],g=d/m,b=e[2].dims[1],v=u===0?b*2:g/l,_=new Array(f,m,g/v,v-b),S=P.computeStrides(_),T=[{type:1,data:o},{type:12,data:_},{type:12,data:S},...e[0].dims.length===3?new Array({type:12,data:[d,g,v,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[d,v,m*v,1]}):[],...Te(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],E=M=>{let A=ne("input",e[0].dataType,e[0].dims.length),z=ne("position_ids",e[1].dataType,e[1].dims.length),D=ne("cos_cache",e[2].dataType,e[2].dims.length),N=ne("sin_cache",e[3].dataType,e[3].dims.length),I=$e("output",e[0].dataType,e[0].dims.length);return M.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:_.length},{name:"global_strides",type:"u32",length:S.length},{name:"input_output_strides",type:"u32",length:S.length}]),`
        ${M.declareVariables(A,z,D,N,I)}

        ${M.mainStart(us)}
          let half_rotary_emb_dim = uniforms.${D.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${M.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${z.broadcastedIndicesToOffset("bsnh.xy",$e("",z.type.tensor,2))};
            let position_id =
                u32(${z.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${A.getByOffset("i")} * ${D.get("position_id","bsnh[3]")} -
                ${A.getByOffset("j")} * ${N.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${A.getByOffset("i")} * ${N.get("position_id","bsnh[3]")} +
                ${A.getByOffset("j")} * ${D.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",A.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:et({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:E,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(P.size(_)/us)},programUniforms:T})}},sx=(e,n)=>{T1(e.inputs,n),e.compute(hc(e.inputs,n))}}),E1,z1,ph,A1,ox,OE=fe(()=>{Tt(),ke(),Mm(),nx(),lx(),ir(),ux(),De(),E1=(e,n)=>{if(n.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],l=e[1],u=e[2],o=e[3],f=e[4];if(n.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(n.localWindowSize!==-1)throw new Error("Local attention is not supported");if(n.softcap!==0)throw new Error("Softcap is not supported");if(n.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(n.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=!1,m=r.dims[0],g=r.dims[1],b=r.dims.length===3?d?r.dims[2]/3:r.dims[2]:n.numHeads*r.dims[4],v=g,_=0,S=!l||l.dims.length===0,T=Math.floor(S?b/(n.numHeads+2*n.kvNumHeads):b/n.numHeads);S&&(b=T*n.numHeads);let E=o&&o.dims.length!==0,M=f&&f.dims.length!==0;if(E&&o.dims.length===4&&o.dims[0]===m&&o.dims[1]!==n.kvNumHeads&&o.dims[2]===n.kvNumHeads&&o.dims[3]===T)throw new Error("BSNH pastKey/pastValue is not supported");if(E&&M){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(f.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=o.dims[2]}else if(E||M)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A=1;if(l&&l.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(l.dims.length<3||l.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==l.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(l.dims.length===3){if(r.dims[2]%l.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');v=l.dims[1]}else if(l.dims.length===5){if(l.dims[2]!==n.numHeads||l.dims[3]!==2||l.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(u)throw new Error('Expect "value" be none when "key" has packed kv format.');v=l.dims[1]}else{if(l.dims[1]!==n.numHeads||l.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=l.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==n.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}let z=0,D=!1,N=n.kvNumHeads?T*n.kvNumHeads:b;if(u&&u.dims.length>0){if(u.dims.length!==3&&u.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==u.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(u.dims.length===3){if(v!==u.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');N=u.dims[2]}else{if(v!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');N=u.dims[1]*u.dims[3],D=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let V=I.dims.reduce((q,C)=>q*C,1);if(V!==m)throw new Error(`seqlens_k must have batch_size (${m}) elements, got ${V}.`);for(let q=0;q<I.dims.length;q++)if(I.dims[q]!==1&&I.dims[q]!==m)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${m}), got dims[${q}] = ${I.dims[q]}.`)}return{batchSize:m,sequenceLength:g,pastSequenceLength:_,kvSequenceLength:v,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:b,vHiddenSize:N,headSize:T,vHeadSize:Math.floor(N/n.kvNumHeads),numHeads:n.numHeads,kvNumHeads:n.kvNumHeads,nReps:n.numHeads/n.kvNumHeads,pastPresentShareBuffer:!1,maskType:z,scale:n.scale,broadcastResPosBias:!1,passPastInKv:D,qkvFormat:A}},z1=et({perm:[0,2,1,3]}),ph=(e,n,r)=>{let l=n,u=r.kvNumHeads;return n.dims.length===3&&r.kvSequenceLength!==0&&(l=n.reshape([r.batchSize,r.kvSequenceLength,u,r.headSize]),l=e.compute(Na(l,z1.perm),{inputs:[l],outputs:[-1]})[0]),l},A1=(e,n,r,l)=>{let u=7,o=["type","type"],f=[e*n],d=e*n,m=[{type:12,data:d},{type:12,data:n},{type:12,data:e}],g=b=>{let v=ne("seq_lens",r.dataType,r.dims),_=ne("total_seq_lens",l.dataType,l.dims),S=$e("pos_ids",u,f),T=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${b.registerUniforms(T).declareVariables(v,_,S)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${_.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${v.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${S.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${S.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${S.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${n}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:f,dataType:u}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:g}},ox=(e,n)=>{var N;let r=E1(e.inputs,n);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((N=e.inputs[1])==null?void 0:N.dims.length)===5)throw new Error("Packed KV is not implemented");let l=e.inputs[0],u=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,f=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,d=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,m=e.inputs.length>4?e.inputs[5]:void 0,g=e.inputs.length>5?e.inputs[6]:void 0,b=r.kvNumHeads?r.kvNumHeads:r.numHeads,v=et({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,b*r.headSize,b*r.headSize]}),[_,S,T]=!u&&!o?e.compute(Zh([l],v),{inputs:[l],outputs:[-1,-1,-1]}):[l,u,o],E,M;if(n.doRotary){let I=e.compute(A1(r.batchSize,r.sequenceLength,m,g),{inputs:[m,g],outputs:[-1]})[0],V=e.inputs[7],q=e.inputs[8],C=et({interleaved:n.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:n.scale}),J=[_,I,V,q],ue=[-1];E=e.compute(hc(J,C),{inputs:J,outputs:ue})[0],J.splice(0,1,S);let pe=et({interleaved:n.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:n.scale});M=e.compute(hc(J,pe),{inputs:J,outputs:ue})[0]}let A=Wu(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n.doRotary?E:_,void 0,0),z=ph(e,n.doRotary?M:S,r),D=ph(e,T,r);Pu(e,A,z,D,void 0,void 0,f,d,void 0,r,m,g)}}),hh,C1,O1,fx,kE=fe(()=>{ke(),Ne(),ir(),De(),hh=(e,n,r,l,u,o,f,d)=>{let m=St(o),g=m===1?"f32":`vec${m}f`,b=m===1?"vec2f":`mat2x${m}f`,v=u*f,_=64;v===1&&(_=256);let S=[u,f,o/m],T=[u,f,2],E=["rank","type","type"],M=[];M.push(...Te(S,T));let A=z=>{let D=ne("x",n.dataType,3,m),N=ne("scale",r.dataType,r.dims),I=ne("bias",l.dataType,l.dims),V=$e("output",1,3,2),q=[D,N,I,V];return`
  var<workgroup> workgroup_shared : array<${b}, ${_}>;
  const workgroup_size = ${_}u;
  ${z.declareVariables(...q)}
  ${z.mainStart(_)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${g}(0);
    var squared_sum = ${g}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${g}(${D.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${b}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${er("workgroup_shared[0][0]",m)} / f32(hight * ${m});
      let squared_sum_final = ${er("workgroup_shared[0][1]",m)} / f32(hight * ${m});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${d}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${m};${d};${_}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:T,dataType:1}],dispatchGroup:{x:v},programUniforms:M}),getShaderSource:A},{inputs:[n,r,l],outputs:[-1]})[0]},C1=(e,n,r)=>{let l=n[0].dims,u=l,o=2,f=l[0],d=l[1],m=P.sizeFromDimension(l,o),g=St(m),b=P.size(u)/g,v=hh(e,n[0],n[1],n[2],f,m,d,r.epsilon),_=[f,d,m/g],S=[f,d],T=["type","none"],E=M=>{let A=ne("x",n[0].dataType,_.length,g),z=ne("scale_shift",1,S.length,2),D=$e("output",n[0].dataType,_.length,g),N=[A,z,D];return`
  ${M.registerUniform("output_size","u32").declareVariables(...N)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${D.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${z.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${A.getByOffset("global_idx")} * ${D.type.value}(scale_shift.x) + ${D.type.value}(scale_shift.y);
      ${D.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${g}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:u,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...Te(_,S,_)]}),getShaderSource:E},{inputs:[n[0],v]})},O1=(e,n,r)=>{let l=n[0].dims,u=l,o=l[0],f=l[l.length-1],d=P.sizeFromDimension(l,1)/f,m=St(f),g=P.size(u)/m,b=[{type:12,data:d},{type:12,data:Math.floor(f/m)}],v=["type","type"],_=!1,S=[0,l.length-1];for(let A=0;A<l.length-2;A++)_=_||l[A+1]!==1,S.push(A+1);_=_&&l[l.length-1]!==1;let T=_?e.compute(Na(e.inputs[0],S),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:l.length},(A,z)=>l[S[z]])),E=hh(e,T,n[1],n[2],o,d,f,r.epsilon),M=A=>{let z=Ht(n[0].dataType),D=m===1?"vec2f":`mat${m}x2f`,N=q=>{let C=q===0?"x":"y",J=m===1?"f32":`vec${m}f`;switch(m){case 1:return`${z}(${J}(scale.${C}))`;case 2:return`vec2<${z}>(${J}(scale[0].${C}, scale[1].${C}))`;case 4:return`vec4<${z}>(${J}(scale[0].${C}, scale[1].${C}, scale[2].${C}, scale[3].${C}))`;default:throw new Error(`Not supported compoents ${m}`)}},I=ne("input",n[0].dataType,n[0].dims,m),V=$e("output",n[0].dataType,u,m);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${D}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${V.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${A.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${N(0)}, ${N(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${m}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:u,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:M},{inputs:[n[0],E]})},fx=(e,n)=>{n.format==="NHWC"?O1(e,e.inputs,n):C1(e,e.inputs,n)}}),k1,M1,cx,ME=fe(()=>{ke(),Ne(),De(),k1=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},M1=(e,n,r)=>{let l=n.simplified,u=e[0].dims,o=e[1],f=!l&&e[2],d=u,m=P.normalizeAxis(n.axis,u.length),g=P.sizeToDimension(u,m),b=P.sizeFromDimension(u,m),v=P.size(o.dims),_=f?P.size(f.dims):0;if(v!==b||f&&_!==b)throw new Error(`Size of X.shape()[axis:] == ${b}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${v} and bias size of ${_}`);let S=[];for(let I=0;I<u.length;++I)I<m?S.push(u[I]):S.push(1);let T=St(b),E=["type","type"],M=[{type:12,data:g},{type:1,data:b},{type:12,data:Math.floor(b/T)},{type:1,data:n.epsilon}];f&&E.push("type");let A=r>1,z=r>2,D=I=>{let V=Ht(e[0].dataType),q=[ne("x",e[0].dataType,e[0].dims,T),ne("scale",o.dataType,o.dims,T)];f&&q.push(ne("bias",f.dataType,f.dims,T)),q.push($e("output",e[0].dataType,d,T)),A&&q.push($e("mean_data_output",1,S)),z&&q.push($e("inv_std_output",1,S));let C=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(C).declareVariables(...q)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${jh("f32",T)};
    var mean_square_vector = ${jh("f32",T)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${is(V,T,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${er("mean_vector",T)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${er("mean_square_vector",T)} / uniforms.norm_size ${l?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${is(V,T,"x[j + offset]")};
      let f32scale = ${is(V,T,"scale[j]")};
      output[j + offset] = ${q[0].type.value}((f32input ${l?"":"- mean"}) * inv_std_dev * f32scale
        ${f?`+ ${is(V,T,"bias[j]")}`:""}
      );
    }

    ${A?"mean_data_output[global_idx] = mean":""};
    ${z?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},N=[{dims:d,dataType:e[0].dataType}];return A&&N.push({dims:S,dataType:1}),z&&N.push({dims:S,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${T};${r};${l}`,inputDependencies:E},getRunData:()=>({outputs:N,dispatchGroup:{x:Math.ceil(g/64)},programUniforms:M}),getShaderSource:D}},cx=(e,n)=>{k1(e.inputs),e.compute(M1(e.inputs,n,e.outputCount))}}),R1,dx,RE=fe(()=>{Ne(),Bm(),Um(),R1=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},dx=e=>{R1(e.inputs);let n=ss.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!n)throw new Error("Can't use matmul on the given tensors");let r=n[n.length-1],l=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&l<8)e.compute(Im(e.inputs,{activation:""},n));else{let u=n[n.length-2],o=P.size(e.inputs[0].dims.slice(0,-2)),f=P.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&u===1&&f===1){let d=e.inputs[0].reshape([1,o,l]),m=e.inputs[1].reshape([1,l,r]),g=[1,o,r],b=[d,m];e.compute(pc(b,{activation:""},n,g),{inputs:b})}else e.compute(pc(e.inputs,{activation:""},n))}}}),N1,D1,I1,px,hx,NE=fe(()=>{ke(),Ne(),Tt(),De(),N1=(e,n)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],l=r.dims.length;if(r.dims[l-1]!==n.k)throw new Error("The last dim of input shape does not match the k value");let u=Math.floor((n.k+n.blockSize-1)/n.blockSize),o=n.blockSize/8*n.bits,f=e[1];if(!P.areEqual(f.dims,[n.n,u,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let d=e[2].dims;if(P.size(d)!==n.n*u)throw new Error("scales input size error.");if(e.length===4){let m=e[3].dims,g=n.n*(n.bits===8?u:Math.floor((u*n.bits+7)/8));if(P.size(m)!==g)throw new Error("zeroPoints input size error.")}},D1=(e,n)=>{let r=e[0].dims,l=r.length,u=r[l-2],o=n.k,f=n.n,d=r.slice(0,l-2),m=P.size(d),g=e[1].dims[2]/4,b=e[0].dataType,v=St(n.k),_=St(g),S=St(f),T=d.concat([u,f]),E=u>1&&f/S%2===0?2:1,M=P.size(T)/S/E,A=64,z=[],D=[m,u,o/v],N=P.convertShape(e[1].dims).slice();N.splice(-1,1,g/_),z.push(...Te(D)),z.push(...Te(N)),z.push(...Te(e[2].dims)),e.length===4&&z.push(...Te(P.convertShape(e[3].dims)));let I=[m,u,f/S];z.push(...Te(I));let V=q=>{let C=D.length,J=ne("a",e[0].dataType,C,v),ue=ne("b",12,N.length,_),pe=ne("scales",e[2].dataType,e[2].dims.length),he=[J,ue,pe],ge=e.length===4?ne("zero_points",12,e[3].dims.length):void 0;ge&&he.push(ge);let X=I.length,ye=$e("output",e[0].dataType,X,S),H=Ht(e[0].dataType),te=(()=>{switch(v){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${v}-component is not supported.`)}})(),me=Math.floor(32/n.bits),le=Math.floor(me/8),we=()=>{let Z="";for(let G=0;G<le;G++){let oe=G*n.bits*4,ve=oe+n.bits;Z+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?J.indicesToOffset(`${J.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${te};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/v}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${J.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let _e=0;_e<S*E;_e++)Z+=`
            b_value = ${_===1?`b${_e}_data`:`b${_e}_data[i]`};
            ${n.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${oe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ve}u) & b_mask);`}
            b_quantized_values = ${te}(${Array.from({length:4},(Ge,Be)=>`${H}(b_value_lower[${Be}]), ${H}(b_value_upper[${Be}])`).join(", ")});
            b_dequantized_values = ${v===1?`${te}(${Array.from({length:8},(Ge,Be)=>`(b_quantized_values[${Be}] - ${ge?`zero_point${_e}`:"zero_point"}) * scale${_e}`).join(", ")});`:`(b_quantized_values - ${te}(${Array(8).fill(`${ge?`zero_point${_e}`:"zero_point"}`).join(",")})) * scale${_e};`};
            workgroup_shared[local_id.x * ${E} + ${Math.floor(_e/S)}]${S>1?`[${_e%S}]`:""} += ${Array.from({length:8/v},(Ge,Be)=>`${v===1?`a_data${G>0?G:""}[${Be}] * b_dequantized_values[${Be}]`:`dot(a_data${G>0?G:""}[${Be}], b_dequantized_values[${Be}])`}`).join(" + ")};
          `}return Z},R=()=>{let Z=`
            var col_index = col * ${S};
            ${ge?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/n.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,n.bits-1)} for unsigned ${n.bits}-bit quantization.
            let zero_point = ${H}(${Math.pow(2,n.bits-1).toFixed(1)});`}
            `;for(let G=0;G<S*E;G++)Z+=`
            let scale${G} = ${pe.getByOffset("col_index * nBlocksPerCol + block")};
            ${ge?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${n.bits}u);
            zero_point_word = ${ge.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${H}((zero_point_word) & ${n.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},j=()=>{let Z=`col_index = col * ${S};`;for(let G=0;G<S*E;G++)Z+=`
            let b${G}_data = ${ue.getByIndices(`${ue.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${n.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${te};
            var b_dequantized_values: ${te};`,Z};return`
        var<workgroup> workgroup_shared: array<${ye.type.value}, ${E*A}>;
        ${q.declareVariables(...he,ye)}
        ${q.mainStart([A,1,1])}
          let output_indices = ${ye.offsetToIndices(`(global_idx / ${A}) * ${E}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${A}) {
            //process one block
            var word_offset: u32 = block * ${n.blockSize/v};
            ${R()}
            for (var word: u32 = 0; word < ${g}; word += ${_}) {
              ${j()}
              for (var i: u32 = 0; i < ${_}; i++) {
                ${we()}
                word_offset += ${me/v};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${E}) {
            var output_value: ${ye.type.value} = ${ye.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${A}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${E};
            }
            ${ye.setByIndices(`${ye.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${n.blockSize};${n.bits};${v};${_};${S};${E};${A}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:T,dataType:b}],dispatchGroup:{x:M},programUniforms:z}),getShaderSource:V}},I1=(e,n)=>{let r=e[0].dims,l=r.length,u=r[l-2],o=n.k,f=n.n,d=r.slice(0,l-2),m=P.size(d),g=e[1].dims[2]/4,b=e[0].dataType,v=St(n.k),_=St(g),S=d.concat([u,f]),T=128,E=f%8===0?8:f%4===0?4:1,M=T/E,A=Math.floor(32/n.bits),z=M*_*A,D=z/v,N=z/n.blockSize,I=P.size(S)/E,V=[],q=[m,u,o/v],C=P.convertShape(e[1].dims).slice();C.splice(-1,1,g/_),V.push(...Te(q)),V.push(...Te(C)),V.push(...Te(e[2].dims)),e.length===4&&V.push(...Te(P.convertShape(e[3].dims)));let J=[m,u,f];V.push(...Te(J));let ue=pe=>{let he=q.length,ge=ne("a",e[0].dataType,he,v),X=ne("b",12,C.length,_),ye=ne("scales",e[2].dataType,e[2].dims.length),H=[ge,X,ye],te=e.length===4?ne("zero_points",12,e[3].dims.length):void 0;te&&H.push(te);let me=J.length,le=$e("output",e[0].dataType,me),we=Ht(e[0].dataType),R=()=>{switch(v){case 1:return`
          let a_data0 = vec4<${we}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${we}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${we}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${we}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${v}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ge.type.value}, ${D}>;
        var<workgroup> inter_results: array<array<${le.type.value}, ${M}>, ${E}>;
        ${pe.declareVariables(...H,le)}
        ${pe.mainStart([M,E,1])}
          let output_indices = ${le.offsetToIndices(`workgroup_index * ${E}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${N} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${D};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${D}; a_offset += ${T})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ge.getByIndices(`${ge.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ge.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${N} + local_id.x;
            ${te?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/n.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${n.bits}u);
            let zero_point_word = ${te.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${we}((zero_point_word) & ${n.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,n.bits-1)} for unsigned ${n.bits}-bit quantization.
            let zero_point = ${we}(${Math.pow(2,n.bits-1).toFixed(1)});`}
            let scale = ${ye.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${X.getByIndices(`${X.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${n.blockSize/v};
            for (var i: u32 = 0; i < ${_}; i++) {
              let b_value = ${_===1?"b_data":"b_data[i]"};
              ${(()=>{let j=Math.floor(A/8),Z="";for(let G=0;G<j;G++){let oe=G*n.bits*4,ve=oe+n.bits;Z+=`
              ${R()}
              {${n.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${oe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ve}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${we}>(${Array.from({length:4},(_e,Ge)=>`${we}(b_value_lower[${Ge}]), ${we}(b_value_upper[${Ge}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${we}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(_e,Ge)=>`${`dot(a_data${Ge}, b_dequantized_values[${Ge}])`}`).join(" + ")};
              }
              word_offset += ${8/v};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${E}) {
            var output_value: ${le.type.value} = ${le.type.value}(0);
            for (var b = 0u; b < ${M}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${le.setByIndices(`${le.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${n.blockSize};${v};${_};${M};${E}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:b}],dispatchGroup:{x:I},programUniforms:V}),getShaderSource:ue}},px=(e,n)=>{N1(e.inputs,n),n.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(I1(e.inputs,n)):e.compute(D1(e.inputs,n))},hx=e=>et(e)}),B1,U1,q1,L1,H1,j1,G1,V1,mx,DE=fe(()=>{ke(),Ne(),De(),B1=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let n=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(n=e[3].dims[0]*2===e[1].dims[0]),!n)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},U1=(e,n,r)=>{let l="";for(let u=n-1;u>=0;--u)l+=`
            k = i32(${e.indicesGet("indices",u)}) - ${Se("uniforms.pads",u,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Se("uniforms.x_shape",u,n)})) {
              break;
            }
            offset += k * i32(${Se("uniforms.x_strides",u,n)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${l}
            value = x[offset];
          }
      `},q1=(e,n,r)=>{let l="";for(let u=n-1;u>=0;--u)l+=`
                k = i32(${e.indicesGet("indices",u)}) - ${Se("uniforms.pads",u,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Se("uniforms.x_shape",u,n)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Se("uniforms.x_shape",u,n)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Se("uniforms.x_strides",u,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${l}
              value = x[offset];
          `},L1=(e,n,r)=>{let l="";for(let u=n-1;u>=0;--u)l+=`
                k = i32(${e.indicesGet("indices",u)}) - ${Se("uniforms.pads",u,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Se("uniforms.x_shape",u,n)})) {
                  k = i32(${Se("uniforms.x_shape",u,n)}) - 1;
                }
                offset += k * i32(${Se("uniforms.x_strides",u,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${l}
              value = x[offset];
          `},H1=(e,n,r)=>{let l="";for(let u=n-1;u>=0;--u)l+=`
                k = i32(${e.indicesGet("indices",u)}) - ${Se("uniforms.pads",u,r)};
                if (k < 0)  {
                  k += i32(${Se("uniforms.x_shape",u,n)}]);
                }
                if (k >= i32(${Se("uniforms.x_shape",u,n)})) {
                  k -= i32(${Se("uniforms.x_shape",u,n)});
                }
                offset += k * i32(${Se("uniforms.x_strides",u,n)});
            `;return`
              var offset = 0;
              var k = 0;
              ${l}
              value = x[offset];
          `},j1=(e,n,r)=>{switch(r.mode){case 0:return U1(e,n,r.pads.length);case 1:return q1(e,n,r.pads.length);case 2:return L1(e,n,r.pads.length);case 3:return H1(e,n,r.pads.length);default:throw new Error("Invalid mode")}},G1=(e,n)=>{let r=P.padShape(e[0].dims.slice(),n.pads),l=e[0].dims,u=P.size(r),o=[{type:12,data:u},{type:6,data:n.pads}],f=e.length>=3&&e[2].data;n.mode===0&&o.push({type:f?e[2].dataType:1,data:n.value}),o.push(...Te(e[0].dims,r));let d=["rank"],m=g=>{let b=$e("output",e[0].dataType,r.length),v=ne("x",e[0].dataType,l.length),_=v.type.value,S=j1(b,l.length,n),T=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:n.pads.length}];return n.mode===0&&T.push({name:"constant_value",type:f?_:"f32"}),`
            ${g.registerUniforms(T).declareVariables(v,b)}
            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${b.offsetToIndices("global_idx")};

            var value = ${_}(0);
            ${S}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${n.mode}${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(P.size(r)/64)},programUniforms:o}),getShaderSource:m}},V1=(e,n)=>{if(e.length>1){let r=e[1].getBigInt64Array(),l=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,u=e[0].dims.length,o=new Int32Array(2*u).fill(0);if(e.length>=4){let d=e[3].getBigInt64Array();for(let m=0;m<d.length;m++)o[Number(d[m])]=Number(r[m]),o[Number(d[m])+u]=Number(r[m+d.length])}else r.forEach((d,m)=>o[Number(m)]=Number(d));let f=[];return o.forEach(d=>f.push(d)),{mode:n.mode,value:l,pads:f}}else return n},mx=(e,n)=>{B1(e.inputs);let r=V1(e.inputs,n);e.compute(G1(e.inputs,r),{inputs:[0]})}}),Uu,mh,gh,yh,vh,W1,Y1,bh,_h,gx,yx,wh,vx,bx,$h,_x,wx,$x,xx,IE=fe(()=>{Ya(),ke(),Ne(),De(),Uu=e=>{if(ht.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},mh=(e,n,r)=>{let l=n.format==="NHWC",u=e.dims.slice();l&&u.splice(1,0,u.pop());let o=Object.hasOwnProperty.call(n,"dilations"),f=n.kernelShape.slice(),d=n.strides.slice(),m=o?n.dilations.slice():[],g=n.pads.slice();cc.adjustPoolAttributes(r,u,f,d,m,g);let b=cc.computePoolOutputShape(r,u,d,m,f,g,n.autoPad),v=Object.assign({},n);o?Object.assign(v,{kernelShape:f,strides:d,pads:g,dilations:m,cacheKey:n.cacheKey}):Object.assign(v,{kernelShape:f,strides:d,pads:g,cacheKey:n.cacheKey});let _=b.slice();return _.push(_.splice(1,1)[0]),[v,l?_:b]},gh=(e,n)=>{let r=n.format==="NHWC",l=P.size(e),u=P.size(n.kernelShape),o=[{type:12,data:l},{type:12,data:u}],f=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(n.kernelShape.length<=2){let d=n.kernelShape[n.kernelShape.length-1],m=n.strides[n.strides.length-1],g=n.pads[n.pads.length/2-1],b=n.pads[n.pads.length-1],v=!!(g+b);o.push({type:12,data:d},{type:12,data:m},{type:12,data:g},{type:12,data:b}),f.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let _=!1;if(n.kernelShape.length===2){let S=n.kernelShape[n.kernelShape.length-2],T=n.strides[n.strides.length-2],E=n.pads[n.pads.length/2-2],M=n.pads[n.pads.length-2];_=!!(E+M),o.push({type:12,data:S},{type:12,data:T},{type:12,data:E},{type:12,data:M}),f.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,f,!0,v,_]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let d=P.computeStrides(n.kernelShape);o.push({type:12,data:d},{type:12,data:n.pads},{type:12,data:n.strides}),f.push({name:"kernelStrides",type:"u32",length:d.length},{name:"pads",type:"u32",length:n.pads.length},{name:"strides",type:"u32",length:n.strides.length});let m=n.pads.reduce((g,b)=>g+b);return[o,f,!!m,!1,!1]}},yh=(e,n,r,l,u,o,f,d,m,g,b,v)=>{let _=u.format==="NHWC",S=n.type.value,T=$e("output",n.type.tensor,l);if(u.kernelShape.length<=2){let E="",M="",A="",z=r-(_?2:1);if(b?E=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${z}] = indices[${z}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${z}] < 0 || xIndices[${z}]
                      >= uniforms.x_shape[${z}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${n.indicesToOffset("xIndices")}];
                  ${o}
                }`:E=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${z}] = indices[${z}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${n.indicesToOffset("xIndices")}];
                  ${o}
                }`,u.kernelShape.length===2){let D=r-(_?3:2);v?M=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${D}] = indices[${D}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${D}] < 0 || xIndices[${D}] >= uniforms.x_shape[${D}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:M=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${D}] = indices[${D}] * uniforms.sh - uniforms.phStart + j;
                `,A=`
              }
            `}return`
            ${e.registerUniforms(m).declareVariables(n,T)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${T.offsetToIndices("global_idx")};
              var xIndices = ${T.offsetToIndices("global_idx")};

              var value = ${S}(${d});
              var pad = 0;
              ${M}
              ${E}
              ${A}
              ${f}

              output[global_idx] = value;
            }`}else{if(_)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let E=u.kernelShape.length,M=u.pads.length,A="";return g?A=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${n.indicesToOffset("xIndices")}];
                ${o}
              }`:A=`
              }
              let x_val = x[${n.indicesToOffset("xIndices")}];
              ${o}
            `,`
            ${e.registerUniforms(m).declareVariables(n,T)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${T.offsetToIndices("global_idx")};
              var xIndices = ${T.offsetToIndices("global_idx")};

              var offsets: array<u32, ${E}>;

              var value = ${S}(${d});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${E-1}u; j++) {
                  offsets[j] = offset / ${Se("uniforms.kernelStrides","j",E)};
                  offset -= offsets[j] * ${Se("uniforms.kernelStrides","j",E)};
                }
                offsets[${E-1}] = offset;

                isPad = false;
                for (var j = ${r-E}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Se("uniforms.strides",`j - ${r-E}u`,E)}
                    + offsets[j - ${r-E}u] - ${Se("uniforms.pads","j - 2u",M)};
                  ${A}
              }
              ${f}

              output[global_idx] = value;
            }`}},vh=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,W1=e=>`${vh(e)};${e.countIncludePad}`,Y1=e=>`${vh(e)};${e.storageOrder};${e.dilations}`,bh=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),_h=(e,n,r,l)=>{let[u,o]=mh(n,l,r),f=ne("x",n.dataType,n.dims.length),d=f.type.value,m="value += x_val;",g="";u.countIncludePad?g+=`value /= ${d}(uniforms.kernelSize);`:g+=`value /= ${d}(i32(uniforms.kernelSize) - pad);`;let[b,v,_,S,T]=gh(o,u);b.push(...Te(n.dims,o));let E=["rank"];return{name:e,shaderCache:{hint:`${l.cacheKey};${_};${S};${T}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:o,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(P.size(o)/64)},programUniforms:b}),getShaderSource:M=>yh(M,f,n.dims.length,o.length,u,m,g,0,v,_,S,T)}},gx=e=>{let n=e.count_include_pad!==0,r=bh(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let l={countIncludePad:n,...r,cacheKey:""};return{...l,cacheKey:W1(l)}},yx=(e,n)=>{Uu(e.inputs),e.compute(_h("AveragePool",e.inputs[0],!1,n))},wh={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},vx=e=>{let n=e.format;return{format:n,...wh,cacheKey:n}},bx=(e,n)=>{Uu(e.inputs),e.compute(_h("GlobalAveragePool",e.inputs[0],!0,n))},$h=(e,n,r,l)=>{let[u,o]=mh(n,l,r),f=`
      value = max(x_val, value);
    `,d="",m=ne("x",n.dataType,n.dims.length),g=["rank"],[b,v,_,S,T]=gh(o,u);return b.push(...Te(n.dims,o)),{name:e,shaderCache:{hint:`${l.cacheKey};${_};${S};${T}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(P.size(o)/64)},programUniforms:b}),getShaderSource:E=>yh(E,m,n.dims.length,o.length,u,f,d,n.dataType===10?-65504:-1e5,v,_,S,T)}},_x=(e,n)=>{Uu(e.inputs),e.compute($h("MaxPool",e.inputs[0],!1,n))},wx=e=>{let n=e.storage_order,r=e.dilations,l=bh(e);if(n!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(l.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let u={storageOrder:n,dilations:r,...l,cacheKey:""};return{...u,cacheKey:Y1(u)}},$x=e=>{let n=e.format;return{format:n,...wh,cacheKey:n}},xx=(e,n)=>{Uu(e.inputs),e.compute($h("GlobalMaxPool",e.inputs[0],!0,n))}}),F1,K1,Sx,Tx,BE=fe(()=>{ke(),Ne(),Tt(),De(),F1=(e,n)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,l)=>r===e[2].dims[l]).reduce((r,l)=>r&&l,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(n.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((u,o)=>o===n.axis||u===e[0].dims[o]).reduce((u,o)=>u&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[n.axis],l=e[1].dims[n.axis];if(n.blockSize<Math.ceil(r/l)||n.blockSize>Math.ceil(r/(l-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},K1=(e,n)=>{let r=P.normalizeAxis(n.axis,e[0].dims.length),l=e[0].dataType,u=l===3,o=e[0].dims,f=e[1].dataType,d=P.size(o),m=l===3||l===2,g=m?[Math.ceil(P.size(e[0].dims)/4)]:e[0].dims,b=e[1].dims,v=e.length>2?e[2]:void 0,_=v?m?[Math.ceil(P.size(v.dims)/4)]:v.dims:void 0,S=b.length===0||b.length===1&&b[0]===1,T=S===!1&&b.length===1,E=St(d),M=S&&(!m||E===4),A=M?E:1,z=M&&!m?E:1,D=ne("input",m?12:l,g.length,z),N=ne("scale",f,b.length),I=v?ne("zero_point",m?12:l,_.length):void 0,V=$e("output",f,o.length,A),q=[D,N];I&&q.push(I);let C=[g,b];v&&C.push(_);let J=[{type:12,data:d/A},{type:12,data:r},{type:12,data:n.blockSize},...Te(...C,o)],ue=pe=>{let he=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${pe.registerUniforms(he).declareVariables(...q,V)}
      ${pe.mainStart()}
          ${pe.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${V.offsetToIndices("global_idx")};

          // Set input x
          ${m?`
            let input = ${D.getByOffset("global_idx / 4")};
            let x_vec = ${u?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${A===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${D.getByOffset("global_idx")};`};

          // Set scale input
          ${S?`let scale_value= ${N.getByOffset("0")}`:T?`
            let scale_index = ${V.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${N.getByOffset("scale_index")};`:`
            var scale_indices: ${N.type.indices} = output_indices;
            let index = ${N.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${N.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${N.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?S?m?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:T?m?`
                let zero_point_index = ${V.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${V.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:m?`
                let zero_point_offset = ${N.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${m?u?"i32":"u32":D.type.value}(0);`};
      // Compute and write output
      ${V.setByOffset("global_idx",`${V.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:n.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:ue,getRunData:()=>({outputs:[{dims:o,dataType:f}],dispatchGroup:{x:Math.ceil(d/A/64),y:1,z:1},programUniforms:J})}},Sx=(e,n)=>{F1(e.inputs,n),e.compute(K1(e.inputs,n))},Tx=e=>et({axis:e.axis,blockSize:e.blockSize})}),X1,Q1,Ex,UE=fe(()=>{Ya(),ke(),De(),X1=(e,n,r)=>{let l=e===n,u=e<n&&r<0,o=e>n&&r>0;if(l||u||o)throw new Error("Range these inputs' contents are invalid.")},Q1=(e,n,r,l)=>{let u=Math.abs(Math.ceil((n-e)/r)),o=[u],f=u,d=[{type:12,data:f},{type:l,data:e},{type:l,data:r},...Te(o)],m=g=>{let b=$e("output",l,o.length),v=b.type.value,_=[{name:"outputSize",type:"u32"},{name:"start",type:v},{name:"delta",type:v}];return`
        ${g.registerUniforms(_).declareVariables(b)}
        ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${v}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${l}`},getShaderSource:m,getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d})}},Ex=e=>{let n=0,r=0,l=0;e.inputs[0].dataType===6?(n=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],l=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(n=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],l=e.inputs[2].getFloat32Array()[0]),ht.webgpu.validateInputContent&&X1(n,r,l),e.compute(Q1(n,r,l,e.inputs[0].dataType),{inputs:[]})}}),Z1,P1,zx,Ax,qE=fe(()=>{ke(),Ne(),Tt(),De(),Z1=(e,n,r,l)=>{if(e!=="none"&&l!=="i32"&&l!=="u32"&&l!=="f32")throw new Error(`Input ${l} is not supported with reduction ${e}.`);let u=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${n}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${n}=${r};`;case"add":return l==="i32"||l==="u32"?`atomicAdd(&${n}, bitcast<${l}>(${r}));`:`
              ${u}bitcast<${l}>(oldValue) + (${r})${o}`;case"max":return l==="i32"||l==="u32"?`atomicMax(&${n}, bitcast<${l}>(${r}));`:`
                ${u}max(bitcast<f32>(oldValue), (${r}))${o}`;case"min":return l==="i32"||l==="u32"?`atomicMin(&${n}, bitcast<${l}>(${r}));`:`${u}min(bitcast<${l}>(oldValue), (${r}))${o}`;case"mul":return`${u}(bitcast<${l}>(oldValue) * (${r}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},P1=(e,n)=>{let r=e[0].dims,l=e[1].dims,u=r,o=1,f=Math.ceil(P.sizeToDimension(l,l.length-1)/o),d=l[l.length-1],m=P.sizeFromDimension(r,d),g=[{type:12,data:f},{type:12,data:d},{type:12,data:m},...Te(e[1].dims,e[2].dims,u)],b=v=>{let _=ne("indices",e[1].dataType,e[1].dims.length),S=ne("updates",e[2].dataType,e[2].dims.length,o),T=n.reduction!=="none"&&n.reduction!==""?aw("output",e[0].dataType,u.length):$e("output",e[0].dataType,u.length,o);return`
      ${v.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(_,S,T)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Z1(n.reduction,"output[data_offset + i]","value",T.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${n.cacheKey}_${n.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:b}},zx=e=>et({reduction:e.reduction}),Ax=(e,n)=>{e.compute(P1(e.inputs,n),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),J1,e_,t_,xh,a_,n_,i_,r_,l_,s_,u_,o_,Sh,f_,c_,d_,p_,h_,Cx,Ox,LE=fe(()=>{ke(),Ne(),Tt(),De(),J1=(e,n)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(n.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(n.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},e_=(e,n,r)=>{n.every(u=>u>=0&&u<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let l=new Array(r).fill(1);return n.forEach((u,o)=>l[u]=e[o]),l},t_=(e,n,r,l,u,o)=>{let[f,d,m]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],g=e[0].dims.length;if(f>0&&e.length>f&&e[f].dims.length>0)e[f].getFloat32Array().forEach(b=>o.push(b));else if(n.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0){if(e[d].getFloat32Array().forEach(b=>l.push(b)),l.length!==0&&l.length!==g&&r>=18&&l.length!==n.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");J1(l,n),n.axes.length>0&&e_(l,n.axes,g).forEach((b,v)=>l[v]=b)}if(m>0&&e.length>m&&e[m].dims.length===1&&e[m].dims[0]>0&&(e[m].getBigInt64Array().forEach(b=>u.push(Number(b))),u.length!==0&&u.length!==g&&r>=18&&u.length!==n.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(n.axes.length>0){if(l.length!==0&&l.length!==n.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(u.length!==0&&u.length!==n.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof l<"u"&&typeof u<"u"&&l.length>0&&u.length>g)throw new Error("Resize requires only of scales or sizes to be specified")},xh=(e,n,r,l)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${n});
  let whole = ${l}(big / (${r}));
  let fract = ${l}(big % (${r})) / ${l}(${r});
  return whole + fract;
`,a_=(e,n)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${n} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${n}(xResized) / ${n}(xScale);
          } else {
            ${xh("xResized","lengthOriginal","lengthResized",n)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${n}(xResized) + 0.5) / ${n}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${n}(xResized) + 0.5) / ${n}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${xh("xResized","lengthOriginal - 1","lengthResized - 1",n)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${n}(roiStart) * ${n}(lengthOriginal - 1) +
                        (${n}(xResized) * ${n}(roiEnd - roiStart) * ${n}(lengthOriginal - 1)) /
                        ${n}(lengthResized - 1);
                  } else {
                    return 0.5 * ${n}(roiStart + roiEnd) * ${n}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${n}xScale * ${n}(lengthResized);
                  const adjustment = ${n}(lengthResized) / outputWidth;
                  const center = ${n}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${n}(xResized) + 0.5) / ${n}(xScale)) - 0.5;`;case"half_pixel":return`return ((${n}(xResized) + 0.5) / ${n}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",n_=(e,n,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(n<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",i_=(e,n,r)=>{let l=new Array(r).fill(0).concat(new Array(r).fill(1)),u=e.length===0?l:e.slice();return n.length>0?(n.forEach((o,f)=>{l[o]=u[f],l[f+r]=u[n.length+f]}),l):u},r_=(e,n,r,l)=>{let u=[];if(r.length>0)if(l.length>0){if(e.forEach(o=>u.push(o)),Math.max(...l)>e.length)throw new Error("axes is out of bound");l.forEach((o,f)=>u[o]=r[f])}else r.forEach(o=>u.push(o));else{if(n.length===0)throw new Error("Resize requires either scales or sizes.");u=e.map((o,f)=>Math.round(o*n[f]))}return u},l_=(e,n,r)=>{let l=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(o=>n[o]),Number.MAX_VALUE):Math.min(...n,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(o=>n[o]),Number.MIN_VALUE):Math.max(...n,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();n.fill(1,0,n.length);let u=e.slice();return r.axes.length>0?(r.axes.forEach(o=>n[o]=l),r.axes.forEach(o=>u[o]=Math.round(e[o]*n[o]))):(n.fill(l,0,n.length),u.forEach((o,f)=>u[f]=Math.round(o*n[f]))),u},s_=(e,n,r,l,u)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Se("uniforms.scales","i",l)};
        var roi_low = ${Se("uniforms.roi","i",u)};
        var roi_hi = ${Se("uniforms.roi",`i + ${n.length}`,u)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Se("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${Se("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,u_=(e,n,r,l,u,o,f)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${n.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${l.length}; i++) {
        var output_index = ${n.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Se("uniforms.scales","i",u)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Se("uniforms.roi","i",o)};
          var roi_hi = ${Se("uniforms.roi",`i + ${r.length}`,o)};
          var input_shape_i = ${Se("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Se("uniforms.output_shape","i",l.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${f} || (original_idx >= 0 && original_idx < ${n.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${n.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,o_=(e,n)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Se("uniforms.input_shape","i",n.length)}) {
          return false;
        }
      }
      return true;
    }`,Sh=(e,n,r,l)=>e.rank>l?`
    ${e.indicesSet("input_indices",n,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",f_=(e,n,r,l,u)=>{let[o,f,d,m]=r.length===2?[-1,0,1,-1]:[0,2,3,1],g=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${g} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",f,`max(0, min(row, ${r[f]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(col, ${r[d]} - 1))`)};
      ${Sh(e,m,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${n.type.indices}) -> ${g} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${g} = originalIndices[${f}];
      var col:${g} = originalIndices[${d}];
      ${l?`if (row < 0 || row > (${r[f]} - 1) || col < 0 || col > (${r[d]} - 1)) {
        return ${u};
      }`:""};
      row = max(0, min(row, ${r[f]} - 1));
      col = max(0, min(col, ${r[d]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${m}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${o}])`:"0"};
      var x11: ${g} = getInputValue(batch, channel, row1, col1);
      var x12: ${g} = getInputValue(batch, channel, row1, col2);
      var x21: ${g} = getInputValue(batch, channel, row2, col1);
      var x22: ${g} = getInputValue(batch, channel, row2, col2);
      var dx1: ${g} = abs(row - ${g}(row1));
      var dx2: ${g} = abs(${g}(row2) - row);
      var dy1: ${g} = abs(col - ${g}(col1));
      var dy2: ${g} = abs(${g}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},c_=(e,n,r,l,u,o,f,d,m,g)=>{let b=r.length===2,[v,_]=b?[0,1]:[2,3],S=e.type.value,T=E=>{let M=E===v?"row":"col";return`
      fn ${M}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${n.type.indices}) -> ${S} {
        var output_index = ${n.indicesGet("output_indices",E)};
        var originalIdx: ${S} = getOriginalCoordinateFromResizedCoordinate(output_index, ${u[E]},
        ${l[E]}, ${r[E]}, ${o[E]}, ${o[E]} + ${r.length});
        var fractOriginalIdx: ${S} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${d} && (originalIdx < 0 || originalIdx > (${r[E]} - 1))) {
          return ${m};
        }
        var data: array<${S}, 4> = array<${S}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${M}: ${S} = originalIdx + ${S}(i);
          if (${M} < 0 || ${M} >= ${r[E]}) {
            ${g?`coefs[i + 1] = 0.0;
                        continue;`:d?`return ${m};`:`${M} = max(0, min(${M}, ${r[E]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",E,`u32(${M})`)};
          data[i + 1] = ${E===v?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${T(v)};
    ${T(_)};
  fn getCubicInterpolationCoefs(s: ${S}) -> array<${S}, 4> {
    var absS = abs(s);
    var coeffs: array<${S}, 4> = array<${S}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${S} = 1.0 - absS;
    var twoMinusAbsS: ${S} = 2.0 - absS;
    var onePlusAbsS: ${S} = 1.0 + absS;
    coeffs[0] = ((${f} * onePlusAbsS - 5 * ${f}) * onePlusAbsS + 8 * ${f}) * onePlusAbsS - 4 * ${f};
    coeffs[1] = ((${f} + 2) * absS - (${f} + 3)) * absS * absS + 1;
    coeffs[2] = ((${f} + 2) * oneMinusAbsS - (${f} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${f} * twoMinusAbsS - 5 * ${f}) * twoMinusAbsS + 8 * ${f}) * twoMinusAbsS - 4 * ${f};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${S}, 4>, coefs: array<${S}, 4>) -> ${S} {
    var coefsSum: ${S} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${n.type.indices}) -> ${S} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},d_=(e,n,r,l,u)=>{let[o,f,d,m,g]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],b=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${b} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",f,`max(0, min(depth, ${r[f]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(height, ${r[d]} - 1))`)};
      ${e.indicesSet("input_indices",m,`max(0, min(width, ${r[m]} - 1))`)};
      ${Sh(e,g,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${n.type.indices}) -> ${b} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${b} = originalIndices[${f}];
      var height:${b} = originalIndices[${d}];
      var width:${b} = originalIndices[${m}];
      ${l?`if (depth < 0 || depth > (${r[f]} - 1) || height < 0 || height > (${r[d]} - 1) || width < 0 || (width > ${r[m]} - 1)) {
      return ${u};
        }`:""};

    depth = max(0, min(depth, ${r[f]} - 1));
      height = max(0, min(height, ${r[d]} - 1));
      width = max(0, min(width, ${r[m]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${g}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${o}])`:"0"};

      var x111: ${b} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${b} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${b} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${b} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${b} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${b} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${b} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${b} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${b} = abs(depth - ${b}(depth1));
      var dx2: ${b} = abs(${b}(depth2) - depth);
      var dy1: ${b} = abs(height - ${b}(height1));
      var dy2: ${b} = abs(${b}(height2) - height);
      var dz1: ${b} = abs(width - ${b}(width1));
      var dz2: ${b} = abs(${b}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},p_=(e,n,r,l,u,o)=>{let f=e.dims,d=i_(o,n.axes,f.length),m=r_(f,l,u,n.axes),g=l.slice();l.length===0&&(g=f.map((z,D)=>z===0?1:m[D]/z),n.keepAspectRatioPolicy!=="stretch"&&(m=l_(f,g,n)));let b=$e("output",e.dataType,m.length),v=ne("input",e.dataType,f.length),_=P.size(m),S=f.length===m.length&&f.every((z,D)=>z===m[D]),T=n.coordinateTransformMode==="tf_crop_and_resize",E=n.extrapolationValue,M=v.type.value,A=z=>`
      ${S?"":`
      ${a_(n.coordinateTransformMode,M)};
      ${(()=>{switch(n.mode){case"nearest":return`
              ${o_(v,f)};
              ${n_(n.nearestMode,r,M)};
              ${u_(v,b,f,m,g.length,d.length,T)};
              `;case"linear":return`
              ${s_(b,f,m,g.length,d.length)};
              ${(()=>{if(f.length===2||f.length===4)return`${f_(v,b,f,T,E)}`;if(f.length===3||f.length===5)return`${d_(v,b,f,T,E)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(f.length===2||f.length===4)return`${c_(v,b,f,m,g,d,n.cubicCoeffA,T,n.extrapolationValue,n.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${z.registerUniform("output_size","u32").registerUniform("scales","f32",g.length).registerUniform("roi","f32",d.length).declareVariables(v,b)}
      ${z.mainStart()}
        ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${S?"output[global_idx] = input[global_idx];":`
        let output_indices = ${b.offsetToIndices("global_idx")};
        var input_indices: ${v.type.indices};
        ${(()=>{switch(n.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${v.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${n.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${f.length===2||f.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${n.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${n.cacheKey}|${r}|${g.length>0?n.mode==="cubic"?g:g.length:""}|${u.length>0?u:""}|${d.length>0?d:""}|${S}|${n.mode==="nearest"?f.length:f}`,inputDependencies:["rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:m,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},{type:1,data:g},{type:1,data:d},...Te(f,m)]})}},h_=e=>{let n=e.customDataBuffer;return new Uint32Array(n,n.byteOffset,1)[0]},Cx=(e,n)=>{let r=[],l=[],u=[],o=h_(e);if(n.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");t_(e.inputs,n,o,r,l,u),e.compute(p_(e.inputs[0],n,o,r,l,u),{inputs:[0]})},Ox=e=>{let n=e.antialias,r=e.axes,l=e.coordinateTransformMode,u=e.cubicCoeffA,o=e.excludeOutside!==0,f=e.extrapolationValue,d=e.keepAspectRatioPolicy,m=e.mode,g=e.nearestMode===""?"simple":e.nearestMode;return et({antialias:n,axes:r,coordinateTransformMode:l,cubicCoeffA:u,excludeOutside:o,extrapolationValue:f,keepAspectRatioPolicy:d,mode:m,nearestMode:g})}}),m_,g_,kx,HE=fe(()=>{ke(),Ne(),De(),m_=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let n=e[0],r=e[1],l=e[2];if(n.dataType!==r.dataType||n.dataType!==l.dataType)throw new Error("All inputs must have the same data type");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let u=n.dims[n.dims.length-1],o=n.dims[n.dims.length-2];if(r.dims[r.dims.length-1]!==u)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(l.dims.length!==1)throw new Error("Gamma must be 1D");if(l.dims[l.dims.length-1]!==u)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let f=e[3];if(f.dims.length!==1)throw new Error("Beta must be 1D");if(f.dims[f.dims.length-1]!==u)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let f=e[4];if(f.dims.length!==1)throw new Error("Bias must be 1D");if(f.dims[f.dims.length-1]!==u)throw new Error("Bias must have the same hidden size as input")}},g_=(e,n,r,l)=>{let u=n.simplified,o=e[0].dims,f=P.size(o),d=o,m=f,g=o.slice(-1)[0],b=l?o.slice(0,-1).concat(1):[],v=!u&&e.length>3,_=e.length>4,S=l&&r>1,T=l&&r>2,E=r>3,M=64,A=St(g),z=[{type:12,data:m},{type:12,data:A},{type:12,data:g},{type:1,data:n.epsilon}],D=I=>{let V=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],q=[ne("x",e[0].dataType,e[0].dims,A),ne("skip",e[1].dataType,e[1].dims,A),ne("gamma",e[2].dataType,e[2].dims,A)];v&&q.push(ne("beta",e[3].dataType,e[3].dims,A)),_&&q.push(ne("bias",e[4].dataType,e[4].dims,A)),q.push($e("output",e[0].dataType,d,A)),S&&q.push($e("mean_output",1,b)),T&&q.push($e("inv_std_output",1,b)),E&&q.push($e("input_skip_bias_sum",e[0].dataType,d,A));let C=Ht(e[0].dataType),J=Ht(1,A);return`

      ${I.registerUniforms(V).declareVariables(...q)}
      var<workgroup> sum_shared : array<${J}, ${M}>;
      var<workgroup> sum_squared_shared : array<${J}, ${M}>;

      ${I.mainStart([M,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${M};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${M};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${M-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${_?"bias[offset1d + i]":C+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${E?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${is(C,A,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${M};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${er("sum",A)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${er("square_sum",A)} / f32(uniforms.hidden_size) ${u?"":"- mean * mean"} + uniforms.epsilon);
        ${S?"mean_output[global_idx] = mean;":""}
        ${T?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${u?"":`- ${C}(mean)`}) *
            ${C}(inv_std_dev) * gamma[offset1d + i]
            ${v?"+ beta[offset1d + i]":""};
        }
      }`},N=[{dims:d,dataType:e[0].dataType}];return r>1&&N.push({dims:b,dataType:1}),r>2&&N.push({dims:b,dataType:1}),r>3&&N.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${A};${S};${T};${E}`,inputDependencies:e.map((I,V)=>"type")},getShaderSource:D,getRunData:()=>({outputs:N,dispatchGroup:{x:Math.ceil(m/g)},programUniforms:z})}},kx=(e,n)=>{m_(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(g_(e.inputs,n,e.outputCount,!1),{outputs:r})}}),y_,qu,v_,Th,b_,__,Mx,Rx,jE=fe(()=>{ke(),Ne(),Tt(),De(),y_=(e,n)=>{if(!e||e.length<1)throw new Error("too few inputs");if(n.axes.length!==0){if(n.axes.length!==n.starts.length||n.axes.length!==n.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(n.starts.length!==n.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,l)=>{if(e[l+1].dataType!==6&&e[l+1].dataType!==7)throw new Error(`Input ${l} must be an array of int32 or int64`)})},qu=(e,n)=>{let r=[];if(e.length>n)if(e[n].dataType===7)e[n].getBigInt64Array().forEach(l=>r.push(Number(l)));else if(e[n].dataType===6)e[n].getInt32Array().forEach(l=>r.push(Number(l)));else throw new Error(`Input ${n} must be an array of int32 or int64`);return r},v_=(e,n)=>{if(e.length>1){let r=qu(e,1),l=qu(e,2),u=qu(e,3);return u.length===0&&(u=[...Array(e[0].dims.length).keys()]),et({starts:r,ends:l,axes:u})}else return n},Th=(e,n,r,l,u)=>{let o=e;return e<0&&(o+=r[l[n]]),u[n]<0?Math.max(0,Math.min(o,r[l[n]]-1)):Math.max(0,Math.min(o,r[l[n]]))},b_=(e,n,r)=>`fn calculateInputIndices(output_indices: ${n.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Se("uniforms.input_shape","i",r.length)};
            let steps_i = ${Se("uniforms.steps","i",r.length)};
            let signs_i = ${Se("uniforms.signs","i",r.length)};
            let starts_i = ${Se("uniforms.starts","i",r.length)};
            var output_index = ${n.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,__=(e,n)=>{let r=e[0].dims,l=P.size(r),u=n.axes.length>0?P.normalizeAxes(n.axes,r.length):[...Array(r.length).keys()],o=qu(e,4);o.forEach(A=>A!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(u.length).fill(1));let f=n.starts.map((A,z)=>Th(A,z,r,u,o)),d=n.ends.map((A,z)=>Th(A,z,r,u,o));if(u.length!==f.length||u.length!==d.length)throw new Error("start, ends and axes should have the same number of elements");if(u.length!==r.length)for(let A=0;A<r.length;++A)u.includes(A)||(f.splice(A,0,0),d.splice(A,0,r[A]),o.splice(A,0,1));let m=o.map(A=>Math.sign(A));o.forEach((A,z,D)=>{if(A<0){let N=(d[z]-f[z])/A,I=f[z],V=I+N*o[z];f[z]=V,d[z]=I,D[z]=-A}});let g=r.slice(0);u.forEach((A,z)=>{g[A]=Math.ceil((d[A]-f[A])/o[A])});let b={dims:g,dataType:e[0].dataType},v=$e("output",e[0].dataType,g.length),_=ne("input",e[0].dataType,e[0].dims.length),S=P.size(g),T=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:f.length},{name:"signs",type:"i32",length:m.length},{name:"steps",type:"u32",length:o.length}],E=[{type:12,data:S},{type:12,data:f},{type:6,data:m},{type:12,data:o},...Te(e[0].dims,g)],M=A=>`
      ${A.registerUniforms(T).declareVariables(_,v)}
        ${b_(_,v,r)}
        ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${v.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${v.setByOffset("global_idx",_.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${m.length}_${f.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:M,getRunData:()=>({outputs:[b],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:E})}},Mx=(e,n)=>{y_(e.inputs,n);let r=v_(e.inputs,n);e.compute(__(e.inputs,r),{inputs:[0]})},Rx=e=>{let n=e.starts,r=e.ends,l=e.axes;return et({starts:n,ends:r,axes:l})}}),w_,$_,Nx,Dx,GE=fe(()=>{ke(),Ne(),Tt(),ir(),De(),w_=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},$_=(e,n)=>{let r=e.inputs[0],l=r.dims,u=P.size(l),o=l.length,f=P.normalizeAxis(n.axis,o),d=f<l.length-1,m,g=[];d?(g=Array.from({length:o},(q,C)=>C),g[f]=o-1,g[o-1]=f,m=e.compute(Na(r,g),{inputs:[r],outputs:[-1]})[0]):m=r;let b=m.dims,v=b[o-1],_=u/v,S=St(v),T=v/S,E=64;_===1&&(E=256);let M=(q,C)=>C===4?`max(max(${q}.x, ${q}.y), max(${q}.z, ${q}.w))`:C===2?`max(${q}.x, ${q}.y)`:C===3?`max(max(${q}.x, ${q}.y), ${q}.z)`:q,A=ne("x",m.dataType,m.dims,S),z=$e("result",m.dataType,m.dims,S),D=A.type.value,N=Ht(m.dataType)==="f32"?`var threadMax = ${D}(-3.4028234663852886e+38f);`:`var threadMax = ${D}(-65504.0h);`,I=q=>`
      var<workgroup> rowMaxShared : ${D};
      var<workgroup> rowSumShared : ${D};
      var<workgroup> threadShared : array<${D}, ${E}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${D} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${D}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${q.registerUniform("packedCols","i32").declareVariables(A,z)}
      ${q.mainStart(E)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${E};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${N}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${D}(${M("threadShared[0]",S)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${D}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${D}(${er("threadShared[0]",S)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${D}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,V=e.compute({name:"Softmax",shaderCache:{hint:`${S};${E}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:b,dataType:m.dataType}],dispatchGroup:{x:_},programUniforms:[{type:6,data:T}]}),getShaderSource:I},{inputs:[m],outputs:[d?-1:0]})[0];d&&e.compute(Na(V,g),{inputs:[V]})},Nx=(e,n)=>{w_(e.inputs),$_(e,n)},Dx=e=>et({axis:e.axis})}),Eh,x_,S_,T_,Ix,VE=fe(()=>{ke(),Ne(),De(),Eh=e=>Array.from(e.getBigInt64Array(),Number),x_=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Eh(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},S_=(e,n)=>{let r=[];for(let l=0;l<e.length;++l)r.push(e[l]*n[l]);return r},T_=(e,n)=>{let r=e[0].dims,l=n??Eh(e[1]),u=S_(r,l),o=P.size(u),f=e[0].dataType,d=ne("input",f,r.length),m=$e("output",f,u.length),g=b=>`
      const inputShape = ${d.indices(...r)};
      ${b.registerUniform("output_size","u32").declareVariables(d,m)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${m.offsetToIndices("global_idx")};
      var input_indices: ${d.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${d.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${m.indicesGet("output_indices","i")}  % input_dim_i;

        ${d.indicesSet("input_indices","i","input_dim_value")}
      }
      ${m.setByOffset("global_idx",d.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${l}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...Te(e[0].dims,u)]}),getShaderSource:g}},Ix=e=>{x_(e.inputs),e.compute(T_(e.inputs),{inputs:[0]})}}),E_,z_,Bx,WE=fe(()=>{ke(),Ne(),De(),E_=(e,n,r,l,u)=>{let o=$e("output_data",u,r.length,4),f=ne("a_data",n[1].dataType,n[1].dims.length,4),d=ne("b_data",n[2].dataType,n[2].dims.length,4),m=ne("c_data",n[0].dataType,n[0].dims.length,4),g,b=(v,_,S)=>`select(${_}, ${v}, ${S})`;if(!l)g=o.setByOffset("global_idx",b(f.getByOffset("global_idx"),d.getByOffset("global_idx"),m.getByOffset("global_idx")));else{let v=(_,S,T="")=>{let E=`a_data[index_a${S}][component_a${S}]`,M=`b_data[index_b${S}][component_b${S}]`,A=`bool(c_data[index_c${S}] & (0xffu << (component_c${S} * 8)))`;return`
            let output_indices${S} = ${o.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offset_a${S} = ${f.broadcastedIndicesToOffset(`output_indices${S}`,o)};
            let offset_b${S} = ${d.broadcastedIndicesToOffset(`output_indices${S}`,o)};
            let offset_c${S} = ${m.broadcastedIndicesToOffset(`output_indices${S}`,o)};
            let index_a${S} = offset_a${S} / 4u;
            let index_b${S} = offset_b${S} / 4u;
            let index_c${S} = offset_c${S} / 4u;
            let component_a${S} = offset_a${S} % 4u;
            let component_b${S} = offset_b${S} % 4u;
            let component_c${S} = offset_c${S} % 4u;
            ${_}[${S}] = ${T}(${b(E,M,A)});
          `};u===9?g=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:g=`
            ${v("output_data[global_idx]",0)}
            ${v("output_data[global_idx]",1)}
            ${v("output_data[global_idx]",2)}
            ${v("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(m,f,d,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${g}
      }`},z_=e=>{let n=e[1].dims,r=e[2].dims,l=e[0].dims,u=e[1].dataType,o=!(P.areEqual(n,r)&&P.areEqual(r,l)),f=n,d=P.size(n);if(o){let g=ss.calcShape(ss.calcShape(n,r,!1),l,!1);if(!g)throw new Error("Can't perform where op on the given tensors");f=g,d=P.size(f)}let m=Math.ceil(d/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:g=>E_(g,e,f,o,u),getRunData:()=>({outputs:[{dims:f,dataType:u}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:m},...Te(l,n,r,f)]})}},Bx=e=>{e.compute(z_(e.inputs))}}),Ux,YE=fe(()=>{lE(),Mm(),sE(),uE(),oE(),fE(),cE(),gE(),vE(),bE(),_E(),wE(),$E(),xE(),SE(),TE(),EE(),zE(),AE(),CE(),OE(),kE(),ME(),RE(),NE(),nx(),DE(),IE(),BE(),UE(),qE(),km(),LE(),ux(),HE(),jE(),GE(),lx(),VE(),ir(),Rm(),WE(),Ux=new Map([["Abs",[kw]],["Acos",[Mw]],["Acosh",[Rw]],["Add",[p$]],["ArgMax",[zw,Vh]],["ArgMin",[Ew,Vh]],["Asin",[Nw]],["Asinh",[Dw]],["Atan",[Iw]],["Atanh",[Bw]],["Attention",[Aw]],["AveragePool",[yx,gx]],["BatchNormalization",[Cw]],["BiasAdd",[Ow]],["BiasSplitGelu",[d$]],["Cast",[qw,Uw]],["Ceil",[Hw]],["Clip",[Lw]],["Concat",[x$,S$]],["Conv",[Qh,Xh]],["ConvTranspose",[N$,R$]],["Cos",[jw]],["Cosh",[Gw]],["CumSum",[D$,I$]],["DepthToSpace",[B$,U$]],["DequantizeLinear",[Sx,Tx]],["Div",[h$]],["Einsum",[q$,L$]],["Elu",[Vw,Vu]],["Equal",[m$]],["Erf",[Ww]],["Exp",[Yw]],["Expand",[H$]],["FastGelu",[j$]],["Floor",[Fw]],["FusedConv",[Qh,Xh]],["Gather",[V$,G$]],["GatherElements",[Q$,X$]],["GatherBlockQuantized",[F$,K$]],["GatherND",[W$,Y$]],["Gelu",[Kw]],["Gemm",[P$,Z$]],["GlobalAveragePool",[bx,vx]],["GlobalMaxPool",[xx,$x]],["Greater",[b$]],["GreaterOrEqual",[w$]],["GridSample",[J$,ex]],["GroupQueryAttention",[ox]],["HardSigmoid",[a$,t$]],["InstanceNormalization",[fx]],["LayerNormalization",[cx]],["LeakyRelu",[Xw,Vu]],["Less",[_$]],["LessOrEqual",[$$]],["Log",[f$]],["MatMul",[dx]],["MatMulNBits",[px,hx]],["MaxPool",[_x,wx]],["Mul",[g$]],["MultiHeadAttention",[ax,tx]],["Neg",[Zw]],["Not",[Qw]],["Pad",[mx]],["Pow",[y$]],["QuickGelu",[c$,Vu]],["Range",[Ex]],["Reciprocal",[Pw]],["ReduceMin",[ww]],["ReduceMean",[gw]],["ReduceMax",[_w]],["ReduceSum",[xw]],["ReduceProd",[$w]],["ReduceL1",[yw]],["ReduceL2",[vw]],["ReduceLogSum",[Tw]],["ReduceLogSumExp",[bw]],["ReduceSumSquare",[Sw]],["Relu",[Jw]],["Resize",[Cx,Ox]],["RotaryEmbedding",[sx]],["ScatterND",[Ax,zx]],["Sigmoid",[e$]],["Sin",[n$]],["Sinh",[i$]],["Slice",[Mx,Rx]],["SkipLayerNormalization",[kx]],["Split",[ix,rx]],["Sqrt",[r$]],["Softmax",[Nx,Dx]],["Sub",[v$]],["Tan",[l$]],["Tanh",[s$]],["ThresholdedRelu",[o$,Vu]],["Tile",[Ix]],["Transpose",[iw,rw]],["Where",[Bx]]])}),qx,FE=fe(()=>{Ya(),pi(),De(),qx=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,n){this.repo.set(e,n)}run(e,n,r,l,u){Nn(e.programInfo.name);let o=this.backend.device,f=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let d=[];for(let g of n)d.push({binding:d.length,resource:{buffer:g.buffer}});for(let g of r)d.push({binding:d.length,resource:{buffer:g.buffer}});u&&d.push({binding:d.length,resource:u});let m=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:d,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let g={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:m,dispatchGroup:l};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(g)}f.setPipeline(e.computePipeline),f.setBindGroup(0,m),f.dispatchWorkgroups(...l),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),pn(e.programInfo.name)}dispose(){}build(e,n){Nn(e.name);let r=this.backend.device,l=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(g=>{r.features.has(g.feature)&&l.push(`enable ${g.extension};`)});let u=nw(n,this.backend.device.limits),o=e.getShaderSource(u),f=`${l.join(`
`)}
${u.additionalImplementations}
${o}`,d=r.createShaderModule({code:f,label:e.name});Xe("verbose",()=>`[WebGPU] ${e.name} shader code: ${f}`);let m=r.createComputePipeline({compute:{module:d,entryPoint:"main"},layout:"auto",label:e.name});return pn(e.name),{programInfo:e,computePipeline:m,uniformVariablesInfo:u.variablesInfo}}normalizeDispatchGroupSize(e){let n=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,l=typeof e=="number"?1:e.z||1,u=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(n<=u&&r<=u&&l<=u)return[n,r,l];let o=n*r*l,f=Math.ceil(Math.sqrt(o));if(f>u){if(f=Math.ceil(Math.cbrt(o)),f>u)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[f,f,f]}else return[f,f,1]}}}),Lx={};cs(Lx,{WebGpuBackend:()=>Hx});var A_,C_,O_,Hx,KE=fe(()=>{Ya(),ke(),pi(),P2(),iE(),YE(),FE(),A_=(e,n)=>{if(n.length!==e.length)throw new Error(`inputDependencies length ${n.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let l=0;l<e.length;++l){let u=e[l].dataType;switch(n[l]){case"none":{r.push("");break}case"type":{r.push(`${u}`);break}case"rank":{let o=e[l].dims.length;r.push(`${u};${o}`);break}case"dims":{let o=e[l].dims.join(",");r.push(`${u};${o}`);break}default:throw new Error(`unsupported input dependency: ${n[l]}`)}}return r.join("|")},C_=(e,n,r)=>{var u,o;let l=e.name;return(u=e.shaderCache)!=null&&u.hint&&(l+="["+e.shaderCache.hint+"]"),l+=":"+r+`:${A_(n,((o=e.shaderCache)==null?void 0:o.inputDependencies)??new Array(n.length).fill("dims"))}`,l},O_=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Hx=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,n){this.env=e;let r=[],l={requiredLimits:{maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxBufferSize:n.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},u=o=>n.features.has(o)&&r.push(o)&&!0;u("chromium-experimental-timestamp-query-inside-passes")||u("timestamp-query"),u("shader-f16"),u("subgroups"),this.device=await n.requestDevice(l),this.adapterInfo=new O_(n.info||await n.requestAdapterInfo()),this.gpuDataManager=tw(this),this.programManager=new qx(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,zm(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:n,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),n={};this.queryType==="at-passes"&&(n.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(n)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Nn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var l;let n=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let u=0;u<n.length/2;u++){let o=r[u],f=o.kernelId,d=this.kernels.get(f),m=d.kernelType,g=d.kernelName,b=o.programName,v=o.inputTensorViews,_=o.outputTensorViews,S=n[u*2],T=n[u*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=S);let E=Number(S-this.queryTimeBase),M=Number(T-this.queryTimeBase);if(!Number.isSafeInteger(E)||!Number.isSafeInteger(M))throw new RangeError("incorrect timestamp range");if((l=this.env.webgpu.profiling)!=null&&l.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:v.map(A=>({dims:A.dims,dataType:fi(A.dataType)})),outputsMetadata:_.map(A=>({dims:A.dims,dataType:fi(A.dataType)})),kernelId:f,kernelType:m,kernelName:g,programName:b,startTime:E,endTime:M});else{let A="";v.forEach((D,N)=>{A+=`input[${N}]: [${D.dims}] | ${fi(D.dataType)}, `});let z="";_.forEach((D,N)=>{z+=`output[${N}]: [${D.dims}] | ${fi(D.dataType)}, `}),console.log(`[profiling] kernel "${f}|${m}|${g}|${b}" ${A}${z}start time: ${E} ns, execution time: ${M-E} ns`)}uc("GPU",`${b}::${S}::${T}`)}e.unmap(),this.pendingQueries.delete(e)}),pn()}run(e,n,r,l,u,o){Nn(e.name);let f=[];for(let z=0;z<n.length;++z){let D=n[z].data;if(D===0)continue;let N=this.gpuDataManager.get(D);if(!N)throw new Error(`no GPU data for input: ${D}`);f.push(N)}let{outputs:d,dispatchGroup:m,programUniforms:g}=e.getRunData(n),b=r.length===0?d.map((z,D)=>D):r;if(b.length!==d.length)throw new Error(`Output size ${b.length} must be equal to ${d.length}.`);let v=[],_=[];for(let z=0;z<d.length;++z){if(!Number.isInteger(b[z])||b[z]<-3||b[z]>=o)throw new Error(`Invalid output index: ${b[z]}`);if(b[z]===-3)continue;let D=b[z]===-1,N=b[z]===-2,I=D||N?u(d[z].dataType,d[z].dims):l(b[z],d[z].dataType,d[z].dims);if(v.push(I),I.data===0)continue;let V=this.gpuDataManager.get(I.data);if(!V)throw new Error(`no GPU data for output: ${I.data}`);if(D&&this.temporaryData.push(V),N){let q=this.kernelPersistentData.get(this.currentKernelId);q||(q=[],this.kernelPersistentData.set(this.currentKernelId,q)),q.push(V)}_.push(V)}if(f.length!==n.length||_.length!==v.length){if(_.length===0)return pn(e.name),v;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let S;if(g){let z=0,D=[];g.forEach(q=>{let C=typeof q.data=="number"?[q.data]:q.data;if(C.length===0)return;let J=q.type===10?2:4,ue,pe;q.type===10?(pe=C.length>4?16:C.length>2?8:C.length*J,ue=C.length>4?16:J*C.length):(pe=C.length<=2?C.length*J:16,ue=16),z=Math.ceil(z/pe)*pe,D.push(z);let he=q.type===10?8:4;z+=C.length>4?Math.ceil(C.length/he)*ue:C.length*J});let N=16;z=Math.ceil(z/N)*N;let I=new ArrayBuffer(z);g.forEach((q,C)=>{let J=D[C],ue=typeof q.data=="number"?[q.data]:q.data;if(q.type===6)new Int32Array(I,J,ue.length).set(ue);else if(q.type===12)new Uint32Array(I,J,ue.length).set(ue);else if(q.type===10)new Uint16Array(I,J,ue.length).set(ue);else if(q.type===1)new Float32Array(I,J,ue.length).set(ue);else throw new Error(`Unsupported uniform type: ${fi(q.type)}`)});let V=this.gpuDataManager.create(z,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(V.buffer,0,I,0,z),this.gpuDataManager.release(V.id),S={offset:0,size:z,buffer:V.buffer}}let T=this.programManager.normalizeDispatchGroupSize(m),E=T[1]===1&&T[2]===1,M=C_(e,n,E),A=this.programManager.getArtifact(M);if(A||(A=this.programManager.build(e,T),this.programManager.setArtifact(M,A),Xe("info",()=>`[artifact] key: ${M}, programName: ${e.name}`)),g&&A.uniformVariablesInfo){if(g.length!==A.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${A.uniformVariablesInfo.length}, got ${g.length} in program "${A.programInfo.name}".`);for(let z=0;z<g.length;z++){let D=g[z],N=D.type,I=typeof D.data=="number"?1:D.data.length,[V,q]=A.uniformVariablesInfo[z];if(N!==V||I!==q)throw new Error(`Uniform variable ${z} mismatch: expect type ${V} with size ${q}, got type ${N} with size ${I} in program "${A.programInfo.name}".`)}}if(Xe("info",()=>`[ProgramManager] run "${e.name}" (key=${M}) with ${T[0]}x${T[1]}x${T[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let z={kernelId:this.currentKernelId,programName:A.programInfo.name,inputTensorViews:n,outputTensorViews:v};this.pendingKernels.push(z),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(z)}return this.programManager.run(A,f,_,T,S),pn(e.name),v}upload(e,n){this.gpuDataManager.upload(e,n)}memcpy(e,n){this.gpuDataManager.memcpy(e,n)}async download(e,n){await this.gpuDataManager.download(e,n)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,n,r,l){let u=Ux.get(e);if(!u)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:l,kernelEntry:u[0],attributes:[u[1],r]};this.kernels.set(n,o)}releaseKernel(e){let n=this.kernelPersistentData.get(e);if(n){for(let r of n)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,n,r){let l=this.kernels.get(e);if(!l)throw new Error(`kernel not created: ${e}`);let u=l.kernelType,o=l.kernelName,f=l.kernelEntry,d=l.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${u}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,d[0]&&(d[1]=d[0](d[1]),d[0]=void 0),Xe("info",()=>`[WebGPU] Start to run kernel "[${u}] ${o}"...`);let m=this.env.debug;this.temporaryData=[];try{return m&&this.device.pushErrorScope("validation"),f(n,d[1]),0}catch(g){return r.push(Promise.resolve(`[WebGPU] Kernel "[${u}] ${o}" failed. ${g}`)),1}finally{m&&r.push(this.device.popErrorScope().then(g=>g?`GPU validation error for kernel "[${u}] ${o}": ${g.message}`:null));for(let g of this.temporaryData)this.gpuDataManager.release(g.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,n,r,l){let u=this.sessionExternalDataMapping.get(e);u||(u=new Map,this.sessionExternalDataMapping.set(e,u));let o=u.get(n),f=this.gpuDataManager.registerExternalBuffer(r,l,o);return u.set(n,[f,r]),f}unregisterBuffers(e){let n=this.sessionExternalDataMapping.get(e);n&&(n.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let n=this.gpuDataManager.get(e);if(!n)throw new Error(`no GPU data for buffer: ${e}`);return n.buffer}createDownloader(e,n,r){return async()=>{let l=await Hh(this,e,n);return Am(l.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Xe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Xe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Xe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),n=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let l=0;l<r;l++){let u=this.getComputePassEncoder(),o=e[l];this.writeTimestamp(this.pendingDispatchNumber*2),u.setPipeline(o.computePipeline),u.setBindGroup(0,o.bindGroup),u.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(n[l]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),jx={};cs(jx,{init:()=>Gx});var Xf,k_,Gx,XE=fe(()=>{ke(),pi(),Ne(),nE(),Xf=class Vx{constructor(n,r,l,u){this.module=n,this.dataType=r,this.data=l,this.dims=u}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let n=P.size(this.dims);return n===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,n)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let n=P.size(this.dims);return n===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,n)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let n=P.size(this.dims);return n===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,n)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let n=P.size(this.dims);return n===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,n)}reshape(n){if(P.size(n)!==P.size(this.dims))throw new Error("Invalid new shape");return new Vx(this.module,this.dataType,this.data,n)}},k_=class{constructor(e,n,r){this.module=e,this.backend=n,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=n.adapterInfo;let l=e.PTR_SIZE,u=r/e.PTR_SIZE,o=l===4?"i32":"i64";this.opKernelContext=Number(e.getValue(l*u++,o));let f=Number(e.getValue(l*u++,o));this.outputCount=Number(e.getValue(l*u++,o)),this.customDataOffset=Number(e.getValue(l*u++,"*")),this.customDataSize=Number(e.getValue(l*u++,o));let d=[];for(let m=0;m<f;m++){let g=Number(e.getValue(l*u++,o)),b=Number(e.getValue(l*u++,"*")),v=Number(e.getValue(l*u++,o)),_=[];for(let S=0;S<v;S++)_.push(Number(e.getValue(l*u++,o)));d.push(new Xf(e,g,b,_))}this.inputs=d}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,n){var f;let r=((f=n==null?void 0:n.inputs)==null?void 0:f.map(d=>typeof d=="number"?this.inputs[d]:d))??this.inputs,l=(n==null?void 0:n.outputs)??[],u=(d,m,g)=>new Xf(this.module,m,this.output(d,g),g),o=(d,m)=>{let g=Ur(d,m);if(!g)throw new Error(`Unsupported data type: ${d}`);let b=g>0?this.backend.gpuDataManager.create(g).id:0;return new Xf(this.module,d,b,m)};return this.backend.run(e,r,l,u,o,this.outputCount)}output(e,n){let r=this.module.stackSave();try{let l=this.module.PTR_SIZE,u=l===4?"i32":"i64",o=this.module.stackAlloc((1+n.length)*l);this.module.setValue(o,n.length,u);for(let f=0;f<n.length;f++)this.module.setValue(o+l*(f+1),n[f],u);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(l){throw new Error(`Failed to generate kernel's output[${e}] with dims [${n}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${l}`)}finally{this.module.stackRestore(r)}}},Gx=async(e,n,r,l)=>{let u=n.jsepInit;if(!u)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=(KE(),Zu(Lx)).WebGpuBackend,f=new o;await f.initialize(r,l),u("webgpu",[f,d=>f.alloc(Number(d)),d=>f.free(d),(d,m,g,b=!1)=>{if(b)Xe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(d)}, dst=${Number(m)}, size=${Number(g)}`),f.memcpy(Number(d),Number(m));else{Xe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(d)}, gpuDataId=${Number(m)}, size=${Number(g)}`);let v=n.HEAPU8.subarray(Number(d>>>0),Number(d>>>0)+Number(g));f.upload(Number(m),v)}},async(d,m,g)=>{Xe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${d}, dataOffset=${m}, size=${g}`),await f.download(Number(d),()=>n.HEAPU8.subarray(Number(m)>>>0,Number(m+g)>>>0))},(d,m,g)=>f.createKernel(d,Number(m),g,n.UTF8ToString(n._JsepGetNodeName(Number(m)))),d=>f.releaseKernel(d),(d,m,g,b)=>{Xe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${g}, kernel=${d}, contextDataOffset=${m}`);let v=new k_(n,f,Number(m));return f.computeKernel(Number(d),v,b)},()=>f.captureBegin(),()=>f.captureEnd(),()=>f.replay()])}else{let o=new ew(r);u("webnn",[o,()=>o.reserveTensorId(),f=>o.releaseTensorId(f),async(f,d,m,g,b)=>o.ensureTensor(f,d,m,g,b),(f,d)=>{o.uploadTensor(f,d)},async(f,d)=>o.downloadTensor(f,d),(f,d)=>o.registerMLContext(f,d),!!r.trace])}}}),M_,qm,Lm,Pi,R_,zh,mc,Hm,jm,Ah,Gm,Vm,Wm,Wx=fe(()=>{Ya(),eE(),tE(),ke(),Fr(),xm(),K2(),M_=(e,n)=>{mt()._OrtInit(e,n)!==0&&nt("Can't initialize onnxruntime.")},qm=async e=>{M_(e.wasm.numThreads,fc(e.logLevel))},Lm=async(e,n)=>{var l,u;(u=(l=mt()).asyncInit)==null||u.call(l);let r=e.webgpu.adapter;if(n==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let f=e.webgpu.forceFallbackAdapter;if(f!==void 0&&typeof f!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${f}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:f}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(n==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let o=(XE(),Zu(jx)).init;n==="webgpu"&&await o("webgpu",mt(),e,r),n==="webnn"&&await o("webnn",mt(),e)}},Pi=new Map,R_=e=>{let n=mt(),r=n.stackSave();try{let l=n.PTR_SIZE,u=n.stackAlloc(2*l);n._OrtGetInputOutputCount(e,u,u+l)!==0&&nt("Can't get session input/output count.");let o=l===4?"i32":"i64";return[Number(n.getValue(u,o)),Number(n.getValue(u+l,o))]}finally{n.stackRestore(r)}},zh=(e,n)=>{let r=mt(),l=r.stackSave(),u=0;try{let o=r.PTR_SIZE,f=r.stackAlloc(2*o);r._OrtGetInputOutputMetadata(e,n,f,f+o)!==0&&nt("Can't get session input/output metadata.");let d=Number(r.getValue(f,"*"));u=Number(r.getValue(f+o,"*"));let m=r.HEAP32[u/4];if(m===0)return[d,0];let g=r.HEAPU32[u/4+1],b=[];for(let v=0;v<g;v++){let _=Number(r.getValue(u+8+v*o,"*"));b.push(_!==0?r.UTF8ToString(_):Number(r.getValue(u+8+(v+g)*o,"*")))}return[d,m,b]}finally{r.stackRestore(l),u!==0&&r._OrtFree(u)}},mc=e=>{let n=mt(),r=n._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return n.HEAPU8.set(e,r),[r,e.byteLength]},Hm=async(e,n)=>{var v,_,S,T;let r,l,u=mt();Array.isArray(e)?[r,l]=e:e.buffer===u.HEAPU8.buffer?[r,l]=[e.byteOffset,e.byteLength]:[r,l]=mc(e);let o=0,f=0,d=0,m=[],g=[],b=[];try{if([f,m]=await F2(n),(n==null?void 0:n.externalData)&&u.mountExternalData){let C=[];for(let J of n.externalData){let ue=typeof J=="string"?J:J.path;C.push(Em(typeof J=="string"?J:J.data).then(pe=>{u.mountExternalData(ue,pe)}))}await Promise.all(C)}for(let C of(n==null?void 0:n.executionProviders)??[])if((typeof C=="string"?C:C.name)==="webnn"){if(u.shouldTransferToMLTensor=!1,typeof C!="string"){let J=C,ue=J==null?void 0:J.context,pe=J==null?void 0:J.gpuDevice,he=J==null?void 0:J.deviceType,ge=J==null?void 0:J.powerPreference;ue?u.currentContext=ue:pe?u.currentContext=await u.webnnCreateMLContext(pe):u.currentContext=await u.webnnCreateMLContext({deviceType:he,powerPreference:ge})}else u.currentContext=await u.webnnCreateMLContext();break}o=await u._OrtCreateSession(r,l,f),(v=u.webgpuOnCreateSession)==null||v.call(u,o),o===0&&nt("Can't create a session."),(_=u.jsepOnCreateSession)==null||_.call(u),u.currentContext&&(u.webnnRegisterMLContext(o,u.currentContext),u.currentContext=void 0,u.shouldTransferToMLTensor=!0);let[E,M]=R_(o),A=!!(n!=null&&n.enableGraphCapture),z=[],D=[],N=[],I=[],V=[];for(let C=0;C<E;C++){let[J,ue,pe]=zh(o,C);J===0&&nt("Can't get an input name."),g.push(J);let he=u.UTF8ToString(J);z.push(he),N.push(ue===0?{name:he,isTensor:!1}:{name:he,isTensor:!0,type:fi(ue),shape:pe})}for(let C=0;C<M;C++){let[J,ue,pe]=zh(o,C+E);J===0&&nt("Can't get an output name."),b.push(J);let he=u.UTF8ToString(J);D.push(he),I.push(ue===0?{name:he,isTensor:!1}:{name:he,isTensor:!0,type:fi(ue),shape:pe});{if(A&&(n==null?void 0:n.preferredOutputLocation)===void 0){V.push("gpu-buffer");continue}let ge=typeof(n==null?void 0:n.preferredOutputLocation)=="string"?n.preferredOutputLocation:((S=n==null?void 0:n.preferredOutputLocation)==null?void 0:S[he])??"cpu",X=u.webnnIsGraphOutput;if(ge==="cpu"&&X&&X(o,he)){V.push("ml-tensor-cpu-output");continue}if(ge!=="cpu"&&ge!=="cpu-pinned"&&ge!=="gpu-buffer"&&ge!=="ml-tensor")throw new Error(`Not supported preferred output location: ${ge}.`);if(A&&ge!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${ge}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);V.push(ge)}}let q=null;return V.some(C=>C==="gpu-buffer"||C==="ml-tensor"||C==="ml-tensor-cpu-output")&&(d=u._OrtCreateBinding(o),d===0&&nt("Can't create IO binding."),q={handle:d,outputPreferredLocations:V,outputPreferredLocationsEncoded:V.map(C=>C==="ml-tensor-cpu-output"?"ml-tensor":C).map(C=>qh(C))}),Pi.set(o,[o,g,b,q,A,!1]),[o,z,D,N,I]}catch(E){throw g.forEach(M=>u._OrtFree(M)),b.forEach(M=>u._OrtFree(M)),d!==0&&u._OrtReleaseBinding(d)!==0&&nt("Can't release IO binding."),o!==0&&u._OrtReleaseSession(o)!==0&&nt("Can't release session."),E}finally{u._free(r),f!==0&&u._OrtReleaseSessionOptions(f)!==0&&nt("Can't release session options."),m.forEach(E=>u._free(E)),(T=u.unmountExternalData)==null||T.call(u)}},jm=e=>{var m,g,b;let n=mt(),r=Pi.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[l,u,o,f,d]=r;f&&(d&&n._OrtClearBoundOutputs(f.handle)!==0&&nt("Can't clear bound outputs."),n._OrtReleaseBinding(f.handle)!==0&&nt("Can't release IO binding.")),(m=n.jsepOnReleaseSession)==null||m.call(n,e),(g=n.webnnOnReleaseSession)==null||g.call(n,e),(b=n.webgpuOnReleaseSession)==null||b.call(n,e),u.forEach(v=>n._OrtFree(v)),o.forEach(v=>n._OrtFree(v)),n._OrtReleaseSession(l)!==0&&nt("Can't release session."),Pi.delete(e)},Ah=async(e,n,r,l,u,o,f=!1)=>{if(!e){n.push(0);return}let d=mt(),m=d.PTR_SIZE,g=e[0],b=e[1],v=e[3],_=v,S,T;if(g==="string"&&(v==="gpu-buffer"||v==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(f&&v!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(v==="gpu-buffer"){let A=e[2].gpuBuffer;T=Ur(Br(g),b);{let z=d.jsepRegisterBuffer;if(!z)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');S=z(l,o,A,T)}}else if(v==="ml-tensor"){let A=e[2].mlTensor;T=Ur(Br(g),b);let z=d.webnnRegisterMLTensor;if(!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');S=z(l,A,Br(g),b)}else{let A=e[2];if(Array.isArray(A)){T=m*A.length,S=d._malloc(T),r.push(S);for(let z=0;z<A.length;z++){if(typeof A[z]!="string")throw new TypeError(`tensor data at index ${z} is not a string`);d.setValue(S+z*m,fn(A[z],r),"*")}}else{let z=d.webnnIsGraphInput,D=d.webnnIsGraphOutput;if(g!=="string"&&z&&D){let N=d.UTF8ToString(u);if(z(l,N)||D(l,N)){let I=Br(g);T=Ur(I,b),_="ml-tensor";let V=d.webnnCreateTemporaryTensor,q=d.webnnUploadTensor;if(!V||!q)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let C=await V(l,I,b);q(C,new Uint8Array(A.buffer,A.byteOffset,A.byteLength)),S=C}else T=A.byteLength,S=d._malloc(T),r.push(S),d.HEAPU8.set(new Uint8Array(A.buffer,A.byteOffset,T),S)}else T=A.byteLength,S=d._malloc(T),r.push(S),d.HEAPU8.set(new Uint8Array(A.buffer,A.byteOffset,T),S)}}let E=d.stackSave(),M=d.stackAlloc(4*b.length);try{b.forEach((z,D)=>d.setValue(M+D*m,z,m===4?"i32":"i64"));let A=d._OrtCreateTensor(Br(g),S,T,M,b.length,qh(_));A===0&&nt(`Can't create tensor for input/output. session=${l}, index=${o}.`),n.push(A)}finally{d.stackRestore(E)}},Gm=async(e,n,r,l,u,o)=>{var he,ge,X,ye;let f=mt(),d=f.PTR_SIZE,m=Pi.get(e);if(!m)throw new Error(`cannot run inference. invalid session id: ${e}`);let g=m[0],b=m[1],v=m[2],_=m[3],S=m[4],T=m[5],E=n.length,M=l.length,A=0,z=[],D=[],N=[],I=[],V=[],q=f.stackSave(),C=f.stackAlloc(E*d),J=f.stackAlloc(E*d),ue=f.stackAlloc(M*d),pe=f.stackAlloc(M*d);try{[A,z]=Y2(o),Lr("wasm prepareInputOutputTensor");for(let le=0;le<E;le++)await Ah(r[le],D,I,e,b[n[le]],n[le],S);for(let le=0;le<M;le++)await Ah(u[le],N,I,e,v[l[le]],E+l[le],S);Hr("wasm prepareInputOutputTensor");for(let le=0;le<E;le++)f.setValue(C+le*d,D[le],"*"),f.setValue(J+le*d,b[n[le]],"*");for(let le=0;le<M;le++)f.setValue(ue+le*d,N[le],"*"),f.setValue(pe+le*d,v[l[le]],"*");if(_&&!T){let{handle:le,outputPreferredLocations:we,outputPreferredLocationsEncoded:R}=_;if(b.length!==E)throw new Error(`input count from feeds (${E}) is expected to be always equal to model's input count (${b.length}).`);Lr("wasm bindInputsOutputs");for(let j=0;j<E;j++){let Z=n[j];await f._OrtBindInput(le,b[Z],D[j])!==0&&nt(`Can't bind input[${j}] for session=${e}.`)}for(let j=0;j<M;j++){let Z=l[j];(he=u[j])!=null&&he[3]?(V.push(N[j]),f._OrtBindOutput(le,v[Z],N[j],0)!==0&&nt(`Can't bind pre-allocated output[${j}] for session=${e}.`)):f._OrtBindOutput(le,v[Z],0,R[Z])!==0&&nt(`Can't bind output[${j}] to ${we[j]} for session=${e}.`)}Hr("wasm bindInputsOutputs"),Pi.set(e,[g,b,v,_,S,!0])}(ge=f.jsepOnRunStart)==null||ge.call(f,g),(X=f.webnnOnRunStart)==null||X.call(f,g);let H;_?H=await f._OrtRunWithBinding(g,_.handle,M,ue,A):H=await f._OrtRun(g,J,C,E,pe,M,ue,A),H!==0&&nt("failed to call OrtRun().");let te=[],me=[];Lr("wasm ProcessOutputTensor");for(let le=0;le<M;le++){let we=Number(f.getValue(ue+le*d,"*"));if(we===N[le]||V.includes(N[le])){te.push(u[le]),we!==N[le]&&f._OrtReleaseTensor(we)!==0&&nt("Can't release tensor.");continue}let R=f.stackSave(),j=f.stackAlloc(4*d),Z=!1,G,oe=0;try{f._OrtGetTensorData(we,j,j+d,j+2*d,j+3*d)!==0&&nt(`Can't access output tensor data on index ${le}.`);let ve=d===4?"i32":"i64",_e=Number(f.getValue(j,ve));oe=f.getValue(j+d,"*");let Ge=f.getValue(j+d*2,"*"),Be=Number(f.getValue(j+d*3,ve)),bt=[];for(let it=0;it<Be;it++)bt.push(Number(f.getValue(Ge+it*d,ve)));f._OrtFree(Ge)!==0&&nt("Can't free memory for tensor dims.");let st=bt.reduce((it,ze)=>it*ze,1);G=fi(_e);let Pt=_==null?void 0:_.outputPreferredLocations[l[le]];if(G==="string"){if(Pt==="gpu-buffer"||Pt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let it=[];for(let ze=0;ze<st;ze++){let At=f.getValue(oe+ze*d,"*"),mn=f.getValue(oe+(ze+1)*d,"*"),rr=ze===st-1?void 0:mn-At;it.push(f.UTF8ToString(At,rr))}te.push([G,bt,it,"cpu"])}else if(Pt==="gpu-buffer"&&st>0){let it=f.jsepGetBuffer;if(!it)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ze=it(oe),At=Ur(_e,st);if(At===void 0||!Sm(G))throw new Error(`Unsupported data type: ${G}`);Z=!0,te.push([G,bt,{gpuBuffer:ze,download:f.jsepCreateDownloader(ze,At,G),dispose:()=>{f._OrtReleaseTensor(we)!==0&&nt("Can't release tensor.")}},"gpu-buffer"])}else if(Pt==="ml-tensor"&&st>0){let it=f.webnnEnsureTensor,ze=f.webnnIsGraphInputOutputTypeSupported;if(!it||!ze)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ur(_e,st)===void 0||!Tm(G))throw new Error(`Unsupported data type: ${G}`);if(!ze(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let At=await it(e,oe,_e,bt,!1);Z=!0,te.push([G,bt,{mlTensor:At,download:f.webnnCreateMLTensorDownloader(oe,G),dispose:()=>{f.webnnReleaseTensorId(oe),f._OrtReleaseTensor(we)}},"ml-tensor"])}else if(Pt==="ml-tensor-cpu-output"&&st>0){let it=f.webnnCreateMLTensorDownloader(oe,G)(),ze=te.length;Z=!0,me.push((async()=>{let At=[ze,await it];return f.webnnReleaseTensorId(oe),f._OrtReleaseTensor(we),At})()),te.push([G,bt,[],"cpu"])}else{let it=wc(G),ze=new it(st);new Uint8Array(ze.buffer,ze.byteOffset,ze.byteLength).set(f.HEAPU8.subarray(oe,oe+ze.byteLength)),te.push([G,bt,ze,"cpu"])}}finally{f.stackRestore(R),G==="string"&&oe&&f._free(oe),Z||f._OrtReleaseTensor(we)}}_&&!S&&(f._OrtClearBoundOutputs(_.handle)!==0&&nt("Can't clear bound outputs."),Pi.set(e,[g,b,v,_,S,!1]));for(let[le,we]of await Promise.all(me))te[le][2]=we;return Hr("wasm ProcessOutputTensor"),te}finally{(ye=f.webnnOnRunEnd)==null||ye.call(f,g),f.stackRestore(q),D.forEach(H=>f._OrtReleaseTensor(H)),N.forEach(H=>f._OrtReleaseTensor(H)),I.forEach(H=>f._free(H)),A!==0&&f._OrtReleaseRunOptions(A),z.forEach(H=>f._free(H))}},Vm=e=>{let n=mt(),r=Pi.get(e);if(!r)throw new Error("invalid session id");let l=r[0],u=n._OrtEndProfiling(l);u===0&&nt("Can't get an profile file name."),n._OrtFree(u)},Wm=e=>{let n=[];for(let r of e){let l=r[2];!Array.isArray(l)&&"buffer"in l&&n.push(l.buffer)}return n}}),Ji,xa,es,Lu,Hu,Qf,Ch,Zf,Nr,Dr,N_,Yx,Fx,Kx,Xx,Qx,Zx,Px,Jx=fe(()=>{Ya(),Wx(),Fr(),wm(),Ji=()=>!!ht.wasm.proxy&&typeof document<"u",es=!1,Lu=!1,Hu=!1,Zf=new Map,Nr=(e,n)=>{let r=Zf.get(e);r?r.push(n):Zf.set(e,[n])},Dr=()=>{if(es||!Lu||Hu||!xa)throw new Error("worker not ready")},N_=e=>{switch(e.data.type){case"init-wasm":es=!1,e.data.err?(Hu=!0,Ch[1](e.data.err)):(Lu=!0,Ch[0]()),Qf&&(URL.revokeObjectURL(Qf),Qf=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let n=Zf.get(e.data.type);e.data.err?n.shift()[1](e.data.err):n.shift()[0](e.data.out);break}}},Yx=async()=>{if(!Lu){if(es)throw new Error("multiple calls to 'initWasm()' detected.");if(Hu)throw new Error("previous call to 'initWasm()' failed.");if(es=!0,Ji())return new Promise((e,n)=>{xa==null||xa.terminate(),V2().then(([r,l])=>{try{xa=l,xa.onerror=o=>n(o),xa.onmessage=N_,Ch=[e,n];let u={type:"init-wasm",in:ht};!u.in.wasm.wasmPaths&&(r||Uh)&&(u.in.wasm.wasmPaths={wasm:new URL("/bluecells/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm",import.meta.url).href}),xa.postMessage(u),Qf=r}catch(u){n(u)}},n)});try{await $m(ht.wasm),await qm(ht),Lu=!0}catch(e){throw Hu=!0,e}finally{es=!1}}},Fx=async e=>{if(Ji())return Dr(),new Promise((n,r)=>{Nr("init-ep",[n,r]);let l={type:"init-ep",in:{epName:e,env:ht}};xa.postMessage(l)});await Lm(ht,e)},Kx=async e=>Ji()?(Dr(),new Promise((n,r)=>{Nr("copy-from",[n,r]);let l={type:"copy-from",in:{buffer:e}};xa.postMessage(l,[e.buffer])})):mc(e),Xx=async(e,n)=>{if(Ji()){if(n!=null&&n.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Dr(),new Promise((r,l)=>{Nr("create",[r,l]);let u={type:"create",in:{model:e,options:{...n}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),xa.postMessage(u,o)})}else return Hm(e,n)},Qx=async e=>{if(Ji())return Dr(),new Promise((n,r)=>{Nr("release",[n,r]);let l={type:"release",in:e};xa.postMessage(l)});jm(e)},Zx=async(e,n,r,l,u,o)=>{if(Ji()){if(r.some(f=>f[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(u.some(f=>f))throw new Error("pre-allocated output tensor is not supported for proxy.");return Dr(),new Promise((f,d)=>{Nr("run",[f,d]);let m=r,g={type:"run",in:{sessionId:e,inputIndices:n,inputs:m,outputIndices:l,options:o}};xa.postMessage(g,Wm(m))})}else return Gm(e,n,r,l,u,o)},Px=async e=>{if(Ji())return Dr(),new Promise((n,r)=>{Nr("end-profiling",[n,r]);let l={type:"end-profiling",in:e};xa.postMessage(l)});Vm(e)}}),Oh,D_,e3,QE=fe(()=>{Ya(),Jx(),ke(),_m(),K2(),Oh=(e,n)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${n()}`)}},D_=e=>{switch(e[3]){case"cpu":return new cn(e[0],e[2],e[1]);case"gpu-buffer":{let n=e[0];if(!Sm(n))throw new Error(`not supported data type: ${n} for deserializing GPU tensor`);let{gpuBuffer:r,download:l,dispose:u}=e[2];return cn.fromGpuBuffer(r,{dataType:n,dims:e[1],download:l,dispose:u})}case"ml-tensor":{let n=e[0];if(!Tm(n))throw new Error(`not supported data type: ${n} for deserializing MLTensor tensor`);let{mlTensor:r,download:l,dispose:u}=e[2];return cn.fromMLTensor(r,{dataType:n,dims:e[1],download:l,dispose:u})}default:throw new Error(`invalid data location: ${e[3]}`)}},e3=class{async fetchModelAndCopyToWasmMemory(e){return Kx(await Em(e))}async loadModel(e,n){Nn();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Xx(r,n),pn()}async dispose(){return Qx(this.sessionId)}async run(e,n,r){Nn();let l=[],u=[];Object.entries(e).forEach(v=>{let _=v[0],S=v[1],T=this.inputNames.indexOf(_);if(T===-1)throw new Error(`invalid input '${_}'`);l.push(S),u.push(T)});let o=[],f=[];Object.entries(n).forEach(v=>{let _=v[0],S=v[1],T=this.outputNames.indexOf(_);if(T===-1)throw new Error(`invalid output '${_}'`);o.push(S),f.push(T)});let d=l.map((v,_)=>Oh(v,()=>`input "${this.inputNames[u[_]]}"`)),m=o.map((v,_)=>v?Oh(v,()=>`output "${this.outputNames[f[_]]}"`):null),g=await Zx(this.sessionId,u,d,f,m,r),b={};for(let v=0;v<g.length;v++)b[this.outputNames[f[v]]]=o[v]??D_(g[v]);return pn(),b}startProfiling(){}endProfiling(){Px(this.sessionId)}}}),t3={};cs(t3,{OnnxruntimeWebAssemblyBackend:()=>Jh,initializeFlags:()=>Ph,wasmBackend:()=>a3});var Ph,Jh,a3,ZE=fe(()=>{Ya(),Jx(),QE(),Ph=()=>{(typeof ht.wasm.initTimeout!="number"||ht.wasm.initTimeout<0)&&(ht.wasm.initTimeout=0);let e=ht.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ht.wasm.simd=!1),typeof ht.wasm.proxy!="boolean"&&(ht.wasm.proxy=!1),typeof ht.wasm.trace!="boolean"&&(ht.wasm.trace=!1),typeof ht.wasm.numThreads!="number"||!Number.isInteger(ht.wasm.numThreads)||ht.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ht.wasm.numThreads=1;else{let n=typeof navigator>"u"?IT("node:os").cpus().length:navigator.hardwareConcurrency;ht.wasm.numThreads=Math.min(4,Math.ceil((n||1)/2))}},Jh=class{async init(e){Ph(),await Yx(),await Fx(e)}async createInferenceSessionHandler(e,n){let r=new e3;return await r.loadModel(e,n),r}},a3=new Jh});Ya();Ya();Ya();var PE="1.26.0";{let e=(ZE(),Zu(t3)).wasmBackend;ns("webgpu",e,5),ns("webnn",e,5),ns("cpu",e,10),ns("wasm",e,10)}Object.defineProperty(ht.versions,"web",{value:PE,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I_=["live_cell","dead_cell"],Pf=640,B_=["#5eead4","#f97316","#f43f5e","#38bdf8","#a78bfa","#fbbf24"];let U_=!1;function JE(){U_||(ht.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/",ht.wasm.numThreads=1,U_=!0)}async function e4(e){return JE(),bm.create(e,{executionProviders:["wasm"],graphOptimizationLevel:"all"})}async function q_(e,n,r,l){const{tensor:u,scale:o,padX:f,padY:d,sourceWidth:m,sourceHeight:g}=await a4(n,r,l.modelInputSize),b={};b[e.inputNames[0]]=u;const _=(await e.run(b))[e.outputNames[0]],S=n4(_,l.confidenceThreshold);return r4(S,l.iouThreshold).map(E=>({...E,x:Jf((E.x-f)/o,0,m),y:Jf((E.y-d)/o,0,g),width:Jf(E.width/o,0,m),height:Jf(E.height/o,0,g)}))}function t4(e,n){const r=n.getBoundingClientRect(),l=window.devicePixelRatio||1,u=Math.max(1,Math.round(r.width*l)),o=Math.max(1,Math.round(r.height*l));(e.width!==u||e.height!==o)&&(e.width=u,e.height=o,e.style.width=`${r.width}px`,e.style.height=`${r.height}px`)}async function a4(e,n,r){const l=e.videoWidth||e.naturalWidth||e.width,u=e.videoHeight||e.naturalHeight||e.height,o=n.getContext("2d",{willReadFrequently:!0});if(!l||!u||!o)throw new Error("Video is not ready for preprocessing.");const f=Math.min(r/l,r/u),d=Math.round(l*f),m=Math.round(u*f),g=Math.floor((r-d)/2),b=Math.floor((r-m)/2);o.fillStyle="#111827",o.fillRect(0,0,r,r),o.drawImage(e,0,0,l,u,g,b,d,m);const v=o.getImageData(0,0,r,r),_=new Float32Array(3*r*r);for(let S=0;S<v.data.length;S+=4){const T=S/4,E=v.data[S]/255,M=v.data[S+1]/255,A=v.data[S+2]/255;_[T]=E,_[T+r*r]=M,_[T+r*r*2]=A}return{tensor:new cn("float32",_,[1,3,r,r]),scale:f,padX:g,padY:b,sourceWidth:l,sourceHeight:u}}function n4(e,n){const{data:r,dims:l}=e,u=[],o=I_.length;let f=0,d="channel-first";l.length===3&&l[1]===4+o?f=l[2]:l.length===3&&l[2]===4+o?(f=l[1],d="box-first"):f=Math.floor(r.length/(4+o));for(let m=0;m<f;m+=1){const g=i4(r,m,f,d,o),{cx:b,cy:v,width:_,height:S,score:T,classIndex:E}=g;T<n||u.push({x:b-_/2,y:v-S/2,width:_,height:S,score:T,classIndex:E,label:I_[E]||`class_${E}`,color:B_[E%B_.length]})}return u}function i4(e,n,r,l,u){let o,f,d,m,g=0,b=0;if(l==="box-first"){const v=n*(4+u);o=e[v],f=e[v+1],d=e[v+2],m=e[v+3];for(let _=0;_<u;_+=1){const S=e[v+4+_];S>g&&(g=S,b=_)}}else{o=e[n],f=e[n+r],d=e[n+r*2],m=e[n+r*3];for(let v=0;v<u;v+=1){const _=e[n+r*(4+v)];_>g&&(g=_,b=v)}}return{cx:o,cy:f,width:d,height:m,score:g,classIndex:b}}function r4(e,n){const r=[...e].sort((u,o)=>o.score-u.score),l=[];for(;r.length>0;){const u=r.shift();if(!u)break;l.push(u);for(let o=r.length-1;o>=0;o-=1)l4(u,r[o])>n&&r.splice(o,1)}return l}function l4(e,n){const r=e.x,l=e.y,u=e.x+e.width,o=e.y+e.height,f=n.x,d=n.y,m=n.x+n.width,g=n.y+n.height,b=Math.max(r,f),v=Math.max(l,d),_=Math.min(u,m),S=Math.min(o,g),T=Math.max(0,_-b),E=Math.max(0,S-v),M=T*E,A=e.width*e.height+n.width*n.height-M;return A<=0?0:M/A}function Jf(e,n,r){return Math.min(Math.max(e,n),r)}const s4="models/yolov8n.onnx",u4=.35,L_=.45,o4=120,gc={0:{label:" ",color:"#22c55e"},1:{label:" ",color:"#ef4444"}};function ec(e){return e instanceof Error?e.message:String(e)}function f4(e){if(typeof e.classId=="number"&&gc[e.classId])return e.classId;const n=(e.label||"").toLowerCase();return n.includes("live")?0:n.includes("dead")?1:-1}function c4(){const e=ft.useRef(null),n=ft.useRef(null),r=ft.useRef(null),l=ft.useRef(null),u=ft.useRef(null),o=ft.useRef(null),f=ft.useRef(0),d=ft.useRef(!1),m=ft.useRef(0),g=ft.useRef(""),[b,v]=ft.useState("Loading model and preparing camera."),[_,S]=ft.useState(!1),[T,E]=ft.useState(!1),[M,A]=ft.useState("webcam"),[z,D]=ft.useState(""),[N,I]=ft.useState(!1),[V,q]=ft.useState(0),[C,J]=ft.useState(0),[ue,pe]=ft.useState(0),[he,ge]=ft.useState(""),[X,ye]=ft.useState(u4),H=C+ue,te=H>0?C/H*100:0;ft.useEffect(()=>{let G=!1;async function oe(){try{v("Loading trypan blue cell detection model...");const ve=await e4(s4);if(G)return;u.current=ve,S(!0),v("Model ready. Requesting webcam permission...")}catch(ve){G||(ge(ec(ve)),v("Model loading failed."))}}return oe(),()=>{G=!0}},[]),ft.useEffect(()=>{let G=!1;async function oe(){if(!(!_||M!=="webcam"))try{const ve=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}},audio:!1});if(G){ve.getTracks().forEach(Ge=>Ge.stop());return}o.current=ve;const _e=e.current;if(!_e)return;_e.srcObject=ve,await _e.play(),E(!0),I(!1),v("Camera live. Counting cells in real time.")}catch(ve){G||(ge(ec(ve)),v("Camera access failed."))}}return oe(),()=>{G=!0;const ve=o.current;ve&&ve.getTracks().forEach(_e=>_e.stop()),f.current&&cancelAnimationFrame(f.current)}},[_,M]),ft.useEffect(()=>{M!=="webcam"&&(T||v("Upload an image to count cells."))},[M,T]);function me(G,oe){const ve=r.current;if(!ve)return;t4(ve,oe);const _e=ve.getContext("2d");_e&&(_e.clearRect(0,0,ve.width,ve.height),d4(_e,oe,ve,G));let Ge=0,Be=0;for(const bt of G){const st=f4(bt);st===0?Ge+=1:st===1&&(Be+=1)}J(Ge),pe(Be)}ft.useEffect(()=>{let G=!1;async function oe(ve){if(G)return;const _e=e.current,Ge=n.current,Be=r.current,bt=l.current,st=u.current,Pt=M==="webcam"?_e:Ge;if(Pt&&Be&&bt&&st&&(M==="webcam"?T:N)&&(M!=="webcam"||_e.readyState>=HTMLMediaElement.HAVE_ENOUGH_DATA)&&!d.current&&ve-m.current>=o4){d.current=!0;try{const ze=performance.now(),At=await q_(st,Pt,bt,{confidenceThreshold:X,iouThreshold:L_,modelInputSize:Pf});if(G)return;me(At,Pt);const mn=performance.now()-ze;q(mn),v(`${M==="webcam"?"Camera live":"Image analyzed"}. ${At.length} cell${At.length===1?"":"s"} detected.`),m.current=ve}catch(ze){G||(ge(ec(ze)),v("Inference failed."))}finally{d.current=!1}}f.current=requestAnimationFrame(oe)}return M==="webcam"&&T&&(f.current=requestAnimationFrame(oe)),()=>{G=!0,f.current&&cancelAnimationFrame(f.current)}},[T,N,M,X]),ft.useEffect(()=>()=>{g.current&&URL.revokeObjectURL(g.current)},[]),ft.useEffect(()=>{if(M!=="upload"||!N||!n.current||!u.current)return;let G=!1;async function oe(){try{const ve=r.current,_e=l.current,Ge=n.current,Be=u.current;if(!ve||!_e||!Ge||!Be)return;const bt=performance.now(),st=await q_(Be,Ge,_e,{confidenceThreshold:X,iouThreshold:L_,modelInputSize:Pf});if(G)return;me(st,Ge),q(performance.now()-bt),v(`Image analyzed. ${st.length} cell${st.length===1?"":"s"} detected.`)}catch(ve){G||(ge(ec(ve)),v("Image inference failed."))}}return oe(),()=>{G=!0}},[N,M,X]);function le(){const G=o.current;G&&(G.getTracks().forEach(ve=>ve.stop()),o.current=null);const oe=e.current;oe&&(oe.srcObject=null),E(!1)}function we(){const G=r.current,oe=G==null?void 0:G.getContext("2d");G&&oe&&oe.clearRect(0,0,G.width,G.height),J(0),pe(0)}function R(G){ge(""),A(G),v("Loading webcam stream..."),I(!1),we(),g.current&&(URL.revokeObjectURL(g.current),g.current=""),D("")}function j(G){var _e;const oe=(_e=G.target.files)==null?void 0:_e[0];if(!oe)return;g.current&&URL.revokeObjectURL(g.current);const ve=URL.createObjectURL(oe);g.current=ve,ge(""),D(ve),A("upload"),v(`Loaded ${oe.name}. Counting cells...`),I(!1),le(),we()}function Z(G){const oe=G.currentTarget;M!=="upload"||!oe.src||I(!0)}return Ae.jsxs("article",{className:"stage-card",children:[Ae.jsxs("div",{className:"stage-status-row",children:[Ae.jsx("span",{className:`status-pill ${_&&(T||N)?"status-pill--ready":""}`,children:b}),Ae.jsx("span",{className:"status-meta",children:"Trypan Blue Cell Counter · ONNX Runtime Web · YOLOv8"})]}),Ae.jsxs("div",{className:"mode-switcher",role:"tablist","aria-label":"Input source",children:[Ae.jsx("button",{type:"button",className:M==="webcam"?"mode-switcher__button mode-switcher__button--active":"mode-switcher__button",onClick:()=>R("webcam"),children:"Webcam"}),Ae.jsx("label",{className:"upload-button",htmlFor:"image-upload",children:"Choose image"}),Ae.jsx("input",{id:"image-upload",className:"upload-input",type:"file",accept:"image/*",onChange:j})]}),Ae.jsxs("div",{className:"confidence-control",children:[Ae.jsxs("label",{htmlFor:"confidence-slider",children:["Confidence Threshold: ",(X*100).toFixed(0),"%"]}),Ae.jsx("input",{id:"confidence-slider",type:"range",min:"0.01",max:"1",step:"0.01",value:X,onChange:G=>ye(parseFloat(G.target.value)),className:"confidence-slider"})]}),Ae.jsxs("div",{className:"video-frame",children:[Ae.jsx("video",{ref:e,className:M==="webcam"?"camera-feed":"camera-feed camera-feed--hidden",autoPlay:!0,playsInline:!0,muted:!0}),Ae.jsx("img",{ref:n,className:M==="upload"?"camera-feed":"camera-feed camera-feed--hidden",src:z,alt:"Uploaded preview",onLoad:Z}),Ae.jsx("canvas",{ref:r,className:"overlay"}),Ae.jsx("canvas",{ref:l,className:"input-canvas",width:Pf,height:Pf}),Ae.jsxs("div",{className:"hud",children:[Ae.jsxs("div",{children:[Ae.jsx("span",{className:"hud-label",children:"Live cells"}),Ae.jsx("strong",{style:{color:gc[0].color},children:C})]}),Ae.jsxs("div",{children:[Ae.jsx("span",{className:"hud-label",children:"Dead cells"}),Ae.jsx("strong",{style:{color:gc[1].color},children:ue})]}),Ae.jsxs("div",{children:[Ae.jsx("span",{className:"hud-label",children:"Total"}),Ae.jsx("strong",{children:H})]}),Ae.jsxs("div",{children:[Ae.jsx("span",{className:"hud-label",children:"Viability"}),Ae.jsxs("strong",{children:[te.toFixed(1),"%"]})]}),Ae.jsxs("div",{children:[Ae.jsx("span",{className:"hud-label",children:"Latency"}),Ae.jsxs("strong",{children:[V.toFixed(0)," ms"]})]})]})]})]})}function d4(e,n,r,l){var m;const u=n.videoWidth||n.naturalWidth||n.width||1,o=n.videoHeight||n.naturalHeight||n.height||1,f=r.width/u,d=r.height/o;e.lineWidth=Math.max(2,Math.round(Math.min(r.width,r.height)/320)),e.font='600 14px "Space Grotesk", sans-serif';for(const g of l){const b=g.x*f,v=g.y*d,_=g.width*f,S=g.height*d,T=typeof g.classId=="number"?g.classId:(m=g.label)!=null&&m.toLowerCase().includes("dead")?1:0,M=(gc[T]||{label:g.label||"Cell",color:g.color||"#94a3b8"}).color;e.strokeStyle=M,e.strokeRect(b,v,_,S)}}/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function em(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,l=Array(n);r<n;r++)l[r]=e[r];return l}function p4(e){if(Array.isArray(e))return e}function h4(e){if(Array.isArray(e))return em(e)}function m4(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g4(e,n){for(var r=0;r<n.length;r++){var l=n[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,n3(l.key),l)}}function y4(e,n,r){return n&&g4(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rc(e,n){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=Ym(e))||n){r&&(e=r);var l=0,u=function(){};return{s:u,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(m){throw m},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,f=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var m=r.next();return f=m.done,m},e:function(m){d=!0,o=m},f:function(){try{f||r.return==null||r.return()}finally{if(d)throw o}}}}function He(e,n,r){return(n=n3(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function v4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function b4(e,n){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var l,u,o,f,d=[],m=!0,g=!1;try{if(o=(r=r.call(e)).next,n===0){if(Object(r)!==r)return;m=!1}else for(;!(m=(l=o.call(r)).done)&&(d.push(l.value),d.length!==n);m=!0);}catch(b){g=!0,u=b}finally{try{if(!m&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(g)throw u}}return d}}function _4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H_(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,l)}return r}function de(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?H_(Object(r),!0).forEach(function(l){He(e,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H_(Object(r)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(r,l))})}return e}function $c(e,n){return p4(e)||b4(e,n)||Ym(e,n)||_4()}function hn(e){return h4(e)||v4(e)||Ym(e)||w4()}function $4(e,n){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var l=r.call(e,n);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function n3(e){var n=$4(e,"string");return typeof n=="symbol"?n:n+""}function yc(e){"@babel/helpers - typeof";return yc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yc(e)}function Ym(e,n){if(e){if(typeof e=="string")return em(e,n);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?em(e,n):void 0}}var j_=function(){},Fm={},i3={},r3=null,l3={mark:j_,measure:j_};try{typeof window<"u"&&(Fm=window),typeof document<"u"&&(i3=document),typeof MutationObserver<"u"&&(r3=MutationObserver),typeof performance<"u"&&(l3=performance)}catch{}var x4=Fm.navigator||{},G_=x4.userAgent,V_=G_===void 0?"":G_,tr=Fm,$t=i3,W_=r3,tc=l3;tr.document;var hi=!!$t.documentElement&&!!$t.head&&typeof $t.addEventListener=="function"&&typeof $t.createElement=="function",s3=~V_.indexOf("MSIE")||~V_.indexOf("Trident/"),kh,S4=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,T4=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,u3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},E4={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},o3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Zt="classic",eo="duotone",f3="sharp",c3="sharp-duotone",d3="chisel",p3="etch",h3="graphite",m3="jelly",g3="jelly-duo",y3="jelly-fill",v3="notdog",b3="notdog-duo",_3="slab",w3="slab-press",$3="thumbprint",x3="utility",S3="utility-duo",T3="utility-fill",E3="whiteboard",z4="Classic",A4="Duotone",C4="Sharp",O4="Sharp Duotone",k4="Chisel",M4="Etch",R4="Graphite",N4="Jelly",D4="Jelly Duo",I4="Jelly Fill",B4="Notdog",U4="Notdog Duo",q4="Slab",L4="Slab Press",H4="Thumbprint",j4="Utility",G4="Utility Duo",V4="Utility Fill",W4="Whiteboard",z3=[Zt,eo,f3,c3,d3,p3,h3,m3,g3,y3,v3,b3,_3,w3,$3,x3,S3,T3,E3];kh={},He(He(He(He(He(He(He(He(He(He(kh,Zt,z4),eo,A4),f3,C4),c3,O4),d3,k4),p3,M4),h3,R4),m3,N4),g3,D4),y3,I4),He(He(He(He(He(He(He(He(He(kh,v3,B4),b3,U4),_3,q4),w3,L4),$3,H4),x3,j4),S3,G4),T3,V4),E3,W4);var Y4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},F4={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},K4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),X4={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},A3=["fak","fa-kit","fakd","fa-kit-duotone"],Y_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Q4=["kit"],Z4="kit",P4="kit-duotone",J4="Kit",ez="Kit Duotone";He(He({},Z4,J4),P4,ez);var tz={kit:{"fa-kit":"fak"}},az={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},nz={kit:{fak:"fa-kit"}},F_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Mh,ac={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},iz=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],rz="classic",lz="duotone",sz="sharp",uz="sharp-duotone",oz="chisel",fz="etch",cz="graphite",dz="jelly",pz="jelly-duo",hz="jelly-fill",mz="notdog",gz="notdog-duo",yz="slab",vz="slab-press",bz="thumbprint",_z="utility",wz="utility-duo",$z="utility-fill",xz="whiteboard",Sz="Classic",Tz="Duotone",Ez="Sharp",zz="Sharp Duotone",Az="Chisel",Cz="Etch",Oz="Graphite",kz="Jelly",Mz="Jelly Duo",Rz="Jelly Fill",Nz="Notdog",Dz="Notdog Duo",Iz="Slab",Bz="Slab Press",Uz="Thumbprint",qz="Utility",Lz="Utility Duo",Hz="Utility Fill",jz="Whiteboard";Mh={},He(He(He(He(He(He(He(He(He(He(Mh,rz,Sz),lz,Tz),sz,Ez),uz,zz),oz,Az),fz,Cz),cz,Oz),dz,kz),pz,Mz),hz,Rz),He(He(He(He(He(He(He(He(He(Mh,mz,Nz),gz,Dz),yz,Iz),vz,Bz),bz,Uz),_z,qz),wz,Lz),$z,Hz),xz,jz);var Gz="kit",Vz="kit-duotone",Wz="Kit",Yz="Kit Duotone";He(He({},Gz,Wz),Vz,Yz);var Fz={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Kz={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},tm={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Xz=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],C3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(iz,Xz),Qz=["solid","regular","light","thin","duotone","brands","semibold"],O3=[1,2,3,4,5,6,7,8,9,10],Zz=O3.concat([11,12,13,14,15,16,17,18,19,20]),Pz=["aw","fw","pull-left","pull-right"],Jz=[].concat(hn(Object.keys(Kz)),Qz,Pz,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ac.GROUP,ac.SWAP_OPACITY,ac.PRIMARY,ac.SECONDARY]).concat(O3.map(function(e){return"".concat(e,"x")})).concat(Zz.map(function(e){return"w-".concat(e)})),eA={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ci="___FONT_AWESOME___",am=16,k3="fa",M3="svg-inline--fa",Wr="data-fa-i2svg",nm="data-fa-pseudo-element",tA="data-fa-pseudo-element-pending",Km="data-prefix",Xm="data-icon",K_="fontawesome-i2svg",aA="async",nA=["HTML","HEAD","STYLE","SCRIPT"],R3=["::before","::after",":before",":after"],N3=(function(){try{return!0}catch{return!1}})();function to(e){return new Proxy(e,{get:function(r,l){return l in r?r[l]:r[Zt]}})}var D3=de({},u3);D3[Zt]=de(de(de(de({},{"fa-duotone":"duotone"}),u3[Zt]),Y_.kit),Y_["kit-duotone"]);var iA=to(D3),im=de({},X4);im[Zt]=de(de(de(de({},{duotone:"fad"}),im[Zt]),F_.kit),F_["kit-duotone"]);var X_=to(im),rm=de({},tm);rm[Zt]=de(de({},rm[Zt]),nz.kit);var Qm=to(rm),lm=de({},Fz);lm[Zt]=de(de({},lm[Zt]),tz.kit);to(lm);var rA=S4,I3="fa-layers-text",lA=T4,sA=de({},Y4);to(sA);var uA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rh=E4,oA=[].concat(hn(Q4),hn(Jz)),Ku=tr.FontAwesomeConfig||{};function fA(e){var n=$t.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function cA(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if($t&&typeof $t.querySelector=="function"){var dA=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dA.forEach(function(e){var n=$c(e,2),r=n[0],l=n[1],u=cA(fA(r));u!=null&&(Ku[l]=u)})}var B3={styleDefault:"solid",familyDefault:Zt,cssPrefix:k3,replacementClass:M3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ku.familyPrefix&&(Ku.cssPrefix=Ku.familyPrefix);var os=de(de({},B3),Ku);os.autoReplaceSvg||(os.observeMutations=!1);var Oe={};Object.keys(B3).forEach(function(e){Object.defineProperty(Oe,e,{enumerable:!0,set:function(r){os[e]=r,Xu.forEach(function(l){return l(Oe)})},get:function(){return os[e]}})});Object.defineProperty(Oe,"familyPrefix",{enumerable:!0,set:function(n){os.cssPrefix=n,Xu.forEach(function(r){return r(Oe)})},get:function(){return os.cssPrefix}});tr.FontAwesomeConfig=Oe;var Xu=[];function pA(e){return Xu.push(e),function(){Xu.splice(Xu.indexOf(e),1)}}var ts=am,Rn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hA(e){if(!(!e||!hi)){var n=$t.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var r=$t.head.childNodes,l=null,u=r.length-1;u>-1;u--){var o=r[u],f=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(l=o)}return $t.head.insertBefore(n,l),e}}var mA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q_(){for(var e=12,n="";e-- >0;)n+=mA[Math.random()*62|0];return n}function ds(e){for(var n=[],r=(e||[]).length>>>0;r--;)n[r]=e[r];return n}function Zm(e){return e.classList?ds(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function U3(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gA(e){return Object.keys(e||{}).reduce(function(n,r){return n+"".concat(r,'="').concat(U3(e[r]),'" ')},"").trim()}function xc(e){return Object.keys(e||{}).reduce(function(n,r){return n+"".concat(r,": ").concat(e[r].trim(),";")},"")}function Pm(e){return e.size!==Rn.size||e.x!==Rn.x||e.y!==Rn.y||e.rotate!==Rn.rotate||e.flipX||e.flipY}function yA(e){var n=e.transform,r=e.containerWidth,l=e.iconWidth,u={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),m={transform:"".concat(o," ").concat(f," ").concat(d)},g={transform:"translate(".concat(l/2*-1," -256)")};return{outer:u,inner:m,path:g}}function vA(e){var n=e.transform,r=e.width,l=r===void 0?am:r,u=e.height,o=u===void 0?am:u,f="";return s3?f+="translate(".concat(n.x/ts-l/2,"em, ").concat(n.y/ts-o/2,"em) "):f+="translate(calc(-50% + ".concat(n.x/ts,"em), calc(-50% + ").concat(n.y/ts,"em)) "),f+="scale(".concat(n.size/ts*(n.flipX?-1:1),", ").concat(n.size/ts*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var bA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function q3(){var e=k3,n=M3,r=Oe.cssPrefix,l=Oe.replacementClass,u=bA;if(r!==e||l!==n){var o=new RegExp("\\.".concat(e,"\\-"),"g"),f=new RegExp("\\--".concat(e,"\\-"),"g"),d=new RegExp("\\.".concat(n),"g");u=u.replace(o,".".concat(r,"-")).replace(f,"--".concat(r,"-")).replace(d,".".concat(l))}return u}var Z_=!1;function Nh(){Oe.autoAddCss&&!Z_&&(hA(q3()),Z_=!0)}var _A={mixout:function(){return{dom:{css:q3,insertCss:Nh}}},hooks:function(){return{beforeDOMElementCreation:function(){Nh()},beforeI2svg:function(){Nh()}}}},di=tr||{};di[ci]||(di[ci]={});di[ci].styles||(di[ci].styles={});di[ci].hooks||(di[ci].hooks={});di[ci].shims||(di[ci].shims=[]);var dn=di[ci],L3=[],H3=function(){$t.removeEventListener("DOMContentLoaded",H3),vc=1,L3.map(function(n){return n()})},vc=!1;hi&&(vc=($t.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($t.readyState),vc||$t.addEventListener("DOMContentLoaded",H3));function wA(e){hi&&(vc?setTimeout(e,0):L3.push(e))}function ao(e){var n=e.tag,r=e.attributes,l=r===void 0?{}:r,u=e.children,o=u===void 0?[]:u;return typeof e=="string"?U3(e):"<".concat(n," ").concat(gA(l),">").concat(o.map(ao).join(""),"</").concat(n,">")}function P_(e,n,r){if(e&&e[n]&&e[n][r])return{prefix:n,iconName:r,icon:e[n][r]}}var Dh=function(n,r,l,u){var o=Object.keys(n),f=o.length,d=r,m,g,b;for(l===void 0?(m=1,b=n[o[0]]):(m=0,b=l);m<f;m++)g=o[m],b=d(b,n[g],g,n);return b};function j3(e){return hn(e).length!==1?null:e.codePointAt(0).toString(16)}function J_(e){return Object.keys(e).reduce(function(n,r){var l=e[r],u=!!l.icon;return u?n[l.iconName]=l.icon:n[r]=l,n},{})}function sm(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=r.skipHooks,u=l===void 0?!1:l,o=J_(n);typeof dn.hooks.addPack=="function"&&!u?dn.hooks.addPack(e,J_(n)):dn.styles[e]=de(de({},dn.styles[e]||{}),o),e==="fas"&&sm("fa",n)}var Ju=dn.styles,$A=dn.shims,G3=Object.keys(Qm),xA=G3.reduce(function(e,n){return e[n]=Object.keys(Qm[n]),e},{}),Jm=null,V3={},W3={},Y3={},F3={},K3={};function SA(e){return~oA.indexOf(e)}function TA(e,n){var r=n.split("-"),l=r[0],u=r.slice(1).join("-");return l===e&&u!==""&&!SA(u)?u:null}var X3=function(){var n=function(o){return Dh(Ju,function(f,d,m){return f[m]=Dh(d,o,{}),f},{})};V3=n(function(u,o,f){if(o[3]&&(u[o[3]]=f),o[2]){var d=o[2].filter(function(m){return typeof m=="number"});d.forEach(function(m){u[m.toString(16)]=f})}return u}),W3=n(function(u,o,f){if(u[f]=f,o[2]){var d=o[2].filter(function(m){return typeof m=="string"});d.forEach(function(m){u[m]=f})}return u}),K3=n(function(u,o,f){var d=o[2];return u[f]=f,d.forEach(function(m){u[m]=f}),u});var r="far"in Ju||Oe.autoFetchSvg,l=Dh($A,function(u,o){var f=o[0],d=o[1],m=o[2];return d==="far"&&!r&&(d="fas"),typeof f=="string"&&(u.names[f]={prefix:d,iconName:m}),typeof f=="number"&&(u.unicodes[f.toString(16)]={prefix:d,iconName:m}),u},{names:{},unicodes:{}});Y3=l.names,F3=l.unicodes,Jm=Sc(Oe.styleDefault,{family:Oe.familyDefault})};pA(function(e){Jm=Sc(e.styleDefault,{family:Oe.familyDefault})});X3();function eg(e,n){return(V3[e]||{})[n]}function EA(e,n){return(W3[e]||{})[n]}function qr(e,n){return(K3[e]||{})[n]}function Q3(e){return Y3[e]||{prefix:null,iconName:null}}function zA(e){var n=F3[e],r=eg("fas",e);return n||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function ar(){return Jm}var Z3=function(){return{prefix:null,iconName:null,rest:[]}};function AA(e){var n=Zt,r=G3.reduce(function(l,u){return l[u]="".concat(Oe.cssPrefix,"-").concat(u),l},{});return z3.forEach(function(l){(e.includes(r[l])||e.some(function(u){return xA[l].includes(u)}))&&(n=l)}),n}function Sc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.family,l=r===void 0?Zt:r,u=iA[l][e];if(l===eo&&!e)return"fad";var o=X_[l][e]||X_[l][u],f=e in dn.styles?e:null,d=o||f||null;return d}function CA(e){var n=[],r=null;return e.forEach(function(l){var u=TA(Oe.cssPrefix,l);u?r=u:l&&n.push(l)}),{iconName:r,rest:n}}function e2(e){return e.sort().filter(function(n,r,l){return l.indexOf(n)===r})}var t2=C3.concat(A3);function Tc(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,l=r===void 0?!1:r,u=null,o=e2(e.filter(function(S){return t2.includes(S)})),f=e2(e.filter(function(S){return!t2.includes(S)})),d=o.filter(function(S){return u=S,!o3.includes(S)}),m=$c(d,1),g=m[0],b=g===void 0?null:g,v=AA(o),_=de(de({},CA(f)),{},{prefix:Sc(b,{family:v})});return de(de(de({},_),RA({values:e,family:v,styles:Ju,config:Oe,canonical:_,givenPrefix:u})),OA(l,u,_))}function OA(e,n,r){var l=r.prefix,u=r.iconName;if(e||!l||!u)return{prefix:l,iconName:u};var o=n==="fa"?Q3(u):{},f=qr(l,u);return u=o.iconName||f||u,l=o.prefix||l,l==="far"&&!Ju.far&&Ju.fas&&!Oe.autoFetchSvg&&(l="fas"),{prefix:l,iconName:u}}var kA=z3.filter(function(e){return e!==Zt||e!==eo}),MA=Object.keys(tm).filter(function(e){return e!==Zt}).map(function(e){return Object.keys(tm[e])}).flat();function RA(e){var n=e.values,r=e.family,l=e.canonical,u=e.givenPrefix,o=u===void 0?"":u,f=e.styles,d=f===void 0?{}:f,m=e.config,g=m===void 0?{}:m,b=r===eo,v=n.includes("fa-duotone")||n.includes("fad"),_=g.familyDefault==="duotone",S=l.prefix==="fad"||l.prefix==="fa-duotone";if(!b&&(v||_||S)&&(l.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(l.prefix="fab"),!l.prefix&&kA.includes(r)){var T=Object.keys(d).find(function(M){return MA.includes(M)});if(T||g.autoFetchSvg){var E=K4.get(r).defaultShortPrefixId;l.prefix=E,l.iconName=qr(l.prefix,l.iconName)||l.iconName}}return(l.prefix==="fa"||o==="fa")&&(l.prefix=ar()||"fas"),l}var NA=(function(){function e(){m4(this,e),this.definitions={}}return y4(e,[{key:"add",value:function(){for(var r=this,l=arguments.length,u=new Array(l),o=0;o<l;o++)u[o]=arguments[o];var f=u.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(d){r.definitions[d]=de(de({},r.definitions[d]||{}),f[d]),sm(d,f[d]);var m=Qm[Zt][d];m&&sm(m,f[d]),X3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,l){var u=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(u).map(function(o){var f=u[o],d=f.prefix,m=f.iconName,g=f.icon,b=g[2];r[d]||(r[d]={}),b.length>0&&b.forEach(function(v){typeof v=="string"&&(r[d][v]=g)}),r[d][m]=g}),r}}])})(),a2=[],rs={},ls={},DA=Object.keys(ls);function IA(e,n){var r=n.mixoutsTo;return a2=e,rs={},Object.keys(ls).forEach(function(l){DA.indexOf(l)===-1&&delete ls[l]}),a2.forEach(function(l){var u=l.mixout?l.mixout():{};if(Object.keys(u).forEach(function(f){typeof u[f]=="function"&&(r[f]=u[f]),yc(u[f])==="object"&&Object.keys(u[f]).forEach(function(d){r[f]||(r[f]={}),r[f][d]=u[f][d]})}),l.hooks){var o=l.hooks();Object.keys(o).forEach(function(f){rs[f]||(rs[f]=[]),rs[f].push(o[f])})}l.provides&&l.provides(ls)}),r}function um(e,n){for(var r=arguments.length,l=new Array(r>2?r-2:0),u=2;u<r;u++)l[u-2]=arguments[u];var o=rs[e]||[];return o.forEach(function(f){n=f.apply(null,[n].concat(l))}),n}function Yr(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];var u=rs[e]||[];u.forEach(function(o){o.apply(null,r)})}function nr(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return ls[e]?ls[e].apply(null,n):void 0}function om(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,r=e.prefix||ar();if(n)return n=qr(r,n)||n,P_(P3.definitions,r,n)||P_(dn.styles,r,n)}var P3=new NA,BA=function(){Oe.autoReplaceSvg=!1,Oe.observeMutations=!1,Yr("noAuto")},UA={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hi?(Yr("beforeI2svg",n),nr("pseudoElements2svg",n),nr("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.autoReplaceSvgRoot;Oe.autoReplaceSvg===!1&&(Oe.autoReplaceSvg=!0),Oe.observeMutations=!0,wA(function(){LA({autoReplaceSvgRoot:r}),Yr("watch",n)})}},qA={icon:function(n){if(n===null)return null;if(yc(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:qr(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var r=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],l=Sc(n[0]);return{prefix:l,iconName:qr(l,r)||r}}if(typeof n=="string"&&(n.indexOf("".concat(Oe.cssPrefix,"-"))>-1||n.match(rA))){var u=Tc(n.split(" "),{skipLookups:!0});return{prefix:u.prefix||ar(),iconName:qr(u.prefix,u.iconName)||u.iconName}}if(typeof n=="string"){var o=ar();return{prefix:o,iconName:qr(o,n)||n}}}},Da={noAuto:BA,config:Oe,dom:UA,parse:qA,library:P3,findIconDefinition:om,toHtml:ao},LA=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.autoReplaceSvgRoot,l=r===void 0?$t:r;(Object.keys(dn.styles).length>0||Oe.autoFetchSvg)&&hi&&Oe.autoReplaceSvg&&Da.dom.i2svg({node:l})};function Ec(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(l){return ao(l)})}}),Object.defineProperty(e,"node",{get:function(){if(hi){var l=$t.createElement("div");return l.innerHTML=e.html,l.children}}}),e}function HA(e){var n=e.children,r=e.main,l=e.mask,u=e.attributes,o=e.styles,f=e.transform;if(Pm(f)&&r.found&&!l.found){var d=r.width,m=r.height,g={x:d/m/2,y:.5};u.style=xc(de(de({},o),{},{"transform-origin":"".concat(g.x+f.x/16,"em ").concat(g.y+f.y/16,"em")}))}return[{tag:"svg",attributes:u,children:n}]}function jA(e){var n=e.prefix,r=e.iconName,l=e.children,u=e.attributes,o=e.symbol,f=o===!0?"".concat(n,"-").concat(Oe.cssPrefix,"-").concat(r):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:de(de({},u),{},{id:f}),children:l}]}]}function GA(e){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(r){return r in e})}function tg(e){var n=e.icons,r=n.main,l=n.mask,u=e.prefix,o=e.iconName,f=e.transform,d=e.symbol,m=e.maskId,g=e.extra,b=e.watchable,v=b===void 0?!1:b,_=l.found?l:r,S=_.width,T=_.height,E=[Oe.replacementClass,o?"".concat(Oe.cssPrefix,"-").concat(o):""].filter(function(I){return g.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(g.classes).join(" "),M={children:[],attributes:de(de({},g.attributes),{},{"data-prefix":u,"data-icon":o,class:E,role:g.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(T)})};!GA(g.attributes)&&!g.attributes["aria-hidden"]&&(M.attributes["aria-hidden"]="true"),v&&(M.attributes[Wr]="");var A=de(de({},M),{},{prefix:u,iconName:o,main:r,mask:l,maskId:m,transform:f,symbol:d,styles:de({},g.styles)}),z=l.found&&r.found?nr("generateAbstractMask",A)||{children:[],attributes:{}}:nr("generateAbstractIcon",A)||{children:[],attributes:{}},D=z.children,N=z.attributes;return A.children=D,A.attributes=N,d?jA(A):HA(A)}function n2(e){var n=e.content,r=e.width,l=e.height,u=e.transform,o=e.extra,f=e.watchable,d=f===void 0?!1:f,m=de(de({},o.attributes),{},{class:o.classes.join(" ")});d&&(m[Wr]="");var g=de({},o.styles);Pm(u)&&(g.transform=vA({transform:u,width:r,height:l}),g["-webkit-transform"]=g.transform);var b=xc(g);b.length>0&&(m.style=b);var v=[];return v.push({tag:"span",attributes:m,children:[n]}),v}function VA(e){var n=e.content,r=e.extra,l=de(de({},r.attributes),{},{class:r.classes.join(" ")}),u=xc(r.styles);u.length>0&&(l.style=u);var o=[];return o.push({tag:"span",attributes:l,children:[n]}),o}var Ih=dn.styles;function fm(e){var n=e[0],r=e[1],l=e.slice(4),u=$c(l,1),o=u[0],f=null;return Array.isArray(o)?f={tag:"g",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(Rh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(Rh.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Oe.cssPrefix,"-").concat(Rh.PRIMARY),fill:"currentColor",d:o[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:r,icon:f}}var WA={found:!1,width:512,height:512};function YA(e,n){!N3&&!Oe.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function cm(e,n){var r=n;return n==="fa"&&Oe.styleDefault!==null&&(n=ar()),new Promise(function(l,u){if(r==="fa"){var o=Q3(e)||{};e=o.iconName||e,n=o.prefix||n}if(e&&n&&Ih[n]&&Ih[n][e]){var f=Ih[n][e];return l(fm(f))}YA(e,n),l(de(de({},WA),{},{icon:Oe.showMissingIcons&&e?nr("missingIconAbstract")||{}:{}}))})}var i2=function(){},dm=Oe.measurePerformance&&tc&&tc.mark&&tc.measure?tc:{mark:i2,measure:i2},Yu='FA "7.2.0"',FA=function(n){return dm.mark("".concat(Yu," ").concat(n," begins")),function(){return J3(n)}},J3=function(n){dm.mark("".concat(Yu," ").concat(n," ends")),dm.measure("".concat(Yu," ").concat(n),"".concat(Yu," ").concat(n," begins"),"".concat(Yu," ").concat(n," ends"))},ag={begin:FA,end:J3},lc=function(){};function r2(e){var n=e.getAttribute?e.getAttribute(Wr):null;return typeof n=="string"}function KA(e){var n=e.getAttribute?e.getAttribute(Km):null,r=e.getAttribute?e.getAttribute(Xm):null;return n&&r}function XA(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Oe.replacementClass)}function QA(){if(Oe.autoReplaceSvg===!0)return sc.replace;var e=sc[Oe.autoReplaceSvg];return e||sc.replace}function ZA(e){return $t.createElementNS("http://www.w3.org/2000/svg",e)}function PA(e){return $t.createElement(e)}function eS(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.ceFn,l=r===void 0?e.tag==="svg"?ZA:PA:r;if(typeof e=="string")return $t.createTextNode(e);var u=l(e.tag);Object.keys(e.attributes||[]).forEach(function(f){u.setAttribute(f,e.attributes[f])});var o=e.children||[];return o.forEach(function(f){u.appendChild(eS(f,{ceFn:l}))}),u}function JA(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var sc={replace:function(n){var r=n[0];if(r.parentNode)if(n[1].forEach(function(u){r.parentNode.insertBefore(eS(u),r)}),r.getAttribute(Wr)===null&&Oe.keepOriginalSource){var l=$t.createComment(JA(r));r.parentNode.replaceChild(l,r)}else r.remove()},nest:function(n){var r=n[0],l=n[1];if(~Zm(r).indexOf(Oe.replacementClass))return sc.replace(n);var u=new RegExp("".concat(Oe.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){var o=l[0].attributes.class.split(" ").reduce(function(d,m){return m===Oe.replacementClass||m.match(u)?d.toSvg.push(m):d.toNode.push(m),d},{toNode:[],toSvg:[]});l[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",o.toNode.join(" "))}var f=l.map(function(d){return ao(d)}).join(`
`);r.setAttribute(Wr,""),r.innerHTML=f}};function l2(e){e()}function tS(e,n){var r=typeof n=="function"?n:lc;if(e.length===0)r();else{var l=l2;Oe.mutateApproach===aA&&(l=tr.requestAnimationFrame||l2),l(function(){var u=QA(),o=ag.begin("mutate");e.map(u),o(),r()})}}var ng=!1;function aS(){ng=!0}function pm(){ng=!1}var bc=null;function s2(e){if(W_&&Oe.observeMutations){var n=e.treeCallback,r=n===void 0?lc:n,l=e.nodeCallback,u=l===void 0?lc:l,o=e.pseudoElementsCallback,f=o===void 0?lc:o,d=e.observeMutationsRoot,m=d===void 0?$t:d;bc=new W_(function(g){if(!ng){var b=ar();ds(g).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!r2(v.addedNodes[0])&&(Oe.searchPseudoElements&&f(v.target),r(v.target)),v.type==="attributes"&&v.target.parentNode&&Oe.searchPseudoElements&&f([v.target],!0),v.type==="attributes"&&r2(v.target)&&~uA.indexOf(v.attributeName))if(v.attributeName==="class"&&KA(v.target)){var _=Tc(Zm(v.target)),S=_.prefix,T=_.iconName;v.target.setAttribute(Km,S||b),T&&v.target.setAttribute(Xm,T)}else XA(v.target)&&u(v.target)})}}),hi&&bc.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eC(){bc&&bc.disconnect()}function tC(e){var n=e.getAttribute("style"),r=[];return n&&(r=n.split(";").reduce(function(l,u){var o=u.split(":"),f=o[0],d=o.slice(1);return f&&d.length>0&&(l[f]=d.join(":").trim()),l},{})),r}function aC(e){var n=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),l=e.innerText!==void 0?e.innerText.trim():"",u=Tc(Zm(e));return u.prefix||(u.prefix=ar()),n&&r&&(u.prefix=n,u.iconName=r),u.iconName&&u.prefix||(u.prefix&&l.length>0&&(u.iconName=EA(u.prefix,e.innerText)||eg(u.prefix,j3(e.innerText))),!u.iconName&&Oe.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=e.firstChild.data)),u}function nC(e){var n=ds(e.attributes).reduce(function(r,l){return r.name!=="class"&&r.name!=="style"&&(r[l.name]=l.value),r},{});return n}function iC(){return{iconName:null,prefix:null,transform:Rn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function u2(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=aC(e),l=r.iconName,u=r.prefix,o=r.rest,f=nC(e),d=um("parseNodeAttributes",{},e),m=n.styleParser?tC(e):[];return de({iconName:l,prefix:u,transform:Rn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:m,attributes:f}},d)}var rC=dn.styles;function nS(e){var n=Oe.autoReplaceSvg==="nest"?u2(e,{styleParser:!1}):u2(e);return~n.extra.classes.indexOf(I3)?nr("generateLayersText",e,n):nr("generateSvgReplacementMutation",e,n)}function lC(){return[].concat(hn(A3),hn(C3))}function o2(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hi)return Promise.resolve();var r=$t.documentElement.classList,l=function(v){return r.add("".concat(K_,"-").concat(v))},u=function(v){return r.remove("".concat(K_,"-").concat(v))},o=Oe.autoFetchSvg?lC():o3.concat(Object.keys(rC));o.includes("fa")||o.push("fa");var f=[".".concat(I3,":not([").concat(Wr,"])")].concat(o.map(function(b){return".".concat(b,":not([").concat(Wr,"])")})).join(", ");if(f.length===0)return Promise.resolve();var d=[];try{d=ds(e.querySelectorAll(f))}catch{}if(d.length>0)l("pending"),u("complete");else return Promise.resolve();var m=ag.begin("onTree"),g=d.reduce(function(b,v){try{var _=nS(v);_&&b.push(_)}catch(S){N3||S.name==="MissingIcon"&&console.error(S)}return b},[]);return new Promise(function(b,v){Promise.all(g).then(function(_){tS(_,function(){l("active"),l("complete"),u("pending"),typeof n=="function"&&n(),m(),b()})}).catch(function(_){m(),v(_)})})}function sC(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nS(e).then(function(r){r&&tS([r],n)})}function uC(e){return function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(n||{}).icon?n:om(n||{}),u=r.mask;return u&&(u=(u||{}).icon?u:om(u||{})),e(l,de(de({},r),{},{mask:u}))}}var oC=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=r.transform,u=l===void 0?Rn:l,o=r.symbol,f=o===void 0?!1:o,d=r.mask,m=d===void 0?null:d,g=r.maskId,b=g===void 0?null:g,v=r.classes,_=v===void 0?[]:v,S=r.attributes,T=S===void 0?{}:S,E=r.styles,M=E===void 0?{}:E;if(n){var A=n.prefix,z=n.iconName,D=n.icon;return Ec(de({type:"icon"},n),function(){return Yr("beforeDOMElementCreation",{iconDefinition:n,params:r}),tg({icons:{main:fm(D),mask:m?fm(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:z,transform:de(de({},Rn),u),symbol:f,maskId:b,extra:{attributes:T,styles:M,classes:_}})})}},fC={mixout:function(){return{icon:uC(oC)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=o2,r.nodeCallback=sC,r}}},provides:function(n){n.i2svg=function(r){var l=r.node,u=l===void 0?$t:l,o=r.callback,f=o===void 0?function(){}:o;return o2(u,f)},n.generateSvgReplacementMutation=function(r,l){var u=l.iconName,o=l.prefix,f=l.transform,d=l.symbol,m=l.mask,g=l.maskId,b=l.extra;return new Promise(function(v,_){Promise.all([cm(u,o),m.iconName?cm(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var T=$c(S,2),E=T[0],M=T[1];v([r,tg({icons:{main:E,mask:M},prefix:o,iconName:u,transform:f,symbol:d,maskId:g,extra:b,watchable:!0})])}).catch(_)})},n.generateAbstractIcon=function(r){var l=r.children,u=r.attributes,o=r.main,f=r.transform,d=r.styles,m=xc(d);m.length>0&&(u.style=m);var g;return Pm(f)&&(g=nr("generateAbstractTransformGrouping",{main:o,transform:f,containerWidth:o.width,iconWidth:o.width})),l.push(g||o.icon),{children:l,attributes:u}}}},cC={mixout:function(){return{layer:function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=l.classes,o=u===void 0?[]:u;return Ec({type:"layer"},function(){Yr("beforeDOMElementCreation",{assembler:r,params:l});var f=[];return r(function(d){Array.isArray(d)?d.map(function(m){f=f.concat(m.abstract)}):f=f.concat(d.abstract)}),[{tag:"span",attributes:{class:["".concat(Oe.cssPrefix,"-layers")].concat(hn(o)).join(" ")},children:f}]})}}}},dC={mixout:function(){return{counter:function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};l.title;var u=l.classes,o=u===void 0?[]:u,f=l.attributes,d=f===void 0?{}:f,m=l.styles,g=m===void 0?{}:m;return Ec({type:"counter",content:r},function(){return Yr("beforeDOMElementCreation",{content:r,params:l}),VA({content:r.toString(),extra:{attributes:d,styles:g,classes:["".concat(Oe.cssPrefix,"-layers-counter")].concat(hn(o))}})})}}}},pC={mixout:function(){return{text:function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=l.transform,o=u===void 0?Rn:u,f=l.classes,d=f===void 0?[]:f,m=l.attributes,g=m===void 0?{}:m,b=l.styles,v=b===void 0?{}:b;return Ec({type:"text",content:r},function(){return Yr("beforeDOMElementCreation",{content:r,params:l}),n2({content:r,transform:de(de({},Rn),o),extra:{attributes:g,styles:v,classes:["".concat(Oe.cssPrefix,"-layers-text")].concat(hn(d))}})})}}},provides:function(n){n.generateLayersText=function(r,l){var u=l.transform,o=l.extra,f=null,d=null;if(s3){var m=parseInt(getComputedStyle(r).fontSize,10),g=r.getBoundingClientRect();f=g.width/m,d=g.height/m}return Promise.resolve([r,n2({content:r.innerHTML,width:f,height:d,transform:u,extra:o,watchable:!0})])}}},iS=new RegExp('"',"ug"),f2=[1105920,1112319],c2=de(de(de(de({},{FontAwesome:{normal:"fas",400:"fas"}}),F4),eA),az),hm=Object.keys(c2).reduce(function(e,n){return e[n.toLowerCase()]=c2[n],e},{}),hC=Object.keys(hm).reduce(function(e,n){var r=hm[n];return e[n]=r[900]||hn(Object.entries(r))[0][1],e},{});function mC(e){var n=e.replace(iS,"");return j3(hn(n)[0]||"")}function gC(e){var n=e.getPropertyValue("font-feature-settings").includes("ss01"),r=e.getPropertyValue("content"),l=r.replace(iS,""),u=l.codePointAt(0),o=u>=f2[0]&&u<=f2[1],f=l.length===2?l[0]===l[1]:!1;return o||f||n}function yC(e,n){var r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(n),u=isNaN(l)?"normal":l;return(hm[r]||{})[u]||hC[r]}function d2(e,n){var r="".concat(tA).concat(n.replace(":","-"));return new Promise(function(l,u){if(e.getAttribute(r)!==null)return l();var o=ds(e.children),f=o.filter(function(V){return V.getAttribute(nm)===n})[0],d=tr.getComputedStyle(e,n),m=d.getPropertyValue("font-family"),g=m.match(lA),b=d.getPropertyValue("font-weight"),v=d.getPropertyValue("content");if(f&&!g)return e.removeChild(f),l();if(g&&v!=="none"&&v!==""){var _=d.getPropertyValue("content"),S=yC(m,b),T=mC(_),E=g[0].startsWith("FontAwesome"),M=gC(d),A=eg(S,T),z=A;if(E){var D=zA(T);D.iconName&&D.prefix&&(A=D.iconName,S=D.prefix)}if(A&&!M&&(!f||f.getAttribute(Km)!==S||f.getAttribute(Xm)!==z)){e.setAttribute(r,z),f&&e.removeChild(f);var N=iC(),I=N.extra;I.attributes[nm]=n,cm(A,S).then(function(V){var q=tg(de(de({},N),{},{icons:{main:V,mask:Z3()},prefix:S,iconName:z,extra:I,watchable:!0})),C=$t.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=q.map(function(J){return ao(J)}).join(`
`),e.removeAttribute(r),l()}).catch(u)}else l()}else l()})}function vC(e){return Promise.all([d2(e,"::before"),d2(e,"::after")])}function bC(e){return e.parentNode!==document.head&&!~nA.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(nm)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var _C=function(n){return!!n&&R3.some(function(r){return n.includes(r)})},wC=function(n){if(!n)return[];var r=new Set,l=n.split(/,(?![^()]*\))/).map(function(m){return m.trim()});l=l.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(g){return g.trim()})});var u=rc(l),o;try{for(u.s();!(o=u.n()).done;){var f=o.value;if(_C(f)){var d=R3.reduce(function(m,g){return m.replace(g,"")},f);d!==""&&d!=="*"&&r.add(d)}}}catch(m){u.e(m)}finally{u.f()}return r};function p2(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(hi){var r;if(n)r=e;else if(Oe.searchPseudoElementsFullScan)r=e.querySelectorAll("*");else{var l=new Set,u=rc(document.styleSheets),o;try{for(u.s();!(o=u.n()).done;){var f=o.value;try{var d=rc(f.cssRules),m;try{for(d.s();!(m=d.n()).done;){var g=m.value,b=wC(g.selectorText),v=rc(b),_;try{for(v.s();!(_=v.n()).done;){var S=_.value;l.add(S)}}catch(E){v.e(E)}finally{v.f()}}}catch(E){d.e(E)}finally{d.f()}}catch(E){Oe.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(E.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(E){u.e(E)}finally{u.f()}if(!l.size)return;var T=Array.from(l).join(", ");try{r=e.querySelectorAll(T)}catch{}}return new Promise(function(E,M){var A=ds(r).filter(bC).map(vC),z=ag.begin("searchPseudoElements");aS(),Promise.all(A).then(function(){z(),pm(),E()}).catch(function(){z(),pm(),M()})})}}var $C={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=p2,r}}},provides:function(n){n.pseudoElements2svg=function(r){var l=r.node,u=l===void 0?$t:l;Oe.searchPseudoElements&&p2(u)}}},h2=!1,xC={mixout:function(){return{dom:{unwatch:function(){aS(),h2=!0}}}},hooks:function(){return{bootstrap:function(){s2(um("mutationObserverCallbacks",{}))},noAuto:function(){eC()},watch:function(r){var l=r.observeMutationsRoot;h2?pm():s2(um("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},m2=function(n){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(l,u){var o=u.toLowerCase().split("-"),f=o[0],d=o.slice(1).join("-");if(f&&d==="h")return l.flipX=!0,l;if(f&&d==="v")return l.flipY=!0,l;if(d=parseFloat(d),isNaN(d))return l;switch(f){case"grow":l.size=l.size+d;break;case"shrink":l.size=l.size-d;break;case"left":l.x=l.x-d;break;case"right":l.x=l.x+d;break;case"up":l.y=l.y-d;break;case"down":l.y=l.y+d;break;case"rotate":l.rotate=l.rotate+d;break}return l},r)},SC={mixout:function(){return{parse:{transform:function(r){return m2(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,l){var u=l.getAttribute("data-fa-transform");return u&&(r.transform=m2(u)),r}}},provides:function(n){n.generateAbstractTransformGrouping=function(r){var l=r.main,u=r.transform,o=r.containerWidth,f=r.iconWidth,d={transform:"translate(".concat(o/2," 256)")},m="translate(".concat(u.x*32,", ").concat(u.y*32,") "),g="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),b="rotate(".concat(u.rotate," 0 0)"),v={transform:"".concat(m," ").concat(g," ").concat(b)},_={transform:"translate(".concat(f/2*-1," -256)")},S={outer:d,inner:v,path:_};return{tag:"g",attributes:de({},S.outer),children:[{tag:"g",attributes:de({},S.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:de(de({},l.icon.attributes),S.path)}]}]}}}},Bh={x:0,y:0,width:"100%",height:"100%"};function g2(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function TC(e){return e.tag==="g"?e.children:[e]}var EC={hooks:function(){return{parseNodeAttributes:function(r,l){var u=l.getAttribute("data-fa-mask"),o=u?Tc(u.split(" ").map(function(f){return f.trim()})):Z3();return o.prefix||(o.prefix=ar()),r.mask=o,r.maskId=l.getAttribute("data-fa-mask-id"),r}}},provides:function(n){n.generateAbstractMask=function(r){var l=r.children,u=r.attributes,o=r.main,f=r.mask,d=r.maskId,m=r.transform,g=o.width,b=o.icon,v=f.width,_=f.icon,S=yA({transform:m,containerWidth:v,iconWidth:g}),T={tag:"rect",attributes:de(de({},Bh),{},{fill:"white"})},E=b.children?{children:b.children.map(g2)}:{},M={tag:"g",attributes:de({},S.inner),children:[g2(de({tag:b.tag,attributes:de(de({},b.attributes),S.path)},E))]},A={tag:"g",attributes:de({},S.outer),children:[M]},z="mask-".concat(d||Q_()),D="clip-".concat(d||Q_()),N={tag:"mask",attributes:de(de({},Bh),{},{id:z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,A]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:TC(_)},N]};return l.push(I,{tag:"rect",attributes:de({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(z,")")},Bh)}),{children:l,attributes:u}}}},zC={provides:function(n){var r=!1;tr.matchMedia&&(r=tr.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var l=[],u={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:de(de({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=de(de({},o),{},{attributeName:"opacity"}),d={tag:"circle",attributes:de(de({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||d.children.push({tag:"animate",attributes:de(de({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:de(de({},f),{},{values:"1;0;1;1;0;1;"})}),l.push(d),l.push({tag:"path",attributes:de(de({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:de(de({},f),{},{values:"1;0;0;0;0;1;"})}]}),r||l.push({tag:"path",attributes:de(de({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:de(de({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},AC={hooks:function(){return{parseNodeAttributes:function(r,l){var u=l.getAttribute("data-fa-symbol"),o=u===null?!1:u===""?!0:u;return r.symbol=o,r}}}},CC=[_A,fC,cC,dC,pC,$C,xC,SC,EC,zC,AC];IA(CC,{mixoutsTo:Da});Da.noAuto;var fs=Da.config;Da.library;Da.dom;var rS=Da.parse;Da.findIconDefinition;Da.toHtml;var OC=Da.icon;Da.layer;Da.text;Da.counter;function kC(e){return e=e-0,e===e}function lS(e){return kC(e)?e:(e=e.replace(/[_-]+(.)?/g,(n,r)=>r?r.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}var MC=(e,n)=>_c.createElement("stop",{key:`${n}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function RC(e){return e.charAt(0).toUpperCase()+e.slice(1)}var as=new Map,NC=1e3;function DC(e){if(as.has(e))return as.get(e);const n={};let r=0;const l=e.length;for(;r<l;){const u=e.indexOf(";",r),o=u===-1?l:u,f=e.slice(r,o).trim();if(f){const d=f.indexOf(":");if(d>0){const m=f.slice(0,d).trim(),g=f.slice(d+1).trim();if(m&&g){const b=lS(m);n[b.startsWith("webkit")?RC(b):b]=g}}}r=o+1}if(as.size===NC){const u=as.keys().next().value;u&&as.delete(u)}return as.set(e,n),n}function sS(e,n,r={}){if(typeof n=="string")return n;const l=(n.children||[]).map(v=>{let _=v;return("fill"in r||r.gradientFill)&&v.tag==="path"&&"fill"in v.attributes&&(_={...v,attributes:{...v.attributes,fill:void 0}}),sS(e,_)}),u=n.attributes||{},o={};for(const[v,_]of Object.entries(u))switch(!0){case v==="class":{o.className=_;break}case v==="style":{o.style=DC(String(_));break}case v.startsWith("aria-"):case v.startsWith("data-"):{o[v.toLowerCase()]=_;break}default:o[lS(v)]=_}const{style:f,role:d,"aria-label":m,gradientFill:g,...b}=r;if(f&&(o.style=o.style?{...o.style,...f}:f),d&&(o.role=d),m&&(o["aria-label"]=m,o["aria-hidden"]="false"),g){o.fill=`url(#${g.id})`;const{type:v,stops:_=[],...S}=g;l.unshift(e(v==="linear"?"linearGradient":"radialGradient",{...S,id:g.id},_.map(MC)))}return e(n.tag,{...o,...b},...l)}var IC=sS.bind(null,_c.createElement),y2=(e,n)=>{const r=ft.useId();return e||(n?r:void 0)},BC=class{constructor(e="react-fontawesome"){this.enabled=!1;let n=!1;try{n=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=n}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},UC="searchPseudoElementsFullScan"in fs&&typeof fs.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",qC=Number.parseInt(UC)>=7,LC=()=>qC,Qu="fa",ui={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},HC={left:"fa-pull-left",right:"fa-pull-right"},jC={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},GC={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},oi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function VC(e){const n=fs.cssPrefix||fs.familyPrefix||Qu;return n===Qu?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Qu}-`,"g"),`${n}-`)}function WC(e){const{beat:n,fade:r,beatFade:l,bounce:u,shake:o,spin:f,spinPulse:d,spinReverse:m,pulse:g,fixedWidth:b,inverse:v,border:_,flip:S,size:T,rotation:E,pull:M,swapOpacity:A,rotateBy:z,widthAuto:D,className:N}=e,I=[];return N&&I.push(...N.split(" ")),n&&I.push(ui.beat),r&&I.push(ui.fade),l&&I.push(ui.beatFade),u&&I.push(ui.bounce),o&&I.push(ui.shake),f&&I.push(ui.spin),m&&I.push(ui.spinReverse),d&&I.push(ui.spinPulse),g&&I.push(ui.pulse),b&&I.push(oi.fixedWidth),v&&I.push(oi.inverse),_&&I.push(oi.border),S===!0&&I.push(oi.flip),(S==="horizontal"||S==="both")&&I.push(oi.flipHorizontal),(S==="vertical"||S==="both")&&I.push(oi.flipVertical),T!=null&&I.push(GC[T]),E!=null&&E!==0&&I.push(jC[E]),M!=null&&I.push(HC[M]),A&&I.push(oi.swapOpacity),LC()?(z&&I.push(oi.rotateBy),D&&I.push(oi.widthAuto),(fs.cssPrefix||fs.familyPrefix||Qu)===Qu?I:I.map(VC)):I}var YC=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function v2(e){if(e)return YC(e)?e:rS.icon(e)}function FC(e){return Object.keys(e)}var b2=new BC("FontAwesomeIcon"),uS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},KC=new Set(Object.keys(uS)),mm=_c.forwardRef((e,n)=>{const r={...uS,...e},{icon:l,mask:u,symbol:o,title:f,titleId:d,maskId:m,transform:g}=r,b=y2(m,!!u),v=y2(d,!!f),_=v2(l);if(!_)return b2.error("Icon lookup is undefined",l),null;const S=WC(r),T=typeof g=="string"?rS.transform(g):g,E=v2(u),M=OC(_,{...S.length>0&&{classes:S},...T&&{transform:T},...E&&{mask:E},symbol:o,title:f,titleId:v,maskId:b});if(!M)return b2.error("Could not find icon",_),null;const{abstract:A}=M,z={ref:n};for(const D of FC(r))KC.has(D)||(z[D]=r[D]);return IC(A[0],z)});mm.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var XC={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},QC={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]};function ZC(){return Ae.jsxs("main",{className:"app-shell",children:[Ae.jsxs("section",{className:"hero-panel",children:[Ae.jsxs("div",{className:"hero-copy",children:[Ae.jsxs("h1",{children:[Ae.jsx("span",{style:{color:"#090446",textShadow:"0 0 3px #ffffff, 0 0 5px #0000ff"},children:"B"}),"lue cells"]}),Ae.jsx("p",{className:"lede",children:"Blue cells is a automatic cell counter. This website uses on-device YOLOv8 inference to count cells."})]}),Ae.jsx("div",{className:"stage-center",children:Ae.jsx(c4,{})})]}),Ae.jsx("section",{children:Ae.jsx("div",{className:"stage-footer",children:Ae.jsxs("p",{children:["This web tool uses a YOLO-based object detection model to identify and count live and dead cells in trypan blue-stained images. The model runs directly in your browser using browser-side inferencing, so uploaded or captured images are not sent away for model training purposes.",Ae.jsx("br",{}),"Users can upload an image using the Choose Picture button or use the webcam feature to capture an image directly, including from a phone camera. Detected cells are highlighted with bounding boxes: live cells are shown in green boxes, and dead cells are shown in red boxes.",Ae.jsx("br",{}),"A confidence score slider is provided at the top of the page to adjust the detection threshold. Lowering the confidence score may help count cells with lower detection confidence, while increasing it can reduce false detections. This makes the tool useful for images with different lighting, focus, staining intensity, or cell density.",Ae.jsx("br",{}),"The current model is designed to count individual live and dead cells and may not accurately separate cells in aggregates or highly overlapping clusters. For best results, use clear, well-focused images where cells are evenly distributed and not heavily clumped.",Ae.jsx("br",{}),"This tool provides a fast, automated estimate of live and dead cell counts from trypan blue-stained samples while keeping image processing local to the browser."]})})}),Ae.jsx("footer",{className:"app-footer",children:Ae.jsxs("div",{className:"footer-content",children:[Ae.jsx("p",{children:"2026 Blue Cells. Built with Pytorch, React, ONNX Runtime and YOLOv8."}),Ae.jsxs("div",{className:"social-links",children:[Ae.jsxs("a",{href:"https://github.com/git-ashira",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:[Ae.jsx(mm,{icon:XC}),"GitHub"]}),Ae.jsxs("a",{href:"https://www.linkedin.com/in/amandeep-singh-hira-5a0bb1191",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:[Ae.jsx(mm,{icon:QC}),"LinkedIn"]})]})]})})]})}MT.createRoot(document.getElementById("root")).render(Ae.jsx(_c.StrictMode,{children:Ae.jsx(ZC,{})}));
