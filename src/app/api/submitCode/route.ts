const { Kafka } = require("kafkajs");

export async function POST(request: Request) {
  const { code, language, email, pid, queId, reqType, title } =
    await request.json();

  try {
    const kafka = new Kafka({
      clientId: "my-app",
      brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS],
    });
    console.log(kafka, "kafka");
    console.log("this is modified");
    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
      topic: "code-submission-request",
      messages: [
        {
          value: JSON.stringify({
            code,
            language,
            pid,
            email,
            queId,
            reqType,
            title,
          }),
        },
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
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Code submission failed", error }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}
