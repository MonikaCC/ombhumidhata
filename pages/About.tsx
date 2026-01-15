import React from 'react';
import { Language } from '../types';
import { 
  Container, 
  Section, 
  Eyebrow, 
  PrimaryStatement, 
  SecondaryHeader, 
  BodyText, 
  Quote, 
  SmallMeta,
  HighlightText
} from '../components/Typography';
import { RenderBodyWithCtas } from '../components/Cta';
import { images } from '../translations';

const About: React.FC<{ lang: Language }> = ({ lang }) => {
  const isEn = lang === 'en';

  const content = {
    en: {
      headline: "Meet Christian",
      name: "Christian Arndt, M.A.",
      title: "Naturopathic Practitioner",
      invitationLabel: "THE INVITATION",
      heroQuote: "„The longest journey begins with a single step. I extend my hand to you.“",
      mainIntro: "I have been accompanying people on their journey to reclaim their health and unfold their physical, emotional, and spiritual potential for 20 years. People usually come to me when they feel that something has not been fully seen yet. When symptoms persist, or when there is a quiet sense that more is asking to be understood. I work openly and freely, aligning myself with what you truly need. It would be my joy to take you by the hand.",
      trainingQuote: "I completed my training as a naturopathic practitioner at the renowned, state-recognized Josef Angerer Professional School. Afterwards – as an assistant to naturopath Uwe Sieber in Miesbach – I had the privilege of learning from one of the best. His expertise in Traditional Naturopathy and the healing methods derived from it profoundly shaped my approach.",
      ctaServices: "→ Explore my services",
      
      practitionerTitle: "Naturopathic Practitioner",
      practitionerSub: "The Art of Holistic Healing",
      trainingTitle: "Funded Training Meets Ancient Wisdom",
      trainingText: "I completed my training as a naturopathic practitioner at the renowned, state-recognized Josef Angerer Professional School. Afterwards – as an assistant to naturopath Uwe Sieber in Miesbach – I had the privilege of learning from one of the best. His expertise in Traditional Naturopathy and the healing methods derived from it profoundly shaped my approach.",
      
      hctTitle: "Holistic Constitutional Therapy®",
      hctText: "From years of practice and studying various healing traditions, I developed Holistic Constitutional Therapy® (HCT) – a comprehensive healing method that combines Traditional European Medicine with alchemical purification phases.",
      hctSpecial: "What makes HCT special?\nIt doesn’t just treat symptoms. It recognizes the deeper causes of your complaints – physically, emotional, and energetically. It sees you as a unique person with an individual constitution.",
      
      focusTitle: "My Therapeutic Focus Areas",
      focusItems: [
        "Iris and eye diagnosis – Your eyes reveal more than you think",
        "Constitutional analysis according to TEM principles",
        "Traditional European Medicine (TEM) and derived healing methods",
        "Biochemical healing method according Dr. Schüßler",
        "Spagyric medicine prescription",
        "Holistic Constitutional Therapy®"
      ],
      practiceSince: "Since 2009, I’ve been running my own naturopathic practice. Every person who comes to me brings their own story.",
      
      journeyTitle: "My Journey",
      journeySub: "Between Two Worlds",
      earlyTitle: "The Early Years",
      earlyText: "Born on April 10, 1974, in Neuburg an der Donau, Germany, I sensed at the age of three that there’s more than what we see with our eyes. These first spiritual experiences marked the beginning of a lifelong journey.\n\nAt age 11, I left home for a music boarding school, where I received classical training in violin and percussion. Music taught me early on to listen to subtle vibrations – a skill that would later prove invaluable in my work as a healer.",
      
      academicTitle: "The Academic Path",
      academicText: "The mind wanted to understand what the heart already knew. I studied linguistics, literature, psychology, and economics in Munich and Madrid. My master’s thesis explored the masks we humans wear. Today I know: The true path to healing begins when we’re ready to remove our masks.",
      
      shamanTitle: "Shamanic Priest",
      shamanSub: "The Path of the Heart",
      shamanMeaningTitle: "Authentic Shamanism",
      shamanMeaningText: "True shamanism is a path of devotion, compassion, and deep connection with all that is. It’s a path that requires humility – and the willingness to face yourself.",
      
      rootsTitle: "Roots That Run Deep",
      rootsText: "I am a seer and healer in the 24th generation. My lineage comes from the Westerwald region of Germany, where my ancestors lived for centuries as seers and healers in the forest.",
      
      nepalTitle: "Nepal",
      nepalSub: "The Years of Transformation",
      nepalLearned: "For nearly ten years, I studied under Nepalese masters. Confrontation with deepest fears, doubts, deprivation. I was initiated into cosmic philosophy, Mantra, Yantra, Tantra, and Mudra. But the most important lesson was: To recognize my own power and beauty.",
      
      purposeTitle: "My Purpose for You",
      purposeText: "Today I follow the path of pure devotion. Nature is my religion. My life is dedicated to service – to people, to society, to all that is.",
      ctaContact: "→ Let's talk",

      expectTitle: "What You Can Expect",
      expectItems: [
        "Deep listening – Your story matters",
        "Holistic perspective – Body, mind, and soul as one",
        "Individual therapy concepts – Tailored to you",
        "Traditional knowledge – Proven over centuries",
        "Diagnostics – Iris-Analyse and constitutional methods"
      ],
      
      distanceTitle: "I Clearly Distance Myself From",
      distanceItems: [
        "Hypnosis – Your consciousness should be clear and awake",
        "Magic – Magic is the opposite of enlightenment",
        "Manipulative techniques – Your free will is sacred",
        "Drugs of any kind – True insight needs no substances"
      ],
      
      resonanceEyebrow: "RESONANCE",
      readyTitle: "If this feels familiar",
      readyText: "I invite you to listen to your inner voice. If my path and my approach resonate with you, it would be an honor to accompany you for a part of yours.",
      nextStepItems: [
        "A space for quiet listening",
        "Deep constitutional insights",
        "Grounded transformation"
      ]
    },
    de: {
      headline: "Über mich",
      name: "Christian Arndt, M.A.",
      title: "Heilpraktiker",
      invitationLabel: "DIE EINLADUNG",
      heroQuote: "„Der längste Weg beginnt mit dem ersten Schritt. Ich reiche Ihnen meine Hand.“",
      mainIntro: "Seit nunmehr 20 Jahren begleite ich Menschen auf ihrem Weg, ihre Gesundheit zurückzugewinnen und ihr körperliches, emotionales und spirituelles Potenzial zu entfalten. Menschen kommen meist zu mir, wenn sie spüren, dass etwas noch nicht vollständig gesehen wurde. Wenn Symptome anhalten oder wenn die leise Ahnung besteht, dass mehr verstanden werden will. Ich arbeite offen und frei und richte mich ganz nach dem, was Sie wirklich brauchen. Ich freue mich, wenn ich Sie an die Hand nehmen kann.",
      trainingQuote: "Meine Ausbildung zum Heilpraktiker absolvierte ich an der renommierten, staatlich anerkannten Josef-Angerer-Berufsschule. Danach – als Assistent von Heilpraktiker Uwe Sieber in Miesbach – hatte ich das Privileg, von einem der Besten zu lernen. Sein Fachwissen in der Traditionellen Naturheilkunde und den daraus abgeleiteten Heilmethoden hat meinen Ansatz zutiefst geprägt.",
      ctaServices: "→ Mein Angebot entdecken",
      
      practitionerTitle: "Heilpraktiker",
      practitionerSub: "Die Kunst des ganzheitlichen Heilens",
      trainingTitle: "Fundierte Ausbildung trifft altes Wissen",
      trainingText: "Meine Ausbildung zum Heilpraktiker absolvierte ich an der staatlich anerkannten Josef-Angerer-Berufsschule. Als Assistent von Heilpraktiker Uwe Sieber in Miesbach – einem Meister der Traditionellen Europäischen Medizin – durfte ich von einem der Besten lernen.",
      
      hctTitle: "Holistic Constitutional Therapy®",
      hctText: "Aus Jahren der Praxis und dem Studium verschiedener Heiltraditionen entwickelte ich die Holistic Constitutional Therapy® (HCT) – eine ganzheitliche Heilmethode, die TEM mit alchemistischen Reinigungsphasen verbindet.",
      hctSpecial: "Was macht HCT besonders?\nSie behandelt nicht nur Symptome. Sie erkennt die tieferen Ursachen Ihrer Beschwerden – körperlich, emotional und energetisch.",
      
      focusTitle: "Meine therapeutischen Schwerpunkte",
      focusItems: [
        "Iris- und Augendiagnose",
        "Konstitutionsanalyse nach TEM-Prinzipien",
        "Traditionelle Europäische Medizin (TEM)",
        "Biochemische Heilweise nach Dr. Schüßler",
        "Spagyrische Arzneimittelverordnung",
        "Holistic Constitutional Therapy®"
      ],
      practiceSince: "Seit 2009 führe ich meine eigene Naturheilpraxis. Jeder Mensch bringt seine eigene Geschichte mit.",
      
      journeyTitle: "Mein Weg",
      journeySub: "Zwischen den Welten",
      earlyTitle: "Die frühen Jahre",
      earlyText: "Geboren am 10. April 1974 in Neuburg an der Donau, spürte ich bereits im Alter von drei Jahren, dass es mehr gibt als das, was wir mit unseren Augen sehen. Musik lehrte mich früh, auf feine Schwingungen zu hören.",
      
      academicTitle: "Der akademische Pfad",
      academicText: "Der Verstand wollte verstehen, was das Herz schon längst wusste. Ich studierte Linguistik, Literatur, Psychologie und Wirtschaft. Meine Magisterarbeit widmete sich der Maske, die wir Menschen tragen.",
      
      shamanTitle: "Schamanischer Priester",
      shamanSub: "Der Weg des Herzens",
      shamanMeaningTitle: "Wahrer Schamanismus",
      shamanMeaningText: "Wahrer Schamanismus ist einfach der Weg der Hingabe, des Mitgefühls und der tiefen Verbindung mit allem, was ist. Es erfordert Demut.",
      
      rootsTitle: "Wurzeln, die tief reichen",
      rootsText: "Ich bin Seher und Heiler in der 24. Generation. Meine Linie stammt aus dem Westerwald, wo meine Vorfahren jahrhundertelang als Seher und Heiler lebten.",
      
      nepalTitle: "Nepal",
      nepalSub: "Die Jahre der Transformation",
      nepalLearned: "Fast zehn Jahre lang ließ ich mich von nepalesischen Meistern unterrichten. Ich wurde eingeweiht in kosmische Philosophie, Mantra, Yantra, Tantra und Mudra. Ich lernte meine eigene Kraft und Schönheit kennen.",
      
      purposeTitle: "Meine Aufgabe für Sie",
      purposeText: "Heute folge ich dem Weg der reinen Hingabe. Die Natur ist meine Religion. Mein Leben ist dem Dienst gewidmet.",
      ctaContact: "→ Lassen Sie uns sprechen",
      
      expectTitle: "Was Sie von mir erwarten können",
      expectItems: [
        "Tiefes Zuhören",
        "Ganzheitliche Betrachtung",
        "Individuelle Therapiekonzepte",
        "Traditionelles Wissen",
        "Diagnostik"
      ],
      
      distanceTitle: "Wovon ich mich klar distanziere",
      distanceItems: [
        "Hypnose",
        "Magische Rituale",
        "Manipulative Techniken",
        "Drogen jeglicher Art"
      ],
      
      resonanceEyebrow: "RESONANCE",
      readyTitle: "Wenn Ihnen das vertraut vorkommt",
      readyText: "Ich lade Sie ein, auf Ihre innere Stimme zu hören. Wenn mein Weg und meine Arbeitsweise in Ihnen einen Widerhall finden, wäre es mir eine Ehre.",
      nextStepItems: [
        "Raum für stilles Zuhören",
        "Tiefe konstitutionelle Einblicke",
        "Geerdete Transformation"
      ]
    }
  };

  const t = isEn ? content.en : content.de;

  return (
    <div className="animate-in fade-in duration-1000 bg-[#FAF9F6] w-full selection:bg-[#8C2F2B]/10 selection:text-[#8C2F2B]">
      
      {/* Header */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-[#EAE7E2] border-b border-[#8C2F2B]/5">
        <div className="absolute inset-0 z-0 opacity-40 grayscale">
          <img 
            src={images.about.hero} 
            alt="Christian Arndt Portrait" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Quote */}
        <Container className="absolute bottom-16 left-0 z-10 px-12 md:px-20 text-left">
           <p className="serif italic text-2xl md:text-3xl lg:text-4xl text-[#4a4543] max-w-2xl leading-relaxed drop-shadow-sm">
             {t.heroQuote}
           </p>
        </Container>
      </section>

      {/* Intro Section - Centered Narrative */}
      <Section className="bg-[#FAF9F6]">
        <Container className="text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <BodyText className="!text-lg md:!text-xl lg:!text-2xl text-[#4a4543] text-center leading-relaxed">
              {t.mainIntro}
            </BodyText>
            
            <div className="py-4">
              <Quote className="!my-0 opacity-80 !text-xl md:!text-2xl">
                {t.trainingQuote}
              </Quote>
            </div>

            <div className="pt-6 flex justify-center">
              <RenderBodyWithCtas text={t.ctaServices} />
            </div>
          </div>
        </Container>
      </Section>

      {/* MY SERVICES SECTION */}
      <Section className="bg-white/40 border-y border-[#8C2F2B]/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-12">
              <header>
                <Eyebrow>Chapter I</Eyebrow>
                <PrimaryStatement>{t.practitionerTitle}</PrimaryStatement>
                <SmallMeta className="underline decoration-[#8C2F2B]/20 underline-offset-8 decoration-1">
                   {t.practitionerSub}
                </SmallMeta>
              </header>

              <div className="space-y-12">
                <div className="space-y-4">
                  <SecondaryHeader>{t.trainingTitle}</SecondaryHeader>
                  <BodyText>{t.trainingText}</BodyText>
                </div>
                
                <div className="space-y-4">
                  <SecondaryHeader>{t.hctTitle}</SecondaryHeader>
                  <BodyText>{t.hctText}</BodyText>
                  <div className="bg-[#8C2F2B]/5 p-8 rounded-xl border-l-2 border-[#8C2F2B]/20">
                    <BodyText className="!mb-0 italic opacity-70 font-serif">{t.hctSpecial}</BodyText>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pt-40">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale-[0.2]">
                <img 
                  src={images.about.traditionalMedicine} 
                  alt="Traditional Medicine" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FOCUS AREAS GRID */}
      <Section>
        <Container>
          <div className="text-center mb-16 space-y-4">
            <SecondaryHeader>{t.focusTitle}</SecondaryHeader>
            <div className="h-px w-24 bg-[#8C2F2B]/20 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.focusItems.map((item, i) => (
              <div key={i} className="p-10 border border-[#8C2F2B]/10 rounded-2xl hover:bg-[#8C2F2B]/5 transition-colors duration-700">
                <BodyText className="!mb-0 font-medium">{item}</BodyText>
              </div>
            ))}
          </div>
          <SmallMeta className="mt-12 text-center italic opacity-60">
            {t.practiceSince}
          </SmallMeta>
        </Container>
      </Section>

      {/* ABOUT ME / JOURNEY SECTION */}
      <Section className="bg-white/40 border-y border-[#8C2F2B]/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="order-2 md:order-1 md:pt-40">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl grayscale-[0.2]">
                <img 
                  src={images.about.personalJourney} 
                  alt="Personal Journey" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-12">
              <header>
                <Eyebrow>Chapter II</Eyebrow>
                <PrimaryStatement>{t.journeyTitle}</PrimaryStatement>
                <SmallMeta className="underline decoration-[#8C2F2B]/20 underline-offset-8 decoration-1">
                   {t.journeySub}
                </SmallMeta>
              </header>

              <div className="space-y-12">
                <div className="space-y-4">
                  <SecondaryHeader>{t.earlyTitle}</SecondaryHeader>
                  <BodyText>{t.earlyText}</BodyText>
                </div>
                <div className="space-y-4">
                  <SecondaryHeader>{t.academicTitle}</SecondaryHeader>
                  <BodyText>{t.academicText}</BodyText>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SHAMANIC / NEPAL CHAPTER */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-12">
              <header>
                <Eyebrow>Chapter III</Eyebrow>
                <PrimaryStatement>{t.shamanTitle}</PrimaryStatement>
                <SmallMeta className="underline decoration-[#8C2F2B]/20 underline-offset-8 decoration-1">
                   {t.shamanSub}
                </SmallMeta>
              </header>

              <div className="space-y-12">
                <div className="space-y-4">
                  <SecondaryHeader>{t.shamanMeaningTitle}</SecondaryHeader>
                  <BodyText>{t.shamanMeaningText}</BodyText>
                </div>
                <div className="space-y-4">
                  <SecondaryHeader>{t.rootsTitle}</SecondaryHeader>
                  <BodyText>{t.rootsText}</BodyText>
                </div>
              </div>
            </div>
            <div className="md:pt-40">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={images.about.sacredTradition} 
                  alt="Sacred Tradition" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
            </div>
          </div>

          <div className="mt-24 pt-24 border-t border-[#8C2F2B]/10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <Eyebrow>Transformation</Eyebrow>
              <SecondaryHeader>{t.nepalTitle}</SecondaryHeader>
              <SmallMeta className="mb-6 block">{t.nepalSub}</SmallMeta>
              <BodyText className="serif italic !text-2xl leading-relaxed opacity-90">{t.nepalLearned}</BodyText>
            </div>
            <div className="md:col-span-4">
              <img 
                src={images.about.nepal} 
                alt="Nepal Vista" 
                className="w-full h-auto rounded-2xl shadow-lg grayscale"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* PURPOSE & APPROACH */}
      <Section className="bg-[#8C2F2B]/5 border-y border-[#8C2F2B]/10">
        <Container>
          <div className="max-w-3xl mb-24">
            <Eyebrow>Purpose</Eyebrow>
            <PrimaryStatement>{t.purposeTitle}</PrimaryStatement>
            <BodyText className="!text-xl md:!text-2xl italic serif mb-12 text-[#8C2F2B]">
              {t.purposeText}
            </BodyText>
            <div className="flex">
              <RenderBodyWithCtas text={t.ctaContact} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <SecondaryHeader className="underline decoration-[#8C2F2B]/20 underline-offset-4">{t.expectTitle}</SecondaryHeader>
              <div className="space-y-4">
                {t.expectItems.map((item, i) => (
                  <BodyText key={i} className="mb-4 flex gap-4">
                    <span className="text-[#8C2F2B]/40 shrink-0">•</span>
                    {item}
                  </BodyText>
                ))}
              </div>
            </div>
            <div>
              <SecondaryHeader className="underline decoration-[#8C2F2B]/20 underline-offset-4">{t.distanceTitle}</SecondaryHeader>
              <div className="space-y-4 opacity-70 italic">
                {t.distanceItems.map((item, i) => (
                  <BodyText key={i} className="mb-4 flex gap-4">
                    <span className="text-[#8C2F2B]/20 shrink-0">×</span>
                    {item}
                  </BodyText>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* RESONANCE / NEXT STEPS */}
      <Section className="pb-32">
        <Container className="text-center">
          <Eyebrow>{t.resonanceEyebrow}</Eyebrow>
          <PrimaryStatement className="italic">{t.readyTitle}</PrimaryStatement>
          <HighlightText className="max-w-2xl mx-auto mb-16">
            {t.readyText}
          </HighlightText>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {t.nextStepItems.map((item, i) => (
              <div key={i} className="p-12 bg-white/80 rounded-3xl shadow-sm border border-[#8C2F2B]/5 hover:bg-white transition-colors">
                <BodyText className="!mb-0 serif italic font-medium leading-relaxed text-center">{item}</BodyText>
              </div>
            ))}
          </div>
        </Container>
      </Section>

    </div>
  );
};

export default About;