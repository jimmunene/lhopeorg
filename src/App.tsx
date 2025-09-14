import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import WaysToHelp from './pages/WaysToHelp';
import FAQ from './pages/FAQ';
import Donate from './pages/Donate';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookieConsent from './components/CookieConsent/CookieConsent';
import './i18n/config';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="help" element={<WaysToHelp />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="donate" element={<Donate />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;