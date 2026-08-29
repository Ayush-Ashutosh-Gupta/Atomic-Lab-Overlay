(()=>{var Vi=Object.defineProperty;var yd=Object.getOwnPropertyDescriptor;var vd=Object.getOwnPropertyNames;var wd=Object.prototype.hasOwnProperty;var xd=(S,Q)=>()=>(S&&(Q=S(S=0)),Q);var kd=(S,Q)=>{for(var g in Q)Vi(S,g,{get:Q[g],enumerable:!0})},Sd=(S,Q,g,pe)=>{if(Q&&typeof Q=="object"||typeof Q=="function")for(let j of vd(Q))!wd.call(S,j)&&j!==g&&Vi(S,j,{get:()=>Q[j],enumerable:!(pe=yd(Q,j))||pe.enumerable});return S};var zd=S=>Sd(Vi({},"__esModule",{value:!0}),S);var vu={};kd(vu,{Component:()=>_d,Fragment:()=>Md,StrictMode:()=>Pd,createContext:()=>Nd,createElement:()=>Td,default:()=>k,useCallback:()=>Cd,useContext:()=>Ed,useEffect:()=>Wi,useMemo:()=>Xr,useRef:()=>nl,useState:()=>Ct});var yu,k,Ct,Wi,Cd,Xr,nl,Ed,Nd,Md,Pd,Td,_d,rl=xd(()=>{(function(){"use strict";(function(S,Q){typeof exports=="object"&&typeof module<"u"?Q(exports):typeof define=="function"&&define.amd?define(["exports"],Q):(S=S||self,Q(S.React={}))})(this,function(S){function Q(s){return s===null||typeof s!="object"?null:(s=Rt&&s[Rt]||s["@@iterator"],typeof s=="function"?s:null)}function g(s,m,z){this.props=s,this.context=m,this.refs=Ut,this.updater=z||tn}function pe(){}function j(s,m,z){this.props=s,this.context=m,this.refs=Ut,this.updater=z||tn}function dt(s,m,z){var T,F={},J=null,G=null;if(m!=null)for(T in m.ref!==void 0&&(G=m.ref),m.key!==void 0&&(J=""+m.key),m)Tn.call(m,T)&&!A.hasOwnProperty(T)&&(F[T]=m[T]);var K=arguments.length-2;if(K===1)F.children=z;else if(1<K){for(var B=Array(K),we=0;we<K;we++)B[we]=arguments[we+2];F.children=B}if(s&&s.defaultProps)for(T in K=s.defaultProps,K)F[T]===void 0&&(F[T]=K[T]);return{$$typeof:Et,type:s,key:J,ref:G,props:F,_owner:At.current}}function It(s,m){return{$$typeof:Et,type:s.type,key:m,ref:s.ref,props:s.props,_owner:s._owner}}function Ft(s){return typeof s=="object"&&s!==null&&s.$$typeof===Et}function ae(s){var m={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(z){return m[z]})}function Dt(s,m){return typeof s=="object"&&s!==null&&s.key!=null?ae(""+s.key):m.toString(36)}function qe(s,m,z,T,F){var J=typeof s;(J==="undefined"||J==="boolean")&&(s=null);var G=!1;if(s===null)G=!0;else switch(J){case"string":case"number":G=!0;break;case"object":switch(s.$$typeof){case Et:case Nn:G=!0}}if(G)return G=s,F=F(G),s=T===""?"."+Dt(G,0):T,rn(F)?(z="",s!=null&&(z=s.replace(se,"$&/")+"/"),qe(F,m,z,"",function(we){return we})):F!=null&&(Ft(F)&&(F=It(F,z+(!F.key||G&&G.key===F.key?"":(""+F.key).replace(se,"$&/")+"/")+s)),m.push(F)),1;if(G=0,T=T===""?".":T+":",rn(s))for(var K=0;K<s.length;K++){J=s[K];var B=T+Dt(J,K);G+=qe(J,m,z,B,F)}else if(B=Q(s),typeof B=="function")for(s=B.call(s),K=0;!(J=s.next()).done;)J=J.value,B=T+Dt(J,K++),G+=qe(J,m,z,B,F);else if(J==="object")throw m=String(s),Error("Objects are not valid as a React child (found: "+(m==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":m)+"). If you meant to render a collection of children, use an array instead.");return G}function ft(s,m,z){if(s==null)return s;var T=[],F=0;return qe(s,T,"","",function(J){return m.call(z,J,F++)}),T}function et(s){if(s._status===-1){var m=s._result;m=m(),m.then(function(z){(s._status===0||s._status===-1)&&(s._status=1,s._result=z)},function(z){(s._status===0||s._status===-1)&&(s._status=2,s._result=z)}),s._status===-1&&(s._status=0,s._result=m)}if(s._status===1)return s._result.default;throw s._result}function Ot(s,m){var z=s.length;s.push(m);e:for(;0<z;){var T=z-1>>>1,F=s[T];if(0<De(F,m))s[T]=m,s[z]=F,z=T;else break e}}function ze(s){return s.length===0?null:s[0]}function pt(s){if(s.length===0)return null;var m=s[0],z=s.pop();if(z!==m){s[0]=z;e:for(var T=0,F=s.length,J=F>>>1;T<J;){var G=2*(T+1)-1,K=s[G],B=G+1,we=s[B];if(0>De(K,z))B<F&&0>De(we,K)?(s[T]=we,s[B]=z,T=B):(s[T]=K,s[G]=z,T=G);else if(B<F&&0>De(we,z))s[T]=we,s[B]=z,T=B;else break e}}return m}function De(s,m){var z=s.sortIndex-m.sortIndex;return z!==0?z:s.id-m.id}function ye(s){for(var m=ze(_e);m!==null;){if(m.callback===null)pt(_e);else if(m.startTime<=s)pt(_e),m.sortIndex=m.expirationTime,Ot(Oe,m);else break;m=ze(_e)}}function en(s){if(ve=!1,ye(s),!ge)if(ze(Oe)!==null)ge=!0,Ae(ee);else{var m=ze(_e);m!==null&&jt(en,m.startTime-s)}}function ee(s,m){ge=!1,ve&&(ve=!1,H(gt),gt=-1),Y=!0;var z=O;try{for(ye(m),b=ze(Oe);b!==null&&(!(b.expirationTime>m)||s&&!ce());){var T=b.callback;if(typeof T=="function"){b.callback=null,O=b.priorityLevel;var F=T(b.expirationTime<=m);m=tt(),typeof F=="function"?b.callback=F:b===ze(Oe)&&pt(Oe),ye(m)}else pt(Oe);b=ze(Oe)}if(b!==null)var J=!0;else{var G=ze(_e);G!==null&&jt(en,G.startTime-m),J=!1}return J}finally{b=null,O=z,Y=!1}}function ce(){return!(tt()-Nt<Ce)}function Ae(s){Be=s,R||(R=!0,$n())}function jt(s,m){gt=ne(function(){s(tt())},m)}function En(s){throw Error("act(...) is not supported in production builds of React.")}var Et=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),Pn=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),ot=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),Ye=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Rt=Symbol.iterator,tn={isMounted:function(s){return!1},enqueueForceUpdate:function(s,m,z){},enqueueReplaceState:function(s,m,z,T){},enqueueSetState:function(s,m,z,T){}},nn=Object.assign,Ut={};g.prototype.isReactComponent={},g.prototype.setState=function(s,m){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,m,"setState")},g.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")},pe.prototype=g.prototype;var He=j.prototype=new pe;He.constructor=j,nn(He,g.prototype),He.isPureReactComponent=!0;var rn=Array.isArray,Tn=Object.prototype.hasOwnProperty,At={current:null},A={key:!0,ref:!0,__self:!0,__source:!0},se=/\/+/g,X={current:null},de={transition:null};if(typeof performance=="object"&&typeof performance.now=="function")var Te=performance,tt=function(){return Te.now()};else{var on=Date,Bn=on.now();tt=function(){return on.now()-Bn}}var Oe=[],_e=[],Ht=1,b=null,O=3,Y=!1,ge=!1,ve=!1,ne=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var R=!1,Be=null,gt=-1,Ce=5,Nt=-1,Bt=function(){if(Be!==null){var s=tt();Nt=s;var m=!0;try{m=Be(!0,s)}finally{m?$n():(R=!1,Be=null)}}else R=!1};if(typeof Z=="function")var $n=function(){Z(Bt)};else if(typeof MessageChannel<"u"){He=new MessageChannel;var Gr=He.port2;He.port1.onmessage=Bt,$n=function(){Gr.postMessage(null)}}else $n=function(){ne(Bt,0)};He={ReactCurrentDispatcher:X,ReactCurrentOwner:At,ReactCurrentBatchConfig:de,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(s,m){switch(s){case 1:case 2:case 3:case 4:case 5:break;default:s=3}var z=O;O=s;try{return m()}finally{O=z}},unstable_next:function(s){switch(O){case 1:case 2:case 3:var m=3;break;default:m=O}var z=O;O=m;try{return s()}finally{O=z}},unstable_scheduleCallback:function(s,m,z){var T=tt();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?T+z:T):z=T,s){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=z+F,s={id:Ht++,callback:m,priorityLevel:s,startTime:z,expirationTime:F,sortIndex:-1},z>T?(s.sortIndex=z,Ot(_e,s),ze(Oe)===null&&s===ze(_e)&&(ve?(H(gt),gt=-1):ve=!0,jt(en,z-T))):(s.sortIndex=F,Ot(Oe,s),ge||Y||(ge=!0,Ae(ee))),s},unstable_cancelCallback:function(s){s.callback=null},unstable_wrapCallback:function(s){var m=O;return function(){var z=O;O=m;try{return s.apply(this,arguments)}finally{O=z}}},unstable_getCurrentPriorityLevel:function(){return O},unstable_shouldYield:ce,unstable_requestPaint:function(){},unstable_continueExecution:function(){ge||Y||(ge=!0,Ae(ee))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return ze(Oe)},get unstable_now(){return tt},unstable_forceFrameRate:function(s){0>s||125<s?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<s?Math.floor(1e3/s):5},unstable_Profiling:null}},S.Children={map:ft,forEach:function(s,m,z){ft(s,function(){m.apply(this,arguments)},z)},count:function(s){var m=0;return ft(s,function(){m++}),m},toArray:function(s){return ft(s,function(m){return m})||[]},only:function(s){if(!Ft(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},S.Component=g,S.Fragment=Mn,S.Profiler=_,S.PureComponent=j,S.StrictMode=Pn,S.Suspense=lt,S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=He,S.act=En,S.cloneElement=function(s,m,z){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var T=nn({},s.props),F=s.key,J=s.ref,G=s._owner;if(m!=null){if(m.ref!==void 0&&(J=m.ref,G=At.current),m.key!==void 0&&(F=""+m.key),s.type&&s.type.defaultProps)var K=s.type.defaultProps;for(B in m)Tn.call(m,B)&&!A.hasOwnProperty(B)&&(T[B]=m[B]===void 0&&K!==void 0?K[B]:m[B])}var B=arguments.length-2;if(B===1)T.children=z;else if(1<B){K=Array(B);for(var we=0;we<B;we++)K[we]=arguments[we+2];T.children=K}return{$$typeof:Et,type:s.type,key:F,ref:J,props:T,_owner:G}},S.createContext=function(s){return s={$$typeof:ot,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:x,_context:s},s.Consumer=s},S.createElement=dt,S.createFactory=function(s){var m=dt.bind(null,s);return m.type=s,m},S.createRef=function(){return{current:null}},S.forwardRef=function(s){return{$$typeof:me,render:s}},S.isValidElement=Ft,S.lazy=function(s){return{$$typeof:mt,_payload:{_status:-1,_result:s},_init:et}},S.memo=function(s,m){return{$$typeof:Ye,type:s,compare:m===void 0?null:m}},S.startTransition=function(s,m){m=de.transition,de.transition={};try{s()}finally{de.transition=m}},S.unstable_act=En,S.useCallback=function(s,m){return X.current.useCallback(s,m)},S.useContext=function(s){return X.current.useContext(s)},S.useDebugValue=function(s,m){},S.useDeferredValue=function(s){return X.current.useDeferredValue(s)},S.useEffect=function(s,m){return X.current.useEffect(s,m)},S.useId=function(){return X.current.useId()},S.useImperativeHandle=function(s,m,z){return X.current.useImperativeHandle(s,m,z)},S.useInsertionEffect=function(s,m){return X.current.useInsertionEffect(s,m)},S.useLayoutEffect=function(s,m){return X.current.useLayoutEffect(s,m)},S.useMemo=function(s,m){return X.current.useMemo(s,m)},S.useReducer=function(s,m,z){return X.current.useReducer(s,m,z)},S.useRef=function(s){return X.current.useRef(s)},S.useState=function(s){return X.current.useState(s)},S.useSyncExternalStore=function(s,m,z){return X.current.useSyncExternalStore(s,m,z)},S.useTransition=function(){return X.current.useTransition()},S.version="18.3.1"})})();yu=window.React,k=yu,{useState:Ct,useEffect:Wi,useCallback:Cd,useMemo:Xr,useRef:nl,useContext:Ed,createContext:Nd,Fragment:Md,StrictMode:Pd,createElement:Td,Component:_d}=yu});rl();(function(){"use strict";(function(S,Q){typeof exports=="object"&&typeof module<"u"?Q(exports,(rl(),zd(vu))):typeof define=="function"&&define.amd?define(["exports","react"],Q):(S=S||self,Q(S.ReactDOM={},S.React))})(this,function(S,Q){function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function pe(e,t){j(e,t),j(e+"Capture",t)}function j(e,t){for(Cr[e]=t,e=0;e<t.length;e++)Ds.add(t[e])}function dt(e){return ti.call(js,e)?!0:ti.call(Os,e)?!1:ic.test(e)?js[e]=!0:(Os[e]=!0,!1)}function It(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ft(e,t,n,r){if(t===null||typeof t>"u"||It(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}function Dt(e,t,n,r){var o=be.hasOwnProperty(t)?be[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ft(t,n,o,r)&&(n=null),r||o===null?dt(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function qe(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}function ft(e,t,n){if(ci===void 0)try{throw Error()}catch(r){ci=(t=r.stack.trim().match(/\n( *(at )?)/))&&t[1]||""}return`
`+ci+e}function et(e,t){if(!e||di)return"";di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ft(e):""}function Ot(e){switch(e.tag){case 5:return ft(e.type);case 16:return ft("Lazy");case 13:return ft("Suspense");case 19:return ft("SuspenseList");case 0:case 2:case 15:return e=et(e.type,!1),e;case 11:return e=et(e.type.render,!1),e;case 1:return e=et(e.type,!0),e;default:return""}}function ze(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case qn:return"Portal";case li:return"Profiler";case oi:return"StrictMode";case ai:return"Suspense";case si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Us:return(e.displayName||"Context")+".Consumer";case Rs:return(e._context.displayName||"Context")+".Provider";case ii:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ui:return t=e.displayName||null,t!==null?t:ze(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return ze(e(t))}catch{}}return null}function pt(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ze(t);case 8:return t===oi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function De(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function en(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ee(e){e._valueTracker||(e._valueTracker=en(e))}function ce(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ae(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jt(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function En(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=De(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Et(e,t){t=t.checked,t!=null&&Dt(e,"checked",t,!1)}function Nn(e,t){Et(e,t);var n=De(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pn(e,t.type,De(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mn(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pn(e,t,n){(t!=="number"||Ae(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function _(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+De(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function x(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ot(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(Er(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:De(n)}}function me(e,t){var n=De(t.value),r=De(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lt(e,t){t=e.textContent,t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ye(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ye(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}function Rt(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function tn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Rt(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}function nn(e,t){if(t){if(sc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function Ut(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function He(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function rn(e){if(e=yr(e)){if(typeof pi!="function")throw Error(g(280));var t=e.stateNode;t&&(t=oo(t),pi(e.stateNode,e.type,t))}}function Tn(e){tr?nr?nr.push(e):nr=[e]:tr=e}function At(){if(tr){var e=tr,t=nr;if(nr=tr=null,rn(e),t)for(e=0;e<t.length;e++)rn(t[e])}}function A(e,t,n){if(mi)return e(t,n);mi=!0;try{return $s(e,t,n)}finally{mi=!1,(tr!==null||nr!==null)&&(Vs(),At())}}function se(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}function X(e,t,n,r,o,l,i,a,u){Tr=!1,Mo=null,uc.apply(cc,arguments)}function de(e,t,n,r,o,l,i,a,u){if(X.apply(this,arguments),Tr){if(Tr){var p=Mo;Tr=!1,Mo=null}else throw Error(g(198));Po||(Po=!0,hi=p)}}function Te(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function on(e){if(Te(e)!==e)throw Error(g(188))}function Bn(e){var t=e.alternate;if(!t){if(t=Te(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return on(o),e;if(l===r)return on(o),t;l=l.sibling}throw Error(g(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Oe(e){return e=Bn(e),e!==null?_e(e):null}function _e(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_e(e);if(t!==null)return t;e=e.sibling}return null}function Ht(e,t){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}function b(e){return e>>>=0,e===0?32:31-(gc(e)/hc|0)|0}function O(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Y(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=O(a):(l&=i,l!==0&&(r=O(l)))}else i=n&~o,i!==0?r=O(i):l!==0&&(r=O(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function ge(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ve(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-xt(l),a=1<<i,u=o[i];u===-1?(!(a&n)||a&r)&&(o[i]=ge(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function ne(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function H(){var e=bo;return bo<<=1,!(bo&4194240)&&(bo=64),e}function Z(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function R(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Be(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function gt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function Ce(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}function Nt(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function Bt(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=yr(t),t!==null&&hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $n(e,t,n,r,o){switch(t){case"focusin":return gn=Bt(gn,e,t,n,r,o),!0;case"dragenter":return hn=Bt(hn,e,t,n,r,o),!0;case"mouseover":return yn=Bt(yn,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return _r.set(l,Bt(_r.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,br.set(l,Bt(br.get(l)||null,e,t,n,r,o)),!0}return!1}function Gr(e){var t=_n(e.target);if(t!==null){var n=Te(t);if(n!==null){if(t=n.tag,t===13){if(t=tt(n),t!==null){e.blockedOn=t,md(e.priority,function(){fd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=B(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fi=r,n.target.dispatchEvent(r),fi=null}else return t=yr(n),t!==null&&hu(t),e.blockedOn=n,!1;t.shift()}return!0}function m(e,t,n){s(e)&&n.delete(t)}function z(){vi=!1,gn!==null&&s(gn)&&(gn=null),hn!==null&&s(hn)&&(hn=null),yn!==null&&s(yn)&&(yn=null),_r.forEach(m),br.forEach(m)}function T(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,Ws(Qs,z)))}function F(e){if(0<Io.length){T(Io[0],e);for(var t=1;t<Io.length;t++){var n=Io[t];n.blockedOn===e&&(n.blockedOn=null)}}for(gn!==null&&T(gn,e),hn!==null&&T(hn,e),yn!==null&&T(yn,e),t=function(r){return T(r,e)},_r.forEach(t),br.forEach(t),t=0;t<vn.length;t++)n=vn[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<vn.length&&(t=vn[0],t.blockedOn===null);)Gr(t),t.blockedOn===null&&vn.shift()}function J(e,t,n,r){var o=V,l=rr.transition;rr.transition=null;try{V=1,K(e,t,n,r)}finally{V=o,rr.transition=l}}function G(e,t,n,r){var o=V,l=rr.transition;rr.transition=null;try{V=4,K(e,t,n,r)}finally{V=o,rr.transition=l}}function K(e,t,n,r){if(Fo){var o=B(e,t,n,r);if(o===null)sl(e,t,r,Do,n),Nt(e,r);else if($n(o,e,t,n,r))r.stopPropagation();else if(Nt(e,r),t&4&&-1<yc.indexOf(e)){for(;o!==null;){var l=yr(o);if(l!==null&&dd(l),l=B(e,t,n,r),l===null&&sl(e,t,r,Do,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else sl(e,t,r,null,n)}}function B(e,t,n,r){if(Do=null,e=He(r),e=_n(e),e!==null)if(t=Te(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Do=e,null}function we(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pc()){case yi:return 1;case Gs:return 4;case To:case mc:return 16;case Ks:return 536870912;default:return 16}default:return 16}}function Qi(){if(Oo)return Oo;var e,t=wi,n=t.length,r,o="value"in wn?wn.value:wn.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Oo=o.slice(e,1<r?1-r:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Yi(){return!1}function nt(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Zr:Yi,this.isPropagationStopped=Yi,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}function zu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_c[e])?!!t[e]:!1}function ll(e){return zu}function Xi(e,t){switch(e){case"keyup":return Ac.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}function Cu(e,t){switch(e){case"compositionend":return Gi(t);case"keypress":return t.which!==32?null:(nu=!0,tu);case"textInput":return e=t.data,e===tu&&nu?null:e;default:return null}}function Eu(e,t){if(lr)return e==="compositionend"||!Ci&&Xi(e,t)?(e=Qi(),Oo=wi=wn=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eu&&t.locale!=="ko"?null:t.data;default:return null}}function Ki(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bc[e.type]:t==="textarea"}function Nu(e){if(!Yt)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}function Zi(e,t,n,r){Tn(r),t=to(t,"onChange"),0<t.length&&(n=new xi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}function Mu(e){ia(e,0)}function Jr(e){var t=Wn(e);if(ce(t))return e}function Pu(e,t){if(e==="change")return t}function Ji(){Dr&&(Dr.detachEvent("onpropertychange",qi),Or=Dr=null)}function qi(e){if(e.propertyName==="value"&&Jr(Or)){var t=[];Zi(t,Or,e,He(e)),A(Mu,t)}}function Tu(e,t,n){e==="focusin"?(Ji(),Dr=t,Or=n,Dr.attachEvent("onpropertychange",qi)):e==="focusout"&&Ji()}function _u(e,t){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jr(Or)}function bu(e,t){if(e==="click")return Jr(t)}function Lu(e,t){if(e==="input"||e==="change")return Jr(t)}function Iu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}function mr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ti.call(t,o)||!kt(e[o],t[o]))return!1}return!0}function ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ta(e,t){var n=ea(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ea(n)}}function na(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?na(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ra(){for(var e=window,t=Ae();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ae(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fu(e){var t=ra(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&na(n.ownerDocument.documentElement,n)){if(r!==null&&il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ta(n,l);var i=ta(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}function oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ni||ir==null||ir!==Ae(r)||(r=ir,"selectionStart"in r&&il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&mr(jr,r)||(jr=r,r=to(Ei,"onSelect"),0<r.length&&(t=new xi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function eo(e){if(Mi[e])return Mi[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Mi[e]=t[n];return e}function ln(e,t){uu.set(e,t),pe(t,[e])}function la(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,de(r,t,void 0,e),e.currentTarget=null}function ia(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,p=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;la(o,a,p),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,p=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;la(o,a,p),l=u}}}if(Po)throw e=hi,Po=!1,hi=null,e}function te(e,t){var n=t[bi];n===void 0&&(n=t[bi]=new Set);var r=e+"__bubble";n.has(r)||(aa(t,e,2,!1),n.add(r))}function al(e,t,n){var r=0;t&&(r|=4),aa(n,e,r,t)}function gr(e){if(!e[Ro]){e[Ro]=!0,Ds.forEach(function(n){n!=="selectionchange"&&(Vc.has(n)||al(n,!1,e),al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,al("selectionchange",!1,t))}}function aa(e,t,n,r,o){switch(we(t)){case 1:o=J;break;case 4:o=G;break;default:o=K}n=o.bind(null,t,n,e),o=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function sl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=_n(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}A(function(){var p=l,y=He(n),v=[];e:{var h=uu.get(e);if(h!==void 0){var C=xi,N=e;switch(e){case"keypress":if(Kr(n)===0)break e;case"keydown":case"keyup":C=Lc;break;case"focusin":N="focus",C=zi;break;case"focusout":N="blur",C=zi;break;case"beforeblur":case"afterblur":C=zi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=xc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Dc;break;case lu:case iu:case au:C=zc;break;case su:C=jc;break;case"scroll":C=vc;break;case"wheel":C=Uc;break;case"copy":case"cut":case"paste":C=Ec;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=qs}var M=(t&4)!==0,fe=!M&&e==="scroll",d=M?h!==null?h+"Capture":null:h;M=[];for(var c=p,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=se(c,d),w!=null&&M.push(hr(c,w,f)))),fe)break;c=c.return}0<M.length&&(h=new C(h,N,null,n,y),v.push({event:h,listeners:M}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",h&&n!==fi&&(N=n.relatedTarget||n.fromElement)&&(_n(N)||N[Gt]))break e;if((C||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,C?(N=n.relatedTarget||n.toElement,C=p,N=N?_n(N):null,N!==null&&(fe=Te(N),N!==fe||N.tag!==5&&N.tag!==6)&&(N=null)):(C=null,N=p),C!==N)){if(M=Zs,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(M=qs,w="onPointerLeave",d="onPointerEnter",c="pointer"),fe=C==null?h:Wn(C),f=N==null?h:Wn(N),h=new M(w,c+"leave",C,n,y),h.target=fe,h.relatedTarget=f,w=null,_n(y)===p&&(M=new M(d,c+"enter",N,n,y),M.target=f,M.relatedTarget=fe,w=M),fe=w,C&&N)t:{for(M=C,d=N,c=0,f=M;f;f=Vn(f))c++;for(f=0,w=d;w;w=Vn(w))f++;for(;0<c-f;)M=Vn(M),c--;for(;0<f-c;)d=Vn(d),f--;for(;c--;){if(M===d||d!==null&&M===d.alternate)break t;M=Vn(M),d=Vn(d)}M=null}else M=null;C!==null&&sa(v,h,C,M,!1),N!==null&&fe!==null&&sa(v,fe,N,M,!0)}}e:{if(h=p?Wn(p):window,C=h.nodeName&&h.nodeName.toLowerCase(),C==="select"||C==="input"&&h.type==="file")var P=Pu;else if(Ki(h))if(ru)P=Lu;else{P=_u;var L=Tu}else(C=h.nodeName)&&C.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=bu);if(P&&(P=P(e,p))){Zi(v,P,n,y);break e}L&&L(e,h,p),e==="focusout"&&(L=h._wrapperState)&&L.controlled&&h.type==="number"&&Pn(h,"number",h.value)}switch(L=p?Wn(p):window,e){case"focusin":(Ki(L)||L.contentEditable==="true")&&(ir=L,Ei=p,jr=null);break;case"focusout":jr=Ei=ir=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,oa(v,n,y);break;case"selectionchange":if($c)break;case"keydown":case"keyup":oa(v,n,y)}var I;if(Ci)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else lr?Xi(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(eu&&n.locale!=="ko"&&(lr||D!=="onCompositionStart"?D==="onCompositionEnd"&&lr&&(I=Qi()):(wn=y,wi="value"in wn?wn.value:wn.textContent,lr=!0)),L=to(p,D),0<L.length&&(D=new Js(D,e,null,n,y),v.push({event:D,listeners:L}),I?D.data=I:(I=Gi(n),I!==null&&(D.data=I)))),(I=Hc?Cu(e,n):Eu(e,n))&&(p=to(p,"onBeforeInput"),0<p.length&&(y=new Mc("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:p}),y.data=I))}ia(v,t)})}function hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=se(e,n),l!=null&&r.unshift(hr(e,l,o)),l=se(e,t),l!=null&&r.push(hr(e,l,o))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sa(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,p=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&p!==null&&(a=p,o?(u=se(n,l),u!=null&&i.unshift(hr(n,u,a))):o||(u=se(n,l),u!=null&&i.push(hr(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}function ua(e){return(typeof e=="string"?e:""+e).replace(Wc,`
`).replace(Qc,"")}function no(e,t,n,r){if(t=ua(t),ua(e)!==t&&n)throw Error(g(425))}function ro(){}function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function Du(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),F(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);F(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function _n(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ca(e);e!==null;){if(n=e[_t])return n;e=ca(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[_t]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function oo(e){return e[Ur]||null}function an(e){return{current:e}}function $(e,t){0>ur||(e.current=Li[ur],Li[ur]=null,ur--)}function q(e,t,n){ur++,Li[ur]=e.current,e.current=t}function Qn(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Xe(e){return e=e.childContextTypes,e!=null}function da(e,t,n){if(xe.current!==xn)throw Error(g(168));q(xe,t),q(Le,n)}function fa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(g(108,pt(e)||"Unknown",o));return oe({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,jn=xe.current,q(xe,e),q(Le,Le.current),!0}function pa(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=fa(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,$(Le),$(xe),q(xe,e)):$(Le),q(Le,n)}function ma(e){Kt===null?Kt=[e]:Kt.push(e)}function Ou(e){Uo=!0,ma(e)}function sn(){if(!Ii&&Kt!==null){Ii=!0;var e=0,t=V;try{var n=Kt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,Uo=!1}catch(o){throw Kt!==null&&(Kt=Kt.slice(e+1)),Ys(yi,sn),o}finally{V=t,Ii=!1}}return null}function bn(e,t){cr[dr++]=Ho,cr[dr++]=Ao,Ao=e,Ho=t}function ga(e,t,n){st[ut++]=Zt,st[ut++]=Jt,st[ut++]=Rn,Rn=e;var r=Zt;e=Jt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var l=32-xt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Zt=1<<32-xt(t)+o|n<<o|r,Jt=l+e}else Zt=1<<l|n<<o|r,Jt=e}function dl(e){e.return!==null&&(bn(e,1),ga(e,1,0))}function fl(e){for(;e===Ao;)Ao=cr[--dr],cr[dr]=null,Ho=cr[--dr],cr[dr]=null;for(;e===Rn;)Rn=st[--ut],st[ut]=null,Jt=st[--ut],st[ut]=null,Zt=st[--ut],st[ut]=null}function ha(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,Ke=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:Zt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,Ke=null,!0):!1;default:return!1}}function pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(re){var t=Ke;if(t){var n=t;if(!ya(e,t)){if(pl(e))throw Error(g(418));t=$t(n.nextSibling);var r=rt;t&&ya(e,t)?ha(r,n):(e.flags=e.flags&-4097|2,re=!1,rt=e)}}else{if(pl(e))throw Error(g(418));e.flags=e.flags&-4097|2,re=!1,rt=e}}}function va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function io(e){if(e!==rt)return!1;if(!re)return va(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=Ke)){if(pl(e)){for(e=Ke;e;)e=$t(e.nextSibling);throw Error(g(418))}for(;t;)ha(e,t),t=$t(t.nextSibling)}if(va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=rt?$t(e.stateNode.nextSibling):null;return!0}function Yn(){Ke=rt=null,re=!1}function gl(e){St===null?St=[e]:St.push(e)}function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wa(e){var t=e._init;return t(e._payload)}function xa(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=pn(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,w){return c===null||c.tag!==6?(c=Gl(f,d.mode,w),c.return=d,c):(c=o(c,f),c.return=d,c)}function u(d,c,f,w){var P=f.type;return P===er?y(d,c,f.props.children,w,f.key):c!==null&&(c.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===mn&&wa(P)===c.type)?(w=o(c,f.props),w.ref=vr(d,c,f),w.return=d,w):(w=vo(f.type,f.key,f.props,null,d.mode,w),w.ref=vr(d,c,f),w.return=d,w)}function p(d,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Kl(f,d.mode,w),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function y(d,c,f,w,P){return c===null||c.tag!==7?(c=On(f,d.mode,w,P),c.return=d,c):(c=o(c,f),c.return=d,c)}function v(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Eo:return f=vo(c.type,c.key,c.props,null,d.mode,f),f.ref=vr(d,null,c),f.return=d,f;case qn:return c=Kl(c,d.mode,f),c.return=d,c;case mn:var w=c._init;return v(d,w(c._payload),f)}if(Er(c)||qe(c))return c=On(c,d.mode,f,null),c.return=d,c;ao(d,c)}return null}function h(d,c,f,w){var P=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return P!==null?null:a(d,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Eo:return f.key===P?u(d,c,f,w):null;case qn:return f.key===P?p(d,c,f,w):null;case mn:return P=f._init,h(d,c,P(f._payload),w)}if(Er(f)||qe(f))return P!==null?null:y(d,c,f,w,null);ao(d,f)}return null}function C(d,c,f,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(c,d,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Eo:return d=d.get(w.key===null?f:w.key)||null,u(c,d,w,P);case qn:return d=d.get(w.key===null?f:w.key)||null,p(c,d,w,P);case mn:var L=w._init;return C(d,c,f,L(w._payload),P)}if(Er(w)||qe(w))return d=d.get(f)||null,y(c,d,w,P,null);ao(c,w)}return null}function N(d,c,f,w){for(var P=null,L=null,I=c,D=c=0,Pe=null;I!==null&&D<f.length;D++){I.index>D?(Pe=I,I=null):Pe=I.sibling;var W=h(d,I,f[D],w);if(W===null){I===null&&(I=Pe);break}e&&I&&W.alternate===null&&t(d,I),c=l(W,c,D),L===null?P=W:L.sibling=W,L=W,I=Pe}if(D===f.length)return n(d,I),re&&bn(d,D),P;if(I===null){for(;D<f.length;D++)I=v(d,f[D],w),I!==null&&(c=l(I,c,D),L===null?P=I:L.sibling=I,L=I);return re&&bn(d,D),P}for(I=r(d,I);D<f.length;D++)Pe=C(I,d,D,f[D],w),Pe!==null&&(e&&Pe.alternate!==null&&I.delete(Pe.key===null?D:Pe.key),c=l(Pe,c,D),L===null?P=Pe:L.sibling=Pe,L=Pe);return e&&I.forEach(function(Cn){return t(d,Cn)}),re&&bn(d,D),P}function M(d,c,f,w){var P=qe(f);if(typeof P!="function")throw Error(g(150));if(f=P.call(f),f==null)throw Error(g(151));for(var L=P=null,I=c,D=c=0,Pe=null,W=f.next();I!==null&&!W.done;D++,W=f.next()){I.index>D?(Pe=I,I=null):Pe=I.sibling;var Cn=h(d,I,W.value,w);if(Cn===null){I===null&&(I=Pe);break}e&&I&&Cn.alternate===null&&t(d,I),c=l(Cn,c,D),L===null?P=Cn:L.sibling=Cn,L=Cn,I=Pe}if(W.done)return n(d,I),re&&bn(d,D),P;if(I===null){for(;!W.done;D++,W=f.next())W=v(d,W.value,w),W!==null&&(c=l(W,c,D),L===null?P=W:L.sibling=W,L=W);return re&&bn(d,D),P}for(I=r(d,I);!W.done;D++,W=f.next())W=C(I,d,D,W.value,w),W!==null&&(e&&W.alternate!==null&&I.delete(W.key===null?D:W.key),c=l(W,c,D),L===null?P=W:L.sibling=W,L=W);return e&&I.forEach(function(hd){return t(d,hd)}),re&&bn(d,D),P}function fe(d,c,f,w){if(typeof f=="object"&&f!==null&&f.type===er&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Eo:e:{for(var P=f.key,L=c;L!==null;){if(L.key===P){if(P=f.type,P===er){if(L.tag===7){n(d,L.sibling),c=o(L,f.props.children),c.return=d,d=c;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===mn&&wa(P)===L.type){n(d,L.sibling),c=o(L,f.props),c.ref=vr(d,L,f),c.return=d,d=c;break e}n(d,L);break}else t(d,L);L=L.sibling}f.type===er?(c=On(f.props.children,d.mode,w,f.key),c.return=d,d=c):(w=vo(f.type,f.key,f.props,null,d.mode,w),w.ref=vr(d,c,f),w.return=d,d=w)}return i(d);case qn:e:{for(L=f.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Kl(f,d.mode,w),c.return=d,d=c}return i(d);case mn:return L=f._init,fe(d,c,L(f._payload),w)}if(Er(f))return N(d,c,f,w);if(qe(f))return M(d,c,f,w);ao(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=Gl(f,d.mode,w),c.return=d,d=c),i(d)):n(d,c)}return fe}function hl(){Fi=pr=$o=null}function yl(e,t){t=Bo.current,$(Bo),e._currentValue=t}function vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){$o=e,Fi=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Fi!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if($o===null)throw Error(g(308));pr=e,$o.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}function wl(e){Un===null?Un=[e]:Un.push(e)}function ka(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,wl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Jc(e,n)}return o=r.interleaved,o===null?(t.next=t,wl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Vt(e,n)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gt(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var o=e.updateQueue;kn=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,p=u.next;u.next=null,i===null?l=p:i.next=p,i=u;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==i&&(a===null?y.firstBaseUpdate=p:a.next=p,y.lastBaseUpdate=u))}if(l!==null){var v=o.baseState;i=0,y=p=u=null,a=l;do{var h=a.lane,C=a.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var N=e,M=a;switch(h=t,C=n,M.tag){case 1:if(N=M.payload,typeof N=="function"){v=N.call(C,v,h);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=M.payload,h=typeof N=="function"?N.call(C,v,h):N,h==null)break e;v=oe({},v,h);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else C={eventTime:C,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(p=y=C,u=v):y=y.next=C,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(y===null&&(u=v),o.baseState=u,o.firstBaseUpdate=p,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Hn|=i,e.lanes=i,e.memoizedState=v}}function Ca(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(g(191,o));o.call(r)}}}function Ln(e){if(e===Ar)throw Error(g(174));return e}function kl(e,t){switch(q(Br,t),q(Hr,e),q(bt,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mt(t,e)}$(bt),q(bt,t)}function Gn(e){$(bt),$(Hr),$(Br)}function Ea(e){Ln(Br.current);var t=Ln(bt.current),n=mt(t,e.type);t!==n&&(q(Hr,e),q(bt,n))}function Sl(e){Hr.current===e&&($(bt),$(Hr))}function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function zl(){for(var e=0;e<Di.length;e++)Di[e]._workInProgressVersionPrimary=null;Di.length=0}function je(){throw Error(g(321))}function Cl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function El(e,t,n,r,o,l){if(An=l,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?ed:td,e=n(r,o),$r){l=0;do{if($r=!1,Vr=0,25<=l)throw Error(g(301));l+=1,Ne=ke=null,t.updateQueue=null,Vo.current=nd,e=n(r,o)}while($r)}if(Vo.current=Qo,t=ke!==null&&ke.next!==null,An=0,Ne=ke=ie=null,Wo=!1,t)throw Error(g(300));return e}function Nl(){var e=Vr!==0;return Vr=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ie.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function at(){if(ke===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ne===null?ie.memoizedState:Ne.next;if(t!==null)Ne=t,ke=e;else{if(e===null)throw Error(g(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ne===null?ie.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function wr(e,t){return typeof t=="function"?t(e):t}function Ml(e,t,n){if(t=at(),n=t.queue,n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=ke,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,p=l;do{var y=p.lane;if((An&y)===y)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(a=u=v,i=r):u=u.next=v,ie.lanes|=y,Hn|=y}p=p.next}while(p!==null&&p!==l);u===null?i=r:u.next=a,kt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ie.lanes|=l,Hn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pl(e,t,n){if(t=at(),n=t.queue,n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);kt(l,t.memoizedState)||(Ze=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Na(e,t,n){}function Ma(e,t,n){n=ie;var r=at(),o=t(),l=!kt(r.memoizedState,o);if(l&&(r.memoizedState=o,Ze=!0),r=r.queue,Tl(_a.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,xr(9,Ta.bind(null,n,r,o,t),void 0,null),Me===null)throw Error(g(349));An&30||Pa(n,t,o)}return o}function Pa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ta(e,t,n,r){t.value=n,t.getSnapshot=r,ba(t)&&La(e)}function _a(e,t,n){return n(function(){ba(t)&&La(e)})}function ba(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function La(e){var t=Vt(e,1);t!==null&&vt(t,e,1,-1)}function Ia(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Uu.bind(null,ie,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fa(e){return at().memoizedState}function fo(e,t,n,r){var o=Mt();ie.flags|=e,o.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function po(e,t,n,r){var o=at();r=r===void 0?null:r;var l=void 0;if(ke!==null){var i=ke.memoizedState;if(l=i.destroy,r!==null&&Cl(r,i.deps)){o.memoizedState=xr(t,n,l,r);return}}ie.flags|=e,o.memoizedState=xr(1|t,n,l,r)}function Da(e,t){return fo(8390656,8,e,t)}function Tl(e,t){return po(2048,8,e,t)}function Oa(e,t){return po(4,2,e,t)}function ja(e,t){return po(4,4,e,t)}function Ra(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ua(e,t,n){return n=n!=null?n.concat([e]):null,po(4,4,Ra.bind(null,t,e),n)}function _l(e,t){}function Aa(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ha(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ba(e,t,n){return An&21?(kt(n,t)||(n=H(),ie.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function ju(e,t,n){n=V,V=n!==0&&4>n?n:4,e(!0);var r=Oi.transition;Oi.transition={};try{e(!1),t()}finally{V=n,Oi.transition=r}}function $a(){return at().memoizedState}function Ru(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Va(e))Wa(t,n);else if(n=ka(e,t,n,r),n!==null){var o=Ve();vt(n,e,r,o),Qa(n,t,r)}}function Uu(e,t,n){var r=dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Va(e))Wa(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,kt(a,i)){var u=t.interleaved;u===null?(o.next=o,wl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=ka(e,t,o,r),n!==null&&(o=Ve(),vt(n,e,r,o),Qa(n,t,r))}}function Va(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Wa(e,t){$r=Wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gt(e,n)}}function ht(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}function Ya(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(o,l):!0}function Xa(e,t,n){var r=!1,o=xn,l=t.contextType;return typeof l=="object"&&l!==null?l=it(l):(o=Xe(t)?jn:xe.current,r=t.contextTypes,l=(r=r!=null)?Qn(e,o):xn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function Ll(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=it(l):(l=Xe(t)?jn:xe.current,o.context=Qn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(bl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yo.enqueueReplaceState(o,o.state,null),uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=Ot(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}function Ka(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zo||(Zo=!0,Bi=r),Fl(e,t)},n}function Za(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Fl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Fl(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ja(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function es(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}function $e(e,t,n,r){t.child=e===null?fu(t,null,n,r):fr(t,e.child,n,r)}function ts(e,t,n,r,o){n=n.render;var l=t.ref;return Xn(t,o),r=El(e,t,n,r,l,o),n=Nl(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(re&&n&&dl(t),t.flags|=1,$e(e,t,r,o),t.child)}function ns(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Xl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,rs(e,t,l,r,o)):(e=vo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(i,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=pn(l,r),e.ref=t.ref,e.return=t,t.child=e}function rs(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(mr(l,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Dl(e,t,n,r,o)}function os(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Lt,Qe),Qe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Lt,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,q(Lt,Qe),Qe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,q(Lt,Qe),Qe|=r;return $e(e,t,o,n),t.child}function ls(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,o){var l=Xe(n)?jn:xe.current;return l=Qn(t,l),Xn(t,o),n=El(e,t,n,r,l,o),r=Nl(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(re&&r&&dl(t),t.flags|=1,$e(e,t,n,o),t.child)}function is(e,t,n,r,o){if(Xe(n)){var l=!0;lo(t)}else l=!1;if(Xn(t,o),t.stateNode===null)go(e,t),Xa(t,n,r),Ll(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,p=n.contextType;typeof p=="object"&&p!==null?p=it(p):(p=Xe(n)?jn:xe.current,p=Qn(t,p));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==p)&&Ga(t,i,r,p),kn=!1;var h=t.memoizedState;i.state=h,uo(t,r,i,o),u=t.memoizedState,a!==r||h!==u||Le.current||kn?(typeof y=="function"&&(bl(t,n,y,r),u=t.memoizedState),(a=kn||Ya(t,n,a,r,h,u,p))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=p,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Sa(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:ht(t.type,a),i.props=p,v=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=it(u):(u=Xe(n)?jn:xe.current,u=Qn(t,u));var C=n.getDerivedStateFromProps;(y=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==v||h!==u)&&Ga(t,i,r,u),kn=!1,h=t.memoizedState,i.state=h,uo(t,r,i,o);var N=t.memoizedState;a!==v||h!==N||Le.current||kn?(typeof C=="function"&&(bl(t,n,C,r),N=t.memoizedState),(p=kn||Ya(t,n,p,r,h,N,u)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=u,r=p):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,l,o)}function Ol(e,t,n,r,o,l){ls(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&pa(t,n,!1),Qt(e,t,l);r=t.stateNode,od.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=fr(t,e.child,null,l),t.child=fr(t,null,a,l)):$e(e,t,a,l),t.memoizedState=r.state,o&&pa(t,n,!0),t.child}function as(e){var t=e.stateNode;t.pendingContext?da(e,t.pendingContext,t.pendingContext!==t.context):t.context&&da(e,t.context,!1),kl(e,t.containerInfo)}function ss(e,t,n,r,o){return Yn(),gl(o),t.flags|=256,$e(e,t,n,r),t.child}function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function us(e,t,n){var r=t.pendingProps,o=le.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(le,o&1),e===null)return ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=wo(i,r,0,null),e=On(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=jl(n),t.memoizedState=ji,e):Rl(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Au(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=pn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=pn(a,l):(l=On(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?jl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ji,r}return l=e.child,e=l.sibling,r=pn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t,n){return t=wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&gl(r),fr(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Au(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(g(422))),mo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=wo({mode:"visible",children:r.children},o,0,null),l=On(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&fr(t,e.child,null,i),t.child.memoizedState=jl(i),t.memoizedState=ji,l);if(!(t.mode&1))return mo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(g(419)),r=Il(l,r,void 0),mo(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ze||a){if(r=Me,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Vt(e,o),vt(r,e,o,-1))}return Yl(),r=Il(Error(g(421))),mo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Zu.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ke=$t(o.nextSibling),rt=t,re=!0,St=null,e!==null&&(st[ut++]=Zt,st[ut++]=Jt,st[ut++]=Rn,Zt=e.id,Jt=e.overflow,Rn=t),t=Rl(t,r.children),t.flags|=4096,t)}function cs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vl(e.return,t,n)}function Ul(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function ds(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if($e(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cs(e,n,t);else if(e.tag===19)cs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(le,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ul(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ul(t,!0,n,null,l);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hu(e,t,n){switch(t.tag){case 3:as(t),Yn();break;case 5:Ea(t);break;case 1:Xe(t.type)&&lo(t);break;case 4:kl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(Bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?us(e,t,n):(q(le,le.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);q(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ds(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,os(e,t,n)}return Qt(e,t,n)}function kr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bu(e,t,n){var r=t.pendingProps;switch(fl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Xe(t.type)&&($(Le),$(xe)),Re(t),null;case 3:return r=t.stateNode,Gn(),$(Le),$(xe),zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(Wl(St),St=null))),pu(e,t),Re(t),null;case 5:Sl(t);var o=Ln(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)id(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return Re(t),null}if(e=Ln(bt.current),io(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[_t]=t,r[Ur]=l,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)te(Rr[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":En(r,l),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},te("invalid",r);break;case"textarea":ot(r,l),te("invalid",r)}nn(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&no(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&no(r.textContent,a,e),o=["children",""+a]):Cr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&te("scroll",r)}switch(n){case"input":ee(r),Mn(r,l,!0);break;case"textarea":ee(r),lt(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ye(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[_t]=t,e[Ur]=r,ld(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ut(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)te(Rr[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":En(e,r),o=jt(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),te("invalid",e);break;case"textarea":ot(e,r),o=x(e,r),te("invalid",e);break;default:o=r}nn(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?tn(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bs(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Nr(e,u):typeof u=="number"&&Nr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Cr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&te("scroll",e):u!=null&&Dt(e,l,u,i))}switch(n){case"input":ee(e),Mn(e,r,!1);break;case"textarea":ee(e),lt(e);break;case"option":r.value!=null&&e.setAttribute("value",""+De(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?_(e,!!r.multiple,l,!1):r.defaultValue!=null&&_(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=Ln(Br.current),Ln(bt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(l=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Re(t),null;case 13:if($(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ke!==null&&t.mode&1&&!(t.flags&128)){for(l=Ke;l;)l=$t(l.nextSibling);Yn(),t.flags|=98560,l=!1}else if(l=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(g(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));l[_t]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),l=!1}else St!==null&&(Wl(St),St=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?Se===0&&(Se=3):Yl())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return Gn(),pu(e,t),e===null&&gr(t.stateNode.containerInfo),Re(t),null;case 10:return yl(t.type._context),Re(t),null;case 17:return Xe(t.type)&&($(Le),$(xe)),Re(t),null;case 19:if($(le),l=t.memoizedState,l===null)return Re(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)kr(l,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=co(e),i!==null){for(t.flags|=128,kr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(le,le.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ee()>Hi&&(t.flags|=128,r=!0,kr(l,!1),t.lanes=4194304)}else{if(!r)if(e=co(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return Re(t),null}else 2*Ee()-l.renderingStartTime>Hi&&n!==1073741824&&(t.flags|=128,r=!0,kr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ee(),t.sibling=null,n=le.current,q(le,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Qe=Lt.current,$(Lt),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function $u(e,t,n){switch(fl(t),t.tag){case 1:return Xe(t.type)&&($(Le),$(xe)),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),$(Le),$(xe),zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if($(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(le),null;case 4:return Gn(),null;case 10:return yl(t.type._context),null;case 22:case 23:return Qe=Lt.current,$(Lt),null;case 24:return null;default:return null}}function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Al(e,t,n){try{n()}catch(r){ue(e,t,r)}}function Vu(e,t){if(Pi=Fo,e=ra(),il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,p=0,y=0,v=e,h=null;t:for(;;){for(var C;v!==n||o!==0&&v.nodeType!==3||(a=i+o),v!==l||r!==0&&v.nodeType!==3||(u=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(C=v.firstChild)!==null;)h=v,v=C;for(;;){if(v===e)break t;if(h===n&&++p===o&&(a=i),h===l&&++y===r&&(u=i),(C=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=C}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},Fo=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var M=N.memoizedProps,fe=N.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?M:ht(t.type,M),fe);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(w){ue(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return N=mu,mu=!1,N}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Al(t,n,l)}o=o.next}while(o!==r)}}function ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fs(e){var t=e.alternate;t!==null&&(e.alternate=null,fs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[Ur],delete t[bi],delete t[Gc],delete t[Kc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ps(e){return e.tag===5||e.tag===3||e.tag===4}function ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ps(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function cn(e,t,n){for(n=n.child;n!==null;)gs(e,t,n),n=n.sibling}function gs(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:Ue||Zn(n,t);case 6:var r=Ie,o=zt;Ie=null,cn(e,t,n),Ie=r,zt=o,Ie!==null&&(zt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(zt?(e=Ie,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),F(e)):cl(Ie,n.stateNode));break;case 4:r=Ie,o=zt,Ie=n.stateNode.containerInfo,zt=!0,cn(e,t,n),Ie=r,zt=o;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Al(n,t,i),o=o.next}while(o!==r)}cn(e,t,n);break;case 1:if(!Ue&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,cn(e,t,n),Ue=r):cn(e,t,n);break;default:cn(e,t,n)}}function hs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sd),t.forEach(function(r){var o=Ju.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function yt(e,t,n){if(n=t.deletions,n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,zt=!1;break e;case 3:Ie=a.stateNode.containerInfo,zt=!0;break e;case 4:Ie=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(Ie===null)throw Error(g(160));gs(l,i,o),Ie=null,zt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(p){ue(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ys(t,e),t=t.sibling}function ys(e,t,n){var r=e.alternate;switch(n=e.flags,e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),Pt(e),n&4){try{Sr(3,e,e.return),ho(3,e)}catch(M){ue(e,e.return,M)}try{Sr(5,e,e.return)}catch(M){ue(e,e.return,M)}}break;case 1:yt(t,e),Pt(e),n&512&&r!==null&&Zn(r,r.return);break;case 5:if(yt(t,e),Pt(e),n&512&&r!==null&&Zn(r,r.return),e.flags&32){var o=e.stateNode;try{Nr(o,"")}catch(M){ue(e,e.return,M)}}if(n&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=r!==null?r.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Et(o,l),Ut(a,i);var p=Ut(a,l);for(i=0;i<u.length;i+=2){var y=u[i],v=u[i+1];y==="style"?tn(o,v):y==="dangerouslySetInnerHTML"?Bs(o,v):y==="children"?Nr(o,v):Dt(o,y,v,p)}switch(a){case"input":Nn(o,l);break;case"textarea":me(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var C=l.value;C!=null?_(o,!!l.multiple,C,!1):h!==!!l.multiple&&(l.defaultValue!=null?_(o,!!l.multiple,l.defaultValue,!0):_(o,!!l.multiple,l.multiple?[]:"",!1))}o[Ur]=l}catch(M){ue(e,e.return,M)}}break;case 6:if(yt(t,e),Pt(e),n&4){if(e.stateNode===null)throw Error(g(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(M){ue(e,e.return,M)}}break;case 3:if(yt(t,e),Pt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{F(t.containerInfo)}catch(M){ue(e,e.return,M)}break;case 4:yt(t,e),Pt(e);break;case 13:yt(t,e),Pt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ai=Ee())),n&4&&hs(e);break;case 22:if(y=r!==null&&r.memoizedState!==null,e.mode&1?(Ue=(p=Ue)||y,yt(t,e),Ue=p):yt(t,e),Pt(e),n&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&e.mode&1)for(E=e,y=e.child;y!==null;){for(v=E=y;E!==null;){switch(h=E,C=h.child,h.tag){case 0:case 11:case 14:case 15:Sr(4,h,h.return);break;case 1:Zn(h,h.return);var N=h.stateNode;if(typeof N.componentWillUnmount=="function"){n=h,t=h.return;try{r=n,N.props=r.memoizedProps,N.state=r.memoizedState,N.componentWillUnmount()}catch(M){ue(n,t,M)}}break;case 5:Zn(h,h.return);break;case 22:if(h.memoizedState!==null){xs(v);continue}}C!==null?(C.return=h,E=C):xs(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{o=v.stateNode,p?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,u=v.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Rt("display",i))}catch(M){ue(e,e.return,M)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(M){ue(e,e.return,M)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:yt(t,e),Pt(e),n&4&&hs(e);break;case 21:break;default:yt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ps(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Nr(o,""),r.flags&=-33);var l=ms(e);$l(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=ms(e);Bl(e,a,i);break;default:throw Error(g(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wu(e,t,n){E=e,vs(e,t,n)}function vs(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Xo;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||Ue;a=Xo;var p=Ue;if(Xo=i,(Ue=u)&&!p)for(E=o;E!==null;)i=E,u=i.child,i.tag===22&&i.memoizedState!==null?ks(o):u!==null?(u.return=i,E=u):ks(o);for(;l!==null;)E=l,vs(l,t,n),l=l.sibling;E=o,Xo=a,Ue=p}ws(e,t,n)}else o.subtreeFlags&8772&&l!==null?(l.return=o,E=l):ws(e,t,n)}}function ws(e,t,n){for(;E!==null;){if(t=E,t.flags&8772){n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ca(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ca(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&F(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}Ue||t.flags&512&&Hl(t)}catch(h){ue(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function xs(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function ks(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ho(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ue(t,o,u)}}var l=t.return;try{Hl(t)}catch(u){ue(t,l,u)}break;case 5:var i=t.return;try{Hl(t)}catch(u){ue(t,i,u)}}}catch(u){ue(t,t.return,u)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}function zr(){Hi=Ee()+500}function Ve(){return U&6?Ee():el!==-1?el:el=Ee()}function dn(e){return e.mode&1?U&2&&Fe!==0?Fe&-Fe:Zc.transition!==null?(tl===0&&(tl=H()),tl):(e=V,e!==0||(e=window.event,e=e===void 0?16:we(e.type)),e):1}function vt(e,t,n,r){if(50<Yr)throw Yr=0,$i=null,Error(g(185));R(e,n,r),(!(U&2)||e!==Me)&&(e===Me&&(!(U&2)&&(Ko|=n),Se===4&&fn(e,Fe)),Ge(e,r),n===1&&U===0&&!(t.mode&1)&&(zr(),Uo&&sn()))}function Ge(e,t){var n=e.callbackNode;ve(e,t);var r=Y(e,e===Me?Fe:0);if(r===0)n!==null&&Xs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xs(n),t===1)e.tag===0?Ou(zs.bind(null,e)):ma(zs.bind(null,e)),Xc(function(){!(U&6)&&sn()}),n=null;else{switch(Ce(r)){case 1:n=yi;break;case 4:n=Gs;break;case 16:n=To;break;case 536870912:n=Ks;break;default:n=To}n=_s(n,Ss.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ss(e,t){if(el=-1,tl=0,U&6)throw Error(g(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=Y(e,e===Me?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yo(e,r);else{t=r;var o=U;U|=2;var l=Es();(Me!==e||Fe!==t)&&(qt=null,zr(),Fn(e,t));do try{Xu();break}catch(a){Cs(e,a)}while(!0);hl(),Go.current=l,U=o,he!==null?t=0:(Me=null,Fe=0,t=Se)}if(t!==0){if(t===2&&(o=ne(e),o!==0&&(r=o,t=Vl(e,o))),t===1)throw n=Wr,Fn(e,0),fn(e,r),Ge(e,Ee()),n;if(t===6)fn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qu(o)&&(t=yo(e,r),t===2&&(l=ne(e),l!==0&&(r=l,t=Vl(e,l))),t===1))throw n=Wr,Fn(e,0),fn(e,r),Ge(e,Ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:Dn(e,Je,qt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=Ai+500-Ee(),10<t)){if(Y(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_i(Dn.bind(null,e,Je,qt),t);break}Dn(e,Je,qt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-xt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ud(r/1960))-r,10<r){e.timeoutHandle=_i(Dn.bind(null,e,Je,qt),r);break}Dn(e,Je,qt);break;case 5:Dn(e,Je,qt);break;default:throw Error(g(329))}}}return Ge(e,Ee()),e.callbackNode===n?Ss.bind(null,e):null}function Vl(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=yo(e,t),e!==2&&(t=Je,Je=n,t!==null&&Wl(t)),e}function Wl(e){Je===null?Je=e:Je.push.apply(Je,e)}function Qu(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!kt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Ui,t&=~Ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function zs(e){if(U&6)throw Error(g(327));Jn();var t=Y(e,0);if(!(t&1))return Ge(e,Ee()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=ne(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=Wr,Fn(e,0),fn(e,t),Ge(e,Ee()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Je,qt),Ge(e,Ee()),null}function Ql(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(zr(),Uo&&sn())}}function In(e){zn!==null&&zn.tag===0&&!(U&6)&&Jn();var t=U;U|=1;var n=We.transition,r=V;try{if(We.transition=null,V=1,e)return e()}finally{V=r,We.transition=n,U=t,!(U&6)&&sn()}}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yc(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(fl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&($(Le),$(xe));break;case 3:Gn(),$(Le),$(xe),zl();break;case 5:Sl(r);break;case 4:Gn();break;case 13:$(le);break;case 19:$(le);break;case 10:yl(r.type._context);break;case 22:case 23:Qe=Lt.current,$(Lt)}n=n.return}if(Me=e,he=e=pn(e.current,null),Fe=Qe=t,Se=0,Wr=null,Ui=Ko=Hn=0,Je=Qr=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Un=null}return e}function Cs(e,t){do{var n=he;try{if(hl(),Vo.current=Qo,Wo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Wo=!1}if(An=0,Ne=ke=ie=null,$r=!1,Vr=0,Ri.current=null,n===null||n.return===null){Se=1,Wr=t,he=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=Fe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,y=a,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var C=qa(i);if(C!==null){C.flags&=-257,es(C,i,a,l,t),C.mode&1&&Ja(l,p,t),t=C,u=p;var N=t.updateQueue;if(N===null){var M=new Set;M.add(u),t.updateQueue=M}else N.add(u);break e}else{if(!(t&1)){Ja(l,p,t),Yl();break e}u=Error(g(426))}}else if(re&&a.mode&1){var fe=qa(i);if(fe!==null){!(fe.flags&65536)&&(fe.flags|=256),es(fe,i,a,l,t),gl(Kn(u,a));break e}}l=u=Kn(u,a),Se!==4&&(Se=2),Qr===null?Qr=[l]:Qr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Ka(l,u,t);za(l,d);break e;case 1:a=u;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sn===null||!Sn.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Za(l,a,t);za(l,w);break e}}l=l.return}while(l!==null)}Ms(n)}catch(P){t=P,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Es(){var e=Go.current;return Go.current=Qo,e===null?Qo:e}function Yl(){(Se===0||Se===3||Se===2)&&(Se=4),Me===null||!(Hn&268435455)&&!(Ko&268435455)||fn(Me,Fe)}function yo(e,t){var n=U;U|=2;var r=Es();(Me!==e||Fe!==t)&&(qt=null,Fn(e,t));do try{Yu();break}catch(o){Cs(e,o)}while(!0);if(hl(),U=n,Go.current=r,he!==null)throw Error(g(261));return Me=null,Fe=0,Se}function Yu(){for(;he!==null;)Ns(he)}function Xu(){for(;he!==null&&!dc();)Ns(he)}function Ns(e){var t=cd(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Ms(e):he=t,Ri.current=null}function Ms(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$u(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,he=null;return}}else if(n=Bu(n,t,Qe),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);Se===0&&(Se=5)}function Dn(e,t,n){var r=V,o=We.transition;try{We.transition=null,V=1,Gu(e,t,n,r)}finally{We.transition=o,V=r}return null}function Gu(e,t,n,r){do Jn();while(zn!==null);if(U&6)throw Error(g(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Be(e,l),e===Me&&(he=Me=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,_s(To,function(){return Jn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=We.transition,We.transition=null;var i=V;V=1;var a=U;U|=4,Ri.current=null,Vu(e,n),ys(n,e),Fu(Ti),Fo=!!Pi,Ti=Pi=null,e.current=n,Wu(n,e,o),fc(),U=a,V=i,We.transition=l}else e.current=n;if(Jo&&(Jo=!1,zn=e,qo=o),l=e.pendingLanes,l===0&&(Sn=null),Ht(n.stateNode,r),Ge(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Zo)throw Zo=!1,e=Bi,Bi=null,e;return qo&1&&e.tag!==0&&Jn(),l=e.pendingLanes,l&1?e===$i?Yr++:(Yr=0,$i=e):Yr=0,sn(),null}function Jn(){if(zn!==null){var e=Ce(qo),t=We.transition,n=V;try{if(We.transition=null,V=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,qo=0,U&6)throw Error(g(331));var o=U;for(U|=4,E=e.current;E!==null;){var l=E,i=l.child;if(E.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var p=a[u];for(E=p;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:Sr(8,y,l)}var v=y.child;if(v!==null)v.return=y,E=v;else for(;E!==null;){y=E;var h=y.sibling,C=y.return;if(fs(y),y===p){E=null;break}if(h!==null){h.return=C,E=h;break}E=C}}}var N=l.alternate;if(N!==null){var M=N.child;if(M!==null){N.child=null;do{var fe=M.sibling;M.sibling=null,M=fe}while(M!==null)}}E=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,E=i;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Sr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,E=d;break e}E=l.return}}var c=e.current;for(E=c;E!==null;){i=E;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,E=f;else e:for(i=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ho(9,a)}}catch(P){ue(a,a.return,P)}if(a===i){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(U=o,sn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{V=n,We.transition=t}}return!1}function Ps(e,t,n){t=Kn(n,t),t=Ka(e,t,1),e=un(e,t,1),t=Ve(),e!==null&&(R(e,1,t),Ge(e,t))}function ue(e,t,n){if(e.tag===3)Ps(e,e,n);else for(;t!==null;){if(t.tag===3){Ps(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=Kn(n,e),e=Za(t,e,1),t=un(t,e,1),e=Ve(),t!==null&&(R(t,1,e),Ge(t,e));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Fe&n)===n&&(Se===4||Se===3&&(Fe&130023424)===Fe&&500>Ee()-Ai?Fn(e,0):Ui|=n),Ge(e,t)}function Ts(e,t){t===0&&(e.mode&1?(t=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):t=1);var n=Ve();e=Vt(e,t),e!==null&&(R(e,t,n),Ge(e,n))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ts(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Ts(e,n)}function _s(e,t){return Ys(e,t)}function qu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ec(e){if(typeof e=="function")return Xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ii)return 11;if(e===ui)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Xl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case er:return On(n.children,o,l,t);case oi:i=8,o|=8;break;case li:return e=ct(12,n,t,o|2),e.elementType=li,e.lanes=l,e;case ai:return e=ct(13,n,t,o),e.elementType=ai,e.lanes=l,e;case si:return e=ct(19,n,t,o),e.elementType=si,e.lanes=l,e;case As:return wo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rs:i=10;break e;case Us:i=9;break e;case ii:i=11;break e;case ui:i=14;break e;case mn:i=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=ct(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function On(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function wo(e,t,n,r){return e=ct(22,e,r,t),e.elementType=As,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tc(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Z(0),this.expirationTimes=Z(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Z(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zl(e,t,n,r,o,l,i,a,u,p){return e=new tc(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ct(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(l),e}function nc(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bs(e){if(!e)return xn;e=e._reactInternals;e:{if(Te(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(Xe(n))return fa(e,n,t)}return t}function Ls(e,t,n,r,o,l,i,a,u,p){return e=Zl(n,r,!0,e,o,l,i,a,u),e.context=bs(null),n=e.current,r=Ve(),o=dn(n),l=Wt(r,o),l.callback=t??null,un(n,l,o),e.current.lanes=o,R(e,o,r),Ge(e,r),e}function xo(e,t,n,r){var o=t.current,l=Ve(),i=dn(o);return n=bs(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,i),e!==null&&(vt(e,o,i,l),so(e,o,i)),i}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Is(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jl(e,t){Is(e,t),(e=e.alternate)&&Is(e,t)}function rc(e){return e=Oe(e),e===null?null:e.stateNode}function oc(e){return null}function ql(e){this._internalRoot=e}function So(e){this._internalRoot=e}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fs(){}function lc(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var p=ko(i);l.call(p)}}var i=Ls(t,r,e,0,null,!1,!1,"",Fs);return e._reactRootContainer=i,e[Gt]=i.current,gr(e.nodeType===8?e.parentNode:e),In(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var p=ko(u);a.call(p)}}var u=Zl(e,0,!1,null,null,!1,!1,"",Fs);return e._reactRootContainer=u,e[Gt]=u.current,gr(e.nodeType===8?e.parentNode:e),In(function(){xo(t,u,n,r)}),u}function Co(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=ko(i);a.call(u)}}xo(t,i,e,o)}else i=lc(n,t,e,o,r);return ko(i)}var Ds=new Set,Cr={},Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Os={},js={},be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new ae(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new ae(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new ae(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){be[e]=new ae(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){be[e]=new ae(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){be[e]=new ae(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){be[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ni=/[\-:]([a-z])/g,ri=function(e){return e[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ni,ri);be[t]=new ae(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ni,ri);be[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ni,ri);be[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){be[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)}),be.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){be[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});var Xt=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),qn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),oi=Symbol.for("react.strict_mode"),li=Symbol.for("react.profiler"),Rs=Symbol.for("react.provider"),Us=Symbol.for("react.context"),ii=Symbol.for("react.forward_ref"),ai=Symbol.for("react.suspense"),si=Symbol.for("react.suspense_list"),ui=Symbol.for("react.memo"),mn=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var As=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var Hs=Symbol.iterator,oe=Object.assign,ci,di=!1,Er=Array.isArray,No,Bs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=No.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}),Nr=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t},Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ac=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});var sc=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),fi=null,pi=null,tr=null,nr=null,$s=function(e,t){return e(t)},Vs=function(){},mi=!1,gi=!1;if(Yt)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){gi=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{gi=!1}var uc=function(e,t,n,r,o,l,i,a,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}},Tr=!1,Mo=null,Po=!1,hi=null,cc={onError:function(e){Tr=!0,Mo=e}},wt=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Ws=wt.unstable_scheduleCallback,Qs=wt.unstable_NormalPriority,Ys=Ws,Xs=wt.unstable_cancelCallback,dc=wt.unstable_shouldYield,fc=wt.unstable_requestPaint,Ee=wt.unstable_now,pc=wt.unstable_getCurrentPriorityLevel,yi=wt.unstable_ImmediatePriority,Gs=wt.unstable_UserBlockingPriority,To=Qs,mc=wt.unstable_LowPriority,Ks=wt.unstable_IdlePriority,_o=null,Tt=null,xt=Math.clz32?Math.clz32:b,gc=Math.log,hc=Math.LN2,bo=64,Lo=4194304,V=0,vi=!1,Io=[],gn=null,hn=null,yn=null,_r=new Map,br=new Map,vn=[],yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),rr=Xt.ReactCurrentBatchConfig,Fo=!0,Do=null,wn=null,wi=null,Oo=null,or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=nt(or),Lr=oe({},or,{view:0,detail:0}),vc=nt(Lr),ki,Si,Ir,jo=oe({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(ki=e.screenX-Ir.screenX,Si=e.screenY-Ir.screenY):Si=ki=0,Ir=e),ki)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),Zs=nt(jo),wc=oe({},jo,{dataTransfer:0}),xc=nt(wc),kc=oe({},Lr,{relatedTarget:0}),zi=nt(kc),Sc=oe({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),zc=nt(Sc),Cc=oe({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ec=nt(Cc),Nc=oe({},or,{data:0}),Js=nt(Nc),Mc=Js,Pc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_c={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},bc=oe({},Lr,{key:function(e){if(e.key){var t=Pc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ll,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lc=nt(bc),Ic=oe({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qs=nt(Ic),Fc=oe({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ll}),Dc=nt(Fc),Oc=oe({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),jc=nt(Oc),Rc=oe({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uc=nt(Rc),Ac=[9,13,27,32],Ci=Yt&&"CompositionEvent"in window,Fr=null;Yt&&"documentMode"in document&&(Fr=document.documentMode);var Hc=Yt&&"TextEvent"in window&&!Fr,eu=Yt&&(!Ci||Fr&&8<Fr&&11>=Fr),tu=" ",nu=!1,lr=!1,Bc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Dr=null,Or=null,ru=!1;Yt&&(ru=Nu("input")&&(!document.documentMode||9<document.documentMode));var kt=typeof Object.is=="function"?Object.is:Iu,$c=Yt&&"documentMode"in document&&11>=document.documentMode,ir=null,Ei=null,jr=null,Ni=!1,ar={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},Mi={},ou={};Yt&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);var lu=eo("animationend"),iu=eo("animationiteration"),au=eo("animationstart"),su=eo("transitionend"),uu=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");(function(){for(var e=0;e<cu.length;e++){var t=cu[e],n=t.toLowerCase();t=t[0].toUpperCase()+t.slice(1),ln(n,"on"+t)}ln(lu,"onAnimationEnd"),ln(iu,"onAnimationIteration"),ln(au,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(su,"onTransitionEnd")})(),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr)),Ro="_reactListening"+Math.random().toString(36).slice(2),Wc=/\r\n?/g,Qc=/\u0000|\uFFFD/g,Pi=null,Ti=null,_i=typeof setTimeout=="function"?setTimeout:void 0,Yc=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,Xc=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(Du)}:_i,sr=Math.random().toString(36).slice(2),_t="__reactFiber$"+sr,Ur="__reactProps$"+sr,Gt="__reactContainer$"+sr,bi="__reactEvents$"+sr,Gc="__reactListeners$"+sr,Kc="__reactHandles$"+sr,Li=[],ur=-1,xn={},xe=an(xn),Le=an(!1),jn=xn,Kt=null,Uo=!1,Ii=!1,cr=[],dr=0,Ao=null,Ho=0,st=[],ut=0,Rn=null,Zt=1,Jt="",rt=null,Ke=null,re=!1,St=null,Zc=Xt.ReactCurrentBatchConfig,fr=xa(!0),fu=xa(!1),Bo=an(null),$o=null,pr=null,Fi=null,Un=null,Jc=Vt,kn=!1,Ar={},bt=an(Ar),Hr=an(Ar),Br=an(Ar),le=an(0),Di=[],Vo=Xt.ReactCurrentDispatcher,Oi=Xt.ReactCurrentBatchConfig,An=0,ie=null,ke=null,Ne=null,Wo=!1,$r=!1,Vr=0,qc=0,Qo={readContext:it,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},ed={readContext:it,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Da,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,Ra.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ru.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Ia,useDebugValue:_l,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Ia(!1),t=e[0];return e=ju.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(e,t,n){},useSyncExternalStore:function(e,t,n){var r=ie,o=Mt();if(re){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),Me===null)throw Error(g(349));An&30||Pa(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Da(_a.bind(null,r,l,e),[e]),r.flags|=2048,xr(9,Ta.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Me.identifierPrefix;if(re){var n=Jt,r=Zt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},td={readContext:it,useCallback:Aa,useContext:it,useEffect:Tl,useImperativeHandle:Ua,useInsertionEffect:Oa,useLayoutEffect:ja,useMemo:Ha,useReducer:Ml,useRef:Fa,useState:function(e){return Ml(wr)},useDebugValue:_l,useDeferredValue:function(e){var t=at();return Ba(t,ke.memoizedState,e)},useTransition:function(){var e=Ml(wr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Na,useSyncExternalStore:Ma,useId:$a,unstable_isNewReconciler:!1},nd={readContext:it,useCallback:Aa,useContext:it,useEffect:Tl,useImperativeHandle:Ua,useInsertionEffect:Oa,useLayoutEffect:ja,useMemo:Ha,useReducer:Pl,useRef:Fa,useState:function(e){return Pl(wr)},useDebugValue:_l,useDeferredValue:function(e){var t=at();return ke===null?t.memoizedState=e:Ba(t,ke.memoizedState,e)},useTransition:function(){var e=Pl(wr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Na,useSyncExternalStore:Ma,useId:$a,unstable_isNewReconciler:!1},Yo={isMounted:function(e){return(e=e._reactInternals)?Te(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=dn(e),l=Wt(r,o);l.payload=t,n!=null&&(l.callback=n),t=un(e,l,o),t!==null&&(vt(t,e,o,r),so(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=dn(e),l=Wt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=un(e,l,o),t!==null&&(vt(t,e,o,r),so(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=dn(e),o=Wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(vt(t,e,r,n),so(t,e,r))}},rd=typeof WeakMap=="function"?WeakMap:Map,od=Xt.ReactCurrentOwner,Ze=!1,ji={dehydrated:null,treeContext:null,retryLane:0},ld=function(e,t,n,r){for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},pu=function(e,t){},id=function(e,t,n,r,o){var l=e.memoizedProps;if(l!==r){switch(e=t.stateNode,Ln(bt.current),o=null,n){case"input":l=jt(e,l),r=jt(e,r),o=[];break;case"select":l=oe({},l,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":l=x(e,l),r=x(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}nn(n,r);var i;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var a=l[p];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Cr.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var u=r[p];if(a=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&u!==a&&(u!=null||a!=null))if(p==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(p,n)),n=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&te("scroll",e),o||a===u||(o=[])):(o=o||[]).push(p,u))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}},ad=function(e,t,n,r){n!==r&&(t.flags|=4)},Xo=!1,Ue=!1,sd=typeof WeakSet=="function"?WeakSet:Set,E=null,mu=!1,Ie=null,zt=!1,ud=Math.ceil,Go=Xt.ReactCurrentDispatcher,Ri=Xt.ReactCurrentOwner,We=Xt.ReactCurrentBatchConfig,U=0,Me=null,he=null,Fe=0,Qe=0,Lt=an(0),Se=0,Wr=null,Hn=0,Ko=0,Ui=0,Qr=null,Je=null,Ai=0,Hi=1/0,qt=null,Zo=!1,Bi=null,Sn=null,Jo=!1,zn=null,qo=0,Yr=0,$i=null,el=-1,tl=0,cd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,Hu(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,re&&t.flags&1048576&&ga(t,Ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;go(e,t),e=t.pendingProps;var o=Qn(t,xe.current);Xn(t,n),o=El(null,t,r,e,o,n);var l=Nl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(l=!0,lo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xl(t),o.updater=Yo,t.stateNode=o,o._reactInternals=t,Ll(t,r,e,n),t=Ol(null,t,r,!0,l,n)):(t.tag=0,re&&l&&dl(t),$e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ec(r),e=ht(r,e),o){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=is(null,t,r,e,n);break e;case 11:t=ts(null,t,r,e,n);break e;case 14:t=ns(null,t,r,ht(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Dl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),is(e,t,r,o,n);case 3:e:{if(as(t),e===null)throw Error(g(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Sa(e,t),uo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Kn(Error(g(423)),t),t=ss(e,t,r,n,o);break e}else if(r!==o){o=Kn(Error(g(424)),t),t=ss(e,t,r,n,o);break e}else for(Ke=$t(t.stateNode.containerInfo.firstChild),rt=t,re=!0,St=null,n=fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===o){t=Qt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Ea(t),e===null&&ml(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ul(r,o)?i=null:l!==null&&ul(r,l)&&(t.flags|=32),ls(e,t),$e(e,t,i,n),t.child;case 6:return e===null&&ml(t),null;case 13:return us(e,t,n);case 4:return kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),ts(e,t,r,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,q(Bo,r._currentValue),r._currentValue=i,l!==null)if(kt(l.value,i)){if(l.children===o.children&&!Le.current){t=Qt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Wt(-1,n&-n),u.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?u.next=u:(u.next=y.next,y.next=u),p.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),vl(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(g(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),vl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=it(o),r=r(o),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,o=ht(r,t.pendingProps),o=ht(r.type,o),ns(e,t,r,o,n);case 15:return rs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),go(e,t),t.tag=1,Xe(r)?(e=!0,lo(t)):e=!1,Xn(t,n),Xa(t,r,o),Ll(t,r,o,n),Ol(null,t,r,!0,e,n);case 19:return ds(e,t,n);case 22:return os(e,t,n)}throw Error(g(156,t.tag))},ct=function(e,t,n,r){return new qu(e,t,n,r)},gu=typeof reportError=="function"?reportError:function(e){console.error(e)};So.prototype.render=ql.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));xo(e,t,null,null)},So.prototype.unmount=ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){xo(null,e,null,null)}),t[Gt]=null}},So.prototype.unstable_scheduleHydration=function(e){if(e){var t=pd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&Gr(e)}};var dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=O(t.pendingLanes);n!==0&&(gt(t,n|1),Ge(t,Ee()),!(U&6)&&(zr(),sn()))}break;case 13:In(function(){var r=Vt(e,1);if(r!==null){var o=Ve();vt(r,e,1,o)}}),Jl(e,1)}},hu=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Ve();vt(t,e,134217728,n)}Jl(e,134217728)}},fd=function(e){if(e.tag===13){var t=dn(e),n=Vt(e,t);if(n!==null){var r=Ve();vt(n,e,t,r)}Jl(e,t)}},pd=function(){return V},md=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};pi=function(e,t,n){switch(t){case"input":if(Nn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oo(r);if(!o)throw Error(g(90));ce(r),Nn(r,o)}}}break;case"textarea":me(e,n);break;case"select":t=n.value,t!=null&&_(e,!!n.multiple,t,!1)}},function(e,t,n){$s=e,Vs=n}(Ql,function(e,t,n,r,o){var l=V,i=We.transition;try{return We.transition=null,V=1,e(t,n,r,o)}finally{V=l,We.transition=i,U===0&&zr()}},In);var gd={usingClientEntryPoint:!1,Events:[yr,Wn,oo,Tn,At,Ql]};(function(e){if(e={bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:rc,findFiberByHostInstance:e.findFiberByHostInstance||oc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")e=!1;else{var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)e=!0;else{try{_o=t.inject(e),Tt=t}catch{}e=!!t.checkDCE}}return e})({findFiberByHostInstance:_n,bundleType:0,version:"18.3.1-next-f1338f8080-20240426",rendererPackageName:"react-dom"}),S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gd,S.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ei(t))throw Error(g(200));return nc(e,t,null,n)},S.createRoot=function(e,t){if(!ei(e))throw Error(g(299));var n=!1,r="",o=gu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zl(e,1,!1,null,null,n,!1,r,o),e[Gt]=t.current,gr(e.nodeType===8?e.parentNode:e),new ql(t)},S.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Oe(t),e=e===null?null:e.stateNode,e},S.flushSync=function(e){return In(e)},S.hydrate=function(e,t,n){if(!zo(t))throw Error(g(200));return Co(null,e,t,!0,n)},S.hydrateRoot=function(e,t,n){if(!ei(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=gu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ls(t,null,e,1,n??null,o,!1,l,i),e[Gt]=t.current,gr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new So(t)},S.render=function(e,t,n){if(!zo(t))throw Error(g(200));return Co(null,e,t,!1,n)},S.unmountComponentAtNode=function(e){if(!zo(e))throw Error(g(40));return e._reactRootContainer?(In(function(){Co(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1},S.unstable_batchedUpdates=Ql,S.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return Co(e,t,n,!1,r)},S.version="18.3.1-next-f1338f8080-20240426"})})();var wu=window.ReactDOM;var xu=wu.createRoot,{render:Dd,hydrate:Od}=wu;rl();(function(){let S=document.createElement("style");S.textContent=`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.19 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.container{
  width: 100%;
}
@media (min-width: 640px){

  .container{
    max-width: 640px;
  }
}
@media (min-width: 768px){

  .container{
    max-width: 768px;
  }
}
@media (min-width: 1024px){

  .container{
    max-width: 1024px;
  }
}
@media (min-width: 1280px){

  .container{
    max-width: 1280px;
  }
}
@media (min-width: 1536px){

  .container{
    max-width: 1536px;
  }
}
.fixed{
  position: fixed;
}
.absolute{
  position: absolute;
}
.relative{
  position: relative;
}
.bottom-2{
  bottom: 0.5rem;
}
.left-0{
  left: 0px;
}
.left-2{
  left: 0.5rem;
}
.right-0{
  right: 0px;
}
.right-2{
  right: 0.5rem;
}
.top-1\\/2{
  top: 50%;
}
.top-2{
  top: 0.5rem;
}
.z-50{
  z-index: 50;
}
.mb-1{
  margin-bottom: 0.25rem;
}
.mt-1{
  margin-top: 0.25rem;
}
.block{
  display: block;
}
.flex{
  display: flex;
}
.grid{
  display: grid;
}
.contents{
  display: contents;
}
.h-1\\.5{
  height: 0.375rem;
}
.h-2{
  height: 0.5rem;
}
.h-6{
  height: 1.5rem;
}
.h-\\[200px\\]{
  height: 200px;
}
.max-h-48{
  max-height: 12rem;
}
.w-1\\.5{
  width: 0.375rem;
}
.w-2{
  width: 0.5rem;
}
.w-5{
  width: 1.25rem;
}
.w-6{
  width: 1.5rem;
}
.w-full{
  width: 100%;
}
.min-w-\\[36px\\]{
  min-width: 36px;
}
.flex-1{
  flex: 1 1 0%;
}
.-translate-y-1\\/2{
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes pulse{

  50%{
    opacity: .5;
  }
}
.animate-pulse{
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.cursor-grab{
  cursor: grab;
}
.resize{
  resize: both;
}
.grid-cols-3{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.flex-col{
  flex-direction: column;
}
.flex-wrap{
  flex-wrap: wrap;
}
.items-center{
  align-items: center;
}
.items-baseline{
  align-items: baseline;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.gap-1{
  gap: 0.25rem;
}
.gap-1\\.5{
  gap: 0.375rem;
}
.gap-2{
  gap: 0.5rem;
}
.space-x-1 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]){
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-slate-800 > :not([hidden]) ~ :not([hidden]){
  --tw-divide-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-divide-opacity, 1));
}
.overflow-hidden{
  overflow: hidden;
}
.overflow-y-auto{
  overflow-y: auto;
}
.rounded{
  border-radius: 0.25rem;
}
.rounded-full{
  border-radius: 9999px;
}
.rounded-lg{
  border-radius: 0.5rem;
}
.rounded-md{
  border-radius: 0.375rem;
}
.rounded-xl{
  border-radius: 0.75rem;
}
.border{
  border-width: 1px;
}
.border-b{
  border-bottom-width: 1px;
}
.border-blue-500\\/30{
  border-color: rgb(59 130 246 / 0.3);
}
.border-cyan-400{
  --tw-border-opacity: 1;
  border-color: rgb(34 211 238 / var(--tw-border-opacity, 1));
}
.border-cyan-500\\/30{
  border-color: rgb(6 182 212 / 0.3);
}
.border-red-500\\/30{
  border-color: rgb(239 68 68 / 0.3);
}
.border-slate-600{
  --tw-border-opacity: 1;
  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));
}
.border-slate-700{
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));
}
.border-slate-700\\/50{
  border-color: rgb(51 65 85 / 0.5);
}
.border-slate-700\\/60{
  border-color: rgb(51 65 85 / 0.6);
}
.border-slate-700\\/80{
  border-color: rgb(51 65 85 / 0.8);
}
.bg-amber-500\\/30{
  background-color: rgb(245 158 11 / 0.3);
}
.bg-black{
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-blue-500{
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));
}
.bg-cyan-400{
  --tw-bg-opacity: 1;
  background-color: rgb(34 211 238 / var(--tw-bg-opacity, 1));
}
.bg-cyan-500\\/20{
  background-color: rgb(6 182 212 / 0.2);
}
.bg-cyan-500\\/30{
  background-color: rgb(6 182 212 / 0.3);
}
.bg-cyan-900\\/30{
  background-color: rgb(22 78 99 / 0.3);
}
.bg-purple-500\\/30{
  background-color: rgb(168 85 247 / 0.3);
}
.bg-red-500{
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-slate-700{
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));
}
.bg-slate-800{
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));
}
.bg-slate-800\\/60{
  background-color: rgb(30 41 59 / 0.6);
}
.bg-slate-800\\/80{
  background-color: rgb(30 41 59 / 0.8);
}
.bg-slate-800\\/90{
  background-color: rgb(30 41 59 / 0.9);
}
.bg-slate-900{
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));
}
.bg-slate-900\\/60{
  background-color: rgb(15 23 42 / 0.6);
}
.bg-slate-900\\/70{
  background-color: rgb(15 23 42 / 0.7);
}
.bg-slate-900\\/80{
  background-color: rgb(15 23 42 / 0.8);
}
.bg-slate-900\\/90{
  background-color: rgb(15 23 42 / 0.9);
}
.bg-gradient-to-r{
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.bg-gradient-to-tr{
  background-image: linear-gradient(to top right, var(--tw-gradient-stops));
}
.from-cyan-500{
  --tw-gradient-from: #06b6d4 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-teal-500{
  --tw-gradient-to: rgb(20 184 166 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #14b8a6 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-blue-600{
  --tw-gradient-to: #2563eb var(--tw-gradient-to-position);
}
.p-0\\.5{
  padding: 0.125rem;
}
.p-1\\.5{
  padding: 0.375rem;
}
.p-2\\.5{
  padding: 0.625rem;
}
.p-3{
  padding: 0.75rem;
}
.px-1{
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-1\\.5{
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}
.px-2{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\\.5{
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-3{
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.py-0\\.5{
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-1\\.5{
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\\.5{
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.text-left{
  text-align: left;
}
.text-center{
  text-align: center;
}
.font-mono{
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.text-\\[10px\\]{
  font-size: 10px;
}
.text-\\[11px\\]{
  font-size: 11px;
}
.text-\\[8px\\]{
  font-size: 8px;
}
.text-\\[9px\\]{
  font-size: 9px;
}
.text-base{
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xs{
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold{
  font-weight: 700;
}
.font-medium{
  font-weight: 500;
}
.font-semibold{
  font-weight: 600;
}
.uppercase{
  text-transform: uppercase;
}
.tracking-tight{
  letter-spacing: -0.025em;
}
.tracking-wider{
  letter-spacing: 0.05em;
}
.text-amber-300{
  --tw-text-opacity: 1;
  color: rgb(252 211 77 / var(--tw-text-opacity, 1));
}
.text-blue-400{
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity, 1));
}
.text-cyan-300{
  --tw-text-opacity: 1;
  color: rgb(103 232 249 / var(--tw-text-opacity, 1));
}
.text-cyan-400{
  --tw-text-opacity: 1;
  color: rgb(34 211 238 / var(--tw-text-opacity, 1));
}
.text-purple-300{
  --tw-text-opacity: 1;
  color: rgb(216 180 254 / var(--tw-text-opacity, 1));
}
.text-red-400{
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-slate-200{
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity, 1));
}
.text-slate-300{
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity, 1));
}
.text-slate-400{
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity, 1));
}
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.placeholder-slate-400::-moz-placeholder{
  --tw-placeholder-opacity: 1;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity, 1));
}
.placeholder-slate-400::placeholder{
  --tw-placeholder-opacity: 1;
  color: rgb(148 163 184 / var(--tw-placeholder-opacity, 1));
}
.shadow{
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-inner{
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg{
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm{
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl{
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-cyan-500\\/20{
  --tw-shadow-color: rgb(6 182 212 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
.shadow-cyan-500\\/25{
  --tw-shadow-color: rgb(6 182 212 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.shadow-cyan-500\\/30{
  --tw-shadow-color: rgb(6 182 212 / 0.3);
  --tw-shadow: var(--tw-shadow-colored);
}
.outline{
  outline-style: solid;
}
.ring{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.blur{
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm{
  --tw-backdrop-blur: blur(4px);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-150{
  transition-duration: 150ms;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  width: 400px;
}

body {
  width: 400px;
  max-width: 400px;
  min-height: 520px;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  background-color: #07101e;
  color: #f1f5f9;
}

#root {
  width: 100%;
  max-width: 400px;
  overflow-x: hidden;
}

.popup-container {
  width: 100%;
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.popup-container.dark {
  background: #07101e;
  color: #f8fafc;
}

.popup-container.deepspace {
  background: #030814;
  color: #f1f5f9;
}

.popup-container.light {
  background: #f1f5f9;
  color: #0f172a;
}

.popup-container.light .header-bar {
  background: #ffffff;
  border-color: #e2e8f0;
}

.popup-container.light h1 {
  color: #0f172a;
}

.popup-container.light input {
  background: #ffffff;
  border-color: #cbd5e1;
  color: #0f172a;
}

/* Custom scrollbars */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.6);
}

::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(6, 182, 212, 0.7);
}

.hover\\:bg-cyan-950\\/40:hover{
  background-color: rgb(8 51 68 / 0.4);
}

.hover\\:bg-slate-700:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));
}

.hover\\:from-cyan-400:hover{
  --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.hover\\:to-blue-500:hover{
  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);
}

.hover\\:text-cyan-300:hover{
  --tw-text-opacity: 1;
  color: rgb(103 232 249 / var(--tw-text-opacity, 1));
}

.hover\\:text-slate-200:hover{
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.focus\\:border-cyan-500:focus{
  --tw-border-opacity: 1;
  border-color: rgb(6 182 212 / var(--tw-border-opacity, 1));
}

.focus\\:outline-none:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.active\\:scale-\\[0\\.99\\]:active{
  --tw-scale-x: 0.99;
  --tw-scale-y: 0.99;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.active\\:cursor-grabbing:active{
  cursor: grabbing;
}`,document.head.appendChild(S)})();var ol=[{z:1,sym:"H",name:"Hydrogen",mass:1.008,neutrons:0,category:"Reactive Nonmetal",period:1,group:1,block:"s"},{z:2,sym:"He",name:"Helium",mass:4.0026,neutrons:2,category:"Noble Gas",period:1,group:18,block:"s"},{z:3,sym:"Li",name:"Lithium",mass:6.94,neutrons:4,category:"Alkali Metal",period:2,group:1,block:"s"},{z:4,sym:"Be",name:"Beryllium",mass:9.0122,neutrons:5,category:"Alkaline Earth Metal",period:2,group:2,block:"s"},{z:5,sym:"B",name:"Boron",mass:10.81,neutrons:6,category:"Metalloid",period:2,group:13,block:"p"},{z:6,sym:"C",name:"Carbon",mass:12.011,neutrons:6,category:"Reactive Nonmetal",period:2,group:14,block:"p"},{z:7,sym:"N",name:"Nitrogen",mass:14.007,neutrons:7,category:"Reactive Nonmetal",period:2,group:15,block:"p"},{z:8,sym:"O",name:"Oxygen",mass:15.999,neutrons:8,category:"Reactive Nonmetal",period:2,group:16,block:"p"},{z:9,sym:"F",name:"Fluorine",mass:18.998,neutrons:10,category:"Halogen",period:2,group:17,block:"p"},{z:10,sym:"Ne",name:"Neon",mass:20.18,neutrons:10,category:"Noble Gas",period:2,group:18,block:"p"},{z:11,sym:"Na",name:"Sodium",mass:22.99,neutrons:12,category:"Alkali Metal",period:3,group:1,block:"s"},{z:12,sym:"Mg",name:"Magnesium",mass:24.305,neutrons:12,category:"Alkaline Earth Metal",period:3,group:2,block:"s"},{z:13,sym:"Al",name:"Aluminium",mass:26.982,neutrons:14,category:"Post-transition Metal",period:3,group:13,block:"p"},{z:14,sym:"Si",name:"Silicon",mass:28.085,neutrons:14,category:"Metalloid",period:3,group:14,block:"p"},{z:15,sym:"P",name:"Phosphorus",mass:30.974,neutrons:16,category:"Reactive Nonmetal",period:3,group:15,block:"p"},{z:16,sym:"S",name:"Sulfur",mass:32.06,neutrons:16,category:"Reactive Nonmetal",period:3,group:16,block:"p"},{z:17,sym:"Cl",name:"Chlorine",mass:35.45,neutrons:18,category:"Halogen",period:3,group:17,block:"p"},{z:18,sym:"Ar",name:"Argon",mass:39.948,neutrons:22,category:"Noble Gas",period:3,group:18,block:"p"},{z:19,sym:"K",name:"Potassium",mass:39.098,neutrons:20,category:"Alkali Metal",period:4,group:1,block:"s"},{z:20,sym:"Ca",name:"Calcium",mass:40.078,neutrons:20,category:"Alkaline Earth Metal",period:4,group:2,block:"s"},{z:21,sym:"Sc",name:"Scandium",mass:44.956,neutrons:24,category:"Transition Metal",period:4,group:3,block:"d"},{z:22,sym:"Ti",name:"Titanium",mass:47.867,neutrons:26,category:"Transition Metal",period:4,group:4,block:"d"},{z:23,sym:"V",name:"Vanadium",mass:50.942,neutrons:28,category:"Transition Metal",period:4,group:5,block:"d"},{z:24,sym:"Cr",name:"Chromium",mass:51.996,neutrons:28,category:"Transition Metal",period:4,group:6,block:"d"},{z:25,sym:"Mn",name:"Manganese",mass:54.938,neutrons:30,category:"Transition Metal",period:4,group:7,block:"d"},{z:26,sym:"Fe",name:"Iron",mass:55.845,neutrons:30,category:"Transition Metal",period:4,group:8,block:"d"},{z:27,sym:"Co",name:"Cobalt",mass:58.933,neutrons:32,category:"Transition Metal",period:4,group:9,block:"d"},{z:28,sym:"Ni",name:"Nickel",mass:58.693,neutrons:31,category:"Transition Metal",period:4,group:10,block:"d"},{z:29,sym:"Cu",name:"Copper",mass:63.546,neutrons:35,category:"Transition Metal",period:4,group:11,block:"d"},{z:30,sym:"Zn",name:"Zinc",mass:65.38,neutrons:35,category:"Transition Metal",period:4,group:12,block:"d"},{z:31,sym:"Ga",name:"Gallium",mass:69.723,neutrons:39,category:"Post-transition Metal",period:4,group:13,block:"p"},{z:32,sym:"Ge",name:"Germanium",mass:72.63,neutrons:41,category:"Metalloid",period:4,group:14,block:"p"},{z:33,sym:"As",name:"Arsenic",mass:74.922,neutrons:42,category:"Metalloid",period:4,group:15,block:"p"},{z:34,sym:"Se",name:"Selenium",mass:78.971,neutrons:45,category:"Reactive Nonmetal",period:4,group:16,block:"p"},{z:35,sym:"Br",name:"Bromine",mass:79.904,neutrons:45,category:"Halogen",period:4,group:17,block:"p"},{z:36,sym:"Kr",name:"Krypton",mass:83.798,neutrons:48,category:"Noble Gas",period:4,group:18,block:"p"},{z:37,sym:"Rb",name:"Rubidium",mass:85.468,neutrons:48,category:"Alkali Metal",period:5,group:1,block:"s"},{z:38,sym:"Sr",name:"Strontium",mass:87.62,neutrons:50,category:"Alkaline Earth Metal",period:5,group:2,block:"s"},{z:39,sym:"Y",name:"Yttrium",mass:88.906,neutrons:50,category:"Transition Metal",period:5,group:3,block:"d"},{z:40,sym:"Zr",name:"Zirconium",mass:91.224,neutrons:51,category:"Transition Metal",period:5,group:4,block:"d"},{z:41,sym:"Nb",name:"Niobium",mass:92.906,neutrons:52,category:"Transition Metal",period:5,group:5,block:"d"},{z:42,sym:"Mo",name:"Molybdenum",mass:95.95,neutrons:54,category:"Transition Metal",period:5,group:6,block:"d"},{z:43,sym:"Tc",name:"Technetium",mass:98,neutrons:55,category:"Transition Metal",period:5,group:7,block:"d"},{z:44,sym:"Ru",name:"Ruthenium",mass:101.07,neutrons:57,category:"Transition Metal",period:5,group:8,block:"d"},{z:45,sym:"Rh",name:"Rhodium",mass:102.91,neutrons:58,category:"Transition Metal",period:5,group:9,block:"d"},{z:46,sym:"Pd",name:"Palladium",mass:106.42,neutrons:60,category:"Transition Metal",period:5,group:10,block:"d"},{z:47,sym:"Ag",name:"Silver",mass:107.87,neutrons:61,category:"Transition Metal",period:5,group:11,block:"d"},{z:48,sym:"Cd",name:"Cadmium",mass:112.41,neutrons:64,category:"Transition Metal",period:5,group:12,block:"d"},{z:49,sym:"In",name:"Indium",mass:114.82,neutrons:66,category:"Post-transition Metal",period:5,group:13,block:"p"},{z:50,sym:"Sn",name:"Tin",mass:118.71,neutrons:69,category:"Post-transition Metal",period:5,group:14,block:"p"},{z:51,sym:"Sb",name:"Antimony",mass:121.76,neutrons:71,category:"Metalloid",period:5,group:15,block:"p"},{z:52,sym:"Te",name:"Tellurium",mass:127.6,neutrons:76,category:"Metalloid",period:5,group:16,block:"p"},{z:53,sym:"I",name:"Iodine",mass:126.9,neutrons:74,category:"Halogen",period:5,group:17,block:"p"},{z:54,sym:"Xe",name:"Xenon",mass:131.29,neutrons:77,category:"Noble Gas",period:5,group:18,block:"p"},{z:55,sym:"Cs",name:"Caesium",mass:132.91,neutrons:78,category:"Alkali Metal",period:6,group:1,block:"s"},{z:56,sym:"Ba",name:"Barium",mass:137.33,neutrons:81,category:"Alkaline Earth Metal",period:6,group:2,block:"s"},{z:57,sym:"La",name:"Lanthanum",mass:138.91,neutrons:82,category:"Lanthanide",period:6,group:3,block:"f"},{z:58,sym:"Ce",name:"Cerium",mass:140.12,neutrons:82,category:"Lanthanide",period:6,group:3,block:"f"},{z:59,sym:"Pr",name:"Praseodymium",mass:140.91,neutrons:82,category:"Lanthanide",period:6,group:3,block:"f"},{z:60,sym:"Nd",name:"Neodymium",mass:144.24,neutrons:84,category:"Lanthanide",period:6,group:3,block:"f"},{z:61,sym:"Pm",name:"Promethium",mass:145,neutrons:84,category:"Lanthanide",period:6,group:3,block:"f"},{z:62,sym:"Sm",name:"Samarium",mass:150.36,neutrons:88,category:"Lanthanide",period:6,group:3,block:"f"},{z:63,sym:"Eu",name:"Europium",mass:151.96,neutrons:89,category:"Lanthanide",period:6,group:3,block:"f"},{z:64,sym:"Gd",name:"Gadolinium",mass:157.25,neutrons:93,category:"Lanthanide",period:6,group:3,block:"f"},{z:65,sym:"Tb",name:"Terbium",mass:158.93,neutrons:94,category:"Lanthanide",period:6,group:3,block:"f"},{z:66,sym:"Dy",name:"Dysprosium",mass:162.5,neutrons:97,category:"Lanthanide",period:6,group:3,block:"f"},{z:67,sym:"Ho",name:"Holmium",mass:164.93,neutrons:98,category:"Lanthanide",period:6,group:3,block:"f"},{z:68,sym:"Er",name:"Erbium",mass:167.26,neutrons:99,category:"Lanthanide",period:6,group:3,block:"f"},{z:69,sym:"Tm",name:"Thulium",mass:168.93,neutrons:100,category:"Lanthanide",period:6,group:3,block:"f"},{z:70,sym:"Yb",name:"Ytterbium",mass:173.05,neutrons:103,category:"Lanthanide",period:6,group:3,block:"f"},{z:71,sym:"Lu",name:"Lutetium",mass:174.97,neutrons:104,category:"Lanthanide",period:6,group:3,block:"d"},{z:72,sym:"Hf",name:"Hafnium",mass:178.49,neutrons:106,category:"Transition Metal",period:6,group:4,block:"d"},{z:73,sym:"Ta",name:"Tantalum",mass:180.95,neutrons:108,category:"Transition Metal",period:6,group:5,block:"d"},{z:74,sym:"W",name:"Tungsten",mass:183.84,neutrons:110,category:"Transition Metal",period:6,group:6,block:"d"},{z:75,sym:"Re",name:"Rhenium",mass:186.21,neutrons:111,category:"Transition Metal",period:6,group:7,block:"d"},{z:76,sym:"Os",name:"Osmium",mass:190.23,neutrons:114,category:"Transition Metal",period:6,group:8,block:"d"},{z:77,sym:"Ir",name:"Iridium",mass:192.22,neutrons:115,category:"Transition Metal",period:6,group:9,block:"d"},{z:78,sym:"Pt",name:"Platinum",mass:195.08,neutrons:117,category:"Transition Metal",period:6,group:10,block:"d"},{z:79,sym:"Au",name:"Gold",mass:196.97,neutrons:118,category:"Transition Metal",period:6,group:11,block:"d"},{z:80,sym:"Hg",name:"Mercury",mass:200.59,neutrons:121,category:"Transition Metal",period:6,group:12,block:"d"},{z:81,sym:"Tl",name:"Thallium",mass:204.38,neutrons:123,category:"Post-transition Metal",period:6,group:13,block:"p"},{z:82,sym:"Pb",name:"Lead",mass:207.2,neutrons:125,category:"Post-transition Metal",period:6,group:14,block:"p"},{z:83,sym:"Bi",name:"Bismuth",mass:208.98,neutrons:126,category:"Post-transition Metal",period:6,group:15,block:"p"},{z:84,sym:"Po",name:"Polonium",mass:209,neutrons:125,category:"Post-transition Metal",period:6,group:16,block:"p"},{z:85,sym:"At",name:"Astatine",mass:210,neutrons:125,category:"Halogen",period:6,group:17,block:"p"},{z:86,sym:"Rn",name:"Radon",mass:222,neutrons:136,category:"Noble Gas",period:6,group:18,block:"p"},{z:87,sym:"Fr",name:"Francium",mass:223,neutrons:136,category:"Alkali Metal",period:7,group:1,block:"s"},{z:88,sym:"Ra",name:"Radium",mass:226,neutrons:138,category:"Alkaline Earth Metal",period:7,group:2,block:"s"},{z:89,sym:"Ac",name:"Actinium",mass:227,neutrons:138,category:"Actinide",period:7,group:3,block:"f"},{z:90,sym:"Th",name:"Thorium",mass:232.04,neutrons:142,category:"Actinide",period:7,group:3,block:"f"},{z:91,sym:"Pa",name:"Protactinium",mass:231.04,neutrons:140,category:"Actinide",period:7,group:3,block:"f"},{z:92,sym:"U",name:"Uranium",mass:238.03,neutrons:146,category:"Actinide",period:7,group:3,block:"f"},{z:93,sym:"Np",name:"Neptunium",mass:237,neutrons:144,category:"Actinide",period:7,group:3,block:"f"},{z:94,sym:"Pu",name:"Plutonium",mass:244,neutrons:150,category:"Actinide",period:7,group:3,block:"f"},{z:95,sym:"Am",name:"Americium",mass:243,neutrons:148,category:"Actinide",period:7,group:3,block:"f"},{z:96,sym:"Cm",name:"Curium",mass:247,neutrons:151,category:"Actinide",period:7,group:3,block:"f"},{z:97,sym:"Bk",name:"Berkelium",mass:247,neutrons:150,category:"Actinide",period:7,group:3,block:"f"},{z:98,sym:"Cf",name:"Californium",mass:251,neutrons:153,category:"Actinide",period:7,group:3,block:"f"},{z:99,sym:"Es",name:"Einsteinium",mass:252,neutrons:153,category:"Actinide",period:7,group:3,block:"f"},{z:100,sym:"Fm",name:"Fermium",mass:257,neutrons:157,category:"Actinide",period:7,group:3,block:"f"},{z:101,sym:"Md",name:"Mendelevium",mass:258,neutrons:157,category:"Actinide",period:7,group:3,block:"f"},{z:102,sym:"No",name:"Nobelium",mass:259,neutrons:157,category:"Actinide",period:7,group:3,block:"f"},{z:103,sym:"Lr",name:"Lawrencium",mass:266,neutrons:163,category:"Actinide",period:7,group:3,block:"d"},{z:104,sym:"Rf",name:"Rutherfordium",mass:267,neutrons:163,category:"Transition Metal",period:7,group:4,block:"d"},{z:105,sym:"Db",name:"Dubnium",mass:268,neutrons:163,category:"Transition Metal",period:7,group:5,block:"d"},{z:106,sym:"Sg",name:"Seaborgium",mass:269,neutrons:163,category:"Transition Metal",period:7,group:6,block:"d"},{z:107,sym:"Bh",name:"Bohrium",mass:270,neutrons:163,category:"Transition Metal",period:7,group:7,block:"d"},{z:108,sym:"Hs",name:"Hassium",mass:269,neutrons:161,category:"Transition Metal",period:7,group:8,block:"d"},{z:109,sym:"Mt",name:"Meitnerium",mass:278,neutrons:169,category:"Transition Metal",period:7,group:9,block:"d"},{z:110,sym:"Ds",name:"Darmstadtium",mass:281,neutrons:171,category:"Transition Metal",period:7,group:10,block:"d"},{z:111,sym:"Rg",name:"Roentgenium",mass:282,neutrons:171,category:"Transition Metal",period:7,group:11,block:"d"},{z:112,sym:"Cn",name:"Copernicium",mass:285,neutrons:173,category:"Transition Metal",period:7,group:12,block:"d"},{z:113,sym:"Nh",name:"Nihonium",mass:286,neutrons:173,category:"Post-transition Metal",period:7,group:13,block:"p"},{z:114,sym:"Fl",name:"Flerovium",mass:289,neutrons:175,category:"Post-transition Metal",period:7,group:14,block:"p"},{z:115,sym:"Mc",name:"Moscovium",mass:290,neutrons:175,category:"Post-transition Metal",period:7,group:15,block:"p"},{z:116,sym:"Lv",name:"Livermorium",mass:293,neutrons:177,category:"Post-transition Metal",period:7,group:16,block:"p"},{z:117,sym:"Ts",name:"Tennessine",mass:294,neutrons:177,category:"Halogen",period:7,group:17,block:"p"},{z:118,sym:"Og",name:"Oganesson",mass:294,neutrons:176,category:"Noble Gas",period:7,group:18,block:"p"}],bd=[{n:1,l:0,cap:2,label:"1s"},{n:2,l:0,cap:2,label:"2s"},{n:2,l:1,cap:6,label:"2p"},{n:3,l:0,cap:2,label:"3s"},{n:3,l:1,cap:6,label:"3p"},{n:4,l:0,cap:2,label:"4s"},{n:3,l:2,cap:10,label:"3d"},{n:4,l:1,cap:6,label:"4p"},{n:5,l:0,cap:2,label:"5s"},{n:4,l:2,cap:10,label:"4d"},{n:5,l:1,cap:6,label:"5p"},{n:6,l:0,cap:2,label:"6s"},{n:4,l:3,cap:14,label:"4f"},{n:5,l:2,cap:10,label:"5d"},{n:6,l:1,cap:6,label:"6p"},{n:7,l:0,cap:2,label:"7s"},{n:5,l:3,cap:14,label:"5f"},{n:6,l:2,cap:10,label:"6d"},{n:7,l:1,cap:6,label:"7p"}];function Ld(S){let Q=S,g={1:0,2:0,3:0,4:0,5:0,6:0,7:0};for(let j of bd){if(Q<=0)break;let dt=Math.min(Q,j.cap);g[j.n]=(g[j.n]||0)+dt,Q-=dt}let pe=[];for(let j=1;j<=7;j++)g[j]>0&&pe.push(g[j]);return pe}var Id=()=>{let[S,Q]=Ct(6),[g,pe]=Ct("spherical"),[j,dt]=Ct("dark"),[It,Ft]=Ct(""),[ae,Dt]=Ct(!0),[qe,ft]=Ct(1),[et,Ot]=Ct(1),[ze,pt]=Ct(!1),[De,ye]=Ct(""),en=nl(null),ee=nl({x:.3,y:.5,vx:.002,vy:.004,isDown:!1,lastX:0,lastY:0}),ce=Xr(()=>ol.find(_=>_.z===S)||ol[0],[S]),Ae=Xr(()=>Ld(ce.z),[ce]),jt=Xr(()=>{if(!It.trim())return ol;let _=It.toLowerCase();return ol.filter(x=>x.name.toLowerCase().includes(_)||x.sym.toLowerCase().includes(_)||x.z.toString()===_||x.category.toLowerCase().includes(_))},[It]),En=async()=>{try{ye("Launching overlay...");let[_]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!_||!_.id){ye("No active tab found"),setTimeout(()=>ye(""),2500);return}let x=(me,lt=0)=>new Promise(Ye=>{try{chrome.tabs.sendMessage(me,{action:"TOGGLE_ATOMIC_SIMULATION",elementZ:S,modelType:g},mt=>{chrome.runtime.lastError||!mt||!mt.success?lt<5?setTimeout(()=>{x(me,lt+1).then(Ye)},120):Ye(!1):Ye(!0)})}catch{Ye(!1)}});if(!await x(_.id))try{ye("Initializing overlay engine..."),await chrome.scripting.executeScript({target:{tabId:_.id},files:["content.js"]});let me=!1;for(let lt=0;lt<5&&(await new Promise(Ye=>setTimeout(Ye,200)),me=await x(_.id),!me);lt++);if(!me){ye("Could not initialize overlay"),setTimeout(()=>ye(""),2500);return}}catch{ye("Cannot overlay on this page"),setTimeout(()=>ye(""),2500);return}ye("In-page overlay active!"),setTimeout(()=>ye(""),2500)}catch{ye("Failed to launch"),setTimeout(()=>ye(""),2500)}};Wi(()=>{let _=en.current;if(!_)return;let x=_.getContext("2d");if(!x)return;let ot,me=0,lt=3.6,Ye=1.6,mt=ce.z+ce.neutrons,Rt=Math.min(mt,48),tn=[],nn=(1+Math.sqrt(5))/2,Ut=Math.max(6,Math.cbrt(Rt)*4.8);for(let A=0;A<Rt;A++){let se=2*Math.PI*A/nn,X=A/Rt*2-1,de=Math.sqrt(1-X*X)*Math.pow(Math.random()*.5+.5,.4)*Ut;tn.push({x:de*Math.cos(se),y:de*Math.sin(se),z:X*Ut,isProton:A%2===0})}let He=[];for(let A=0;A<75;A++)He.push({x:Math.random()*360,y:Math.random()*260,size:Math.random()*1.5+.4,alpha:Math.random()*.6+.2});let rn=[],Tn=420;for(let A=0;A<Tn;A++){let se=(Math.log(1/(1-Math.random()*.95))*14+10)*(ce.period*.6+.4),X=Math.random()*Math.PI*2,de=Math.acos(2*Math.random()-1);rn.push({x:se*Math.sin(de)*Math.cos(X),y:se*Math.sin(de)*Math.sin(X),z:se*Math.cos(de),alpha:Math.random()*.5+.2})}let At=()=>{me+=.016*qe;let A=ee.current;A.isDown||(A.x+=A.vx,A.y+=A.vy,A.vx*=.96,A.vy*=.96,Math.abs(A.vx)<5e-4&&(A.vx=.002),Math.abs(A.vy)<5e-4&&(A.vy=.003));let se=_.width,X=_.height,de=se/2,Te=X/2;if(j==="light")x.fillStyle="#f8fafc",x.fillRect(0,0,se,X);else if(j==="deepspace"){let b=x.createRadialGradient(de,Te,10,de,Te,se*.8);b.addColorStop(0,"#0c1626"),b.addColorStop(1,"#02060d"),x.fillStyle=b,x.fillRect(0,0,se,X)}else{let b=x.createRadialGradient(de,Te,10,de,Te,se*.7);b.addColorStop(0,"#0f172a"),b.addColorStop(1,"#070d17"),x.fillStyle=b,x.fillRect(0,0,se,X)}j!=="light"&&(x.fillStyle="#94a3b8",He.forEach(b=>{x.globalAlpha=b.alpha*(.8+.2*Math.sin(me*2+b.x)),x.beginPath(),x.arc(b.x,b.y,b.size,0,Math.PI*2),x.fill()}),x.globalAlpha=1);let tt=Math.cos(g==="planar"?0:A.x),on=Math.sin(g==="planar"?0:A.x),Bn=Math.cos(g==="planar"?0:A.y),Oe=Math.sin(g==="planar"?0:A.y),_e=(b,O,Y)=>{if(g==="planar")return{px:de+b*et,py:Te+O*et,pz:Y,scale:et};let ge=b*Bn+Y*Oe,ve=-b*Oe+Y*Bn,ne=O*tt-ve*on,H=O*on+ve*tt,Z=340,R=Z/(Z+H)*et;return{px:de+ge*R,py:Te+ne*R,pz:H,scale:R}};g==="quantum"&&(rn.forEach(b=>{let O=Math.sin(me*3+b.x)*1.5,Y=_e(b.x+O,b.y+O,b.z);x.beginPath(),x.arc(Y.px,Y.py,Math.max(.8,1.4*Y.scale),0,Math.PI*2),x.fillStyle=j==="light"?"#0284c7":"#00f2fe",x.globalAlpha=b.alpha*.45,x.fill()}),x.globalAlpha=1);let Ht=[];g==="planar"?Ae.forEach((b,O)=>{let Y=32+O*20;x.beginPath(),x.arc(de,Te,Y*et,0,Math.PI*2),x.strokeStyle=j==="light"?"rgba(14, 165, 233, 0.4)":"rgba(56, 189, 248, 0.35)",x.lineWidth=1.2,x.setLineDash([3,4]),x.stroke(),x.setLineDash([]);let ge=1.8/(O+1)*(O%2===0?1:-1);for(let ve=0;ve<b;ve++){let ne=Math.PI*2*ve/b+me*ge,H=Math.cos(ne)*Y,Z=Math.sin(ne)*Y,R=_e(H,Z,0);Ht.push({type:"electron",z:0,draw:()=>{let Be=x.createRadialGradient(R.px,R.py,0,R.px,R.py,7*R.scale);Be.addColorStop(0,"#38f9d7"),Be.addColorStop(.5,"#43e97b"),Be.addColorStop(1,"rgba(67, 233, 123, 0)"),x.fillStyle=Be,x.beginPath(),x.arc(R.px,R.py,7*R.scale,0,Math.PI*2),x.fill(),x.fillStyle="#ffffff",x.beginPath(),x.arc(R.px,R.py,Ye*R.scale,0,Math.PI*2),x.fill()}})}}):g==="spherical"&&Ae.forEach((b,O)=>{let Y=32+O*22,ge=O*Math.PI/(Ae.length+1),ve=[];for(let H=0;H<=Math.PI*2+.1;H+=.2){let Z=Math.cos(H)*Y,R=Math.sin(H)*Math.cos(ge)*Y,Be=Math.sin(H)*Math.sin(ge)*Y;ve.push({x:Z,y:R,z:Be})}x.beginPath(),ve.forEach((H,Z)=>{let R=_e(H.x,H.y,H.z);Z===0?x.moveTo(R.px,R.py):x.lineTo(R.px,R.py)}),x.strokeStyle=j==="light"?"rgba(59, 130, 246, 0.3)":"rgba(0, 242, 254, 0.28)",x.lineWidth=1,x.setLineDash([2,4]),x.stroke(),x.setLineDash([]);let ne=1.6/(O+1)*(O%2===0?1:-1);for(let H=0;H<b;H++){let Z=Math.PI*2*H/b+me*ne,R=Math.cos(Z)*Y,Be=Math.sin(Z)*Math.cos(ge)*Y,gt=Math.sin(Z)*Math.sin(ge)*Y,Ce=_e(R,Be,gt);Ht.push({type:"electron",z:Ce.pz,draw:()=>{let Nt=x.createRadialGradient(Ce.px,Ce.py,0,Ce.px,Ce.py,6*Ce.scale);Nt.addColorStop(0,"#00f2fe"),Nt.addColorStop(.5,"#4facfe"),Nt.addColorStop(1,"rgba(79, 172, 254, 0)"),x.fillStyle=Nt,x.beginPath(),x.arc(Ce.px,Ce.py,6*Ce.scale,0,Math.PI*2),x.fill(),x.fillStyle="#e0f2fe",x.beginPath(),x.arc(Ce.px,Ce.py,Ye*Ce.scale,0,Math.PI*2),x.fill()}})}}),tn.forEach((b,O)=>{let Y=b.x+Math.sin(me*2+O)*.8,ge=b.y+Math.cos(me*2+O)*.8,ve=b.z,ne=_e(Y,ge,ve);Ht.push({type:"nucleon",z:ne.pz,draw:()=>{let H=lt*ne.scale;x.beginPath(),x.arc(ne.px,ne.py,Math.max(1.5,H),0,Math.PI*2);let Z=x.createRadialGradient(ne.px-H*.3,ne.py-H*.3,H*.1,ne.px,ne.py,H);b.isProton?(Z.addColorStop(0,"#ff9999"),Z.addColorStop(.6,"#ef4444"),Z.addColorStop(1,"#991b1b")):(Z.addColorStop(0,"#93c5fd"),Z.addColorStop(.6,"#3b82f6"),Z.addColorStop(1,"#1e3a8a")),x.fillStyle=Z,x.fill(),x.fillStyle="rgba(255, 255, 255, 0.65)",x.beginPath(),x.arc(ne.px-H*.3,ne.py-H*.3,H*.3,0,Math.PI*2),x.fill()}})}),Ht.sort((b,O)=>O.z-b.z),Ht.forEach(b=>b.draw()),ae&&(ot=requestAnimationFrame(At))};return At(),()=>{cancelAnimationFrame(ot)}},[ce,Ae,g,j,ae,qe,et]);let Et=_=>{ee.current.isDown=!0,ee.current.lastX=_.clientX,ee.current.lastY=_.clientY,ee.current.vx=0,ee.current.vy=0},Nn=_=>{if(!ee.current.isDown)return;let x=_.clientX-ee.current.lastX,ot=_.clientY-ee.current.lastY;ee.current.y+=x*.01,ee.current.x+=ot*.01,ee.current.vy=x*.004,ee.current.vx=ot*.004,ee.current.lastX=_.clientX,ee.current.lastY=_.clientY},Mn=()=>{ee.current.isDown=!1},Pn=_=>{_.preventDefault(),Ot(x=>Math.min(2.5,Math.max(.4,x+(_.deltaY<0?.1:-.1))))};return k.createElement("div",{className:`popup-container ${j}`},k.createElement("header",{className:"header-bar flex items-center justify-between px-3 py-2 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm"},k.createElement("div",{className:"flex items-center space-x-2"},k.createElement("div",{className:"w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-cyan-500/30"},"\u269B"),k.createElement("div",null,k.createElement("h1",{className:"text-sm font-bold tracking-tight text-white flex items-center gap-1.5"},"Atomic Lab Overlay",k.createElement("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono"},"v1.0")))),k.createElement("div",{className:"flex items-center space-x-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60 text-xs"},k.createElement("button",{onClick:()=>dt("dark"),title:"Dark Theme",className:`px-1.5 py-0.5 rounded transition ${j==="dark"?"bg-cyan-500/30 text-cyan-300 font-medium":"text-slate-400 hover:text-slate-200"}`},"\u{1F319}"),k.createElement("button",{onClick:()=>dt("deepspace"),title:"Deep Space Theme",className:`px-1.5 py-0.5 rounded transition ${j==="deepspace"?"bg-purple-500/30 text-purple-300 font-medium":"text-slate-400 hover:text-slate-200"}`},"\u{1F30C}"),k.createElement("button",{onClick:()=>dt("light"),title:"Light Theme",className:`px-1.5 py-0.5 rounded transition ${j==="light"?"bg-amber-500/30 text-amber-300 font-medium":"text-slate-400 hover:text-slate-200"}`},"\u2600\uFE0F"))),k.createElement("div",{className:"p-3 space-y-2.5"},k.createElement("div",{className:"relative"},k.createElement("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-1"},k.createElement("span",{className:"font-semibold uppercase tracking-wider text-[10px] text-slate-400"},"Select Element (1\u2013118)"),k.createElement("span",{className:"text-cyan-400 font-mono"},"Z = ",ce.z)),k.createElement("div",{className:"flex items-center gap-1.5"},k.createElement("div",{className:"relative flex-1"},k.createElement("input",{type:"text",placeholder:"Search element by name, symbol, or Z...",value:It,onFocus:()=>pt(!0),onChange:_=>{Ft(_.target.value),pt(!0)},className:"w-full text-xs px-2.5 py-1.5 rounded-md bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"}),It&&k.createElement("button",{onClick:()=>Ft(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"},"\u2715")),k.createElement("button",{onClick:()=>pt(!ze),className:"px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-xs font-mono text-cyan-300 flex items-center gap-1"},k.createElement("span",{className:"font-bold"},ce.sym),k.createElement("span",{className:"text-[10px] text-slate-400"},"\u25BC"))),ze&&k.createElement("div",{className:"absolute z-50 left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-slate-900 border border-slate-700 rounded-lg shadow-xl divide-y divide-slate-800"},jt.map(_=>k.createElement("button",{key:_.z,onClick:()=>{Q(_.z),pt(!1),Ft("")},className:`w-full px-3 py-1.5 text-left text-xs flex items-center justify-between hover:bg-cyan-950/40 transition ${_.z===ce.z?"bg-cyan-900/30 text-cyan-300 font-semibold":"text-slate-200"}`},k.createElement("div",{className:"flex items-center gap-2"},k.createElement("span",{className:"font-mono text-[10px] w-5 text-slate-400"},_.z),k.createElement("span",{className:"font-bold text-cyan-400 w-6"},_.sym),k.createElement("span",null,_.name)),k.createElement("span",{className:"text-[10px] text-slate-400"},_.category))))),k.createElement("div",{className:"relative rounded-xl overflow-hidden border border-slate-700/80 shadow-inner bg-black flex flex-col items-center"},k.createElement("canvas",{ref:en,width:376,height:200,onMouseDown:Et,onMouseMove:Nn,onMouseUp:Mn,onMouseLeave:Mn,onWheel:Pn,className:"cursor-grab active:cursor-grabbing w-full h-[200px]"}),k.createElement("div",{className:"absolute top-2 left-2 flex items-center space-x-1 bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-slate-700/60 text-[10px] text-slate-300"},k.createElement("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),k.createElement("span",{className:"font-mono"},g.toUpperCase())),k.createElement("div",{className:"absolute top-2 right-2 flex items-center space-x-1 bg-slate-900/80 backdrop-blur-sm px-1.5 py-0.5 rounded-lg border border-slate-700/60 text-[11px] text-slate-300"},k.createElement("button",{onClick:()=>Ot(_=>Math.min(2.5,_+.15)),className:"px-1 hover:text-cyan-300 font-bold",title:"Zoom In"},"+"),k.createElement("span",{className:"text-[10px] font-mono text-slate-400"},Math.round(et*100),"%"),k.createElement("button",{onClick:()=>Ot(_=>Math.max(.4,_-.15)),className:"px-1 hover:text-cyan-300 font-bold",title:"Zoom Out"},"\u2212")),k.createElement("div",{className:"absolute bottom-2 left-2 text-[9px] text-slate-400 font-mono bg-slate-900/70 px-1.5 py-0.5 rounded backdrop-blur-sm"},"Drag to rotate \u2022 Scroll to zoom"),k.createElement("button",{onClick:()=>Dt(!ae),className:"absolute bottom-2 right-2 px-2 py-0.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded text-[10px] border border-slate-600 flex items-center gap-1 backdrop-blur-sm"},ae?"\u23F8 Pause":"\u25B6 Play")),k.createElement("div",{className:"space-y-1"},k.createElement("label",{className:"text-[10px] font-semibold uppercase tracking-wider text-slate-400"},"Model Architecture"),k.createElement("div",{className:"grid grid-cols-3 gap-1.5"},k.createElement("button",{onClick:()=>pe("planar"),className:`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition ${g==="planar"?"bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20":"bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200"}`},"2D Bohr"),k.createElement("button",{onClick:()=>pe("spherical"),className:`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition ${g==="spherical"?"bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20":"bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200"}`},"3D Spherical"),k.createElement("button",{onClick:()=>pe("quantum"),className:`px-2 py-1.5 rounded-lg text-xs font-medium border text-center transition ${g==="quantum"?"bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20":"bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200"}`},"Quantum Cloud"))),k.createElement("div",{className:"bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/60 space-y-2"},k.createElement("div",{className:"flex items-center justify-between"},k.createElement("div",{className:"flex items-baseline gap-2"},k.createElement("span",{className:"text-lg font-bold text-white"},ce.name),k.createElement("span",{className:"text-xs font-mono font-bold text-cyan-400"},"(",ce.sym,")")),k.createElement("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 font-medium"},ce.category)),k.createElement("div",{className:"grid grid-cols-3 gap-1.5 text-center"},k.createElement("div",{className:"bg-slate-900/60 p-1.5 rounded-lg border border-red-500/30"},k.createElement("div",{className:"text-[10px] text-red-400 flex items-center justify-center gap-1"},k.createElement("span",{className:"w-1.5 h-1.5 rounded-full bg-red-500"})," Protons"),k.createElement("div",{className:"text-xs font-bold text-white font-mono"},ce.z)),k.createElement("div",{className:"bg-slate-900/60 p-1.5 rounded-lg border border-blue-500/30"},k.createElement("div",{className:"text-[10px] text-blue-400 flex items-center justify-center gap-1"},k.createElement("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"})," Neutrons"),k.createElement("div",{className:"text-xs font-bold text-white font-mono"},ce.neutrons)),k.createElement("div",{className:"bg-slate-900/60 p-1.5 rounded-lg border border-cyan-500/30"},k.createElement("div",{className:"text-[10px] text-cyan-400 flex items-center justify-center gap-1"},k.createElement("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"})," Electrons"),k.createElement("div",{className:"text-xs font-bold text-white font-mono"},ce.z))),k.createElement("div",{className:"space-y-1"},k.createElement("div",{className:"flex items-center justify-between text-[10px] text-slate-400"},k.createElement("span",null,"Madelung Shell Distribution (K \u2192 Q):"),k.createElement("span",{className:"font-mono text-cyan-300 font-semibold"},Ae.join(" \u2192 "))),k.createElement("div",{className:"flex items-center gap-1 flex-wrap"},Ae.map((_,x)=>k.createElement("div",{key:x,className:"flex-1 min-w-[36px] bg-slate-900/90 border border-slate-700/80 rounded px-1.5 py-0.5 text-center"},k.createElement("span",{className:"text-[8px] text-slate-400 block"},["K","L","M","N","O","P","Q"][x]," (n=",x+1,")"),k.createElement("span",{className:"text-[11px] font-bold text-cyan-400 font-mono"},_,"e\u207B")))))),k.createElement("div",null,k.createElement("button",{onClick:En,className:"w-full py-2.5 px-3 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99] text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 text-xs transition duration-150"},k.createElement("span",{className:"text-base"},"\u{1F680}"),k.createElement("span",null,"Launch Webpage Full Overlay Simulation")),De&&k.createElement("p",{className:"text-center text-[10px] text-cyan-300 mt-1 font-mono animate-fade-in"},De))))},ku=Id;var Su=document.getElementById("root");Su&&xu(Su).render(k.createElement(k.StrictMode,null,k.createElement(ku,null)));})();
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
