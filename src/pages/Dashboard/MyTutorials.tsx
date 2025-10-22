import React, { useState } from 'react';
import { FaBook, FaPaintBrush, FaChartLine, FaCamera, FaMusic, FaGamepad, FaLeaf, FaUtensils, FaEye, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const MyTutorials: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data for user's created tutorials
  const tutorials = [
    {
      id: '1',
      title: 'Introduction to React Hooks',
      niche: 'Programming',
      nicheIcon: <FaBook />,
      status: 'completed',
      createdDate: '2024-01-15',
      views: 245,
      likes: 32,
      description: 'A comprehensive guide to understanding and using React Hooks effectively.'
    },
    {
      id: '2',
      title: 'Advanced UI/UX Design Principles',
      niche: 'Design',
      nicheIcon: <FaPaintBrush />,
      status: 'draft',
      createdDate: '2024-01-10',
      views: 0,
      likes: 0,
      description: 'Deep dive into modern design principles and user experience patterns.'
    },
    {
      id: '3',
      title: 'Digital Marketing Strategies',
      niche: 'Business',
      nicheIcon: <FaChartLine />,
      status: 'completed',
      createdDate: '2024-01-08',
      views: 189,
      likes: 15,
      description: 'Learn effective digital marketing strategies for growing your business.'
    },
    {
      id: '4',
      title: 'Portrait Photography Techniques',
      niche: 'Photography',
      nicheIcon: <FaCamera />,
      status: 'generating',
      createdDate: '2024-01-12',
      views: 0,
      likes: 0,
      description: 'Master the art of portrait photography with professional techniques.'
    },
    {
      id: '5',
      title: 'Music Production Basics',
      niche: 'Music',
      nicheIcon: <FaMusic />,
      status: 'completed',
      createdDate: '2024-01-05',
      views: 156,
      likes: 28,
      description: 'Get started with music production using modern DAWs and tools.'
    },
    {
      id: '6',
      title: 'Game Development with Unity',
      niche: 'Gaming',
      nicheIcon: <FaGamepad />,
      status: 'draft',
      createdDate: '2024-01-03',
      views: 0,
      likes: 0,
      description: 'Build your first game using Unity game engine.'
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || tutorial.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'generating': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'draft': return 'Draft';
      case 'generating': return 'Generating';
      default: return status;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Tutorials</h1>
          <p className="text-gray-600">Manage and track your created tutorials</p>
        </div>
        <button className="mt-4 md:mt-0 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
          Create New Tutorial
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tutorials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-neutral rounded-lg bg-secondary text-primary"
          />
        </div>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="px-4 py-3 border border-neutral rounded-lg bg-secondary text-primary"
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="draft">Draft</option>
          <option value="generating">Generating</option>
        </select>
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white p-6 rounded-lg border border-neutral shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-primary text-xl">
                  {tutorial.nicheIcon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600">{tutorial.niche}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tutorial.status)}`}>
                {getStatusText(tutorial.status)}
              </span>
            </div>

            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {tutorial.description}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>Created: {new Date(tutorial.createdDate).toLocaleDateString()}</span>
              {tutorial.status === 'completed' && (
                <div className="flex items-center space-x-4">
                  <span>{tutorial.views} views</span>
                  <span>{tutorial.likes} likes</span>
                </div>
              )}
            </div>

            <div className="flex space-x-2">
              {tutorial.status === 'completed' && (
                <button className="flex-1 bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition flex items-center justify-center">
                  <FaEye className="mr-2" />
                  View
                </button>
              )}
              {tutorial.status === 'draft' && (
                <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition flex items-center justify-center">
                  <FaEdit className="mr-2" />
                  Edit
                </button>
              )}
              {tutorial.status === 'generating' && (
                <button className="flex-1 bg-gray-500 text-white px-3 py-2 rounded-lg text-sm font-medium cursor-not-allowed flex items-center justify-center">
                  Generating...
                </button>
              )}
              <button className="px-3 py-2 border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition flex items-center justify-center">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">No tutorials found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedFilter !== 'all'
              ? 'Try adjusting your search or filter criteria.'
              : 'You haven\'t created any tutorials yet.'}
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Create Your First Tutorial
          </button>
        </div>
      )}
    </div>
  );
};

export default MyTutorials;