(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{81291:function(e,t,l){Promise.resolve().then(l.bind(l,79809))},79809:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return D}});var s,r,a,n,i=l(57437),d=l(9908),o=l(73421),c=l(91972),m=l(10443),u=l(66648),x=l(93009),h=l(37440),p=l(50495),f=l(2265),b=l(35657),v=l(95317),j=l(57578);(s=a||(a={})).TON="ton",s.BITLAYER="bitlayer",s.ARBITRUM="arbitrum",s.ETHEREUM="ethereum";let g={arbitrum:"/arbitrum-text.png",ton:"/ton-text.png",bitlayer:"/bitlayer-text.png",ethereum:"/ethereum-text.png"},y=e=>{let{name:t}=e;return(0,i.jsx)("div",{className:"gap-[0.62rem] font-bold text-lg border-[2px] border-primary rounded-[0.25rem] h-[3.5rem] flex items-center justify-center ",children:(0,i.jsx)("img",{src:g[t],className:"h-[2rem]",alt:t})})};var w=e=>{let{network:t}=e;if(!t)return null;switch(t){case"ton":return(0,i.jsx)(y,{name:"ton"});case"bitlayer":return(0,i.jsx)(y,{name:"bitlayer"});case"arbitrum":return(0,i.jsx)(y,{name:"arbitrum"});case"ethereum":return(0,i.jsx)(y,{name:"ethereum"});default:return null}},N=l(3274),k=l(54242),_=l(62737),C=l.n(_),T=l(10591);(r=n||(n={}))[r.WITHDRAW=1]="WITHDRAW",r[r.APPLY=2]="APPLY";var E=e=>{let{data:{token:t,amount:l},threshold:s,onSuccessCallback:r}=e,n=(0,T.nB)(!0),[c,g]=(0,f.useState)(),[y,E]=(0,f.useState)(!1),[R,A]=(0,f.useState)("step1"),{toast:Z}=(0,b.pm)(),[z,M]=(0,f.useState)(""),Y=(0,x.Z)(),{runAsync:S,loading:B}=(0,o.Z)(d.fC,{manual:!0,onError:Y,onSuccess:()=>{Z({title:(null==t?void 0:t.withdrawal_method)===2?"Apply claiming successfully":"Withdraw successfully"}),E(!1),null==r||r()}}),P=(0,f.useMemo)(()=>{var e;if(!t)return;let l=null==t?void 0:null===(e=t.network)||void 0===e?void 0:e.toLowerCase();return l.startsWith(a.ARBITRUM)?a.ARBITRUM:l.startsWith(a.BITLAYER)?a.BITLAYER:l.startsWith(a.ETHEREUM)?a.ETHEREUM:l.startsWith(a.TON)?a.TON:void 0},[t]),O=(0,f.useMemo)(()=>{if(P)return P===a.TON?(0,h.qG)(z):(0,h.VA)(z)},[P,z]),F=(0,f.useCallback)(async()=>{if(!c)return;if(!O)return Z({variant:"destructive",title:"Incorrect address"});if(!t)return;let{address:e,network:l}=t;S({address:z,token:{contract_address:e,network:l},type:"TOKEN",amount:c})},[S,O,Z,z,t,c]),I=(0,f.useCallback)(()=>{g(null==s?void 0:s[0]),E(!0)},[s]),W=(0,f.useCallback)(()=>{null==n||n.openLink("".concat("https://pumpad.io/airdrops","/").concat(null==t?void 0:t.apply_airdrop_project_id))},[n,t]),L=(0,f.useMemo)(()=>(null==t?void 0:t.withdrawal_method)===2?"apply":"withdraw",[t]);return(0,i.jsxs)(i.Fragment,{children:[(null==t?void 0:t.withdrawal_method)===2?(0,i.jsxs)("div",{className:"flex gap-1 w-[5.32rem]",children:[(0,i.jsx)(p.z,{onClick:I,className:"rounded-[0.5rem] px-[0.2rem]",disabled:!(null==t?void 0:t.apply_end_time)||C()().isAfter((0,_.unix)(t.apply_end_time)),children:"Apply"}),(0,i.jsx)(p.z,{variant:"outline",className:"px-[0.2rem] rounded-[0.5rem]",disabled:!(null==t?void 0:t.apply_end_time)||C()().isBefore((0,_.unix)(t.apply_end_time)),onClick:W,children:"Claim"})]}):(0,i.jsx)(p.z,{onClick:I,children:"Withdraw"}),(0,i.jsx)(v.yo,{open:y,onOpenChange:e=>{e||g(void 0),A("step1"),E(e)},children:(0,i.jsxs)(v.ue,{side:"bottom",className:"step1"===R?"":"h-[90vh]",children:[(0,i.jsx)(v.Tu,{children:(0,i.jsx)(v.bC,{children:(0,k.Z)(L)})}),2===t.withdrawal_method&&!!(null==t?void 0:t.apply_end_time)&&(0,i.jsxs)("div",{className:"flex text-[#FF4545] text-xs font-medium",children:[(0,i.jsx)(u.default,{src:"/notice.png",width:16,height:20,alt:""}),"You can apply claiming before UTC\xa0",(0,_.unix)(t.apply_end_time).format("YYYY/MM/DD HH:mm")]}),"step1"===R&&(0,i.jsxs)("div",{className:"flex flex-col justify-between h-full pt-[1.5rem]",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)(u.default,{src:(null==t?void 0:t.image_url)||"/placeholder.png",width:60,height:60,alt:(null==t?void 0:t.symbol)||""}),(0,i.jsx)("p",{className:"text-xl font-black",children:null==t?void 0:t.symbol}),(0,i.jsxs)("p",{className:"text-primary text-xs mb-6",children:["Balance:\xa0",(0,h.nx)({token:l,decimal:null==t?void 0:t.decimals})]}),(0,i.jsxs)("p",{className:"font-semibold mb-[0.625rem]",children:["Choose a ",L," amount:"]}),!s||(0,m.Z)(s)?(0,i.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[(0,i.jsx)(u.default,{src:"/empty.png",alt:"empty",width:80,height:80}),"coming soon."]}):(0,i.jsx)("div",{className:"flex gap-[0.625rem] flex-wrap justify-center",children:null==s?void 0:s.map(e=>(0,i.jsxs)("div",{onClick:()=>g(e),className:"gap-2 leading-none text-center border-[0.0625rem] rounded-md flex flex-col items-center justify-center min-w-[6.25rem] px-1 py-2 font-black font-sm ".concat((0,j.Z)(c||0).eq(e)?"bg-countdown-bg border-primary":"bg-tag-bg border-border"),children:[(0,i.jsx)(u.default,{src:(null==t?void 0:t.image_url)||"/placeholder.png",width:24,height:24,alt:(null==t?void 0:t.name)||""}),(0,h.nx)({token:e,decimal:null==t?void 0:t.decimals,symbol:null==t?void 0:t.symbol})]},e))})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center pb-4",children:[(0,i.jsx)(p.z,{className:"w-[15rem]",size:"lg",disabled:(0,j.Z)(l).lt(c||0),onClick:()=>A("step2"),children:"Confirm"}),(0,j.Z)(l).lt(c||0)&&(0,i.jsx)("p",{className:"text-xs",children:"Insufficient Balance"})]})]}),"step2"===R&&(0,i.jsxs)("div",{className:"flex flex-col justify-between h-full pt-[1.5rem] w-full",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-[1rem] w-full",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-[0.5rem] w-full",children:[(0,i.jsxs)("p",{className:"font-medium",children:[(0,k.Z)(L)," Network"]}),(0,i.jsx)(w,{network:P})]}),P&&(0,i.jsxs)("div",{className:"flex flex-col gap-[0.5rem] w-full",children:[(0,i.jsxs)("p",{className:"font-medium",children:[(0,k.Z)(L),"\xa0Address\xa0",P===a.TON?"(TON)":"(EVM)"]}),(0,i.jsxs)("div",{className:"flex w-full items-center relative",children:[(0,i.jsx)("input",{className:"focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 text-black px-2 text-sm placeholder:text-[#53644E] h-[3.5rem] text-secondary w-full rounded-md border-[2px] border-input bg-background",placeholder:"address",value:z,onChange:e=>{var t;return M(null===(t=e.target.value)||void 0===t?void 0:t.trim())}}),(0,i.jsx)("p",{className:"text-red-400 text-bold text-sm absolute -bottom-[1.2rem]",children:z?O?"":"Incorrect address.":""})]})]}),(0,i.jsxs)("div",{className:"flex justify-between w-full items-center",children:[(0,i.jsxs)("p",{className:"font-medium",children:[(0,k.Z)(L),"\xa0Amount"]}),(0,i.jsxs)("div",{className:"flex gap-sm items-center gap-1",children:[(0,i.jsx)(u.default,{src:(null==t?void 0:t.image_url)||"/placeholder.png",width:32,height:32,alt:"token"}),(0,i.jsx)("p",{className:"text-primary text-md font-bold",children:(0,h.nx)({token:c,decimal:null==t?void 0:t.decimals,symbol:null==t?void 0:t.symbol})})]})]})]}),(0,i.jsx)("div",{className:"flex flex-col items-center pb-6 relative",children:(0,i.jsxs)(p.z,{className:"w-[15rem]",size:"lg",disabled:!O||B,onClick:F,children:[B&&(0,i.jsx)(N.Z,{className:"mr-2 h-4 w-4 animate-spin"}),"Submit"]})})]})]})})]})},R=l(65569);let A=R.fC,Z=R.xz,z=f.forwardRef((e,t)=>{let{className:l,align:s="center",sideOffset:r=4,children:a,...n}=e;return(0,i.jsx)(R.h_,{children:(0,i.jsxs)(R.VY,{ref:t,align:s,sideOffset:r,className:(0,h.cn)("z-50 w-72 rounded-md bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",l),...n,children:[(0,i.jsx)(R.Eh,{}),a]})})});z.displayName=R.VY.displayName;var M=l(30687),Y=l(89904);let S="pumpad.io",B=e=>e.includes(S)?e.split(" ").map(e=>e===S?(0,i.jsx)(Y.Z,{className:"text-primary underline mr-[0.25em]",href:"https://pumpad.io",children:e},Math.random()+e):(0,i.jsxs)("span",{children:[e," "]},Math.random()+e)):e;var P=e=>{let{children:t,className:l,...s}=e;return(0,i.jsxs)(A,{children:[(0,i.jsx)(Z,{children:(0,i.jsx)(M.Z,{svgId:"icon-toast-warn",className:"text-primary"})}),(0,i.jsx)(z,{className:(0,h.cn)("p-[0.625rem] text-center text-xs bg-black/80 rounded-[0.75rem] font-normal w-auto max-w-[15.6rem]",l),...s,children:B(t)})]})};let O=e=>{let{logo:t,name:l,amount:s,className:r,children:a,toolTip:n,...d}=e;return(0,i.jsxs)("div",{className:(0,h.cn)(r,"flex justify-between w-full items-center text-base font-black"),...d,children:[(0,i.jsxs)("div",{className:"flex items-center w-[6.3125rem] gap-1",children:[(0,i.jsx)(u.default,{src:t,width:40,height:40,alt:""}),l||"--",n&&(0,i.jsx)(P,{children:n})]}),(0,i.jsx)("div",{className:"flex-1 text-center",children:s}),a]})};var F=e=>{let{data:{token:t,amount:l,type:s,...r},className:a,threshold:n,onSuccessCallback:d,...o}=e;return"STAR"===s?(0,i.jsx)(O,{logo:"/star.png",name:"STAR",amount:l,toolTip:"Pumpad is the First & Native Social Launchpad on Bitlayer and Telegram. Combine P2P payments(Bitcoin) with P2P communication(Telegram). Pumpad STAR points will be used for airdropping Pumpad official token at a later stage",...o,children:(0,i.jsx)(p.z,{className:"w-[5.32rem] cursor-not-allowed",variant:"outline",children:"Redeem"})}):(0,i.jsx)(O,{logo:(null==t?void 0:t.image_url)||"/placeholder.png",name:null==t?void 0:t.symbol,amount:(0,h.nx)({token:l,decimal:null==t?void 0:t.decimals}),toolTip:null==t?void 0:t.description,...o,children:(0,i.jsx)(E,{data:{token:t,amount:l,type:s,...r},threshold:n,onSuccessCallback:d})})},I=e=>{let{children:t,type:l,className:s}=e,r=(0,f.useMemo)(()=>{switch(l){case"success":return"text-primary bg-[#25391f]";case"pending":return"text-[#007AFF] bg-[#152639]";case"rejected":return"text-[#FF4545] bg-[#391f1f]";case"expired":return"text-[#FFA845] bg-[#392d1f]";default:return"bg-slate-700"}},[l]);return(0,i.jsx)("div",{className:(0,h.cn)(s,r,"text-xs px-[0.5rem] py-[0.2rem] rounded-[0.125rem] leading-none"),children:t})};let W=["","withdrawal","claiming"],L=[1,2],H=e=>{let{data:{token:t,amount:l,status:s,created_at:r},className:a}=e;return(0,i.jsxs)("div",{className:(0,h.cn)(a,"border-b flex border-[#40493E] flex-col w-full items-center py-[0.5rem] "),children:[(0,i.jsxs)("div",{className:"flex justify-between items-center text-sm font-bold w-full",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)(u.default,{src:t.image_url||"/placeholder.png",width:24,height:24,alt:"token"}),(0,i.jsx)("span",{children:t.symbol})]}),(0,i.jsxs)("p",{children:["-",(0,h.nx)({token:l,decimal:t.decimals})]})]}),(0,i.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,i.jsx)("p",{className:"text-xs text-[#7E9776]",children:C()(r).format("YYYY-MM-DD HH:mm")}),[1,2,16].includes(s)&&(0,i.jsx)(I,{type:"pending",children:"Pending"}),[64].includes(s)&&(0,i.jsx)(I,{type:"rejected",children:"Rejected"}),[256,2048].includes(s)&&(0,i.jsx)(I,{children:"Failed"}),[4096].includes(s)&&(0,i.jsx)(I,{type:"success",children:"Finished"})]})]})};var U=e=>{let{className:t,...l}=e,s=(0,x.Z)(),[r,a]=(0,f.useState)(!1),[n,c]=(0,f.useState)(1),{data:b,loading:j}=(0,o.Z)(()=>(0,d.Pc)({method:n}),{onError:s,ready:r,refreshDeps:[n]}),g=(0,f.useCallback)(()=>a(!0),[]);return(0,i.jsxs)("div",{className:(0,h.cn)("fixed bottom-0 py-6 z-20",t),...l,children:[(0,i.jsx)(p.z,{className:"w-[16rem]",size:"lg",onClick:g,children:"Record"}),(0,i.jsx)(v.yo,{open:r,onOpenChange:a,children:(0,i.jsxs)(v.ue,{side:"bottom",children:[(0,i.jsx)(v.Tu,{children:(0,i.jsx)(v.bC,{children:"Record"})}),(0,i.jsx)("div",{className:"border-b w-full text-center border-[#262B25] pb-1 mb-4",children:L.map(e=>(0,i.jsxs)(p.z,{value:e,className:"relative w-[7.5rem] rounded-none text-md  hover:bg-transparent",variant:"ghost",onClick:()=>c(e),children:[(0,k.Z)(W[e]),n===e&&(0,i.jsx)("i",{className:"absolute inset-x-0 h-[0.0625rem] bg-primary -bottom-1"})]},e))}),(0,i.jsx)("div",{className:"w-full h-[18rem] overflow-y-auto",children:j?(0,i.jsx)("div",{className:"flex flex-col w-full justify-center items-center my-6",children:"loading..."}):(0,m.Z)(b)?(0,i.jsxs)("div",{className:"flex flex-col w-full justify-center items-center my-6",children:[(0,i.jsx)(u.default,{src:"/empty.png",width:60,height:60,alt:"empty"}),"no records."]}):null==b?void 0:b.map(e=>(0,i.jsx)(H,{data:e},JSON.stringify(e)))})]})})]})},D=()=>{var e;let t=(0,x.Z)(),{data:l,loading:s,refreshAsync:r}=(0,o.Z)(d.UX,{onError:t}),{data:a}=(0,o.Z)(d.oe,{onError:t});return(0,i.jsxs)("div",{className:"pb-20 pt-9 flex flex-col items-center justify-between min-h-screen",children:[(0,i.jsxs)("div",{className:"fixed inset-x-0 leading-[1.875rem] bg-primary top-0 flex text-xs font-medium text-black z-10 justify-center",children:[(0,i.jsx)(u.default,{src:"/notice.png",width:18,height:22,alt:""})," Withdrawals will be processed on Mondays and Thursdays"]}),(0,i.jsxs)("div",{className:"flex flex-col items-center pb-16 relative z-0",children:[(0,i.jsx)("div",{className:"inline-flex bg-bottom bg-[url('/title-bg.png')] bg-contain bg-no-repeat text-2xl font-black mb-9",children:"My Assets"}),(0,i.jsx)("div",{className:"min-w-[21.25rem] px-[0.625rem] py-4 bg-tag-bg border-border rounded-[0.5rem] flex flex-col items-center gap-4",children:(0,m.Z)(null==l?void 0:l.assets)?(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)(u.default,{src:"/empty.png",width:80,height:80,alt:"empty"}),s&&"loading..."]}):null==l?void 0:null===(e=l.assets)||void 0===e?void 0:e.map(e=>{var t,l;return(0,i.jsx)(F,{data:e,threshold:null===(t=(0,c.Z)(null==a?void 0:a.result,t=>{var l,s,r,a;return(null==t?void 0:null===(s=t.token)||void 0===s?void 0:null===(l=s.address)||void 0===l?void 0:l.toLowerCase())===(null==e?void 0:null===(a=e.token)||void 0===a?void 0:null===(r=a.address)||void 0===r?void 0:r.toLowerCase())}))||void 0===t?void 0:t.thresholds,onSuccessCallback:()=>{null==r||r()}},e.type+(null===(l=e.token)||void 0===l?void 0:l.address))})})]}),(0,i.jsx)(U,{})]})}},50495:function(e,t,l){"use strict";l.d(t,{z:function(){return o}});var s=l(57437),r=l(2265),a=l(71538),n=l(12218),i=l(37440);let d=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-[2.5rem] text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"bg-black text-primary hover:bg-black/90",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-6 px-3",lg:"h-10 px-8",icon:"h-8 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef((e,t)=>{let{className:l,variant:r,size:n,asChild:o=!1,...c}=e,m=o?a.g7:"button";return(0,s.jsx)(m,{className:(0,i.cn)(d({variant:r,size:n,className:l})),ref:t,...c})});o.displayName="Button"}},function(e){e.O(0,[407,604,729,292,281,615,807,970,971,23,744],function(){return e(e.s=81291)}),_N_E=e.O()}]);