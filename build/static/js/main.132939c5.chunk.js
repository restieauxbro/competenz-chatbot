(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(12),o=n.n(c),s=n(10),r=n(22),l=n(23),h=(n(17),n(2)),d=function(){var t=Object(a.useState)(!1),e=Object(s.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)(!1),o=Object(s.a)(c,2),d=o[0],j=o[1],f=window.location.search;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"total-chatbot-cnt",children:Object(h.jsxs)("div",{className:"center-chatbot",children:[Object(h.jsx)(u,{openCallout:d,setOpenCallout:j,openChat:n,setOpenChat:i}),Object(h.jsx)(r.a.div,{whileHover:{scale:1.05},whileTap:{scale:.99},initial:{opacity:0},animate:{opacity:1,transition:b},className:"chat-container",children:Object(h.jsx)("div",{className:"chat-button",onClick:function(){i(!n)},children:Object(h.jsxs)("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 84 83",children:[Object(h.jsx)("rect",{width:"84",height:"56",fill:"#fff",rx:"8"}),Object(h.jsx)("path",{fill:"#fff",d:"M43 50h41v33L43 50z",opacity:".7"})]})})}),Object(h.jsx)(l.a,{children:n&&Object(h.jsxs)(r.a.div,{className:"chat-box-cnt",variants:m,initial:"initial",animate:"animate",exit:{opacity:0,height:0},children:[Object(h.jsx)("div",{className:"chat-box",children:Object(h.jsx)(r.a.iframe,{variants:n?p:x,width:"100%",height:"100%",src:"https://pc792805.typeform.com/c/V4mLSLvr".concat(f)})}),Object(h.jsx)(r.a.div,{variants:n?p:x,className:"exit",onClick:function(){return i(!1)},children:"+"})]})})]})})})},u=function(t){var e=t.openCallout,n=t.setOpenCallout,i=t.openChat,c=t.setOpenChat,o=Object(a.useState)(""),d=Object(s.a)(o,2),u=d[0],j=d[1];function m(t,e){setTimeout((function(){"true"!==sessionStorage.getItem("exitedCallout")&&n(!0)}),t),function(t){setTimeout((function(){n(!1)}),t)}(e)}return Object(a.useEffect)((function(){!function(t){var e=t.pathname;"/"===e?j("<strong>Nau mai, haere mai </strong> <br/> let us know how we can help."):"/jobseekers/finding-a-job"===e?j("<strong> Didn't find a job you wanted? </strong> <br/> <br/>Register with us and stay updated."):"/reform-of-vocational-education"===e?j("<strong>Got a question about RoVE?</strong><br/> <br/> Let us know!"):t.href.indexOf("employers")>-1?j("<strong>Ready to get started? </strong> <br/> Connect with an advisor."):j("<strong>Nau mai haere mai </strong> <br/> let us know how we can help.")}(window.location),function(t){var e=t.pathname;"/"===e?m(4e3,16e3):"/jobseekers/finding-a-job"===e?m(7e3,14e3):t.href.indexOf("employers")>-1?m(4e3,16e3):console.log("")}(window.location)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"callout-cnt",children:Object(h.jsx)(l.a,{children:e&&!i&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(r.a.div,{className:"callout",variants:f,initial:"initial",animate:"animate",exit:{x:"100%",opacity:0,transition:b},dangerouslySetInnerHTML:{__html:u},onClick:function(){return c(!0)}}),Object(h.jsx)(r.a.div,{className:"callout-exit-button",variants:p,initial:"initial",animate:"animate",exit:{opacity:0},onClick:function(){return n(!1),sessionStorage.setItem("exitedCallout","true")},children:"+"})]})})})})},j=[.08,.69,.56,.97],b={duration:.6,ease:j},m={initial:{opacity:0,height:0},animate:{opacity:1,height:"clamp(500px, 65vh, 650px)",transition:{delayChildren:.4,staggerChildren:.3,ease:j,duration:.8}}},p={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}}},f={initial:{y:"50%",opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",duration:.8,damping:8,bounce:.8}}},x={animate:{opacity:0}};var g=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(d,{})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("chatbot-div")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.132939c5.chunk.js.map