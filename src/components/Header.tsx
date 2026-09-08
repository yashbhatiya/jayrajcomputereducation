import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // "Enroll Now" needs to work from any page, not just the homepage where
  // the #contact section actually lives — scroll directly if we're already
  // home, otherwise navigate home first (Index.tsx picks up the #contact
  // hash on mount and scrolls once the section is rendered).
  const goToContact = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  // Using root-relative hash links ("/#about") rather than bare "#about" so
  // these still work correctly when the header is rendered on a page other
  // than the homepage (e.g. a course detail page) — the browser navigates
  // to "/" first and then jumps to the section. "Courses" points at the
  // dedicated /courses hub page instead of an in-page anchor (SEO audit
  // Section 4.5 — internal links should point at real, indexable URLs).
  const menuItems = [
    { label: 'Home', href: '/#home' },
    { label: 'Courses', href: '/courses' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Jayraj Computer Education"
                className="w-10 h-10 md:w-14 md:h-14 object-contain"
              />
            </div>
            <div>
              {/* This is the logo/brand mark, not the page's main heading —
                  intentionally a <p>, not an <h1>. SEO audit Section 2.3/3:
                  the page's one true <h1> lives in Hero.tsx (and equivalent
                  hero sections on course pages), where it can carry the
                  actual keyword-rich headline instead of just the brand name. */}
              <p className="text-lg md:text-xl font-bold gradient-text">Jayraj Computer Education</p>
              <p className="text-xs text-muted-foreground hidden sm:block">Excellence in Computer Training</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button className="btn-hero" onClick={goToContact}>Enroll Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-border">
                  <Button className="btn-hero w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      goToContact();
                    }}
                  >Enroll Now</Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header >
  );
};

export default Header;