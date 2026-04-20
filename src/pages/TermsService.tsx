import { ScrollText, GraduationCap, CreditCard, UserCheck, AlertTriangle, RefreshCw, Scale, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const sections = [
    {
        id: 'acceptance',
        icon: UserCheck,
        title: 'Acceptance of Terms',
        color: 'from-blue-600 to-cyan-500',
        iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
        content: [
            {
                subtitle: 'Agreement to Terms',
                text: 'By accessing our website, submitting an inquiry, or enrolling in any course at Jayraj Computer Education, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.',
            },
            {
                subtitle: 'Eligibility',
                text: 'Our courses are open to individuals of all ages. Students under the age of 18 must have explicit consent from a parent or legal guardian before enrolling. By enrolling a minor, the parent or guardian accepts these terms on their behalf.',
            },
            {
                subtitle: 'Modifications',
                text: 'Jayraj Computer Education reserves the right to update or modify these Terms at any time without prior notice. Continued use of our services after changes are posted constitutes your acceptance of the revised terms.',
            },
        ],
    },
    {
        id: 'enrollment',
        icon: GraduationCap,
        title: 'Course Enrollment & Conduct',
        color: 'from-cyan-500 to-teal-400',
        iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-400',
        content: [
            {
                subtitle: 'Enrollment Process',
                text: 'Enrollment is confirmed only upon receipt of the required course fee and completion of the registration form. Submitting an inquiry or interest form does not guarantee a seat in the batch. Seats are allocated on a first-come, first-served basis.',
            },
            {
                subtitle: 'Attendance',
                text: 'Regular attendance is strongly encouraged. A minimum attendance of 75% is required to be eligible for the course completion certificate. Students with lower attendance may not receive certification unless special circumstances are communicated and approved in advance.',
            },
            {
                subtitle: 'Code of Conduct',
                text: 'All students are expected to maintain respectful and professional behavior toward instructors, staff, and fellow students. Any form of harassment, cheating, plagiarism, or disruptive behavior may result in immediate expulsion without a refund.',
            },
            {
                subtitle: 'Course Materials',
                text: 'Any study materials, handouts, or resources provided during the course are for the personal educational use of enrolled students only. Redistribution, reproduction, or commercial use of these materials without written permission is strictly prohibited.',
            },
        ],
    },
    {
        id: 'fees-refunds',
        icon: CreditCard,
        title: 'Fees & Refund Policy',
        color: 'from-blue-500 to-indigo-500',
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
        content: [
            {
                subtitle: 'Course Fees',
                text: 'Course fees are communicated at the time of inquiry and must be paid as per the agreed schedule. Fees are subject to change for new batches. Enrolled students will not be affected by fee changes mid-course.',
            },
            {
                subtitle: 'Payment',
                text: 'Payments can be made in cash, bank transfer, or via UPI at the institute. A receipt will be issued for every payment made. Please retain your receipt as proof of payment.',
            },
            {
                subtitle: 'Refund Policy',
                text: 'Refund requests submitted within 7 days of enrollment and before the course commences are eligible for a full refund. Once the course has started, no refunds will be issued. In exceptional circumstances (medical emergencies with documentation), management may consider a partial credit toward a future batch.',
            },
            {
                subtitle: 'Batch Changes',
                text: 'Students may request a batch change (same course, different timing) once per enrollment at no extra charge, subject to seat availability. Requests must be made at least 3 days before the new batch starts.',
            },
        ],
    },
    {
        id: 'certification',
        icon: ScrollText,
        title: 'Certification',
        color: 'from-indigo-500 to-blue-600',
        iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-600',
        content: [
            {
                subtitle: 'Certificate of Completion',
                text: 'Students who successfully complete the course with the required attendance and, where applicable, pass the final assessment will be awarded a Certificate of Completion from Jayraj Computer Education.',
            },
            {
                subtitle: 'Government & Third-Party Certifications',
                text: 'For courses like CCC that involve government or external certifications (e.g., NIELIT), the institute assists with the registration process. However, the final certification is issued by the respective authority and is subject to their eligibility criteria and examination results.',
            },
            {
                subtitle: 'Validity of Certificate',
                text: 'Our institute certificates are issued for educational purposes and reflect the skills covered in our curriculum. Jayraj Computer Education does not guarantee employment outcomes solely on the basis of the certificate issued.',
            },
        ],
    },
    {
        id: 'liability',
        icon: AlertTriangle,
        title: 'Limitation of Liability',
        color: 'from-sky-500 to-blue-600',
        iconBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
        content: [
            {
                subtitle: 'No Employment Guarantee',
                text: 'While Jayraj Computer Education provides job placement assistance and career guidance, we do not guarantee employment or a specific salary upon course completion. Placement outcomes depend on individual performance, market conditions, and employer requirements.',
            },
            {
                subtitle: 'Accuracy of Information',
                text: 'We make every effort to ensure the accuracy of information on our website and in our course materials. However, Jayraj Computer Education shall not be liable for any errors, omissions, or outdated information that may appear from time to time.',
            },
            {
                subtitle: 'Force Majeure',
                text: 'Jayraj Computer Education shall not be held liable for any failure or delay in providing services caused by circumstances beyond our reasonable control, including natural disasters, government orders, power outages, or other force majeure events. In such cases, we will make every effort to reschedule affected classes.',
            },
            {
                subtitle: 'Third-Party Links',
                text: 'Our website may contain links to third-party websites for reference purposes. We are not responsible for the content, privacy practices, or terms of any external websites. Visiting such links is at your own risk.',
            },
        ],
    },
    {
        id: 'intellectual-property',
        icon: Scale,
        title: 'Intellectual Property',
        color: 'from-blue-600 to-cyan-400',
        iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-400',
        content: [
            {
                subtitle: 'Ownership',
                text: 'All content on the Jayraj Computer Education website — including text, graphics, logos, course materials, and layout — is the intellectual property of Jayraj Computer Education and is protected under applicable Indian copyright laws.',
            },
            {
                subtitle: 'Permitted Use',
                text: 'You may browse our website and download content for personal, non-commercial reference only. No part of our website content or course materials may be reproduced, distributed, or used commercially without our prior written consent.',
            },
            {
                subtitle: 'Student Work',
                text: 'Projects and assignments completed by students during the course remain the intellectual property of the student. However, Jayraj Computer Education reserves the right to use anonymized student work as examples in marketing materials, with the student\'s prior consent.',
            },
        ],
    },
    {
        id: 'changes-termination',
        icon: RefreshCw,
        title: 'Changes & Termination',
        color: 'from-cyan-600 to-indigo-500',
        iconBg: 'bg-gradient-to-br from-cyan-600 to-indigo-500',
        content: [
            {
                subtitle: 'Course Changes',
                text: 'Jayraj Computer Education reserves the right to modify course content, schedule, batch timings, or instructors at any time to improve quality or due to operational requirements. Students will be notified of significant changes in advance.',
            },
            {
                subtitle: 'Course Cancellation by Institute',
                text: 'In the rare event that a course or batch is cancelled by the institute (e.g., due to insufficient enrollment), enrolled students will receive a full refund of fees paid or the option to transfer to the next available batch.',
            },
            {
                subtitle: 'Termination of Enrollment',
                text: 'The institute reserves the right to terminate a student\'s enrollment without refund in cases of serious misconduct, violation of these terms, or non- payment of fees. Students will be informed of the reason for termination in writing.',
            },
        ],
    },
];

const TermsAndConditions = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-background">

            {/* ── Grid texture ── */}
            <div
                className="fixed inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    backgroundPosition: '0 0',
                }}
            />

            {/* ── Ambient glows ── */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] max-w-[80vw] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="fixed bottom-0 right-0 w-[300px] max-w-[50vw] h-[300px] bg-cyan-400/8 rounded-full blur-3xl pointer-events-none z-0" />

            {/* ── Hero header ── */}
            <div className="relative z-10 pt-16 pb-12 text-center px-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <ScrollText className="w-4 h-4" />
                    Legal Document
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Terms &{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Conditions
                    </span>
                </h1>

                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-4">
                    Please read these terms carefully before enrolling in any course at
                    Jayraj Computer Education. Your enrollment implies acceptance of these terms.
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Last updated: April 2025
                </div>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8 opacity-60" />
            </div>

            {/* ── Main layout ── */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-24 max-w-6xl">
                {/* Mobile TOC */}
                <div className="lg:hidden mb-8">
                    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                        <div className="p-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                                Contents
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {sections.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => scrollToSection(s.id)}
                                        className="flex items-center gap-2 text-left p-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
                                    >
                                        <div className={`w-6 h-6 rounded-md ${s.iconBg} flex items-center justify-center shrink-0`}>
                                            <s.icon className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="flex-1 leading-tight text-xs">{s.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">

                    {/* ── Sticky sidebar TOC ── */}
                    <aside className="hidden lg:block sticky top-8">
                        <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
                            <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                            <div className="p-5">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                                    Contents
                                </p>
                                <nav className="space-y-1">
                                    {sections.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => scrollToSection(s.id)}
                                            className="w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all group"
                                        >
                                            <div className={`w-7 h-7 rounded-lg ${s.iconBg} flex items-center justify-center shrink-0`}>
                                                <s.icon className="w-3.5 h-3.5 text-white" />
                                            </div>
                                            <span className="flex-1 leading-tight">{s.title}</span>
                                            <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Contact card */}
                        <div className="mt-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-5 text-white">
                            <p className="font-semibold mb-1">Questions?</p>
                            <p className="text-blue-100 text-xs mb-4 leading-relaxed">
                                Reach out to us for any questions about these terms before enrolling.
                            </p>
                            <a
                                href="mailto:jayrajcomputereducation@gmail.com"
                                className="inline-block bg-white text-blue-600 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </aside>

                    {/* ── Terms sections ── */}
                    <main className="space-y-6">

                        {/* Intro card */}
                        <div className="relative rounded-2xl border border-blue-100 dark:border-blue-900/50 dark:bg-blue-950/20 p-7">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-2xl" />
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms and Conditions govern your relationship with{' '}
                                <strong className="text-foreground">Jayraj Computer Education</strong> (located at
                                B-23 Krishna Park Society, Ajwa Road, Vadodara – 390019) when you use our website
                                or enroll in any of our courses. These terms apply to all students, visitors, and
                                anyone who interacts with our institute. Please read them carefully.
                            </p>
                        </div>

                        {/* Dynamic sections */}
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color}`} />

                                <div className="p-7">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-xl ${section.iconBg} flex items-center justify-center shadow-md`}>
                                            <section.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                                    </div>

                                    <div className="space-y-5">
                                        {section.content.map((item) => (
                                            <div key={item.subtitle} className="pl-4 border-l-2 border-blue-100 dark:border-blue-900/50">
                                                <h3 className="font-semibold text-foreground mb-1.5 text-sm">{item.subtitle}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Governing law */}
                        <div className="relative rounded-2xl border border-border/60 bg-card overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />
                            <div className="p-7">
                                <h2 className="text-xl font-bold text-foreground mb-3">Governing Law</h2>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    These Terms and Conditions are governed by and construed in accordance with the
                                    laws of India. Any disputes arising out of or in connection with these terms
                                    shall be subject to the exclusive jurisdiction of the courts located in
                                    Vadodara, Gujarat, India. We encourage students to resolve disputes amicably
                                    by contacting us directly before seeking legal remedies.
                                </p>
                            </div>
                        </div>

                        {/* Entire agreement */}
                        <div className="relative rounded-2xl border border-border/60 bg-card overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
                            <div className="p-7">
                                <h2 className="text-xl font-bold text-foreground mb-3">Entire Agreement</h2>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    These Terms and Conditions, together with our Privacy Policy, constitute the
                                    entire agreement between you and Jayraj Computer Education regarding your use
                                    of our services. If any provision of these terms is found to be unenforceable,
                                    the remaining provisions will continue in full force and effect.
                                </p>
                            </div>
                        </div>

                        {/* Contact footer card */}
                        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
                            <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
                            <p className="text-blue-100 text-sm mb-6 max-w-lg">
                                If you have any questions about these Terms and Conditions or need clarification
                                before enrolling, please reach out to us — we're happy to help.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { icon: Mail, label: 'Email', value: 'jayrajcomputereducation@gmail.com' },
                                    { icon: Phone, label: 'Phone', value: '+91 97278 94127' },
                                    { icon: MapPin, label: 'Address', value: 'B-23 Krishna Park Society, Ajwa Road, Vadodara – 390019' },
                                ].map((c) => (
                                    <div key={c.label} className="bg-white/15 rounded-xl p-4 backdrop-blur-sm">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <c.icon className="w-4 h-4 text-blue-100" />
                                            <span className="text-xs font-semibold text-blue-100 uppercase tracking-wide">{c.label}</span>
                                        </div>
                                        <p className="text-white text-xs leading-relaxed">{c.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;