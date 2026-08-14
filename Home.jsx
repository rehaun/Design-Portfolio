import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import { images } from '../data/images';

export default function Home() {
  return (
    <>
      <Nav lang="en" />
      <div className="hero">
        <Reveal>
          <img src={images.heroUnderConstruction} alt="" />
          <h1>Under construction, for now!</h1>
          <p>Explore what's already up:</p>
        </Reveal>
      </div>

      <div className="container cards">
        <Reveal delay={0.05}>
          <Link to="/classeh-games" className="card">
            <div className="card-eyebrow">Product Design Case Study</div>
            <div className="card-title">
              A shorter path, a longer smile from the sales team.
            </div>
            <div className="card-view">View →</div>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <Link to="/ux-research" className="card">
            <div className="card-eyebrow">UX Research Case Study</div>
            <div className="card-title">
              They studied AI for years. Now it's rewriting how they work.
            </div>
            <div className="card-view">View →</div>
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <Link to="/classeh-dashboard" className="card">
            <div className="card-eyebrow">Product Design Case Study</div>
            <div className="card-title">
              Same login, three views, one happy support team.
            </div>
            <div className="card-view">View →</div>
          </Link>
        </Reveal>
      </div>

      <Marquee />

      <div className="footer">Made by Davarpanah</div>
    </>
  );
}
