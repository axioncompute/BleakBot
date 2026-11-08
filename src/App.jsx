import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyContactBar from './components/StickyContactBar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogArchivePage from './pages/BlogArchivePage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogArchivePage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/category/:categorySlug" element={<BlogArchivePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/meet-marcus-webb-the-homeowner-running-the-tests" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/disclaimer" element={<LegalPage />} />
              <Route path="/legal/:policySlug" element={<LegalPage />} />
              <Route path="/:slug" element={<BlogPostPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <StickyContactBar />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
