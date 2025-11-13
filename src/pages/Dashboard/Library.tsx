import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaPaintBrush, FaChartLine, FaCamera, FaMusic, FaGamepad, FaLeaf, FaUtensils, FaEye, FaEdit, FaTrash, FaSearch, FaShare, FaCopy } from 'react-icons/fa';

const Library: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'my-courses' | 'shared'>('my-courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data for user's created courses
  const myCourses = [
    {
      id: '1',
      title: 'Introduction to React Hooks',
      niche: 'Programming',
      nicheIcon: <FaBook />,
      status: 'published',
      createdDate: '2024-01-15',
      views: 245,
      shares: 12,
      tokensUsed: 50,
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
      shares: 0,
      tokensUsed: 30,
      description: 'Deep dive into modern design principles and user experience patterns.'
    },
    {
      id: '3',
      title: 'Digital Marketing Strategies',
      niche: 'Business',
      nicheIcon: <FaChartLine />,
      status: 'published',
      createdDate: '2024-01-08',
      views: 189,
      shares: 8,
      tokensUsed: 45,
      description: 'Learn effective digital marketing strategies for growing your business.'
    },
  ];

  // Mock data for shared courses
  const sharedCourses = [
    {
      id: 's1',
      title: 'Machine Learning Basics',
      sender: 'Alice Johnson',
      enrolled: true,
      progress: 75,
      sharedDate: '2024-01-12',
      description: 'Introduction to machine learning concepts and algorithms.'
    },
    {
      id: 's2',
      title: 'Photography Composition',
      sender: 'Bob Smith',
      enrolled: false,
      progress: 0,
      sharedDate: '2024-01-10',
      description: 'Master the art of visual composition in photography.'
    },
  ];

  const filteredMyCourses = myCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || course.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredSharedCourses = sharedCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'Published';
      case 'draft': return 'Draft';
      default: return status;
    }
  };

  const copyShareLink = (courseId: string) => {
    const link = `${window.location.origin}/course/${courseId}`;
    navigator.clipboard.writeText(link);
    // In real app, show toast
    alert('Share link copied!');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Library</h1>
          <p className="text-gray-600">Manage your created courses and explore shared content</p>
        </div>
        <Link to="/dashboard/create-tutorial" className="mt-4 md:mt-0 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block">
          Create New Course
        </Link>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-neutral shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('my-courses')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'my-courses'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Courses ({myCourses.length})
            </button>
            <button
              onClick={() => setActiveTab('shared')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'shared'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Shared with Me ({sharedCourses.length})
            </button>
          </nav>
        </div>

        {/* Search and Filter */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral rounded bg-secondary text-primary"
              />
            </div>
            {activeTab === 'my-courses' && (
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 border border-neutral rounded bg-secondary text-primary"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'my-courses' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMyCourses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-lg border border-neutral shadow-sm hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary text-xl">
                        {course.nicheIcon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.niche}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                      {getStatusText(course.status)}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Created: {new Date(course.createdDate).toLocaleDateString()}</span>
                    <span>{course.tokensUsed} tokens</span>
                  </div>

                  {course.status === 'published' && (
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{course.views} views</span>
                      <span>{course.shares} shares</span>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary text-white px-3 py-2 rounded text-sm font-medium hover:opacity-90 transition flex items-center justify-center">
                      <FaEye className="mr-2" />
                      View
                    </button>
                    <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded text-sm font-medium hover:opacity-90 transition flex items-center justify-center">
                      <FaEdit className="mr-2" />
                      Edit
                    </button>
                    {course.status === 'published' && (
                      <button
                        onClick={() => copyShareLink(course.id)}
                        className="px-3 py-2 border border-gray-300 text-gray-600 rounded text-sm font-medium hover:bg-gray-50 transition flex items-center justify-center"
                      >
                        <FaShare />
                      </button>
                    )}
                    <button className="px-3 py-2 border border-red-300 text-red-600 rounded text-sm font-medium hover:bg-red-50 transition flex items-center justify-center">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSharedCourses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-lg border border-neutral shadow-sm hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600">Shared by {course.sender}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.enrolled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {course.enrolled ? 'Enrolled' : 'Not Enrolled'}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mb-4">
                    {course.enrolled && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    )}
                    <p className="text-sm text-gray-600 mt-1">
                      {course.enrolled ? `${course.progress}% complete` : 'Not started'}
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <button className={`flex-1 px-3 py-2 rounded text-sm font-medium transition flex items-center justify-center ${
                      course.enrolled
                        ? 'bg-primary text-white hover:opacity-90'
                        : 'bg-green-500 text-white hover:opacity-90'
                    }`}>
                      <FaEye className="mr-2" />
                      {course.enrolled ? 'Continue' : 'Enroll'}
                    </button>
                    <button className="px-3 py-2 border border-red-300 text-red-600 rounded text-sm font-medium hover:bg-red-50 transition flex items-center justify-center">
                      Leave
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(activeTab === 'my-courses' ? filteredMyCourses : filteredSharedCourses).length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedFilter !== 'all'
                  ? 'Try adjusting your search or filter criteria.'
                  : activeTab === 'my-courses'
                    ? 'You haven\'t created any courses yet.'
                    : 'No courses have been shared with you yet.'}
              </p>
              {activeTab === 'my-courses' && (
                <Link to="/dashboard/create-tutorial" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block">
                  Create Your First Course
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library;