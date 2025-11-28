import React, { useState } from 'react';
import TopMediaSection from './components/TopMediaSection';
import FlipCard from './components/FlipCard';
import CollapsibleList from './components/CollapsibleList';
import AIFeatureSection from './components/AIFeatureSection';
import { steps, Icons } from './constants';
import { Step } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const step: Step = steps[currentStep] || steps[0]; // Defensive fallback
  const StepIcon = step.icon;
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Short labels for navigation
  const stepLabels = [
    "Business Problem",
    "Data Overview",
    "Hypothesis & Metrics",
    "EDA",
    "Feature Engineering",
    "Model Selection",
    "Model Insights",
    "Presentation"
  ];

  // Video URL Logic: Only for Step 0 for now
  const getVideoUrl = (stepId: number) => {
    switch(stepId) {
      case 0: return "https://www.youtube.com/embed/t4K6lney7Zw"; // Google Cloud: Define your ML Problem
      default: return null;
    }
  };

  const getAIConfig = (stepId: number, keyQuestions: string[]) => {
      // Create a formatted list of questions for the prompt
      const questionsList = keyQuestions.map((q, i) => `${i+1}. ${q}`).join("\n");
      
      const baseSystemPrompt = `You are a specialized ML Tutor for Break Through Tech students. Your goal is to help them apply machine learning concepts to real world problems.

Based on the user's input, generate a structured suggestion outline that specifically answers the following Key Questions for this stage of the project:

${questionsList}

STRICT OUTPUT CONSTRAINTS:
1. Limit the TOTAL output to approximately 250 words.
2. Format the response as a structured listicle.
3. Use the exact text of each Key Question provided above as a Heading (e.g., "## What specific problem are we solving?").
4. Under each Heading, provide the answer/suggestion as a concise bulleted list.
5. Do NOT include generic intro/outro text. Dive straight into the headers.
6. Keep the tone encouraging, professional, and actionable.`;

      switch(stepId) {
        case 0: return {
            title: "Business Problem Formalizer",
            description: "Input your rough project idea. The AI will structure it into a formal definition answering the Key Questions above.",
            defaultQuery: "I want to improve sales for my online shoe store.",
            systemPrompt: baseSystemPrompt,
            buttonText: "Structure My Problem",
        };
        case 1: return {
            title: "Data Profiling Assistant",
            description: "Describe your dataset. The AI will help you profile it by answering the Key Questions regarding source, size, and quality.",
            defaultQuery: "A CSV file with 10,000 rows of server logs including timestamps and error codes.",
            systemPrompt: baseSystemPrompt,
            buttonText: "Profile Data",
        };
        case 2: return {
            title: "Hypothesis & Metric Generator",
            description: "Describe your problem. The AI will generate hypotheses and success metrics based on the Key Questions.",
            defaultQuery: "Predicting customer churn to reduce marketing costs.",
            systemPrompt: baseSystemPrompt,
            buttonText: "Generate Hypotheses",
        };
        case 3: return {
            title: "EDA Strategy Planner",
            description: "Input your variables. The AI will suggest an EDA strategy answering the Key Questions about distributions and correlations.",
            defaultQuery: "Variables: House Price, Number of Bedrooms, Location (Zip Code).",
            systemPrompt: baseSystemPrompt,
            buttonText: "Plan EDA",
        };
        case 4: return {
            title: "Feature Engineering Chef",
            description: "Input your raw features. The AI will suggest transformation techniques addressing the Key Questions.",
            defaultQuery: "Raw Features: User login timestamp, User agent string, IP address.",
            systemPrompt: baseSystemPrompt,
            buttonText: "Suggest Features",
        };
        case 5: return {
            title: "Model Selector",
            description: "Describe your prediction task. The AI will recommend models and validation strategies based on the Key Questions.",
            defaultQuery: "Predicting whether a transaction is fraud (Yes/No) with highly imbalanced data.",
            systemPrompt: baseSystemPrompt,
            buttonText: "Select Models",
        };
        case 6: return {
            title: "Insight Translator",
            description: "Paste your model findings. The AI will interpret them and suggest business actions based on the Key Questions.",
            defaultQuery: "Feature 'Time Since Last Login' has the highest importance score. High values correlate with Churn.",
            systemPrompt: baseSystemPrompt,
            buttonText: "Translate Insights",
        };
        case 7: return {
            title: "Pitch Perfect",
            description: "Input your results. The AI will draft a presentation outline addressing the audience and key findings.",
            defaultQuery: "We achieved 92% accuracy and identified 3 key drivers of churn. Next step is a pilot program.",
            systemPrompt: baseSystemPrompt,
            buttonText: "Draft Pitch",
        };
        default: return null;
      }
  };

  const aiConfig = getAIConfig(currentStep, step.content.keyQuestions);

  // Helper to render case study details specific to the current step
  const renderCaseStudyContent = (p: any) => {
      // p is ProjectData. In Step 0 it's just ProjectData.
      // In other steps, it's ProjectData & { details: ProjectDetails }
      // We safely access details.
      const details = p.details || {};
      const fallback = [{ section: "Overview", content: p.problem }];
      
      let items: { section: string; content: any }[] = [];

      switch(currentStep) {
          case 0: // Business Problem
              items = [
                  { section: "Problem", content: p.problem },
                  { section: "Stakeholders", content: p.stakeholders },
                  { section: "Success Metric", content: p.success },
                  { section: "Costs/Risks", content: p.costs }
              ];
              break;
          case 1: // Data Overview
              items = [
                  { section: "Source", content: details.source || "N/A" },
                  { section: "Size", content: details.size || "N/A" },
                  { section: "Challenge", content: details.challenge || "None listed" },
                  { section: "Target", content: details.target || "N/A" }
              ];
              break;
          case 2: // Hypothesis
              items = [
                  { section: "Hypotheses", content: Array.isArray(details.hypotheses) ? details.hypotheses.join('; ') : details.hypotheses || "N/A" },
                  { section: "Key Metrics", content: Array.isArray(details.metrics) ? details.metrics.join(', ') : details.metrics || "N/A" }
              ];
              break;
          case 3: // EDA
              items = [
                   { section: "Key Findings", content: Array.isArray(details.findings) ? details.findings.join('; ') : details.findings || "N/A" },
                   ...(details.chartNote ? [{ section: "Visualization Note", content: details.chartNote }] : [])
              ];
              break;
          case 4: // Feature Engineering
              items = [
                   { section: "Engineered Features", content: Array.isArray(details.features) ? details.features.join('; ') : details.features || "N/A" },
              ];
              break;
          case 5: // Model Selection
              items = [
                  { section: "Models Tested", content: Array.isArray(details.models) ? details.models.join(', ') : details.models || "N/A" },
                  { section: "Winner", content: details.winner || "N/A" }
              ];
              break;
          case 6: // Insights
               items = [
                  { section: "Business Insights", content: Array.isArray(details.insights) ? details.insights.join('; ') : details.insights || "N/A" },
                  { section: "Recommendations", content: Array.isArray(details.recommendations) ? details.recommendations.join('; ') : details.recommendations || "N/A" }
               ];
               break;
          case 7: // Presentation
              items = [
                   { section: "Next Steps", content: Array.isArray(details.next) ? details.next.join('; ') : details.next || "N/A" }
              ];
              break;
          default:
              items = fallback;
      }
      return items;
  };

  return (
    <div className="min-h-screen pb-20 bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#002147] border-b border-[#CCFF00] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="bg-[#CCFF00] p-2 rounded-lg">
                    <Icons.Brain className="w-6 h-6 text-[#002147]" />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white tracking-wider uppercase font-['Inter']">Break Through Tech</h1>
                    <span className="text-xs text-[#CCFF00] font-semibold tracking-widest uppercase">AI / ML Architect</span>
                </div>
            </div>
            <div className="text-sm font-medium text-gray-300 hidden md:block">
                Current Phase: <span className="text-[#CCFF00] font-bold">{stepLabels[currentStep]}</span>
            </div>
        </div>
        {/* Progress Line */}
        <div className="w-full bg-[#00152e] h-1.5">
            <div 
                className="h-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
      </nav>

      <TopMediaSection 
        title={step.title} 
        currentStep={currentStep} 
        videoUrl={getVideoUrl(currentStep)}
      />

      <main className="max-w-7xl mx-auto px-6 mt-6">
        {/* Step Navigation Indicators */}
        <div className="flex justify-between mb-12 overflow-x-auto pb-4 gap-2 no-scrollbar border-b border-gray-200">
            {steps.map((s, idx) => {
              const SIcon = s.icon;
              const isActive = idx === currentStep;
              const isCompleted = completedSteps.includes(idx);
              const label = stepLabels[idx];
              
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentStep(idx)}
                  className={`flex flex-col items-center min-w-[5rem] transition-all duration-300 group ${
                    isActive ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-md transition-colors ${
                    isActive ? 'bg-[#002147] text-[#CCFF00] border-2 border-[#CCFF00]' : 
                    isCompleted ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-white border border-gray-200 text-gray-400'
                  }`}>
                    {isCompleted && !isActive ? <Icons.CheckCircle className="w-6 h-6" /> : <SIcon className="w-6 h-6" />}
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider text-center max-w-[5rem] leading-tight ${isActive ? 'text-[#002147]' : 'text-gray-500'}`}>
                    {label}
                  </span>
                </button>
              );
            })}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-8 space-y-8">
                
                {/* Header */}
                <div className="bg-white rounded-2xl p-8 border-l-8 border-[#002147] shadow-sm">
                    <div className="flex items-start gap-5">
                        <div className={`p-4 rounded-2xl bg-[#002147] text-white shadow-lg`}>
                            <StepIcon className="w-8 h-8 text-[#CCFF00]" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-['Inter']">{step.title}</h1>
                            <p className="text-lg text-gray-600 leading-relaxed">{step.content.overview}</p>
                        </div>
                    </div>
                </div>

                {/* AI Assistant - Dynamic based on step */}
                {aiConfig && (
                    <AIFeatureSection {...aiConfig} />
                )}

                {/* Key Questions */}
                <div className="bg-[#002147] rounded-xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Icons.Lightbulb className="w-32 h-32" />
                    </div>
                    <h3 className="text-lg font-bold text-[#CCFF00] mb-6 flex items-center gap-2 relative z-10 uppercase tracking-widest">
                        <Icons.Lightbulb className="w-5 h-5" /> Key Questions
                    </h3>
                    <ul className="space-y-4 relative z-10">
                        {step.content.keyQuestions.map((q, i) => (
                            <li key={i} className="flex items-start gap-4 text-slate-100">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CCFF00] text-[#002147] flex items-center justify-center font-bold text-xs mt-0.5">
                                    {i + 1}
                                </span>
                                <span className="leading-relaxed font-medium">{q}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Flip Cards (Step 0) */}
                {currentStep === 0 && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {step.content.projects?.map((p, idx) => (
                            <FlipCard key={idx} {...p} />
                        ))}
                    </div>
                )}

                {/* Generic Content Lists (Other Steps) */}
                {currentStep > 0 && (
                    <div className="space-y-6">
                        {step.content.dataTypes && (
                             <CollapsibleList title="Data Types & Examples" items={step.content.dataTypes} icon={Icons.Database} />
                        )}
                        {step.content.metricTypes && (
                             <CollapsibleList title="Common Metrics" items={step.content.metricTypes} icon={Icons.TrendingUp} />
                        )}
                        {step.content.edaTechniques && (
                             <CollapsibleList title="EDA Techniques" items={step.content.edaTechniques} icon={Icons.BarChart3} />
                        )}
                         {step.content.techniques && (
                             <CollapsibleList title="Feature Engineering Techniques" items={step.content.techniques} icon={Icons.Code} />
                        )}
                         {step.content.modelTypes && (
                             <CollapsibleList title="Model Families" items={step.content.modelTypes} icon={Icons.Brain} />
                        )}
                         {step.content.interpretationTechniques && (
                             <CollapsibleList title="Interpretation Methods" items={step.content.interpretationTechniques} icon={Icons.Lightbulb} />
                        )}
                         {step.content.presentationStructure && (
                             <CollapsibleList title="Presentation Structure" items={step.content.presentationStructure} icon={Icons.Menu} />
                        )}
                    </div>
                )}
            </div>

            {/* RIGHT SIDEBAR COLUMN */}
            <div className="lg:col-span-4 space-y-6">
                
                {/* Project Context Box */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-24">
                    <div className="border-b border-gray-100 pb-4 mb-4">
                        <h3 className="text-lg font-bold text-[#002147] flex items-center gap-2">
                            <Icons.BarChart3 className="w-5 h-5 text-[#002147]" />
                            Case Study Context
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-semibold">
                            Applying: {stepLabels[currentStep]}
                        </p>
                    </div>
                    
                    <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                         {(step.content.projectDetails || step.content.projects || []).map((p, idx) => {
                             const stepContent = renderCaseStudyContent(p);
                             return (
                                <CollapsibleList 
                                    key={idx}
                                    title={`${p.title}`} 
                                    items={stepContent}
                                    icon={() => <span className="text-lg mr-2">{p.icon}</span>}
                                />
                             );
                         })}
                    </div>
                </div>

                {/* Tools & Key Takeaway */}
                 <div className="space-y-4">
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <h4 className="font-bold text-[#002147] mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
                            <Icons.Code className="w-4 h-4" /> Recommended Tools
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {step.content.tools.python.map((t, i) => (
                                <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100 font-mono font-semibold">
                                    {t}
                                </span>
                            ))}
                        </div>
                         <div className="flex flex-wrap gap-2">
                            {step.content.tools.noCode.map((t, i) => (
                                <span key={i} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded border border-green-100 font-mono font-semibold">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#CCFF00] to-yellow-300 rounded-xl p-5 shadow-sm">
                        <h4 className="font-bold text-[#002147] mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                             <Icons.CheckCircle className="w-5 h-5" /> Key Takeaway
                        </h4>
                        <p className="text-sm text-[#002147] leading-relaxed font-medium">
                            {step.content.keyTakeaway}
                        </p>
                    </div>
                 </div>

            </div>
        </div>

        {/* Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                        currentStep === 0 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#002147]'
                    }`}
                >
                    <Icons.ChevronLeft className="w-5 h-5" />
                    Back
                </button>
                
                <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold bg-[#002147] text-white hover:bg-[#003366] shadow-lg shadow-blue-900/20 transition-transform active:scale-95 border border-[#CCFF00]"
                >
                    {currentStep === steps.length - 1 ? "Finish Tutorial" : "Next Step"}
                    {currentStep === steps.length - 1 ? <Icons.CheckCircle className="w-5 h-5 text-[#CCFF00]" /> : <Icons.ChevronRight className="w-5 h-5 text-[#CCFF00]" />}
                </button>
            </div>
        </div>

      </main>
    </div>
  );
};

export default App;