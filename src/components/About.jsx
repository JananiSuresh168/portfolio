import { about, figures } from '../content'
import Reveal from './Reveal'
import Section from './Section'

function About() {
  return (
    <Section id="about" label="About" title={about.lead}>
      <div className="prose">
        {about.body.map((paragraph, index) => (
          <Reveal as="p" key={paragraph} delay={index * 80}>
            {paragraph}
          </Reveal>
        ))}
      </div>
      <div className="figures">
        {figures.map((figure, index) => (
          <Reveal key={figure.label} delay={index * 80}>
            <p className="figure-value">{figure.value}</p>
            <p className="figure-label">{figure.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default About
