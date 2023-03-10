/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesClient = require("./notesClient");
const exp = require("constants"); ////check useage

jest.mock("./notesClient");

describe("NotesView class", () => {
  if (
    ("displays two notes",
    () => {
      document.body.innerHTML = fs.readFileSync("./index.html");

      //1. set up model and view
      const model = new NotesModel();
      const view = new NotesView(model);
      model.addNote("A first note");
      model.addNote("Another note");

      //2. Display the notes on the page
      view.displayNotes();

      //3.There should now be 2 div.note on the page
      expect(document.querySelectorAll("div.note").length).toEqual(2);
    })
  );

  it("adds a new note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    //1. fill the input
    const input = document.querySelector("#add-note-input");
    input.value = "My new amazing test note";

    //2.click the button
    const button = document.querySelector("#add-note-btn");
    button.click();

    //3.note should be on the page
    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "My new amazing test note"
    );
  });

  it("adds multiple notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    //1. fill the input
    const input1 = document.querySelector("#add-note-input");
    input1.value = "My new amazing test note1";

    //2.click the button
    const button1 = document.querySelector("#add-note-btn");
    button1.click();

    //1. fill the input
    const input2 = document.querySelector("#add-note-input");
    input2.value = "My new amazing test note2";

    //2.click the button
    const button2 = document.querySelector("#add-note-btn");
    button2.click();

    //3.note should be on the page
    expect(document.querySelectorAll("div.note").length).toEqual(2);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "My new amazing test note1"
    );
    expect(document.querySelectorAll("div.note")[1].textContent).toEqual(
      "My new amazing test note2"
    );
  });

  ///#displayNotesFromApi????????????????????????????????
  it("displays the notes from API", () => {
    const model = new NotesModel();
    const client = new ClientRequest();

    client.loadNotes.mockImplementation((callback) =>
      callback(["Added a note"])
    );
    const view = new NotesView(model, client);

    view.displayNotesFromApi();
    expect(document.querySelector(".note").textContent).toEqual("Added a note");
  });
});
