function t(t){return"labels"in t&&"extra"in t}function n(t){return"id"in t&&"name"in t&&"values"in t&&"extra"in t}function e(e){return"chart"in e&&"datasets"in e&&t(e.chart)&&e.datasets.every((function(t){return n(t)}))}!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}(".chartisan-controller,\n.chartisan-body {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.chartisan-modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n.chartisan-help-block {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.chartisan-help-text {\n    margin-top: 1.5rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    font-size: 0.75rem;\n}\n.chartisan-help-text-error {\n    margin-top: 1.5rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    font-size: 0.6rem;\n    color: #f56565;\n}\n.chartisan-refresh-chart {\n    cursor: pointer;\n}\n");var r=function(){this.hooks=[]},i=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||function(t){return t.$$typeof===o}(t)}(t)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(t,n){return!1!==n.clone&&n.isMergeableObject(t)?d((e=t,Array.isArray(e)?[]:{}),t,n):t;var e}function s(t,n,e){return t.concat(n).map((function(t){return a(t,e)}))}function c(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(n){return t.propertyIsEnumerable(n)})):[]}(t))}function l(t,n){try{return n in t}catch(t){return!1}}function h(t,n,e){var r={};return e.isMergeableObject(t)&&c(t).forEach((function(n){r[n]=a(t[n],e)})),c(n).forEach((function(i){(function(t,n){return l(t,n)&&!(Object.hasOwnProperty.call(t,n)&&Object.propertyIsEnumerable.call(t,n))})(t,i)||(l(t,i)&&e.isMergeableObject(n[i])?r[i]=function(t,n){if(!n.customMerge)return d;var e=n.customMerge(t);return"function"==typeof e?e:d}(i,e)(t[i],n[i],e):r[i]=a(n[i],e))})),r}function d(t,n,e){(e=e||{}).arrayMerge=e.arrayMerge||s,e.isMergeableObject=e.isMergeableObject||i,e.cloneUnlessOtherwiseSpecified=a;var r=Array.isArray(n);return r===Array.isArray(t)?r?e.arrayMerge(t,n,e):h(t,n,e):a(n,e)}d.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,e){return d(t,e,n)}),{})};var u,p=["#667EEA","#F56565","#48BB78","#ED8936","#9F7AEA","#38B2AC","#ECC94B","#4299E1","#ED64A6"],f=d,v=function(){return(v=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)},g={general:function(t){var n=t.size,e=t.color;return'\n    <svg\n        role="img"\n        xmlns="http://www.w3.org/2000/svg"\n        width="'+n[0]+'"\n        height="'+n[1]+'"\n        viewBox="0 0 24 24"\n        aria-labelledby="refreshIconTitle"\n        stroke="'+e+'"\n        stroke-width="1"\n        stroke-linecap="square"\n        stroke-linejoin="miter"\n        fill="none"\n        color="'+e+'"\n    >\n        <title id="refreshIconTitle">Refresh</title>\n        <polyline points="22 12 19 15 16 12"/>\n        <path d="M11,20 C6.581722,20 3,16.418278 3,12 C3,7.581722 6.581722,4 11,4 C15.418278,4 19,7.581722 19,12 L19,14"/>\n    </svg>\n'}},m=function(t,n){return'\n    <div class="chartisan-help-block">\n    <div class="chartisan-refresh-chart">\n        '+g[t.type](t)+"\n    </div>\n    "+(""!=t.text?'\n                <div class="chartisan-help-text" style="color: '+t.textColor+';">\n                    '+t.text+"\n                </div>\n            ":"")+"\n    "+(t.debug?'<div class="chartisan-help-text-error">\n        '+n.message+"\n    </div>":"")+"\n    </div>\n"},y={bar:function(t){var n=t.size,e=t.color;return'\n    <svg width="'+n[0]+'" height="'+n[1]+'" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="'+e+'">\n        <rect y="10" width="15" height="120" rx="6">\n            <animate attributeName="height"\n                begin="0.5s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0.5s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n        <rect x="30" y="10" width="15" height="120" rx="6">\n            <animate attributeName="height"\n                begin="0.25s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0.25s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n        <rect x="60" width="15" height="140" rx="6">\n            <animate attributeName="height"\n                begin="0s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n        <rect x="90" y="10" width="15" height="120" rx="6">\n            <animate attributeName="height"\n                begin="0.25s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0.25s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n        <rect x="120" y="10" width="15" height="120" rx="6">\n            <animate attributeName="height"\n                begin="0.5s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0.5s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n    </svg>\n'}},b=function(t){return'\n    <div class="chartisan-help-block">\n        '+y[t.type](t)+"\n        "+(""!=t.text?'\n                    <div class="chartisan-help-text" style="color: '+t.textColor+';">\n                        '+t.text+"\n                    </div>\n                ":"")+"\n    </div>\n"};!function(t){t.Initializing="initializing",t.Loading="loading",t.Error="error",t.Show="show"}(u||(u={}));var w=function(){function t(t){this.options={el:".chart",url:void 0,options:void 0,data:void 0,loader:{type:"bar",size:[35,35],color:"#000",text:"Loading chart",textColor:"#a0aec0"},error:{type:"general",size:[50,50],color:"#f56565",text:"There was an error",textColor:"#a0aec0",debug:!0},hooks:void 0},this.cstate=u.Initializing;var n=(this.options=v(v({},this.options),t)).el,e=document.querySelector(n);if(!e)throw Error("[Chartisan] Unable to find an element to bind the chart to a DOM element with the selector = '"+n+"'");this.element=e,this.controller=document.createElement("div"),this.body=document.createElement("div"),this.modal=document.createElement("div"),this.bootstrap()}return t.prototype.setModal=function(t){var n=t.show,e=void 0===n||n,r=t.color,i=void 0===r?"#FFFFFF":r,o=t.content;this.modal.style.backgroundColor=i,this.modal.style.display=e?"flex":"none",o&&(this.modal.innerHTML=o)},t.prototype.changeTo=function(t,n){switch(t){case u.Initializing,u.Loading:this.setModal({show:!0,content:b(this.options.loader)});break;case u.Show:this.setModal({show:!1});break;case u.Error:this.setModal({show:!0,content:m(this.options.error,null!=n?n:new Error("Unknown Error"))}),this.refreshEvent()}this.cstate=t},t.prototype.bootstrap=function(){this.element.appendChild(this.controller),this.controller.appendChild(this.body),this.controller.appendChild(this.modal),this.controller.classList.add("chartisan-controller"),this.body.classList.add("chartisan-body"),this.modal.classList.add("chartisan-modal"),this.update(this.options)},t.prototype.request=function(t){var n=this;this.options.url||this.onError(new Error("[Chartisan] No URL provided to fetch the data.")),fetch(this.options.url,this.options.options).then((function(t){return t.json()})).then((function(e){return n.onRawUpdate(e,t)})).catch((function(t){return n.onError(t)}))},t.prototype.refreshEvent=function(){var t=this;this.controller.getElementsByClassName("chartisan-refresh-chart")[0].addEventListener("click",(function(){return t.update()}),{once:!0})},t.prototype.update=function(t){var n,r,i,o,a,s,c;if((null===(n=t)||void 0===n?void 0:n.url)&&(this.options.url=t.url),(null===(r=t)||void 0===r?void 0:r.options)&&(this.options.options=t.options),null===(i=t)||void 0===i?void 0:i.data){var l=void 0;e(t.data)?l=t.data:((null===(o=t)||void 0===o?void 0:o.background)||this.changeTo(u.Loading),l=t.data());var h=this.getDataFrom(l);return this.changeTo(u.Show),t.background?this.onBackgroundUpdate(h,null===(a=t)||void 0===a?void 0:a.additional):this.onUpdate(h,null===(s=t)||void 0===s?void 0:s.additional)}(null===(c=t)||void 0===c?void 0:c.background)||this.changeTo(u.Loading),this.request(t)},t.prototype.getDataFrom=function(t){var n=this.formatData(t);if(this.options.hooks)for(var e=0,r=this.options.hooks.hooks;e<r.length;e++){n=(0,r[e])(n)}return n},t.prototype.onRawUpdate=function(t,n){var r,i,o;if(!e(t))return this.onError(new Error("Invalid server data"));var a=this.getDataFrom(t);this.changeTo(u.Show),(null===(r=n)||void 0===r?void 0:r.background)?this.onBackgroundUpdate(a,null===(i=n)||void 0===i?void 0:i.additional):this.onUpdate(a,null===(o=n)||void 0===o?void 0:o.additional)},t.prototype.onError=function(t){this.changeTo(u.Error,t)},t.prototype.state=function(){return this.cstate},t}();export{u as ChartState,w as Chartisan,r as Hooks,p as colorPalette,m as error,t as isChartData,n as isDatasetData,e as isServerData,b as loader,f as mergeOptions};
