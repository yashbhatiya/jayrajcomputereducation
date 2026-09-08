import {
  Code, Palette, Video, Calculator, Globe, PenTool,
  Database, FileText, BarChart3, Cpu, Monitor, Layers, Cuboid,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  /** Used to build the /courses/:slug URL — keep stable once published; if it
   *  must change later, add a 301 redirect from the old slug. */
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  level: string;
  gradient: string;
  accent: string;
  tag: string;
  /** Per-page <title> / meta description, used by the Helmet SEO component
   *  on the course detail page. Keep title under ~60 chars, description
   *  under ~155 chars. */
  seo: {
    title: string;
    description: string;
  };
  details: {
    overview: string;
    syllabus: string[];
    certification: string;
    prerequisites: string;
    careerProspects: string[];
    faqs: CourseFAQ[];
  };
}

export const courses: Course[] = [
  {
    slug: 'basic-computer-course-vadodara',
    title: 'Basic Computer',
    description: 'Fundamental computer skills for beginners',
    icon: Monitor,
    duration: '2 months',
    level: 'Beginner',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accent: '#667eea',
    tag: 'Popular',
    seo: {
      title: 'Basic Computer Course in Vadodara | Jayraj Computer Education',
      description: 'Learn essential computer skills — MS Office, internet & file management — at Jayraj Computer Education, Ajwa Road, Vadodara. No experience needed.',
    },
    details: {
      overview: 'Learn essential computer skills including basic operations, file management, and internet usage.',
      syllabus: ['Computer Fundamentals', 'Operating System Basics', 'Microsoft Office Suite', 'Internet & Email', 'File Management'],
      certification: 'Certificate of Completion',
      prerequisites: 'No prior experience required',
      careerProspects: ['Office Assistant', 'Data Entry Operator', 'Computer Operator', 'Strong foundation for advanced IT courses'],
      faqs: [
        { question: 'Do I need any prior computer experience?', answer: 'No — this course is designed for complete beginners and starts from the fundamentals.' },
        { question: 'How long is the course and are timings flexible?', answer: 'It runs for 2 months, with morning, evening and weekend batch options available.' },
      ],
    },
  },
  {
    slug: 'ccc-course-vadodara',
    title: 'CCC',
    description: 'Government certified computer literacy program',
    icon: FileText,
    duration: '3 months',
    level: 'Beginner',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    accent: '#11998e',
    tag: 'Certified',
    seo: {
      title: 'CCC Course in Vadodara (Govt. Certified) | Jayraj Computer Education',
      description: 'Government-recognized CCC computer literacy course in Vadodara covering MS Office, internet & digital financial services. Ideal for govt job eligibility.',
    },
    details: {
      overview: 'Government recognized course covering computer concepts, applications, and digital literacy.',
      syllabus: ['Computer Introduction', 'GUI Operating System', 'MS Office', 'Internet & WWW', 'Digital Financial Services'],
      certification: 'Government Certificate (CCC)',
      prerequisites: 'Basic reading and writing skills',
      careerProspects: ['Meets computer-literacy eligibility for many government job applications', 'Bank / government office assistant roles', 'Foundation for further computer courses'],
      faqs: [
        { question: 'Is the CCC certificate accepted for government job applications?', answer: 'Yes, CCC is a widely recognized computer-literacy certification commonly accepted for government eligibility requirements — please confirm the specific requirement for the post you\u2019re applying to.' },
        { question: 'Who should take this course?', answer: 'Students and job aspirants who need a government-recognized computer literacy certificate.' },
      ],
    },
  },
  {
    slug: 'dtp-course-vadodara',
    title: 'DTP',
    description: 'Create professional documents and publications',
    icon: PenTool,
    duration: '2 months',
    level: 'Intermediate',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accent: '#f093fb',
    tag: 'Creative',
    seo: {
      title: 'DTP Course in Vadodara | Desktop Publishing Training',
      description: 'Learn desktop publishing with PageMaker & CorelDRAW at Jayraj Computer Education, Ajwa Road, Vadodara. Ideal for print & publishing careers.',
    },
    details: {
      overview: 'Master desktop publishing tools to create professional brochures, flyers, and publications.',
      syllabus: ['Adobe PageMaker', 'CorelDRAW Basics', 'Layout Design', 'Typography', 'Print Production'],
      certification: 'DTP Professional Certificate',
      prerequisites: 'Basic computer knowledge',
      careerProspects: ['DTP Operator', 'Print Production Assistant', 'Freelance Layout Designer'],
      faqs: [
        { question: 'What software will I learn?', answer: 'Adobe PageMaker and CorelDRAW, along with layout design, typography and print production fundamentals.' },
        { question: 'Is DTP still in demand?', answer: 'Yes — local printing, publishing and packaging businesses in Vadodara regularly need DTP-skilled operators.' },
      ],
    },
  },
  {
    slug: 'autocad-course-vadodara',
    title: 'AutoCAD',
    description: 'Professional 2D and 3D design software',
    icon: Layers,
    duration: '3 months',
    level: 'Intermediate',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    accent: '#f7971e',
    tag: 'In Demand',
    seo: {
      title: 'AutoCAD Course in Vadodara | 2D & 3D Design Training',
      description: 'Learn AutoCAD for architectural, engineering & design applications at Jayraj Computer Education, Ajwa Road, Vadodara. 3-month practical course.',
    },
    details: {
      overview: 'Learn professional CAD software for architectural, engineering, and design applications.',
      syllabus: ['AutoCAD Interface', '2D Drawing', '3D Modeling', 'Dimensioning', 'Plotting & Layouts'],
      certification: 'AutoCAD Certified User',
      prerequisites: 'Basic computer skills',
      careerProspects: ['CAD Draftsman', 'Junior Architectural Assistant', 'Engineering Design Support'],
      faqs: [
        { question: 'Do I need a design background to join?', answer: 'No — the course starts with the AutoCAD interface and basic 2D drawing before progressing to 3D modeling.' },
        { question: 'Is a certificate provided?', answer: 'Yes, you receive an AutoCAD Certified User certificate on completion.' },
      ],
    },
  },
  {
    slug: 'video-editing-course-vadodara',
    title: 'Video Editing',
    description: 'Professional video editing and post-production',
    icon: Video,
    duration: '2 months',
    level: 'Intermediate',
    gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
    accent: '#fc4a1a',
    tag: 'Trending',
    seo: {
      title: 'Video Editing Course in Vadodara | Premiere Pro Training',
      description: 'Learn professional video editing with Adobe Premiere Pro — color correction, audio & export — at Jayraj Computer Education, Ajwa Road, Vadodara.',
    },
    details: {
      overview: 'Master Adobe Premiere Pro for professional video editing, color correction, and audio mixing.',
      syllabus: ['Premiere Pro Interface', 'Video Editing Basics', 'Color Correction', 'Audio Editing', 'Export Settings'],
      certification: 'Video Editing Professional',
      prerequisites: 'Basic computer knowledge',
      careerProspects: ['Freelance Video Editor', 'YouTube / Social Media Content Editor', 'Junior Editor at production houses'],
      faqs: [
        { question: 'Can I freelance after this course?', answer: 'Yes, many students go on to take freelance and social-media editing work using the skills covered.' },
        { question: 'What software is covered?', answer: 'Adobe Premiere Pro, including color correction, audio editing and export settings for different platforms.' },
      ],
    },
  },
  {
    slug: 'python-course-vadodara',
    title: 'Python',
    description: 'Learn Python from basics to advanced concepts',
    icon: Code,
    duration: '4 months',
    level: 'Beginner–Advanced',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    accent: '#4facfe',
    tag: 'Best Seller',
    seo: {
      title: 'Python Course in Vadodara | Beginner to Advanced Training',
      description: 'Learn Python programming from basics to web development with Django at Jayraj Computer Education, Ajwa Road, Vadodara. 4-month course.',
    },
    details: {
      overview: 'Comprehensive Python programming course covering basics to advanced concepts including web development.',
      syllabus: ['Python Basics', 'Data Structures', 'OOP Concepts', 'File Handling', 'Web Development with Django'],
      certification: 'Python Developer Certificate',
      prerequisites: 'Basic computer literacy',
      careerProspects: ['Junior Python Developer', 'Automation / Scripting roles', 'Foundation for Data Science & Machine Learning careers'],
      faqs: [
        { question: 'Is Python a good first programming language?', answer: 'Yes — its simple, readable syntax makes it one of the most beginner-friendly languages to start with.' },
        { question: 'Does this course cover web development?', answer: 'Yes, the advanced portion of the course includes web development using Django.' },
      ],
    },
  },
  {
    slug: 'cpp-programming-course-vadodara',
    title: 'C++ Programming',
    description: 'Master object-oriented programming with C++',
    icon: Cpu,
    duration: '3 months',
    level: 'Intermediate',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    accent: '#a18cd1',
    tag: 'Core Skill',
    seo: {
      title: 'C++ Programming Course in Vadodara | OOP & DSA Training',
      description: 'Master object-oriented programming, data structures & the STL in C++ at Jayraj Computer Education, Ajwa Road, Vadodara.',
    },
    details: {
      overview: 'Learn C++ programming with focus on object-oriented programming and data structures.',
      syllabus: ['C++ Basics', 'OOP Concepts', 'Data Structures', 'Pointers & Memory', 'STL Library'],
      certification: 'C++ Programming Certificate',
      prerequisites: 'Basic programming knowledge',
      careerProspects: ['Junior Software Developer', 'Competitive programming preparation', 'Foundation for further languages (Java, C#)'],
      faqs: [
        { question: 'Do I need to know C before learning C++?', answer: 'Basic programming familiarity helps but isn\u2019t required — core syntax is covered from the start.' },
        { question: 'What will I be able to build after this course?', answer: 'You\u2019ll be comfortable writing object-oriented programs and using standard data structures and the STL library.' },
      ],
    },
  },
  {
    slug: 'c-programming-course-vadodara',
    title: 'C Programming',
    description: 'Foundation of programming with C language',
    icon: Code,
    duration: '2 months',
    level: 'Beginner',
    gradient: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
    accent: '#888',
    tag: 'Foundation',
    seo: {
      title: 'C Programming Course in Vadodara | Beginner Friendly',
      description: 'Build a strong programming foundation with C at Jayraj Computer Education, Ajwa Road, Vadodara. Covers syntax, logic & problem-solving.',
    },
    details: {
      overview: 'Learn the foundation of programming with C language, covering syntax, logic, and problem-solving.',
      syllabus: ['C Basics', 'Control Structures', 'Functions', 'Arrays & Strings', 'Pointers & Structures'],
      certification: 'C Programming Certificate',
      prerequisites: 'Basic computer knowledge',
      careerProspects: ['Foundation for C++ / Java / embedded systems careers', 'Junior programmer roles', 'Competitive programming preparation'],
      faqs: [
        { question: 'Is this a good starting point if I\u2019ve never coded before?', answer: 'Yes — C is widely taught as a first language because it builds strong fundamentals in logic and syntax.' },
        { question: 'What comes after this course?', answer: 'Most students continue on to C++ or Python once comfortable with C fundamentals.' },
      ],
    },
  },
  {
    slug: 'web-development-course-vadodara',
    title: 'Web Development',
    description: 'Build modern websites and web applications',
    icon: Globe,
    duration: '6 months',
    level: 'Beginner–Advanced',
    gradient: 'linear-gradient(135deg, #0fd850 0%, #f9f047 100%)',
    accent: '#0fd850',
    tag: 'Hot',
    seo: {
      title: 'Web Development Course in Vadodara | Full Stack Training',
      description: 'Learn HTML, CSS, JavaScript, React & Node.js at Jayraj Computer Education, Ajwa Road, Vadodara. 6-month full stack web development course.',
    },
    details: {
      overview: 'Complete web development course covering frontend and backend technologies.',
      syllabus: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Database Integration'],
      certification: 'Full Stack Developer Certificate',
      prerequisites: 'Basic computer literacy',
      careerProspects: ['Junior Web Developer', 'Frontend / Backend Developer', 'Freelance Website Builder'],
      faqs: [
        { question: 'Will I learn both frontend and backend?', answer: 'Yes — HTML/CSS/JavaScript/React on the frontend, and Node.js with database integration on the backend.' },
        { question: 'Can I freelance after completing this course?', answer: 'Yes, many students take on freelance website-building projects using these skills.' },
      ],
    },
  },
  {
    slug: 'tally-course-vadodara',
    title: 'Tally',
    description: 'Complete accounting and inventory management',
    icon: Calculator,
    duration: '2 months',
    level: 'Beginner',
    gradient: 'linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)',
    accent: '#4776e6',
    tag: 'Business',
    seo: {
      title: 'Tally Course in Vadodara | Accounting & GST Training',
      description: 'Learn Tally accounting, inventory management & GST configuration at Jayraj Computer Education, Ajwa Road, Vadodara. 2-month beginner course.',
    },
    details: {
      overview: 'Learn comprehensive accounting software for business financial management and GST compliance.',
      syllabus: ['Tally Basics', 'Accounting Entries', 'Inventory Management', 'GST Configuration', 'Reports Generation'],
      certification: 'Tally Certified Professional',
      prerequisites: 'Basic accounting knowledge helpful',
      careerProspects: ['Accounts Assistant', 'Billing Executive', 'GST Data Entry Support'],
      faqs: [
        { question: 'Do I need an accounting background?', answer: 'It helps but isn\u2019t required — the course covers accounting entries from the basics.' },
        { question: 'Does this course cover GST?', answer: 'Yes, GST configuration and compliance are part of the syllabus.' },
      ],
    },
  },
  {
    slug: 'tally-prime-course-vadodara',
    title: 'Tally Prime',
    description: 'Latest version of Tally with advanced features',
    icon: BarChart3,
    duration: '2 months',
    level: 'Intermediate',
    gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    accent: '#00c6ff',
    tag: 'Updated',
    seo: {
      title: 'Tally Prime Course in Vadodara with GST | Jayraj Computer Education',
      description: 'Learn Tally Prime with GST returns, banking reconciliation & advanced reporting at Jayraj Computer Education, Ajwa Road, Vadodara.',
    },
    details: {
      overview: 'Master the latest Tally Prime with enhanced features and improved user interface.',
      syllabus: ['Tally Prime Interface', 'Advanced Accounting', 'GST Returns', 'Banking & Reconciliation', 'Advanced Reports'],
      certification: 'Tally Prime Expert',
      prerequisites: 'Basic Tally knowledge recommended',
      careerProspects: ['Accounts Assistant', 'GST Practitioner Support', 'Billing Executive', 'Freelance Bookkeeper / Accountant'],
      faqs: [
        { question: 'Is prior Tally experience required?', answer: 'Basic Tally knowledge is recommended but not mandatory — the course covers the Tally Prime interface from the start.' },
        { question: 'Is this course GST-compliant?', answer: 'Yes, GST returns and compliance are a core part of the syllabus.' },
      ],
    },
  },
  {
    slug: '3ds-max-course-vadodara',
    title: '3Ds Max',
    description: '3D modeling, animation, and rendering software',
    icon: Cuboid,
    duration: '3 months',
    level: 'Intermediate',
    gradient: 'linear-gradient(135deg, #f7b733 0%, #ee0979 100%)',
    accent: '#ff6a00',
    tag: 'Creative',
    seo: {
      title: '3Ds Max Course in Vadodara | 3D Modeling & Animation',
      description: 'Learn 3D modeling, animation, rendering & texturing with 3Ds Max at Jayraj Computer Education, Ajwa Road, Vadodara. 3-month course.',
    },
    details: {
      overview: '3Ds Max course covering 3D modeling, animation, and rendering for games, film, and visualization.',
      syllabus: ['3Ds Max Basics', 'Modeling', 'Animation', 'Rendering', 'Texturing & Materials'],
      certification: '3Ds Max Professional',
      prerequisites: 'Basic computer skills and creative mindset',
      careerProspects: ['3D Modeler', 'Junior Animator', 'Visualization Artist (architecture / interior)'],
      faqs: [
        { question: 'Do I need artistic skill to join?', answer: 'A creative mindset helps, but the course teaches the software and techniques starting from the basics.' },
        { question: 'What industries use 3Ds Max skills?', answer: 'Gaming, film and animation, and architectural or interior visualization all commonly use 3Ds Max.' },
      ],
    },
  },
  {
    slug: 'graphic-design-course-vadodara',
    title: 'Graphic Design',
    description: 'Create stunning visual designs and artwork',
    icon: Palette,
    duration: '4 months',
    level: 'Beginner–Advanced',
    gradient: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
    accent: '#ff6a00',
    tag: 'Creative',
    seo: {
      title: 'Graphic Design Course in Vadodara | Photoshop & Illustrator',
      description: 'Learn Adobe Photoshop, Illustrator, logo design & design principles at Jayraj Computer Education, Ajwa Road, Vadodara. 4-month course.',
    },
    details: {
      overview: 'Complete graphic design course covering Adobe Creative Suite and design principles.',
      syllabus: ['Design Principles', 'Adobe Photoshop', 'Adobe Illustrator', 'Logo Design', 'Print & Digital Media'],
      certification: 'Graphic Design Professional',
      prerequisites: 'Creative mindset and basic computer skills',
      careerProspects: ['Junior Graphic Designer', 'Freelance Designer', 'Social Media Creative Assistant'],
      faqs: [
        { question: 'Which software will I learn?', answer: 'Adobe Photoshop and Illustrator, along with core design principles and logo design.' },
        { question: 'Can I freelance after this course?', answer: 'Yes, many students build freelance portfolios in logo design, social media graphics and print media.' },
      ],
    },
  },
  {
    slug: 'advanced-excel-course-vadodara',
    title: 'Advanced Excel',
    description: 'Master Excel with advanced formulas and analysis',
    icon: Database,
    duration: '1 month',
    level: 'Intermediate',
    gradient: 'linear-gradient(135deg, #1a9850 0%, #91cf60 100%)',
    accent: '#1a9850',
    tag: 'Quick Win',
    seo: {
      title: 'Advanced Excel Course in Vadodara | Formulas, VBA & Dashboards',
      description: 'Master advanced formulas, pivot tables, macros & dashboards at Jayraj Computer Education, Ajwa Road, Vadodara. 1-month intensive course.',
    },
    details: {
      overview: 'Advanced Excel course covering complex formulas, data analysis, and automation techniques.',
      syllabus: ['Advanced Formulas', 'Pivot Tables', 'Data Analysis', 'Macros & VBA', 'Dashboard Creation'],
      certification: 'Excel Expert Certificate',
      prerequisites: 'Basic Excel knowledge required',
      careerProspects: ['Data Analyst Support roles', 'Finance / Accounts Executive', 'Operations & MIS Executive'],
      faqs: [
        { question: 'Do I need to know basic Excel first?', answer: 'Yes, basic Excel familiarity (formulas, formatting) is required before joining this course.' },
        { question: 'How long is the course?', answer: 'It\u2019s an intensive 1-month course covering advanced formulas through to dashboard creation.' },
      ],
    },
  },
];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug);
