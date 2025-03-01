import React, { useState } from "react";

const Students = () => {
  const [student, setStudent] = useState({ fullName: "", age: "" });

  const [students, setStudents] = useState([]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStudents((prevStudents) => {
            return [...prevStudents, student];
          });
          setStudent({ fullName: "", age: "" });
        }}
      >
        <input
          onChange={(e) => {
            setStudent((currentStudent) => {
              return { ...currentStudent, fullName: e.target.value };
            });
          }}
          value={student.fullName}
          type="text"
          required
          placeholder="enter your name"
        />
        <input
          onChange={(e) => {
            setStudent((currentStudent) => {
              return { ...currentStudent, age: e.target.value };
            });
          }}
          type="number"
          required
          value={student.age}
          min={17}
          placeholder="enter your age"
        />
        <button>add</button>
      </form>
      <hr />
      <ul>
        {students &&
          students.map((stud, idx) => {
            return (
              <li key={idx}>
                {stud.fullName}, <i>{stud.age}</i>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Students;
