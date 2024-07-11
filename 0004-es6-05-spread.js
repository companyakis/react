const numbers = [1, 2, 3, 4, 5]

const newNumbers = [...numbers, 11, 46, 38]

console.log(newNumbers); // [1, 2, 3, 4, 5, 11, 46, 38]

const user = { name: "Mustafa", age: 14}

const userPlus = {...user, country: "Turkiye"}

console.log(userPlus) // { name: 'Mustafa', age: 14, country: 'Turkiye' }

const personInfo = [
    {
        eName: "Kağan",
        eDepartment: "FinTech",
        eSalary: 9000,
        eAge: 46
    },

    {
        eName: "Bilge",
        eDepartment: "Sales",
        eSalary: 7600,
        eAge: 37
    }
]

const employees = [...personInfo]

console.log(employees)

