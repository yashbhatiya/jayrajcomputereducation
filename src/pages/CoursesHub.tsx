import { Link } from 'react-router-dom';
import { Clock, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { courses } from '@/data/courses';

const CoursesHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Computer Courses in Vadodara | 14+ Courses | Jayraj Computer Education"
        description="Explore Tally, Python, Web Development, AutoCAD, Advanced Excel, Graphic Design and more — practical, certificate-backed computer courses in Vadodara."
        path="/courses"
      />
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">Courses</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">Computer Courses in Vadodara</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10">
            {courses.length} practical, certificate-backed courses — from beginner computer literacy
            to programming, design and accounting software — taught at our Ajwa Road, Vadodara center.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <Link
                  key={course.slug}
                  to={`/courses/${course.slug}`}
                  className="group rounded-2xl border border-border/60 bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div style={{ background: course.gradient }} className="p-5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-white font-bold text-base">{course.title}</h2>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
                      <span className="inline-flex items-center gap-1"><Star className="w-3.5 h-3.5" />{course.level}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: course.accent }}>
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesHub;
