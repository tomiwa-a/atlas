import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const HowItWorksPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      number: 1,
      title: 'Input Your Preferences',
      description: 'Select your subject, learning style, and goals. Our AI analyzes your preferences to create a personalized learning path.',
      details: 'Choose from subjects like Mathematics, Science, Languages, and more. Specify your preferred pace and learning style (visual, auditory, kinesthetic).',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'AI Content Generation',
      description: 'Our advanced AI generates customized lessons, quizzes, and materials tailored to your unique needs.',
      details: 'The system creates multimodal content including text, images, videos, and interactive elements based on your input.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Engage with Content',
      description: 'Dive into your personalized learning materials with interactive elements and adaptive difficulty.',
      details: 'Access lessons with built-in progress tracking, multimedia content, and real-time feedback to keep you engaged.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: 4,
      title: 'Assessment & Feedback',
      description: 'Take targeted quizzes and receive instant feedback to reinforce your understanding.',
      details: 'AI-powered assessments adapt to your performance, providing explanations and additional resources where needed.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: 5,
      title: 'Continuous Adaptation',
      description: 'The system learns from your progress and adjusts future content for optimal learning outcomes.',
      details: 'Track your improvement over time with detailed analytics and personalized recommendations for continued growth.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to set up?',
      answer: 'Getting started takes less than 5 minutes. Simply select your subject and preferences, and ATLAS will create your personalized learning path instantly.'
    },
    {
      question: 'Can I change my learning preferences later?',
      answer: 'Absolutely! You can update your preferences at any time, and the AI will adapt your learning path accordingly.'
    },
    {
      question: 'What subjects are available?',
      answer: 'We support a wide range of subjects including Mathematics, Science, Languages, History, Programming, and more. New subjects are added regularly.'
    },
    {
      question: 'How does the AI personalize content?',
      answer: 'Our AI analyzes your input, learning style, and progress to create content that matches your pace and preferences, ensuring optimal engagement and retention.'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="bg-black text-white py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">How ATLAS Works</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover the simple 5-step process that transforms your learning experience with personalized AI-powered education.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Learning Journey</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Follow these steps to unlock your full potential with ATLAS's adaptive learning system.
            </p>
          </div>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-1">{step.number}</div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                  <p className="text-lg mb-4">{step.description}</p>
                  <p className="text-base text-gray-600">{step.details}</p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Mockup Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="bg-white p-8 rounded-lg border border-neutral shadow-sm">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
                    >
                      <h4 className="font-semibold text-lg">{faq.question}</h4>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openIndex === index && (
                      <p className="text-base text-gray-700 mt-2">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have accelerated their education with ATLAS.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary text-secondary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
              Start Learning Now
            </button>
            <Link to="/pricing" className="border border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-secondary transition inline-block text-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;