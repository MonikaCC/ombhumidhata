import React from 'react';
import { Link } from 'react-router-dom';
import { BodyText } from './Typography';

interface CtaButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export const CtaButton = ({ label, href, className = "" }: CtaButtonProps) => {
  const content = (
    <span className={`inline-flex items-center gap-4 px-10 py-4 rounded-xl border border-[#8C2F2B]/30 text-[#8C2F2B] font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#8C2F2B] hover:text-[#FAF9F6] transition-all duration-700 shadow-sm bg-[#FAF9F6]/30 ${className}`}>
      {label}
      <span className="text-lg leading-none">→</span>
    </span>
  );

  if (href) {
    return <Link to={href} className="inline-block">{content}</Link>;
  }

  return content;
};

export const RenderBodyWithCtas = ({ text }: { text: string }) => {
  if (!text) return null;
  const lines = text.split('\n');
  
  return (
    <div className="space-y-1">
      {lines.map((line, index) => {
        const trimmed = line.trim();
        
        if (trimmed.startsWith('→')) {
          const label = trimmed.slice(1).trim();
          let href = '/contact';
          const lower = label.toLowerCase();
          
          if (lower.includes('appointment') || lower.includes('termin')) href = '/contact';
          else if (lower.includes('talk') || lower.includes('sprechen')) href = '/contact';
          else if (lower.includes('services') || lower.includes('leistungen')) href = '/work';

          return (
            <div key={index} className="pt-4 pb-8">
              <CtaButton label={label} href={href} />
            </div>
          );
        }
        
        if (trimmed === '') return <div key={index} className="h-4" />;
        return <BodyText key={index} className="mb-4">{line}</BodyText>;
      })}
    </div>
  );
};