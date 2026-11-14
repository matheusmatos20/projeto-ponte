# Projeto Ponte — protótipo navegável

Versão demonstrativa do Projeto Ponte, iniciativa do Portal VPM. Apresenta a proposta, as categorias previstas para os diretórios, cadastro, entrada e painéis por perfil. **Não há perfis, organizações ou projetos reais publicados.** O cadastro e o login usam apenas dados de teste no navegador. Não há banco de dados, autenticação real, cursos operacionais ou coleta de dados de saúde.

## Identidade visual proposta

Os documentos de referência pedem que a experiência tenha identidade visual do Projeto Ponte, mas não definem cores, tipografia nem logotipo. Esta proposta usa o arco da ponte como símbolo de aproximação entre pessoas, com verde profundo, terracota e tons de papel. A tipografia combina uma serifada acolhedora nos títulos com uma fonte simples nos textos e controles. O Portal VPM aparece como marca responsável, sem determinar a aparência principal do Ponte. A identidade ainda precisa de validação da cliente antes de ser considerada definitiva.

## Executar localmente

Os arquivos são HTML, CSS e JavaScript sem etapa de build. Na pasta do projeto, execute `python -m http.server 8765` e abra `http://localhost:8765`.

## Mapa de telas e fluxos da demonstração

| Tela | Fluxo demonstrado |
| --- | --- |
| Início / O projeto | Apresentação e quatro pilares |
| Encontre | Filtros por categoria, área e texto; apresentação dos campos previstos, sem perfis reais |
| Educação | Estrutura visual de catálogo e formatos futuros |
| Projetos | Vitrines segmentadas em ONG, empreendedora e comunicadora |
| Parceiros | Apoiadora, patrocinadora e realizadora |
| Experiência demonstrativa | Alternância entre oito painéis de perfil, sem autenticação |
| Minha conta | Login centralizado, cadastro básico e painel de cada categoria, incluindo administração VPM |
| Cadastro progressivo | Conta básica e rascunho dos dados específicos; validação humana apenas indicada, sem simulação de aprovação |
| Múltiplos perfis | Troca de perfil na mesma conta e inclusão de outro tipo sem novo login |

## Acesso de demonstração

Abra `conta.html` ou use **Entrar ou cadastrar** no site. Escolha uma conta de teste na tela de login; a senha de todas é `PonteDemo2026!`. Os e-mails de teste são `paciente@ponte.test`, `familiar@ponte.test`, `profissional@ponte.test`, `ong@ponte.test`, `empreendedora@ponte.test`, `comunicador@ponte.test`, `empresa@ponte.test`, `admin@ponte.test` e `multiperfil@ponte.test`. Este último mostra paciente e empreendedora na mesma conta.

É possível criar outra conta de teste, preencher um rascunho de perfil e adicionar um segundo tipo. Esses dados existem apenas na memória da aba: atualizar ou fechar a página os apaga. Senhas e permissões demonstrativas estão visíveis no código publicado; por isso não devem ser usadas como autenticação real nem receber informações pessoais ou de saúde. O painel da empresa não exibe dados de outras contas, e o painel administrativo não executa aprovações reais.

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

1. **Protótipo de navegação — entregue aqui.** Conteúdo público, categorias de busca e painéis demonstrativos, sem dados reais.
2. **Fundação da aplicação.** Identidade, autenticação central, contas institucionais, múltiplos perfis, permissões, segurança, privacidade e administração básica.
3. **Experiência pública.** Diretórios com perfis autorizados, publicação moderada e contato público ou conexão mediada pelo Portal VPM.
4. **Operação.** Educação, conexões, oportunidades e gestão de projetos; depois, indicadores, relatórios, evidências, atendimento e suporte.

Integrações prováveis: provedor de e-mail transacional para confirmação e avisos; armazenamento privado para documentos; serviço de vídeo; observabilidade e proteção contra abuso. Pagamentos e assinaturas ficam para uma fase futura.

## Decisões pendentes

O modelo de contato é híbrido: o titular poderá disponibilizar canais públicos, solicitar conexão mediada ou usar ambas as modalidades. A conexão mediada passa pela análise do Portal VPM e só avança com a concordância dos envolvidos. Ainda precisam de validação os critérios de moderação, filtros definitivos, regras de elegibilidade, publicação de marcas e projetos, indicadores e requisitos jurídicos e comerciais. Antes de receber dados reais, revisar base legal, avisos, retenção, direitos do titular, segurança e riscos de reidentificação com profissionais especializados.

## Origem dos requisitos

O protótipo foi estruturado a partir dos documentos fornecidos pela cliente: “PROJETO PONTE - Protótipo.docx”, “Projeto Ponte - Cadastro, perfis, permissões e segurança.docx”, o trecho do Documento 3 — Fluxos operacionais, regras de negócio e governança da plataforma — e o relatório de revisão cruzada dos Documentos 1, 2 e 3, todos apresentados como versão 1.0 de novembro de 2026. Os documentos não são publicados neste repositório. Foi fornecido apenas um trecho do Documento 3; regras não presentes nesse trecho ou na revisão cruzada permanecem pendentes de confirmação.
