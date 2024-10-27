import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";

const Notifications = () => {
    const { token } = useContext(AppContext);
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('/api/notifications', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des notifications');
                }

                const data = await response.json();
                setNotifications(data);
            } catch (err) {
                setError(err.message);
                console.error('Erreur lors de la récupération des notifications', err);
            }
        };

        fetchNotifications();
    }, [token]);

    return (
        <div>
            <h2>Mes Notifications</h2>
            {error && <p className="error">{error}</p>}
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>{notification.data.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
