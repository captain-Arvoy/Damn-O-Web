import mysql from 'mysql2'
const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'NotesDB'
});

function queryExecute(sqlquery){

  return new Promise((resolve,reject)=>{
    con.query(sqlquery,(error,result)=>{
      if(error){
        console.log("Failed to execute query");
        reject(error); 
      } else {
        resolve(result);
      }
    });
  });
}
// queryExecute("create table ARD(\
//   Sno INT AUTO_INCREMENT PRIMARY KEY,\
//   noted_at DATE DEFAULT CURRENT_DATE(),\
//   notes TEXT\
//   )")
async function db_connect(){
  con.connect((error)=>{
  if(error){
     console.log("Error connecting to database: ");
     return;
  } 
    console.log("connection set successfully");
  });
}


export async function main(queryArgs){
  await db_connect();
  const result = await queryExecute(queryArgs);
  console.log("successfully execute\n"+result)
  con.end((error)=>{
    if(error){
      console.log("Error in disconnecting");
    } else {
      console.log("connection terminated");
    }
  });  
  return result;
}
// (await main());
// con.end((error)=>{});
// const saveButton = document.querySelector("#save");
// saveButton.addEventListener("click",()=>{
//   console.log("SAVED");
//   alert("Saved");
// });

