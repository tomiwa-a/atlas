import React, { useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheck, FaLightbulb, FaUsers, FaBullseye, FaBookOpen, FaCog } from 'react-icons/fa';

interface WizardStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  component: React.ComponentType<StepProps>;
}

interface StepProps {
  data: any;
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const TopicStep: React.FC<StepProps> = ({ data, onUpdate, onNext }) => {
  const [topic, setTopic] = useState(data.topic || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onUpdate({ ...data, topic: topic.trim() });
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="topic" className="block text-lg font-medium mb-2">
          What specific topic do you want to create a tutorial about?
        </label>
        <input
          id="topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., React Hooks, Python Data Analysis, Digital Marketing Strategy"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
        <p className="text-sm text-gray-600 mt-2">
          Be specific about what you want to teach. This helps us create more targeted content.
        </p>
      </div>
      <button
        type="submit"
        disabled={!topic.trim()}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Continue
      </button>
    </form>
  );
};

const DifficultyStep: React.FC<StepProps> = ({ data, onUpdate, onNext, onBack }) => {
  const [difficulty, setDifficulty] = useState(data.difficulty || '');

  const difficulties = [
    {
      id: 'beginner',
      title: 'Beginner',
      description: 'Perfect for complete newcomers with no prior knowledge',
      icon: '🌱'
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'For those with basic knowledge looking to advance',
      icon: '🚀'
    },
    {
      id: 'advanced',
      title: 'Advanced',
      description: 'Deep dives for experienced practitioners',
      icon: '💎'
    }
  ];

  const handleSelect = (level: string) => {
    setDifficulty(level);
    onUpdate({ ...data, difficulty: level });
    setTimeout(onNext, 500); // Small delay for visual feedback
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">What's the target difficulty level?</h3>
        <p className="text-gray-600">This helps us adjust the complexity and pacing of your tutorial.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {difficulties.map((level) => (
          <button
            key={level.id}
            onClick={() => handleSelect(level.id)}
            className={`p-6 border-2 rounded-lg text-left hover:border-primary transition-all ${
              difficulty === level.id ? 'border-primary bg-primary/5' : 'border-gray-200'
            }`}
          >
            <div className="text-2xl mb-2">{level.icon}</div>
            <h4 className="font-semibold mb-1">{level.title}</h4>
            <p className="text-sm text-gray-600">{level.description}</p>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
    </div>
  );
};

const AudienceStep: React.FC<StepProps> = ({ data, onUpdate, onNext, onBack }) => {
  const [audience, setAudience] = useState(data.audience || '');

  const audiences = [
    {
      id: 'students',
      title: 'Students',
      description: 'College/university students learning for courses or projects'
    },
    {
      id: 'professionals',
      title: 'Working Professionals',
      description: 'People looking to advance their careers or learn new skills'
    },
    {
      id: 'hobbyists',
      title: 'Hobbyists & Enthusiasts',
      description: 'People learning for personal interest or side projects'
    },
    {
      id: 'entrepreneurs',
      title: 'Entrepreneurs',
      description: 'Business owners and startup founders'
    }
  ];

  const handleSelect = (selectedAudience: string) => {
    setAudience(selectedAudience);
    onUpdate({ ...data, audience: selectedAudience });
    setTimeout(onNext, 500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Who is your target audience?</h3>
        <p className="text-gray-600">Understanding your audience helps us tailor the content and examples.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {audiences.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={`p-6 border-2 rounded-lg text-left hover:border-primary transition-all ${
              audience === type.id ? 'border-primary bg-primary/5' : 'border-gray-200'
            }`}
          >
            <h4 className="font-semibold mb-2">{type.title}</h4>
            <p className="text-sm text-gray-600">{type.description}</p>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
    </div>
  );
};

const ObjectivesStep: React.FC<StepProps> = ({ data, onUpdate, onNext, onBack }) => {
  const [objectives, setObjectives] = useState<string[]>(data.objectives || []);
  const [currentObjective, setCurrentObjective] = useState('');

  const addObjective = () => {
    if (currentObjective.trim() && !objectives.includes(currentObjective.trim())) {
      setObjectives([...objectives, currentObjective.trim()]);
      setCurrentObjective('');
    }
  };

  const removeObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    onUpdate({ ...data, objectives });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">What should learners achieve?</h3>
        <p className="text-gray-600">Define 2-4 key learning objectives for your tutorial.</p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={currentObjective}
            onChange={(e) => setCurrentObjective(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addObjective()}
            placeholder="e.g., Understand how React hooks work"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            onClick={addObjective}
            disabled={!currentObjective.trim()}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {objectives.map((objective, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <span className="text-sm">{objective}</span>
              <button
                onClick={() => removeObjective(index)}
                className="text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={objectives.length === 0}
          className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50"
        >
          Continue <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const FormatStep: React.FC<StepProps> = ({ data, onUpdate, onNext, onBack }) => {
  const [format, setFormat] = useState(data.format || '');

  const formats = [
    {
      id: 'step-by-step',
      title: 'Step-by-Step Guide',
      description: 'Sequential instructions with clear progression',
      icon: '📋'
    },
    {
      id: 'project-based',
      title: 'Project-Based',
      description: 'Build something complete from start to finish',
      icon: '🔨'
    },
    {
      id: 'conceptual',
      title: 'Conceptual Overview',
      description: 'Focus on understanding core concepts and theory',
      icon: '💡'
    },
    {
      id: 'reference',
      title: 'Quick Reference',
      description: 'Fast lookup guide for common tasks and patterns',
      icon: '📖'
    }
  ];

  const handleSelect = (selectedFormat: string) => {
    setFormat(selectedFormat);
    onUpdate({ ...data, format: selectedFormat });
    setTimeout(onNext, 500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">What format works best for this topic?</h3>
        <p className="text-gray-600">Choose the structure that will make your tutorial most effective.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formats.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={`p-6 border-2 rounded-lg text-left hover:border-primary transition-all ${
              format === type.id ? 'border-primary bg-primary/5' : 'border-gray-200'
            }`}
          >
            <div className="text-2xl mb-2">{type.icon}</div>
            <h4 className="font-semibold mb-1">{type.title}</h4>
            <p className="text-sm text-gray-600">{type.description}</p>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
    </div>
  );
};

const FinalStep: React.FC<StepProps> = ({ data, onUpdate, onNext, onBack }) => {
  const [additionalDetails, setAdditionalDetails] = useState(data.additionalDetails || '');

  const handleSubmit = () => {
    onUpdate({ ...data, additionalDetails });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Any additional details or preferences?</h3>
        <p className="text-gray-600">Optional: Share any specific requirements, tools, or examples you'd like included.</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold mb-4">Tutorial Summary</h4>
        <div className="space-y-2 text-sm">
          <p><strong>Topic:</strong> {data.topic}</p>
          <p><strong>Difficulty:</strong> {data.difficulty}</p>
          <p><strong>Audience:</strong> {data.audience}</p>
          <p><strong>Objectives:</strong> {data.objectives?.join(', ')}</p>
          <p><strong>Format:</strong> {data.format}</p>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium mb-2">
          Additional Details (Optional)
        </label>
        <textarea
          id="details"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          placeholder="e.g., Include code examples, focus on best practices, use specific tools..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <FaArrowLeft /> Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
        >
          Generate Tutorial <FaCheck />
        </button>
      </div>
    </div>
  );
};

const TutorialCreationWizard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [wizardData, setWizardData] = useState<any>({
    niche: location.state?.niche || searchParams.get('niche') || '',
  });

  const steps: WizardStep[] = [
    {
      id: 'topic',
      title: 'Topic',
      description: 'Define your tutorial topic',
      icon: <FaLightbulb />,
      component: TopicStep
    },
    {
      id: 'difficulty',
      title: 'Difficulty',
      description: 'Set the skill level',
      icon: <FaBullseye />,
      component: DifficultyStep
    },
    {
      id: 'audience',
      title: 'Audience',
      description: 'Who is this for?',
      icon: <FaUsers />,
      component: AudienceStep
    },
    {
      id: 'objectives',
      title: 'Objectives',
      description: 'Learning goals',
      icon: <FaBullseye />,
      component: ObjectivesStep
    },
    {
      id: 'format',
      title: 'Format',
      description: 'Tutorial structure',
      icon: <FaBookOpen />,
      component: FormatStep
    },
    {
      id: 'final',
      title: 'Review',
      description: 'Final details',
      icon: <FaCog />,
      component: FinalStep
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Tutorial generation would start here
      console.log('Starting tutorial generation with data:', wizardData);
      // Navigate to progress page or viewer
      navigate('/dashboard/tutorial-progress', { state: { tutorialData: wizardData } });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleUpdate = (data: any) => {
    setWizardData(data);
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Create Your Tutorial</h1>
        <p className="text-lg text-gray-600">
          Let's build an amazing tutorial together. We'll guide you through the process step by step.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              index <= currentStep ? 'bg-primary border-primary text-white' : 'border-gray-300 text-gray-400'
            }`}>
              {index < currentStep ? <FaCheck className="text-sm" /> : step.icon}
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 ${
                index < currentStep ? 'bg-primary' : 'bg-gray-300'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{steps[currentStep].title}</h2>
          <p className="text-gray-600">{steps[currentStep].description}</p>
        </div>

        <CurrentStepComponent
          data={wizardData}
          onUpdate={handleUpdate}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>
    </div>
  );
};

export default TutorialCreationWizard;