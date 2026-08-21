import { profile } from '../content'
import Reveal from './Reveal'

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="shell">
        <Reveal as="p" className="eyebrow">
          {profile.role}
        </Reveal>
        <Reveal as="h1" className="hero-name" delay={80}>
          {profile.name}
        </Reveal>
        <Reveal as="p" className="lede hero-lede" delay={160}>
          {profile.tagline}
        </Reveal>
        <Reveal as="p" className="hero-meta" delay={240}>
          {profile.location} · {profile.availability}
        </Reveal>
        <Reveal className="hero-links" delay={300}>
          <a className="link" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a
            className="link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="link" href={`tel:${profile.phone.replace(/-/g, '')}`}>
            {profile.phone}
          </a>
        </Reveal>
      </div>
    </header>
  )
}

export default Hero
