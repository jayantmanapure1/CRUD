import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:3003/users");
      setUsers(result.data.reverse());
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const deleteUser = async id => {
    try {
      await axios.delete(`http://localhost:3003/users/${id}`);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="display-4 text-center mb-4">Data Table</h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary ms-2" to={`/User/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary ms-2"
                    to={`/update/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
