import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyMySQL from '@fastify/mysql';
import userRoutes from './routes/userRoutes'
import badBehaviorRoutes from './routes/BadbehaviourRoutes';
import goodBehaviorRoutes from './routes/GoodbehaviourRoutes';
import rewardRoutes from './routes/RewardRoutes';


const app = fastify({ logger: true });

app.register(fastifyCors);
app.register(fastifyMySQL, {
    promise: true,
    connectionString: 'mysql://root:pass@localhost:3306/rehabitualapp',
});

// Register routes
app.register(userRoutes);
app.register(badBehaviorRoutes);
app.register(goodBehaviorRoutes);
app.register(rewardRoutes);
console.log(app.printRoutes());

const start = async () => {
    try {
        await app.listen({ port: 3000 });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
