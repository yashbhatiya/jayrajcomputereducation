import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getOrganizationSchema } from '@/lib/schema';

const Index = () => {
  const location = useLocation();

  // Handles "Enroll Now" / footer links that navigate here as "/#contact"
  // etc. from other pages (see Header.tsx) — on a client-side route change
  // the browser doesn't auto-scroll to a URL hash the way it does on a full
  // page load, so we do it manually once the sections have rendered.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Computer Classes in Vadodara | Jayraj Computer Education"
        description="Learn Tally, Python, Web Design, Programming & more at Jayraj Computer Education, Ajwa Road, Vadodara. Practical, certificate-backed courses. Enroll today."
        path="/"
        schema={getOrganizationSchema()}
      />
      <Header />
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
