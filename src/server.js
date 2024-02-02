import { createServer } from "http";
const Database = new Map()

async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    return;
  }
  if (method === "POST") {
    return;
  }
  if (method === "DELETE") {
    return;
  }
  if (method === "PUT") {
    return;
  }

  res.end("hello world");
}

export default createServer(handler);
