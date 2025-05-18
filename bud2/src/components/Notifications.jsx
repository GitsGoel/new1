import { useEffect, useState } from 'react';
import { getNotifications } from '../api/notificationApi';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications().then(data => setNotifications(data));
  }, []);

  return (
    <ul>
      {notifications.map((note, idx) => (
        <li key={idx} className="notification">{note}</li>
      ))}
    </ul>
  );
}