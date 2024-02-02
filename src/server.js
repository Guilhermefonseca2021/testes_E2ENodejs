import { createServer } from "http";
import { once } from "events";
import { randomUUID } from "crypto";

const Database = new Map();

function respondJSON(data, res) {
  return res(JSON.stringify(data));
}

async function handler(req, res)  {
  const { method } = req;

  if (method === "GET") {
    return respondJSON([...Database.values()], response);
  } 

  if (method === "POST") {
    const body = JSON.parse(await once(request, "data"));
    const id = randomUUID()
    Database.set(id, body)
    console.log("recebido", body);
    return respondJSON({ 
      ok: 1 
    }, response);
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
