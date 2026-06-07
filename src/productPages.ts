export interface ProductPageContent {
  title: string;
  label: string;
  image: string;
  introduction: string;
  benefitsTitle: string;
  benefits: string[];
  techDetails?: {
    sizeRange?: string;
    materials?: string;
    thickness?: string;
    meshOfWeave?: string;
    denierRange?: string;
    laminationThickness?: string;
    colorMasterbatch?: string;
    uvStabilization?: string;
    weightCapacity?: string;
    printingColors?: string;
    bottomClosure?: string;
    topMouthClosure?: string;
    gussetDepth?: string;
    meltFlowIndex?: string;
    ashContent?: string;
    standardPacking?: string;
    productionCapacity?: string;
    rawMaterialCombination?: string;
  };
  specialties?: string[];
}

export const productPages: Record<string, ProductPageContent> = {
  '/printed-laminated-rolls': {
    title: 'Printed Laminated Rolls',
    label: 'PRINTED LAMINATED ROLLS',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/printed-rolls-g8zSHRcStHNuFrl7.jpg',
    introduction: "Fortune Flexipack offers premium, high-performance multilayer Printed Laminated Rolls (PRLR) engineered with world-class solventless dry lamination technology to prevent any trace of chemical odor or packaging aroma contamination. Our laminates ensure absolute food-grade safe barrier preservation, making them highly recommended for sensitive sectors such as Food & Beverages, Packaged Foods, Fresh Pulses, Spices, Cosmetics, Personal Care, and Pharmaceuticals. You can customize these rolls with a brilliant gloss laminate, subtle matte laminate, or an exquisite registered combination of gloss-and-matte textures to command outstanding commercial retail shelf appeal. Our roll stock is winded under automated web-tension controls and meticulous edge-guiding scanners, which completely eliminates any FFS (Form, Fill & Seal) machine wrinkling, web-drifting, or layout misregistration during fast-paced sealing runs. Equipped with high-fidelity rotogravure printing presses, we execute multi-color designs up to 8-10 colors with crisp resolution and long-lasting ink adhesion.",
    benefitsTitle: "Benefits of Printed Laminated Rolls",
    benefits: [
      "Solventless dry lamination guarantees safe, food-grade packaging with zero chemical odor transfer",
      "Superior heat-seal strength and thick barrier protection against oxygen, moisture, dust, and gas leakage",
      "Premium rotogravure printing up to 8-10 colors for vibrant, photorealistic consumer branding",
      "Formulated with optimal low/high slip properties to match custom automated packing speeds",
      "Uniform winding tension and flawless edge-alignment completely removes web wrapping issues"
    ],
    techDetails: {
      sizeRange: "100 mm to 1200 mm Roll Width (Standard core inside diameters: 76 mm / 152 mm)",
      materials: "BOPP, PET (Glossy/Matte), CPP, CO-EX PE, Nylon, Aluminium Foil, and Specialty Kraft Paper structures",
      thickness: "30 Microns to 150 Microns (custom multilayer composite structures)",
      printingColors: "Up to 8-10 colors high-fidelity rotogravure",
      rawMaterialCombination: "Glossy/Matte BOPP + LLDPE, Polyester (PET) + Cast Polypropylene (CPP), PE + Nylon, or PET + MET PET + LDPE",
      productionCapacity: "Over 500 Tons of custom laminated packaging rolls per month",
      standardPacking: "Wound on heavy-duty compression paper/cardboard cores, wrapped in moisture-proof stretch films on export pallets"
    },
    specialties: [
      "100% odor-free solventless dry lamination process preventing any chemical odor or taste transfer",
      "Optimal low/high Coefficient of Friction (COF) precisely customized to your specific bagging line speeds",
      "Professional structural design assistance and complimentary technical material evaluations",
      "Perfect reel winding tension and straight-edge trimming for zip-fast, jam-free automated runs"
    ]
  },
  '/plain-laminated-rolls': {
    title: 'Plain Laminated Rolls (Unprinted)',
    label: 'PLAIN LAMINATED ROLLS (UNPRINTED)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/plain-laminated-rolls-1rQHBu0WxAV7VXkS.jpg',
    introduction: "Multifunctional, exceptionally high-barrier, and clear unprinted Plain Laminated Rolls (PLLR) from Fortune Flexipack are designed for pilot batches, market trials, brand test-runs, automatic calibration, or packaging formats where maximum visibility is required. Formulated in a world-class production plant incorporating SAP S4 Hana, our unprinted film structures guarantee absolute thickness uniformity, high transparency to present fresh raw materials, and zero cylinder preparation and tooling investments. Our rolls run seamlessly on high-speed Form, Fill, and Seal (FFS) machines to pack products ranging from 1g up to 20kg. By completely avoiding printing inks, these rolls represent a pure polymer composition with magnificent recycling properties.",
    benefitsTitle: "Benefits of Plain Laminated Rolls",
    benefits: [
      "Zero chemical cylinder or printing plate setup charges, making it highly economical for test runs",
      "Superior polymer clarity allows consumers to verify raw colors and freshness inside the bag",
      "Excellent multi-layer barrier blocks active oxidation, external moisture, and insect ingress",
      "Formulated with customized slip parameters (COF) to glide cleanly over form-folders without binding",
      "Ultra-stable heat sealing characteristics for robust leak-free seals on continuous bagging machinery"
    ],
    techDetails: {
      sizeRange: "50 mm to 1300 mm Roll Width (Standard core inside diameters: 76 mm / 152 mm)",
      materials: "LDPE, HST BOPP, Cast Polypropylene (CPP), Plain Polyester (PET), Metalized PET, Nylon, and specialty barrier layers",
      thickness: "25 Microns to 120 Microns",
      rawMaterialCombination: "Plain BOPP + CPP, PET + Poly, or Polyester + Metalized PET + LDPE barrier composites",
      standardPacking: "Compressed cardboard cores with protective thick bubble wraps, corner protectors, and pallets",
      productionCapacity: "350 Tons of plain laminated barrier film rolls per month"
    },
    specialties: [
      "100% odor-free solventless adhesive bonding ensuring pure packaging environment",
      "Exceptional sealability formulated for vertical fast drop-fills of powder or heavy granules",
      "Comprehensive thickness checks at multiple production gateways under strict quality protocols"
    ]
  },
  '/hdpepp-tapes-tap': {
    title: 'PE/PP Tapes (TAP)',
    label: 'PE/PP TAPES (TAP)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1-WkIxvIdRpvK70fHS.png',
    introduction: "In the circular woven packaging sector, the tape (or flat yarn) is recognized as the structural 'soul of the bag' as the durability, load capacity, and warp-weft consistency of subsequent fabrics depend entirely on its physical properties. Fortune Flexipack manufactures high-tenacity, exceptionally stable polymer tapes on computerized state-of-the-art flat-die drawing extrusion lines. Extruded from 100% premium virgin polymer resins, our tapes maintain uniform denier weights, accurate cross-sections, and controlled elongation parameters. This ensures that circular looms operate continuously without tape snapping or yarn splitting, resulting in heavy-duty woven configurations with supreme bursting safety margins.",
    benefitsTitle: "Benefits of PE/PP Tapes",
    benefits: [
      "Exceptional tensile breaking tenacity of up to 6.5 - 7.0 g/denier for heavy bulk load protection",
      "Stable elongation parameters restricted below 15-20% prevent structural stretching under cargo loads",
      "Formulated with 100% virgin polypropylene (PP) or HDPE resins with zero low-grade mineral fillers",
      "Precision micro-slitting technology ensures clean yarn edges with zero snapping or fiber dust accumulation"
    ],
    techDetails: {
      sizeRange: "Tape Width: 2.0 mm to 4.5 mm (precision calibrated to ±0.1mm)",
      materials: "100% Virgin Polypropylene (PP) Homopolymer or High-Density Polyethylene (HDPE)",
      denierRange: "450 Denier up to 2000 Denier weight matrix",
      uvStabilization: "Highly stabilized using organic HALS inhibitors, lasting from 200 to 1600 hours on demand",
      colorMasterbatch: "Highly saturated color masterbatches providing excellent color fastness under direct sunlight",
      rawMaterialCombination: "100% Virgin Polymer + Heat-resistant custom Color/UV Masterbatch + Antioxidants",
      productionCapacity: "600 Tons of high-tenacity industrial tapes per month",
      standardPacking: "Compact traverse wound spools/bobbins on standard paper or high-reuse steel cores"
    },
    specialties: [
      "Precise traverse winding prevents overlapping, loose edges, or flat yarn twists during fast loom feeding",
      "Customized tensile properties to perfectly match slower flat looms as well as high-speed circular looms",
      "Excellent thermal shrinkage stability to preserve fabric tight weave patterns during warm packing extrusions"
    ]
  },
  '/hdpepp-woven-fabrics-coateduncoated-wf': {
    title: 'HDPE/PP Woven Fabrics (Coated/Uncoated) (WF)',
    label: 'HDPE/PP WOVEN FABRICS (WF)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/3-USYc2GXKcDPdbG2r.png',
    introduction: "Our HDPE/PP Woven Fabrics represent the standard of industrial strength-to-weight packaging performance. Interlaced on advanced circular looms using high-tenacity flat tapes, our fabrics are available in uncoated breathable configurations (ideal for agricultural crops requiring natural ventilation) and coated laminated layouts (engineered for complete moisture, dust, and particulate barrier protection). Fortune Flexipack supplies continuous fabrics in extensive weights and widths, perfect for manual or automatic conversion into bags, cargo pallet wraps, open-air covers, container liners, and heavy-duty tarpaulins.",
    benefitsTitle: "Benefits of HDPE/PP Woven Fabrics",
    benefits: [
      "Outstanding tensile, tear, and puncture resistance under demanding logistic environments",
      "Coated variants feature a customized PE lamination layer (15 to 30 GSM) with superior substrate adhesion",
      "Uncoated variants feature breathable weaves to prevent warm crop moisture traps and mold problems",
      "Balanced mesh count across warp and weft maintains uniform loading weight distribution"
    ],
    techDetails: {
      sizeRange: "280 mm to 2000 mm Flat Tubular Width (or 560 mm to 4000 mm flat open sheets)",
      materials: "High-Tenacity Polypropylene (PP) or High-Density Polyethylene (HDPE) tapes",
      meshOfWeave: "8x8, 10x10, 11x11, 12x12, or 14x14 mesh counts per square inch",
      laminationThickness: "15 Microns to 35 Microns (single-side or double-side extrusion coating)",
      uvStabilization: "Integrated premium HALS protectors for up to 1000 hours of direct outdoor exposure",
      weightCapacity: "Tailored to fabric weight classes starting from 45 GSM to 150 GSM",
      productionCapacity: "Over 800 Tons of premium industrial woven fabric per month",
      standardPacking: "Packed in continuous rolls of 1000 to 5000 meters, wrapped securely on heavy cardboard rolls"
    },
    specialties: [
      "Perfect straight-edge trim with centralized roll winding for seamless automatic conversion lines",
      "Custom options include Flame Retardant (FR), anti-static, and personalized color masterbatches",
      "Full compliance with ASTM and ISO weave quality parameters, monitored via electronic scanner systems"
    ]
  },
  '/pp-woven-bags-wpp': {
    title: 'PP Woven Bags (WPP)',
    label: 'PP WOVEN BAGS (WPP)',
    image: 'https://i.imgur.com/MC6tcnE.png',
    introduction: "Lightweight, remarkably robust, and highly cost-effective, PP Woven Bags (WPP) represent the ultimate standard for packing agricultural products and bulk commodities. Fortune Flexipack designs and manufactures these bags from virgin homopolymer polypropylene to carry everything from grains, pulses, sugar, salt, and spices to animal feeds, fertilizers, cements, and organic chemical powders. Our bags are engineered with specialized high-friction anti-slip weaves to prevent shifting, sliding, or tumbling when stacked high in modern vertical warehouses, protecting workforce safety and storing cargo efficiently.",
    benefitsTitle: "Benefits of PP Woven Bags",
    benefits: [
      "Exceptional payload capacities (designed to carry 5 kg, 10 kg, 25 kg, up to 50 kg safely)",
      "Bottom seams reinforced with heavy-duty single/double lockstitches to avoid drop bursts",
      "Inert material structure resists high humidity, chemical actions, and temperature storage variations",
      "Breathable woven mesh structure prevents sweat moisture buildup, keeping food stocks dry and clean"
    ],
    techDetails: {
      sizeRange: "300 mm to 900 mm Width (Length completely customized as per packaging density and target weight)",
      materials: "100% Virgin Polypropylene (PP) woven fabric + optional loose or heat-stitched LDPE/LLDPE liners",
      weightCapacity: "5 kg to 50 kg load capacities",
      uvStabilization: "Highly stabilized UV-blocking masterbatches for transit in open container yards",
      printingColors: "Up to 4-6 colors flexographic block graphics using eco-friendly water-based inks",
      topMouthClosure: "A selection of EZ-open pulls, continuous hemmed, plain heat-cut, wave-cut, or block valve tops",
      bottomClosure: "Single fold / double stitch, double fold / double stitch, or heat-sealed paper reinforcement strips",
      productionCapacity: "3.5 Million finished woven sacks and bags per month"
    },
    specialties: [
      "Highly customizable friction coefficients ensuring exceptional vertical stacking stability",
      "100% food-grade compliant, non-toxic, and fully recyclable polymer structure",
      "Stitched or loose-inserted LLDPE inner pouches customize optimal humidity protection levels"
    ]
  },
  '/printed-and-laminated-woven-pp-bags-plwpp': {
    title: 'Printed and Laminated Woven PP Bags (PLWPP)',
    label: 'PRINTED AND LAMINATED WOVEN PP BAGS (PLWPP)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_11-bZr48izIsTxg23y4.png',
    introduction: "Often referred to as BOPP Laminated Woven Bags, these represent the absolute pinnacle of high-end bulk marketing materials. By utilizing advanced extrusion lamination, Fortune Flexipack bonds a photorealistic sub-surface rotogravure printed Biaxially Oriented Polypropylene (BOPP) film directly onto a high-tenacity circular woven polypropylene fabric core. This process completely traps the branding ink beneath a crystal-clear protective polymer sheet, making the bag scratch-proof, water-resistant, oil-impervious, and incredibly shiny. Perfect for packaging premium rice, flour, bird seed, cat/dog kibbles, and specialized retail grains.",
    benefitsTitle: "Benefits of Printed and Laminated Woven PP Bags",
    benefits: [
      "Photorealistic rotogravure graphics up to 8-10 colors displaying pristine product imagery and text",
      "Dual-layer laminated composite creates a tight barrier against moisture, humidity, dust, and gas",
      "Incredible structural stiffness allows bags to stand upright on commercial supermarket shelves",
      "Excellent puncture and split resistance derived from the woven fabric spine, surviving rough drop tests"
    ],
    techDetails: {
      sizeRange: "300 mm to 650 mm Bag Widths (with bottom seams and back-lap or tubular bodies)",
      materials: "BOPP Print Film + Extruded Polyethylene Adhesive + High-Tenacity Polypropylene Woven Fabric",
      thickness: "60 GSM to 160 GSM laminated compost weights",
      printingColors: "High-fidelity rotogravure up to 10 colors using electronically engraved cylinders",
      uvStabilization: "BOPP film with built-in UV obstacles to prevent ink deterioration during solar freighting",
      standardPacking: "Compressed tightly in custom baled quantities, wrapped with woven outer wrappers on wood pallets",
      productionCapacity: "2.5 Million printed BOPP woven laminated bags per month"
    },
    specialties: [
      "Available in deep high-gloss, premium matte, metallic, holographic, or custom window formats",
      "Formulated with anti-skid additives in the BOPP film to prevent stack slippage",
      "Full compliance with international ISO-9001 and certified safe food-grade direct consumer packing"
    ]
  },
  '/printed-and-laminated-woven-pp-bottom-gusset-bags': {
    title: 'BOPP Woven Bottom Gusset Bags',
    label: 'BOPP WOVEN BOTTOM GUSSET BAGS',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/untitled-design-3-z8PpvK0wSK0DTl99.png',
    introduction: "An elite development in modern retail packaging, Fortune Flexipack's Bottom Gusset Bags are engineered with side gussets and a sturdy, self-standing flat bottom. Unlike traditional sacks that lay flat on store floors, Bottom Gusset Bags stand perfectly upright on flat retail surfaces, transforming the bag itself into a 3D billboard with 360-degree branding space (front, back, left/right side panels, and bottom floor). Fortune Flexipack employs automated high-precision gusseting lines to ensure perfect alignment of printed motifs across all sides. These bags are perfect for packaging 5kg up to 25kg of premium basmati rice, organic pulses, bird seed mixes, and high-end pet foods.",
    benefitsTitle: "Benefits of Bottom Gusset Bags",
    benefits: [
      "Stands vertically upright with high stability, creating a prominent presentation on grocery racks",
      "Expandable side and bottom panels add internal packing volume while retaining a compact outer shape",
      "Excellent moisture and vapor shield, preserving raw freshness and avoiding outer grease-bleeding",
      "Integrates customizable features such as die-cut carry handles, top sliding zippers, or EZ-pour spouts"
    ],
    techDetails: {
      sizeRange: "250 mm to 600 mm flat widths (Gusset Depth range: 55 mm to 150 mm)",
      materials: "BOPP Printed Film (Gloss or Matte finish) + Extruded Poly lamination layer + Strong PP Woven Core",
      thickness: "70 GSM to 150 GSM ultra composite weights",
      gussetDepth: "55 mm to 150 mm expandable volumetric side and bottom gusset panels",
      printingColors: "Up to 8-10 colors state-of-the-art rotogravure print alignment",
      bottomClosure: "Block bottom, flat-bottom, double fold-down stitch, or ultrasonic heat sealed joins",
      productionCapacity: "1.5 Million block-bottom retail bags per month"
    },
    specialties: [
      "Automated sensor-guided gusset folding ensuring perfect continuous art matching on all corners",
      "Formulated with low-temperature hot-melt seal seals to block heavy fine powder leakages",
      "Configurable with D-cut plastic grips or side-reinforced webbing straps for comfortable carrying"
    ]
  },
  '/printed-and-laminated-woven-pp-retail-shopping-bags': {
    title: 'Recyclable PP Retail Shopping Bags',
    label: 'RECYCLABLE PP RETAIL SHOPPING BAGS',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/untitled-design-3-LSX271zUKaRgfuNH.png',
    introduction: "Designed as the ultimate reusable premium retail bag, Fortune Flexipack's Recyclable PP Shopping Bags are formulated to last hundreds of trips, making them a powerful brand marketing asset. These packaging totes feature high-density woven or non-woven PP fabrics with double-side lamination, resulting in a beautiful, wipeable, and waterproof carrier that stands up to heavy everyday payloads. They replace thin single-use plastic carrier bags with a 100% green polymer alternative, helping forward-looking brands meet their corporate Environmental, Social, and Governance (ESG) targets.",
    benefitsTitle: "Benefits of Retail Shopping Bags",
    benefits: [
      "Unparalleled brand visibility during consumer commutes, grocery walks, and public trips",
      "Incredible payload capacity, easily supporting 20 kg to 25 kg of cargo without tearing",
      "Wipeable, waterproof gloss or matte laminate surface resists staining or color fading",
      "Fitted with robust webbing handles equipped with double-box lockstitching for secure grip safety"
    ],
    techDetails: {
      sizeRange: "250 mm to 500 mm flat widths (with customizable side panels, heights, and bottom footprints)",
      materials: "Laminated Woven Polypropylene, heavy Non-woven PP, or eco-PET with matching sewn piping borders",
      thickness: "80 GSM to 160 GSM premium reusable composites",
      printingColors: "High fidelity 8-10 colors rotogravure or ultra-crisp flexographic print choice",
      standardPacking: "Packed in bundles of 100 or 250 bags inside double-wall heavy cartons to prevent transport dust",
      productionCapacity: "1 Million custom shopping bags per month"
    },
    specialties: [
      "Reinforced heavy cross-X box stitching locks at handle bases to assure long-term tear resilience",
      "Folds completely flat for house storage convenience, fitted with optional brass snaps or velcro straps",
      "Wide selection of edge piping fabrics and customizable accents to match corporate brand guidelines"
    ]
  },
  '/reprocessed-granules-rp': {
    title: 'Reprocessed PP Granules (RP)',
    label: 'REPROCESSED PP GRANULES (RP)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_19-K2rqPVJpKgXUCGgJ.png',
    introduction: "Fortune Flexipack is deeply committed to sustainability, building an intelligent zero-waste loop in industrial polymer operations. Our Reprocessed Polypropylene (PP) Granules are manufactured by recycling clean, post-industrial polymer trim and scrap generated during tape extrusion, fabric weaving, and bag conversion stages. Processed using advanced multi-stage melt filtration and vacuum degassing extruders, our granules are thoroughly filtered to eliminate standard volatile elements, dust, or contaminants. The result is high-purity, uniform homopolymer pellets that represent an exceptional cost-reduction option for plastic injection molding and extrusion plants producing kitchenwares, household items, cratings, containers, and sturdy automotive plastic components.",
    benefitsTitle: "Benefits of Reprocessed Granules",
    benefits: [
      "Closes the loop in corporate environmental and ESG sustainability programs",
      "Significantly lowers raw material costs when blended with prime polymer resins",
      "Stable melt flow index (MFI) guarantees predictable polymer flow rates on fast cycles",
      "Uniform pelletizing prevents feed jams in modern hopper assemblies"
    ],
    techDetails: {
      sizeRange: "2.5 mm to 4.0 mm uniform cylindrical or spherical pellet cuts",
      materials: "100% Reprocessed Homopolymer Polypropylene (PP) derived from post-industrial clean trim",
      meltFlowIndex: "8.0 to 22.0 g/10 min (at 230°C / 2.16 kg, ASTM D1238 standard) customized to molding spec",
      ashContent: "Maintained below 2.0% utilizing micro-filtration mesh screens",
      uvStabilization: "Custom antioxidant packages and process thermal stabilizers blended during pelletizing",
      productionCapacity: "500 Tons of reprocessed granules per month",
      standardPacking: "Packed in moisture-proof 25 kg or 50 kg laminated woven bags, or 1 Ton jumbo bulk bags"
    },
    specialties: [
      "Verified under strict melt flow indexers, ash heaters, and density balance tests in our certified QA lab",
      "Compatible in custom blends with virgin homopolymer or copolymer PP resins for maximum molding ductility",
      "Available in standard colors (Milky White, Green, Blue, Red, Yellow, Grey, Black, or Semi-Translucent)"
    ]
  }
};
