import { useEffect, useState } from 'react'
import { projects, experience, education, certifications, skills } from './data.js'

const NAV = [
  ['sobre', 'Sobre'],
  ['projetos', 'Projetos'],
  ['curriculo', 'Currículo'],
  ['habilidades', 'Habilidades'],
  ['contato', 'Contato'],
]

const Chips = ({ items }) => (
  <div className="chips">{items.map((t) => <span key={t} className="chip">{t}</span>)}</div>
)

const Title = ({ num, children }) => (
  <h2 className="section-title"><span className="num">{num}.</span> {children}</h2>
)

const Timeline = ({ entries }) => (
  <div className="timeline">
    {entries.map((e) => (
      <div className="item" key={e.title}>
        {e.period && <span className="period">{e.period}</span>}
        <h3>{e.title}</h3>
        <div className="place">{e.place}</div>
        {e.items && <ul>{e.items.map((i) => <li key={i}>{i}</li>)}</ul>}
      </div>
    ))}
  </div>
)

// Destaca no menu a seção visível na tela.
function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach(([id]) => obs.observe(document.getElementById(id)))
    return () => obs.disconnect()
  }, [])
  return active
}

export default function App() {
  const active = useActiveSection()

  return (
    <>
      <nav>
        <div className="container">
          <a href="#" className="logo">&lt;marcelo<span>.pinotti</span> /&gt;</a>
          <ul>
            {NAV.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <p className="tag">Olá, meu nome é</p>
          <h1>Marcelo Pinotti.</h1>
          <h2>Engenheiro de Software Backend · Java e Spring Boot</h2>
          <p>Construo APIs e microsserviços em Java, Spring Boot e AWS, com foco em segurança, cache, testes e observabilidade. Sou certificado AWS Cloud Practitioner e moro em Natal/RN.</p>
          <div className="btns">
            <a href="#projetos" className="btn btn-primary">Ver projetos</a>
            <a href="curriculo.pdf" className="btn btn-outline" target="_blank">Baixar currículo</a>
          </div>
        </div>
      </header>

      <section id="sobre">
        <div className="container">
          <Title num="01">Sobre mim</Title>
          <div className="about">
            <div>
              <p>Sou Engenheiro de Software com foco em <strong>Java e Spring Boot</strong>. Trabalho com arquitetura de software, microsserviços, APIs REST, cache distribuído com Redis, autenticação com Spring Security e OAuth2/JWT, testes automatizados e observabilidade com Prometheus e Grafana, sempre com Docker e AWS.</p>
              <p>Hoje sou Engenheiro de Software Full Stack na <strong>Paparazzi Fotografia</strong>, onde trabalho com Node.js, TypeScript, Kotlin e PostgreSQL. Lá coloquei em produção a integração de pagamentos com cartão e Pix, escalei a caixa de entrada do WhatsApp de 300 para quase 50 mil conversas e corrigi vulnerabilidades do OWASP Top 10 que expunham dados de mais de 110 mil clientes.</p>
              <p>Curso Análise e Desenvolvimento de Sistemas na UnP, sou graduado no programa AWS re/Start e contribuo com projetos open source.</p>
            </div>
            {/* Para colocar sua foto: salve "foto.jpg" em public/ e troque o texto por <img src="foto.jpg" alt="Marcelo Pinotti" /> */}
            <div className="photo">Sua foto aqui</div>
          </div>
        </div>
      </section>

      <section id="projetos">
        <div className="container">
          <Title num="02">Projetos</Title>
          <div className="projects">
            {projects.map((p) => (
              <div className="project" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <Chips items={p.tags} />
                <div className="links"><a href={p.link.href} target="_blank">{p.link.label}</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculo">
        <div className="container">
          <Title num="03">Currículo</Title>
          <h3 className="cv-sub">Experiência</h3>
          <Timeline entries={experience} />
          <h3 className="cv-sub">Formação</h3>
          <Timeline entries={education} />
          <h3 className="cv-sub">Certificações e cursos</h3>
          <Timeline entries={certifications} />
          {/* Para o botão funcionar: salve seu currículo como public/curriculo.pdf */}
          <a href="curriculo.pdf" className="btn btn-outline cv-download" target="_blank">Baixar currículo (PDF)</a>
        </div>
      </section>

      <section id="habilidades">
        <div className="container">
          <Title num="04">Habilidades</Title>
          <div className="skills">
            {skills.map((s) => (
              <div className="skill-group" key={s.group}>
                <h3>{s.group}</h3>
                <Chips items={s.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato">
        <div className="container contact">
          <Title num="05">Contato</Title>
          <p>Estou aberto a novas oportunidades como desenvolvedor backend. Se quiser conversar, é só me mandar uma mensagem!</p>
          <a href="mailto:marcelopinotti@outlook.com.br" className="btn btn-primary">marcelopinotti@outlook.com.br</a>
          <div className="socials">
            <a href="https://github.com/marcelopinotti" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/marcelo-pinotti" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Marcelo Pinotti · Feito com React · Hospedado no GitHub Pages
      </footer>
    </>
  )
}
