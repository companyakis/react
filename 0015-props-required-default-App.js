import EmployeeInfo from "./components/EmployeeInfo";

function App() {
  return (
    <div>
      <EmployeeInfo name="Mustafa" department="FinTech" idx={1} />

      <EmployeeInfo name="Bengü" department="Operations" idx={32} salary={6500} marriage={"Divorced"} />
    </div>
  );
}

export default App;
