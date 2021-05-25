(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{463:function(module,exports,__webpack_require__){__webpack_require__(464),__webpack_require__(620),__webpack_require__(621),__webpack_require__(823),__webpack_require__(824),__webpack_require__(827),__webpack_require__(828),__webpack_require__(826),__webpack_require__(825),__webpack_require__(829),__webpack_require__(830),module.exports=__webpack_require__(816)},531:function(module,exports){},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(328)},816:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(328).configure)([__webpack_require__(817)],module,!1)}).call(this,__webpack_require__(186)(module))},817:function(module,exports,__webpack_require__){var map={"./icon.story.tsx":831};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=817},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(34),__webpack_require__(43),__webpack_require__(814),__webpack_require__(35),__webpack_require__(815);var client_api=__webpack_require__(836),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},831:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"List",(function(){return icon_story_List}));__webpack_require__(12),__webpack_require__(8);var react=__webpack_require__(0),feather=(__webpack_require__(818),__webpack_require__(16),__webpack_require__(9),__webpack_require__(59),__webpack_require__(64),__webpack_require__(820),__webpack_require__(34),__webpack_require__(114)),jsx_runtime=__webpack_require__(101);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var index=function index(){var round=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e5;return(Math.random()*round).toFixed(2)},source=function getSource(){return{list:Object.keys(feather.icons),icons:Object.keys(feather.icons).map((function(key){return{id:index(),name:key,tags:feather.icons[key].tags}}))}}(),src_Icon=function Icon(_ref){var children=_ref.children,name=_ref.name,_ref$size=_ref.size,size=void 0===_ref$size?16:_ref$size,props=_objectWithoutProperties(_ref,["children","name","size"]),container=Object(react.useRef)(null),attrs=Object(react.useMemo)((function(){return feather.icons[children]||feather.icons.x}),[children]).attrs;return Object(react.useEffect)((function(){if(container.current){var getter=name||children||"x";console.log(getter,children,name),source.list.includes(getter)&&(container.current.innerHTML=feather.icons[getter].contents)}}),[children]),Object(jsx_runtime.jsx)("svg",Object.assign({xmlns:attrs.xmlns,width:size,height:size,viewBox:attrs.viewBox,fill:attrs.fill,stroke:attrs.stroke,strokeWidth:attrs["stroke-width"],strokeLinecap:attrs["stroke-linecap"],strokeLinejoin:attrs["stroke-linejoin"]},props,{ref:container}))};src_Icon.displayName="Icon";var src_0=src_Icon;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Icon",component:src_0,argTypes:{size:{control:{type:"number"}}}};var icon_story_List=function List(props){return Object(jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:source.list.map((function(name){return Object(jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:10},children:[Object(jsx_runtime.jsx)(src_0,Object.assign({style:{marginRight:10}},props,{children:name}),name),Object(jsx_runtime.jsx)("span",{children:name})]})}))})};icon_story_List.displayName="List",icon_story_List.parameters=Object.assign({storySource:{source:"(props) => (\n    <div style={{\n        display: 'flex',\n        flexDirection: 'column',\n    }}>\n        {source.list.map((name) => (\n            <div style={{\n                display: 'flex',\n                alignItems: 'center',\n                marginBottom: 10,\n            }}>\n                <Icon key={name} style={{ marginRight: 10 }} {...props} >{name}</Icon>\n                <span>{name}</span>\n            </div>\n        ))}\n    </div>\n)"}},icon_story_List.parameters);try{icon_story_List.displayName="List",icon_story_List.__docgenInfo={description:"",displayName:"List",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon.story.tsx#List"]={docgenInfo:icon_story_List.__docgenInfo,name:"List",path:"src/icon.story.tsx#List"})}catch(__react_docgen_typescript_loader_error){}}},[[463,2,3]]]);