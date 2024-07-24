import React, { useState } from 'react'

function FormUsage() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("0")
  return (

    <div style={{textAlign:"center"}}>

        <div>Name: {name}, LastName: {lastName} and Gender: {gender === "0" ? "Male": "Female"}</div>

        <br/>

        <div>
            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <br />
            <input placeholder='LastName' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
        </div>

        <br/>
        <div>Gender Selection</div>

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="0">Male</option>
            <option value="1">Female</option>
        </select>
      
    </div>
  )
}

export default FormUsage
