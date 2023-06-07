import dbHandler from "data-Base-Handler.js"
const saveButton = document.querySelector("#save")
const noteContent = document.querySelector("#textHolder")
saveButton.addEventListener('click',()=>{
  saveButton.textContent="SAVED";
  sqlquery("insert into ")
  alert("HELLO");
});
