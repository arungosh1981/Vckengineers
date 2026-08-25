const menuBtn=document.getElementById("menuBtn");const nav=document.getElementById("mainNav");if(menuBtn){menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}
const topBtn=document.getElementById("topBtn");window.addEventListener("scroll",()=>{topBtn.style.display=window.scrollY>500?"block":"none"});topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
const lightbox=document.getElementById("lightbox"),lightboxImg=document.getElementById("lightboxImg"),closeLightbox=document.getElementById("closeLightbox");document.querySelectorAll(".gallery-grid img").forEach(img=>img.addEventListener("click",()=>{lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false")}));function closeBox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true")}closeLightbox.addEventListener("click",closeBox);lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeBox()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeBox()});


/* Event gallery lightbox */
document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll("[data-lightbox='event']");
  if (!photos.length) return;
  const overlay = document.createElement("div");
  overlay.className = "vck-lightbox";
  overlay.innerHTML = '<button class="vck-lightbox-close" aria-label="Close">×</button><img alt="">';
  document.body.appendChild(overlay);
  const image = overlay.querySelector("img");
  const close = () => overlay.classList.remove("open");
  photos.forEach(btn => btn.addEventListener("click", () => {
    image.src = btn.dataset.src;
    image.alt = btn.querySelector("img")?.alt || "";
    overlay.classList.add("open");
  }));
  overlay.addEventListener("click", e => { if (e.target === overlay || e.target === overlay.querySelector(".vck-lightbox-close")) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
});
