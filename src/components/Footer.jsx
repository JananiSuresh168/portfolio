import { profile } from '../content'
import Reveal from './Reveal'

function Footer() {
  return (
    <footer className="footer">
      <Reveal className="shell footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer
