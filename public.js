const {ongs,empreendedoras,profissionais}=window.PONTE_PUBLIC;
const $=selector=>document.querySelector(selector);
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const normalize=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const filterMap=[['ngoState','state'],['ngoRegion','region'],['ngoCity','city'],['ngoReach','reach'],['ngoAudience','audience'],['ngoArea','area'],['ngoSupport','support'],['ngoService','services']];

for(const [id,key] of filterMap){
  const values=[...new Set(ongs.map(item=>item[key]))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  $('#'+id).innerHTML+=values.map(value=>`<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join('');
  $('#'+id).addEventListener('change',renderOngs);
}
$('#ngoSearch').addEventListener('input',renderOngs);
$('#clearNgoFilters').addEventListener('click',()=>{for(const [id] of filterMap)$('#'+id).value='';$('#ngoSearch').value='';renderOngs();});
function renderOngs(){
  const term=normalize($('#ngoSearch').value.trim());
  const results=ongs.filter(item=>filterMap.every(([id,key])=>!$('#'+id).value||item[key]===$('#'+id).value)&&(!term||normalize(Object.values(item).join(' ')).includes(term)));
  $('#ngoCount').textContent=`${results.length} ${results.length===1?'organização demonstrativa encontrada':'organizações demonstrativas encontradas'}`;
  $('#ngoResults').innerHTML=results.length?results.map(item=>`<article class="directory-card"><div class="card-topline"><span class="category">ONG · EXEMPLO FICTÍCIO</span><span class="fictional">Demonstração</span></div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.area)} · ${escapeHtml(item.audience)}</p><div class="card-meta"><span>Sede: ${escapeHtml(item.city)}/${escapeHtml(item.state)}</span><span>Atendimento: ${escapeHtml(item.reach)}</span><span>${escapeHtml(item.services)}</span></div><a class="card-action" href="perfil.html?tipo=ong&id=${encodeURIComponent(item.id)}">Ver página institucional ↗</a></article>`).join(''):'<div class="empty-state"><strong>Nenhuma organização demonstrativa encontrada.</strong><p>Experimente outros filtros. O diretório real dependerá de perfis publicados com autorização.</p></div>';
}
$('#entrepreneurShowcase').innerHTML=empreendedoras.map((item,index)=>`<article class="showcase-card"><div class="showcase-art art-${index+1}" aria-hidden="true"><span>${String(index+1).padStart(2,'0')}</span><i>✳</i></div><div class="showcase-body"><small>EXEMPLO FICTÍCIO · ${escapeHtml(item.category.toUpperCase())}</small><h3>${escapeHtml(item.brand)}</h3><p>${escapeHtml(item.summary)}</p><a href="perfil.html?tipo=empreendedora&id=${encodeURIComponent(item.id)}">Ver página de exemplo ↗</a></div></article>`).join('');
$('#professionalShowcase').innerHTML=profissionais.map((item,index)=>`<article class="showcase-card"><div class="showcase-art professional-art art-${index+1}" aria-hidden="true"><span>${String(index+1).padStart(2,'0')}</span><i>◌</i></div><div class="showcase-body"><small>EXEMPLO FICTÍCIO · ${escapeHtml(item.profession.toUpperCase())}</small><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.summary)}</p><a href="perfil.html?tipo=profissional&id=${encodeURIComponent(item.id)}">Ver página de exemplo ↗</a></div></article>`).join('');
$('#homeJourneys').innerHTML=window.PONTE_JOURNEYS.slice(0,3).map(item=>`<a class="home-journey ${escapeHtml(item.color)}" href="oncoflix.html?jornada=${encodeURIComponent(item.id)}"><small>JORNADA DE EXEMPLO · ${escapeHtml(item.category.toUpperCase())}</small><strong>${escapeHtml(item.title)}</strong><span>Conhecer a jornada ↗</span></a>`).join('');
$('#menuButton').addEventListener('click',()=>{const open=$('#mainNav').classList.toggle('open');$('#menuButton').setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#mainNav a').forEach(link=>link.addEventListener('click',()=>{$('#mainNav').classList.remove('open');$('#menuButton').setAttribute('aria-expanded','false');}));
$('#year').textContent=new Date().getFullYear();
renderOngs();
