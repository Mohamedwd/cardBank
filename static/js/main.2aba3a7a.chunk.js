(this["webpackJsonpbank-card"]=this["webpackJsonpbank-card"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/visa.d694b562.svg"},23:function(e,a,t){e.exports=t.p+"static/media/mastercard.c96af659.svg"},24:function(e,a,t){e.exports=t.p+"static/media/AMEX.44325959.svg"},33:function(e,a,t){e.exports=t.p+"static/media/credit-card.d4cb41a3.svg"},37:function(e,a,t){e.exports=t(52)},42:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var s=t(2),r=t.n(s),n=t(15),i=t.n(n),l=(t(42),t(1)),c=t(6),d=t(7),o=t(8),m=t(9),u=t(10),h=t(33),p=t.n(h),b=t(22),v=t.n(b),g=t(23),N=t.n(g),C=t(24),f=t.n(C),D=function(e){var a,t,s,n,i;switch(a=null!==e.cardNumber?e.cardNumber:"************0000",s=null!==e.holderName?e.holderName:"CARDHOLDER",e.type){case"visa":n=v.a,i="Visa";break;case"masterCard":n=N.a,i="Master Card";break;case"amex":n=f.a,i="Amex";break;default:n="",i=""}var l=function(e,a){var t,s=[],r=e.length;for(t=0;t<r;t+=a)s.push(e.substr(t,a));return s}(a,4);l.forEach((function(e,a,t){a!==l.length-1&&(t[a]="****")}));var c=function(e,a,t,s){var r=[],n=e.substr(0,a),i=e.substr(a,t),l=e.substr(a+t,s);return r.push(n),r.push(i),r.push(l),r}(a,4,6,5);return c.forEach((function(e,a,t){a!==c.length-1&&(t[a]="****",1===a&&(t[a]="******"))})),t="amex"===e.type?c.join(" "):l.join(" "),r.a.createElement("div",{className:(e.type?e.type:"")+" BankCard"},r.a.createElement("div",{className:"BankCardImg"},""!==n?r.a.createElement("img",{src:n,alt:i}):""),r.a.createElement("div",{className:"BankCardDetails"},r.a.createElement("p",null,t),r.a.createElement("p",null,s.toUpperCase())))},E=t(36),y=function(e){return r.a.createElement("div",{className:"selectTypes"},r.a.createElement(E.a,{options:e.options,closeMenuOnSelect:!0,components:e.animatedComponents,isMulti:!0,onChange:e.change,placeholder:"Select your card type...",className:"selectType"}))},x=t(35),w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={cardNumber:"",expiryDate:"",cvv:"",holderName:"",cardDetails:{type:"",number:""},allowedCards:[],options:[{value:"visa",label:"VISA",startingNum:"4000"},{value:"mastercard",label:"MASTERCARD",startingNum:"5555"},{value:"amex",label:"AMEX",startingNum:"3782"}],selectedCards:[],animatedComponents:Object(x.a)(),isDisabled:!0,isAllowed:!1,src:"",alt:""},t.changeCardDetailsHandler=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.changeCardNumberHandler=function(e){var a=t.state,s=a.selectedCards,r=a.isAllowed,n=t.state.cardDetails.number,i=e.target.value,l=null,c=i.substring(0,4);r=void 0!==s.find((function(e){return e.startingNum===c})),s.forEach((function(e){i.startsWith(e.startingNum)&&(i.startsWith("4000")?(l="visa",n=16):i.startsWith("5555")?(l="masterCard",n=16):i.startsWith("3782")&&(l="amex",n=15))})),t.setState({cardNumber:e.target.value,cardDetails:{type:l,number:n},isAllowed:r})},t.handleChange=function(e){var a=t.state.selectedCards,s=t.state,r=s.isDisabled,n=s.cardNumber,i=s.holderName,l=s.cvv,c=s.expiryDate,d=t.state.cardDetails.type;null===(a=e)?(r=!0,d=null,n="",i="",l="",c=""):r=!1,t.setState({selectedCards:a,cardNumber:n,holderName:i,cvv:l,expiryDate:c,isDisabled:r,cardDetails:{type:d}})},t}return Object(u.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e,a,t,s=this,n=this.state.cardDetails.type;switch(e=this.state.isDisabled?"customInput inputDisabled":"customInput",n){case"visa":a=v.a,t="Visa";break;case"masterCard":a=N.a,t="Master Card";break;case"amex":a=f.a,t="Amex";break;default:a=p.a,t="Creditcard Logo"}return r.a.createElement("div",{className:"App"},r.a.createElement(D,{cardNumber:this.state.cardNumber,holderName:this.state.holderName,type:this.state.cardDetails.type}),r.a.createElement(y,{submit:this.submitHandler,change:this.handleChange,options:this.state.options,animatedComponents:this.state.animatedComponents}),r.a.createElement("div",{className:"cardDetails"},r.a.createElement("div",{className:"cardName"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("input",{type:"text",className:e+" "+(this.state.isAllowed?"":"noAllowed"),onChange:function(e){return s.changeCardNumberHandler(e)},placeholder:"Card Number",maxLength:this.state.cardDetails.number,name:"cardNumber",disabled:this.state.isDisabled,value:this.state.cardNumber})),r.a.createElement("div",{className:"cardValid"},r.a.createElement("input",{type:"text",className:e,placeholder:"MM/YY",maxLength:"5",name:"expiryDate",onChange:function(e){return s.changeCardDetailsHandler(e)},disabled:this.state.isDisabled,value:this.state.expiryDate}),r.a.createElement("input",{type:"text",className:e,placeholder:"CVV",maxLength:"3",name:"cvv",onChange:function(e){return s.changeCardDetailsHandler(e)},disabled:this.state.isDisabled,value:this.state.cvv})),r.a.createElement("div",{className:"holderName"},r.a.createElement("input",{type:"text",className:e,placeholder:"Card Holder Name",name:"holderName",onChange:function(e){return s.changeCardDetailsHandler(e)},disabled:this.state.isDisabled,value:this.state.holderName}))),r.a.createElement("div",{className:"submitForm"},r.a.createElement("button",{disabled:!this.state.isAllowed||this.state.isDisabled},"Submit")))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.2aba3a7a.chunk.js.map