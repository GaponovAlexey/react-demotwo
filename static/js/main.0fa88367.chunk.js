(this.webpackJsonpdemotwo=this.webpackJsonpdemotwo||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),s=c.n(i),r=(c(13),c(0)),l=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("footer",{className:"page-footer grey lighten-1 ",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).toLocaleDateString()," Copyright",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/kekelberi/react-demotwo",rel:"noreferrer",target:"_blank",children:"rep"})]})})})})},o=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"grey lighten-1",children:Object(r.jsx)("div",{className:"nav-wrapper grey lighten-1 ",children:Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"sass.html",children:"Logo"})})})})})})},j=c(8),d=c(2),u=c(3),b=function(e){var t=e.name,c=e.closeAlert;return Object(n.useEffect)((function(){var e=setTimeout(c,3e3);return function(){clearTimeout(e)}}),[t]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[t," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})},h=function(e){var t=e.id,c=e.minus,n=e.plus,a=e.name,i=e.price,s=e.quantity,l=e.removeFromBasket;return Object(r.jsxs)("li",{className:"collection-item ",children:[a," ",Object(r.jsx)("i",{onClick:function(){return c(t)},style:{fontSize:12},className:"large material-icons basket-quantity",children:"remove"}),s,Object(r.jsx)("i",{onClick:function(){return n(t)},style:{fontSize:12},className:"large material-icons basket-quantity",children:"add"}),"= ",i*s," \u0440\u0443\u0431",Object(r.jsx)("span",{href:"#!",className:"secondary-content",children:Object(r.jsx)("i",{className:"material-icons basket-delet",onClick:function(){return l(t)},children:"close"})})]})},m=function(e){var t=e.minus,c=e.plus,n=e.order,a=e.handleBasketShow,i=e.removeFromBasket,s=n.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(r.jsxs)("div",{className:"collection basket-list",children:[Object(r.jsx)("div",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),n.length?n.map((function(e){return Object(r.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{minus:t,plus:c,removeFromBasket:i}),e.id)})):Object(r.jsx)("div",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(r.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",s," \u0440\u0443\u0431"]}),Object(r.jsx)("div",{className:"collection-item active",children:Object(r.jsx)("button",{className:" btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(r.jsx)("i",{className:"material-icons basket-close",onClick:function(){return a()},children:"close"})]})},O=function(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow;return Object(r.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:function(){return n()},children:[Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(r.jsx)("span",{className:"cart-quantity",children:c}):""]})},f=function(e){var t=e.offerId,c=e.displayName,n=e.displayType,a=e.price,i=e.displayAssets,s=e.addToBasket;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)("div",{className:"card-image",children:[Object(r.jsx)("img",{src:i.map((function(e){return e.background})),alt:c}),Object(r.jsx)("span",{className:"card-title",children:c})]}),Object(r.jsx)("div",{className:"card-content",children:Object(r.jsx)("p",{children:n})}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return s({id:t,name:c,price:a.regularPrice})},children:"\u043a\u0443\u043f\u0438\u0442\u044c"}),Object(r.jsx)("span",{className:"right",children:a.regularPrice})]})]})})},x=function(e){var t=e.goods,c=e.addToBasket;return t.length?Object(r.jsx)("div",{className:"goods",children:t.map((function(e){return Object(r.jsx)(f,Object(d.a)(Object(d.a)({},e),{},{addToBasket:c}),e.offerId)}))}):Object(r.jsx)("h3",{children:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"})},v=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"determinate"})})})},p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),s=Object(u.a)(i,2),l=s[0],o=s[1],h=Object(n.useState)([]),f=Object(u.a)(h,2),p=f[0],g=f[1],N=Object(n.useState)(!1),k=Object(u.a)(N,2),y=k[0],q=k[1],w=Object(n.useState)(""),B=Object(u.a)(w,2),S=B[0],C=B[1],T=function(){q(!y)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=en",{headers:{Authorization:"edac735c-869c9940-09c590dd-bc92783e"}}).then((function(e){return e.json()})).then((function(e){a(e.shop),o(!1)}))}),[]),Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(O,{quantity:p.length,handleBasketShow:T}),l?Object(r.jsx)(v,{}):Object(r.jsx)(x,{goods:c,addToBasket:function(e){var t=p.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});g([].concat(Object(j.a)(p),[c]))}else{var n=p.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));g(n)}C(e.name)}}),y&&Object(r.jsx)(m,{minus:function(e){var t=p.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c>=0?c:0})}return t}));g(t)},plus:function(e){var t=p.map((function(t){if(t.id===e){var c=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c})}return t}));g(t)},removeFromBasket:function(e){var t=p.filter((function(t){return t.id!==e}));g(t)},handleBasketShow:T,order:p}),S&&Object(r.jsx)(b,{name:S,closeAlert:function(){C("")}})]})};var g=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(p,{}),Object(r.jsx)(l,{})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0fa88367.chunk.js.map