const Note = require("./model/Note.js");
const express = require("express");
const app = express();
const port = 4567;

const note = new Note("Sample Note", "Ali");
console.log(note);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
