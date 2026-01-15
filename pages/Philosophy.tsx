import React from 'react';
import { Language } from '../types';

const Philosophy: React.FC<{ lang: Language }> = ({ lang }) => {
  const values = [
    { 
      title: { en: 'Life as a Gift', de: 'Das Leben als Geschenk' },
      desc: { 
        en: 'I view medicine as a service to the miracle of life, not a tool for control. I treat every breath and every cellular process with reverence.',
        de: 'Ich betrachte die Medizin als einen Dienst am Wunder des Lebens, nicht als ein Werkzeug zur Kontrolle. Ich begegne jedem Atemzug mit Ehrfurcht.'
      }
    },
    { 
      title: { en: 'Restoring Balance', de: 'Balance wiederherstellen' },
      desc: { 
        en: 'For me, healing is the art of bringing microcosm and macrocosm back into harmony. I align my work with natural laws.',
        de: 'Heilung ist für mich die Kunst, Mikrokosmos und Makrokosmos wieder in Einklang zu bringen. Ich richte meine Arbeit an den natürlichen Gesetzen aus.'
      }
    },
    { 
      title: { en: 'Love as Foundation', de: 'Liebe als Fundament' },
      desc: { 
        en: 'I follow Paracelsus who said: "The fundamental principle of medicine is Love." I live this as a principle of presence and deep listening.',
        de: 'Ich folge Paracelsus, der sagte: „Das grundlegende Prinzip der Medizin ist die Liebe.“ Ich lebe dies als ein Prinzip der Präsenz und des tiefen Zuhörens.'
      }
    },
    { 
      title: { en: 'Responsibility', de: 'Verantwortung' },
      desc: { 
        en: 'I can accompany you on the path, but I believe you must be ready to walk it yourself. Conscious recovery requires your personal engagement.',
        de: 'Ich kann dich auf dem Weg begleiten, aber ich glaube, dass du bereit sein musst, ihn selbst zu gehen. Bewusste Genesung erfordert dein persönliches Engagement.'
      }
    },
    { 
      title: { en: 'Bridging Spirit and Matter', de: 'Brücke zwischen Geist und Materie' },
      desc: { 
        en: 'In my work, ancient shamanic wisdom meets modern therapeutic understanding without contradiction. I let one inform the other.',
        de: 'In meiner Arbeit trifft uralte schamanische Weisheit ohne Widerspruch auf modernes therapeutisches Verständnis. Ich lasse das eine das andere befruchten.'
      }
    },
  ];

  return (
    <div className="animate-in fade-in duration-1000 py-24 px-6 lg:px-12">
      <div className="w-full space-y-24">
        <header className="text-center space-y-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl serif text-[#4a4543]">
            {lang === 'en' ? 'Philosophy & Values' : 'Philosophie & Werte'}
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-[#7E7670] leading-relaxed italic serif font-light">
            {lang === 'en' 
              ? 'Rooted in the earth, open-hearted, and deeply experienced. These are the pillars that guide every treatment I offer and every conversation I have.'
              : 'Verwurzelt in der Erde, offenherzig und tief erfahren. Dies sind die Säulen, die jede Behandlung, die ich anbiete, und jedes Gespräch, das ich führe, leiten.'}
          </p>
        </header>

        <div className="space-y-32 max-w-7xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl serif text-[#8C2F2B]">{v.title[lang]}</h2>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#4a4543] font-light">
                  {v.desc[lang]}
                </p>
              </div>
              <div className="w-full md:w-1/2 h-[400px] md:h-[500px] overflow-hidden soft-edge relative group shadow-lg">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000000}?auto=format&fit=crop&q=80&w=1200`} 
                  alt={v.title[lang]} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-[#8C2F2B]/5 group-hover:bg-transparent transition-all"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-24 border-t border-[#8C2F2B]/10 space-y-10 max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-5xl lg:text-6xl serif text-[#4a4543]">
            {lang === 'en' ? 'A Quiet Authority' : 'Eine stille Autorität'}
          </h3>
          <p className="text-[#7E7670] text-base md:text-lg lg:text-2xl leading-relaxed font-light">
            {lang === 'en'
              ? 'My practice is a place of silence and clarity. It is not about a mystical performance, but about my grounded presence and lived knowledge. I see it as a quiet monastery meeting a modern European medical practice.'
              : 'Meine Praxis ist ein Ort der Stille und Klarheit. Es geht nicht um eine mystische Inszenierung, sondern um meine geerdete Präsenz und mein gelebtes Wissen. Ich sehe sie als ein stilles Kloster, das auf eine moderne europäische Arztpraxis trifft.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;