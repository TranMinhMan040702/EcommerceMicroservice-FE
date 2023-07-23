import { useEffect } from 'react';
import amqp from 'amqplib';

const useRabbitMQConsumer = (queueName, handleMessage) => {
    useEffect(() => {
        const connectAndConsume = async () => {
            const connection = await amqp.connect('amqp://localhost:5672');
            const channel = await connection.createChannel();
            await channel.assertQueue(queueName);

            channel.consume(queueName, (msg) => {
                if (msg !== null) {
                    handleMessage(msg.content.toString());
                    channel.ack(msg);
                }
            });
        };

        connectAndConsume().catch((error) => {
            console.error('Error consuming from RabbitMQ:', error);
        });
    }, [queueName, handleMessage]);
};

export default useRabbitMQConsumer;
