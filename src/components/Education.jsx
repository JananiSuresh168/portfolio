import { education } from '../content'
import Reveal from './Reveal'
import Section from './Section'

function Education() {
  return (
    <Section id="education" label="Education" title="Where it started.">
      {education.map((entry) => (
        <div className="row" key={entry.institution}>
          <Reveal as="p" className="row-label">
            {entry.dates}
          </Reveal>
          <Reveal delay={70}>
            <h3 className="school-name">{entry.institution}</h3>
            <p className="school-meta">
              {entry.degree}
              <br />
              <span>
                {entry.location} · {entry.gpa}
              </span>
            </p>
          </Reveal>
        </div>
      ))}
    </Section>
  )
}

export default Education
