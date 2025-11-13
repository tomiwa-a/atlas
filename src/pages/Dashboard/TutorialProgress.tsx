import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSpinner, FaCheck, FaRocket, FaBrain, FaCode, FaBookOpen, FaLightbulb } from 'react-icons/fa';

interface GenerationStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: number; // in milliseconds
}

const TutorialProgress: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tutorialData = location.state?.tutorialData;

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isComplete, setIsComplete] = useState(false);

  const generationSteps: GenerationStep[] = [
    {
      id: 'analyzing',
      title: 'Analyzing Requirements',
      description: 'Understanding your tutorial specifications and target audience',
      icon: <FaBrain />,
      duration: 2000
    },
    {
      id: 'researching',
      title: 'Researching Content',
      description: 'Gathering relevant information and best practices',
      icon: <FaBookOpen />,
      duration: 3000
    },
    {
      id: 'structuring',
      title: 'Structuring Content',
      description: 'Organizing information into logical sections and flow',
      icon: <FaLightbulb />,
      duration: 2500
    },
    {
      id: 'generating',
      title: 'Generating Tutorial',
      description: 'Creating comprehensive content with examples and explanations',
      icon: <FaCode />,
      duration: 4000
    },
    {
      id: 'finalizing',
      title: 'Finalizing Details',
      description: 'Adding finishing touches and ensuring quality',
      icon: <FaRocket />,
      duration: 1500
    }
  ];

  useEffect(() => {
    if (currentStep < generationSteps.length) {
      const step = generationSteps[currentStep];
      const stepStartTime = Date.now();
      const stepEndTime = stepStartTime + step.duration;

      const progressInterval = setInterval(() => {
        const now = Date.now();
        const elapsed = now - stepStartTime;
        const stepProgress = Math.min((elapsed / step.duration) * 100, 100);

        setProgress((prevProgress) => {
          const baseProgress = (currentStep / generationSteps.length) * 100;
          const currentStepProgress = (stepProgress / generationSteps.length);
          return Math.min(baseProgress + currentStepProgress, 100);
        });

        if (now >= stepEndTime) {
          clearInterval(progressInterval);
          setCompletedSteps(prev => new Set([...prev, currentStep]));

          if (currentStep < generationSteps.length - 1) {
            setTimeout(() => {
              setCurrentStep(currentStep + 1);
            }, 500);
          } else {
            // All steps complete
            setTimeout(() => {
              setIsComplete(true);
            }, 1000);
          }
        }
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [currentStep, generationSteps.length]);

  useEffect(() => {
    if (isComplete) {
      // Navigate to the editor for the newly created tutorial
      setTimeout(() => {
        navigate('/dashboard/editor/new', {
          state: { tutorialData, isNew: true }
        });
      }, 2000);
    }
  }, [isComplete, navigate, tutorialData]);

  const getStepStatus = (stepIndex: number) => {
    if (completedSteps.has(stepIndex)) return 'completed';
    if (stepIndex === currentStep) return 'active';
    return 'pending';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'active': return 'text-primary bg-primary/10';
      default: return 'text-gray-400 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <FaCheck className="text-green-600" />;
      case 'active': return <FaSpinner className="text-blue-600 animate-spin" />;
      default: return <div className="w-4 h-4 rounded-full bg-gray-300" />;
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-3xl text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Tutorial Complete!</h1>
          <p className="text-gray-600 mb-6">
            Your personalized tutorial has been generated successfully. Redirecting you now...
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaRocket className="text-2xl text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Generating Your Tutorial</h1>
          <p className="text-gray-600">
            Our AI is crafting a personalized tutorial just for you. This will only take a moment.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-primary h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {generationSteps.map((step, index) => {
            const status = getStepStatus(index);
            return (
              <div
                key={step.id}
                className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${
                  status === 'active' ? 'ring-2 ring-primary/20 shadow-xl' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(status)}`}>
                    {status === 'active' ? (
                      <FaSpinner className="animate-spin" />
                    ) : status === 'completed' ? (
                      <FaCheck />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  <div className="text-right">
                    {status === 'completed' && (
                      <span className="text-green-600 font-medium">✓ Complete</span>
                    )}
                    {status === 'active' && (
                      <span className="text-primary font-medium">In Progress...</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <FaSpinner className="text-primary animate-spin text-sm" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Currently working on: <span className="font-medium text-gray-900">
                  {generationSteps[currentStep]?.title}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-6 bg-neutral rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Did you know?</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Our AI analyzes thousands of learning resources to create the best content</p>
            <p>• Each tutorial is personalized based on your specified requirements</p>
            <p>• We include practical examples and real-world applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialProgress;