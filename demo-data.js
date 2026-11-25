// Dados inteiramente fictícios. Nunca usar como cadastro, atendimento ou indicador real.
window.PONTE_DEMO={
  notice:'Conteúdo demonstrativo — dados fictícios, utilizados exclusivamente para apresentação do protótipo.',
  organization:{
    name:'Instituto Horizonte (fictício)',city:'São Paulo',state:'SP',
    steps:[
      {id:'identificacao',title:'Identificação institucional',fields:[['nome','Nome da organização','Instituto Horizonte (fictício)'],['cidade','Município e estado','São Paulo / SP']]},
      {id:'governanca',title:'Governança e documentação',fields:[['representacao','Representação institucional','Equipe demonstrativa'],['documentos','Documentos de referência','']]},
      {id:'equipe',title:'Equipe e estrutura',fields:[['equipe','Equipe de exemplo','Grupo de trabalho fictício'],['estrutura','Estrutura disponível','']]},
      {id:'atuacao',title:'Atuação e serviços',fields:[['area','Área de atuação','Apoio psicossocial'],['servicos','Serviços de exemplo','Apoio psicológico; grupos de acolhimento']]},
      {id:'projetos',title:'Projetos e resultados',fields:[['projeto','Projeto ilustrativo','Rodas de conversa para famílias'],['resultado','Resultado documentado','']]},
      {id:'financeiro',title:'Gestão financeira',fields:[['processo','Processo de gestão',''],['controle','Controle de recursos','']]},
      {id:'captacao',title:'Captação de recursos',fields:[['fontes','Fontes de recurso',''],['necessidades','Necessidades de captação','']]},
      {id:'comunicacao',title:'Comunicação institucional',fields:[['canais','Canais de comunicação','contato@horizonte.example'],['materiais','Materiais autorizados','']]},
      {id:'desenvolvimento',title:'Necessidades de desenvolvimento',fields:[['prioridade','Prioridade de desenvolvimento','Organização de processos'],['apoio','Tipo de apoio desejado','']]},
      {id:'revisao',title:'Revisão e envio',fields:[['responsavel','Responsável pela revisão',''],['observacoes','Observações finais','']]}
    ],
    diagnosis:[
      ['Governança','Documentação em levantamento','Acesso privado'],
      ['Equipe e estrutura','Informações parcialmente preenchidas','Acesso privado'],
      ['Gestão financeira','Dados ainda não informados','Acesso privado'],
      ['Captação de recursos','Necessidades em levantamento','Acesso privado'],
      ['Comunicação','Canais de exemplo cadastrados','Acesso privado']
    ]
  },
  company:{
    name:'Empresa parceira de demonstração',
    project:{id:'modelo-fortalecimento',name:'Programa de fortalecimento de organizações oncológicas',status:'Cenário fictício em acompanhamento',next:'Acompanhamento das necessidades',metrics:[['5','organizações participantes'],['3','encontros educativos ilustrativos'],['2','planos de desenvolvimento fictícios']],steps:[['Planejamento','Concluído na simulação'],['Encontros educativos','3 encontros ilustrativos'],['Planos de desenvolvimento','2 planos fictícios'],['Acompanhamento','Próxima etapa demonstrativa']],deliverables:['Resumo ilustrativo dos encontros','Modelo fictício de plano de desenvolvimento'],indicators:['Participação agregada de organizações','Encontros e planos demonstrativos']}
  },
  profiles:{
    aprendiz:{title:'Meu espaço de aprendizagem',intro:'Explore jornadas e acompanhe o que concluiu nesta demonstração.',menu:[['Início','inicio'],['Aprender sobre o câncer','aprender'],['Progresso','progresso'],['Meu perfil','perfil']]},
    paciente:{title:'Meu espaço',intro:'Aprenda no seu ritmo e acompanhe suas atividades sem tornar seu perfil público.',menu:[['Início','inicio'],['Aprender sobre o câncer','aprender'],['Progresso e conquistas','progresso'],['Meu perfil privado','perfil']]},
    familiar:{title:'Espaço da rede de apoio',intro:'Encontre conteúdos sobre escuta, cuidado e participação.',menu:[['Início','inicio'],['Aprender sobre o câncer','aprender'],['Progresso','progresso'],['Meu perfil privado','perfil']]},
    ong:{title:'Espaço da organização',intro:'Acompanhe o cadastro, o desenvolvimento e as iniciativas da organização.',menu:[['Visão geral','inicio'],['Cadastro','cadastro'],['Diagnóstico privado','diagnostico'],['Aprender sobre o câncer','aprender'],['Projetos','projetos'],['Notificações','notificacoes']]},
    profissional:{title:'Espaço profissional',intro:'Organize suas informações e explore educação e projetos.',menu:[['Início','inicio'],['Meu perfil','perfil'],['Aprender sobre o câncer','aprender'],['Projetos','projetos']]},
    empreendedora:{title:'Espaço do empreendedor',intro:'Apresente seu negócio fictício e explore a rede.',menu:[['Início','inicio'],['Meu negócio','perfil'],['Aprender sobre o câncer','aprender'],['Projetos','projetos']]},
    comunicador:{title:'Espaço do influenciador',intro:'Organize temas, canais e participações sem exposição pública automática.',menu:[['Visão geral','inicio'],['Meu perfil privado','perfil'],['Temas e canais','atuacao'],['Projetos e convites','projetos'],['Aprender sobre o câncer','aprender'],['Progresso','progresso'],['Notificações','notificacoes']]},
    empresa:{title:'Espaço da empresa',intro:'Acompanhe somente o projeto atribuído e os indicadores autorizados.',menu:[['Visão geral','inicio'],['Meu projeto','projetos'],['Indicadores','indicadores'],['Aprender sobre o câncer','aprender'],['Notificações','notificacoes']]},
    industria:{title:'Espaço da indústria',intro:'Acompanhe apenas iniciativas atribuídas e indicadores autorizados para sua instituição.',menu:[['Visão geral','inicio'],['Meu projeto','projetos'],['Indicadores','indicadores'],['Aprender sobre o câncer','aprender'],['Notificações','notificacoes']]}
  }
};
