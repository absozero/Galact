"use strict";(self.webpackChunkgalact_docs=self.webpackChunkgalact_docs||[]).push([[28],{1871:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5236:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(3117),r=a(7294),o=a(5730),l=a(5257),i=a(6010),u="tabItem_LplD";function c(e){var t,a,o,c=e.lazy,s=e.block,p=e.defaultValue,m=e.values,b=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(d,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==v&&!d.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+d.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),w=y.tabGroupChoices,k=y.setTabGroupChoices,T=(0,r.useState)(v),O=T[0],E=T[1],j=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var z=w[b];null!=z&&z!==O&&d.some((function(e){return e.value===z}))&&E(z)}var I=function(e){var t=e.currentTarget,a=j.indexOf(t),n=d[a].value;n!==O&&(x(t),E(n),null!=b&&k(b,n))},N=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;a=j[n]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;a=j[r]||j[j.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},d.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},1268:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return b}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=a(5236),i=a(1871),u=["components"],c={slug:"setup-cli",title:"Migrating Galact to a cli structure for scalability",authors:{name:"Absozero",title:"Galact maintainer, original author",url:"https://github.com/absozero",image_url:"https://github.com/absozero.png"},tags:["Galact","CLI"]},s=void 0,p={permalink:"/galact/blog/setup-cli",editUrl:"https://github.com/absozero/galact/tree/documentation/blog/2022-03-16-setuppy-commandline.md",source:"@site/blog/2022-03-16-setuppy-commandline.md",title:"Migrating Galact to a cli structure for scalability",description:"The whole repo has now been migrated to a comman line setup. This was to improve scalability, improve portability, as well as to make the project migrate from a more one file -type structure to a more common and usable format that would help the app have arguments and only a requirement for pip and python.",date:"2022-03-16T00:00:00.000Z",formattedDate:"March 16, 2022",tags:[{label:"Galact",permalink:"/galact/blog/tags/galact"},{label:"CLI",permalink:"/galact/blog/tags/cli"}],readingTime:1.015,truncated:!1,authors:[{name:"Absozero",title:"Galact maintainer, original author",url:"https://github.com/absozero",image_url:"https://github.com/absozero.png",imageURL:"https://github.com/absozero.png"}],frontMatter:{slug:"setup-cli",title:"Migrating Galact to a cli structure for scalability",authors:{name:"Absozero",title:"Galact maintainer, original author",url:"https://github.com/absozero",image_url:"https://github.com/absozero.png",imageURL:"https://github.com/absozero.png"},tags:["Galact","CLI"]},nextItem:{title:"Releasing docs website using Docusaurus",permalink:"/galact/blog/release-docs"}},m={authorsImageUrls:[void 0]},b=[],h={toc:b};function g(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The whole repo has now been migrated to a comman line setup. This was to improve scalability, improve portability, as well as to make the project migrate from a more ",(0,o.kt)("strong",{parentName:"p"},"one file -type")," structure to a more common and usable format that would help the app have arguments and only a requirement for pip and python."),(0,o.kt)("p",null,"This new format means that instead of calling ",(0,o.kt)("inlineCode",{parentName:"p"},"python bot/galact.py")," you can just install the package directly using:"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"main",label:"stable",default:!0,mdxType:"TabItem"},"pip install git+https://github.com/absozero/galact.git"),(0,o.kt)(i.Z,{value:"testing",label:"unstable",mdxType:"TabItem"},"pip install git+https://github.com/absozero/galact.git@Testing"),(0,o.kt)(i.Z,{value:"pipenv",label:"pipenv",mdxType:"TabItem"},"pipenv install git+https://github.com/absozero/galact.git"),(0,o.kt)(i.Z,{value:"pypi",label:"When on pypi(cannot as such)",mdxType:"TabItem"},"pip install galact")),"pipenv install -e git+ssh://git@github.com/shearichard/behave-web-api.git#egg=behave-web-api And then you can run the command and open the help menu with this in the command line: ```bash galact ``` - The main branch is stable and you will get code that most likely will not break, there is unstable code for installation, and the final one is how the install command would look when the command is on pypi",(0,o.kt)("p",null,"This should be temporary until the package is published to ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org"},"PyPi"),", where then the package can just be installed by name."))}g.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return b}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),b=r,h=m["".concat(u,".").concat(b)]||m[b]||p[b]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);