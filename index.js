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
  res.json(notes.readAll());
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
