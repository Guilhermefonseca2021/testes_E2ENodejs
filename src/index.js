import server from "./server";

server.listen(3333)
    .on("listening", () => console.log(`running at: `, server.address().port))

