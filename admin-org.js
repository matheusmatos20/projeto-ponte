// Administração demonstrativa. As decisões ficam somente neste navegador.
if(window.PONTE_ORG&&window.PONTE_ORG_STORE){
  let session=null;try{session=JSON.parse(sessionStorage.getItem('ponteDemoSession')||'null');}catch{}
  if(session?.activeRole==='admin'&&session.profiles?.some(profile=>profile.role==='admin')){
    const schema=window.PONTE_ORG,store=window.PONTE_ORG_STORE;
    const nav=document.querySelector('#adminNav'),target=document.querySelector('#adminDetail');
    const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const labels=[['organizações','Organizações recebidas'],['projetos','Projetos das organizações'],['intermediacao','Intermediação']];
    nav.insertAdjacentHTML('beforeend',labels.map(([id,label])=>`<button type="button" data-org-area="${id}">${label}</button>`).join(''));
    nav.addEventListener('click',event=>{
      const button=event.target.closest('[data-org-area]');
      if(button){nav.querySelectorAll('[data-area]').forEach(item=>item.setAttribute('aria-current','false'));nav.querySelectorAll('[data-org-area]').forEach(item=>item.setAttribute('aria-current',item===button?'page':'false'));render(button.dataset.orgArea);}
      else if(event.target.closest('[data-area]'))nav.querySelectorAll('[data-org-area]').forEach(item=>item.setAttribute('aria-current','false'));
    });
    const notice='<p class="area-note">Operação fictícia armazenada somente neste navegador. Não há envio, validação real, pagamento ou acesso protegido no servidor.</p>';
    const title=(heading,description)=>`<span class="eyebrow">ADMINISTRAÇÃO · DEMONSTRAÇÃO</span><h2>${heading}</h2><p>${description}</p>`;
    const statusText={'rascunho':'Rascunho','em-analise':'Aguardando análise','ajustes':'Ajustes solicitados','aprovado':'Aprovado na simulação','rejeitado':'Rejeitado na simulação'};
    const pretty=value=>Array.isArray(value)?value.join(', '):String(value??'');
    let projectSupportFilter='';
    function renderOrganizations(data){
      const submissions=Object.values(data.organizations).filter(item=>item.status!=='rascunho');
      const selected=submissions.find(item=>item.email===new URLSearchParams(location.hash.slice(1)).get('org'))||submissions[0];
      if(!selected)return title('Organizações recebidas','Nenhum cadastro institucional foi enviado para análise nesta simulação.')+
        '<div class="admin-empty"><strong>Sem submissões.</strong><p>Entre com a conta fictícia da ONG, preencha o cadastro e simule o envio para ver o fluxo administrativo.</p></div>'+notice;
      const dataFields=schema.steps.map(step=>`<details class="org-admin-details"><summary>${esc(step.title)}</summary><dl>${step.fields.filter(field=>field.type!=='file'&&pretty(selected.values[field.id])).map(field=>`<div><dt>${esc(field.label)}</dt><dd>${esc(pretty(selected.values[field.id]))}</dd></div>`).join('')||'<p>Nenhuma informação declarada.</p>'}</dl></details>`).join('');
      const diagnosis=schema.dimensions.map(dimension=>{const pending=dimension.keys.filter(key=>!pretty(selected.values[key]));return `<li><strong>${esc(dimension.title)}</strong> · ${pending.length?`${pending.length} informações ainda não declaradas`:'Informações declaradas para esta dimensão'}</li>`}).join('');
      return title('Organizações recebidas','Cadastros e diagnósticos privados para revisão humana.')+
        `<div class="org-admin-list">${submissions.map(item=>`<button type="button" data-select-org="${esc(item.email)}" aria-current="${item.email===selected.email?'page':'false'}">${esc(item.values.name||item.email)} · ${esc(statusText[item.status]||item.status)}</button>`).join('')}</div>`+
        `<div class="area-card"><p class="area-kicker">${esc(statusText[selected.status]||selected.status)} · ACESSO PRIVADO</p><h3>${esc(selected.values.name||selected.email)}</h3><p><strong>Autorização de publicação:</strong> ${selected.publicConsent?'Declarada nesta simulação':'Não declarada'}.</p><p><strong>Maturidade institucional:</strong> ${esc(selected.maturity||'Não classificada')}. Sem classificação automática.</p><details class="org-admin-details"><summary>Diagnóstico institucional privado · ${schema.dimensions.length} dimensões</summary><ul>${diagnosis}</ul></details>${dataFields}</div>`+
        `<form id="orgAdminForm" class="org-admin-form" data-email="${esc(selected.email)}"><label>Status de compliance interno<select name="compliance">${['Não avaliado','Em análise','Validado na simulação','Ajustes necessários'].map(item=>`<option ${selected.compliance===item?'selected':''}>${item}</option>`).join('')}</select></label><label>Observação interna<textarea name="note" maxlength="1200" rows="3" placeholder="Registro privado da equipe"></textarea></label><div class="org-form-actions"><button type="submit" name="decision" value="approved">Aprovar cadastro</button><button type="submit" name="decision" value="adjustments">Solicitar ajustes</button><button type="submit" name="decision" value="rejected">Rejeitar cadastro</button><button type="submit" name="decision" value="note">Guardar observação</button></div></form>`+
        `<div class="area-card"><strong>Histórico interno</strong><ul>${(selected.notes||[]).map(item=>`<li>${esc(item.at)} · ${esc(item.text)}</li>`).join('')||'<li>Sem observações.</li>'}</ul></div>`+notice;
    }
    function renderProjects(data){
      const submissions=data.projects.filter(item=>item.status!=='rascunho'&&(!projectSupportFilter||(item.values.support||[]).includes(projectSupportFilter)));
      const selected=submissions.find(item=>item.id===new URLSearchParams(location.hash.slice(1)).get('project'))||submissions[0];
      const filter=`<label class="org-admin-filter">Categoria de apoio<select id="projectSupportFilter"><option value="">Todas</option>${schema.supportCategories.map(item=>`<option value="${esc(item)}" ${item===projectSupportFilter?'selected':''}>${esc(item)}</option>`).join('')}</select></label>`;
      if(!selected)return title('Projetos das organizações',projectSupportFilter?'Nenhum projeto nesta categoria.':'Nenhum projeto foi submetido nesta simulação.')+filter+'<div class="admin-empty"><strong>Sem projetos recebidos.</strong><p>O perfil da ONG pode cadastrar mais de um projeto e simular o envio para análise.</p></div>'+notice;
      return title('Projetos das organizações','Análise privada dos projetos e dos apoios solicitados.')+
        filter+
        `<div class="org-admin-list">${submissions.map(item=>`<button type="button" data-select-project="${esc(item.id)}" aria-current="${item.id===selected.id?'page':'false'}">${esc(item.values.name)} · ${esc(statusText[item.status]||item.status)}</button>`).join('')}</div>`+
        `<div class="area-card"><p class="area-kicker">${esc(statusText[selected.status]||selected.status)}</p><h3>${esc(selected.values.name)}</h3><p><strong>Organização:</strong> ${esc(data.organizations[selected.orgEmail]?.values.name||selected.orgEmail)}</p><dl class="org-admin-fields">${schema.projectFields.filter(field=>pretty(selected.values[field.id])).map(field=>`<div><dt>${esc(field.label)}</dt><dd>${esc(pretty(selected.values[field.id]))}</dd></div>`).join('')}</dl></div>`+
        `<form id="projectAdminForm" class="org-admin-form" data-id="${esc(selected.id)}"><label>Observação interna<textarea name="note" rows="3" maxlength="1200"></textarea></label><div class="org-form-actions"><button type="submit" name="decision" value="approved">Aprovar projeto</button><button type="submit" name="decision" value="adjustments">Solicitar ajustes</button><button type="submit" name="decision" value="rejected">Rejeitar projeto</button></div></form>`+
        `<p><button type="button" data-show-mediation="${esc(selected.id)}">Registrar oportunidade para este projeto</button></p>`+notice;
    }
    function renderMediation(data,projectId='',opportunityId=''){
      const eligible=data.projects.filter(item=>item.status==='aprovado');
      const selected=data.opportunities.find(item=>item.id===opportunityId);
      const rows=data.opportunities.map(item=>{const project=data.projects.find(project=>project.id===item.projectId);return `<tr><td>${esc(project?.values.name||'Projeto')}</td><td>${esc(item.partner||'Parceiro não informado')}</td><td>${esc(item.status)}</td><td>${esc(item.value||'Não informado')}</td><td><button type="button" data-edit-opportunity="${esc(item.id)}">Atualizar</button></td></tr>`}).join('');
      return title('Intermediação','Registro demonstrativo de interesses, condições e andamento. Nenhum pagamento é processado.')+
        `<form id="mediationForm" class="org-admin-form" data-id="${esc(selected?.id||'')}"><label>Projeto aprovado<select name="projectId" required><option value="">Selecione</option>${eligible.map(item=>`<option value="${esc(item.id)}" ${item.id===(selected?.projectId||projectId)?'selected':''}>${esc(item.values.name)}</option>`).join('')}</select></label><label>Empresa ou parceiro interessado<input name="partner" maxlength="120" required value="${esc(selected?.partner||'')}"></label><label>Valor negociado, quando aplicável<input name="value" type="number" min="0" step="0.01" value="${esc(selected?.value||'')}"></label><label>Condições e contrapartidas<textarea name="terms" maxlength="1500" rows="3">${esc(selected?.terms||'')}</textarea></label><label>Taxa de intermediação, quando aplicável<input name="fee" type="number" min="0" step="0.01" value="${esc(selected?.fee||'')}"></label><label>Contato e tratativas internas<textarea name="contactNotes" maxlength="1500" rows="3">${esc(selected?.contactNotes||'')}</textarea></label><label>Atualização visível para a ONG<textarea name="publicNote" maxlength="500" rows="2">${esc(selected?.publicNote||'')}</textarea></label><label>Status<select name="status">${['Interesse registrado','Em análise','Em negociação','Acordo registrado','Em execução','Encerrado'].map(item=>`<option ${selected?.status===item?'selected':''}>${item}</option>`).join('')}</select></label><button type="submit">${selected?'Atualizar oportunidade fictícia':'Registrar oportunidade fictícia'}</button></form>`+
        `<div class="org-table-wrap"><table><thead><tr><th>Projeto</th><th>Parceiro</th><th>Status</th><th>Valor</th><th>Ação</th></tr></thead><tbody>${rows||'<tr><td colspan="5">Nenhuma oportunidade registrada.</td></tr>'}</tbody></table></div>`+notice;
    }
    function render(section,projectId='',opportunityId=''){
      const data=store.read();
      target.innerHTML=section==='organizações'?renderOrganizations(data):section==='projetos'?renderProjects(data):renderMediation(data,projectId,opportunityId);
      target.querySelectorAll('[data-select-org]').forEach(button=>button.addEventListener('click',()=>{location.hash=`org=${encodeURIComponent(button.dataset.selectOrg)}`;render('organizações');}));
      target.querySelectorAll('[data-select-project]').forEach(button=>button.addEventListener('click',()=>{location.hash=`project=${encodeURIComponent(button.dataset.selectProject)}`;render('projetos');}));
      target.querySelector('#projectSupportFilter')?.addEventListener('change',event=>{projectSupportFilter=event.target.value;render('projetos');});
      target.querySelector('[data-show-mediation]')?.addEventListener('click',event=>{nav.querySelectorAll('[data-org-area]').forEach(button=>button.setAttribute('aria-current',button.dataset.orgArea==='intermediacao'?'page':'false'));render('intermediacao',event.currentTarget.dataset.showMediation);});
      target.querySelectorAll('[data-edit-opportunity]').forEach(button=>button.addEventListener('click',()=>render('intermediacao','',button.dataset.editOpportunity)));
      target.querySelector('#orgAdminForm')?.addEventListener('submit',event=>{
        event.preventDefault();const form=event.currentTarget,fd=new FormData(form),state=store.read(),item=state.organizations[form.dataset.email];
        const action=event.submitter?.value;
        if(action==='approved'){if(!item.publicConsent){alert('A publicação exige autorização da organização. O cadastro pode ser aprovado internamente, mas o perfil não será publicado.');}item.status='aprovado';}
        else if(action==='adjustments')item.status='ajustes';else if(action==='rejected')item.status='rejeitado';
        item.compliance=String(fd.get('compliance')||'Não avaliado');
        const note=String(fd.get('note')||'').trim();if(note){item.notes.push({at:new Date().toLocaleDateString('pt-BR'),text:note});}
        state.history.push({kind:'organizacao',orgEmail:item.email,action:action==='note'?'Observação interna':`Decisão demonstrativa: ${item.status}`,at:new Date().toISOString()});
        store.save(state);render('organizações');
      });
      target.querySelector('#projectAdminForm')?.addEventListener('submit',event=>{
        event.preventDefault();const form=event.currentTarget,fd=new FormData(form),state=store.read(),item=state.projects.find(project=>project.id===form.dataset.id);
        item.status={approved:'aprovado',adjustments:'ajustes',rejected:'rejeitado'}[event.submitter?.value]||item.status;
        const note=String(fd.get('note')||'').trim();if(note)item.adminNote=note;
        state.history.push({kind:'projeto',projectId:item.id,orgEmail:item.orgEmail,action:`Decisão demonstrativa: ${item.status}`,at:new Date().toISOString()});store.save(state);render('projetos');
      });
      target.querySelector('#mediationForm')?.addEventListener('submit',event=>{
        event.preventDefault();const form=event.currentTarget,fd=new FormData(form),state=store.read(),project=state.projects.find(item=>item.id===fd.get('projectId')&&item.status==='aprovado');
        if(!project)return;
        const item=state.opportunities.find(entry=>entry.id===form.dataset.id)||{id:`op-${Date.now()}`};
        Object.assign(item,{projectId:project.id,orgEmail:project.orgEmail,partner:String(fd.get('partner')||''),value:String(fd.get('value')||''),terms:String(fd.get('terms')||''),fee:String(fd.get('fee')||''),contactNotes:String(fd.get('contactNotes')||''),publicNote:String(fd.get('publicNote')||''),status:String(fd.get('status')||'Interesse registrado')});
        if(!form.dataset.id)state.opportunities.push(item);
        state.history.push({kind:'oportunidade',orgEmail:project.orgEmail,projectId:project.id,action:form.dataset.id?'Oportunidade fictícia atualizada':'Interesse fictício registrado',at:new Date().toISOString()});store.save(state);render('intermediacao');
      });
    }
  }
}
