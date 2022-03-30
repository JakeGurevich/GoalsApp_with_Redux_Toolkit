
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Student = () => {
  const [students, setStudents] = useState([]);
  
  useEffect(async () => {
    try {
      let { data } = await axios.get("http://localhost:5162/api/students");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    // setStudents(data)
  });
 
  return (
    students && students.length < 1
    ?
    (<h2>No Students</h2>)
    :(<div>{JSON.parse(students)}</div>));

  }
export default Student;
