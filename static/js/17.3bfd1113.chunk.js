(this["webpackJsonpcomocomprarsucasa.com"]=this["webpackJsonpcomocomprarsucasa.com"]||[]).push([[17],{132:function(e,c,t){"use strict";var s=t(1),a=(t(0),t(126)),l=t(125),n=t(127),i=t(756),r=t(124),j=t(128);t(133);c.a=function(e){var c=e.navType,t=void 0===c?"light":c,o=Object(j.a)(),b=o.t,d=o.i18n;return Object(s.jsx)(a.a,{className:"dark"===t?"top-nav-bar top-nav-bar-dark":"top-nav-bar top-nav-bar-light",collapseOnSelect:!0,expand:"lg",bg:"transparent",variant:"dark"===t?"dark":"light",children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(a.a.Brand,{href:"/",children:Object(s.jsx)("img",{src:"dark"===t?"/images/logo.webp":"/images/logo-dark.webp",height:"55",className:"d-inline-block align-top",alt:"React Bootstrap logo"})}),Object(s.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(s.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(s.jsx)(n.a,{className:"me-auto"}),Object(s.jsxs)(n.a,{children:[Object(s.jsxs)(i.a,{title:b("navBar.Loan_Program"),id:"nav-dropdown-loan",children:[Object(s.jsx)(i.a.Item,{href:"/fha-loan-guide",children:b("navBar.FHA_Loans")}),Object(s.jsx)(i.a.Item,{href:"/va-loans",children:b("navBar.VA_Loans")}),Object(s.jsx)(i.a.Item,{href:"/fannie-mae",children:b("navBar.Fannie_Mae")})]}),Object(s.jsx)(n.a.Link,{href:"/tools",children:b("navBar.Tools_&_Resources")}),Object(s.jsxs)(i.a,{title:b("navBar.More"),id:"nav-dropdown-loan",children:[Object(s.jsx)(i.a.Item,{href:"/articles",children:b("navBar.Articles")}),Object(s.jsx)(i.a.Item,{href:"/videos",children:b("navBar.Videos")}),Object(s.jsx)(i.a.Item,{href:"/contact",children:b("navBar.contact")})]}),Object(s.jsx)(r.a,{className:"nav-btn-a",href:"/start",variant:"warning",children:b("navBar.Check_My_Eligibility")}),Object(s.jsx)(r.a,{className:"language-btn",onClick:function(){"en"===d.language?d.changeLanguage("es"):d.changeLanguage("en")},variant:"default",children:Object(s.jsx)("img",{src:"en"===d.language?"/images/country-flags/gb.svg":"/images/country-flags/es.svg",alt:"flag"})})]})]})]})})}},133:function(e,c,t){},156:function(e,c,t){"use strict";var s=t(1),a=t(124),l=t(128);t(157);c.a=function(){var e=Object(l.a)().t;return Object(s.jsx)("div",{className:"check-req-div",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row d-flex justify-content-center hero-text pt-5 pb-5",children:Object(s.jsxs)("div",{className:"col-sm-8 center mt-5 mb-5",children:[Object(s.jsx)("hr",{className:"global-hr-tag"}),Object(s.jsx)("h2",{className:"head-text-style mt-4",children:e("quoteReq.head")}),Object(s.jsx)("p",{className:"gray-text-style",children:e("quoteReq.sub")}),Object(s.jsx)(a.a,{href:"/start",variant:"warning",children:e("quoteReq.btn")})]})})})})}},157:function(e,c,t){},712:function(e,c,t){},754:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(11),l=t(0),n=t(128),i=t(370),r=t.n(i),j=t(124),o=t(132),b=t(156);t(712),t(371);c.default=function(){var e=Object(n.a)().t,c=Object(l.useState)(2e5),t=Object(a.a)(c,2),i=t[0],d=t[1],h=Object(l.useState)(3.5),x=Object(a.a)(h,2),O=x[0],u=x[1],m=Object(l.useState)(30),v=Object(a.a)(m,2),p=v[0],N=v[1],f=Object(l.useState)(5),g=Object(a.a)(f,2),k=g[0],C=g[1],_=Object(l.useState)(1.2),w=Object(a.a)(_,2),y=w[0],S=w[1],B=Object(l.useState)(.35),$=Object(a.a)(B,2),q=$[0],A=$[1],I=Object(l.useState)("good"),T=Object(a.a)(I,2),L=T[0],M=T[1],R=Object(l.useState)(7e3),F=Object(a.a)(R,2),E=F[0],J=F[1],V=Object(l.useState)(0),H=Object(a.a)(V,2),P=H[0],z=H[1],D=Object(l.useState)(0),G=Object(a.a)(D,2),K=G[0],Q=G[1],U=Object(l.useState)(0),W=Object(a.a)(U,2),X=W[0],Y=W[1],Z=Object(l.useState)(5.25),ee=Object(a.a)(Z,2),ce=ee[0],te=ee[1],se=Object(l.useState)(),ae=Object(a.a)(se,2),le=ae[0],ne=ae[1],ie=Object(l.useState)(0),re=Object(a.a)(ie,2),je=re[0],oe=re[1],be=function(e){return parseFloat(e).toFixed(2)},de=function(e){if(null!==e){N(parseInt(e.currentTarget.getAttribute("value")));var c=0;if(30===parseInt(e.currentTarget.getAttribute("value")))switch(L){case"poor":c=5.5;break;case"fair":c=5.25;break;case"good":c=5;break;case"excellent":c=4.875;break;default:c=5}else switch(L){case"poor":c=5.25;break;case"fair":c=5;break;case"good":c=4.875;break;case"excellent":c=4.5;break;default:c=4.875}C(c)}},he=function(e){if(null!==e){M(e.currentTarget.getAttribute("value"));var c=0;if(30===p)switch(e.currentTarget.getAttribute("value")){case"poor":c=5.5;break;case"fair":c=5.25;break;case"good":c=5;break;case"excellent":c=4.875;break;default:c=5}else switch(e.currentTarget.getAttribute("value")){case"poor":c=5.25;break;case"fair":c=5;break;case"good":c=4.875;break;case"excellent":c=4.5;break;default:c=4.875}C(c)}};return Object(l.useEffect)((function(){var e=Math.floor(1.75*(i-E)/100);Y(be(e));var c=i-E+e;Q(be(c));var t=k/100/12,s=12*p,a=i*y/100/12,l=c*q/100/12,n=c*(30===p?c<=625500?O<=5?.85:.8:O<=5?1.05:1:c<=625500?O<=10?.7:.8:O>=22?.45:O>=10?.7:.9)/100/12;te(be(a)),ne(be(l)),oe(be(n));var r=K*Math.pow(1+t,s)*t/(Math.pow(1+t,s)-1)+a+l+n;z(be(r))}),[i,O,p,k,y,q,L,E,P,K,X,ce,le,je]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o.a,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center mt-5",children:Object(s.jsx)("div",{className:"col-sm-7 center tool-btn-div",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{className:"tool-btn-active",children:Object(s.jsx)("a",{href:"/tools/fha-calculator",children:Object(s.jsx)("strong",{children:e("tools.home.btn_1")})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/tools/fha-affordability-calculator",children:Object(s.jsx)("strong",{children:e("tools.home.btn_2")})})})]})})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center mb-5",children:Object(s.jsxs)("div",{className:"col-sm-7 center",children:[Object(s.jsx)("img",{className:"h-img",src:"/images/tools/t-1.png",alt:"tools"}),Object(s.jsx)("h3",{className:"header-text-2",children:e("tools.fhaCalculator.head")}),Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_1")})]})}),Object(s.jsxs)("div",{className:"row d-flex justify-content-center mt-5 mb-5",children:[Object(s.jsxs)("div",{className:"col-sm-7",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"col-sm-10 mt-3",children:[Object(s.jsxs)("div",{className:"row input-box-div",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_2")})}),Object(s.jsxs)("div",{className:"col input-col",children:[Object(s.jsx)("span",{children:"$"}),Object(s.jsx)("input",{className:"input-box",disabled:!0,value:i})]})]}),Object(s.jsx)(r.a,{className:"slider-input",min:0,max:721050,step:1e3,value:i,onChange:function(e){null!==e&&(d(be(e)),J(be(e*O/100)))},tooltip:!1}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:"$0"})})}),Object(s.jsx)("hr",{className:"hr-input"})]})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"col-sm-10 mt-3",children:[Object(s.jsxs)("div",{className:"row input-box-div",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_3")})}),Object(s.jsxs)("div",{className:"col input-col",children:[Object(s.jsxs)("span",{children:["($",E,")"]}),Object(s.jsx)("input",{className:"input-box",disabled:!0,value:O}),Object(s.jsx)("span",{children:"%"})]})]}),Object(s.jsx)(r.a,{className:"slider-input",min:3.5,max:25,step:.1,value:O,onChange:function(e){null!==e&&(u(be(e)),J(be(i*e/100)))},tooltip:!1}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:"3.5%"})}),Object(s.jsx)("div",{className:"col input-box-bottom-right",children:Object(s.jsx)("p",{children:"25%"})})]}),Object(s.jsx)("hr",{className:"hr-input"})]})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"col-sm-10 mt-3",children:[Object(s.jsx)("div",{className:"row input-box-div",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_4")})})}),Object(s.jsxs)("div",{className:"row input-box-div",children:[Object(s.jsx)("div",{className:"col mb-3 mb-3",children:Object(s.jsx)("div",{className:15===p?"checkbox-button checkbox-button-active":"checkbox-button",value:15,onClick:de,children:e("tools.fhaCalculator.txt_32")})}),Object(s.jsx)("div",{className:"col mb-3",children:Object(s.jsx)("div",{className:30===p?"checkbox-button checkbox-button-active":"checkbox-button",value:30,onClick:de,children:e("tools.fhaCalculator.txt_33")})})]}),Object(s.jsx)("hr",{className:"hr-input"})]})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"col-sm-10 mt-3",children:[Object(s.jsxs)("div",{className:"row input-box-div",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_5")})}),Object(s.jsxs)("div",{className:"col input-col",children:[Object(s.jsx)("input",{className:"input-box",disabled:!0,value:k}),Object(s.jsx)("span",{children:"%"})]})]}),Object(s.jsx)(r.a,{className:"slider-input",min:3,max:10,step:.005,value:k,onChange:function(e){null!==e&&C(be(e))},tooltip:!1}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:"3%"})}),Object(s.jsx)("div",{className:"col input-box-bottom-right",children:Object(s.jsx)("p",{children:"10%"})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col center",children:Object(s.jsx)("p",{className:"sub-input-text",children:e("tools.fhaCalculator.txt_6")})})}),Object(s.jsx)("hr",{className:"hr-input"})]})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"col-sm-10 mt-3",children:[Object(s.jsxs)("div",{className:"row input-box-div",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_7")})}),Object(s.jsxs)("div",{className:"col input-col",children:[Object(s.jsx)("input",{className:"input-box",disabled:!0,value:y}),Object(s.jsx)("span",{children:"%"})]})]}),Object(s.jsx)(r.a,{className:"slider-input",min:.6,max:2.5,step:.1,value:y,onChange:function(e){null!==e&&S(be(e))},tooltip:!1}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:"0.6%"})}),Object(s.jsx)("div",{className:"col input-box-bottom-right",children:Object(s.jsx)("p",{children:"2.5%"})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col center",children:Object(s.jsx)("p",{className:"sub-input-text",children:e("tools.fhaCalculator.txt_8")})})}),Object(s.jsx)("hr",{className:"hr-input"})]})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"col-sm-10 mt-3",children:[Object(s.jsxs)("div",{className:"row input-box-div",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_9")})}),Object(s.jsxs)("div",{className:"col input-col",children:[Object(s.jsx)("input",{className:"input-box",disabled:!0,value:q}),Object(s.jsx)("span",{children:"%"})]})]}),Object(s.jsx)(r.a,{className:"slider-input",min:.2,max:.5,step:.05,value:q,onChange:function(e){null!==e&&A(be(e))},tooltip:!1}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:"0.2%"})}),Object(s.jsx)("div",{className:"col input-box-bottom-right",children:Object(s.jsx)("p",{children:"0.5%"})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col center",children:Object(s.jsx)("p",{className:"sub-input-text",children:e("tools.fhaCalculator.txt_10")})})}),Object(s.jsx)("hr",{className:"hr-input"})]})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center",children:Object(s.jsxs)("div",{className:"col-sm-10 mt-3",children:[Object(s.jsx)("div",{className:"row input-box-div",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_11")})})}),Object(s.jsxs)("div",{className:"row input-box-div",children:[Object(s.jsx)("div",{className:"col mb-3 mb-3",children:Object(s.jsxs)("div",{className:"poor"===L?"checkbox-button checkbox-button-active":"checkbox-button",value:"poor",onClick:he,children:[Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_12")}),Object(s.jsx)("p",{children:"(620-639)"})]})}),Object(s.jsx)("div",{className:"col mb-3 mb-3",children:Object(s.jsxs)("div",{className:"fair"===L?"checkbox-button checkbox-button-active":"checkbox-button",value:"fair",onClick:he,children:[Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_13")}),Object(s.jsx)("p",{children:"(640-659)"})]})}),Object(s.jsx)("div",{className:"col mb-3 mb-3",children:Object(s.jsxs)("div",{className:"good"===L?"checkbox-button checkbox-button-active":"checkbox-button",value:"good",onClick:he,children:[Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_14")}),Object(s.jsx)("p",{children:"(660-719)"})]})}),Object(s.jsx)("div",{className:"col mb-3 mb-3",children:Object(s.jsxs)("div",{className:"excellent"===L?"checkbox-button checkbox-button-active":"checkbox-button",value:"excellent",onClick:he,children:[Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_15")}),Object(s.jsx)("p",{children:"(720+)"})]})})]}),Object(s.jsx)("hr",{className:"hr-input"})]})})]}),Object(s.jsxs)("div",{className:"col-sm-4",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col center",children:[Object(s.jsx)("hr",{className:"hr-input"}),Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_21")}),Object(s.jsx)("h1",{children:Object(s.jsxs)("b",{children:["$",P]})}),Object(s.jsx)(j.a,{href:"/start",variant:"warning",children:e("quoteReq.btn")}),Object(s.jsx)("hr",{className:"hr-input"})]})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col center result-div",children:[Object(s.jsx)("p",{children:Object(s.jsx)("b",{children:e("tools.fhaCalculator.txt_22")})}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:e("tools.fhaCalculator.txt_23")}),Object(s.jsxs)("span",{class:"result_purchase_price",children:["$",i]})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:e("tools.fhaCalculator.txt_24")}),Object(s.jsxs)("span",{class:"result_fundingfee",children:["$",X]})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:e("tools.fhaCalculator.txt_25")}),Object(s.jsxs)("span",{class:"result_amount_financed",children:["$",K]})]})]})]})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsxs)("p",{children:[e("tools.fhaCalculator.txt_26"),Object(s.jsxs)("b",{children:["$",je]}),e("tools.fhaCalculator.txt_27")]}),Object(s.jsxs)("p",{children:[e("tools.fhaCalculator.txt_28"),y,"%",e("tools.fhaCalculator.txt_29"),Object(s.jsxs)("b",{children:["$",ce]}),e("tools.fhaCalculator.txt_30"),Object(s.jsxs)("b",{children:["$",le]}),e("tools.fhaCalculator.txt_31"),q,"%."]})]})})]})]}),Object(s.jsx)("div",{className:"row d-flex justify-content-center mt-5 mb-5",children:Object(s.jsxs)("div",{className:"col-sm-10",children:[Object(s.jsx)("h3",{className:"header-text-2",children:e("tools.fhaCalculator.txt_16")}),Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_17")}),Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_18")}),Object(s.jsx)("h3",{className:"header-text-2",children:e("tools.fhaCalculator.txt_19")}),Object(s.jsx)("p",{children:e("tools.fhaCalculator.txt_20")})]})})]}),Object(s.jsx)(b.a,{})]})}}}]);
//# sourceMappingURL=17.3bfd1113.chunk.js.map