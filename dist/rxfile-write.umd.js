/*!
 * rxfile-write
 * version: 0.0.7
 * repo: https://github.com/cheere/rxfile-write
 * build: 2021-11-15 15:47:19
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("fs"),require("path")):"function"==typeof define&&define.amd?define(["fs","path"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).fs,t.path)}(this,(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=n(t),r=n(e);const o={};function c(t){return!!(t&&t.indexOf("rxfile-write.js")>=0)}o.error=function(t,e){if(e=e||"",t){if("object"==typeof t)return t}else t="unknow";const n=new Error("RxfileWrite-error=> "+e+" -> "+t);let i=n.stack;if(i){const t=i.split("at"),e=t.length,r=[],o=[],s=[];let f=!0;for(let n=0;n<e;n+=2){let i=t[n]||"",u=n+1<e?t[n+1]:"";0!==n&&(i=i?"at"+i:"",u=u?"at"+u:"");const l=u?u+i:i;0===n?(r.push(i),u&&o.push("at"+u)):i&&(c(i)||c(u))?l&&o.push(l):f?(f=!1,i&&o.push(i),u&&s.push(u)):l&&s.push(l)}const u=o.reverse(),l=r.concat(u).concat(s).join("");n.stack=l}return n};const s={exists:function(t){const e=this;return new Promise(((n,r)=>{e.isString(t)?i.default.stat(t,((t,i)=>{t?r(t):i.isDirectory()?n({dir:!0,file:!1}):i.isFile()?n({dir:!1,file:!0}):r(e.error("RxfileWrite-exist=> stats not dir/file"))})):r(e.error("RxfileWrite-exist=> path undefined or null"))}))},existsSync:function(t){const e=this;if(!e.isString(t))return e.error("RxfileWrite-existsSync=> path undefined"),{dir:!1,file:!1};const n=i.default.statSync(t);return n.isDirectory()?{dir:!0,file:!1}:n.isFile()?{dir:!1,file:!0}:(e.error("RxfileWrite-exist=> stats not dir/file"),{dir:!1,file:!1})}},f={};f.read=function(t){const e=this;return new Promise(((n,r)=>{e.exists(t).then((()=>{(function(t){return new Promise(((e,n)=>{i.default.readFile(t,"utf-8",((t,i)=>{t?n(t):e(i)}))}))})(t).then((t=>{n(t)})).catch((t=>{r(t)}))})).catch((t=>{r(t)}))}))};const u={};u.cp=function(t,e){const n=this;return new Promise(((r,o)=>{n.exists(t).then((()=>{(function(t,e){return new Promise(((n,r)=>{i.default.copyFile(t,e,(function(t){t?r(t):n()}))}))})(t,e).then((()=>{r()})).catch((t=>{o(t)}))})).catch((t=>{o(t)}))}))},u.cpSync=function(t,e){return!!this.existsSync(t).file&&function(t,e){try{i.default.copyFileSync(t,e)}catch(t){return console.error(t),!1}return!0}(t,e)};const l={write:function(t,e){return this.writeTo(t,e)},writeSync:function(t,e){y(t,e)},writeAppend:function(t,e){return this.writeTo(t,e,!0)},writeAppendSync:function(t,e){y(t,e,!0)}};l.writeTo=function(t,e,n=!1){return new Promise(((o,c)=>{const s=r.default.dirname(t);this.isData(e)?this.exists(s).then((()=>{h(t,e,n).then(o).catch(c)})).catch((()=>{(function(t){return new Promise(((e,n)=>{i.default.mkdir(t,{mode:a,flag:"w+"},(function(t){t?n(t):e()}))}))})(t).then((()=>{h(t,e,n).then(o).catch(c)})).catch(c)})):c(this.error("text not `string or buffer` ","writeTo"))}))};const a=parseInt("0755",8),d=parseInt("0666",8);function h(t,e,n=!1){let r="w+",o=i.default.writeFile;return n&&(o=i.default.appendFile,r="as+"),new Promise(((n,i)=>{o(t,e,{encoding:"utf8",mode:d,flag:r},(function(t){t?i(t):n()}))}))}function y(t,e,n=!1){let r="w+",o=i.default.writeFileSync;n&&(o=i.default.appendFileSync,r="as+");try{o(t,e,{encoding:"utf8",mode:d,flag:r})}catch(t){console.error(t)}}const p={};p.remove=function(t){const e=this;return new Promise(((n,r)=>{e.exists(t).then((()=>{(function(t){const e=this;return new Promise(((n,r)=>{try{i.default.statSync(t).isDirectory()?(delDir(t),e.deleteDir(t)):i.default.unlinkSync(t),n()}catch(t){r(t)}}))})(t).then((()=>{n()})).catch((t=>{r(t)}))})).catch((t=>{r(t)}))}))};const w={removeSync:function(t){const e=this.existsSync(t);e.dir?this.deleteDir(t):e.file&&i.default.unlinkSync(t)}};var S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function x(t){return null!=t&&(!!t._isBuffer||m(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&m(t.slice(0,0))}(t))}function m(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}void 0===S.TYPED_ARRAY_SUPPORT||S.TYPED_ARRAY_SUPPORT;const g={isUndef:function(t){return null==t},isTrue:function(t){return!0===t},isFalse:function(t){return!1===t},isString:function(t){return!(!t||"string"!=typeof t)},isObject:function(t){return!(!t||"object"!=typeof t)},isData:function(t){return!(!t||"string"!=typeof t&&!x(t))},deleteDir:function(t){let e=[];i.default.existsSync(t)&&(e=i.default.readdirSync(t),e.forEach((e=>{const n=t+"/"+e;i.default.statSync(n).isDirectory()?this.deleteDir(n):i.default.unlinkSync(n)})),i.default.rmdirSync(t))}},P=Object.assign(s,f,u,l,p,w,g),D=Object.assign(o,P);D.version='"0.0.7"',module.exports=D}));
