import React from 'react';

interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  key?: React.Key;
}

/**
 * Centered container with constrained reading width for editorial focus
 */
export const Container = ({ children, className = "" }: ComponentProps) => (
  <div className={`w-full max-w-[1100px] mx-auto px-6 ${className}`}>
    {children}
  </div>
);

/**
 * Full-width section with generous vertical padding (breathing space)
 */
export const Section = ({ children, className = "" }: ComponentProps) => (
  <section className={`py-16 md:py-24 w-full ${className}`}>
    {children}
  </section>
);

/**
 * Small uppercase label with wide letter spacing for high-authority labeling
 */
export const Eyebrow = ({ children, className = "" }: ComponentProps) => (
  <p className={`text-xs md:text-sm uppercase tracking-[0.4em] font-sans font-bold text-[#8C2F2B] mb-6 opacity-70 ${className}`}>
    {children}
  </p>
);

/**
 * The largest typography element (atmosphere/essence)
 */
export const PrimaryStatement = ({ children, className = "" }: ComponentProps) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif text-[#4a4543] mb-8 leading-tight tracking-tight ${className}`}>
    {children}
  </h2>
);

/**
 * Serif italic header, often used as subsection markers
 */
export const SecondaryHeader = ({ children, className = "" }: ComponentProps) => (
  <h3 className={`text-xl md:text-2xl lg:text-3xl font-serif italic text-[#8C2F2B] mb-6 font-medium leading-tight ${className}`}>
    {children}
  </h3>
);

/**
 * The core reading font (global base size)
 */
export const BodyText = ({ children, className = "" }: ComponentProps) => (
  <div className={`text-base md:text-lg font-sans text-[#4a4543] font-light leading-relaxed mb-6 whitespace-pre-line tracking-tight ${className}`}>
    {children}
  </div>
);

/**
 * Breathing space text role (serif italic, slightly larger than body)
 */
export const Quote = ({ children, className = "" }: ComponentProps) => (
  <blockquote className={`text-xl md:text-2xl lg:text-3xl font-serif italic text-[#8C2F2B] leading-snug my-12 text-center max-w-3xl mx-auto opacity-90 ${className}`}>
    {children}
  </blockquote>
);

/**
 * Small sans for metadata and small highlighting
 */
export const SmallMeta = ({ children, className = "" }: ComponentProps) => (
  <p className={`text-xs md:text-sm font-sans text-[#7E7670] uppercase tracking-widest font-medium ${className}`}>
    {children}
  </p>
);

// Added HighlightText component to fix import error in About.tsx
/**
 * Elegant highlighted text (serif italic, colored)
 */
export const HighlightText = ({ children, className = "" }: ComponentProps) => (
  <p className={`font-serif italic text-xl md:text-2xl lg:text-3xl text-[#8C2F2B] opacity-90 leading-snug ${className}`}>
    {children}
  </p>
);
