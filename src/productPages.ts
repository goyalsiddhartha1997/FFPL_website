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
  };
  specialties?: string[];
}

export const productPages: Record<string, ProductPageContent> = {
  '/printed-laminated-rolls': {
    title: 'Printed Laminated Rolls',
    label: 'PRINTED LAMINATED ROLLS',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/printed-rolls-g8zSHRcStHNuFrl7.jpg',
    introduction: "We offer multilayer Printed laminated rolls that can be further used to pack your products at your convenience. You can choose from gloss finish, matte finishing or a combination of both gloss & Matt finish. We provide printed laminated roll stocks in various sizes ranging from 50 mm to 1300 mm in width. We offer to print up to 9 different colours through our rotogravure printing presses. These machines ensure premium print colour quality and long-lasting impressions. Printed Laminated rolls are often used in industries like Food & Beverages, Personal Care, Cosmetics, Pharmaceuticals, etc. To convert the roll form into a packed product, FFS machines are used to form, fill & seal the pouch at the customer's end. If you think about why you should get flexible packaging printed laminated roll forms for your products from Fortune Flexipack, the answer is superior quality and extensive industry experience. At Fortune Flexipack, we strictly follow industry standards, wherein your product goes into multiple rounds of inspection before it reaches your facility. We use SAP S4 Hana for product and process management that helps maintain product consistency along with delivering your orders on time. We have Laminated rolls available with both metalized and non-metallized layers that you can choose from. You can also customise these printed stock rolls by adding the finishing touch with gloss, matte or a combination of both.",
    benefitsTitle: "Benefits of Printed Laminated Rolls",
    benefits: [
      "Provides customised packaging options",
      "Cost-effective in the long run",
      "Uniform tension across the width",
      "Customization and product packaging flexibility"
    ],
    techDetails: {
      sizeRange: "50 mm to 1300 mm",
      materials: "LDPE film, HST BOPP Film, CPP film, PET metalized, PET window metalized, aluminium foil, plain PET, PET (matt/gloss) and BOPP (matt/gloss/matt & gloss combination)"
    },
    specialties: [
      "Complimentary design consultation and services",
      "Rotogravure printing for long-lasting impressions",
      "Premium quality raw materials",
      "Through and through inspection at various stages"
    ]
  },
  '/plain-laminated-rolls': {
    title: 'Plain Laminated Rolls',
    label: 'PLAIN LAMINATED ROLLS',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/plain-laminated-rolls-1rQHBu0WxAV7VXkS.jpg',
    introduction: "Fully transparent laminated rolls that can be used for maximum product display. Plain laminated rolls are an economical alternative that brands often use for their pilot projects or pilot products. We manufacture plain print film stocks of the width ranging from 50mm to 1300mm width. Plain laminated rolls are ideal when you want the product itself to be the hero of the packaging. These rolls offer excellent clarity and are available in multiple material combinations to suit different product requirements.",
    benefitsTitle: "Benefits of Plain Laminated Rolls",
    benefits: [
      "Maximum product visibility through transparency",
      "Economical packaging solution",
      "Ideal for pilot products and new launches",
      "Available in widths from 50mm to 1300mm"
    ],
    techDetails: {
      sizeRange: "50 mm to 1300 mm",
      materials: "LDPE film, BOPP Film, CPP film, plain PET, and other film combinations"
    }
  },
  '/hdpepp-tapes-tap': {
    title: 'HDPE/PP Tapes (TAP)',
    label: 'HDPE/PP TAPES (TAP)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1-WkIxvIdRpvK70fHS.png',
    introduction: "In the world of woven packaging, the tape is considered as the soul of bags as the quality depends more or less on it. HDPE and PP tapes are the fundamental building blocks of woven packaging. Our tapes are manufactured using high-grade raw materials and precision machinery to ensure consistent denier, tenacity, and elongation properties. The quality of the tape directly impacts the strength and durability of the final woven product.",
    benefitsTitle: "Benefits of HDPE/PP Tapes",
    benefits: [
      "High tensile strength",
      "Consistent quality across production runs",
      "Available in HDPE and PP variants",
      "Used as the base material for woven fabrics and bags"
    ]
  },
  '/hdpepp-woven-fabrics-coateduncoated-wf': {
    title: 'HDPE/PP Woven Fabrics (Coated/Uncoated) (WF)',
    label: 'HDPE/PP WOVEN FABRICS (WF)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/3-USYc2GXKcDPdbG2r.png',
    introduction: "Without fabric, woven packaging would be the next impossible thing unless we get some other viable alternative. HDPE and PP woven fabrics are made by interlacing HDPE or PP tapes on circular or flat looms. These fabrics are available in both coated and uncoated forms. Coated fabrics offer additional moisture resistance and strength, making them suitable for a wider range of applications including agricultural, industrial, and consumer packaging.",
    benefitsTitle: "Benefits of HDPE/PP Woven Fabrics",
    benefits: [
      "Available in coated and uncoated variants",
      "High strength-to-weight ratio",
      "UV resistant options available",
      "Suitable for a wide range of industries"
    ]
  },
  '/pp-woven-bags-wpp': {
    title: 'PP Woven Bags (WPP)',
    label: 'PP WOVEN BAGS (WPP)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_1-NUAvjhV11UPUJ5Qt.png',
    introduction: "Woven bags are manufactured with the help of Woven Fabric. These kinds of bags are widely used in the packaging industry. PP Woven Bags are sturdy, lightweight, and cost-effective, making them ideal for packaging a wide range of products including agricultural commodities, construction materials, chemicals, and food products. They can be customized in terms of size, weight, and design to meet specific customer requirements.",
    benefitsTitle: "Benefits of PP Woven Bags",
    benefits: [
      "High load-bearing capacity",
      "Resistant to moisture and chemicals",
      "Lightweight yet strong",
      "Customizable size and specifications"
    ]
  },
  '/printed-and-laminated-woven-pp-bags-plwpp': {
    title: 'Printed and Laminated Woven PP Bags (PLWPP)',
    label: 'PRINTED AND LAMINATED WOVEN PP BAGS (PLWPP)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_11-bZr48izIsTxg23y4.png',
    introduction: "Biaxial Orientation process results in increased toughness, enhanced clarity and quite improved stiffness. Printed and Laminated Woven PP Bags combine the strength of woven polypropylene with the aesthetic appeal of high-quality printing and lamination. These bags are widely used for packaging food products, fertilizers, seeds, and other consumer goods. The lamination provides an additional barrier against moisture, dust, and contamination while allowing vibrant brand graphics to be printed on the surface.",
    benefitsTitle: "Benefits of Printed and Laminated Woven PP Bags",
    benefits: [
      "High-quality multi-colour printing",
      "Moisture and dust resistant lamination",
      "Enhanced product shelf appeal",
      "Available in various sizes and specifications"
    ]
  },
  '/printed-and-laminated-woven-pp-bottom-gusset-bags': {
    title: 'Printed and Laminated Woven PP Bottom Gusset Bags',
    label: 'PRINTED AND LAMINATED WOVEN PP BOTTOM GUSSET BAGS',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/untitled-design-3-z8PpvK0wSK0DTl99.png',
    introduction: "Ideal for medium to large amounts of content. Provide stability & an aesthetic look. Bottom Gusset Bags feature an expandable bottom panel that allows the bag to stand upright when filled, providing excellent stability on shelves. This design is particularly popular for retail packaging of food products such as rice, dog feed, sugar, and pulses. The gusseted bottom maximizes storage volume while the printed and laminated surface ensures an attractive retail appearance.",
    benefitsTitle: "Benefits of Bottom Gusset Bags",
    benefits: [
      "Stands upright for better shelf display",
      "Maximized storage capacity",
      "Excellent for retail packaging",
      "Available with high-quality printing and lamination"
    ]
  },
  '/printed-and-laminated-woven-pp-retail-shopping-bags': {
    title: 'Printed and Laminated Woven PP Retail Shopping Bags',
    label: 'PRINTED AND LAMINATED WOVEN PP RETAIL SHOPPING BAGS',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/untitled-design-3-LSX271zUKaRgfuNH.png',
    introduction: "With an increase in the shopping patterns, we see shopping bags often. Our Printed and Laminated Woven PP Retail Shopping Bags are durable, reusable, and eco-friendly alternatives to single-use plastic bags. These bags can be customized with your brand logo and design, making them excellent marketing tools. They are strong enough to carry heavy loads and are available in a variety of sizes, styles, and handle configurations.",
    benefitsTitle: "Benefits of Printed and Laminated Woven PP Retail Shopping Bags",
    benefits: [
      "Reusable and eco-friendly",
      "Excellent brand visibility with custom printing",
      "Available in multiple sizes and handle options",
      "Strong load-bearing capacity"
    ]
  },
  '/reprocessed-granules-rp': {
    title: 'Reprocessed Granules (RP)',
    label: 'REPROCESSED GRANULES (RP)',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_19-K2rqPVJpKgXUCGgJ.png',
    introduction: "Reprocessed granules are granules which are made by recycling waste materials produced during the manufacturing of different products. In the packaging industry, it can be the waste generated from the manufacturing of tapes, fabrics or bags and other related products. Often in the manufacturing process, a large amount of waste is produced, and reprocessing them into granules is a great option. These granules are then again used by certain industries. At Fortune Flexipack, we mainly reprocess the PP granules which cater to the need of the injection moulding industry, which makes products for household use, automobile parts etc.",
    benefitsTitle: "Benefits of Reprocessed Granules",
    benefits: [
      "Sustainable manufacturing practice",
      "Reduces aggregate environmental and industrial footprints",
      "Highly cost-effective raw material alternative",
      "Suitable for injection moulding industry"
    ]
  }
};
