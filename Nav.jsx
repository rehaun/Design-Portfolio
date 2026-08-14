import { Link } from 'react-router-dom';

export default function Nav({ langHref, langLabel, lang }) {
  return (
    <div className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          {lang === 'fa' ? 'داورپناه' : 'Davarpanah'}
        </Link>
        {langHref && (
          <Link to={langHref} className="nav-lang">
            {langLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
