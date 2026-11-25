// Somente campos institucionais autorizados entram na visão pública demonstrativa.
if(window.PONTE_PUBLIC&&window.PONTE_ORG_STORE){
  const data=window.PONTE_ORG_STORE.read();
  const values=value=>Array.isArray(value)?value.filter(Boolean):value?[value]:[];
  for(const record of Object.values(data.organizations)){
    // A ficha fictícia inicial não deve representar um cadastro ainda sem aprovação ou consentimento.
    window.PONTE_PUBLIC.ongs=window.PONTE_PUBLIC.ongs.filter(item=>item.name!==record.values?.name);
    if(record.status!=='aprovado'||record.publicConsent!==true)continue;
    const v=record.values||{};
    const publicItem={
      id:`org-local-${record.email.replace(/[^a-z0-9]+/gi,'-')}`,demo:true,publicationStatus:'approved',publicConsent:true,
      name:String(v.name||'Organização de demonstração'),city:values(v.cities)[0]||'',state:values(v.states)[0]||'',
      cities:values(v.cities),states:values(v.states),area:values(v.area),audience:values(v.audience),
      services:values(v.services),cancerTypes:values(v.cancerTypes),reach:String(v.reach||''),
      mission:String(v.mission||''),summary:String(v.history||v.mission||''),
      contact:'não informado',status:'Aprovado somente nesta simulação'
    };
    window.PONTE_PUBLIC.ongs.push(publicItem);
  }
}
