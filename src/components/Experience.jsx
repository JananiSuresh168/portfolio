import { experience } from '../content'
import Reveal from './Reveal'
import Section from './Section'

function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where the work happened.">
      {experience.map((company) => (
        <div className="company" key={company.company}>
          <Reveal>
            <h3 className="company-name">{company.company}</h3>
            <p className="company-meta">
              {company.location} · {company.dates}
            </p>
          </Reveal>

          {company.roles.map((role) => (
            <div className="role row" key={role.title}>
              <Reveal as="p" className="row-label">
                {role.dates}
              </Reveal>
              <div>
                <Reveal as="p" className="role-title" delay={70}>
                  {role.title}
                </Reveal>
                <ul className="role-notes">
                  {role.bullets.map((bullet, index) => (
                    <Reveal as="li" key={bullet} delay={index * 60}>
                      {bullet}
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </Section>
  )
}

export default Experience
