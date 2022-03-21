const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./db/configDB");
const logger = require("./middlewares/loggerMiddleware");
const { notFound, errorHandler } = require("./middlewares/error");
const userRouter = require("./routes/usersRoute");
const taskRouter = require("./routes/taskRoute");
dotenv.config();

const Colors = require("colors");

const publicDirectory = path.join(__dirname, "../client/build");

const app = express();
connectDB();

//! app.use(cors()) MUST be BEFORE using routers
app.use(express.json());
app.use(express.static(publicDirectory));
app.use(cors());
app.use(logger);

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`.yellow.bold)
);
