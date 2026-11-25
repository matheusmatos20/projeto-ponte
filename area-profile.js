// Alternância e inclusão de perfis apenas nesta sessão de demonstração.
(()=>{
  let session;try{session=JSON.parse(sessionStorage.getItem('ponteDemoSession')||'null');}catch{return;}
  if(!session?.profiles?.some(item=>item.role===new URLSearchParams(location.search).get('perfil')))return;
  const button=document.querySelector('#areaAddProfile');
  const dialog=document.querySelector('#areaProfileDialog');
  const form=document.querySelector('#areaProfileForm');
  const institution=document.querySelector('#areaInstitutionField');
  const error=document.querySelector('#areaProfileError');
  const labels={aprendiz:'Pessoa interessada em aprender',paciente:'Paciente ou sobrevivente',familiar:'Familiar ou rede de apoio',ong:'ONG ou organização',profissional:'Profissional da saúde',empreendedora:'Empreendedora',comunicador:'Influenciador, comunicador ou ativista',empresa:'Empresa ou instituição',industria:'Indústria'};
  const available=Object.keys(window.PONTE_DEMO.profiles).filter(role=>!session.profiles.some(item=>item.role===role));
  if(!available.length)return;
  button.hidden=false;
  form.elements.role.innerHTML='<option value="">Selecione um perfil</option>'+available.map(role=>`<option value="${role}">${labels[role]||role}</option>`).join('');
  button.addEventListener('click',()=>{error.hidden=true;form.reset();institution.hidden=true;dialog.showModal();});
  document.querySelector('#areaProfileClose').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  form.elements.role.addEventListener('change',()=>{
    const needsInstitution=['ong','empresa','industria'].includes(form.elements.role.value);
    institution.hidden=!needsInstitution;
    form.elements.institution.required=needsInstitution;
    if(!needsInstitution)form.elements.institution.value='';
  });
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const role=form.elements.role.value;
    if(!available.includes(role)){error.textContent='Escolha um perfil disponível.';error.hidden=false;return;}
    const name=form.elements.institution.value.trim();
    if(['ong','empresa','industria'].includes(role)&&!name){form.elements.institution.reportValidity();return;}
    session.profiles.push({role,data:{},institution:name});
    session.activeRole=role;
    sessionStorage.setItem('ponteDemoSession',JSON.stringify(session));
    location.href=`area.html?perfil=${encodeURIComponent(role)}`;
  });
})();
