// Modelo demonstrativo. Os rótulos de origem vêm da especificação recebida; o CSV ainda precisa ser conferido.
(()=>{
const field=(id,label,source,type='text',extra={})=>({id,label,source,type,...extra});
window.PONTE_ORG={
  storageKey:'ponteOrgDemoV1',
  steps:[
    {id:'identificacao',title:'Identificação e apresentação institucional',fields:[
      field('name','Nome da organização','Name'),field('cnpj','CNPJ','CNPJ'),
      field('mission','Missão','Mission Statement','textarea'),field('history','Breve história da ONG','Breve história da ONG','textarea'),
      field('founder','Fundador','Fundador'),field('values','Principais valores','Principais valores','multi'),
      field('website','Website','Website','url'),field('social','Redes sociais','Redes Sociais','multi'),
      field('valuesLegacy','Values — campo a conferir','Values','textarea',{auxiliary:true,unverified:true})
    ]},
    {id:'atuacao',title:'Atuação e público atendido',fields:[
      field('audience','Público atendido','Target Audience','multi'),field('reach','Abrangência','Abrangência','reach'),
      field('states','Estados','Estados','states'),field('cities','Cidades','Cidades','multi'),
      field('cancerTypes','Tipos de câncer atendidos','Tipos de Câncer Atendidos','multi'),
      field('assistance','Tipos de assistência oferecida','Tipos de Assistência Oferecida','multi'),
      field('area','Área de atuação','Área de Atuação','multi'),field('services','Serviços oferecidos','Serviços oferecidos','multi'),
      field('mode','Modo de atuação','Modo de atuação','textarea'),
      field('reachLegacy','Abrangência da Atuação — campo a conferir','Abrangência da Atuação','textarea',{auxiliary:true,unverified:true}),
      field('areaLegacy','Área de Atuação (novo) — campo a conferir','Área de Atuação (novo)','textarea',{auxiliary:true,unverified:true})
    ]},
    {id:'demandas',title:'Projetos, serviços e demandas',fields:[
      field('mainProjects','Principais projetos','Principais projetos','textarea'),field('demands','Demandas','Demandas','multi'),
      field('demandNotes','Complemento das demandas','Demandas','textarea',{auxiliary:true}),
      field('servicesPromotion','Divulgação dos serviços','Divulgação dos serviços','textarea'),
      field('marketingTeam','Equipe de marketing ou especialista','Equipe de mkt ou especialista','yesno'),
      field('projectsLegacy','Projects — campo a conferir','Projects','textarea',{auxiliary:true,unverified:true})
    ]},
    {id:'estrutura',title:'Estrutura organizacional',fields:[
      field('age','Há quanto tempo existe a ONG','Há quanto tempos existe a ONG'),field('headquarters','Sede fixa','Sede fixa','yesno'),
      field('board','Conselho administrativo','Conselho administrativo','yesno'),
      field('boardCount','Conselho administrativo (nº pessoas)','Conselho administrativo (nº pessoas)','integer',{dependsOn:'board'}),
      field('fixedTeam','Equipe fixa','Equipe fixa?','yesno'),
      field('employeeCount','Nº de colaboradores CLT','Nº de colaboradores CLT','integer',{dependsOn:'fixedTeam'}),
      field('contractorCount','Nº de autônomos e prestadores','Nº de autônomo e prestadores','integer'),
      field('volunteerCount','Nº de voluntários','Nº de voluntários','integer'),
      field('executionCapacityLegacy','Execution Capacity — campo a conferir','Execution Capacity','textarea',{auxiliary:true,unverified:true})
    ]},
    {id:'governanca',title:'Governança, captação e transparência',fields:[
      field('statute','Estatuto','Estatuto','yesno'),field('certifications','Certificações','Certificações','multi'),
      field('financialGovernance','Governança financeira estruturada','Governança Financeira estruturada','yesno'),
      field('impactIndicators','Indicadores de impacto','Indicadores de impacto','textarea'),
      field('revenueSources','Fontes de receita','Fontes de receita','multi'),
      field('fundraisingSector','Setor de captação de recursos','Setor de captação de recursos','yesno'),
      field('fundraisingStrategies','Principais estratégias de captação de recursos','Principais estratégias de captação de recursos','multi'),
      field('challenges','Principais dificuldades','Principais dificuldades','multi'),
      field('financialTransparency','Transparência financeira','Transparência financeira','textarea'),
      field('partnerships','Parcerias atuais','Parcerias atuais','multi'),
      field('privateDocuments','Documentos comprobatórios privados','Documentos comprobatórios','file',{auxiliary:true}),
      field('transparencyLegacy','Transparência — campo a conferir','Transparência','textarea',{auxiliary:true,unverified:true}),
      field('maturityLegacy','Maturidade Institucional — campo a conferir','Maturidade Institucional','textarea',{auxiliary:true,unverified:true}),
      field('complianceLegacy','Status de Compliance — campo a conferir','Status de Compliance','textarea',{auxiliary:true,unverified:true})
    ]},
    {id:'indicadores',title:'Indicadores e alcance',fields:[
      field('metricPeriod','Período de referência','Período de referência','text',{auxiliary:true}),
      field('socialReach','Alcance das redes sociais','Alcance Redes Sociais','integer'),
      field('siteReach','Alcance do site','Alcance do Site','integer'),
      field('siteClicks','Cliques no site','Cliques no Site','integer'),
      field('directAudience','Público atendido diretamente','Tamanho do Público Atendido Diretamente','integer'),
      field('digitalReach','Alcance digital total','Alcance Digital Total','integer'),
      field('siteReachLegacy','Alcance do Site — campo a conferir','Alcance do Site','textarea',{auxiliary:true,unverified:true})
    ]},
    {id:'representante',title:'Representante institucional',private:true,fields:[
      field('representativeName','Nome do representante','Nome do Representante'),
      field('representativeRole','Cargo do representante','Cargo do Representante'),
      field('representativePhone','Celular do representante','Celular do Representante','tel'),
      field('representativeEmail','E-mail do representante','Email do Representante','email'),
      field('contactInfoLegacy','Contact Info — campo a conferir','Contact Info','textarea',{auxiliary:true,unverified:true}),
      field('representativeContactLegacy','Representante - Dados de Contato — campo a conferir','Representante - Dados de Contato','textarea',{auxiliary:true,unverified:true})
    ]}
  ],
  unresolvedSources:[
    'Execution Capacity','Projects','Abrangência da Atuação','Representante - Dados de Contato',
    'Área de Atuação (novo)','Alcance do Site','Values','Transparência',
    'Contact Info','Maturidade Institucional','Status de Compliance'
  ],
  supportCategories:['Recursos financeiros','Patrocínio empresarial','Voluntariado','Profissionais especializados','Apoio técnico','Comunicação e divulgação','Parcerias institucionais','Materiais e insumos','Outros apoios'],
  formation:[
    {id:'governanca',title:'Gestão e governança de organizações sociais',dimension:'Identidade e estrutura institucional'},
    {id:'captacao',title:'Captação de recursos',dimension:'Captação de recursos'},
    {id:'projetos',title:'Elaboração e estruturação de projetos',dimension:'Projetos e capacidade de execução'},
    {id:'comunicacao',title:'Marketing e comunicação institucional',dimension:'Comunicação e presença digital'},
    {id:'redes',title:'Redes sociais e presença digital',dimension:'Comunicação e presença digital'},
    {id:'empresas',title:'Relacionamento com empresas e patrocinadores',dimension:'Parcerias e relacionamento institucional'},
    {id:'transparencia',title:'Transparência e prestação de contas',dimension:'Gestão financeira e transparência'},
    {id:'voluntarios',title:'Gestão de voluntários',dimension:'Gestão de pessoas e voluntariado'},
    {id:'impacto',title:'Indicadores e avaliação de impacto',dimension:'Indicadores e mensuração de impacto'}
  ],
  dimensions:[
    {title:'Identidade e estrutura institucional',keys:['name','mission','history','headquarters'],formation:'governanca'},
    {title:'Governança e compliance',keys:['statute','board','certifications'],formation:'governanca'},
    {title:'Gestão financeira e transparência',keys:['financialGovernance','financialTransparency','revenueSources'],formation:'transparencia'},
    {title:'Captação de recursos',keys:['fundraisingSector','fundraisingStrategies','challenges'],formation:'captacao'},
    {title:'Projetos e capacidade de execução',keys:['mainProjects','demands'],formation:'projetos'},
    {title:'Comunicação e presença digital',keys:['website','social','servicesPromotion'],formation:'comunicacao'},
    {title:'Gestão de pessoas e voluntariado',keys:['fixedTeam','employeeCount','volunteerCount'],formation:'voluntarios'},
    {title:'Indicadores e mensuração de impacto',keys:['impactIndicators','directAudience','metricPeriod'],formation:'impacto'},
    {title:'Parcerias e relacionamento institucional',keys:['partnerships','representativeRole'],formation:'empresas'}
  ],
  projectFields:[
    field('name','Nome do projeto','Nome do projeto'),field('description','Descrição','Descrição','textarea'),
    field('objective','Objetivo','Objetivo','textarea'),field('audience','Público beneficiado','Público beneficiado','multi'),
    field('location','Localidade de execução','Localidade de execução','multi'),field('justification','Justificativa','Justificativa','textarea'),
    field('expectedResults','Resultados esperados','Resultados esperados','textarea'),
    field('amount','Valor financeiro necessário, quando aplicável','Valor financeiro necessário','money'),
    field('period','Prazo ou período de execução','Prazo ou período de execução'),
    field('availableResources','Recursos já disponíveis','Recursos já disponíveis','textarea'),
    field('neededResources','Recursos ainda necessários','Recursos ainda necessários','textarea'),
    field('support','Tipo de apoio solicitado','Tipo de apoio solicitado','support')
  ],
  initial:{
    name:'Instituto Horizonte (fictício)',mission:'Apresentação fictícia de um espaço de escuta e troca.',
    audience:['Pessoas em tratamento e familiares'],states:['SP'],cities:['São Paulo'],
    area:['Apoio psicossocial'],services:['Apoio psicológico','Grupos de acolhimento e apoio'],
    reach:'Municipal',mainProjects:'Rodas de conversa para famílias'
  }
};
window.PONTE_ORG_STORE={
  read(){
    try{
      const saved=JSON.parse(localStorage.getItem(window.PONTE_ORG.storageKey)||'null');
      if(saved&&typeof saved==='object')return {organizations:saved.organizations||{},projects:saved.projects||[],opportunities:saved.opportunities||[],history:saved.history||[]};
    }catch{}
    return {organizations:{},projects:[],opportunities:[],history:[]};
  },
  save(data){localStorage.setItem(window.PONTE_ORG.storageKey,JSON.stringify(data));},
  ensure(data,email){
    if(data.organizations[email])return data.organizations[email];
    const record={email,values:{...window.PONTE_ORG.initial},status:'rascunho',compliance:'Não avaliado',maturity:'Não classificada',publicConsent:false,notes:[],learning:[]};
    try{
      const old=JSON.parse(sessionStorage.getItem(`ponteDemoOrgDraft:${email}`)||'null');
      if(old?.values){
        const map={'identificacao.nome':'name','atuacao.area':'area','atuacao.servicos':'services','projetos.projeto':'mainProjects','captacao.fontes':'revenueSources'};
        for(const [source,target] of Object.entries(map))if(old.values[source])record.values[target]=['area','services','revenueSources'].includes(target)?String(old.values[source]).split(';').map(x=>x.trim()).filter(Boolean):old.values[source];
      }
    }catch{}
    data.organizations[email]=record;
    this.save(data);
    return record;
  }
};
})();
