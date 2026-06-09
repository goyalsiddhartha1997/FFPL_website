import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Award, 
  Users, 
  CheckCircle,
  TrendingUp, 
  Star, 
  User,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info,
  Clock,
  Heart,
  Cpu,
  Compass,
  Hourglass,
  MapPin,
  Search,
  Check
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ContactForm from './components/ContactForm';
import Machinery from './components/Machinery';
import QualityAssurance from './components/QualityAssurance';

import { 
  useCases, 
  productsList, 
  HERO_BG_IMAGE, 
  FACTORY_IMAGE_1, 
  FACTORY_IMAGE_2, 
  WIDE_BANNER_IMAGE, 
  QUALITY_CONTROLLER_IMAGE, 
  WIDE_HDPE_FEATURE_IMAGE,
  LOGO_URL
} from './data';
import { useCasePages } from './useCasePages';
import { productPages } from './productPages';
import { machineryPages } from './machineryPages';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });
  const [productUseSearch, setProductUseSearch] = useState('');

  // Client-side router transition: handle forward/backward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Intercept all manual link clicks within any rendered rich text if necessary
  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  // Safe fallback if path is unrecognized
  const isPathValid = (path: string) => {
    if (path === '/' || path === '/about-us' || path === '/machinery' || path === '/quality-assurance' || path === '/plastic-packaging-use' || path === '/product-type' || path === '/careers' || path === '/contact') {
      return true;
    }
    if (useCasePages[path] || productPages[path]) {
      return true;
    }
    if (path.startsWith('/machinery/')) {
      return true;
    }
    return false;
  };

  const path = isPathValid(currentPath) ? currentPath : '/';

  // --- RENDER VIEWS ---

  // PAGE 1: HOME
  const renderHome = () => (
    <div className="space-y-20 pb-12">
      {/* Section 1 - Hero Banner */}
      <section className="relative min-h-[500px] lg:h-[600px] bg-slate-950 flex items-center justify-center text-center text-white overflow-hidden border-b border-gray-800">
        {/* Background Image - with a subtle blend/tint overlay and opacity to keep white text highly readable */}
        <div className="absolute inset-0">
          <img 
            src="https://assets.zyrosite.com/efGNDncQ59bzjOd5/untitled-design-2-9MntdQYn6huGGccx.png" 
            alt="Fortune Flexipack manufacturing backdrop" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/40"></div>
        </div>

        {/* Centered content with all text present DIRECTLY on the background image */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10 py-16 w-full flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl space-y-6 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/35 border border-orange-500/55 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-200 shadow-sm backdrop-blur-xs select-none">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-orange-400" />
              ISO 9001:2015 ACCREDITED
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Raising the bar in <span className="text-orange-400">flexible packaging</span> innovation
            </h1>
            <p className="text-white font-sans text-sm sm:text-base md:text-lg max-w-xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              We are leading manufacturers of PP fabric, laminated bags, and high-performance Flexible Packaging materials based in Northern India.
            </p>
            <div className="pt-3 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate('/plastic-packaging-use')}
                className="bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 select-none"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-black/45 hover:bg-black/60 text-white font-semibold px-6 py-3 rounded-md border border-white/25 cursor-pointer transition-all select-none backdrop-blur-xs hover:border-white/40 shadow-md"
              >
                Inquire Directly
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Our Products */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase font-sans">
            Our Products
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-blue-dark">
            What we offer
          </h2>
          <div className="w-24 h-1.5 bg-brand-blue-light mx-auto my-3 rounded-full"></div>
          <p className="text-gray-500 font-sans text-[15px] sm:text-base max-w-2xl mx-auto leading-relaxed mt-20 md:mt-2">
            Customized Flexible Packaging Solutions Catering to Various Industries
          </p>
        </div>

        {/* 2x2 settings matching layout and visuals of the attached image perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {[
            {
              id: 'pp-fabric-rolls',
              name: 'PP FABRIC ROLLS',
              desc: 'High-quality PP Fabric Rolls manufactured from woven polypropylene, providing superior durability, moisture resistance, and cost-effective packaging solutions.',
              img: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/3-USYc2GXKcDPdbG2r.png',
              path: '/product-type',
              points: [
                'High Tensile Strength & Load Capacity',
                'Excellent Moisture Resistance',
                'UV Stabilized Options Available'
              ]
            },
            {
              id: 'printed-laminated-rolls',
              name: 'PRINTED LAMINATED ROLLS',
              desc: 'At Fortune Flexipack, we offer premium quality Printed Laminated Rolls, with complimentary design consultation and services that help you elevate the overall appearance of your product.',
              img: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/printed-rolls-g8zSHRcStHNuFrl7.jpg',
              path: '/product-type',
              points: [
                'Complimentary design consultation and services',
                'Rotogravure printing for long-lasting impressions',
                'Premium quality raw materials'
              ]
            },
            {
              id: 'printed-laminated-woven-pp-bags',
              name: 'PRINTED & LAMINATED WOVEN PP BAGS',
              desc: 'Biaxial Orientation process results in increased toughness, enhanced clarity and quite improved stiffness.',
              img: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_11-bZr48izIsTxg23y4.png',
              path: '/product-type',
              points: [
                'Increased Toughness & Enhanced Clarity',
                'Improved Bag Stiffness and Strength',
                'High-speed Production and Custom Sizes'
              ]
            },
            {
              id: 'side-seal-pouches',
              name: 'SIDE SEAL POUCHES',
              desc: 'For uniform appearance and increased strength of the packaging, opt for Side Seal Pouches that offer enhanced protection.',
              img: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/ssp-CVLGNjOpsxs2s5MI.PNG',
              path: '/product-type',
              points: [
                'Balanced Barrier against Oxygen and Moisture',
                'Vacuum Packaging and Gas Venting Features',
                'Uniform Heat Seals with Zero Leakage'
              ]
            }
          ].map((prod) => (
            <div 
              key={prod.name}
              onClick={() => navigate(prod.path || '/product-type')}
              className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-350 cursor-pointer flex flex-col"
            >
              {/* Product Image Stage (No background gray box, completely transparent, much bigger image) */}
              <div className="h-80 w-full relative overflow-hidden bg-white border-b border-neutral-100 flex items-center justify-center">
                <img 
                  src={prod.img} 
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Header and Gradient overlay overlay on bottom half, exactly like the attached image */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-transparent"></div>
                
                {/* Round orange badge in top right, exactly like the attached image */}
                <div className="absolute top-4 right-4 bg-orange-600 text-white p-2.5 rounded-full shadow-md z-10 flex items-center justify-center">
                  <span className="w-5 h-5 flex items-center justify-center text-xs font-bold font-sans">★</span>
                </div>

                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                    {prod.name}
                  </h3>
                </div>
              </div>

              {/* Product Text Area and Specs Checklist, exactly like the attached image */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-sans">
                  {prod.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 font-sans">
                    <Sparkles className="w-4 h-4 text-orange-600" />
                    <span>ADVISED PACKAGING SPECS:</span>
                  </div>
                  <ul className="space-y-2.5">
                    {prod.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-neutral-800 text-sm font-semibold font-sans">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Green Organic Leaves Graphic Overlays in bottom corners matching mockup */}
              <div className="absolute bottom-0 left-0 w-12 h-10 select-none opacity-85 pointer-events-none group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-600/90 fill-current">
                  <path d="M0,100 C15,85 10,60 35,70 C20,65 10,80 0,100 Z" />
                  <path d="M0,100 C25,75 25,50 50,65 C30,55 15,75 0,100 Z" opacity="0.8" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-10 select-none opacity-85 pointer-events-none group-hover:opacity-100 transition-opacity scale-x-[-1]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-600/90 fill-current">
                  <path d="M0,100 C15,85 10,60 35,70 C20,65 10,80 0,100 Z" />
                  <path d="M0,100 C25,75 25,50 50,65 C30,55 15,75 0,100 Z" opacity="0.8" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - About Fortune Flexipack */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest text-brand-accent uppercase">
                Established June 2025
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-brand-blue-dark">
                About Fortune Flexipack
              </h2>
              <div className="w-12 h-1 bg-brand-accent rounded-full"></div>
              <p className="text-gray-700 font-sans text-sm md:text-base leading-relaxed">
                At Fortune Flexipack, we bring together youthful energy and decades of experience to drive every project we take on. Our foundation rests on teamwork, innovation, and a deep commitment to customer satisfaction.
              </p>
              <p className="text-gray-700 font-sans text-sm md:text-base leading-relaxed">
                Over the years, two values have guided our journey — nurturing long-term relationships and delivering excellence in everything we do. Whether working with our clients or within our own team, open communication and collaboration have always been at the heart of our growth story.
              </p>
              <div>
                <button
                  onClick={() => navigate('/about-us')}
                  className="bg-brand-blue-light hover:bg-brand-blue-dark text-white font-medium px-6 py-3 rounded-md inline-flex items-center gap-2 cursor-pointer transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="relative border border-gray-100 rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square max-h-[480px]">
              <img 
                src="https://i.imgur.com/AG5jefd.jpeg" 
                alt="Automatic packaging extruder" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue-dark/10"></div>
              {/* Dynamic stamp/badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-gray-100 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/15 flex items-center justify-center text-brand-accent shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display text-xs font-bold text-brand-blue-dark uppercase tracking-wider">100% Inspected</p>
                  <p className="text-[10px] text-gray-500 font-sans">Strict chemical and tear resistance checks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Product Use Cases (Alternating Layout) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest text-brand-accent uppercase">
            Most popular for
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-blue-dark">
            Our flexible pouches use cases
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-20">
          {/* Alternating rendering for first 4 use cases */}
          {useCases.slice(0, 4).map((uc, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={uc.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                <div className={`lg:col-span-6 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-video lg:aspect-4/3 rounded-xl overflow-hidden border border-gray-100 shadow-md">
                    <img 
                      src={uc.image} 
                      alt={`${uc.title} packaging`} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-350"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-5 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="font-mono text-xs font-bold tracking-widest text-brand-accent/80 uppercase">
                    APPLICATION 0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-brand-blue-dark tracking-tight">
                    {uc.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-brand-accent"></div>
                  <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                    {uc.text}
                  </p>
                  <div>
                    <button
                      onClick={() => navigate('/plastic-packaging-use')}
                      className="text-brand-blue-light hover:text-brand-accent font-semibold text-sm inline-flex items-center gap-1.5 cursor-pointer select-none group transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-8 text-center">
          <button
            onClick={() => navigate('/plastic-packaging-use')}
            className="bg-brand-blue-dark hover:bg-brand-accent hover:border-brand-accent text-white font-medium px-8 py-4 rounded-md inline-flex items-center gap-2 cursor-pointer transition-all shadow-md select-none border border-transparent"
          >
            Check our full range
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );

  // PAGE 2: ABOUT US
  const renderAboutUs = () => (
    <div className="space-y-20 pb-20 bg-slate-50/50 animate-fade-in text-neutral-800">
      {/* Redesigned Epic Dark Header */}
      <section className="bg-[#0b1329] text-white py-20 relative overflow-hidden text-center select-none">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 space-y-4">
          <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase">
            THE FORCE BEHIND THE PROTECTION
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase">
            Our Corporate Vision &<br />Team
          </h1>
          
          <div className="w-16 h-1 bg-[#f05a28] mx-auto my-6 rounded-full"></div>
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-sans font-medium px-4">
            Fortune Flexipack Pvt. Ltd. represents Paonta Sahib, H.P.'s elite center for specialized flexible lamination composites and high-tensile polypropylene woven bags.
          </p>
        </div>
      </section>

      {/* Floating Vision & Mission Overlap Area */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Our Corporate Vision (White with Left Orange Border) */}
          <div className="bg-white border-y border-r border-l-4 border-l-[#f05a28] border-neutral-200/60 p-8 sm:p-10 rounded-r-xl shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-lg text-[#f05a28]">
                  <Compass className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase">
                  GUIDING LIGHT
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#0b1329] tracking-tight uppercase">
                Our Corporate Vision
              </h2>
              <blockquote className="border-l-2 border-neutral-100 pl-4 text-neutral-600 italic text-sm sm:text-base leading-relaxed font-sans font-medium mt-4">
                "To remain the premium, most trusted partner for high-precision, heavy-duty polypropylene woven fabric rolls and multi-layer flexible lamination solutions across India and global markets."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>ESTD: JUNE 2025</span>
              <span className="text-[#f05a28] font-bold">● ACTIVE</span>
            </div>
          </div>

          {/* Card 2: Our Daily Mission (Dark Indigo with Left Subtle Accent) */}
          <div className="bg-[#0b1329] border-y border-l border-r-4 border-r-[#f05a28] border-white/5 p-8 sm:p-10 rounded-l-xl shadow-lg flex flex-col justify-between space-y-6 text-white">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-lg text-[#f05a28] border border-white/5">
                  <Hourglass className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase">
                  DAILY INCENTIVE
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Our Daily Mission
              </h2>
              <blockquote className="border-l-2 border-white/10 pl-4 text-slate-300 italic text-sm sm:text-base leading-relaxed font-sans font-medium mt-4">
                "Operational excellence, rapid compounding innovation, and complete client satisfaction through active calibration of state-of-the-art polymer machinery, sustainable thin film layouts, and skilled craftsmanship."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>TARGET GOAL 2026/2027</span>
              <span className="text-[#f05a28] font-bold">● SYNCHRONIZED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Advanced Paonta Sahib Campus Layout */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase block animate-pulse">
              FULLY VERTICAL FACILITIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0b1329] tracking-tight uppercase leading-none">
              Our Advanced Paonta<br />Sahib Campus
            </h2>
            <div className="w-14 h-[3px] bg-[#f05a28] rounded-full"></div>
            
            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-sans font-normal">
              <p>
                Spanning thousands of square meters, our unified manufacturing facility in Paonta Sahib (Himachal Pradesh, India) handles everything vertically.
              </p>
              <p>
                Operating high-speed Extrusion Tape Plants, Circular Shuttle Looms, Flexography Centers, and a state-of-the-art computerized 9-Color Rotogravure Printing station with inline quality scanning, our plant achieves zero dependency on foreign third-party rollers.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-3 text-neutral-800 font-mono text-xs font-bold tracking-wide uppercase bg-white border border-neutral-200/60 p-4 rounded-xl shadow-xs">
              <MapPin className="text-[#f05a28] w-5 h-5 flex-shrink-0" />
              <span>FACTORY LOCATION: DISTRICT SIRMAUR, HP</span>
            </div>
          </div>

          {/* Right Grid of 4 Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-neutral-150/80 shadow-xs hover:border-[#f05a28]/30 hover:shadow-md transition-all duration-300">
              <h4 className="font-display text-base font-black text-[#0b1329] tracking-tight uppercase">
                RAW TAPE OUTPUT
              </h4>
              <p className="text-neutral-500 font-sans text-xs leading-relaxed mt-2.5">
                In-house premium Extrusion Tape Plant produces high-tensile polypropylene ribbons with consistent thickness control.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-neutral-150/80 shadow-xs hover:border-[#f05a28]/30 hover:shadow-md transition-all duration-300">
              <h4 className="font-display text-base font-black text-[#0b1329] tracking-tight uppercase">
                SEAMLESS WEAVE
              </h4>
              <p className="text-neutral-500 font-sans text-xs leading-relaxed mt-2.5">
                Circular high-speed looms weave flawless protective fabric rolls with variable mesh indices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-neutral-150/80 shadow-xs hover:border-[#f05a28]/30 hover:shadow-md transition-all duration-300">
              <h4 className="font-display text-base font-black text-[#0b1329] tracking-tight uppercase">
                ROTOGRAVURE
              </h4>
              <p className="text-neutral-500 font-sans text-xs leading-relaxed mt-2.5">
                9-color multi-station press prints beautiful, pixel-perfect layouts with real-time computer-assisted registration.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border border-neutral-150/80 shadow-xs hover:border-[#f05a28]/30 hover:shadow-md transition-all duration-300">
              <h4 className="font-display text-base font-black text-[#0b1329] tracking-tight uppercase">
                BARRIER WELD
              </h4>
              <p className="text-neutral-500 font-sans text-xs leading-relaxed mt-2.5">
                High-temperature multi-station lamination bonds barrier-grade films with absolute seam structural integrity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Redesigned Corporate Values Section (Beautiful Deep Blue Backdrop) */}
      <section className="bg-[#0b1329] text-white py-16 px-4 select-none relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-2 space-y-12 relative z-10">
          <div className="text-center space-y-2">
            <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase">
              ETHICAL ANCHORS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Our Core Corporate Values
            </h2>
            <div className="w-12 h-[3px] bg-[#f05a28] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Grid of 5 values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Value 1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-start space-y-4 hover:bg-white/10 hover:border-[#f05a28]/40 transition-all duration-300">
              <div className="p-2 bg-[#f05a28]/25 rounded-lg text-[#f05a28] w-fit">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-display text-sm font-black tracking-tight uppercase text-white">
                QUALITY FIRST
              </h4>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Zero compromise on material formulations, seam strength limits, and print alignment register audits.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-start space-y-4 hover:bg-white/10 hover:border-[#f05a28]/40 transition-all duration-300">
              <div className="p-2 bg-[#f05a28]/25 rounded-lg text-[#f05a28] w-fit">
                <Cpu className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-display text-sm font-black tracking-tight uppercase text-white">
                ACTIVE INNOVATION
              </h4>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Continuous formulation R&D for recyclable plastics, mono-material coatings, and better impact barriers.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-start space-y-4 hover:bg-white/10 hover:border-[#f05a28]/40 transition-all duration-300">
              <div className="p-2 bg-[#f05a28]/25 rounded-lg text-[#f05a28] w-fit">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-display text-sm font-black tracking-tight uppercase text-white">
                ABSOLUTE TRANSPARENCY
              </h4>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                No hidden charges on cylinder setups, accurate weight sheets (GSM), and honest lead time declarations.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-start space-y-4 hover:bg-white/10 hover:border-[#f05a28]/40 transition-all duration-300">
              <div className="p-2 bg-[#f05a28]/25 rounded-lg text-[#f05a28] w-fit">
                <Clock className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-display text-sm font-black tracking-tight uppercase text-white">
                TIMELY DISPATCH
              </h4>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Synchronized raw polymer logistics and direct shipping channels, meeting clients' fast filling targets.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-start space-y-4 hover:bg-white/10 hover:border-[#f05a28]/40 transition-all duration-300">
              <div className="p-2 bg-[#f05a28]/25 rounded-lg text-[#f05a28] w-fit">
                <Heart className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-display text-sm font-black tracking-tight uppercase text-white">
                CUSTOMER FOCUS
              </h4>
              <p className="text-slate-400 font-sans text-xs leading-relaxed">
                Individual, on-site customer service directly matching film chemistry to exact market pouch structures.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Persistent Call To Action consultation bar */}
      <section className="bg-gradient-to-r from-[#0b1329] to-[#121c36] text-white py-16 px-4 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6 z-10">
          <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight uppercase">Get Free Consultation</h3>
          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-lg mx-auto font-medium">
            Find the best flexible packaging solution for your product. We render high strength laminated structures perfectly tailored for retail.
          </p>
          <div>
            <a
              href="mailto:info@fortuneflexipack.com"
              className="bg-[#f05a28] hover:bg-[#f05a28]/95 text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-[#f05a28]/20 inline-flex items-center gap-2 transform transition-all duration-300 hover:scale-105 uppercase tracking-wider text-xs"
            >
              Request a call
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  // PAGE 3: QUALITY ASSURANCE
  const renderQuality = () => (
    <QualityAssurance />
  );

  // PAGE 4: PRODUCT USE ALL 8 IN SPECIAL HIGH FIDELITY LAYOUT
  const renderProductUse = () => {
    // Filter matching sectors by search query
    const filteredCases = useCases.filter(uc => {
      const q = productUseSearch.toLowerCase().trim();
      if (!q) return true;
      return (
        uc.title.toLowerCase().includes(q) ||
        uc.text.toLowerCase().includes(q)
      );
    });

    const layoutDetails: Record<string, {
      title: string;
      desc: string;
      icon: any;
      advisedHeader: string;
      items: string[];
    }> = {
      'tea': {
        title: 'TEA PACKAGING',
        desc: "A morning in India often begins with a steaming cup of tea, a ritual shared by millions across the globe. For most, tea is more than a drink—it's a source of freshness enjoyed multiple times a day.",
        icon: Sparkles,
        advisedHeader: "ADVISED PACKAGING LAYOUT:",
        items: [
          "Center Seal Barrier Pouches",
          "Multi-Layer Metalized BOPP Rolls",
          "Stand-Up Resealable Zipper Packs",
          "Plain Laminated rolls"
        ]
      },
      'salt': {
        title: 'SALT PACKAGING',
        desc: "An Indian meal feels incomplete without a touch of salt, a sentiment shared across kitchens worldwide. Beyond its taste, salt is essential for maintaining health and enhancing every dish we enjoy daily.",
        icon: Layers,
        advisedHeader: "ADVISED PACKAGING LAYOUT:",
        items: [
          "High-Gauge Heavy-Duty Bottom Gusset Pouches",
          "Direct FFS Automatic Form-Fill Seal Roll Stock",
          "Corrosive-Safe Polymer Formulations",
          "Tear-Resistant Laminated Films"
        ]
      },
      'rice': {
        title: 'RICE PACKAGING',
        desc: "Premium display packaging utilizing high barrier values, clear transparent mesh windows, and robust handles to manage bulk loads of world-class grains.",
        icon: Cpu,
        advisedHeader: "ADVISED PACKAGING LAYOUT:",
        items: [
          "Laminated PP Woven Sacks",
          "Stand-Up Pouches with Windows",
          "Custom Flat Bottom Bags",
          "Double-Sealed Air-Vented Liner Rolls"
        ]
      },
      'packed-foods': {
        title: 'PACKED FOODS',
        desc: "When your product line includes a diverse range of consumer goods, it's essential to partner with a packaging supplier who can fulfill your evolving needs for packaging pouches.",
        icon: Compass,
        advisedHeader: "ADVISED PACKAGING LAYOUT:",
        items: [
          "Stand-Up Pouches with Windows",
          "Custom Flat Bottom Bags",
          "Laminated BOPP Roll stock",
          "High-Gloss Finished Barrier Pouches"
        ]
      },
      'dog-feed': {
        title: 'DOG FEED PACKAGING',
        desc: "Premium pets deserve premium protection. Dog feed and pet foods are highly sensitive to moisture, oxidation, and pest infestation. Our specialized multi-layer laminated bags feature excellent barrier materials.",
        icon: Heart,
        advisedHeader: "ADVISED PACKAGING LAYOUT:",
        items: [
          "Thick Side-Gusset Woven Bags for 5kg to 20kg",
          "Resealable Sliding Zipper Pouches",
          "High-Drawn Co-Extruded Protective Films",
          "Grease-Proof Laminated Poly Liners"
        ]
      },
      'pulses': {
        title: 'PULSES & LENTILS',
        desc: "Durable packaging protecting pulses from infestation and humidity while ensuring clear visibility of grain quality using custom-cut windows.",
        icon: ShieldCheck,
        advisedHeader: "ADVISED PACKAGING LAYOUT:",
        items: [
          "Center Seal Pouches",
          "Off-Center Seal Pouches",
          "Plain Laminated rolls",
          "Stand-Up Pouches with Windows"
        ]
      },
      'sugar': {
        title: 'SUGAR PACKAGING',
        desc: "Uniform, anti-slip poly woven sacks preventing puncture from crystalline sharp grains during transport and maintaining pure sweetness.",
        icon: Clock,
        advisedHeader: "ADVISED PACKAGING LAYOUT:",
        items: [
          "Micro-Perforated BOPP Laminated Sacks",
          "Seamless Heat-Weld Pillow Pouches",
          "Automatic High-Speed Packaging Roll stocks",
          "Multi-Layer Puncture-Safe Sacks"
        ]
      },
      'detergent': {
        title: 'DETERGENT PACKAGING',
        desc: "Chemically inert packaging structures designed to prevent ink degradation, leakage, and isolate active caustic ingredients.",
        icon: Award,
        advisedHeader: "ADVISED PACKAGING LAYOUT:",
        items: [
          "Chemical-Resistant Lamination Formulations",
          "High-Tear Strength Bottom Handle Bags",
          "Multi-Station Side Welded Sealers",
          "Anti-Static Protection Pouches"
        ]
      }
    };

    return (
      <div className="space-y-12 pb-20 bg-slate-50/40 select-none">
        {/* REDESIGNED INDUSTRIES WE SERVE HEADER */}
        <section className="bg-brand-blue-dark text-white py-14 border-b border-white/5 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 space-y-4">
            <span className="text-brand-accent font-mono text-xs font-bold tracking-widest uppercase block animate-pulse">
              MARKET MATCH PACKAGING
            </span>
            <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl tracking-normal uppercase leading-tight">
              INDUSTRIES WE SERVE
            </h1>
            <div className="w-16 h-1 bg-[#f05a28] mx-auto rounded-full"></div>
            <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
              Every product category demands dedicated barrier protection, puncture limits, and preservation indices. We match our films and fabrics to your specific industry standards.
            </p>
          </div>
        </section>

        {/* SEARCH & SYSTEM STATS BAR */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-10">
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                id="sector-search-input"
                type="text" 
                value={productUseSearch}
                onChange={(e) => setProductUseSearch(e.target.value)}
                placeholder="Search your sector (e.g. Tea, Salt, Rice, Dog Feed)..."
                className="w-full bg-slate-50 border border-gray-200 focus:border-[#f05a28] focus:bg-white text-gray-800 text-sm pl-11 pr-4 py-3 rounded-lg outline-none transition-all placeholder:text-gray-400 font-sans"
              />
            </div>

            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
              <span className="text-xs font-semibold text-brand-blue-dark flex items-center gap-1.5 bg-brand-blue-dark/5 border border-brand-blue-dark/10 py-2 px-4 rounded-lg select-none">
                <Info className="w-4 h-4 text-[#f05a28]" />
                Showing {filteredCases.length} of {useCases.length} registered sectors
              </span>
              {productUseSearch && (
                <button 
                  onClick={() => setProductUseSearch('')}
                  className="text-xs font-semibold text-[#f05a28] hover:underline cursor-pointer px-2"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>
        </section>

        {/* HIGH-FIDELITY BENTO SECTOR CARDS GRID */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          {filteredCases.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl border border-gray-150 shadow-xs max-w-md mx-auto space-y-4">
              <Info className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="font-display font-semibold text-gray-800 text-lg">No sectors match your query</h3>
              <p className="text-gray-500 font-sans text-xs max-w-xs mx-auto">Try typing another crop, product name, or chemical to explore flexible pack roll configurations.</p>
              <button 
                onClick={() => setProductUseSearch('')}
                className="bg-brand-blue-dark hover:bg-[#f05a28] text-white font-medium text-xs py-2 px-4 rounded-md transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((uc, idx) => {
                const details = layoutDetails[uc.id] || {
                  title: uc.title.toUpperCase() + ' PACKAGING',
                  desc: uc.text,
                  icon: Sparkles,
                  advisedHeader: "ADVISED PACKAGING LAYOUT:",
                  items: ["Center Seal Pouches", "Off-Center Seal Pouches", "Plain Laminated rolls"]
                };
                const Icon = details.icon;
                const isExpandedImage = ['tea', 'salt', 'packed-foods'].includes(uc.id);

                return (
                  <div 
                    key={uc.id}
                    id={`sector-card-${uc.id}`}
                    onClick={() => navigate(uc.link)}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      {/* Absolute Aspect ratio photo block */}
                      <div className="relative aspect-[4/3] bg-[#f8fafc] border-b border-gray-100 overflow-hidden flex items-center justify-center">
                        {/* Orange Floating badge on top right */}
                        <div className="absolute top-4 right-4 bg-[#f05a28] text-white p-2.5 rounded-full shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 stroke-[2.5]" />
                        </div>

                        <img 
                          src={uc.image} 
                          alt={`${uc.title} pack illustration`} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-104"
                        />

                        {/* Title text embedded elegantly at the bottom overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex items-end p-5">
                          <h3 className="font-display font-black text-lg md:text-xl text-white tracking-wide uppercase leading-tight select-none">
                            {details.title}
                          </h3>
                        </div>
                      </div>

                      {/* Card Content Segment */}
                      <div className="p-6 space-y-6">
                        <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed min-h-[64px]">
                          {details.desc}
                        </p>

                        <div className="pt-2 border-t border-gray-100">
                          <div className="flex items-center gap-1.5 text-[#f05a28] font-mono text-[11px] font-bold tracking-wider mb-3 select-none">
                            <Award className="w-4 h-4 text-[#f05a28]" />
                            {details.advisedHeader}
                          </div>
                          
                          <div className="space-y-2.5 text-left">
                            {details.items.map((item, idy) => (
                              <div key={idy} className="flex items-start gap-2.5 text-gray-700 text-xs sm:text-xs font-sans font-semibold">
                                <span className="text-[#10b981] mt-0.5 shrink-0">
                                  <CheckCircle className="w-4 h-4 fill-emerald-50 text-emerald-500 stroke-[2.5]" />
                                </span>
                                <span className="text-slate-700 leading-tight">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Uniform Card hover action link */}
                    <div className="px-6 py-4 bg-slate-50/70 border-t border-gray-150 flex items-center justify-between text-[#0b1329] group-hover:text-[#f05a28] group-hover:bg-slate-100/50 transition-colors">
                      <span className="font-sans font-extrabold text-xs uppercase tracking-wider">
                        Explore formulation
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    );
  };

  // PAGE 5: PRODUCT TYPE GRID OF 9
  const renderProductTypeGlobalList = () => {
    const productSpecsData: Record<string, {
      title: string;
      subtitle: string;
      icon: any;
      intro: string;
      highlights: string[];
      specs: {
        material: string;
        widths: string;
        gsm: string;
        uv: string;
        form: string;
      };
      specLabels?: {
        material?: string;
        widths?: string;
        gsm?: string;
        uv?: string;
        form?: string;
      };
    }> = {
      'printed-laminated-rolls': {
        title: "PRINTED LAMINATED ROLLS",
        subtitle: "PREMIUM SPEC / HIGH-SPEED FFS",
        icon: Sparkles,
        intro: "High-performance multilayer roll stock manufactured with solventless lamination to prevent odor contamination. Engineered with low COF for seamless runs on high-speed automated FFS lines.",
        highlights: [
          "Premium rotogravure printing up to 8-10 colors for exquisite graphics",
          "Solventless dry lamination process ensures food-grade safety, zero aroma transfer",
          "Superior heat-seal strength and barrier protection (moisture, aroma, gas, oxygen)",
          "Formulated with optimal low/high slip properties to match custom machine speeds",
          "Wound with uniform roll tension and flawless alignment to eliminate FFS wrinkling"
        ],
        specs: {
          material: "BOPP, PET (Glossy/Matte), CPP, CO-EX PE, Nylon, Al Foil, Paper",
          widths: "100 mm to 1200 mm (Standard Core IDs: 76 mm / 152 mm)",
          gsm: "Customized structures (PET/PE, PET/MET PET/PE, BOPP/CPP, etc.)",
          uv: "High barrier light exclusion & aroma retention",
          form: "Printed laminated reels ready for automatic packaging systems"
        },
        specLabels: {
          material: "SUBSTRATE MATERIAL",
          widths: "WIDTHS / CORE SIZE",
          gsm: "LAMINATED STRUCTURE",
          uv: "BARRIER PROTECTION",
          form: "SUPPLY FORM"
        }
      },
      'plain-laminated-rolls': {
        title: "PLAIN LAMINATED ROLLS (UNPRINTED)",
        subtitle: "TRANSPARENT DISPLAY SPEC",
        icon: Layers,
        intro: "Fully transparent laminated roll stocks designed for maximum inner product display. Represents a highly economical alternative ideal for product launches, pilots, or window-centered layout design.",
        highlights: [
          "Ultimate polymer clarity for direct consumer view of the product",
          "Economical choice that dramatically saves cylinder set-up costs",
          "Superior adhesive bonding strength preventing delamination issues",
          "Extremely consistent film thickness with low machine friction",
          "Ideal choice for custom labeling or minimalist branding concepts"
        ],
        specs: {
          material: "PET, BOPP, CPP, custom high-clarity LDPE formulations",
          widths: "50 mm to 1300 mm width",
          gsm: "Tailored to specific content weight ranges",
          uv: "Available with custom barrier stabilizers on request",
          form: "Plain raw unprinted roll stock"
        },
        specLabels: {
          material: "SUBSTRATE MATERIAL",
          widths: "WIDTHS / SCALE",
          gsm: "FILM THICKNESS",
          uv: "BARRIER STABILIZER",
          form: "SUPPLY FORM"
        }
      },
      'hdpepp-tapes-tap': {
        title: "PE/PP TAPES (TAP)",
        subtitle: "HIGH-TENACITY BASE SPEC",
        icon: Cpu,
        intro: "Referred to as the 'soul of woven packaging', our high-tenacity tapes provide the precise architectural strength behind premium circular woven layouts, ensuring Zero burst safety under heavy load pressures.",
        highlights: [
          "Precision-controlled denier index and elongation parameters",
          "Manufactured with 100% premium virgin polymer raw materials",
          "Excellent resistance to thermal shrink and micro-weaving errors",
          "Anti-fibrillating formulation ensures dust-free circular weaving",
          "Stable color fastness with customizable masterbatch additives"
        ],
        specs: {
          material: "100% Virgin Polypropylene (PP) or High Density Polyethylene (HDPE)",
          widths: "2.0 mm to 4.0 mm precision slit widths",
          gsm: "450 to 2000 Denier tensile capacity",
          uv: "Highly stabilized with UV inhibitors (up to 1600 hours on demand)",
          form: "Precision wound ribbons on steel or paper bobbins"
        },
        specLabels: {
          material: "POLYMER COMPOSITION",
          widths: "TAPE WIDTH SIZE",
          gsm: "TENACITY / DENIER",
          uv: "UV STABILIZATION",
          form: "SUPPLY FORMAT"
        }
      },
      'hdpepp-woven-fabrics-coateduncoated-wf': {
        title: "HDPE / PP WOVEN FABRICS (WF)",
        subtitle: "COATED / UNCOATED ROLL SPEC",
        icon: Compass,
        intro: "Robust flat or circular tubular woven fabrics. Essential structural sheets widely specified for heavy industrial bags, protection blankets, custom ground covers, and heavy transport bags.",
        highlights: [
          "Impressive strength-to-weight ratio for transport security",
          "Coated option provides a hermetic moisture barrier shield layer",
          "Uncoated option allows organic agricultural products to breathe",
          "Highly resistant to sharp crystallines, tears, and punctures",
          "Custom flat roll widths or tubular seamless sleeves"
        ],
        specs: {
          material: "HDPE or Polypropylene (PP) circular interlaced weaves",
          widths: "280 mm to 2000 mm flat circular width range",
          gsm: "45 GSM to 150 GSM tailored fabric weight",
          uv: "Coated/Uncoated with premium UV stabilization (up to 1000 hours)",
          form: "Continuous rolls with edge-hemming or perfect straight edge trimming"
        },
        specLabels: {
          material: "FABRIC STRUCTURE",
          widths: "FABRIC WIDTH / SCALE",
          gsm: "FABRIC GSM CAPACITY",
          uv: "UV DURABILITY",
          form: "SUPPLY FORM FORMAT"
        }
      },
      'pp-woven-bags-wpp': {
        title: "PP WOVEN BAGS (WPP)",
        subtitle: "HEAVY DUTY BULK PACK SPEC",
        icon: ShieldCheck,
        intro: "Heavy duty, lightweight, and incredibly cost-effective woven sacks. Broadly utilized for agricultural crops, construction mixes, chemical powder storage, and coarse bulk feed transport.",
        highlights: [
          "Reinforced heavy-duty bottom lock-stitch prevents bursting under load",
          "Moisture and rot-resistant material ideal for long warehouse storage",
          "Open mouth with neat easy-fill hemmed or heat-cut top surface",
          "Optional integration of LDPE inner pocket liner for extra barrier",
          "High coefficient of friction to block sliding or falling in stacks"
        ],
        specs: {
          material: "Premium virgin Polypropylene (Woven PP base with LLDPE liner)",
          widths: "300 mm to 900 mm flat widths (lengths customized as requested)",
          gsm: "50 GSM to 140 GSM reinforced fabric weight",
          uv: "Custom heat/UV protection compound options integrated",
          form: "Cut & hemmed open-mouth sacks with double stitch lock"
        },
        specLabels: {
          material: "SACK MATERIAL",
          widths: "SACK BAG WIDTHS",
          gsm: "BAG WEIGHT / GSM",
          uv: "SUNLIGHT / UV RESISTANCE",
          form: "FINISHED BAG FORMAT"
        }
      },
      'printed-and-laminated-woven-pp-bags-plwpp': {
        title: "PRINTED & LAMINATED WOVEN PP BAGS",
        subtitle: "HIGH-FIDELITY RETAIL SPEC",
        icon: Award,
        intro: "Beautiful packaging combining the solid strength of woven polypropylene layers with the high-resolution graphics of BOPP lamination film. Perfect for premium retail shelves.",
        highlights: [
          "Stunning rotogravure photographic-quality retail branding elements",
          "BOPP film lamination acts as complete grease, dust, and moisture barrier",
          "Increased fabric stiffness supports excellent retail standee layouts",
          "Fully scratch-resistant and spill-proof pristine visual exterior",
          "Excellent option for 5kg to 25kg premium grain packs"
        ],
        specs: {
          material: "BOPP Photographic Film + Polymer Lamination + Woven PP Fabric",
          widths: "300 mm to 650 mm preformed panel sizes",
          gsm: "60 GSM to 160 GSM composite laminated strength",
          uv: "BOPP barrier + ink stabilization preventing color fade",
          form: "Premium rotogravure printed bags (up to 8-10 colors)"
        },
        specLabels: {
          material: "COMPOSITE MATERIAL",
          widths: "BAG WIDTHS / SIZE",
          gsm: "COMPOSITE GSM SCALE",
          uv: "COLOR / UV PROTECTION",
          form: "PRINTED SUPPLY FORM"
        }
      },
      'printed-and-laminated-woven-pp-bottom-gusset-bags': {
        title: "BOPP WOVEN BOTTOM GUSSET BAGS",
        subtitle: "SHELF PRESENCE SPEC",
        icon: Star,
        intro: "Innovative packaging with an expandable flat floor bottom gusset. Stands completely upright to command attention on crowded retail aisles, while maximizing pack volume.",
        highlights: [
          "Flat bottom allows maximum vertical balance on grocery displays",
          "High-capacity bottom gusset expands smoothly upon filling space",
          "Seamless front, back, and side gussets for 360-degree brand design",
          "Extremely robust heat seals block leakages at critical corners",
          "Can incorporate custom die-cut carry handles or sliding zippers"
        ],
        specs: {
          material: "High-clarity BOPP printed film over strong PP woven substrate",
          widths: "250 mm to 600 mm width (Gusset depth: 50 mm to 150 mm)",
          gsm: "70 GSM to 150 GSM heavily reinforced structures",
          uv: "Sub-surface rotogravure ink shield against sunlight & fading",
          form: "Preformed stand-up bag with heat seal/double-stitch"
        },
        specLabels: {
          material: "COMPOSITE SUBSTRATE",
          widths: "BAG WIDTHS & GUSSET",
          gsm: "COMPOSITE THICKNESS / GSM",
          uv: "LIGHT & UV SECURE",
          form: "FINISHED SUPPLY FORMAT"
        }
      },
      'printed-and-laminated-woven-pp-retail-shopping-bags': {
        title: "RECYCLABLE PP RETAIL SHOPPING BAGS",
        subtitle: "REUSABLE ECOLOGICAL SPEC",
        icon: Heart,
        intro: "Beautifully styled, ultra-strong reusable carriers. Promotes your brand on premium glossy or matte laminated shopping bags designed to last hundreds of supermarket visits.",
        highlights: [
          "100% reusable and fully recyclable polymer formulation",
          "Heavy load support of over 15kg with cross-stitched threads",
          "Wipeable, water-repellent coating makes maintenance simple",
          "Woven PP loops or plastic tube handles for maximum carry comfort",
          "Folds down completely flat for easy compact bag storage"
        ],
        specs: {
          material: "Gloss/Matte Laminated Woven PP or Non-Woven Eco Polymer",
          widths: "250 mm to 500 mm flat widths (With side/bottom gusset)",
          gsm: "80 GSM to 160 GSM premium reusable density",
          uv: "UV fade-resistant high adhesion color pigments",
          form: "Complete tote bag with cross-stitched webbing loop handles"
        },
        specLabels: {
          material: "BAG FABRIC MATERIAL",
          widths: "RETAIL BAG WIDTH / SCALE",
          gsm: "REUSED BARRIER / GSM",
          uv: "INK UV COLOR PROTECTION",
          form: "SHOPPING TOTE FORMAT"
        }
      },
      'reprocessed-granules-rp': {
        title: "REPROCESSED PP GRANULES (RP)",
        subtitle: "CIRCULAR ECONOMY SPEC",
        icon: Clock,
        intro: "Pure, high-density recycled polypropylene pellets extruded from clean post-industrial trim waste. Perfect for plastic molding factories demanding cost-effective material options.",
        highlights: [
          "Zero-waste circular economy product derived from internal operations",
          "Consistently filtered melt matrix for jam-free molding machine runs",
          "Excellent cost-reduction compound to blend with virgin polymers",
          "High dimensional accuracy and stable color blend variables",
          "Suitable for plastic injection household goods and car parts"
        ],
        specs: {
          material: "100% Reprocessed Homopolymer Polypropylene (Recycled PP)",
          widths: "2.5 mm to 4.0 mm uniform pellet cuts",
          gsm: "8 to 22 g/10 min engineered Melt Flow Index (MFI)",
          uv: "Custom antioxidant filters and thermal process stabilizers",
          form: "Free-flowing uniform pellets packed in 25/50kg sack units"
        },
        specLabels: {
          material: "HOMOPOLYMER MATERIAL",
          widths: "PELLET SIZE / DIAMETER",
          gsm: "MELT FLOW INDEX (MFI)",
          uv: "CHEMICAL FILTERS / UV",
          form: "PACKAGING SUPPLY BAGS"
        }
      }
    };

    return (
      <div className="space-y-16 pb-24 bg-slate-50/50">
        {/* Redesigned Hero Banner matching the uploaded image */}
        <section className="bg-brand-blue-dark text-white py-16 border-b-4 border-[#f05a28] relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 space-y-4">
            <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase block">
              CERTIFIED COMPOSITES & SACKS
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight">
              OUR MANUFACTURING<br />RANGE
            </h1>
            <div className="w-16 h-1 bg-[#f05a28] mx-auto rounded-full"></div>
            <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              From heavy multi-ton woven fabrics to high-barrier printed laminates engineered on computer-controlled 9-color presses. Find your custom dimensions below.
            </p>
          </div>
        </section>

        {/* High-Fidelity Modern Alternating Lists with Technical Specs Boxes */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {productsList.map((item, idx) => {
            const specData = productSpecsData[item.id] || {
              title: item.name.toUpperCase(),
              subtitle: "PREMIUM STANDARD SPEC",
              icon: Sparkles,
              intro: item.description,
              highlights: item.benefits || ["High load capacity", "Strong seam safety", "Optimal custom moisture limit"],
              specs: {
                material: "Polypropylene (PP)",
                widths: "Customizable ranges",
                gsm: "Standard grade thickness",
                uv: "Optional",
                form: "Ready custom packs"
              }
            };

            const Icon = specData.icon;
            const isLeftImage = idx % 2 !== 0;

            return (
              <div 
                key={item.id}
                id={`product-row-${item.id}`}
                className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 relative"
              >
                {/* Visual watermark background number for each product */}
                <div className="absolute top-4 right-10 text-9xl font-display font-black text-slate-100/30 pointer-events-none select-none z-0">
                  0{idx + 1}
                </div>

                {/* IMAGE BOX SECTION: Clean white background with transparent image blending */}
                <div className={`relative h-96 lg:h-auto lg:min-h-[480px] bg-white overflow-hidden lg:col-span-5 z-10 flex items-center justify-center border-b lg:border-b-0 ${isLeftImage ? 'lg:order-1 lg:border-r border-slate-100' : 'lg:order-2 lg:border-l border-slate-100'}`}>
                  {/* Underlay white bg to ensure clean white display */}
                  <div className="absolute inset-0 bg-white"></div>
                  
                  {/* Subtle decorative target reticle in corners to mirror technical machinery aesthetic */}
                  <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-slate-200/80 pointer-events-none"></div>
                  <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-slate-200/80 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-slate-200/80 pointer-events-none"></div>
                  <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-slate-200/80 pointer-events-none"></div>

                  <img 
                    src={item.image} 
                    alt={item.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[800ms] hover:scale-[1.04] z-10"
                  />

                  {/* Top Left Category Identification Badge */}
                  <div className="absolute top-4 left-4 border border-slate-200/60 bg-slate-50/90 backdrop-blur-xs text-slate-800 font-mono text-[9px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded shadow-2xs z-20">
                    FORTUNE RANGE
                  </div>

                  {/* Floating active sector badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs border border-slate-150 text-brand-blue-dark p-2 rounded-xl shadow-xs z-20">
                    <Icon className="w-5 h-5 stroke-[2] text-[#f05a28]" />
                  </div>

                  {/* Bottom Line Status Indicator to mimic machinery page label style */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none select-none z-20">
                    <span className="text-[#f05a28] text-[9px] font-mono tracking-widest font-extrabold uppercase bg-orange-50 px-2 py-1 rounded">
                      SPEC // FORTUNE
                    </span>
                    <span className="text-slate-400 text-[9px] font-mono font-bold uppercase">
                      100% RECYCLABLE
                    </span>
                  </div>

                  {/* Bottom Gradient Line Detail */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f05a28]/15 to-transparent"></div>
                </div>

                {/* TEXT & DATA CONTENT SECTION: Replicating the attached Spec Card Layout */}
                <div className={`p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white lg:col-span-7 z-10 space-y-6 ${isLeftImage ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Title & Icon Header */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h2 className="font-display text-2xl md:text-3xl font-black text-brand-blue-dark tracking-tight leading-tight uppercase">
                        {specData.title}
                      </h2>
                      <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase block">
                        {specData.subtitle}
                      </span>
                    </div>
                    {/* Rounded Custom Spec Indicator Badge */}
                    <div className="hidden sm:flex rounded-xl border border-slate-200 p-3 bg-slate-50 text-slate-800 shadow-xs shrink-0">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  <hr className="border-t border-slate-200" />

                  {/* Intro description */}
                  <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                    {specData.intro}
                  </p>

                  {/* Operational Highlights checklist block */}
                  <div className="space-y-3">
                    <span className="font-mono text-[11px] font-black tracking-widest text-[#0b1329]/75 uppercase block">
                      OPERATIONAL HIGHLIGHTS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {specData.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5">
                          <span className="text-[#10b981] mt-0.5 shrink-0 bg-emerald-50 p-0.5 rounded-full">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          <span className="text-slate-700 text-xs font-medium leading-normal">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ENGINEERED MANUFACTURING SPECS CARD */}
                  <div className="bg-slate-50/70 border border-slate-200/60 rounded-2xl p-5 sm:p-6 space-y-4">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[#0b1329] uppercase border-b border-slate-200 pb-2.5 block">
                      ENGINEERED MANUFACTURING SPECS
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      <div className="space-y-1">
                        <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block">
                          {specData.specLabels?.material || "MATERIAL"}
                        </span>
                        <span className="text-slate-900 font-sans text-xs sm:text-sm font-bold block">
                          {specData.specs.material}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block">
                          {specData.specLabels?.widths || "WIDTHS / SCALE"}
                        </span>
                        <span className="text-slate-900 font-sans text-xs sm:text-sm font-bold block">
                          {specData.specs.widths}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block">
                          {specData.specLabels?.gsm || "GSM CAPACITY"}
                        </span>
                        <span className="text-slate-900 font-sans text-xs sm:text-sm font-bold block">
                          {specData.specs.gsm}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block">
                          {specData.specLabels?.uv || "UV STABILIZATION"}
                        </span>
                        <span className="text-slate-900 font-sans text-xs sm:text-sm font-bold block">
                          {specData.specs.uv}
                        </span>
                      </div>

                      <div className="space-y-1 sm:col-span-2">
                        <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block">
                          {specData.specLabels?.form || "FORM FORMAT"}
                        </span>
                        <span className="text-slate-900 font-sans text-xs sm:text-sm font-bold block">
                          {specData.specs.form}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interaction Buttons details CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => navigate(item.url)}
                      className="w-full sm:w-auto bg-brand-blue-dark hover:bg-[#f05a28] text-white font-sans text-xs font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center gap-1.5 transition-colors shadow-sm select-none cursor-pointer"
                    >
                      Explore formulation specs
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        const contactSection = document.getElementById('footer-contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-sans text-xs font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center gap-1.5 transition-all select-none cursor-pointer"
                    >
                      Request a quote
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  };

  // PAGES 6-13: DYNAMIC USE CASE DETAIL RENDER
  const renderUseCaseDetail = (route: string) => {
    const uc = useCasePages[route];
    if (!uc) return <div className="p-16 text-center">Use Case Content Stale</div>;

    return (
      <div className="space-y-16 pb-16 animate-fade-in">
        <section className="relative bg-brand-blue-dark text-white py-14 overflow-hidden">
          <div className="absolute inset-0">
            <img src={uc.bg} alt="" className="w-full h-full object-cover opacity-20 mix-blend-color" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6">
            <span className="text-brand-accent font-mono text-xs font-bold tracking-widest uppercase">APPLICATION DETAIL</span>
            <h1 className="font-display text-4xl font-bold uppercase mt-1 tracking-tight">{uc.title}</h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Text Segment */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-display text-3xl font-bold text-brand-blue-dark tracking-tight">
                {uc.heading} Packaging Solutions
              </h2>
              <div className="w-12 h-1 bg-brand-accent rounded-full"></div>
              
              <div className="space-y-6">
                {uc.paragraphs.map((p, i) => (
                  <div key={i} className="space-y-2 bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-display text-lg font-semibold text-brand-blue-dark">
                      {p.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base font-sans leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => navigate('/plastic-packaging-use')}
                  className="bg-gray-100 hover:bg-gray-200 text-brand-blue-dark font-semibold text-xs py-3 px-6 rounded-md cursor-pointer select-none"
                >
                  All Applications
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold text-xs py-3 px-6 rounded-md cursor-pointer select-none"
                >
                  Consult an Expert
                </button>
              </div>
            </div>

            {/* Sidebar Visual */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="aspect-4/3 rounded-xl overflow-hidden border border-gray-150 shadow-md">
                <img src={uc.image} alt={uc.heading} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>
              <div className="border border-brand-accent/20 bg-brand-accent/5 p-6 rounded-lg space-y-3">
                <h4 className="font-display text-sm font-bold text-brand-blue-dark uppercase tracking-widest">
                  Our Formulation Standard
                </h4>
                <p className="text-gray-600 text-xs font-sans leading-relaxed">
                  Every run of roll stock is inspected under simulated pressures and relative humidity extremes. This guarantees zero molecular transfers or loss of freshness during global trans-shipment.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  };

  // PAGES 14-22: DYNAMIC PRODUCT TYPE DETAIL RENDER
  const renderProductTypeDetail = (route: string) => {
    const pr = productPages[route];
    if (!pr) return <div className="p-16 text-center">Product Content Stale</div>;

    return (
      <div className="space-y-16 pb-16 animate-fade-in">
        <section className="bg-brand-blue-dark text-white py-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6">
            <span className="text-brand-accent font-mono text-xs font-bold tracking-widest uppercase">{pr.label}</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-1">{pr.title}</h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Core Specs / Introduction */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-blue-dark">Introduction</h2>
                <div className="w-10 h-0.5 bg-brand-accent"></div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-sans">
                  {pr.introduction}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h2 className="font-display text-lg font-bold text-brand-blue-dark">{pr.benefitsTitle}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {pr.benefits.map((bn, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{bn}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical block */}
              {pr.techDetails && (
                <div className="space-y-4 border border-gray-150 p-6 rounded-xl">
                  <h2 className="font-display text-lg font-bold text-brand-blue-dark">Technical Specifications & Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm">
                    {Object.entries(pr.techDetails).map(([key, val]) => {
                      if (!val) return null;
                      const techLabels: Record<string, string> = {
                        sizeRange: "Size/Width Range",
                        materials: "Material/Polymer Composition",
                        thickness: "Thickness Scale",
                        meshOfWeave: "Mesh Density Weave",
                        denierRange: "Tenacity / Denier Matrix",
                        laminationThickness: "Lamination Layer GSM",
                        colorMasterbatch: "Color / Pigment Fastness",
                        uvStabilization: "UV Durability / Sunlight Resistance",
                        weightCapacity: "Load Weight Capacity",
                        printingColors: "Printing Tech / Colors",
                        bottomClosure: "Bottom Seam Closure",
                        topMouthClosure: "Top Mouth Closure Style",
                        gussetDepth: "Gusset Expansion Depth",
                        meltFlowIndex: "Melt Flow Index (MFI)",
                        ashContent: "Ash Content Purity",
                        standardPacking: "Standard Packaging",
                        productionCapacity: "Monthly Production Output",
                        rawMaterialCombination: "Substrate / Foil Combinations"
                      };
                      const label = techLabels[key] || key.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
                      return (
                        <div key={key} className="space-y-1 bg-gray-50/50 p-3 rounded border border-gray-100 flex flex-col justify-between">
                          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{label}</p>
                          <p className="text-brand-blue-dark font-medium text-xs font-sans mt-0.5 leading-relaxed">{val}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Specialties */}
              {pr.specialties && (
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-brand-blue-dark">Our specialty or uniqueness</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pr.specialties.map((sp, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-4 rounded-lg flex items-start gap-2.5 shadow-2xs">
                        <div className="w-5 h-5 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          ✓
                        </div>
                        <p className="text-xs font-medium text-gray-700 font-sans">{sp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => navigate('/product-type')}
                  className="bg-gray-100 hover:bg-gray-200 text-brand-blue-dark font-semibold text-xs py-3.5 px-6 rounded-md cursor-pointer select-none"
                >
                  All Product Types
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold text-xs py-3.5 px-6 rounded-md cursor-pointer select-none"
                >
                  Inquire For Quotation
                </button>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="aspect-4/3 rounded-xl overflow-hidden border border-gray-150 shadow-md bg-white">
                <img 
                  src={pr.image} 
                  alt={pr.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="bg-brand-blue-dark text-white p-6 rounded-xl space-y-4">
                <h4 className="font-display text-sm font-semibold text-brand-accent uppercase tracking-wider">
                  Request Technical Quotation
                </h4>
                <p className="text-white/75 text-xs leading-relaxed font-sans">
                  Connect directly with Fortune Flexipack engineers. Our team will verify lamination microns and supply estimated transport leadtimes to Himachal Pradesh or worldwide endpoints.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white text-xs py-2.5 px-4 rounded font-bold w-full text-center block"
                >
                  Get Quotes Now
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  };

  // Dynamics machinery page detail
  const renderMachineryDetail = (route: string) => {
    // Check if path starts with '/machinery/' (e.g. '/machinery/bcs-prime')
    const key = route.replace('/machinery/', '');
    const m = machineryPages[key];
    if (!m) return <div className="p-16 text-center">Machinery Details Stale</div>;

    return (
      <div className="space-y-16 pb-16 animate-fade-in">
        <section className="bg-brand-blue-dark text-white py-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6">
            <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase">{m.label}</span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-1">{m.title}</h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Core Specs / Introduction */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-brand-blue-dark">Overview & Operational Purpose</h2>
                <div className="w-10 h-0.5 bg-[#f05a28]"></div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-sans font-medium">
                  {m.introduction}
                </p>
              </div>

              {/* Performance Features */}
              <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-150">
                <h2 className="font-display text-lg font-bold text-brand-blue-dark">{m.featuresTitle || "Core Performance & Operations"}</h2>
                <ul className="grid grid-cols-1 gap-3.5 pt-2">
                  {m.features.map((ft, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-sans font-medium leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#f05a28] shrink-0 mt-0.5" />
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Block */}
              {m.technicalSpecs && (
                <div className="space-y-4 border border-gray-150 p-6 rounded-xl">
                  <h2 className="font-display text-lg font-bold text-brand-blue-dark">Technical Parameters & Extrusion Blueprint</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm">
                    {Object.entries(m.technicalSpecs).map(([key, val]) => (
                      <div key={key} className="space-y-1 bg-gray-50/50 p-3 rounded border border-gray-100 flex flex-col justify-between">
                        <p className="text-gray-550 text-[10px] font-bold uppercase tracking-wider">{key}</p>
                        <p className="text-brand-blue-dark font-medium text-xs font-sans mt-0.5 leading-relaxed">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/machinery')}
                  className="bg-gray-100 hover:bg-gray-200 text-brand-blue-dark font-semibold text-xs py-3.5 px-6 rounded-md cursor-pointer select-none"
                >
                  All Plant Equipment
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-[#f05a28] hover:bg-orange-600 text-white font-semibold text-xs py-3.5 px-6 rounded-md cursor-pointer select-none"
                >
                  Contact Technical Sales
                </button>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="aspect-4/3 rounded-xl overflow-hidden border border-gray-150 shadow-md bg-white">
                <img 
                  src={m.image} 
                  alt={m.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="bg-[#0b1329] text-white p-6 rounded-xl space-y-4">
                <h4 className="font-display text-sm font-semibold text-[#f05a28] uppercase tracking-wider">
                  In-House Verification Certifications
                </h4>
                <p className="text-white/75 text-xs leading-relaxed font-sans">
                  Our plant machinery conforms perfectly to ISO 9001:2015 frameworks and certified clean room systems. Chemical polymers are strictly logged within our airtight SAP S4 Hana database before processing.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-[#f05a28] hover:bg-orange-600 text-white text-xs py-2.5 px-4 rounded font-bold w-full text-center block"
                >
                  Schedule Unit Inspection
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  };

  // PAGE 23: CAREERS
  const renderCareers = () => (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-brand-blue-dark text-white py-14 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-brand-accent font-mono text-xs font-bold tracking-widest uppercase font-semibold">GROW WITH US</span>
          <h1 className="font-display text-4xl font-bold tracking-tight mt-1">Careers</h1>
          <p className="text-white/70 max-w-xl text-sm font-sans mt-2">Join the Fortune Flexipack Team</p>
        </div>
      </section>

      {/* Main Careers Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">
        <div className="space-y-5">
          <p className="text-gray-700 font-sans text-base leading-relaxed">
            At Fortune Flexipack, we are always looking for talented, passionate, and driven individuals who want to grow with us. We are a young and dynamic company that values innovation, teamwork, and a commitment to excellence. Whether you are an experienced professional or a fresh graduate, Fortune Flexipack offers an environment where you can learn, contribute, and build a rewarding career in the flexible packaging industry.
          </p>
        </div>

        {/* Why work with us */}
        <div className="space-y-4 bg-gray-50 p-8 rounded-xl border border-gray-100">
          <h2 className="font-display text-xl font-bold text-brand-blue-dark tracking-tight">
            Why Work With Us?
          </h2>
          <div className="w-8 h-1 bg-brand-accent rounded"></div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 uppercase tracking-wider font-semibold text-[11px] text-gray-500">
            {[
              "Dynamic and collaborative work culture",
              "Opportunities for learning and career growth",
              "Work with cutting-edge manufacturing technology",
              "Be part of a company that is revolutionizing flexible packaging in India"
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-sans normal-case tracking-normal font-medium">
                <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Openings */}
        <div className="space-y-4 border border-gray-150 p-8 rounded-xl">
          <h2 className="font-display text-xl font-bold text-brand-blue-dark tracking-tight">
            Current Openings & Submissions
          </h2>
          <div className="w-8 h-1 bg-brand-accent rounded"></div>
          <p className="text-gray-600 font-sans text-sm leading-relaxed">
            We are currently building our team across various functions. If you are interested in joining Fortune Flexipack, please send your resume to: <a href="mailto:info@fortuneflexipack.com" className="font-semibold text-brand-blue-light hover:underline">info@fortuneflexipack.com</a> with the subject line <strong className="font-mono text-brand-accent">'Application – [Position you are applying for]'</strong>.
          </p>
          <div className="pt-2">
            <a
              href="mailto:info@fortuneflexipack.com?subject=Application - Fortune Flexipack"
              className="bg-brand-blue-light hover:bg-brand-accent text-white px-6 py-3 rounded-md inline-flex items-center gap-2 cursor-pointer transition-all font-medium text-sm shadow-sm font-sans"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  // PAGE 24: CONTACT
  const renderContact = () => (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-brand-blue-dark text-white py-14 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <span className="text-brand-accent font-mono text-xs font-bold tracking-widest uppercase">GET IN TOUCH</span>
          <h1 className="font-display text-4xl font-bold tracking-tight mt-1">Contact Us</h1>
          <p className="text-white/70 max-w-xl text-sm font-sans mt-2">Get in touch with Fortune Flexipack</p>
        </div>
      </section>

      {/* Form and Map Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <ContactForm />
      </section>
    </div>
  );

  // Router dispatcher
  const renderRouteView = () => {
    switch (path) {
      case '/':
        return renderHome();
      case '/about-us':
        return renderAboutUs();
      case '/machinery':
        return <Machinery navigate={navigate} />;
      case '/quality-assurance':
        return renderQuality();
      case '/plastic-packaging-use':
        return renderProductUse();
      case '/product-type':
        return renderProductTypeGlobalList();
      case '/careers':
        return renderCareers();
      case '/contact':
        return renderContact();
      default:
        // Match dynamic use case slugs
        if (useCasePages[path]) {
          return renderUseCaseDetail(path);
        }
        // Match dynamic products slugs
        if (productPages[path]) {
          return renderProductTypeDetail(path);
        }
        // Match dynamic machinery detail slugs
        if (path.startsWith('/machinery/')) {
          return renderMachineryDetail(path);
        }
        // Strict fallback
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-brand-accent/20">
      {/* Dynamic SEO Tag Updates based on URL */}
      <SEO path={path} />

      {/* Global Navbar */}
      <Header currentPath={path} navigate={navigate} />

      {/* Dynamic Page Views with Smooth Motion Fade transitions */}
      <main className="flex-grow">
        <motion.div
          key={path}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
        >
          {renderRouteView()}
        </motion.div>
      </main>

      {/* Global Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}
//update
