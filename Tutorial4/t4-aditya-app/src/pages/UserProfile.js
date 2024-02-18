import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfilePage() {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get("https://express-t4.onrender.com/api/users/" + userId)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setLoading(false);
      });
  }, []);

  function displayValue(key, value) {
    if (key === "picture") {
      return <img src={value} />;
    } else if (key === "friends") {
      return value.map((v) => v.name).join(", ");
    } else if (key === "tags") {
      return value.join(", ");
    } else if (key === "tags") {
      return value.join(", ");
    } else if (key === "isActive") {
        return ""+value;
      } else {
      return value;
    }
  }

  return (
    <>
      <h1>User Profile Page: {userData && userData["name"]}</h1>
      <div className="error">{errorMessage}</div>
      <div>
        {loading ? (
          <p>Loading user data...</p>
        ) : (
          userData && (
            <table>
              <tbody>
                {Object.entries(userData).map(([key, value]) => (
                  <tr key={key}>
                    <td className="user-profile-key">{key}</td>
                    <td>{displayValue(key, value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )}
      </div>
    </>
  );
}
