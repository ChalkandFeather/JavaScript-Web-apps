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
}

module.exports = NotesModel;
