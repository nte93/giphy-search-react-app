(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(18),c=n.n(r),s=n(8),l=n.n(s),o=n(19),u=n(3),m=n(4),h=n(6),f=n(5),b=n(2),p=n(7),v=n(20),d=n.n(v),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={searchTerm:""},n.onFormSubmit=n.onFormSubmit.bind(Object(b.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.onSubmitting(this.state.searchTerm)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui fluid icon input"},i.a.createElement("input",{type:"text",placeholder:"Search GIPHY...",onChange:function(t){return e.setState({searchTerm:t.target.value})},value:this.state.searchTerm}),i.a.createElement("i",{className:"inverted circular search link icon",onClick:this.onFormSubmit}))))}}]),t}(i.a.Component),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).gifRef=i.a.createRef(),n.state={spans:0},n.setSpans=n.setSpans.bind(Object(b.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.gifRef.current.addEventListener("load",this.setSpans)}},{key:"setSpans",value:function(){var e=this.gifRef.current.clientHeight;console.log(e);var t=Math.ceil(e/10);this.setState({spans:t})}},{key:"render",value:function(){var e=this.props.gif.url;return console.log(e),i.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},i.a.createElement("img",{ref:this.gifRef,src:this.props.gif.images.fixed_width_small.url}))}}]),t}(i.a.Component);n(45);var E=function(e){console.log(e);var t=e.gifs.map(function(e){return i.a.createElement(S,{key:e.id,gif:e})});return i.a.createElement("div",{className:"gif-list"},t)},j=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={numItems:5},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){this.props.onClicking(e)}},{key:"handleChange",value:function(e){console.log("dropdown, numitems",e.target.value);var t=e.target.value;e.preventDefault(),this.setState({numItems:e.target.value}),this.handleSubmit(t)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",null,"# of Gifs"),i.a.createElement("select",{name:"items",multiple:"",style:{marginBottom:"10px"},className:"ui fluid dropdown",onChange:this.handleChange,value:this.state.numItems},i.a.createElement("option",{value:"5"},"5"),i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"20"},"20"),i.a.createElement("option",{value:"30"},"30"),i.a.createElement("option",{value:"50"},"50"),i.a.createElement("option",{value:"100"},"100")))}}]),t}(i.a.Component),O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={gifs:[],limit:5},n.onSearchSubmit=n.onSearchSubmit.bind(Object(b.a)(n)),n.limitSubmit=n.limitSubmit.bind(Object(b.a)(n)),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onSearchSubmit",value:function(){var e=Object(o.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onSearchSubmit:",this.state.limit),n="https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=").concat(this.state.limit,"&api_key=").concat("u5ZDSE6vziLy6328uu9L0gIhh6i3Rk94"),e.next=4,d.a.get(n);case 4:a=e.sent,this.setState({gifs:a.data.data});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"limitSubmit",value:function(e){this.setState({limit:e},function(){console.log("LIMIT:",this.state.limit)})}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container",style:{marginTop:"20px"}},i.a.createElement("div",{className:"ui segment"},i.a.createElement(j,{onClicking:this.limitSubmit}),i.a.createElement(g,{onSubmitting:this.onSearchSubmit})),i.a.createElement(E,{gifs:this.state.gifs}))}}]),t}(i.a.Component);c.a.render(i.a.createElement(O,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5c6605a3.chunk.js.map