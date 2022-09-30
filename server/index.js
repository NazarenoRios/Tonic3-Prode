//Configuracion del servidor
const express = require("express");
const path = require("path")

//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition : {
      openapi : "3.0.0",
      info : {
          title : "Node Prode API",
          version : "1.0.0"
      },
  servers : [
      {
          url : "http://localhost:3001/"
      }
  ]
  },
apis : [`${path.join(__dirname, "./routes/*.js")}`], 
}

require("dotenv").config()

const models = require("./models")
const cors = require("cors");

const app = express();
const db = require("./config/db")

const cookieParser = require("cookie-parser")

// Express Route File Requires
const routes = require("./routes");

const metrics_routes=require('./metrics/routes')

   app.use(express.json())
   app.use(cookieParser())
   app.use(express.urlencoded({extended:false}))
   app.use(cors()) 

// Express Routing
app.use("/api", routes)
app.use('/metrics',metrics_routes)
app.use("/api-doc",swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

db.sync({ force: false }).then(() => {
 // start_metrics()
  console.log("db connected");  
  app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
  });
});