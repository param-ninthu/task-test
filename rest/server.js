const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api/events", require("./routes/eventRoutes"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
