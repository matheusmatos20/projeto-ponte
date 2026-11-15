const {ongs:allOngs,empreendedoras,profissionais}=window.PONTE_PUBLIC;
const ongs=allOngs.filter(item=>item.publicationStatus==='approved'&&item.publicConsent===true);
const $=selector=>document.querySelector(selector);
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const normalize=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const needs=[
  {name:'Apoio ao paciente',terms:['paciente','tratamento','orientação']},
  {name:'Apoio à família',terms:['familia','familiar','cuidador']},
  {name:'Acolhimento',terms:['acolhimento','escuta','acolher']},
  {name:'Apoio psicológico',terms:['psicologia','psicologo','saúde mental','emocional']},
  {name:'Doação de perucas',terms:['peruca','cabelo']},
  {name:'Próteses e acessórios',terms:['protese','acessorio']},
  {name:'Assistência jurídica',terms:['juridico','advogado','direito']},
  {name:'Hospedagem e transporte',terms:['hospedagem','transporte','deslocamento']},
  {name:'Atividades e reabilitação',terms:['atividade','reabilitacao','fisioterapia']},
  {name:'Direitos e benefícios',terms:['direitos','beneficio','auxilio']}
];
const filters=[['ngoState','state'],['ngoCity','city'],['ngoReach','reach'],['ngoAudience','audience'],['ngoArea','area'],['ngoSupport','support'],['ngoService','services']];
const selectedNeeds=new Set();
let locationMode='brasil';
const words=value=>Array.isArray(value)?value.join(' '):String(value??'');
const orgText=item=>normalize([item.name,item.area,item.audience,item.support,words(item.services),words(item.needs)].join(' '));
const matchesNeed=(item,need)=>{
  const text=normalize([words(item.needs),words(item.services)].join(' '));
  return [need.name,...need.terms].some(term=>text.includes(normalize(term)));
};
for(const [id,key] of filters){
  const values=[...new Set(ongs.map(item=>item[key]).filter(Boolean).flatMap(value=>Array.isArray(value)?value:[value]))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  $('#'+id).innerHTML+=values.map(value=>`<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join('');
  $('#'+id).addEventListener('change',renderOngs);
}
$('#ngoSearch').addEventListener('input',()=>{renderSuggestions();renderOngs();});
$('#ngoRegion').addEventListener('change',renderOngs);
document.querySelectorAll('[data-location]').forEach(button=>button.addEventListener('click',()=>{
  locationMode=button.dataset.location;
  document.querySelectorAll('[data-location]').forEach(choice=>{const active=choice===button;choice.classList.toggle('active',active);choice.setAttribute('aria-pressed',String(active));});
  $('#regionChoice').hidden=locationMode!=='regiao';renderOngs();
}));
$('#clearNgoFilters').addEventListener('click',()=>{
  selectedNeeds.clear();$('#ngoSearch').value='';$('#ngoRegion').value='';
  for(const [id] of filters)$('#'+id).value='';
  document.querySelector('[data-location="brasil"]').click();renderNeeds();renderSuggestions();renderOngs();
});
function toggleNeed(name){selectedNeeds.has(name)?selectedNeeds.delete(name):selectedNeeds.add(name);renderNeeds();renderSuggestions();renderOngs();}
function renderNeeds(){
  $('#needSuggestions').innerHTML=needs.map(need=>`<button type="button" data-need="${escapeHtml(need.name)}" aria-pressed="${selectedNeeds.has(need.name)}" class="${selectedNeeds.has(need.name)?'active':''}">${escapeHtml(need.name)}</button>`).join('');
  document.querySelectorAll('[data-need]').forEach(button=>button.addEventListener('click',()=>toggleNeed(button.dataset.need)));
}
function renderSuggestions(){
  const query=normalize($('#ngoSearch').value.trim());
  const suggestions=query?needs.filter(need=>!selectedNeeds.has(need.name)&&[need.name,...need.terms].some(term=>normalize(term).includes(query)||query.includes(normalize(term)))):[];
  $('#searchSuggestions').innerHTML=suggestions.map(need=>`<button type="button" data-suggestion="${escapeHtml(need.name)}">${escapeHtml(need.name)} <span>Adicionar ↗</span></button>`).join('');
  document.querySelectorAll('[data-suggestion]').forEach(button=>button.addEventListener('click',()=>{$('#ngoSearch').value='';toggleNeed(button.dataset.suggestion);}));
}
function renderOngs(){
  const term=normalize($('#ngoSearch').value.trim());
  const region=$('#ngoRegion').value;
  const results=ongs.filter(item=>{
    const matchesText=!term||orgText(item).includes(term)||needs.some(need=>[need.name,...need.terms].some(alias=>normalize(alias).includes(term))&&matchesNeed(item,need));
    const matchesNeeds=[...selectedNeeds].every(name=>matchesNeed(item,needs.find(need=>need.name===name)));
    const matchesLocation=locationMode==='brasil'||locationMode==='online'?(locationMode==='brasil'||item.online===true):(!region||item.region===region);
    const matchesFilters=filters.every(([id,key])=>!$('#'+id).value||words(item[key]).includes($('#'+id).value));
    return matchesText&&matchesNeeds&&matchesLocation&&matchesFilters;
  });
  $('#ngoCount').textContent=ongs.length?`${results.length} ${results.length===1?'organização encontrada':'organizações encontradas'}`:'Organizações disponíveis';
  $('#ngoResults').innerHTML=results.length?results.map(item=>`<article class="directory-card"><div class="card-topline"><span class="category">ORGANIZAÇÃO</span></div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.area||'')}</p><div class="card-meta"><span>${escapeHtml(item.city||'')}${item.state?'/'+escapeHtml(item.state):''}</span><span>${escapeHtml(item.reach||'')}</span></div><a class="card-action" href="perfil.html?tipo=ong&id=${encodeURIComponent(item.id)}">Conhecer a organização ↗</a></article>`).join(''):ongs.length?'<div class="empty-state"><strong>Nenhum resultado para esta busca.</strong><p>Tente outra necessidade ou remova um filtro.</p></div>':'<div class="empty-state"><strong>Nenhuma organização publicada por enquanto.</strong><p>Estamos preparando este espaço. Os resultados aparecerão quando as organizações informarem e autorizarem seus serviços.</p></div>';
  const chips=[...selectedNeeds].map(name=>({label:name,remove:()=>toggleNeed(name)}));
  if(term)chips.push({label:`Busca: ${$('#ngoSearch').value.trim()}`,remove:()=>{$('#ngoSearch').value='';renderSuggestions();renderOngs();}});
  if(locationMode!=='brasil')chips.push({label:locationMode==='online'?'Atendimento online':region||'Minha região',remove:()=>document.querySelector('[data-location="brasil"]').click()});
  $('#activeNgoFilters').replaceChildren(...chips.map(chip=>{const button=document.createElement('button');button.type='button';button.textContent=`${chip.label} ×`;button.setAttribute('aria-label',`Remover filtro ${chip.label}`);button.addEventListener('click',chip.remove);return button;}));
}
$('#entrepreneurShowcase').innerHTML=empreendedoras.map((item,index)=>`<article class="showcase-card"><div class="showcase-art art-${index+1}" aria-hidden="true"><span>${String(index+1).padStart(2,'0')}</span><i>✳</i></div><div class="showcase-body"><small>EXEMPLO FICTÍCIO · ${escapeHtml(item.category.toUpperCase())}</small><h3>${escapeHtml(item.brand)}</h3><p>${escapeHtml(item.summary)}</p><a href="perfil.html?tipo=empreendedora&id=${encodeURIComponent(item.id)}">Ver página de exemplo ↗</a></div></article>`).join('');
$('#professionalShowcase').innerHTML=profissionais.map((item,index)=>`<article class="showcase-card"><div class="showcase-art professional-art art-${index+1}" aria-hidden="true"><span>${String(index+1).padStart(2,'0')}</span><i>◌</i></div><div class="showcase-body"><small>EXEMPLO FICTÍCIO · ${escapeHtml(item.profession.toUpperCase())}</small><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.summary)}</p><a href="perfil.html?tipo=profissional&id=${encodeURIComponent(item.id)}">Ver página de exemplo ↗</a></div></article>`).join('');
$('#homeJourneys').innerHTML=window.PONTE_JOURNEYS.slice(0,3).map(item=>`<a class="home-journey ${escapeHtml(item.color)}" href="oncoflix.html?jornada=${encodeURIComponent(item.id)}"><small>JORNADA DE EXEMPLO · ${escapeHtml(item.category.toUpperCase())}</small><strong>${escapeHtml(item.title)}</strong><span>Conhecer a jornada ↗</span></a>`).join('');
const discoveryItems=[
  {title:'Organizações de apoio',kind:'Diretório',href:'#ongs',terms:'ong organização apoio acolhimento família transporte direitos psicologia peruca'},
  {title:'Profissionais de saúde',kind:'Vitrines demonstrativas',href:'#profissionais',terms:'profissional especialista saúde psicologia nutrição'},
  {title:'Oncoflix',kind:'Jornadas demonstrativas',href:'oncoflix.html',terms:'aprender curso aula educação conhecimento jornada conteúdo'},
  {title:'Participar de iniciativas',kind:'Projetos ainda não publicados',href:'#participar',terms:'participar iniciativa projeto campanha conexão oportunidade'},
  ...window.PONTE_JOURNEYS.map(item=>({title:item.title,kind:'Jornada de exemplo',href:`oncoflix.html?jornada=${encodeURIComponent(item.id)}`,terms:[item.category,item.audience,item.summary].join(' ')}))
];
function renderGlobalSearch(){
  const term=normalize($('#globalSearch').value.trim());
  const matches=(term?discoveryItems.filter(item=>normalize([item.title,item.terms].join(' ')).includes(term)):discoveryItems.slice(0,4)).slice(0,6);
  $('#globalResults').innerHTML=matches.length?matches.map(item=>`<a href="${escapeHtml(item.href)}"><span>${escapeHtml(item.kind)}</span><strong>${escapeHtml(item.title)}</strong><b aria-hidden="true">↗</b></a>`).join(''):'<p>Não encontramos esse termo. Tente uma palavra mais geral ou escolha uma das áreas abaixo.</p>';
}
$('#globalSearch').addEventListener('input',renderGlobalSearch);
$('#menuButton').addEventListener('click',()=>{const open=$('#mainNav').classList.toggle('open');$('#menuButton').setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#mainNav a').forEach(link=>link.addEventListener('click',()=>{$('#mainNav').classList.remove('open');$('#menuButton').setAttribute('aria-expanded','false');}));
$('#year').textContent=new Date().getFullYear();renderNeeds();renderOngs();
renderGlobalSearch();
