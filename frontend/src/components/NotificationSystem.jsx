import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const socket = io('http://localhost:5000');

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Join user's room
    socket.emit('join', { userId: user.id });

    // Listen for new notifications
    socket.on('notification', (notification) => {
      setNotifications(prev => [notification, ...prev]);
      toast(notification.message, {
        icon: notification.type === 'success' ? '✅' : '⚠️',
        duration: 5000
      });
    });

    // Listen for booking updates
    socket.on('bookingUpdate', (booking) => {
      const message = `Your booking for ${booking.decoration.name} has been ${booking.status}`;
      setNotifications(prev => [{
        type: 'info',
        message,
        timestamp: new Date()
      }, ...prev]);
      toast(message);
    });

    return () => {
      socket.off('notification');
      socket.off('bookingUpdate');
    };
  }, [user]);

  const markAsRead = (index) => {
    setNotifications(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          className="btn btn-primary rounded-full p-2"
          onClick={() => setNotifications([])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </button>

        {notifications.length > 0 && (
          <div className="absolute bottom-full right-0 mb-2 w-80 bg-white rounded-lg shadow-lg">
            <div className="p-2 border-b">
              <h3 className="font-semibold">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="p-3 border-b hover:bg-gray-50 cursor-pointer"
                  onClick={() => markAsRead(index)}
                >
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationSystem; 