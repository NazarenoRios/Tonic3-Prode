//Configuracion del servidor
const express = require("express");
const path = require("path")

require("dotenv").config()

const models = require("./models")
const cors = require("cors");

const app = express();
const db = require("./config/db")

const cookieParser = require("cookie-parser")

// Express Route File Requires

const routes = require("./routes");
// const save_user = require("./metrics/utils");

// save_user({name:'sad',age:33})

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false})) 
app.use(cors()) 

// Express Routing
app.use("/api", routes);


db.sync({ force: false }).then(() => {
  console.log("db connected");  
  app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
  });
});