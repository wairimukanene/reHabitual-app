"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const mysql_1 = __importDefault(require("@fastify/mysql"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const BadbehaviourRoutes_1 = __importDefault(require("./routes/BadbehaviourRoutes"));
const GoodbehaviourRoutes_1 = __importDefault(require("./routes/GoodbehaviourRoutes"));
const RewardRoutes_1 = __importDefault(require("./routes/RewardRoutes"));
const app = (0, fastify_1.default)({ logger: true });
app.register(cors_1.default);
app.register(mysql_1.default, {
    promise: true,
    connectionString: 'mysql://root:pass@localhost:3306/rehabitualapp',
});
// Register routes
app.register(userRoutes_1.default);
app.register(BadbehaviourRoutes_1.default);
app.register(GoodbehaviourRoutes_1.default);
app.register(RewardRoutes_1.default);
console.log(app.printRoutes());
const start = async () => {
    try {
        await app.listen({ port: 3000 });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
