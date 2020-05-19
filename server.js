const express = require("express");
const app = express();
const morgan = require("morgan");

const home = require("./routes/home");
const path = require("path");

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true })); //key=value&key=value as req.body

// serves the built version of your react app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(morgan("tiny")); // HTTP request logger

// Routes
app.use("/api/home", home);

// App
app.get("/api/status", (req, res) => {
  res.json({ status: "Running" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
