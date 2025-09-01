import "dotenv/config"; // loads .env
import express from "express"; // the web framework
import morgan from "morgan"; // logs requests in the terminal

const app = express(); // makes an express app
const PORT = process.env.PORT || 3001; // chooses 3001 if no port in env

app.use(express.json()); // parses JSON request bodies into req.body
app.use(morgan("dev")); // logs every request like: GET /notes 200 3.2 ms

let notes = [
  { id: 1, text: "First note" },
  { id: 2, text: "Get big or go home!" },
];

// add a single route
app.get("/", (req, res) => {
  // GET (retrieves data) (request, response)
  res.json({ ok: true, message: "Notes API - hello" });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

// start the server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
