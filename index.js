const NoteDao = require("./model/NoteDao.js");
const express = require("express");
const app = express();
const port = 4567;

const notes = new NoteDao();
notes.create("Sample 1", "Author 1");
notes.create("Sample 2", "Author 2");
notes.create("Sample 3", "Author 2");
notes.create("Sample 4", "Author 1");

app.get("/api/notes", (req, res) => {
  const author = req.query.author;
  res.json(notes.readAll(author));
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  res.json(notes.read(id));
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
