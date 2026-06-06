import { useEffect } from 'react';
import { pageSEO } from '../data';

interface SEOProps {
  path: string;
  defaultTitle?: string;
  defaultDesc?: string;
}

export default function SEO({ path, defaultTitle = "Fortune Flexipack - Quality Flexible Packaging", defaultDesc = "Raising the bar in flexible packaging innovation." }: SEOProps) {
  useEffect(() => {
    const seo = pageSEO[path];
    const title = seo?.title || defaultTitle;
    const description = seo?.description || defaultDesc;

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update meta keywords if available
    if (seo?.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', seo.keywords);
    }
  }, [path, defaultTitle, defaultDesc]);

  return null;
}
