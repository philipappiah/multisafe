(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[14,16],{1938:function(r,e){},1940:function(r,e,n){"use strict";n.r(e),n.d(e,"generateAddresses",(function(){return f})),n.d(e,"isValidPath",(function(){return o}));var i=n(1717),t=n.n(i),u=n(1700),a=n(19),s=u.publicToAddress,c=u.toChecksumAddress;function f(r,e){var n=r.publicKey,i=r.chainCode,u=r.path,f=new t.a;f.publicKey=new a.Buffer(n,"hex"),f.chainCode=new a.Buffer(i,"hex");for(var o=[],d=e;d<5+e;d++){var h=f.deriveChild(d),p=s(h.publicKey,!0).toString("hex");o.push({dPath:"".concat(u,"/").concat(d),address:c("0x".concat(p))})}return o}function o(r){var e=r.split("/");if("m"!==e[0])return!1;if("44'"!==e[1])return!1;if("60'"!==e[2]&&"1'"!==e[2])return!1;if(void 0===e[3])return!0;var n=Number(e[3][0]);if(isNaN(n)||n<0||"'"!==e[3][1])return!1;if(void 0===e[4])return!0;var i=Number(e[4][0]);if(isNaN(i)||i<0)return!1;if(void 0===e[5])return!0;var t=Number(e[5][0]);return!(isNaN(t)||t<0)}}}]);
//# sourceMappingURL=14.b3245199.chunk.js.map