import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";


export default function Home() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp);
      });
    });
  }, []);
  console.warn(users);

  return (
    <div>
      <h1>Hello world </h1>
      <br></br>
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
          )
        }
       </tbody>
      </table>

      
      <Link to="contact">contact </Link>
      <Link to="other">other </Link>
    </div>
  );
}
