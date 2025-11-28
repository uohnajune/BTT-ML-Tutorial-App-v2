import React, { ReactNode } from "react";

export interface ProjectDetails {
  source?: string;
  size?: string;
  features?: string | string[];
  target?: string;
  challenge?: string;
  hypotheses?: string[];
  metrics?: string | string[];
  findings?: string[];
  popularityMetric?: string;
  chartNote?: string;
  models?: string[];
  winner?: string;
  insights?: string[];
  recommendations?: string[];
  next?: string[];
}

export interface ProjectData {
  title: string;
  icon: string;
  color: string;
  problem: string;
  stakeholders: string;
  success: string;
  costs: string;
  details?: ProjectDetails;
}

export interface StepTool {
  python: string[];
  noCode: string[];
  presentation?: string[];
  deployment?: string[];
}

export interface StepContent {
  overview: string;
  keyQuestions: string[];
  projects?: ProjectData[]; // For Step 0 mostly
  projectDetails?: (ProjectData & { details: ProjectDetails })[]; // For other steps
  dataTypes?: { type: string; example: string }[];
  metricTypes?: { category: string; metrics: string[] }[];
  edaTechniques?: { technique: string; description: string }[];
  techniques?: { category: string; examples: string[] }[];
  modelTypes?: { category: string; models: string[]; when: string }[];
  validation?: { techniques: string[]; metrics: string[] };
  interpretationTechniques?: { method: string; description: string }[];
  presentationStructure?: { section: string; content: string }[];
  nextSteps?: any[]; // Simplified for flexibility
  tools: StepTool;
  keyTakeaway: string;
}

export interface Step {
  id: number;
  title: string;
  icon: React.FC<any>;
  color: string;
  content: StepContent;
}

export interface LLMFeatureProps {
  title: string;
  description: string;
  defaultQuery: string;
  systemPrompt: string;
  buttonText: string;
  icon?: React.FC<any>;
  colorClass?: string;
}