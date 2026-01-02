
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());   // ADD THIS

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use(express.static("public"));

const adminRoute = require("./routes/admin");
const verifyRoute = require("./routes/verify");

app.use("/admin", adminRoute);
app.use("/verify", verifyRoute);


app.get("/", (req, res) => {
  res.send("Fake Medicine Detection API Running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
