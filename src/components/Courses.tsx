import { useState } from 'react';
import {
  Code,
  Palette,
  Video,
  Calculator,
  Globe,
  PenTool,
  Database,
  FileText,
  BarChart3,
  Cpu,
  Monitor,
  Layers,
  ArrowLeft,
  Clock,
  BarChart,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Custom CSS for card flip and consistent layout
const styles = `
  .course-card-container {
    height: 400px;
    width: 100%;
    position: relative;
    perspective: 1000px;
    -webkit-perspective: 1000px;
  }

  .course-card {
    position: absolute;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: transform 0.7s ease-in-out;
    -webkit-transition: -webkit-transform 0.7s ease-in-out;
  }

  .course-card.flipped {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }

  .course-card-front, .course-card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .course-card-front {
    z-index: 2;
  }

  .course-card-back {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    z-index: 1;
    background-color: #f0f0f0; /* Temporary distinct background for debugging */
  }

  .course-card-front:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .course-card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Courses = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const courses = [
    {
      title: 'Basic Computer',
      description: 'Fundamental computer skills for beginners',
      icon: Monitor,
      duration: '2 months',
      level: 'Beginner',
      color: 'from-blue-500 to-cyan-500',
      details: {
        overview: 'Learn essential computer skills including basic operations, file management, and internet usage.',
        syllabus: ['Computer Fundamentals', 'Operating System Basics', 'Microsoft Office Suite', 'Internet & Email', 'File Management'],
        certification: 'Certificate of Completion',
        prerequisites: 'No prior experience required'
      }
    },
    {
      title: 'CCC (Course on Computer Concepts)',
      description: 'Government certified computer literacy program',
      icon: FileText,
      duration: '3 months',
      level: 'Beginner',
      color: 'from-green-500 to-emerald-500',
      details: {
        overview: 'Government recognized course covering computer concepts, applications, and digital literacy.',
        syllabus: ['Computer Introduction', 'GUI Operating System', 'MS Office', 'Internet & WWW', 'Digital Financial Services'],
        certification: 'Government Certificate',
        prerequisites: 'Basic reading and writing skills'
      }
    },
    {
      title: 'DTP (Desktop Publishing)',
      description: 'Create professional documents and publications',
      icon: PenTool,
      duration: '2 months',
      level: 'Intermediate',
      color: 'from-purple-500 to-pink-500',
      details: {
        overview: 'Master desktop publishing tools to create professional brochures, flyers, and publications.',
        syllabus: ['Adobe PageMaker', 'CorelDRAW Basics', 'Layout Design', 'Typography', 'Print Production'],
        certification: 'DTP Professional Certificate',
        prerequisites: 'Basic computer knowledge'
      }
    },
    {
      title: 'AutoCAD',
      description: 'Professional 2D and 3D design software',
      icon: Layers,
      duration: '3 months',
      level: 'Intermediate',
      color: 'from-orange-500 to-red-500',
      details: {
        overview: 'Learn professional CAD software for architectural, engineering, and design applications.',
        syllabus: ['AutoCAD Interface', '2D Drawing', '3D Modeling', 'Dimensioning', 'Plotting & Layouts'],
        certification: 'AutoCAD Certified User',
        prerequisites: 'Basic computer skills'
      }
    },
    {
      title: 'Premiere Pro (Video Editing)',
      description: 'Professional video editing and post-production',
      icon: Video,
      duration: '2 months',
      level: 'Intermediate',
      color: 'from-pink-500 to-rose-500',
      details: {
        overview: 'Master Adobe Premiere Pro for professional video editing, color correction, and audio mixing.',
        syllabus: ['Premiere Pro Interface', 'Video Editing Basics', 'Color Correction', 'Audio Editing', 'Export Settings'],
        certification: 'Video Editing Professional',
        prerequisites: 'Basic computer knowledge'
      }
    },
    {
      title: 'Python Programming',
      description: 'Learn Python from basics to advanced concepts',
      icon: Code,
      duration: '4 months',
      level: 'Beginner to Advanced',
      color: 'from-yellow-500 to-orange-500',
      details: {
        overview: 'Comprehensive Python programming course covering basics to advanced concepts including web development.',
        syllabus: ['Python Basics', 'Data Structures', 'OOP Concepts', 'File Handling', 'Web Development with Django'],
        certification: 'Python Developer Certificate',
        prerequisites: 'Basic computer literacy'
      }
    },
    {
      title: 'C++ Programming',
      description: 'Master object-oriented programming with C++',
      icon: Cpu,
      duration: '3 months',
      level: 'Intermediate',
      color: 'from-blue-600 to-purple-600',
      details: {
        overview: 'Learn C++ programming with focus on object-oriented programming and data structures.',
        syllabus: ['C++ Basics', 'OOP Concepts', 'Data Structures', 'Pointers & Memory', 'STL Library'],
        certification: 'C++ Programming Certificate',
        prerequisites: 'Basic programming knowledge'
      }
    },
    {
      title: 'C Programming',
      description: 'Foundation of programming with C language',
      icon: Code,
      duration: '2 months',
      level: 'Beginner',
      color: 'from-gray-600 to-gray-800',
      details: {
        overview: 'Learn the foundation of programming with C language, covering syntax, logic, and problem-solving.',
        syllabus: ['C Basics', 'Control Structures', 'Functions', 'Arrays & Strings', 'Pointers & Structures'],
        certification: 'C Programming Certificate',
        prerequisites: 'Basic computer knowledge'
      }
    },
    {
      title: 'Web Development',
      description: 'Build modern websites and web applications',
      icon: Globe,
      duration: '6 months',
      level: 'Beginner to Advanced',
      color: 'from-teal-500 to-blue-500',
      details: {
        overview: 'Complete web development course covering frontend and backend technologies.',
        syllabus: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Database Integration'],
        certification: 'Full Stack Developer Certificate',
        prerequisites: 'Basic computer literacy'
      }
    },
    {
      title: 'Tally',
      description: 'Complete accounting and inventory management',
      icon: Calculator,
      duration: '2 months',
      level: 'Beginner',
      color: 'from-indigo-500 to-purple-500',
      details: {
        overview: 'Learn comprehensive accounting software for business financial management and GST compliance.',
        syllabus: ['Tally Basics', 'Accounting Entries', 'Inventory Management', 'GST Configuration', 'Reports Generation'],
        certification: 'Tally Certified Professional',
        prerequisites: 'Basic accounting knowledge helpful'
      }
    },
    {
      title: 'Tally Prime',
      description: 'Latest version of Tally with advanced features',
      icon: BarChart3,
      duration: '2 months',
      level: 'Intermediate',
      color: 'from-cyan-500 to-blue-600',
      details: {
        overview: 'Master the latest Tally Prime with enhanced features and improved user interface.',
        syllabus: ['Tally Prime Interface', 'Advanced Accounting', 'GST Returns', 'Banking & Reconciliation', 'Advanced Reports'],
        certification: 'Tally Prime Expert',
        prerequisites: 'Basic Tally knowledge recommended'
      }
    },
    {
      title: 'Graphic Designing',
      description: 'Create stunning visual designs and artwork',
      icon: Palette,
      duration: '4 months',
      level: 'Beginner to Advanced',
      color: 'from-red-500 to-pink-500',
      details: {
        overview: 'Complete graphic design course covering Adobe Creative Suite and design principles.',
        syllabus: ['Design Principles', 'Adobe Photoshop', 'Adobe Illustrator', 'Logo Design', 'Print & Digital Media'],
        certification: 'Graphic Design Professional',
        prerequisites: 'Creative mindset and basic computer skills'
      }
    },
    {
      title: 'Advanced Excel',
      description: 'Master Excel with advanced formulas and analysis',
      icon: Database,
      duration: '1 month',
      level: 'Intermediate',
      color: 'from-green-600 to-teal-600',
      details: {
        overview: 'Advanced Excel course covering complex formulas, data analysis, and automation techniques.',
        syllabus: ['Advanced Formulas', 'Pivot Tables', 'Data Analysis', 'Macros & VBA', 'Dashboard Creation'],
        certification: 'Excel Expert Certificate',
        prerequisites: 'Basic Excel knowledge required'
      }
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <section id="courses" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive computer training programs designed to boost your career and technical skills
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className="course-card-container"
              >
                <div
                  className={`course-card ${flippedCard === index ? 'flipped' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Front of card */}
                  <Card className="course-card-front border border-border">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} p-3 mb-3`}>
                        <course.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="course-card-content pt-0">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex justify-between text-xs text-muted-foreground mb-4">
                        <span className="bg-muted px-2 py-1 rounded flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                        <span className="bg-muted px-2 py-1 rounded flex items-center gap-1">
                          <BarChart className="w-3 h-3" />
                          {course.level}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300"
                        onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Back of card */}
                  <Card className="course-card-back border border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold gradient-text">
                          Course Details
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1 h-auto"
                          onClick={() => setFlippedCard(null)}
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="course-card-content pt-0 space-y-3 text-sm">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Overview</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {course.details.overview}
                        </p>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-primary mb-1">Key Topics</h4>
                        <ul className="space-y-1">
                          {course.details.syllabus.slice(0, 3).map((topic, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                          {course.details.syllabus.length > 3 && (
                            <li className="text-xs text-muted-foreground">
                              +{course.details.syllabus.length - 3} more topics
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Certificate:</span>
                          <span className="font-medium">{course.details.certification}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-muted-foreground">Prerequisites: </span>
                          <span className="font-medium">{course.details.prerequisites}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary-dark mt-4"
                        size="sm"
                      >
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;