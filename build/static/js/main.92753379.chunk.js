(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(7),s=r.n(a),i=r(2),o=r(3),u=r(5),l=r(4),h=r(0),j=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={query:""},e.inputChange=function(t){e.setState({query:t.currentTarget.value})},e.formsubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({query:""})},e}return Object(o.a)(r,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.formsubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.inputChange,value:this.state.query})]})})}}]),r}(n.Component),b=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("ul",{children:[Object(h.jsx)("p",{children:"images"}),Object(h.jsx)("li",{children:"1"}),Object(h.jsx)("li",{children:"2"}),Object(h.jsx)("li",{children:"3"}),Object(h.jsx)("li",{children:"4"})]})}}]),r}(n.Component),m=(r(13),function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleSearchQuery=function(e){var t=e.query;console.log(t)},e}return Object(o.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j,{onSubmit:this.handleSearchQuery}),Object(h.jsx)("p",{children:"searchResults"}),Object(h.jsx)(b,{})]})}}]),r}(n.Component));r(14);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.92753379.chunk.js.map