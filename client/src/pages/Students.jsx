import { SettingsInputAntenna } from '@mui/icons-material'
import React,{ useState, useEffect} from 'react'
import axios from 'axios'

const Student = () => {
    const [students,setStudents]=useState([])

    useEffect(async() => {
        let {data}=await axios.get('http://localhost:5162/api/students')
        console.log(data)
       // setStudents(data)
    })
  return (
    <div>Students</div>
  )
}

export default Student