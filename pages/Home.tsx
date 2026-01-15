import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations, treatments, images } from '../translations';

const Home: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations.home;

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={images.home.hero}
            alt="Mountains and Stars at Dawn" 
            className="w-full h-full object-cover grayscale-[0.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#F4EFE8]/80"></div>
        </div>

        <div className="relative z-10 w-full text-center space-y-6 md:space-y-8 px-4 md:px-12">
          <p className="text-[#FAF9F6] text-2xl md:text-3xl lg:text-4xl serif font-light tracking-[0.1em] opacity-95 drop-shadow-sm">
            Christian Arndt, M.A.
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl serif italic text-[#FAF9F6] leading-[1] tracking-wide drop-shadow-md uppercase">
            {translations.common.traditionalHealingArts[lang]}
          </h1>

          <div className="flex justify-center items-start space-x-4 max-w-4xl mx-auto pt-4">
             <span className="text-[#F4B400] opacity-70 mt-1 shrink-0">
                <Quote size={40} fill="currentColor" stroke="none" />
             </span>
             <p className="text-2xl md:text-4xl lg:text-5xl text-[#FAF9F6] serif italic font-light leading-snug drop-shadow-sm">
               {translations.common.blessing[lang]}
             </p>
          </div>

          <div className="pt-12">
            <Link 
              to="/work"
              className="inline-block px-14 py-5 bg-[#8C2F2B]/90 text-[#F4EFE8] soft-button tracking-[0.2em] uppercase text-xs font-bold hover:bg-[#8C2F2B] transition-all duration-700 shadow-2xl shadow-black/20 border border-white/10"
              style={{
                background: 'linear-gradient(135deg, #8C2F2B 0%, #6D2421 100%)'
              }}
            >
              {translations.common.welcome[lang]}
            </Link>
          </div>
        </div>
      </section>

      {/* Narrative Introduction Section */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-[#FAF9F6] w-full">
        <div className="w-full space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#8C2F2B] font-bold opacity-70">
              {t.invitationLabel[lang]}
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl serif text-[#4a4543] leading-[1.4] w-full max-w-4xl mx-auto font-medium">
              {t.softIntroHeadline[lang]}
            </h2>
          </div>

          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 w-full max-w-6xl mx-auto relative gap-x-12 lg:gap-x-20">
            <div className="space-y-10 text-base md:text-lg lg:text-xl text-[#4a4543] font-light leading-relaxed pr-0 md:pr-10">
              <div className="relative">
                <span className="text-6xl float-left mr-4 mt-1 serif text-[#8C2F2B] leading-[0.8] opacity-80">
                  {t.softIntroPara1[lang].charAt(0)}
                </span>
                <p>
                  {t.softIntroPara1[lang].slice(1)}
                </p>
              </div>
              <p>
                {t.softIntroPara2[lang]}
              </p>
            </div>

            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#8C2F2B]/10 -translate-x-1/2"></div>

            <div className="space-y-10 text-base md:text-lg lg:text-xl text-[#4a4543] font-light leading-relaxed pl-0 md:pl-10 pt-10 md:pt-0">
              <p>
                {t.softIntroPara3[lang]}
              </p>
              
              <div className="space-y-8">
                <p className="italic serif text-xl md:text-2xl lg:text-3xl text-[#8C2F2B] opacity-90 leading-snug">
                  {t.softIntroPara4[lang]}
                </p>
                <div className="pt-2">
                  <Link 
                    to="/work"
                    className="inline-flex items-center space-x-5 px-10 py-4 bg-transparent border border-[#8C2F2B]/30 text-[#8C2F2B] soft-button uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-[#8C2F2B] hover:text-[#FAF9F6] transition-all duration-700"
                  >
                    <span>{translations.common.exploreWork[lang]}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services - Consistency Refinement */}
      <section className="py-32 px-6 lg:px-12 w-full mx-auto">
        <div className="text-center mb-20 space-y-3">
           <h2 className="text-4xl md:text-5xl lg:text-6xl serif text-[#4a4543]">
             {translations.common.selectedServices[lang]}
           </h2>
           <p className="text-[#7E7670] tracking-widest text-[10px] uppercase font-bold">
             {translations.common.selectedServicesSub[lang]}
           </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto items-stretch">
          {treatments.slice(0, 3).map((item) => (
            <Link 
              to={`/work/${item.id}`} 
              key={item.id}
              className="group flex flex-col space-y-6 h-full"
            >
              <div className="aspect-[4/5] overflow-hidden soft-edge relative shadow-lg shadow-[#4a4543]/5 shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title[lang]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#8C2F2B]/5 group-hover:bg-transparent transition-all duration-700"></div>
              </div>
              <div className="space-y-3 px-1 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl serif group-hover:text-[#8C2F2B] transition-colors duration-500 leading-tight text-[#4a4543] mb-2">
                    {item.title[lang]}
                  </h3>
                  <p className="text-sm md:text-base text-[#7E7670] leading-relaxed line-clamp-3 font-light italic">
                    {item.shortDesc[lang]}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-6 mt-auto">
                  <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#8C2F2B] border-b border-[#8C2F2B]/10 group-hover:border-[#8C2F2B] transition-all duration-500">
                    {translations.common.discoverMore[lang]}
                  </span>
                  <ArrowRight size={10} className="text-[#8C2B]/10 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore All Services CTA - Reduced margin top for tighter look */}
        <div className="mt-12 text-center">
          <Link 
            to="/work"
            className="inline-flex items-center space-x-5 px-10 py-4 bg-transparent border border-[#8C2F2B]/30 text-[#8C2F2B] soft-button uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-[#8C2F2B] hover:text-[#FAF9F6] transition-all duration-700"
          >
            <span>{translations.common.exploreAllServices[lang]}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;