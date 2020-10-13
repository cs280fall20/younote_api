const Note = require("./Note");

const uniqueID = function () {
  let id = 0;
  return function () {
    return id++;
  };
};

class NoteDao {
  constructor() {
    this.notes = [];
    this.nextID = uniqueID();
  }

  create(content, author) {
    const note = new Note(content, author);
    note._id = this.nextID();
    this.notes.push(note);
    return note;
  }

  readAll(author = "") {
    if (author !== "") {
      return this.notes.filter((note) => note.author === author);
    }
    return this.notes;
  }

  read(id) {
    return this.notes.find((note) => note._id === id);
  }
}

module.exports = NoteDao;
