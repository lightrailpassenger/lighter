(this.webpackJsonplighter=this.webpackJsonplighter||[]).push([[4],{183:function(t,e,n){t.exports={row:"StationListItem_row__IkSWH",name:"StationListItem_name__BmMHv",space:"StationListItem_space__1WC6A",button:"StationListItem_button__V2kGs"}},184:function(t,e,n){t.exports={page:"StationListPage_page__2VcSW",routeButtonList:"StationListPage_routeButtonList__1hPdh",routeButtonListRouteButton:"StationListPage_routeButtonListRouteButton__WzmCg",placeholder:"StationListPage_placeholder__BLUvt",actionButton:"StationListPage_actionButton__2WFCu",routeButton:"StationListPage_routeButton__1IH7p",routeButton__enabled:"StationListPage_routeButton__enabled__225u_"}},187:function(t,e,n){"use strict";n.r(e);var r=n(13),o=n(9);function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=n(39);function u(t){var e=function(t,e){if("object"!==Object(c.a)(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==Object(c.a)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===Object(c.a)(e)?e:String(e)}var i=n(4),s=n(0),l=n(1),b=n(183),f=n.n(b),m=n(2);var j=function(t){var e=t.id,n=t.nameEn,r=t.nameCh,o=Object(l.f)(),a=Object(s.useCallback)((function(t){t.preventDefault(),o("/result/".concat(e))}),[o,e]);return Object(m.jsxs)("div",{className:f.a.row,children:[Object(m.jsx)("span",{className:f.a.name,children:"".concat(n," ").concat(r)}),Object(m.jsx)("span",{className:f.a.space}),Object(m.jsx)("a",{className:f.a.button,href:"/#/result/".concat(e),onClick:a,children:"Go"})]})},p=n(12),O=n(184),_=n.n(O),d=["505","507","610","614","615","614P","615P","705","706","751","751P","761P"];e.default=function(){var t=Object(s.useState)((function(){return Object.fromEntries(d.map((function(t){return[t,!0]})))})),e=Object(i.a)(t,2),n=e[0],c=e[1],l=Object.entries(n).sort((function(t,e){var n=Object(i.a)(t,1)[0],r=Object(i.a)(e,1)[0];return n.localeCompare(r)})).map((function(t){var e=Object(i.a)(t,2),n=e[0],s=e[1];return Object(m.jsx)("button",{className:"".concat(_.a.routeButton).concat(s?" ".concat(_.a.routeButton__enabled):""),onClick:function(){c((function(t){var e=t[n],c=a(t,[n].map(u));return Object(o.a)(Object(r.a)({},n,!e),c)}))},children:n})})),b=Object.entries(n).filter((function(t){var e=Object(i.a)(t,2);e[0];return e[1]})).map((function(t){return Object(i.a)(t,1)[0]})),f=p.filter((function(t){return t.routes.some((function(t){return b.includes(t)}))})).map((function(t){var e=t.id,n=t.nameEn,r=t.nameCh;return Object(m.jsx)(j,{id:e,nameEn:n,nameCh:r},n)}));return Object(m.jsxs)("div",{className:_.a.page,children:[Object(m.jsxs)("div",{className:_.a.routeButtonList,children:[Object(m.jsx)("div",{className:_.a.routeButtonListRouteButton,children:l}),Object(m.jsx)("div",{className:_.a.actionButton,children:Object(m.jsx)("button",{className:_.a.routeButton,onClick:Object(s.useCallback)((function(){c((function(t){return Object.fromEntries(Object.entries(t).map((function(t){var e=Object(i.a)(t,2),n=e[0];e[1];return[n,!1]})))}))}),[]),children:"Clear"})})]}),f.length?f:Object(m.jsx)("div",{className:_.a.placeholder,children:"Choose a route"})]})}},39:function(t,e,n){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=4.a18814c9.chunk.js.map