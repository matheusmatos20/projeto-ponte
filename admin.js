const areas=[
  ['Visão geral','Atividades e pendências da operação.'],
  ['Usuários e perfis','Contas, vínculos e permissões por finalidade.'],
  ['Validação de cadastros','Análise e histórico das decisões.'],
  ['Publicações e Vitrine','Revisão de perfis, páginas e projetos.'],
  ['Diretório de organizações','Dados públicos autorizados de ONGs.'],
  ['Jornadas e conteúdos','Curadoria do Oncoflix e regras de acesso.'],
  ['Projetos e oportunidades','Propostas, conexões e acompanhamento.'],
  ['Empresas','Relações e projetos atribuídos.'],
  ['Indicadores e relatórios','Resultados agregados e autorizados.'],
  ['Histórico de atividades','Registros relevantes da operação.'],
  ['Permissões e auditoria','Acessos segmentados e trilhas de ação.']
];
let session=null;try{session=JSON.parse(sessionStorage.getItem('ponteDemoSession')||'null');}catch{}
const allowed=session?.activeRole==='admin'&&session.profiles?.some(profile=>profile.role==='admin');
document.querySelector('#accessDenied').hidden=allowed;
document.querySelector('#adminApp').hidden=!allowed;
if(allowed){
  const nav=document.querySelector('#adminNav');
  nav.innerHTML=areas.map(([title],index)=>`<button type="button" data-area="${index}" ${index===0?'aria-current="page"':''}>${title}</button>`).join('');
  function render(index){
    const [title,description]=areas[index];
    document.querySelectorAll('[data-area]').forEach(button=>button.setAttribute('aria-current',button.dataset.area===String(index)?'page':'false'));
    document.querySelector('#adminDetail').innerHTML=`<span class="eyebrow">ÁREA ADMINISTRATIVA · PRÉVIA</span><h2>${title}</h2><p>${description}</p><div class="admin-empty"><strong>Sem registros reais nesta demonstração.</strong><p>As ações desta área dependerão de permissões verificadas no servidor, validação humana e histórico auditável antes da operação real.</p></div>`;
  }
  nav.addEventListener('click',event=>{const button=event.target.closest('[data-area]');if(button)render(Number(button.dataset.area));});
  document.querySelector('#adminLogout').addEventListener('click',()=>{sessionStorage.removeItem('ponteDemoSession');sessionStorage.removeItem('ponteDemoProgress');location.href='conta.html#entrar';});
  render(0);
}
