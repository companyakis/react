import React from 'react'
import PropTypes from "prop-types" 

function EmployeeInfo({name, department, idx, salary, marriage}) {
  return (
    <div>
      <p>Employee name: {name}</p>
      <p>Employee department: {department}</p>
      <p>Employee ID: {idx}</p>
      <p>Employee salary: {salary}</p>
      <p>Employee marriage: {marriage}</p>
    </div>
  )
}

EmployeeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  salary: PropTypes.number, // Not required here
  marriage: PropTypes.string // Not required here
}

EmployeeInfo.defaultProps = {
  salary: 0,
  marriage: "No information"
}

export default EmployeeInfo
