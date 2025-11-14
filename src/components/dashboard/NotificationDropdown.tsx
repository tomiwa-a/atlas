import React from 'react';
import { FaBell, FaShare, FaCheckCircle, FaCoins, FaEye } from 'react-icons/fa';

interface Notification {
  id: number;
  type: 'share' | 'complete' | 'token' | 'view';
  message: string;
  time: string;
  read: boolean;
}

interface NotificationDropdownProps {
  onClose: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ onClose }) => {
  // Mock notifications data
  const notifications: Notification[] = [
    { id: 1, type: 'share', message: 'Your "React Hooks" course was shared by Sarah Johnson', time: '2 hours ago', read: false },
    { id: 2, type: 'complete', message: 'Tutorial generation completed for "Python Basics"', time: '1 day ago', read: false },
    { id: 3, type: 'token', message: 'You have 25 tokens remaining', time: '2 days ago', read: true },
    { id: 4, type: 'view', message: 'Your "UI Design" course reached 50 views', time: '3 days ago', read: true },
    { id: 5, type: 'share', message: 'Alice shared "Machine Learning" with you', time: '1 week ago', read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'share': return <FaShare className="text-blue-500" />;
      case 'complete': return <FaCheckCircle className="text-green-500" />;
      case 'token': return <FaCoins className="text-yellow-500" />;
      case 'view': return <FaEye className="text-purple-500" />;
      default: return <FaBell className="text-gray-500" />;
    }
  };

  const markAllRead = () => {
    // In real app, API call
    console.log('Mark all notifications as read');
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-sm text-primary hover:text-primary/80"
            >
              Mark all read
            </button>
          )}
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
              onClick={() => {
                // Handle notification click
                console.log('Clicked notification:', notification.id);
              }}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => {
            // Navigate to full notifications page
            console.log('View all notifications');
            onClose();
          }}
          className="w-full text-center text-sm text-primary hover:text-primary/80"
        >
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;