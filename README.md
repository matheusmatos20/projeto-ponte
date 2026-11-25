# OncoPontes — protótipo navegável

Protótipo da OncoPontes, iniciativa do Portal VPM, atualizado conforme os Documentos 1, 2, 4 e 5, o trecho recebido do Documento 3 e o relatório de revisão cruzada. Os documentos de origem não são publicados neste repositório.

A direção visual aprovada usa roxo profundo, verde petróleo, superfícies claras, tipografia Manrope e uma fotografia documental identificada como ilustrativa. O sistema é compartilhado pela experiência pública, pelo acesso e pelos ambientes individuais. A fotografia e seus créditos estão documentados em `proposta-visual/DIRECAO.md`.

## O que esta versão demonstra

| Área | Fluxo disponível |
| --- | --- |
| Página inicial | Três caminhos: aprender, encontrar apoio e fazer parte da rede |
| Diretório de ONGs | Organizações fictícias, filtros por serviço, localização, público, área, abrangência e tipo de câncer informado, com páginas institucionais individuais |
| Vitrine Ponte | Página própria e categorias separadas de profissionais, empreendedores e projetos; perfis e projeto de demonstração com páginas individuais |
| Conexão mediada | Formulário demonstrativo na página da ONG, sem envio de dados |
| Conta | Login central, cadastro básico, inclusão e troca de perfis |
| Painéis | Ambientes próprios para aprendiz, paciente, familiar, ONG, profissional, empreendedor, influenciador, empresa e indústria; administração OncoPontes separada |
| Oncoflix | Quatro jornadas, duas aulas e uma atividade por jornada, com progresso de teste por perfil |
| ONG | Cadastro institucional em sete etapas, diagnóstico privado em nove dimensões, formação por tema, múltiplos projetos e acompanhamento de oportunidades fictícias |
| Empresa | Projeto fictício atribuído, etapas, entregas e indicadores agregados 5/3/2 |
| Administração | Revisão demonstrativa de organizações e projetos, status de compliance, observações internas e registro de intermediação; sem proteção de servidor nesta versão |
| Influenciador | Painel privado, rascunho de temas e canais, situação de projetos e acesso ao Oncoflix, sem publicação automática |
| Indústria | Painel institucional com projeto fictício atribuído e indicadores agregados, sem acesso ao cadastro privado das ONGs |

A página inicial apresenta a OncoPontes como **uma plataforma de conexões e ensino na causa do câncer**. O cadastro em três etapas e a alternância entre perfis continuam disponíveis. Dados de demonstração são identificados em cada área.

Pacientes, familiares e comunicadores **não** têm diretório ou vitrine pública. O diagnóstico institucional da ONG permanece fora da página pública. As seis organizações do diretório são fictícias e não oferecem atendimento. Nenhum perfil, projeto, produto, curso ou parceiro real está publicado. A fotografia da página inicial é ilustrativa e não retrata participantes do projeto.

Os links de privacidade, termos e contato levam a uma página que explica os limites do protótipo. Os textos jurídicos definitivos e o canal oficial de contato ainda não foram fornecidos para publicação.

O novo fluxo institucional segue os campos nomeados na especificação de ajustes da OncoPontes. A exportação do Airtable com as 59 colunas ainda não foi recebida: opções e campos ambíguos estão identificados para conferência, sem fusão ou exclusão de informações de origem. Documentos selecionados no formulário não são enviados nem armazenados. As decisões administrativas e os projetos ficam apenas no armazenamento local do navegador, para demonstrar o fluxo; não representam uma integração entre usuários reais.

## Acesso de teste

Abra `conta.html` ou use **Entrar ou cadastrar** no site. Todas as contas abaixo usam a senha pública de teste `PonteDemo2026!`:

| Perfil | E-mail |
| --- | --- |
| Pessoa interessada em aprender | `aprendiz@oncopontes.test` |
| Paciente | `paciente@oncopontes.test` |
| Familiar | `familiar@oncopontes.test` |
| Profissional da saúde | `profissional@oncopontes.test` |
| ONG | `ong@oncopontes.test` |
| Empreendedora | `empreendedora@oncopontes.test` |
| Influenciador, comunicador ou ativista | `influenciador@oncopontes.test` |
| Empresa | `empresa@oncopontes.test` |
| Indústria | `industria@oncopontes.test` |
| Administração VPM | `admin@oncopontes.test` |
| Paciente e empreendedora na mesma conta | `multiperfil@oncopontes.test` |

Os e-mails antigos `@ponte.test` continuam aceitos como aliases das mesmas contas fictícias. `comunicador@oncopontes.test` também abre o perfil do influenciador.

O cadastro de teste também permite criar uma conta e adicionar um segundo perfil. Dados da sessão e progresso ficam no armazenamento temporário do navegador; rascunhos, análises e projetos fictícios da ONG ficam no armazenamento local deste navegador. Senhas criadas no formulário permanecem somente em memória enquanto a página está aberta. **Não use dados pessoais, documentos ou informações de saúde reais.**

## Executar localmente

Na pasta do projeto, execute `python -m http.server 8765` e abra `http://localhost:8765`. O projeto é estático: HTML, CSS e JavaScript, sem etapa de build.

## Limites da demonstração

O login e as permissões são simulações no navegador. Não há autenticação no servidor, banco de dados, envio de solicitações, aprovação de cadastros, upload de documentos, vídeo, avaliação oficial, certificado real, pagamento ou publicação automática. As aulas do Oncoflix são introduções fictícias, sem conteúdo educacional validado. Links de vitrines apontam para perfis fictícios, não para dados informados no cadastro.

Antes de receber usuários reais, a aplicação precisa de autenticação central no servidor, armazenamento privado, permissões por perfil, instituição e projeto, moderação, auditoria, proteção de dados e validação jurídica e operacional. A conta pessoal será única e poderá ter vários perfis; ONGs e empresas terão identidade institucional separada e representantes vinculados. Os acessos de empresas ficarão limitados aos projetos atribuídos e indicadores autorizados. Histórico de aprendizagem não deve ser usado para inferir diagnóstico.

Validação documental é uma decisão humana do Portal VPM. Um perfil completo não significa perfil validado; validação não representa certificação, recomendação ou garantia de qualidade. Dados públicos dependem de autorização e revisão. Conexões mediadas dependem da análise do Portal VPM e da concordância das partes.

## Próximas dependências para operação real

1. Backend, autenticação, recuperação de acesso e confirmação de e-mail.
2. Banco de dados e armazenamento privado, com controles por conta, perfil, organização, representante e projeto.
3. Fluxos administrativos reais para validação, publicação, convites, contratos, documentos e auditoria.
4. Conteúdos e jornadas produzidos e aprovados, com mídia, regras de acesso e certificação definida por iniciativa.
5. Perfis institucionais e profissionais reais com autorização de publicação, imagens e canais de contato.

Os pontos jurídicos, técnicos e comerciais ainda não definidos nos documentos permanecem sujeitos à decisão do Portal VPM.
