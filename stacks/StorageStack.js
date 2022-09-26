// import { Table } from "@serverless-stack/resources";
import { Bucket, Table } from "@serverless-stack/resources";


export function StorageStack({ stack, app }) {
  
  // Create an S3 bucket
  // const bucket = new Bucket(stack, "Uploads");

  // To Handle CORS in S3 for File Uploads
  const bucket = new Bucket(stack, "Uploads", {
    cors: [
      {
        maxAge: "1 day",
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      },
    ],
  });


  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    table,
    bucket,
  };
}