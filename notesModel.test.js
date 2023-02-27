const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  let notesModel;

  beforeEach(() => {
    notesModel = new NotesModel();
  });

  it("an empty note returns a empty array(nothing)", () => {
    expect(notesModel.getNotes()).toEqual([]);
  });

  it("getNotes returns a note", () => {
    notesModel.addNote("Buy milk");
    expect(notesModel.getNotes()).toEqual(["Buy milk"]);
  });

  it("getNotes returns a list of notes", () => {
    notesModel.addNote("Buy milk");
    notesModel.addNote("Go to the gym");
    expect(notesModel.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("#emptyNotes - empties notes list", () => {
    notesModel.emptyNotes();
    expect(notesModel.getNotes()).toEqual([]);
  });
});
