const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const Client = require("./notes-backend-server/Client");

const model = new NotesModel();
const client = new Client();

//1 set up model with one note
const model = new NotesModel();

//2 setup the view
const view = new NotesView(model, client);

//3 make the view display notes
view.displayNotes();

//console.log(notesModel.getNotes());
