"use strict";(self.webpackChunkvedalaya=self.webpackChunkvedalaya||[]).push([[303],{9078:function(e,s,i){i(2791);var a=i(184);s.Z=function(){return(0,a.jsxs)("div",{className:"loading",children:[(0,a.jsx)("div",{className:"loading-chip loading-chip--1"}),(0,a.jsx)("div",{className:"loading-chip loading-chip--2"}),(0,a.jsx)("div",{className:"loading-chip loading-chip--3"})]})}},566:function(e,s,i){i.r(s),i.d(s,{default:function(){return h}});var a=i(1413),t=i(885),d=i(2791),n=(i.p,i(501)),r=i(6871),l=i(5431),c=i(8617),o=i(9976),_=i(3482),p=i(3540),m=i(9078),x=i(6659),u=i(184),h=function(){var e=(0,r.s0)(),s=(0,d.useState)({}),i=(0,t.Z)(s,2),h=i[0],g=i[1],j=(0,d.useState)(!0),v=(0,t.Z)(j,2),y=v[0],N=v[1],f=(0,r.UO)();return(0,d.useEffect)((function(){var e,s,i=new AbortController,t=f.id;return e="".concat(t,"/"),N(!0),(0,o.KL)(e,s).then((function(e){e.response.ok?(g((0,a.Z)({},e.json)),N(!1)):(0,_.Z)("error","Failed to get product details!")})).catch((function(e){(0,_.Z)("error","Failed to get product details!")})),function(){i.abort()}}),[f.id]),y?(0,u.jsx)("div",{className:"product-details",style:{alignItems:"flex-start",justifyContent:"flex-start"},children:(0,u.jsx)("div",{style:{marginTop:"0px",width:"100%",height:"100px",display:"flex",padding:"60px 0 0px 0"},children:(0,u.jsx)(m.Z,{})})}):(0,u.jsxs)("div",{className:"product-details",children:[(0,u.jsxs)("div",{className:"product-details__nav-info",children:[(0,u.jsx)(n.rU,{to:"/products",style:{paddingRight:"4px"},children:"category"})," ",(0,u.jsxs)("span",{children:["/ ",h&&h.category_details&&h.category_details.name?h.category_details.name:"unknown"]})]}),(0,u.jsx)("div",{className:"divider"}),(0,u.jsxs)("div",{className:"product-details__body",children:[(0,u.jsx)("div",{className:"product-details__body__left",children:(0,u.jsx)("div",{className:"product-image",style:{backgroundImage:"url(".concat(h&&h.images_details&&h.images_details[0]&&h.images_details[0].image?h.images_details[0].image:"http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png",")")}})}),(0,u.jsxs)("div",{className:"product-details__body__right",children:[(0,u.jsx)("div",{className:"product-details__body__right__header",children:h&&h.name?h.name:"unknown"}),(0,u.jsx)("div",{className:"separator"}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{className:"product-details__body__right__category",style:{width:"100%"},children:(0,u.jsxs)("div",{className:"port-item",children:[(0,u.jsx)("div",{className:"port-item__title",children:(0,u.jsx)("span",{children:"Category"})}),(0,u.jsxs)("div",{className:"port-item__date",style:{width:"100%"},children:[(0,u.jsx)("div",{className:"dot"}),(0,u.jsx)("span",{style:{marginLeft:"5px"},children:h&&h.category_details&&h.category_details.name?h.category_details.name:"unknown"})]})]})}),(0,u.jsx)("div",{className:"divider"}),(0,u.jsxs)("div",{className:"product-details__body__right__description",children:[(0,u.jsx)("div",{className:"product-details__body__right__description__header",children:(0,u.jsx)("span",{children:"Description"})}),(0,u.jsx)("div",{className:"product-details__body__right__description__content",children:(0,u.jsx)("span",{children:h&&h.description?(0,p.ZP)(h.description):""})}),(0,u.jsx)("br",{}),(0,u.jsxs)("button",{onClick:function(){e("/contact",{state:{fromProduct:!0,productId:f.id,productName:h&&h.name?h.name:"unknown",queryType:"product",page:"".concat(x.Z.BASE_URL,"/product/").concat(f.id)}})},className:"btn btn-primary rounded",children:["Contact us for more info ",(0,u.jsx)(c.T7S,{style:{marginLeft:"5px",fontSize:"20px"}})]}),(0,u.jsx)("br",{})]}),(0,u.jsx)("div",{className:"divider"}),(0,u.jsxs)("div",{className:"product-details__body__right__timeline",children:[(0,u.jsxs)("div",{className:"port-item",children:[(0,u.jsx)("div",{className:"port-item__title",children:(0,u.jsx)("span",{children:"Colors"})}),h&&h.colors_details&&h.colors_details.map((function(e){return(0,u.jsxs)("div",{className:"port-item__date",children:[(0,u.jsx)("div",{className:"color",style:{backgroundColor:e.hex_code?e.hex_code:"gray"}})," ",e&&e.name?e.name.toUpperCase():""]})}))]}),(0,u.jsxs)("div",{className:"port-item",children:[(0,u.jsx)("div",{className:"port-item__title",children:(0,u.jsx)("span",{children:"Materials"})}),h&&h.materials_details&&h.materials_details.map((function(e){return(0,u.jsxs)("div",{className:"port-item__date",children:[(0,u.jsx)(l.ED7,{})," ",e.name?e.name.toUpperCase():""]})}))]})]}),(0,u.jsx)("div",{className:"divider"}),(0,u.jsx)("div",{className:"product-details__body__right__description__header",style:{padding:"15px 0px 5px 0px"},children:(0,u.jsx)("span",{children:"Sample Images"})}),(0,u.jsx)("div",{className:"product-details__body__right__images",children:h&&h.images_details&&h.images_details.map((function(e,s){return(0,u.jsx)("div",{onClick:function(){return window.open(e.image,"_blank")},className:"product-details__body__right__images__image",style:{backgroundImage:"url(".concat(e.image,")")}},s)}))}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{className:"divider"}),(0,u.jsx)("div",{className:"product-details__body__right__description__header",style:{padding:"15px 0px 5px 0px"},children:(0,u.jsx)("span",{children:"Similar Products"})}),(0,u.jsx)("div",{className:"products__body__product-list",style:{padding:"10px 0px 0px 0px"},children:h&&h.recommended_details&&h.recommended_details.map((function(s,i){return(0,u.jsxs)("div",{class:"recomendation-card",style:{marginLeft:"10px",marginRight:"10px"},children:[(0,u.jsxs)("nav",{children:["PRODUCT TYPE : ",(0,u.jsx)("b",{style:{marginLeft:"5px"},children:s&&s.materials_details&&s.materials_details[0]?s.materials_details[0].name:"unknown"})]}),(0,u.jsxs)("div",{className:"content",style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{class:"photo",style:{backgroundImage:"".concat(s&&s.images_details&&s.images_details[0]?"url(".concat(s.images_details[0].image,")"):"url(http://www.artamis.be/wp-content/uploads/2014/04/default_image_01.png)")}}),(0,u.jsxs)("div",{class:"description",children:[(0,u.jsx)("h1",{children:s&&s.name?s.name:"unknown"}),(0,u.jsx)("h2",{style:{padding:"5px 0px 5px 0px"},children:s&&s.colors&&s.colors[0]?s.colors_details[0].name:"none"}),(0,u.jsx)("p",{children:s&&s.description?(0,p.ZP)(s.description.substring(0,95)):"none"}),(0,u.jsx)("div",{className:"button-group",children:(0,u.jsx)("button",{onClick:function(){e("/product/".concat(s.id))},className:"btn-primary-outlined",children:"Details"})})]})]})]},i)}))})]})]})]})}}}]);
//# sourceMappingURL=303.5034f643.chunk.js.map