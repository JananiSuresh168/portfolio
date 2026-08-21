import Reveal from './Reveal'

/** A titled section: small label, large heading, then the content below. */
function Section({ id, label, title, children }) {
  const titleId = `${id}-title`

  return (
    <section id={id} className={`section ${id}`} aria-labelledby={titleId}>
      <div className="shell">
        <Reveal as="p" className="eyebrow">
          {label}
        </Reveal>
        <Reveal as="h2" id={titleId} className="section-title" delay={70}>
          {title}
        </Reveal>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}

export default Section
