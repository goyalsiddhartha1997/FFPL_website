export interface UseCasePageContent {
  title: string;
  heading: string;
  bg: string;
  image: string;
  paragraphs: Array<{ title: string; text: string }>;
}

export const useCasePages: Record<string, UseCasePageContent> = {
  '/tea-packaging': {
    title: 'TEA',
    heading: 'Tea',
    bg: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1200&auto=format&fit=crop',
    image: 'https://i.imgur.com/oCXgcKL.jpeg',
    paragraphs: [
      {
        title: 'Introduction',
        text: "An Indian morning is incomplete without a cup of tea, so is the case in most parts of the world. Tea is consumed in the name of freshness and probably not just for once in a day. At present, India is the second-largest producer after China of tea globally. However, India is the largest producer and consumer of black tea globally. India produces three types of tea, CTC tea, loose leaf tea, and Green tea."
      },
      {
        title: 'History of Tea',
        text: "India's vast tea empire's foundation was built by the Britishers back in the early 1800s. The cultivation began on the mass scale during the same time. The tea plants were found growing in the Upper Brahmaputra Valley. The first Indian tea from India was sent to England for public sale in 1823. Today, India is one of the world's largest tea producers, with 13,000 gardens and a workforce of more than 2 million people involved in its production."
      },
      {
        title: 'Why Your Tea Products Need Unique Packaging',
        text: "Tea leaves are sensitive in nature, and to preserve their aroma, the product needs to be packed in an airtight bag. Vacuum packing is popular for tea packaging as it keeps its freshness 100% till it reaches the consumers. As tea is more than just a beverage for most Indians, the design should be done with soothing colors and creative taglines to make the packaging aesthetically pleasing to the eyes."
      }
    ]
  },
  '/salt-packaging': {
    title: 'SALT',
    heading: 'Salt',
    bg: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop',
    image: 'https://i.imgur.com/ekEx9R2.jpeg',
    paragraphs: [
      {
        title: 'Introduction',
        text: "An Indian meal feels incomplete without a touch of salt, a sentiment shared across kitchens worldwide. Beyond its taste, salt is essential for maintaining health and enhancing every dish we enjoy daily. India ranks among the top producers of salt globally, contributing significantly to both domestic and international demand. The country primarily produces three varieties: sea salt, lake salt, and rock salt, each valued for its unique texture and mineral content."
      },
      {
        title: 'Why Your Salt Products Need Unique Packaging',
        text: "Salt packaging must protect the product from moisture and contamination while maintaining its purity. Our flexible packaging solutions for salt are designed to be moisture-resistant, strong, and tamper-proof, ensuring the product reaches customers in perfect condition. Eye-catching designs help brands stand out in a competitive market."
      }
    ]
  },
   '/rice-packaging': {
    title: 'RICE',
    heading: 'Rice',
    bg: 'https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=1200&auto=format&fit=crop',
    image: 'https://i.imgur.com/nDGRO2Q.jpeg',
    paragraphs: [
      {
        title: 'Introduction',
        text: "Rice is the world's most important staple food, cultivated on nearly every continent. Each year, approximately 500 million tons of rice are harvested globally, with roughly 10% of this being exported to international markets. The vast majority, about 90%, is produced and consumed within Asia, particularly in countries like China, India, Indonesia, and Bangladesh, underscoring the region's critical role in global rice production and consumption."
      },
      {
        title: 'Why Your Rice Products Need Unique Packaging',
        text: "Rice packaging must preserve freshness, prevent moisture ingress, and withstand the weight and handling of distribution. Our woven PP bags and laminated rolls for rice are designed to be strong, food-safe, and visually appealing, allowing brands to showcase their product quality while ensuring safe delivery to the end consumer."
      }
    ]
  },
  '/packed-foods-packaging': {
    title: 'PACKED FOODS',
    heading: 'Packed Foods',
    bg: 'https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=1200&auto=format&fit=crop',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/packed-foods-fC5jna8VtLJb4z5p.png',
    paragraphs: [
      {
        title: 'Introduction',
        text: "When your product line includes a diverse range of consumer goods, it's essential to partner with a packaging supplier who can fulfill your evolving needs for packaging pouches. We offer versatile packaging solutions for products ranging from as small as 1 gram up to 20 kilograms, allowing you to present your entire product range effectively without compromising on your brand's consistent theme or the quality of your packaging."
      },
      {
        title: 'Why Packed Foods Need Premium Packaging',
        text: "Packed food products require packaging that is hygienic, durable, and visually engaging. Our flexible packaging materials meet food safety standards while offering excellent barrier properties against moisture, oxygen, and light. Custom printing allows brands to communicate their story and attract customers at the point of sale."
      }
    ]
  },
  '/dog-feed-packaging': {
    title: 'DOG FEED',
    heading: 'Dog Feed',
    bg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/1_11-bZr48izIsTxg23y4.png',
    paragraphs: [
      {
        title: 'Introduction',
        text: "Premium pets deserve premium protection. Dog feed and pet foods are highly sensitive to moisture, oxidation, and pest infestation. Our specialized multi-layer laminated bags feature excellent barrier materials and air-tight resealable seals to ensure that kibble, treats, and dry food retain their nutritional value, fresh flavor, and crunchy texture from the factory floor to the pet bowl."
      },
      {
        title: 'Why Dog Feed Needs Premium Packaging',
        text: "Dog food packaging requires high burst strength to prevent bags from tearing under the weight of bulk feeds, combined with professional aroma lock properties. Our multi-layer co-extruded films and laminated rolls ensure grease resistance, absolute barrier seals, and high-fidelity food-grade prints that convey trust and quality on store shelves."
      }
    ]
  },
  '/pulses-packaging': {
    title: 'PULSES',
    heading: 'Pulses',
    bg: 'https://images.unsplash.com/photo-1547825407-2d060104b7c8?q=80&w=1200&auto=format&fit=crop',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/pulses-dqxZHRruhU4llbZS.png',
    paragraphs: [
      {
        title: 'Introduction',
        text: "Pulses are an essential source of protein and play a crucial role in maintaining a healthy diet, supporting sustainable food production, and ensuring food security. India accounts for 35% of the world's production and consumption of pulses, making it a key player in the global pulse market. It is believed that chickpeas and Indian-type lentils may have been first domesticated in the Indian subcontinent, highlighting India's historical significance in pulse cultivation."
      },
      {
        title: 'Why Your Pulses Need Unique Packaging',
        text: "Pulse packaging must maintain product freshness, prevent pest infestation, and clearly communicate nutritional value to the consumer. Our flexible packaging solutions for pulses are robust, food-safe, and feature excellent print quality so your brand message comes through clearly on every bag."
      }
    ]
  },
  '/sugar-packaging': {
    title: 'SUGAR',
    heading: 'Sugar',
    bg: 'https://images.unsplash.com/photo-1622484211148-716598e04141?q=80&w=1200&auto=format&fit=crop',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/sugar-onscVmSdBj3xJd4p.png',
    paragraphs: [
      {
        title: 'Introduction',
        text: "Sugar, also known as sucrose, is a fundamental part of our daily diet, consumed in various forms every day. Although we often view sugar simply as a vital food ingredient, it is also a major industry that significantly impacts economies around the world. In India alone, the sugar sector provides livelihoods to over 50 million farmers, making it a crucial component of the agricultural economy."
      },
      {
        title: 'Why Your Sugar Products Need Unique Packaging',
        text: "Sugar packaging must provide excellent moisture barriers to prevent clumping, while being strong enough for handling during distribution. Our laminated woven bags and flexible rolls for sugar are designed for durability, food safety compliance, and superior print aesthetics to enhance brand appeal."
      }
    ]
  },
  '/detergent-packaging': {
    title: 'DETERGENT',
    heading: 'Detergent',
    bg: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=1200&auto=format&fit=crop',
    image: 'https://assets.zyrosite.com/efGNDncQ59bzjOd5/detergent-1UllCMHmSC8DQEdw.png',
    paragraphs: [
      {
        title: 'Introduction',
        text: "Detergent is used by everyone for washing clothes, utensils, or vehicles. In most Indian homes, the word detergent typically refers to laundry detergent rather than hand soap or other cleaning agents. Detergents are mostly available in powdered form. In India, four main types of detergents are used: anionic, cationic, amphoteric, and non-ionic."
      },
      {
        title: 'Why Your Detergent Products Need Unique Packaging',
        text: "Detergent packaging must be chemically resistant, moisture-proof, and capable of holding heavy loads. Our woven PP bags and laminated packaging solutions are ideal for powdered detergents, offering excellent strength, sealability, and vibrant print options that help communicate product quality and brand identity."
      }
    ]
  }
};
