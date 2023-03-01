const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

//1 set up model with one note
const model = new NotesModel();
// model.addNote("This is an example note");

//2 setup the view
const view = new NotesView(model);

//3 make the view display notes
view.displayNotes();

//console.log(notesModel.getNotes());
