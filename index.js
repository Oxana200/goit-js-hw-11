import{a as f,i as c,S as g}from"./assets/vendor-D4PXy47H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m="48859120-c5edc5c574d1328ed42f58f74",h="https://pixabay.com/api/";async function y(r){try{const t=await f.get(`${h}`,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}});return!t.data.hits||t.data.hits.length===0?{hits:[],totalHits:0}:{hits:t.data.hits,totalHits:t.data.totalHits}}catch(t){return c.error({title:"Error",message:"Failed to fetch images. Try again!"}),console.error("Fetch error:",t),{hits:[],totalHits:0}}}let i;function B(r){const t=document.querySelector(".gallery");t.innerHTML="";const a=r.map(({webformatURL:o,largeImageURL:e,tags:s,likes:n,views:p,comments:u,downloads:d})=>`<a href="${e}" class="gallery-item">
            <img src="${o}" alt="${s}" loading="lazy" />
            <div class="info">
                <p><span class="label">Likes</span><span class="value">${n}</span></p>
                <p><span class="label">Views</span><span class="value">${p}</span></p>
                <p><span class="label">Comments</span><span class="value">${u}</span></p>
                <p><span class="label">Downloads</span><span class="value">${d}</span></p>
            </div>
        </a>`).join("");t.insertAdjacentHTML("beforeend",a),i||(i=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})),setTimeout(()=>{i.refresh()},100)}const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABLSURBVHgBpZLdCQAgCISlidp/iUZolCsfgijTDgVB8Dv8FQBtepXAlFF2Bd0TXYwneuasRFh9B35aPUUmXCRjVEvU0NRa6cOxrzEAbo/NWb7D4BQAAAAASUVORK5CYII=",l=document.querySelector("#search-form"),w=document.querySelector(".gallery"),A=document.querySelector(".loader");l.addEventListener("submit",async r=>{r.preventDefault();const t=r.target.elements.searchQuery.value.trim();if(!t){c.warning({title:"Warning",message:"Please enter a search term!"});return}w.innerHTML="",A.classList.remove("hidden");const{hits:a,totalHits:o}=await y(t);if(A.classList.add("hidden"),a.length===0){c.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff",timeout:5e3,iconUrl:b,close:!1,buttons:[[`<button class="toast-close-btn">
                <img src="${S}" style="width: 12px; height: 12px;">
            </button>`,function(e,s){e.hide({transitionOut:"fadeOut"},s)}]]});return}B(a),l.reset()});
//# sourceMappingURL=index.js.map
