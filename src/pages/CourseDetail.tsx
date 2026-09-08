import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, Clock, Star, ArrowLeft, BadgeCheck, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { courses, getCourseBySlug } from '@/data/courses';
import { siteConfig } from '@/data/siteConfig';
import { getCourseSchema, getFaqSchema, getBreadcrumbSchema } from '@/lib/schema';

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const Icon = course.icon;
  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const breadcrumbItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Courses', url: `${siteConfig.url}/courses` },
    { name: course.title, url: `${siteConfig.url}/courses/${course.slug}` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={course.seo.title}
        description={course.seo.description}
        path={`/courses/${course.slug}`}
        schema={[
          getCourseSchema(course),
          getFaqSchema(course.details.faqs),
          getBreadcrumbSchema(breadcrumbItems),
        ]}
      />
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/courses" className="hover:text-primary">Courses</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{course.title}</span>
          </nav>

          {/* Hero */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md"
              style={{ background: course.gradient }}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                {course.title} Course in Vadodara
              </h1>
              <p className="text-lg text-muted-foreground">{course.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <span className="inline-flex items-center gap-1.5 bg-muted/40 border border-border/60 px-3 py-1.5 rounded-full text-sm">
              <Clock className="w-3.5 h-3.5" /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-muted/40 border border-border/60 px-3 py-1.5 rounded-full text-sm">
              <Star className="w-3.5 h-3.5" /> {course.level}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-muted/40 border border-border/60 px-3 py-1.5 rounded-full text-sm">
              <BadgeCheck className="w-3.5 h-3.5" /> {course.details.certification}
            </span>
          </div>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-3">Course Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{course.details.overview}</p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Taught at our Ajwa Road, Vadodara center with small batch sizes and flexible morning,
              evening and weekend timings — designed for students, working professionals and homemakers alike.
            </p>
          </section>

          {/* Syllabus */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {course.details.syllabus.map((topic) => (
                <li key={topic} className="flex items-start gap-2.5 bg-muted/20 border border-border/50 rounded-lg p-3.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: course.accent }} />
                  <span className="text-sm">{topic}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Eligibility & Certification */}
          <section className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="font-semibold mb-2">Eligibility / Prerequisites</h3>
              <p className="text-sm text-muted-foreground">{course.details.prerequisites}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-sm text-muted-foreground">{course.details.certification}</p>
            </div>
          </section>

          {/* Career Prospects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> Career Prospects
            </h2>
            <ul className="space-y-2">
              {course.details.careerProspects.map((role) => (
                <li key={role} className="flex items-start gap-2.5 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: course.accent }} />
                  {role}
                </li>
              ))}
            </ul>
          </section>

          {/* Fees CTA */}
          <section className="mb-10 rounded-2xl p-6 text-center text-white shadow-lg" style={{ background: course.gradient }}>
            <p className="text-lg font-bold mb-1">Fees on Enquiry</p>
            <p className="text-white/90 text-sm mb-4">
              WhatsApp or call us for current fees, seat availability and the next batch start date.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-white text-foreground hover:bg-white/90">
                  Enquire on WhatsApp
                </Button>
              </a>
              <Link to="/#contact">
                <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                  Book a Free Demo
                </Button>
              </Link>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {course.details.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related courses — internal linking, SEO audit Section 4.5 */}
          <section className="mb-4">
            <h2 className="text-2xl font-bold mb-4">Related Courses</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((rc) => (
                <Link
                  key={rc.slug}
                  to={`/courses/${rc.slug}`}
                  className="rounded-xl border border-border/60 bg-card p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <p className="font-semibold text-sm mb-1">{rc.title}</p>
                  <p className="text-xs text-muted-foreground">{rc.duration} · {rc.level}</p>
                </Link>
              ))}
            </div>
          </section>

          <Link to="/courses" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-6">
            <ArrowLeft className="w-4 h-4" /> Back to all courses
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
