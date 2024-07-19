/* Copyright 2024 Observable, Inc. */
function e(e){const t=document.createElement("template");return t.innerHTML=e,document.importNode(t.content,!0)}function t(e){const t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.innerHTML=e,t}const r=Object.assign(se(e,(e=>{if(null===e.firstChild)return null;if(e.firstChild===e.lastChild)return e.removeChild(e.firstChild);const t=document.createElement("span");return t.appendChild(e),t})),{fragment:se(e,(e=>e))});Object.assign(se(t,(e=>null===e.firstChild?null:e.firstChild===e.lastChild?e.removeChild(e.firstChild):e)),{fragment:se(t,(e=>{const t=document.createDocumentFragment();for(;e.firstChild;)t.appendChild(e.firstChild);return t}))});const n=9,a=10,o=12,s=13,i=32,l=65,c=90,d=97,u=122,p=60,g=62,h=47,f=45,m=33,b=61,C=34,v=39,w=63,k=1,x=2,y=3,L=4,M=5,$=6,T=7,E=8,j=9,A=10,S=11,N=12,V=13,I=14,U=15,B=16,H=17,O=18,W=19,R=20,q=21,D=22,P=23,X=24,Y=25,Z=26,_=27,F=28,z=29,G=128,J=1,K=8,Q=1,ee="http://www.w3.org/2000/svg",te="http://www.w3.org/1999/xlink",re="http://www.w3.org/XML/1998/namespace",ne="http://www.w3.org/2000/xmlns/",ae=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map((e=>[e.toLowerCase(),e]))),oe=new Map([["xlink:actuate",te],["xlink:arcrole",te],["xlink:href",te],["xlink:role",te],["xlink:show",te],["xlink:title",te],["xlink:type",te],["xml:lang",re],["xml:space",re],["xmlns",ne],["xmlns:xlink",ne]]);function se(e,t){return function({raw:r}){let n,a,o,s,i=k,l="",c=0;for(let e=0,t=arguments.length;e<t;++e){const t=r[e];if(e>0){const n=arguments[e];switch(i){case Z:if(null!=n){const e=`${n}`;if(pe(a))l+=e.replace(/[<]/g,ie);else{if(new RegExp(`</${a}[\\s>/]`,"i").test(l.slice(-a.length-2)+e))throw new Error("unsafe raw text");l+=e}}break;case k:null==n||(n instanceof Node||"string"!=typeof n&&n[Symbol.iterator]||/(?:^|>)$/.test(r[e-1])&&/^(?:<|$)/.test(t)?(l+="\x3c!--::"+e+"--\x3e",c|=G):l+=`${n}`.replace(/[<&]/g,ie));break;case j:{let a;if(i=N,/^[\s>]/.test(t)){if(null==n||!1===n){l=l.slice(0,o-r[e-1].length);break}if(!0===n||""==(a=`${n}`)){l+="''";break}if("style"===r[e-1].slice(o,s)&&de(n)||"function"==typeof n){l+="::"+e,c|=J;break}}if(void 0===a&&(a=`${n}`),""===a)throw new Error("unsafe unquoted empty string");l+=a.replace(/^['"]|[\s>&]/g,ie);break}case N:l+=`${n}`.replace(/[\s>&]/g,ie);break;case S:l+=`${n}`.replace(/['&]/g,ie);break;case A:l+=`${n}`.replace(/["&]/g,ie);break;case $:if(de(n)){l+="::"+e+"=''",c|=J;break}throw new Error("invalid binding");case H:break;default:throw new Error("invalid binding")}}for(let e=0,r=t.length;e<r;++e){const r=t.charCodeAt(e);switch(i){case k:r===p&&(i=x);break;case x:r===m?i=Y:r===h?i=y:le(r)?(n=e,a=void 0,i=L,--e):r===w?(i=M,--e):(i=k,--e);break;case y:le(r)?(i=L,--e):r===g?i=k:(i=M,--e);break;case L:ce(r)?(i=$,a=ge(t,n,e)):r===h?i=I:r===g&&(a=ge(t,n,e),i=ue(a)?Z:k);break;case $:ce(r)||(r===h||r===g?(i=T,--e):r===b?(i=E,o=e+1,s=void 0):(i=E,--e,o=e+1,s=void 0));break;case E:ce(r)||r===h||r===g?(i=T,--e,s=e):r===b&&(i=j,s=e);break;case T:ce(r)||(r===h?i=I:r===b?i=j:r===g?i=ue(a)?Z:k:(i=E,--e,o=e+1,s=void 0));break;case j:ce(r)||(r===C?i=A:r===v?i=S:r===g?i=ue(a)?Z:k:(i=N,--e));break;case A:r===C&&(i=V);break;case S:r===v&&(i=V);break;case N:ce(r)?i=$:r===g&&(i=ue(a)?Z:k);break;case V:ce(r)?i=$:r===h?i=I:r===g?i=ue(a)?Z:k:(i=$,--e);break;case I:r===g?i=k:(i=$,--e);break;case M:r===g&&(i=k);break;case U:r===f?i=B:r===g?i=k:(i=H,--e);break;case B:r===f?i=P:r===g?i=k:(i=H,--e);break;case H:r===p?i=O:r===f&&(i=D);break;case O:r===m?i=W:r!==p&&(i=H,--e);break;case W:r===f?i=R:(i=H,--e);break;case R:r===f?i=q:(i=P,--e);break;case q:i=P,--e;break;case D:r===f?i=P:(i=H,--e);break;case P:r===g?i=k:r===m?i=X:r!==f&&(i=H,--e);break;case X:r===f?i=D:r===g?i=k:(i=H,--e);break;case Y:r===f&&t.charCodeAt(e+1)===f?(i=U,++e):(i=M,--e);break;case Z:r===p&&(i=_);break;case _:r===h?i=F:(i=Z,--e);break;case F:le(r)?(n=e,i=z,--e):(i=Z,--e);break;case z:ce(r)&&a===ge(t,n,e)?i=$:r===h&&a===ge(t,n,e)?i=I:r===g&&a===ge(t,n,e)?i=k:le(r)||(i=Z,--e);break;default:i=void 0}}l+=t}const d=e(l),u=document.createTreeWalker(d,c,null,!1),ee=[];for(;u.nextNode();){const e=u.currentNode;switch(e.nodeType){case Q:{const t=e.attributes;for(let r=0,n=t.length;r<n;++r){const{name:a,value:o}=t[r];if(/^::/.test(a)){const t=arguments[+a.slice(2)];fe(e,a),--r,--n;for(const r in t){const n=t[r];null==n||!1===n||("function"==typeof n?e[r]=n:"style"===r&&de(n)?me(e[r],n):he(e,r,!0===n?"":n))}}else if(/^::/.test(o)){const t=arguments[+o.slice(2)];fe(e,a),--r,--n,"function"==typeof t?e[a]=t:me(e[a],t)}}break}case K:if(/^::/.test(e.data)){const t=e.parentNode,r=arguments[+e.data.slice(2)];if(r instanceof Node)t.insertBefore(r,e);else if("string"!=typeof r&&r[Symbol.iterator])if(r instanceof NodeList||r instanceof HTMLCollection)for(let n=r.length-1,a=e;n>=0;--n)a=t.insertBefore(r[n],a);else for(const n of r)null!=n&&t.insertBefore(n instanceof Node?n:document.createTextNode(n),e);else t.insertBefore(document.createTextNode(r),e);ee.push(e)}}}for(const e of ee)e.parentNode.removeChild(e);return t(d)}}function ie(e){return`&#${e.charCodeAt(0).toString()};`}function le(e){return l<=e&&e<=c||d<=e&&e<=u}function ce(e){return e===n||e===a||e===o||e===i||e===s}function de(e){return e&&e.toString===Object.prototype.toString}function ue(e){return"script"===e||"style"===e||pe(e)}function pe(e){return"textarea"===e||"title"===e}function ge(e,t,r){return e.slice(t,r).toLowerCase()}function he(e,t,r){e.namespaceURI===ee&&(t=t.toLowerCase(),t=ae.get(t)||t,oe.has(t))?e.setAttributeNS(oe.get(t),t,r):e.setAttribute(t,r)}function fe(e,t){e.namespaceURI===ee&&(t=t.toLowerCase(),t=ae.get(t)||t,oe.has(t))?e.removeAttributeNS(oe.get(t),t):e.removeAttribute(t)}function me(e,t){for(const r in t){const n=t[r];r.startsWith("--")?e.setProperty(r,n):e[r]=n}}const be=r`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="currentColor"
>
  <path
    d="M3.89356 6.41958C3.77277 6.47134 3.63973 6.5 3.5 6.5C2.94772 6.5 2.5 6.05228 2.5 5.5C2.5 4.94772 2.94772 4.5 3.5 4.5C3.63973 4.5 3.77277 4.52866 3.89356 4.58042C4.10781 3.91441 4.54852 3.34997 5.125 2.97779C4.65672 2.67547 4.09885 2.5 3.5 2.5C1.84315 2.5 0.5 3.84315 0.5 5.5C0.5 6.53244 1.02153 7.44307 1.81552 7.9828C0.686292 8.69052 0 10.0803 0 11.5V13.5H2V11.5C2 10.217 2.83454 9.5 3.5 9.5C3.57028 9.5 3.64086 9.50676 3.71117 9.52044C4.02446 8.88728 4.48683 8.34549 5.06552 7.9828C4.51822 7.61076 4.10038 7.06249 3.89356 6.41958Z"
  />
  <path
    d="M6.35644 4.58042C6.44966 4.87021 6.5 5.17923 6.5 5.5C6.5 5.82077 6.44966 6.12979 6.35644 6.41958C5.99982 6.26675 5.75 5.91255 5.75 5.5C5.75 5.08745 5.99982 4.73325 6.35644 4.58042Z"
  />
  <path
    d="M8.39356 6.41958C8.27277 6.47134 8.13973 6.5 8 6.5C7.44772 6.5 7 6.05228 7 5.5C7 4.94772 7.44772 4.5 8 4.5C8.13973 4.5 8.27277 4.52866 8.39356 4.58042C8.60781 3.91441 9.04852 3.34997 9.625 2.97779C9.15672 2.67547 8.59885 2.5 8 2.5C6.34315 2.5 5 3.84315 5 5.5C5 6.53244 5.52153 7.44307 6.31552 7.9828C5.18629 8.69052 4.5 10.0803 4.5 11.5V13.5H6.5V11.5C6.5 10.217 7.33454 9.5 8 9.5C8.07046 9.5 8.14103 9.50675 8.21121 9.52036C8.5245 8.88724 8.98685 8.34547 9.56552 7.9828C9.01822 7.61076 8.60038 7.06249 8.39356 6.41958Z"
  />
  <path
    d="M10.8564 4.58042C10.9497 4.87021 11 5.17923 11 5.5C11 5.82077 10.9497 6.12979 10.8564 6.41958C10.4998 6.26675 10.25 5.91255 10.25 5.5C10.25 5.08745 10.4998 4.73325 10.8564 4.58042Z"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14.1845 7.9828C14.9785 7.44307 15.5 6.53244 15.5 5.5C15.5 3.84315 14.1569 2.5 12.5 2.5C10.8431 2.5 9.5 3.84315 9.5 5.5C9.5 6.53244 10.0215 7.44307 10.8155 7.9828C9.68629 8.69052 9 10.0803 9 11.5V13.5H11V11.5C11 10.217 11.8345 9.5 12.5 9.5C13.1655 9.5 14 10.217 14 11.5V13.5H16V11.5C16 10.0803 15.3137 8.69052 14.1845 7.9828ZM13.5 5.5C13.5 6.05228 13.0523 6.5 12.5 6.5C11.9477 6.5 11.5 6.05228 11.5 5.5C11.5 4.94772 11.9477 4.5 12.5 4.5C13.0523 4.5 13.5 4.94772 13.5 5.5Z"
  />
</svg>`,Ce=r`<svg
  viewBox="0 0 16 16"
  width="16"
  height="16"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
>
  <path
    d="M6.70304 5.44182L8.20307 3.94183C8.20307 3.94183 8.70306 3.44183 9.70306 2.44184C10.703 1.44184 12.6038 1.68889 13.4906 2.63706C14.3773 3.58521 14.9958 5.16784 13.7031 6.44183C12.4103 7.71582 10.7031 9.44183 10.7031 9.44183M9.0481 11.1455C9.0481 11.1455 6.93417 13.4418 5.70304 14.4418C4.47192 15.4419 2.73625 14.6589 1.84946 13.7108C0.962682 12.7626 0.495886 11.0305 1.84946 9.73616C3.20304 8.44182 4.70304 6.94182 4.70304 6.94182M10 6.19944L5.5 10.4994"
  ></path>
</svg>`,ve=r`<svg
  viewBox="0 0 16 16"
  width="16"
  height="16"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
>
  <circle cx="8" cy="8" r="7.1" />
  <path
    d="M1.14285 10.5286 L14.8571 10.5286 M1.14285 5.71429H14.8571 M8 1.14285C7.42857 2.09523 5.14285 4.21428 5.14285 8C5.14285 12.5714 8 14.8571 8 14.8571 M8 1.14285C8.57143 2.09523 10.8571 4.21428 10.8571 8C10.8571 12.5714 8 14.8571 8 14.8571"
  />
</svg>`,we=r`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
>
  <path
    d="M1.5 13.5V11.5C1.5 9.84315 2.61929 8.5 4 8.5C5.38071 8.5 6.5 9.84315 6.5 11.5V13.5"
  />
  <path
    d="M9.5 13.5V11.5C9.5 9.84315 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.84315 14.5 11.5V13.5"
  />
  <circle cx="4" cy="5.5" r="2" />
  <circle cx="12" cy="5.5" r="2" />
</svg>`,ke=r`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <rect
    x="3"
    y="7"
    width="10"
    height="7"
    rx="0.5"
    stroke="currentColor"
    strokeWidth="2"
  />
  <path
    d="M11 7.5V5C11 0.999963 5 1.00004 5 5V7.5"
    stroke="currentColor"
    strokeWidth="2"
  />
  <rect x="7" y="9" width="2" height="3" rx="1" fill="currentColor" />
</svg> `;const xe=function(e){return{get length(){try{return window[e].length}catch{return 0}},key(t){try{return window[e].key(t)}catch{return null}},getItem(t){try{return window[e].getItem(t)}catch{return null}},setItem(t,r){try{return window[e].setItem(t,r)}catch{}},removeItem(t){try{return window[e].removeItem(t)}catch{}},clear(){try{return window[e].clear()}catch{}}}}("localStorage");const{default:ye,pageLoad:Le}=await import("https://events.observablehq.com/client.js").catch((()=>({default(){},pageLoad(){}}))),Me="7cc6aad896f0ba04c284373fdd09c6e8625d4880";Le({release:Me});const{id:$e,user:Te,...Ee}=await fetch(location.pathname.split("/").slice(0,2).concat("_project").join("/")).then((e=>e.ok?e.json():{}));ye({type:"project:view:view",event_version:4,release:Me,data:{projectId:$e,...Ee,user:Te},user_id:Te?.id});const je="https://observablehq.com",{owner:Ae,slug:Se,accessLevel:Ne,sharing:Ve}=Ee,Ie=document.createElement("observablehq-tools");Ie.attachShadow({mode:"closed"}).appendChild(function(e){let t=null,n=null;e.addEventListener("pointerdown",(function(r){if(0!==r.button)return;r.preventDefault(),t=[r.clientX,r.clientY],n=[e.offsetLeft,e.offsetTop],document.addEventListener("pointermove",o),document.addEventListener("pointerup",s)})),e.appendChild(r`<style>
    [data-draggable-left] {
      position: fixed;
      touch-action: none;
      transition: inset 0.15s ease-in-out;
    }
    [data-draggable-left="true"] {
      left: 24px;
    }
    [data-draggable-left="false"] {
      right: 24px;
    }
    [data-draggable-top="true"] {
      top: 24px;
    }
    [data-draggable-top="false"] {
      bottom: 24px;
    }
    @media (min-width: calc(832px + 6rem)) {
      [data-draggable-left="false"] {
        right: 45px;
      }
    }
    .dragging {
      transition: none;
      pointer-events: none;
    }
  </style>`);const a=`draggable-${e.id??"_"}`;return e.dataset.draggableLeft=xe.getItem(`${a}-l`)??!1,e.dataset.draggableTop=xe.getItem(`${a}-t`)??!1,e;function o(r){r.preventDefault();const a=[r.clientX-t[0],r.clientY-t[1]];Math.max(...a.map(Math.abs))>5&&e.classList.add("dragging"),e.style.left=n[0]+a[0]+"px",e.style.top=n[1]+a[1]+"px",e.style.right="unset",e.style.bottom="unset"}function s(t){e.classList.remove("dragging"),document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",s),xe.setItem(`${a}-l`,e.dataset.draggableLeft=t.clientX<window.innerWidth/2),xe.setItem(`${a}-t`,e.dataset.draggableTop=t.clientY<window.innerHeight/2);const{left:r,top:n,right:i,bottom:l}=e.getBoundingClientRect();e.style.left=r+"px",e.style.top=n+"px",e.style.right=window.innerWidth-i+"px",e.style.bottom=window.innerHeight-l+"px",setTimeout((()=>{e.style.left=null,e.style.top=null,e.style.right=null,e.style.bottom=null}),0)}}(r`<div id="root" title="Drag to move to another corner">
    <style>
      #root {
        --background-color: #fff;
        --background-color-hover: rgba(0, 0, 0, 0.03);
        --border-color: #e2e2e2;
        --border-radius: 4px;
        --text-color: #454545;
        --text-color-hover: #000;
        --spacing-extra-small: 0.25rem;
        z-index: 10;
        color: var(--text-color);
      }
      @media (prefers-color-scheme: dark) {
        #root {
          --border-color: #323232;
          --background-color: #161616;
          --background-color-hover: rgba(255, 255, 255, 0.03);
          --text-color: color-mix(in srgb, #dfdfd6 60%, #161616);
          --text-color-hover: #fff;
        }
      }
      .frame {
        display: flex;
        align-items: center;
        border: solid 1px var(--border-color);
        padding: 8px;
        gap: 8px;
        border-radius: 8px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background: var(--background-color);
      }
      a {
        display: flex;
      }
      img {
        width: 32px;
        height: 32px;
      }
      img.team {
        border-radius: var(--border-radius);
      }
      a.button {
        font: 600 14px system-ui, sans-serif;
        padding: 8px;
        border: solid 1px var(--border-color);
        border-radius: var(--border-radius);
        color: var(--text-color);
        text-decoration: none;
        display: flex;
        align-items: center;
      }
      a.button span {
        display: flex;
      }
      a.button svg {
        margin-right: var(--spacing-extra-small);
      }
      a.button:hover {
        background: var(--background-color-hover);
        color: var(--text-color-hover);
      }
    </style>
    <div class="frame">
      <a href="${je}/@${Ae.login}">
        <img src=${Ae.avatar_url} title=${Ae.name} class="team" />
      </a>
      <a
        href="${je}/projects/@${Ae.login}/${Se}?share"
        class="button"
      >
        ${"public"===Ne?r.fragment`<span title="Anyone can access this project.">${ve} Public</span>`:"link_shared"===Ne?r.fragment`<span title="Only people with the secret link can access this project.">${Ce} Secret link</span>`:"team"===Ve?r.fragment`<span title="Your team can access this project.">${be} Team</span>`:"shared"===Ve?r.fragment`<span title="People you've invited can access this project.">${we} Shared</span>`:r.fragment`<span title="Only you can access this project.">${ke} Only you</span>`}
      </a>
    </div>
  </div>`)),Te&&Te.id&&"user"===Te.accessLevel&&(document.body?document.body.appendChild(Ie):document.addEventListener("DOMContentLoaded",(()=>document.body.appendChild(Ie))));
