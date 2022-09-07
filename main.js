(()=>{"use strict";class t{}t.URL="app.awayne.me",t.Owner="Shinerising",t.API="https://github-api.aw-api-request.workers.dev/api";var e=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((i=i.apply(t,e||[])).next())}))};class n{static timeout(t){return e(this,void 0,void 0,(function*(){return new Promise((e=>{setTimeout((()=>{e(!0)}),t)}))}))}static nextFrame(){return e(this,void 0,void 0,(function*(){return new Promise((t=>{requestAnimationFrame((()=>{t(!0)}))}))}))}static debounce(t,e){let n;return(...i)=>{clearTimeout(n),n=setTimeout((()=>{clearTimeout,t(...i)}),e)}}static isURL(t){return t.length<2083&&/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/gi.test(t)}}class i{static load(){this.sitename=document.querySelector("#sitename"),this.titleBox=document.querySelector("#title"),this.coverGlass=document.querySelector("#cover>.cover-glass"),this.card=document.querySelector(".card"),this.collection=document.querySelector(".collection")}static query(t){return document.querySelector(t)}static queryAll(t){return document.querySelectorAll(t)}}var s=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((i=i.apply(t,e||[])).next())}))};HTMLElement.prototype.addClass=function(t){this.classList.contains(t)||this.classList.add(t)},HTMLElement.prototype.removeClass=function(t){this.classList.contains(t)&&this.classList.remove(t)},HTMLElement.prototype.toggleClass=function(t){this.classList.contains(t)?this.classList.remove(t):this.classList.add(t)},HTMLElement.prototype.val=function(t){return""===t?this.value="":t&&(this.value=t),this.value},(new class{start(){return s(this,void 0,void 0,(function*(){yield this.waitDocumentReady(),i.load(),this.startTypingTitle("Sic Parvis Magna."),this.addScrollHandler(),class{static startFetching(){return e(this,void 0,void 0,(function*(){const e=yield this.fetchData("list.json");i.card.addClass("visible");for(const n of e){const e=yield this.fetchData(`${t.API}\\${t.Owner}\\${n.name}`),i=yield this.fetchData(`${t.API}\\${t.Owner}\\${n.name}\\releases`),s=this.generateNode(n,e,i);this.applyNode(s)}}))}static applyNode(t){return e(this,void 0,void 0,(function*(){i.collection.innerHTML+=t,yield n.nextFrame(),i.queryAll("section.repo").forEach((t=>t.addClass("visible")))}))}static generateNode(t,e,n){const i=n.filter((t=>!t.prerelease))[0],s=n.filter((t=>t.prerelease))[0],r=i||s;return`\n<section class="repo">\n<div class="repo-cover">\n<img src="https://raw.githubusercontent.com/${e.full_name}/master/preview.jpg"/>\n</div>\n<div class="repo-info">\n<div class="repo-icon">\n<img src="https://raw.githubusercontent.com/${e.full_name}/master/icon.png">\n</div>\n<h2 class="repo-title">${t.full_name||e.name}</h2>\n<div class="repo-labelbox">\n<span>${e.language}</span>${e.topics.map((t=>`<span>${t}</span>`)).join("")}\n</div>\n<p class="repo-description">${e.description}</p>\n</div>\n<div class="repo-link">\n<a class="link-github icon-github" href="${e.html_url}">SOURCE CODE</a>\n<a class="link-github icon-tag" href="${(null==r?void 0:r.html_url)||""}">${r.prerelease?"PREVIEW":(null==r?void 0:r.name.toUpperCase())||"None"}</a>\n<a class="link-github icon-download" href="${(null==r?void 0:r.assets[0].browser_download_url)||""}">DOWNLOAD</a>\n</div>\n</section>\n    `}static fetchData(t){return e(this,void 0,void 0,(function*(){return yield fetch(t).then((t=>t.json())).then((t=>t))}))}}.startFetching();try{yield this.registerServiceWorker()}catch(t){console.error(t)}}))}registerServiceWorker(){return s(this,void 0,void 0,(function*(){navigator}))}startTypingTitle(t){return s(this,void 0,void 0,(function*(){yield n.timeout(500),i.query("#titleBox").style.opacity="1",i.query("#titleBack").textContent=t,yield n.timeout(1e3);for(const e of t.split(""))yield n.timeout(50+Math.round(200*Math.random())),i.titleBox.innerHTML+=" "===e?"&nbsp;":e}))}addScrollHandler(){let t=window.scrollY,e=!1;this.setScrollValue(t),document.addEventListener("scroll",(()=>{t=window.scrollY,e||(window.requestAnimationFrame((()=>{this.setScrollValue(t),e=!1})),e=!0)}))}setScrollValue(t){const e=Math.min(3,Math.min(t/100,20)),n=Math.min(5,Math.min(t/100,20)),s=Math.min(2,Math.min(t/100,10)-2),r=Math.max(0,2-Math.max(t/200,1)),o=`saturate(180%) blur(${n}rem)`;i.coverGlass.setAttribute("style",`-webkit-backdrop-filter:${o};backdrop-filter:${o}`),i.titleBox.setAttribute("style",`filter:blur(${s}rem);opacity:${r}`),i.sitename.setAttribute("style",`filter:blur(${e}rem);opacity:${r}`)}waitDocumentReady(){return new Promise((t=>{if("complete"===document.readyState||"interactive"===document.readyState)t(!0);else{const e=()=>{document.removeEventListener("DOMContentLoaded",e),t(!0)};document.addEventListener("DOMContentLoaded",e)}}))}}).start()})();