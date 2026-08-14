import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Ribbons from '../components/Ribbons';
import Reveal from '../components/Reveal';
import { images } from '../data/images';

export default function Home() {
  return (
    <>
      <Nav lang="en" />
      <div className="hero-wrap">
        <Ribbons />
        <div className="hero">
          <Reveal>
            <img src={images.heroUnderConstruction} alt="" />
            <h1>Under construction, for now!</h1>
            <p>Explore what's already up:</p>
          </Reveal>
        </div>
      </div>

      <div className="container cards">
        <Reveal delay={0.05}>
          <Link to="/classeh-games" className="card">
            <div className="card-image">
              <img src={images.gamesHero} alt="Classeh Games" loading="lazy" />
            </div>
            <p className="card-title">
              A shorter path, a longer smile from the sales team.
            </p>
            <div className="card-footer">
              <p className="card-eyebrow">PRODUCT DESIGN CASE STUDY</p>
              <span className="card-view">VIEW</span>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <Link to="/ux-research" className="card">
            <div className="card-image">
              <img src={images.uxHero} alt="UX Research" loading="lazy" />
            </div>
            <p className="card-title">
              They studied AI for years. Now it's rewriting how they work.
            </p>
            <div className="card-footer">
              <p className="card-eyebrow">UX RESEARCH CASE STUDY</p>
              <span className="card-view">VIEW</span>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <Link to="/classeh-dashboard" className="card">
            <div className="card-image">
              <img src={images.dashHero} alt="Classeh Dashboard" loading="lazy" />
            </div>
            <p className="card-title">
              Same login, three views, one happy support team.
            </p>
            <div className="card-footer">
              <p className="card-eyebrow">PRODUCT DESIGN CASE STUDY</p>
              <span className="card-view">VIEW</span>
            </div>
          </Link>
        </Reveal>
      </div>

      <div className="footer">Made by Davarpanah</div>
    </>
  );
}
