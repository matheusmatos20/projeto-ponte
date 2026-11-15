const journeyLinks=window.PONTE_JOURNEYS.filter(item=>['letramento','advocacy','rede-apoio'].includes(item.id));
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
document.querySelector('#homeJourneys').innerHTML=journeyLinks.map(item=>`<a href="oncoflix.html?jornada=${encodeURIComponent(item.id)}"><span>JORNADA DE EXEMPLO</span><strong>${escapeHtml(item.title)}</strong><b aria-hidden="true">↗</b></a>`).join('');
const menuButton=document.querySelector('#menuButton');
const nav=document.querySelector('#mainNav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}));
document.querySelector('#year').textContent=new Date().getFullYear();
