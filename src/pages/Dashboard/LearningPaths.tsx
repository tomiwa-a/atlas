import React from 'react';

const LearningPaths: React.FC = () => {
  const activePaths = [
    { subject: 'Mathematics', progress: 75, lessons: '15/20', difficulty: 'Intermediate', enrolled: true },
    { subject: 'Science', progress: 60, lessons: '12/20', difficulty: 'Advanced', enrolled: true },
    { subject: 'Programming', progress: 40, lessons: '8/20', difficulty: 'Beginner', enrolled: true },
  ];

  const availableSubjects = [
    { name: 'History', description: 'Explore world history from ancient civilizations to modern times', difficulty: 'Intermediate', lessons: 25 },
    { name: 'Languages', description: 'Learn new languages with interactive conversations and grammar', difficulty: 'Beginner', lessons: 30 },
    { name: 'Art & Design', description: 'Discover creativity through various art forms and techniques', difficulty: 'All Levels', lessons: 20 },
    { name: 'Business', description: 'Master business fundamentals and entrepreneurial skills', difficulty: 'Intermediate', lessons: 22 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Learning Paths</h1>
        <p className="text-lg text-gray-600">Manage your enrolled courses and explore new subjects</p>
      </div>

      {/* Active Paths */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Your Active Learning Paths</h2>
        <div className="space-y-4">
          {activePaths.map((path, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{path.subject}</h3>
                  <p className="text-sm text-gray-600">{path.lessons} lessons • {path.difficulty}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{path.progress}%</p>
                  <p className="text-sm text-gray-600">Complete</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-primary h-3 rounded-full"
                  style={{ width: `${path.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
                  Continue Learning
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse Subjects */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Explore New Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableSubjects.map((subject, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
              <p className="text-gray-600 mb-4">{subject.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">{subject.difficulty}</span>
                <span className="text-sm text-gray-500">{subject.lessons} lessons</span>
              </div>
              <button className="w-full bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Path Builder */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Create Custom Learning Path</h2>
        <p className="text-gray-600 mb-6">Build a personalized curriculum by selecting topics and difficulty levels</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Primary Subject</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg bg-white">
              <option>Select subject</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>Programming</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Difficulty Level</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg bg-white">
              <option>Select difficulty</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg bg-white">
              <option>Select duration</option>
              <option>1 week</option>
              <option>2 weeks</option>
              <option>1 month</option>
            </select>
          </div>
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
          Build My Path
        </button>
      </div>
    </div>
  );
};

export default LearningPaths;