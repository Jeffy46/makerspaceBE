import "dotenv/config";
import express from "express";
import { prisma } from "./prisma.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/events", async (_req, res) => {
  const events = await prisma.events.findMany({
    orderBy: [{ event_time: "asc" }],
  });
  res.json(events);
});

const port = Number(process.env.PORT) || 3000;
const server = app.listen(port, () => console.log(`Listening on :${port}`));

process.on("SIGTERM", async () => {
  server.close();
  await prisma.$disconnect();
});
