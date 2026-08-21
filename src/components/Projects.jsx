import { projects } from '../content'
import Reveal from './Reveal'
import Section from './Section'

function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected work.">
      {projects.length === 0 ? (
        <Reveal as="p" className="note">
          Write-ups are in progress. In the meantime, the work above is the best account
          of what I build and how.
        </Reveal>
      ) : (
        projects.map((project) => (
          <div className="row" key={project.name}>
            <Reveal as="p" className="row-label">
              {project.year}
            </Reveal>
            <Reveal delay={70}>
              <h3 className="school-name">{project.name}</h3>
              <p className="school-meta">{project.description}</p>
              {project.url && (
                <p className="project-link">
                  <a className="link" href={project.url} target="_blank" rel="noopener noreferrer">
                    View project
                  </a>
                </p>
              )}
            </Reveal>
          </div>
        ))
      )}
    </Section>
  )
}

export default Projects
