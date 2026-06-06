import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      // Construct native mailto link as fallback/action trigger
      const subject = encodeURIComponent(`Fortune Flexipack Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:info@fortuneflexipack.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-5 bg-brand-blue-dark text-white p-8 md:p-10 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Corporate Headquarters
              </h3>
              <p className="text-white/60 text-sm mt-2 font-sans">
                Our ultra-modern circular weaving and lamination manufacturing facility stands ready to fulfill your high-volume packaging requests.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <div className="text-sm font-sans text-white/80 leading-relaxed">
                  <p className="font-semibold text-white">Facility Address</p>
                  <p>Khasra no 274, NH-7, VPO Misserwala,</p>
                  <p>Paonta Sahib, Distt Sirmaur,</p>
                  <p>Himachal Pradesh - 173021, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-white">General Inquiries</p>
                  <a href="mailto:info@fortuneflexipack.com" className="hover:text-brand-accent transition-colors">
                    info@fortuneflexipack.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Telephone Support</p>
                  <p className="text-white/80">+91 (Paonta Sahib line) - via info@fortuneflexipack.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Interactive Map */}
          <div className="mt-8 rounded-lg overflow-hidden border border-white/10 h-52 relative">
            <iframe
              title="Fortune Flexipack Paonta Sahib Factory Location Map"
              src="https://maps.google.com/maps?q=Khasra%20no%20274%20VPO%20Misserwala%20Paonta%20Sahib&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Input Form */}
        <div className="lg:col-span-7 p-8 md:p-10 bg-gray-50/50">
          <h3 className="font-display text-2xl font-bold text-brand-blue-dark tracking-tight mb-6">
            Send a Message
          </h3>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 flex items-start gap-4 animate-fade-in">
              <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-emerald-950">Inquiry Prepared Successfully!</h4>
                <p className="text-emerald-800 text-sm mt-1">
                  We have prepared your message and launched your device mail composer to complete secure sending. If it did not open automatically, please send your email manually to <strong className="font-medium text-emerald-950">info@fortuneflexipack.com</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="mt-4 text-xs text-brand-blue-light font-semibold underline hover:text-brand-accent cursor-pointer"
                >
                  Write another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-widest mb-1.5 font-sans">
                  Representative / Org Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name or business"
                  className="w-full bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-4 py-3 text-sm outline-none transition-all font-sans text-brand-blue-dark"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-widest mb-1.5 font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-4 py-3 text-sm outline-none transition-all font-sans text-brand-blue-dark"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-widest mb-1.5 font-sans">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91-XXXXX-XXXXX"
                    className="w-full bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-4 py-3 text-sm outline-none transition-all font-sans text-brand-blue-dark"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-widest mb-1.5 font-sans">
                  Packaging Requirements / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about film sizes, bag material specifications, lamination requirements, or estimated order quantities..."
                  className="w-full bg-white border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-lg px-4 py-3 text-sm outline-none transition-all resize-none font-sans text-brand-blue-dark"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-sans font-medium text-sm py-3 px-6 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <span>Compose Corporate Email</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
