
import { createClient } from "redis";
import config from "../config";

export const redisClient = createClient({
  username: config.redis_username,
  password: config.redis_password,
  socket: {
    host: config.redis_host,
    port: Number(config.redis_port),
  },
});

redisClient.on("error", (error) => {
  console.error("Redis Client Error:", error);
});

let connectionPromise: Promise<void> | null = null;

export const connectRedis = async (): Promise<void> => {
  if (redisClient.isOpen) return;

  if (!connectionPromise) {
    
connectionPromise = redisClient.connect().then(() => {
  return undefined;
}).catch((error) => {
  connectionPromise = null;
  throw error;
});

  }

  await connectionPromise;
};
