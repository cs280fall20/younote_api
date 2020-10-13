const Note = require("./model/Note.js");
const express = require("express");
const app = express();
const port = 4567;

const notes = [];
notes.push(new Note("Sample 1", "Author 1"));
notes.push(new Note("Sample 2", "Author 2"));
notes.push(new Note("Sample 3", "Author 3"));
console.log(notes);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
