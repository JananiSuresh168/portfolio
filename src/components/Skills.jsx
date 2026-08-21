import { skills } from '../content'
import Reveal from './Reveal'
import Section from './Section'

function Skills() {
  return (
    <Section id="skills" label="Skills" title="What I reach for.">
      {skills.map((group) => (
        <div className="row" key={group.category}>
          <Reveal as="p" className="row-label">
            {group.category}
          </Reveal>
          <Reveal as="p" className="skill-set" delay={70}>
            {group.items.join(', ')}
          </Reveal>
        </div>
      ))}
    </Section>
  )
}

export default Skills
