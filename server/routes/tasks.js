const express = require("express");
const router = express.Router();

const tasks = [
  { id: 1, name: "Learn C#" },
  { id: 2, name: "Learn Javascript" },
  { id: 3, name: "Buy milk" },
  { id: 4, name: "Drink water" },
];

router.get("/", (req, res) => {
 
  if (tasks) {
    
    res.send(tasks);
  } else {
    console.log("not found");
    res.status(400).send("Not found");
  }
});

router.get("/:id", (req, res) => {
  let task = tasks.find((task) => task.id === Number(req.params.id));
  if (task) {
    console.log(task);
    res.send(task);
  } else {
    console.log("not found");
    res.status(400).send("Not found");
  }
});
module.exports = router;
