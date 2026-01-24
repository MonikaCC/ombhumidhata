import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Language } from '../types';
import { treatments, translations } from '../translations';
import { ArrowLeft, Clock, MapPin, CheckCircle2, Target, Zap, HeartPulse } from 'lucide-react';

const TreatmentDetail: React.FC<{ lang: Language }> = ({ lang }) => {
  const { id } = useParams();
  const treatment = treatments.find((t) => t.id === id);
  const common = translations.common;

  if (!treatment) return <Navigate to="/work" />;

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="h-[50vh] md:h-[60vh] relative overflow-hidden flex items-end">
        <img 
          src={treatment.image} 
          alt={treatment.title[lang]} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4EFE8] via-[#F4EFE8]/10 to-transparent"></div>
        
        <div className="relative z-10 w-full px-6 lg:px-12 pb-16">
          <Link to="/work" className="flex items-center space-x-3 text-[#8C2F2B] mb-8 uppercase text-[9px] font-bold tracking-[0.3em] hover:translate-x-[-6px] transition-transform duration-500">
            <ArrowLeft size={14} />
            <span>{common.backToOfferings[lang]}</span>
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl serif text-[#4a4543] w-full leading-[1.1] drop-shadow-sm max-w-5xl">
            {treatment.title[lang]}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 px-6 lg:px-12 w-full mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-8">
              {treatment.fullDesc[lang].map((p, i) => (
                <p key={i} className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#7E7670] serif italic font-light">
                  {p}
                </p>
              ))}
            </div>

            <div className="h-px w-full bg-[#8C2F2B]/5"></div>

            <div className="space-y-16">
              {/* Addressing Section */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl serif flex items-center gap-4 text-[#8C2F2B]">
                  <Target size={28} strokeWidth={1} />
                  <span>{common.addressing[lang]}</span>
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {treatment.details.addressing[lang].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base md:text-lg text-[#7E7670] font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8C2F2B]/20 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How it works */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl serif flex items-center gap-4 text-[#8C2F2B]">
                  <Zap size={28} strokeWidth={1} />
                  <span>{common.howItWorks[lang]}</span>
                </h2>
                <ul className="space-y-5">
                  {treatment.details.howItWorks[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-base md:text-lg text-[#7E7670] font-light">
                      <CheckCircle2 size={20} className="text-[#8C2F2B]/30 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supportive When */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl serif flex items-center gap-4 text-[#8C2F2B]">
                  <HeartPulse size={28} strokeWidth={1} />
                  <span>{common.supportiveWhen[lang]}</span>
                </h2>
                <div className="bg-[#8C2F2B]/5 p-10 soft-edge">
                  <ul className="space-y-3">
                    {treatment.details.supportiveWhen[lang].map((item, i) => (
                      <li key={i} className="text-base md:text-lg text-[#7E7670] font-light flex gap-3">
                        <span className="text-[#8C2F2B]/40">&mdash;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-10">
            <div className="bg-white/50 p-10 lg:p-12 soft-edge border border-[#8C2F2B]/5 h-fit space-y-10 shadow-lg shadow-[#4a4543]/5 sticky top-32 backdrop-blur-sm">
              <div className="space-y-6">
                <h4 className="uppercase text-[10px] font-bold tracking-[0.3em] text-[#8C2F2B] mb-6">{common.practicalInfo[lang]}</h4>
                <ul className="space-y-8">
                  <li className="flex items-start space-x-4">
                    <Clock className="text-[#8C2F2B]/30 shrink-0" size={24} strokeWidth={1.5} />
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#4a4543] text-[10px] uppercase tracking-widest">{common.duration[lang]}</p>
                      <p className="text-[#7E7670] text-base font-light">{treatment.details.practicalInfo[lang]}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <MapPin className="text-[#8C2F2B]/30 shrink-0" size={24} strokeWidth={1.5} />
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#4a4543] text-[10px] uppercase tracking-widest">{common.setting[lang]}</p>
                      <p className="text-[#7E7670] text-base font-light">{lang === 'en' ? 'Global Sessions & Sacred Spaces' : 'Globale Sitzungen & heilige Räume'}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-[#8C2F2B]/5">
                <p className="text-base md:text-lg serif italic mb-8 text-[#7E7670] leading-relaxed font-light">
                  {common.reachOut[lang]}
                </p>
                <Link 
                  to="/contact"
                  className="block text-center py-5 bg-[#8C2F2B] text-[#F4EFE8] uppercase text-[10px] font-bold tracking-[0.3em] soft-button hover:bg-[#6D2421] transition-all duration-500 shadow-xl shadow-[#8C2F2B]/20"
                >
                  {common.inquire[lang]}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetail;