import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Mail } from 'lucide-react';
import { LOGO_URL } from '../data';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export default function Header({ currentPath, navigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'use' | 'type' | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<'use' | 'type' | null>(null);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [currentPath]);

  const productUseLinks = [
    { name: 'Tea Packaging', path: '/tea-packaging' },
    { name: 'Salt Packaging', path: '/salt-packaging' },
    { name: 'Rice Packaging', path: '/rice-packaging' },
    { name: 'Packed Foods Packaging', path: '/packed-foods-packaging' },
    { name: 'Dog Feed Packaging', path: '/dog-feed-packaging' },
    { name: 'Pulses Packaging', path: '/pulses-packaging' },
    { name: 'Sugar Packaging', path: '/sugar-packaging' },
    { name: 'Detergent Packaging', path: '/detergent-packaging' },
  ];

  const productTypeLinks = [
    { name: 'Printed Laminated Rolls', path: '/printed-laminated-rolls' },
    { name: 'Plain Laminated Rolls', path: '/plain-laminated-rolls' },
    { name: 'PE/PP Tapes (TAP)', path: '/hdpepp-tapes-tap' },
    { name: 'HDPE/PP Woven Fabrics (WF)', path: '/hdpepp-woven-fabrics-coateduncoated-wf' },
    { name: 'PP Woven Bags (WPP)', path: '/pp-woven-bags-wpp' },
    { name: 'Printed and Laminated Woven PP Bags (PLWPP)', path: '/printed-and-laminated-woven-pp-bags-plwpp' },
    { name: 'Printed & Laminated Bottom Gusset Bags', path: '/printed-and-laminated-woven-pp-bottom-gusset-bags' },
    { name: 'Printed & Laminated Retail Shopping Bags', path: '/printed-and-laminated-woven-pp-retail-shopping-bags' },
    { name: 'Reprocessed Granules (RP)', path: '/reprocessed-granules-rp' },
  ];

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-brand-blue-dark text-white py-2 px-4 text-xs font-medium border-b border-white/10 flex items-center justify-center gap-4">
        <span className="flex items-center gap-1.5 opacity-90">
          <Mail className="w-3.5 h-3.5 text-brand-accent" />
          Email: <a href="mailto:info@fortuneflexipack.com" className="hover:text-brand-accent transition-colors">info@fortuneflexipack.com</a>
        </span>
      </div>

      {/* Primary Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white text-brand-blue-dark border-b border-gray-100 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          
          {/* Logo on Left */}
          <button 
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
            aria-label="Fortune Flexipack Home"
          >
            <img 
              src={LOGO_URL} 
              alt="Fortune Flexipack Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
              onError={(e) => {
                // Fallback text if logo fails to load
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans font-medium text-[15px]">
            <button
              onClick={() => handleLinkClick('/')}
              className={`py-2 px-1 hover:text-brand-accent cursor-pointer transition-colors ${currentPath === '/' ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-brand-blue-dark'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('/about-us')}
              className={`py-2 px-1 hover:text-brand-accent cursor-pointer transition-colors ${currentPath === '/about-us' ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-brand-blue-dark'}`}
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick('/machinery')}
              className={`py-2 px-1 hover:text-brand-accent cursor-pointer transition-colors ${currentPath === '/machinery' ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-brand-blue-dark'}`}
            >
              Machinery
            </button>
            <button
              onClick={() => handleLinkClick('/quality-assurance')}
              className={`py-2 px-1 hover:text-brand-accent cursor-pointer transition-colors ${currentPath === '/quality-assurance' ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-brand-blue-dark'}`}
            >
              Quality Assurance
            </button>

            {/* Product Use Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('use')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('/plastic-packaging-use')}
                className={`flex items-center gap-1 hover:text-brand-accent cursor-pointer transition-colors ${
                  currentPath === '/plastic-packaging-use' || productUseLinks.some(l => l.path === currentPath)
                    ? 'text-brand-accent'
                    : 'text-brand-blue-dark'
                }`}
              >
                Product Use
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'use' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'use' && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl py-2 flex flex-col z-50 animate-fade-in">
                  <button
                    onClick={() => handleLinkClick('/plastic-packaging-use')}
                    className="px-4 py-2 text-left hover:bg-gray-50 text-brand-blue-dark font-semibold text-xs border-b border-gray-100 mb-1"
                  >
                    All Product Uses
                  </button>
                  {productUseLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`px-4 py-2 text-left hover:bg-gray-50 hover:text-brand-accent text-sm ${currentPath === link.path ? 'text-brand-accent bg-gray-50/50 font-medium' : 'text-gray-700'}`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Type Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('type')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('/product-type')}
                className={`flex items-center gap-1 hover:text-brand-accent cursor-pointer transition-colors ${
                  currentPath === '/product-type' || productTypeLinks.some(l => l.path === currentPath)
                    ? 'text-brand-accent'
                    : 'text-brand-blue-dark'
                }`}
              >
                Product Type
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'type' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'type' && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-100 rounded-lg shadow-xl py-2 flex flex-col z-50 animate-fade-in max-h-[80vh] overflow-y-auto">
                  <button
                    onClick={() => handleLinkClick('/product-type')}
                    className="px-4 py-2 text-left hover:bg-gray-50 text-brand-blue-dark font-semibold text-xs border-b border-gray-100 mb-1"
                  >
                    All Product Categories
                  </button>
                  {productTypeLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`px-4 py-2 text-left hover:bg-gray-50 hover:text-brand-accent text-sm ${currentPath === link.path ? 'text-brand-accent bg-gray-50/50 font-medium' : 'text-gray-700'}`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/careers')}
              className={`py-2 px-1 hover:text-brand-accent cursor-pointer transition-colors ${currentPath === '/careers' ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-brand-blue-dark'}`}
            >
              Careers
            </button>
            
            <button
              onClick={() => handleLinkClick('/contact')}
              className="bg-brand-blue-light hover:bg-brand-accent text-white px-5 py-2.5 rounded-md font-medium select-none cursor-pointer tracking-wide transition-all transform duration-150 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              Contact
            </button>
          </nav>

          {/* Hamburger Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-blue-dark hover:text-brand-accent cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col pt-24 px-6 overflow-y-auto animate-slide-in">
            
            {/* Close trigger integrated */}
            <div className="absolute top-6 right-6">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 bg-gray-50 rounded-full text-brand-blue-dark hover:text-brand-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation options for mobile */}
            <div className="flex flex-col gap-4 font-sans text-lg font-medium text-brand-blue-dark">
              <button
                onClick={() => handleLinkClick('/')}
                className={`text-left py-2 border-b border-gray-50 ${currentPath === '/' ? 'text-brand-accent font-semibold' : ''}`}
              >
                Home
              </button>

              <button
                onClick={() => handleLinkClick('/about-us')}
                className={`text-left py-2 border-b border-gray-50 ${currentPath === '/about-us' ? 'text-brand-accent font-semibold' : ''}`}
              >
                About
              </button>

              <button
                onClick={() => handleLinkClick('/machinery')}
                className={`text-left py-2 border-b border-gray-50 ${currentPath === '/machinery' ? 'text-brand-accent font-semibold' : ''}`}
              >
                Machinery
              </button>

              <button
                onClick={() => handleLinkClick('/quality-assurance')}
                className={`text-left py-2 border-b border-gray-50 ${currentPath === '/quality-assurance' ? 'text-brand-accent font-semibold' : ''}`}
              >
                Quality Assurance
              </button>

              {/* Mobile Product Use Dropdown */}
              <div className="flex flex-col border-b border-gray-50 py-1">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === 'use' ? null : 'use')}
                  className="flex items-center justify-between py-2 text-left"
                >
                  <span>Product Use</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdown === 'use' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'use' && (
                  <div className="flex flex-col pl-4 gap-2.5 py-2 text-[15px] bg-gray-50 rounded-md mt-1 mb-2">
                    <button
                      onClick={() => handleLinkClick('/plastic-packaging-use')}
                      className="text-left text-brand-blue-dark/60 italic hover:text-brand-accent"
                    >
                      View All Uses
                    </button>
                    {productUseLinks.map((link) => (
                      <button
                        key={link.path}
                        onClick={() => handleLinkClick(link.path)}
                        className={`text-left transition-colors hover:text-brand-accent ${currentPath === link.path ? 'text-brand-accent font-medium' : 'text-gray-600'}`}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Product Type Dropdown */}
              <div className="flex flex-col border-b border-gray-50 py-1">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === 'type' ? null : 'type')}
                  className="flex items-center justify-between py-2 text-left"
                >
                  <span>Product Type</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdown === 'type' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'type' && (
                  <div className="flex flex-col pl-4 gap-2.5 py-2 text-[15px] bg-gray-50 rounded-md mt-1 mb-2 max-h-60 overflow-y-auto">
                    <button
                      onClick={() => handleLinkClick('/product-type')}
                      className="text-left text-brand-blue-dark/60 italic hover:text-brand-accent"
                    >
                      View All Categories
                    </button>
                    {productTypeLinks.map((link) => (
                      <button
                        key={link.path}
                        onClick={() => handleLinkClick(link.path)}
                        className={`text-left transition-colors hover:text-brand-accent ${currentPath === link.path ? 'text-brand-accent font-medium' : 'text-gray-600'}`}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleLinkClick('/careers')}
                className={`text-left py-2 border-b border-gray-50 ${currentPath === '/careers' ? 'text-brand-accent font-semibold' : ''}`}
              >
                Careers
              </button>

              <button
                onClick={() => handleLinkClick('/contact')}
                className="mt-6 bg-brand-blue-light text-white text-center py-3 rounded-md hover:bg-brand-accent cursor-pointer transition-colors font-medium shadow-sm"
              >
                Reach Out & Contact
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
