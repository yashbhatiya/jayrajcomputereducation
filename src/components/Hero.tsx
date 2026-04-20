import { ArrowRight, Star, GraduationCap, Users, Clock, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '20+', label: 'Expert Courses', icon: GraduationCap, color: 'from-blue-600 to-cyan-500' },
  { value: '5000+', label: 'Happy Students', icon: Users, color: 'from-cyan-500 to-teal-400' },
  { value: '20', label: 'Years Experience', icon: Clock, color: 'from-blue-500 to-indigo-500' },
  { value: '100%', label: 'Job Assistance', icon: BadgeCheck, color: 'from-indigo-500 to-blue-600' },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background"
    >
      {/* ── Grid texture — no clipping so it tiles into About seamlessly ── */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundPosition: '0 0',
        }}
      />

      {/* ── Ambient glows ── */}
      {/* Top-center glow */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Bottom glows intentionally overflow into About — no overflow-hidden on section */}
      <div className="absolute bottom-[-120px] left-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] right-0 w-[320px] h-[320px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* ── Trust badge ── */}
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
            Trusted by 5,000+ Students across Vadodara
          </div>

          {/* ── Heading ── */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Jayraj{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Computer
            </span> {' '} Education
            <br />
            Shapes Your Future
          </h1>

          {/* ── Subheading ── */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join Jayraj Computer Education and unlock your potential with industry-leading courses
            in programming, design, and essential computer skills — right here in Vadodara.
          </p>

          {/* ── CTAs ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollTo('courses')}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300"
            >
              Enquire Now
            </button>
          </div>

          {/* ── Divider ── */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-12 opacity-60" />

          {/* ── Stats row ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative group rounded-2xl border border-border/60 bg-card hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden p-6 text-center"
              >
                {/* top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`} />

                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} mb-3 shadow-md`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>

                <p className={`text-3xl font-extrabold bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-0.5`}>
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;