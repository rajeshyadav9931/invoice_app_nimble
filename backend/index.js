require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { InvoiceRouter } = require("./routes/Invoice");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MongoURI, {
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
 

  app.listen(process.env.PORT, async () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });

