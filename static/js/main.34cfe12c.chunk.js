(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(22),r=n.n(c),o=(n(28),n(13)),s=n(2),u=n.n(s),i=n(5),f=n(6),l=(n(30),n(31),n(23)),j=n.n(l),p=n(11),b=n.n(p);function d(e,t){var n="".concat("https://pixabay.com/api/","?key=").concat("23036221-d804a8a78d7b0866edf7d8fc3","&q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12");return b.a.get(n).then((function(e){return e})).then((function(e){return e.data.hits})).catch((function(e){console.log(e)}))}var h=n(1);function m(e){var t=e.addImages,n=e.loadMore,c=e.givenPage,r=e.annulePage,o=e.isLoading,s=Object(a.useState)(""),l=Object(f.a)(s,2),j=l[0],p=l[1],b=Object(a.useState)(1),m=Object(f.a)(b,2),O=m[0],x=m[1];Object(a.useEffect)(Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O==c){e.next=8;break}return e.next=3,x(c);case 3:return o(!0),e.next=6,d(j,O).then((function(e){t=e}));case 6:o(!1),n(t);case 8:case"end":return e.stop()}}),e)}))),[c]);var g=function(){var e=Object(i.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),1,e.next=4,r(1);case 4:return e.next=6,d(j,O).then((function(e){a=e}));case 6:t(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:g,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){p(e.target.value)}})]})})}function O(e){return e.hits.data.map((function(e,t){return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{id:e.id,src:e.webformatURL,alt:"image found",className:"ImageGalleryItem-image"})},t)}))}function x(e){return Object(h.jsx)("ul",{className:"ImageGallery",children:Object(h.jsx)(O,{hits:e})})}function g(e){var t=e.pageCount,n=e.givenPage,c=Object(a.useState)(1),r=Object(f.a)(c,2),o=r[0],s=r[1];Object(a.useEffect)(Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o===n){e.next=3;break}return e.next=3,s(n);case 3:case"end":return e.stop()}}),e)}))),[n]);var l=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(o+1);case 2:return e.next=4,t(o);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("button",{type:"button",className:"Button",onClick:l,children:"Load More"})}function v(e){var t=e.imgUrl,n=e.closeModalOverlay;return Object(h.jsx)("div",{className:"Overlay",onClick:function(){n(!1)},children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:t,alt:"Big image"})})})}function y(e){var t="".concat("https://pixabay.com/api/","?key=").concat("23036221-d804a8a78d7b0866edf7d8fc3","&id=").concat(e);return b.a.get(t).then((function(e){return e})).then((function(e){return e.data.hits[0].largeImageURL})).catch((function(e){console.log(e)}))}function w(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(1),s=Object(f.a)(r,2),l=s[0],p=s[1],b=Object(a.useState)(""),O=Object(f.a)(b,2),w=O[0],k=(O[1],Object(a.useState)(!1)),S=Object(f.a)(k,2),N=S[0],F=S[1],I=Object(a.useState)(!1),C=Object(f.a)(I,2),E=C[0],L=C[1],M=Object(a.useState)(""),P=Object(f.a)(M,2),B=P[0],G=P[1];Object(a.useEffect)(Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(!0);case 2:return e.next=4,d(w,l).then((function(e){t=e}));case 4:c(t),F(!1),document.addEventListener("keydown",R),document.querySelector(".ImageGallery").addEventListener("click",J);case 8:case"end":return e.stop()}}),e)}))),[]);var U=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c([].concat(Object(o.a)(n),Object(o.a)(t))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(!0);case 2:return e.next=4,y(t.target.id).then((function(e){G(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){!1!==E&&27===e.keyCode&&(L(!1),G(""))};return Object(h.jsxs)(h.Fragment,{children:[E?Object(h.jsx)(v,{imgUrl:B,closeModalOverlay:function(e){L(e),G("")}}):null,Object(h.jsx)(m,{addImages:function(e){c(e)},loadMore:U,givenPage:l,annulePage:q,isLoading:function(e){F(e)}}),N?Object(h.jsx)(j.a,{className:"loader",type:"ThreeDots",width:"500px",color:"#00BFFF",style:{position:"fixed",top:"50%",left:"35%"}}):null,Object(h.jsx)(x,{data:n}),Object(h.jsx)(g,{pageCount:D,givenPage:l})]})}r.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.34cfe12c.chunk.js.map