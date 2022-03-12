"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[219,569],{2569:function(n,i,e){e.r(i),e.d(i,{default:function(){return S}});var t,r,o,a,c,d,s,l=e(9439),p=e(2791),h=e(364),u=e(1856),m=e(6871),x=e(7394),g=e(168),f=e(5751),b=e(1880),w=e(3165),v=e(1110),y=(0,f.ZP)(v.E.div)(t||(t=(0,g.Z)(["\n  cursor: pointer;\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n  @media screen and (max-width: 440px) {\n    width: 45vw;\n    height: 250px;\n    margin-bottom: 1rem;\n  }\n"]))),Z=f.ZP.div(r||(r=(0,g.Z)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),(function(n){var i=n.imageUrl;return"url(".concat(i,")")})),k=(0,f.ZP)(b.default)(o||(o=(0,g.Z)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 75%;\n  border-radius: 2rem;\n  padding: 0.5rem 1rem;\n  width: 70%;\n  @media screen and (max-width: 800px) {\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0.2 0.4rem;\n    top: 80%;\n    height: 2.5rem;\n    font-size: 1rem;\n  }\n  @media screen and (max-width: 440px) {\n    display: none;\n  }\n"]))),j=((0,f.ZP)(w.r)(a||(a=(0,g.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),f.ZP.div(c||(c=(0,g.Z)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"])))),P=f.ZP.span(d||(d=(0,g.Z)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]))),C=f.ZP.span(s||(s=(0,g.Z)(["\n  width: 10%;\n  margin-bottom: 15px;\n"]))),z={visible:{y:0,opacity:1,transition:{type:"spring"}},hidden:{y:50,opacity:0},exit:{y:-50,opacity:0}},H=e(184),S=function(n){var i=n.item,e=n.title,t=void 0===e?"":e,r=i.name,o=i.price,a=i.imageUrl,c=(0,p.useState)(!1),d=(0,l.Z)(c,2),s=d[0],g=d[1],f=(0,m.s0)(),b=(0,m.TH)(),w=(0,h.I0)();return(0,H.jsxs)(y,{variants:z,initial:"hidden",animate:"visible",exit:"exit",onClick:function(){return f("".concat(b.pathname,"/").concat(t&&t.toLowerCase()+"/").concat(i.id))},onHoverStart:function(){return g(!0)},onHoverEnd:function(){return g(!1)},children:[(0,H.jsx)(Z,{className:"image",imageUrl:a}),(0,H.jsxs)(j,{className:"collection-footer",children:[(0,H.jsx)(P,{children:r}),(0,H.jsxs)(C,{children:[o,"$"]})]}),(0,H.jsx)(u.M,{initial:!1,children:s&&(0,H.jsx)(k,{whileHover:{scale:1.03},whileTap:{scale:.98},initial:{y:-30,opacity:0},animate:{y:s?0:30,opacity:1,transition:{type:"spring",stiffness:700,damping:70}},exit:{y:30,opacity:0,transition:{type:"spring",stiffness:700,damping:70}},onClick:function(){return w((0,x.jX)(i))},children:"Add to cart"},"button")})]})}},1880:function(n,i,e){e.r(i),e.d(i,{default:function(){return b}});var t,r,o,a,c=e(1413),d=e(5987),s=(e(2791),e(168)),l=e(5751),p=e(1110),h=(0,l.iv)(t||(t=(0,s.Z)(["\n  background-color: black;\n  color: white;\n  border: none;\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),u=(0,l.iv)(r||(r=(0,s.Z)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),m=(0,l.iv)(o||(o=(0,s.Z)(["\n  background-color: #4285f4;\n  color: white;\n  border: none;\n  &:hover {\n    background-color: #357ae8;\n  }\n"]))),x=(0,l.ZP)(p.E.button)(a||(a=(0,s.Z)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ',"\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    font-size: 18px;\n    line-height: 30px;\n    width: 100%;\n    padding: 0 25px;\n  }\n"])),(function(n){return n.googleSignIn?m:n.inverted?u:h})),g=e(184),f=["children"],b=function(n){var i=n.children,e=(0,d.Z)(n,f);return(0,g.jsx)(x,(0,c.Z)((0,c.Z)({},e),{},{children:i}))}},4219:function(n,i,e){e.r(i),e.d(i,{default:function(){return u}});e(2791);var t,r,o,a=e(2569),c=e(168),d=e(5751),s=d.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]))),l=d.ZP.h1(r||(r=(0,c.Z)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n"]))),p=d.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 1rem;\n  }\n"]))),h=e(184),u=function(n){var i=n.title,e=n.items;return(0,h.jsxs)(s,{children:[(0,h.jsx)(l,{children:i.toUpperCase()}),(0,h.jsx)(p,{children:e.filter((function(n,i){return i<4})).map((function(n){return(0,h.jsx)(a.default,{item:n,title:i},n.id)}))})]})}}}]);
//# sourceMappingURL=219.97dd58ab.chunk.js.map