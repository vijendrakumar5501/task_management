const express = require("express");
const app = express();
const task_routes=require("./routes/task_routes")
const cors = require("cors");
require("./config/db")
const port=8000

const path = require("path");



const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");





app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 50000,
  })
);




app.use("/apiv1", task_routes);

app.get("/",(req,res)=>{
    res.send("hi home page")
})



app.listen(port, () => {
  console.log(`app is rnning on port ${port}`);
});
