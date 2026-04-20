import { Shield, Eye, Lock, Database, Bell, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const sections = [
    {
        id: 'information-we-collect',
        icon: Database,
        title: 'Information We Collect',
        color: 'from-blue-600 to-cyan-500',
        iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
        content: [
            {
                subtitle: 'Personal Information',
                text: 'When you fill out our contact or enrollment form, we collect your full name, email address, phone number, and the course you are interested in. This information is used solely to respond to your inquiry and guide you through the enrollment process.',
            },
            {
                subtitle: 'Usage Information',
                text: 'We may automatically collect non-personal information such as browser type, pages visited, time spent on our website, and referring URLs. This helps us understand how visitors use our site and improve the user experience.',
            },
            {
                subtitle: 'Communication Records',
                text: 'If you contact us via email, phone, or our website form, we may retain a record of that communication to better assist you in the future.',
            },
        ],
    },
    {
        id: 'how-we-use',
        icon: Eye,
        title: 'How We Use Your Information',
        color: 'from-cyan-500 to-teal-400',
        iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-400',
        content: [
            {
                subtitle: 'Responding to Inquiries',
                text: 'We use your contact details exclusively to respond to course inquiries, provide enrollment information, and keep you informed about your application status.',
            },
            {
                subtitle: 'Course Updates & Announcements',
                text: 'With your consent, we may send you information about new courses, batch schedules, fee updates, or special offers via SMS, WhatsApp, or email.',
            },
            {
                subtitle: 'Improving Our Services',
                text: 'Aggregate, anonymized data may be used to analyze trends, improve our website, and enhance the quality of our courses and student experience.',
            },
            {
                subtitle: 'Legal Compliance',
                text: 'We may use or disclose your information where required by law, court order, or government regulation applicable in India.',
            },
        ],
    },
    {
        id: 'data-protection',
        icon: Lock,
        title: 'Data Protection & Security',
        color: 'from-blue-500 to-indigo-500',
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
        content: [
            {
                subtitle: 'Security Measures',
                text: 'We take reasonable precautions to protect your personal data from unauthorized access, disclosure, alteration, or destruction. Our contact forms use secure transmission protocols.',
            },
            {
                subtitle: 'Data Retention',
                text: 'We retain your personal information only as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law. Inquiry data is typically retained for up to 2 years.',
            },
            {
                subtitle: 'Third-Party Services',
                text: 'We use EmailJS to process contact form submissions. Your submitted data is transmitted through this service to reach us. EmailJS does not store your data beyond the delivery of the message. We do not sell or rent your personal information to any third party.',
            },
        ],
    },
    {
        id: 'your-rights',
        icon: Shield,
        title: 'Your Rights',
        color: 'from-indigo-500 to-blue-600',
        iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-600',
        content: [
            {
                subtitle: 'Access & Correction',
                text: 'You have the right to request access to the personal information we hold about you and to ask us to correct any inaccuracies.',
            },
            {
                subtitle: 'Withdrawal of Consent',
                text: 'You may withdraw your consent for us to contact you at any time by reaching out to us directly. We will promptly remove you from our communication list.',
            },
            {
                subtitle: 'Data Deletion',
                text: 'You may request that we delete your personal information from our records. We will honor such requests unless we are required to retain the data for legal reasons.',
            },
        ],
    },
    {
        id: 'cookies',
        icon: Bell,
        title: 'Cookies & Tracking',
        color: 'from-sky-500 to-blue-600',
        iconBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
        content: [
            {
                subtitle: 'What Are Cookies',
                text: 'Cookies are small text files stored on your device by your browser. Our website may use minimal cookies to remember your preferences and improve your browsing experience.',
            },
            {
                subtitle: 'Managing Cookies',
                text: 'You can control and delete cookies through your browser settings at any time. Note that disabling cookies may affect some features of our website.',
            },
            {
                subtitle: 'Analytics',
                text: 'We may use basic web analytics tools to understand traffic patterns on our website. These tools collect anonymized, aggregated data and do not identify individual users.',
            },
        ],
    },
];

const PrivacyPolicy = () => {
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
                        'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    backgroundPosition: '0 0',
                }}
            />

            {/* ── Ambient glows ── */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="fixed bottom-0 right-0 w-[400px] h-[300px] bg-cyan-400/8 rounded-full blur-3xl pointer-events-none z-0" />

            {/* ── Hero header ── */}
            <div className="relative z-10 pt-16 pb-12 text-center px-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield className="w-4 h-4" />
                    Legal Document
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Privacy{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Policy
                    </span>
                </h1>

                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-4">
                    Jayraj Computer Education is committed to protecting your personal information
                    and being transparent about how we use it.
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Last updated: April 2025
                </div>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-8 opacity-60" />
            </div>

            {/* ── Main layout ── */}
            <div className="relative z-10 container mx-auto px-4 pb-24 max-w-6xl">
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
                                Reach out to us directly for any privacy-related concerns.
                            </p>
                            <a
                                href="mailto:jayrajcomputereducation@gmail.com"
                                className="inline-block bg-white text-blue-600 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </aside>

                    {/* ── Policy sections ── */}
                    <main className="space-y-6">

                        {/* Intro card */}
                        <div className="relative rounded-2xl border border-blue-100 dark:border-blue-900/50 dark:bg-blue-950/20 p-7">

                            <p className="text-muted-foreground leading-relaxed">
                                This Privacy Policy explains how <strong className="text-foreground">Jayraj Computer Education</strong>,
                                located at B-23 Krishna Park Society, Ajwa Road, Vadodara – 390019, collects, uses, and
                                protects the personal information you provide when you interact with our website or enroll
                                in our courses. By using our website or submitting an inquiry, you agree to the terms
                                described in this policy.
                            </p>
                        </div>

                        {/* Dynamic sections */}
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="relative rounded-2xl border border-border/60 bg-card overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                            >
                                {/* top accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color}`} />

                                <div className="p-7">
                                    {/* Section heading */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-xl ${section.iconBg} flex items-center justify-center shadow-md`}>
                                            <section.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                                    </div>

                                    {/* Subsections */}
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

                        {/* Children's privacy */}
                        <div className="relative rounded-2xl border border-border/60 bg-card overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />
                            <div className="p-7">
                                <h2 className="text-xl font-bold text-foreground mb-3">Children's Privacy</h2>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Our courses are open to students of all ages. When a minor (under 18) enrolls,
                                    we request that a parent or guardian provide consent and contact information.
                                    We do not knowingly collect personal data from children without parental consent.
                                    If you believe we have inadvertently collected such information, please contact
                                    us immediately and we will delete it promptly.
                                </p>
                            </div>
                        </div>

                        {/* Changes to policy */}
                        <div className="relative rounded-2xl border border-border/60 bg-card overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
                            <div className="p-7">
                                <h2 className="text-xl font-bold text-foreground mb-3">Changes to This Policy</h2>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our
                                    practices or for legal, operational, or regulatory reasons. When we make changes,
                                    we will update the "Last updated" date at the top of this page. We encourage you
                                    to review this page periodically to stay informed about how we protect your information.
                                </p>
                            </div>
                        </div>

                        {/* Contact info footer card */}
                        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
                            <h2 className="text-xl font-bold mb-2">Contact Us About This Policy</h2>
                            <p className="text-blue-100 text-sm mb-6 max-w-lg">
                                If you have any questions, concerns, or requests regarding this Privacy Policy
                                or your personal data, please contact us through any of the following:
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

export default PrivacyPolicy;