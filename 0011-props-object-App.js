import EmployeeInfo from "./components/EmployeeInfo";

function App() {
  let employee_bilge = {
    name: "Bilge",
    department: "Sales",
    idx: 101,
    salary: 8500,
  };

  let employee_aykiz = {
    name: "Aykız",
    department: "Marketing",
    idx: 108,
    salary: 9200,
  };

  return (
    <div>
      <EmployeeInfo
        name={employee_bilge.name}
        department={employee_bilge.department}
        idx={employee_bilge.idx}
        salary={employee_bilge.salary}
      />
      <EmployeeInfo
        name={employee_aykiz.name}
        department={employee_aykiz.department}
        idx={employee_aykiz.idx}
        salary={employee_aykiz.salary}
      />
    </div>
  );
}

export default App;
