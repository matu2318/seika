webpackJsonp([0],{"0PlT":function(t,e){},"4I80":function(t,e){},"6Srl":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),l={el:"#app",methods:{handleScroll:function(t,e){return window.scrollY>350&&e.setAttribute("style","opacity: 1; transform: translate3d(-300px, 0px, 0)"),window.scrollY>400}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:this.handleScroll,expression:"handleScroll"}],staticClass:"box2",attrs:{id:"hoge"}},[this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("ウェブサイトみたいなのを"),e("br"),this._v("作れるほどになりました!\n    ")])}]};var i={el:"#app",methods:{handleScroll:function(t,e){return window.scrollY>1500&&e.setAttribute("style","opacity: 1; transform: translate3d(0px, 100px, 0)"),window.scrollY>1600}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:this.handleScroll,expression:"handleScroll"}],staticClass:"box3",attrs:{id:"fuge"}},[this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("さてここで問題！！"),e("br"),this._v("プログラミングができるとどうなる？\n    ")])}]};var a={el:"#app",methods:{handleScroll:function(t,e){return window.scrollY>2400&&e.setAttribute("style","opacity: 1; transform: translate3d(0px, 100px, 0)"),window.scrollY>2500}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:this.handleScroll,expression:"handleScroll"}],staticClass:"box4",attrs:{id:"answer"}},[this._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("自分ができると感じることが増え自信になる。\n        "),r("br"),t._v("一人でこんなものを作れた、こんなことができた。\n        "),r("br"),t._v("じゃあ次はこれを作ってみよう。こんなものを実装してみよう。\n        "),r("br"),t._v("次から次へとやりたいことが増え実力へと繋がっていく。\n        "),r("br"),t._v("どうすれば作れるのか、どんなことなら作れるのか\n        "),r("br"),t._v("想像力を働かせることもでき考える力がつく。\n        "),r("br"),t._v("やはりエンジニアたるもの技術力がなければ舐められると思う。\n        "),r("br"),t._v("信頼もされない。\n        "),r("br"),t._v("エンジニアとして働くにはとにもかくにも技術だと思う。\n        "),r("br"),t._v("まずは業務に関係のないことだとしても興味を持つ。\n        "),r("br"),t._v("手を動かしてみる。\n        "),r("br"),t._v("理屈はそのあとからでいい。\n        "),r("br"),t._v("卵焼きを作るときに、黄身は何度で固まって白身は何度で固まるから、今フライパンは何度で・・\n        "),r("br"),t._v("なんてことは考えないだろう。\n        "),r("br"),t._v("理屈なんてあとでもいいのだ。\n        "),r("br"),t._v("とにかく手を動かすこと、慣れることだ。\n        "),r("br"),t._v("ゴールは、次は興味のある技術をどう業務と結び付けられるかだ。\n        "),r("br"),t._v("そこを目指して勉強していきたい\n        "),r("br"),t._v("話は変わるが、馬は道路交通法でいうと軽車両扱いだということはご存知だろうか。\n        "),r("br"),t._v("結構有名な話ではあるので知ってる人も多いと思う。\n        "),r("br"),t._v("しかし、なんとゾウは道路交通法違反になる可能性があるというのはあまり知られていない。\n        "),r("br"),t._v("これには憤りを覚える。\n        "),r("br"),t._v("同じ命ではないのか？\n        "),r("br"),t._v("なぜ歩くだけで法で裁かれないといけないのだ。\n        "),r("br"),t._v("我々人間は少しおごりすぎではないだろうか。\n    ")])}]};var v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],attrs:{href:"#",id:"return-top"}},[this._v("Top")])])},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"scroll"}},[r("ol",t._l(t.items,function(e,n){return r("li",{key:n},[r("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:e.to,expression:"item.to"}],attrs:{href:"#",id:"#scroll"}},[t._v("\n          "+t._s(e.title)+"\n       ")])])}),0)])},staticRenderFns:[]};var d={components:{hoge:r("VU/8")(l,s,!1,function(t){r("QD+1")},null,null).exports,fuge:r("VU/8")(i,o,!1,function(t){r("6Srl")},null,null).exports,answer:r("VU/8")(a,c,!1,function(t){r("nRbs")},null,null).exports,scrollTop:r("VU/8")(null,v,!1,function(t){r("lCVo")},null,null).exports,scroll:r("VU/8")({name:"scroll",data:function(){return{items:[{title:"section1",to:"#box"},{title:"section2",to:"#hoge"},{title:"section3",to:"#fuge"},{title:"section4",to:"#answer"}]}}},u,!1,function(t){r("0PlT")},"data-v-9157896c",null).exports},el:"#app",methods:{handleScroll:function(t,e){return window.scrollY>10&&e.setAttribute("style","opacity: 1; transform: translate3d(300px, 0, 0)"),window.scrollY>100}}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",{staticClass:"centered",attrs:{id:"top"}},[t._v("成果報告会")]),t._v(" "),r("scroll"),t._v(" "),r("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"box",attrs:{id:"box"}},[t._m(0)]),t._v(" "),r("hoge"),t._v(" "),r("fuge"),t._v(" "),r("answer"),t._v(" "),r("scrollTop")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("入社当初には全くできなかった"),e("br"),this._v("プログラミングも\n    ")])}]};var p=r("VU/8")(d,_,!1,function(t){r("4I80")},null,null).exports,f=r("bm7V"),h=r.n(f);n.a.use(h.a),n.a.directive("scroll",{inserted:function(t,e){window.addEventListener("scroll",function r(n){e.value(n,t)&&window.removeEventListener("scroll",r)})}}),n.a.config.productionTip=!1,new n.a({el:"#app",vueScrollTop:h.a,components:{App:p},template:"<App/>"})},"QD+1":function(t,e){},lCVo:function(t,e){},nRbs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.08c3842e757ac645b2ac.js.map