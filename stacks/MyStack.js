import { Api } from "@serverless-stack/resources";

export function MyStack({ stack }) {
  // Create an HTTP API
  const api = new Api(stack, "Api_example1", {
    routes: {
      "GET /": "functions/lambda.handler1",
    },
  });

  // Show the endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}