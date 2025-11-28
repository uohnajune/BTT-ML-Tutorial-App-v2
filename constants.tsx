import React from 'react';
import { ProjectData, Step } from './types';

// --- Icons ---
export const Icons = {
  ChevronRight: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  ChevronLeft: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>,
  CheckCircle: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.6-7.85"/><path d="M22 4 12 14.01l-3-3"/></svg>,
  Database: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  BarChart3: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17v-5"/><path d="M8 17v-3"/></svg>,
  Brain: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z"/><path d="M12 12V4"/><path d="M16 12h5a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-5a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2a2 2 0 0 0-2 2H3a2 2 0 0 0-2 2 2 2 0 0 0 2 2h5a2 2 0 0 0 2 2z"/></svg>,
  Lightbulb: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-.2.2-.5 0-.7l-4.5-4.5c-.2-.2-.5-.2-.7 0l-4.5 4.5c-.2.2-.2.5 0 .7l4.5 4.5c.2.2.5.2.7 0l4.5-4.5z"/><path d="M12 12V4"/><path d="M16 12h5a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-5a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2a2 2 0 0 0-2 2H3a2 2 0 0 0-2 2 2 2 0 0 0 2 2h5a2 2 0 0 0 2 2z"/></svg>,
  Code: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  TrendingUp: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="18 7 22 7 22 11"/></svg>,
  Video: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 17-6-4v6l6-4Z"/><path d="M14 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>,
  RotateCcw: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.79 2.87L3 12zm0 0h3"/></svg>,
  Menu: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
  ChevronDown: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
  Wand2: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 7-2 2-6.5-6.5L16 2l2 2 3 3zM3 18l5-5 5 5 5 5-5-5-5-5-5 5z"/><path d="M15 5 3 17"/></svg>,
  Loader2: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>,
  Zap: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z"/></svg>,
};

// --- Data ---
const projectData = {
  baseball: {
    title: "Baseball Analytics",
    icon: "⚾",
    color: "bg-purple-500",
    problem: "Can we predict which factors lead to winning baseball games?",
    stakeholders: "Team management, coaches, scouts",
    success: "Identify key performance metrics that correlate with wins",
    costs: "Missing important factors could lead to poor team strategy",
  },
  fraud: {
    title: "Fraud Detection",
    icon: "💳",
    color: "bg-pink-500",
    problem: "How can we accurately detect credit card fraud in e-commerce transactions?",
    stakeholders: "Customers, payment processors, merchants",
    success: "Minimize both false positives (upset customers) and false negatives (financial losses)",
    costs: "False positives: customer churn. False negatives: $397.4B in global losses over 10 years",
  },
  opentable: {
    title: "Restaurant Forecasting (OpenTable)",
    icon: "🍽️",
    color: "bg-red-500",
    problem: "How to forecast the recovery of restaurant reservations post-COVID and identify policy needs?",
    stakeholders: "National Restaurant Association, COVID Policymakers",
    success: "Accurately forecast reservation % change based on state policies (Health vs. Economy scores)",
    costs: "Democratic-leaning cities showed a greater percentage drop (-50% to -70%) compared to Republican-leaning cities (-20% to -30%) in 2020-2022.",
  },
  spotify: {
    title: "Song Popularity Classification (Spotify)",
    icon: "🎧",
    color: "bg-teal-500",
    problem: "Develop a classification system to predict which songs will be popular for better user experience and increased listening time.",
    stakeholders: "Streaming service (Spotify), Musicians, Users",
    success: "Accurately classify songs as 'Popular' or 'Not Popular' based on quantified audio features.",
    costs: "Biased 'popularity' score (based on streams, playlist adds) and not all songs are rated.",
  },
  energy: {
    title: "Energy Consumption Forecasting",
    icon: "⚡",
    color: "bg-yellow-500",
    problem: "How to accurately forecast future energy consumption to optimize grid supply and minimize costs?",
    stakeholders: "Utility providers, Grid managers, Policy makers",
    success: "Minimize forecasting error (RMSE, MAE) to avoid costly under- or over-supply of power.",
    costs: "Inaccurate forecasts lead to wasted fuel costs or grid instability (blackouts).",
  },
};

export const steps: Step[] = [
  {
    id: 0,
    title: "Business Problem Definition",
    icon: Icons.Lightbulb,
    color: "bg-purple-500",
    content: {
      overview: "Every ML project starts with a clear business problem. This is your North Star. We will focus on five real-world examples throughout this tutorial.",
      keyQuestions: [
        "What specific problem are we solving?",
        "Who are the stakeholders?",
        "What does success look like?",
        "What are the costs of errors (false positives vs. false negatives)?"
      ],
      projects: [
        projectData.baseball,
        projectData.fraud,
        projectData.opentable,
        projectData.spotify,
        projectData.energy,
      ],
      keyTakeaway: "A well-defined problem statement guides every subsequent decision in your ML pipeline.",
      tools: { python: [], noCode: [] }
    }
  },
  {
    id: 1,
    title: "Data Acquisition & Overview",
    icon: Icons.Database,
    color: "bg-blue-500",
    content: {
      overview: "Understand your data sources, quality, and limitations before diving into analysis.",
      keyQuestions: [
        "Where does the data come from?",
        "How many observations and features do we have?",
        "What data types are present?",
        "Are there missing values or quality issues?",
        "Is this real or synthetic data?"
      ],
      dataTypes: [
        { type: "Structured", example: "CSV files, databases, spreadsheets" },
        { type: "Time-series", example: "Sensor data, stock prices, user activity logs (Crucial for OpenTable, Energy, and Spotify)" },
        { type: "Text", example: "Reviews, documents, social media" },
        { type: "Images", example: "Medical scans, satellite imagery" }
      ],
      projectDetails: [
        { ...projectData.baseball, details: { source: "Retrosheet Game Logs (2010-2023)", features: "At Bats, Walks, On Base %", target: "Win/Lose" } },
        { ...projectData.fraud, details: { source: "E-commerce transactions (Synthetic)", size: "151,112 entries, 11 variables", challenge: "Highly imbalanced dataset (9.36% fraud), limited features due to privacy" } },
        { ...projectData.opentable, details: { source: "OpenTable reservation data (2019-2022)", challenge: "Lack of data (2.5 years), non-identical restaurant samples, external factors (weather, cuisine type) missing" } },
        { ...projectData.spotify, details: { source: "Kaggle Spotify Dataset (1921-2020)", size: "> 170,000 songs, quantified audio features", challenge: "Popularity score might be biased (not all songs are rated)" } },
        { ...projectData.energy, details: { source: "Smart meter data, weather data, holiday schedules", size: "Years of hourly or daily consumption", challenge: "Highly cyclical data (daily, weekly, yearly), sensitivity to sudden weather changes" } },
      ],
      tools: {
        python: ["pandas", "numpy", "sqlite3"],
        noCode: ["KNIME", "Alteryx", "Google Sheets"]
      },
      keyTakeaway: "Data quality determines model quality. Garbage in = garbage out."
    }
  },
  {
    id: 2,
    title: "Hypothesis & Metrics Development",
    icon: Icons.TrendingUp,
    color: "bg-green-500",
    content: {
      overview: "Form testable hypotheses and define success metrics before analysis.",
      keyQuestions: [
        "What patterns do we expect to find?",
        "What metrics will measure success?",
        "What is the baseline performance?",
        "Are we optimizing for accuracy, precision, recall, or something else?"
      ],
      metricTypes: [
        {
          category: "Classification Metrics",
          metrics: ["Accuracy", "Precision", "Recall", "F1-Score", "AUC-ROC", "AUC-PR"]
        },
        {
          category: "Regression Metrics",
          metrics: ["MSE", "RMSE", "MAE", "R²"]
        },
        {
          category: "Time-Series Metrics",
          metrics: ["MAPE (Mean Absolute Percentage Error)", "MASE", "RMSE"]
        },
        {
          category: "Business Metrics",
          metrics: ["ROI", "Customer Lifetime Value", "Cost per Error", "Revenue Impact"]
        }
      ],
      projectDetails: [
        { ...projectData.fraud, details: { hypotheses: ["Quick purchases are more likely fraudulent", "January has higher fraud rates"], metrics: ["Accuracy (Baseline: 90.6%)", "Precision/Recall Tradeoff (AUC-PR)"] } },
        { ...projectData.opentable, details: { hypotheses: ["Republican states show smaller drops in reservations", "Health scores correlate negatively with reservations"], metrics: ["Mean Absolute Error (MAE) for forecasting"] } },
        { ...projectData.spotify, details: { hypotheses: ["High Danceability and Major Keys correlate with popularity", "Acousticness correlates negatively with popularity"], metrics: ["Classification Accuracy", "Feature Importance"] } },
        { ...projectData.baseball, details: { hypotheses: ["High On-Base Percentage wins games", "Walks correlate strongly with wins"], metrics: ["Win probability", "Feature Importance Scores"] } },
        { ...projectData.energy, details: { hypotheses: ["Consumption peaks on summer weekdays (AC load)", "Holidays and weekends reduce commercial consumption"], metrics: ["RMSE (Root Mean Square Error)", "MAPE (Mean Absolute Percentage Error)"] } }
      ],
      tools: { python: [], noCode: [] },
      keyTakeaway: "Choose metrics aligned with business goals. In imbalanced datasets, accuracy alone is misleading!",
    }
  },
  {
    id: 3,
    title: "Exploratory Data Analysis (EDA)",
    icon: Icons.BarChart3,
    color: "bg-yellow-500",
    content: {
      overview: "EDA reveals patterns, relationships, and anomalies in your data. This is where insights begin.",
      keyQuestions: [
        "What is the distribution of each variable?",
        "Are there correlations between features?",
        "Are there outliers or unusual patterns?",
        "Does the data match our expectations?",
        "Do we need feature engineering?"
      ],
      edaTechniques: [
        { technique: "Univariate Analysis", description: "Histograms, box plots, value counts" },
        { technique: "Bivariate Analysis", description: "Scatter plots, correlation matrices" },
        { technique: "Temporal Analysis", description: "Time series plots, seasonality checks" },
        { technique: "Geographic Analysis", description: "Map-based visualizations, country comparisons" }
      ],
      projectDetails: [
        { ...projectData.fraud, details: { findings: ["Quick purchases (< 137 seconds) are 100% fraudulent", "January has highest fraud likelihood", "Canada has the highest fraud rate (11.6%)"] } },
        { ...projectData.opentable, details: { findings: ["Democratic cities (NY, LA) saw greater average drops (-50% to -70%) than Republican cities (Miami, Phoenix) (-10% to -30%)"], chartNote: "New York histogram shows almost no increase in reservations post-2019 baseline" } },
        { ...projectData.spotify, details: { findings: ["Acousticness and Instrumentalness declined dramatically after the mid-1960s", "Danceability and Energy increased after the 1960s"], popularityMetric: "Median Popularity Point: 38" } },
        { ...projectData.baseball, details: { findings: ["Average strikeouts increased from 7.1 (2010) to 8.8 (2019)", "Walks correlate strongly with wins (3.6 avg for winners vs. 2.7 for losers)"] } },
        { ...projectData.energy, details: { findings: ["Consumption shows strong daily and weekly cycles", "Temperature is the most critical feature (non-linear relationship)", "Extreme weather events appear as major outliers"] } }
      ],
      tools: {
        python: ["matplotlib", "seaborn", "plotly", "pandas-profiling"],
        noCode: ["Tableau", "Power BI", "KNIME visualization nodes"]
      },
      keyTakeaway: "EDA is iterative. Visualize everything. Let the data tell its story."
    }
  },
  {
    id: 4,
    title: "Feature Engineering & Preprocessing",
    icon: Icons.Code,
    color: "bg-orange-500",
    content: {
      overview: "Transform raw data into features that help models learn better. This often makes the biggest difference.",
      keyQuestions: [
        "Do we need to create new features?",
        "How should we handle categorical variables?",
        "Should we scale numerical features?",
        "How do we handle missing data?",
        "Should we handle class imbalance?"
      ],
      techniques: [
        { 
          category: "Time & Frequency Features",
          examples: ["Extract month, weekday, hour from timestamps", "Calculate time differences", "Device frequency counts"]
        },
        { 
          category: "Encoding & Scaling",
          examples: ["One-hot encoding", "Label encoding", "StandardScaler"]
        },
        { 
          category: "Geographic Features",
          examples: ["Map IP addresses to countries", "Create 'relevant_country' features"]
        }
      ],
      projectDetails: [
        { ...projectData.fraud, details: { features: ["Mapped IP addresses to countries", "Created 'quick_purchase' binary feature (< 137 seconds)", "Calculated 'device_frequency'"] } },
        { ...projectData.opentable, details: { features: ["Used 2019 reservations as a baseline", "Calculated % Change from 2019", "Used external 'Health Score' and 'Economy Score' features"] } },
        { ...projectData.spotify, details: { features: ["Binarized 'Popularity' score (>= 38 = Popular)", "Used quantified audio features directly"] } },
        { ...projectData.baseball, details: { features: ["Created 'runs_per_game' ratio", "Encoded home/away games", "Calculated season-to-date rolling averages"] } },
        { ...projectData.energy, details: { features: ["Created sine/cosine transformations for cyclical features", "Lag features (consumption in previous 24h, 7d)", "One-hot encoding for holidays/day types"] } }
      ],
      tools: {
        python: ["scikit-learn (preprocessing)", "feature-engine", "category_encoders"],
        noCode: ["KNIME (preprocessing nodes)", "RapidMiner"]
      },
      keyTakeaway: "Domain knowledge + creativity = powerful features. Feature engineering is still more art than science."
    }
  },
  {
    id: 5,
    title: "Model Selection & Training",
    icon: Icons.Brain,
    color: "bg-pink-500",
    content: {
      overview: "Choose and train models appropriate for your problem. Start simple, then increase complexity.",
      keyQuestions: [
        "Is this a classification, regression, or time-series problem?",
        "Should we start with simple baselines?",
        "How will we prevent overfitting?",
        "What validation techniques are needed?"
      ],
      modelTypes: [
        {
          category: "Classification",
          models: ["Logistic Regression", "Random Forest", "Naive Bayes", "Gradient Boosting"],
          when: "Predicting a category (e.g., Fraud/No Fraud, Popular/Not Popular)"
        },
        {
          category: "Time-Series Forecasting",
          models: ["ARIMA", "SARIMA", "Prophet", "RNNs/LSTMs"],
          when: "Predicting future values based on past sequential data (e.g., reservations, energy)"
        },
        {
          category: "Regression",
          models: ["Linear Regression", "Lasso/Ridge Regression", "XGBoost Regressor"],
          when: "Predicting a continuous value (e.g., Win Probability, Revenue)"
        }
      ],
      projectDetails: [
        { ...projectData.fraud, details: { models: ["Logistic Regression (92.0%)", "Lasso Regression (91.6%)", "Mixed Naive Bayes (92.2%)"], winner: "Logistic Regression (Best Interpretability)" } },
        { ...projectData.opentable, details: { models: ["ARIMA", "SARIMA"], winner: "ARIMA/SARIMA (Time-series specific)" } },
        { ...projectData.spotify, details: { models: ["Random Forest", "Naive Bayes", "Decision Tree"], winner: "Random Forest (Good for complex feature interactions)" } },
        { ...projectData.baseball, details: { models: ["Logistic Regression", "Random Forest"], winner: "Random Forest (Good performance and feature analysis)" } },
        { ...projectData.energy, details: { models: ["ARIMA", "Prophet", "XGBoost Regressor"], winner: "XGBoost (Excellent handling of non-linear features)" } },
      ],
      tools: {
        python: ["scikit-learn", "xgboost", "lightgbm", "tensorflow", "pytorch"],
        noCode: ["KNIME (ML nodes)", "Orange", "RapidMiner", "Azure ML Studio"]
      },
      keyTakeaway: "More complex ≠ better. Choose models you can explain. Interpretability often matters more than a 0.5% accuracy gain."
    }
  },
  {
    id: 6,
    title: "Model Interpretation & Insights",
    icon: Icons.Lightbulb,
    color: "bg-indigo-500",
    content: {
      overview: "Extract actionable insights from your model. This is what stakeholders care about.",
      keyQuestions: [
        "What are the most important features?",
        "Can we explain individual predictions?",
        "Do the model's patterns make business sense?",
        "What actions should we recommend?"
      ],
      interpretationTechniques: [
        { method: "Feature Importance", description: "Which features matter most? (tree-based models)" },
        { method: "Coefficients/Odds Ratios", description: "How do features affect predictions? (linear models)" },
        { method: "SHAP Values/LIME", description: "Explain individual predictions across any model type" },
        { method: "Confusion Matrix Analysis", description: "Understand types of errors being made" }
      ],
      projectDetails: [
        { ...projectData.fraud, details: { insights: ["Quick purchases (<137 sec) are 110× more likely to be fraud", "Each additional device use = 8× more likely fraud"], recommendations: ["Implement 3-tier Fraud Probability Scoring", "Increase January Staffing"] } },
        { ...projectData.opentable, details: { insights: ["Forecasted small positive % change (0.1% to 2.7%) for late 2022", "Dallas had highest forecasted recovery"], recommendations: ["Democratic cities need more help (financial, marketing)", "Policymakers should use 'Health vs. Economy' metric"] } },
        { ...projectData.spotify, details: { insights: ["Popular songs are highly Danceable (Avg 59%)", "Popular songs are almost entirely in a Major Key (70%)"], recommendations: ["Focus playlist recommendations on Major Keys, high Danceability"] } },
        { ...projectData.baseball, details: { insights: ["Get on Base is the most important predictor", "Walks and At Bats matter most"], recommendations: ["Focus scouting on high OBP players", "Train hitters to be more selective"] } },
        { ...projectData.energy, details: { insights: ["Temperature features dominated importance", "Consumption lagged features showed strong auto-correlation"], recommendations: ["Adjust grid supply planning based on short-term temperature forecasts", "Develop dynamic pricing"] } }
      ],
      tools: {
        python: ["shap", "lime", "eli5", "yellowbrick"],
        noCode: ["KNIME Interpretation nodes", "Tableau Dashboard"]
      },
      keyTakeaway: "Models are just tools. The value is in actionable insights that drive business decisions."
    }
  },
  {
    id: 7,
    title: "Presentation & Next Steps",
    icon: Icons.CheckCircle,
    color: "bg-teal-500",
    content: {
      overview: "Communicate findings effectively and plan for deployment and iteration.",
      keyQuestions: [
        "Who is my audience?",
        "What are the key findings and recommendations?",
        "What are the limitations?",
        "What should we do next?"
      ],
      presentationStructure: [
        { section: "Executive Summary", content: "1-2 slide TL;DR with key findings and recommendations" },
        { section: "Business Problem", content: "Context, stakeholders, success criteria" },
        { section: "Key Insights", content: "3-5 main findings with clear visualizations" },
        { section: "Recommendations", content: "Specific, actionable next steps" },
        { section: "Limitations & Future Work", content: "Be transparent about constraints" }
      ],
      nextSteps: [
        { ...projectData.fraud, details: { next: ["Time-Series Analysis to spot fraud trends", "Find publicly available real datasets", "Detect other forms of Identity Theft"] } },
        { ...projectData.opentable, details: { next: ["Start analysis after the March 2020 shutdown", "Include the same restaurants 2019-2022"] } },
        { ...projectData.spotify, details: { next: ["Analyze audio features of specific genres", "Test popularity classification on newer data"] } },
        { ...projectData.baseball, details: { next: ["Analyze player mental fortitude", "Develop ballpark-specific recommendations"] } },
        { ...projectData.energy, details: { next: ["Implement deep learning models (LSTMs)", "Incorporate features for EV adoption"] } }
      ],
      tools: {
        python: [],
        noCode: [],
        presentation: ["Google Slides", "PowerPoint", "Jupyter", "Streamlit"],
        deployment: ["Flask API", "FastAPI", "Docker", "AWS SageMaker"]
      },
      keyTakeaway: "Your model is only valuable if people understand and use it. Communication is as important as the technical work."
    }
  }
];

export const StepImages = [
    { 
        src: "https://ik.imagekit.io/z44di6hl8x/Business_Objective.jpg", 
        alt: "Business Objective 4-W Statements"
    }, 
    { 
        src: "https://ik.imagekit.io/z44di6hl8x/Screenshot%202025-11-24%20at%207.54.55%E2%80%AFPM.png?updatedAt=1764044440819", 
        alt: "Data Profiling and Quality Checks"
    },
    { 
        src: "https://ik.imagekit.io/z44di6hl8x/Hypothesis_Metric_Development.jpg", 
        alt: "Hypothesis and Metric Development Flow"
    },
    { 
        src: "https://ik.imagekit.io/z44di6hl8x/EDA.jpg?updatedAt=1764046734431", 
        alt: "Exploratory Data Analysis Pipeline"
    },
    { 
        src: "https://ik.imagekit.io/z44di6hl8x/EDA.jpg?updatedAt=1764046734431", 
        alt: "Feature Engineering Steps Flow"
    },
    { 
        src: "https://ik.imagekit.io/z44di6hl8x/Model_selection.jpg",
        alt: "ML Models Explained Grid"
    },
    { 
        src: "https://ik.imagekit.io/z44di6hl8x/Model_Interpretation.jpg",
        alt: "Model Interpretation Flow Chart"
    }, 
    { 
        src: "https://ik.imagekit.io/z44di6hl8x/Insight_presentation.jpg",
        alt: "DIKW Pyramid"
    }, 
];
