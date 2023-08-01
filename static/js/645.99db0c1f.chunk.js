"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[645],{1462:function(n,e,t){t.d(e,{Z:function(){return P}});var r,i,o,a,p,s,c=t(9439),d=t(2791),l=t(168),u=t(6487),x=t(1213),f=t(458),g=u.ZP.form(r||(r=(0,l.Z)(["\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 auto;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin-top: 40px;\n  }\n"]))),h=u.ZP.input(i||(i=(0,l.Z)(["\n  width: 100%;\n  max-height: 44px;\n\n  padding-top: 14px;\n  padding-bottom: 13px;\n  padding-left: 20px;\n\n  color: #888888;\n\n  background-color: #fff;\n  border-radius: 24px;\n  border: none;\n  outline: none;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:hover {\n    box-shadow: 7px 13px 14px 0px rgba(116, 177, 232, 0.24);\n  }\n\n  &::placeholder {\n    font-size: 14px;\n    font-style: 'Inter-Regular', sans-serif;\n  }\n"]))),m=u.ZP.button.withConfig({shouldForwardProp:function(n){return"query"!==n}})(o||(o=(0,l.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: transparent;\n  border: none;\n\n  transform: ",";\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"])),(function(n){return n.query&&"translateX(-27px)"})),b=(0,u.ZP)(f.w75)(a||(a=(0,l.Z)(["\n  color: #54adff;\n  width: 24px;\n  height: 24px;\n  stroke-width: 0.35;\n"]))),w=(0,u.ZP)(m).withConfig({shouldForwardProp:function(n){return"query"!==n}})(p||(p=(0,l.Z)(["\n  right: 13px;\n\n  transform: translateX(0);\n  opacity: ",";\n\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"])),(function(n){return n.query?1:0})),y=(0,u.ZP)(x.ySC)(s||(s=(0,l.Z)(["\n  color: #ffc107;\n  width: 24px;\n  height: 24px;\n"]))),Z=t(9434),j=t(398),v=t(184),P=function(){var n=(0,d.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],i=(0,Z.I0)();return(0,v.jsxs)(g,{onSubmit:function(n){n.preventDefault(),i((0,j.Tj)(n.currentTarget.elements.query.value)),console.log(n.currentTarget.elements.query.value)},children:[(0,v.jsx)(h,{type:"text",name:"query",id:"searchQuery",placeholder:"Search",onChange:function(n){var e=n.target.value;r(e)},value:t}),(0,v.jsx)(m,{type:"submit","aria-label":"Submit",query:t,children:(0,v.jsx)(b,{})}),(0,v.jsx)(w,{type:"button",onClick:function(){return r("")},query:t,"aria-label":"Discard query",children:(0,v.jsx)(y,{})})]})}},1992:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,i,o,a,p,s,c,d,l=t(2791),u=t(9434),x=t(9776),f=function(n){return n.news.isLoadingNews},g=function(n){return n.news.news},h=t(168),m=t(6487),b=m.ZP.h1(r||(r=(0,h.Z)(["\n  margin-top: 40px;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n    margin-top: 80px;\n  }\n"]))),w=t(1462),y=t(9439),Z=t.p+"static/media/default.042eb33250ef1f00c912.png",j=m.ZP.h2(i||(i=(0,h.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n  margin-bottom: 16px;\n  color: #111111;\n"]))),v=m.ZP.img(o||(o=(0,h.Z)(["\n  background: url('../NewsSearch/default.png');\n  background-position: center;\n  background-size: cover;\n  border-radius: 20px;\n  margin-bottom: 16px;\n  height: 252px;\n  width: 100%;\n  object-fit: cover;\n"]))),P=m.ZP.ul(a||(a=(0,h.Z)(["\n  list-style: none;\n  margin-top: 40px;\n  display: grid;\n  grid-row-gap: 60px;\n  grid-template-columns: repeat(1, 1fr);\n  padding: 0;\n\n  &:before {\n    // display: block;\n    content: '';\n    width: 280px;\n    color: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n    border-radius: 40px;\n    height: 8px;\n    position: absolute;\n  }\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 32px;\n    grid-row-gap: 60px;\n    margin-top: 60px;\n  }\n  @media (min-width: 1280px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]))),k=m.ZP.li(p||(p=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  padding: 12px;\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n\n  @media (min-width: 768px) {\n    min-width: 336px;\n  }\n  @media (min-width: 1280px) {\n    min-width: 395px;\n  }\n"]))),q=m.ZP.p(s||(s=(0,h.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #111111;\n  margin-bottom: auto;\n"]))),z=m.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  margin-top: 40px;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),S=m.ZP.a(d||(d=(0,h.Z)(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: right;\n  color: #54adff;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: #ffc107;\n  }\n"]))),C=t(4630),N=function(n){var e=n.slice(0,10).split("-"),t=(0,y.Z)(e,3),r=t[0],i=t[1],o=t[2];return"".concat(o,"/").concat(i,"/").concat(r)},_=t(184),F=function(n){var e=n.news,t=(0,u.v9)(f),r=(0,l.useState)([]),i=(0,y.Z)(r,2),o=i[0],a=i[1];return(0,l.useEffect)((function(){e.length<=0||a(e)}),[e]),(0,_.jsx)(_.Fragment,{children:t?(0,_.jsx)(C.Z,{}):(0,_.jsxs)(P,{children:[o.length>0&&o.map((function(n){var e=n.url,t=n.title,r=n.imgUrl,i=n.text,o=n.date;return(0,_.jsxs)(k,{children:[(0,_.jsx)(v,{src:r||Z,alt:t}),(0,_.jsx)(j,{children:t}),(0,_.jsx)(q,{children:i}),(0,_.jsxs)(z,{children:[(0,_.jsx)("p",{children:N(o)}),(0,_.jsx)(S,{href:e,target:"_blank",rel:"noreferrer noopener",children:"Read more"})]})]},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}())})),0===o.length&&(0,_.jsx)("div",{children:"No news found at your request"})]})})},I=function(){var n=(0,u.v9)(g),e=(0,u.I0)();return(0,l.useEffect)((function(){e((0,x.d)())}),[e]),(0,_.jsxs)("div",{children:[(0,_.jsx)(b,{children:"News"}),(0,_.jsx)(w.Z,{}),(0,_.jsx)(F,{news:n})]})}}}]);
//# sourceMappingURL=645.99db0c1f.chunk.js.map