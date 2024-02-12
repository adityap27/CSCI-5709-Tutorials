import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../validations.js";


export default function RegistrationPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    // All are required validation
    if (data["first-name"] !== "" || data["last-name"] || data["email"] || data["password"] || data["confirm-password"]) {
        setErrorMessage("All fields are requried!");
        return;
    }

    // Validate First Name
    let [isValid, errorMsg] = validateName(data["first-name"], "First Name");
    if (!isValid) {
      setErrorMessage(errorMsg);
      return;
    }

    // Validate Last Name
    [isValid, errorMsg] = validateName(data["last-name"], "Last Name");
    if (!isValid) {
      setErrorMessage(errorMsg);
      return;
    }

    // Validate Email
    [isValid, errorMsg] = validateEmail(data["email"]);
    if (!isValid) {
      setErrorMessage(errorMsg);
      return;
    }

    // Validate Password
    [isValid, errorMsg] = validatePassword(data["password"]);
    if (!isValid) {
      setErrorMessage(errorMsg);
      return;
    }

    // Validate Confirm Password
    if (data.password !== data["confirm-password"]) {
      setErrorMessage("Confirm password does not match with Password field!");
      return;
    }

    setErrorMessage("");
    navigate("/welcome",{state: {data:data}});
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile Registration Page</h2>
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input id="first-name" type="text" name="first-name" />
      </div>

      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input id="last-name" type="text" name="last-name" />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input id="email" type="text" name="email" />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" name="password" />
      </div>

      <div>
        <label htmlFor="confirm-password">Confirm Password: </label>
        <input id="confirm-password" type="password" name="confirm-password" />
      </div>

      <input type="submit" value="Submit" />
      <br />
      <div className="errorDiv">{errorMessage}</div>
    </form>
  );
}
