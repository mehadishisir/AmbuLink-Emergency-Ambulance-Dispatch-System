"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = exports.redisClient = void 0;
const redis_1 = require("redis");
const config_1 = __importDefault(require("../config"));
exports.redisClient = (0, redis_1.createClient)({
    username: config_1.default.redis_username,
    password: config_1.default.redis_password,
    socket: {
        host: config_1.default.redis_host,
        port: Number(config_1.default.redis_port),
    },
});
exports.redisClient.on("error", (error) => {
    console.error("Redis Client Error:", error);
});
let connectionPromise = null;
const connectRedis = async () => {
    if (exports.redisClient.isOpen)
        return;
    if (!connectionPromise) {
        connectionPromise = exports.redisClient.connect().then(() => {
            return undefined;
        }).catch((error) => {
            connectionPromise = null;
            throw error;
        });
    }
    await connectionPromise;
};
exports.connectRedis = connectRedis;
//# sourceMappingURL=redis.js.map