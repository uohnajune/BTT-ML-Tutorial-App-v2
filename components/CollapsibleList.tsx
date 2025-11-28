import React, { useState } from 'react';
import { Icons } from '../constants';

interface CollapsibleListProps {
  title: string;
  items: any[];
  icon?: React.FC<any>;
}

const CollapsibleList: React.FC<CollapsibleListProps> = ({ title, items, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white transition-all hover:shadow-md hover:border-gray-300">
      <button
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-slate-50 transition duration-150"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-bold text-[#002147] flex items-center gap-3 text-sm">
          {Icon ? <Icon className="w-5 h-5 text-[#002147]" /> : <Icons.Menu className="w-5 h-5 text-[#002147]" />} 
          {title}
        </h4>
        <Icons.ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 bg-slate-50 border-t border-gray-100">
          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li key={idx} className="border-l-2 border-[#CCFF00] pl-4 py-1">
                <p className="font-bold text-[#002147] text-sm uppercase tracking-wide">
                   {item.section || item.category || item.type || item.technique || item.method || "Detail"}
                </p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.content || item.examples?.join(', ') || item.metrics?.join(', ') || item.models?.join(', ') || item.description || "No detail"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleList;