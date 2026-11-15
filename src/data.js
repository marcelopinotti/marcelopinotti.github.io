// Edite o conteúdo do site aqui.

export const projects = [
  {
    title: 'Cacheiro',
    text: 'Microsserviços com cache distribuído e observabilidade. São quatro serviços, cada um com seu próprio banco: dois em Spring Boot, um em Go e um painel em Angular. Usa cache-aside no Redis com lock anti-stampede, rate limiting por IP, invalidação por pub/sub e pedidos modelados como saga por compensação. As métricas aparecem no Prometheus e no Grafana.',
    tags: ['Java 21', 'Spring Boot', 'Go', 'Angular', 'Redis', 'PostgreSQL', 'MongoDB', 'Grafana', 'Docker', 'AWS'],
    link: { label: 'Código →', href: 'https://github.com/marcelopinotti/Cacheiro' },
  },
  {
    title: 'Certus',
    text: 'Sistema full stack de controle financeiro. Liderei uma equipe de 5 pessoas como Full Stack e Product Owner, da arquitetura até a produção. A autenticação é stateless, com Spring Security e JWT, revogação por versionamento, papéis de acesso, rate limiting e lockout contra força bruta. A API tem 92 testes automatizados.',
    tags: ['Java 17', 'Spring Boot 3.5', 'Spring Security', 'JWT', 'PostgreSQL', 'React 19', 'JUnit 5', 'Docker'],
    link: { label: 'Código →', href: 'https://github.com/marcelopinotti/Certus_ControleFinanceiro_BackEnd' },
  },
  {
    title: 'Calendar · Open source',
    text: 'Projeto da comunidade Tecnologia-da-Informacao-BR, em que sou o 3º maior contribuidor entre mais de 20 pessoas. Montei a base do backend: Flyway, schema inicial, entidades e repositórios JPA, tratamento global de exceções e CI. Também fiz a verificação por OTP para redefinição de senha e corrigi um bug de JWTs duplicados em logins simultâneos.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'GitHub Actions'],
    link: { label: 'Comunidade →', href: 'https://github.com/Tecnologia-da-Informacao-BR' },
  },
]

// Demais repositórios. Tecnologias tiradas do código (pom.xml, package.json, docker-compose).
export const moreProjects = [
  { title: 'HemoNorte', text: 'Sistema de doação de sangue: pré-triagem, agenda com controle de vagas, triagem, coleta, sorologia, auditoria e alerta de estoque. 52 endpoints e 228 testes, com 85% de cobertura.', tags: ['Kotlin', 'Spring Boot 4', 'Spring Security', 'JWT', 'PostgreSQL', 'Flyway', 'Testcontainers', 'JaCoCo', 'Prometheus', 'Grafana', 'Docker', 'GitHub Actions'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/hemonorte' } },
  { title: 'Lumen', text: 'Plataforma financeira em microsserviços (clientes, cartões e avaliador de crédito) com DDD, gateway, service discovery e mensageria. Deploy contínuo numa EC2 via GitHub Actions.', tags: ['Java 21', 'Spring Boot 4', 'Spring Cloud Gateway', 'Eureka', 'OpenFeign', 'RabbitMQ', 'Keycloak', 'PostgreSQL', 'Flyway', 'Docker', 'AWS EC2', 'GitHub Actions'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/lumen' } },
  { title: 'Petrifica', text: 'Empréstimos com análise de fraude orientada a eventos: o serviço de empréstimo publica a solicitação no Kafka, o antifraude calcula o score e devolve o veredito.', tags: ['Java 25', 'Spring Boot 4', 'Kafka', 'Keycloak', 'OAuth2', 'PostgreSQL', 'PostGIS', 'Flyway', 'Swagger', 'Docker'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/petrifica' } },
  { title: 'ClinicFlow', text: 'API para clínicas médicas em Clean Architecture: médicos, pacientes, agenda com slots livres e ciclo completo da consulta, com proteção contra double-booking no banco.', tags: ['Java 17', 'Spring Boot 4', 'Clean Architecture', 'PostgreSQL', 'Flyway', 'Testcontainers', 'Docker'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/clinicflow' } },
  { title: 'Kinora', text: 'Catálogo de filmes e séries por gênero e streaming. API com autenticação JWT e SPA em React.', tags: ['Java 21', 'Spring Boot 4', 'Spring Security', 'JWT', 'PostgreSQL', 'Flyway', 'React 19', 'TypeScript', 'Tailwind', 'Vite', 'Docker'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/kinora' } },
  { title: 'Ecoa', text: 'Assistente financeiro por voz: você manda um áudio com um gasto, o Gemini entende, o sistema confirma e responde em áudio.', tags: ['Java 25', 'Spring Boot 4', 'Spring AI', 'Gemini', 'H2', 'JPA', 'espeak-ng'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/ecoa' } },
  { title: 'Bunny', text: 'Dois serviços que se comunicam por fila: o de usuários publica eventos no RabbitMQ e o de e-mail consome e envia as mensagens.', tags: ['Java 21', 'Spring Boot 4', 'RabbitMQ', 'DynamoDB', 'Spring Mail', 'Docker'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/bunny' } },
  { title: 'NoCache', text: 'Estudo de cache no Spring: consulta pesada em 300 mil registros e chamada à API do IBGE, com Redis, expiração agendada e limpeza manual.', tags: ['Java 21', 'Spring Boot 4', 'Spring Cache', 'Redis', 'PostgreSQL', 'OpenFeign'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/NoCache' } },
  { title: 'Radar Financeiro', text: 'API de controle de gastos com usuários, contas a pagar e receber, centros de custo e dashboard.', tags: ['Java 21', 'Spring Boot 3.5', 'Spring Security', 'JWT', 'PostgreSQL', 'Swagger', 'Docker'], link: { label: 'Código →', href: 'https://github.com/marcelopinotti/RadarFinanceiro' } },
]

export const experience = [
  {
    period: '09/2026 — Atual',
    title: 'Engenheiro de Software Full Stack',
    place: 'Paparazzi Fotografia · Natal/RN',
    items: [
      'Integração de pagamento com cartão e Pix entre sistema web, servidor e maquininha, com agente em Kotlin e fila offline criptografada. A venda funciona mesmo se a internet cair durante o pagamento, sem cobrar duas vezes.',
      'Caixa de entrada do WhatsApp escalada de 300 para quase 50 mil conversas, abrindo em 0,4 s.',
      'Auditoria de uma API com 504 rotas e correção de 10 vulnerabilidades do OWASP Top 10, o que fechou vazamentos de dados de mais de 110 mil clientes.',
      'Vendedor virtual com IA generativa no WhatsApp, protegido contra prompt injection, que responde 97,7% das confirmações de clientes.',
      'Funil de vendas gerencial para 23 hotéis, com 13 painéis em React sobre 101 mil agendamentos.',
    ],
  },
  {
    period: '02/2026 — 07/2026',
    title: 'Analista de Dados',
    place: 'Nova Domus Gestão e Treinamentos · Natal/RN',
    items: [
      'Estruturação das bases de clientes e leads no Power BI e análise do funil de vendas e das métricas de conversão.',
      'Administração do banco de dados do CRM e dashboards de KPIs em Excel.',
    ],
  },
]

export const education = [
  { period: '02/2025 — 07/2027', title: 'Análise e Desenvolvimento de Sistemas', place: 'UnP · em andamento' },
]

export const certifications = [
  { title: 'AWS Certified Cloud Practitioner (CLF-C02)', place: 'Amazon Web Services' },
  { period: '2026', title: 'AWS re/Start Graduate', place: 'Amazon Web Services' },
  { period: '2026', title: 'AWS re/Start, IA + No Code', place: 'Escola da Nuvem (300h)' },
  { period: '2025', title: 'Java Foundations e Database Foundations', place: 'Oracle Academy' },
  { period: '2026', title: 'Docker Essentials', place: 'LinuxTips' },
  { period: '2026', title: 'Java com Inteligência Artificial', place: 'DIO e Itaú (45h)' },
]

export const skills = [
  { group: 'Linguagens', items: ['Java 8–21 (Virtual Threads)', 'Kotlin', 'TypeScript', 'Go', 'Python', 'SQL'] },
  { group: 'Backend e arquitetura', items: ['Spring Boot', 'Spring Security', 'Spring Cloud', 'Spring Data JPA', 'WebFlux', 'Node.js', 'Prisma', 'API REST', 'Microsserviços', 'DDD', 'Clean Architecture', 'OAuth2/JWT', 'Saga', 'Idempotência', 'Cache-aside'] },
  { group: 'Front-end', items: ['React', 'Angular'] },
  { group: 'Dados, cloud e DevOps', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Flyway', 'Kafka', 'RabbitMQ', 'Docker', 'Docker Compose', 'AWS', 'Terraform', 'GitHub Actions'] },
  { group: 'Qualidade e observabilidade', items: ['JUnit 5', 'Mockito', 'MockMvc', 'Testcontainers', 'JaCoCo', 'OpenAPI/Swagger', 'Micrometer', 'Prometheus', 'Grafana', 'Datadog', 'Maven', 'Gradle', 'Git'] },
  { group: 'IA', items: ['Claude Code', 'Codex', 'Trae', 'Kiro', 'Agentes de IA', 'ReAct', 'Tree of Thoughts (ToT)', 'Skeleton of Thought (SoT)', 'SDD', 'IA generativa', 'RAG'] },
]
