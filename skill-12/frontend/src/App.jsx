import { useEffect, useState } from "react";
import axios from "axios";

import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = () => {

    axios.get("http://localhost:8080/students")
      .then((res) => setStudents(res.data));

  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (

    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Student Management System
      </h2>

      <StudentForm
        selectedStudent={selectedStudent}
        refresh={fetchStudents}
      />

      <StudentTable
        students={students}
        editStudent={setSelectedStudent}
        refresh={fetchStudents}
      />

    </div>

  );
}

export default App;