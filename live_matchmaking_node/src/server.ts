import express from "express";
import { handleMatchRequest } from "./controllers/match.controller";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(202).json({ message: "Estamos online" });
});

app.post("/match", handleMatchRequest);

app.listen(3001, () => {
  console.log("API rodando em http://localhost:3001");
});
