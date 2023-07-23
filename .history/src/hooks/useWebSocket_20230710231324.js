import { useEffect, useState } from 'react';

const useWebSocket = (endpoint) => {
    const [messages, setMessages] = useState([]);
    const { client } = useStompClient();

    useEffect(() => {
        const handleMessage = (message) => {
            setMessages((prevMessages) => [...prevMessages, message.body]);
        };

        client.onConnect = () => {
            client.subscribe('/topic/messages', handleMessage);
        };

        client.onDisconnect = () => {
            setMessages([]);
        };

        client.activate();

        return () => {
            client.deactivate();
        };
    }, [client]);

    return messages;
};

export default useWebSocket;
