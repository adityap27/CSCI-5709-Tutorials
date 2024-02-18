import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    axios
      .post("https://express-t4.onrender.com/api/login", data)
      .then((response) => navigate("/user-list"))
      .catch((error) => setErrorMessage(error.response.data.message));
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Email: </label>
          <input id="username" type="email" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" name="password" required />
        </div>
        <input type="submit" name="submit" />
      </form>
      <div className="error">{errorMessage}</div>
    </div>
  );
}
