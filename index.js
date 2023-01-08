require('dotenv').config()
const express = require("express");
const logger = require("./logger");
const path = require("path");
const user_routes = require("./routes/user-routes");
const batch_routes = require("./routes/batch-routes");
const course_routes = require("./routes/course-routes");
const auth = require("./middleware/auth");
const mongoose = require("mongoose");


const app = express();
const port = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/batchStudent-ObjectBox")
  .then(() => {
    console.log("Connected to MongoDB server");
    app.listen(port, () => {
      console.log(`App is running in ${port}`);
    });
  })
  .catch((err) => next(err)); 

// logger
// 1. Application level middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  logger.log(`${req.method} ${req.path}`);
  next();
});

// 2. Express defined middleware
app.use(express.json());

app.get("^/$|/index(.html)?", (req, res) => {
  res.send("Hello World")
//   res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 3. Router level middleware
app.use("/users", user_routes);
app.use("/batch", batch_routes);
app.use("/course", course_routes);
// app.use(auth.verifyUser);
// app.use("/profile", profile_routes);


// 4. Error handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  if (res.statusCode == 200) res.status(500)
  res.json({ err: err.message });
});

