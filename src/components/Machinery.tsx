import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Workflow, 
  Layers, 
  FileCheck, 
  ArrowUpRight, 
  Hourglass, 
  Info, 
  CheckCircle, 
  Compass, 
  ChevronRight,
  ShieldAlert,
  Sparkles,
  Sliders,
  Printer,
  Wrench,
  Gauge
} from 'lucide-react';

interface MachineItem {
  id: string;
  name: string;
  stageWord: string;
  category: 'weaving-extrusion' | 'barrier-lamination' | 'printing' | 'bag-forming';
  categoryLabel: string;
  description: string;
  image: string;
  specs: string[];
  calibrationText: string;
  safetyGrade: string;
  icon: any;
}

export default function Machinery({ navigate }: { navigate: (path: string) => void }) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'weaving-extrusion' | 'barrier-lamination' | 'printing' | 'bag-forming'>('all');

  const machines: MachineItem[] = [
    {
      id: 'tape-plant-pp',
      name: 'Tape plant PP Fabric',
      stageWord: 'TAPE PLANT',
      category: 'weaving-extrusion',
      categoryLabel: 'Extrusion & Weaving',
      description: 'The starting point of our high-strength woven structures. Raw polypropylene synthetic resins are formulated, melted, sheeted, slit, and heat-drawn into highly resilient premium tapes with unmatched molecular orientation.',
      image: 'https://i.imgur.com/xiC1aXd.jpeg',
      specs: [
        'High-capacity continuous melt throughput of 350 kg/hr',
        'Extremely precise computer-controlled automatic die thickness adjustment',
        'Optimized drawing ovens for superior grain alignment and structural strength',
        'Full-automatic magnetic waste collection and in-line scrap recycling system'
      ],
      calibrationText: 'CALIBRATION INTERVAL: DAILY AUTOMATED',
      safetyGrade: 'CERTIFIED FOOD GRADE',
      icon: Cpu
    },
    {
      id: 'circular-looms',
      name: '34 Looms 350 kgs per hour',
      stageWord: 'LOOMS',
      category: 'weaving-extrusion',
      categoryLabel: 'Extrusion & Weaving',
      description: 'Our core weaving block comprises 34 high-speed circular shuttle looms operating in synchronized synergy. They weave PP tapes into flawless, robust cylindrical fabric sleeves with high mechanical resistance.',
      image: 'https://2.imimg.com/data2/UY/SA/MY-2210333/5-500x500.jpg',
      specs: [
        '34 active multi-shuttle high-yield weaving machines',
        'Excellent output capacity of 350 kgs of woven fabric per hour',
        'Automatic warp and weft breaking sensors ensuring zero-defect fabric rolls',
        'Configurable mesh sizing and weave density (8x8 to 15x15 ends per inch)'
      ],
      calibrationText: 'CALIBRATION INTERVAL: DAILY AUTOMATED',
      safetyGrade: 'CERTIFIED FOOD GRADE',
      icon: Workflow
    },
    {
      id: 'extrusion-lamination',
      name: 'Extrusion lamination',
      stageWord: 'LAMINATION',
      category: 'barrier-lamination',
      categoryLabel: 'Barrier Lamination',
      description: 'Our modern double-sided extrusion lamination machinery applies a direct molten polymer bonding matrix on woven fabric at extreme pressure, guaranteeing complete sealing and high barrier resistance.',
      image: 'https://cygnetmachinery.com/wp-content/uploads/2024/07/extrusion-lamination-coating-machine.jpeg',
      specs: [
        'Fast polymer melt speed of up to 250 meters/minute laminated raw rolls',
        'Dual-sided corona discharge treaters for high ink/glue surface adhesion',
        'Multilayer barrier film capability (BOPP, PET, CPP, Paper laminate sheets)',
        'Super-polished water cooling rolls for immediate, permanent polymer seal'
      ],
      calibrationText: 'CALIBRATION INTERVAL: REAL-TIME CONTINUOUS',
      safetyGrade: 'CERTIFIED FOOD GRADE',
      icon: Layers
    },
    {
      id: 'flexo-printing',
      name: 'Flexo printing',
      stageWord: 'PRINT BLOCK',
      category: 'printing',
      categoryLabel: 'High-Fidelity Printing',
      description: 'High-yield direct-to-bag printer optimized for fast turnaround runs, bold text, and solid background color registration. High durability plates ensure cost efficiency.',
      image: 'https://cpimg.tistatic.com/10856058/b/4/Flexographic-Bag-To-Bag-Printing-Machine..jpg',
      specs: [
        'High-speed impressions of up to 150 strokes/minute directly on fabric rolls',
        'Precision engraved ceramic Anilox rolls for consistent, even ink deposit',
        'Unified mechanical register lockups keeping color alignments precise',
        'Drying tunnel system with continuous thermal air recirculation grids'
      ],
      calibrationText: 'CALIBRATION INTERVAL: EVERY SHIFT',
      safetyGrade: 'INDUSTRIAL STABILITY',
      icon: Printer
    },
    {
      id: 'color-rotogravure',
      name: '9 color rotogravure machine',
      stageWord: 'GRAVURE',
      category: 'printing',
      categoryLabel: 'High-Fidelity Printing',
      description: 'The pinnacle of our high-definition print capabilities. Specially engineered to print on flexible films (BOPP, PET, etc.) before we laminate, yielding premium photo-realistic visual depth.',
      image: 'https://images.jdmagicbox.com/quickquotes/images_main/professional-9-color-rotogravure-printing-machine-803248219-d8ttlkj6.jpg',
      specs: [
        '9 independent high-volume print cylinders for advanced multi-tone colors',
        'High speed roll feeds of up to 300 meters/minute with laser alignment',
        'Active BST electronic camera tracking for automatic micro-second register sync',
        'Zero-odor solvent recovery ovens safeguarding food-grade safety standards'
      ],
      calibrationText: 'CALIBRATION INTERVAL: REAL-TIME SENSOR FEED',
      safetyGrade: 'CERTIFIED FOOD GRADE',
      icon: Sparkles
    },
    {
      id: 'leader-machine',
      name: 'Leader machine',
      stageWord: 'CONVERSION',
      category: 'bag-forming',
      categoryLabel: 'Bag Conversion',
      description: 'Fully automated high-precision cutting, bottom folders, and industrial-grade high-speed stitching system. Direct-from-roll processing ensures structural unity and seamless delivery flow.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/XS/KR/FE/100775959/non-woven-shopping-bag-making-machine.jpg',
      specs: [
        'Complete production yield of 45 to 60 bags per minute fully folded and sewn',
        'High-accuracy Japanese Omron PLC controller and advanced servo motors',
        'Integrated hot thermo alloy cutters with mechanical fold-guiding plates',
        'Automatic counting, staking, and kicker conveyor sorting output modules'
      ],
      calibrationText: 'CALIBRATION INTERVAL: DAILY AUTOMATED',
      safetyGrade: 'CERTIFIED FOOD GRADE',
      icon: Compass
    },
    {
      id: 'tuber-machine',
      name: 'Tuber machine',
      stageWord: 'TUBER',
      category: 'bag-forming',
      categoryLabel: 'Bag Conversion',
      description: 'Advanced high-precision longitudinal gluing line for custom flat-bottom valve sacks, multi-layer tubes, and heavy material bags that require clean dust-proof seals.',
      image: 'https://4.imimg.com/data4/YE/NV/MY-866895/tuber-center-pasting-machine.jpg',
      specs: [
        'Folding feed processing of up to 110 tube pieces per minute with inline slots',
        'Simultaneous multi-ply fabric/paper lamination and active edge winders',
        'Volumetric high-precision nozzle array for instant hot-melt adhesive glue line',
        'Integrated micro-perforation de-airing teeth for high density product loading'
      ],
      calibrationText: 'CALIBRATION INTERVAL: WEEKLY AUTOMATED',
      safetyGrade: 'CERTIFIED FDA COMPLIANT',
      icon: Sliders
    },
    {
      id: 'solvent-less-machine',
      name: 'Solvent Less Machine',
      stageWord: 'SOLVENT LESS',
      category: 'barrier-lamination',
      categoryLabel: 'Barrier Lamination',
      description: 'High-speed, certified food-grade solvent-free lamination (Sololam PLUS). Operating at speeds up to 400-450 m/min, this eco-compliant system bonds multi-layer substrates with zero chemical retention or odor contamination.',
      image: 'https://i.imgur.com/1PcYG45.jpeg',
      specs: [
        'Extreme production speed of up to 400 - 450 meters/minute',
        '100% solid solvent-free resin with zero chemical odor transfer',
        'Automatic dual-component polyurethane mixing and metering unit',
        'Accoladed web tension controls for fragile, ultra-thin film webs'
      ],
      calibrationText: 'CALIBRATION INTERVAL: EVERY SHIFT SENSOR',
      safetyGrade: 'CERTIFIED FOOD GRADE',
      icon: Gauge
    },
    {
      id: 'solvent-base-machine',
      name: 'Solvent Base Machine',
      stageWord: 'SOLVENT BASE',
      category: 'barrier-lamination',
      categoryLabel: 'Barrier Lamination',
      description: 'Dry bond solvent-based lamination machine (Sololam SB) designed for heavy-duty industrial barriers, chemical retort films, nylon, and metalized composites.',
      image: 'https://i.imgur.com/elecuYR.jpeg',
      specs: [
        'Production speed of up to 350 - 400 meters/minute',
        'Multi-stage dry lamination process securing extreme peel strength',
        'Thermal multi-zone drying tunnel with independent digital airflow',
        'Full-automatic turret unwinder/rewinder with splice mechanics'
      ],
      calibrationText: 'CALIBRATION INTERVAL: EVERY SHIFT SENSOR',
      safetyGrade: 'THERMO RETORT STABLE',
      icon: Layers
    },
    {
      id: 'slitting-machine',
      name: 'Slitting Machine',
      stageWord: 'SLITTER',
      category: 'barrier-lamination',
      categoryLabel: 'Barrier Lamination',
      description: 'Precision Turret Slitter & Rewinder running up to 500-600 m/min. Features automatic turret slicing rotations and differential friction shafts to prevent core wrinkling.',
      image: 'https://i.imgur.com/dNtTSdq.jpeg',
      specs: [
        'Maximum mechanical velocity of up to 500 - 600 meters/minute',
        'Differential winding shafts for thickness variance correction',
        'Dual turret rewinding station rotating 180° for non-stop speed',
        'BST web scanner guiding with razor and shear cutting knives'
      ],
      calibrationText: 'CALIBRATION INTERVAL: RUNTIME ENCODER',
      safetyGrade: 'INDUSTRIAL PRECISION',
      icon: Sliders
    },
    {
      id: 'bcs-prime',
      name: 'BCS (Bag Conversion System)',
      stageWord: 'BCS',
      category: 'bag-forming',
      categoryLabel: 'Bag Conversion',
      description: 'Computerized automated high-speed conversion line running at 45 to 55 bags/min. Executes servo-controlled fabric cutting, double bottom folding, and heavy lockstitching.',
      image: 'https://i.imgur.com/tg8MH0Y.png',
      specs: [
        'High execution yield of 45 to 55 finished sacks per minute',
        'Acupoint servo cutting system with integrated heat edge-cauterization',
        'Union Special synchronized multi-needle bottom seaming station',
        'Automated stacker separator and magnetic counting conveyors'
      ],
      calibrationText: 'CALIBRATION INTERVAL: REAL-TIME PLC FEED',
      safetyGrade: 'CERTIFIED FDA COMPLIANT',
      icon: Wrench
    }
  ];

  const filteredMachines = activeCategory === 'all' 
    ? machines 
    : machines.filter(m => m.category === activeCategory);

  const metrics = [
    {
      num: "PLANT METRIC 1",
      val: "34 ACTIVE",
      unit: "CIRCULAR LOOMS",
      desc: "For extreme tear resilience"
    },
    {
      num: "PLANT METRIC 2",
      val: "350 KG / HR",
      unit: "WEAVING OUTPUT",
      desc: "Continuous plant execution"
    },
    {
      num: "PLANT METRIC 3",
      val: "9-COLOR ROTO",
      unit: "PRINTING DEPTH",
      desc: "For realistic consumer appeal"
    },
    {
      num: "PLANT METRIC 4",
      val: "100% IN-HOUSE",
      unit: "PRODUCTION CONTROL",
      desc: "No third-party bottlenecks"
    }
  ];

  const categoriesList = [
    { id: 'all', label: 'ALL EQUIPMENT' },
    { id: 'weaving-extrusion', label: 'EXTRUSION & WEAVING' },
    { id: 'barrier-lamination', label: 'BARRIER LAMINATION' },
    { id: 'printing', label: 'HIGH-FIDELITY PRINTING' },
    { id: 'bag-forming', label: 'BAG CONVERSION' },
  ] as const;

  return (
    <div className="bg-[#fcfdff] min-h-screen text-slate-900 pb-20 font-sans">
      
      {/* 1. Header Redesign exactly like machinery.png */}
      <section className="bg-[#0b1329] text-white pt-20 pb-28 relative overflow-hidden text-center">
        {/* Tiny clean grid/stars block background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-90"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10 space-y-4">
          <p className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#f05a28] uppercase select-none">
            HEAVY INDUSTRIAL TECHNOLOGY • PAONTA SAHIB
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white uppercase mt-1">
            INTEGRATED PLANT <br />
            MACHINERY
          </h1>
          <div className="w-[80px] h-[4px] bg-[#f05a28] mx-auto mt-4 rounded-full select-none"></div>
          
          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-3xl mx-auto leading-relaxed pt-2">
            Our state-of-the-art facility in Himachal Pradesh runs fully vertical, high-speed automated processing lines. 
            From single polymer pellets to finished laminated rolls, we guarantee zero dependency and unmatched calendar reliability.
          </p>
        </div>
      </section>

      {/* Metric Cards Overlapping */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 relative -mt-16 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-white border-t-4 border-[#f05a28] rounded-b-xl shadow-md p-6 flex flex-col justify-between h-[165px] transition-transform duration-300 hover:-translate-y-1 border border-neutral-100"
            >
              <div className="space-y-1">
                <p className="text-neutral-400 font-mono text-[10px] font-bold uppercase tracking-wider select-none">{metric.num}</p>
                <h3 className="text-xl md:text-2xl font-black text-[#0c152b] font-display uppercase tracking-tight mt-0.5">{metric.val}</h3>
                <p className="text-neutral-500 font-sans text-xs font-bold uppercase tracking-wide select-none">{metric.unit}</p>
              </div>
              <p className="text-neutral-400 font-sans text-[11px] font-semibold border-t border-neutral-100 pt-3 mt-3">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Production Machinery List Header & Controls */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-slate-200 pb-6 gap-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl md:text-3xl font-black text-[#0c152b] tracking-tight uppercase leading-tight">
              PRODUCTION MACHINERY<br />LIST
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-semibold font-sans">
              11 elite in-house industrial lines certified for food-grade clean execution
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2.5 text-xs font-sans font-bold">
            {categoriesList.map(cat => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' ? machines.length : machines.filter(m => m.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4.5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer select-none flex items-center gap-2 font-semibold tracking-wide ${
                    isActive
                      ? 'bg-[#f05a28] border-[#f05a28] text-white shadow-md shadow-orange-500/20 scale-[1.02]'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`inline-flex items-center justify-center text-[10px] w-5 h-5 rounded-full font-sans font-bold leading-none ${
                    isActive ? 'bg-white text-[#f05a28]' : 'bg-neutral-100 text-neutral-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Machine Details Cards exactly like diff.png */}
        <div className="mt-12 space-y-10">
          {filteredMachines.map((m, index) => {
            const IconComp = m.icon;
            const isImageLeft = index % 2 === 0;
            const displayImage = m.image.includes('gemini.google.com') 
              ? 'https://cpimg.tistatic.com/10298018/b/4/PP-Woven-Bag-Extrusion-Tape-Plant.jpg' 
              : m.image;

            return (
              <div 
                key={m.id}
                id={`machine-${m.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-white shadow-md border border-neutral-150 transition-all duration-300 hover:shadow-lg"
              >
                {/* Image Grid Component */}
                <div className={`relative h-72 lg:h-auto lg:min-h-[420px] bg-slate-950 overflow-hidden lg:col-span-5 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img 
                    src={displayImage} 
                    alt={m.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 transition-transform duration-700 hover:scale-[1.02]"
                  />
                  {/* Real high contrast gradient overlay exactly like in diff.png */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/35 opacity-90 pointer-events-none"></div>
                  
                  {/* Top Left setup badge */}
                  <div className="absolute top-4 left-4 border border-[#f05a28] bg-black/40 backdrop-blur-xs text-[#f05a28] font-mono text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-sm select-none shadow-sm z-10">
                    ACTIVE SETUP
                  </div>

                  {/* Bottom Left Stage Identifier */}
                  <div className="absolute bottom-5 left-6 right-6 text-left z-10">
                    <h4 className="text-white font-display text-xl sm:text-2xl font-black tracking-tight uppercase mt-0.5 drop-shadow-md select-none">
                      {m.stageWord}
                    </h4>
                  </div>
                </div>

                {/* Details Content Component */}
                <div className={`p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white lg:col-span-7 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-5">
                    {/* Top Line Icon Badge & Heading */}
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-[#f05a28]/10 rounded-xl border border-[#f05a28]/25 text-[#f05a28] flex items-center justify-center shrink-0 w-12 h-12 shadow-sm select-none">
                        <IconComp className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-neutral-400 font-mono text-[10px] font-black tracking-widest uppercase select-none">
                          CERTIFIED ASSET
                        </span>
                        <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0c152b] leading-snug uppercase tracking-tight">
                          {m.name}
                        </h3>
                      </div>
                    </div>

                    {/* Paragraph description */}
                    <p className="text-neutral-600 text-sm leading-relaxed font-sans font-medium">
                      {m.description}
                    </p>

                    {/* Performance parameters */}
                    <div className="space-y-3 pt-2">
                      <p className="text-[#0c152b] font-mono text-[10px] font-black tracking-wider uppercase flex items-center gap-2 select-none">
                        <Workflow className="w-4 h-4 text-[#f05a28]" /> 
                        <span>TECHNICAL PERFORMANCE PARAMETERS</span>
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-1">
                        {m.specs.map((spec, specIdx) => (
                          <div key={specIdx} className="flex items-start gap-2.5">
                            <div className="w-4.5 h-4.5 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                              <svg className="w-2.5 h-2.5 text-[#f05a28] stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </div>
                            <span className="text-neutral-800 text-xs sm:text-[13px] font-bold leading-relaxed font-sans">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Calibration footer matrix block */}
                  <div className="mt-8 border border-neutral-200 rounded-lg py-3 px-4 bg-neutral-50/60 flex flex-col sm:flex-row sm:items-center justify-between text-neutral-600 text-xs gap-3">
                    <div className="flex items-center gap-2.5 font-mono font-bold text-[11px] text-neutral-500">
                      <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{m.calibrationText}</span>
                    </div>

                    <div className="flex items-center gap-2.5 font-mono font-bold text-[11px] text-[#f05a28]">
                      <svg className="w-4 h-4 text-[#f05a28] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>{m.safetyGrade}</span>
                    </div>
                  </div>

                  {/* High-contrast Technical Details Button Linking to Individual Page */}
                  <div className="mt-4 pt-1 flex justify-start">
                    <button
                      onClick={() => navigate(`/machinery/${m.id}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0c152b] hover:bg-[#f05a28] text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-lg transition-all duration-300 shadow-sm cursor-pointer active:scale-[0.98] group"
                    >
                      <span>Explore Technical Machine Page</span>
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Heavy Machinery QA Section */}
      <section className="bg-[#0b1329] text-white py-16 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase font-mono">CONTINUOUS SYSTEMS INTEGRITY</span>
              <h3 className="font-display text-2xl lg:text-3.5xl font-extrabold tracking-tight">
                Our plant conforms to modern SAP block tracking
              </h3>
              <div className="w-12 h-1 bg-[#f05a28] rounded"></div>
              <p className="text-white/80 font-sans text-xs sm:text-sm leading-relaxed">
                We integrate state-of-the-art materials tracking throughout the life cycle of every polypropylene reel. 
                From chemical pellet loading inside the Flat Die extruders to the final stitching and kicker sorting conveyors in the Leader machinery, 
                our Quality Assurance operations are logged inside an airtight SAP S4 Hana environment to guarantee seamless, reproducible packaging runs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-white/90">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#f05a28] shrink-0" />
                  <span>ISO 9001:2015 Standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#f05a28] shrink-0" />
                  <span>Real-time BST Printing Feeds</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#f05a28] shrink-0" />
                  <span>Digital Tension Control Winders</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#f05a28] shrink-0" />
                  <span>100% In-House Melt Recovery</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-xl space-y-4">
              <h4 className="font-display text-sm font-bold text-[#f05a28] uppercase tracking-widest flex items-center gap-1.5 font-mono">
                <ShieldAlert className="w-4 h-4" />
                ENVIRONMENTAL & ENERGY TARGETS
              </h4>
              <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed">
                By recycling 100% of the flat-die scrap and circular loom edge trim inside our in-house Reprocessing Extruder, we manufacture high-grade polypropylene pellets back for injection molding, realizing an exact zero-waste fabrication system.
              </p>
              <div className="border-t border-white/10 pt-4 flex justify-between text-xs font-mono text-white/50">
                <span>Aggregate Recycled Waste</span>
                <span className="text-[#f05a28] font-bold">100.0% In-house</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
