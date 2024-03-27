const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

// const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  

  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "code-exec-results", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (message.key == "123") {
        console.log("Received message", {
          topic,
          partition,
          key: message.key.toString(),
          value: message.value.toString(),
        });
      }
      else{
        console.log("Received message not the pid", message.key.toString());
      }
    },
  });
};

run().catch(console.error);
