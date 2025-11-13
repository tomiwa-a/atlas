import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaChartLine, FaCamera, FaMusic, FaGamepad, FaLeaf, FaUtensils } from 'react-icons/fa';

const NicheSelection: React.FC = () => {
  const navigate = useNavigate();
  const niches = [
    {
      id: 'programming',
      title: 'Programming',
      description: 'Learn coding languages, frameworks, and development best practices',
      icon: <FaCode />,
      color: 'bg-blue-500',
      tutorialCount: 150
    },
    {
      id: 'design',
      title: 'Design',
      description: 'Master UI/UX design, graphic design, and creative tools',
      icon: <FaPaintBrush />,
      color: 'bg-purple-500',
      tutorialCount: 89
    },
    {
      id: 'business',
      title: 'Business',
      description: 'Entrepreneurship, marketing, finance, and business strategy',
      icon: <FaChartLine />,
      color: 'bg-green-500',
      tutorialCount: 124
    },
    {
      id: 'photography',
      title: 'Photography',
      description: 'Camera techniques, editing, composition, and photo theory',
      icon: <FaCamera />,
      color: 'bg-yellow-500',
      tutorialCount: 67
    },
    {
      id: 'music',
      title: 'Music',
      description: 'Music production, instruments, theory, and audio engineering',
      icon: <FaMusic />,
      color: 'bg-pink-500',
      tutorialCount: 45
    },
    {
      id: 'gaming',
      title: 'Gaming',
      description: 'Game development, esports, streaming, and gaming culture',
      icon: <FaGamepad />,
      color: 'bg-red-500',
      tutorialCount: 78
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle',
      description: 'Health, fitness, cooking, travel, and personal development',
      icon: <FaLeaf />,
      color: 'bg-teal-500',
      tutorialCount: 92
    },
    {
      id: 'cooking',
      title: 'Cooking',
      description: 'Recipes, techniques, ingredients, and culinary arts',
      icon: <FaUtensils />,
      color: 'bg-orange-500',
      tutorialCount: 156
    }
  ];

  const handleNicheSelect = (nicheId: string) => {
    // Navigate to tutorial creation wizard with niche
    navigate('/dashboard/create-tutorial', { state: { niche: nicheId } });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Choose Your Niche</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select a category for your tutorial. We'll guide you through creating engaging,
          comprehensive content tailored to your chosen field.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {niches.map((niche) => (
          <div
            key={niche.id}
            onClick={() => handleNicheSelect(niche.id)}
            className="bg-white p-6 rounded-lg border border-neutral shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className={`w-12 h-12 ${niche.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <div className="text-white text-xl">
                {niche.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{niche.title}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {niche.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {niche.tutorialCount} tutorials
              </span>
              <button className="text-primary font-medium text-sm hover:underline">
                Select →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-500">
          Can't find your niche? <a href="#" className="text-primary hover:underline">Suggest a new category</a>
        </p>
      </div>
    </div>
  );
};

export default NicheSelection;