(this.webpackJsonpkenko=this.webpackJsonpkenko||[]).push([[0],{51:function(e,t,n){e.exports=n(88)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),i=n.n(c),l=n(4),o=n(49),u=n(42),s=n(6),m=n.n(s),d=n(3),p=n(15),f=n(16),b=n(17),h=n(19),v=n(18),g=n(5),E=n(2),y=(n(61),function(e){return e.cart}),O=Object(E.a)([y],(function(e){return e.cartItems})),j=Object(E.a)([O],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),k=Object(E.a)([y],(function(e){return e.hidden})),w=Object(E.a)([O],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),x="TOGGLE_CART_HIDDEN",N="ADD_ITEM",C="CLEAR_ITEM_FROM_CART",I="REMOVE_ITEM",S=function(){return{type:x}},U=function(e){return{type:N,payload:e}},A=(n(62),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:C,payload:e}}(t))},addItem:function(t){return e(U(t))},removeItem:function(t){return e(function(e){return{type:I,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.imageUrl,l=t.quantity,o=t.price,u=t.name;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{alt:u,src:i})),r.a.createElement("span",{className:"name"}," ",u," "),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},l),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"}," ","".concat(o,"\u20ac")," "),r.a.createElement("div",{onClick:function(){return n(t)},className:"remove-button"},"\u2715"))}))),R=n(43),P=n.n(R),q=(n(63),function(e){var t=e.price,n=100*t;return r.a.createElement(P.a,{currency:"EUR",label:"Pay here",name:"Kenko",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"Your total is ".concat(t,"\u20ac"),amont:n,panelLabel:"Pay ".concat(t,"\u20ac"),token:function(e){console.log(e),alert("Payment successful.")},stripeKey:"pk_test_51HSmv9IRVfj47VgK57Ad1KRSRvhqpL1Ns402igPIDdcApB6gfiiZcV92JUUv7tzpbhAxB6Fsc18jhM2jlmN4AcNg00wsFPYFPB"})}),T=(n(64),Object(E.b)({cartItems:O,total:w})),D=Object(l.b)(T)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},"Product"),r.a.createElement("div",{className:"header-block"},"Description"),r.a.createElement("div",{className:"header-block"},"Quantity"),r.a.createElement("div",{className:"header-block"},"Price"),r.a.createElement("div",{className:"header-block"},"Remove")),t.map((function(e){return r.a.createElement(A,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},"TOTAL: $",n,"\u20ac"),r.a.createElement("div",{className:"test-warning"},"Use this card info",r.a.createElement("br",null),"3782 822463 10005",r.a.createElement("br",null),"Any future date",r.a.createElement("br",null),"Any 4-digits number"),r.a.createElement(q,{price:n}))}));function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=r.a.createElement("title",null,"Group"),G=r.a.createElement("desc",null,"Created with Sketch."),z=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),H=function(e){var t=e.svgRef,n=e.title,a=M(e,["svgRef","title"]);return r.a.createElement("svg",L({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?_:n?r.a.createElement("title",null,n):null,G,z)},B=r.a.forwardRef((function(e,t){return r.a.createElement(H,L({svgRef:t},e))})),F=(n.p,n(27)),V=n.n(F);n(65),n(67);V.a.initializeApp({apiKey:"AIzaSyB6JxZaCGPXEUf7SRRCTAD5IGZnW8O0-hU",authDomain:"kenko-a4bfa.firebaseapp.com",databaseURL:"https://kenko-a4bfa.firebaseio.com",projectId:"kenko-a4bfa",storageBucket:"kenko-a4bfa.appspot.com",messagingSenderId:"630869513071",appId:"1:630869513071:web:188a200335eadf894b0e9a",measurementId:"G-9VZ8X4JC08"});var W=V.a.auth(),K=V.a.firestore(),J=new V.a.auth.GoogleAuthProvider;J.setCustomParameters({prompt:"select_account"});var Z=function(){return W.signInWithPopup(J)},Y=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=K.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(d.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),Q=(V.a,Object(E.a)([function(e){return e.user}],(function(e){return e.currentUser}))),X=(n(70),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x ",a,"\u20ac")))}),$=n(20),ee=n(7),te=n(8);function ne(){var e=Object(ee.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"]);return ne=function(){return e},e}function ae(){var e=Object(ee.a)(["\n  background: #4285f4;\n  color: white;\n  border: none;\n\n  &:hover {\n    background: #357ae8;\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(ee.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  position: absolute;\n  bottom: 50px;\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(ee.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return ce=function(){return e},e}var ie=Object(te.a)(ce()),le=Object(te.a)(re()),oe=Object(te.a)(ae()),ue=te.b.button(ne(),(function(e){return e.isGoogleSignIn?oe:e.inverted?le:ie})),se=function(e){var t=e.children,n=Object($.a)(e,["children"]);return r.a.createElement(ue,n,t)},me=(n(71),Object(E.b)({cartItems:O})),de=Object(g.g)(Object(l.b)(me)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(X,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(se,{onClick:function(){n.push("/checkout"),a(S())}}," ","GO TO CHECKOUT"))})));function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var be=r.a.createElement("g",null),he=r.a.createElement("g",null),ve=r.a.createElement("g",null),ge=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),je=r.a.createElement("g",null),ke=r.a.createElement("g",null),we=r.a.createElement("g",null),xe=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Se=r.a.createElement("g",null),Ue=function(e){var t=e.svgRef,n=e.title,a=fe(e,["svgRef","title"]);return r.a.createElement("svg",pe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),be,he,ve,ge,Ee,ye,Oe,je,ke,we,xe,Ne,Ce,Ie,Se)},Ae=r.a.forwardRef((function(e,t){return r.a.createElement(Ue,pe({svgRef:t},e))})),Re=(n.p,n(73),Object(E.b)({itemCount:j})),Pe=Object(l.b)(Re,(function(e){return{toggleCartHidden:function(){return e(S())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Ae,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),qe=n(23);function Te(){var e=Object(ee.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return Te=function(){return e},e}function De(){var e=Object(ee.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return De=function(){return e},e}function Le(){var e=Object(ee.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return Le=function(){return e},e}function Me(){var e=Object(ee.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return Me=function(){return e},e}var _e=te.b.div(Me()),Ge=Object(te.b)(qe.a)(Le()),ze=te.b.div(De()),He=Object(te.b)(qe.a)(Te()),Be=Object(E.b)({currentUser:Q,hidden:k}),Fe=Object(l.b)(Be)((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement(_e,null,r.a.createElement(Ge,{to:"/"},r.a.createElement(B,null)),r.a.createElement(ze,null,r.a.createElement(He,{to:"/shop"},"Shop"),r.a.createElement(He,{to:"/contact"},"Contact"),t?r.a.createElement(He,{as:"div",onClick:function(){return W.signOut()}},"Sign Out"):r.a.createElement(He,{to:"/signin"},"Sign In"),r.a.createElement(Pe,null)),n?null:r.a.createElement(de,null))})),Ve=Object(E.a)([function(e){return e.directory}],(function(e){return e.sections})),We=(n(74),Object(g.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")},className:"background-image"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"Shop now")))}))),Ke=(n(75),Object(E.b)({sections:Ve})),Je=Object(l.b)(Ke)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object($.a)(e,["id"]);return r.a.createElement(We,Object.assign({key:t},n))})))}));function Ze(){var e=Object(ee.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Ze=function(){return e},e}var Ye=te.b.div(Ze()),Qe=function(){return r.a.createElement(Ye,null,r.a.createElement(Je,null))},Xe=n(47),$e=n.n(Xe),et=Object(E.a)([function(e){return e.shop}],(function(e){return e.collections})),tt=Object(E.a)([et],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),nt=$e()((function(e){return Object(E.a)([et],(function(t){return t?t[e]:[]}))})),at=(n(76),Object(l.b)(null,(function(e){return{addItem:function(t){return e(U(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c,"\u20ac")),r.a.createElement(se,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))}))),rt=(n(77),function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(at,{key:e.id,item:e})}))))}),ct=(n(78),Object(E.b)({collections:tt})),it=Object(l.b)(ct)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object($.a)(e,["id"]);return r.a.createElement(rt,Object.assign({key:t},n))})))}));function lt(){var e=Object(ee.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return lt=function(){return e},e}function ot(){var e=Object(ee.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ot=function(){return e},e}var ut=te.b.div(ot()),st=te.b.div(lt()),mt=function(e){return function(t){var n=t.isLoading,a=Object($.a)(t,["isLoading"]);return n?r.a.createElement(ut,null,r.a.createElement(st,null)):r.a.createElement(e,a)}},dt="UPDATE_COLLECTIONS",pt=(n(79),Object(l.b)((function(e,t){return{collection:nt(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(at,{key:e.id,item:e})}))))}))),ft=mt(it),bt=mt(pt),ht=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromSnapShot=null,e.state={loading:!0},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateCollections,n=K.collection("collections");this.unsubscribeFromSnapShot=n.onSnapshot(function(){var n=Object(p.a)(m.a.mark((function n(a){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=a.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{}),t(r),e.setState({loading:!1});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state.loading,t=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(g.b,{exact:!0,path:"".concat(t.path),render:function(t){return r.a.createElement(ft,Object.assign({isLoading:e},t))}}),r.a.createElement(g.b,{path:"".concat(t.path,"/:collectionId"),render:function(t){return r.a.createElement(bt,Object.assign({isLoading:e},t))}}))}}]),n}(r.a.Component),vt=Object(l.b)(null,(function(e){return{updateCollections:function(t){return e(function(e){return{type:dt,payload:e}}(t))}}}))(ht),gt=n(26),Et=(n(80),function(e){var t=e.handleChange,n=e.label,a=Object($.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),yt=(n(81),function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,W.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(gt.a)({},r,n))},a.state={email:"",password:""},a}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Et,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(Et,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(se,{type:"submit"},"Sign In"),r.a.createElement(se,{onClick:Z,isGoogleSignIn:!0},"Sign In With Google"))))}}]),n}(r.a.Component)),Ot=(n(82),n(83),function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(p.a)(m.a.mark((function t(n){var a,r,c,i,l,o,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,W.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,u=o.user,t.next=12,Y(u,{displayName:r});case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(5),alert(t.t0.message),console.error("Can't sign up",t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(gt.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Et,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display name",required:!0}),r.a.createElement(Et,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Et,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"password",required:!0}),r.a.createElement(Et,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm password",required:!0}),r.a.createElement(se,{type:"submit"},"Sign Up")))}}]),n}(r.a.Component)),jt=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(yt,null),r.a.createElement(Ot,null))},kt="SET_CURRENT_USER",wt=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=W.onAuthStateChanged(function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,Y(n);case 3:t.sent.onSnapshot((function(t){e(Object(d.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(Fe,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:Qe}),r.a.createElement(g.b,{path:"/shop",component:vt}),r.a.createElement(g.b,{exact:!0,path:"/checkout",component:D}),r.a.createElement(g.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(g.a,{to:"/"}):r.a.createElement(jt,null)}})))}}]),n}(r.a.Component),xt=Object(E.b)({currentUser:Q}),Nt=Object(l.b)(xt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:kt,payload:e}}(t))}}}))(wt),Ct=(n(84),n(14)),It=(n(85),n(30)),St=n(48),Ut=n.n(St),At=n(50),Rt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(At.a)(e),[Object(d.a)(Object(d.a)({},t),{},{quantity:1})])},Pt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity-1}):e}))},qt={hidden:!0,cartItems:[]},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(d.a)(Object(d.a)({},e),{},{hidden:!e.hidden});case N:return Object(d.a)(Object(d.a)({},e),{},{cartItems:Rt(e.cartItems,t.payload)});case C:return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case I:return Object(d.a)(Object(d.a)({},e),{},{cartItems:Pt(e.cartItems,t.payload)});default:return e}},Dt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"women",imageUrl:"https://i.ibb.co/GCCdy8t/women.png",size:"large",id:4,linkUrl:"shop/women"},{title:"men",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/men"}]},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Mt={collections:null},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case dt:return Object(d.a)(Object(d.a)({},e),{},{collections:t.payload});default:return e}},Gt={currentUser:null},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case kt:return Object(d.a)(Object(d.a)({},e),{},{currentUser:t.payload});default:return e}},Ht={key:"root",storage:Ut.a,whitelist:["cart"]},Bt=Object(Ct.c)({user:zt,cart:Tt,directory:Lt,shop:_t}),Ft=Object(It.a)(Ht,Bt);var Vt=Object(Ct.d)(Ft,Ct.a.apply(void 0,[])),Wt=Object(It.b)(Vt);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:Vt},r.a.createElement(o.a,null,r.a.createElement(u.a,{persistor:Wt},r.a.createElement(Nt,null))))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.049db2d8.chunk.js.map