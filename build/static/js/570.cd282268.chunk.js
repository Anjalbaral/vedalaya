"use strict";(self.webpackChunkvedalaya=self.webpackChunkvedalaya||[]).push([[570],{8456:function(e,n){n.Z=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}},4581:function(e,n,s){s.r(n),s.d(n,{default:function(){return p}});var a=s(4942),t=s(1413),c=s(885),i=s(2791),o=s.p+"static/media/linebuildings.01bcf39b9b68e9a1e541.png",r=s(6856),l=s(6036),d=s(4373),m=s(8456),h=s(3482),u=s(2893),x=s(184),j={name:"",email:"",phone:"",message:""};var p=function(){var e=(0,i.useState)((0,t.Z)({},j)),n=(0,c.Z)(e,2),s=n[0],p=n[1],v=(0,i.useState)({}),_=(0,c.Z)(v,2),f=_[0],b=_[1],g=function(e){var n=e.target.name,c=e.target.value;b((0,t.Z)((0,t.Z)({},f),{},(0,a.Z)({},n,""))),p((0,t.Z)((0,t.Z)({},s),{},(0,a.Z)({},n,c)))},y=function(e){var n=e.name,s=e.email,a=e.phone,t=e.message,c={};return(0,m.Z)(n)&&(c.name="Name cannot be empty!"),(0,m.Z)(s)&&(c.email="Email cannot be empty!"),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(s)||(c.email="Provide valid email"),(0,m.Z)(a)&&(c.phone="Phone number cannot be empty!"),(0,m.Z)(t)&&(c.message="Message cannot be empty!"),{isValid:(0,m.Z)(c),errors:c}};return(0,x.jsx)("div",{className:"connect-with-us-section",children:(0,x.jsxs)("div",{className:"connect-with-us-section__body",children:[(0,x.jsx)("img",{src:o}),(0,x.jsxs)("div",{className:"connect-with-us-section__body__content",children:[(0,x.jsxs)("div",{className:"connect-with-us-section__body__content__A",children:[(0,x.jsx)("div",{className:"connect-with-us-section__body__content__A__top",children:(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Message Us"}),(0,x.jsx)(d.fNt,{})]})}),(0,x.jsxs)("div",{className:"connect-with-us-section__body__content__A__bottom",children:[(0,x.jsx)("div",{className:"our-info",children:(0,x.jsx)("span",{children:"If you are looking for a construction company that can provide you with the quality services you need at a price you can afford, contact us today."})}),(0,x.jsxs)("div",{className:"contact-details",children:[(0,x.jsxs)("div",{className:"phone",children:[(0,x.jsx)("span",{children:"(+977)9816177889"}),(0,x.jsx)(r.IXo,{})]}),(0,x.jsxs)("div",{className:"email",children:[(0,x.jsx)("span",{children:"vedalayatrading@gmail.com"}),(0,x.jsx)(r.h6V,{})]}),(0,x.jsxs)("div",{className:"address",children:[(0,x.jsx)("span",{children:"Town Planning, Sanothimi, Bhaktapur"}),(0,x.jsx)(r.Ys1,{})]}),(0,x.jsxs)("div",{className:"socials",children:[(0,x.jsx)(l.tue,{}),(0,x.jsx)(l.kgk,{}),(0,x.jsx)(l.EEK,{}),(0,x.jsx)(l.E_e,{className:"facebook"})]})]})]})]}),(0,x.jsxs)("div",{className:"connect-with-us-section__body__content__B",children:[(0,x.jsxs)("div",{className:"name ".concat(!(0,m.Z)(f.name)&&"error-field"),children:[(0,x.jsx)("b",{children:"Name"}),(0,x.jsx)("input",{type:"text",name:"name",placeholder:"full name...",value:s.name,onChange:g})]}),(0,x.jsxs)("div",{className:"email ".concat(!(0,m.Z)(f.email)&&"error-field"),children:[(0,x.jsx)("b",{children:"Email"}),(0,x.jsx)("input",{type:"text",name:"email",placeholder:"valid email...",value:s.email,onChange:g})]}),(0,x.jsxs)("div",{className:"phone ".concat(!(0,m.Z)(f.phone)&&"error-field"),children:[(0,x.jsx)("b",{children:"Phone"}),(0,x.jsx)("input",{type:"text",name:"phone",placeholder:"phone number...",value:s.phone,onChange:g})]}),(0,x.jsxs)("div",{className:"message ".concat(!(0,m.Z)(f.message)&&"error-field"),children:[(0,x.jsx)("b",{children:"Message"}),(0,x.jsx)("textarea",{type:"text",name:"message",className:"message",placeholder:"",value:s.message,onChange:g})]}),(0,x.jsx)("button",{className:"btn-primary-outlined",onClick:function(){var e=y(s),n=e.isValid,a=e.errors;if(!n)return b(a),void(0,h.Z)("error","validation error!");(function(e,n,s){try{return(0,u.z)("/content/forms/".concat(n&&n),"POST",e,s)}catch(a){}})({name:s.name,contact:s.phone,email:s.email,message:s.message},"").then((function(e){e.response.ok?(p((0,t.Z)({},j)),b({}),(0,h.Z)("success","Form submitted successfully!")):(0,h.Z)("error",e.json.error)})).catch((function(e){(0,h.Z)("error",e)}))},children:"Submit"})]})]})]})})}}}]);
//# sourceMappingURL=570.cd282268.chunk.js.map