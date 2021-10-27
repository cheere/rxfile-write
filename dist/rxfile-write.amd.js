/*!
 * rxfile-write
 * version: 0.0.3
 * repo: https://github.com/cheere/rxfile-write
 * build: 2021-10-27 14:46:33
 */
define(["fs","path"],(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),i=n(e);const c={error:function(t){if(t)t="unknow";else if("object"==typeof err)return err;return new Error("rxrrw-error=> read.js -> "+err)}},o={exists:function(t){const e=this;return new Promise(((n,i)=>{t?r.default.stat(t,((t,r)=>{t?i(t):r.isDirectory()?n({dir:!0,file:!1}):r.isFile()?n({dir:!1,file:!0}):i(e.error("rxrrw-exist=> stats not dir/file"))})):i(e.error("rxrrw-exist=> path undefined"))}))},existsSync:function(t){const e=this;if(!t)return void reject(e.error("rxrrw-existsSync=> path undefined"));const n=r.default.statSync(t);return n.isDirectory()?{dir:!0,file:!1}:n.isFile()?{dir:!1,file:!0}:(e.error("rxrrw-exist=> stats not dir/file"),{dir:!1,file:!1})}},s={};s.read=function(t){const e=this;return new Promise(((n,i)=>{e.exists(t).then((()=>{(function(t){return new Promise(((e,n)=>{r.default.readFile(t,"utf-8",((t,r)=>{t?n(t):e(r)}))}))})(t).then((t=>{n(t)})).catch((t=>{i(t)}))})).catch((t=>{i(t)}))}))};const u={};u.cp=function(t,e){const n=this;return new Promise(((i,c)=>{n.exists(path).then((()=>{(function(t,e){return new Promise(((n,i)=>{r.default.copyFile(t,e,(function(t){t?n():i(t)}))}))})(t,e).then((()=>{i()})).catch((t=>{c(t)}))})).catch((t=>{c(t)}))}))},u.cpSync=function(t,e){return!!this.existsSync(path).file&&function(t,e){try{r.default.copyFileSync(t,e)}catch(t){return!1}return!0}(t,e)};const f={write:function(t,e){return this.writeTo(t,e)},writeSync:function(t,e){h(t,e)},writeAppend:function(t,e){return this.writeTo(t,e,!0)},writeAppendSync:function(t,e){h(t,e,!0)}};f.writeTo=function(t,e,n=!1){return new Promise(((c,o)=>{const s=i.default.dirname(t);this.exists(s).then((()=>{l(t,e,n).then(c).catch(o)})).catch((()=>{(function(t){return new Promise(((e,n)=>{r.default.mkdir(t,{mode:a,flag:"w+"},(function(t){t?n(t):e()}))}))})(t).then((()=>{l(t,e,n).then(c).catch(o)})).catch(o)}))}))};const a=parseInt("0755",8),d=parseInt("0666",8);function l(t,e,n=!1){let i="w+",c=r.default.writeFile;return n&&(c=r.default.appendFile,i="as+"),new Promise(((n,r)=>{c(t,e,{encoding:"utf8",mode:d,flag:i},(function(t){t?r(t):n()}))}))}function h(t,e,n=!1){let i="w+",c=r.default.writeFileSync;n&&(c=r.default.appendFileSync,i="as+");try{c(t,e,{encoding:"utf8",mode:d,flag:i})}catch(t){console.error(t)}}const w={};function y(t){let e=[];r.default.existsSync(t)&&(e=r.default.readdirSync(t),e.forEach((e=>{const n=t+"/"+e;r.default.statSync(n).isDirectory()?y(n):r.default.unlinkSync(n)})),r.default.rmdirSync(t))}w.remove=function(t){const e=this;return new Promise(((n,i)=>{e.exists(t).then((()=>{(function(t){return new Promise(((e,n)=>{try{r.default.statSync(t).isDirectory()?y(t):r.default.unlinkSync(t),e()}catch(t){console.log("rxrrw-remove=> error=",t),n(t)}}))})(t).then((()=>{n()})).catch((t=>{i(t)}))})).catch((t=>{i(t)}))}))};const p=Object.assign(o,s,u,f,w),m=Object.assign(c,p);m.version='"0.0.3"',module.exports=m}));
