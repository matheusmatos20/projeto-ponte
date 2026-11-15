# Projeto Ponte — protótipo navegável

Protótipo do Projeto Ponte, iniciativa do Portal VPM, atualizado conforme os Documentos 1, 2, 4 e 5, o trecho recebido do Documento 3 e o relatório de revisão cruzada. Os documentos de origem não são publicados neste repositório.

## O que esta versão demonstra

| Área | Fluxo disponível |
| --- | --- |
| Página inicial | Abertura editorial, caminhos de acesso, quatro pilares, Oncoflix, busca de apoio, vitrines e participação |
| Diretório de ONGs | Descoberta guiada por necessidades, termos semelhantes, localização e filtros complementares; resultados apenas de organizações autorizadas |
| Vitrines | Cartões de empreendedoras e profissionais com páginas individuais; fichas de produto ou serviço no perfil empreendedor |
| Conexão mediada | Formulário demonstrativo na página da ONG, sem envio de dados |
| Conta | Login central, cadastro básico, inclusão e troca de perfis |
| Painéis | Experiências e atalhos específicos para sete tipos de participante e administração VPM |
| Oncoflix | Descoberta visual, coleções, página individual da jornada, acesso por perfil, progresso e retomada demonstrativos |

Pacientes, familiares e comunicadores **não** têm diretório ou vitrine pública. O diagnóstico institucional da ONG permanece fora da página pública. Nenhuma ONG aparece no diretório até haver dados reais, autorização e revisão. Nenhum perfil, projeto, produto, curso ou parceiro real está publicado. As vitrines e jornadas de exemplo são fictícias e estão identificadas como demonstração. A fotografia da página inicial é ilustrativa e não retrata participantes do projeto.

## Acesso de teste

Abra `conta.html` ou use **Entrar ou cadastrar** no site. Todas as contas abaixo usam a senha pública de teste `PonteDemo2026!`:

| Perfil | E-mail |
| --- | --- |
| Paciente | `paciente@ponte.test` |
| Familiar | `familiar@ponte.test` |
| Profissional da saúde | `profissional@ponte.test` |
| ONG | `ong@ponte.test` |
| Empreendedora | `empreendedora@ponte.test` |
| Comunicador ou ativista | `comunicador@ponte.test` |
| Empresa | `empresa@ponte.test` |
| Administração VPM | `admin@ponte.test` |
| Paciente e empreendedora na mesma conta | `multiperfil@ponte.test` |

O cadastro de teste também permite criar uma conta e adicionar um segundo perfil. Dados da sessão e progresso ficam apenas no armazenamento temporário do navegador; senhas criadas no formulário permanecem somente em memória enquanto a página está aberta. Sair da conta apaga a sessão e o progresso. **Não use dados pessoais, documentos ou informações de saúde reais.**

## Executar localmente

Na pasta do projeto, execute `python -m http.server 8765` e abra `http://localhost:8765`. O projeto é estático: HTML, CSS e JavaScript, sem etapa de build.

## Limites da demonstração

O login e as permissões são simulações no navegador. Não há autenticação no servidor, banco de dados, envio de solicitações, aprovação de cadastros, upload de documentos, vídeo, avaliação, certificado, pagamento ou publicação automática. O Oncoflix usa modelos de jornadas e etapas sem conteúdo educacional real; o progresso testa apenas a navegação. Links de vitrines apontam para perfis fictícios, não para dados informados no cadastro.

Antes de receber usuários reais, a aplicação precisa de autenticação central no servidor, armazenamento privado, permissões por perfil, instituição e projeto, moderação, auditoria, proteção de dados e validação jurídica e operacional. A conta pessoal será única e poderá ter vários perfis; ONGs e empresas terão identidade institucional separada e representantes vinculados. Os acessos de empresas ficarão limitados aos projetos atribuídos e indicadores autorizados. Histórico de aprendizagem não deve ser usado para inferir diagnóstico.

Validação documental é uma decisão humana do Portal VPM. Um perfil completo não significa perfil validado; validação não representa certificação, recomendação ou garantia de qualidade. Dados públicos dependem de autorização e revisão. Conexões mediadas dependem da análise do Portal VPM e da concordância das partes.

## Próximas dependências para operação real

1. Backend, autenticação, recuperação de acesso e confirmação de e-mail.
2. Banco de dados e armazenamento privado, com controles por conta, perfil, organização, representante e projeto.
3. Fluxos administrativos reais para validação, publicação, convites, contratos, documentos e auditoria.
4. Conteúdos e jornadas produzidos e aprovados, com mídia, regras de acesso e certificação definida por iniciativa.
5. Perfis institucionais e profissionais reais com autorização de publicação, imagens e canais de contato.

Os pontos jurídicos, técnicos e comerciais ainda não definidos nos documentos permanecem sujeitos à decisão do Portal VPM.
