import{a as d,S as u,i as a}from"./assets/vendor-w0bmTLvQ.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="51715057-18e32c1eb7da364006690b614",f="https://pixabay.com/api/",m=d.create({baseURL:f,params:{key:p,image_type:"photo",orientation:"horizontal"}});function g(s){return m.get("",{params:{q:s}}).then(n=>n.data)}const h=new u(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.getElementById("gallery"),o=document.getElementById("loader");function y(s){if(!Array.isArray(s)||s.length===0)return;const n=s.map(t=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${t.largeImageURL}">
          <div class="photo-card">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b><span>${t.likes}</span></p>
              <p class="info-item"><b>Views</b><span>${t.views}</span></p>
              <p class="info-item"><b>Comments</b><span>${t.comments}</span></p>
              <p class="info-item"><b>Downloads</b><span>${t.downloads}</span></p>
            </div>
          </div>
        </a>
      </li>`).join("");c.insertAdjacentHTML("beforeend",n),h.refresh()}function b(){c.innerHTML=""}function L(){o&&(o.classList.remove("hidden"),o.setAttribute("aria-hidden","false"))}function w(){o&&(o.classList.add("hidden"),o.setAttribute("aria-hidden","true"))}const E=document.getElementById("search-form"),v=document.getElementById("search-text");E.addEventListener("submit",A);function A(s){s.preventDefault();const n=v.value.trim();if(n===""){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}b(),L(),g(n).then(t=>{const i=t.hits||[];if(i.length===0){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i),a.success({title:"Found",message:`Found ${t.totalHits} images.`,position:"topRight"})}).catch(t=>{console.error("Error fetching images:",t),a.error({title:"Error",message:"Something went wrong while fetching images. Try again later.",position:"topRight"})}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
