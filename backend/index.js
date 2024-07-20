require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { InvoiceRouter } = require("./routes/Invoice");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://rajeshkumaryadav9931grd:i6plmCMGbZF89r8K@cluster0.81cg2je.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("DB is connected");
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Home Page" });
});

app.use("/invoice", InvoiceRouter);
 

  app.listen(8080, async () => {
    console.log(`Server is running at port 8080`);
  });

