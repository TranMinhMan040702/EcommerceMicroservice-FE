import { useEffect, useState } from 'react';
import { Stomp } from 'websocket';

const useWebSocket = (url) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket(url);

        const stompClient = Stomp.over(newSocket);
        stompClient.connect({}, () => {
            setSocket(stompClient);
        });

        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }, [url]);

    return socket;
};

export default useWebSocket;
