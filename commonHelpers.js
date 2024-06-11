import{S as m,i as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="44324490-53902a9aa3f8bdbab535f7eec",h="https://pixabay.com/api/";async function g(s,r=1,o=12){const n=`${h}?key=${y}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`,e=await fetch(n);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}const l=document.querySelector(".gallery");function b(){l.innerHTML=""}function L(s){const r=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:u,comments:d,downloads:f})=>`
    <div class="photo-card">
      <a href="${e}" class="gallery__item">
        <img src="${n}" alt="${t}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${i}</p>
        <p class="info-item"><b>Views</b> ${u}</p>
        <p class="info-item"><b>Comments</b> ${d}</p>
        <p class="info-item"><b>Downloads</b> ${f}</p>
      </div>
    </div>
  `).join("");l.insertAdjacentHTML("beforeend",r),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const $=document.querySelector("#search-form"),v=document.querySelector("#search-form input");document.querySelector(".gallery");const c=document.getElementById("loader");$.addEventListener("submit",async s=>{s.preventDefault(),c.classList.remove("hidden");const r=v.value.trim();if(r===""){a("Search query cannot be empty");return}b();try{const o=await g(r);if(o.hits.length===0){a("Sorry, there are no images matching your search query.Please try again.");return}L(o.hits)}catch(o){a(o.message)}finally{c.classList.add("hidden")}});function a(s){p.error({title:"Error",message:s,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
