import React, { useState } from "react";

const initialFormState = { username: "", password: "", email: "" };

function App() {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Register</h2>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          gridGap: "5px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 3)}
    </div>
  );
}

export default App;
