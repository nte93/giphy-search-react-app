(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(82),c=a.n(r),s=a(56),l=a.n(s),o=a(83),u=a(13),m=a(14),h=a(17),f=a(15),b=a(3),p=a(16),g=a(84),d=a.n(g),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={searchTerm:""},a.onFormSubmit=a.onFormSubmit.bind(Object(b.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.onSubmitting(this.state.searchTerm)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui fluid icon input"},i.a.createElement("input",{type:"text",placeholder:"Search GIPHY...",onChange:function(t){return e.setState({searchTerm:t.target.value})},value:this.state.searchTerm}),i.a.createElement("i",{className:"inverted circular search link icon",onClick:this.onFormSubmit}))))}}]),t}(i.a.Component),E=a(39),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).gifRef=i.a.createRef(),a.state={spans:0,gifId:null},a.setSpans=a.setSpans.bind(Object(b.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.gifRef.current.addEventListener("load",this.setSpans)}},{key:"setSpans",value:function(){var e=this.gifRef.current.clientHeight,t=Math.ceil(e/10);this.setState({spans:t}),this.setState({gifId:this.gifRef.current.id}),console.log(this.gifRef.current)}},{key:"render",value:function(){this.props.gif.url;return i.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},i.a.createElement(E.b,{to:{pathname:"".concat(this.props.gif.id),id:this.props.gif.images.fixed_width_small.url,bitly_gif_url:this.props.gif.bitly_gif_url}},i.a.createElement("img",{ref:this.gifRef,src:this.props.gif.images.fixed_width_small.url})))}}]),t}(i.a.Component);a(119);var j=function(e){console.log(e);var t=e.gifs.map(function(e){return i.a.createElement(S,{key:e.id,gif:e})});return i.a.createElement("div",{className:"gif-list"},t)},O=(a(120),a(169)),y=a(170),k=a(171),_=a(172),N=a(173),C=a(174),w=a(175),I=a(176),x=a(177),R=a(178),B=a(179),z=a(180),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).goBack=a.goBack.bind(Object(b.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return console.log(this.props.location.bitly_gif_url),i.a.createElement("div",{className:"gif-detail"},i.a.createElement("div",{className:"gif-large"},i.a.createElement("img",{src:this.props.location.id})),i.a.createElement("span",{className:"share-area"},i.a.createElement(O.a,{className:"share-button",url:this.props.location.bitly_gif_url},i.a.createElement(y.a,{size:32,round:!0})),i.a.createElement(k.a,{className:"share-button",url:this.props.location.bitly_gif_url},i.a.createElement(_.a,{size:32,round:!0})),i.a.createElement(N.a,{className:"share-button",url:this.props.location.bitly_gif_url},i.a.createElement(C.a,{size:32,round:!0})),i.a.createElement(w.a,{className:"share-button",url:this.props.location.bitly_gif_url},i.a.createElement(I.a,{size:32,round:!0})),i.a.createElement(x.a,{className:"share-button",url:this.props.location.bitly_gif_url},i.a.createElement(R.a,{size:32,round:!0})),i.a.createElement(B.a,{className:"share-button",url:this.props.location.bitly_gif_url},i.a.createElement(z.a,{size:32,round:!0}))),i.a.createElement("div",{className:"back-area"},i.a.createElement("button",{className:"ui button",onClick:this.goBack},"Go Back")))}}]),t}(i.a.Component),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={numItems:5},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){this.props.onClicking(e)}},{key:"handleChange",value:function(e){console.log("dropdown, numitems",e.target.value);var t=e.target.value;e.preventDefault(),this.setState({numItems:e.target.value}),this.handleSubmit(t)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",null,"# of Gifs"),i.a.createElement("select",{name:"items",multiple:"",style:{marginBottom:"10px"},className:"ui fluid dropdown",onChange:this.handleChange,value:this.state.numItems},i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"20"},"20"),i.a.createElement("option",{value:"30"},"30"),i.a.createElement("option",{value:"50"},"50"),i.a.createElement("option",{value:"100"},"100")))}}]),t}(i.a.Component),F=a(20),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={gifs:[],limit:5,clickedID:null},a.onSearchSubmit=a.onSearchSubmit.bind(Object(b.a)(a)),a.limitSubmit=a.limitSubmit.bind(Object(b.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onSearchSubmit",value:function(){var e=Object(o.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state.gifs),a="https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=").concat(this.state.limit,"&api_key=").concat("u5ZDSE6vziLy6328uu9L0gIhh6i3Rk94"),e.next=4,d.a.get(a);case 4:n=e.sent,this.setState({gifs:n.data.data});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"limitSubmit",value:function(e){this.setState({limit:e},function(){console.log("LIMIT:",this.state.limit)})}},{key:"render",value:function(){var e=this;return i.a.createElement(E.a,null,i.a.createElement("div",{className:"ui container",style:{marginTop:"20px"}},i.a.createElement("div",{className:"ui segment"},i.a.createElement(D,{onClicking:this.limitSubmit}),i.a.createElement(v,{onSubmitting:this.onSearchSubmit})),i.a.createElement(F.c,null,i.a.createElement(F.a,{exact:!0,path:"/",render:function(t){return i.a.createElement(j,Object.assign({gifs:e.state.gifs},t))}}),i.a.createElement(F.a,{path:"/:id",render:function(t){return i.a.createElement(T,Object.assign({gifs:e.state.gifs},t))}}))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(L,null),document.getElementById("root"))},93:function(e,t,a){e.exports=a(167)}},[[93,1,2]]]);
//# sourceMappingURL=main.71fd5494.chunk.js.map