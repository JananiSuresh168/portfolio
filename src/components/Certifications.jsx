import { certifications } from '../content'
import Reveal from './Reveal'
import Section from './Section'

function Certifications() {
  return (
    <Section id="certifications" label="Certifications" title="Verified along the way.">
      <ul className="cert-list">
        {certifications.map((cert, index) => (
          <Reveal as="li" key={cert.name} delay={index * 60}>
            <a
              className="cert"
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${cert.name}, ${cert.level} — view credential on Credly (opens in a new tab)`}
            >
              <span>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-meta">
                  {cert.issuer} · {cert.level}
                </span>
              </span>
              <span className="cert-cue" aria-hidden="true">
                Credly ↗
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

export default Certifications
