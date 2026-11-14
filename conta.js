// Somente dados demonstrativos. Nenhuma credencial ou permissão deste arquivo é real.
const DEMO_PASSWORD = 'PonteDemo2026!';
const roles = {
  paciente: {
    name: 'Paciente ou sobrevivente', title: 'Seu espaço no Ponte',
    intro: 'Acompanhe conteúdos, jornadas e iniciativas disponíveis para a sua participação.',
    next: 'Escolher interesses', nextDetail: 'Informações de saúde não fazem parte deste cadastro.',
    visibility: 'Perfil privado', access: 'Pacientes e sobreviventes não aparecem no diretório público geral. O perfil de saúde será opcional e separado quando houver estrutura jurídica e técnica para isso.',
    fields: [['apresentacao','Apresentação (opcional)'],['interesses','Temas de interesse'],['participacao','Preferências de participação']],
    modules: [
      ['Educação','Conteúdos e jornadas sobre saúde e oncologia.'],['Minhas jornadas','Inscrições, atividades e progresso, quando houver conteúdos disponíveis.'],['Oportunidades','Iniciativas compatíveis com o perfil e com as regras de participação.'],['Meu perfil','Interesses e preferências que você decide informar.'],['Perfil de saúde','Área opcional e separada do cadastro geral; ainda não disponível nesta demonstração.']]
  },
  familiar: {
    name: 'Familiar ou rede de apoio', title: 'Um espaço para quem acompanha',
    intro: 'Encontre caminhos de educação e participação para familiares, cuidadores e redes de apoio.',
    next: 'Informar seus interesses', nextDetail: 'O vínculo e a forma de cuidado são opcionais.',
    visibility: 'Perfil privado', access: 'As informações sobre a pessoa acompanhada não são solicitadas nesta demonstração. O que for compartilhado futuramente dependerá de finalidade e permissão.',
    fields: [['vinculo','Vínculo com a pessoa acompanhada'],['cuidado','Forma de participação no cuidado'],['temas','Temas de interesse']],
    modules: [
      ['Educação para a rede de apoio','Conteúdos voltados a familiares e cuidadores.'],['Jornadas e conteúdos','Percursos e materiais organizados por tema.'],['Iniciativas e oportunidades','Possibilidades de participação conforme critérios de cada iniciativa.'],['Meu perfil','Preferências e temas que você deseja informar.'],['Histórico de participação','Registro das atividades em que você participar.']]
  },
  profissional: {
    name: 'Profissional da saúde', title: 'Seu espaço profissional',
    intro: 'Organize seu perfil e acompanhe educação, publicações e oportunidades da rede.',
    next: 'Completar dados profissionais', nextDetail: 'Algumas funções exigirão validação do registro profissional.',
    visibility: 'Publicação sob autorização', access: 'O cadastro não publica sua vitrine. Funcionalidades que exigem comprovação só serão liberadas após conferência humana pelo Portal VPM.',
    fields: [['profissao','Profissão'],['especialidade','Especialidade'],['registro','Registro profissional, quando aplicável'],['formacao','Formação'],['atuacao','Áreas de atuação'],['localizacao','Localização'],['modalidade','Modalidade de atendimento']],
    modules: [
      ['Educação e atualização','Cursos e jornadas para desenvolvimento profissional.'],['Meu perfil','Formação, experiência e áreas de atuação.'],['Minha vitrine pública','Prévia das informações autorizadas para divulgação.'],['Publicações e materiais','Conteúdos sujeitos à aprovação editorial.'],['Palestras, eventos e projetos','Oportunidades avaliadas conforme perfil e disponibilidade.'],['Histórico de participação','Atividades e iniciativas de que você participou.']]
  },
  ong: {
    name: 'ONG ou organização', title: 'Espaço da organização',
    intro: 'Reúna as informações institucionais e acompanhe os caminhos de desenvolvimento e participação.',
    next: 'Completar perfil institucional', nextDetail: 'A representação e os documentos exigem conferência.',
    visibility: 'Publicação sob autorização', access: 'A conta institucional é separada da conta pessoal do representante. Diagnóstico e documentos internos ficam restritos à organização e à equipe autorizada do Portal VPM.',
    fields: [['instituicao','Nome da organização'],['cnpj','CNPJ, quando aplicável'],['area','Área de atuação'],['sede','Localização da sede'],['abrangencia','Regiões atendidas'],['necessidades','Necessidades de desenvolvimento']],
    modules: [
      ['Meu perfil institucional','Identificação, sede, abrangência e apresentação autorizada.'],['Diagnóstico institucional','Necessidades e capacidades para análise interna, sem ranking público.'],['Documentos e certificados','Arquivos com acesso e finalidade definidos.'],['Projetos','Iniciativas públicas autorizadas e projetos restritos da organização.'],['Educação e desenvolvimento','Conteúdos destinados ao fortalecimento institucional.'],['Oportunidades e ativações','Convites e conexões acompanhados pelo Portal VPM.'],['Campanhas e jornadas','Participação conforme seleção, convite e prazo.'],['Entregas e relatórios','Acompanhamento de responsabilidades e resultados.'],['Representantes','Acessos com permissões específicas e revogáveis.']]
  },
  empreendedora: {
    name: 'Empreendedora', title: 'Seu negócio no Ponte',
    intro: 'Apresente seu trabalho e conheça educação, conexões e iniciativas relacionadas ao negócio.',
    next: 'Apresentar o negócio', nextDetail: 'A vitrine depende de autorização e revisão.',
    visibility: 'Publicação sob autorização', access: 'A apresentação pública, os produtos e os canais de contato só serão exibidos conforme sua autorização e as regras de publicação.',
    fields: [['negocio','Nome do negócio'],['historia','História e apresentação'],['produtos','Produtos e serviços'],['publico','Público atendido'],['localizacao','Localização'],['canais','Canais de comunicação e venda']],
    modules: [
      ['Educação e atualização','Cursos, jornadas e materiais para desenvolvimento.'],['Meu negócio','História, atuação, produtos e serviços.'],['Minha vitrine','Prévia das informações autorizadas para o público.'],['Projetos e iniciativas','Propostas e ações em que o negócio participe.'],['Oportunidades e conexões','Solicitações avaliadas e mediadas pelo Portal VPM quando cabível.'],['Minhas participações','Histórico das iniciativas realizadas.']]
  },
  comunicador: {
    name: 'Comunicador, influenciador ou ativista', title: 'Seu espaço de comunicação',
    intro: 'Organize temas, canais e trabalhos para possíveis campanhas e projetos.',
    next: 'Apresentar canais e temas', nextDetail: 'A atuação e a vitrine passam por análise.',
    visibility: 'Publicação sob autorização', access: 'A publicação dos canais depende de autorização. Convites para campanhas e projetos dependem de compatibilidade, disponibilidade e concordância.',
    fields: [['temas','Temas de atuação'],['canais','Canais e redes sociais'],['formatos','Formatos de conteúdo'],['portfolio','Portfólio'],['alcance','Localização e área de alcance']],
    modules: [
      ['Educação e atualização','Cursos e jornadas para desenvolvimento.'],['Meu perfil','Temas, formatos e experiências.'],['Minha vitrine','Prévia dos canais e dados aprovados para divulgação.'],['Portfólio e canais','Trabalhos e canais que você deseja apresentar.'],['Campanhas e oportunidades','Convites sujeitos à curadoria do Portal VPM.'],['Minhas ativações','Iniciativas de que você participa.'],['Entregas e relatórios','Registro das entregas acordadas em projetos.']]
  },
  empresa: {
    name: 'Empresa ou instituição', title: 'Espaço da empresa',
    intro: 'Acompanhe apenas as iniciativas atribuídas e as informações autorizadas para sua equipe.',
    next: 'Completar dados institucionais', nextDetail: 'A representação da empresa precisa ser conferida.',
    visibility: 'Acesso restrito', access: 'A empresa não vê o banco geral de participantes, contatos privados, dados individuais de saúde, documentos internos de ONGs nem projetos de outras empresas. Indicadores só aparecem quando agregados e autorizados.',
    fields: [['instituicao','Nome da empresa ou instituição'],['cnpj','CNPJ'],['segmento','Setor de atuação'],['contato','Contato institucional'],['site','Site institucional']],
    modules: [
      ['Perfil institucional','Dados e apresentação da empresa.'],['Projetos autorizados','Somente projetos atribuídos ao representante.'],['Cronogramas','Etapas das iniciativas autorizadas.'],['Entregas e aprovações','Materiais e resultados previstos em cada projeto.'],['Indicadores agregados','Resultados permitidos, sem dados individuais.'],['Relatórios de execução','Informações de projetos autorizados.'],['Histórico de iniciativas','Ações realizadas com a empresa.'],['Usuários internos','Representantes e permissões da conta institucional.']]
  },
  admin: {
    name: 'Administração VPM', title: 'Gestão do Projeto Ponte',
    intro: 'Visão demonstrativa da administração e da curadoria central do Portal VPM.',
    next: 'Estruturar permissões', nextDetail: 'Nenhuma decisão real pode ser tomada nesta prévia.',
    visibility: 'Acesso administrativo', access: 'As funções administrativas devem ser segmentadas por necessidade. Esta demonstração não permite aprovar pessoas, acessar documentos ou publicar conteúdos.',
    fields: [],
    modules: [
      ['Usuários e organizações','Gestão de contas e perfis conforme permissões.'],['Validação de perfis','Análise humana, justificativa e histórico.'],['Documentos','Conferência com acesso restrito.'],['Vitrines e conteúdo','Moderação e aprovação antes da publicação.'],['Educação e jornadas','Organização e curadoria dos conteúdos.'],['Projetos e oportunidades','Conexões qualificadas, responsabilidades e entregas.'],['Empresas e patrocinadores','Gestão das relações institucionais.'],['Permissões e auditoria','Acessos segmentados e registro das ações.'],['Privacidade','Tratamento de solicitações dos titulares.']]
  }
};

const demoAccounts = [
  ['paciente@ponte.test','Paciente ou sobrevivente',['paciente']],
  ['familiar@ponte.test','Familiar ou rede de apoio',['familiar']],
  ['profissional@ponte.test','Profissional da saúde',['profissional']],
  ['ong@ponte.test','Representante de ONG',['ong']],
  ['empreendedora@ponte.test','Empreendedora',['empreendedora']],
  ['comunicador@ponte.test','Comunicador ou ativista',['comunicador']],
  ['empresa@ponte.test','Representante de empresa',['empresa']],
  ['admin@ponte.test','Equipe VPM',['admin']],
  ['multiperfil@ponte.test','Participante com dois perfis',['paciente','empreendedora']]
].map(([email,name,roleIds])=>({email,name,password:DEMO_PASSWORD,profiles:roleIds.map(role=>({role,data:{},institution:role==='ong'?'Organização de demonstração':role==='empresa'?'Empresa de demonstração':''})),demo:true}));

const createdAccounts = [];
let account = null;
let activeRole = null;
const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const personalRoles = Object.keys(roles).filter(id=>id!=='admin');
const roleOptions = ids => '<option value="">Selecione uma opção</option>'+ids.map(id=>`<option value="${id}">${roles[id].name}</option>`).join('');
const currentProfile = () => account?.profiles.find(profile=>profile.role===activeRole);

function showTab(which){
  const login=which==='login';
  $('#loginPanel').hidden=!login; $('#registerPanel').hidden=login;
  $('#loginTab').setAttribute('aria-selected',String(login));
  $('#registerTab').setAttribute('aria-selected',String(!login));
  location.hash=login?'entrar':'cadastro';
}
function showError(id,message){const node=$('#'+id);node.textContent=message;node.hidden=false;}
function clearErrors(){document.querySelectorAll('.form-error').forEach(node=>{node.hidden=true;node.textContent='';});}
function institutionField(role,where){
  const target=$('#'+where);
  target.innerHTML=role==='ong'?'<label>Nome da organização <input name="institution" required maxlength="120" placeholder="Nome da organização"></label>':role==='empresa'?'<label>Nome da empresa ou instituição <input name="institution" required maxlength="120" placeholder="Nome da instituição"></label>':'';
}
function login(email,password){
  const found=[...demoAccounts,...createdAccounts].find(item=>item.email.toLowerCase()===email.trim().toLowerCase()&&item.password===password);
  if(!found){showError('loginError','E-mail ou senha de teste não conferem. Confira os dados e tente novamente.');return;}
  account=found; activeRole=found.profiles[0].role; clearErrors(); renderDashboard();
}
function renderDashboard(){
  const profile=currentProfile(), config=roles[activeRole];
  $('#authView').hidden=true; $('#dashboardView').hidden=false; $('#logoutButton').hidden=false;
  $('#welcomeTitle').textContent=config.title;
  $('#welcomeText').textContent=config.intro;
  $('#accountName').textContent=account.name;
  $('#accountEmail').textContent=account.email;
  $('#profileSelect').innerHTML=account.profiles.map(item=>`<option value="${item.role}">${escapeHtml(roles[item.role].name)}${item.institution?' · '+escapeHtml(item.institution):''}</option>`).join('');
  $('#profileSelect').value=activeRole;
  $('#profileLevel').textContent='Básico';
  $('#profileStatusText').textContent='Dados complementares em rascunho nesta aba';
  $('#profileVisibility').textContent=config.visibility;
  $('#profileNext').textContent=config.next;
  $('#profileNextDetail').textContent=config.nextDetail;
  $('#panelTitle').textContent=profile.institution||config.name;
  $('#panelIntro').textContent=config.intro;
  $('#moduleGrid').innerHTML=config.modules.map(([title,description],index)=>`<button type="button" class="module-card" data-module="${index}"><span class="module-number">${String(index+1).padStart(2,'0')}</span><strong>${escapeHtml(title)}</strong><span>${escapeHtml(description)}</span><small>${title.startsWith('Meu perfil')||title==='Meu negócio'||title==='Perfil institucional'||title==='Meu perfil institucional'?'Preencher rascunho':'Explorar área'} ↗</small></button>`).join('');
  $('#accessNote').textContent=config.access;
  location.hash='meu-espaco';
  window.scrollTo({top:0,behavior:'instant'});
}
function openModule(index){
  const [title,description]=roles[activeRole].modules[index];
  const profile=currentProfile();
  const editable=['Meu perfil','Meu negócio','Perfil institucional','Meu perfil institucional'].includes(title);
  let html=`<span class="eyebrow">${escapeHtml(roles[activeRole].name.toUpperCase())} · DEMONSTRAÇÃO</span><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p>`;
  if(editable&&roles[activeRole].fields.length){
    html+='<form id="profileEditForm" class="profile-edit-form">';
    for(const [key,label] of roles[activeRole].fields){const value=profile.data[key]||((key==='instituicao')?profile.institution:'');html+=`<label>${escapeHtml(label)} <input name="${key}" value="${escapeHtml(value)}" maxlength="200" autocomplete="off"></label>`;}
    html+='<button class="form-submit" type="submit">Guardar rascunho nesta aba <span>↗</span></button></form>';
  }else{
    html+='<div class="dialog-note">Área prevista nos documentos do Projeto Ponte. Ainda não há conteúdos, projetos ou registros reais nesta demonstração.</div>';
  }
  $('#moduleContent').innerHTML=html;
  $('#moduleDialog').showModal();
}

$('#loginTab').addEventListener('click',()=>showTab('login'));
$('#registerTab').addEventListener('click',()=>showTab('register'));
$('#registerRole').innerHTML=roleOptions(personalRoles);
$('#newProfileRole').innerHTML=roleOptions(personalRoles);
$('#demoAccount').innerHTML+='<option value="multiperfil@ponte.test">Conta com dois perfis</option>'+Object.entries(roles).map(([id,role])=>`<option value="${id==='admin'?'admin':id}@ponte.test">${escapeHtml(role.name)}</option>`).join('');
$('#demoAccount').addEventListener('change',event=>{if(!event.target.value)return;$('#loginEmail').value=event.target.value;$('#loginPassword').value=DEMO_PASSWORD;clearErrors();});
$('#registerRole').addEventListener('change',event=>institutionField(event.target.value,'registerRoleFields'));
$('#newProfileRole').addEventListener('change',event=>institutionField(event.target.value,'newProfileFields'));
$('#loginForm').addEventListener('submit',event=>{event.preventDefault();clearErrors();login($('#loginEmail').value,$('#loginPassword').value);});
$('#registerForm').addEventListener('submit',event=>{
  event.preventDefault();clearErrors();
  const email=$('#registerEmail').value.trim().toLowerCase(),name=$('#registerName').value.trim(),password=$('#registerPassword').value,role=$('#registerRole').value;
  if(!role)return showError('registerError','Escolha seu primeiro perfil.');
  if([...demoAccounts,...createdAccounts].some(item=>item.email===email))return showError('registerError','Este e-mail já está em uso nesta demonstração. Entre com a conta ou use outro e-mail.');
  if(password.length<8)return showError('registerError','Use uma senha de teste com pelo menos 8 caracteres.');
  const institution=($('#registerRoleFields input')?.value||'').trim();
  if((role==='ong'||role==='empresa')&&!institution)return showError('registerError','Informe o nome da organização ou empresa.');
  const created={email,name,password,profiles:[{role,data:{},institution}],demo:false};
  createdAccounts.push(created);account=created;activeRole=role;renderDashboard();
});
$('#profileSelect').addEventListener('change',event=>{activeRole=event.target.value;renderDashboard();});
$('#moduleGrid').addEventListener('click',event=>{const button=event.target.closest('[data-module]');if(button)openModule(Number(button.dataset.module));});
$('#moduleContent').addEventListener('submit',event=>{
  if(event.target.id!=='profileEditForm')return;
  event.preventDefault();const profile=currentProfile();
  for(const [key] of roles[activeRole].fields)profile.data[key]=String(new FormData(event.target).get(key)||'').trim();
  if(profile.data.instituicao)profile.institution=profile.data.instituicao;
  $('#moduleDialog').close();renderDashboard();
});
$('#addProfileButton').addEventListener('click',()=>{$('#newProfileRole').value='';$('#newProfileFields').innerHTML='';clearErrors();$('#profileDialog').showModal();});
$('#addProfileForm').addEventListener('submit',event=>{
  event.preventDefault();clearErrors();const role=$('#newProfileRole').value;
  if(!role)return showError('addProfileError','Escolha um tipo de perfil.');
  if(account.profiles.some(item=>item.role===role))return showError('addProfileError','Este tipo de perfil já está nesta conta de demonstração.');
  const institution=($('#newProfileFields input')?.value||'').trim();
  if((role==='ong'||role==='empresa')&&!institution)return showError('addProfileError','Informe o nome da organização ou empresa.');
  account.profiles.push({role,data:{},institution});activeRole=role;$('#profileDialog').close();renderDashboard();
});
$('#logoutButton').addEventListener('click',()=>{account=null;activeRole=null;$('#dashboardView').hidden=true;$('#authView').hidden=false;$('#logoutButton').hidden=true;$('#loginForm').reset();$('#demoAccount').value='';showTab('login');window.scrollTo({top:0,behavior:'instant'});});
$('#closeModule').addEventListener('click',()=>$('#moduleDialog').close());
$('#closeProfile').addEventListener('click',()=>$('#profileDialog').close());
for(const dialog of document.querySelectorAll('dialog'))dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
if(location.hash==='#cadastro')showTab('register');
