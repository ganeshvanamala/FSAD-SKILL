import { useState, useEffect } from "react";
import axios from "axios";

function StudentForm({ selectedStudent, refresh }) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (student.id) {

      axios.put(`http://localhost:8080/students/${student.id}`, student)
        .then(() => refresh());

    } else {

      axios.post("http://localhost:8080/students", student)
        .then(() => refresh());
    }

    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <div className="card p-3 mb-3">

      <h4>{student.id ? "Update Student" : "Add Student"}</h4>

      <form onSubmit={submit}>

        <div className="mb-2">
          <input
            className="form-control"
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">
          {student.id ? "Update" : "Add"}
        </button>

      </form>

    </div>
  );
}

export default StudentForm;