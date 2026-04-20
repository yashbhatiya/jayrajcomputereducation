import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// Replace these three values with your own from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_rxbvu5v';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_c5v7csk';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'ysK6Hm2OwJ8z_d8TF';   // e.g. 'aBcDeFgHiJkLmNoP'
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
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

      toast({
        title: 'Inquiry Submitted!',
        description: "Thank you for your interest. We'll contact you soon!",
      });
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      toast({
        title: 'Something went wrong',
        description: 'Could not send your message. Please try again later.',
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
      details: '+91 97278 94127',
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'jayrajcomputereducation@gmail.com',
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'B-23 Krishna Park Society, Ajwa Road, Vadodara - 390019',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 8:00 AM - 8:00 PM',
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
    },
  ];

  const courses = [
    'Basic Computer', 'CCC', 'DTP', 'AutoCAD', 'Premiere Pro',
    'Python', 'C++', 'C Programming', 'Web Development', 'Tally',
    'Tally Prime', 'Graphic Designing', 'Advanced Excel',
  ];

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
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-muted/20 rounded-lg border border-border/50 p-4 transition-all hover:shadow-md"
                >
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-lg ${info.color} p-2.5 mr-4 shrink-0`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  'Expert instructors with industry experience',
                  'Hands-on practical training',
                  'Job placement assistance',
                  'Flexible timing options',
                  'Certificate upon completion',
                ].map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
              <h3 className="text-2xl font-semibold mb-2">Send us a Message</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="bg-background"
                />

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