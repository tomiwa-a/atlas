import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from '../components/Nav';

function LandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});
  const sliderRef = useRef(null);

  const niches = [
    { title: 'Mathematics', usage: '100k', image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000' },
    { title: 'Science', usage: '1M+', image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000' },
    { title: 'History', usage: '100k', image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000' },
    { title: 'Languages', usage: '1M+', image: 'https://images.unsplash.com/photo-1601520525445-1039c1fa232b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZ3VhZ2VzfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000' },
    { title: 'Programming', usage: '100k', image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000' },
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'how-it-works', title: 'How It Works' },
    { id: 'pricing', title: 'Pricing' },
    { id: 'contact', title: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Trigger when section is in the middle of the viewport
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) {
        observer.observe(el);
        sectionRefs.current[link.id] = el;
      }
    });

    return () => {
      navLinks.forEach((link) => {
        if (sectionRefs.current[link.id]) {
          observer.unobserve(sectionRefs.current[link.id]);
        }
      });
    };
  }, [navLinks]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <Nav activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero */}
      <section id="home" className="py-20 pt-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-roboto font-bold mb-4">Unlock Your Potential with AI-Powered Learning</h1>
            <p className="text-xl font-roboto mb-8">Experience personalized tutoring that evolves with your unique learning style</p>
            <button className="bg-primary text-secondary px-8 py-4 rounded-xl hover:bg-neutral transition font-semibold">Get Started</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 ml-8 md:ml-12">
            <div className="flex flex-col space-y-6">
              <div className="bg-secondary p-6 rounded-xl shadow-lg border border-neutral hover:scale-105 transition transform duration-300 cursor-pointer ml-0">
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-primary mr-4">1</div>
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Select Your Subject</h3>
                <p>Choose from a wide range of topics to learn.</p>
              </div>
              <div className="bg-secondary p-6 rounded-xl shadow-lg border border-neutral hover:scale-105 transition transform duration-300 cursor-pointer ml-8">
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-primary mr-4">2</div>
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Customize Learning Style</h3>
                <p>Set your preferred style for personalized content.</p>
              </div>
              <div className="bg-secondary p-6 rounded-xl shadow-lg border border-neutral hover:scale-105 transition transform duration-300 cursor-pointer ml-16">
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-primary mr-4">3</div>
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Receive AI Guide</h3>
                <p>Get your instant, adaptive learning guide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section id="learning-paths" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-roboto font-bold mb-4">Explore Popular Learning Paths</h2>
            <p className="text-lg font-roboto">Discover a wide range of subjects tailored to your interests and learning style. Our AI-powered system helps you master new skills efficiently.</p>
          </div>
           <div className="md:w-2/3 ml-0 md:ml-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {niches.map((niche, index) => (
                 <div key={index} className="px-2">
                     <div className="relative rounded-2xl overflow-hidden cursor-pointer h-64 md:h-80">
                      <img src={niche.image} alt={niche.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 rounded-t-2xl" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6))' }}>
                        <h3 className="text-xl font-bold mb-1 text-white">{niche.title}</h3>
                        <p className="text-base text-gray-200 mb-2 font-medium">{niche.usage} people have used this</p>
                        <div className="flex justify-end">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                   </div>
                 </div>
               ))}
              </div>
            </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p>Adapts to your knowledge and style.</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p>Uses advanced AI for accurate tutoring.</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-xl font-semibold mb-2">Multimodal Content</h3>
            <p>Text, images, and more for better learning.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-secondary">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Input</h3>
              <p>Select subject and style preferences.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Generation</h3>
              <p>AI creates customized lessons.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Consumption</h3>
              <p>Engage with multimodal content.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p>Take targeted quizzes.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">5️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Adaptation</h3>
              <p>System adjusts learning path.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded shadow">
              <p className="mb-4">"ATLAS transformed my learning experience. The personalized lessons are spot on!"</p>
              <p className="font-semibold">- Alex Johnson, Student</p>
            </div>
            <div className="bg-secondary p-6 rounded shadow">
              <p className="mb-4">"Finally, an AI tutor that actually understands my style. Highly recommend."</p>
              <p className="font-semibold">- Maria Garcia, Educator</p>
            </div>
            <div className="bg-secondary p-6 rounded shadow">
              <p className="mb-4">"The adaptive path kept me engaged and progressing faster than ever."</p>
              <p className="font-semibold">- David Lee, Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="p-3 border border-neutral rounded bg-secondary text-primary" />
            <input type="email" placeholder="Email" className="p-3 border border-neutral rounded bg-secondary text-primary" />
            <textarea placeholder="Message" rows={4} className="p-3 border border-neutral rounded bg-secondary text-primary md:col-span-2"></textarea>
            <button type="submit" className="bg-primary text-secondary px-6 py-3 rounded hover:bg-neutral transition md:col-span-2">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-primary text-secondary">
        <p>&copy; 2025 ATLAS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;