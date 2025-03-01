import { useState } from "react";
import AddEmployee from "./components/employee/AddEmployee";
import EmpolyeesList from "./components/employee/EmpolyeesList";
import EmployeeItem from "./components/employee/EmployeeItem";

function App() {
  const [employees, setEmployees] = useState([]);
  return (
    <>
      <h1>Employee management in React</h1>
      <AddEmployee setEmployees={setEmployees} />
      <hr />
      <EmpolyeesList>
        {employees &&
          employees.map((employee, idx) => {
            return (
              <EmployeeItem
                key={idx}
                fullName={employee.fullName}
                position={employee.position}
                salary={employee.salary}
                isMarried={employee.isMarried}
              />
            );
          })}
      </EmpolyeesList>
    </>
  );
}

export default App;
