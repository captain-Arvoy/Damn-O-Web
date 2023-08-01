const saveButton = document.querySelector("#save")
const noteContent = document.querySelector("#textHolder")
saveButton.addEventListener('click',()=>{
  saveButton.textContent="SAVED";
  alert("HELLO");
});
