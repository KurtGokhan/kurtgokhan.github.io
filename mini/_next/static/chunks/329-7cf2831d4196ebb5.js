(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{3072:function(e,n,r){"use strict";r.d(n,{O:function(){return E}});var t=r(1799);function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=r(5893);function u(e){var n,r,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=u(e[n]))&&(t&&(t+=" "),t+=r);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var a=function(){for(var e,n,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(n=u(e))&&(t&&(t+=" "),t+=n);return t},d=r(7294),f=r(3854);function v(e,n,r){var t=n*r;if(0===n||0===r)return[];if("string"===typeof e){for(var o=e.replace(/\n|\r|_/g,""),s=(o=(o+=" ".repeat(t-o.length)).substring(0,t)).split(""),i=[],c=0;c<r;c++)i.push([]);for(var l=0;l<s.length;l++)i[Math.floor(l/n)][l%n]={value:s[l],checked:!1,revealed:!1};return i}for(var u=e.map((function(e){return function(e,n){return"string"===typeof e?(e=e.replace(/\n|\r|_/g,""),(e=(e+=" ".repeat(n-e.length)).substring(0,n)).split("").map((function(e){return{value:e,revealed:!1,checked:!1}}))):e.slice(0,n).map((function(e){return{value:e,revealed:!1,checked:!1}}))}(e,n)})),a=u.length;a<r;a++)u.push(new Array(n).fill(" "));return u.slice(0,r)}function h(e,n){return e.map((function(e,r){return e.map((function(e,o){return(0,t.Z)({},e,"function"===typeof n?n(e,r,o):n)}))}))}function p(e,n,r){return!!e&&("across"===e.dir?e.row===n&&e.col<=r&&e.col+e.answer.length>r:e.col===r&&e.row<=n&&e.row+e.answer.length>n)}var w=(0,d.createContext)(void 0);function x(){return(0,d.useContext)(w)}var _=r(3999),m=r.n(_),j=r(5434),y=r(8449),g=r.n(y);function b(e){return(0,l.jsx)("button",{tabIndex:-1,className:a(g().key,e.dark&&g().dark,e.clue&&g().clueButton),onClick:function(){var n;null===(n=e.onPress)||void 0===n||n.call(e)},children:e.children})}function k(e){return(0,l.jsxs)("div",{className:a(g().host),children:[!!e.clue&&(0,l.jsxs)("div",{className:g().clue,children:[(0,l.jsx)("button",{onClick:function(){return e.onClue(-1)},className:g().clueButton,children:(0,l.jsx)(j.G1X,{})}),(0,l.jsx)("div",{className:g().clueDescription,children:e.clue}),(0,l.jsx)("button",{onClick:function(){return e.onClue(1)},className:g().clueButton,children:(0,l.jsx)(j.FNi,{})})]}),(0,l.jsxs)("div",{className:g().keyboard,children:[(0,l.jsxs)("div",{className:g().row,children:[(0,l.jsx)(b,{onPress:function(){return e.onKey("q")},children:"Q"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("w")},children:"W"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("e")},children:"E"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("r")},children:"R"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("t")},children:"T"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("y")},children:"Y"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("u")},children:"U"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("\u0131")},children:"I"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("o")},children:"O"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("p")},children:"P"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("\u011f")},children:"\u011e"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("\xfc")},children:"\xdc"})]}),(0,l.jsxs)("div",{className:g().row,children:[(0,l.jsx)(b,{onPress:function(){return e.onKey("a")},children:"A"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("s")},children:"S"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("d")},children:"D"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("f")},children:"F"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("g")},children:"G"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("h")},children:"H"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("j")},children:"J"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("k")},children:"K"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("l")},children:"L"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("\u015f")},children:"\u015e"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("i")},children:"\u0130"})]}),(0,l.jsxs)("div",{className:g().row,children:[(0,l.jsx)(b,{onPress:function(){return e.onClue(-1)},dark:!0,clue:!0,children:(0,l.jsx)(j.G1X,{})}),(0,l.jsx)(b,{onPress:function(){return e.onKey("z")},children:"Z"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("x")},children:"X"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("c")},children:"C"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("v")},children:"V"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("b")},children:"B"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("n")},children:"N"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("m")},children:"M"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("\xf6")},children:"\xd6"}),(0,l.jsx)(b,{onPress:function(){return e.onKey("\xe7")},children:"\xc7"}),(0,l.jsx)(b,{onPress:function(){return e.onDelete()},dark:!0,children:(0,l.jsx)(j.wbO,{})}),(0,l.jsx)(b,{onPress:function(){return e.onSwitch()},dark:!0,children:"down"===e.direction?(0,l.jsx)(j.PEw,{}):(0,l.jsx)(j.ROZ,{})}),(0,l.jsx)(b,{onPress:function(){return e.onClue(1)},dark:!0,clue:!0,children:(0,l.jsx)(j.FNi,{})})]})]})]})}var P,C=r(6195),N=r.n(C);function O(e){var n=e.value,r=(0,d.useState)(),t=r[0],o=r[1];if((0,d.useEffect)((function(){var e;e=o,P||(P=fetch("https://api.exchangerate.host/latest?base=TRY").then((function(e){return e.json()})).then((function(e){return e.rates}))),P.then(e)}),[]),!t)return(0,l.jsx)(l.Fragment,{});var s=t[n];if(!s)return(0,l.jsx)(l.Fragment,{});var i=1/s;return(0,l.jsx)("div",{className:N().host,children:i.toFixed(2)})}var K=window.matchMedia("(hover: hover) and (pointer: fine)"),E=(0,d.forwardRef)((function(e,n){var r=e.className,i=(e.children,e.allowedChars),u=e.wallChar,x=e.data,_=e.moveWhenChangingDir,j=void 0===_||_,y=e.autoScroll,g=e.replacers,b=s(e,["className","children","allowedChars","wallChar","data","moveWhenChangingDir","autoScroll","replacers"]);u||(u="*"),i||(i="abc\xe7defg\u011fh\u0131ijklmno\xf6prs\u015ftu\xfcvyzwqx");var P=(0,d.useState)(!1),C=P[0],N=P[1];(0,d.useEffect)((function(){N(!!K&&!K.matches)}),[]);var E=(0,d.useMemo)((function(){return v(x.answers,x.width,x.height)}),[x.answers,x.width,x.height]),S=(0,d.useMemo)((function(){return x.clues.map((function(e,n){return o((0,t.Z)({},e),{index:n})}))}),[x.clues]),D=(0,d.useRef)(),R=(0,d.useRef)(),z=(0,d.useState)([0,0]),I=z[0],M=z[1],T=(0,d.useState)("across"),B=T[0],A=T[1],H=function(){return A((function(e){return"across"===e?"down":"across"}))},Z=(0,d.useState)(v("",x.width,x.height)),G=Z[0],U=Z[1],q=(0,d.useRef)(G);(0,d.useEffect)((function(){q.current=G}));var V=(0,d.useMemo)((function(){return S.findIndex((function(e){if(e.dir===B)return p(e,I[0],I[1])}))}),[I,S,B]);(0,d.useEffect)((function(){-1===V&&(S.findIndex((function(e){if(e.dir!==B)return p(e,I[0],I[1])}))>=0&&H())}),[V,S,I,B]);var W=(0,d.useState)(-1),X=W[0],J=W[1],Q=S[V],Y=V===X?void 0:S[X],$=(0,d.useCallback)((function(e){var n=S.length,r=S[((V+e)%n+n)%n];M([r.row,r.col]),A(r.dir)}),[S,V]),ee=function(e){return function(e,n,r){var s=G[e][n],i=E[e][n];if(!(null===s||void 0===s?void 0:s.checked)||(null===i||void 0===i?void 0:i.value)!==(null===s||void 0===s?void 0:s.value)){var l=G.map((function(e){return c(e)}));return l[e][n]=o((0,t.Z)({},l[e][n]),{value:r}),U(l),l}}(I[0],I[1],e)},ne=function(e){ee(e),"across"===B?re(1,0,!1):re(0,1,!1)},re=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=0,o=function(e,n,s){var i,c=e[0]+s,l=e[1]+n,a=x.width,d=x.height,f=[r?(c%d+d)%d:Math.max(0,Math.min(d-1,c)),r?(l%a+a)%a:Math.max(0,Math.min(a-1,l))];return(null===(i=E[f[0]][f[1]])||void 0===i?void 0:i.value)===u?r?++t>Math.max(x.width,x.height)?e:o(f,n,s):e:f};M((function(r){return o(r,e,n)}))},te=function(){ee(" "),"across"===B?re(-1,0,!1):re(0,-1,!1)},oe=function(e){if("insertText"===e.inputType){var n,r,t=null===(n=e.data)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.toLocaleLowerCase("tr-TR");" "===t?H():i.includes(t)&&(ee(t||" "),"across"===B?re(1,0,!1):re(0,1,!1))}else"insertLineBreak"===e.inputType?$(1):"deleteContentBackward"===e.inputType&&(ee(" "),"across"===B?re(-1,0,!1):re(0,-1,!1));e.preventDefault(),e.stopPropagation();var o=R.current;if(o){if(""!=o.value){var s,c=null===(s=o.value)||void 0===s?void 0:s.toLocaleLowerCase("tr-TR");" "===c?H():i.includes(c)&&(ee(c||" "),"across"===B?re(1,0,!1):re(0,1,!1))}o.value=""}},se=(0,d.useCallback)((function(e){var n;M([e.row,e.col]),A(e.dir),null===(n=R.current)||void 0===n||n.focus(),y&&setTimeout((function(){var e;return null===(e=D.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),100)}),[y]),ie=(0,d.useRef)(oe);(0,d.useEffect)((function(){ie.current=oe})),(0,d.useEffect)((function(){var e=R.current,n=function(e){var n;null===(n=ie.current)||void 0===n||n.call(ie,e)};return null===e||void 0===e||e.addEventListener("beforeinput",n),null===e||void 0===e||e.addEventListener("input",n),null===e||void 0===e||e.addEventListener("change",n),function(){null===e||void 0===e||e.removeEventListener("beforeinput",n),null===e||void 0===e||e.removeEventListener("input",n),null===e||void 0===e||e.removeEventListener("change",n)}}),[R,ie]);var ce=(0,d.useMemo)((function(){return{data:o((0,t.Z)({},x),{clues:S}),setClue:se,replacers:(0,t.Z)({Currency:O,ClueSymbol:F},g),check:function(){U(h(q.current,{checked:!0}))},reveal:function(){U(h(E,(function(e,n,r){var t,o;return{checked:!0,revealed:(null===e||void 0===e?void 0:e.value)!==(null===(o=null===(t=q.current)||void 0===t?void 0:t[n][r])||void 0===o?void 0:o.value)}})))},getResult:function(){for(var e=[],n=0;n<E.length;n++){for(var r=E[n],t=q.current[n],o=0;o<r.length;o++){var s=r[o],i=t[o];s.value===u?e.push("\u2b1b"):i.revealed?e.push("\ud83d\udfe5"):s.value===i.value?e.push("\ud83d\udfe9"):i.value&&" "!==i.value?e.push("\ud83d\udfe5"):e.push("\u2b1c")}e.push("\n")}return e.join("")}}}),[x,S,se,g,E,u]);(0,d.useImperativeHandle)(n,(function(){return ce}),[ce]);var le=!!Q&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("strong",{children:[Q.index+1," - "]}),(0,l.jsx)(L,{clue:Q})]});return(0,l.jsxs)(w.Provider,{value:ce,children:[(0,l.jsxs)("div",o((0,t.Z)({},b),{className:a(r,m().host),children:[!C&&(0,l.jsx)("input",{ref:R,className:a(m().input),formNoValidate:!0,onKeyDown:function(e){var n,r=!1,t=null===(n=e.key||e.code)||void 0===n?void 0:n.toLocaleLowerCase("tr-TR");if("ArrowDown"===e.code)("down"===B||j)&&re(0,1,!0),"down"!==B&&A("down"),r=!0;else if("ArrowUp"===e.code)("down"===B||j)&&re(0,-1,!0),"down"!==B&&A("down"),r=!0;else if("ArrowLeft"===e.code)("across"===B||j)&&re(-1,0,!0),"across"!==B&&A("across"),r=!0;else if("ArrowRight"===e.code)("across"===B||j)&&re(1,0,!0),"across"!==B&&A("across"),r=!0;else if("Home"===e.code)Q&&M([Q.row,Q.col]),r=!0;else if("End"===e.code)Q&&("across"===Q.dir?M([Q.row,Q.col+Q.answer.length-1]):M([Q.row+Q.answer.length-1,Q.col])),r=!0;else if("Space"===e.code||"Tab"===e.code)H(),r=!0;else if("Enter"===e.code||"Return"===e.code)$(e.shiftKey?-1:1),r=!0;else if("PageUp"===e.code)$(-1),r=!0;else if("PageDown"===e.code)$(1),r=!0;else if("Backspace"===e.code)te(),r=!0;else if("Delete"===e.code||"Delete"===e.key)ee(" "),"across"===B?re(1,0,!1):re(0,1,!1),r=!0;else if(i.includes(t))ne(t),r=!0;else if(Q&&parseInt(t)>0){var o=parseInt(t);o<=Q.answer.length&&M("across"===B?[Q.row,Q.col+o-1]:[Q.row+o-1,Q.col])}r&&(e.preventDefault(),e.stopPropagation())},autoComplete:"none",spellCheck:!1,autoCorrect:"none",autoCapitalize:"characters",type:"text",onSubmit:function(e){$(1),e.preventDefault(),e.stopPropagation()}}),(0,l.jsxs)("div",{className:a(m().puzzlePart),children:[(0,l.jsxs)("div",{className:a(m().currentClue),children:[(0,l.jsx)("button",{onClick:function(){return $(-1)},className:m().chevronButton,children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})})}),(0,l.jsx)("div",{className:a(m().currentClueContent),children:le}),(0,l.jsx)("button",{onClick:function(){return $(1)},className:m().chevronButton,children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})})})]}),(0,l.jsx)("div",{ref:D,className:a(m().puzzle,m()[B]),children:E.map((function(e,n){return(0,l.jsx)("div",{className:a(m().row,n===I[0]&&m().focused),children:e.map((function(e,r){var t,o,s=(null===e||void 0===e?void 0:e.value)===u,i=G[n][r],c=!s&&(null===i||void 0===i?void 0:i.value)===(null===e||void 0===e?void 0:e.value),d=!s&&!c&&!!(null===i||void 0===i?void 0:i.value)&&" "!==(null===i||void 0===i?void 0:i.value),v=S.filter((function(e){return e.col===r&&e.row===n})),h=S.filter((function(e){return p(e,n,r)})),w=[!1,!1,!1,!1],x=!0,_=!1,j=void 0;try{for(var y,g=h[Symbol.iterator]();!(x=(y=g.next()).done);x=!0){var b,k,P=y.value,C="across"===P.dir?0:1,N="across"===P.dir?1:0,O=P.row+C*(P.answer.length-1),K=P.col+N*(P.answer.length-1),L=P.row===n&&P.col===r,F=O===n&&K===r;if(L||F){var D=L?-1:1,z=[n+C*D,r+N*D],T=null===(b=E[z[0]])||void 0===b||null===(k=b[z[1]])||void 0===k?void 0:k.value;"string"===typeof T&&T!==u&&("across"===P.dir&&L&&(w[3]=!0),"across"===P.dir&&F&&(w[1]=!0),"across"!==P.dir&&L&&(w[0]=!0),"across"!==P.dir&&F&&(w[2]=!0))}}}catch(B){_=!0,j=B}finally{try{x||null==g.return||g.return()}finally{if(_)throw j}}return(0,l.jsxs)("div",{className:a(m().cell,s&&m().wall,n===I[0]&&r===I[1]&&m().focused,n===I[0]&&m().rowFocused,r===I[1]&&m().colFocused,p(Q,n,r)&&m().clueFocused,(null===Q||void 0===Q||null===(t=Q.links)||void 0===t?void 0:t.some((function(e){return p(S[e],n,r)})))&&m().clueLinked,p(Y,n,r)&&m().clueHighlighted,w[0]&&m().limiterTop,w[1]&&m().limiterRight,w[2]&&m().limiterBottom,w[3]&&m().limiterLeft,c&&m().correct,d&&m().wrong,(null===i||void 0===i?void 0:i.checked)&&m().checked,!s&&(null===i||void 0===i?void 0:i.revealed)&&m().revealed),onPointerDown:function(e){var t;I[0]===n&&I[1]==r?H():s||M([n,r]),null===(t=R.current)||void 0===t||t.focus(),setTimeout((function(){var e;return null===(e=R.current)||void 0===e?void 0:e.focus()}),100),e.preventDefault(),e.stopPropagation()},onContextMenu:function(e){e.stopPropagation(),e.preventDefault()},children:[null===i||void 0===i||null===(o=i.value)||void 0===o?void 0:o.toLocaleUpperCase("tr-TR"),(0,l.jsx)("div",{className:m().clueHints,children:v.map((function(e,n){var r;return(0,l.jsxs)("div",{className:a(m().clueHint,m()[e.dir],(null===Q||void 0===Q||null===(r=Q.links)||void 0===r?void 0:r.includes(e.index))&&m().clueLinked),children:[e.index+1,"across"===e.dir?(0,l.jsx)(f.Fd8,{}):(0,l.jsx)(f.F2E,{})]},n)}))})]},r)}))},n)}))})]}),(0,l.jsxs)("div",{className:m().cluePart,children:[(0,l.jsxs)("div",{className:m().clues,children:[(0,l.jsx)("div",{className:m().title,children:"Soldan sa\u011fa"}),S.filter((function(e){return"across"===e.dir})).map((function(e){return(0,l.jsxs)("div",{className:a(m().clue,e.index===V&&m().focused),onClick:function(){return se(e)},onMouseEnter:function(){return J(e.index)},onMouseLeave:function(){return J(-1)},children:[(0,l.jsx)("span",{className:m().index,children:e.index+1}),(0,l.jsx)(L,{clue:e})]},e.index)}))]}),(0,l.jsxs)("div",{className:m().clues,children:[(0,l.jsx)("div",{className:m().title,children:"Yukar\u0131dan a\u015fa\u011f\u0131ya"}),S.filter((function(e){return"down"===e.dir})).map((function(e){return(0,l.jsxs)("div",{className:a(m().clue,e.index===V&&m().focused),onClick:function(){var n;M([e.row,e.col]),A(e.dir),null===(n=R.current)||void 0===n||n.focus(),y&&setTimeout((function(){var e;return null===(e=D.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),100)},onMouseEnter:function(){return J(e.index)},onMouseLeave:function(){return J(-1)},children:[(0,l.jsx)("span",{className:m().index,children:e.index+1}),(0,l.jsx)(L,{clue:e})]},e.index)}))]})]})]})),C&&(0,l.jsx)(k,{direction:B,onClue:$,onDelete:te,onSwitch:H,onKey:ne,clue:le})]})})),S=/\$\$(\w+)\((\w*)\)/gim;function L(e){for(var n=e.clue,r=x(),t=n.clue.split(S),o=[],s=0;s<t.length;s+=3){var i=t[s];o.push(i);var c=t[s+1],u=t[s+2],a=r.replacers[c];a&&o.push((0,l.jsx)(a,{value:u}))}return(0,l.jsx)(l.Fragment,{children:o.map((function(e,n){return(0,l.jsx)(d.Fragment,{children:e},n)}))})}function F(e){var n=x(),r=parseFloat(e.value),t=n.data.clues[r];return(0,l.jsxs)("div",{className:a(m().clueHint,m()[t.dir]),onClick:function(e){var r;null===(r=n.setClue)||void 0===r||r.call(n,t),null===e||void 0===e||e.stopPropagation()},children:[t.index+1,"across"===t.dir?(0,l.jsx)(f.Fd8,{}):(0,l.jsx)(f.F2E,{})]})}},3999:function(e){e.exports={host:"crossword_host__cqG66",input:"crossword_input__LBE9G",puzzlePart:"crossword_puzzlePart__v_Nvb",currentClue:"crossword_currentClue__3EEfI",chevronButton:"crossword_chevronButton__XlzqA",currentClueContent:"crossword_currentClueContent__kIGoA",puzzle:"crossword_puzzle__qUKpS",across:"crossword_across__M_bma",down:"crossword_down__sRK0y",row:"crossword_row__DhPrs",cell:"crossword_cell__Kj71Q",wall:"crossword_wall__n8b_q",limiterTop:"crossword_limiterTop__lJqJe",limiterRight:"crossword_limiterRight__VjFsf",limiterBottom:"crossword_limiterBottom__U_0RW",limiterLeft:"crossword_limiterLeft__4iyff",rowFocused:"crossword_rowFocused__JkT_d",colFocused:"crossword_colFocused__BSaQ_",clueLinked:"crossword_clueLinked__fSwY_",clueHighlighted:"crossword_clueHighlighted__emfai",clueFocused:"crossword_clueFocused__28K6y",focused:"crossword_focused__zxZ34",checked:"crossword_checked__lgxAX",correct:"crossword_correct__SFRad",wrong:"crossword_wrong__e7hIv",revealed:"crossword_revealed__LlntO",clueHints:"crossword_clueHints__cfvEs",clueHint:"crossword_clueHint__NT2ky",clue:"crossword_clue__c5_VY",cluePart:"crossword_cluePart__jQGIj",clues:"crossword_clues__foUfg",title:"crossword_title__WJIjz",index:"crossword_index__oCPcd"}},8449:function(e){e.exports={host:"keyboard_host__ltvTQ",clue:"keyboard_clue__V8NZs",clueDescription:"keyboard_clueDescription__t5WCG",clueButton:"keyboard_clueButton___IAaL",keyboard:"keyboard_keyboard__IawMX",row:"keyboard_row__tFh2R",key:"keyboard_key__2FuI0",dark:"keyboard_dark__D1ddm"}},6195:function(e){e.exports={host:"currency_host__gOCER"}},8357:function(e,n,r){"use strict";r.d(n,{w_:function(){return u}});var t=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=t.createContext&&t.createContext(o),i=function(){return i=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};function l(e){return e&&e.map((function(e,n){return t.createElement(e.tag,i({key:n},e.attr),l(e.child))}))}function u(e){return function(n){return t.createElement(a,i({attr:i({},e.attr)},n),l(e.child))}}function a(e){var n=function(n){var r,o=e.attr,s=e.size,l=e.title,u=c(e,["attr","size","title"]),a=s||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,u,{className:r,style:i(i({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&t.createElement("title",null,l),e.children)};return void 0!==s?t.createElement(s.Consumer,null,(function(e){return n(e)})):n(o)}},1351:function(e,n,r){"use strict";function t(e){throw e}r.d(n,{Z:function(){return t}})}}]);