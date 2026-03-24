const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send(
    `Hello from container 👋\n` +
    `Hostname: ${os.hostname()}\n` +
    `User ID: ${process.getuid?.() ?? "unavailable"}\n`
  );
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
