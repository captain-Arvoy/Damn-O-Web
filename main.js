// import { main as sqlQ} from "./data-Base-Handler.js"
// const saveButton = document.querySelector("#save")
// const noteContent = document.querySelector("#textHolder")
// saveButton.addEventListener('click',()=>{
//   saveButton.textContent="SAVED";
//   let sqlOut = sqlQ("select * from ARD");
//   console.log(sqlOut);
//   alert("HELLO");
// });
import { main as sqlQ} from "./data-Base-Handler.js"
function check(){
  let sqlOut = sqlQ("desc ARD");
  console.log("result = "+sqlOut);
  console.log("HELLO");
}
check();
