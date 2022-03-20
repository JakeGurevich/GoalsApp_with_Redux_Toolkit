const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "C#",lector:"Elias" },
  { id: 2, name: "Javascript",lector:"Elias"  },
 
  { id: 4, name: "HTML" ,lector:"Elias" },
  { id: 5, name: "Java" ,lector:"Elias" },
];

router.get("/delay/:time", (req, res) => {
    let delay=req.params.time||1000
    
 setTimeout(()=>{

     if (courses) {
       
       res.send(courses);
     } else {
       console.log("not found");
       res.status(400).send("Not found");
     }
 },delay)
});

router.get("/", (req, res) => {
   
    
 
       
       res.send(courses);
   
});


router.get("/:id", (req, res) => {
  let course = courses.find((course) => course.id === Number(req.params.id));
  if (course) {
    console.log(course);
    res.send(course);
  } else {
    console.log("not found");
    res.status(400).send("Not found");
  }
});
module.exports = router;