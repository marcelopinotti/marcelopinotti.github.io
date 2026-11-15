// Edite o conteúdo do site aqui.

export const projects = [
  {
    title: 'Cacheiro',
    text: 'Microsserviços com cache distribuído e observabilidade. São quatro serviços, cada um com seu próprio banco: dois em Spring Boot, um em Go e um painel em Angular. Usa cache-aside no Redis com lock anti-stampede, rate limiting por IP, invalidação por pub/sub e pedidos modelados como saga por compensação. As métricas aparecem no Prometheus e no Grafana.',
    tags: ['Java 21', 'Spring Boot', 'Go', 'Angular', 'Redis', 'PostgreSQL', 'MongoDB', 'Grafana', 'Docker', 'AWS'],
    link: { label: 'Código →', href: 'https://github.com/marcelopinotti' },
  },
  {
    title: 'Certus',
    text: 'Sistema full stack de controle financeiro. Liderei uma equipe de 5 pessoas como Full Stack e Product Owner, da arquitetura até a produção. A autenticação é stateless, com Spring Security e JWT, revogação por versionamento, papéis de acesso, rate limiting e lockout contra força bruta. A API tem 92 testes automatizados.',
    tags: ['Java 17', 'Spring Boot 3.5', 'Spring Security', 'JWT', 'PostgreSQL', 'React 19', 'JUnit 5', 'Docker'],
    link: { label: 'Código →', href: 'https://github.com/marcelopinotti' },
  },
  {
    title: 'Calendar · Open source',
    text: 'Projeto da comunidade Tecnologia-da-Informacao-BR, em que sou o 3º maior contribuidor entre mais de 20 pessoas. Montei a base do backend: Flyway, schema inicial, entidades e repositórios JPA, tratamento global de exceções e CI. Também fiz a verificação por OTP para redefinição de senha e corrigi um bug de JWTs duplicados em logins simultâneos.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'GitHub Actions'],
    link: { label: 'Comunidade →', href: 'https://github.com/Tecnologia-da-Informacao-BR' },
  },
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
  { title: 'AWS re/Start Graduate', place: 'Amazon Web Services · Escola da Nuvem (300h) · 2026' },
  { title: 'Java Foundations e Database Foundations', place: 'Oracle Academy · 2025' },
  { title: 'Docker Essentials', place: 'LinuxTips · 2026' },
  { title: 'Java com Inteligência Artificial', place: 'DIO e Itaú (45h) · 2026' },
]

export const skills = [
  { group: 'Linguagens', items: ['Java 8–21', 'Kotlin', 'TypeScript', 'Go', 'Python', 'SQL'] },
  { group: 'Backend e arquitetura', items: ['Spring Boot', 'Spring Security', 'Spring Cloud', 'Spring Data JPA', 'WebFlux', 'Node.js', 'Prisma', 'REST', 'Microsserviços', 'DDD', 'Clean Architecture', 'OAuth2/JWT', 'Saga'] },
  { group: 'Dados, cloud e DevOps', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ', 'Docker', 'AWS', 'Terraform', 'GitHub Actions'] },
  { group: 'Qualidade e observabilidade', items: ['JUnit 5', 'Mockito', 'Testcontainers', 'JaCoCo', 'Swagger', 'Prometheus', 'Grafana', 'Datadog'] },
  { group: 'Front-end', items: ['React', 'Angular'] },
  { group: 'IA', items: ['IA generativa', 'Agentes de IA', 'RAG', 'Claude Code', 'Codex', 'Kiro'] },
]
