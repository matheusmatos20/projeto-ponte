const organizations=window.PONTE_PUBLIC.ongs.filter(item=>item.demo===true||(item.publicationStatus==='approved'&&item.publicConsent===true));
const categories=[
  {id:'apoio-psicologico',name:'Apoio psicológico',terms:['apoio psicológico','psicologia','atendimento psicológico']},
  {id:'apoio-social',name:'Apoio social',terms:['apoio social','serviço social','assistência social']},
  {id:'orientacao-direitos',name:'Orientação sobre direitos',terms:['orientação sobre direitos','orientação jurídica','direitos e benefícios']},
  {id:'grupos-apoio',name:'Grupos de acolhimento e apoio',terms:['grupo de apoio','grupos de apoio','grupo de acolhimento','roda de conversa']},
  {id:'atividades-fisicas',name:'Atividades físicas',terms:['atividades físicas','atividade física','exercícios']},
  {id:'apoio-familiares',name:'Apoio para familiares',terms:['apoio para familiares','apoio à família','apoio a familiares']},
  {id:'hospedagem-transporte',name:'Hospedagem e transporte para tratamento',terms:['hospedagem','transporte para tratamento','transporte']},
  {id:'educacao-oncologia',name:'Informação e educação em oncologia',terms:['educação em oncologia','informação em oncologia','educação em saúde']},
  {id:'criancas-adolescentes',name:'Apoio a crianças e adolescentes',terms:['apoio a crianças','apoio a adolescentes','oncologia pediátrica']},
  {id:'outros-servicos',name:'Outros serviços',terms:['outros serviços']}
];
const states=['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const $=selector=>document.querySelector(selector);
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const normalize=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const values=value=>Array.isArray(value)?value.filter(Boolean):value?[value]:[];
const selected=new Set();
const initial=new URLSearchParams(location.search).get('servico');
if(categories.some(category=>category.id===initial))selected.add(initial);
$('#orgState').innerHTML+=states.map(state=>`<option value="${state}">${state}</option>`).join('');
for(const [id,key] of [['orgArea','area'],['orgAudience','audience'],['orgReach','reach'],['orgCancer','cancerTypes']]){
  const options=[...new Set(organizations.flatMap(item=>values(item[key])))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  $('#'+id).innerHTML+=options.map(value=>`<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join('');
}
function hasService(item,category){
  const explicit=values(item.serviceCategories).map(normalize);
  if(explicit.includes(normalize(category.id)))return true;
  const services=values(item.services).map(normalize);
  return services.some(service=>category.terms.some(term=>service.includes(normalize(term))));
}
function renderCategories(){
  $('#serviceCategories').innerHTML=categories.map(category=>`<button type="button" data-service="${category.id}" aria-pressed="${selected.has(category.id)}">${escapeHtml(category.name)} <span aria-hidden="true">${selected.has(category.id)?'✓':'+'}</span></button>`).join('');
  $('#serviceCategories').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
    selected.has(button.dataset.service)?selected.delete(button.dataset.service):selected.add(button.dataset.service);
    renderCategories();renderResults();
  }));
}
function renderResults(){
  const state=$('#orgState').value,city=normalize($('#orgCity').value),name=normalize($('#orgName').value),area=$('#orgArea').value,audience=$('#orgAudience').value,reach=$('#orgReach').value,cancer=$('#orgCancer').value;
  const results=organizations.filter(item=>{
    if(selected.size&&![...selected].some(id=>hasService(item,categories.find(category=>category.id===id))))return false;
    if(state&&!values(item.states||item.state).some(value=>normalize(value)===normalize(state)))return false;
    if(city&&!values(item.cities||item.city).some(value=>normalize(value).includes(city)))return false;
    if(name&&!normalize(item.name).includes(name))return false;
    if(area&&!values(item.area).includes(area))return false;
    if(audience&&!values(item.audience).includes(audience))return false;
    if(reach&&!values(item.reach).includes(reach))return false;
    if(cancer&&!values(item.cancerTypes).includes(cancer))return false;
    return true;
  });
  $('#orgCount').textContent=organizations.length?`${results.length} ${results.length===1?'perfil demonstrativo encontrado':'perfis demonstrativos encontrados'}`:'Ainda não há organizações para exibir.';
  if(!organizations.length){$('#orgResults').innerHTML='<div class="organization-empty"><strong>O diretório está em preparação.</strong><p>Nenhuma ONG ou instituição foi publicada ainda. Os filtros já podem ser explorados; os resultados aparecerão após cadastro, autorização e validação das informações.</p></div>';return;}
  if(!results.length){$('#orgResults').innerHTML='<div class="organization-empty"><strong>Nenhuma organização encontrada com estes filtros.</strong><p>Você pode escolher outros serviços, retirar o filtro de município ou ampliar a busca para todo o Brasil.</p></div>';return;}
  $('#orgResults').innerHTML=results.map(item=>{
    const details=[['Localização',[values(item.cities||item.city).join(', '),values(item.states||item.state).join(', ')].filter(Boolean).join(' / ')],['Área de atuação',values(item.area).join(', ')],['Serviços cadastrados',values(item.services).join(', ')],['Público atendido',values(item.audience).join(', ')],['Tipos de câncer atendidos',values(item.cancerTypes).join(', ')]];
    const contact=item.publicContactConsent===true&&(item.publicContactUrl||item.publicWebsite);
    const safeContact=contact&&/^https:\/\//i.test(contact)?contact:null;
    return `<article class="organization-card"><span class="eyebrow">${item.demo?'CONTEÚDO DEMONSTRATIVO · ORGANIZAÇÃO FICTÍCIA':'ORGANIZAÇÃO AUTORIZADA'}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.summary||'')}</p><dl>${details.filter(([,value])=>value).map(([label,value])=>`<div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl><a href="perfil.html?tipo=ong&id=${encodeURIComponent(item.id)}">Ver perfil ${item.demo?'fictício':'da organização'} ↗</a>${item.demo?`<p class="demo-contact">Contato fictício: ${escapeHtml(item.contact||'não informado')} · Não envia mensagens.</p>`:safeContact?` · <a href="${escapeHtml(safeContact)}" target="_blank" rel="noopener noreferrer">Canal oficial ↗</a>`:''}</article>`;
  }).join('');
}
['orgState','orgCity','orgName','orgArea','orgAudience','orgReach','orgCancer'].forEach(id=>$('#'+id).addEventListener(['orgState','orgArea','orgAudience','orgReach','orgCancer'].includes(id)?'change':'input',renderResults));
$('#clearOrgFilters').addEventListener('click',()=>{selected.clear();['orgState','orgCity','orgName','orgArea','orgAudience','orgReach','orgCancer'].forEach(id=>$('#'+id).value='');history.replaceState(null,'',location.pathname);renderCategories();renderResults();});
renderCategories();renderResults();
