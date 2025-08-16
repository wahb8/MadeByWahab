import express from "express";
import cors from "cors";

const app = express();
app.use(cors());               // dev only; remove if same-origin in prod
app.use(express.json());

app.get("/api/hello", (req, res) => res.json({ msg: "hi" }));

app.listen(3001, () => console.log("API on :3001"));

