import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyGames from './pages/CaseStudyGames';
import CaseStudyGamesFa from './pages/CaseStudyGamesFa';
import CaseStudyUx from './pages/CaseStudyUx';
import CaseStudyUxFa from './pages/CaseStudyUxFa';
import CaseStudyDashboard from './pages/CaseStudyDashboard';
import CaseStudyDashboardFa from './pages/CaseStudyDashboardFa';

// Sets <body dir="rtl" lang="fa"> on Persian routes (anything ending in /fa)
// and resets to LTR/English everywhere else, plus scrolls to top on navigation.
function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const isFa = location.pathname.endsWith('/fa');
    document.body.setAttribute('dir', isFa ? 'rtl' : 'ltr');
    document.body.setAttribute('lang', isFa ? 'fa' : 'en');
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classeh-games" element={<CaseStudyGames />} />
        <Route path="/classeh-games/fa" element={<CaseStudyGamesFa />} />
        <Route path="/ux-research" element={<CaseStudyUx />} />
        <Route path="/ux-research/fa" element={<CaseStudyUxFa />} />
        <Route path="/classeh-dashboard" element={<CaseStudyDashboard />} />
        <Route path="/classeh-dashboard/fa" element={<CaseStudyDashboardFa />} />
      </Routes>
    </HashRouter>
  );
}
