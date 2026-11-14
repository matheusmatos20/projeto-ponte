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

// Atalhos prioritários do Documento 4. As áreas sem dados reais mostram a estrutura prevista.
const doc4Modules = {
  paciente: [
    ['Meu Oncoflix','Jornadas compatíveis com o perfil e as regras de acesso.'],['Minhas jornadas','Percursos iniciados e progresso da sessão.'],['Continue de onde parei','Retomada da jornada demonstrativa.'],['Meu desenvolvimento','Atividades e caminhos de participação.'],['Selos e certificados','Reconhecimentos somente quando previstos em iniciativas reais.'],['Pontuações e benefícios','Regras futuras ainda sujeitas à definição.'],['Convites recebidos','Convites específicos mediante autorização.'],['Oportunidades disponíveis','Participação conforme critérios de cada iniciativa.'],['Projetos e participações','Histórico de participação em iniciativas.'],['Documentos e autorizações','Registros restritos ao titular e pessoas autorizadas.'],['Interesses e disponibilidade','Temas e formas de participação escolhidos por você.'],['Meu perfil e privacidade','Informações da conta e preferências de privacidade.']
  ],
  familiar: [
    ['Jornadas recomendadas','Conteúdos destinados à rede de apoio.'],['Meu Oncoflix','Acesso às jornadas e ao progresso da sessão.'],['Minha participação','Atividades e iniciativas de que você participa.'],['Conteúdos sobre rede de apoio','Materiais para familiares e cuidadores.'],['Convites e oportunidades','Propostas compatíveis com suas preferências.'],['Atividades e eventos','Encontros e ações disponíveis, quando houver.'],['Meus certificados','Certificados apenas quando previstos por uma jornada.'],['Meu perfil e privacidade','Vínculo, interesses e escolhas de visibilidade.']
  ],
  profissional: [
    ['Meu perfil profissional','Formação, especialidades e atuação.'],['Prévia da minha vitrine','Modelo da apresentação pública autorizada.'],['Atualizar informações','Dados profissionais e canais de atendimento.'],['Meu Oncoflix','Educação e atualização para profissionais.'],['Jornadas profissionais','Conteúdos relacionados à atuação.'],['Convites para projetos','Propostas do Portal VPM sujeitas a aceite.'],['Oportunidades de participação','Palestras, eventos e outras iniciativas.'],['Minhas participações','Histórico de iniciativas.'],['Documentos e autorizações','Comprovações e permissões aplicáveis.'],['Notificações','Avisos relativos ao perfil e aos projetos.']
  ],
  ong: [
    ['Meu perfil institucional','Apresentação, sede e abrangência.'],['Prévia da página pública','Modelo de página institucional autorizada.'],['Atualizar informações','Dados e serviços da organização.'],['Meu diagnóstico institucional','Análise restrita à organização e ao Portal VPM.'],['Meu plano de desenvolvimento','Necessidades e ações de fortalecimento.'],['Jornadas para organizações','Educação e capacitação institucional.'],['Convites e oportunidades','Possibilidades avaliadas pelo Portal VPM.'],['Projetos em andamento','Somente iniciativas da organização.'],['Minhas conexões','Relações mediadas e acompanhadas.'],['Documentos e formalizações','Arquivos e acordos com acesso definido.'],['Contrapartidas e entregas','Responsabilidades assumidas em projetos.'],['Indicadores e relatórios','Resultados da organização com permissão.'],['Histórico de participação','Iniciativas concluídas ou anteriores.']
  ],
  empreendedora: [
    ['Meu perfil empreendedor','História e atuação da empreendedora.'],['Prévia da minha vitrine','Modelo de página pública do negócio.'],['Minha marca e meu negócio','Apresentação e propósito da marca.'],['Meus produtos e serviços','Fichas para itens autorizados.'],['Imagens e informações','Materiais de apresentação sujeitos à revisão.'],['Links comerciais','Canais externos autorizados.'],['Jornadas educacionais','Educação para desenvolvimento e negócios.'],['Convites e oportunidades','Possibilidades de participação.'],['Projetos e participações','Iniciativas de que faz parte.'],['Documentos e autorizações','Registros necessários para divulgação e projetos.'],['Notificações','Avisos sobre o perfil e as iniciativas.']
  ],
  comunicador: [
    ['Meu perfil privado','Apresentação restrita ao titular e ao Portal VPM.'],['Temas de atuação','Causas e assuntos com os quais trabalha.'],['Canais e formatos','Redes, meios e tipos de conteúdo.'],['Minha disponibilidade','Interesse e disponibilidade para iniciativas.'],['Convites recebidos','Propostas específicas sujeitas a aceite.'],['Oportunidades disponíveis','Possibilidades conforme perfil e permissão.'],['Projetos em andamento','Iniciativas em que participa.'],['Briefings e orientações','Diretrizes de cada projeto autorizado.'],['Entregas pendentes','Atividades acordadas, quando houver.'],['Aprovações','Revisões de materiais conforme projeto.'],['Histórico de participações','Trabalhos realizados na plataforma.'],['Autorizações de imagem e conteúdo','Permissões registradas por iniciativa.'],['Remunerações e contrapartidas','Condições apenas quando aplicáveis e acordadas.'],['Meu Oncoflix','Jornadas disponíveis para o perfil.']
  ],
  empresa: [
    ['Meus projetos','Somente projetos atribuídos à empresa e ao representante.'],['Projetos em andamento','Etapas das iniciativas autorizadas.'],['Indicadores de execução','Dados agregados e autorizados.'],['Cronogramas','Prazos dos projetos atribuídos.'],['Entregas pendentes','Materiais e atividades previstos em contrato.'],['Materiais para aprovação','Revisões permitidas pelo projeto.'],['Solicitações de alteração','Pedidos registrados junto ao Portal VPM.'],['Relatórios','Acompanhamento dos projetos autorizados.'],['Resultados e impacto','Indicadores aprovados para compartilhamento.'],['Documentos e formalizações','Acordos e arquivos específicos.'],['Comunicação com o Portal VPM','Contato institucional sobre projetos.']
  ],
  admin: [
    ['Visão geral da plataforma','Acompanhamento administrativo com acesso segmentado.'],['Usuários e perfis','Gestão conforme função e necessidade.'],['Validação de cadastros','Análise humana, justificativa e histórico.'],['Diretório de ONGs','Revisão de perfis institucionais públicos.'],['Vitrines públicas','Aprovação de empreendedoras e profissionais.'],['Banco privado de talentos','Consulta restrita de comunicadores e participantes.'],['Empresas e parceiros','Relações institucionais.'],['Projetos e contratos','Governança das iniciativas.'],['Oportunidades e convites','Curadoria e acompanhamento.'],['Oncoflix e educação','Categorias, jornadas e regras de acesso.'],['Gamificação e benefícios','Regras futuras sujeitas à definição.'],['Indicadores e relatórios','Dados registrados, documentados e validados.'],['Biblioteca de produção','Materiais e direitos de uso.'],['Autorizações e documentos','Permissões e arquivos restritos.'],['Comunicação e suporte','Avisos e solicitações.'],['Segurança e auditoria','Acessos, permissões e histórico.']
  ]
};
for(const [id,modules] of Object.entries(doc4Modules))roles[id].modules=modules;

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
  sessionStorage.removeItem('ponteDemoProgress');
  account=found; activeRole=found.profiles[0].role; clearErrors(); renderDashboard();
}
function renderFeature(){
  const cards={
    paciente:`<div class="role-feature feature-patient"><div><span class="eyebrow">APRENDA NO SEU RITMO</span><h3>Seu caminho começa pelo Oncoflix.</h3><p>Explore jornadas, retome etapas de teste e escolha como deseja participar das iniciativas.</p><a href="oncoflix.html">Abrir meu Oncoflix ↗</a></div><div class="feature-side"><strong>Seu espaço é privado</strong><span>Educação · participação · autonomia</span><span>Interesses informados por você</span></div></div>`,
    familiar:`<div class="role-feature feature-family"><div><span class="eyebrow">REDE DE APOIO</span><h3>Informação para estar junto.</h3><p>Encontre percursos para familiares e cuidadores, além das atividades de que você decidir participar.</p><a href="oncoflix.html">Ver jornadas para a rede de apoio ↗</a></div><div class="feature-side"><strong>Você escolhe o que contar</strong><span>Vínculo e papel no cuidado são opcionais</span><span>Seu perfil não é público</span></div></div>`,
    profissional:`<div class="role-feature feature-professional"><div><span class="eyebrow">ATUAÇÃO PROFISSIONAL</span><h3>Seu trabalho, com apresentação clara.</h3><p>Complete suas informações, confira um modelo de vitrine e acompanhe jornadas e convites compatíveis.</p><a href="perfil.html?tipo=profissional&id=prof-01">Ver modelo de vitrine ↗</a></div><div class="feature-side"><strong>Publicação sob revisão</strong><span>Cadastro completo ≠ registro validado</span><span><a href="oncoflix.html">Explorar Oncoflix ↗</a></span></div></div>`,
    ong:`<div class="role-feature feature-ong"><div><span class="eyebrow">GESTÃO DA ORGANIZAÇÃO</span><h3>Fortalecer a atuação, acompanhar projetos.</h3><p>A página pública é uma parte do trabalho. Diagnóstico, documentos e necessidades de desenvolvimento permanecem restritos.</p><a href="perfil.html?tipo=ong&id=ong-01">Ver modelo de página pública ↗</a></div><div class="feature-side"><strong>Ambiente institucional</strong><span>Diagnóstico interno, sem ranking</span><span>Projetos e representantes autorizados</span></div></div>`,
    empreendedora:`<div class="role-feature feature-entrepreneur"><div><span class="eyebrow">VITRINE DO NEGÓCIO</span><h3>Uma página para apresentar o que você faz.</h3><p>Organize a história da marca, produtos, serviços e links comerciais que desejar divulgar.</p><a href="perfil.html?tipo=empreendedora&id=empre-01">Ver modelo de vitrine ↗</a></div><div class="feature-side"><strong>Você decide o que divulgar</strong><span>Fichas de produtos e serviços</span><span>Publicação mediante autorização</span></div></div>`,
    comunicador:`<div class="role-feature feature-communicator"><div><span class="eyebrow">BASE PRIVADA DE COLABORADORES</span><h3>Seu perfil não aparece no site público.</h3><p>Temas, canais e disponibilidade ajudam o Portal VPM a avaliar convites para campanhas e projetos específicos.</p><a href="oncoflix.html">Abrir meu Oncoflix ↗</a></div><div class="feature-side"><strong>Nenhum convite real nesta versão</strong><span>Briefings e entregas por projeto</span><span>Autorizações registradas por iniciativa</span></div></div>`,
    empresa:`<div class="role-feature feature-company"><div><span class="eyebrow">ACOMPANHAMENTO DE PROJETOS</span><h3>Somente o que foi atribuído à sua equipe.</h3><p>Quando houver projetos autorizados, este espaço reunirá cronogramas, entregas, aprovações e indicadores permitidos.</p><span class="feature-empty">Nenhum projeto real atribuído nesta demonstração</span></div><div class="feature-side"><strong>Acesso limitado por projeto</strong><span>Sem dados individuais de saúde</span><span>Sem acesso à base geral da rede</span></div></div>`,
    admin:`<div class="role-feature feature-admin"><div><span class="eyebrow">GOVERNANÇA PORTAL VPM</span><h3>Um centro de gestão próprio.</h3><p>Cadastros, diretórios, vitrines, educação e projetos passam por funções e permissões administrativas diferentes.</p><span class="feature-empty">Nenhuma aprovação real disponível nesta demonstração</span></div><div class="feature-side"><strong>Fila de demonstração</strong><span>Validações: sem registros reais</span><span>Publicações: sem registros reais</span><span>Banco de talentos: privado</span></div></div>`
  };
  $('#roleFeature').innerHTML=cards[activeRole]||'';
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
  $('#dashboardView').dataset.role=activeRole;
  renderFeature();
  $('#moduleGrid').innerHTML=config.modules.map(([title,description],index)=>`<button type="button" class="module-card" data-module="${index}"><span class="module-number">${String(index+1).padStart(2,'0')}</span><strong>${escapeHtml(title)}</strong><span>${escapeHtml(description)}</span><small>${/^(Meu perfil|Minha marca|Atualizar informações)/.test(title)?'Preencher rascunho':'Explorar área'} ↗</small></button>`).join('');
  $('#accessNote').textContent=config.access;
  sessionStorage.setItem('ponteDemoSession',JSON.stringify({name:account.name,email:account.email,profiles:account.profiles,demo:account.demo,activeRole}));
  location.hash='meu-espaco';
  window.scrollTo({top:0,behavior:'instant'});
}
function openModule(index){
  const [title,description]=roles[activeRole].modules[index];
  const profile=currentProfile();
  if(/Oncoflix|Jornadas|Educação|Continue de onde parei/i.test(title)&&activeRole!=='admin'){location.href='oncoflix.html';return;}
  const editable=['Meu perfil','Meu negócio','Perfil institucional','Meu perfil institucional','Meu perfil e privacidade','Meu perfil profissional','Meu perfil empreendedor','Meu perfil privado','Minha marca e meu negócio','Atualizar informações'].includes(title);
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
  sessionStorage.removeItem('ponteDemoProgress');createdAccounts.push(created);account=created;activeRole=role;renderDashboard();
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
$('#logoutButton').addEventListener('click',()=>{account=null;activeRole=null;createdAccounts.length=0;sessionStorage.removeItem('ponteDemoSession');sessionStorage.removeItem('ponteDemoProgress');$('#dashboardView').hidden=true;$('#authView').hidden=false;$('#logoutButton').hidden=true;$('#loginForm').reset();$('#registerForm').reset();$('#demoAccount').value='';showTab('login');window.scrollTo({top:0,behavior:'instant'});});
$('#closeModule').addEventListener('click',()=>$('#moduleDialog').close());
$('#closeProfile').addEventListener('click',()=>$('#profileDialog').close());
for(const dialog of document.querySelectorAll('dialog'))dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
try{
  const restored=JSON.parse(sessionStorage.getItem('ponteDemoSession')||'null');
  if(restored&&Array.isArray(restored.profiles)&&restored.profiles.length&&roles[restored.activeRole]){account=restored;activeRole=restored.activeRole;renderDashboard();}
  else if(location.hash==='#cadastro')showTab('register');
}catch{sessionStorage.removeItem('ponteDemoSession');if(location.hash==='#cadastro')showTab('register');}
