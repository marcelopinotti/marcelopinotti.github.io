import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)
import { projects, moreProjects, experience, education, certifications, skills } from './data.js'

// Currículo no Google Docs: precisa estar como "Qualquer pessoa com o link pode ver".
const CV = 'https://docs.google.com/document/d/171xEO3cKSgZoSLLhTAe3Zy3Z0V8TU9e8DOu5hCHEdR8'
const CV_PDF = `${CV}/export?format=pdf`

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

const Title = ({ children }) => <h2 className="section-title">{children}</h2>

const Timeline = ({ entries }) => (
  <div className="timeline">
    {entries.map((e) => (
      <div className="item" key={e.title}>
        <span className="period">{e.period}</span>
        <div>
          <h3>{e.title}</h3>
          <div className="place">{e.place}</div>
          {e.items && <ul>{e.items.map((i) => <li key={i}>{i}</li>)}</ul>}
        </div>
      </div>
    ))}
  </div>
)

const Project = ({ title, text, tags, link }) => (
  <div className="project">
    <h3>{title}</h3>
    <p>{text}</p>
    <Chips items={tags} />
    <div className="links"><a href={link.href} target="_blank">{link.label}</a></div>
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

const GITHUB = 'marcelopinotti'

// Entrada do hero: letras do nome sobem uma a uma, o resto aparece em seguida.
function useHeroIntro(ref) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = SplitText.create('h1', { type: 'words,chars', mask: 'chars' })
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from(split.chars, { yPercent: 110, duration: 1.2, stagger: 0.04 })
        .from('h2, p, .btn', { y: 24, autoAlpha: 0, duration: 1, stagger: 0.1 }, '-=0.8')
    }, ref)
    return () => ctx.revert()
  }, [ref])
}

export default function App() {
  const active = useActiveSection()
  const hero = useRef(null)
  useHeroIntro(hero)

  return (
    <>
      <nav>
        <div className="container">
          <a href="#" className="logo">Marcelo Pinotti</a>
          <ul>
            {NAV.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="hero" ref={hero}>
        <div className="container">
          <h1>Marcelo Pinotti</h1>
          <h2>Engenheiro de Software</h2>
          <p>Projeto de sistemas distribuídos em Java e Spring Boot, com arquitetura de microsserviços e Clean Architecture. APIs REST, comunicação assíncrona com Kafka e RabbitMQ, cache com Redis, métricas e monitoramento com Prometheus e Grafana, containerização com Docker e deploy na AWS.</p>
          <div className="btns">
            <a href="#projetos" className="btn btn-primary">Ver projetos</a>
            <a href={CV_PDF} className="btn btn-outline">Baixar currículo</a>
          </div>
        </div>
      </header>

      <section id="sobre">
        <div className="container">
          <Title>Sobre mim</Title>
          <div className="about">
            <div>
              <p>Sou Engenheiro de Software com foco em <strong>Java e Spring Boot</strong>. Trabalho com arquitetura de software, microsserviços, APIs REST, cache distribuído com Redis, autenticação com Spring Security e OAuth2/JWT, testes automatizados e observabilidade com Prometheus e Grafana, sempre com Docker e AWS.</p>
              <p>Hoje sou <strong>Engenheiro de Software Full Stack</strong> na Paparazzi Fotografia, onde trabalho com Node.js, TypeScript, Kotlin e PostgreSQL. Lá coloquei em produção a integração de pagamentos com cartão e Pix, escalei a caixa de entrada do WhatsApp de 300 para quase 50 mil conversas e corrigi vulnerabilidades do OWASP Top 10 que expunham dados de mais de 110 mil clientes.</p>
              <p>Curso Análise e Desenvolvimento de Sistemas na UnP, sou graduado no programa AWS re/Start e contribuo com projetos open source.</p>
            </div>
            <div className="photo"><img src="foto.jpg" alt="Marcelo Pinotti" /></div>
          </div>
        </div>
      </section>

      <section id="projetos">
        <div className="container">
          <Title>Projetos</Title>
          <div className="projects">
            {[...projects, ...moreProjects].map((p) => <Project key={p.title} {...p} />)}
          </div>
          <div className="links all-repos"><a href={`https://github.com/${GITHUB}?tab=repositories`} target="_blank">Ver todos no GitHub →</a></div>
        </div>
      </section>

      <section id="curriculo">
        <div className="container">
          <Title>Currículo</Title>
          <h3 className="cv-sub">Experiência</h3>
          <Timeline entries={experience} />
          <h3 className="cv-sub">Formação</h3>
          <Timeline entries={education} />
          <h3 className="cv-sub">Certificações e cursos</h3>
          <Timeline entries={certifications} />
          <iframe className="cv-viewer" src={`${CV}/preview`} title="Currículo de Marcelo Pinotti" loading="lazy" />
          <a href={CV_PDF} className="btn btn-primary cv-download">Baixar currículo (PDF)</a>
        </div>
      </section>

      <section id="habilidades">
        <div className="container">
          <Title>Habilidades</Title>
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
          <Title>Contato</Title>
          <p>Quer conversar sobre uma oportunidade ou saber mais sobre algum projeto? Me mande um e-mail.</p>
          <a href="mailto:marcelopinotti@outlook.com.br" className="btn btn-primary">marcelopinotti@outlook.com.br</a>
          <div className="socials">
            <a href="https://github.com/marcelopinotti" target="_blank">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/marcelo-pinotti" target="_blank">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Marcelo Pinotti
      </footer>
    </>
  )
}
