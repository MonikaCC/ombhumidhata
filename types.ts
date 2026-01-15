
export type Language = 'en' | 'de';

export interface Treatment {
  id: string;
  title: Record<Language, string>;
  shortDesc: Record<Language, string>;
  fullDesc: Record<Language, string[]>;
  image: string;
  category: string;
  details: {
    addressing: Record<Language, string[]>;
    howItWorks: Record<Language, string[]>;
    supportiveWhen: Record<Language, string[]>;
    practicalInfo: Record<Language, string>;
  };
}

export interface NavItem {
  label: Record<Language, string>;
  path: string;
}
