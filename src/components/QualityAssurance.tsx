import { useState } from 'react';
import { 
  ShieldCheck, 
  ClipboardCheck, 
  Award, 
  FlaskConical, 
  CircleDot 
} from 'lucide-react';

// Inline Data Structure so the component is fully plug-and-play
interface QualityStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
}

const QUALITY_STEPS: QualityStep[] = [
  {
    stepNumber: 1,
    title: "Raw Material Inspection",
    description: "Before production begins, we closely examine and certify every input material.",
    details: [
      "Melt Flow Index (MFI) testing on incoming PP granules",
      "Thickness and moisture monitoring on raw PET and BOPP baseline films",
      "Chemical compound verification of food-safe pigments and lamination resins",
      "Odor-free testing on industrial organic solvents"
    ]
  },
  {
    stepNumber: 2,
    title: "In-Process Quality Control",
    description: "Vigilant testing directly on active manufacturing steps to catch and remedy variance.",
    details: [
      "Checking tape widths and GSM variance straight from the extrusion line",
      "Weave count (mesh density) audits per minute on circular looms",
      "Lamination adhesion validation to prevent peeling later",
      "Web tension monitoring to avoid stretching patterns"
    ]
  },
  {
    stepNumber: 3,
    title: "Print Quality Inspection",
    description: "Ensuring brand graphics are printed beautifully and align strictly with digital mockups.",
    details: [
      "Automated video scanners looking for color shift or pixel splashes",
      "Spectrophotometer verification matching absolute Pantone values",
      "Tape adhesion testing (ASTM block tape pulls) to verify ink bonds under stress",
      "Strict eye-mark registration checks for automatic packaging alignment"
    ]
  },
  {
    stepNumber: 4,
    title: "Finished Goods Testing",
    description: "Extreme stress limits testing on fully completed rolls and pouches.",
    details: [
      "Pouch seal-integrity tests by high pressure vacuum submersion",
      "Tensile strength testing of woven fabrics in warp and weft axes",
      "Drop tests on packed pouches to confirm seam safety",
      "Thickness confirmation across the entire roll profile"
    ]
  },
  {
    stepNumber: 5,
    title: "Packing & Dispatch Verification",
    description: "Final audits to ensure products arrive at our client facilities in mint condition.",
    details: [
      "Verify moisture-wicking silica gel packets in all shipping shipping boxes",
      "Check stretch wrapping around heavy pallets to prevent shifting",
      "Inspection of transport vehicles for leaks, dirt, or sharp edges",
      "Full documentation matching COA (Certificate of Analysis) with shipments"
    ]
  }
];

export default function QualityAssurance() {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const testingSensors = [
    { title: "Tensile Strong Scanning", tool: "Warp/Weft Test Grips", norm: "ASTM D-5034", focus: "Verifies fabric loading bounds up to 50kg." },
    { title: "Heated Seal Validation", tool: "High Pressure Solder Jaws", norm: "ASTM F-88", focus: "Confirms seam weld integrity under vertical storage." },
    { title: "Print Adhesion Tester", tool: "Block Tape Pull Scanner", norm: "ISO 2409", focus: "Proves ink bonding limits under rough handling." },
    { title: "GSM Precision Balance", tool: "Die-Cut Surface Scale", norm: "ISO 3801", focus: "Safeguards uniform thickness distribution on film rolls." },
    { title: "Water Vacuum Chamber", tool: "Pinhole Leak Submersion Tank", norm: "ASTM D-3078", focus: "Guarantees zero-leak airtight barrier seals for snacks." }
  ];

  return (
    <div id="quality-assurance-view" className="space-y-16 pb-20 bg-slate-55/30 animate-fade-in text-neutral-800">
      
      {/* Visual Header */}
      <section className="bg-[#0b1329] text-white py-20 text-center relative overflow-hidden border-b-4 border-[#f05a28] select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[#f05a28] font-bold text-xs uppercase tracking-[0.25em] block font-mono">
            ZERO CORNER CUTTING • GMP STANDARDS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            Quality Assurance Protocol
          </h1>
          <div className="h-1 w-24 bg-[#f05a28] mx-auto rounded-full my-6" />
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-sans font-medium leading-relaxed px-4">
            At Fortune Flexipack, quality is embedded in every step of our manufacturing process. We operate under strict quality governance, assuring absolute protection.
          </p>
        </div>
      </section>

      {/* 1. Stepper layout for QC steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 select-none">
          <span className="text-[#f05a28] font-bold text-xs uppercase tracking-widest block font-mono">THE FORTUNE PROTOCOL</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#0b1329] tracking-tight">5-Stage Inspection Stepper</h2>
          <div className="h-[3px] w-16 bg-[#f05a28] mx-auto rounded-full mt-3" />
          <p className="text-neutral-500 text-xs font-semibold pt-2 leading-relaxed">
            Toggle the stages below to review how our QA managers inspect fabrics and packaging batches in research loops.
          </p>
        </div>

        {/* STEP BUTTONS STRIP */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-1 overflow-hidden bg-white border border-neutral-200 shadow-sm p-1.5 rounded-xl">
          {QUALITY_STEPS.map((step) => {
            const isSelected = selectedStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setSelectedStep(step.stepNumber)}
                className={`w-full text-left px-5 py-4 border-l-4 sm:border-l-0 sm:border-t-0 rounded-lg transition-all duration-300 cursor-pointer select-none flex-1 flex items-center justify-between ${
                  isSelected
                    ? 'border-[#f05a28] md:border-l-4 bg-neutral-50 text-[#0b1329] font-bold'
                    : 'border-transparent text-neutral-500 hover:bg-neutral-50/50'
                }`}
              >
                <div className="flex items-center space-x-3.5 overflow-hidden">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 transition-colors duration-300 ${
                    isSelected ? 'bg-[#f05a28] text-white' : 'bg-neutral-100 text-neutral-500'
                  }`}>
                    0{step.stepNumber}
                  </span>
                  <span className={`text-[11px] uppercase tracking-wider font-bold truncate transition-colors duration-300 ${
                    isSelected ? 'text-[#0b1329]' : 'text-neutral-600'
                  }`}>
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* CARDS DISPLAY OF SELECTED STEP */}
        {QUALITY_STEPS.map((step) => {
          if (step.stepNumber !== selectedStep) return null;
          return (
            <div 
              key={step.stepNumber}
              className="bg-white border hover:border-[#f05a28]/30 border-neutral-200 p-8 sm:p-12 rounded-xl shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left transition-all duration-500"
            >
              <div className="lg:col-span-4 space-y-4 select-none">
                <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center text-[#f05a28]">
                  <ClipboardCheck size={28} className="stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest uppercase">STAGE PROOFS</span>
                  <p className="text-5xl font-display font-black text-[#0b1329] leading-none">STAGE 0{step.stepNumber}</p>
                  <p className="text-xs font-black text-neutral-700 uppercase tracking-widest pt-1.5">{step.title}</p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="text-neutral-600 text-sm leading-relaxed sm:text-base font-normal">
                  {step.description}
                </p>
                <div className="space-y-3 pt-3 border-t border-neutral-100/80">
                  <p className="text-[10px] uppercase text-neutral-400 font-bold tracking-widest font-mono">Compulsory Verification checkpoints:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-700">
                    {step.details.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <CircleDot size={12} className="text-[#f05a28] shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          );
        })}

      </section>

      {/* 2. Laboratory and Testing standards Table */}
      <section className="bg-slate-50 border-y border-neutral-200/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 select-none">
            <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest block">ADVANCED ANALYSIS TOOLS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0b1329] uppercase tracking-tight">In-House Quality Testing Equipment</h2>
            <div className="h-[3px] w-16 bg-[#f05a28] mx-auto rounded-full mt-3" />
            <p className="text-neutral-500 text-xs font-semibold pt-2 leading-relaxed">
              Our Paonta Sahib works laboratories are staffed with full-time testing analysts administering continuous trials.
            </p>
          </div>

          <div className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-[#0b1329] text-white uppercase tracking-wider text-[10px] font-mono">
                  <tr>
                    <th className="py-4.5 px-6 border-b border-[#0b1329]">Tested Parameter</th>
                    <th className="py-4.5 px-6 border-b border-[#0b1329]">Diagnostics Tool Used</th>
                    <th className="py-4.5 px-6 border-b border-[#0b1329] text-center">Compliance Standard Met</th>
                    <th className="py-4.5 px-6 border-b border-[#0b1329]">Functional Impact on Packaging</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-600">
                  {testingSensors.map((sensor, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors duration-150">
                      <td className="py-4 px-6 font-bold text-[#0b1329]">{sensor.title}</td>
                      <td className="py-4 px-6 text-neutral-500 font-medium">{sensor.tool}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="bg-slate-50 border border-neutral-200 text-neutral-700 px-3 py-1 rounded-full font-mono font-bold tracking-wide text-[10px]">
                          {sensor.norm}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-neutral-500 font-medium">{sensor.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Food grade and Safety Standard Declarations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-neutral-200 border-l-4 border-l-[#f05a28] bg-white rounded-r-xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 items-center text-left shadow-xs">
          <div className="w-16 h-16 bg-orange-100/50 border border-orange-100 rounded-lg flex items-center justify-center shrink-0 text-[#f05a28]">
            <FlaskConical size={28} className="stroke-[2.5]" />
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[#f05a28] font-mono text-xs font-bold tracking-widest block">FDA CERTIFICATION STATEMENT</span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0b1329] uppercase tracking-tight">Food-Grade Laminates &amp; Non-Toxic Inks</h3>
            </div>
            <p className="text-[#0b1329]/80 text-sm leading-relaxed font-semibold">
              For consumer foods like tea blends, powdered masalas, chips, pulses, and baby grains, we promise and execute maximum protection standards. Everything we process is manufactured using **100% Food-Grade, FDA-approved, virgin polymer substrates (BOPP, CPP, Polyester)**. 
            </p>
            <p className="text-xs text-neutral-450 font-medium leading-normal">
              Our 9-Color Rotogravure press aligns only **heavy-metal-free, food-safe pigments and lamination binders**, completely guaranteeing zero odor transmission or package-to-food chemical bleeding under temperature stress levels.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Commitment Corporate Pledge */}
      <section id="quality-pledge-strip" className="bg-[#0b1329] border-t border-white/5 text-white py-20 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <Award size={48} className="text-[#f05a28] mx-auto stroke-[1.5]" />
          <p className="text-[#f05a28] font-mono text-xs font-bold tracking-[0.25em] uppercase">OUR QUALITY GUARANTEE</p>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white leading-tight tracking-wide">
            Zero compromise. Consistent Strength. Customer Trust.
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-medium px-4">
            "At Fortune Flexipack, we guarantee that every dispatch of woven rolls and printed laminated pouched packs matches the approved target sample exactly. We resolve defects instantly and hold ourselves to absolute integrity in raw material densities."
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-slate-400">
              <ShieldCheck size={16} className="text-[#f05a28]" />
              <span>Plant Manager, Paonta Sahib Operations Core Division</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
