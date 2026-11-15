// O diretório público só recebe organizações cadastradas, autorizadas e revisadas.
// Perfis de vitrine abaixo são modelos fictícios, identificados como demonstração.
window.PONTE_PUBLIC = {
  ongs: [],
  empreendedoras: [
    {id:'empre-01',name:'Empreendedora exemplo 01',brand:'Negócio demonstrativo 01',category:'Produtos e serviços',summary:'Modelo de página para apresentar uma empreendedora, sua marca e seus produtos autorizados.',products:[{name:'Produto demonstrativo 01',category:'Produto',description:'Ficha de exemplo. Descrição e imagens reais dependerão de envio e autorização.'},{name:'Serviço demonstrativo 01',category:'Serviço',description:'Ficha de exemplo. Condições e contato comercial dependerão de informações aprovadas.'}]},
    {id:'empre-02',name:'Empreendedora exemplo 02',brand:'Negócio demonstrativo 02',category:'Iniciativas de impacto',summary:'Modelo de vitrine para uma iniciativa empreendedora do ecossistema.',products:[{name:'Serviço demonstrativo 02',category:'Serviço',description:'Ficha de exemplo sem oferta comercial real.'}]}
  ],
  profissionais: [
    {id:'prof-01',name:'Profissional exemplo 01',profession:'Psicologia',specialty:'Psicologia',summary:'Modelo de apresentação profissional, sujeito a autorização e validação das informações aplicáveis.'},
    {id:'prof-02',name:'Profissional exemplo 02',profession:'Nutrição',specialty:'Nutrição',summary:'Modelo de página para apresentar área de atuação e canais de atendimento autorizados.'}
  ]
};
