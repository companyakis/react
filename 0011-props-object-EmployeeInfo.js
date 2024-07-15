import React from 'react'

function EmployeeInfo({name, department, idx, salary}) {
  return (
    <div>
      <p>Employee name: {name}</p>
      <p>Employee department: {department}</p>
      <p>Employee ID: {idx}</p>
      <p>Employee salary: {salary}</p>
    </div>
  )
}

export default EmployeeInfo
