import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import TreatmentDetail from './pages/TreatmentDetail';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [lang, setLang] = React.useState<Language>('en');

  // Scroll to top on navigation
  const ScrollToTop = () => {
    const { pathname } = window.location;
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/work" element={<Work lang={lang} />} />
          <Route path="/work/:id" element={<TreatmentDetail lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;