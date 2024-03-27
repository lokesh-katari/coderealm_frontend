const { Kafka } = require("kafkajs");

export async function POST(request: Request) {
  const { code, language, pid, email } = await request.json();
  // const kafka = new Kafka({
  //   clientId: "my-app",
  //   brokers: ["localhost:9092"],
  // });
  // const producer = kafka.producer();
  // await producer.connect();
  // await producer.send({
  //   topic: "code-submission",
  //   messages: [{ value: JSON.stringify({ code, language, pid, email }) }],
  // });
  // await producer.disconnect();
  return new Response(
    JSON.stringify({ message: "Code submitted", code: code, language, pid }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
