(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/3.f87ce96b.mp3"},30:function(e,t,n){e.exports=n.p+"static/media/4.4fd1255d.mp3"},41:function(e,t,n){e.exports=n(70)},46:function(e,t,n){},47:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(26),c=n.n(o),s=(n(46),n(6)),r=n(7),l=n(9),u=n(8),d=(n(47),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={name:"Buddy"},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.changeFunction()}},{key:"render",value:function(){var e={};return e=this.props.theme?{backgroundColor:"rgba(44,44,44,0.8)"}:{backgroundColor:"rgba(255,255,255,0.6)"},i.a.createElement("div",{style:e,className:"sidebar"},this.props.children)}}]),n}(a.Component)),m=[{active:!0,id:1,icon:"WbSunnySharpIcon",listName:"My Day",list:[],listCount:0},{active:!1,id:2,icon:"HomeSharpIcon",listName:"To-Do",list:["a","c"],listCount:0},{active:!1,id:3,icon:"LocalGroceryStoreSharpIcon",listName:"Grocery",list:[],listCount:0},{active:!1,id:4,icon:"ListSharpIcon",listName:"Others",list:[],listCount:0}],h=n(14),p=n.n(h);n(55),n(56),n(57);p.a.initializeApp({apiKey:"AIzaSyDgSlT3R2-b3ttE8S2noFpPhlO3qqxJdkY",authDomain:"todos-703b1.firebaseapp.com",databaseURL:"https://todos-703b1.firebaseio.com",projectId:"todos-703b1",storageBucket:"todos-703b1.appspot.com",messagingSenderId:"667809366567",appId:"1:667809366567:web:e08827c505d0dfe5e3c402",measurementId:"G-HR95GHMLEN"}),p.a.analytics();var f=p.a.firestore(),y=(p.a.auth(),p.a,n(27)),v=n.n(y),g=(n(58),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"detailbg"},i.a.createElement("div",{className:"detailbg__banner"},i.a.createElement("p",null,this.props.text),i.a.createElement(v.a,{onClick:this.props.setTheme})))}}]),n}(a.Component)),N=n(32),b=n.n(N),k=n(31),E=n.n(k),C=n(17),I=n.n(C),O=(n(64),n(29)),L=n.n(O),j=n(30),_=n.n(j),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).changeCheckItem=function(){var t=e.props.ind;e.props.changeChecked(t)},e.deleteItem=function(){var t=e.props.ind;e.props.deleteCheckedListItem(t),(e.props.isChecked?new Audio(L.a):new Audio(_.a)).play()},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.isChecked?{textDecoration:"line-through"}:{textDecoration:"none"};return i.a.createElement("div",{className:"detailItem"},i.a.createElement("div",{className:"detailitem__check"},this.props.isChecked?i.a.createElement(E.a,{onClick:this.changeCheckItem}):i.a.createElement(b.a,{onClick:this.changeCheckItem}),i.a.createElement("p",{style:e},this.props.texts)),i.a.createElement("div",{className:"detailItem__delete"},i.a.createElement(I.a,{onClick:this.deleteItem})))}}]),n}(a.Component),T=(n(65),n(19)),x=n.n(T),M=n(18),R=n.n(M),q=n(33),w=n.n(q),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={array:m},e.displaySidebar=function(){var e=document.getElementsByClassName("sidebar"),t=document.getElementsByClassName("menuIcon");"block"===e[0].style.display?(e[0].style.display="none",t[0].style.top="10px",t[0].style.bottom="10px"):(e[0].style.display="block",t[0].style.top="10px",t[0].style.bottom="10px")},e.deleteCheckedlist=function(t){var n=0;e.props.array.map((function(e){e.active&&(n=e.id-1)})),f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").get().then((function(e){e.docs.map((function(e){var a=e.data().listCheck;a.splice(t,1);var i=e.data().list;return i.splice(t,1),e.data().id===n+1?f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").doc(e.id).update({listCheck:a,list:i}):console.log(),null}))})),e.props.changeFunction()},e.changeCheckedlist=function(t){var n=0;e.props.array.map((function(e){e.active&&(n=e.id-1)})),f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").get().then((function(e){e.docs.map((function(e){var a=!e.data().listCheck[t],i=e.data().listCheck;return i[t]=a,e.data().id===n+1?f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").doc(e.id).update({listCheck:i}):console.log(),null}))})),e.props.changeFunction()},e.addListTodos=function(){var t=0;e.props.array.map((function(e){e.active&&(t=e.id-1)}));var n=document.getElementById("details__input").value,a=e.props.array[t].list;a.push(n);var i=e.props.array[t].listCheck;i.push(!1),f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").get().then((function(e){e.docs.map((function(e){return e.data().id===t+1?f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").doc(e.id).update({list:a,listCheck:i}):console.log("none"),null}))})),document.getElementById("details__input").value="",e.props.changeFunction()},e.handleKeyPress=function(t){"Enter"===t.key&&e.addListTodos()},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.array.map((function(t){var n=0;if(t.active)return t.list.map((function(a){return n+=1,i.a.createElement(S,{deleteCheckedListItem:e.deleteCheckedlist,changeChecked:e.changeCheckedlist,texts:a,ind:n-1,key:n-1,isChecked:t.listCheck[n-1]})}))})),n=this.props.array.map((function(e){if(e.active)return e.listName}));return i.a.createElement("div",{className:"details"},i.a.createElement(w.a,{className:"menuIcon",onClick:this.displaySidebar}),i.a.createElement("div",null,i.a.createElement(g,{setTheme:this.props.setTheme,theme:this.props.theme,text:n})),t,i.a.createElement("div",{className:"details__newList"},i.a.createElement("div",{className:"details__add"},i.a.createElement(R.a,null),i.a.createElement("input",{type:"text",id:"details__input",onKeyPress:this.handleKeyPress,placeholder:"Unanmed List"})),i.a.createElement("div",{className:"details__submitIcon"},i.a.createElement(x.a,{onClick:this.addListTodos}))))}}]),n}(a.Component),F=(n(66),n(39)),B=n.n(F),J=n(34),z=n.n(J),D=n(35),H=n.n(D),G=n(36),K=n.n(G),P=n(37),V=n.n(P),W=n(38),U=n.n(W),Y=(n(67),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).hoverOnEffect=function(t){e.props.active||"Sidebaritem"!==t.target.className||(e.props.theme?t.target.style.background="rgb(89, 89, 89)":t.target.style.background="lightgray")},e.hoverOffEffect=function(t){e.props.active||(e.props.theme,t.target.style.background="none",document.getElementsByClassName("Sidebaritem")[e.props.index].style.backgroundColor="none")},e}return Object(r.a)(n,[{key:"render",value:function(){var e={color:"rgb("+Math.floor(255*Math.random()+1)+","+Math.floor(255*Math.random()+1)+","+Math.floor(255*Math.random()+1)+")"},t={};return this.props.active&&(t=this.props.theme?{backgroundColor:" rgb(89, 89, 89)"}:{backgroundColor:"lightgray"}),i.a.createElement("div",{className:"Sidebaritem",onMouseEnter:this.hoverOnEffect,onMouseLeave:this.hoverOffEffect,style:t,onClick:this.props.activeFunction},i.a.createElement("div",{className:"sidebaritem__left"},"WbSunnySharpIcon"===this.props.icon?i.a.createElement(z.a,{style:e}):"HomeSharpIcon"===this.props.icon?i.a.createElement(H.a,{style:e}):"FitnessCenterSharpIcon"===this.props.icon?i.a.createElement(K.a,{style:e}):"LocalGroceryStoreSharpIcon"===this.props.icon?i.a.createElement(V.a,{style:e}):i.a.createElement(U.a,{style:e}),i.a.createElement("p",null,this.props.name)),i.a.createElement("div",{className:"sidebaritem__right"},i.a.createElement("p",null,this.props.count),this.props.id>3?i.a.createElement(I.a,{onClick:this.props.deleteFunction}):null))}}]),n}(a.Component)),$=(n(68),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={styl:{display:"none"},val:"NewList",list_Name:""},e.storeListName=function(t){e.setState({val:t.target.value})},e.changeActiveState=function(t){f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").get().then((function(e){e.docs.map((function(e){return e.data().id===t?f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").doc(e.id).update({active:!0}):f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").doc(e.id).update({active:!1}),null}))})),e.props.setFunction(),e.setState({array:e.props.array})},e.addElementHandler=function(){var t=e.props.array.slice(),n=e.props.array[t.length-1].id+1,a=document.getElementById("sidebar__input").value;document.getElementById("sidebar__input").value="",t.push({active:!0,id:n,icon:"ListSharpIcon",listName:a,list:[],listCheck:[],listCount:0}),""!==a&&(f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").collection("listNames").add({active:!0,id:n,icon:"ListSharpIcon",listName:a,list:[],listCheck:[],listCount:0}),e.setState({array:t})),e.changeInputValue(),e.setState({styl:{display:"none"}}),e.changeActiveState(t.length)},e.onFocusInputHandler=function(){e.changeInputValue(),e.setState({styl:{}})},e.onBlurInputHandler=function(t){""===t.target.value&&(e.changeInputValue(),e.setState({styl:{display:"none"}}))},e.changeInputValue=function(){"NewList"===e.state.val?e.setState({val:""}):e.setState({val:"NewList"})},e.deleteList=function(t){f.collection("users").get().then((function(e){var n=0;e.docs.map((function(e){f.collection("users").doc(e.id).collection("listNames").get().then((function(a){console.log(n,t),a.docs.map((function(a){console.log(a.data().id,a.id,t,n),a.data().id===t?f.collection("users").doc(e.id).collection("listNames").doc(a.id).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)})):console.log()})),n+=1})).catch((function(e){return console.log(e)}))}))})).catch((function(e){return console.log(e)})),e.props.setFunction()},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.array.map((function(t,n){return i.a.createElement(Y,{index:n,theme:e.props.theme,key:t.id,id:t.id,name:t.listName,icon:t.icon,count:t.list.length,active:t.active,deleteFunction:function(){return e.deleteList(t.id)},activeFunction:function(){return e.changeActiveState(t.id)}})}));return i.a.createElement("div",{className:"sidebarlist"},t,i.a.createElement("div",{className:"sidebar__newList"},i.a.createElement("div",{className:"sidebar__add"},i.a.createElement(R.a,null),i.a.createElement("input",{type:"text",id:"sidebar__input",onFocus:this.onFocusInputHandler,onBlur:function(t){return e.onBlurInputHandler(t)},onKeyPress:this.add,onChange:function(t){return e.storeListName(t)},value:this.state.val,placeholder:"Unanmed List"})),i.a.createElement("div",{className:"sidebar__submitIcon"},i.a.createElement(x.a,{onClick:this.addElementHandler,style:this.state.styl}))))}}]),n}(a.Component)),Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={array:[],name:"Buddy",isLightTheme:!1},e.setTheme=function(){if(e.state.isLightTheme)for(document.body.className="bodyLightTheme",t=document.getElementsByTagName("input"),n=0;n<t.length;n++)t[n].className="inputLightTheme";else{document.body.className="bodyDarkTheme";for(var t=document.getElementsByTagName("input"),n=0;n<t.length;n++)t[n].className="inputDarkTheme"}},e.changeTheme=function(){f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").update({lightTheme:!e.state.isLightTheme}),e.setState({isLightTheme:!e.state.isLightTheme}),e.setTheme()},e.setOfflineArray=function(){f.collection("users").get().then((function(t){t.docs.map((function(t){f.collection("users").doc(t.id).collection("listNames").get().then((function(t){var n=[];t.docs.map((function(e){n.push(e.data())})),n.sort((function(e,t){return e.id-t.id})),e.setState({array:n})})).catch((function(e){return console.log(e)}))}))})).catch((function(e){return console.log(e)}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setOfflineArray(),f.collection("users").doc("iNIR1xqLjNNqpzMkuRJO").get().then((function(t){var n=t.data().Name,a=t.data().lightTheme;""!==n&&e.setState({name:n,isLightTheme:a})})),this.changeTheme()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{theme:this.state.isLightTheme,array:this.state.array,changeFunction:this.setOfflineArray},i.a.createElement("div",{className:"sidebar__intro"},i.a.createElement(B.a,null),i.a.createElement("p",null,"Hi ",this.state.name)),i.a.createElement("div",{className:"sidebar__list"},i.a.createElement($,{theme:this.state.isLightTheme,array:this.state.array,setFunction:this.setOfflineArray,deleteFunction:this.deleteList,changeFunction:this.setOfflineArray}))),i.a.createElement(A,{setTheme:this.changeTheme,theme:this.state.isLightTheme,array:this.state.array,changeFunction:this.setOfflineArray}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.97c3f5c0.chunk.js.map