import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
};
http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      let file = path.resolve(root, `.${pathname}`);
      if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
        response.writeHead(403).end();
        return;
      }
      if ((await stat(file)).isDirectory())
        file = path.join(file, "index.html");
      response.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
      });
      response.end(await readFile(file));
    } catch {
      response.writeHead(404).end("Not found");
    }
  })
  .listen(4173, "127.0.0.1");
