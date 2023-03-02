class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  emptyNotes() {
    this.notes = [];
  }

  setNotes(notes) {
    this.notes = notes;
  }
}

module.exports = NotesModel;
