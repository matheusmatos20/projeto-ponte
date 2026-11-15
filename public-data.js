// O diretório público só recebe organizações cadastradas, autorizadas e revisadas.
// Perfis de vitrine abaixo são modelos fictícios, identificados como demonstração.
window.PONTE_PUBLIC = {
  ongs: [],
  empreendedoras: [
    {id:'empre-01',demo:true,name:'Empreendedora exemplo 01',brand:'Negócio demonstrativo 01',category:'Produtos e serviços',summary:'Modelo de página para apresentar uma empreendedora, sua marca e seus produtos autorizados.',products:[{name:'Produto demonstrativo 01',category:'Produto',description:'Ficha de exemplo. Descrição e imagens reais dependerão de envio e autorização.'},{name:'Serviço demonstrativo 01',category:'Serviço',description:'Ficha de exemplo. Condições e contato comercial dependerão de informações aprovadas.'}]},
    {id:'empre-02',demo:true,name:'Empreendedora exemplo 02',brand:'Negócio demonstrativo 02',category:'Iniciativas de impacto',summary:'Modelo de vitrine para uma iniciativa empreendedora do ecossistema.',products:[{name:'Serviço demonstrativo 02',category:'Serviço',description:'Ficha de exemplo sem oferta comercial real.'}]}
  ],
  profissionais: [
    {id:'prof-01',demo:true,name:'Profissional exemplo 01',profession:'Psicologia',specialty:'Psicologia',summary:'Modelo de apresentação profissional, sujeito a autorização e validação das informações aplicáveis.'},
    {id:'prof-02',demo:true,name:'Profissional exemplo 02',profession:'Nutrição',specialty:'Nutrição',summary:'Modelo de página para apresentar área de atuação e canais de atendimento autorizados.'}
  ],
  projects: [
    {id:'modelo-rodas',demo:true,name:'Rodas de conversa para famílias',responsible:'Organização demonstrativa',objective:'Criar um espaço de escuta e troca entre familiares.',audience:'Familiares e rede de apoio',description:'Exemplo de apresentação de uma iniciativa de acolhimento. Não é um projeto em execução.',area:'Acolhimento',status:'Modelo fictício',participation:'Nenhuma participação aberta',materials:'Imagens e materiais não publicados'}
  ]
};
