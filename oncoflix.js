const journeys=window.PONTE_JOURNEYS;
const $=selector=>document.querySelector(selector);
const esc=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let session=null,progress={};
try{session=JSON.parse(sessionStorage.getItem('ponteDemoSession')||'null');progress=JSON.parse(sessionStorage.getItem('ponteDemoProgress')||'{}');}catch{session=null;progress={};}
const role=session?.activeRole||null;
const roleNames={paciente:'Paciente ou sobrevivente',familiar:'Familiar ou rede de apoio',profissional:'Profissional da saúde',ong:'ONG ou organização',empreendedora:'Empreendedora',comunicador:'Comunicador ou ativista',empresa:'Empresa ou instituição',admin:'Administração VPM'};
const canAccess=j=>j.access==='aberto'||(j.access==='cadastro'&&!!session)||(j.access==='perfil'&&!!role&&j.roles.includes(role));
const saved=j=>progress[j.id]||{started:false,completed:[]};
const saveProgress=()=>sessionStorage.setItem('ponteDemoProgress',JSON.stringify(progress));
const percent=j=>Math.round(saved(j).completed.length/3*100);
$('#accountLink').textContent=session?'Meu espaço ↗':'Entrar ↗';
$('#accountLink').href=session?'conta.html#meu-espaco':'conta.html#entrar';
function card(j){return `<a class="flix-card ${esc(j.color)}" href="oncoflix.html?jornada=${encodeURIComponent(j.id)}"><div class="flix-cover"><span>◌</span><small>JORNADA DE EXEMPLO</small></div><div class="flix-card-body"><small>${esc(j.category.toUpperCase())} · ${esc(j.audience.toUpperCase())}</small><strong>${esc(j.title)}</strong><p>${esc(j.summary)}</p><span>${saved(j).started?`${percent(j)}% concluído`:`${j.access==='aberto'?'Acesso aberto':j.access==='cadastro'?'Cadastro necessário':'Acesso por perfil'}`}</span>${saved(j).started?`<div class="flix-progress"><i style="width:${percent(j)}%"></i></div>`:''}</div></a>`;}
function row(title,items,description=''){if(!items.length)return '';return `<section class="flix-collection"><div class="collection-heading"><div><h2>${esc(title)}</h2>${description?`<p>${esc(description)}</p>`:''}</div><span>Arraste para explorar →</span></div><div class="flix-track">${items.map(card).join('')}</div></section>`;}
function renderHome(){
  $('#flixDetail').hidden=true;$('#flixHome').hidden=false;
  $('#profileChip').textContent=role?`Explorando como: ${roleNames[role]}`:'Explore sem entrar ou use uma conta de teste';
  $('#accountLink').textContent=session?'Meu espaço ↗':'Entrar ↗';
  $('#accountLink').href=session?'conta.html#meu-espaco':'conta.html#entrar';
  const featured=journeys[0];
  $('#featuredJourney').innerHTML=`<div class="flix-feature"><div><span class="tag">DESTAQUE DE DEMONSTRAÇÃO</span><h2>${esc(featured.title)}</h2><p>${esc(featured.summary)}</p><div class="flix-meta"><span>${esc(featured.audience)}</span><span>Acesso aberto</span></div><a class="button button-cream" href="oncoflix.html?jornada=${featured.id}">Conhecer a jornada ↗</a></div><div class="feature-art" aria-hidden="true">✳</div></div>`;
  const started=journeys.filter(j=>saved(j).started&&percent(j)<100),mine=journeys.filter(j=>saved(j).started),recommended=role?journeys.filter(j=>j.roles.includes(role)):journeys.filter(j=>j.access==='aberto'||j.access==='cadastro');
  $('#flixRows').innerHTML=row('Continue de onde parou',started,'Seu progresso de teste fica nesta sessão do navegador.')+row('Minhas jornadas',mine)+row(role?'Para o seu perfil':'Explore os temas',recommended)+row('Outras coleções',journeys.filter(j=>!recommended.includes(j)),'A visibilidade e o acesso dependem do perfil e das regras de cada jornada.');
}
function renderDetail(j){
  $('#flixHome').hidden=true;$('#flixDetail').hidden=false;document.title=j.title+' | Oncoflix';
  $('#accountLink').textContent=session?'Meu espaço ↗':'Entrar ↗';
  $('#accountLink').href=session?'conta.html#meu-espaco':'conta.html#entrar';
  const allowed=canAccess(j),state=saved(j),next=[0,1,2].find(index=>!state.completed.includes(index));
  const action=allowed?`<button id="startJourney" class="button button-cream" type="button">${state.started?next===undefined?'Rever jornada':'Retomar jornada':'Iniciar jornada de teste'} ↗</button>`:`<a class="button button-cream" href="${session?'conta.html#meu-espaco':'conta.html#entrar'}">${session?'Trocar de perfil':'Entrar para continuar'} ↗</a>`;
  const notice=allowed?'Etapas e progresso são demonstrativos. Nenhuma aula, avaliação ou certificado real está disponível.':session?'Esta jornada de exemplo não está disponível para o perfil selecionado.':'Esta jornada exige cadastro ou um perfil indicado.';
  $('#flixDetail').innerHTML=`<a class="text-link" href="oncoflix.html">← Voltar ao Oncoflix</a><div class="journey-hero ${esc(j.color)}"><div><span class="eyebrow">JORNADA DE EXEMPLO · ${esc(j.category.toUpperCase())}</span><h1>${esc(j.title)}</h1><p>${esc(j.summary)}</p><div class="flix-meta"><span>${esc(j.audience)}</span><span>${j.access==='aberto'?'Acesso aberto':j.access==='cadastro'?'Mediante cadastro':'Acesso por perfil'}</span><span>${state.started?percent(j)+'% concluído':'Não iniciada'}</span></div>${action}</div><div class="journey-art" aria-hidden="true">◌</div></div><div class="journey-layout"><section><h2>Sobre esta jornada</h2><p>${esc(j.objective)}</p><div class="journey-info"><div><small>Conteúdo programático</small><strong>Estrutura demonstrativa em três etapas</strong></div><div><small>Especialistas e participantes</small><strong>A definir pela curadoria do Portal VPM</strong></div><div><small>Materiais complementares</small><strong>Não publicados nesta versão</strong></div><div><small>Duração estimada</small><strong>A definir</strong></div><div><small>Certificação</small><strong>Não definida para este modelo</strong></div></div></section><aside class="journey-steps"><h2>Etapas da jornada</h2>${['Apresentação','Conteúdos','Atividade final'].map((step,index)=>`<button class="journey-step" type="button" data-step="${index}" ${allowed?'':'disabled'}><span>${state.completed.includes(index)?'✓':String(index+1).padStart(2,'0')}</span><strong>${step}</strong><small>${state.completed.includes(index)?'Concluída nesta demonstração':'Etapa de exemplo'}</small></button>`).join('')}</aside></div><div class="account-notice"><strong>Sobre o acesso</strong><p>${notice}</p></div><div id="lessonArea"></div>`;
  if(allowed){$('#startJourney').addEventListener('click',()=>openStep(j,next??0));document.querySelectorAll('[data-step]').forEach(button=>button.addEventListener('click',()=>openStep(j,Number(button.dataset.step))));}
}
function openStep(j,index){
  progress[j.id]??={started:true,completed:[]};progress[j.id].started=true;saveProgress();
  const labels=['Apresentação','Conteúdos','Atividade final'];
  $('#lessonArea').innerHTML=`<section class="lesson-demo"><span class="eyebrow">ETAPA ${index+1} DE 3 · DEMONSTRAÇÃO</span><h2>${labels[index]}</h2><div class="lesson-placeholder"><span>▶</span><strong>Espaço reservado para a aula</strong><p>O conteúdo será incluído após produção, curadoria e aprovação. Não há vídeo ou orientação de saúde nesta demonstração.</p></div><button id="completeStep" class="button button-cream" type="button">Marcar etapa de teste como concluída ↗</button></section>`;
  $('#completeStep').addEventListener('click',()=>{if(!progress[j.id].completed.includes(index))progress[j.id].completed.push(index);saveProgress();renderDetail(j);const next=[0,1,2].find(n=>!progress[j.id].completed.includes(n));if(next!==undefined)openStep(j,next);else $('#lessonArea').innerHTML='<div class="completion-note"><strong>Jornada de teste concluída.</strong><p>O progresso foi registrado apenas nesta sessão. Nenhum certificado real foi emitido.</p></div>';});
  $('#lessonArea').scrollIntoView({behavior:'smooth',block:'start'});
}
const requested=new URLSearchParams(location.search).get('jornada');
const journey=journeys.find(j=>j.id===requested);
if(requested&&journey)renderDetail(journey);else renderHome();
