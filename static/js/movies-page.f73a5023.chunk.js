(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{66:function(e,t,a){e.exports={SearchForm:"Searchbar_SearchForm__2eLlj",SearchInput:"Searchbar_SearchInput__1wuFC",SearchButton:"Searchbar_SearchButton__1ePHA"}},70:function(e,t,a){"use strict";a.r(t);var n=a(32),c=a(33),r=a(35),s=a(34),i=a(0),o=a(9),u=a(2),h=a(38),l=a.n(h),p=a(66),m=a.n(p),b=a(1),j=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.resetState()},e.resetState=function(){e.setState({inputValue:""})},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{value:this.state.inputValue,onChange:this.handleChange,className:m.a.SearchInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Input movie name"}),Object(b.jsx)("button",{type:"submit",className:m.a.SearchButton,children:"Search"})]})}}]),a}(i.Component),v=a(7),f=a.n(v),S=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e.getMovies=function(t){l.a.get("https://api.themoviedb.org/3/search/movie?api_key=7116d13f34d25e4b272adb87a6322482&query=".concat(t,"&page=1&language=en-US")).then((function(t){e.setState({movies:t.data.results})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.location;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{onSubmit:this.getMovies}),Object(b.jsx)("div",{className:f.a.Movies,children:Object(b.jsx)("ul",{className:f.a.List,children:this.state.movies.map((function(t){return Object(b.jsx)("li",{className:f.a.MoviesItem,children:Object(b.jsx)(o.b,{to:{pathname:"/movies/".concat(t.id),state:{from:e}},className:f.a.MoviesLink,children:t.title})},t.id)}))})})]})}}]),a}(i.Component);t.default=Object(u.f)(S)}}]);
//# sourceMappingURL=movies-page.f73a5023.chunk.js.map