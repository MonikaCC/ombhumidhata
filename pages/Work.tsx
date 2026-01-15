import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { treatments, translations } from '../translations';

const Work: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 px-6 lg:px-12 py-24 bg-[#FAF9F6]/40">
      <div className="w-full">
        <header className="mb-24 text-center w-full space-y-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl serif text-[#4a4543]">{translations.common.theWork[lang]}</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#7E7670] leading-[1.6] italic serif font-light">
            My services bring together traditional European healing arts, constitutional medicine, and shamanic wisdom. I approach each treatment individually, with respect for you, your constitution, and your unique life situation.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-20 max-w-7xl mx-auto">
          {treatments.map((t) => (
            <Link 
              key={t.id} 
              to={`/work/${t.id}`}
              className="group flex flex-col space-y-6"
            >
              <div className="aspect-[1.3/1] overflow-hidden soft-edge relative shadow-lg shadow-[#4a4543]/5 group-hover:shadow-[#8C2F2B]/10 transition-shadow duration-1000">
                <img 
                  src={t.image} 
                  alt={t.title[lang]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-95 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#8C2F2B]/5 soft-edge"></div>
              </div>
              <div className="space-y-4 px-1">
                <h3 className="text-3xl md:text-4xl serif leading-tight group-hover:text-[#8C2F2B] transition-colors duration-500 text-[#4a4543]">
                  {t.title[lang]}
                </h3>
                <div className="space-y-3">
                  <p className="text-[#7E7670] text-base md:text-lg leading-relaxed font-light italic">
                    {t.shortDesc[lang]}
                  </p>
                  <p className="text-[#7E7670] text-xs md:text-sm leading-relaxed opacity-80 line-clamp-2 font-light">
                    {t.fullDesc[lang][0]}
                  </p>
                </div>
                <div className="pt-2 border-b border-transparent group-hover:border-[#8C2F2B]/20 w-fit transition-all duration-700 text-[9px] font-bold uppercase tracking-[0.3em] text-[#8C2F2B]">
                  {translations.common.discoverMore[lang]} &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
