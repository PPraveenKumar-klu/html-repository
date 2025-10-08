import React from "react";
import { useState } from "react";
import axios from "axios";
// const url = "https://jsonplaceholder.typicode.com/users";
const reqresURL = "https://reqres.in/api/users?page=2";
const AxiosAPIExample = () => {
  const [users, setUsers] = useState([]);
  const urlHandler = async () => {
    const response = await axios.get(url);
    const newData = response.data;
    setUsers(newData);
    console.log(newData);
  };
  return (
    <>
      <h1>From AxiosAPIExample</h1>
      <button className="btn btn-primary" type="button" onClick={urlHandler}>
        Fetch Data
      </button>
      <table className="table table-striped table-bordered ms-5 me-5 w-75 mt-3">
        <thead className="table-warning">
          <tr>
            <td>ID</td>
            <td>name</td>
            <td>userName</td>
            <td>email</td>
            <td>Street Address</td>
            <td>Geo Location</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>
                {user.address.geo.lat}, {user.address.geo.lng}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AxiosAPIExample;
