const NotesClient = require('./notesClient');
const NotesModel = require('./notesModel')

class NotesView {
  constructor(model) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
    //const (replaced with this.)
    this.input = document.querySelector("#add-note-input");
    //const (replaced with this.)
    this.buttonEl = document.querySelector("#add-note-btn");
    
    buttonEl.addEventListener("click", () => {
      this.addNewNote(input.value);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    const notes = this.model.getNotes();
    const addedNotes = document.querySelectorAll(".note");

    addedNotes.forEach((note) => {
      note.remove();
    });

    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = "note";
      this.mainContainerEl.append(noteEl);
    });

    this.displayNotesFromApi() {
      this.client.loadNotes((data) => {
        this.model.setNotes(data)
        this.displayNotes();
      });
    };
  };
};

module.exports = NotesView;
