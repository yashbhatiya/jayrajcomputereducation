import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { courses as allCourses } from '@/data/courses';
import { siteConfig } from '@/data/siteConfig';

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// Replace these three values with your own from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_rxbvu5v';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_c5v7csk';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'ysK6Hm2OwJ8z_d8TF';   // e.g. 'aBcDeFgHiJkLmNoP'
// ─────────────────────────────────────────────────────────────────────────────

// Optional: if you deploy the Node/Express backend already sitting in
// src/backend (currently unused — see SEO audit Section 8.4) and set
// VITE_BACKEND_URL in a .env file, every enquiry also gets saved to your own
// MongoDB in addition to the EmailJS notification, so you have a durable,
// queryable record even if an EmailJS email fails or its quota is hit. This
// is wrapped in try/catch and never blocks or fails the visible form
// submission if the backend isn't deployed or the env var isn't set.
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string | undefined;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // The object keys here must match the {{variables}} in your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      course: formData.course,
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Best-effort secondary save to your own backend — see comment above.
      if (BACKEND_URL) {
        fetch(`${BACKEND_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }).catch((err) => console.warn('Backend lead-save failed (non-blocking):', err));
      }

      toast({
        title: 'Inquiry Submitted!',
        description: "Thank you for your interest. We'll contact you soon!",
      });
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      setConsent(false);
    } catch (err) {
      console.error('EmailJS error:', err);
      toast({
        title: 'Something went wrong',
        description: 'Could not send your message. Please try again later, or WhatsApp us directly.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: siteConfig.contact.phone,
      href: siteConfig.contact.phoneHref,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: siteConfig.contact.address.full,
      href: undefined,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: siteConfig.contact.hours,
      href: undefined,
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
    },
  ];

  // Pulled from the same centralized course list used by the course grid
  // and Footer — previously this dropdown had its own hand-typed list that
  // had drifted out of sync with the real course names (SEO audit Section 8.1).
  const courseOptions = allCourses.map((c) => c.title);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Contact us for course inquiries and enrollment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info) => {
                const content = (
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-lg ${info.color} p-2.5 mr-4 shrink-0`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a
                    key={info.title}
                    href={info.href}
                    className="bg-muted/20 rounded-lg border border-border/50 p-4 transition-all hover:shadow-md block"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={info.title}
                    className="bg-muted/20 rounded-lg border border-border/50 p-4 transition-all hover:shadow-md"
                  >
                    {content}
                  </div>
                );
              })}
            </div>



            {/* Map embed — SEO audit Section 6.5. This is a plain address
                search embed (no API key needed) as a starting point; once
                your Google Business Profile is claimed (Section 6.1),
                regenerate this from Maps → Share → Embed a map on that
                listing instead so it also shows your pin, hours and rating. */}
            <div className="rounded-lg overflow-hidden border border-border/50">
              <iframe
                title={`${siteConfig.name} location on Ajwa Road, Vadodara`}
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59054.37689656893!2d73.2389282!3d22.319676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf8fa2ff8a81%3A0xb817eea283bebe2d!2sJayraj%20Computer%20Education!5e0!3m2!1sen!2sin!4v1788910986911!5m2!1sen!2sin`}
                //<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59054.37689656893!2d73.2389282!3d22.319676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf8fa2ff8a81%3A0xb817eea283bebe2d!2sJayraj%20Computer%20Education!5e0!3m2!1sen!2sin!4v1788910986911!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
              <h3 className="text-2xl font-semibold mb-2">Send us a Message</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible. Prefer instant replies?{' '}
                <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  WhatsApp us
                </a>{' '}
                instead.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name" className="sr-only">Your Name</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-email" className="sr-only">Your Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-phone" className="sr-only">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-course" className="sr-only">Select Course</Label>
                    <select
                      id="contact-course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select Course</option>
                      {courseOptions.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-message" className="sr-only">Your Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1"
                  />
                  <Label htmlFor="contact-consent" className="text-xs text-muted-foreground font-normal leading-snug">
                    I agree to be contacted about my enquiry and have read the{' '}
                    <Link to="/privacy-policy" className="text-primary underline">Privacy Policy</Link>.
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
