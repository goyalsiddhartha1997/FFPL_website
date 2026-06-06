import { UseCase, ProductType, PageMeta } from './types';

export const LOGO_URL = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/efGNDncQ59bzjOd5/ffpl-new-logo-CsYnWQTzdtmRVjfT.png';

export const HERO_BG_IMAGE = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop'; // High-quality industrial construction/architectural blue theme background
export const FACTORY_IMAGE_1 = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'; // Modern manufacturing plant
export const FACTORY_IMAGE_2 = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'; // Factory automation
export const WIDE_BANNER_IMAGE = 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop'; // Industrial plant dusk wide banner
export const QUALITY_CONTROLLER_IMAGE = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop'; // Quality checks
export const WIDE_HDPE_FEATURE_IMAGE = 'https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=1200&auto=format&fit=crop'; // Close up of cargo/mesh industrial textures

export const useCases: UseCase[] = [
  {
    id: 'tea',
    title: 'Tea',
    text: "A morning in India often begins with a steaming cup of tea, a ritual shared by millions across the globe. For most, tea is more than a drink—it's a source of freshness enjoyed multiple times a day. Today, India stands as the world's second-largest tea producer after China, while holding the top spot in both production and consumption of black tea. The country primarily produces three varieties: CTC tea, green tea, and loose leaf tea.",
    image: 'https://i.imgur.com/oCXgcKL.jpeg',
    link: '/tea-packaging'
  },
  {
    id: 'salt',
    title: 'Salt',
    text: "An Indian meal feels incomplete without a touch of salt, a sentiment shared across kitchens worldwide. Beyond its taste, salt is essential for maintaining health and enhancing every dish we enjoy daily. India ranks among the top producers of salt globally, contributing significantly to both domestic and international demand. The country primarily produces three varieties: sea salt, lake salt, and rock salt, each valued for its unique texture and mineral content.",
    image: 'https://i.imgur.com/ekEx9R2.jpeg',
    link: '/salt-packaging'
  },
  {
    id: 'rice',
    title: 'Rice',
    text: "Rice is the world's most important staple food, cultivated on nearly every continent. Each year, approximately 500 million tons of rice are harvested globally, with roughly 10% of this being exported to international markets. The vast majority, about 90%, is produced and consumed within Asia, particularly in countries like China, India, Indonesia, and Bangladesh, underscoring the region's critical role in global rice production and consumption.",
    image: 'https://i.imgur.com/nDGRO2Q.jpeg',
    link: '/rice-packaging'
  },
  {
    id: 'packed-foods',
    title: 'Packed Foods',
    text: "When your product line includes a diverse range of consumer goods, it's essential to partner with a packaging supplier who can fulfill your evolving needs for packaging pouches. We offer versatile packaging solutions for products ranging from as small as 1 gram up to 20 kilograms, allowing you to present your entire product range effectively without compromising on your brand's consistent theme or the quality of your packaging.",
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/packed-foods-fC5jna8VtLJb4z5p.png',
    link: '/packed-foods-packaging'
  },
  {
    id: 'dog-feed',
    title: 'Dog Feed',
    text: "Premium pets deserve premium protection. Dog feed and pet foods are highly sensitive to moisture, oxidation, and pest infestation. Our specialized multi-layer laminated bags feature excellent barrier materials and air-tight resealable seals to ensure that kibble, treats, and dry food retain their nutritional value, fresh flavor, and crunchy texture from the factory floor to the pet bowl.",
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_11-bZr48izIsTxg23y4.png',
    link: '/dog-feed-packaging'
  },
  {
    id: 'pulses',
    title: 'Pulses',
    text: "Pulses are an essential source of protein and play a crucial role in maintaining a healthy diet, supporting sustainable food production, and ensuring food security. India accounts for 35% of the world's production and consumption of pulses, making it a key player in the global pulse market. It is believed that chickpeas and Indian-type lentils may have been first domesticated in the Indian subcontinent, highlighting India's historical significance in pulse cultivation.",
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/pulses-dqxZHRruhU4llbZS.png',
    link: '/pulses-packaging'
  },
  {
    id: 'sugar',
    title: 'Sugar',
    text: "Sugar, also known as sucrose, is a fundamental part of our daily diet, consumed in various forms every day. Although we often view sugar simply as a vital food ingredient, it is also a major industry that significantly impacts economies around the world. In India alone, the sugar sector provides livelihoods to over 50 million farmers, making it a crucial component of the agricultural economy.",
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/sugar-onscVmSdBj3xJd4p.png',
    link: '/sugar-packaging'
  },
  {
    id: 'detergent',
    title: 'Detergent',
    text: "Detergent is used by everyone for washing clothes, utensils, or vehicles. In most Indian homes, the word detergent typically refers to laundry detergent rather than hand soap or other cleaning agents. Detergents are mostly available in powdered form. In India, four main types of detergents are used: anionic, cationic, amphoteric, and non-ionic.",
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/detergent-1UllCMHmSC8DQEdw.png',
    link: '/detergent-packaging'
  }
];

export const productsList: ProductType[] = [
  {
    id: 'printed-laminated-rolls',
    name: 'Printed Laminated Rolls',
    url: '/printed-laminated-rolls',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/printed-rolls-g8zSHRcStHNuFrl7.jpg',
    description: "At Fortune Flexipack, we offer premium quality Printed Laminated Rolls, with complimentary design consultation and services that help you elevate the overall appearance of your product. We manufacture printed laminated rolls of the width ranging from 50mm to 1300mm.",
    benefits: [
      "Provides customised packaging options",
      "Cost-effective in the long run",
      "Uniform tension across the width",
      "Customization and product packaging flexibility"
    ],
    technicalDetails: {
      sizeRange: "50 mm to 1300 mm in width",
      materials: "LDPE film, HST BOPP Film, CPP film, PET metalized, PET window metalized, aluminium foil, plain PET, PET (matt/gloss) and BOPP (matt/gloss/matt & gloss combination)"
    },
    specialties: [
      "Complimentary design consultation and services",
      "Rotogravure printing for long-lasting impressions",
      "Premium quality raw materials",
      "Through and through inspection at various stages"
    ]
  },
  {
    id: 'plain-laminated-rolls',
    name: 'Plain Laminated Rolls',
    url: '/plain-laminated-rolls',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/plain-laminated-rolls-1rQHBu0WxAV7VXkS.jpg',
    description: "Fully transparent laminated rolls that can be used for maximum product display. Plain laminated rolls are an economical alternative that brands often use for their pilot projects or pilot products. We manufacture plain print film stocks of the width ranging from 50mm to 1300mm width.",
    benefits: [
      "Maximum product visibility through transparency",
      "Economical packaging solution",
      "Ideal for pilot products and new launches",
      "Available in widths from 50mm to 1300mm"
    ],
    technicalDetails: {
      sizeRange: "50 mm to 1300 mm width",
      materials: "LDPE film, BOPP Film, CPP film, plain PET, and other high-grade non-printed film combinations"
    }
  },
  {
    id: 'hdpepp-tapes-tap',
    name: 'HDPE/PP Tapes (TAP)',
    url: '/hdpepp-tapes-tap',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1-WkIxvIdRpvK70fHS.png',
    description: "In the world of woven packaging, the tape is considered as the soul of bags as the quality depends more or less on it.",
    benefits: [
      "High tensile strength and elongation protection",
      "Consistent quality across production runs",
      "Available in customized HDPE and PP variants",
      "Used as the base material for all circular loom fabrics and woven bags"
    ]
  },
  {
    id: 'hdpepp-woven-fabrics-coateduncoated-wf',
    name: 'HDPE/PP Woven Fabrics (Coated/Uncoated) (WF)',
    url: '/hdpepp-woven-fabrics-coateduncoated-wf',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/3-USYc2GXKcDPdbG2r.png',
    description: "Without fabric, woven packaging would be the next impossible thing unless we get some other viable alternative.",
    benefits: [
      "Available in both professional coated and uncoated variants",
      "Extremely high strength-to-weight ratio for industrial safety",
      "Optional high grade UV resistant formulation available",
      "Suitable for a wide range of logistics and packaging industries"
    ]
  },
  {
    id: 'pp-woven-bags-wpp',
    name: 'PP Woven Bags (WPP)',
    url: '/pp-woven-bags-wpp',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_1-NUAvjhV11UPUJ5Qt.png',
    description: "Woven bags are manufactured with the help of Woven Fabric. These kinds of bags are widely used in the packaging industry.",
    benefits: [
      "High load-bearing capacity for agricultural and bulk storage",
      "Excellent resistance to moisture, humidity, and active chemicals",
      "Lightweight yet remarkably engineered for tear resistance",
      "Fully customizable sizes, mesh configurations, and specifications"
    ]
  },
  {
    id: 'printed-and-laminated-woven-pp-bags-plwpp',
    name: 'Printed and Laminated Woven PP Bags (PLWPP)',
    url: '/printed-and-laminated-woven-pp-bags-plwpp',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_11-bZr48izIsTxg23y4.png',
    description: "Biaxial Orientation process results in increased toughness, enhanced clarity and quite improved stiffness.",
    benefits: [
      "Vibrant high-quality multi-colour rotogravure printing",
      "Hermetic moisture, dust, and particulate resistant lamination layer",
      "Enhanced premium retail shelf appeal with glossy or matte finishing",
      "Excellent durability of BOPP laminated layer to secure brands"
    ]
  },
  {
    id: 'printed-and-laminated-woven-pp-bottom-gusset-bags',
    name: 'Printed and Laminated Woven PP Bottom Gusset Bags',
    url: '/printed-and-laminated-woven-pp-bottom-gusset-bags',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/untitled-design-3-z8PpvK0wSK0DTl99.png',
    description: "Ideal for medium to large amounts of content. Provide stability & an aesthetic look.",
    benefits: [
      "Precision engineered expandable bottom gussets",
      "Stands upright cleanly on grocery shelves to command user attention",
      "Excellent brand promotion surface area with top and side visibility",
      "Highly food-safe packaging structure with robust sealing fields"
    ]
  },
  {
    id: 'printed-and-laminated-woven-pp-retail-shopping-bags',
    name: 'Printed and Laminated Woven PP Retail Shopping Bags',
    url: '/printed-and-laminated-woven-pp-retail-shopping-bags',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/untitled-design-3-LSX271zUKaRgfuNH.png',
    description: "With an increase in the shopping patterns, we see shopping bags often.",
    benefits: [
      "Premium ecological substitute: reusable, heavy-duty and recyclable",
      "Vibrant full-color promotional prints for outstanding brand visibility",
      "Configurable handle structures including woven or plastic loops",
      "Incredible load-bearing capacity for everyday general shopping needs"
    ]
  },
  {
    id: 'reprocessed-granules-rp',
    name: 'Reprocessed Granules (RP)',
    url: '/reprocessed-granules-rp',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_19-K2rqPVJpKgXUCGgJ.png',
    description: "Reprocessed granules are granules which are made by recycling waste materials produced during the manufacturing of different products. In the packaging industry, it can be the waste generated from the manufacturing of tapes, fabrics or bags and other related products. Often in the manufacturing process, a large amount of waste is produced, and reprocessing them into granules is a great option. These granules are then again used by certain industries. At Fortune Flexipack, we mainly reprocess the PP granules which cater to the need of the injection moulding industry, which makes products for household use, automobile parts etc.",
    benefits: [
      "Sustainable zero-waste manufacturing cycle",
      "Reduces aggregate environmental and industrial footprints",
      "Highly cost-effective compound feed formulation",
      "Perfect raw material consistency for injection molding plants"
    ]
  }
];

export const pageSEO: Record<string, PageMeta> = {
  '/': {
    title: "Fortune Flexipack - Quality Packaging [BOPP Tea Bags Packaging] | Fortune Flexipack",
    description: "Discover premium HDPE and PP woven bags, along with laminated BOPP tea bags packaging solutions. Elevate your packaging with Fortune Flexipack.",
    keywords: "PP woven bags, PP Fabric Roll, BOPP Tea Bags Packaging"
  },
  '/about-us': {
    title: "Fortune Flexipack - Quality Packaging | About Us | Fortune Flexipack",
    description: "Discover premium HDPE and PP woven bags, along with BOPP laminated tea bag packaging solutions tailored for Tata. Elevate your packaging standards with us."
  },
  '/machinery': {
    title: "Machinery & Technical Precision Plant | Fortune Flexipack",
    description: "Explore our world-class machinery including 34 circular looms, 9-color rotogravure press, extrusion lamination, flexo printing, tubers and leader bag systems."
  },
  '/quality-assurance': {
    title: "Eco-Friendly Packaging Solutions | Fortune Flexipack",
    description: "Fortune Flexipack specializes in HDPE and PP woven bags, along with BOPP laminated tea bag packaging, ensuring high quality and sustainability."
  },
  '/plastic-packaging-use': {
    title: "BOPP Packaging Uses | Fortune Flexipack",
    description: "Get in touch with Fortune Flexipack for high-quality packaging solutions, including HDPE, PP woven bags, and BOPP laminated tea bags packaging."
  },
  '/product-type': {
    title: "Product Type | Fortune Flexipack",
    description: "Explore our range of premium custom laminated rolls, woven bags, and eco-friendly packaging structures at Fortune Flexipack."
  },
  '/printed-laminated-rolls': {
    title: "Printed Laminated Rolls | Fortune Flexipack",
    description: "High-quality custom printed laminated wrapping films and roll stocks ranging from 50mm to 1300mm."
  }
};
