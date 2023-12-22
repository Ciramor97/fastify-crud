const fastify = require("fastify")({ logger: true });

fastify.register(require("@fastify/swagger"), {
  exposeRoute: true,
  routePrefix: "/api",
  swagger: {
    info: { title: "Simple Fastify CRUD docs" },
  },
});
fastify.register(require("./routes/items"));
const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
