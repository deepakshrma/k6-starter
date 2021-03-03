const fastify = require("fastify")({ logger: false });

// Take port from env variable
const PORT = process.env.PORT || 3000;

// Create user database
const users = Array(100)
  .fill(0)
  .map((_, x) => ({
    name: `User_${x}`,
    id: `ID_${x}`,
  }));

// Declare a route
fastify.get("/users", async (request, reply) => {
  reply.send(users);
});

fastify.get("/user/:id", async (request, reply) => {
  reply.send(users.find((x) => x.id == request.params["id"]));
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT, "0.0.0.0");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
