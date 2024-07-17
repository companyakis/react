import React from 'react'
import PropTypes from "prop-types" 

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

EmployeeInfo.propTypes = {
  name: PropTypes.string,
  department: PropTypes.string,
  idx: PropTypes.number,
  salary: PropTypes.number
}

export default EmployeeInfo
