import { Users, Award, Target, BookOpen, Clock, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 fade-in">
              <Award className="w-4 h-4" />
              About Our Institute
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 slide-up">
              Empowering Students with
              <span className="gradient-text"> Quality Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
              At Jayraj Computer Education, we are committed to providing comprehensive computer training
              that bridges the gap between traditional education and modern industry requirements.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Our Story */}
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Our Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to democratize computer education, Jayraj Computer Education
                  has been at the forefront of technical training for over 15 years. We believe that
                  quality education should be accessible to everyone, regardless of their background.
                </p>
                <p>
                  Our institute has successfully trained over 1,000 students, helping them secure
                  better career opportunities and achieve their professional goals. From basic computer
                  literacy to advanced programming and design, we cover the entire spectrum of computer education.
                </p>
                <p>
                  We continuously update our curriculum to stay aligned with industry trends and
                  ensure our students are always learning the most relevant and in-demand skills.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-8 fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-lg border bg-black  p-6 shadow-sm Mission-card">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
                <p className="text-muted-foreground">
                  To provide practical, industry-relevant computer education that empowers students
                  with the skills and confidence needed to excel in today's digital world.
                </p>
              </div>

              <div className="rounded-lg border bg-black p-6 shadow-sm Vision-card">
                <Trophy className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
                <p className="text-muted-foreground">
                  To be the leading computer education institute that shapes the future by creating
                  skilled professionals ready to meet the challenges of the digital economy.
                </p>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg border text-white bg-black shadow-sm text-center p-6 Faculty-card fade-in" style={{ animationDelay: '0.5s' }}>
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Expert Faculty</h4>
              <p className="text-muted-foreground">
                Learn from industry experts with years of practical experience and teaching expertise.
              </p>
            </div>

            <div className="rounded-lg border text-white bg-black shadow-sm text-center p-6 class-size-card fade-in" style={{ animationDelay: '0.6s' }}>
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Small Class Sizes</h4>
              <p className="text-muted-foreground">
                Personalized attention with small batch sizes ensuring every student gets proper guidance.
              </p>
            </div>

            <div className="rounded-lg border text-white bg-black shadow-sm text-center p-6 timing-card fade-in" style={{ animationDelay: '0.7s' }}>
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Flexible Timing</h4>
              <p className="text-muted-foreground">
                Multiple batch timings available to accommodate working professionals and students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;