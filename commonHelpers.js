import{S as m,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="44324490-53902a9aa3f8bdbab535f7eec",d="https://pixabay.com/api/";async function y(s,t=1,o=12){const n=`${d}?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`,e=await fetch(n);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}const c=document.querySelector(".gallery");function h(){c.innerHTML=""}function g(s){const t=s.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:l,comments:u,downloads:f})=>`
    <div class="photo-card">
      <a href="${e}" class="gallery__item">
        <img src="${n}" alt="${r}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${a}</p>
        <p class="info-item"><b>Views</b> ${l}</p>
        <p class="info-item"><b>Comments</b> ${u}</p>
        <p class="info-item"><b>Downloads</b> ${f}</p>
      </div>
    </div>
  `).join("");c.insertAdjacentHTML("beforeend",t),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const b=document.querySelector("#search-form"),$=document.querySelector("#search-form input");document.querySelector(".gallery");b.addEventListener("submit",async s=>{s.preventDefault();const t=$.value.trim();if(t===""){i.error({title:"Error",message:"Search query cannot be empty"});return}h();try{const o=await y(t);if(o.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again."});return}g(o.hits)}catch(o){i.error({title:"Error",message:o.message})}});
//# sourceMappingURL=commonHelpers.js.map
