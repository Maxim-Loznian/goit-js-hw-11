import{S as f,i as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="44324490-53902a9aa3f8bdbab535f7eec",y="https://pixabay.com/api/";async function g(s,r=1,o=12){const i=`${y}?key=${h}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`,e=await fetch(i);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}const l=document.querySelector(".gallery");function b(){l.innerHTML=""}function L(s){const r=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:d,comments:u,downloads:m})=>`
    <div class="photo-card">
      <a href="${e}" class="gallery__item">
        <img src="${i}" alt="${t}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${n}</p>
        <p class="info-item"><b>Views</b> ${d}</p>
        <p class="info-item"><b>Comments</b> ${u}</p>
        <p class="info-item"><b>Downloads</b> ${m}</p>
      </div>
    </div>
  `).join("");l.insertAdjacentHTML("beforeend",r),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const $=document.querySelector("#search-form"),v=document.querySelector("#search-form input");document.querySelector(".gallery");const a=document.getElementById("loader");$.addEventListener("submit",async s=>{s.preventDefault(),a.classList.remove("hidden");const r=v.value.trim();if(r===""){setTimeout(()=>{c("Search query cannot be empty"),a.classList.add("hidden")},2e3);return}b();try{const o=await g(r);setTimeout(()=>{o.hits.length===0?c("Sorry, there are no images matching your search query. Please try again."):L(o.hits),a.classList.add("hidden")},2e3)}catch(o){setTimeout(()=>{c(o.message),a.classList.add("hidden")},2e3)}});function c(s){p.error({title:"Error",message:s,position:"topRight",timeout:5e3})}
//# sourceMappingURL=commonHelpers.js.map
