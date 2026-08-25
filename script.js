const menu=document.getElementById('menu'),links=document.getElementById('links'),top=document.getElementById('top');
menu.onclick=()=>links.classList.toggle('open');
document.querySelectorAll('#links a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
onscroll=()=>top.style.display=scrollY>450?'block':'none';
top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.querySelectorAll('.gallery img').forEach(img=>img.onerror=()=>img.closest('figure').remove());