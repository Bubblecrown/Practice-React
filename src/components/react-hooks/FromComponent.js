import React, { useState } from "react";

export default function FromComponent() {
  const initialState = { username: "", password: "" };
  const [logIn, setlogIn] = useState(initialState);
  const [account, setAccount] = useState([]);
  return (
    <div>
      <p>Debug {JSON.stringify(logIn)}</p>
      <form action="">
        <input
          type="text"
          placeholder="Username"
          value={logIn.username}
          onChange={(e) => {
            setlogIn({ ...logIn, username: e.target.value });
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={logIn.password}
          onChange={(e) => {
            setlogIn({ ...logIn, password: e.target.value });
          }}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setAccount([...account, { ...logIn, index: account.length }]);
            // alert(JSON.stringify(logIn));
          }}
        >
          Submit
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setlogIn(initialState);
          }}
        >
          Clear
        </button>
      </form>
      <br />

      <ul>
        {account.map(
          (user) => (
            (<li key={user.index}>Username: {user.username} <br /> Password: {user.password}</li>)
          )
        )}
      </ul>
    </div>
  );
}
