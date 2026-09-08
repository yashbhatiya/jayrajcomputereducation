import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Star, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Course data now lives in one place (src/data/courses.tsx) and is shared
// with the course detail pages, the /courses hub, the Footer's "Popular
// Courses" list, and the Contact form's course dropdown — see SEO audit
// Section 8.1 for why that matters (it used to be three different lists).
import { courses } from '@/data/courses';



const Courses = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  // Previously only the first 4 of 14 courses were ever rendered into the
  // DOM until a visitor clicked "Show all" — meaning 10 courses were
  // invisible to anything that doesn't execute that click (see SEO audit
  // Section 2.4 / 3). All courses now render unconditionally.
  const visibleCourses = courses;
  return (
    <section
      id="courses"
      style={{
        padding: '80px 0',
        background: 'var(--background)',
        fontFamily: "'Sora', 'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .course-card-wrap {
          height: 320px;
          perspective: 1200px;
          width: 100%;
        }

        @media (max-width: 640px) {
          .course-card-wrap {
            height: 300px;
          }
        }

        .course-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .course-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .course-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 18px;
          overflow: hidden;
        }

        .course-face-back {
          transform: rotateY(180deg);
        }

        .card-front {
          background: var(--card);
          border: 1px solid var(--border);
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 18px;
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .card-front:hover {
          box-shadow: 0 20px 60px -10px rgba(0,0,0,0.18);
          transform: translateY(-4px);
        }

        .card-back {
          background: var(--card);
          border: 1px solid var(--border);
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 18px;
          overflow: hidden;
          padding: 20px;
          box-sizing: border-box;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          color: #fff;
          backdrop-filter: blur(4px);
        }

        .enroll-btn {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: none;
          font-size: 13px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          color: #fff;
          margin-top: auto;
          transition: opacity 0.2s, transform 0.15s;
          letter-spacing: 0.03em;
        }

        .enroll-btn:hover {
          opacity: 0.88;
          transform: scale(0.98);
        }

        .learn-more-btn {
          width: 100%;
          padding: 9px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          border: 1.5px solid;
          background: transparent;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          letter-spacing: 0.03em;
        }

        .learn-more-btn:hover {
          transform: scale(0.98);
        }

        .back-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted-foreground);
          transition: background 0.2s, color 0.2s;
        }

        .back-btn:hover {
          background: var(--muted);
          color: var(--foreground);
        }

        .topic-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          color: var(--muted-foreground);
          padding: 3px 0;
        }

        .meta-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          background: var(--muted);
          border-radius: 8px;
          padding: 5px 10px;
          font-size: 11px;
          color: var(--muted-foreground);
          font-weight: 500;
        }

        .section-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 10px;
          opacity: 0.55;
        }

        .view-all-btn {
          padding: 14px 40px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          border: none;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 30px rgba(102,126,234,0.4);
        }

        .view-all-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 40px rgba(102,126,234,0.5);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p className="section-eyebrow" style={{ color: 'var(--muted-foreground)' }}>
            What we offer
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              fontFamily: "'Sora', sans-serif",
              letterSpacing: '-0.02em',
              margin: '0 0 14px',
              color: 'var(--foreground)',
            }}
          >
            Our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #667eea, #f5576c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Courses
            </span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--muted-foreground)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Comprehensive computer training programs designed to boost your career and technical skills
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {visibleCourses.map((course, index) => {
            const Icon = course.icon;
            const isFlipped = flippedCard === index;

            return (
              <div key={course.slug} className="course-card-wrap">
                <div className={`course-card-inner ${isFlipped ? 'flipped' : ''}`}>

                  {/* FRONT */}
                  <div className="course-face">
                    <div className="card-front">
                      {/* Gradient header band */}
                      <div
                        style={{
                          background: course.gradient,
                          padding: '22px 20px 18px',
                          position: 'relative',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: 12,
                            right: 14,
                          }}
                        >
                          <span className="tag-pill">
                            <Zap style={{ width: 9, height: 9 }} />
                            {course.tag}
                          </span>
                        </div>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(6px)',
                            marginBottom: 12,
                          }}
                        >
                          <Icon style={{ width: 22, height: 22, color: '#fff' }} />
                        </div>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: '15px',
                            fontWeight: 700,
                            fontFamily: "'Sora', sans-serif",
                            color: '#fff',
                            lineHeight: 1.3,
                          }}
                        >
                          {course.title}
                        </h3>
                      </div>

                      {/* Body */}
                      <div
                        style={{
                          padding: '16px 18px 18px',
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                          gap: 12,
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: '12.5px',
                            color: 'var(--muted-foreground)',
                            lineHeight: 1.55,
                          }}
                        >
                          {course.description}
                        </p>

                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <span className="meta-badge">
                            <Clock style={{ width: 11, height: 11 }} />
                            {course.duration}
                          </span>
                          <span className="meta-badge">
                            <Star style={{ width: 11, height: 11 }} />
                            {course.level}
                          </span>
                        </div>

                        <button
                          className="learn-more-btn"
                          style={{
                            borderColor: course.accent,
                            color: course.accent,
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = course.accent;
                            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                            (e.currentTarget as HTMLButtonElement).style.color = course.accent;
                          }}
                          onClick={() => setFlippedCard(index)}
                        >
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="course-face course-face-back">
                    <div className="card-back">
                      {/* Back header */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 14,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: 8,
                              background: course.gradient,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon style={{ width: 14, height: 14, color: '#fff' }} />
                          </div>
                          <span
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              fontFamily: "'Sora', sans-serif",
                              color: 'var(--foreground)',
                            }}
                          >
                            {course.title}
                          </span>
                        </div>
                        <button className="back-btn" onClick={() => setFlippedCard(null)}>
                          <ArrowLeft style={{ width: 16, height: 16 }} />
                        </button>
                      </div>

                      {/* Overview */}
                      <p
                        style={{
                          fontSize: '11.5px',
                          color: 'var(--muted-foreground)',
                          lineHeight: 1.6,
                          margin: '0 0 12px',
                        }}
                      >
                        {course.details.overview}
                      </p>

                      {/* Topics */}
                      <div style={{ marginBottom: 12 }}>
                        <p
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--muted-foreground)',
                            margin: '0 0 6px',
                          }}
                        >
                          Key Topics
                        </p>
                        {course.details.syllabus.slice(0, 3).map((topic, idx) => (
                          <div key={idx} className="topic-item">
                            <CheckCircle
                              style={{ width: 12, height: 12, color: course.accent, flexShrink: 0 }}
                            />
                            {topic}
                          </div>
                        ))}
                        {course.details.syllabus.length > 3 && (
                          <div style={{ fontSize: 11, color: 'var(--muted-foreground)', paddingLeft: 19, marginTop: 2 }}>
                            +{course.details.syllabus.length - 3} more topics
                          </div>
                        )}
                      </div>

                      {/* Meta */}
                      <div
                        style={{
                          borderTop: '1px solid var(--border)',
                          paddingTop: 10,
                          marginBottom: 12,
                          fontSize: 11,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 4,
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                          <span style={{ color: 'var(--muted-foreground)' }}>Certificate</span>
                          <span
                            style={{
                              fontWeight: 600,
                              textAlign: 'right',
                              color: 'var(--foreground)',
                              fontSize: 10.5,
                            }}
                          >
                            {course.details.certification}
                          </span>
                        </div>
                        <div>
                          <span style={{ color: 'var(--muted-foreground)' }}>Prereq: </span>
                          <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>
                            {course.details.prerequisites}
                          </span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: 8 }}>
                        <Link
                          to={`/courses/${course.slug}`}
                          className="enroll-btn"
                          style={{
                            width: 'auto',
                            flex: '0 0 auto',
                            padding: '10px 14px',
                            background: 'transparent',
                            border: `1.5px solid ${course.accent}`,
                            color: course.accent,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Full Details
                        </Link>
                        <button
                          className="enroll-btn"
                          style={{ width: 'auto', flex: 1, background: course.gradient }}
                          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA — links to the dedicated /courses hub page instead of just
            expanding an in-page list, since every course already has its
            own indexable URL now (SEO audit Section 3.2/4.5). */}
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Link to="/courses" className="view-all-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Browse All Course Details
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </div>
    </section>
  );
};


export default Courses;