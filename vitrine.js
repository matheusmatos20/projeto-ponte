const data=window.PONTE_PUBLIC;
const page=document.body.dataset.category;
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const normalize=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const visible=item=>item.demo===true||(item.publicationStatus==='approved'&&item.publicConsent===true);
const lists={profissionais:data.profissionais,empreendedores:data.empreendedoras,projetos:data.projects};
const items=(lists[page]||[]).filter(visible);
const labels={profissionais:['profissional','profissionais'],empreendedores:['negócio','negócios'],projetos:['projeto','projetos']};
function card(item,index){
  const kind=page==='profissionais'?item.profession:page==='empreendedores'?item.category:item.area;
  const name=page==='profissionais'?item.name:page==='empreendedores'?item.brand:item.name;
  const summary=page==='projetos'?item.description:item.summary;
  const href=page==='projetos'?`projeto.html?id=${encodeURIComponent(item.id)}`:`perfil.html?tipo=${page==='profissionais'?'profissional':'empreendedora'}&id=${encodeURIComponent(item.id)}`;
  return `<article class="vitrine-item"><div class="vitrine-item-art" role="img" aria-label="Ilustração abstrata para o perfil de demonstração"><span>${String(index+1).padStart(2,'0')}</span><i>${page==='projetos'?'↗':page==='profissionais'?'◌':'✳'}</i></div><div class="vitrine-item-copy"><small>${item.demo?'EXEMPLO FICTÍCIO':'PERFIL AUTORIZADO'} · ${escapeHtml(kind)}</small><h2>${escapeHtml(name)}</h2><p>${escapeHtml(summary)}</p>${item.city?`<p class="vitrine-location">${escapeHtml(item.city)} / ${escapeHtml(item.state)}</p>`:''}<a href="${href}">${page==='projetos'?'Ver modelo do projeto':'Conhecer página de exemplo'} ↗</a></div></article>`;
}
if(page==='projeto'){
  const id=new URLSearchParams(location.search).get('id');
  const project=data.projects.filter(visible).find(item=>item.id===id);
  const target=document.querySelector('#projectDetail');
  if(!project){target.innerHTML='<div class="vitrine-empty"><h1>Projeto não encontrado.</h1><p>Volte à Vitrine Ponte para explorar os modelos disponíveis.</p></div>';}
  else{
    document.title=`${project.name} | Vitrine Ponte`;
    const fields=[['Responsável',project.responsible],['Objetivo',project.objective],['Público beneficiado',project.audience],['Área de atuação',project.area],['Situação atual',project.status],['Possibilidades de participação',project.participation],['Imagens e materiais',project.materials],['Contato autorizado','Não disponível neste modelo']];
    target.innerHTML=`<div class="project-opening"><span class="eyebrow">VITRINE PONTE / PROJETOS · EXEMPLO FICTÍCIO</span><h1>${escapeHtml(project.name)}</h1><p>${escapeHtml(project.description)}</p><strong>Não é um projeto em execução. Não há inscrições abertas.</strong></div><div class="project-detail-grid"><section><h2>Sobre o projeto</h2><p>${escapeHtml(project.objective)}</p><div class="project-art" role="img" aria-label="Espaço reservado para imagem autorizada">Imagem de apresentação ainda não publicada</div></section><dl>${fields.map(([label,value])=>`<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl></div><p class="vitrine-disclaimer">Projetos reais só serão divulgados após autorização, análise e aprovação do Portal VPM.</p>`;
  }
}else{
  const search=document.querySelector('#vitrineSearch');
  function render(){
    const term=normalize(search.value.trim());
    const filtered=items.filter(item=>!term||normalize(Object.values(item).filter(value=>typeof value==='string').join(' ')).includes(term));
    document.querySelector('#vitrineCount').textContent=`${filtered.length} ${labels[page][filtered.length===1?0:1]} de demonstração`;
    document.querySelector('#vitrineResults').innerHTML=filtered.length?filtered.map(card).join(''):'<div class="vitrine-empty"><strong>Nenhum exemplo encontrado.</strong><p>Tente outra palavra ou limpe a busca.</p></div>';
  }
  search.addEventListener('input',render);render();
}
