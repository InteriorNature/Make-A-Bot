(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("c21b"),n=r.n(a);n.a},"0cb0":function(t,e,r){},"0f09":function(t,e,r){"use strict";var a=r("768f"),n=r.n(a);n.a},"11b8":function(t,e,r){},2370:function(t,e,r){},"26d2":function(t,e,r){},"2efe":function(t,e,r){"use strict";var a=r("2370"),n=r.n(a);n.a},"372d":function(t,e,r){"use strict";var a=r("0cb0"),n=r.n(a);n.a},"4a9f":function(t,e,r){"use strict";var a=r("8f50"),n=r.n(a);n.a},"4e09":function(t,e,r){"use strict";var a=r("11b8"),n=r.n(a);n.a},"50ed":function(t,e,r){"use strict";var a=r("d4b5"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("nav",{attrs:{id:"menuheader"}},[a("ul",{staticClass:"site-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"},exact:""}},[a("img",{staticClass:"logo",attrs:{src:r("6649")}}),t._v("\n             Build-A-Bot\n           ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Build"},exact:""}},[t._v("\n             Build\n           ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"BrowseParts"},exact:""}},[t._v("\n             Parts\n           ")])],1),a("li",{staticClass:"nav-item cart"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/cart",exact:""}},[t._v("\n             Cart\n           ")]),a("div",{staticClass:"cart-items"},[t._v("\n              "+t._s(t.cart.length)+"\n           ")])],1)])])]),a("div",{staticClass:"container"},[a("MenuIcon"),a("aside",{staticClass:"aside"},[a("router-view",{attrs:{name:"sidebar"}})],1),a("main",[a("router-view")],1)],1)])},s=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"menuicon",attrs:{onclick:"menutoggle(this)"}},[r("div",{staticClass:"bar1"}),r("div",{staticClass:"bar2"}),r("div",{staticClass:"bar3"})])}],c={name:"MenuIcon",menutoggle:function(t){t.classList.toggle("change")}},l=c,u=(r("df81"),r("2877")),d=Object(u["a"])(l,o,i,!1,null,"23622ef4",null);d.options.__file="MenuIcon.vue";d.exports;var p={name:"app",computed:{cart:function(){return this.$store.state.robots.cart}}},f=p,v=(r("034f"),Object(u["a"])(f,n,s,!1,null,null,null));v.options.__file="App.vue";var h=v.exports,m=(r("c5f6"),r("7cdf"),r("8c4f")),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t._m(0),r("div",{staticClass:"get-started"},[r("router-link",{attrs:{to:"/build"}},[t._v("Get Started!")]),t._v(" Build a robot.\n  ")],1)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"robot",attrs:{src:r("8c6e"),"aria-hidden":"true"}})])}],g={name:"HomePage",props:{msg:String}},C=g,P=(r("4a9f"),Object(u["a"])(C,b,_,!1,null,"22272530",null));P.options.__file="HomePage.vue";var y=P.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.availableParts?r("div",{staticClass:"content"},[r("div",{staticClass:"left-side-content"},[r("div",{staticClass:"top-row"},[r("div",{staticClass:"top"},[r("PartSelector",{style:t.saleBorderStyle,attrs:{parts:t.availableParts.heads,position:"top"},on:{partselected:function(e){return t.selectedRobot.head=e}}})],1)]),r("div",{staticClass:"middle-row"},[r("PartSelector",{attrs:{parts:t.availableParts.arms,position:"left"},on:{partselected:function(e){return t.selectedRobot.leftArm=e}}}),r("PartSelector",{attrs:{parts:t.availableParts.torsos,position:"center"},on:{partselected:function(e){return t.selectedRobot.torso=e}}}),r("PartSelector",{attrs:{parts:t.availableParts.arms,position:"right"},on:{partselected:function(e){return t.selectedRobot.rightArm=e}}})],1),r("div",{staticClass:"bottom-row"},[r("PartSelector",{attrs:{parts:t.availableParts.bases,position:"bottom"},on:{partselected:function(e){return t.selectedRobot.base=e}}})],1)]),r("div",{staticClass:"spacer"}),r("div",{staticClass:"right-side-content"},[r("div",{staticClass:"preview"},[r("CollapsibleSection",{on:{click:t.toggle}},[r("div",{staticClass:"preview-content"},[r("div",{staticClass:"top-row"},[r("img",{attrs:{src:this.selectedRobot.head.src}})]),r("div",{staticClass:"middle-row"},[r("img",{staticClass:"rotate-left",attrs:{src:t.selectedRobot.leftArm.src}}),r("img",{attrs:{src:t.selectedRobot.torso.src}}),r("img",{staticClass:"rotate-right",attrs:{src:t.selectedRobot.rightArm.src}})]),r("div",{staticClass:"bottom-row"},[r("img",{attrs:{src:t.selectedRobot.base.src}})])])]),r("button",{staticClass:"add-to-cart",on:{click:function(e){t.addToCart()}}},[t._v("Add To Cart")])],1)])]):t._e()},S=[],x=(r("f751"),r("c93e")),B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"part",class:t.position},[r("router-link",{attrs:{to:{name:"Parts",params:{id:this.selectedPart.id,partType:this.selectedPart.type}}}},[r("img",{attrs:{src:t.selectedPart.src,title:"arm"}})]),r("button",{staticClass:"prev-selector",on:{click:function(e){t.selectPreviousPart()}}}),r("button",{staticClass:"next-selector",on:{click:function(e){t.selectNextPart()}}}),r("span",{directives:[{name:"pin",rawName:"v-pin",value:{bottom:t.pinPadding,right:t.pinPadding},expression:"{ bottom: pinPadding, right: pinPadding }"},{name:"show",rawName:"v-show",value:t.selectedPart.onSale,expression:"selectedPart.onSale"}],staticClass:"sale",on:{click:function(e){t.pinPadding="5px"}}},[t._v("Sale!")])],1)},T=[],k=(r("6762"),r("2fdb"),r("456d"),r("ac6a"),function(t,e){Object.keys(e.value).forEach(function(r){t.style[r]=e.value[r]}),t.style.position="absolute"});function R(t,e){var r=t-1;return r<0?e-1:r}function O(t,e){var r=t+1;return r>e-1?0:r}var $={directives:{pin:k},props:{parts:{type:Array,required:!0},position:{type:String,required:!0,validator:function(t){return["top","left","center","right","bottom"].includes(t)}}},data:function(){return{selectedPartIndex:0,pinPadding:"5px"}},computed:{selectedPart:function(){return this.parts[this.selectedPartIndex]}},created:function(){this.emitSelectedPart()},updated:function(){this.emitSelectedPart()},methods:{emitSelectedPart:function(){this.$emit("partselected",this.selectedPart)},selectNextPart:function(){this.selectedPartIndex=O(this.selectedPartIndex,this.parts.length)},selectPreviousPart:function(){this.selectedPartIndex=R(this.selectedPartIndex,this.parts.length)}}},j=$,E=(r("372d"),Object(u["a"])(j,B,T,!1,null,"7e8b6d16",null));E.options.__file="PartSelector.vue";var A=E.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header"},[t.open?r("span",{on:{click:t.toggle}},[t._v(" ▲ Collapse")]):r("span",{on:{click:t.toggle}},[t._v(" ▼ Expand")])]),t.open?t._t("default"):t._e()],2)},H=[],N={name:"CollapsibleSection",data:function(){return{open:!0}},created:function(){this.mediaToggler()},beforeDestroy:function(){window.removeEventListener("resize",this.mediaToggler())},methods:{toggle:function(){this.open=!this.open},mediaToggler:function(){var t=window.matchMedia("(max-width: 530px)");console.log("parent1"),console.log(t.matches),t.matches&&(console.log(this.open),this.open&&this.toggle(),console.log("parent2"))}}},M=N,U=(r("50ed"),Object(u["a"])(M,I,H,!1,null,"38c7ae83",null));U.options.__file="CollapsibleSection.vue";var L=U.exports,q=r("2f62"),D={name:"RobotBuilder",created:function(){this.getParts()},addedToCart:function(){},beforeRouteLeave:function(t,e,r){if(this.$store.state.robots.cart.length>0)this.addedToCart=!0,r(!0);else{this.addedToCart=!1;var a=confirm("You have not added a robot to cart. Are you sure you want to leave?");r(a)}},components:{PartSelector:A,CollapsibleSection:L},data:function(){return{addedToCart:!1,cart:[],selectedRobot:{head:{},leftArm:{},torso:{},rightArm:{},base:{}}}},computed:{availableParts:function(){return this.$store.state.robots.parts},saleBorderStyle:function(){return{border:this.selectedRobot.head.onSale?"3px solid red":"3px solid #aaa"}}},methods:Object(x["a"])({},Object(q["b"])("robots",["getParts","addRobotToCart"]),{addToCart:function(){var t=this,e=this.selectedRobot,r=e.head.cost+e.leftArm.cost+e.torso.cost+e.rightArm.cost+e.base.cost;this.addRobotToCart(Object.assign({},e,{cost:r})).then(function(){return t.$router.push("/cart")}),this.addedToCart=!0}})},J=D,Y=(r("0f09"),Object(u["a"])(J,w,S,!1,null,"7f28ebcd",null));Y.options.__file="RobotBuilder.vue";var z=Y.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.part.title)+" ")]),r("div",[t._v("\n    "+t._s(t.part.description)+"\n  ")])])},F=[],K=(r("7514"),{created:function(){return this.$store.dispatch(getParts)},computed:{parts:function(){return this.$store.state.robots.parts||{heads:[],arms:[],torsos:[],parts:[]}}}}),Q=K,V={name:"PartInfo",mixins:[void 0],props:{partType:{type:String},id:{type:[Number,String],validator:function(t){return Number.isInteger(Number(t))}}},computed:{part:function(){var t=this.partType,e=this.id;return this.parts[t].find(function(t){return t.id===+e})}}},W=V,X=Object(u["a"])(W,G,F,!1,null,null,null);X.options.__file="PartInfo.vue";var Z=X.exports,tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Browse Parts")]),r("ul",{staticClass:"menu"},[r("li",[r("router-link",{attrs:{to:{name:"BrowseHeads"}}},[t._v("Heads")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseArms"}}},[t._v("Arms")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseTorsos"}}},[t._v("Torsos")])],1),r("li",[r("router-link",{attrs:{to:{name:"BrowseBases"}}},[t._v("Bases")])],1)]),r("router-view")],1)},et=[],rt={name:"BrowseParts"},at=rt,nt=(r("e5c4"),Object(u["a"])(at,tt,et,!1,null,"018bad67",null));nt.options.__file="BrowseParts.vue";var st=nt.exports,ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Heads")]),t._v("\n  The head is where the brain of your robot will reside. Heads have\n  different capabilities so be sure to choose the one that fits your needs.\n  "),t._l(t.parts.heads,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},it=[],ct={name:"RobotHeads",mixins:[Q]},lt=ct,ut=Object(u["a"])(lt,ot,it,!1,null,null,null);ut.options.__file="RobotHeads.vue";var dt=ut.exports,pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Arms")]),t._v("\n  The arms are how your robot will interact with the world.\n  They come in a variety of shapes and functions.\n  "),t._l(t.parts.arms,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},ft=[],vt={name:"RobotArms",mixins:[Q]},ht=vt,mt=Object(u["a"])(ht,pt,ft,!1,null,null,null);mt.options.__file="RobotArms.vue";var bt=mt.exports,_t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Torsos")]),t._v("\n  The torso is the central part of your robot that holds everything\n  together. Choosing the right torso will help ensure your robot\n  functions well with the parts you choose.\n  "),t._l(t.parts.torsos,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},gt=[],Ct={name:"RobotTorsos",mixins:[Q]},Pt=Ct,yt=Object(u["a"])(Pt,_t,gt,!1,null,null,null);yt.options.__file="RobotTorsos.vue";var wt=yt.exports,St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Bases")]),t._v("\n  The Base is critical to the mobility of your robot. Be\n  sure to choose a base that will work well with the terrain\n  where your robot needs to operate.\n  "),t._l(t.parts.bases,function(e,a){return r("div",{key:a},[r("h4",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.description))])])})],2)},xt=[],Bt={name:"RobotBases",mixins:[Q]},Tt=Bt,kt=Object(u["a"])(Tt,St,xt,!1,null,null,null);kt.options.__file="RobotBases.vue";var Rt=kt.exports,Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._v("\n   Standard Sidebar\n")])},$t=[],jt={name:"StandardSidebar"},Et=jt,At=(r("4e09"),Object(u["a"])(Et,Ot,$t,!1,null,"87d51fd6",null));At.options.__file="SidebarStandard.vue";var It=At.exports,Ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t._v("\n   Build Sidebar\n")])},Nt=[],Mt={name:"BuildSidebar"},Ut=Mt,Lt=(r("cc17"),Object(u["a"])(Ut,Ht,Nt,!1,null,"173ac554",null));Lt.options.__file="SidebarBuild.vue";var qt=Lt.exports,Dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Cart")]),r("table",[t._m(0),r("tbody",t._l(t.cart,function(e,a){return r("tr",{key:a},[r("td",{staticClass:"robot-title"},[t._v("\n           "+t._s(e.head.title)+"\n         ")]),r("td",{staticClass:"cost"},[t._v("\n           "+t._s(t._f("currency")(e.cost,"en-US"))+"\n         ")])])}))]),r("h2",{staticClass:"saleItems"},[t._v("You saved money on these robots:")]),r("table",[t._m(1),r("tbody",t._l(t.cartSaleItems,function(e,a){return r("tr",{key:a},[r("td",{staticClass:"robot-title"},[t._v("\n           "+t._s(e.head.title)+"\n         ")]),r("td",{staticClass:"cost"},[t._v("\n           "+t._s(t._f("currency")(e.cost,"en-US"))+"\n         ")])])}))])])},Jt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"robot-title"},[t._v("\n           Robot\n         ")]),r("th",{staticClass:"cost"},[t._v("\n           Cost\n         ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"robot-title"},[t._v("\n           Robot\n         ")]),r("th",{staticClass:"cost"},[t._v("\n           Cost\n         ")])])])}],Yt=function(t,e){return"".concat(t.toLocaleString(e,{style:"currency",currency:"USD"}))},zt={name:"Cart",filters:{currency:Yt},computed:{cart:function(){return this.$store.state.robots.cart},cartSaleItems:function(){return this.$store.getters["robots/cartSaleItems"]}}},Gt=zt,Ft=(r("2efe"),Object(u["a"])(Gt,Dt,Jt,!1,null,"39fbfd75",null));Ft.options.__file="ShoppingCart.vue";var Kt=Ft.exports;a["a"].use(m["a"]);var Qt=new m["a"]({mode:"history",routes:[{path:"/",name:"Home",components:{default:y,sidebar:It}},{path:"/build",name:"Build",components:{default:z,sidebar:qt}},{path:"/parts/browse",name:"BrowseParts",component:st,children:[{name:"BrowseHeads",path:"heads",component:dt},{name:"BrowseArms",path:"arms",component:bt},{name:"BrowseTorsos",path:"torsos",component:wt},{name:"BrowseBases",path:"bases",component:Rt}]},{path:"/parts/:partType/:id",name:"Parts",component:Z,props:!0,beforeEnter:function(t,e,r){var a=Number.isInteger(Number(t.params.id));r(a)}},{path:"/cart",name:"Cart",component:Kt}]}),Vt=r("8afe"),Wt=r("bc3a"),Xt=r.n(Wt),Zt={namespaced:!0,state:{cart:[],parts:null},mutations:{addRobotToCart:function(t,e){t.cart.push(e)},updateParts:function(t,e){t.parts=e}},actions:{getParts:function(t){var e=t.commit;Xt.a.get("/api/parts").then(function(t){return e("updateParts",t.data)}).catch(console.error)},addRobotToCart:function(t,e){var r=t.commit,a=t.state,n=Object(Vt["a"])(a.cart).concat([e]);return Xt.a.post("/api/cart",n).then(function(){return r("addRobotToCart",e)})}},getters:{cartSaleItems:function(t){return t.cart.filter(function(t){return t.head.onSale||t.leftArm.onSale||t.torso.onSale||t.rightArm.onSale||t.base.onSale})}}},te={state:{user:null},mutations:{updateCurrentUser:function(t,e){t.user=e}},getters:{},actions:{signIn:function(t){var e=t.commit;Xt.a.post("/api/sign-in").then(function(t){return e("updateCurrentUser",t.data)}).catch(console.error)}}};a["a"].use(q["a"]);var ee=new q["a"].Store({modules:{robots:Zt,users:te}});a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(h)},router:Qt,store:ee}).$mount("#app")},6649:function(t,e,r){t.exports=r.p+"img/build-a-bot-logo.bdca6725.png"},"768f":function(t,e,r){},"8c6e":function(t,e,r){t.exports=r.p+"img/robot-home.90d11f5b.png"},"8f50":function(t,e,r){},c21b:function(t,e,r){},c858:function(t,e,r){},cc17:function(t,e,r){"use strict";var a=r("c858"),n=r.n(a);n.a},d4b5:function(t,e,r){},df81:function(t,e,r){"use strict";var a=r("26d2"),n=r.n(a);n.a},e5c4:function(t,e,r){"use strict";var a=r("f32a"),n=r.n(a);n.a},f32a:function(t,e,r){}});
//# sourceMappingURL=app.9c8d76d8.js.map