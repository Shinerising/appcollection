(()=>{"use strict";class e{}e.URL="app.awayne.me",e.Owner="Shinerising",e.API="https://github-api.awayne.me/api",e.Content="https://github-api.awayne.me/content",e.Download="https://github-api.awayne.me/download";var t=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}l((i=i.apply(e,t||[])).next())}))};class n{static timeout(e){return t(this,void 0,void 0,(function*(){return new Promise((t=>{setTimeout((()=>{t(!0)}),e)}))}))}static nextFrame(){return t(this,void 0,void 0,(function*(){return new Promise((e=>{requestAnimationFrame((()=>{e(!0)}))}))}))}}class i{static load(){this.sitename=document.querySelector("#sitename"),this.titleBox=document.querySelector("#title"),this.coverGlass=document.querySelector("#cover>.cover-glass"),this.card=document.querySelector(".card"),this.collection=document.querySelector(".collection")}static query(e){return document.querySelector(e)}static queryAll(e){return document.querySelectorAll(e)}}var a=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function r(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}l((i=i.apply(e,t||[])).next())}))};HTMLElement.prototype.addClass=function(e){this.classList.contains(e)||this.classList.add(e)},HTMLElement.prototype.removeClass=function(e){this.classList.contains(e)&&this.classList.remove(e)},HTMLElement.prototype.toggleClass=function(e){this.classList.contains(e)?this.classList.remove(e):this.classList.add(e)},HTMLElement.prototype.val=function(e){return""===e?this.value="":e&&(this.value=e),this.value},(new class{start(){return a(this,void 0,void 0,(function*(){yield this.waitDocumentReady(),i.load(),this.startTypingTitle("Sic Parvis Magna."),this.addScrollHandler(),class{static startFetching(){return t(this,void 0,void 0,(function*(){const n=yield this.fetchData("list.json");i.card.addClass("visible"),n.map((n=>t(this,void 0,void 0,(function*(){const t=document.createElement("section");t.addClass("repo"),i.collection.appendChild(t);try{const i=yield this.fetchData(`${e.API}/${e.Owner}/${n.name}`),a=yield this.fetchData(`${e.API}/${e.Owner}/${n.name}/releases`),o=this.generateNode(n,i,a);yield this.applyNode(t,o)}catch(e){t.remove()}}))))}))}static applyNode(e,i){return t(this,void 0,void 0,(function*(){e.innerHTML+=i,yield n.nextFrame(),e.addClass("visible")}))}static generateNode(t,n,i){const a=i.filter((e=>!e.prerelease))[0],o=i.filter((e=>e.prerelease))[0];return`\n<div class="repo-cover">\n<img src="${e.Content}/${n.full_name}/contents/preview.jpg" alt="${n.description}"/>\n</div>\n<div class="repo-info">\n<div class="repo-header">\n<div class="repo-icon">\n<img src="${e.Content}/${n.full_name}/contents/icon.png" alt="${n.name}">\n</div>\n<h2 class="repo-title"><a href="${n.html_url}">${t.full_name||n.name}</a></h2>\n</div>\n<div class="repo-labelbox">\n<span>${n.language}</span>${n.topics.map((e=>`<span>${e}</span>`)).join("")}\n</div>\n<p class="repo-description">${n.description}</p>\n<ul class="repo-property">\n<li class="icon-monitor" title="Platform">${t.platform}</li>\n<li class="icon-tag" title="Latest version">${(null==a?void 0:a.tag_name.toUpperCase())||"Preview"}</li>\n<li class="icon-code" title="Code size">${this.getSize(n.size)}</li>\n<li class="icon-clock" title="Updated time">${this.timeDifference((new Date).getTime(),new Date(n.updated_at).getTime())}</li>\n</ul>\n</div>\n<div class="repo-link">\n<a class="link-github icon-book-open" href="${t.document}">Document</a>\n<a class="link-github icon-download" href="${(null==o?void 0:o.assets[0])?`${o.assets[0].url.replace("https://api.github.com/repos",e.Download)}?file=${o.assets[0].name}`:""}">Preview</a>\n<a class="link-github icon-download" href="${(null==a?void 0:a.assets[0])?`${a.assets[0].url.replace("https://api.github.com/repos",e.Download)}?file=${a.assets[0].name}`:""}">Package ${(null==a?void 0:a.tag_name.toUpperCase())||"Release"}</a>\n</div>\n    `}static fetchData(e){return t(this,void 0,void 0,(function*(){return yield fetch(e).then((e=>e.json())).then((e=>e))}))}static getSize(e){return e<1024?e+"KB":Math.round(e/1024)+"MB"}static timeDifference(e,t){const n=new Intl.RelativeTimeFormat(navigator.language||"en"),i=36e5,a=864e5,o=2592e6,s=31536e6,r=e-t;return r<6e4?n.format(-1*Math.round(r/1e3),"second"):r<i?n.format(-1*Math.round(r/6e4),"minute"):r<a?n.format(-1*Math.round(r/i),"hour"):r<o?n.format(-1*Math.round(r/a),"day"):r<s?n.format(-1*Math.round(r/o),"month"):n.format(-1*Math.round(r/s),"year")}}.startFetching();try{yield this.registerServiceWorker()}catch(e){console.error(e)}}))}registerServiceWorker(){return a(this,void 0,void 0,(function*(){"serviceWorker"in navigator&&(yield navigator.serviceWorker.register("service-worker.js"))}))}startTypingTitle(e){return a(this,void 0,void 0,(function*(){yield n.timeout(500),i.query("#titleBox").style.opacity="1",i.query("#titleBack").textContent=e,yield n.timeout(1e3);for(const t of e.split(""))yield n.timeout(50+Math.round(200*Math.random())),i.titleBox.innerHTML+=" "===t?"&nbsp;":t}))}addScrollHandler(){let e=window.scrollY,t=!1;this.setScrollValue(e),document.addEventListener("scroll",(()=>{e=window.scrollY,t||(window.requestAnimationFrame((()=>{this.setScrollValue(e),t=!1})),t=!0)}))}setScrollValue(e){const t=Math.min(3,Math.min(e/100,20)),n=Math.min(5,Math.min(e/100,20)),a=Math.min(2,Math.min(e/100,10)-2),o=Math.max(0,2-Math.max(e/200,1)),s=`saturate(180%) blur(${n}rem)`;i.coverGlass.setAttribute("style",`-webkit-backdrop-filter:${s};backdrop-filter:${s}`),i.titleBox.setAttribute("style",`filter:blur(${a}rem);opacity:${o}`),i.sitename.setAttribute("style",`filter:blur(${t}rem);opacity:${o}`)}waitDocumentReady(){return new Promise((e=>{if("complete"===document.readyState||"interactive"===document.readyState)e(!0);else{const t=()=>{document.removeEventListener("DOMContentLoaded",t),e(!0)};document.addEventListener("DOMContentLoaded",t)}}))}}).start()})();