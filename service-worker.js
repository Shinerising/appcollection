if(!self.define){let e,o={};const i=(i,n)=>(i=new URL(i+".js",n).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let f={};const s=e=>i(e,r),l={module:{uri:r},exports:f,require:s};o[r]=Promise.all(n.map((e=>l[e]||s(e)))).then((e=>(t(...e),f)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"font/fontello.eot",revision:"d0dbb07e4ef465cd471e648280fd441e"},{url:"font/fontello.ttf",revision:"2929a50d5e3168e3c30bf93c7bf15181"},{url:"font/fontello.woff",revision:"1610770718bcee39707cb9505e381150"},{url:"font/fontello.woff2",revision:"691fde671fc9399d9994754347c30450"},{url:"index.html",revision:"9a2a323366b2099a6495d7686083af13"},{url:"list.json",revision:"ba2ead52cc5528438351a0c771f7428b"},{url:"main.js",revision:"e9769e334753c1e6187770e1ac35b9cd"},{url:"site.webmanifest",revision:"5640d6fe2c50c35d0ecd65b034efa7e6"},{url:"style/main.css",revision:"70b673a9e7f0b0edd5d73db9df5b08d4"}],{})}));
