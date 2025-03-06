import{r as n,R as W,b as re,j as d,L as ae}from"./index-DE2Y0x1S.js";import{l as te,C as ne}from"./index-CVmCoO6g.js";import{a as le,m as oe,d as se,c as V,h as G,_ as ie,b as A,w as F,H as ce,I as de,K as T,E as H,F as ue,A as X,U as pe,T as be,f as fe,N as U,al as me,a8 as he,p as ge,k as q}from"./context-CSfdTmeR.js";var ve=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],Ce=n.forwardRef(function(e,r){var a=e.prefixCls,t=a===void 0?"rc-checkbox":a,i=e.className,g=e.style,$=e.checked,m=e.disabled,P=e.defaultChecked,S=P===void 0?!1:P,u=e.type,j=u===void 0?"checkbox":u,_=e.title,c=e.onChange,k=le(e,ve),v=n.useRef(null),p=n.useRef(null),l=oe(S,{value:$}),E=se(l,2),R=E[0],w=E[1];n.useImperativeHandle(r,function(){return{focus:function(s){var f;(f=v.current)===null||f===void 0||f.focus(s)},blur:function(){var s;(s=v.current)===null||s===void 0||s.blur()},input:v.current,nativeElement:p.current}});var b=V(t,i,G(G({},"".concat(t,"-checked"),R),"".concat(t,"-disabled"),m)),h=function(s){m||("checked"in e||w(s.target.checked),c==null||c({target:A(A({},e),{},{type:j,checked:s.target.checked}),stopPropagation:function(){s.stopPropagation()},preventDefault:function(){s.preventDefault()},nativeEvent:s.nativeEvent}))};return n.createElement("span",{className:b,title:_,style:g,ref:p},n.createElement("input",ie({},k,{className:"".concat(t,"-input"),ref:v,onChange:h,disabled:m,checked:!!R,type:j})),n.createElement("span",{className:"".concat(t,"-inner")}))});function xe(e){const r=W.useRef(null),a=()=>{F.cancel(r.current),r.current=null};return[()=>{a(),r.current=F(()=>{r.current=null})},g=>{r.current&&(g.stopPropagation(),a()),e==null||e(g)}]}const ye=e=>{const{checkboxCls:r}=e,a=`${r}-wrapper`;return[{[`${r}-group`]:Object.assign(Object.assign({},T(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[a]:Object.assign(Object.assign({},T(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${a}`]:{marginInlineStart:0},[`&${a}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[r]:Object.assign(Object.assign({},T(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${r}-inner`]:Object.assign({},ue(e))},[`${r}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${H(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${H(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${a}:not(${a}-disabled),
        ${r}:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{borderColor:e.colorPrimary}},[`${a}:not(${a}-disabled)`]:{[`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}-checked:not(${r}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${r}-checked`]:{[`${r}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${a}-checked:not(${a}-disabled),
        ${r}-checked:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[r]:{"&-indeterminate":{[`${r}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${r}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorPrimary} !important`}}}},{[`${a}-disabled`]:{cursor:"not-allowed"},[`${r}-disabled`]:{[`&, ${r}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${r}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${r}-indeterminate ${r}-inner::after`]:{background:e.colorTextDisabled}}}]};function $e(e,r){const a=de(r,{checkboxCls:`.${e}`,checkboxSize:r.controlInteractiveSize});return[ye(a)]}const K=ce("Checkbox",(e,r)=>{let{prefixCls:a}=r;return[$e(a,e)]}),J=W.createContext(null);var Se=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const je=(e,r)=>{var a;const{prefixCls:t,className:i,rootClassName:g,children:$,indeterminate:m=!1,style:P,onMouseEnter:S,onMouseLeave:u,skipGroup:j=!1,disabled:_}=e,c=Se(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:k,direction:v,checkbox:p}=n.useContext(X),l=n.useContext(J),{isFormItemInput:E}=n.useContext(pe),R=n.useContext(be),w=(a=(l==null?void 0:l.disabled)||_)!==null&&a!==void 0?a:R,b=n.useRef(c.value),h=n.useRef(null),N=fe(r,h);n.useEffect(()=>{l==null||l.registerValue(c.value)},[]),n.useEffect(()=>{if(!j)return c.value!==b.current&&(l==null||l.cancelValue(b.current),l==null||l.registerValue(c.value),b.current=c.value),()=>l==null?void 0:l.cancelValue(c.value)},[c.value]),n.useEffect(()=>{var O;!((O=h.current)===null||O===void 0)&&O.input&&(h.current.input.indeterminate=m)},[m]);const s=k("checkbox",t),f=U(s),[D,I,z]=K(s,f),C=Object.assign({},c);l&&!j&&(C.onChange=function(){c.onChange&&c.onChange.apply(c,arguments),l.toggleOption&&l.toggleOption({label:$,value:c.value})},C.name=l.name,C.checked=l.value.includes(c.value));const B=V(`${s}-wrapper`,{[`${s}-rtl`]:v==="rtl",[`${s}-wrapper-checked`]:C.checked,[`${s}-wrapper-disabled`]:w,[`${s}-wrapper-in-form-item`]:E},p==null?void 0:p.className,i,g,z,f,I),o=V({[`${s}-indeterminate`]:m},me,I),[x,y]=xe(C.onClick);return D(n.createElement(he,{component:"Checkbox",disabled:w},n.createElement("label",{className:B,style:Object.assign(Object.assign({},p==null?void 0:p.style),P),onMouseEnter:S,onMouseLeave:u,onClick:x},n.createElement(Ce,Object.assign({},C,{onClick:y,prefixCls:s,className:o,disabled:w,ref:N})),$!==void 0&&n.createElement("span",{className:`${s}-label`},$))))},Q=n.forwardRef(je);var we=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const Ne=n.forwardRef((e,r)=>{const{defaultValue:a,children:t,options:i=[],prefixCls:g,className:$,rootClassName:m,style:P,onChange:S}=e,u=we(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:j,direction:_}=n.useContext(X),[c,k]=n.useState(u.value||a||[]),[v,p]=n.useState([]);n.useEffect(()=>{"value"in u&&k(u.value||[])},[u.value]);const l=n.useMemo(()=>i.map(o=>typeof o=="string"||typeof o=="number"?{label:o,value:o}:o),[i]),E=o=>{p(x=>x.filter(y=>y!==o))},R=o=>{p(x=>[].concat(q(x),[o]))},w=o=>{const x=c.indexOf(o.value),y=q(c);x===-1?y.push(o.value):y.splice(x,1),"value"in u||k(y),S==null||S(y.filter(O=>v.includes(O)).sort((O,Y)=>{const Z=l.findIndex(L=>L.value===O),ee=l.findIndex(L=>L.value===Y);return Z-ee}))},b=j("checkbox",g),h=`${b}-group`,N=U(b),[s,f,D]=K(b,N),I=ge(u,["value","disabled"]),z=i.length?l.map(o=>n.createElement(Q,{prefixCls:b,key:o.value.toString(),disabled:"disabled"in o?o.disabled:u.disabled,value:o.value,checked:c.includes(o.value),onChange:o.onChange,className:`${h}-item`,style:o.style,title:o.title,id:o.id,required:o.required},o.label)):t,C={toggleOption:w,value:c,disabled:u.disabled,name:u.name,registerValue:R,cancelValue:E},B=V(h,{[`${h}-rtl`]:_==="rtl"},$,m,D,N,f);return s(n.createElement("div",Object.assign({className:B,style:P},I,{ref:r}),n.createElement(J.Provider,{value:C},z)))}),M=Q;M.Group=Ne;M.__ANT_CHECKBOX=!0;function Ee(){const[e,r]=n.useState(!1),a=re();return d.jsx(d.Fragment,{children:d.jsxs("div",{className:"signup-page",children:[d.jsx("img",{src:te,className:"logo"}),e?d.jsxs("div",{className:"body center",children:[d.jsx("p",{className:"title strong",children:"Registration successful!"}),d.jsx("p",{className:"title sub-title",children:"Redirecting to the main page…"})]}):d.jsxs("div",{className:"body",children:[d.jsx("p",{className:"title strong",children:"Sign Up"}),d.jsxs("div",{className:"form",children:[d.jsx("input",{placeholder:"User Name"}),d.jsx("input",{placeholder:"Email"}),d.jsx("input",{placeholder:"Password"})]}),d.jsx("div",{className:"check-wrap",children:d.jsx(M,{children:"Remember me"})}),d.jsx("div",{className:"signup",onClick:()=>{r(!0),setTimeout(()=>{a("/?loggedIn=1")},2e3)},children:"Sign up"}),d.jsxs("div",{className:"jump",children:["Already have an  account? ",d.jsx(ae,{to:"/login",children:"Sign in"})]})]}),d.jsx("div",{className:"footer-wrap",children:d.jsx(ne,{})})]})})}export{Ee as default};
