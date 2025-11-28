import React from 'react';
import { Icons, StepImages } from '../constants';

interface TopMediaSectionProps {
  title: string;
  currentStep: number;
  videoUrl?: string | null;
}

const TopMediaSection: React.FC<TopMediaSectionProps> = ({ title, currentStep, videoUrl }) => {
  // Defensive check for StepImages availability
  const images = StepImages || [];
  const mediaItem = images[currentStep] || images[0] || { src: '', alt: 'Placeholder' };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-[#002147] tracking-tight font-['Inter']">Deep Dive: {title}</h2>
        <span className="bg-[#CCFF00] text-[#002147] text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">
          Interactive Mode
        </span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 h-[22rem]">
        {/* Video Section */}
        {videoUrl ? (
          <div className="bg-black rounded-xl border-4 border-[#002147] flex flex-col items-center justify-center relative overflow-hidden shadow-lg group">
             <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="Video tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
             />
          </div>
        ) : (
          <div className="bg-[#002147] rounded-xl border-4 border-double border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#CCFF00] transition-colors cursor-pointer shadow-lg">
             <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="bg-white/10 p-5 rounded-full shadow-inner mb-4 z-10 backdrop-blur-sm group-hover:scale-110 transition-transform">
               <Icons.Video className="w-10 h-10 text-[#CCFF00]" />
             </div>
             <p className="font-bold text-white z-10 text-lg">Video Tutorial</p>
             <p className="text-sm text-slate-300 z-10">Coming Soon</p>
          </div>
        )}

        {/* Infographic Area */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center overflow-hidden relative group">
           <div className="absolute top-4 right-4 bg-[#002147] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-md z-20">
             Infographic
           </div>
           {mediaItem.src && (
             <img 
               src={mediaItem.src} 
               alt={mediaItem.alt} 
               className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
               onError={(e) => {
                 const target = e.target as HTMLImageElement;
                 target.onerror = null; 
                 target.src = `https://placehold.co/600x400/f1f5f9/94a3b8?text=${encodeURIComponent(mediaItem.alt)}`;
               }}
             />
           )}
        </div>
      </div>
    </div>
  );
};

export default TopMediaSection;