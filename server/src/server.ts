import Fastify from "fastify";

const bootstrap = async () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.get("/pools/count", () => {
    return { count: 1334 };
  });

  await fastify.listen({ port: 3333 });
};

bootstrap();
