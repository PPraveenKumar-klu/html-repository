import React from "react";
import { useState } from "react";
import axios from "axios";

const reqresURL = "https://reqres.in/api/users";
const AxiosUserAPI = () => {
  const [users, setUsers] = useState([]);
  const urlHandler = async () => {
    const response = await axios.get(reqresURL, {
      headers: { "x-api-key": "reqres-free-v1" },
    });
    const newData = response.data.data;
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
            <td>id</td>
            <td>first Name</td>
            <td>last Name</td>
            <td>Email</td>
            <td>Avatar</td>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td>{users.id}</td>
              <td>{users.first_name}</td>
              <td>{users.last_name}</td>
              <td>{users.email}</td>
              <td>
                <img src={users.avatar} alt="avatar" width="50" height="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AxiosUserAPI;
