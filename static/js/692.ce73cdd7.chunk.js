"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[692],{8910:function(n,e,i){i.r(e),i.d(e,{default:function(){return Q}});var t,r,a,o,s,l,d,c,p,x,h,f,m=i(2791),u=i(184),g=function(){return(0,u.jsx)("div",{children:"ModalCongrats"})},j=i(7381),y=function(){return(0,u.jsx)("div",{children:"PetsList"})},b=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{children:"PetsData"}),(0,u.jsx)(j.Z,{}),(0,u.jsx)(y,{})]})},w=i(9439),v=i(458),Z=i(168),P=i(6487),z=P.ZP.button(t||(t=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.64px;\n  color: #888888;\n  background-color: transparent;\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  svg {\n    width: 24px;\n    height: 24px;\n    fill: #54adff;\n    transform: rotateX(180deg);\n  }\n  &:hover,\n  &:focus {\n    color: #ffc107;\n    svg {\n      fill: #ffc107;\n    }\n  }\n"]))),C=function(){return(0,u.jsx)("div",{style:{marginTop:"25px"},children:(0,u.jsxs)(z,{type:"button",children:[(0,u.jsx)(v.GAI,{}),"Log Out"]})})},F=i(1413),k=i(5705),B=(i(2471),i(9126)),_=P.ZP.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n    justify-content: space-evenly;\n    gap: 63px;\n  }\n  @media screen and (min-width: 1200px) {\n    flex-direction: column;\n  }\n"]))),q=P.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 22px;\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n  }\n"]))),N=P.ZP.img(o||(o=(0,Z.Z)(["\n  display: block;\n  margin: auto;\n  width: 182px;\n  height: 182px;\n  border-radius: 40px;\n"]))),S=P.ZP.input(s||(s=(0,Z.Z)(["\n  opacity: 0;\n  width: 0.1px;\n  height: 0.1px;\n"]))),D=P.ZP.label(l||(l=(0,Z.Z)(["\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  letter-spacing: 0.48px;\n  color: #111;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  svg {\n    width: 24px;\n    height: 24px;\n    fill: #54adff;\n    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:hover {\n    color: #ffc107;\n    svg {\n      fill: #ffc107;\n    }\n  }\n"]))),E=P.ZP.div(d||(d=(0,Z.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  label {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: normal;\n    letter-spacing: 0.56px;\n    @media screen and (min-width: 768px) {\n      font-size: 18px;\n      letter-spacing: 0.72px;\n    }\n  }\n  input {\n    display: flex;\n    width: 190px;\n    padding: 4px 12px;\n    align-items: center;\n    gap: 191px;\n    border-radius: 20px;\n    border: 1px solid #54adff;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 0.48px;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n      border-color: #ffc107;\n      outline: transparent;\n    }\n    @media screen and (min-width: 768px) {\n      width: 255px;\n      height: 30px;\n      font-size: 16px;\n    }\n  }\n"]))),T=P.ZP.button(c||(c=(0,Z.Z)(["\n  display: flex;\n  width: 248px;\n  padding: 6px 107px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 40px;\n  background: #54adff;\n  border-color: transparent;\n  color: #fef9f9;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 0.56px;\n  cursor: pointer;\n  margin: auto;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);\n  }\n"]))),L=P.ZP.p(p||(p=(0,Z.Z)(["\n  position: absolute;\n  top: -100%;\n  left: 25%;\n  color: red;\n  font-size: 10px;\n  @media screen and (min-width: 768px) {\n    top: -65%;\n  }\n  @media screen and (min-width: 1200px) {\n    left: 32%;\n  }\n"]))),$=i(6727),R=$.Ry().shape({name:$.Z_().required("Please, enter your name"),email:$.Z_().email("Enter correct email").required("Please, enter your email"),birthday:$.Z_().matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,"Correct format: dd.mm.yyyy").test("is-date-valid",(function(){return"Future date not allowed"}),(function(n){if(n){var e=n.split(".");return new Date("".concat(e[2],".").concat(e[1],".").concat(e[0])).getTime()<Date.now()}return!0})).required("Birthday is required"),phone:$.Z_().matches(/^(\+380\d{9})$/,"Enter the phone number +380...").required("Please, enter your phone"),city:$.Z_().required("Please, enter your city")}),A=i.p+"static/media/Photo default.1f5f01ed6c627d4d4e3e.jpg",I={name:"",email:"",birthday:"",phone:"",city:""},K=function(n){var e=n.disabled,i=n.confirmClose,t=n.showConfirm,r=(0,m.useState)(),a=(0,w.Z)(r,2),o=a[0],s=a[1],l=function(n){"confirm"===n.target.id?i(!0):"cancel"===n.target.id&&i(!1)};return(0,u.jsx)(k.J9,{initialValues:I,onSubmit:function(n,e){var i=(0,F.Z)({avatar:o},n);console.log(i)},validationSchema:R,children:(0,u.jsx)(k.l0,{children:(0,u.jsxs)(_,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(N,{src:o||A}),!e&&!t&&(0,u.jsxs)("div",{style:{marginTop:"15px"},children:[(0,u.jsxs)(D,{htmlFor:"file",children:[(0,u.jsx)(B.BB5,{}),"Edit photo"]}),(0,u.jsx)(S,{type:"file",id:"file",accept:"image/*",onChange:function(n){var e=(0,w.Z)(n.target.files,1)[0];e&&s(URL.createObjectURL(e))}})]}),t&&(0,u.jsxs)("div",{style:{marginTop:"15px",display:"flex",justifyContent:"center"},children:[(0,u.jsx)(B.IQF,{id:"confirm",style:{fill:"#54ADFF",width:"24px",height:"24px"},onClick:l}),(0,u.jsx)(B.z3f,{id:"cancel",style:{fill:"#F43F5E",width:"24px",height:"24px"},onClick:l})]})]}),(0,u.jsxs)(q,{children:[(0,u.jsxs)(E,{children:[(0,u.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,u.jsx)(k.gN,{type:"text",name:"name",placeholder:"Kate",disabled:e}),(0,u.jsx)(k.Bc,{name:"name",component:L})]}),(0,u.jsxs)(E,{children:[(0,u.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,u.jsx)(k.gN,{type:"email",name:"email",placeholder:"Kate@mail.com",disabled:e}),(0,u.jsx)(k.Bc,{name:"email",component:L})]}),(0,u.jsxs)(E,{children:[(0,u.jsx)("label",{htmlFor:"birthday",children:"Birthday:"}),(0,u.jsx)(k.gN,{name:"birthday",type:"text",placeholder:"dd.mm.yyyy",disabled:e}),(0,u.jsx)(k.Bc,{name:"birthday",component:L})]}),(0,u.jsxs)(E,{children:[(0,u.jsx)("label",{htmlFor:"phone",children:"Phone:"}),(0,u.jsx)(k.gN,{type:"tel",name:"phone",placeholder:"+380...",disabled:e}),(0,u.jsx)(k.Bc,{name:"phone",component:L})]}),(0,u.jsxs)(E,{children:[(0,u.jsx)("label",{htmlFor:"city",children:"City:"}),(0,u.jsx)(k.gN,{type:"text",name:"city",placeholder:"Ternopil",disabled:e}),(0,u.jsx)(k.Bc,{name:"city",component:L})]}),!e&&(0,u.jsx)(T,{type:"submit",children:"Save"})]})]})})})},M=i(7692),O=i(1545),U=P.ZP.div(x||(x=(0,Z.Z)(["\n  position: relative;\n  padding: 16px;\n  border-radius: 40px;\n  background: #fff;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n  @media screen and (min-width: 768px) {\n    width: 704px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 395px;\n    height: max-content;\n  }\n"]))),V=P.ZP.button(h||(h=(0,Z.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  border: none;\n  margin: 0;\n  padding: 0;\n  outline: transparent;\n  background-color: transparent;\n  cursor: pointer;\n  svg {\n    width: 24px;\n    height: 24px;\n    fill: #54adff;\n  }\n  &:hover {\n    svg {\n      transform: scale(0.8);\n    }\n  }\n  @media screen and (min-width: 768px) {\n    right: 18px;\n  }\n"]))),G=P.ZP.h2(f||(f=(0,Z.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.8px;\n  color: #000000;\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n  }\n"]))),J=function(){var n=(0,m.useState)(!0),e=(0,w.Z)(n,2),i=e[0],t=e[1],r=(0,m.useState)(!1),a=(0,w.Z)(r,2),o=a[0],s=a[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("section",{children:[(0,u.jsx)(G,{children:"My information:"}),(0,u.jsxs)(U,{children:[i?(0,u.jsx)(V,{onClick:function(){return t(!1)},children:(0,u.jsx)(M.vpV,{})}):(0,u.jsx)(V,{onClick:function(){return s(!0)},children:(0,u.jsx)(O.Der,{})}),(0,u.jsx)(K,{disabled:i,showConfirm:o,confirmClose:function(n){s((function(n){return!n})),t(n)}}),i&&(0,u.jsx)(C,{})]})]})})},Q=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(J,{}),(0,u.jsx)(b,{}),(0,u.jsx)(g,{})]})}}}]);
//# sourceMappingURL=692.ce73cdd7.chunk.js.map