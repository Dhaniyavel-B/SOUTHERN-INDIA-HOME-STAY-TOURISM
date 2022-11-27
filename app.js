const express = require("express");
const mysql = require("mysql");
const doenv = require("dotenv");
const path = require("path");
const app = express();

/*doenv.config({
    path: "./env",
  });*/

const db = mysql.createConnection({
    host: "localhost",
    user: "danny1",
    password:"password" ,
    database:"login_crud" ,
  });

  db.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MySQL Connection Success");
    }
  });

app.use(express.urlencoded({extended:false}));

console.log(__dirname);
const location = path.join(__dirname,"/public");
app.use(express.static(location));
app.set("view engine","hbs");

app.use("/",require("./router/pages"));
app.use("/auth",require("./router/auth"));

app.listen(5000,()=>{
  console.log("work")
})