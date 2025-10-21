import React from 'react';

const DashboardHome: React.FC = () => {
  // Mock data
  const stats = [
    { title: 'Total Lessons', value: '127', change: '+12%', icon: '📚' },
    { title: 'Average Score', value: '89%', change: '+5%', icon: '🎯' },
    { title: 'Time Spent', value: '24h', change: '+8%', icon: '⏱️' },
    { title: 'Subjects Mastered', value: '3', change: '+1', icon: '🏆' },
  ];

  const recentActivity = [
    { action: 'Completed Mathematics Quiz', score: '95%', time: '2 hours ago' },
    { action: 'Started Science Chapter 5', score: null, time: '1 day ago' },
    { action: 'Achieved "Quick Learner" Badge', score: null, time: '3 days ago' },
    { action: 'Updated Learning Preferences', score: null, time: '1 week ago' },
  ];

  const currentPaths = [
    { subject: 'Mathematics', progress: 75, lessons: '15/20', timeLeft: '2 weeks' },
    { subject: 'Science', progress: 60, lessons: '12/20', timeLeft: '3 weeks' },
    { subject: 'Programming', progress: 40, lessons: '8/20', timeLeft: '4 weeks' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Card */}
      <div className="bg-white p-8 rounded-lg border border-neutral shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-lg text-gray-600 mb-4">You're on a 5-day learning streak. Keep it up!</p>
            <div className="flex space-x-4">
              <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Start New Lesson
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">
                View Progress
              </button>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="text-center">
              <div className="text-4xl mb-2">🔥</div>
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
              <div className="text-3xl">{stat.icon}</div>
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
                <div>
                  <p className="font-medium">{activity.action}</p>
                  {activity.score && <p className="text-sm text-green-600">Score: {activity.score}</p>}
                </div>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Learning Paths */}
        <div className="bg-white p-6 rounded-lg border border-neutral shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Current Learning Paths</h2>
          <div className="space-y-4">
            {currentPaths.map((path, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{path.subject}</h3>
                  <span className="text-sm text-gray-600">{path.lessons}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${path.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{path.progress}% complete • {path.timeLeft} left</p>
                <button className="mt-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                  Continue
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
            <h3 className="font-semibold mb-2">Advanced Algebra Quiz</h3>
            <p className="text-sm text-gray-600 mb-3">Test your understanding of complex equations</p>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Start Quiz
            </button>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Physics Fundamentals</h3>
            <p className="text-sm text-gray-600 mb-3">Explore the basics of motion and energy</p>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Start Lesson
            </button>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h3 className="font-semibold mb-2">Code Review Practice</h3>
            <p className="text-sm text-gray-600 mb-3">Improve your programming skills with peer reviews</p>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Practice Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;