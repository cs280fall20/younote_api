const NoteDao = require("./model/NoteDao.js");
const express = require("express");
const app = express();
const port = 4567;

const notes = new NoteDao();
notes.create("Sample 1", "Author 1");
notes.create("Sample 2", "Author 2");
notes.create("Sample 3", "Author 2");
notes.create("Sample 4", "Author 1");
console.log(notes.read(2));
console.log(notes.readAll("Author 1"));
console.log(notes.readAll());
console.log(notes.update(0, "Sample 0", "Author 3"));
console.log(notes.delete(1));
console.log(notes.readAll());

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
