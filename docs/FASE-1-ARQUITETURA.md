# Projeto Ponte — Fase 1: auditoria e arquitetura

Base auditada: commit `bdc9055` de `main`, em 19/11/2026. Esta fase documenta a próxima evolução do protótipo. A página inicial, a identidade visual e os fluxos atuais não são substituídos por este documento.

## 1. Mapa de navegação

### Experiência pública

| Entrada | Rota atual | Destino e responsabilidade |
| --- | --- | --- |
| Home | `/` (`index.html`) | Explica a proposta e oferece os caminhos principais para aprender e encontrar organizações. Preservar. |
| Aprender / Oncoflix | `/oncoflix` | Jornadas de demonstração, detalhes e etapas. Evoluir para conteúdos e atividades fictícios navegáveis. |
| Encontrar apoio | `/organizacoes` | Diretório nacional de ONGs e instituições, com serviços e filtros opcionais. Só publicar organizações autorizadas e validadas. |
| Vitrine Ponte | `/vitrine` | Acesso curado a profissionais, empreendedores e projetos. Preservar as três categorias em páginas próprias. |
| Projetos e oportunidades | `/projetos` | Hoje mostra um projeto fictício. Acrescentar oportunidades apenas quando houver regras e dados demonstrativos definidos; manter detalhe em `/projeto?id=...`. |
| Sobre o Projeto Ponte | **Criar** `/sobre` | Explicar propósito, funcionamento, curadoria do Portal VPM e limites da demonstração. Não substituir privacidade, termos e contato. |
| Entrar / criar conta | `/conta#entrar` e `/conta#cadastro` | Um acesso inicial, seguido de redirecionamento para o ambiente do perfil ativo. |
| Informações | `/informacoes` | Avisos atuais de protótipo para privacidade, termos e contato; substituir por conteúdo oficial quando recebido. |

**Navegação pública proposta:** Aprender sobre o câncer; Encontrar organizações; Vitrine Ponte; Projetos; Sobre; Entrar. Empresas interessadas permanecem no rodapé. O termo “oportunidades” deve levar a uma visão concreta ou a um estado vazio explícito, nunca a uma seção inexistente.

### Experiência autenticada — três ambientes prioritários

| Perfil | Página inicial proposta | Menu contextual e rotas propostas |
| --- | --- | --- |
| ONG | `/area/ong` | Visão geral; perfil institucional (`/area/ong/perfil`); serviços e publicação (`/area/ong/servicos`); diagnóstico privado (`/area/ong/diagnostico`); projetos e convites (`/area/ong/projetos`); aprendizagem (`/area/ong/aprender`); progresso e conquistas (`/area/ong/progresso`); indicadores e entregas (`/area/ong/indicadores`); notificações; configurações; sair. |
| Paciente/sobrevivente | `/area/paciente` | Visão geral; aprender (`/area/paciente/aprender`); minhas jornadas (`/area/paciente/jornadas`); atividades e progresso (`/area/paciente/progresso`); projetos e oportunidades permitidos (`/area/paciente/oportunidades`); conquistas e certificados (`/area/paciente/conquistas`); meu perfil privado; notificações; configurações e privacidade; sair. |
| Empresa/patrocinador | `/area/empresa` | Visão geral; **meus** projetos (`/area/empresa/projetos`); detalhe do projeto atribuído; cronograma e entregas; indicadores agregados autorizados; relatórios permitidos; aprendizagem (`/area/empresa/aprender`); progresso e conquistas institucionais quando aplicáveis; notificações; representantes e configurações; sair. |

As rotas acima são **contratos propostos**, ainda não implementados. Em um protótipo estático, podem corresponder inicialmente a arquivos HTML e a um roteador de demonstração. A troca de perfil deve mudar a rota, o menu, os dados e as ações disponíveis. Familiares, profissionais, empreendedores e comunicadores continuam acessíveis no fluxo atual até uma migração planejada; não serão eliminados para criar os três ambientes prioritários. A administração VPM permanece em ambiente separado, fora do cadastro público.

### Regras de acesso e publicação

| Recurso | Público | Titular/representante | Empresa atribuída | Portal VPM |
| --- | --- | --- | --- | --- |
| ONG no diretório | Apenas campos aprovados e autorizados | Edita rascunho da sua organização | Apenas campos públicos | Revisa e aprova |
| Diagnóstico e documentos da ONG | Não | Sua organização, conforme função | Não | Equipe autorizada |
| Perfil do paciente e progresso | Não | Próprio titular | Não | Somente se houver finalidade e permissão definidas |
| Projeto público | Campos aprovados | Participantes autorizados | Campos públicos ou atribuídos | Media e publica |
| Projeto privado/entregas | Não | Apenas envolvidos autorizados | Somente projeto atribuído | Equipe autorizada |
| Indicadores da empresa | Não | Não se aplicam | Apenas agregados e autorizados do seu projeto | Equipe autorizada |

No protótipo, as verificações de perfil e escopo servem para demonstrar a navegação. **Não são proteção de dados real.** Antes de usuários reais, autenticação e autorização por conta, organização, projeto e função precisam ocorrer no servidor. Pacientes e sobreviventes ficam privados por padrão. Não criar diretório público de pacientes ou comunicadores. A Vitrine é curada, e não um mural aberto. Pontos e conquistas nunca dependem de exposição pessoal, diagnóstico, imagem ou informação de saúde.

## 2. Inventário das páginas atuais

| Página | Situação encontrada | Preservar / completar |
| --- | --- | --- |
| `index.html` | Home pública aprovada, com dois caminhos e uma chamada secundária à Vitrine. | Preservar nesta fase. |
| `organizacoes.html` | Busca por serviços, estado e município funciona; não há ONGs publicadas. | Preservar filtros; testar resultados quando houver fixture autorizada de demonstração, sem confundi-la com ONG real. |
| `oncoflix.html` | Jornadas e três etapas de teste, com acesso por perfil e progresso de sessão. Sem aulas ou avaliações reais. | Preservar navegação; completar conteúdo fictício e regras de progresso. |
| `vitrine.html` | Hub das três categorias. | Preservar curadoria e categorias. |
| `profissionais.html`, `empreendedores.html` | Listas filtráveis de perfis fictícios. | Revisar a busca interna para que a Vitrine não se torne um diretório público pesquisável dessas categorias. |
| `projetos.html`, `projeto.html` | Lista e detalhe de um projeto fictício; nenhuma oportunidade efetiva. | Definir fluxo de oportunidade e participação demonstrativa. |
| `perfil.html` | Detalhes fictícios de profissional e empreendedor; rota de ONG existe, mas não há ONG publicada. | Corrigir rótulos quando um registro aprovado substituir o exemplo; completar contato autorizado. |
| `informacoes.html` | Avisos do protótipo; sem política, termos e contato oficiais. | Preservar avisos até receber conteúdo oficial. |
| `conta.html` | Login, cadastro em três etapas, inclusão e troca de perfis, edição de rascunho. Todos os perfis usam a mesma página de painel. | Separar os três ambientes prioritários; manter os demais perfis acessíveis. |
| `admin.html` | Menu administrativo e estados vazios demonstrativos, sem proteção no servidor. | Manter fora da navegação pública; proteger no servidor antes de operar. |

**Página pública a criar:** Sobre. **Páginas autenticadas a criar:** as rotas dos três ambientes acima. **Páginas a não duplicar:** uma nova home, um novo login para cada papel, diretórios públicos de paciente, comunicador, profissional ou empreendedor.

## 3. Arquitetura de implementação

O projeto atual é HTML, CSS e JavaScript estáticos, sem build e sem banco. Evoluir por camadas pequenas para preservar o layout:

```text
index.html, organizacoes.html, oncoflix.html, vitrine.html ...  # páginas públicas existentes
conta.html, admin.html                                          # acesso e administração existentes
area/ong/...                                                    # ambiente institucional proposto
area/paciente/...                                               # ambiente individual proposto
area/empresa/...                                                # ambiente patrocinador proposto
js/routes.js                                                    # manifesto de rotas e menus
js/components/                                                 # peças visuais reutilizáveis
js/data/fixtures.js, demo-store.js                              # dados fictícios e estado de teste
js/access.js                                                    # regras demonstrativas de perfil e escopo
css/components.css, css/area.css                                # tokens existentes e variações por perfil
```

O manifesto de rota deve declarar `path`, `environment`, `allowedRoles`, `resourceScope`, `menuGroup`, `title` e `emptyState`. A navegação deve ser gerada desse manifesto, evitando menus divergentes. Os IDs de recurso devem identificar claramente organização, paciente, empresa, projeto e jornada. O armazenamento de demonstração deve ser isolado por conta e perfil, oferecer reinício da fixture e nunca coletar dados pessoais ou de saúde reais. Não representar uma ação local como envio, aprovação, pagamento ou integração externa.

**ONG:** a página inicial mostra situação do cadastro, serviços em rascunho, revisão pendente, aprendizagem institucional e projetos atribuídos. O envio para curadoria muda apenas o estado de demonstração; publicação pública exige aprovação VPM e consentimento explícitos na fixture.

**Paciente:** a página inicial destaca continuar aprendizagem, atividades, progresso e oportunidades elegíveis. Dados de saúde não são necessários para pontuar. O perfil privado e as escolhas de privacidade devem ser visíveis e controláveis no protótipo, sem torná-los públicos.

**Empresa:** a página inicial mostra apenas o projeto atribuído, próximos marcos e indicadores agregados permitidos. A equipe da empresa não recebe acesso ao banco de participantes nem a projetos de outras empresas. Ações de entrega e aprovação são simulações identificadas como tal.

## 4. Componentes compartilhados

| Componente | Contrato mínimo | Variação permitida |
| --- | --- | --- |
| Cabeçalho público | Marca oficial, menu do manifesto, acesso, menu móvel | Estado ativo da rota |
| Cabeçalho autenticado | Perfil ativo, nome do ambiente, notificações, configurações e saída | Identidade da ONG/empresa ou nome do paciente |
| Menu contextual | Rotas permitidas, estado ativo, grupos e versão móvel | Itens específicos por perfil |
| Cards de conteúdo e jornada | ID, título, tema, formato, público, acesso, status e destino | Resumo e ação conforme perfil |
| Barra de progresso | Total, concluído, rótulo acessível e origem dos dados | Jornada ou plano institucional |
| Selo, conquista e certificado | Critério, data de obtenção, estado de demonstração | Regras por jornada; sem prêmio por exposição pessoal |
| Indicador | Valor, unidade, período, fonte e permissão | Escopo da ONG ou projeto atribuído à empresa |
| Perfil do usuário | Campos editáveis, visibilidade, estado e consentimento | Pessoa, ONG ou empresa |
| Notificação | ID, tipo, mensagem, data, lida e destino válido | Convite, revisão, prazo ou jornada |
| Estados vazios | Explicação do que falta e próxima ação possível | “Sem dados”, “sem permissão” ou “aguardando revisão” |
| Sucesso e erro | Mensagem específica, ação realizada ou falha, recuperação | Formulário, atividade, envio demonstrativo |

Os componentes devem reutilizar as cores, tipografia, marca, espaçamento e padrões responsivos já aprovados. Uma peça desenhada sem dados, ação, estados e teste não conta como funcionalidade concluída.

## 5. Dados fictícios para testar fluxos

Criar um conjunto coerente e explicitamente rotulado **Demonstração**, separado dos dados públicos reais:

| Registro de fixture | Campos e relações necessários | Fluxo que deve permitir testar |
| --- | --- | --- |
| `org-demo-01` | Perfil institucional, representante, sede, município/UF, serviços declarados, áreas, público, consentimentos e estado de revisão | Editar → solicitar revisão → decisão VPM simulada → aparecer ou não no diretório conforme aprovação e consentimento. |
| `paciente-demo-01` | Conta, interesses não clínicos, privacidade, inscrições e progresso | Entrar → escolher jornada → concluir atividade → ver progresso e conquista. Nunca publicar perfil. |
| `empresa-demo-01` | Empresa, representante, permissões e `projectIds` atribuídos | Entrar → ver apenas projeto permitido → acompanhar entrega e indicadores agregados. |
| Conteúdos | Tema, formato, audiência, status editorial e relação com aula | Diferenciar vídeo, texto, infográfico e material complementar fictícios; não anunciar mídia inexistente como disponível. |
| Jornada e aulas | Pré-requisitos, etapas, aulas, atividade, critério de conclusão | Retomar, concluir e revisar progresso com estados consistentes. |
| Pontos, selos e certificado | Regra explícita, evento gerador, emissão simulada, revogação/revisão | Concluir aprendizagem e receber reconhecimento de teste; não premiar publicação de dados ou diagnóstico. |
| `project-demo-01` | Responsável, objetivo, participantes, empresa atribuída, entregas, prazo e status | Curadoria → convite → aceite simulado → entrega → acompanhamento. |
| Indicadores | Projeto, período, métrica agregada, fonte fictícia e permissão | Mostrar valores somente à empresa atribuída e ao Portal VPM. |
| Notificações e eventos | Destinatário, evento, estado, destino e histórico | Rastrear mudanças de estado da demonstração sem fingir envio externo. |

Os dados da fixture devem ter nomes genéricos, nenhuma identidade de ONG real, nenhuma informação de saúde e nenhuma promessa de atendimento, certificado ou projeto efetivo. Cada fluxo deve ter estado inicial, estados intermediários, resultado, erro e opção de reiniciar.

## 6. Problemas e riscos encontrados

| Prioridade | Evidência | Impacto / tratamento planejado |
| --- | --- | --- |
| Alta | `conta.js:156` e `:162` levam a `index.html#participar`; a seção `participar` não existe na home atual. Confirmado na navegação. | Atalho chega à home sem a área anunciada. Redirecionar ao futuro ambiente de projetos/oportunidades ou mostrar estado vazio contextual. |
| Alta | `conta.html` e `conta.js:221-268` servem a todos os perfis; a maioria dos módulos abre o mesmo diálogo “área prevista”. | ONG, paciente e empresa não têm páginas, tarefas nem navegação própria. Construir os três ambientes. |
| Alta | `conta.js` e `admin.js` verificam papéis apenas no navegador; credenciais de teste estão no código público. | Sem proteção de dados real. Manter apenas fixtures; implementar autorização no servidor antes de usuários reais. |
| Alta | `public-data.js` contém zero ONGs; a busca funciona, mas não há resultado para validar o cenário de apoio psicológico. | Criar fixture separada e claramente fictícia para testes; não apresentar uma ONG inventada como entidade real. |
| Média | `conta.js:243-246` repete os quatro atalhos no menu de perfil e na grade principal; `roles` e `doc4Modules` mantêm duas definições de módulos. | Navegação redundante e manutenção difícil. Gerar menus e atalhos de um manifesto único. |
| Média | Cabeçalhos e rodapés são copiados em HTML com menus e nomes diferentes: “Aprender”, “Oncoflix”, “Organizações”, “Encontrar organizações”. | Variação de navegação entre páginas. Extrair componentes e normalizar rótulos. |
| Média | `profissionais.html` e `empreendedores.html` contêm busca filtrável (`vitrine.js`). | Revisar como listagens curadas, sem transformá-las em diretórios públicos pesquisáveis. |
| Média | `vitrine.js:31` sempre conta itens como “de demonstração”; `perfil.js:26` sempre rotula o perfil como fictício, mesmo quando o código permite registros aprovados. | Rótulos incorretos quando houver publicação autorizada. Derivar estado de cada registro. |
| Média | `oncoflix.js` guarda progresso por ID de jornada em uma chave de sessão compartilhada, sem separar conta/perfil. | Troca de perfil pode herdar progresso de outra pessoa. Isolar estado da fixture por conta e perfil. |
| Média | `projetos.html` mostra projeto fictício; não há fluxo de oportunidade, inscrição, convite ou aceite. | “Projetos e oportunidades” ainda não é experiência completa. Definir estados e regras antes de criar telas. |
| Média | Não existe página “Sobre”; `informacoes.html` trata apenas dos avisos de protótipo. | Falta o destino institucional solicitado. Criar página curta com informações aprovadas. |
| Baixa | A 390 px, `vitrine.html` e `perfil.html` excedem a largura útil em cerca de 3 px; os menus móveis variam entre páginas. | Ajuste fino de responsividade e consistência na fase de componentes. Demais telas auditadas não mostraram transbordamento horizontal relevante. |
| Baixa | `script.js` e alguns arquivos visuais antigos não são referenciados pelas páginas atuais. Há várias camadas de CSS com regras sobrepostas. | Revisar dependências antes de remover; consolidar estilos gradualmente sem mudar a identidade. |

**Links estáticos:** o inventário não encontrou páginas HTML ausentes. `#entrar`, `#cadastro` e `#meu-espaco` são estados controlados por JavaScript, não âncoras HTML convencionais. O atalho `#participar` é o destino obsoleto confirmado. **Botões:** os controles principais de login, cadastro, menu, filtros, Vitrine, jornada e saída respondem. Muitos módulos autenticados respondem apenas com um diálogo informativo e ainda não executam o fluxo prometido. Não há evidência de integração real, envio de dados ou conteúdo educacional publicado.

## 7. Plano das próximas fases e critérios de conclusão

1. **Fundação de navegação e fixtures:** criar manifesto, componentes base, dados fictícios, estado isolado e acesso demonstrativo por rota. Corrigir o atalho obsoleto e preservar todos os caminhos atuais. Validar desktop, celular e teclado.
2. **Ambiente da ONG:** perfil, serviços, diagnóstico privado, curadoria demonstrativa, aprendizagem e projetos. Testar publicação condicionada a aprovação e consentimento, sem revelar dados internos.
3. **Ambiente do paciente:** jornada com aulas/atividades fictícias, retomada, progresso, conquistas e privacidade. Testar que o perfil nunca aparece em página pública e que a gamificação não usa dados de saúde.
4. **Ambiente da empresa:** projeto atribuído, entregas, cronograma e indicadores agregados autorizados. Testar que outro projeto e dados identificáveis não são exibidos.
5. **Integração e usabilidade:** páginas Sobre e projetos/oportunidades, navegação entre ambientes, estados vazios, erros, acessibilidade, regressão dos demais perfis e quatro cenários do documento de orientação com pessoas que não conhecem o Ponte. Registrar dificuldades e correções antes de considerar a versão pronta.

**Critério geral:** cada rota precisa ter destino válido; cada ação deve produzir um estado verificável; cada dado exibido deve ter origem e permissão claras; o mesmo fluxo deve funcionar em desktop e celular. A demonstração deve informar quando uma ação é local. Backend, banco de dados, autenticação real, consentimentos jurídicos e integrações ficam fora do protótipo estático e são pré-requisitos para operação com pessoas reais.
