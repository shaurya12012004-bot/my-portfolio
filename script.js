(function(){
  var root=document.documentElement, bar=document.getElementById('topbar'), top=document.getElementById('totop');
  try{var t=localStorage.getItem('theme'); if(t) root.setAttribute('data-theme',t);}catch(e){}
  document.getElementById('theme').onclick=function(){
    var cur=root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var next=cur==='dark'?'light':'dark'; root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next);}catch(e){}
  };
  var menu=document.getElementById('menu'), mb=document.getElementById('menubtn');
  mb.onclick=function(){var o=menu.classList.toggle('open'); mb.setAttribute('aria-expanded',o); mb.textContent=o?'✕':'☰';};
  menu.querySelectorAll('a').forEach(function(a){a.onclick=function(){menu.classList.remove('open');mb.textContent='☰';mb.setAttribute('aria-expanded',false);};});
  window.addEventListener('scroll',function(){var y=scrollY>20; bar.classList.toggle('scrolled',y); top.classList.toggle('show',scrollY>600);},{passive:true});
  top.onclick=function(){scrollTo({top:0,behavior:'smooth'});};
  var links={}; menu.querySelectorAll('a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a;});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){for(var k in links)links[k].classList.remove('active'); if(links[e.target.id])links[e.target.id].classList.add('active');}});},{rootMargin:'-45% 0px -50% 0px'});
  ['about','work','skills','contact'].forEach(function(id){var el=document.getElementById(id); if(el) io.observe(el);});
})();
