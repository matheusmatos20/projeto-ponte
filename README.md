# Projeto Ponte — protótipo navegável

Primeira versão demonstrativa do Projeto Ponte, iniciativa do Portal VPM. Apresenta a proposta, os principais públicos, a busca pública e exemplos de painéis. Os perfis e projetos são **fictícios**. Esta publicação não possui cadastro, login, armazenamento, cursos operacionais ou coleta de dados de saúde.

## Executar localmente

Os arquivos são HTML, CSS e JavaScript sem etapa de build. Na pasta do projeto, execute `python -m http.server 8765` e abra `http://localhost:8765`.

## Mapa de telas e fluxos da demonstração

| Tela | Fluxo demonstrado |
| --- | --- |
| Início / O projeto | Apresentação e quatro pilares |
| Encontre | Filtros por categoria, estado, área e texto; abertura de perfil fictício |
| Educação | Estrutura visual de catálogo e formatos futuros |
| Projetos | Vitrines segmentadas em ONG, empreendedora e comunicadora |
| Parceiros | Apoiadora, patrocinadora e realizadora |
| Experiência demonstrativa | Alternância entre oito painéis de perfil, sem autenticação |
| Cadastro progressivo | Explicação dos três níveis, sem formulário ou persistência |

## Arquitetura proposta para a aplicação real

Esta versão estática valida conteúdo, navegação e interface. Para operar com usuários reais, a aplicação deverá ter um backend com autenticação centralizada, banco de dados, armazenamento privado de documentos, auditoria e um painel administrativo. A conta pessoal será única e poderá assumir múltiplos perfis. Organizações terão identidade institucional separada e representantes vinculados. A autorização precisará ser aplicada no servidor para cada ação, com regras por perfil, organização e projeto; alternar o painel no navegador não concede acesso.

Modelo inicial de entidades: `accounts`, `profiles`, `organizations`, `organization_memberships`, `membership_permissions`, `projects`, `project_memberships`, `public_profiles`, `education_items`, `enrollments`, `validation_requests`, `private_documents`, `health_profiles`, `consent_records` e `audit_events`. `health_profiles` deverá ser segregada do cadastro geral e só implementada após revisão jurídica e de segurança. Sede e abrangência de atendimento são campos distintos nas organizações.

## Matriz inicial de acesso

| Papel | Acesso previsto |
| --- | --- |
| Visitante | Conteúdo público e perfis autorizados |
| Participante | Sua conta, seus perfis e iniciativas elegíveis |
| Representante de organização | Dados institucionais conforme permissões concedidas |
| Representante de empresa | Somente projetos atribuídos e indicadores autorizados |
| Equipe VPM | Módulos administrativos conforme função e necessidade |

Validação documental é decisão humana. Dados e documentos privados nunca devem estar no catálogo público. As permissões precisam ser revogáveis e auditáveis. Pagamento por destaque futuro não deve ser apresentado como validação profissional.

## Etapas sugeridas

1. **Protótipo de navegação — entregue aqui.** Conteúdo público, busca com exemplos fictícios e painéis demonstrativos.
2. **Fundação da aplicação — alta complexidade.** Banco, autenticação, contas institucionais, múltiplos perfis, autorização no servidor, publicação moderada e trilha de auditoria.
3. **Operação inicial — alta complexidade.** Cadastro progressivo, validação humana, diretórios com dados reais autorizados e catálogo de educação.
4. **Expansão — depende de validação do produto.** Cursos com player e progresso, jornadas, projetos patrocinados, relatórios e oportunidades.

Integrações prováveis: provedor de e-mail transacional para confirmação e avisos; armazenamento privado para documentos; serviço de vídeo; observabilidade e proteção contra abuso. Pagamentos e assinaturas ficam para uma fase futura.

## Decisões pendentes

Confirmar com a cliente o modelo de contato nos diretórios, critérios de moderação, filtros definitivos, prioridades do MVP, publicação de marcas e projetos, regras de elegibilidade, limites de relatórios para empresas e requisitos de privacidade. Antes de receber dados reais, revisar base legal, avisos, retenção, direitos do titular, segurança e riscos de reidentificação com profissionais especializados.

## Origem dos requisitos

O protótipo foi estruturado a partir dos documentos fornecidos pela cliente: “PROJETO PONTE - Protótipo.docx” e “Projeto Ponte - Cadastro, perfis, permissões e segurança.docx”, ambos versão 1.0 de novembro de 2026. Os documentos não são publicados neste repositório.
