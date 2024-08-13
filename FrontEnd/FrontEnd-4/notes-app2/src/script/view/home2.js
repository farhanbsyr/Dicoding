import noteData from "../data/data.js";

document.addEventListener("DOMContentLoaded", () => {
  const inputTitle = document.getElementById("title");
  const inputBody = document.getElementById("deskripsi");

  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault(event);
    const note = {
      id: `notes-${Math.random().toString(36).substring(2, 9)}`,
      title: inputTitle.value,
      body: inputBody.value,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    noteData.push(note);
    inputTitle.value = "";
    inputBody.value = "";

    const listNotes = document.querySelector("list-notes");
    listNotes.render();
  });
});
