const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  // Producing
  function generatePID() {
    const currentTime = Date.now(); // Get current time in milliseconds
    const randomNumber = Math.floor(Math.random() * 9000) + 1000; // Generate random number between 1000 and 9999
    const pid = `${currentTime}${randomNumber}`; // Combine timestamp and random number
    return pid;
  }
  
  // Generate unique PID
  const pid = generatePID();
  let  obj ={
    "code":"print(\"hello this is redis love lokesh world\",5+3*8)\r\n",
    "language":"python",
    "pid":pid,
  }

  let objstring = JSON.stringify(obj)

  let objBuffer = Buffer.from(objstring)
  await producer.connect();
  await producer.send({
    topic: "code-exec-requests",
    messages: [{ value:objBuffer,key:pid}],
  
  });

 console.log("Sent message", pid);
 await producer.disconnect()
};

run().catch(console.error);
