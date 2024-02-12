import { useLocation } from "react-router-dom";

export default function WelcomePage() {
  const location = useLocation();

  return (
    <>
      <h2>Profile Details Page</h2>
      <h3>Welcome {location.state.data["first-name"]}!</h3>
      <h3>Your details:</h3>
      <p>First Name: {location.state.data["first-name"]}</p>
      <p>Last Name: {location.state.data["last-name"]}</p>
      <p>Email: {location.state.data["email"]}</p>
    </>
  );
}
