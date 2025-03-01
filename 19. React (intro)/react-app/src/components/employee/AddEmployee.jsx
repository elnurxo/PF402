import { useState } from "react";
import PropTypes from "prop-types";

const AddEmployee = ({ setEmployees }) => {
  const [currentEmployee, setCurrentEmployee] = useState({
    fullName: "",
    salary: "",
    position: "",
    isMarried: false,
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //add new employee
        setEmployees((prevEmployees) => {
          return [...prevEmployees, currentEmployee];
        });
        //form reset - inputs, options
        setCurrentEmployee({
          fullName: "",
          salary: "",
          position: "",
          isMarried: false,
        });
      }}
    >
      <input
        onChange={(e) => {
          setCurrentEmployee((emp) => {
            return { ...emp, fullName: e.target.value };
          });
        }}
        value={currentEmployee.fullName}
        type="text"
        placeholder="enter employee full name"
        required
      />
      <input
        onChange={(e) => {
          setCurrentEmployee((emp) => {
            return { ...emp, salary: e.target.value };
          });
        }}
        value={currentEmployee.salary}
        type="number"
        min={100}
        placeholder="enter employee salary"
        required
      />
      <select
        onChange={(e) => {
          setCurrentEmployee((emp) => {
            return { ...emp, position: e.target.value };
          });
        }}
        value={currentEmployee.position}
        name="position"
      >
        <option value="" disabled>
          select your position
        </option>
        <option value="hr">HR</option>
        <option value="marketing">Marketing</option>
        <option value="it">IT</option>
        <option value="developer">Developer</option>
        <option value="manager">manager</option>
      </select>
      <label htmlFor="isMarried">is Married: </label>
      <input
        onChange={(e) => {
          setCurrentEmployee((emp) => {
            return { ...emp, isMarried: e.target.checked };
          });
        }}
        checked={currentEmployee.isMarried}
        type="checkbox"
        id="isMarried"
      />
      <button type="submit">add employee</button>
    </form>
  );
};

AddEmployee.propTypes = {
  setEmployees: PropTypes.func,
};

export default AddEmployee;
