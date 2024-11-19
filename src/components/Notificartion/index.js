import { useState } from "react";
import photo from "../../images/Product1.jpg";

const Notification = ({ notifications }) => {
  const [notificationList, setNotificationList] = useState(notifications);

  const markAsRead = () => {
    setNotificationList(notificationList.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotificationList([]);
  };

  return (
    <div className="w-80 max-w-lg bg-white border rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center  pb-2 mt-1 mb-4 border-b-2 border-gray-500">
        <button
          onClick={clearAll}
          className="text-gray-800 font-bold hover:underline mt-2 text-sm "
        >
          Clear all
        </button>
        <button
          onClick={markAsRead}
          className="text-gray-800  hover:underline text-sm mt-2 font-bold"
        >
          Mark as read
        </button>
      </div>
      {notificationList.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">No notifications</p>
      ) : (
        notificationList.map((notification, index) => (
          <div
            key={index}
            className={`flex items-start p-4 border-b ${
              notification.read ? "bg-gray-100" : "bg-white"
            }`}
          >
            <img
              src={photo}
              alt={notification.name}
              className="w-10 h-10 rounded-full object-cover mr-4"
            />
            <div className="flex-1">
              <p className="font-bold text-sm text-gray-900">
                {notification.title}
              </p>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Notification;
