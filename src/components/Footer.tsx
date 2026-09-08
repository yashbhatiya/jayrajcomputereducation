import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { courses as allCourses } from '@/data/courses';
import { siteConfig } from '@/data/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Root-relative hash links so these work when Footer renders on a page
  // other than the homepage (see Header.tsx for the matching pattern).
  const quickLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Courses', href: '/courses' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  // Popular Courses now links to each course's real, dedicated URL instead
  // of everything pointing at the same "#courses" anchor — and the list is
  // pulled from the same src/data/courses.tsx source used by the course
  // grid and the enquiry form dropdown, so the three can never drift out of
  // sync again (SEO audit Section 8.1).
  const popularCourseSlugs = [
    'basic-computer-course-vadodara',
    'ccc-course-vadodara',
    'dtp-course-vadodara',
    'autocad-course-vadodara',
    'python-course-vadodara',
    'web-development-course-vadodara',
    'tally-course-vadodara',
    'graphic-design-course-vadodara',
  ];
  const popularCourses = popularCourseSlugs
    .map((slug) => allCourses.find((c) => c.slug === slug))
    .filter(Boolean);

  // TODO: siteConfig.social currently holds placeholder "#" values — update
  // them in src/data/siteConfig.ts once real profile URLs exist (SEO audit
  // Section 7.3). Doing it there instead of here keeps every reference to
  // these links in sync automatically, including the LocalBusiness schema.
  const socialLinks = [
    { icon: Facebook, href: siteConfig.social.facebook, color: 'hover:text-blue-500', label: 'Facebook' },
    { icon: Twitter, href: siteConfig.social.twitter, color: 'hover:text-sky-500', label: 'Twitter' },
    { icon: Instagram, href: siteConfig.social.instagram, color: 'hover:text-pink-500', label: 'Instagram' },
    { icon: Linkedin, href: siteConfig.social.linkedin, color: 'hover:text-blue-600', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Jayraj Computer Education"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">{siteConfig.name}</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering students with cutting-edge computer skills and technology education for over {siteConfig.yearsOfExperience} years.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className={`text-muted-foreground transition-colors duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Popular Courses</h4>
            <ul className="space-y-2">
              {popularCourses.map((course) => (
                <li key={course.slug}>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/courses"
                  className="text-primary hover:underline transition-colors duration-300 text-sm font-medium"
                >
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">{siteConfig.contact.email}</span>
              </a>
              <a href={siteConfig.contact.phoneHref} className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">{siteConfig.contact.phone}</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">{siteConfig.contact.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
