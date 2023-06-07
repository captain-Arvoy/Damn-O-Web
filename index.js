import {mysql} from mysql
const con = mysql.createConnection({
  host:'localhost',
  user:'user',
  password:'',
  database:'NOG1'
});
con.connect((error)=>{
  if(error){
    alert("Error connecting to database");
    return;
  } 
  alert ("connection set successfully");
});
// con.end((error)=>{});
const saveButton = document.querySelector("#save");
const textContent = document.querySelector("#textHolder").textContent;
saveButton.addEventListener("click",()=>{
  console.log("SAVED");
  alert("Saved");
});
const dt = new Date();
localStorage.setItem(`${d.toString()}`,`${textContent}`);

