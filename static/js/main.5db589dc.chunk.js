(this["webpackJsonpcolor-graph"]=this["webpackJsonpcolor-graph"]||[]).push([[0],{23:function(n,e,t){n.exports=t(34)},28:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),i=t.n(o),l=(t(28),t(9)),c=t(3),u=t(4),s="(min-width: 768px)";function d(){var n=Object(c.a)(["\n  vertical-align: middle;\n  width: 100%;\n"]);return d=function(){return n},n}function f(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n"]);return f=function(){return n},n}var m=u.a.div(f()),p=u.a.div(d()),h=function(n){var e=n.children;return a.a.createElement(m,null,a.a.createElement(p,null,e))};function g(){var n=Object(c.a)(["\n  transition: stroke-dashoffset 5s;\n  transition-timing-function: ease-in-out;\n  cursor: pointer;\n  stroke-dasharray: ",";\n  stroke-dashoffset: ",";\n\n  &:hover {\n    stroke-dashoffset: 0;\n    transition-duration: 0.5s;\n  }\n\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n"]);return g=function(){return n},n}var b=u.a.line(g(),(function(n){return n.height}),(function(n){return.6*n.height})),v=function(n){var e=n.data,t=n.onLineClick,o=n.getColor,i=function(){var n="object"===typeof window;function e(){return{width:n?window.innerWidth:void 0,height:n?window.innerHeight:void 0}}var t=Object(r.useState)(e),a=Object(l.a)(t,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){if(!n)return!1;function t(){i(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),o}(),c=i.width,u=i.height,s=2*e.length,d=s*(u/c);return a.a.createElement("svg",{viewBox:"0 0 ".concat(s," ").concat(d),width:c,height:u,xmlns:"http://www.w3.org/2000/svg"},e.map((function(n,e){return a.a.createElement(b,{height:d,key:String(n)+String(e),x1:2*e+1,x2:2*e+1,y1:0,y2:d,stroke:o(n),strokeWidth:"2",onClick:function(){return!!t&&t(n)}})})))},w={title:"Linear data",defaultColors:"interpolateTurbo",description:"Data contains values 0, 1, 2...39.",data:Array(40).fill(null).map((function(n,e){return e}))},E={title:"Random data",defaultColors:"interpolateTurbo",description:"Data is randomly generated.",data:Array(40).fill(null).map((function(){return Math.floor(100*Math.random())}))},O={title:"Carbon emission data",defaultColors:"interpolateTurbo",description:"Global Carbon Emissions from Fossil-Fuel Burning, Cement Manufacture, and Gas Flaring: 1945-2013. Values in million metric tons.",source:"https://cdiac.ess-dive.lbl.gov/trends/emis/overview.html",data:[1160,1238,1392,1469,1419,1630,1767,1795,1841,1865,2042,2177,2270,2330,2454,2569,2580,2686,2833,2995,3130,3288,3393,3566,3780,4053,4208,4376,4614,4623,4596,4864,5016,5074,5357,5301,5138,5094,5075,5258,5417,5583,5725,5936,6066,6096,6171,6110,6104,6208,6344,6491,6589,6571,6559,6727,6886,6946,7367,7735,8025,8307,8488,8738,8641,9137,9508,9671,9776]},j={title:"Average global temperature",defaultColors:"interpolateTurbo",description:"Average global land temperatures, 1880-2019. Values in centigrade difference compared with base period 1901-2000.",source:"https://www.ncdc.noaa.gov/cag/",data:[-.31,-.37,-.47,-.37,-.72,-.5,-.21,-.35,-.19,-.19,-.16,-.35,-.34,-.17,-.39,-.31,-.14,.07,-.26,-.24,-.14,.07,-.21,-.42,-.48,-.18,-.15,-.44,-.18,-.37,-.03,-.4,-.53,-.2,-.23,-.01,-.36,-.26,-.42,-.12,-.17,-.04,-.15,-.4,-.13,-.33,-.3,-.07,-.15,-.48,.01,.17,-.01,-.15,-.05,-.06,.22,-.03,.04,.05,.15,.24,-.1,-.01,.14,-.12,-.03,-.08,.03,-.17,-.3,.03,.13,.05,-.12,-.2,-.22,-.17,.07,.1,-.09,.01,-.02,.18,-.16,-.16,.17,-.11,-.15,.12,.1,-.07,-.05,.23,.06,.09,-.22,.22,-.03,.1,.22,.21,.2,.35,.06,-.11,.06,.55,.53,.29,.28,.47,-.2,.28,.33,.53,.44,.49,1.14,.68,.54,.83,.99,.75,.41,.95,.91,.83,.87,.74,1.15,1.04,1.04,.82,.79,1.05,1.17,1.22,1.19,1.18]};function k(){var n=Object(c.a)(["\n  position: fixed;\n  padding: 1.5rem;\n  box-sizing: border-box;\n  width: 100vw;\n  height: 60vh;\n  bottom: 0;\n"]);return k=function(){return n},n}function x(){var n=Object(c.a)(["\n  display: none;\n  position: fixed;\n  bottom: 20px;\n\n  @media "," {\n    display: block;\n  }\n"]);return x=function(){return n},n}function y(){var n=Object(c.a)(["\n  font-size: 0.8rem;\n"]);return y=function(){return n},n}function C(){var n=Object(c.a)([""]);return C=function(){return n},n}function B(){var n=Object(c.a)(["\n  display: block;\n  font-size: 1rem;\n  opacity: 0.7;\n"]);return B=function(){return n},n}function G(){var n=Object(c.a)(["\n  font-size: 1.4rem;\n  margin: 1rem 0;\n  color: ",";\n\n  @media "," {\n    font-size: 2rem;\n  }\n"]);return G=function(){return n},n}var z=u.a.h1(G(),(function(n){return n.color||"#000000"}),s),M=u.a.h2(B()),R=u.a.p(C()),P=u.a.a(y()),S=u.a.small(x(),s),Y=u.a.section(k()),L=t(14),T=t(36),W=t(37),A=t(38),D=t(39),F=t(40),V=t(41),I=t(42),J=t(43),N=t(44),H=t(45),$=t(46),q=t(47),K=t(48),Q=t(49),U=t(50),X=t(51),Z=t(52),_=t(53),nn=t(54),en=t(55),tn=t(56),rn=t(57),an=t(58),on=t(59),ln=t(60),cn=t(61),un=t(62),sn=t(63),dn=t(64),fn=t(65),mn=t(66),pn=t(67),hn=t(68),gn={interpolateBlues:T.a,interpolateBrBG:W.a,interpolateBuGn:A.a,interpolateBuPu:D.a,interpolateCividis:F.a,interpolateCool:V.a,interpolateCubehelixDefault:I.a,interpolateGnBu:J.a,interpolateGreens:N.a,interpolateGreys:H.a,interpolateInferno:$.b,interpolateMagma:$.c,interpolateOrRd:q.a,interpolateOranges:K.a,interpolatePRGn:Q.a,interpolatePiYG:U.a,interpolatePlasma:$.d,interpolatePuBu:X.a,interpolatePuBuGn:Z.a,interpolatePuOr:_.a,interpolatePuRd:nn.a,interpolatePurples:en.a,interpolateRainbow:V.b,interpolateRdBu:tn.a,interpolateRdGy:rn.a,interpolateRdPu:an.a,interpolateRdYlBu:on.a,interpolateRdYlGn:ln.a,interpolateReds:cn.a,interpolateSinebow:un.a,interpolateSpectral:sn.a,interpolateTurbo:dn.a,interpolateViridis:$.a,interpolateWarm:V.c,interpolateYlGn:fn.a,interpolateYlGnBu:mn.a,interpolateYlOrBr:pn.a,interpolateYlOrRd:hn.a},bn=function(n){var e=Object.keys(gn);return n&&e.includes(n)?{name:n,func:gn[n]}:null},vn=function(){var n=Object.keys(gn),e=n[Math.floor(Math.random()*n.length)];return{name:e,func:gn[e]}},wn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.interpolatorName,t=bn(e)||vn();return{name:t.name,func:t.func,themeColor:t.func(.8)}};function En(){var n=Object(c.a)(["\n  margin-left: 0.5em;\n"]);return En=function(){return n},n}function On(){var n=Object(c.a)(["\n  font-size: 0.8rem;\n\n  @media "," {\n    font-size: 1.1rem;\n  }\n"]);return On=function(){return n},n}function jn(){var n=Object(c.a)(["\n  text-decoration: none;\n  color: black;\n  font-size: 1rem;\n  border: none;\n  background-color: transparent;\n  padding: 0.8rem;\n  margin: 0;\n  text-align: left;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n"]);return jn=function(){return n},n}function kn(){var n=Object(c.a)(["\n  font-size: 1rem;\n  border: none;\n  background-color: transparent;\n  padding: 0.8rem;\n  margin: 0;\n  text-align: left;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n"]);return kn=function(){return n},n}var xn=u.a.button(kn()),yn=u.a.a(jn()),Cn=u.a.span(On(),s),Bn=u.a.span(En());function Gn(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100vw;\n  box-sizing: border-box;\n  color: white;\n  text-align: right;\n\n  @media "," {\n    min-width: 200px;\n    width: auto;\n  }\n"]);return Gn=function(){return n},n}var zn=u.a.aside(Gn(),s),Mn=function(n){var e=n.children;return a.a.createElement(zn,null,e)};function Rn(){var n=Object(c.a)(["\n  stroke: ",";\n  stroke-linecap: round;\n  fill: none;\n\n  ",":active & {\n    fill: ",";\n  }\n"]);return Rn=function(){return n},n}function Pn(){var n=Object(c.a)([""]);return Pn=function(){return n},n}var Sn=u.a.svg.attrs((function(){return{xmlns:"http://www.w3.org/2000/svg",width:"1.8em",height:"1.8em",viewBox:"0 0 12 12"}}))(Pn()),Yn=u.a.circle.attrs((function(){return{cx:"6",cy:"6",r:"5.5"}}))(Rn(),(function(n){return n.color}),Sn,(function(n){return n.color})),Ln=function(n){var e=n.color,t=void 0===e?"rgb(16, 88, 160)":e;return a.a.createElement(Sn,null,a.a.createElement(Yn,{color:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement((function(){var n=[j,O,w,E],e=Object(r.useState)(0),t=Object(l.a)(e,2),o=t[0],i=t[1],c=n[o%n.length],u=c.title,s=c.description,d=c.data,f=c.defaultColors,m=c.source,p=Object(r.useState)(null),g=Object(l.a)(p,2),b=g[0],k=g[1],x=Object(r.useState)((function(){return wn({interpolatorName:f})})),y=Object(l.a)(x,2),C=y[0],B=y[1],G=function(n){var e=n.data,t=Math.max.apply(Math,Object(L.a)(e)),r=Math.min.apply(Math,Object(L.a)(e));return function(n){return(Math.min(Math.max(n,r),t)-r)/(t-r)}}({data:d});return a.a.createElement(h,null,a.a.createElement(Y,null,a.a.createElement(M,null,a.a.createElement("a",{href:"https://www.npmjs.com/package/d3-scale-chromatic"},"d3-scale-chromatic")),a.a.createElement(z,null,u),a.a.createElement(R,null,s," ",!!m&&a.a.createElement(P,{href:m},"[source]")),a.a.createElement(S,null,"Click the buttons in the lower right corner to change data or color palette."),null!==b&&a.a.createElement(M,null,"Selected value: ",b),a.a.createElement(Mn,null,a.a.createElement(yn,{href:"https://github.com/tomfa/color-graph"},a.a.createElement(Cn,null,"Code"),a.a.createElement(Bn,null,a.a.createElement("img",{width:"27",height:"27",alt:"Github icon",src:"./github.png"}))),a.a.createElement(xn,{onClick:function(){i(o+1),k(null)}},a.a.createElement(Cn,null,c.title),a.a.createElement(Bn,null,a.a.createElement(Ln,{color:"black"}))),a.a.createElement(xn,{onClick:function(){return B(wn())}},a.a.createElement(Cn,null,"d3.",C.name),a.a.createElement(Bn,null,a.a.createElement(Ln,{color:C.themeColor}))))),a.a.createElement(v,{data:d,getColor:function(n){return C.func(G(n))},onLineClick:function(n){k(n)}}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5db589dc.chunk.js.map