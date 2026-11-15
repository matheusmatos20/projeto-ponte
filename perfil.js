const data=window.PONTE_PUBLIC;
const params=new URLSearchParams(location.search),type=params.get('tipo'),id=params.get('id');
const collections={ong:data.ongs.filter(entry=>entry.publicationStatus==='approved'&&entry.publicConsent===true),empreendedora:data.empreendedoras,profissional:data.profissionais};
const item=collections[type]?.find(entry=>entry.id===id);
const $=selector=>document.querySelector(selector);
const esc=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const field=(label,value)=>`<div><small>${esc(label)}</small><strong>${esc(value||'Não informado nesta demonstração')}</strong></div>`;
if(!item){$('#profileContent').innerHTML='<div class="empty-state"><h1>Página não encontrada.</h1><p>Este perfil não faz parte das páginas públicas de demonstração.</p></div>';}
else{
  const label=type==='ong'?'ONG · PÁGINA INSTITUCIONAL':type==='empreendedora'?'EMPREENDEDORA · VITRINE':'PROFISSIONAL DA SAÚDE · VITRINE';
  const title=type==='empreendedora'?item.brand:item.name;
  document.title=title+' | Projeto Ponte';
  $('#backLink').href=type==='ong'?'index.html#ongs':type==='empreendedora'?'index.html#empreendedoras':'index.html#profissionais';
  let fields='';let body='';
  if(type==='ong'){
    fields=field('Público atendido',item.audience)+field('Área de atuação',item.area)+field('Tipos de apoio',item.support)+field('Serviços e atividades',item.services)+field('Localização da sede',`${item.city}/${item.state}`)+field('Abrangência do atendimento',item.reach);
    body='<section class="profile-detail-section"><h2>História, missão e projetos</h2><p>Essas informações serão incluídas quando a organização real as fornecer e autorizar a publicação. O diagnóstico institucional não faz parte da página pública.</p></section><section class="profile-detail-section"><h2>Contato e conexão</h2><p>Canais públicos só aparecem com autorização da organização. Você pode testar abaixo como uma solicitação de conexão mediada seria iniciada.</p><button id="openConnection" class="form-submit" type="button">Solicitar conexão de exemplo ↗</button><form id="connectionForm" class="connection-form" hidden><p class="connection-context">Organização de interesse: '+esc(item.name)+'</p><label>Seu perfil <select name="requester" required><option value="">Selecione</option><option>Paciente ou sobrevivente</option><option>Familiar ou rede de apoio</option><option>Profissional da saúde</option><option>ONG ou organização</option><option>Empreendedora</option><option>Comunicador ou ativista</option><option>Empresa ou instituição</option></select></label><label>Objetivo da conexão <input name="objective" required maxlength="120"></label><label>Tipo de demanda <input name="type" required maxlength="120"></label><label>Descreva a necessidade <textarea name="need" required maxlength="500"></textarea></label><label>Prazo ou urgência <input name="timing" maxlength="120"></label><label>Informações adicionais <textarea name="additional" maxlength="500"></textarea></label><button class="form-submit" type="submit">Simular envio ↗</button></form><p id="connectionResult" class="dialog-note" role="status" hidden></p></section>';
  }else if(type==='empreendedora'){
    fields=field('Empreendedora',item.name)+field('Categoria',item.category)+field('História e propósito',null)+field('Iniciativas de impacto',null)+field('Loja, site e canais comerciais',null);
    body=`<section class="profile-detail-section"><h2>Produtos e serviços</h2><p>Fichas fictícias para demonstrar a apresentação de itens. Não há venda ou contratação nesta versão.</p><div class="product-grid">${item.products.map((product,index)=>`<button class="product-card" type="button" data-product="${index}"><span class="product-image" aria-hidden="true">✳</span><small>${esc(product.category.toUpperCase())} · EXEMPLO</small><strong>${esc(product.name)}</strong><span>Ver ficha ↗</span></button>`).join('')}</div></section>`;
  }else{
    fields=field('Profissão',item.profession)+field('Especialidade',item.specialty)+field('Áreas de atuação',null)+field('Formação e experiência',null)+field('Registro profissional',null)+field('Modalidade de atendimento',null)+field('Localização e abrangência',null)+field('Site e canais autorizados',null);
    body='<section class="profile-detail-section"><h2>Apresentação profissional</h2><p>As informações deste modelo serão preenchidas pelo titular e publicadas apenas após as autorizações e verificações aplicáveis. Registro conferido não significa certificação de competência ou garantia de resultados.</p></section>';
  }
  $('#profileContent').innerHTML=`<div class="profile-hero"><div><span class="eyebrow">${label} · EXEMPLO FICTÍCIO</span><h1>${esc(title)}</h1><p>${esc(item.summary||'Modelo de perfil institucional para demonstrar os campos e a navegação do diretório.')}</p><span class="demo-badge">DADOS DE DEMONSTRAÇÃO</span></div><div class="profile-portrait" aria-label="Espaço reservado para imagem autorizada" role="img">◌</div></div><section class="profile-detail-section"><h2>Informações do perfil</h2><div class="profile-field-grid">${fields}</div></section>${body}<div class="account-notice"><strong>Publicação controlada pelo Portal VPM.</strong><p>Dados pessoais, documentos e informações restritas não são exibidos aqui. Este perfil é fictício e não oferece contato real.</p></div>`;
  if(type==='ong'){
    $('#openConnection').addEventListener('click',()=>{$('#connectionForm').hidden=false;$('#openConnection').hidden=true;});
    $('#connectionForm').addEventListener('submit',event=>{event.preventDefault();$('#connectionResult').textContent='Solicitação demonstrativa preenchida. Nenhum dado foi enviado ao Portal VPM. No sistema real, a equipe analisará a compatibilidade antes de apresentar a conexão às partes.';$('#connectionResult').hidden=false;$('#connectionForm').hidden=true;});
  }
  if(type==='empreendedora'){
    document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{const product=item.products[Number(button.dataset.product)];$('#productContent').innerHTML=`<span class="eyebrow">FICHA DE EXEMPLO · ${esc(product.category.toUpperCase())}</span><h2>${esc(product.name)}</h2><p>${esc(product.description)}</p><div class="dialog-note">Imagem, condições e link externo dependerão de informações fornecidas e autorizadas pela empreendedora.</div>`;$('#productDialog').showModal();}));
  }
}
$('#closeProduct').addEventListener('click',()=>$('#productDialog').close());
$('#productDialog').addEventListener('click',event=>{if(event.target===$('#productDialog'))$('#productDialog').close();});
