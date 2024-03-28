import { createClient } from "redis";

let redisClient: any = null;

const getRedisClient = () => {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL,
    });

    redisClient.connect();
  }
  return redisClient;
};

export { getRedisClient };
