import { Treatment, Language } from './types';

export const images = {
  home: {
    hero: "/images/himalaya_eagle.jpg",
  },
  about: {
    hero: "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=2400",
    traditionalMedicine: "https://images.unsplash.com/photo-1540206276207-3af25c08abbb?auto=format&fit=crop&q=80&w=1200",
    personalJourney: "https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=1200",
    sacredTradition: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1200",
    nepal: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200",
  }
};

export const translations = {
  common: {
    welcome: { en: 'Welcome', de: 'Willkommen' },
    exploreWork: { en: 'Explore my services', de: 'Mein Angebot entdecken' },
    invitation: { en: 'An invitation to connect', de: 'Einladung zum Kontakt' },
    contact: { en: 'Contact', de: 'Kontakt' },
    about: { en: 'About Me', de: 'Über mich' },
    theWork: { en: 'My Services', de: 'Mein Angebot' },
    home: { en: 'Home', de: 'Startseite' },
    reachOut: { en: 'If this resonates, feel free to reach out to me.', de: 'Wenn dich dies anspricht, lade ich dich ein, Kontakt mit mir aufzunehmen.' },
    blessing: { en: 'May you be blessed — and the path you walk.', de: 'Mögest du gesegnet sein – und der Weg, den du gehst.' },
    addressing: { en: 'What my services address', de: 'Was mein Angebot anspricht' },
    howItWorks: { en: 'How I approach the treatment', de: 'Wie ich die Behandlung gestalte' },
    supportiveWhen: { en: 'When my services may be supportive', de: 'Wann mein Angebot unterstützend sein kann' },
    practicalInfo: { en: 'Practical Information', de: 'Praktische Informationen' },
    duration: { en: 'Duration', de: 'Dauer' },
    setting: { en: 'Setting', de: 'Rahmen' },
    backToOfferings: { en: 'Back to my services', de: 'Zurück zum Angebot' },
    inquire: { en: 'Inquire about this treatment', de: 'Diese Behandlung anfragen' },
    discoverMore: { en: 'Discover more', de: 'Erfahre mehr' },
    selectedServices: { en: 'Selected Services', de: 'Ausgewählte Services' },
    selectedServicesSub: { en: 'Traditional arts for the modern world', de: 'Traditionelle Künste für die moderne Welt' },
    traditionalHealingArts: { en: 'Traditional Healing Arts', de: 'Traditionelle Heilkunst' },
    exploreAllServices: { en: 'Explore all services', de: 'Gesamtes Angebot ansehen' }
  },
  home: {
    heroTitle: { 
      en: 'Walking the path of healing — grounded in life.', 
      de: 'Den Heilweg gehen — verwurzelt im Leben.' 
    },
    heroSub: {
      en: 'Traditional healing arts, lived experience, and conscious medicine.',
      de: 'Traditionelle Heilkunst, gelebte Erfahrung und bewusste Medizin.'
    },
    invitationLabel: {
      en: 'THE INVITATION',
      de: 'DIE EINLADUNG'
    },
    softIntroHeadline: {
      en: 'If you are looking for someone who does not only treat symptoms, but takes time to truly see you, you are welcome here.',
      de: 'Wenn Sie jemanden suchen, der nicht nur Symptome behandelt, sondern sich die Zeit nimmt, Sie wirklich zu sehen, sind Sie hier willkommen.'
    },
    softIntroPara1: {
      en: 'For many years, I have been working with people whose bodies or lives are asking for attention. Sometimes this shows itself clearly. Sometimes it is a quiet unease that has been present for a long time.',
      de: 'Seit vielen Jahren arbeite ich mit Menschen, deren Körper oder Leben nach Aufmerksamkeit verlangen. Manchmal zeigt sich das deutlich. Manchmal ist es ein leises Unbehagen, das schon lange da ist.'
    },
    softIntroPara2: {
      en: 'I do not offer quick solutions. My services are shaped by long practice in traditional healing, and by years of listening closely to what wants to be understood. Healing unfolds when we are willing to stay with what is there.',
      de: 'Ich biete keine schnellen Lösungen an. Mein Angebot ist geprägt von langjähriger Praxis in der traditionellen Heilkunst und von jahrelangem aufmerksamem Zuhören, was verstanden werden will. Heilung entfaltet sich, wenn wir bereit sind, bei dem zu bleiben, was da ist.'
    },
    softIntroPara3: {
      en: 'My role is not to lead you somewhere. It is to walk beside you, with experience and care, while you find your own orientation again.',
      de: 'Meine Aufgabe ist es nicht, Sie irgendwohin zu führen. Es ist, erfahren und fürsorglich an Ihrer Seite zu gehen, während Sie selbst wieder Orientierung finden.'
    },
    softIntroPara4: {
      en: 'If this feels familiar, I invite you to discover my services.',
      de: 'Wenn Ihnen das vertraut vorkommt, lade ich Sie ein, mein Angebot zu entdecken.'
    }
  },
  about: {
    title: { en: 'About Me', de: 'Über mich' },
    quote: { 
      en: '"The mind wanted to understand what the heart already knew."', 
      de: '"Der Verstand wollte verstehen, was das Herz bereits wusste."' 
    },
    pathTitle: { en: 'A Path of Devotion', de: 'Ein Weg der Hingabe' },
    pathText1: { 
      en: 'For almost 20 years, I have been accompanying people on their journey to reclaim their health and unfold their physical, emotional, and spiritual potential.',
      de: 'Seit fast 20 Jahren begleite ich Menschen auf ihrem Weg, ihre Gesundheit zurückzugewinnen und ihr körperliches, emotionales und spirituelles Potenzial zu entfalten.'
    },
    pathText2: { 
      en: 'My roots run deep. I am a healer in the 24th generation, with lineage stretching back to the seers of the Westerwald. This gift was given to me at birth – but I had to learn to become worthy of carrying it.',
      de: 'Meine Wurzeln liegen tief. Ich bin Heiler in der 24. Generation, mit einer Ahnenlinie, die bis zu den Sehern des Westerwaldes zurückreicht. Diese Gabe wurde mir in die Wiege gelegt – aber ich musste lernen, ihrer würdig zu werden.'
    },
    academicTitle: { en: 'My Academic Path', de: 'Mein akademischer Weg' },
    academicText: { 
      en: 'I studied linguistics, literature, psychology, and economics in Munich and Madrid. My master’s thesis explored the masks we humans wear. Today I know: My true path to healing began when I was ready to remove my own masks.',
      de: 'Ich habe Linguistik, Literatur, Psychologie und Wirtschaft in München und Madrid studiert. Meine Magisterarbeit untersuchte die Masken, die wir Menschen tragen. Heute weiß ich: Mein wahrer Weg zur Heilung begann, als ich bereit war, meine eigenen Masken abzunehmen.'
    },
    nepalTitle: { en: 'Nepal — My Years of Transformation', de: 'Nepal — Meine Jahre der Wandlung' },
    nepalText: { 
      en: 'For nearly ten years, I studied under Nepalese masters. I was initiated into cosmic philosophy, Mantra, Yantra, Tantra, and Mudra. Die wichtigste Lektion, die ich lernte, war: Die eigene Kraft und Schönheit zu erkennen.',
      de: 'Fast zehn Jahre lang habe ich bei nepalesischen Meistern studiert. Ich wurde in kosmische Philosophie, Mantra, Yantra, Tantra und Mudra eingeweiht. Die wichtigste Lektion, die ich lernte, war: Die eigene Kraft und Schönheit zu erkennen.'
    },
    practiceTitle: { en: 'My Path as a Naturopath', de: 'Mein Weg als Heilpraktiker' },
    practiceText: { 
      en: 'I completed my training at the Josef Angerer Professional School. Seit 2009 führe ich meine eigene Naturheilpraxis und verbinde traditionelles Wissen mit gelebter Verantwortung.',
      de: 'Ich habe meine Ausbildung an der Josef-Angerer-Schule abgeschlossen. Seit 2009 führe ich meine eigene Naturheilpraxis und verbinde traditionelles Wissen mit gelebter Verantwortung.'
    }
  }
};

export const treatments: Treatment[] = [
  {
    id: 'tem',
    title: { en: 'Traditional European Medicine (TEM)', de: 'Traditionelle Europäische Medizin (TEM)' },
    shortDesc: { 
      en: 'I apply the laws and principles of the macrocosm of nature to understand your human microcosm.', 
      de: 'Ich wende die Gesetze des Makrokosmos Natur an, um deinen Mikrokosmos Mensch zu verstehen.' 
    },
    fullDesc: {
      en: [
        'To me, European medicine is energy medicine. I use a wide range of healing modalities to diagnose and treat by working with your vital life force.',
        'In my practice, I distill nature’s workings into fire, water, earth, air, and ether. I see these elemental qualities expressed through the cardinal humors: blood, yellow bile, black bile, and phlegm.'
      ],
      de: [
        'Für mich ist die Europäische Medizin eine energetische Medizin. Ich nutze vielfältige Heilmethoden zur Diagnose und Behandlung, indem ich mit deiner Lebenskraft arbeite.',
        'In meiner Praxis destilliere ich die Wirkungsweisen der Natur in Feuer, Wasser, Erde, Luft und Äther. Ich sehe diese elementaren Qualitäten in den kardinalen Säften ausgedrückt: Blut, gelbe Galle, schwarze Galle und Schleim.'
      ]
    },
    image: '/images/back_christian_01.jpg',
    category: 'Core System',
    details: {
      addressing: { 
        en: ['Digestive system imbalances', 'Metabolic residues', 'Lymphatic stagnation', 'Circulatory issues'],
        de: ['Ungleichgewichte des Verdauungssystems', 'Stoffwechselrückstände', 'Lymphstauungen', 'Durchblutungsstörungen']
      },
      howItWorks: {
        en: ['Deductive approach from macrocosm principles', 'Balancing the four humors', 'Identifying constitutional patterns'],
        de: ['Deduktiver Ansatz aus Makrokosmos-Prinzipien', 'Ausgleich der vier Säfte', 'Identifizierung konstitutioneller Muster']
      },
      supportiveWhen: {
        en: ['Chronic fatigue', 'Digestive complaints', 'General lack of vitality', 'Inflammatory conditions'],
        de: ['Chronische Erschöpfung', 'Verdauungsbeschwerden', 'Allgemeiner Vitalitätsmangel', 'Entzündliche Zustände']
      },
      practicalInfo: { en: '60 - 90 mins per consultation', de: '60 - 90 Min. pro Beratung' }
    }
  },
  {
    id: 'hct',
    title: { en: 'Holistic Constitutional Therapy (HCT®)', de: 'Holistic Constitutional Therapy (HCT®)' },
    shortDesc: {
      en: 'I seek the root. I provide energy and space for your sustainable recovery.',
      de: 'Ich suche die Wurzel. Ich schaffe Energie und Raum für deine nachhaltige Genesung.'
    },
    fullDesc: {
      en: [
        'HCT® is the result of my 30 years of research and practice. I integrate Traditional European Naturopathy, Homeopathy, Alchemy, and Shamanism.',
        'Instead of asking "What makes you sick?", I ask: "What keeps you healthy – and how can I help you strengthen that?"'
      ],
      de: [
        'HCT® ist das Ergebnis meiner 30-jährigen Forschung und Praxis. Ich verbinde traditionelle europäische Naturheilkunde, Homöopathie, Alchemie und Schamanismus.',
        'Statt zu fragen: „Was macht dich krank?“, frage ich: „Was hält dich gesund – und wie kann ich dir helfen, das zu stärken?“'
      ]
    },
    image: '/images/HCT_bhumidhata.jpg',
    category: 'Therapy',
    details: {
      addressing: {
        en: ['Chronic recurring symptoms', 'Deep-seated emotional blockages', 'Constitutional weaknesses'],
        de: ['Chronisch wiederkehrende Symptome', 'Tief sitzende emotionale Blockaden', 'Konstitutionelle Schwächen']
      },
      howItWorks: {
        en: ['Deep constitutional analysis', 'Customized treatment plan', 'Energetic and ritual work'],
        de: ['Tiefe Konstitutionsanalyse', 'Individuelle Behandlungsplan', 'Energetische und rituelle Arbeit']
      },
      supportiveWhen: {
        en: ['Autoimmune diseases', 'Burn-out', 'Hormonal imbalances', 'Skin diseases'],
        de: ['Autoimmunerkrankungen', 'Burn-out', 'Hormonelle Dysbalancen', 'Hauterkrankungen']
      },
      practicalInfo: { en: 'Initial consultation: 90 - 120 mins', de: 'Erstgespräch: 90 - 120 Min.' }
    }
  },
  {
    id: 'iris',
    title: { en: 'Iris Diagnosis', de: 'Irisdiagnose' },
    shortDesc: {
      en: 'I use this time-tested holistic method to gain insights into your unique constitution.',
      de: 'Ich nutze diese bewährte ganzheitliche Methode, um Einblicke in deine einzigartige Konstitution zu gewinnen.'
    },
    fullDesc: {
      en: [
        'I view the iris like a fingerprint. I look for changes in color, pigment spots, or fine vascular patterns that provide me with clues about metabolic disorders and inflammation.',
        'This allows me to offer early prevention by identifying potential vulnerabilities before they become clinically apparent to you.'
      ],
      de: [
        'Ich betrachte die Iris wie einen Fingerabdruck. Ich achte auf Veränderungen der Farbe, Pigmentflecken oder feine Gefäßmuster, die mir Hinweise auf Stoffwechselstörungen und Entzündungen geben.',
        'Dies ermöglicht mir eine frühe Prävention, indem ich potenzielle Schwachstellen identifiziere, bevor sie für dich klinisch in Erscheinung treten.'
      ]
    },
    image: '/images/auge.webp',
    category: 'Diagnostics',
    details: {
      addressing: {
        en: ['Genetic predispositions', 'Functional relationships between organs', 'Hidden causes of inflammation'],
        de: ['Genetische Veranlagungen', 'Funktionelle Zusammenhänge zwischen Organen', 'Verborgene Entzündungsursachen']
      },
      howItWorks: {
        en: ['Visual examination of reflex indicators in the iris', 'Correlation with organ systems'],
        de: ['Visuelle Untersuchung von Reflexzeichen in der Iris', 'Korrelation mit Organsystemen']
      },
      supportiveWhen: {
        en: ['Unclear chronic symptoms', 'Preventative health screening'],
        de: ['Unklare chronische Symptome', 'Präventive Gesundheitsvorsorge']
      },
      practicalInfo: { en: 'Integrated into my initial HCT® analysis', de: 'In meine HCT®-Analyse integriert' }
    }
  },
  {
    id: 'homeopathy',
    title: { en: 'Homeopathy', de: 'Homöopathie' },
    shortDesc: {
      en: 'I support your organism with potentized substances to help you overcome illness.',
      de: 'Ich unterstütze deinen Organismus mit potenzierten Substanzen, um dir bei der Krankheitsbewältigung zu helfen.'
    },
    fullDesc: {
      en: [
        'I assist you with potentized or "diluted-energized" substances. Durch die Informationsübertragung möchte ich deinem Organismus helfen, Krankheiten schneller und effektiver zu überwinden.',
        'In my practice, I use single-remedy homeopathy, choosing one source material matched precisely to your current state.'
      ],
      de: [
        'Ich unterstütze dich mit potenzierten oder „verdünnt-energetisierten“ Substanzen. Durch die Informationsübertragung möchte ich deinem Organismus helfen, Krankheiten schneller und effektiver zu überwinden.',
        'In meiner Praxis wende ich die Einzelmittelhomöopathie an und wähle einen Ausgangsstoff aus, der exakt auf deinen aktuellen Zustand abgestimmt ist.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=800',
    category: 'Medicine',
    details: {
      addressing: {
        en: ['Acute and chronic conditions', 'Psychological and emotional balance'],
        de: ['Akute und chronische Zustände', 'Psychologisches und emotionales Gleichgewicht']
      },
      howItWorks: {
        en: ['Low potency acts on physical level', 'High potency acts on psychological level'],
        de: ['Niedrige Potenzen wirken körperlich', 'Hohe Potenzen wirken psychologisch']
      },
      supportiveWhen: {
        en: ['Constitutional support', 'Infection management'],
        de: ['Konstitutionsunterstützung', 'Infektionsmanagement']
      },
      practicalInfo: { en: 'I select remedies following a detailed anamnesis', de: 'Ich wähle die Mittel nach einer ausführlichen Anamnese' }
    }
  },
  {
    id: 'homeosiniatry',
    title: { en: 'Homeosiniatry', de: 'Homöosiniatrie' },
    shortDesc: {
      en: 'In my practice, I offer a gentle fusion of homeopathy, neural therapy, and acupuncture.',
      de: 'In meiner Praxis biete ich eine sanfte Fusion aus Homöopathie, Neuraltherapie und Akupunktur an.'
    },
    fullDesc: {
      en: [
        'I bring together elements of homeopathy, neural therapy, and acupuncture. Ich injiziere ausgewählte Mittel an spezifischen Akupunkturpunkten unter deine Haut.'
      ],
      de: [
        'Ich führe Elemente der Homöopathie, Neuraltherapie und Akupunktur zusammen. Ich injiziere ausgewählte Mittel an spezifischen Akupunkturpunkten unter deine Haut.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    category: 'Therapy',
    details: {
      addressing: {
        en: ['Musculoskeletal pain', 'Organ regulation', 'Deep detoxification'],
        de: ['Schmerzen am Bewegungsapparat', 'Organregulation', 'Tiefenentgiftung']
      },
      howItWorks: {
        en: ['Subcutaneous injection of homeopathic complexes', 'Acupoint stimulation'],
        de: ['Subkutane Injektion homöopathischer Komplexmittel', 'Reizung von Akupunkturpunkten']
      },
      supportiveWhen: {
        en: ['Chronic pain', 'Systemic stagnation'],
        de: ['Chronische Schmerzen', 'Systemische Stagnation']
      },
      practicalInfo: { en: '30 - 45 mins per session', de: '30 - 45 Min. pro Sitzung' }
    }
  },
  {
    id: 'spagyric',
    title: { en: 'Spagyric', de: 'Spagyrik' },
    shortDesc: {
      en: 'I practice the alchemical art of separating and reuniting to create highest quality remedies.',
      de: 'Ich praktiziere die alchemistische Kunst des Trennens und Wiedervereinigens für höchste Heilmittelqualität.'
    },
    fullDesc: {
      en: [
        'I follow the spagyric traditions originating with Paracelsus. Ich verstehe sie als die Kunst, das Heilende durch veredelte Extraktion vom Schädlichen in der Natur zu trennen.',
        'I use classical techniques like steam distillation and maceration to fulfill the alchemical aim of rhythmic transformation.'
      ],
      de: [
        'Ich folge den spagyrischen Traditionen, die auf Paracelsus zurückgehen. Ich verstehe sie als die Kunst, das Heilende durch veredelte Extraktion vom Schädlichen in der Natur zu trennen.',
        'Ich wende klassische Techniken wie Wasserdampfdestillation und Mazeration an, um das alchemistische Ziel der rhythmischen Wandlung zu erfüllen.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    category: 'Alchemy',
    details: {
      addressing: {
        en: ['Physical essence restoration', 'Energetic purification'],
        de: ['Wiederherstellung der körperlichen Essenz', 'Energetische Reinigung']
      },
      howItWorks: {
        en: ['Combining distillation and maceration into a nature-inspired cycle'],
        de: ['Kombination von Destillation und Mazeration in einem natürlichen Zyklus']
      },
      supportiveWhen: {
        en: ['Complex chronic conditions', 'Spiritual grounding through matter'],
        de: ['Komplexe chronische Zustände', 'Spirituelle Erdung durch Materie']
      },
      practicalInfo: { en: 'I administer these as tinctures or essences', de: 'Ich verordne diese als Tinkturen oder Essenzen' }
    }
  },
  {
    id: 'galenics',
    title: { en: 'My Prescriptions – Galenics', de: 'Meine Rezepte / Galenik' },
    shortDesc: {
      en: 'I create individualized herbal and spagyric prescriptions prepared for your specific needs.',
      de: 'Ich erstelle individuelle pflanzliche und spagyrische Verordnungen für deine Bedürfnisse.'
    },
    fullDesc: {
      en: [
        'I create an individualized prescription for you using homeopathic, herbal, and/or spagyric remedies. Ich lasse diese speziell von einer Apotheke für deine Konstitution anfertigen.'
      ],
      de: [
        'Ich erstelle für dich eine individuelle Rezeptur aus homöopathischen, pflanzlichen und/oder spagyrischen Mitteln, die ich von einer Apotheke speziell für deine Konstitution anfertigen lasse.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
    category: 'Medicine',
    details: {
      addressing: {
        en: ['Specific reaction targeting', 'Optimal dosage ratios'],
        de: ['Gezielte Reaktionssteuerung', 'Optimale Dosierungsverhältnisse']
      },
      howItWorks: {
        en: ['Custom formulation based on my HCT® analysis'],
        de: ['Individuelle Formulierung basierend auf meiner HCT®-Analyse']
      },
      supportiveWhen: {
        en: ['Ready-made medications are insufficient'],
        de: ['Fertigarzneimittel nicht ausreichen']
      },
      practicalInfo: { en: 'Prepared by my partner specialist pharmacies', de: 'Herstellung durch meine spezialisierten Partner-Apotheken' }
    }
  },
  {
    id: 'acupuncture',
    title: { en: 'Acupuncture', de: 'Akupunktur' },
    shortDesc: {
      en: 'I stimulate reflex points to help you release blockages and improve circulation.',
      de: 'Ich stimuliere Reflexpunkte, um dir zu helfen, Blockaden zu lösen und die Zirkulation zu verbessern.'
    },
    fullDesc: {
      en: [
        'I offer Body Acupuncture and Auricular (Ear) Acupuncture. Ich nutze jeden Punkt, um energetische Informationen über elektromagnetische Signale tief in deinen Körper zu übertragen.',
        'I use acupuncture to help you release areas of stagnant Qi, balance your body chemistry, and reduce inflammation.'
      ],
      de: [
        'Ich biete Körperakupunktur und Ohrakupunktur an. Ich nutze jeden Punkt, um energetische Informationen über elektromagnetische Signale tief in deinen Körper zu übertragen.',
        'Ich setze Akupunktur ein, um dir zu helfen, stagnierendes Qi zu lösen, deine Biochemie auszugleichen und Entzündungen zu lindern.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    category: 'Traditional Arts',
    details: {
      addressing: {
        en: ['Blockages in Qi flow', 'Pain syndromes', 'Hormonal regulation'],
        de: ['Blockaden im Qi-Fluss', 'Schmerzsyndrome', 'Hormonelle Regulation']
      },
      howItWorks: {
        en: ['Fine needle insertion', 'Laser stimulation for sensitive cases'],
        de: ['Setzen feiner Nadeln', 'Laserakupunktur für sensible Fälle']
      },
      supportiveWhen: {
        en: ['Headaches/Migraines', 'Stress-related tension', 'Acute pain'],
        de: ['Kopfschmerzen/Migräne', 'Stressbedingte Verspannungen', 'Akute Schmerzen']
      },
      practicalInfo: { en: '45 - 60 mins per session', de: '45 - 60 Min. pro Sitzung' }
    }
  },
  {
    id: 'reflex',
    title: { en: 'Reflex Zone Therapy', de: 'Reflexzonentherapie' },
    shortDesc: {
      en: 'I influence specific body areas to create beneficial effects in your organs and systems.',
      de: 'Ich beeinflusse bestimmte Körperareale, um positive Fernwirkungen in deinen Organen zu erzielen.'
    },
    fullDesc: {
      en: [
        'My reflex zone therapy is based on the understanding that every organ is connected to specific body areas. Ich spezialisiere mich auf die Nasale Reflexzonentherapie (Röder-Therapie).',
        'By stimulating zones inside your nose, I can help you promote healthy ventilation and support your parasympathetic regeneration.'
      ],
      de: [
        'Meine Reflexzonentherapie basiert auf der Erkenntnis, dass jedes Organ mit bestimmten Körperarealen verbunden ist. Ich spezialisiere mich auf die Nasale Reflexzonentherapie (Röder-Therapie).',
        'Durch die Reizung von Zonen in deiner Nase helfe ich dir, die Belüftung der Nebenhöhlen zu fördern und deine parasympathische Regeneration zu unterstützen.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    category: 'Therapy',
    details: {
      addressing: {
        en: ['Sinusitis', 'Autonomic nervous system imbalance', 'Lymphatic flow in the head'],
        de: ['Nebenhöhlenentzündungen', 'Vegetative Dysregulation', 'Lymphfluss im Kopfbereich']
      },
      howItWorks: {
        en: ['Gentle massage of reflex zones with special oils'],
        de: ['Sanfte Massage der Reflexzonen mit speziellen Ölen']
      },
      supportiveWhen: {
        en: ['Chronic colds', 'Lack of mental clarity', 'Nervous exhaustion'],
        de: ['Chronischer Schnupfen', 'Mangelnde geistige Klarheit', 'Nervöse Erschöpfung']
      },
      practicalInfo: { en: '20 - 30 mins per application', de: '20 - 30 Min. pro Anwendung' }
    }
  },
  {
    id: 'neural',
    title: { en: 'Neural Therapy', de: 'Neuraltherapie' },
    shortDesc: {
      en: 'I provide targeted regulation via nerve areas for your rapid pain relief.',
      de: 'Ich ermögliche gezielte Regulation über Nervenareale für deine schnelle Schmerzlinderung.'
    },
    fullDesc: {
      en: [
        'In my practice, neural therapy involves my injection of local anesthetic into your specific nerve areas or scars. Ich nutze dies, um deine Zellpotentiale auszugleichen und „Störstellen“ zu lösen.',
        'I have seen it have a regulating effect on the whole organism, far beyond the site where I inject.'
      ],
      de: [
        'In meiner Praxis beinhaltet die Neuraltherapie die Injektion von Lokalanästhetika in deine spezifischen Nervenareale oder Narben. Ich nutze dies, um deine Zellpotentiale auszugleichen und „Störstellen“ zu lösen.',
        'Ich habe erlebt, dass sie eine regulierende Wirkung auf den gesamten Organismus hat, weit über die Stelle hinaus, an der ich injiziere.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    category: 'Therapy',
    details: {
      addressing: {
        en: ['Interference fields like scars', 'Acute and chronic pain', 'Vegetative regulation'],
        de: ['Störfelder wie Narben', 'Akute und chronische Schmerzen', 'Vegetative Regulation']
      },
      howItWorks: {
        en: ['Quaddel injections (minor neural therapy)', 'Targeted plexus injections'],
        de: ['Quaddelinjektionen (kleine Neuraltherapie)', 'Gezielte Plexusinjektionen']
      },
      supportiveWhen: {
        en: ['Post-surgical discomfort', 'Chronic inflammatory focus'],
        de: ['Beschwerden nach Operationen', 'Chronische Entzündungsherde']
      },
      practicalInfo: { en: '30 - 45 mins per session', de: '30 - 45 Min. pro Sitzung' }
    }
  },
  {
    id: 'shamanism',
    title: { en: 'Shamanism', de: 'Schamanismus' },
    shortDesc: {
      en: 'My spiritual path of the heart. Ich arbeite daran, die Balance zwischen deinem Geist und deiner Materie wiederherzustellen.',
      de: 'Mein spiritueller Weg des Herzens. Ich arbeite daran, die Balance zwischen deinem Geist und deiner Materie wiederherzustellen.'
    },
    fullDesc: {
      en: [
        'To me, true shamanism is a path of devotion, humility, and deep connection with all that is. Ich nutze ihn, um dich zum innersten Kern deines Seins zu führen.',
        'I am a seer and healer in the 24th generation. My lineage comes from the Westerwald, and I dedicated ten years to studying under masters in Nepal.'
      ],
      de: [
        'Echter Schamanismus ist für mich ein Weg der Hingabe, Demut und tiefen Verbindung mit allem, was ist. Ich nutze ihn, um dich zum innersten Kern deines Seins zu führen und dir zu helfen, die volle Selbstverantwortung für dein Leben zu übernehmen.',
        'Ich bin Seher und Heiler in der 24. Generation. Meine Linie stammt aus dem Westerwald, und ich habe zehn Jahre dem Studium bei Meistern in Nepal gewidmet.'
      ]
    },
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800',
    category: 'Spiritual Arts',
    details: {
      addressing: {
        en: ['Spiritual stagnation', 'Ancestral line clarification', 'Deep life transitions'],
        de: ['Spirituelle Stagnation', 'Klärung der Ahnenlinie', 'Tiefe Lebensübergänge']
      },
      howItWorks: {
        en: ['Drum sessions', 'Rituals', 'Vision quests', 'Soul essence work'],
        de: ['Trommelsitzungen', 'Rituale', 'Visionssuche', 'Seelenessenz-Arbeit']
      },
      supportiveWhen: {
        en: ['Seeking purpose', 'Releasing old behavioral patterns', 'Facing great social or ecological uncertainty'],
        de: ['Sinnsuche', 'Lösen alter Verhaltensmuster', 'Bei großen gesellschaftlichen oder ökologischen Unsicherheiten']
      },
      practicalInfo: { en: 'Length varies by ritual (2 - 4 hours)', de: 'Dauer variiert nach Ritual (2 - 4 Std.)' }
    }
  }
];