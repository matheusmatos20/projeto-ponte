# Auditoria da rodada OncoPontes

Data: 25/11/2026. Escopo: protótipo estático, com credenciais e permissões demonstrativas no navegador.

## Estrutura encontrada

- Experiência pública: início, Oncoflix, organizações e perfil institucional, Vitrine Ponte, profissionais, empreendedores, projetos e página de informações.
- Conta: cadastro em três etapas, login de teste, múltiplos perfis e redirecionamento para a área correspondente.
- ONG: cadastro institucional em sete etapas, diagnóstico privado, formação, projetos e oportunidades; administração demonstrativa separada.
- Demais áreas individuais: páginas e menus por perfil, jornadas e progresso de teste, projeto atribuído e indicadores agregados para empresa.
- Oncoflix: página própria, quatro jornadas fictícias, aulas, atividade e progresso separado por conta e perfil.

## Problemas encontrados e corrigidos

- O influenciador usava o painel legado de conta, enquanto os outros perfis tinham `area.html`. Seu editor de temas e canais foi preservado em uma seção privada da área individual.
- A inclusão de um segundo perfil, antes acessível no painel legado, foi incorporada ao cabeçalho das áreas individuais. A troca de perfis continua no seletor do cabeçalho.
- A indústria não aparecia entre as opções de cadastro e login. Agora tem conta de demonstração e menu institucional próprio, sem acesso às rotas da ONG ou da administração.
- O rótulo de acesso ainda dizia “Ponte”. A identificação visível foi atualizada para OncoPontes. A Vitrine Ponte e o Oncoflix mantêm seus nomes próprios.
- O link “Meu espaço” do Oncoflix passava pela página de conta. Agora retorna ao painel do perfil ativo.

## Rotas e permissões demonstrativas

| Experiência | Rota | Acesso |
| --- | --- | --- |
| Pública | `index.html`, `oncoflix.html`, `organizacoes.html`, `vitrine.html` e detalhes | Visitantes e contas de teste |
| Perfis pessoais | `area.html?perfil=paciente`, `comunicador` e demais perfis | Sessão com o perfil correspondente |
| ONG | `area.html?perfil=ong` | Sessão com perfil ONG |
| Empresa e indústria | `area.html?perfil=empresa` ou `industria` | Sessão com o perfil correspondente |
| Administração | `admin.html` | Sessão administrativa de teste |

As restrições desta versão operam apenas no navegador. Não protegem dados reais e não substituem autenticação, autorização e armazenamento no servidor.

## Verificações

- Sintaxe de todos os scripts JavaScript: aprovada.
- 333 referências locais das 13 páginas HTML principais: nenhum arquivo ausente.
- Login, painel e rascunho privado do influenciador: testados no navegador.
- Inclusão de um perfil de indústria a partir da conta de influenciador e troca automática de ambiente: testadas no navegador.
- Login e painel da indústria: testados no navegador.
- Entrada no Oncoflix e retorno ao perfil ativo: testados no navegador.
- Acesso da indústria à rota da ONG e à administração: negado na demonstração.

Os fluxos existentes de ONG, empresa, paciente e administração foram mantidos. A exportação do Airtable e o backend continuam pendentes para a operação com usuários reais.
