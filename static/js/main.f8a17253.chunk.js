(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var r=e(7),o=e.n(r),c=e(4),a=e(8),u=e(2),i=e.n(u),s=e(1),d=e.n(s),f=(e(15),e(0)),l=d.a.memo((function(t){var n=t.goods;return Object(f.jsx)("ul",{children:n.map((function(t){return Object(f.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})})),b=e(9),j=function(){var t=Object(c.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){return j().then((function(t){return Object(b.a)(t).sort((function(t,n){return t.name.localeCompare(n.name)})).filter((function(t,n){return n<5}))}))},h=function(){return j().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},m=function(){var t=Object(s.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],o=function(){var t=Object(c.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Dynamic list of Goods"}),Object(f.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return o(j)},children:"Load all goods"}),Object(f.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return o(p)},children:"Load 5 first goods"}),Object(f.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return o(h)},children:"Load red goods"}),Object(f.jsx)(l,{goods:e})]})};o.a.render(Object(f.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f8a17253.chunk.js.map