const menuButton=document.querySelector('.menu-btn');const mobileMenu=document.querySelector('.mobile-menu');if(menuButton&&mobileMenu){menuButton.addEventListener('click',()=>mobileMenu.classList.toggle('open'));mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')))}document.getElementById('year').textContent=new Date().getFullYear();


// V17 mobile menu accessibility / positioning refinement
(function(){
 const toggle=document.querySelector('.nav-toggle, .menu-toggle, .hamburger');
 const menu=document.querySelector('.nav-links');
 if(!toggle||!menu) return;
 toggle.setAttribute('aria-expanded','false');
 const close=()=>{menu.classList.remove('active','open');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false')};
 toggle.addEventListener('click',()=>{const isOpen=menu.classList.contains('active')||menu.classList.contains('open');if(isOpen){close()}else{menu.classList.add('active');document.body.classList.add('menu-open');toggle.setAttribute('aria-expanded','true')}});
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();

// V25 targeted mobile menu behaviour
(function(){
  const toggle=document.querySelector('.menu-toggle, .mobile-menu-toggle');
  const menu=document.querySelector('.mobile-nav, .mobile-menu');
  if(!toggle || !menu) return;
  const setOpen=(open)=>{
    menu.classList.toggle('open',open); menu.classList.toggle('active',open);
    document.body.classList.toggle('menu-open',open);
    toggle.setAttribute('aria-expanded',String(open));
  };
  toggle.addEventListener('click',()=>setOpen(!menu.classList.contains('open') && !menu.classList.contains('active')));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') setOpen(false)});
})();

// V26 — ensure the actual hamburger control remains independently positioned and usable on mobile.
(function(){
  const btn=document.querySelector('.menu-btn');
  const menu=document.querySelector('.mobile-menu');
  if(!btn || !menu) return;
  btn.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
  btn.addEventListener('click',()=>{
    const open=menu.classList.contains('open');
    btn.setAttribute('aria-expanded',String(open));
    btn.setAttribute('aria-label',open?'Open menu':'Close menu');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>btn.setAttribute('aria-expanded','false')));
})();
