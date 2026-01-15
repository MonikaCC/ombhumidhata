import React from 'react';
import { Language } from '../types';
import { Container, Section, PrimaryStatement, BodyText } from '../components/Typography';
import { translations } from '../translations';

const About: React.FC<{ lang: Language }> = ({ lang }) => {
  const common = translations.common;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF9F6]">
      <Container className="text-center">
        <PrimaryStatement className="!text-[#8C2F2B] italic">
          {common.comingSoon[lang]}
        </PrimaryStatement>
        <BodyText className="opacity-60">
          {common.comingSoonSub[lang]}
        </BodyText>
      </Container>
    </div>
  );
};

export default About;