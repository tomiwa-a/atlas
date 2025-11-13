import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Create Course', href: '/dashboard/create-tutorial' },
    { name: 'Library', href: '/dashboard/library' },
    {
      name: 'Learn',
      dropdown: true,
      items: [
        { name: 'Active Courses', href: '/dashboard/learning-paths' },
        { name: 'Progress', href: '/dashboard/progress' }
      ]
    },
    { name: 'Billing', href: '/dashboard/billing' },
    { name: 'Help', href: '/dashboard/help' },
    { name: 'Profile', href: '/dashboard/profile' },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo/Brand at top */}
          <div className="px-4 py-4 border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="text-2xl font-bold">ATLAS</div>
            </Link>
          </div>

          {/* Navigation - Scrollable */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-2">
              {navigation.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name}>
                       <button
                         onClick={() => setDropdownOpen(!dropdownOpen)}
                         className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                       >
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                          <span>{item.name}</span>
                        </div>
                        <span className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {dropdownOpen && (
                        <div className="ml-8 mt-2 space-y-1 animate-in slide-in-from-top-1 duration-300">
                          {item.items.map((subItem) => (
                             <Link
                               key={subItem.name}
                               to={subItem.href}
                               className={`block px-4 py-2 text-base rounded-lg transition-colors ${
                                 location.pathname === subItem.href
                                   ? 'bg-primary text-white'
                                   : 'text-gray-600 hover:bg-gray-100'
                               }`}
                               onClick={() => setSidebarOpen(false)}
                             >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                   <Link
                     key={item.name}
                     to={item.href || '#'}
                     className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                       location.pathname === item.href
                         ? 'bg-primary text-white'
                         : 'text-gray-700 hover:bg-gray-100'
                     }`}
                     onClick={() => setSidebarOpen(false)}
                   >
                      {item.name === 'Dashboard' && (
                        <svg className="w-5 h-5 mr-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {item.name === 'Create Course' && (
                        <svg className="w-5 h-5 mr-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                      {item.name === 'Library' && (
                        <svg className="w-5 h-5 mr-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                     {item.name === 'Progress' && (
                       <svg className="w-5 h-5 mr-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                       </svg>
                     )}
                     {item.name === 'Billing' && (
                       <svg className="w-5 h-5 mr-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                       </svg>
                     )}
                     {item.name === 'Help' && (
                       <svg className="w-5 h-5 mr-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     )}
                     {item.name === 'Profile' && (
                       <svg className="w-5 h-5 mr-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                       </svg>
                     )}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Profile Section - Pinned to bottom */}
          <div className="flex-shrink-0 p-4 border-t border-gray-200">
             <Link
               to="/dashboard/profile"
               className="flex items-center px-4 py-3 text-base font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition-colors mb-4"
               onClick={() => setSidebarOpen(false)}
             >
               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                 <span className="text-white text-base font-semibold">JD</span>
               </div>
              <div>
                <p className="font-medium">John Doe</p>
                 <p className="text-sm text-gray-500">john@example.com</p>
              </div>
            </Link>
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Right Side Content Area */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-black text-white shadow-sm px-4 py-3 lg:left-64 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-gray-800 lg:hidden"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* <button className="p-2 rounded-full hover:bg-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.868 12.683A17.925 17.925 0 0112 21c7.962 0 12-1.21 12-2.683m-12 2.683a17.925 17.925 0 01-7.132-8.317M12 21c4.411 0 8-4.03 8-9s-3.589-9-8-9-8 4.03-8 9a9.06 9.06 0 001.832 5.683L4 21l4.868-8.317z" />
                </svg>
              </button> */}
               <div className="flex items-center space-x-2">
                 <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                   <span className="text-white text-base font-semibold">JD</span>
                 </div>
                 {/* <span className="hidden md:block text-lg">John Doe</span> */}
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-auto pt-20">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;