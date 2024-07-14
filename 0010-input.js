import React, { useState } from "react";

function InputComponent() {
  
  const [mail, setMail] = useState("")

  const handleChange = (e) => setMail(e.target.value)

  const handleClick = () => setMail("")

  return (
    <div>
      <div>User email: {mail} </div>

      <div>
        <input value={mail} onChange={(e) => handleChange(e)} />
      </div>

      <div>
        <button onClick={handleClick} >Clear</button>
      </div>
    </div>
  );
}

export default InputComponent
