const personInfo = ["Kağan", "FinTech", 9000, 46]

const [name, department, salary, age] = personInfo

console.log(salary) // 9000

const employeeInfo = {
    eName: "Kağan",
    eDepartment: "FinTech",
    eSalary: 9000,
    eAge: 46
}

const { eName, eDepartment, eSalary, eAge } = employeeInfo

console.log(`Salary: ${eSalary}`) // Salary: 9000
