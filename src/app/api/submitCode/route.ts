const { Kafka } = require("kafkajs");

export async function POST(request: Request) {
  const { code, language, email, pid, queId, reqType } = await request.json();

  const kafka = new Kafka({
    clientId: "my-app",
    brokers: [process.env.KAFKA_BROKER],
  });
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic: "code-submission-request",
    messages: [
      { value: JSON.stringify({ code, language, pid, email, queId, reqType }) },
    ],
  });
  await producer.disconnect();
  return new Response(
    JSON.stringify({ message: "Code submitted", code: code, language, pid }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
