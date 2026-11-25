// Fluxo institucional demonstrativo: dados locais do navegador, sem envio ou proteção de servidor.
if(window.PONTE_ORG&&window.PONTE_ORG_STORE){
  let session=null;try{session=JSON.parse(sessionStorage.getItem('ponteDemoSession')||'null');}catch{}
  const params=new URLSearchParams(location.search);
  if(session?.profiles?.some(profile=>profile.role==='ong')&&params.get('perfil')==='ong'){
    if(session.activeRole!=='ong'){session.activeRole='ong';sessionStorage.setItem('ponteDemoSession',JSON.stringify(session));}
    const schema=window.PONTE_ORG,store=window.PONTE_ORG_STORE;
    const data=store.read(),record=store.ensure(data,session.email);
    const $=selector=>document.querySelector(selector);
    const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const url=(section='inicio',extra='')=>`area.html?perfil=ong&secao=${section}${extra}`;
    const current=params.get('secao')||'inicio';
    const menu=[['Visão geral','inicio'],['Cadastro institucional','cadastro'],['Diagnóstico Institucional','diagnostico'],['Formação para Organizações','formacao'],['Aprender sobre o câncer','aprender'],['Meus projetos','projetos'],['Oportunidades','oportunidades'],['Notificações','notificacoes']];
    const statusLabel={'rascunho':'Rascunho','em-analise':'Aguardando análise','ajustes':'Ajustes solicitados','aprovado':'Aprovado na simulação','rejeitado':'Não aprovado na simulação'};
    const fieldById=Object.fromEntries(schema.steps.flatMap(step=>step.fields.map(field=>[field.id,field])));
    const ownProjects=()=>data.projects.filter(project=>project.orgEmail===session.email);
    const value=id=>record.values[id];
    const present=value=>Array.isArray(value)?value.length>0:String(value??'').trim()!=='';
    const content=$('#areaContent');
    const headline=(eyebrow,title,description='')=>`<p class="area-kicker">${esc(eyebrow)}</p><h2>${esc(title)}</h2>${description?`<p>${esc(description)}</p>`:''}`;
    const notice='<p class="area-note">Simulação local com dados fictícios. Nenhum cadastro, documento ou projeto é enviado à equipe nesta versão.</p>';
    const totalFields=schema.steps.flatMap(step=>step.fields).filter(field=>!field.auxiliary&&(!field.dependsOn||value(field.dependsOn)==='sim'));
    const filled=totalFields.filter(field=>present(value(field.id))).length;
    const percent=Math.round(filled/totalFields.length*100);
    $('#areaEyebrow').textContent='PERFIL ATIVO · ORGANIZAÇÃO';
    $('#areaTitle').textContent='Espaço da organização';
    $('#areaIntro').textContent='Apresente a organização, acompanhe seu desenvolvimento e compartilhe projetos para análise.';
    document.title='Espaço da organização | OncoPontes';
    $('#areaProfileSelect').innerHTML=session.profiles.filter(profile=>window.PONTE_DEMO.profiles[profile.role]).map(profile=>`<option value="${esc(profile.role)}">${esc(profile.role==='ong'?'ONG':profile.role.charAt(0).toUpperCase()+profile.role.slice(1))}</option>`).join('');
    $('#areaProfileSelect').value='ong';
    $('#areaProfileSelect').addEventListener('change',event=>{session.activeRole=event.target.value;sessionStorage.setItem('ponteDemoSession',JSON.stringify(session));location.href=`area.html?perfil=${encodeURIComponent(event.target.value)}`;});
    $('#areaLogout').addEventListener('click',()=>{sessionStorage.removeItem('ponteDemoSession');location.href='conta.html#entrar';});
    $('#areaNav').innerHTML=menu.map(([label,id])=>`<a href="${url(id)}" ${current===id?'aria-current="page"':''}>${esc(label)}</a>`).join('')+`<a href="${url('configuracoes')}" ${current==='configuracoes'?'aria-current="page"':''}>Configurações</a>`;
    const renderValue=id=>Array.isArray(value(id))?value(id).join(', '):String(value(id)??'');
    function input(field,values,form='org'){
      const name=field.id,raw=values[name],display=Array.isArray(raw)?raw.join('\n'):String(raw??'');
      const hint=field.unverified?'<small>Campo de origem preservado separadamente. Finalidade e opções aguardam conferência do Airtable.</small>':field.type==='multi'?'<small>Um item por linha. As opções do Airtable serão conferidas quando o CSV estiver disponível.</small>':'';
      if(field.type==='file')return `<label>${esc(field.label)}<input name="${name}" type="file" multiple accept=".pdf,.png,.jpg,.jpeg" aria-describedby="fileNotice"></label><small id="fileNotice">Seleção local de demonstração. O arquivo não é enviado nem armazenado.</small>`;
      if(field.type==='states'||field.type==='support'){
        const options=field.type==='states'?['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']:schema.supportCategories;
        return `<fieldset class="org-options"><legend>${esc(field.label)}</legend><div class="org-check-grid">${options.map(item=>`<label><input type="checkbox" name="${name}" value="${esc(item)}" ${Array.isArray(raw)&&raw.includes(item)?'checked':''}>${esc(item)}</label>`).join('')}</div></fieldset>`;
      }
      if(field.type==='reach')return `<label>${esc(field.label)}<select name="${name}"><option value="">Selecione</option>${['Municipal','Estadual','Regional','Nacional'].map(item=>`<option ${raw===item?'selected':''}>${item}</option>`).join('')}</select><small>Categorias informadas na especificação; opções adicionais aguardam conferência do Airtable.</small></label>`;
      if(field.type==='yesno')return `<label ${field.dependsOn?`data-depends="${field.dependsOn}"`:''}>${esc(field.label)}<select name="${name}"><option value="">Não informado</option><option value="sim" ${raw==='sim'?'selected':''}>Sim</option><option value="não" ${raw==='não'?'selected':''}>Não</option></select></label>`;
      if(field.type==='textarea'||field.type==='multi')return `<label ${field.dependsOn?`data-depends="${field.dependsOn}"`:''}>${esc(field.label)}${hint}<textarea name="${name}" rows="${field.type==='multi'?3:4}" maxlength="3000">${esc(display)}</textarea></label>`;
      const type=field.type==='integer'?'number':field.type==='money'?'number':field.type;
      const numeric=field.type==='integer'?'min="0" step="1"':field.type==='money'?'min="0" step="0.01"':'';
      return `<label ${field.dependsOn?`data-depends="${field.dependsOn}"`:''}>${esc(field.label)}<input name="${name}" type="${type}" value="${esc(display)}" ${numeric} ${form==='project'&&name==='name'?'required':''} ${field.type==='text'?'maxlength="240"':''} autocomplete="off"></label>`;
    }
    function refreshConditional(form){
      form.querySelectorAll('[data-depends]').forEach(node=>{
        const active=form.elements[node.dataset.depends]?.value==='sim';
        node.hidden=!active;
        node.querySelectorAll('input,select,textarea').forEach(input=>{input.disabled=!active;if(!active)input.value='';});
      });
    }
    function readFields(form,fields,existing){
      const fd=new FormData(form),result={...existing};
      for(const field of fields){
        if(field.type==='file')continue;
        if(field.dependsOn&&fd.get(field.dependsOn)!=='sim'){result[field.id]='';continue;}
        if(field.type==='states'||field.type==='support')result[field.id]=fd.getAll(field.id).map(String);
        else if(field.type==='multi')result[field.id]=String(fd.get(field.id)||'').split(/\r?\n/).map(item=>item.trim()).filter(Boolean);
        else result[field.id]=String(fd.get(field.id)||'').trim();
      }
      return result;
    }
    function renderHome(){
      return headline('VISÃO GERAL',renderValue('name')||'Organização de demonstração','Seu espaço reúne o cadastro, o diagnóstico, a formação e os projetos da organização.')+
        `<div class="area-stat-row"><div class="area-stat"><strong>${percent}%</strong><span>campos de referência preenchidos</span></div><div class="area-stat"><strong>${schema.dimensions.length}</strong><span>dimensões privadas do diagnóstico</span></div><div class="area-stat"><strong>${ownProjects().length}</strong><span>projetos no protótipo</span></div></div>`+
        `<div class="area-grid"><article class="area-card tint"><strong>Cadastro institucional</strong><p>${esc(statusLabel[record.status]||record.status)}. Preencha as sete etapas no seu ritmo.</p><a href="${url('cadastro')}">Abrir cadastro</a></article><article class="area-card"><strong>Diagnóstico Institucional</strong><p>Organize o que foi declarado e veja campos a desenvolver, sem nota ou ranking.</p><a href="${url('diagnostico')}">Ver diagnóstico privado</a></article><article class="area-card"><strong>Formação para Organizações</strong><p>Nove temas de demonstração ligados às dimensões do diagnóstico.</p><a href="${url('formacao')}">Explorar temas</a></article><article class="area-card"><strong>Aprender sobre o câncer</strong><p>As jornadas gerais continuam disponíveis para esta conta de teste.</p><a href="${url('aprender')}">Explorar jornadas</a></article><article class="area-card"><strong>Meus projetos</strong><p>Registre projetos e tipos de apoio para análise demonstrativa da equipe.</p><a href="${url('projetos')}">Ver projetos</a></article></div>`+notice;
    }
    function renderRegister(){
      const step=schema.steps.find(item=>item.id===params.get('etapa'))||schema.steps[0];
      return headline('CADASTRO INSTITUCIONAL','Apresente a organização em sete etapas',`Rascunho de demonstração · ${filled} de ${totalFields.length} campos de referência preenchidos.`)+
        `<div class="area-progress" role="progressbar" aria-label="Campos preenchidos" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"><i style="width:${percent}%"></i></div>`+
        `<div class="area-step-list">${schema.steps.map((item,index)=>`<a href="${url('cadastro',`&etapa=${item.id}`)}" ${item.id===step.id?'aria-current="step"':''}><span>${index+1}. ${esc(item.title)}</span><small>${item.fields.filter(field=>!field.auxiliary&&present(value(field.id))).length} campos</small></a>`).join('')}</div>`+
        `<section class="area-section"><h3>${esc(step.title)}</h3><p>Use apenas dados fictícios nesta demonstração. Campos sem opções definidas no CSV aceitam mais de um item por linha.</p><form id="orgInstitutionForm" class="area-form">${step.fields.filter(field=>!field.unverified).map(field=>input(field,record.values)).join('')}${step.fields.some(field=>field.unverified)?`<details class="org-unverified"><summary>Campos de origem a conferir no Airtable</summary>${step.fields.filter(field=>field.unverified).map(field=>input(field,record.values)).join('')}</details>`:''}${step.id==='representante'?`<label class="org-consent"><input name="publicConsent" type="checkbox" ${record.publicConsent?'checked':''}>Autorizo, nesta simulação, a publicação apenas dos campos institucionais aprovados no diretório.</label><p class="area-note">Dados do representante, diagnóstico, documentos e observações internas nunca entram no perfil público.</p>`:''}<button class="area-button" type="submit">Guardar rascunho de teste</button></form><p id="orgResult" role="status"></p>${step.id==='representante'?`<button id="orgSubmit" class="area-button" type="button">Simular envio para análise</button>`:''}</section>`+
        `<p class="area-note">Campos do Airtable ainda pendentes de conferência: ${schema.unresolvedSources.map(esc).join('; ')}. Nenhum campo será fundido ou descartado antes da análise do CSV.</p>`+notice;
    }
    function renderDiagnosis(){
      const cards=schema.dimensions.map(dimension=>{
        const declared=dimension.keys.filter(key=>present(value(key)));
        const pending=dimension.keys.filter(key=>!present(value(key)));
        const topic=schema.formation.find(item=>item.id===dimension.formation);
        return `<article class="area-card org-diagnosis-card"><p class="area-kicker">ÁREA PRIVADA · ${declared.length}/${dimension.keys.length} INFORMAÇÕES</p><strong>${esc(dimension.title)}</strong><p><b>Informações declaradas:</b> ${declared.length?declared.map(key=>`${esc(fieldById[key]?.label||key)}: ${esc(renderValue(key))}`).join('; '):'Nenhuma informação registrada nesta dimensão.'}</p><p><b>Situação identificada:</b> ${pending.length?'Há informações a completar.':'Informações declaradas para os campos desta dimensão.'}</p><p><b>Pontos de desenvolvimento:</b> ${pending.length?pending.map(key=>esc(fieldById[key]?.label||key)).join(', '):'Revisar e atualizar os dados quando necessário.'}</p><p><b>Próximo passo:</b> ${pending.length?'Complete os campos pendentes no cadastro institucional.':'Mantenha as informações atualizadas e acompanhe os projetos.'}</p><a href="${url('formacao',`&tema=${topic.id}`)}">Tema relacionado: ${esc(topic.title)} ↗</a></article>`;
      }).join('');
      return headline('ÁREA PRIVADA','Diagnóstico Institucional','Organização das informações declaradas, sem classificação definitiva nem ranking público.')+
        `<div class="area-note"><strong>Maturidade institucional:</strong> ${esc(record.maturity||'Não classificada')}. <strong>Status de compliance:</strong> ${esc(record.compliance||'Não avaliado')}. Ambos dependem de critérios e validação da equipe.</div><div class="area-grid">${cards}</div>`+notice;
    }
    function renderFormation(){
      const topic=schema.formation.find(item=>item.id===params.get('tema'));
      if(topic)return headline('FORMAÇÃO PARA ORGANIZAÇÕES',topic.title,'Tema demonstrativo relacionado ao diagnóstico institucional.')+
        `<article class="area-card"><p><strong>Dimensão relacionada:</strong> ${esc(topic.dimension)}.</p><p>O conteúdo formativo deste tema ainda depende de curadoria. Esta página demonstra a navegação e o acompanhamento privado do tema.</p><button id="markTopic" class="area-button" type="button" data-topic="${esc(topic.id)}">${record.learning.includes(topic.id)?'Tema explorado nesta sessão':'Marcar tema como explorado'}</button></article><p><a href="${url('formacao')}">← Voltar aos temas</a></p>`+notice;
      return headline('ÁREA DA ORGANIZAÇÃO','Formação para Organizações','Temas iniciais relacionados às necessidades indicadas no diagnóstico. Aprender sobre o câncer continua como área separada para o público geral.')+
        `<div class="area-grid">${schema.formation.map(item=>{const dimension=schema.dimensions.find(d=>d.formation===item.id);const pending=dimension?.keys.some(key=>!present(value(key)));return `<article class="area-card"><p class="area-kicker">${pending?'RELACIONADO A CAMPOS PENDENTES':'TEMA DE FORMAÇÃO'}</p><strong>${esc(item.title)}</strong><p>${esc(item.dimension)} · ${record.learning.includes(item.id)?'Tema explorado':'Ainda não explorado'}.</p><a href="${url('formacao',`&tema=${item.id}`)}">Abrir tema</a></article>`}).join('')}</div>`+notice;
    }
    function renderGeneralLearning(){
      let progress={};try{progress=JSON.parse(sessionStorage.getItem(`ponteDemoProgressV2:${session.email}:ong`)||'{}');}catch{}
      return headline('APRENDER SOBRE O CÂNCER','Escolha uma jornada','Aulas e atividades fictícias da área educativa geral.')+
        `<div class="area-grid">${(window.PONTE_JOURNEYS||[]).map(journey=>{const state=progress[journey.id]||{completed:[],activityDone:false};const percent=Math.round(((state.completed?.length||0)+(state.activityDone?1:0))/3*100);return `<article class="area-card"><p class="area-kicker">${esc(journey.category)} · ${esc(journey.duration)}</p><strong>${esc(journey.title)}</strong><p>${esc(journey.summary)}</p><div class="area-progress" role="progressbar" aria-label="Progresso em ${esc(journey.title)}" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"><i style="width:${percent}%"></i></div><a href="oncoflix.html?jornada=${encodeURIComponent(journey.id)}">${percent?'Continuar':'Conhecer jornada'}</a></article>`}).join('')}</div>`+notice;
    }
    function renderProjects(){
      const id=params.get('projeto'),project=ownProjects().find(item=>item.id===id);
      if(id==='novo'||project){const draft=project||{values:{},status:'rascunho'};return headline('ÁREA PRIVADA',project?'Editar projeto':'Novo projeto','Mais de um projeto pode ser registrado. A equipe acompanha apenas submissões simuladas neste navegador.')+
        `<form id="orgProjectForm" class="area-form" data-project="${esc(project?.id||'')}">${schema.projectFields.map(field=>input(field,draft.values,'project')).join('')}<div class="org-form-actions"><button class="area-button" type="submit" name="action" value="draft">Guardar rascunho</button><button class="area-button" type="submit" name="action" value="submit">Simular envio para análise</button></div></form><p><a href="${url('projetos')}">← Voltar aos projetos</a></p>`+notice;}
      return headline('ÁREA PRIVADA','Meus projetos','Apresente iniciativas e necessidades para análise e mediação da equipe.')+
        `<p><a class="area-button" href="${url('projetos','&projeto=novo')}">Cadastrar projeto</a></p><div class="area-grid">${ownProjects().map(item=>`<article class="area-card"><p class="area-kicker">${esc(statusLabel[item.status]||item.status)}</p><strong>${esc(item.values.name||'Projeto sem nome')}</strong><p>${esc(item.values.description||'Descrição ainda não informada.')}</p><a href="${url('projetos',`&projeto=${encodeURIComponent(item.id)}`)}">Abrir projeto</a></article>`).join('')||'<div class="area-card"><strong>Nenhum projeto cadastrado.</strong><p>Use o botão acima para criar um projeto fictício.</p></div>'}</div><p><a href="projeto.html?id=modelo-fortalecimento">Ver apresentação pública de exemplo ↗</a></p>`+notice;
    }
    function renderOpportunities(){
      const linked=data.opportunities.filter(item=>item.orgEmail===session.email);
      return headline('ÁREA PRIVADA','Oportunidades acompanhadas','A equipe conduz as conexões. O registro abaixo não compartilha contatos nem cria acordos reais.')+
        `<div class="area-grid">${linked.map(item=>{const project=ownProjects().find(project=>project.id===item.projectId);return `<article class="area-card"><p class="area-kicker">${esc(item.status||'Em análise')}</p><strong>${esc(project?.values.name||'Projeto')}</strong><p>Parceiro sob mediação da equipe. ${esc(item.publicNote||'Sem atualização compartilhada nesta demonstração.')}</p></article>`}).join('')||'<div class="area-card"><strong>Nenhuma oportunidade registrada.</strong><p>Projetos enviados poderão ser analisados pela equipe antes de qualquer contato.</p></div>'}</div>`+notice;
    }
    let html='';
    if(current==='cadastro')html=renderRegister();else if(current==='diagnostico')html=renderDiagnosis();else if(current==='formacao')html=renderFormation();else if(current==='aprender')html=renderGeneralLearning();else if(current==='projetos')html=renderProjects();else if(current==='oportunidades')html=renderOpportunities();else if(current==='notificacoes')html=headline('NOTIFICAÇÕES','Avisos da demonstração')+'<div class="area-card"><strong>Bem-vindo ao seu espaço</strong><p>Este aviso é local e fictício. Nenhuma notificação externa foi enviada.</p></div>'+notice;else if(current==='configuracoes')html=headline('CONFIGURAÇÕES','Preferências e saída','O cadastro e os projetos são guardados somente neste navegador. Não use dados reais.')+'<div class="area-card"><strong>Perfil ativo: organização</strong><p>Use o seletor no cabeçalho para alternar entre os seus perfis de teste.</p><button id="resetOrgDemo" type="button">Reiniciar dados de teste deste perfil</button><p id="resetOrgResult" role="status"></p></div>'+notice;else html=renderHome();
    content.innerHTML=html;
    const institutionForm=$('#orgInstitutionForm');
    if(institutionForm){
      refreshConditional(institutionForm);
      institutionForm.addEventListener('change',()=>refreshConditional(institutionForm));
      institutionForm.addEventListener('submit',event=>{
        event.preventDefault();
        const step=schema.steps.find(item=>item.id===(params.get('etapa')||schema.steps[0].id));
        record.values=readFields(institutionForm,step.fields,record.values);
        if(step.id==='representante')record.publicConsent=new FormData(institutionForm).has('publicConsent');
        if(record.status==='aprovado')record.status='rascunho';
        store.save(data);
        $('#orgResult').className='area-success';$('#orgResult').textContent='Rascunho fictício guardado neste navegador.';
      });
    }
    $('#orgSubmit')?.addEventListener('click',()=>{
      if(!present(value('name'))){$('#orgResult').className='area-error';$('#orgResult').textContent='Informe o nome da organização antes de enviar para análise.';return;}
      record.status='em-analise';data.history.push({kind:'organizacao',orgEmail:session.email,action:'Envio demonstrativo para análise',at:new Date().toISOString()});store.save(data);
      $('#orgResult').className='area-success';$('#orgResult').textContent='Envio demonstrativo registrado neste navegador. Nenhuma informação foi transmitida à equipe.';
    });
    $('#markTopic')?.addEventListener('click',event=>{const id=event.currentTarget.dataset.topic;if(!record.learning.includes(id))record.learning.push(id);store.save(data);event.currentTarget.textContent='Tema explorado nesta sessão';});
    $('#resetOrgDemo')?.addEventListener('click',()=>{
      delete data.organizations[session.email];
      const projectIds=new Set(data.projects.filter(item=>item.orgEmail===session.email).map(item=>item.id));
      data.projects=data.projects.filter(item=>item.orgEmail!==session.email);
      data.opportunities=data.opportunities.filter(item=>item.orgEmail!==session.email&&!projectIds.has(item.projectId));
      data.history=data.history.filter(item=>item.orgEmail!==session.email);
      sessionStorage.removeItem(`ponteDemoOrgDraft:${session.email}`);
      sessionStorage.removeItem(`ponteDemoProgressV2:${session.email}:ong`);
      store.save(data);
      $('#resetOrgResult').className='area-success';$('#resetOrgResult').textContent='Dados de teste deste perfil reiniciados. Recarregue para ver o estado inicial.';
    });
    $('#orgProjectForm')?.addEventListener('submit',event=>{
      event.preventDefault();const form=event.currentTarget;
      const values=readFields(form,schema.projectFields,{});
      if(!present(values.name)){form.querySelector('[name="name"]').reportValidity();return;}
      let project=ownProjects().find(item=>item.id===form.dataset.project);
      if(!project){project={id:`org-project-${Date.now()}`,orgEmail:session.email,values:{},status:'rascunho'};data.projects.push(project);}
      project.values=values;project.status=event.submitter?.value==='submit'?'em-analise':'rascunho';
      if(project.status==='em-analise')data.history.push({kind:'projeto',orgEmail:session.email,projectId:project.id,action:'Envio demonstrativo para análise',at:new Date().toISOString()});
      store.save(data);location.href=url('projetos',`&projeto=${encodeURIComponent(project.id)}`);
    });
  }
}
