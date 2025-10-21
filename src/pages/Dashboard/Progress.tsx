import React from 'react';

const Progress: React.FC = () => {
  const stats = [
    { label: 'Total Courses', value: '12', change: '+2 this month' },
    { label: 'Hours Learned', value: '47', change: '+8 this week' },
    { label: 'Achievements', value: '8', change: '+1 this week' },
    { label: 'Current Streak', value: '15 days', change: 'Personal best!' },
  ];

  const courses = [
    { name: 'Introduction to React', progress: 85, status: 'In Progress' },
    { name: 'Advanced JavaScript', progress: 100, status: 'Completed' },
    { name: 'Python Fundamentals', progress: 60, status: 'In Progress' },
    { name: 'Data Structures', progress: 30, status: 'In Progress' },
  ];

  const achievements = [
    { title: 'First Course Completed', description: 'Completed your first learning path', date: 'Jan 15, 2025' },
    { title: 'Week Warrior', description: '7 days learning streak', date: 'Feb 10, 2025' },
    { title: 'Speed Learner', description: 'Completed a course in under 5 days', date: 'Feb 20, 2025' },
    { title: 'Knowledge Seeker', description: 'Started 10 different courses', date: 'Mar 1, 2025' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Learning Progress</h1>
        <p className="text-lg text-gray-600">Track your learning journey and achievements</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Progress Chart */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Weekly Learning Activity</h2>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[20, 35, 45, 30, 55, 40, 65].map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-primary rounded-t"
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-xs text-gray-600 mt-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Progress */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Course Progress</h2>
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{course.name}</h3>
                <span className={`text-sm px-2 py-1 rounded ${
                  course.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {course.status}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{course.progress}% complete</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;