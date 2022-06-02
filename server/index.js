import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Configuration = {
  port: 3000,
  hostname: "localhost",
};

const app = express();

app.set("port", Configuration.port);

//app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.static(path.join(__dirname, "..", "dist")));

http.createServer(app).listen(3000, () => {
  console.log(
    `Express started on http://${Configuration.hostname}:${Configuration.port}; press Ctrl-C to terminate.`
  );
});
