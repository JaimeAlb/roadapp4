export const handler1 = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Helloooo, World! Your request was received at ${event.requestContext.time}.`,
  };
};
