(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[65],{1012:function(t,e,n){"use strict";var r=n(676);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.avatarSizes=void 0;var o=r(n(963)),a=r(n(880)),i=r(n(989)),u=r(n(354)),c=r(n(652)),l=n(954),s=n(1002),f="user",p={large:128,regular:72,medium:48,small:32};e.avatarSizes=p;var d={user:"lightGray",info:"orange",count:"white",settingsUser:"white"},h={user:"black",settingsUser:"black",info:"white",count:"black"},v=(0,c.default)(l.Box).withConfig({displayName:"Avatar__Body",componentId:"sc-1uu9ov9-0"})(["display:inline-block;border-radius:50%;user-select:none;position:relative;overflow:hidden;"]),m=(0,c.default)(s.Text).withConfig({displayName:"Avatar__Name",componentId:"sc-1uu9ov9-1"})(["text-transform:uppercase;"]),C=c.default.img.withConfig({displayName:"Avatar__Image",componentId:"sc-1uu9ov9-2"})(["top:0;left:0;position:absolute;width:100%;height:100%;border-radius:50%;background-size:cover;background-position:center;background-repeat:no-repeat;"]),L=function(t){var e=t.name,n=t.size,r=t.url,c=t.type,s=t.showInitials,L=t.showTitle,g=t.className,y=t.children,A=(0,a.default)(t,["name","size","url","type","showInitials","showTitle","className","children"]),b=n?p[n]:p.regular,w="user"===c||"settingsUser"===c;return u.default.createElement(v,(0,o.default)({},A,{width:b,height:b,cursor:A.onClick?"pointer":void 0,bg:"user"===c?d.user:"transparent",className:g}),u.default.createElement(l.Box,{display:"flex",bg:d[c||f],width:"100%",height:"100%",justifyContent:"center",alignItems:"center",title:L?e:void 0},y?u.default.createElement(u.default.Fragment,null,y):u.default.createElement(u.default.Fragment,null,r?u.default.createElement(C,{src:r,alt:e}):s?u.default.createElement(m,{color:h[c||f],textStyle:"regular"===n?"subheading":"count"===c?"small":"regular"},w?function(t){var e=t.split(" "),n=(0,i.default)(e,2),r=n[0],o=n[1];return o?r[0]+o[0]:r[0]}(e):e||"?"):null)))};L.defaultProps={name:"?",size:"regular",type:f,showInitials:!0};var g=L;e.default=g},1013:function(t,e,n){"use strict";var r=n(986),o=n(676);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.getActualSize=e.addAvatarSizeSuffix=void 0;var a=o(n(963)),i=o(n(354)),u=r(n(1012)),c=[64,96,128,192,256],l=function(t,e){var n=t.split(".").pop(),r=s(e);return t&&r?t.replace(".".concat(n),"_".concat(r,".").concat(n)):""};e.addAvatarSizeSuffix=l;var s=function(t){var e=2*t;return c.reduce((function(t,n){return e<=n&&e>t?n:t}),c[0])};e.getActualSize=s;var f=function(t){return i.default.createElement(u.default,(0,a.default)({},t,{url:t.url?l(t.url,t.size?u.avatarSizes[t.size]:u.avatarSizes.regular):void 0}))};f.defaultProps={size:"regular"};var p=f;e.default=p},1011:function(t,e,n){"use strict";var r=n(676),o=n(986);Object.defineProperty(e,"__esModule",{value:!0});var a={ResponsiveAvatar:!0};Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"ResponsiveAvatar",{enumerable:!0,get:function(){return u.default}});var i=o(n(1012));Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(a,t)||t in e&&e[t]===i[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}}))}));var u=r(n(1013))},1489:function(t,e,n){"use strict";var r=n(676);e.Z=void 0;var o=r(n(354)),a=r(n(652)),i=n(663),u=(0,a.default)((function(t){var e=t.size,n=void 0===e?28:e,r=t.className,a=n,i=120*a/28;return o.default.createElement("svg",{className:r,width:i,height:a,viewBox:"0 0 120 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},o.default.createElement("g",null,o.default.createElement("path",{d:"M11.539744,13.3211522 C11.9974687,11.8173116 13.2069828,10.6567646 15.3154495,10.6567646 C17.1298516,10.6567646 18.6331685,11.8173116 18.7970905,13.3211522 L11.539744,13.3211522 Z M15.3154495,8.07433809 C11.3925807,8.07433809 8.36892639,10.9510911 8.36892639,15.1355543 C8.36892639,19.3035205 11.539744,22.1967704 15.3154495,22.1967704 C18.1922025,22.1967704 20.300931,20.741897 21.5104452,18.7313646 L18.9767239,17.5870527 C18.519261,18.7313646 17.2770148,19.5981088 15.4626127,19.5981088 C12.8964213,19.5981088 11.3925807,17.865144 11.3925807,15.8546116 L21.6573465,15.8546116 L21.951673,14.988391 C21.951673,10.8039278 18.9439919,8.07433809 15.3154495,8.07433809 L15.3154495,8.07433809 Z M119.646319,14.4162351 L114.399767,14.4162351 L114.399767,16.8352633 L116.88426,16.8352633 C116.73762,18.6169334 115.119348,19.6138202 113.321181,19.6138202 C110.329735,19.6138202 109.038522,17.4236543 109.038522,15.2007565 C109.038522,12.9613617 110.34597,10.6732616 113.369887,10.6732616 C115.069857,10.6732616 116.344836,11.5557172 116.982194,12.7654932 L119.450451,11.5394821 C118.22444,9.30008729 116.132732,8.07433809 113.370148,8.05784114 C109.120483,8.07433809 106.08007,11.1144894 106.08007,15.2007565 C106.08007,19.4669188 109.398051,22.1965086 113.092581,22.1965086 C116.80256,22.1965086 119.940908,19.4669188 119.940908,15.2824556 L119.646581,14.4162351 L119.646319,14.4162351 Z M3.17107943,9.9377073 L3.00768112,9.80677917 L2.71335467,8.35216759 L0,8.35216759 L0,21.9021821 L3.00741926,21.9021821 L3.00741926,14.0074775 C3.07262147,12.3405004 4.21693337,10.9510911 6.53776549,10.9510911 L8.13980215,10.9510911 L8.13980215,8.35216759 C7.53491417,8.07459994 7.24058772,8.07459994 6.63596159,8.07459994 C5.39371545,8.07459994 4.23316846,8.61402386 3.17081757,9.9377073 M61.0675007,17.692057 L57.4858307,8.35242944 L54.3639802,8.35242944 L59.5906314,21.4805935 L57.175531,27.672185 L60.0195519,27.672185 L67.5544661,8.35242944 L64.710707,8.35242944 L61.0675007,17.692057 Z M50.4413733,9.51271458 L50.4413733,0 L53.4485307,0 L53.4485307,21.902444 L50.7356997,21.902444 L50.4411114,20.741897 L50.2939482,20.6109689 L50.1305499,20.741897 C49.2315973,21.6083794 47.7277568,22.1967704 46.207943,22.1967704 C42.2848123,22.1967704 38.9668315,19.3032587 38.9668315,15.1355543 C38.9668315,10.9510911 42.2848123,8.07433809 46.2076811,8.07433809 C47.6950247,8.07433809 49.2315973,8.64649404 50.1305499,9.51271458 L50.2939482,9.6598778 L50.4411114,9.51271458 L50.4413733,9.51271458 Z M46.3710794,19.597847 C48.9372709,19.597847 50.7354379,17.5867908 50.7354379,15.1355543 C50.7354379,12.683794 48.9372709,10.6567646 46.3710794,10.6567646 C43.4943264,10.6567646 41.9577539,12.6835322 41.9577539,15.1355543 C41.9577539,17.5870527 43.4943264,19.5975851 46.3710794,19.5975851 L46.3710794,19.597847 Z M30.2711085,19.597847 C27.4108525,19.597847 25.857783,17.5867908 25.857783,15.1355543 C25.857783,12.683794 27.4108525,10.6567646 30.2711085,10.6567646 C32.8373,10.6567646 34.6519639,12.6835322 34.6519639,15.1355543 C34.6519639,17.5870527 32.8373,19.5975851 30.2711085,19.5975851 L30.2711085,19.597847 Z M34.3408787,9.51271458 L34.1942392,9.6598778 L34.0468141,9.51271458 C33.1313646,8.64649404 31.6277859,8.07433809 30.1242072,8.07433809 C26.2016002,8.07433809 22.8830957,10.9510911 22.8830957,15.1355543 C22.8830957,19.3035205 26.2013384,22.1967704 30.1239453,22.1967704 C31.6277859,22.1967704 33.1313646,21.6083794 34.0468141,20.741897 L34.1939773,20.6109689 L34.3408787,20.741897 L34.6517021,21.902444 L37.3647949,21.902444 L37.3647949,8.35216759 L34.6519639,8.35216759 L34.3408787,9.51271458 L34.3408787,9.51271458 Z M83.8997963,8.07433809 C82.7062555,8.07433809 81.1861798,8.64649404 80.4346523,9.51271458 L79.682863,10.3789351 C78.8978179,8.95705557 77.3287751,8.07433809 75.1545825,8.07433809 C73.9453302,8.07433809 72.4417515,8.64649404 71.8368635,9.51271458 L71.6899622,9.6598778 L71.526302,9.51271458 L71.2319756,8.35216759 L68.5188827,8.35216759 L68.5188827,21.902444 L71.526302,21.902444 L71.526302,13.7134129 C71.5917661,12.046174 73.0791097,10.6567646 74.8442828,10.6567646 C76.3643585,10.6567646 77.263311,11.523247 77.263311,13.2556881 L77.263311,21.902444 L80.2872272,21.902444 L80.2872272,13.7134129 C80.3526913,12.046174 81.8237998,10.6567646 83.605208,10.6567646 C85.1090486,10.6567646 86.0242363,11.523247 86.0242363,13.2556881 L86.0242363,21.902444 L89.0319174,21.902444 L89.0319174,12.9616235 C89.0319174,10.0848705 87.2340122,8.07433809 83.8995345,8.07433809 M97.7276404,19.597847 C94.8671225,19.597847 93.3305499,17.5867908 93.3305499,15.1355543 C93.3305499,12.683794 94.8671225,10.6567646 97.7276404,10.6567646 C100.293832,10.6567646 102.108496,12.6835322 102.108496,15.1355543 C102.108496,17.5870527 100.293832,19.5975851 97.7276404,19.5975851 L97.7276404,19.597847 Z M101.813646,9.51271458 L101.667006,9.6598778 L101.503346,9.51271458 C100.604132,8.64649404 99.1005528,8.07433809 97.580739,8.07433809 C93.6576084,8.07433809 90.3393657,10.9510911 90.3393657,15.1355543 C90.3393657,19.3035205 93.6576084,22.1967704 97.5804772,22.1967704 C99.1005528,22.1967704 100.604132,21.6083794 101.503346,20.741897 L101.666744,20.6109689 L101.813646,20.741897 L102.108234,21.902444 L104.821327,21.902444 L104.821327,8.35216759 L102.108496,8.35216759 L101.813646,9.51271458 Z"})))})).withConfig({displayName:"Logo",componentId:"sc-x63b11-0"})(["g{fill:",";transition:fill 0.1s;}&:hover g{fill:",";}"],(function(t){return t.color?(0,i.themeGet)("colors.".concat(t.color),t.color):"#000"}),(function(t){return t.hoverColor?(0,i.themeGet)("colors.".concat(t.hoverColor),t.hoverColor):t.color?(0,i.themeGet)("colors.".concat(t.color),t.color):"#000"}));e.Z=u},1491:function(t,e,n){"use strict";var r=n(676);e.Z=void 0;var o=r(n(771)),a=r(n(354)),i=n(1001);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=function(t){var e=t.state,n=t.children,r=t.duration,o=void 0===r?500:r,u=t.onDone,l=t.style,s=(0,i.useSpring)({from:{x:0},x:e?100:0,reset:!0,config:{duration:o},onRest:function(t){100===t.x&&u()}}).x;return a.default.createElement(i.animated.div,{style:c({transform:s.interpolate({range:[0,8,25,41,58,75,92,100],output:[0,-8,8,-8,8,-4,4,0]}).interpolate((function(t){return"translate3d(".concat(t,"px, 0, 0)")}))},l)},n)};e.Z=l},1244:function(t,e){"use strict";e.default=void 0;var n={fixRadiusClip:function(){return"\n  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);\n"}};e.default=n},1490:function(t,e,n){"use strict";var r=n(676);e.Y=void 0;var o=r(n(989)),a=n(354);e.Y=function(t){var e=(0,a.useState)(!1),n=(0,o.default)(e,2),r=n[0],i=n[1];return(0,a.useEffect)((function(){var e=new Image;e.src=t,e.onload=function(){i(!0)}}),[]),r}},1475:function(t,e,n){"use strict";n.d(e,{AW:function(){return L},F0:function(){return h},gx:function(){return E},rs:function(){return Z},s6:function(){return d},LX:function(){return C},k6:function(){return O},UO:function(){return P}});var r=n(1481),o=n(354),a=(n(664),n(1482)),i=n(1476),u=n(1483),c=n(1484),l=n(1477),s=n.n(l),f=(n(1479),n(1485)),p=(n(656),function(t){var e=(0,i.Z)();return e.displayName=t,e}("Router-History")),d=function(t){var e=(0,i.Z)();return e.displayName=t,e}("Router"),h=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}(0,r.Z)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.createElement(d.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(p.Provider,{children:this.props.children||null,value:this.props.history}))},e}(o.Component);o.Component;o.Component;var v={},m=0;function C(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,u=void 0!==i&&i,c=n.sensitive,l=void 0!==c&&c;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=v[n]||(v[n]={});if(r[t])return r[t];var o=[],a={regexp:s()(t,o,e),keys:o};return m<1e4&&(r[t]=a,m++),a}(n,{end:a,strict:u,sensitive:l}),o=r.regexp,i=r.keys,c=o.exec(t);if(!c)return null;var f=c[0],p=c.slice(1),d=t===f;return a&&!d?null:{path:n,url:"/"===n&&""===f?"/":f,isExact:d,params:i.reduce((function(t,e,n){return t[e.name]=p[n],t}),{})}}),null)}var L=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return o.createElement(d.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?C(n.pathname,t.props):e.match,a=(0,c.Z)({},e,{location:n,match:r}),i=t.props,l=i.children,s=i.component,f=i.render;return Array.isArray(l)&&0===l.length&&(l=null),o.createElement(d.Provider,{value:a},a.match?l?"function"==typeof l?l(a):l:s?o.createElement(s,a):f?f(a):null:"function"==typeof l?l(a):null)}))},e}(o.Component);function g(t){return"/"===t.charAt(0)?t:"/"+t}function y(t,e){if(!t)return e;var n=g(t);return 0!==e.pathname.indexOf(n)?e:(0,c.Z)({},e,{pathname:e.pathname.substr(n.length)})}function A(t){return"string"==typeof t?t:(0,a.Ep)(t)}function b(t){return function(){(0,u.Z)(!1)}}function w(){}var E=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return e.navigateTo(t,"PUSH")},e.handleReplace=function(t){return e.navigateTo(t,"REPLACE")},e.handleListen=function(){return w},e.handleBlock=function(){return w},e}(0,r.Z)(e,t);var n=e.prototype;return n.navigateTo=function(t,e){var n=this.props,r=n.basename,o=void 0===r?"":r,i=n.context,u=void 0===i?{}:i;u.action=e,u.location=function(t,e){return t?(0,c.Z)({},e,{pathname:g(t)+e.pathname}):e}(o,(0,a.ob)(t)),u.url=A(u.location)},n.render=function(){var t=this.props,e=t.basename,n=void 0===e?"":e,r=t.context,i=void 0===r?{}:r,u=t.location,l=void 0===u?"/":u,s=(0,f.Z)(t,["basename","context","location"]),p={createHref:function(t){return g(n+A(t))},action:"POP",location:y(n,(0,a.ob)(l)),push:this.handlePush,replace:this.handleReplace,go:b(),goBack:b(),goForward:b(),listen:this.handleListen,block:this.handleBlock};return o.createElement(h,(0,c.Z)({},s,{history:p,staticContext:i}))},e}(o.Component);var Z=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return o.createElement(d.Consumer,null,(function(e){e||(0,u.Z)(!1);var n,r,a=t.props.location||e.location;return o.Children.forEach(t.props.children,(function(t){if(null==r&&o.isValidElement(t)){n=t;var i=t.props.path||t.props.from;r=i?C(a.pathname,(0,c.Z)({},t.props,{path:i})):e.match}})),r?o.cloneElement(n,{location:a,computedMatch:r}):null}))},e}(o.Component);var x=o.useContext;function O(){return x(p)}function P(){var t=x(d).match;return t?t.params:{}}}}]);