(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("c21b"),n=r.n(a);n.a},"0cb0":function(t,e,r){},"11b8":function(t,e,r){},2370:function(t,e,r){},"24d2":function(t,e,r){"use strict";var a=r("fcba"),n=r.n(a);n.a},"2efe":function(t,e,r){"use strict";var a=r("2370"),n=r.n(a);n.a},"372d":function(t,e,r){"use strict";var a=r("0cb0"),n=r.n(a);n.a},"4a9f":function(t,e,r){"use strict";var a=r("8f50"),n=r.n(a);n.a},"4e09":function(t,e,r){"use strict";var a=r("11b8"),n=r.n(a);n.a},5371:function(t,e,r){"use strict";var a=r("a7ce"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("nav",{attrs:{id:"menuheader"}},[a("ul",{staticClass:"site-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"},exact:""}},[a("img",{staticClass:"logo",attrs:{src:r("6649")}}),t._v("\n             Build-A-Bot\n           ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Build"},exact:""}},[t._v("\n             Build\n           ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"BrowseParts"},exact:""}},[t._v("\n             Parts\n           ")])],1),a("li",{staticClass:"nav-item cart"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cart",exact:""}},[t._v("\n             Cart\n           ")]),a("div",{staticClass:"cart-items"},[t._v("\n              "+t._s(t.cart.length)+"\n           ")])],1)])])]),a("div",{staticClass:"container"},[a("aside",{staticClass:"aside"},[a("router-view",{attrs:{name:"sidebar"}})],1),a("main",[a("router-view")],1)])])},s=[],o={name:"app",computed:{cart:function(){return this.$store.state.robots.cart}}},i=o,c=(r("034f"),r("2877")),l=Object(c["a"])(i,n,s,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=(r("c5f6"),r("7cdf"),r("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t._m(0),r("div",{staticClass:"get-started"},[r("router-link",{attrs:{to:"/build"}},[t._v("Get Started!")]),t._v(" Build a robot.\n  ")],1)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"robot",attrs:{src:r("8c6e"),"aria-hidden":"true"}})])}],v={name:"HomePage",props:{msg:String}},h=v,m=(r("4a9f"),Object(c["a"])(h,p,f,!1,null,"22272530",null));m.options.__file="HomePage.vue";var b=m.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.availableParts?r("div",{staticClass:"content"},[r("div",{staticClass:"left-side-content"},[r("div",{staticClass:"top-row"},[r("div",{staticClass:"top"},[r("PartSelector",{style:t.saleBorderStyle,attrs:{parts:t.availableParts.heads,position:"top"},on:{partselected:function(e){return t.selectedRobot.head=e}}})],1)]),r("div",{staticClass:"middle-row"},[r("PartSelector",{attrs:{parts:t.availableParts.arms,position:"left"},on:{partselected:function(e){return t.selectedRobot.leftArm=e}}}),r("PartSelector",{attrs:{parts:t.availableParts.torsos,position:"center"},on:{partselected:function(e){return t.selectedRobot.torso=e}}}),r("PartSelector",{attrs:{parts:t.availableParts.arms,position:"right"},on:{partselected:function(e){return t.selectedRobot.rightArm=e}}})],1),r("div",{staticClass:"bottom-row"},[r("PartSelector",{attrs:{parts:t.availableParts.bases,position:"bottom"},on:{partselected:function(e){return t.selectedRobot.base=e}}})],1)]),r("div",{staticClass:"right-side-content"},[r("div",{staticClass:"preview"},[r("CollapsibleSection",[r("div",{staticClass:"preview-content"},[r("div",{staticClass:"top-row"},[r("img",{attrs:{src:this.selectedRobot.head.src}})]),r("div",{staticClass:"middle-row"},[r("img",{staticClass:"rotate-left",attrs:{src:t.selectedRobot.leftArm.src}}),r("img",{attrs:{src:t.selectedRobot.torso.src}}),r("img",{staticClass:"rotate-right",attrs:{src:t.selectedRobot.rightArm.src}})]),r("div",{staticClass:"bottom-row"},[r("img",{attrs:{src:t.selectedRobot.base.src}})])])]),r("button",{staticClass:"add-to-cart",on:{click:function(e){t.addToCart()}}},[t._v("Add To Cart")])],1)])]):t._e()},C=[],g=(r("f751"),r("c93e")),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"part",class:t.position},[r("router-link",{attrs:{to:{name:"Parts",params:{id:this.selectedPart.id,partType:this.selectedPart.type}}}},[r("img",{attrs:{src:t.selectedPart.src,title:"arm"}})]),r("button",{staticClass:"prev-selector",on:{click:function(e){t.selectPreviousPart()}}}),r("button",{staticClass:"next-selector",on:{click:function(e){t.selectNextPart()}}}),r("span",{directives:[{name:"pin",rawName:"v-pin",value:{bottom:t.pinPadding,right:t.pinPadding},expression:"{ bottom: pinPadding, right: pinPadding }"},{name:"show",rawName:"v-show",value:t.selectedPart.onSale,expression:"selectedPart.onSale"}],staticClass:"sale",on:{click:function(e){t.pinPadding="5px"}}},[t._v("Sale!")])],1)},y=[],w=(r("6762"),r("2fdb"),r("456d"),r("ac6a"),function(t,e){Object.keys(e.value).forEach(function(r){t.style[r]=e.value[r]}),t.style.position="absolute"});function S(t,e){var r=t-1;return r<0?e-1:r}function x(t,e){var r=t+1;return r>e-1?0:r}var B={directives:{pin:w},props:{parts:{type:Array,required:!0},position:{type:String,required:!0,validator:function(t){return["top","left","center","right","bottom"].includes(t)}}},data:function(){return{selectedPartIndex:0,pinPadding:"5px"}},computed:{selectedPart:function(){return this.parts[this.selectedPartIndex]}},created:function(){this.emitSelectedPart()},updated:function(){this.emitSelectedPart()},methods:{emitSelectedPart:function(){this.$emit("partselected",this.selectedPart)},selectNextPart:function(){this.selectedPartIndex=x(this.selectedPartIndex,this.parts.length)},selectPreviousPart:function(){this.selectedPartIndex=S(this.selectedPartIndex,this.parts.length)}}},k=B,R=(r("372d"),Object(c["a"])(k,P,y,!1,null,"7e8b6d16",null));R.options.__file="PartSelector.vue";var T=R.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header"},[t.open?r("span",{on:{click:function(e){t.open=!t.open}}},[t._v(" ▲ Collapse")]):t._e(),t.open?t._e():r("span",{on:{click:function(e){t.open=!t.open}}},[t._v(" ▼ Expand")])]),t.open?t._t("default"):t._e()],2)},j=[],$={name:"CollapsibleSection",data:function(){return{open:!0}}},A=$,E=(r("24d2"),Object(c["a"])(A,O,j,!1,null,"1eea8096",null));E.options.__file="CollapsibleSection.vue";var I=E.exports,H=r("2f62"),N={name:"RobotBuilder",created:function(){this.getParts()},addedToCart:function(){},beforeRouteLeave:function(t,e,r){if(this.$store.state.robots.cart.length>0)this.addedToCart=!0,r(!0);else{this.addedToCart=!1;var a=confirm("You have not added a robot to cart. Are you sure you want to leave?");r(a)}},components:{PartSelector:T,CollapsibleSection:I},data:function(){return{addedToCart:!1,cart:[],selectedRobot:{head:{},leftArm:{},torso:{},rightArm:{},base:{}}}},computed:{availableParts:function(){return this.$store.state.robots.parts},saleBorderStyle:function(){return{border:this.selectedRobot.head.onSale?"3px solid red":"3px solid #aaa"}}},methods:Object(g["a"])({},Object(H["b"])("robots",["getParts","addRobotToCart"]),{addToCart:function(){var t=this,e=this.selectedRobot,r=e.head.cost+e.leftArm.cost+e.torso.cost+e.rightArm.cost+e.base.cost;this.addRobotToCart(Object.assign({},e,{cost:r})).then(function(){return t.$router.push("/cart")}),this.addedToCart=!0}})},U=N,M=(r("c894"),Object(c["a"])(U,_,C,!1,null,null,null));M.options.__file="RobotBuilder.vue";var q=M.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.part.title)+" ")]),r("div",[t._v("\n    "+t._s(t.part.description)+"\n  ")])])},L=[],Y=(r("7514"),{created:function(){return this.$store.dispatch(getParts)},computed:{parts:function(){return this.$store.state.robots.parts||{heads:[],arms:[],torsos:[],parts:[]}}}}),D=Y,G={name:"PartInfo",mixins:[void 0],props:{partType:{type:String},id:{type:[Number,String],validator:function(t){return Number.isInteger(Number(t))}}},computed:{part:function(){var t=this.partType,e=this.id;return this.parts[t].find(function(t){return t.id===+e})}}},z=G,F=Object(c["a"])(z,J,L,!1,null,null,null);F.options.__file="PartInfo.vue";var K=F.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Browse Parts")]),r("ul",{staticClass:"menu"},[r("li",[r("router-link",{attrs:{to:{name:"BrowseHeads"}}},[t._v("Heads")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseArms"}}},[t._v("Arms")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseTorsos"}}},[t._v("Torsos")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseBases"}}},[t._v("Bases")])],1)]),r("router-view")],1)},V=[],W={name:"BrowseParts"},X=W,Z=(r("5371"),Object(c["a"])(X,Q,V,!1,null,"4309a628",null));Z.options.__file="BrowseParts.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Heads")]),t._v("\n  The head is where the brain of your robot will reside. Heads have\n  different capabilities so be sure to choose the one that fits your needs.\n  "),t._l(t.parts.heads,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},rt=[],at={name:"RobotHeads",mixins:[D]},nt=at,st=Object(c["a"])(nt,et,rt,!1,null,null,null);st.options.__file="RobotHeads.vue";var ot=st.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Arms")]),t._v("\n  The arms are how your robot will interact with the world.\n  They come in a variety of shapes and functions.\n  "),t._l(t.parts.arms,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},ct=[],lt={name:"RobotArms",mixins:[D]},ut=lt,dt=Object(c["a"])(ut,it,ct,!1,null,null,null);dt.options.__file="RobotArms.vue";var pt=dt.exports,ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Torsos")]),t._v("\n  The torso is the central part of your robot that holds everything\n  together. Choosing the right torso will help ensure your robot\n  functions well with the parts you choose.\n  "),t._l(t.parts.torsos,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},vt=[],ht={name:"RobotTorsos",mixins:[D]},mt=ht,bt=Object(c["a"])(mt,ft,vt,!1,null,null,null);bt.options.__file="RobotTorsos.vue";var _t=bt.exports,Ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Bases")]),t._v("\n  The Base is critical to the mobility of your robot. Be\n  sure to choose a base that will work well with the terrain\n  where your robot needs to operate.\n  "),t._l(t.parts.bases,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},gt=[],Pt={name:"RobotBases",mixins:[D]},yt=Pt,wt=Object(c["a"])(yt,Ct,gt,!1,null,null,null);wt.options.__file="RobotBases.vue";var St=wt.exports,xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._v("\n   Standard Sidebar\n")])},Bt=[],kt={name:"StandardSidebar"},Rt=kt,Tt=(r("4e09"),Object(c["a"])(Rt,xt,Bt,!1,null,"87d51fd6",null));Tt.options.__file="SidebarStandard.vue";var Ot=Tt.exports,jt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._v("\n   Build Sidebar\n")])},$t=[],At={name:"BuildSidebar"},Et=At,It=(r("cc17"),Object(c["a"])(Et,jt,$t,!1,null,"173ac554",null));It.options.__file="SidebarBuild.vue";var Ht=It.exports,Nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Cart")]),r("table",[t._m(0),r("tbody",t._l(t.cart,function(e,a){return r("tr",{key:a},[r("td",{staticClass:"robot-title"},[t._v("\n           "+t._s(e.head.title)+"\n         ")]),r("td",{staticClass:"cost"},[t._v("\n           "+t._s(t._f("currency")(e.cost,"en-US"))+"\n         ")])])}))]),r("h2",{staticClass:"saleItems"},[t._v("You saved money on these robots:")]),r("table",[t._m(1),r("tbody",t._l(t.cartSaleItems,function(e,a){return r("tr",{key:a},[r("td",{staticClass:"robot-title"},[t._v("\n           "+t._s(e.head.title)+"\n         ")]),r("td",{staticClass:"cost"},[t._v("\n           "+t._s(t._f("currency")(e.cost,"en-US"))+"\n         ")])])}))])])},Ut=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"robot-title"},[t._v("\n           Robot\n         ")]),r("th",{staticClass:"cost"},[t._v("\n           Cost\n         ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"robot-title"},[t._v("\n           Robot\n         ")]),r("th",{staticClass:"cost"},[t._v("\n           Cost\n         ")])])])}],Mt=function(t,e){return"".concat(t.toLocaleString(e,{style:"currency",currency:"USD"}))},qt={name:"Cart",filters:{currency:Mt},computed:{cart:function(){return this.$store.state.robots.cart},cartSaleItems:function(){return this.$store.getters["robots/cartSaleItems"]}}},Jt=qt,Lt=(r("2efe"),Object(c["a"])(Jt,Nt,Ut,!1,null,"39fbfd75",null));Lt.options.__file="ShoppingCart.vue";var Yt=Lt.exports;a["a"].use(d["a"]);var Dt=new d["a"]({mode:"history",routes:[{path:"/",name:"Home",components:{default:b,sidebar:Ot}},{path:"/build",name:"Build",components:{default:q,sidebar:Ht}},{path:"/parts/browse",name:"BrowseParts",component:tt,children:[{name:"BrowseHeads",path:"heads",component:ot},{name:"BrowseArms",path:"arms",component:pt},{name:"BrowseTorsos",path:"torsos",component:_t},{name:"BrowseBases",path:"bases",component:St}]},{path:"/parts/:partType/:id",name:"Parts",component:K,props:!0,beforeEnter:function(t,e,r){var a=Number.isInteger(Number(t.params.id));r(a)}},{path:"/cart",name:"Cart",component:Yt}]}),Gt=r("8afe"),zt=r("bc3a"),Ft=r.n(zt),Kt={namespaced:!0,state:{cart:[],parts:null},mutations:{addRobotToCart:function(t,e){t.cart.push(e)},updateParts:function(t,e){t.parts=e}},actions:{getParts:function(t){var e=t.commit;Ft.a.get("/api/parts").then(function(t){return e("updateParts",t.data)}).catch(console.error)},addRobotToCart:function(t,e){var r=t.commit,a=t.state,n=Object(Gt["a"])(a.cart).concat([e]);return Ft.a.post("/api/cart",n).then(function(){return r("addRobotToCart",e)})}},getters:{cartSaleItems:function(t){return t.cart.filter(function(t){return t.head.onSale||t.leftArm.onSale||t.torso.onSale||t.rightArm.onSale||t.base.onSale})}}},Qt={state:{user:null},mutations:{updateCurrentUser:function(t,e){t.user=e}},getters:{},actions:{signIn:function(t){var e=t.commit;Ft.a.post("/api/sign-in").then(function(t){return e("updateCurrentUser",t.data)}).catch(console.error)}}};a["a"].use(H["a"]);var Vt=new H["a"].Store({modules:{robots:Kt,users:Qt}});a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(u)},router:Dt,store:Vt}).$mount("#app")},6649:function(t,e,r){t.exports=r.p+"img/build-a-bot-logo.bdca6725.png"},"82ef":function(t,e,r){},"8c6e":function(t,e,r){t.exports=r.p+"img/robot-home.90d11f5b.png"},"8f50":function(t,e,r){},a7ce:function(t,e,r){},c21b:function(t,e,r){},c858:function(t,e,r){},c894:function(t,e,r){"use strict";var a=r("82ef"),n=r.n(a);n.a},cc17:function(t,e,r){"use strict";var a=r("c858"),n=r.n(a);n.a},fcba:function(t,e,r){}});
//# sourceMappingURL=app.d9a9dc7c.js.map