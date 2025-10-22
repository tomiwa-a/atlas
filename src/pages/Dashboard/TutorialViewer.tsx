import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCopy, FaCheck, FaStar, FaShare, FaDownload, FaPlay, FaPause, FaCode, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

interface TutorialSection {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  tips?: string[];
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
}

interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  estimatedTime: string;
  sections: TutorialSection[];
  tags: string[];
  createdAt: string;
}

const TutorialViewer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tutorialData = location.state?.tutorialData;

  // Mock tutorial data - in real app this would come from API
  const [tutorial] = useState<Tutorial>({
    id: 'tutorial-1',
    title: tutorialData?.topic || 'React Hooks Fundamentals',
    description: `A comprehensive guide to understanding and using React Hooks effectively in your applications. ${tutorialData?.topic ? `Focused on ${tutorialData.topic}.` : ''}`,
    difficulty: tutorialData?.difficulty || 'intermediate',
    estimatedTime: '45 minutes',
    tags: ['React', 'JavaScript', 'Frontend', 'Hooks'],
    createdAt: new Date().toISOString(),
    sections: [
      {
        id: 'intro',
        title: 'Introduction to React Hooks',
        content: `React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 as a way to use state and other React features without writing a class component.

Hooks solve a wide variety of seemingly unconnected problems in React that we've encountered over five years of writing and maintaining tens of thousands of components. You can learn more about why we're introducing Hooks by reading our motivation.`,
        codeExample: `import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
        tips: [
          'Hooks can only be called at the top level of React functions',
          'Hooks can only be called from React function components or custom Hooks',
          'Always use hooks in the same order on every render'
        ]
      },
      {
        id: 'usestate',
        title: 'The useState Hook',
        content: `useState is a Hook that lets you add React state to function components. It returns an array with two values: the current state and a function to update it.

The useState hook takes an initial state value as a parameter and returns an array containing the current state value and a setter function.`,
        codeExample: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}`,
        quiz: {
          question: 'What does useState return?',
          options: [
            'A single value representing the current state',
            'An array with the current state and a setter function',
            'An object with state and actions',
            'A promise that resolves to the state'
          ],
          correctAnswer: 1
        }
      },
      {
        id: 'useeffect',
        title: 'The useEffect Hook',
        content: `The useEffect Hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

By default, useEffect runs after every completed render, but you can choose to fire it only when certain values have changed.`,
        codeExample: `import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;

    // Cleanup function (optional)
    return () => {
      console.log('Cleanup');
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
        tips: [
          'useEffect runs after every render by default',
          'Pass an empty array [] to run only once on mount',
          'Include dependencies in the array to control when it runs',
          'Return a cleanup function for side effects that need cleanup'
        ]
      }
    ]
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  const copyToClipboard = async (code: string, sectionId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(sectionId);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const markSectionComplete = (sectionIndex: number) => {
    setCompletedSections(prev => new Set([...prev, sectionIndex]));
  };

  const handleQuizAnswer = (sectionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [sectionId]: answerIndex }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentSectionData = tutorial.sections[currentSection];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <button
              onClick={() => navigate('/dashboard/my-tutorials')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
            >
              <FaArrowLeft /> Back to My Tutorials
            </button>
            <h1 className="text-3xl font-bold mb-2">{tutorial.title}</h1>
            <p className="text-gray-600 text-lg mb-4">{tutorial.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                {tutorial.difficulty}
              </span>
              <span>⏱️ {tutorial.estimatedTime}</span>
              <span>📅 {new Date(tutorial.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FaStar /> Favorite
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FaShare /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FaDownload /> Export
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tutorial.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Table of Contents */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm sticky top-4">
            <h3 className="font-semibold mb-4">Table of Contents</h3>
            <nav className="space-y-2">
              {tutorial.sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    currentSection === index
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {completedSections.has(index) && (
                      <FaCheckCircle className="text-green-500 text-sm" />
                    )}
                    <span className="text-sm">{section.title}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            {/* Section Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{currentSectionData.title}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">
                    {currentSection + 1} of {tutorial.sections.length}
                  </span>
                  {!completedSections.has(currentSection) && (
                    <button
                      onClick={() => markSectionComplete(currentSection)}
                      className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 text-sm"
                    >
                      <FaCheck /> Mark Complete
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Section Content */}
            <div className="p-6 space-y-6">
              {/* Main Content */}
              <div className="prose max-w-none">
                {currentSectionData.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Code Example */}
              {currentSectionData.codeExample && (
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCode />
                      <span className="text-sm">JavaScript</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(currentSectionData.codeExample!, currentSectionData.id)}
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
                    >
                      {copiedCode === currentSectionData.id ? <FaCheck /> : <FaCopy />}
                      {copiedCode === currentSectionData.id ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-gray-100 text-sm overflow-x-auto">
                    <code>{currentSectionData.codeExample}</code>
                  </pre>
                </div>
              )}

              {/* Tips */}
              {currentSectionData.tips && currentSectionData.tips.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FaLightbulb className="text-blue-600" />
                    <h4 className="font-semibold text-blue-900">Pro Tips</h4>
                  </div>
                  <ul className="space-y-2">
                    {currentSectionData.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-blue-800">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quiz */}
              {currentSectionData.quiz && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-3">Quick Check</h4>
                  <p className="text-yellow-800 mb-4">{currentSectionData.quiz.question}</p>
                  <div className="space-y-2">
                    {currentSectionData.quiz.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(currentSectionData.id, index)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          quizAnswers[currentSectionData.id] === index
                            ? index === currentSectionData.quiz!.correctAnswer
                              ? 'bg-green-100 border-green-300 text-green-800'
                              : 'bg-red-100 border-red-300 text-red-800'
                            : 'bg-white border-gray-300 hover:bg-gray-50'
                        }`}
                        disabled={quizAnswers[currentSectionData.id] !== undefined}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-4 h-4 rounded-full border-2 ${
                            quizAnswers[currentSectionData.id] === index
                              ? index === currentSectionData.quiz!.correctAnswer
                                ? 'bg-green-500 border-green-500'
                                : 'bg-red-500 border-red-500'
                              : 'border-gray-300'
                          }`} />
                          <span className="text-sm">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  {quizAnswers[currentSectionData.id] !== undefined && (
                    <div className={`mt-4 p-3 rounded-lg ${
                      quizAnswers[currentSectionData.id] === currentSectionData.quiz!.correctAnswer
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {quizAnswers[currentSectionData.id] === currentSectionData.quiz!.correctAnswer
                        ? '✅ Correct! Great job.'
                        : `❌ Incorrect. The correct answer is: ${currentSectionData.quiz!.options[currentSectionData.quiz!.correctAnswer]}`
                      }
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaArrowLeft /> Previous
                </button>
                <button
                  onClick={() => setCurrentSection(Math.min(tutorial.sections.length - 1, currentSection + 1))}
                  disabled={currentSection === tutorial.sections.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next <FaArrowLeft className="rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialViewer;