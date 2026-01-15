import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Mail, Instagram, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (l: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { label: translations.common.home[lang], path: '/' },
    { label: translations.common.about[lang], path: '/about' },
    { label: translations.common.theWork[lang], path: '/work' },
    { label: translations.common.contact[lang], path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#8C2F2B]/10 selection:text-[#8C2F2B]">
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-[#F4EFE8]/95 backdrop-blur-md border-b border-[#8C2F2B]/5">
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-[24.5px] serif font-medium tracking-[0.15em] text-[#8C2F2B]">
              OMBHUMIDHATA
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[13px] tracking-[0.2em] uppercase hover:text-[#8C2F2B] transition-colors duration-500 ${
                    location.pathname === item.path ? 'text-[#8C2F2B] font-semibold' : 'text-[#4a4543]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
                className="flex items-center space-x-2 text-[12px] font-bold uppercase tracking-widest text-[#8C2F2B] border border-[#8C2F2B]/10 px-4 py-2 soft-button hover:bg-[#8C2F2B] hover:text-[#F4EFE8] transition-all duration-500"
              >
                <Globe size={14} />
                <span>{lang === 'en' ? 'DE' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
                className="text-xs font-bold text-[#8C2F2B] tracking-widest"
              >
                {lang === 'en' ? 'DE' : 'EN'}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#8C2F2B] p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden bg-[#F4EFE8] h-screen overflow-hidden fixed inset-0 top-0 z-50 animate-in fade-in duration-500">
            <div className="flex justify-end p-8 h-20">
               <button onClick={() => setIsOpen(false)} className="text-[#8C2F2B]">
                 <X size={28} />
               </button>
            </div>
            <div className="flex flex-col space-y-10 p-12 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl serif text-[#4a4543] hover:text-[#8C2F2B] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Special Blessing Container */}
      <section className="py-24 px-6 bg-white/30 border-t border-[#8C2F2B]/5">
        <div className="w-full text-center relative max-w-5xl mx-auto">
           <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#8C2F2B] opacity-10">
              <Quote size={60} fill="currentColor" stroke="none" />
           </div>
           <p className="serif italic text-3xl md:text-4xl lg:text-5xl text-[#8C2F2B] leading-tight">
             {translations.common.blessing[lang]}
           </p>
        </div>
      </section>

      {/* Single Line Elegant Footer */}
      <footer className="bg-[#FAF9F6] border-t border-[#8C2F2B]/10 py-8 px-6 lg:px-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2F2B]">
             <Link to="/" className="hover:opacity-70 transition-opacity uppercase">OMBHUMIDHATA</Link>
             <span className="opacity-20">|</span>
             <p className="text-[#4a4543] font-normal lowercase tracking-normal opacity-70">© 2008-2026 Christian Arndt</p>
          </div>

          <div className="flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium text-[#4a4543]">
            <Link to="/about" className="hover:text-[#8C2F2B] transition-colors">{translations.common.about[lang]}</Link>
            <Link to="/work" className="hover:text-[#8C2F2B] transition-colors">{translations.common.theWork[lang]}</Link>
            <Link to="/contact" className="hover:text-[#8C2F2B] transition-colors">{translations.common.contact[lang]}</Link>
            <span className="opacity-20">|</span>
            <div className="flex items-center space-x-4">
               <a href="mailto:healing@ombhumidhata.com" className="hover:text-[#8C2F2B] transition-colors"><Mail size={16} strokeWidth={1.5} /></a>
               <a href="#" className="hover:text-[#8C2F2B] transition-colors"><Instagram size={16} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;