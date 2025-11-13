 import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaBullseye, FaClock, FaTrophy, FaFire, FaPen, FaShare, FaCoins } from 'react-icons/fa';

const DashboardHome: React.FC = () => {
  // Mock data - unified stats
  const stats = [
    { title: 'Courses Created', value: '5', change: '+2', icon: <FaPen /> },
    { title: 'Tokens Used', value: '150', change: '-20', icon: <FaCoins /> },
    { title: 'Courses Completed', value: '12', change: '+3', icon: <FaTrophy /> },
    { title: 'Time Learned', value: '24h', change: '+8%', icon: <FaClock /> },
  ];

  const recentActivity = [
    { action: 'Created "React Hooks Guide"', type: 'created', time: '2 hours ago' },
    { action: 'Completed Mathematics Quiz', score: '95%', type: 'learned', time: '1 day ago' },
    { action: 'Shared "Python Basics" with 3 friends', type: 'shared', time: '2 days ago' },
    { action: 'Enrolled in "AI Ethics" course', type: 'enrolled', time: '3 days ago' },
  ];

  const activeCourses = [
    { title: 'Mathematics Fundamentals', progress: 75, lessons: '15/20', timeLeft: '2 weeks', type: 'learning' },
    { title: 'React Hooks Guide', progress: 60, sections: '6/10', timeLeft: 'Draft', type: 'creating' },
    { title: 'Python Basics', progress: 100, lessons: '20/20', timeLeft: 'Completed', type: 'learning' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Card */}
      <div className="bg-white p-8 rounded-lg border border-neutral shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-lg text-gray-600 mb-4">You're on a 5-day learning streak and have created 5 amazing courses!</p>
            <div className="flex space-x-4">
              <Link to="/dashboard/create-tutorial" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block">
                Create New Course
              </Link>
              <Link to="/dashboard/library" className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition inline-block">
                Browse Library
              </Link>
            </div>
          </div>
           <div className="mt-6 md:mt-0">
             <div className="text-center">
               <div className="text-4xl mb-2"><FaFire /></div>
               <p className="text-sm text-gray-600">Current Streak</p>
               <p className="text-2xl font-bold">5 days</p>
             </div>
           </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
               <div className="text-3xl text-primary">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'created' ? 'bg-blue-500' :
                    activity.type === 'learned' ? 'bg-green-500' :
                    activity.type === 'shared' ? 'bg-purple-500' : 'bg-orange-500'
                  }`} />
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    {activity.score && <p className="text-sm text-green-600">Score: {activity.score}</p>}
                  </div>
                </div>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Courses */}
        <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Active Courses</h2>
          <div className="space-y-4">
            {activeCourses.map((course, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{course.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    course.type === 'learning' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {course.type === 'learning' ? 'Learning' : 'Creating'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {course.type === 'learning' ? `${course.progress}% complete • ${course.timeLeft} left` : `${course.sections} • ${course.timeLeft}`}
                </p>
                <button className="mt-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                  {course.type === 'learning' ? 'Continue Learning' : 'Continue Editing'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recommended Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Continue Editing "React Hooks"</h3>
            <p className="text-sm text-gray-600 mb-3">Add more sections to your popular course</p>
            <Link to="/dashboard/editor/1" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition inline-block">
              Edit Course
            </Link>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Advanced Algebra Quiz</h3>
            <p className="text-sm text-gray-600 mb-3">Test your understanding of complex equations</p>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Start Quiz
            </button>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Explore Shared Course</h3>
            <p className="text-sm text-gray-600 mb-3">"AI Ethics" shared by Sarah - enroll now</p>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;