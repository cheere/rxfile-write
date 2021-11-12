/*!
 * rxfile-write
 * version: 0.0.4
 * repo: https://github.com/cheere/rxfile-write
 * build: 2021-11-12 16:34:05
 */
"use strict";var t=require("fs"),e=require("path");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),i=n(e);const o={};function c(t){return t&&t.indexOf("rxfile-write.js")>=0?(console.log("yes yes v=",t),!0):(console.log("no no v=",t),!1)}o.error=function(t,e){if(e=e||"",t){if("object"==typeof t)return t}else t="unknow";const n=new Error("RxfileWrite-error=> "+e+" -> "+t);let r=n.stack;if(r){const t=r.split("at"),e=t.length,i=[],o=[],s=[];let u=!0;for(let n=0;n<e;n+=2){let r=t[n]||"",f=n+1<e?t[n+1]:"";0!==n&&(r="at"+r,f="at"+f);const l=f?f+r:r;0===n?(i.push(r),o.push("at"+f)):r&&(c(r)||c(f))?o.push(l):u?(u=!1,o.push(r),s.push(f)):s.push(l)}const f=o.reverse(),l=i.concat(f).concat(s).join("");n.stack=l}return n};const s={exists:function(t){const e=this;return new Promise(((n,i)=>{e.isString(t)?r.default.stat(t,((t,r)=>{t?i(t):r.isDirectory()?n({dir:!0,file:!1}):r.isFile()?n({dir:!1,file:!0}):i(e.error("RxfileWrite-exist=> stats not dir/file"))})):i(e.error("RxfileWrite-exist=> path undefined or null"))}))},existsSync:function(t){const e=this;if(!t)return e.error("RxfileWrite-existsSync=> path undefined"),{dir:!1,file:!1};const n=r.default.statSync(t);return n.isDirectory()?{dir:!0,file:!1}:n.isFile()?{dir:!1,file:!0}:(e.error("RxfileWrite-exist=> stats not dir/file"),{dir:!1,file:!1})}},u={};u.read=function(t){const e=this;return new Promise(((n,i)=>{e.exists(t).then((()=>{(function(t){return new Promise(((e,n)=>{r.default.readFile(t,"utf-8",((t,r)=>{t?n(t):e(r)}))}))})(t).then((t=>{n(t)})).catch((t=>{i(t)}))})).catch((t=>{i(t)}))}))};const f={};f.cp=function(t,e){const n=this;return new Promise(((i,o)=>{n.exists(t).then((()=>{(function(t,e){return new Promise(((n,i)=>{r.default.copyFile(t,e,(function(t){t?i(t):n()}))}))})(t,e).then((()=>{i()})).catch((t=>{o(t)}))})).catch((t=>{o(t)}))}))},f.cpSync=function(t,e){return!!this.existsSync(t).file&&function(t,e){try{r.default.copyFileSync(t,e)}catch(t){return!1}return!0}(t,e)};const l={write:function(t,e){return this.writeTo(t,e)},writeSync:function(t,e){y(t,e)},writeAppend:function(t,e){return this.writeTo(t,e,!0)},writeAppendSync:function(t,e){y(t,e,!0)}};l.writeTo=function(t,e,n=!1){return new Promise(((o,c)=>{const s=i.default.dirname(t);this.isData(e)?this.exists(s).then((()=>{h(t,e,n).then(o).catch(c)})).catch((()=>{(function(t){return new Promise(((e,n)=>{r.default.mkdir(t,{mode:a,flag:"w+"},(function(t){t?n(t):e()}))}))})(t).then((()=>{h(t,e,n).then(o).catch(c)})).catch(c)})):c(this.error("text not `string or buffer` ","writeTo"))}))};const a=parseInt("0755",8),d=parseInt("0666",8);function h(t,e,n=!1){let i="w+",o=r.default.writeFile;return n&&(o=r.default.appendFile,i="as+"),new Promise(((n,r)=>{o(t,e,{encoding:"utf8",mode:d,flag:i},(function(t){t?r(t):n()}))}))}function y(t,e,n=!1){let i="w+",o=r.default.writeFileSync;n&&(o=r.default.appendFileSync,i="as+");try{o(t,e,{encoding:"utf8",mode:d,flag:i})}catch(t){console.error(t)}}const p={};function w(t){let e=[];r.default.existsSync(t)&&(e=r.default.readdirSync(t),e.forEach((e=>{const n=t+"/"+e;r.default.statSync(n).isDirectory()?w(n):r.default.unlinkSync(n)})),r.default.rmdirSync(t))}p.remove=function(t){const e=this;return new Promise(((n,i)=>{e.exists(t).then((()=>{(function(t){return new Promise(((e,n)=>{try{r.default.statSync(t).isDirectory()?w(t):r.default.unlinkSync(t),e()}catch(t){console.log("RxfileWrite-remove=> error=",t),n(t)}}))})(t).then((()=>{n()})).catch((t=>{i(t)}))})).catch((t=>{i(t)}))}))};var x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function S(t){return null!=t&&(!!t._isBuffer||g(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&g(t.slice(0,0))}(t))}function g(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}void 0===x.TYPED_ARRAY_SUPPORT||x.TYPED_ARRAY_SUPPORT;const m={isUndef:function(t){return null==t},isTrue:function(t){return!0===t},isFalse:function(t){return!1===t},isString:function(t){return!this.isUndef(t)&&"string"==typeof t}};m.isString=function(t){return!(!t||"string"!=typeof t)},m.isObject=function(t){return!(!t||"object"!=typeof t)},m.isData=function(t){return!(!t||"string"!=typeof t&&!S(t))};const P=Object.assign(s,u,f,l,p,m),R=Object.assign(o,P);R.version='"0.0.4"',module.exports=R;
