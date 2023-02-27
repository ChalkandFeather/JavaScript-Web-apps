const NotesModel = require("./notesModel");

const notesModel = new NotesModel();
notesModel.addNote("Buy milk");
console.log(notesModel.getNotes());
