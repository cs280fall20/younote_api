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
}

module.exports = NoteDao;
