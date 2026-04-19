import axios from "axios";

function StudentTable({ students, editStudent, refresh }) {

  const deleteStudent = (id) => {

    axios.delete(`http://localhost:8080/students/${id}`)
      .then(() => refresh());

  };

  return (

    <table className="table table-striped">

      <thead className="table-dark">

        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>

      </thead>

      <tbody>

        {students.map((s) => (

          <tr key={s.id}>

            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.course}</td>

            <td>

              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => editStudent(s)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteStudent(s.id)}
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default StudentTable;