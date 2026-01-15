import React from 'react';
import { Language } from '../types';
import { Mail, Phone, Send, Instagram } from 'lucide-react';

const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="animate-in fade-in duration-1000 py-24 px-6 lg:px-12">
      <div className="w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
        <div className="space-y-16">
          <header className="space-y-6">
            <h1 className="text-5xl md:text-7xl serif text-[#4a4543] leading-tight">An Invitation</h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#7E7670] leading-relaxed serif italic font-light">
              If you feel the call to explore your constitutional path or seek healing through traditional arts, I invite you to connect with me. OMBHUMIDHATA is a space I hold for human connection, responsibility, and grace.
            </p>
          </header>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-[#8C2F2B]/5 soft-edge flex items-center justify-center shrink-0 group-hover:bg-[#8C2F2B]/10 transition-colors duration-500">
                <Mail size={20} className="text-[#8C2F2B]" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <p className="uppercase text-[9px] font-bold tracking-[0.3em] text-[#8C2F2B] mb-1">Email</p>
                <p className="text-lg md:text-xl lg:text-2xl text-[#4a4543] font-light">healing@ombhumidhata.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-[#8C2F2B]/5 soft-edge flex items-center justify-center shrink-0 group-hover:bg-[#8C2F2B]/10 transition-colors duration-500">
                <Phone size={20} className="text-[#8C2F2B]" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <p className="uppercase text-[9px] font-bold tracking-[0.3em] text-[#8C2F2B] mb-1">Phone</p>
                <p className="text-lg md:text-xl lg:text-2xl text-[#4a4543] font-light">+49 (0) 1512 1391440</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 bg-[#8C2F2B]/5 soft-edge flex items-center justify-center shrink-0 group-hover:bg-[#8C2F2B]/10 transition-colors duration-500">
                <Instagram size={20} className="text-[#8C2F2B]" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <p className="uppercase text-[9px] font-bold tracking-[0.3em] text-[#8C2F2B] mb-1">Social</p>
                <p className="text-lg md:text-xl lg:text-2xl text-[#4a4543] font-light">@ombhumidhata</p>
              </div>
            </div>
          </div>
          
          <div className="p-10 bg-white/40 border border-[#8C2F2B]/5 soft-edge italic text-lg md:text-2xl text-[#7E7670] serif leading-relaxed shadow-sm font-light">
            "May you find the clarity you seek — and the strength to follow it."
          </div>
        </div>

        <form className="bg-white/60 backdrop-blur-md p-10 md:p-12 lg:p-16 soft-edge space-y-8 border border-[#8C2F2B]/5 shadow-xl shadow-[#8C2F2B]/5">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#7E7670]">Name</label>
              <input type="text" className="w-full bg-[#FAF9F6]/50 border-b border-[#8C2F2B]/10 py-3 px-1 focus:outline-none focus:border-[#8C2F2B] transition-colors duration-500 text-base md:text-lg font-light text-[#4a4543]" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#7E7670]">Email</label>
              <input type="email" className="w-full bg-[#FAF9F6]/50 border-b border-[#8C2F2B]/10 py-3 px-1 focus:outline-none focus:border-[#8C2F2B] transition-colors duration-500 text-base md:text-lg font-light text-[#4a4543]" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#7E7670]">Subject</label>
            <input type="text" className="w-full bg-[#FAF9F6]/50 border-b border-[#8C2F2B]/10 py-3 px-1 focus:outline-none focus:border-[#8C2F2B] transition-colors duration-500 text-base md:text-lg font-light text-[#4a4543]" />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#7E7670]">Message</label>
            <textarea rows={5} className="w-full bg-[#FAF9F6]/50 border border-[#8C2F2B]/5 p-5 focus:outline-none focus:border-[#8C2F2B] transition-colors duration-500 soft-edge text-base md:text-lg font-light text-[#4a4543]"></textarea>
          </div>
          <button className="w-full py-5 bg-[#8C2F2B] text-white uppercase text-[10px] font-bold tracking-[0.3em] soft-button flex items-center justify-center space-x-3 hover:bg-[#6D2421] transition-all duration-500 shadow-lg shadow-[#8C2F2B]/20">
            <span>Send Message to Me</span>
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;