(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{46601:function(){},9529:function(){},55024:function(){},30687:function(t,e,a){"use strict";var n=a(57437),r=a(37440);e.Z=t=>{let{svgId:e,children:a,className:s,...o}=t;return(0,n.jsx)("svg",{className:(0,r.cn)(s,"icon"),"aria-hidden":"true",...o,children:a||(0,n.jsx)("use",{xlinkHref:"#".concat(e)})})}},89904:function(t,e,a){"use strict";var n=a(57437),r=a(10591),s=a(2265),o=a(87138);e.Z=t=>{let{className:e,onClick:a,href:i,...l}=t,u=(0,r.nB)(!0),d=(0,s.useCallback)(t=>{let e;if(null==a||a(t),"string"==typeof i)e=i;else{let{search:t="",pathname:a="",hash:n=""}=i;e="".concat(a,"?").concat(t,"#").concat(n)}let n=new URL(e,window.location.toString()),r=new URL(window.location.toString());(n.protocol!==r.protocol||n.host!==r.host)&&(t.preventDefault(),u&&u.openLink(n.toString()))},[i,a,u]);return(0,n.jsx)(o.default,{...l,href:i,onClick:d,className:(0,r.AK)(e)})}},95317:function(t,e,a){"use strict";a.d(e,{Tu:function(){return m},bC:function(){return v},ue:function(){return p},yo:function(){return u}});var n=a(57437),r=a(2265),s=a(13304),o=a(12218),i=a(74697),l=a(37440);let u=s.fC;s.xz,s.x8;let d=s.h_,c=r.forwardRef((t,e)=>{let{className:a,...r}=t;return(0,n.jsx)(s.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/55  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:e})});c.displayName=s.aV.displayName;let f=(0,o.j)("rounded-t-2xl h-[30rem] overflow-auto fixed z-50 bg-[#181918] px-6 pb-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 flex flex-col items-center",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"bottom"}}),p=r.forwardRef((t,e)=>{let{side:a="bottom",className:r,children:o,...i}=t;return(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{}),(0,n.jsx)(s.VY,{ref:e,className:(0,l.cn)(f({side:a}),r),...i,children:o})]})});p.displayName=s.VY.displayName;let m=t=>{let{className:e,children:a,...r}=t;return(0,n.jsxs)("div",{className:(0,l.cn)("flex flex-col text-center text-lg font-bold sticky top-0 w-full py-4",e),...r,children:[(0,n.jsx)("span",{className:"w-[2.25rem] h-[0.25rem] rounded-md bg-tag-bg mx-auto mb-1"}),a,(0,n.jsxs)(s.x8,{className:"absolute right-0 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,n.jsx)(i.Z,{className:"h-[1.75rem] w-[1.75rem] rounded-full p-1 bg-[#2a2b2a]"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})};m.displayName="SheetHeader";let v=r.forwardRef((t,e)=>{let{className:a,...r}=t;return(0,n.jsx)(s.Dx,{ref:e,className:(0,l.cn)("text-lg font-semibold text-foreground",a),...r})});v.displayName=s.Dx.displayName,r.forwardRef((t,e)=>{let{className:a,...r}=t;return(0,n.jsx)(s.dk,{ref:e,className:(0,l.cn)("text-sm text-muted-foreground",a),...r})}).displayName=s.dk.displayName},35657:function(t,e,a){"use strict";a.d(e,{pm:function(){return f}});var n=a(2265);let r=0,s=new Map,o=t=>{if(s.has(t))return;let e=setTimeout(()=>{s.delete(t),d({type:"REMOVE_TOAST",toastId:t})},5e3);s.set(t,e)},i=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,1)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case"DISMISS_TOAST":{let{toastId:a}=e;return a?o(a):t.toasts.forEach(t=>{o(t.id)}),{...t,toasts:t.toasts.map(t=>t.id===a||void 0===a?{...t,open:!1}:t)}}case"REMOVE_TOAST":if(void 0===e.toastId)return{...t,toasts:[]};return{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)}}},l=[],u={toasts:[]};function d(t){u=i(u,t),l.forEach(t=>{t(u)})}function c(t){let{...e}=t,a=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>d({type:"DISMISS_TOAST",toastId:a});return d({type:"ADD_TOAST",toast:{...e,id:a,open:!0,onOpenChange:t=>{t||n()}}}),{id:a,dismiss:n,update:t=>d({type:"UPDATE_TOAST",toast:{...t,id:a}})}}function f(){let[t,e]=n.useState(u);return n.useEffect(()=>(l.push(e),()=>{let t=l.indexOf(e);t>-1&&l.splice(t,1)}),[t]),{...t,toast:c,dismiss:t=>d({type:"DISMISS_TOAST",toastId:t})}}},93009:function(t,e,a){"use strict";var n=a(35657),r=a(10591),s=a(2265);e.Z=()=>{let t=(0,r.BF)(!0),e=(0,r.kD)(!0),{toast:a}=(0,n.pm)();return(0,s.useCallback)(n=>{let r=null==n?void 0:n.status,s=null==n?void 0:n.code,o=null==n?void 0:n.message,i=(null==n?void 0:n.variant)||"destructive";if(401===r){if(null==t?void 0:t.isOpened)return;null==t||t.open({title:"Your session has expired.",message:"Please restart the application.",buttons:[{id:"close",type:"destructive",text:"close"},{id:"skip",type:"default",text:"skip"}]}).then(t=>{"close"===t&&(null==e||e.close())});return}a({title:o,description:s,variant:i})},[t,a,e])}},57578:function(t,e,a){"use strict";let n=a(19449).Z.clone({DECIMAL_PLACES:64});e.Z=n},9908:function(t,e,a){"use strict";a.d(e,{PV:function(){return i},oe:function(){return s},UX:function(){return r},Z8:function(){return o},ht:function(){return c},$N:function(){return f},Pc:function(){return u},Mr:function(){return l},fC:function(){return d}});var n=a(8592);let r=async()=>await n.Z.get("/referral/api/v1/lottery/assets"),s=async()=>await n.Z.get("/referral/api/v1/lottery/asset/thresholds"),o=async()=>await n.Z.get("/referral/api/v1/lottery/rewards"),i=async()=>await n.Z.get("/referral/api/v1/lottery"),l=async()=>await n.Z.post("/referral/api/v1/lottery"),u=async t=>await n.Z.get("/referral/api/v1/lottery/withdrawals",{params:t}),d=async t=>await n.Z.post("/referral/api/v1/lottery/withdrawals/apply",t),c=async()=>await n.Z.get("/referral/api/v1/lottery/withdrawals/random"),f=async()=>await n.Z.get("/referral/api/v1/tg/mission/".concat("2","/status"))},8592:function(t,e,a){"use strict";var n=a(38472),r=a(44996);let s=async t=>{let{url:e,baseURL:a="https://tg.pumpad.io",...n}=t,s=(0,r.Z)();return n.headers.Authorization=s?"tma ".concat(s):void 0,{...n,url:e,baseURL:a}},o={timeout:2e4},i=n.Z.create(o);i.interceptors.request.use(s),i.interceptors.response.use(t=>null==t?void 0:t.data,t=>{var e,a,n,r,s,o,i;if((null==t?void 0:t.code)=="ECONNABORTED"&&(null==t?void 0:t.message.indexOf("timeout"))!=-1||(null==t?void 0:null===(e=t.response)||void 0===e?void 0:e.status)>=500||(null==t?void 0:t.code)==="ERR_NETWORK")throw{code:t.code,status:null===(a=t.response)||void 0===a?void 0:a.status,message:(null===(r=t.response)||void 0===r?void 0:null===(n=r.data)||void 0===n?void 0:n.message)||(null===(i=t.response)||void 0===i?void 0:null===(o=i.data)||void 0===o?void 0:null===(s=o.error)||void 0===s?void 0:s.message)||"Network problems, please refresh and try again."};let l=t.response.data;if("string"==typeof l)throw{code:"wrong",message:"Oops, something wrong",status:t.response.status};throw{...l.error||l||{code:"wrong",message:"Oops, something wrong"},status:t.response.status}}),e.Z=i,n.Z.create(o).interceptors.request.use(s)},44996:function(t,e,a){"use strict";var n=a(10591);e.Z=()=>{var t,e,a,r;try{let r=sessionStorage.getItem("tma.js/mini-app");if(r){let t=null===(e=JSON.parse(r))||void 0===e?void 0:e.initDataRaw;if(t)return t}let s=sessionStorage.getItem("tma.js/launch-params");if(s){let t=(a=new URLSearchParams(s.replaceAll('"',"")),void 0===a)?void 0:a.get("tgWebAppData");if(t)return t}return null===(t=(0,n.Y6)())||void 0===t?void 0:t.initDataRaw}catch(t){return null===(r=(0,n.Y6)())||void 0===r?void 0:r.initDataRaw}}},37440:function(t,e,a){"use strict";a.d(e,{Oe:function(){return p},VA:function(){return h},_v:function(){return c},cn:function(){return d},nx:function(){return g},p8:function(){return f},qG:function(){return w}});var n=a(44839),r=a(96164),s=a(62737),o=a.n(s),i=a(87542),l=a.n(i),u=a(57578);function d(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return(0,r.m6)((0,n.W)(e))}let c=async t=>new Promise(e=>{setTimeout(e,t||3e3)}),f=10,p=t=>{if(!t)return{count:0,target:void 0};let{draw_count:e,last_modify_time:a}=t,n=(0,u.Z)(o()().unix()),r=n.minus(a);if(e>=f)return{count:e,target:void 0};let i=r.dividedBy(10800).integerValue(u.Z.ROUND_DOWN).plus(e);if(i.gte(f))return{count:f,target:void 0};let l=(0,u.Z)(10800).minus(r.mod(10800)),d=n.plus(l);return{count:i.toNumber(),target:(0,s.unix)(d.toNumber())}},m=t=>{for(;t.includes(".")&&(t.endsWith(".")||t.endsWith("0"));)t=t.slice(0,-1);return t},v=(t,e)=>(0,u.Z)(t).dividedBy((0,u.Z)(10).pow(e)),g=t=>{let{token:e,decimal:a=0,format:n=8,symbol:r="",mode:s=u.Z.ROUND_DOWN}=t;if(void 0===e)return"--";if((0,u.Z)(e).eq(0))return"0 ".concat(r);let o=v(e,a);if(o.isNaN())return"-- ".concat(r);if(o.gt(0)&&o.lt((0,u.Z)(1).div(10).pow(n)))return"< ".concat((0,u.Z)(1).div(10).pow(n).toFormat()," ").concat(r);let i=o.toFormat(n,s);return"".concat(m(i)," ").concat(r)};function h(t){return!!t&&/^(0x){1}[0-9a-fA-F]{40}$/i.test(t)}function w(t){return!!t&&l().utils.Address.isValid(t)}}}]);