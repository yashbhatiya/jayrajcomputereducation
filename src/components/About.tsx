import { Users, Award, Target, BookOpen, Clock, Trophy, CheckCircle2, Sparkles } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years of Excellence', color: 'from-blue-600 to-cyan-500' },
  { value: '1000+', label: 'Students Trained', color: 'from-cyan-500 to-teal-400' },
  { value: '13+', label: 'Courses Offered', color: 'from-blue-500 to-indigo-500' },
  { value: '95%', label: 'Placement Rate', color: 'from-indigo-500 to-blue-600' },
];

const features = [
  {
    icon: BookOpen,
    title: 'Expert Faculty',
    description: 'Learn from industry professionals with years of hands-on experience and a passion for teaching.',
    accent: 'from-blue-600 to-cyan-500',
    lightBg: 'bg-blue-50 dark:bg-blue-950/30',
    iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Personalized attention with small batches ensuring every student gets the guidance they deserve.',
    accent: 'from-cyan-500 to-teal-400',
    lightBg: 'bg-cyan-50 dark:bg-cyan-950/30',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-400',
  },
  {
    icon: Clock,
    title: 'Flexible Timing',
    description: 'Multiple batch options designed to fit students, working professionals, and homemakers alike.',
    accent: 'from-indigo-500 to-blue-600',
    lightBg: 'bg-indigo-50 dark:bg-indigo-950/30',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-600',
  },
];

const whyUs = [
  'Industry-aligned curriculum updated regularly',
  'Practical, project-based learning approach',
  'Recognized certification upon completion',
  'Job placement assistance and career guidance',
  'Affordable fee structure with flexible payment',
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-background">

      {/* ── Subtle grid texture ── */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Soft ambient glows ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Section badge + heading ── */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              About Our Institute
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Empowering Students with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Quality Education
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Jayraj Computer Education, we bridge the gap between traditional learning
              and modern industry demands — one student at a time.
            </p>
          </div>

          {/* ── Stats row ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative group rounded-2xl border border-border/60 bg-card hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden p-6 text-center"
              >
                {/* top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`} />
                <p className={`text-3xl font-extrabold bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-1`}>
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── Story + Mission/Vision ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">

            {/* Our Story */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Our Story
                </h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to democratize computer education, Jayraj Computer Education
                  has been at the forefront of technical training for over <strong className="text-foreground">15 years</strong>.
                  We believe quality education should be accessible to everyone, regardless of background.
                </p>
                <p>
                  We've successfully trained <strong className="text-foreground">1,000+ students</strong>, helping
                  them unlock better career opportunities and achieve their professional goals — from basic
                  computer literacy all the way to advanced programming and design.
                </p>
                <p>
                  Our curriculum is continuously updated to stay aligned with industry trends, so every
                  student is always learning the most in-demand skills.
                </p>
              </div>

              {/* Why us checklist */}
              <div className="mt-8 rounded-2xl border border-blue-100 dark:border-blue-900/50 dark:bg-blue-950/20 p-6">
                <h4 className="font-semibold text-foreground mb-4">Why students choose us</h4>
                <ul className="space-y-3">
                  {whyUs.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              {/* Mission */}
              <div className="relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-500/30">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Our Mission</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide practical, industry-relevant computer education that empowers students
                    with the skills and confidence needed to excel in today's digital world.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500" />
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-md shadow-cyan-500/30">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Our Vision</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading computer education institute that shapes the future by creating
                    skilled professionals ready for the challenges of the digital economy.
                  </p>
                </div>
              </div>

              {/* Decorative mini banner */}
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white text-center shadow-lg shadow-blue-500/25">
                <p className="text-lg font-bold">Ready to start your career?</p>
                <p className="text-blue-100 text-sm mt-1">
                  Join hundreds of students who transformed their future with us.
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 bg-white text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Enquire Now →
                </a>
              </div>
            </div>
          </div>

          {/* ── Feature cards ── */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`relative rounded-2xl border border-border/60 bg-card overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.accent}`} />

                <div className="p-7">
                  <div className={`w-14 h-14 rounded-2xl ${f.iconBg} flex items-center justify-center mb-5 shadow-md`}>
                    <f.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{f.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;