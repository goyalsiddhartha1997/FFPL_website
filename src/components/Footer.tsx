import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsSubmitted(true);
      // Clean name after a while or leave printed
    }
  };

  return (
    <footer className="bg-brand-blue-dark text-white pt-16 pb-8 border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-4 text-brand-accent">
                Contact
              </h3>
              <p className="text-white/70 text-sm mb-6 max-w-md">
                Have an urgent packaging inquiry? Enter your name below to connect with our consulting engineers instantly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white/10 border border-brand-accent/30 rounded-lg p-5 flex items-start gap-3.5 my-2">
                <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Consultation Initiated!</h4>
                  <p className="text-white/80 text-xs mt-1">
                    Thank you, <strong className="text-brand-accent">{name}</strong>. A flexible packaging expert will reach out to you or you can email us directly at <a href="mailto:info@fortuneflexipack.com" className="underline hover:text-brand-accent">info@fortuneflexipack.com</a>.
                  </p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setName(''); }} 
                    className="text-[11px] text-brand-accent underline mt-2 block hover:text-white cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name / Organization"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/5 border border-white/10 focus:border-brand-accent text-white px-4 py-3 rounded-md text-sm outline-none w-full transition-colors font-sans"
                />
                <button
                  type="submit"
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white px-5 py-3 rounded-md font-medium text-sm flex items-center gap-2 cursor-pointer transition-colors shrink-0"
                >
                  <span className="hidden sm:inline">Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Spacer / Quick links column */}
          <div className="hidden lg:col-span-2 lg:flex flex-col gap-3">
            <h4 className="font-display font-semibold text-sm tracking-widest text-white/50 uppercase">
              RESOURCES
            </h4>
            <button onClick={() => navigate('/about-us')} className="text-left text-sm text-white/70 hover:text-brand-accent transition-colors cursor-pointer">About Us</button>
            <button onClick={() => navigate('/machinery')} className="text-left text-sm text-white/70 hover:text-brand-accent transition-colors cursor-pointer">Machinery Division</button>
            <button onClick={() => navigate('/quality-assurance')} className="text-left text-sm text-white/70 hover:text-brand-accent transition-colors cursor-pointer">Quality Check</button>
            <button onClick={() => navigate('/plastic-packaging-use')} className="text-left text-sm text-white/70 hover:text-brand-accent transition-colors cursor-pointer">Applications</button>
            <button onClick={() => navigate('/product-type')} className="text-left text-sm text-white/70 hover:text-brand-accent transition-colors cursor-pointer">Product Range</button>
          </div>

          {/* Right Column - Address and Email details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h4 className="font-display font-semibold text-sm tracking-widest text-white/50 uppercase">
              HEAD OFFICE
            </h4>
            
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <div className="text-sm text-white/80 font-sans leading-relaxed">
                <p className="font-medium text-white mb-0.5">Fortune Flexipack Pvt Ltd</p>
                <p>Khasra no 274, NH-7, VPO Misserwala,</p>
                <p>Paonta Sahib, Distt Sirmaur, H.P. - 173021</p>
                <span className="inline-block px-1.5 py-0.5 mt-1.5 bg-brand-accent/15 border border-brand-accent/30 rounded text-[10px] text-brand-accent font-semibold tracking-wide">
                  HIMACHAL PRADESH, INDIA
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              <div className="text-sm">
                <p className="text-white/50 text-[11px] uppercase tracking-wider">Direct Correspondence</p>
                <a href="mailto:info@fortuneflexipack.com" className="hover:text-brand-accent text-white font-medium transition-colors">
                  info@fortuneflexipack.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-white/40 font-mono">
          <p>© 2026 FORTUNE FLEXIPACK PVT LTD. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <button onClick={() => navigate('/careers')} className="hover:text-brand-accent cursor-pointer">Careers</button>
            <span className="opacity-20">•</span>
            <button onClick={() => navigate('/contact')} className="hover:text-brand-accent cursor-pointer">Support</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
