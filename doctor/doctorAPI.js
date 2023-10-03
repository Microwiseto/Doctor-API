const express = require("express");
const bodyParser = require("body-parser");
const doctorRouter = require("./src/routes/doctorRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", doctorRouter);

app.listen(PORT, () =>{
    console.log(`API is listening on port ${PORT}`);
});