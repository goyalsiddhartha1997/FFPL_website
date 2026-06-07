export interface MachineryPageContent {
  id: string;
  title: string;
  label: string;
  image: string;
  introduction: string;
  categoryLabel: string;
  featuresTitle: string;
  features: string[];
  technicalSpecs: Record<string, string>;
  keyHighlights?: string[];
  benefits?: string[];
}

export const machineryPages: Record<string, MachineryPageContent> = {
  'tape-plant-pp': {
    id: 'tape-plant-pp',
    title: 'Precision High-Tenacity Tape Extrusion Plant',
    label: 'EXTRUSION TAPE PLANT',
    image: 'https://i.imgur.com/xiC1aXd.jpeg',
    categoryLabel: 'Extrusion & Weaving',
    introduction: 'Our state-of-the-art flat-die drawing tape plant represents the starting chemistry hub of our high-strength woven packaging. Polypropylene raw homopolymer resins are blended with advanced anti-oxidants, high-density color pigments, and daylight UV-blocking masterbatches. This blended composite is melted in a high-shear screw extruder and extruded through an automatic coat-hanger flat die. The cast polymer film is rapidly water-cooled, sliced by highly precise micro-slitting spacer spacers, and drawn through calibrated thermal stretching ovens to achieve high tensile breaking resistance. Uniform thickness, uniform denier weight, and perfect traverse winding onto steel bobbins ensure that our circular looms run at peak capacity without yarn split failures.',
    featuresTitle: 'Performance Features & Benefits',
    features: [
      'High-capacity continuous melt throughput of up to 350-400 kg/hour for rapid job execution',
      'Extremely precise microprocessor-controlled automatic die slot adjustment ensuring steady film gauge',
      'Calibrated hot-air stretching ovens with micro-controlled thermal zones allowing optimal physical tape drawing',
      'Fully automatic edge-trim aspiration and in-line recycling system returning clean waste directly back to the hopper'
    ],
    technicalSpecs: {
      'Maximum Extrusion Capacity': '350 - 400 kg/hour',
      'Working Resin Base': '100% Virgin homopolymer polypropylene (PP) or HDPE configurations',
      'Tape Width Calibration': '2.0 mm to 4.5 mm (accurate within ±0.05 mm)',
      'Denier Range matrix': '450 to 2000 Denier weight scale',
      'Winding Bobbins': 'Automatic precision crossing traverse winders with high winding tension stability',
      'Drawing Oven Heat Control': 'Fully integrated hot air circulation with precise digital gauges'
    }
  },
  'circular-looms': {
    id: 'circular-looms',
    title: 'High-Speed Circular Shuttle Looms',
    label: 'SYNCHRONIZED CIRCULAR LOOMS',
    image: 'https://2.imimg.com/data2/UY/SA/MY-2210333/5-500x500.jpg',
    categoryLabel: 'Extrusion & Weaving',
    introduction: 'Our core weaving department is built around a state-of-the-art array of 34 high-speed circular shuttle looms operating continuously in perfect harmony. These weaving units interlace our high-tenacity polypropylene warp and weft tapes into flawless, robust cylindrical fabric sleeves. By weaving fabrics in an endless circular loop, we eliminate weak lateral joins, producing sacks with superior bursting margins. High-speed shuttle orbits, automated warp feeding bobbins, continuous weft control sensors, and integrated tension winders are managed electronically, ensuring complete physical consistency across hundreds of thousands of meters.',
    featuresTitle: 'Operational Strengths & Systems',
    features: [
      '34 fully active multi-shuttle high-yield weaving machines configured for heavy-duty industrial tasks',
      'Impressive plant throughput delivering 350 kilograms of densely interlaced high-strength fabric per hour',
      'Smart optical electronic warp and weft snap sensor systems that instantly pause weaving to prevent faults',
      'Highly flexible loom adjustments to create tight weaves ranging from 8x8 to 15x15 mesh per square inch'
    ],
    technicalSpecs: {
      'Total Active Looms': '34 High-speed computerized machines',
      'Total Weaving Output': '350 kg/hour continuous fabric weight',
      'Weave Density Mesh': '8x8, 10x10, 11x11, 12x12, or 14x14 mesh options',
      'Shuttle Insertion Speed': 'Up to 360 orbits per minute',
      'Fabric Width Capabilities': 'Flat tubular width from 300 mm to 900 mm'
    }
  },
  'extrusion-lamination': {
    id: 'extrusion-lamination',
    title: 'High-Speed Extrusion Lamination & Coating Machine',
    label: 'EXTRUSION LAMINATION & COATING',
    image: 'https://cygnetmachinery.com/wp-content/uploads/2024/07/extrusion-lamination-coating-machine.jpeg',
    categoryLabel: 'Barrier Lamination',
    introduction: 'The extrusion lamination division secures our structures against moisture, vapor, and dust ingress. Operating under high-pressure parameters, this heavy-duty extrusion coater melts highly cohesive polyethylene and bonds it directly onto the circular woven fabric sleeve. The coater can simultaneously introduce a secondary Biaxially Oriented Polypropylene (BOPP) printed film, high-gloss PET, or Kraft paper layout, locking the graphical elements inside a structural barrier pocket. Armed with online web-guiders, digital thickness sensors, and corona arc discharge pretreaters, this machine ensures stellar lamination peeling margins.',
    featuresTitle: 'Technical Coating Capabilities',
    features: [
      'Fast industrial polymer melt speeds scaling up to 250 meters/minute under micro-sensor control',
      'Dual-side high-voltage corona arc treaters to maximize surface energy and secure glue-free bond adhesion',
      'Multilayer barrier film integration (BOPP, Matte/Glossy PET, Al Foil, and specialty glassines)',
      'Large mirror-finished water cooling drums ensuring immediate polymer crystallization and wrinkle-free rolls'
    ],
    technicalSpecs: {
      'Design Velocity': 'Up to 250 m/min',
      'Lamination Coat GSM': '12 GSM to 45 GSM single or dual-sided layer',
      'Coating Substrates': 'Melted LDPE, PP, or LLDPE adhesive configurations',
      'Secondary Feed roll width': '400 mm to 1250 mm',
      'Edge Slitting Cutters': 'In-line rotary circular blades with automatic suction of edge scraps'
    }
  },
  'flexo-printing': {
    id: 'flexo-printing',
    title: 'Industrial High-Yield Flexographic Printing Press',
    label: 'FLEXOGRAPHIC PRINT BLOCK',
    image: 'https://cpimg.tistatic.com/10856058/b/4/Flexographic-Bag-To-Bag-Printing-Machine..jpg',
    categoryLabel: 'High-Fidelity Printing',
    introduction: 'Our industrial flexographic printing line is a high-yield direct-to-bag printing platform optimized for rapid setup, cost-effective runs, bold corporate logos, and crisp, solid color overlays. Integrating heavy-duty rubber plates and high-end engraved ceramic Anilox cylinders, this press applies eco-safe, water-based inks directly onto circular woven fabrics. Equipped with multi-color printing blocks, the flexographic line executes clean typography, safety codes, recycling icons, and branding elements onto raw or laminated woven sacks with long-lasting adhesion and zero ink rubbing.',
    featuresTitle: 'Performance & Ink Characteristics',
    features: [
      'High capacity direct bag-to-bag printing running at up to 150 clean strokes per minute',
      'Engraved micro-cell ceramic Anilox rollers delivering extremely uniform ink transfers',
      'Rigid mechanical registration lockups to keep complex logo borders and elements in perfect sync',
      'Long heat-recirculating drying tunnels preventing ink smudges during high-speed collection'
    ],
    technicalSpecs: {
      'Printing Speed': 'Up to 150 bags/minute',
      'Max Colors System': '4 - 6 color blocks inline',
      'Ink Compatibility': 'Environmental water-based or solvent-based fast-drying polymers',
      'Drying Station': 'Forced thermal hot-air recirculation with fan duct extraction',
      'Width Capabilities': 'Up to 850 mm print area width'
    }
  },
  'color-rotogravure': {
    id: 'color-rotogravure',
    title: 'Computerized 9-Color Rotogravure Printing Press',
    label: '9-COLOR COMPUTERIZED ROTOGRAVURE',
    image: 'https://images.jdmagicbox.com/quickquotes/images_main/professional-9-color-rotogravure-printing-machine-803248219-d8ttlkj6.jpg',
    categoryLabel: 'High-Fidelity Printing',
    introduction: 'The crown jewel of our graphic packaging department is our computerized 9-color rotogravure press. This machine is designed to print high-definition, photorealistic visual designs onto flexible films (matte or glossy BOPP, PET, etc.) using sub-surface reverse print cylinders before they are laminated onto woven backings. The inks are sealed beneath the protective outer layer, which makes our premium consumer bags scratch-resistant and waterproof. It features active BST electronic camera registers that automatically read registry guidelines and adjust printing cylinders in micro-seconds, ensuring sharp resolution on every run.',
    featuresTitle: 'Photorealistic Color Highlights',
    features: [
      '9 independent rotogravure stations for stunning high-fidelity graphics and subtle gradient color shades',
      'Rapid web feeds scaling up to 300 meters/minute with continuous automated tension loops',
      'BST web-monitoring cameras executing real-time inspection and micro-second cylinder correction',
      'High-velocity ventilated dry ovens ensuring complete solvent evaporation for zero polymer odor'
    ],
    technicalSpecs: {
      'Operating Velocity': 'Up to 300 meters/minute',
      'Total Printing Stations': '9 Independent printing decks',
      'Registration Accuracy': '±0.1 mm automatic computer-guided BST system',
      'Print Roll Core': '76 mm / 152 mm steel or composite shafts',
      'Applicable Film Thickness': '12 Microns to 80 Microns'
    }
  },
  'leader-machine': {
    id: 'leader-machine',
    title: 'High-Speed Automated Leader Bag Conversion System',
    label: 'LEADER SACK CONVERSION LINE',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/XS/KR/FE/100775959/non-woven-shopping-bag-making-machine.jpg',
    categoryLabel: 'Bag Conversion',
    introduction: 'The Leader machine is our heavy-duty automated sack cutting, bottom folding, and stitching platform. Operating directly from processed woven fabric rolls, it combines high-speed mechanical indexing, heat cutting, double folding, and synchronized sewing to convert raw fabric sleeves into finished packaging bags. It features high-torque Japanese Omron PLC systems and digital servo motors, providing complete control over sack length calibration. The continuous production line feeds cut bags automatically into stack folders and kicker conveyors, ensuring high packing velocity, clean seam sturdiness, and zero loose strings.',
    featuresTitle: 'Conversion Speeds & Controls',
    features: [
      'Continuous automated throughput of 45 to 60 finished bags per minute fully folded and stitched',
      'Omron microprocessor controls with high-end digital color touchpanels for instantaneous size adjustments',
      'Integrated high-temperature thermo alloy cutters creating neat, cauterized fray-free ends',
      'Automated batch separators with kicker conveyor modules sorting sacks in batches of 100 or 500'
    ],
    technicalSpecs: {
      'Sack Production Output': '45 to 60 bags/minute',
      'PLC System': 'Japanese Omron PLC with absolute brushless servo controllers',
      'Seam Sewing Unit': 'Industrial heavy oil-bath seaming head with automatic thread cutting',
      'Bag Fold style': 'Single folding or double folding from 25 mm to 40 mm bottom width',
      'Web guiding': 'Electronic tension brake controls for automated fabric feeding'
    }
  },
  'tuber-machine': {
    id: 'tuber-machine',
    title: 'Longitudinal pasting Tuber & Valve Sack Line',
    label: 'TUBING & CENTER PASTING LINE',
    image: 'https://4.imimg.com/data4/YE/NV/MY-866895/tuber-center-pasting-machine.jpg',
    categoryLabel: 'Bag Conversion',
    introduction: 'The Tuber pasting machine is specially engineered to manufacture heavy center-pasted tubular sacks, multi-ply block-bottom valve bags, and complex paper-poly composite sleeves. Using high-precision longitudinal sliding paste rails, the machine brings flat laminated sheets into a neat cylindrical fold, applying a localized hot-melt adhesive glue line. Designed with in-line micro-perforation spikes, it pierces microscopic air vents through the laminates, which allows air to escape during fast powder filling (e.g. for flour, chemical compounds, or cement) while keeping the product securely inside. Fast, continuous folding and dual-tension guidance plates facilitate smooth, wrinkle-free tube forming.',
    featuresTitle: 'Adhesive Application & Tube forming',
    features: [
      'Rapid folder output reaching up to 110 tube pieces per minute with synchronized edge slots',
      'Handles multi-ply configurations simultaneously (laminating Kraft paper, woven PP, and barrier films)',
      'Volumetric digital nozzle array applying continuous hot-melt adhesive with zero glue leaks',
      'Calibrated de-airing wheel needles creating microscopic air ventilation grids'
    ],
    technicalSpecs: {
      'Tubing Production Output': 'Up to 110 tube segments per minute',
      'Adhesive System': 'Automated high-temperature hot-melt nozzle injector',
      'Fold Depth Capability': 'Side gussets from 50 mm to 150 mm',
      'Tensioning Web': 'Dual automatic edge unwinders with magnetic break controls',
      'Perforation system': 'Mechanical steel needle drum with adjustable pattern layouts'
    }
  },
  'solvent-less-machine': {
    id: 'solvent-less-machine',
    title: 'Pelican Sololam PLUS: Solvent-Less Lamination Machine',
    label: 'SOLVENT-LESS LAMINATION (SOLOLAM PLUS)',
    image: 'https://i.imgur.com/1PcYG45.jpeg',
    categoryLabel: 'Barrier Lamination',
    introduction: 'The Pelican Sololam PLUS represents the absolute pinnacle of eco-friendly, organic-solvent-free flexible packaging lamination technology. Explicitly engineered in a high-speed modular configuration, this machine operates at a design production speed of up to 400 - 450 meters per minute with extremely precise digital adhesive coating controls. It is highly recommended for sensitive sectors such as food, dairy, and pharmaceuticals, where zero chemical retention or smell-pollution is a critical packaging mandate. Solvent-less lamination works by bonding multilayer substrates (BOPP, PET, CPP, LLDPE, Foil, and paper sheets) using 100% solid, solvent-free adhesives. By bypassing solvents, it entirely avoids thermal drying ovens, resulting in substantial energy savings, zero solvent air emissions, and a pristine, odor-free packaging environment. Built with fully integrated tension-sensing webs and digital mixers, it ensures absolute coating uniformity of less than 0.1 GSM deviation.',
    featuresTitle: 'Performance Features & Benefits',
    features: [
      '100% solvent-less adhesive coating mechanics ensuring pure health compliance with zero chemical odor transfer',
      'Extremely high operating speed of up to 400 m/min with stable, vibration-free chassis construction',
      'In-line automatic mixing, metering, and dispensing system for dual-component polyurethane glues',
      'Intelligent multi-shaft digital web tension systems to handle ultra-thin gauge films without micro-stretching',
      'Direct shaftless unwinder and rewinder stations with automatic edge-guiding scanners'
    ],
    technicalSpecs: {
      'Maximum Design Speed': '400 - 450 meters per minute',
      'Working Web Width': '400 mm to 1300 mm',
      'Adhesive Type': '100% Solid solvent-free polyurethane adhesives',
      'Coating Weight Range': '0.8 GSM to 3.0 GSM (precision calibrated within ±0.05 GSM)',
      'Substrates Handled': 'BOPP, PET, CPP, CO-EX PE, Nylon, Aluminium Foil, and specialty paper laminations',
      'Tension Control Range': '2 kg to 40 kg with highly sensitive load cells',
      'Mixing Ratio Range': '100:30 to 100:100 with accurate digital flowmeters',
      'Drive Architecture': 'Multi-axis fully synchronized AC servo drive system'
    }
  },
  'solvent-base-machine': {
    id: 'solvent-base-machine',
    title: 'Pelican Sololam SB: Solvent-Based / Dry Lamination Machine',
    label: 'DRY BOND LAMINATION (SOLOLAM SB)',
    image: 'https://i.imgur.com/elecuYR.jpeg',
    categoryLabel: 'Barrier Lamination',
    introduction: 'For heavy-duty high-barrier packaging requiring ultimate laminate structures, chemical-resistant compositions, or hot retort sterilizations, the Pelican Sololam SB dry bond solvent-based laminator is our industrial workhorse. Operating at high production velocities, this line employs dry bond solvent lamination techniques to unite challenging substrates like thick aluminium foils, heavy nylon, oriented polypropylene (BOPP), and polyethylenes. The system is equipped with an advanced high-efficiency multi-zone thermal drying tunnel with high air recirculation and integrated exhaust systems ensuring absolute residue extraction prior to bonding. The dry lamination process provides unparalleled seal-jaw heat-stability and bond peeling-resilience, making it perfect for liquid pouches, retort rice/meat bags, pet foods, and industrial chemicals.',
    featuresTitle: 'Performance Features & Benefits',
    features: [
      'High-performance dry lamination process engineered for extreme bond peeling strengths',
      'Multi-zone modular thermal drying tunnel with independent digital airflow and thermal dampers',
      'Precision rotogravure-style coating unit with doctor blade system for accurate wet adhesive application',
      'Fully automatic turret-type continuous unwinder and rewinder for splice-free high-speed load changes',
      'Built-in VOC concentration detectors and exhaust ventilation grids for eco-safe industrial air protection'
    ],
    technicalSpecs: {
      'Operating Production Speed': 'Up to 350 - 400 meters per minute',
      'Usable Material Width': '500 mm to 1300 mm',
      'Lamination Process': 'Dry Bond / Solvent-Based (adhesive is dried prior to high-pressure hot/cold roll pressing)',
      'Drying Tunnel Heating': 'Steam, Hot Oil, or Electric heaters (configurable multi-zone setup)',
      'Materials Range': 'PET, BOPP, Kraft Paper, Metalized Films, Nylon, Al Foil (6 to 20 micron), Co-ex PE',
      'Tension Tolerance': 'High-accuracy digital tension loop with closed-loop load cells',
      'Coating Method': 'Direct gravure or semi-flexo coating roller layouts',
      'Chassis Quality': 'Heavy-duty cast iron side-frames for absolute alignment at high speeds'
    }
  },
  'slitting-machine': {
    id: 'slitting-machine',
    title: 'Pelican High-Performance Turret Slitter & Rewinder',
    label: 'PRECISION TURRET SLITTER & REWINDER',
    image: 'https://i.imgur.com/dNtTSdq.jpeg',
    categoryLabel: 'Barrier Lamination',
    introduction: 'The Pelican Turret Slitter is designed to optimize slitting efficiency, reduce machine idle time, and deliver high-precision rewound rolls with surgical accuracy. As the final roll-handling hub of our flexible packaging plant, this machine takes wide printed or laminated master rolls and slits them down to exact customer-specified widths and roll diameters. The distinguishing feature is its dual turret winding structure, which automatically rotates to present freshly slit rolls for collection while continuous slitting proceeds on a secondary shaft without shutdown. This eliminates traditional changeover delays, transforming our roll-delivery flow into a seamless continuous stream. Precise knife settings and differential friction rewind shafts ensure perfectly uniform tension across every sliced lane, preventing edge weaving, telescoping, or internal roll core wrinkling.',
    featuresTitle: 'Performance Features & Benefits',
    features: [
      'Dual turret rewinding station rotating 180 degrees for non-stop automatic roll unloading',
      'Equipped with both circular rotary blades and industrial razors to handle various films and papers',
      'Differential winding shafts with friction rings to handle film thickness variances without tension loss',
      'BST web guiding scanner at the unwind station ensuring straight, high-accuracy slitting lanes',
      'Automatic pneumatic roll pushers and swing-out shafts for ergonomics and worker safety'
    ],
    technicalSpecs: {
      'Maximum Mechanical Velocity': '500 - 600 meters per minute',
      'Minimum Slitting Width': '30 mm to 1300 mm usable capacity',
      'Unwind Core Diameter': '76 mm / 152 mm (standard heavy compression air shafts)',
      'Maximum Unwind Roll Diameter': '1000 mm heavy master parent rolls',
      'Maximum Rewind Roll Diameter': '600 mm on dual turret shafts',
      'Slitting Cutter Interface': 'Quick-change razor module or precision sheer/circular cutting matrix',
      'Tension Compensator': 'Automatic electronic winding tension curve calculation (taper tension control)'
    }
  },
  'bcs-prime': {
    id: 'bcs-prime',
    title: 'BCS (Bag Conversion System)',
    label: 'AUTOMATED BAG CONVERSION (BCS)',
    image: 'https://i.imgur.com/tg8MH0Y.png',
    categoryLabel: 'Bag Conversion',
    introduction: 'The Lohia BCS establishes the global gold standard for fully integrated, high-speed automated block cutting and sewing of high-tenacity circular woven PP/HDPE bag sleeves. Engineered specifically to convert woven fabric rolls into finished sacks with ultimate operational precision, the BCS operates at speeds of up to 45 to 55 finished sacks per minute. Fabric rolls feed smoothly into the system, passing a high-accuracy, servo-driven cutting head configured for thermal heating to prevent weave unraveling. Slices then glide automatically along a modular belt conveyor, which executes an automated single/double folding of the bottom seam. This bottom is reinforced using a heavy-duty lockstitch sewing machine with synchronized thread trimming. The result is deep puncture-resistant, airtight bag seals that support up to 50kg payloads securely.',
    featuresTitle: 'Performance Features & Benefits',
    features: [
      'Fully automated, touch-screen PLC controlled continuous roll-to-bag cutting and folding loop',
      'Servo-controlled high-precision cutting knives providing heat-melt edge sealing',
      'Synchronized continuous multi-needle lockstitching station with automated thread break detection',
      'Dual-side flat folding and gusseting capabilities to accommodate heavy-volume packing shapes',
      'Automatic batch sorting, magnetic counting conveyors, and finished bag stack collection'
    ],
    technicalSpecs: {
      'Sack Production Speed': 'Up to 45 - 55 finished bags per minute (depending on bag width and length)',
      'Usable Folding Fabric Width': '300 mm to 850 mm',
      'Finished Sack Length Range': '500 mm to 1400 mm',
      'Sewing Head': 'High speed heavy-duty Lohia/Union Special industrial sewing machine',
      'Cutting Tech Options': 'Hot heat-melt cutter (prevent loose strings), cold knife, or wave-cut profiles',
      'Power Consumption': 'Highly optimized variable frequency drives for maximum electric saving',
      'Seaming Folding Width': '20 mm to 45 mm flat bottom single/double folding width'
    }
  }
};
