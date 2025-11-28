import React, { useState } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { Icons } from '../constants';
import { LLMFeatureProps } from '../types';

const AIFeatureSection: React.FC<LLMFeatureProps> = ({ 
    title, 
    description, 
    defaultQuery, 
    systemPrompt, 
    buttonText, 
    icon: Icon = Icons.Zap, 
    colorClass = "purple" // colorClass is largely ignored now in favor of theme
}) => {
    const [query, setQuery] = useState(defaultQuery);
    const [result, setResult] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!query.trim()) return;
        
        setIsLoading(true);
        setResult(null);

        // Construct a richer prompt by combining user input with context
        const fullPrompt = `Task Context: ${title}\nUser Input: ${query}`;
        
        const aiText = await generateAIResponse(fullPrompt, systemPrompt);
        
        setResult(aiText);
        setIsLoading(false);
    };

    return (
        <div className={`p-6 rounded-xl border-2 border-slate-200 bg-white mb-8 shadow-sm transition-all hover:shadow-md hover:border-[#002147]`}>
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-[#002147] text-[#CCFF00]`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold text-[#002147]`}>
                    {title}
                </h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">
                {description}
            </p>
            
            <div className="relative">
                <textarea
                    className="w-full p-4 border border-gray-200 rounded-lg resize-none mb-3 text-sm focus:ring-2 focus:ring-[#002147] focus:border-[#002147] focus:outline-none transition-all bg-slate-50 text-gray-800 placeholder-gray-400"
                    rows={3}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isLoading}
                    placeholder="Enter your specific project details here..."
                />
                <div className="absolute top-2 right-2 text-[10px] uppercase font-bold text-gray-400 select-none bg-slate-50 px-1">AI Input</div>
            </div>
            
            <button
                onClick={handleGenerate}
                disabled={isLoading}
                className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-bold text-[#002147] bg-[#CCFF00] hover:bg-[#b3e600] transition-all transform active:scale-95 border border-[#b3e600] ${isLoading ? 'opacity-70 cursor-not-allowed' : 'shadow-md'}`}
            >
                {isLoading ? (
                    <>
                        <Icons.Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        <Icons.Wand2 className="w-5 h-5" />
                        {buttonText}
                    </>
                )}
            </button>

            {result && (
                <div className="mt-6 p-5 bg-slate-50 border-l-4 border-[#002147] rounded-r-xl shadow-sm animate-[fadeIn_0.5s_ease-out]">
                    <h4 className={`font-bold text-xs uppercase tracking-widest mb-3 text-[#002147] flex items-center gap-2`}>
                        <Icons.Brain className="w-4 h-4" /> AI Suggestion
                    </h4>
                    <div 
                        className="text-sm text-gray-800 prose prose-sm max-w-none leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>').replace(/^(#+)/gm, '') }}
                    />
                </div>
            )}
        </div>
    );
};

export default AIFeatureSection;