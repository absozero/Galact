"use strict";(self.webpackChunkgalact_docs=self.webpackChunkgalact_docs||[]).push([[827],{2622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={},c="Using Galact",u={unversionedId:"usage",id:"usage",title:"Using Galact",description:"Once galact is installed, check for the help menu by using the following command",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/galact/docs/usage",editUrl:"https://github.com/absozero/galact/tree/documentation/docs/usage.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebars",previous:{title:"Installation",permalink:"/galact/docs/installation"},next:{title:"Why?",permalink:"/galact/docs/why"}},s={},p=[],f={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-galact"},"Using Galact"),(0,o.kt)("p",null,"Once galact is installed, check for the help menu by using the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"galact\n")),(0,o.kt)("p",null,"This will bring up the help menu, if the app is installed properly. If the app isn't, then follow the instructions in ",(0,o.kt)("a",{parentName:"p",href:"/galact/docs/installation"},"Installation")," again."),(0,o.kt)("p",null,"The app should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"~\n\u276f galact\nusage: galact [-h] {run,about} ...\n\npositional arguments:\n  {run,about}\n    run        Run galact on cli\n    about      Give info about Galact.\n\noptions:\n  -h, --help   show this help message and exit\n")),(0,o.kt)("p",null,"After that, if you run ",(0,o.kt)("inlineCode",{parentName:"p"},"galact run")," you enter a prompt with the actual bot running."),(0,o.kt)("p",null,"If you run ",(0,o.kt)("inlineCode",{parentName:"p"},"galact -h"),", you get help info for the bot, such as commands and what they do. Also, when running ",(0,o.kt)("inlineCode",{parentName:"p"},"galact about"),", you get general help imformation."))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),g=a,m=f["".concat(c,".").concat(g)]||f[g]||p[g]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);