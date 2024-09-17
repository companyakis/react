enum Departments {
    FinTech, //0
    Sales, 
    Finance,
    Accounting,
    IS,
    Operations,
    Marketing,
    Audit,
    HR
}

let myDepartment: Departments = Departments.FinTech

console.log(Departments.HR) // 8

let auditDep = Departments.Audit

enum People {
    Mustafa = 100,
    Aygun,
    Boru,
    Ayhan
}

console.log(People.Ayhan) // 103
