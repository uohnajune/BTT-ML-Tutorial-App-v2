import React, { useState } from 'react';
import { Icons } from '../constants';

interface FlipCardProps {
  title: string;
  problem: string;
  stakeholders: string;
  success: string;
  costs: string;
  color: string;
  icon: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, problem, stakeholders, success, costs, color, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // We ignore the incoming color prop to enforce strict theme consistency, 
  // or we could use it as a subtle accent. Let's stick to the Navy/Lime theme.
  
  return (
    <div 
      className="w-full h-80 group perspective-1000 cursor-pointer" 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className={`absolute w-full h-full backface-hidden bg-[#002147] text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-lg border-2 border-transparent hover:border-[#CCFF00] transition-colors`}>
          <div className="text-2xl font-bold mb-3 text-center drop-shadow-md font-['Inter']">{title}</div>
          <div className="text-6xl mb-6 drop-shadow-md">{icon}</div> 
          <p className="text-xs uppercase tracking-widest text-[#CCFF00] mt-2 font-bold">Click to Flip</p>
          <div className="mt-4 p-2 bg-white/10 rounded-full">
            <Icons.RotateCcw className="w-5 h-5 text-[#CCFF00]" />
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-gray-800 rounded-xl p-6 shadow-xl border-2 border-[#002147] overflow-y-auto">
          <h4 className={`font-bold text-lg mb-3 border-b-2 border-[#CCFF00] pb-2 text-[#002147]`}>
            {title}
          </h4>
          <div className="space-y-3 text-sm leading-relaxed">
            <div><strong className="text-[#002147] block mb-1 uppercase text-xs tracking-wider">Problem:</strong> {problem}</div>
            <div><strong className="text-[#002147] block mb-1 uppercase text-xs tracking-wider">Stakeholders:</strong> {stakeholders}</div>
            <div><strong className="text-[#002147] block mb-1 uppercase text-xs tracking-wider">Success:</strong> {success}</div>
            {costs && <div><strong className="text-[#002147] block mb-1 uppercase text-xs tracking-wider">Costs/Risks:</strong> {costs}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;