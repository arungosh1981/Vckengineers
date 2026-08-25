const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

$('#year').textContent = new Date().getFullYear();

$('#menuBtn').addEventListener('click', () => {
  $('#nav').classList.toggle('open');
});

$$('#nav a').forEach(a => a.addEventListener('click', () => $('#nav').classList.remove('open')));

let lang = localStorage.getItem('vckLang') || 'ta';
function setLanguage(next){
  lang = next;
  localStorage.setItem('vckLang', lang);
  $$('[data-ta][data-en]').forEach(el => {
    el.innerHTML = el.dataset[lang];
  });
  $('#langBtn').textContent = lang === 'ta' ? 'EN' : 'தமிழ்';
  document.documentElement.lang = lang;
}
$('#langBtn').addEventListener('click', () => setLanguage(lang === 'ta' ? 'en' : 'ta'));
setLanguage(lang);

const lightbox = $('#lightbox');
const lightboxImg = $('#lightboxImg');
$$('.photo, .event-photo').forEach(btn => btn.addEventListener('click', () => {
  lightboxImg.src = btn.dataset.full;
  lightbox.classList.add('show');
}));
$('#closeLightbox').addEventListener('click', () => lightbox.classList.remove('show'));
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) lightbox.classList.remove('show');
});
